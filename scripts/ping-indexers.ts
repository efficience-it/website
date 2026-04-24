import { execSync } from "node:child_process";
import crypto from "node:crypto";

const BASE_URL = "https://www.itefficience.com";
const HOST = "www.itefficience.com";

function getChangedFiles(): string[] {
  const previousSha = process.env.PREVIOUS_SHA;
  const range = previousSha ? `${previousSha}..HEAD` : "HEAD~1..HEAD";
  try {
    const out = execSync(`git diff --name-only ${range}`, { encoding: "utf8" });
    return out.split("\n").filter(Boolean);
  } catch {
    return [];
  }
}

function filesToUrls(files: string[]): string[] {
  const urls = new Set<string>();
  for (const f of files) {
    const blogMatch = f.match(/^content\/blog\/(.+)\.mdx$/);
    if (blogMatch) {
      urls.add(`${BASE_URL}/article/${blogMatch[1]}`);
      continue;
    }
    if (f === "src/app/page.tsx") {
      urls.add(`${BASE_URL}/`);
      continue;
    }
    const pageMatch = f.match(/^src\/app\/(.+)\/page\.tsx$/);
    if (pageMatch) {
      const segment = pageMatch[1];
      if (segment.includes("[") || segment.includes("(")) continue;
      urls.add(`${BASE_URL}/${segment}`);
    }
  }
  return [...urls];
}

function base64url(input: string | Buffer): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=+$/, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function pingIndexNow(urls: string[], key: string): Promise<void> {
  const keyLocation = `${BASE_URL}/${key}.txt`;
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ host: HOST, key, keyLocation, urlList: urls }),
  });
  const body = await res.text();
  console.log(`IndexNow: ${res.status} ${res.statusText} ${body}`);
}

async function getGoogleAccessToken(serviceAccountJson: string): Promise<string> {
  const creds = JSON.parse(serviceAccountJson);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const iat = Math.floor(Date.now() / 1000);
  const payload = base64url(
    JSON.stringify({
      iss: creds.client_email,
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
      iat,
      exp: iat + 3600,
    }),
  );
  const input = `${header}.${payload}`;
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(input);
  const signature = signer
    .sign(creds.private_key, "base64")
    .replace(/=+$/, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  const jwt = `${input}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });
  const json = (await res.json()) as { access_token?: string; error?: string };
  if (!json.access_token) {
    throw new Error(`Google auth failed: ${JSON.stringify(json)}`);
  }
  return json.access_token;
}

async function pingGoogle(urls: string[], serviceAccountJson: string): Promise<void> {
  const token = await getGoogleAccessToken(serviceAccountJson);
  for (const url of urls) {
    const res = await fetch(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, type: "URL_UPDATED" }),
      },
    );
    console.log(`Google [${url}]: ${res.status} ${res.statusText}`);
  }
}

async function main(): Promise<void> {
  const files = getChangedFiles();
  const urls = filesToUrls(files);
  if (urls.length === 0) {
    console.log("No URL to ping.");
    return;
  }
  console.log(`Pinging ${urls.length} URL(s):`);
  for (const u of urls) console.log(`  ${u}`);

  const indexNowKey = process.env.INDEXNOW_KEY;
  if (indexNowKey) {
    await pingIndexNow(urls, indexNowKey);
  } else {
    console.log("INDEXNOW_KEY not set, skipping IndexNow.");
  }

  const googleCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (googleCreds) {
    await pingGoogle(urls, googleCreds);
  } else {
    console.log("GOOGLE_SERVICE_ACCOUNT_JSON not set, skipping Google Indexing.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

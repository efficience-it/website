import { execSync } from "node:child_process";
import crypto from "node:crypto";

export const BASE_URL = "https://www.itefficience.com";

const ZERO_SHA = "0000000000000000000000000000000000000000";

export function getChangedFiles(): string[] {
  const previousSha = process.env.PREVIOUS_SHA;
  const hasValidPrevious = previousSha && previousSha !== ZERO_SHA;
  const range = hasValidPrevious ? `${previousSha}..HEAD` : "HEAD~1..HEAD";
  console.log(`Diff range: ${range}`);
  try {
    const out = execSync(`git diff --name-only ${range}`, { encoding: "utf8" });
    const files = out.split("\n").filter(Boolean);
    console.log(`Files changed: ${files.length}`);
    for (const f of files.slice(0, 50)) console.log(`  ${f}`);
    if (files.length > 50) console.log(`  ... (${files.length - 50} more)`);
    return files;
  } catch (err) {
    console.error(`git diff failed: ${(err as Error).message}`);
    return [];
  }
}

export function filesToUrls(files: string[]): string[] {
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

export function base64url(input: string | Buffer): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=+$/, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export async function pingIndexNow(urls: string[], key: string): Promise<void> {
  const keyLocation = `${BASE_URL}/${key}.txt`;
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      host: new URL(BASE_URL).host,
      key,
      keyLocation,
      urlList: urls,
    }),
  });
  const body = await res.text();
  console.log(`IndexNow: ${res.status} ${res.statusText} ${body}`);
  if (!res.ok) {
    throw new Error(`IndexNow ping failed with status ${res.status}`);
  }
}

interface ServiceAccountCreds {
  client_email: string;
  private_key: string;
}

export async function getGoogleAccessToken(serviceAccountJson: string): Promise<string> {
  const creds = JSON.parse(serviceAccountJson) as ServiceAccountCreds;
  if (!creds.client_email || !creds.private_key) {
    throw new Error("GOOGLE_SERVICE_ACCOUNT_JSON missing client_email or private_key");
  }
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

export async function pingGoogle(urls: string[], serviceAccountJson: string): Promise<void> {
  const token = await getGoogleAccessToken(serviceAccountJson);
  let success = 0;
  let failure = 0;
  let rateLimited = 0;
  for (const url of urls) {
    try {
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
      if (res.ok) success++;
      else if (res.status === 429) rateLimited++;
      else failure++;
    } catch (err) {
      console.error(`Google [${url}]: ${(err as Error).message}`);
      failure++;
    }
  }
  console.log(
    `Google summary: ${success} ok, ${rateLimited} rate-limited, ${failure} failed`,
  );
  if (failure > 0) {
    throw new Error(`Google Indexing: ${failure}/${urls.length} URL(s) failed`);
  }
}

export async function run(): Promise<void> {
  const files = getChangedFiles();
  const urls = filesToUrls(files);
  if (urls.length === 0) {
    console.log("No URL to ping.");
    return;
  }
  console.log(`Pinging ${urls.length} URL(s):`);
  for (const u of urls) console.log(`  ${u}`);

  const errors: string[] = [];

  const indexNowKey = process.env.INDEXNOW_KEY;
  if (indexNowKey) {
    try {
      await pingIndexNow(urls, indexNowKey);
    } catch (err) {
      errors.push(`IndexNow: ${(err as Error).message}`);
    }
  } else {
    console.log("INDEXNOW_KEY not set, skipping IndexNow.");
  }

  const googleCreds = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (googleCreds) {
    try {
      await pingGoogle(urls, googleCreds);
    } catch (err) {
      errors.push(`Google: ${(err as Error).message}`);
    }
  } else {
    console.log("GOOGLE_SERVICE_ACCOUNT_JSON not set, skipping Google Indexing.");
  }

  if (errors.length > 0) {
    throw new Error(errors.join("; "));
  }
}

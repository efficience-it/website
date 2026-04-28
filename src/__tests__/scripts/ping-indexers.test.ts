import crypto from "node:crypto";
import { execSync } from "node:child_process";

jest.mock("node:child_process", () => ({
  execSync: jest.fn(),
}));

const mockedExecSync = execSync as jest.MockedFunction<typeof execSync>;

import {
  base64url,
  filesToUrls,
  getChangedFiles,
  getGoogleAccessToken,
  pingIndexNow,
  pingGoogle,
  run,
  BASE_URL,
} from "../../../scripts/lib/ping-indexers";

const TEST_KEY_PEM = crypto
  .generateKeyPairSync("rsa", { modulusLength: 2048 })
  .privateKey.export({ type: "pkcs8", format: "pem" })
  .toString();

function mockResponse(body: unknown, status = 200): {
  ok: boolean;
  status: number;
  statusText: string;
  text: () => Promise<string>;
  json: () => Promise<unknown>;
} {
  const text = typeof body === "string" ? body : JSON.stringify(body);
  return {
    ok: status >= 200 && status < 300,
    status,
    statusText: `Status ${status}`,
    text: async () => text,
    json: async () => (typeof body === "string" ? JSON.parse(text) : body),
  };
}

beforeEach(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
  jest.spyOn(console, "error").mockImplementation(() => {});
  mockedExecSync.mockReset();
  mockedExecSync.mockReturnValue("");
});

afterEach(() => {
  jest.restoreAllMocks();
  delete (globalThis as { fetch?: unknown }).fetch;
  delete process.env.PREVIOUS_SHA;
  delete process.env.INDEXNOW_KEY;
  delete process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
});

describe("filesToUrls", () => {
  it.each<[string, string, string[]]>([
    [
      "blog MDX article",
      "content/blog/mon-article.mdx",
      [`${BASE_URL}/article/mon-article`],
    ],
    [
      "blog MDX with slashes in slug",
      "content/blog/category/sub-article.mdx",
      [`${BASE_URL}/article/category/sub-article`],
    ],
    [
      "root page",
      "src/app/page.tsx",
      [`${BASE_URL}/`],
    ],
    [
      "static page nested",
      "src/app/agence-symfony-lille/page.tsx",
      [`${BASE_URL}/agence-symfony-lille`],
    ],
    [
      "deeply nested static page",
      "src/app/blog/symfony/page.tsx",
      [`${BASE_URL}/blog/symfony`],
    ],
    [
      "dynamic route ignored",
      "src/app/article/[slug]/page.tsx",
      [],
    ],
    [
      "route group ignored",
      "src/app/(marketing)/page.tsx",
      [],
    ],
    [
      "non-page file in app ignored",
      "src/app/agence-symfony-lille/layout.tsx",
      [],
    ],
    [
      "non-mdx blog file ignored",
      "content/blog/draft.md",
      [],
    ],
    [
      "unrelated file ignored",
      "src/lib/blog.ts",
      [],
    ],
  ])("maps %s correctly", (_label, file, expected) => {
    expect(filesToUrls([file])).toEqual(expected);
  });

  it("dedupes URLs across multiple files", () => {
    const urls = filesToUrls([
      "content/blog/duplicate.mdx",
      "content/blog/duplicate.mdx",
      "src/app/page.tsx",
      "src/app/page.tsx",
    ]);
    expect(urls).toEqual([
      `${BASE_URL}/article/duplicate`,
      `${BASE_URL}/`,
    ]);
  });

  it("returns empty array for empty input", () => {
    expect(filesToUrls([])).toEqual([]);
  });
});

describe("base64url", () => {
  it.each<[string, string]>([
    ["empty string", ""],
    ["simple ascii", "hello"],
    ["JSON payload", JSON.stringify({ alg: "RS256", typ: "JWT" })],
    ["string with + / =", "subjects?_=" + "+/+/=="],
    ["unicode", "élégant - café"],
  ])("round-trips %s", (_label, input) => {
    const encoded = base64url(input);
    expect(encoded).not.toMatch(/[+/=]/);
    expect(Buffer.from(encoded, "base64url").toString("utf8")).toBe(input);
  });

  it("encodes a Buffer the same way as its string equivalent", () => {
    const value = "abcdef";
    expect(base64url(Buffer.from(value))).toBe(base64url(value));
  });
});

describe("getGoogleAccessToken", () => {
  it("throws when client_email is missing", async () => {
    await expect(
      getGoogleAccessToken(JSON.stringify({ private_key: TEST_KEY_PEM })),
    ).rejects.toThrow(/missing client_email or private_key/);
  });

  it("throws when private_key is missing", async () => {
    await expect(
      getGoogleAccessToken(JSON.stringify({ client_email: "x@y.iam" })),
    ).rejects.toThrow(/missing client_email or private_key/);
  });

  it("posts a well-formed JWT and returns access_token", async () => {
    const fetchMock = jest.fn(async () =>
      mockResponse({ access_token: "tok-123" }),
    );
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    const token = await getGoogleAccessToken(
      JSON.stringify({
        client_email: "svc@project.iam.gserviceaccount.com",
        private_key: TEST_KEY_PEM,
      }),
    );

    expect(token).toBe("tok-123");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://oauth2.googleapis.com/token");

    const params = new URLSearchParams(init.body as string);
    expect(params.get("grant_type")).toBe(
      "urn:ietf:params:oauth:grant-type:jwt-bearer",
    );
    const jwt = params.get("assertion");
    expect(jwt).toBeTruthy();
    const [headerB64, payloadB64, signatureB64] = jwt!.split(".");
    expect(headerB64).toBeTruthy();
    expect(payloadB64).toBeTruthy();
    expect(signatureB64).toBeTruthy();

    const header = JSON.parse(Buffer.from(headerB64, "base64url").toString());
    expect(header).toEqual({ alg: "RS256", typ: "JWT" });

    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString());
    expect(payload).toMatchObject({
      iss: "svc@project.iam.gserviceaccount.com",
      scope: "https://www.googleapis.com/auth/indexing",
      aud: "https://oauth2.googleapis.com/token",
    });
    expect(typeof payload.iat).toBe("number");
    expect(payload.exp).toBe(payload.iat + 3600);
  });

  it("throws when the token endpoint returns no access_token", async () => {
    (globalThis as { fetch?: unknown }).fetch = jest.fn(async () =>
      mockResponse({ error: "invalid_grant" }, 400),
    );
    await expect(
      getGoogleAccessToken(
        JSON.stringify({
          client_email: "svc@project.iam.gserviceaccount.com",
          private_key: TEST_KEY_PEM,
        }),
      ),
    ).rejects.toThrow(/Google auth failed/);
  });
});

describe("pingIndexNow", () => {
  it("posts the URLs and resolves on 2xx", async () => {
    const fetchMock = jest.fn(async () => mockResponse("OK"));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await pingIndexNow([`${BASE_URL}/a`, `${BASE_URL}/b`], "secret-key");

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.indexnow.org/indexnow");
    const body = JSON.parse(init.body as string);
    expect(body).toEqual({
      host: "www.itefficience.com",
      key: "secret-key",
      keyLocation: `${BASE_URL}/secret-key.txt`,
      urlList: [`${BASE_URL}/a`, `${BASE_URL}/b`],
    });
  });

  it("throws on non-2xx response", async () => {
    (globalThis as { fetch?: unknown }).fetch = jest.fn(async () =>
      mockResponse("Forbidden", 403),
    );
    await expect(
      pingIndexNow([`${BASE_URL}/a`], "k"),
    ).rejects.toThrow(/IndexNow ping failed with status 403/);
  });
});

describe("pingGoogle", () => {
  const creds = JSON.stringify({
    client_email: "svc@project.iam.gserviceaccount.com",
    private_key: TEST_KEY_PEM,
  });

  function tokenResponse() {
    return mockResponse({ access_token: "tok" });
  }

  it("publishes each URL and succeeds when all return ok", async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce(tokenResponse())
      .mockResolvedValue(mockResponse("{}"));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await pingGoogle([`${BASE_URL}/a`, `${BASE_URL}/b`], creds);

    expect(fetchMock).toHaveBeenCalledTimes(3);
    const publishCall = fetchMock.mock.calls[1] as unknown as [string, RequestInit];
    expect(publishCall[0]).toBe(
      "https://indexing.googleapis.com/v3/urlNotifications:publish",
    );
    expect(JSON.parse(publishCall[1].body as string)).toEqual({
      url: `${BASE_URL}/a`,
      type: "URL_UPDATED",
    });
  });

  it("throws when any URL fails", async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce(tokenResponse())
      .mockResolvedValueOnce(mockResponse("{}"))
      .mockResolvedValueOnce(mockResponse("err", 500));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await expect(
      pingGoogle([`${BASE_URL}/a`, `${BASE_URL}/b`], creds),
    ).rejects.toThrow(/Google Indexing: 1\/2 URL\(s\) failed/);
  });

  it("counts 429 as rate-limited rather than failure", async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce(tokenResponse())
      .mockResolvedValueOnce(mockResponse("rate", 429));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await expect(pingGoogle([`${BASE_URL}/a`], creds)).resolves.toBeUndefined();
  });

  it("counts a thrown fetch as failure", async () => {
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce(tokenResponse())
      .mockRejectedValueOnce(new Error("network down"));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await expect(pingGoogle([`${BASE_URL}/a`], creds)).rejects.toThrow(
      /Google Indexing: 1\/1 URL\(s\) failed/,
    );
  });
});

describe("getChangedFiles", () => {
  it("returns an empty list when git diff fails", () => {
    mockedExecSync.mockImplementation(() => {
      throw new Error("not a git repo");
    });
    const errSpy = jest.spyOn(console, "error");
    expect(getChangedFiles()).toEqual([]);
    expect(errSpy).toHaveBeenCalledWith(
      expect.stringContaining("git diff failed: not a git repo"),
    );
  });

  it("uses HEAD~1..HEAD when PREVIOUS_SHA is the zero SHA", () => {
    process.env.PREVIOUS_SHA = "0000000000000000000000000000000000000000";
    mockedExecSync.mockReturnValue("a.ts\nb.ts\n");
    expect(getChangedFiles()).toEqual(["a.ts", "b.ts"]);
    expect(mockedExecSync).toHaveBeenCalledWith(
      "git diff --name-only HEAD~1..HEAD",
      expect.objectContaining({ encoding: "utf8" }),
    );
  });

  it("uses PREVIOUS_SHA..HEAD when set to a real SHA", () => {
    process.env.PREVIOUS_SHA = "abc123";
    mockedExecSync.mockReturnValue("foo.ts\n");
    expect(getChangedFiles()).toEqual(["foo.ts"]);
    expect(mockedExecSync).toHaveBeenCalledWith(
      "git diff --name-only abc123..HEAD",
      expect.objectContaining({ encoding: "utf8" }),
    );
  });

  it("logs truncation when more than 50 files changed", () => {
    const many = Array.from({ length: 55 }, (_, i) => `f${i}.ts`).join("\n");
    mockedExecSync.mockReturnValue(many);
    const logSpy = jest.spyOn(console, "log");
    const files = getChangedFiles();
    expect(files).toHaveLength(55);
    expect(logSpy).toHaveBeenCalledWith("  ... (5 more)");
  });
});

describe("run", () => {
  it("logs and returns when no URLs are produced", async () => {
    mockedExecSync.mockReturnValue("");
    const logSpy = jest.spyOn(console, "log");
    await run();
    expect(logSpy).toHaveBeenCalledWith("No URL to ping.");
  });

  it("skips both providers when env vars are not set", async () => {
    mockedExecSync.mockReturnValue("content/blog/x.mdx\n");
    const fetchMock = jest.fn();
    (globalThis as { fetch?: unknown }).fetch = fetchMock;
    const logSpy = jest.spyOn(console, "log");

    await run();

    expect(fetchMock).not.toHaveBeenCalled();
    expect(logSpy.mock.calls.flat()).toEqual(
      expect.arrayContaining([
        "INDEXNOW_KEY not set, skipping IndexNow.",
        "GOOGLE_SERVICE_ACCOUNT_JSON not set, skipping Google Indexing.",
      ]),
    );
  });

  it("calls IndexNow when INDEXNOW_KEY is set", async () => {
    mockedExecSync.mockReturnValue("content/blog/x.mdx\n");
    process.env.INDEXNOW_KEY = "key-abc";
    const fetchMock = jest.fn(async () => mockResponse("OK"));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await run();

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.indexnow.org/indexnow",
      expect.any(Object),
    );
  });

  it("collects errors from both providers without throwing immediately", async () => {
    mockedExecSync.mockReturnValue("content/blog/x.mdx\n");
    process.env.INDEXNOW_KEY = "key-abc";
    process.env.GOOGLE_SERVICE_ACCOUNT_JSON = JSON.stringify({
      client_email: "svc@p.iam",
      private_key: TEST_KEY_PEM,
    });
    const fetchMock = jest
      .fn()
      .mockResolvedValueOnce(mockResponse("err", 500))
      .mockResolvedValueOnce(mockResponse({ error: "x" }, 400));
    (globalThis as { fetch?: unknown }).fetch = fetchMock;

    await expect(run()).rejects.toThrow(/IndexNow[\s\S]*Google/);
  });
});

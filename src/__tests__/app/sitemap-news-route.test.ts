/** @jest-environment jsdom */

import { GET } from "@/app/sitemap-news.xml/route";
import { getAllPosts } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

jest.mock("@/lib/blog", () => ({
  getAllPosts: jest.fn(),
}));

function makePost(overrides: Partial<BlogPost>): BlogPost {
  return {
    slug: "post-test",
    title: "Titre test",
    date: "2026-05-05T10:00:00.000Z",
    author: "Auteur",
    category: "Formation",
    kind: "blog",
    excerpt: "Excerpt",
    content: "Contenu",
    wordCount: 1200,
    ...overrides,
  };
}

describe("sitemap-news.xml route", () => {
  beforeAll(() => {
    class TestResponse {
      private readonly body: string;
      readonly headers: Headers;

      constructor(body: string, init?: { headers?: Record<string, string> }) {
        this.body = body;
        this.headers = new Headers(init?.headers);
      }

      async text() {
        return this.body;
      }
    }

    Object.defineProperty(globalThis, "Response", {
      value: TestResponse,
      configurable: true,
      writable: true,
    });
  });

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-05-05T12:00:00.000Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it("includes only news posts published within 48 hours", async () => {
    const mockedGetAllPosts = getAllPosts as jest.MockedFunction<typeof getAllPosts>;
    mockedGetAllPosts.mockReturnValue([
      makePost({
        slug: "news-recent",
        title: "News récente",
        kind: "news",
        date: "2026-05-05T10:00:00.000Z",
      }),
      makePost({
        slug: "news-old",
        title: "News ancienne",
        kind: "news",
        date: "2026-05-02T11:59:59.000Z",
      }),
      makePost({
        slug: "tech-recent",
        title: "Tech récente",
        kind: "tech",
        date: "2026-05-05T10:00:00.000Z",
      }),
    ]);

    const response = GET();
    const xml = await response.text();

    expect(response.headers.get("Content-Type")).toBe("application/xml; charset=utf-8");
    expect(xml).toContain("<loc>https://www.itefficience.com/article/news-recent</loc>");
    expect(xml).not.toContain("news-old");
    expect(xml).not.toContain("tech-recent");
  });

  it("escapes XML-sensitive characters in titles", async () => {
    const mockedGetAllPosts = getAllPosts as jest.MockedFunction<typeof getAllPosts>;
    mockedGetAllPosts.mockReturnValue([
      makePost({
        slug: "news-escaped",
        title: `Titre & <test> "quote" 'apostrophe'`,
        kind: "news",
        date: "2026-05-05T09:00:00.000Z",
      }),
    ]);

    const response = GET();
    const xml = await response.text();

    expect(xml).toContain(
      "<news:title>Titre &amp; &lt;test&gt; &quot;quote&quot; &apos;apostrophe&apos;</news:title>",
    );
  });
});

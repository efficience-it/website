import { BASE_URL } from "@/lib/metadata";
import { getAllPosts } from "@/lib/blog";

jest.mock("next/server", () => ({
  NextResponse: class {
    private readonly body: string;
    headers: Headers;

    constructor(body: string, init?: { headers?: HeadersInit }) {
      this.body = body;
      this.headers = new Headers(init?.headers);
    }

    async text() {
      return this.body;
    }
  },
}));

jest.mock("@/lib/blog", () => ({
  getAllPosts: jest.fn(),
}));

const getAllPostsMock = getAllPosts as jest.MockedFunction<typeof getAllPosts>;
const routeModule = jest.requireActual("@/app/feed.xml/route");
const { GET, dynamic } = routeModule;

const MOCK_POSTS = [
  {
    slug: "article-symfony",
    title: "Guide Symfony & PHP",
    date: "2026-01-15T00:00:00.000Z",
    updatedAt: "2026-02-01T00:00:00.000Z",
    author: "Jean Dupont",
    category: "Symfony",
    excerpt: "Un guide complet sur Symfony",
    content: "## Introduction\n\nContenu de l'article.",
    wordCount: 5,
    mainTech: ["symfony", "php"],
  },
  {
    slug: "article-sans-updated-at",
    title: "Article <sans> updatedAt & spéciaux",
    date: "2026-01-01T00:00:00.000Z",
    author: "Efficience IT",
    category: "PHP",
    excerpt: "",
    content: "Contenu simple.",
    wordCount: 2,
    mainTech: undefined,
  },
];

describe("GET /feed.xml", () => {
  beforeEach(() => {
    getAllPostsMock.mockReset();
  });

  it('exports "force-static" dynamic mode', () => {
    expect(dynamic).toBe("force-static");
  });

  it("returns Atom 1.0 XML with correct Content-Type", async () => {
    getAllPostsMock.mockReturnValue([]);
    const response = GET();
    expect(response.headers.get("Content-Type")).toContain("application/atom+xml");
  });

  it("includes correct Cache-Control header", async () => {
    getAllPostsMock.mockReturnValue([]);
    const response = GET();
    expect(response.headers.get("Cache-Control")).toContain("s-maxage=3600");
    expect(response.headers.get("Cache-Control")).toContain("stale-while-revalidate=86400");
  });

  it("generates a valid Atom feed structure", async () => {
    getAllPostsMock.mockReturnValue(MOCK_POSTS);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xml).toContain('<feed xmlns="http://www.w3.org/2005/Atom">');
    expect(xml).toContain(`<link href="${BASE_URL}/blog" />`);
    expect(xml).toContain(`<link rel="self" href="${BASE_URL}/feed.xml" />`);
    expect(xml).toContain(`<id>${BASE_URL}/</id>`);
    expect(xml).toContain("<name>Efficience IT</name>");
    expect(xml).toContain("<email>contact@itefficience.com</email>");
    expect(xml).toContain("</feed>");
  });

  it("uses updatedAt as feed <updated> when available", async () => {
    getAllPostsMock.mockReturnValue(MOCK_POSTS);
    const response = GET();
    const xml = await response.text();

    // The first post has updatedAt, so the feed <updated> should use it
    expect(xml).toContain("<updated>2026-02-01T00:00:00.000Z</updated>");
  });

  it("falls back to date for feed <updated> when updatedAt is missing", async () => {
    getAllPostsMock.mockReturnValue([MOCK_POSTS[1]]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain("<updated>2026-01-01T00:00:00.000Z</updated>");
  });

  it("generates an <entry> per post with correct fields", async () => {
    getAllPostsMock.mockReturnValue(MOCK_POSTS);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain(`<link href="${BASE_URL}/article/article-symfony" />`);
    expect(xml).toContain(`<id>${BASE_URL}/article/article-symfony</id>`);
    expect(xml).toContain("<published>2026-01-15T00:00:00.000Z</published>");
    expect(xml).toContain("<name>Jean Dupont</name>");
    expect(xml).toContain('<summary type="html">Un guide complet sur Symfony</summary>');
    expect(xml).toContain('<content type="html">');
  });

  it("escapes XML special characters in title", async () => {
    getAllPostsMock.mockReturnValue([MOCK_POSTS[1]]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain("<title>Article &lt;sans&gt; updatedAt &amp; spéciaux</title>");
  });

  it("falls back to title when excerpt is empty", async () => {
    getAllPostsMock.mockReturnValue([MOCK_POSTS[1]]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain(
      '<summary type="html">Article &lt;sans&gt; updatedAt &amp; spéciaux</summary>',
    );
  });

  it("falls back to 'Efficience IT' when author is missing", async () => {
    getAllPostsMock.mockReturnValue([
      {
        slug: "article-no-author",
        title: "Article sans auteur",
        date: "2026-01-10T00:00:00.000Z",
        author: "",
        category: "PHP",
        excerpt: "Desc",
        content: "Contenu.",
        wordCount: 1,
      },
    ]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain("<name>Efficience IT</name>");
  });

  it("includes <category> tags from mainTech and category", async () => {
    getAllPostsMock.mockReturnValue([MOCK_POSTS[0]]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain('<category term="symfony" />');
    expect(xml).toContain('<category term="php" />');
  });

  it("deduplicates categories when category matches a mainTech entry", async () => {
    getAllPostsMock.mockReturnValue([
      {
        ...MOCK_POSTS[0],
        category: "symfony",
        mainTech: ["symfony"],
      },
    ]);
    const response = GET();
    const xml = await response.text();

    const matches = xml.match(/<category term="symfony" \/>/g);
    expect(matches).toHaveLength(1);
  });

  it("limits output to 50 posts", async () => {
    const manyPosts = Array.from({ length: 60 }, (_, i) => ({
      slug: `article-${i}`,
      title: `Article ${i}`,
      date: `2026-01-${String(i + 1).padStart(2, "0")}T00:00:00.000Z`,
      author: "Auteur",
      category: "PHP",
      excerpt: "Desc",
      content: "Contenu.",
      wordCount: 1,
    }));
    getAllPostsMock.mockReturnValue(manyPosts);
    const response = GET();
    const xml = await response.text();

    const entryCount = (xml.match(/<entry>/g) ?? []).length;
    expect(entryCount).toBe(50);
  });

  it("renders an empty feed when there are no posts", async () => {
    getAllPostsMock.mockReturnValue([]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain('<feed xmlns="http://www.w3.org/2005/Atom">');
    expect(xml).not.toContain("<entry>");
  });

  it("wraps content in CDATA and renders markdown to HTML", async () => {
    getAllPostsMock.mockReturnValue([
      {
        slug: "article-markdown",
        title: "Markdown Test",
        date: "2026-01-10T00:00:00.000Z",
        author: "Auteur",
        category: "PHP",
        excerpt: "Desc",
        content: "## Titre\n\nParagraphe avec **gras** et *italique*.",
        wordCount: 5,
      },
    ]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain("<![CDATA[");
    expect(xml).toContain("<h2>");
    expect(xml).toContain("<strong>gras</strong>");
    expect(xml).toContain("<em>italique</em>");
  });

  it("renders markdown lists, h1, h3, inline code and links in content", async () => {
    getAllPostsMock.mockReturnValue([
      {
        slug: "article-full-md",
        title: "Full Markdown",
        date: "2026-01-10T00:00:00.000Z",
        author: "Auteur",
        category: "PHP",
        excerpt: "Desc",
        content:
          "# Titre H1\n\n### Titre H3\n\n- Item un\n- Item deux\n\nTexte avec `code` et [lien](https://example.com).",
        wordCount: 10,
      },
    ]);
    const response = GET();
    const xml = await response.text();

    expect(xml).toContain("<h1>");
    expect(xml).toContain("<h3>");
    expect(xml).toContain("<ul>");
    expect(xml).toContain("<li>Item un</li>");
    expect(xml).toContain("<li>Item deux</li>");
    expect(xml).toContain("<code>code</code>");
    expect(xml).toContain('<a href="https://example.com">lien</a>');
  });
});

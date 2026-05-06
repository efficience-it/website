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
const { GET } = jest.requireActual("@/app/sitemap-images.xml/route");

describe("GET /sitemap-images.xml", () => {
  beforeEach(() => {
    getAllPostsMock.mockReset();
  });

  it("returns an image sitemap xml with static and blog images", async () => {
    getAllPostsMock.mockReturnValue([
      {
        slug: "article-1",
        title: "Article 1",
        date: "2026-01-01",
        author: "Auteur",
        category: "Symfony",
        excerpt: "Description article 1",
        image: "/images/blog/article-1.webp",
        imageCaption: "Caption 1",
        imageGeoLocation: "Paris, France",
        content: "Contenu",
        wordCount: 10,
      },
      {
        slug: "article-2",
        title: "Article 2 & test",
        date: "2026-01-02",
        author: "Auteur",
        category: "PHP",
        excerpt: "",
        image: "https://cdn.example.com/article-2.webp",
        content: "Contenu",
        wordCount: 10,
      },
      {
        slug: "article-sans-image",
        title: "Sans image",
        date: "2026-01-03",
        author: "Auteur",
        category: "PHP",
        excerpt: "Description",
        content: "Contenu",
        wordCount: 10,
      },
    ]);

    const response = GET();
    const xml = await response.text();

    expect(response.headers.get("Content-Type")).toContain("application/xml");
    expect(xml).toContain('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
    expect(xml).toContain("<image:image>");
    expect(xml).toContain(`<loc>${BASE_URL}/article/article-1</loc>`);
    expect(xml).toContain(`<image:loc>${BASE_URL}/images/blog/article-1.webp</image:loc>`);
    expect(xml).toContain("<image:caption>Caption 1</image:caption>");
    expect(xml).toContain("<image:geo_location>Paris, France</image:geo_location>");
    expect(xml).toContain("<image:title>Article 2 &amp; test</image:title>");
    expect(xml).toContain("<image:loc>https://cdn.example.com/article-2.webp</image:loc>");
    const article2Block = xml.match(
      new RegExp(`<loc>${BASE_URL}/article/article-2</loc>[\\s\\S]*?<\\/url>`),
    )?.[0];
    expect(article2Block).toBeDefined();
    expect(article2Block).not.toContain("<image:caption>");
    expect(xml).not.toContain(`${BASE_URL}/article/article-sans-image`);
    expect(xml).toContain(`${BASE_URL}/images/illustrations/source-code.svg`);
  });
});

import sitemap, { dynamic } from "@/app/sitemap";
import { getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";
import type { BlogPost } from "@/types/blog";

jest.mock("@/lib/blog", () => ({
  ...jest.requireActual("@/lib/blog"),
  getAllPosts: jest.fn(),
}));

const getAllPostsMock = getAllPosts as jest.MockedFunction<typeof getAllPosts>;

const french: BlogPost = {
  slug: "article-fr",
  title: "Article",
  date: "2026-01-01",
  author: "Auteur",
  category: "Symfony",
  kind: "tech",
  language: "fr",
  excerpt: "Extrait",
  image: "/images/blog/cover-fr.webp",
  content: "Contenu",
  wordCount: 10,
};

const frenchAlone: BlogPost = { ...french, slug: "article-seul", image: undefined };

const english: BlogPost = {
  ...french,
  slug: "article-en",
  title: "Article",
  language: "en",
  translationOf: "article-fr",
  image: "/images/blog/cover-en.webp",
};

const englishNoImage: BlogPost = { ...english, slug: "article-en-sans-image", translationOf: "article-seul", image: undefined };

function mockPosts(fr: BlogPost[], en: BlogPost[]) {
  getAllPostsMock.mockImplementation((language) => (language === "en" ? en : fr));
}

describe("sitemap", () => {
  it("is generated statically", () => {
    expect(dynamic).toBe("force-static");
  });

  it("lists no English URL and no alternate without translations", () => {
    mockPosts([french], []);
    const entries = sitemap();
    expect(entries.some((e) => e.url.includes("/en/"))).toBe(false);
    expect(entries.find((e) => e.url === `${BASE_URL}/article/article-fr`)!.alternates).toBeUndefined();
  });

  it("adds reciprocal alternates to both versions of a translated article", () => {
    mockPosts([french, frenchAlone], [english]);
    const entries = sitemap();
    const expected = {
      languages: {
        fr: `${BASE_URL}/article/article-fr`,
        en: `${BASE_URL}/en/article/article-en`,
        "x-default": `${BASE_URL}/article/article-fr`,
      },
    };
    expect(entries.find((e) => e.url === `${BASE_URL}/article/article-fr`)!.alternates).toEqual(expected);
    const englishEntry = entries.find((e) => e.url === `${BASE_URL}/en/article/article-en`)!;
    expect(englishEntry.alternates).toEqual(expected);
    expect(englishEntry.images).toEqual([`${BASE_URL}/images/blog/cover-en.webp`]);
    expect(entries.find((e) => e.url === `${BASE_URL}/article/article-seul`)!.alternates).toBeUndefined();
  });

  it("lists an English article without cover", () => {
    mockPosts([frenchAlone], [englishNoImage]);
    const entry = sitemap().find((e) => e.url === `${BASE_URL}/en/article/article-en-sans-image`)!;
    expect(entry.images).toBeUndefined();
  });
});

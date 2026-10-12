import type { BlogPost } from "@/types/blog";

jest.mock("@/components/article/ArticleView", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => <div data-testid="view" data-props={JSON.stringify(props)} />,
}));

const mockBlog = {
  getAllPosts: jest.fn(),
  getPostBySlug: jest.fn(),
  getPostsByCategory: jest.fn(),
  getLanguageSwitchTarget: jest.fn(),
  getTranslationPaths: jest.fn(),
};

jest.mock("@/lib/blog", () => ({
  __esModule: true,
  getAllPosts: (...args: unknown[]) => mockBlog.getAllPosts(...args),
  getPostBySlug: (...args: unknown[]) => mockBlog.getPostBySlug(...args),
  getPostsByCategory: (...args: unknown[]) => mockBlog.getPostsByCategory(...args),
  getLanguageSwitchTarget: (...args: unknown[]) => mockBlog.getLanguageSwitchTarget(...args),
  getTranslationPaths: (...args: unknown[]) => mockBlog.getTranslationPaths(...args),
}));

import { render, screen } from "@testing-library/react";
import FrenchArticlePage, {
  generateMetadata as frenchMetadata,
  generateStaticParams as frenchParams,
} from "@/app/(fr)/article/[slug]/page";
import EnglishArticlePage, {
  generateMetadata as englishMetadata,
  generateStaticParams as englishParams,
} from "@/app/(en)/en/article/[slug]/page";
import { buildArticleMetadata } from "@/lib/article-metadata";

function makePost(overrides: Partial<BlogPost> = {}): BlogPost {
  return {
    slug: "exemple",
    title: "Exemple",
    date: "2026-01-01",
    author: "Auteur",
    category: "Symfony",
    kind: "tech",
    excerpt: "Extrait",
    content: "",
    wordCount: 10,
    image: "/images/blog/cover-exemple.webp",
    ...overrides,
  };
}

const params = (slug: string) => ({ params: Promise.resolve({ slug }) });

function viewProps() {
  return JSON.parse(screen.getByTestId("view").getAttribute("data-props") as string);
}

beforeEach(() => {
  Object.values(mockBlog).forEach((fn) => fn.mockReset());
  mockBlog.getTranslationPaths.mockReturnValue(undefined);
  mockBlog.getLanguageSwitchTarget.mockReturnValue(undefined);
  mockBlog.getPostsByCategory.mockReturnValue([]);
});

describe("buildArticleMetadata", () => {
  it("builds French metadata with the article image", () => {
    const meta = buildArticleMetadata(makePost(), "fr");
    expect(meta.alternates?.canonical).toBe("https://www.itefficience.com/article/exemple");
    expect(meta.openGraph).toMatchObject({ type: "article", locale: "fr_FR", publishedTime: "2026-01-01" });
    expect(meta.twitter?.images).toEqual([
      { url: "https://www.itefficience.com/images/blog/cover-exemple.webp", width: 1200, height: 630 },
    ]);
  });

  it("falls back to the logo for a missing or svg image", () => {
    const logo = "https://www.itefficience.com/images/logo/logo-og.webp";
    expect(buildArticleMetadata(makePost({ image: undefined }), "fr").twitter?.images).toEqual([
      { url: logo, width: 1200, height: 630 },
    ]);
    expect(buildArticleMetadata(makePost({ image: "/a.svg" }), "fr").twitter?.images).toEqual([
      { url: logo, width: 1200, height: 630 },
    ]);
  });

  it("builds English metadata with a self canonical and reciprocal alternates", () => {
    mockBlog.getTranslationPaths.mockReturnValue({ fr: "/article/exemple", en: "/en/article/example" });
    const meta = buildArticleMetadata(makePost({ slug: "example", language: "en" }), "en");
    expect(meta.alternates?.canonical).toBe("https://www.itefficience.com/en/article/example");
    expect(meta.alternates?.languages).toMatchObject({
      fr: "https://www.itefficience.com/article/exemple",
      en: "https://www.itefficience.com/en/article/example",
    });
    expect(meta.openGraph).toMatchObject({ locale: "en_US" });
  });
});

describe("French article page", () => {
  it("generates a param per French post", async () => {
    mockBlog.getAllPosts.mockReturnValue([makePost(), makePost({ slug: "autre" })]);
    expect(await frenchParams()).toEqual([{ slug: "exemple" }, { slug: "autre" }]);
    expect(mockBlog.getAllPosts).toHaveBeenCalledWith();
  });

  it("returns a fallback title for an unknown slug", async () => {
    mockBlog.getPostBySlug.mockReturnValue(undefined);
    expect(await frenchMetadata(params("x"))).toEqual({ title: "Article introuvable" });
  });

  it("returns the article metadata", async () => {
    mockBlog.getPostBySlug.mockReturnValue(makePost());
    const meta = await frenchMetadata(params("exemple"));
    expect(meta.alternates?.canonical).toBe("https://www.itefficience.com/article/exemple");
  });

  it("responds 404 for an unknown slug", async () => {
    mockBlog.getPostBySlug.mockReturnValue(undefined);
    await expect(FrenchArticlePage(params("x"))).rejects.toThrow();
  });

  it("renders the view with at most three related posts, without the post itself", async () => {
    const posts = ["exemple", "a", "b", "c", "d"].map((slug) => makePost({ slug }));
    mockBlog.getPostBySlug.mockReturnValue(posts[0]);
    mockBlog.getPostsByCategory.mockReturnValue(posts);
    mockBlog.getLanguageSwitchTarget.mockReturnValue({ language: "en", href: "/en/article/example" });
    render(await FrenchArticlePage(params("exemple")));
    const props = viewProps();
    expect(props.language).toBe("fr");
    expect(props.relatedPosts.map((p: BlogPost) => p.slug)).toEqual(["a", "b", "c"]);
    expect(props.languageSwitchTarget).toEqual({ language: "en", href: "/en/article/example" });
  });

  it("renders without related posts when the category is empty", async () => {
    mockBlog.getPostBySlug.mockReturnValue(makePost({ category: "" }));
    render(await FrenchArticlePage(params("exemple")));
    expect(viewProps().relatedPosts).toEqual([]);
    expect(mockBlog.getPostsByCategory).not.toHaveBeenCalled();
  });
});

describe("English article page", () => {
  it("generates params from English posts only", async () => {
    mockBlog.getAllPosts.mockReturnValue([makePost({ slug: "example", language: "en" })]);
    expect(await englishParams()).toEqual([{ slug: "example" }]);
    expect(mockBlog.getAllPosts).toHaveBeenCalledWith("en");
  });

  it("returns a fallback title for an unknown slug", async () => {
    mockBlog.getPostBySlug.mockReturnValue(undefined);
    expect(await englishMetadata(params("x"))).toEqual({ title: "Article not found" });
    expect(mockBlog.getPostBySlug).toHaveBeenCalledWith("x", "en");
  });

  it("returns the English metadata", async () => {
    mockBlog.getPostBySlug.mockReturnValue(makePost({ slug: "example", language: "en" }));
    const meta = await englishMetadata(params("example"));
    expect(meta.alternates?.canonical).toBe("https://www.itefficience.com/en/article/example");
  });

  it("responds 404 for a slug without translation", async () => {
    mockBlog.getPostBySlug.mockReturnValue(undefined);
    await expect(EnglishArticlePage(params("exemple"))).rejects.toThrow();
  });

  it("renders the view with English related posts only", async () => {
    const english = makePost({ slug: "example", language: "en" });
    mockBlog.getPostBySlug.mockReturnValue(english);
    mockBlog.getPostsByCategory.mockReturnValue([english, makePost({ slug: "other", language: "en" })]);
    render(await EnglishArticlePage(params("example")));
    const props = viewProps();
    expect(props.language).toBe("en");
    expect(props.relatedPosts.map((p: BlogPost) => p.slug)).toEqual(["other"]);
    expect(mockBlog.getPostsByCategory).toHaveBeenCalledWith("Symfony", "en");
  });

  it("renders without related posts when the category is empty", async () => {
    mockBlog.getPostBySlug.mockReturnValue(makePost({ category: "", language: "en" }));
    render(await EnglishArticlePage(params("example")));
    expect(viewProps().relatedPosts).toEqual([]);
  });
});

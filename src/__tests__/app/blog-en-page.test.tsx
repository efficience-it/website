import { render, screen } from "@testing-library/react";
import { getAllPosts, BLOG_PAGE_SIZE } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

const mockConfig = { indexable: false };
jest.mock("@/lib/i18n/config", () => ({
  get ENGLISH_INDEXABLE() {
    return mockConfig.indexable;
  },
}));

jest.mock("@/lib/blog", () => ({
  ...jest.requireActual("@/lib/blog"),
  getAllPosts: jest.fn(),
}));

import EnglishBlogPage, { generateMetadata, generateStaticParams } from "@/app/(en)/en/blog/[[...segments]]/page";

const getAllPostsMock = getAllPosts as jest.MockedFunction<typeof getAllPosts>;

function makePosts(count: number, category: string, offset = 0): BlogPost[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: `post-${category}-${offset + i}`,
    title: `Post ${category} ${offset + i}`,
    date: "2026-01-01",
    author: "Author",
    category,
    kind: "tech" as const,
    language: "en" as const,
    excerpt: "Excerpt",
    content: "",
    wordCount: 10,
  }));
}

const params = (segments?: string[]) => ({ params: Promise.resolve({ segments }) });

beforeEach(() => {
  mockConfig.indexable = false;
  getAllPostsMock.mockReset();
  getAllPostsMock.mockReturnValue([
    ...makePosts(BLOG_PAGE_SIZE + 1, "Symfony"),
    ...makePosts(2, "PHP", 100),
  ]);
  (globalThis as unknown as Record<string, unknown>).IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  }));
});

describe("generateStaticParams", () => {
  it("lists the root, its pages and the eligible categories", async () => {
    expect(await generateStaticParams()).toEqual([
      { segments: [] },
      { segments: ["page", "2"] },
      { segments: ["symfony"] },
      { segments: ["symfony", "page", "2"] },
    ]);
    expect(getAllPostsMock).toHaveBeenCalledWith("en");
  });
});

describe("generateMetadata", () => {
  it("returns a fallback title for unknown segments", async () => {
    expect(await generateMetadata(params(["nope"]))).toEqual({ title: "Page not found" });
  });

  it("builds a self canonical, noindex metadata for the root", async () => {
    const meta = await generateMetadata(params());
    expect(meta.alternates?.canonical).toBe("https://www.itefficience.com/en/blog");
    expect(meta.robots).toEqual({ index: false, follow: true });
    expect(meta.alternates?.languages).toBeUndefined();
    expect(String((meta.title as { absolute: string }).absolute)).toBe("Efficience IT Blog");
  });

  it("links the root to its French twin once indexable", async () => {
    mockConfig.indexable = true;
    const meta = await generateMetadata(params([]));
    expect(meta.robots).toBeUndefined();
    expect(meta.alternates?.languages).toMatchObject({
      fr: "https://www.itefficience.com/blog",
      en: "https://www.itefficience.com/en/blog",
    });
  });

  it("describes a later page without alternates", async () => {
    mockConfig.indexable = true;
    const meta = await generateMetadata(params(["page", "2"]));
    expect(String((meta.title as { absolute: string }).absolute)).toContain("page 2 of 2");
    expect(meta.alternates?.languages).toBeUndefined();
  });

  it("describes a category", async () => {
    const meta = await generateMetadata(params(["symfony"]));
    expect(String((meta.title as { absolute: string }).absolute)).toBe("Symfony | Efficience IT Blog");
    expect(meta.description).toBe("Articles about Symfony on the Efficience IT blog.");
  });
});

describe("EnglishBlogPage", () => {
  it("responds 404 for unknown segments and thin categories", async () => {
    await expect(EnglishBlogPage(params(["nope"]))).rejects.toThrow();
    await expect(EnglishBlogPage(params(["php"]))).rejects.toThrow();
  });

  it("renders the English posts only, with English labels", async () => {
    render(await EnglishBlogPage(params()));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Efficience IT Blog");
    expect(screen.getAllByRole("article")).toHaveLength(BLOG_PAGE_SIZE);
    expect(screen.getByText("Next")).toHaveAttribute("href", "/en/blog/page/2");
    expect(screen.getByRole("link", { name: "Symfony" })).toHaveAttribute("href", "/en/blog/symfony");
    expect(screen.queryByText("PHP")).toBeNull();
    expect(document.body.textContent).not.toContain("Accueil");
  });

  it("renders a category page with its breadcrumb", async () => {
    render(await EnglishBlogPage(params(["symfony", "page", "2"])));
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Symfony: Efficience IT Blog");
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute("href", "/en/blog");
    expect(screen.getAllByRole("link", { name: "Symfony" })[0]).toHaveAttribute("href", "/en/blog/symfony");
    expect(screen.getByText("Page 2")).toBeInTheDocument();
  });

  it("emits English JSON-LD", async () => {
    const { container } = render(await EnglishBlogPage(params()));
    const json = container.querySelector('script[type="application/ld+json"]')?.textContent as string;
    expect(json).toContain("https://www.itefficience.com/en/article/post-Symfony-0");
    expect(json).toContain('"inLanguage":"en-US"');
    expect(json).not.toContain("Accueil");
  });
});

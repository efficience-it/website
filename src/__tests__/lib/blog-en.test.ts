import {
  ENGLISH_CATEGORY_MIN_POSTS,
  englishBlogPath,
  englishCategorySlug,
  getEnglishBlogParams,
  getEnglishCategories,
  resolveEnglishBlog,
} from "@/lib/blog-en";
import { BLOG_PAGE_SIZE } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

function makePosts(count: number, category: string, offset = 0): BlogPost[] {
  return Array.from({ length: count }, (_, i) => ({
    slug: `post-${category}-${offset + i}`,
    title: `Post ${offset + i}`,
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

describe("englishCategorySlug", () => {
  it("lowercases and hyphenates", () => {
    expect(englishCategorySlug("Code quality")).toBe("code-quality");
    expect(englishCategorySlug("  AI! ")).toBe("ai");
  });
});

describe("getEnglishCategories", () => {
  it("keeps only categories with enough translated posts", () => {
    const posts = [
      ...makePosts(ENGLISH_CATEGORY_MIN_POSTS, "Symfony"),
      ...makePosts(ENGLISH_CATEGORY_MIN_POSTS - 1, "PHP"),
      ...makePosts(1, ""),
    ];
    expect(getEnglishCategories(posts)).toEqual(["Symfony"]);
  });

  it("sorts categories", () => {
    const posts = [...makePosts(3, "PHP"), ...makePosts(3, "AI")];
    expect(getEnglishCategories(posts)).toEqual(["AI", "PHP"]);
  });
});

describe("englishBlogPath", () => {
  it("builds list, page and category paths", () => {
    expect(englishBlogPath()).toBe("/en/blog");
    expect(englishBlogPath(1)).toBe("/en/blog");
    expect(englishBlogPath(2)).toBe("/en/blog/page/2");
    expect(englishBlogPath(1, "ai")).toBe("/en/blog/ai");
    expect(englishBlogPath(3, "ai")).toBe("/en/blog/ai/page/3");
  });
});

describe("getEnglishBlogParams", () => {
  it("always lists the first page, even without posts", () => {
    expect(getEnglishBlogParams([])).toEqual([{ segments: [] }]);
  });

  it("generates no category page below the threshold", () => {
    const posts = makePosts(2, "Symfony");
    expect(getEnglishBlogParams(posts)).toEqual([{ segments: [] }]);
  });

  it("generates category and pagination pages", () => {
    const posts = [...makePosts(BLOG_PAGE_SIZE + 1, "Symfony"), ...makePosts(3, "PHP", 100)];
    expect(getEnglishBlogParams(posts)).toEqual([
      { segments: [] },
      { segments: ["page", "2"] },
      { segments: ["php"] },
      { segments: ["symfony"] },
      { segments: ["symfony", "page", "2"] },
    ]);
  });
});

describe("resolveEnglishBlog", () => {
  const posts = [...makePosts(BLOG_PAGE_SIZE + 2, "Symfony"), ...makePosts(3, "PHP", 100), ...makePosts(2, "AI", 200)];

  it("resolves the first page", () => {
    const view = resolveEnglishBlog([], posts);
    expect(view?.page).toBe(1);
    expect(view?.pageCount).toBe(2);
    expect(view?.posts).toHaveLength(BLOG_PAGE_SIZE);
    expect(view?.category).toBeUndefined();
  });

  it("resolves a later page", () => {
    const view = resolveEnglishBlog(["page", "2"], posts);
    expect(view?.page).toBe(2);
    expect(view?.posts).toHaveLength(posts.length - BLOG_PAGE_SIZE);
  });

  it("resolves a category with enough posts", () => {
    const view = resolveEnglishBlog(["php"], posts);
    expect(view).toMatchObject({ category: "PHP", categorySlug: "php", page: 1, pageCount: 1 });
    expect(view?.posts.every((post) => post.category === "PHP")).toBe(true);
  });

  it("resolves a category page", () => {
    const view = resolveEnglishBlog(["symfony", "page", "2"], posts);
    expect(view).toMatchObject({ category: "Symfony", page: 2 });
    expect(view?.posts).toHaveLength(2);
  });

  it("rejects a category below the threshold", () => {
    expect(resolveEnglishBlog(["ai"], posts)).toBeUndefined();
  });

  it.each([
    [["unknown"]],
    [["page"]],
    [["page", "1"]],
    [["page", "3"]],
    [["page", "x"]],
    [["page", "2", "extra"]],
    [["php", "page", "2"]],
    [["php", "other"]],
  ])("rejects the invalid segments %j", (segments) => {
    expect(resolveEnglishBlog(segments, posts)).toBeUndefined();
  });

  it("resolves an empty list without posts", () => {
    expect(resolveEnglishBlog([], [])).toMatchObject({ page: 1, pageCount: 1, posts: [] });
  });
});

import { getStaticRoutes, getCategoryRoutes, getBlogRoutes, STATIC_SILOS } from "@/lib/routes";
import type { BlogPost } from "@/types/blog";

function makePost(overrides: Partial<BlogPost> = {}): BlogPost {
  return {
    slug: "post-slug",
    title: "Post title",
    date: "2026-01-01",
    author: "Author",
    category: "Symfony",
    excerpt: "excerpt",
    content: "content",
    wordCount: 100,
    ...overrides,
  };
}

describe("getStaticRoutes", () => {
  it("flattens routes from all silos", () => {
    const routes = getStaticRoutes();
    const totalInSilos = STATIC_SILOS.reduce((acc, silo) => acc + silo.routes.length, 0);
    expect(routes).toHaveLength(totalInSilos);
    expect(routes[0].path).toBe(STATIC_SILOS[0].routes[0].path);
  });

  it("includes the home route", () => {
    expect(getStaticRoutes().some((r) => r.path === "/")).toBe(true);
  });
});

describe("getCategoryRoutes", () => {
  it("uses the latest post's updatedAt when present", () => {
    const posts = [makePost({ category: "Symfony", date: "2026-02-01", updatedAt: "2026-03-15" })];
    const routes = getCategoryRoutes(posts);
    const symfony = routes.find((r) => r.path === "/blog/symfony");
    expect(symfony?.lastModified).toBe("2026-03-15");
  });

  it("falls back to date when updatedAt is missing", () => {
    const posts = [makePost({ category: "Symfony", date: "2026-02-01" })];
    const routes = getCategoryRoutes(posts);
    const symfony = routes.find((r) => r.path === "/blog/symfony");
    expect(symfony?.lastModified).toBe("2026-02-01");
  });

  it("falls back to default date when category has no posts", () => {
    const routes = getCategoryRoutes([]);
    expect(routes.every((r) => r.lastModified === "2025-09-01")).toBe(true);
  });
});

describe("getBlogRoutes", () => {
  it("maps every post to /article/<slug>", () => {
    const posts = [
      makePost({ slug: "a", title: "Article A" }),
      makePost({ slug: "b", title: "Article B" }),
    ];
    const routes = getBlogRoutes(posts);
    expect(routes).toEqual([
      expect.objectContaining({ path: "/article/a", label: "Article A" }),
      expect.objectContaining({ path: "/article/b", label: "Article B" }),
    ]);
  });

  it("uses updatedAt when present and date as fallback", () => {
    const posts = [
      makePost({ slug: "a", date: "2026-01-01", updatedAt: "2026-04-01" }),
      makePost({ slug: "b", date: "2026-02-01" }),
    ];
    const routes = getBlogRoutes(posts);
    expect(routes[0].lastModified).toBe("2026-04-01");
    expect(routes[1].lastModified).toBe("2026-02-01");
  });

  it("propagates the post image", () => {
    const posts = [makePost({ image: "/images/foo.webp" })];
    expect(getBlogRoutes(posts)[0].image).toBe("/images/foo.webp");
  });

  it("leaves image undefined when not set", () => {
    expect(getBlogRoutes([makePost()])[0].image).toBeUndefined();
  });
});

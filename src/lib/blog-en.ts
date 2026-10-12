import { BLOG_PAGE_SIZE } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

export const ENGLISH_CATEGORY_MIN_POSTS = 3;

export interface EnglishBlogView {
  readonly category?: string;
  readonly categorySlug?: string;
  readonly page: number;
  readonly pageCount: number;
  readonly posts: BlogPost[];
}

export function englishCategorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getEnglishCategories(posts: BlogPost[]): string[] {
  const counts = new Map<string, number>();
  for (const post of posts) {
    if (post.category) counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }
  return Array.from(counts)
    .filter(([, count]) => count >= ENGLISH_CATEGORY_MIN_POSTS)
    .map(([category]) => category)
    .sort();
}

export function englishBlogPath(page = 1, categorySlug?: string): string {
  const base = categorySlug ? `/en/blog/${categorySlug}` : "/en/blog";
  return page === 1 ? base : `${base}/page/${page}`;
}

function pageCountOf(total: number): number {
  return Math.max(1, Math.ceil(total / BLOG_PAGE_SIZE));
}

export function getEnglishBlogParams(posts: BlogPost[]): { segments: string[] }[] {
  const scopes: { slug?: string; total: number }[] = [
    { total: posts.length },
    ...getEnglishCategories(posts).map((category) => ({
      slug: englishCategorySlug(category),
      total: posts.filter((post) => post.category === category).length,
    })),
  ];

  return scopes.flatMap(({ slug, total }) => {
    const prefix = slug ? [slug] : [];
    const pages = Array.from({ length: pageCountOf(total) }, (_, i) => i + 1);
    return pages.map((page) => ({ segments: page === 1 ? prefix : [...prefix, "page", String(page)] }));
  });
}

export function resolveEnglishBlog(segments: string[], posts: BlogPost[]): EnglishBlogView | undefined {
  const category = getEnglishCategories(posts).find((name) => englishCategorySlug(name) === segments[0]);
  const rest = category ? segments.slice(1) : segments;
  const scoped = category ? posts.filter((post) => post.category === category) : posts;
  const pageCount = pageCountOf(scoped.length);

  let page = 1;
  if (rest.length > 0) {
    const [marker, value, ...extra] = rest;
    if (marker !== "page" || extra.length > 0 || !/^\d+$/.test(value ?? "")) return undefined;
    page = Number(value);
    if (page < 2 || page > pageCount) return undefined;
  }

  return {
    ...(category && { category, categorySlug: englishCategorySlug(category) }),
    page,
    pageCount,
    posts: scoped.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE),
  };
}

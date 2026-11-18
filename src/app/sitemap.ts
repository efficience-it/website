import type { MetadataRoute } from "next";
import { articlePath, getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";
import { ENGLISH_INDEXABLE } from "@/lib/i18n/config";
import {
  getStaticRoutes,
  getCategoryRoutes,
  getBlogRoutes,
  type SiteRoute,
  type BlogSiteRoute,
} from "@/lib/routes";

export const dynamic = "force-static";

function toEntry(route: SiteRoute) {
  return {
    url: route.path === "/" ? BASE_URL : `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  };
}

function alternates(frenchPath: string, englishPath: string) {
  const french = `${BASE_URL}${frenchPath}`;
  return {
    languages: {
      fr: french,
      en: `${BASE_URL}${englishPath}`,
      "x-default": french,
    },
  };
}

function pairAlternates(frenchSlug: string, englishSlug: string) {
  return alternates(`/article/${frenchSlug}`, `/en/article/${englishSlug}`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const englishPosts = ENGLISH_INDEXABLE ? getAllPosts("en") : [];
  const englishBySource = new Map(englishPosts.map((post) => [post.translationOf as string, post]));

  const hasEnglishBlog = englishPosts.length > 0;
  const blogAlternates = alternates("/blog", "/en/blog");
  const staticPages: MetadataRoute.Sitemap = getStaticRoutes().map((route) => ({
    ...toEntry(route),
    ...(hasEnglishBlog && route.path === "/blog" ? { alternates: blogAlternates } : {}),
  }));
  const categoryPages: MetadataRoute.Sitemap = getCategoryRoutes(posts).map(toEntry);
  const blogPages: MetadataRoute.Sitemap = getBlogRoutes(posts).map((route: BlogSiteRoute) => {
    const slug = route.path.replace("/article/", "");
    const english = englishBySource.get(slug);
    return {
      ...toEntry(route),
      ...(route.image ? { images: [`${BASE_URL}${route.image}`] } : {}),
      ...(english ? { alternates: pairAlternates(slug, english.slug) } : {}),
    };
  });

  const englishPages: MetadataRoute.Sitemap = englishPosts.map((post) => ({
    url: `${BASE_URL}${articlePath(post)}`,
    lastModified: post.updatedAt ?? post.date,
    changeFrequency: "monthly",
    priority: 0.6,
    ...(post.image ? { images: [`${BASE_URL}${post.image}`] } : {}),
    alternates: pairAlternates(post.translationOf as string, post.slug),
  }));

  const englishBlog: MetadataRoute.Sitemap = hasEnglishBlog
    ? [
        {
          url: `${BASE_URL}/en/blog`,
          lastModified: englishPosts.map((post) => post.updatedAt ?? post.date).sort().pop(),
          changeFrequency: "weekly",
          priority: 0.6,
          alternates: blogAlternates,
        },
      ]
    : [];

  return [...staticPages, ...categoryPages, ...blogPages, ...englishBlog, ...englishPages];
}

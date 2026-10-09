import type { MetadataRoute } from "next";
import { articlePath, getAllPosts } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";
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

function pairAlternates(frenchSlug: string, englishSlug: string) {
  const french = `${BASE_URL}/article/${frenchSlug}`;
  return {
    languages: {
      fr: french,
      en: `${BASE_URL}/en/article/${englishSlug}`,
      "x-default": french,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const englishPosts = getAllPosts("en");
  const englishBySource = new Map(englishPosts.map((post) => [post.translationOf as string, post]));

  const staticPages: MetadataRoute.Sitemap = getStaticRoutes().map(toEntry);
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

  return [...staticPages, ...categoryPages, ...blogPages, ...englishPages];
}

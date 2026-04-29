import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import {
  BASE_URL,
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

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = getStaticRoutes().map(toEntry);
  const categoryPages: MetadataRoute.Sitemap = getCategoryRoutes(posts).map(toEntry);
  const blogPages: MetadataRoute.Sitemap = getBlogRoutes(posts).map((route: BlogSiteRoute) => ({
    ...toEntry(route),
    ...(route.image ? { images: [`${BASE_URL}${route.image}`] } : {}),
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}

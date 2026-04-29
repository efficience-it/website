import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import {
  BASE_URL,
  getStaticRoutes,
  getCategoryRoutes,
  getBlogRoutes,
} from "@/lib/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const toEntry = (route: {
    path: string;
    lastModified: string;
    changeFrequency: "weekly" | "monthly" | "yearly";
    priority: number;
  }) => ({
    url: route.path === "/" ? BASE_URL : `${BASE_URL}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  });

  const staticPages: MetadataRoute.Sitemap = getStaticRoutes().map(toEntry);
  const categoryPages: MetadataRoute.Sitemap = getCategoryRoutes().map(toEntry);

  const postsBySlug = new Map(getAllPosts().map((p) => [p.slug, p]));
  const blogPages: MetadataRoute.Sitemap = getBlogRoutes().map((route) => {
    const slug = route.path.replace("/article/", "");
    const post = postsBySlug.get(slug);
    return {
      ...toEntry(route),
      ...(post?.image ? { images: [`${BASE_URL}${post.image}`] } : {}),
    };
  });

  return [...staticPages, ...categoryPages, ...blogPages];
}

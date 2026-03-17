import type { MetadataRoute } from "next";
import { getAllPosts, getPostsByCategory, categorySlugMap } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://www.itefficience.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: "2026-03-11",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/notre-expertise`,
      lastModified: "2026-01-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developpement-web-sur-mesure`,
      lastModified: "2026-03-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cloud-et-devops`,
      lastModified: "2026-03-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/accompagnement-et-conseil`,
      lastModified: "2026-03-10",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/l-entreprise`,
      lastModified: "2025-09-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/la-team`,
      lastModified: "2025-09-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/ta-carriere`,
      lastModified: "2025-09-01",
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/nos-references`,
      lastModified: "2025-09-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/green-it`,
      lastModified: "2025-09-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: "2026-03-11",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/developpement-nodejs`,
      lastModified: "2026-03-11",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developpement-frontend`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developpement-php`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developpement-react`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developpement-vuejs`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/developpement-typescript`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agence-symfony-france`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-symfony-gratuit`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/api-nodejs-nestjs`,
      lastModified: "2026-03-11",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/formation-symfony-entreprise`,
      lastModified: "2026-01-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/modernisation-applicative`,
      lastModified: "2026-03-16",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/modernisation-application-php`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/reprise-projet-symfony`,
      lastModified: "2026-02-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/maintenance-applicative-symfony`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/audit-code-php`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/migration-symfony`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/architecture-hexagonale-symfony`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/tests-automatises-php`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/expertise-ia`,
      lastModified: "2026-03-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/geo-optimisation-ia`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/api-sur-mesure-symfony`,
      lastModified: "2026-03-11",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/agence-symfony-lille`,
      lastModified: "2026-03-11",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ecommerce-sylius`,
      lastModified: "2026-03-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/hebergement-symfony`,
      lastModified: "2026-03-13",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/secteur`,
      lastModified: "2026-03-17",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/secteur/e-commerce`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/secteur/industrie`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/secteur/saas`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/secteur/finance`,
      lastModified: "2026-03-12",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: "2025-09-01",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/mentions-legales`,
      lastModified: "2025-09-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/politique-de-confidentialite`,
      lastModified: "2025-09-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.entries(
    categorySlugMap,
  ).map(([name, slug]) => {
    const posts = getPostsByCategory(name);
    const latest = posts[0];
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: latest?.updatedAt ?? latest?.date ?? "2025-09-01",
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  const posts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/article/${post.slug}`,
    lastModified: post.updatedAt ?? post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...blogPages];
}

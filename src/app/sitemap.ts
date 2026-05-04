import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllPosts, getPostsByCategory, categorySlugMap } from "@/lib/blog";
import { BASE_URL } from "@/lib/metadata";

export const dynamic = "force-static";

type StaticPageConfig = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
};

const APP_DIR = path.join(process.cwd(), "src", "app");
const BLOG_CONTENT_DIR = path.join(process.cwd(), "content", "blog");
const SITEMAP_FILE_PATH = path.join(APP_DIR, "sitemap.ts");

const staticPageConfigs: StaticPageConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/notre-expertise", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/developpement-web-sur-mesure",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/cloud-et-devops", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/accompagnement-et-conseil",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/l-entreprise", changeFrequency: "monthly", priority: 0.7 },
  { path: "/la-team", changeFrequency: "monthly", priority: 0.6 },
  { path: "/ta-carriere", changeFrequency: "monthly", priority: 0.6 },
  { path: "/nos-references", changeFrequency: "monthly", priority: 0.7 },
  { path: "/green-it", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.9 },
  { path: "/developpement-nodejs", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/developpement-frontend",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/developpement-php", changeFrequency: "monthly", priority: 0.8 },
  { path: "/developpement-react", changeFrequency: "monthly", priority: 0.8 },
  { path: "/developpement-vuejs", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/developpement-typescript",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/agence-symfony-france", changeFrequency: "monthly", priority: 0.8 },
  { path: "/audit-symfony-gratuit", changeFrequency: "monthly", priority: 0.8 },
  { path: "/api-nodejs-nestjs", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/formation-symfony-entreprise",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/modernisation-applicative", changeFrequency: "monthly", priority: 0.85 },
  {
    path: "/modernisation-application-php",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/reprise-projet-symfony", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/maintenance-applicative-symfony",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/audit-code-php", changeFrequency: "monthly", priority: 0.8 },
  { path: "/migration-symfony", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/architecture-hexagonale-symfony",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/tests-automatises-php", changeFrequency: "monthly", priority: 0.8 },
  { path: "/expertise-ia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/geo-optimisation-ia", changeFrequency: "monthly", priority: 0.8 },
  { path: "/audit-ia-entreprise", changeFrequency: "monthly", priority: 0.8 },
  { path: "/api-sur-mesure-symfony", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agence-symfony-lille", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agence-symfony-paris", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agence-symfony-lyon", changeFrequency: "monthly", priority: 0.8 },
  { path: "/agence-symfony-nantes", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ecommerce-sylius", changeFrequency: "monthly", priority: 0.8 },
  { path: "/hebergement-symfony", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/integration-docker-symfony",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/securite-application-symfony",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/base-de-donnees-postgresql-symfony",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/integration-redis-symfony", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/integration-elasticsearch-symfony",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/secteur", changeFrequency: "monthly", priority: 0.7 },
  { path: "/secteur/e-commerce", changeFrequency: "monthly", priority: 0.7 },
  { path: "/secteur/industrie", changeFrequency: "monthly", priority: 0.7 },
  { path: "/secteur/saas", changeFrequency: "monthly", priority: 0.7 },
  { path: "/secteur/finance", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/secteur/migration-legacy",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/secteur/renfort-equipe", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/secteur/application-metier",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/secteur/maintenance-applicative",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/secteur/api-integration", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/secteur/securite-conformite",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/processus-collaboration", changeFrequency: "monthly", priority: 0.8 },
  {
    path: "/pourquoi-efficience-it",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/mentions-legales", changeFrequency: "yearly", priority: 0.3 },
  {
    path: "/politique-de-confidentialite",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

function getStaticRouteFilePath(routePath: string): string {
  if (routePath === "/") {
    return path.join(APP_DIR, "page.tsx");
  }

  const cleanPath = routePath.replace(/^\/+/, "").replace(/\/+$/, "");
  return path.join(APP_DIR, ...cleanPath.split("/"), "page.tsx");
}

function getMtime(filePath: string): Date | undefined {
  if (!fs.existsSync(filePath)) {
    return undefined;
  }
  return fs.statSync(filePath).mtime;
}

function getFallbackBuildDate(): Date {
  return getMtime(SITEMAP_FILE_PATH) ?? new Date();
}

function toValidDate(value: string | Date | undefined): Date | undefined {
  if (!value) {
    return undefined;
  }

  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? undefined : value;
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed;
}

function getLatestDate(dates: (Date | undefined)[], fallback: Date): Date {
  const validDates = dates.filter((date): date is Date => date instanceof Date);
  if (validDates.length === 0) {
    return fallback;
  }
  let latest = validDates[0];
  for (let index = 1; index < validDates.length; index += 1) {
    const current = validDates[index];
    if (current.getTime() > latest.getTime()) {
      latest = current;
    }
  }
  return latest;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const fallbackBuildDate = getFallbackBuildDate();

  const staticPages: MetadataRoute.Sitemap = staticPageConfigs.map((page) => ({
    url: page.path === "/" ? BASE_URL : `${BASE_URL}${page.path}`,
    lastModified:
      getMtime(getStaticRouteFilePath(page.path)) ??
      getMtime(path.join(APP_DIR, "layout.tsx")) ??
      fallbackBuildDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const categoryPages: MetadataRoute.Sitemap = Object.entries(
    categorySlugMap,
  ).map(([name, slug]) => {
    const posts = getPostsByCategory(name);
    const latestCategoryPostDate = getLatestDate(
      posts.map((post) => toValidDate(post.updatedAt ?? post.date)),
      fallbackBuildDate,
    );

    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: getLatestDate(
        [
          latestCategoryPostDate,
          getMtime(path.join(APP_DIR, "blog", "[category]", "page.tsx")),
        ],
        fallbackBuildDate,
      ),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    };
  });

  const posts = getAllPosts();

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => {
    const postFilePath = path.join(BLOG_CONTENT_DIR, `${post.slug}.mdx`);
    return {
      url: `${BASE_URL}/article/${post.slug}`,
      lastModified: getLatestDate(
        [
          toValidDate(post.updatedAt ?? post.date),
          getMtime(postFilePath),
          getMtime(path.join(APP_DIR, "article", "[slug]", "page.tsx")),
        ],
        fallbackBuildDate,
      ),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  return [...staticPages, ...categoryPages, ...blogPages];
}

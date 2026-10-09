import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, ArticleKind, BlogLanguage } from "@/types/blog";
import { TECH_ENTITIES, type TechKey } from "@/lib/structured-data";

const BLOG_DIR = path.join(process.cwd(), "content/blog");
const BLOG_DIR_EN = path.join(BLOG_DIR, "en");

const TRANSLATION_REQUIRED_FIELDS = [
  "translationOf",
  "translatedFromUpdatedAt",
  "reviewedBy",
  "reviewedAt",
] as const;

function postsDirectory(language: BlogLanguage): string {
  return language === "en" ? BLOG_DIR_EN : BLOG_DIR;
}

function asString(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return undefined;
}

function parseMainTech(value: unknown): TechKey[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const valid = value.filter((v): v is TechKey => typeof v === "string" && v in TECH_ENTITIES);
  return valid.length > 0 ? valid : undefined;
}

function parseArticleKind(category: unknown, value: unknown): ArticleKind {
  if (value === "news" || value === "tech" || value === "blog") {
    return value;
  }
  if (typeof category === "string" && isTechCategory(category)) {
    return "tech";
  }
  return "blog";
}

function countWords(markdown: string): number {
  const text = markdown
    .replace(/`` ` ``/g, '')
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "")
    .replace(/!?\[.*?\]\(.*?\)/g, "")
    .replace(/#{1,3}\s+/g, "")
    .replace(/[*_~`>|\\[\]()-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(" ").length : 0;
}

export function readingTime(wordCount: number): number {
  return Math.max(1, Math.round(wordCount / 200));
}

function parsePost(
  slug: string,
  language: BlogLanguage,
  data: Record<string, unknown>,
  content: string,
): BlogPost {
  return {
    slug,
    title: (data.title as string) ?? "",
    date: (data.date as string) ?? "",
    author: (data.author as string) ?? "",
    category: (data.category as string) ?? "",
    kind: parseArticleKind(data.category, data.kind),
    language,
    excerpt: (data.excerpt as string) ?? "",
    updatedAt: data.updatedAt as string | undefined,
    image: data.image as string | undefined,
    imageCaption: data.imageCaption as string | undefined,
    imageGeoLocation: data.imageGeoLocation as string | undefined,
    translationOf: asString(data.translationOf),
    translatedFromUpdatedAt: asString(data.translatedFromUpdatedAt),
    reviewedBy: asString(data.reviewedBy),
    reviewedAt: asString(data.reviewedAt),
    proficiencyLevel: data.proficiencyLevel as BlogPost["proficiencyLevel"],
    faq: data.faq as BlogPost["faq"],
    event: data.event as BlogPost["event"],
    howTo: data.howTo as BlogPost["howTo"],
    mainTech: parseMainTech(data.mainTech),
    content,
    wordCount: countWords(content),
  };
}

function validateTranslations(posts: BlogPost[]): void {
  const frenchSlugs = new Set(
    fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => f.replace(/\.mdx$/, "")),
  );
  const translated = new Set<string>();

  for (const post of posts) {
    const where = `content/blog/en/${post.slug}.mdx`;
    for (const field of TRANSLATION_REQUIRED_FIELDS) {
      if (!post[field]) throw new Error(`${where} : le champ ${field} est obligatoire.`);
    }
    const source = post.translationOf as string;
    if (!frenchSlugs.has(source)) {
      throw new Error(`${where} : l'article français "${source}" n'existe pas.`);
    }
    if (translated.has(source)) {
      throw new Error(`${where} : l'article français "${source}" a déjà une traduction.`);
    }
    translated.add(source);
  }
}

export function getAllPosts(language: BlogLanguage = "fr"): BlogPost[] {
  const dir = postsDirectory(language);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fileContent = fs.readFileSync(path.join(dir, filename), "utf-8");
    const { data, content } = matter(fileContent);
    return parsePost(slug, language, data, content);
  });

  if (language === "en") validateTranslations(posts);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export const BLOG_PAGE_SIZE = 18;

export function getBlogPageCount(): number {
  return Math.max(1, Math.ceil(getAllPosts().length / BLOG_PAGE_SIZE));
}

export function getPostsForPage(page: number): BlogPost[] {
  const start = (page - 1) * BLOG_PAGE_SIZE;
  return getAllPosts().slice(start, start + BLOG_PAGE_SIZE);
}

export function blogPagePath(page: number): string {
  return page === 1 ? "/blog" : `/blog/page/${page}`;
}

export function getPostBySlug(slug: string, language: BlogLanguage = "fr"): BlogPost | undefined {
  if (language === "en") return getAllPosts("en").find((p) => p.slug === slug);

  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));
  return parsePost(slug, "fr", data, content);
}

export const categorySlugMap: Record<string, string> = {
  Agence: "agence",
  Architecture: "architecture",
  DevOps: "devops",
  Formation: "formation",
  "Green IT": "green-it",
  IA: "ia",
  JavaScript: "javascript",
  PHP: "php",
  Projet: "projet",
  "Qualité de code": "qualite-de-code",
  Symfony: "symfony",
  "Sécurité": "securite",
};

const TECH_CATEGORIES = new Set([
  "Symfony",
  "PHP",
  "Architecture",
  "DevOps",
  "Qualité de code",
  "Sécurité",
  "IA",
  "JavaScript",
]);

const SYMFONY_AUDIT_CATEGORIES = new Set([
  "Symfony",
  "PHP",
  "Architecture",
  "Qualité de code",
]);

function isTechCategory(category: string): boolean {
  return TECH_CATEGORIES.has(category);
}

export function isSymfonyAuditCategory(category: string): boolean {
  return SYMFONY_AUDIT_CATEGORIES.has(category);
}

const slugToCategoryMap: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([name, slug]) => [slug, name]),
);

export function getCategoryBySlug(slug: string): string | undefined {
  return slugToCategoryMap[slug];
}

export function getCategorySlug(category: string): string {
  return categorySlugMap[category] ?? category.toLowerCase();
}

export function getCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.category).filter(Boolean));
  return Array.from(categories).sort();
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): HeadingItem[] {
  const headingRegex = /^(#{2})\s+(.+)$/gm;
  const headings: HeadingItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    headings.push({
      id,
      text,
      level: match[1].length,
    });
  }

  return headings;
}

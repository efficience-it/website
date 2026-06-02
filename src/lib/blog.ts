import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";
import { TECH_ENTITIES, type TechKey } from "@/lib/structured-data";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parseMainTech(value: unknown): TechKey[] | undefined {
  if (!Array.isArray(value)) return undefined;
  const valid = value.filter((v): v is TechKey => typeof v === "string" && v in TECH_ENTITIES);
  return valid.length > 0 ? valid : undefined;
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

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title ?? "",
      date: data.date ?? "",
      author: data.author ?? "",
      category: data.category ?? "",
      excerpt: data.excerpt ?? "",
      updatedAt: data.updatedAt,
      image: data.image,
      proficiencyLevel: data.proficiencyLevel,
      faq: data.faq,
      event: data.event,
      howTo: data.howTo,
      mainTech: parseMainTech(data.mainTech),
      content,
      wordCount: countWords(content),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return undefined;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title ?? "",
    date: data.date ?? "",
    author: data.author ?? "",
    category: data.category ?? "",
    excerpt: data.excerpt ?? "",
    updatedAt: data.updatedAt,
    image: data.image,
    proficiencyLevel: data.proficiencyLevel,
    faq: data.faq,
    event: data.event,
    howTo: data.howTo,
    mainTech: parseMainTech(data.mainTech),
    content,
    wordCount: countWords(content),
  };
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

export function isTechCategory(category: string): boolean {
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

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

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
      image: data.image,
      content,
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
    image: data.image,
    content,
  };
}

export const categorySlugMap: Record<string, string> = {
  Agence: "lagence",
  Formation: "formation",
  "Green IT": "green-it",
  Outils: "outils",
  Projet: "projet",
};

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

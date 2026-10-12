import { notFound } from "next/navigation";
import { getAllPosts, getLanguageSwitchTarget, getPostBySlug, getPostsByCategory } from "@/lib/blog";
import ArticleView from "@/components/article/ArticleView";
import { buildArticleMetadata } from "@/lib/article-metadata";
import type { Metadata } from "next";

interface ArticlePageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts("en").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) return { title: "Article not found" };

  return buildArticleMetadata(post, "en");
}

export default async function EnglishArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) notFound();

  const relatedPosts = post.category
    ? getPostsByCategory(post.category, "en")
        .filter((p) => p.slug !== slug)
        .slice(0, 3)
    : [];

  return (
    <ArticleView
      post={post}
      relatedPosts={relatedPosts}
      language="en"
      languageSwitchTarget={getLanguageSwitchTarget(post)}
    />
  );
}

import { notFound } from "next/navigation";
import { getAllPosts, getLanguageSwitchTarget, getPostBySlug, getPostsByCategory } from "@/lib/blog";
import ArticleView from "@/components/article/ArticleView";
import { buildArticleMetadata } from "@/lib/article-metadata";
import type { Metadata } from "next";

interface ArticlePageProps {
  readonly params: Promise<{ readonly slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return buildArticleMetadata(post, "fr");
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = post.category
    ? getPostsByCategory(post.category)
        .filter((p) => p.slug !== slug)
        .slice(0, 3)
    : [];

  return (
    <ArticleView
      post={post}
      relatedPosts={relatedPosts}
      language="fr"
      languageSwitchTarget={getLanguageSwitchTarget(post)}
    />
  );
}

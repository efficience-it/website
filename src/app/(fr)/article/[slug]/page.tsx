import { notFound } from "next/navigation";
import { getAllPosts, getLanguageSwitchTarget, getPostBySlug, getTranslationPaths, getPostsByCategory } from "@/lib/blog";
import ArticleView from "@/components/article/ArticleView";
import type { Metadata } from "next";
import { BASE_URL, pageMetadata } from "@/lib/metadata";

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

  const translationPaths = getTranslationPaths(post);
  const base = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/article/${slug}`,
    ...(translationPaths && { translationPaths }),
  });

  const articleImage =
    post.image && !post.image.endsWith(".svg")
      ? `${BASE_URL}${post.image}`
      : `${BASE_URL}/images/logo/logo-og.webp`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: articleImage, width: 1200, height: 630 }],
    },
    twitter: {
      ...base.twitter,
      images: [{ url: articleImage, width: 1200, height: 630 }],
    },
  };
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

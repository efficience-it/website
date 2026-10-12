import type { Metadata } from "next";
import { getTranslationPaths } from "@/lib/blog";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import type { BlogLanguage, BlogPost } from "@/types/blog";

export function buildArticleMetadata(post: BlogPost, language: BlogLanguage): Metadata {
  const translationPaths = getTranslationPaths(post);
  const base = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `${language === "en" ? "/en" : ""}/article/${post.slug}`,
    ...(language === "en" && { language }),
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

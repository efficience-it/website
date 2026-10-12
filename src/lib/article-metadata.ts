import type { Metadata } from "next";
import { getTranslationPaths } from "@/lib/blog";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import { ENGLISH_INDEXABLE } from "@/lib/i18n/config";
import type { BlogLanguage, BlogPost } from "@/types/blog";

export function buildArticleMetadata(post: BlogPost, language: BlogLanguage): Metadata {
  const translationPaths = ENGLISH_INDEXABLE ? getTranslationPaths(post) : undefined;
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
    ...(language === "en" && !ENGLISH_INDEXABLE && { robots: { index: false, follow: true } }),
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

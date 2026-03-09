import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MarkdownContent from "@/components/ui/MarkdownContent";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BASE_URL, SITE_NAME } from "@/lib/metadata";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
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

  const base = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/article/${slug}`,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        { url: post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/images/logo/logo-og.png` }
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: post.author,
    image: post.image ? `${BASE_URL}${post.image}` : undefined,
    genre: post.category,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    datePublished: post.date,
    url: `${BASE_URL}/article/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <article className="py-16">
          <Container className="mx-auto max-w-3xl">
            <header className="mb-8">
              <div className="mb-4 flex items-center gap-3 text-sm text-gray">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                {post.category && (
                  <>
                    <span>&middot;</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </>
                )}
              </div>
              <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
                {post.title}
              </h1>
              {post.author && (
                <p className="mt-4 text-gray">Par {post.author}</p>
              )}
            </header>

            <MarkdownContent content={post.content} />

            <div className="mt-12 border-t border-border pt-8">
              <Button href="/blog" variant="outline">
                &larr; Retour au blog
              </Button>
            </div>
          </Container>
        </article>
      </main>
    </>
  );
}

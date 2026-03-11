import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getCategorySlug } from "@/lib/blog";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MarkdownContent from "@/components/ui/MarkdownContent";
import ArticleCta from "@/components/sections/ArticleCta";
import type { Metadata } from "next";
import { BASE_URL, SITE_NAME, pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd } from "@/lib/structured-data";

const SYMFONY_CATEGORIES = ["Outils", "Formation", "Projet"];

function splitContentAfterThirdH2(content: string): [string, string] | null {
  const h2Regex = /^## /gm;
  let match: RegExpExecArray | null;
  let count = 0;

  while ((match = h2Regex.exec(content)) !== null) {
    count++;
    if (count === 4) {
      return [content.slice(0, match.index), content.slice(match.index)];
    }
  }

  return null;
}

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

  const base = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/article/${slug}`,
  });

  const articleImage = post.image
    ? `${BASE_URL}${post.image}`
    : `${BASE_URL}/images/logo/logo-og.png`;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: articleImage }],
    },
    twitter: {
      ...base.twitter,
      images: [{ url: articleImage }],
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
    author: {
      "@type": "Person",
      name: post.author,
    },
    image: post.image ? `${BASE_URL}${post.image}` : undefined,
    genre: post.category,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
    },
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    url: `${BASE_URL}/article/${slug}`,
  };

  const breadcrumb = breadcrumbJsonLd([
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/article/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main>
        <article className="py-16">
          <Container className="mx-auto max-w-3xl">
            <header className="mb-16">
              <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <Button href="/blog" variant="outline">
                      &larr; Retour au blog
                    </Button>
                  </div>
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
                        <Link
                          href={`/blog/${getCategorySlug(post.category)}`}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary hover:bg-primary hover:text-white"
                        >
                          {post.category}
                        </Link>
                      </>
                    )}
                  </div>
                  <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
                    {post.title}
                  </h1>
                  {post.author && (
                    <p className="mt-4 text-gray">Par {post.author}</p>
                  )}
                  {post.updatedAt && (
                    <p className="mt-2 text-sm text-gray">
                      Mis à jour le{" "}
                      <time dateTime={post.updatedAt}>
                        {new Date(post.updatedAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </p>
                  )}
                </div>
                {post.image && (
                  <div className="mt-6 shrink-0 self-center xl:mt-0 xl:ml-8 xl:self-start">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={720}
                      height={405}
                      className="h-auto w-full max-w-full rounded-md object-contain sm:max-w-md lg:max-w-lg xl:max-w-xl"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                )}
              </div>
            </header>
            <div className="mx-auto max-w-3xl">
              {(() => {
                const parts = splitContentAfterThirdH2(post.content);
                if (!parts) {
                  return <MarkdownContent content={post.content} />;
                }
                const [firstPart, secondPart] = parts;
                const isSymfony =
                  post.category && SYMFONY_CATEGORIES.includes(post.category);
                return (
                  <>
                    <MarkdownContent content={firstPart} />
                    <div className="my-8 rounded-lg bg-primary/5 p-6 text-center">
                      <p className="font-display text-lg font-semibold text-dark">
                        {isSymfony
                          ? "Besoin d'un regard expert sur votre code Symfony ?"
                          : "Besoin d'accompagnement sur votre projet ?"}
                      </p>
                      <Button
                        href={
                          isSymfony ? "/audit-symfony-gratuit" : "/contact"
                        }
                        className="mt-3"
                        variant="outline"
                      >
                        {isSymfony
                          ? "Demander un audit gratuit"
                          : "Parlons-en"}
                      </Button>
                    </div>
                    <MarkdownContent content={secondPart} />
                  </>
                );
              })()}
            </div>
            <ArticleCta category={post.category} />
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

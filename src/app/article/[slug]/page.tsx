import { notFound } from "next/navigation";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getCategorySlug, getPostsByCategory, extractHeadings, isSymfonyAuditCategory, readingTime } from "@/lib/blog";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MarkdownContent from "@/components/ui/MarkdownContent";
import ArticleCta, { getArticleCtaConfig } from "@/components/sections/ArticleCta";
import StickyArticleCta from "@/components/sections/StickyArticleCta";
import Accordion from "@/components/ui/Accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/cards/BlogCard";
import TableOfContents from "@/components/ui/TableOfContents";
import type { Metadata } from "next";
import { BASE_URL, pageMetadata } from "@/lib/metadata";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  eventJsonLd,
  faqPageJsonLd,
  howToJsonLd,
  pageGraphJsonLd,
} from "@/lib/structured-data";
import { getAuthorSchema } from "@/data/authors";
import FadeIn from "@/components/ui/FadeIn";
import ScrollDepthTracker from "@/components/ui/ScrollDepthTracker";
import ArticleShareButtons from "@/components/ui/ArticleShareButtons";

const STICKY_CTA_MIN_WORDS = 1500;

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

  const url = `${BASE_URL}/article/${slug}`;

  const shouldShowStickyCta = post.wordCount > STICKY_CTA_MIN_WORDS;
  const stickyCtaConfig = getArticleCtaConfig(post.category, slug);

  const headings = extractHeadings(post.content);

  const relatedPosts = post.category
    ? getPostsByCategory(post.category)
        .filter((p) => p.slug !== slug)
        .slice(0, 3)
    : [];

  const jsonLd = articleJsonLd({
    url,
    kind: post.kind,
    title: post.title,
    excerpt: post.excerpt,
    author: getAuthorSchema(post.author),
    imagePath: post.image,
    category: post.category,
    date: post.date,
    updatedAt: post.updatedAt,
    wordCount: post.wordCount,
    timeRequiredMinutes: readingTime(post.wordCount),
    proficiencyLevel: post.proficiencyLevel,
    mainTech: post.mainTech,
  });

  const breadcrumb = breadcrumbJsonLd([
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/article/${slug}` },
  ]);

  const graph = pageGraphJsonLd(
    jsonLd,
    breadcrumb,
    ...(post.event ? [eventJsonLd(post.event)] : []),
    ...(post.howTo && post.howTo.steps.length > 0
      ? [howToJsonLd(post.howTo.name, post.howTo.description, post.howTo.steps)]
      : []),
    ...(post.faq && post.faq.length > 0 ? [faqPageJsonLd(post.faq)] : []),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <ScrollDepthTracker slug={slug} />
      {shouldShowStickyCta && (
        <StickyArticleCta
          href={stickyCtaConfig.href}
          label={stickyCtaConfig.buttonLabel}
          slug={slug}
        />
      )}
      <main>
        <article className={`py-16 ${shouldShowStickyCta ? "pb-32 md:pb-16" : ""}`}>
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
                    <span>&middot;</span>
                    <span>{readingTime(post.wordCount)} min de lecture</span>
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
                  <div className="mt-4 flex flex-wrap items-start gap-4 min-[520px]:justify-between">
                    <div className="space-y-2">
                      {post.author && <p className="text-gray">Par {post.author}</p>}
                      {post.updatedAt && (
                        <p className="text-sm text-gray">
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
                    <ArticleShareButtons url={url} title={post.title} articleSlug={slug} />
                  </div>
                </div>
                {post.image && (
                  <div className="mt-6 shrink-0 self-center xl:mt-0 xl:ml-8 xl:self-start">
                    <ResponsiveImage
                      src={post.image}
                      alt={post.title}
                      width={720}
                      height={405}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 28rem, (max-width: 1280px) 32rem, 36rem"
                      className="h-auto w-full max-w-full rounded-md object-contain sm:max-w-md lg:max-w-lg xl:max-w-xl"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </div>
                )}
              </div>
            </header>
            <FadeIn>
            <div className="relative mx-auto max-w-3xl xl:grid xl:max-w-none xl:grid-cols-[1fr_220px] xl:gap-10">
              <div className="max-w-3xl">
                <div className="xl:hidden">
                  <TableOfContents headings={headings} />
                </div>
                {(() => {
                  const parts = splitContentAfterThirdH2(post.content);
                  if (!parts) {
                    return <MarkdownContent content={post.content} />;
                  }
                  const [firstPart, secondPart] = parts;
                  const wantsSymfonyAudit = isSymfonyAuditCategory(post.category);
                  return (
                    <>
                      <MarkdownContent content={firstPart} />
                      <div data-cta-section className="my-8 rounded-lg bg-primary/5 p-6 text-center">
                        <p className="font-display text-lg font-semibold text-dark">
                          {wantsSymfonyAudit
                            ? "Besoin d'un regard expert sur votre code Symfony ?"
                            : "Besoin d'accompagnement sur votre projet ?"}
                        </p>
                        <Button
                          href={
                            wantsSymfonyAudit ? "/audit-symfony-gratuit" : "/contact"
                          }
                          className="mt-3"
                          variant="outline"
                        >
                          {wantsSymfonyAudit
                            ? "Demander un audit gratuit"
                            : "Parlons-en"}
                        </Button>
                      </div>
                      <MarkdownContent content={secondPart} />
                    </>
                  );
                })()}
              </div>
              <div className="hidden xl:block">
                <TableOfContents headings={headings} />
              </div>
            </div>
            </FadeIn>
            <FadeIn>
            <ArticleCta category={post.category} slug={slug} />
            </FadeIn>
            {post.faq && post.faq.length > 0 && (
              <FadeIn>
              <div className="mt-16">
                <SectionTitle>Questions fréquentes</SectionTitle>
                <div className="mx-auto mt-8 max-w-2xl">
                  <Accordion
                    items={post.faq.map((item) => ({
                      title: item.question,
                      content: item.answer,
                    }))}
                  />
                </div>
              </div>
              </FadeIn>
            )}
            {relatedPosts.length > 0 && (
              <FadeIn>
              <div className="mt-16">
                <SectionTitle>Articles connexes</SectionTitle>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
              </FadeIn>
            )}
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

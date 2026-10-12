import Link from "next/link";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import { categorySlugMap, extractHeadings, getCategorySlug, isSymfonyAuditCategory, readingTime } from "@/lib/blog";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Breadcrumb from "@/components/ui/Breadcrumb";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import MarkdownContent from "@/components/ui/MarkdownContent";
import ArticleCta, { getArticleCtaConfig } from "@/components/sections/ArticleCta";
import StickyArticleCta from "@/components/sections/StickyArticleCta";
import Accordion from "@/components/ui/Accordion";
import SectionTitle from "@/components/ui/SectionTitle";
import BlogCard from "@/components/cards/BlogCard";
import TableOfContents from "@/components/ui/TableOfContents";
import { BASE_URL } from "@/lib/metadata";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  eventJsonLd,
  faqPageJsonLd,
  howToJsonLd,
  pageGraphJsonLd,
} from "@/lib/structured-data";
import { getAuthorSchema } from "@/data/authors";
import { formatDate, isRecentlyUpdated } from "@/lib/dates";
import { getMessages } from "@/lib/i18n/messages";
import FadeIn from "@/components/ui/FadeIn";
import ScrollDepthTracker from "@/components/ui/ScrollDepthTracker";
import ArticleShareButtons from "@/components/ui/ArticleShareButtons";
import type { BlogLanguage, BlogPost } from "@/types/blog";

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

interface ArticleViewProps {
  readonly post: BlogPost;
  readonly relatedPosts: BlogPost[];
  readonly language: BlogLanguage;
  readonly languageSwitchTarget?: { language: BlogLanguage; href: string };
}

export default function ArticleView({
  post,
  relatedPosts,
  language,
  languageSwitchTarget,
}: ArticleViewProps) {
  const slug = post.slug;
  const messages = getMessages(language);
  const isEnglish = language === "en";
  const blogPath = isEnglish ? "/en/blog" : "/blog";
  const pagePath = isEnglish ? `/en/article/${slug}` : `/article/${slug}`;
  const url = `${BASE_URL}${pagePath}`;

  const shouldShowStickyCta = post.wordCount > STICKY_CTA_MIN_WORDS;
  const stickyCtaConfig = getArticleCtaConfig(post.category, slug, language);

  const headings = extractHeadings(post.content);

  const jsonLd = articleJsonLd({
    url,
    kind: post.kind,
    language: post.language,
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

  const categoryCrumb = !isEnglish && categorySlugMap[post.category]
    ? { name: post.category, path: `/blog/${categorySlugMap[post.category]}` }
    : undefined;

  const breadcrumb = breadcrumbJsonLd(
    [
      { name: messages.blog, path: blogPath },
      ...(categoryCrumb ? [categoryCrumb] : []),
      { name: post.title, path: pagePath },
    ],
    language,
  );

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
          language={language}
        />
      )}
      <main>
        <article className={`py-16 ${shouldShowStickyCta ? "pb-32 md:pb-16" : ""}`}>
          <Container className="mx-auto max-w-3xl">
            <header className="mb-16">
              <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <Breadcrumb
                      language={language}
                      items={[
                        { label: messages.blog, href: blogPath },
                        ...(categoryCrumb ? [{ label: categoryCrumb.name, href: categoryCrumb.path }] : []),
                        { label: post.title },
                      ]}
                    />
                    <LanguageSwitch target={languageSwitchTarget} />
                  </div>
                  <div className="mb-4 flex items-center gap-3 text-sm text-gray">
                    <time dateTime={post.date}>{formatDate(post.date, language)}</time>
                    <span>&middot;</span>
                    <span>{messages.readingTime(readingTime(post.wordCount))}</span>
                    {post.category && (
                      <>
                        <span>&middot;</span>
                        {isEnglish ? (
                          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                            {post.category}
                          </span>
                        ) : (
                          <Link
                            href={`/blog/${getCategorySlug(post.category)}`}
                            className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary hover:bg-primary hover:text-white"
                          >
                            {post.category}
                          </Link>
                        )}
                      </>
                    )}
                    {post.updatedAt !== post.date && isRecentlyUpdated(post.updatedAt, 90) && (
                      <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                        {messages.recentlyUpdated}
                      </span>
                    )}
                  </div>
                  <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
                    {post.title}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-start gap-4 min-[520px]:justify-between">
                    <div className="space-y-2">
                      {post.author && <p className="text-gray">{messages.by + " "}{post.author}</p>}
                      {post.updatedAt && post.updatedAt !== post.date && (
                        <p className="text-sm text-gray">
                          {messages.updatedOn}{" "}
                          <time dateTime={post.updatedAt}>
                            {formatDate(post.updatedAt, language)}
                          </time>
                        </p>
                      )}
                    </div>
                    <ArticleShareButtons url={url} title={post.title} articleSlug={slug} language={language} />
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
                  <TableOfContents headings={headings} language={language} />
                </div>
                {(() => {
                  const parts = splitContentAfterThirdH2(post.content);
                  if (!parts) {
                    return <MarkdownContent content={post.content} />;
                  }
                  const [firstPart, secondPart] = parts;
                  const wantsSymfonyAudit = !isEnglish && isSymfonyAuditCategory(post.category);
                  return (
                    <>
                      <MarkdownContent content={firstPart} />
                      <div data-cta-section className="my-8 rounded-lg bg-primary/5 p-6 text-center">
                        <p className="font-display text-lg font-semibold text-dark">
                          {wantsSymfonyAudit
                            ? "Besoin d'un regard expert sur votre code Symfony ?"
                            : messages.midCtaPrompt}
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
                            : messages.midCtaLabel}
                        </Button>
                      </div>
                      <MarkdownContent content={secondPart} />
                    </>
                  );
                })()}
              </div>
              <div className="hidden xl:block">
                <TableOfContents headings={headings} language={language} />
              </div>
            </div>
            </FadeIn>
            <FadeIn>
            <ArticleCta category={post.category} slug={slug} language={language} />
            </FadeIn>
            {post.faq && post.faq.length > 0 && (
              <FadeIn>
              <div className="mt-16">
                <SectionTitle>{messages.faq}</SectionTitle>
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
                <SectionTitle>{messages.relatedPosts}</SectionTitle>
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.slug} post={relatedPost} />
                  ))}
                </div>
              </div>
              </FadeIn>
            )}
            <div className="mt-12 border-t border-border pt-8">
              <Button href={blogPath} variant="outline">
                &larr; {messages.backToBlog}
              </Button>
            </div>
          </Container>
        </article>
      </main>
    </>
  );
}

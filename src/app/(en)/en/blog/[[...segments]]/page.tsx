import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllPosts, BLOG_PAGE_SIZE } from "@/lib/blog";
import {
  englishBlogPath,
  englishCategorySlug,
  getEnglishBlogParams,
  getEnglishCategories,
  resolveEnglishBlog,
} from "@/lib/blog-en";
import { ENGLISH_INDEXABLE } from "@/lib/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogListing from "@/components/sections/BlogListing";
import {
  blogItemListJsonLd,
  breadcrumbJsonLd,
  pageGraphJsonLd,
  webPageJsonLd,
} from "@/lib/structured-data";

interface EnglishBlogProps {
  readonly params: Promise<{ readonly segments?: string[] }>;
}

export async function generateStaticParams() {
  return getEnglishBlogParams(getAllPosts("en"));
}

export async function generateMetadata({ params }: EnglishBlogProps): Promise<Metadata> {
  const { segments = [] } = await params;
  const view = resolveEnglishBlog(segments, getAllPosts("en"));
  if (!view) return { title: "Page not found" };

  const subject = view.category ? `${view.category} | Efficience IT Blog` : "Efficience IT Blog";
  const title = view.page > 1 ? `${subject}, page ${view.page} of ${view.pageCount}` : subject;
  const description = view.category
    ? `Articles about ${view.category} on the Efficience IT blog.`
    : "Technical articles and lessons learned about Symfony, PHP and professional web development.";
  const isRoot = !view.category && view.page === 1;

  return {
    ...pageMetadata({
      title,
      description,
      path: englishBlogPath(view.page, view.categorySlug),
      absoluteTitle: true,
      language: "en",
      ...(isRoot && ENGLISH_INDEXABLE && { translationPaths: { fr: "/blog", en: "/en/blog" } }),
    }),
    ...(!ENGLISH_INDEXABLE && { robots: { index: false, follow: true } }),
  };
}

export default async function EnglishBlogPage({ params }: EnglishBlogProps) {
  const { segments = [] } = await params;
  const posts = getAllPosts("en");
  const view = resolveEnglishBlog(segments, posts);
  if (!view) notFound();

  const heading = view.category ? `${view.category}: Efficience IT Blog` : "Efficience IT Blog";
  const path = englishBlogPath(view.page, view.categorySlug);
  const crumbs = [
    { name: "Blog", path: "/en/blog" },
    ...(view.category ? [{ name: view.category, path: englishBlogPath(1, view.categorySlug) }] : []),
    ...(view.page > 1 ? [{ name: `Page ${view.page}`, path }] : []),
  ];
  const breadcrumb = breadcrumbJsonLd(crumbs, "en");
  const itemList = blogItemListJsonLd(view.posts, (view.page - 1) * BLOG_PAGE_SIZE + 1);
  const webPage = webPageJsonLd({
    name: heading,
    description: "Articles from the Efficience IT blog.",
    path,
    type: "CollectionPage",
    language: "en",
  });
  const categories = getEnglishCategories(posts).map((name) => ({
    name,
    href: englishBlogPath(1, englishCategorySlug(name)),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, itemList, webPage)) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container className="text-center">
            <Breadcrumb
              language="en"
              items={crumbs.map((crumb, index) => ({
                label: crumb.name,
                ...(index < crumbs.length - 1 && { href: crumb.path }),
              }))}
            />
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">{heading}</h1>
          </Container>
        </section>
        <BlogListing
          posts={view.posts}
          currentPage={view.page}
          pageCount={view.pageCount}
          language="en"
          categories={categories}
          allHref="/en/blog"
          getPageHref={(page) => englishBlogPath(page, view.categorySlug)}
        />
      </main>
    </>
  );
}

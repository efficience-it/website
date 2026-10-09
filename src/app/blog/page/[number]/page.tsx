import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogListing from "@/components/sections/BlogListing";
import CallToAction from "@/components/sections/CallToAction";
import {
  BLOG_PAGE_SIZE,
  blogPagePath,
  getBlogPageCount,
  getPostsForPage,
} from "@/lib/blog";
import {
  blogItemListJsonLd,
  breadcrumbJsonLd,
  pageGraphJsonLd,
  webPageJsonLd,
} from "@/lib/structured-data";

interface BlogPageNumberProps {
  params: Promise<{ number: string }>;
}

function parsePage(value: string, pageCount: number): number | null {
  if (!/^\d+$/.test(value)) return null;
  const page = Number(value);
  return page >= 2 && page <= pageCount ? page : null;
}

export async function generateStaticParams() {
  const pageCount = getBlogPageCount();
  return Array.from({ length: Math.max(0, pageCount - 1) }, (_, i) => ({
    number: String(i + 2),
  }));
}

export async function generateMetadata({ params }: BlogPageNumberProps): Promise<Metadata> {
  const { number } = await params;
  const pageCount = getBlogPageCount();
  const page = parsePage(number, pageCount);
  if (!page) return { title: "Page introuvable" };

  return pageMetadata({
    title: `Blog Efficience IT, page ${page} sur ${pageCount} | Symfony, PHP et développement web`,
    description: `Articles techniques et retours d'expérience sur Symfony, PHP et le développement web. Page ${page} sur ${pageCount}.`,
    path: blogPagePath(page),
    absoluteTitle: true,
  });
}

export default async function BlogPageNumber({ params }: Readonly<BlogPageNumberProps>) {
  const { number } = await params;
  const pageCount = getBlogPageCount();
  const page = parsePage(number, pageCount);
  if (!page) notFound();

  const posts = getPostsForPage(page);

  const breadcrumb = breadcrumbJsonLd([
    { name: "Blog", path: "/blog" },
    { name: `Page ${page}`, path: blogPagePath(page) },
  ]);
  const itemList = blogItemListJsonLd(posts, (page - 1) * BLOG_PAGE_SIZE + 1);
  const webPage = webPageJsonLd({
    name: `Blog Efficience IT, page ${page} sur ${pageCount}`,
    description: `Articles techniques et retours d'expérience. Page ${page} sur ${pageCount}.`,
    path: blogPagePath(page),
    type: "CollectionPage",
    datePublished: "2025-09-01",
    dateModified: "2026-10-09",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, itemList, webPage)) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container className="text-center">
            <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: `Page ${page}` }]} />
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
              Blog Efficience IT
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
              Page {page} sur {pageCount}
            </p>
          </Container>
        </section>
        <BlogListing posts={posts} currentPage={page} pageCount={pageCount} />
        <CallToAction />
      </main>
    </>
  );
}

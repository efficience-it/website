import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import BlogListing from "@/components/sections/BlogListing";
import { getBlogPageCount, getPostsForPage } from "@/lib/blog";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, blogItemListJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import CallToAction from "@/components/sections/CallToAction";
import LastUpdated from "@/components/ui/LastUpdated";

export const metadata = pageMetadata({
  title: "Blog Efficience IT | Symfony, PHP et développement web",
  description:
    "Articles techniques, retours d'expérience et veille autour de Symfony, PHP et du développement d'applications web professionnelles.",
  path: "/blog",
  absoluteTitle: true,
});

export default function BlogPage() {
  const posts = getPostsForPage(1);
  const pageCount = getBlogPageCount();

  const breadcrumb = breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]);
  const itemList = blogItemListJsonLd(posts);
  const webPage = webPageJsonLd({
    name: "Blog Efficience IT | Symfony, PHP et développement web",
    description: "Articles techniques, retours d'expérience et veille autour de Symfony, PHP et du développement d'applications web professionnelles.",
    path: "/blog",
    type: "CollectionPage",
    datePublished: "2025-09-01",
    dateModified: "2026-10-09",
  });

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, itemList, webPage)) }} />
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <LastUpdated path="/blog" />
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Blog Efficience IT
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Retours d&apos;expérience, guides techniques et veille sur
            Symfony, PHP, DevOps et le développement web professionnel.
            Nos articles sont rédigés par des développeurs en mission, à
            partir de cas concrets rencontrés chez nos clients.
          </p>
        </Container>
      </section>

      <BlogListing posts={posts} currentPage={1} pageCount={pageCount} />
      <CallToAction />
    </main>
    </>
  );
}

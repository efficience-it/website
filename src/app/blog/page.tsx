import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/cards/BlogCard";
import { getAllPosts, getCategories, getCategorySlug } from "@/lib/blog";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, blogItemListJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = pageMetadata({
  title: "Blog Efficience IT | Symfony, PHP et développement web",
  description:
    "Articles techniques, retours d'expérience et veille autour de Symfony, PHP et du développement d'applications web professionnelles.",
  path: "/blog",
  absoluteTitle: true,
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  const breadcrumb = breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]);
  const itemList = blogItemListJsonLd(posts);
  const webPage = webPageJsonLd({
    name: "Blog Efficience IT | Symfony, PHP et développement web",
    description: "Articles techniques, retours d'expérience et veille autour de Symfony, PHP et du développement d'applications web professionnelles.",
    path: "/blog",
    type: "CollectionPage",
    datePublished: "2025-09-01",
    dateModified: "2026-03-11",
  });

  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, itemList, webPage)) }} />
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <Breadcrumb items={[{ label: "Blog" }]} />
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

      <FadeIn>
      <section className="py-16">
        <Container>
          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <Link
                href="/blog"
                className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                Tous
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog/${getCategorySlug(cat)}`}
                  className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-medium text-dark hover:bg-primary hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} headingLevel={2} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray">
              Aucun article pour le moment.
            </p>
          )}
        </Container>
      </section>
      </FadeIn>
      <CallToAction />
    </main>
    </>
  );
}

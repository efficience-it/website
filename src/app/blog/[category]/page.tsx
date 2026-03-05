import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/cards/BlogCard";
import {
  categorySlugMap,
  getCategoryBySlug,
  getPostsByCategory,
} from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";

interface BlogCategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.values(categorySlugMap).map((slug) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: BlogCategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const categoryName = getCategoryBySlug(slug);

  if (!categoryName) {
    return { title: "Catégorie introuvable" };
  }

  return pageMetadata({
    title: `${categoryName} | Blog Efficience IT`,
    description: `Articles de la catégorie ${categoryName} sur le blog Efficience IT.`,
    path: `/blog/${slug}`,
    absoluteTitle: true,
  });
}

export default async function BlogCategoryPage({
  params,
}: BlogCategoryPageProps) {
  const { category: slug } = await params;
  const categoryName = getCategoryBySlug(slug);

  if (!categoryName) {
    notFound();
  }

  const posts = getPostsByCategory(categoryName);

  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            {categoryName}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Articles de la catégorie {categoryName}.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mb-8 text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:text-primary-dark"
            >
              &larr; Tous les articles
            </Link>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} headingLevel={2} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray">
              Aucun article dans cette catégorie pour le moment.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}

import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/cards/BlogCard";
import {
  categorySlugMap,
  getCategories,
  getCategoryBySlug,
  getCategorySlug,
  getPostsByCategory,
} from "@/lib/blog";
import Link from "next/link";
import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import FadeIn from "@/components/ui/FadeIn";

const categoryDescriptions: Record<string, string> = {
  Architecture:
    "Patterns et decisions techniques : architecture hexagonale, microservices, DDD, CQRS et conception d'applications maintenables.",
  Outils:
    "Symfony, PHP, Docker, CI/CD : nos guides pratiques sur les outils que nous utilisons au quotidien en mission.",
  Formation:
    "Montée en compétences, certifications et événements tech : ressources pour progresser sur Symfony et l'écosystème PHP.",
  PHP: "L'écosystème PHP : évolution du langage, standards PSR, outils d'analyse statique et runtime.",
  Projet:
    "Retours de mission, architecture logicielle et bonnes pratiques pour mener à bien vos projets web.",
  Agence:
    "Vie d'agence, recrutement et organisation : les coulisses d'Efficience IT.",
  "Green IT":
    "Éco-conception web, sobriété numérique et bonnes pratiques pour réduire l'impact environnemental de vos applications.",
  "Qualité de code":
    "Analyse statique, tests, conventions et outils pour produire un code PHP fiable et maintenable.",
};

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
    description:
      categoryDescriptions[categoryName] ??
      `Articles de la catégorie ${categoryName} sur le blog Efficience IT.`,
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
  const categories = getCategories();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Blog", path: "/blog" },
    { name: categoryName, path: `/blog/${slug}` },
  ]);

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            {categoryName}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            {categoryDescriptions[categoryName] ??
              `Articles de la catégorie ${categoryName}.`}
          </p>
        </Container>
      </section>

      <FadeIn>
      <section className="py-16">
        <Container>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Link
              href="/blog"
              className="rounded-full bg-light-gray px-4 py-1.5 text-sm font-medium text-dark hover:bg-primary hover:text-white transition-colors"
            >
              Tous
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog/${getCategorySlug(cat)}`}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  cat === categoryName
                    ? "bg-primary text-white"
                    : "bg-light-gray text-dark hover:bg-primary hover:text-white"
                }`}
              >
                {cat}
              </Link>
            ))}
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
      </FadeIn>
    </main>
    </>
  );
}

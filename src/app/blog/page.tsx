import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import BlogCard from "@/components/cards/BlogCard";
import { getAllPosts, getCategories } from "@/lib/blog";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Articles techniques sur Symfony, PHP, DevOps, cloud et bonnes pratiques web par l'équipe Efficience IT.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getCategories();

  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Blog
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Nos derniers articles techniques sur Symfony, PHP, DevOps et les
            bonnes pratiques du web.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <Link
                href="/blog"
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                Tous
              </Link>
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-light-gray px-4 py-2 text-sm font-medium text-dark"
                >
                  {cat}
                </span>
              ))}
            </div>
          )}

          {posts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray">
              Aucun article pour le moment.
            </p>
          )}
        </Container>
      </section>
    </main>
  );
}

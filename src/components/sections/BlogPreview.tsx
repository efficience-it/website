import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/cards/BlogCard";
import { getAllPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Nos derniers articles">Blog</SectionTitle>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray">
            Les articles seront disponibles prochainement.
          </p>
        )}
        <div className="mt-8 text-center">
          <Button href="/blog" variant="outline">
            Voir tous les articles
          </Button>
        </div>
      </Container>
    </section>
  );
}

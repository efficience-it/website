import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main>
      <article className="py-16">
        <Container className="mx-auto max-w-3xl">
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-3 text-sm text-gray">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {post.category && (
                <>
                  <span>&middot;</span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    {post.category}
                  </span>
                </>
              )}
            </div>
            <h1 className="font-display text-3xl font-bold text-dark md:text-4xl">
              {post.title}
            </h1>
            {post.author && (
              <p className="mt-4 text-gray">Par {post.author}</p>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-dark prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />

          <div className="mt-12 border-t border-border pt-8">
            <Button href="/blog" variant="outline">
              &larr; Retour au blog
            </Button>
          </div>
        </Container>
      </article>
    </main>
  );
}

function formatMarkdown(content: string): string {
  let html = content;

  // Code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, "<pre><code>$2</code></pre>");

  // Headings
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Inline code
  html = html.replace(/`(.+?)`/g, "<code>$1</code>");

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");
  html = html.replace(/(<li>.*<\/li>\n?)+/g, "<ul>$&</ul>");

  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, "<li>$1</li>");

  // Links
  html = html.replace(
    /\[(.+?)\]\((.+?)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>',
  );

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<li")
      )
        return trimmed;
      return `<p>${trimmed}</p>`;
    })
    .join("\n");

  return html;
}

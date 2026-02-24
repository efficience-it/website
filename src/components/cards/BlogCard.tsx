import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <div className="mb-3 flex items-center gap-3 text-sm text-gray">
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
      <h3 className="font-display text-lg font-bold text-dark">
        <Link href={`/blog/${post.slug}`} className="hover:text-primary">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-gray">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
      >
        Lire la suite &rarr;
      </Link>
    </article>
  );
}

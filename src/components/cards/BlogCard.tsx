import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import { JSX } from "react";

interface BlogCardProps {
  post: BlogPost;
  headingLevel?: number;
  priorityImage?: boolean;
}

export default function BlogCard({ post, headingLevel = 3, priorityImage = false }: BlogCardProps) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  return (
    <article className="overflow-hidden rounded-lg border-t-2 border-transparent bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg">
      {post.image && (
        <Link href={`/article/${post.slug}`}>
          <Image
            src={post.image}
            alt={post.title}
            width={400}
            height={220}
            className="h-48 w-full object-cover"
            {...(priorityImage && { priority: true })}
          />
        </Link>
      )}
      <div className="p-6">
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
      <Tag className="font-display text-lg font-bold text-dark">
        <Link href={`/article/${post.slug}`} className="hover:text-primary">
          {post.title}
        </Link>
      </Tag>
      <p className="mt-2 text-sm text-gray">{post.excerpt}</p>
      <Link
        href={`/article/${post.slug}`}
        className="group/arrow mt-4 inline-block text-sm font-semibold text-primary hover:text-primary-dark"
      >
        Lire la suite <span className="inline-block transition-transform duration-200 group-hover/arrow:translate-x-1">&rarr;</span>
      </Link>
      </div>
    </article>
  );
}

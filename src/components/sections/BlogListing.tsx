import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Pagination from "@/components/ui/Pagination";
import BlogCard from "@/components/cards/BlogCard";
import { blogPagePath, getCategories, getCategorySlug } from "@/lib/blog";
import { getMessages } from "@/lib/i18n/messages";
import type { BlogLanguage, BlogPost } from "@/types/blog";

interface CategoryLink {
  name: string;
  href: string;
}

interface BlogListingProps {
  posts: BlogPost[];
  currentPage: number;
  pageCount: number;
  language?: BlogLanguage;
  categories?: CategoryLink[];
  allHref?: string;
  getPageHref?: (page: number) => string;
}

export default function BlogListing({
  posts,
  currentPage,
  pageCount,
  language,
  categories = getCategories().map((name) => ({ name, href: `/blog/${getCategorySlug(name)}` })),
  allHref = "/blog",
  getPageHref = blogPagePath,
}: Readonly<BlogListingProps>) {
  const messages = getMessages(language);

  return (
    <FadeIn>
      <section className="py-16">
        <Container>
          {categories.length > 0 && (
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              <Link
                href={allHref}
                className="inline-flex min-h-[44px] items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                {messages.allPosts}
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="inline-flex min-h-[44px] items-center rounded-full bg-light-gray px-4 py-2 text-sm font-medium text-dark hover:bg-primary hover:text-white transition-colors"
                >
                  {cat.name}
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
            <p className="text-center text-gray">{messages.noPosts}</p>
          )}

          <Pagination currentPage={currentPage} pageCount={pageCount} getPageHref={getPageHref} language={language} />
        </Container>
      </section>
    </FadeIn>
  );
}

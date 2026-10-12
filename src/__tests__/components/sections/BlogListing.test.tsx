import { render, screen } from "@testing-library/react";
import BlogListing from "@/components/sections/BlogListing";
import type { BlogPost } from "@/types/blog";

const post: BlogPost = {
  slug: "example",
  title: "Example",
  date: "2026-01-01",
  author: "Author",
  category: "Symfony",
  kind: "tech",
  language: "en",
  excerpt: "Excerpt",
  content: "",
  wordCount: 10,
};

beforeEach(() => {
  (globalThis as unknown as Record<string, unknown>).IntersectionObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  }));
});

describe("BlogListing", () => {
  it("lists French categories and French labels by default", () => {
    render(<BlogListing posts={[]} currentPage={1} pageCount={1} />);
    expect(screen.getByText("Tous")).toHaveAttribute("href", "/blog");
    expect(screen.getByText("Aucun article pour le moment.")).toBeInTheDocument();
    expect(screen.getByText("Symfony")).toHaveAttribute("href", "/blog/symfony");
  });

  it("renders English categories, cards and pagination", () => {
    render(
      <BlogListing
        posts={[post]}
        currentPage={1}
        pageCount={2}
        language="en"
        categories={[{ name: "Symfony", href: "/en/blog/symfony" }]}
        allHref="/en/blog"
        getPageHref={(page) => `/en/blog/page/${page}`}
      />,
    );
    expect(screen.getByText("All")).toHaveAttribute("href", "/en/blog");
    expect(screen.getByRole("link", { name: "Symfony" })).toHaveAttribute("href", "/en/blog/symfony");
    expect(screen.getAllByRole("link", { name: "Example" })[0]).toHaveAttribute("href", "/en/article/example");
    expect(screen.getByText("Next")).toHaveAttribute("href", "/en/blog/page/2");
  });

  it("hides the filters without categories and shows the English empty state", () => {
    render(<BlogListing posts={[]} currentPage={1} pageCount={1} language="en" categories={[]} />);
    expect(screen.queryByText("All")).toBeNull();
    expect(screen.getByText("No articles yet.")).toBeInTheDocument();
  });
});

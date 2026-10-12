import { render } from "@testing-library/react";
import BlogCard from "@/components/cards/BlogCard";
import type { BlogPost } from "@/types/blog";

const post: BlogPost = {
  slug: "exemple",
  title: "Exemple",
  date: "2026-01-01",
  author: "Auteur",
  category: "Symfony",
  kind: "tech",
  excerpt: "Extrait",
  content: "",
  wordCount: 100,
  image: "/images/blog/cover-exemple.webp",
};

describe("BlogCard", () => {
  it("loads the cover lazily without a high fetch priority", () => {
    const { container } = render(<BlogCard post={post} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).not.toHaveAttribute("fetchpriority");
  });

  it("renders without an image", () => {
    const { container } = render(<BlogCard post={{ ...post, image: undefined }} />);
    expect(container.querySelector("img")).toBeNull();
  });
});

describe("BlogCard language", () => {
  it("links to the French article with French labels by default", () => {
    const { container, getByText } = render(<BlogCard post={post} />);
    expect(container.querySelector("h3 a")).toHaveAttribute("href", "/article/exemple");
    expect(getByText(/Lire la suite/)).toBeInTheDocument();
    expect(getByText("1 janvier 2026")).toBeInTheDocument();
  });

  it("links to the English article with English labels", () => {
    const { container, getByText } = render(<BlogCard post={{ ...post, language: "en" }} />);
    expect(container.querySelector("h3 a")).toHaveAttribute("href", "/en/article/exemple");
    expect(getByText(/Read more/)).toBeInTheDocument();
    expect(getByText("January 1, 2026")).toBeInTheDocument();
  });
});

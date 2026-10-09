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

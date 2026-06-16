import { render } from "@testing-library/react";
import MarkdownContent from "@/components/ui/MarkdownContent";
import React from "react";

jest.mock("remark-gfm", () => ({}));

interface MockProps {
  components?: Record<string, React.ComponentType<Record<string, unknown>>>;
  children?: React.ReactNode;
}

jest.mock("react-markdown", () => {
  const MockMarkdown = ({ components, children }: MockProps) => {
    if (children === "__RENDER_IMG__" && components?.img) {
      const Img = components.img as React.ComponentType<Record<string, unknown>>;
      return <Img src="/test-image.png" alt="Alt text" title="Title text" />;
    }
    if (children === "__RENDER_IMG_NO_ALT__" && components?.img) {
      const Img = components.img as React.ComponentType<Record<string, unknown>>;
      return <Img src="/test-image.png" />;
    }
    if (children === "__RENDER_IMG_EMPTY__" && components?.img) {
      const Img = components.img as React.ComponentType<Record<string, unknown>>;
      return <Img src="" />;
    }
    if (children === "__RENDER_A_EXTERNAL__" && components?.a) {
      const A = components.a as React.ComponentType<Record<string, unknown>>;
      return <A href="https://google.com">Google</A>;
    }
    if (children === "__RENDER_A_INTERNAL__" && components?.a) {
      const A = components.a as React.ComponentType<Record<string, unknown>>;
      return <A href="/about">Internal</A>;
    }
    if (children === "__RENDER_A_INTERNAL_EMPTY__" && components?.a) {
      const A = components.a as React.ComponentType<Record<string, unknown>>;
      return <A href="">Empty</A>;
    }
    if (children === "__RENDER_H2_COMPLEX__" && components?.h2) {
      const H2 = components.h2 as React.ComponentType<Record<string, unknown>>;
      return (
        <H2>
          {["Hello ", <strong key="world">World</strong>]}
        </H2>
      );
    }
    if (children === "__RENDER_H2_EMPTY__" && components?.h2) {
      const H2 = components.h2 as React.ComponentType<Record<string, unknown>>;
      return <H2>{null}</H2>;
    }
    if (children === "__RENDER_H3__" && components?.h3) {
      const H3 = components.h3 as React.ComponentType<Record<string, unknown>>;
      return <H3>Titré !</H3>;
    }
    if (children === "__RENDER_PRE__" && components?.pre) {
      const Pre = components.pre as React.ComponentType<Record<string, unknown>>;
      return <Pre>Code content</Pre>;
    }
    return <div data-testid="markdown">{children}</div>;
  };
  MockMarkdown.displayName = "MockMarkdown";
  return MockMarkdown;
});

jest.mock("next/link", () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

jest.mock("@/components/ui/CopyButton", () => {
  const MockCopyButton = () => <button>Copy</button>;
  MockCopyButton.displayName = "MockCopyButton";
  return MockCopyButton;
});

describe("MarkdownContent", () => {
  it("renders images with lazy loading and async decoding", () => {
    const { container } = render(<MarkdownContent content="__RENDER_IMG__" />);
    
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("src")).toBe("/test-image.png");
    expect(img?.getAttribute("alt")).toBe("Alt text");
    expect(img?.getAttribute("title")).toBe("Title text");
    expect(img?.getAttribute("loading")).toBe("lazy");
    expect(img?.getAttribute("decoding")).toBe("async");
    expect(img?.classList.contains("rounded-md")).toBe(true);
    expect(img?.classList.contains("object-cover")).toBe(false);
    expect(img?.classList.contains("aspect-video")).toBe(false);
  });

  it("handles images without alt text (branch coverage)", () => {
    const { container } = render(<MarkdownContent content="__RENDER_IMG_NO_ALT__" />);
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("alt")).toBe("");
  });

  it("returns null for images without src", () => {
    const { container } = render(<MarkdownContent content="__RENDER_IMG_EMPTY__" />);
    expect(container.querySelector("img")).toBeNull();
  });

  it("renders external links with target blank", () => {
    const { container } = render(<MarkdownContent content="__RENDER_A_EXTERNAL__" />);
    const link = container.querySelector("a");
    expect(link?.getAttribute("target")).toBe("_blank");
    expect(link?.getAttribute("rel")).toBe("noopener noreferrer");
  });

  it("renders internal links using Link component", () => {
    const { container } = render(<MarkdownContent content="__RENDER_A_INTERNAL__" />);
    const link = container.querySelector("a");
    expect(link?.getAttribute("href")).toBe("/about");
  });

  it("renders internal links even with empty href", () => {
    const { container } = render(<MarkdownContent content="__RENDER_A_INTERNAL_EMPTY__" />);
    const link = container.querySelector("a");
    expect(link?.getAttribute("href")).toBe("");
  });

  it("renders headings with complex children and generated ids", () => {
    const { container } = render(<MarkdownContent content="__RENDER_H2_COMPLEX__" />);
    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2?.getAttribute("id")).toBe("hello-world");
    expect(h2?.textContent).toBe("Hello World");
  });

  it("renders headings with empty children", () => {
    const { container } = render(<MarkdownContent content="__RENDER_H2_EMPTY__" />);
    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2?.getAttribute("id")).toBe("");
  });

  it("renders h3 headings", () => {
    const { container } = render(<MarkdownContent content="__RENDER_H3__" />);
    const h3 = container.querySelector("h3");
    expect(h3).not.toBeNull();
    expect(h3?.getAttribute("id")).toBe("titre");
  });

  it("renders pre blocks with CopyButton", () => {
    const { container, getByText } = render(<MarkdownContent content="__RENDER_PRE__" />);
    expect(container.querySelector("pre")).not.toBeNull();
    expect(getByText("Copy")).toBeInTheDocument();
  });
});

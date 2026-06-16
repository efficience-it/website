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
    if (children === "__RENDER_A_EXTERNAL__" && components?.a) {
      const A = components.a as React.ComponentType<Record<string, unknown>>;
      return <A href="https://google.com">Google</A>;
    }
    if (children === "__RENDER_A_INTERNAL__" && components?.a) {
      const A = components.a as React.ComponentType<Record<string, unknown>>;
      return <A href="/about">Internal</A>;
    }
    if (children === "__RENDER_H2__" && components?.h2) {
      const H2 = components.h2 as React.ComponentType<Record<string, unknown>>;
      return <H2>Mon Super Titre</H2>;
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
    expect(img?.classList.contains("aspect-video")).toBe(true);
    expect(img?.classList.contains("object-cover")).toBe(true);
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

  it("renders headings with generated ids", () => {
    const { container } = render(<MarkdownContent content="__RENDER_H2__" />);
    const h2 = container.querySelector("h2");
    expect(h2).not.toBeNull();
    expect(h2?.getAttribute("id")).toBe("mon-super-titre");
    expect(h2?.textContent).toBe("Mon Super Titre");
  });
});

import { render } from "@testing-library/react";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

describe("ResponsiveImage", () => {
  it("emits a <picture> with avif + webp sources for blog images", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/blog/test-article.webp"
        alt="Test"
        width={400}
        height={220}
        sizes="(max-width: 768px) 100vw, 33vw"
      />,
    );
    const picture = container.querySelector("picture");
    expect(picture).not.toBeNull();
    const sources = container.querySelectorAll("source");
    expect(sources).toHaveLength(2);
    expect(sources[0].getAttribute("type")).toBe("image/avif");
    expect(sources[0].getAttribute("srcset")).toContain(
      "/images/blog/responsive/test-article-400w.avif 400w",
    );
    expect(sources[0].getAttribute("srcset")).toContain(
      "/images/blog/responsive/test-article-1200w.avif 1200w",
    );
    expect(sources[1].getAttribute("type")).toBe("image/webp");
    const img = container.querySelector("img");
    expect(img?.getAttribute("loading")).toBe("lazy");
    expect(img?.getAttribute("decoding")).toBe("async");
  });

  it("falls back to a plain <img> for non-blog sources", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/illustrations/foo.svg"
        alt="Illustration"
        width={200}
        height={200}
        sizes="200px"
      />,
    );
    expect(container.querySelector("picture")).toBeNull();
    const img = container.querySelector("img");
    expect(img).not.toBeNull();
    expect(img?.getAttribute("src")).toBe("/images/illustrations/foo.svg");
    expect(img?.getAttribute("sizes")).toBe("200px");
  });

  it("honors loading=eager and fetchPriority=high when provided", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/blog/foo.webp"
        alt="Foo"
        width={720}
        height={405}
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
      />,
    );
    const img = container.querySelector("img");
    expect(img?.getAttribute("loading")).toBe("eager");
    expect(img?.getAttribute("fetchpriority")).toBe("high");
  });
});

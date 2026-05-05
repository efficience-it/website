import { render } from "@testing-library/react";
import ResponsiveImage from "@/components/ui/ResponsiveImage";

describe("ResponsiveImage", () => {
  it("emits a <picture> with avif + webp sources only for widths in the manifest", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/blog/afup-day-2025.webp"
        alt="AFUP 2025"
        width={1200}
        height={630}
        sizes="(max-width: 768px) 100vw, 33vw"
      />,
    );
    const picture = container.querySelector("picture");
    expect(picture).not.toBeNull();
    const sources = container.querySelectorAll("source");
    expect(sources).toHaveLength(2);
    expect(sources[0].getAttribute("type")).toBe("image/avif");
    expect(sources[0].getAttribute("srcset")).toBe(
      "/images/blog/responsive/afup-day-2025-400w.avif 400w, /images/blog/responsive/afup-day-2025-800w.avif 800w, /images/blog/responsive/afup-day-2025-1200w.avif 1200w",
    );
    expect(sources[1].getAttribute("type")).toBe("image/webp");
  });

  it("limits the srcset to widths actually generated for the source", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/blog/afup-day-2023.webp"
        alt="AFUP 2023"
        width={400}
        height={220}
        sizes="100vw"
      />,
    );
    const sources = container.querySelectorAll("source");
    expect(sources[0].getAttribute("srcset")).toBe(
      "/images/blog/responsive/afup-day-2023-400w.avif 400w",
    );
    expect(sources[1].getAttribute("srcset")).toBe(
      "/images/blog/responsive/afup-day-2023-400w.webp 400w",
    );
  });

  it("falls back to a plain <img> for blog images without manifest entry", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/blog/this-image-does-not-exist-anywhere.webp"
        alt="Missing"
        width={400}
        height={220}
        sizes="100vw"
      />,
    );
    expect(container.querySelector("picture")).toBeNull();
    expect(container.querySelector("img")).not.toBeNull();
  });

  it("falls back to a non-picture image for non-blog sources", () => {
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
    expect(img?.getAttribute("src")).toBe("/images/illustrations/foo.svg");
  });

  it("honors loading=eager and fetchPriority=high when provided", () => {
    const { container } = render(
      <ResponsiveImage
        src="/images/blog/afup-day-2025.webp"
        alt="Foo"
        width={1200}
        height={630}
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

import { pageMetadata, BASE_URL, SITE_NAME } from "@/lib/metadata";

describe("pageMetadata", () => {
  it("returns correct structure with basic options", () => {
    const result = pageMetadata({
      title: "Test Page",
      description: "A test description",
      path: "/test",
    });

    expect(result.title).toBe("Test Page");
    expect(result.description).toBe("A test description");
    expect(result.openGraph).toMatchObject({
      title: "Test Page",
      description: "A test description",
      url: `${BASE_URL}/test`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
    });
    expect(result.alternates?.canonical).toBe(`${BASE_URL}/test`);
  });

  it("uses absoluteTitle when set", () => {
    const result = pageMetadata({
      title: "Absolute Title",
      description: "desc",
      absoluteTitle: true,
    });

    expect(result.title).toEqual({ absolute: "Absolute Title" });
  });

  it("defaults path to empty string", () => {
    const result = pageMetadata({
      title: "No Path",
      description: "desc",
    });

    expect(result.openGraph).toMatchObject({ url: BASE_URL });
    expect(result.alternates?.canonical).toBe(BASE_URL);
  });

  it("includes publishedTime when provided", () => {
    const result = pageMetadata({
      title: "Article",
      description: "desc",
      publishedTime: "2025-01-15",
    });

    expect((result.openGraph as Record<string, unknown>).publishedTime).toBe(
      "2025-01-15",
    );
  });

  it("includes authors when provided", () => {
    const result = pageMetadata({
      title: "Article",
      description: "desc",
      authors: ["Alice", "Bob"],
    });

    expect((result.openGraph as Record<string, unknown>).authors).toEqual([
      "Alice",
      "Bob",
    ]);
  });

  it("includes both publishedTime and authors", () => {
    const result = pageMetadata({
      title: "Full Article",
      description: "desc",
      path: "/blog/full",
      publishedTime: "2025-06-01",
      authors: ["Charlie"],
    });

    const og = result.openGraph as Record<string, unknown>;
    expect(og.publishedTime).toBe("2025-06-01");
    expect(og.authors).toEqual(["Charlie"]);
    expect(og.url).toBe(`${BASE_URL}/blog/full`);
  });

  it("uses custom image when provided", () => {
    const result = pageMetadata({
      title: "Custom Image",
      description: "desc",
      image: "https://example.com/image.png",
    });

    const images = (result.openGraph as Record<string, unknown>).images;
    expect(images).toEqual([
      { url: "https://example.com/image.png", width: 1200, height: 630 },
    ]);
  });
});

import { render, screen } from "@testing-library/react";
import BlogPageNumber, { generateMetadata, generateStaticParams } from "@/app/blog/page/[number]/page";
import { getBlogPageCount } from "@/lib/blog";

const params = (number: string) => ({ params: Promise.resolve({ number }) });

describe("blog page number route", () => {
  it("generates static params for pages 2 and above only", async () => {
    const result = await generateStaticParams();
    expect(result).toHaveLength(getBlogPageCount() - 1);
    expect(result[0]).toEqual({ number: "2" });
  });

  it("sets a self canonical and page title in metadata", async () => {
    const meta = await generateMetadata(params("2"));
    expect(meta.alternates?.canonical).toBe("https://www.itefficience.com/blog/page/2");
    expect(String((meta.title as { absolute: string }).absolute)).toContain("page 2");
  });

  it.each(["1", "0", "abc", "999", "2x"])("returns a fallback title for the invalid page %s", async (value) => {
    expect(await generateMetadata(params(value))).toEqual({ title: "Page introuvable" });
  });

  it("renders the page with its pagination", async () => {
    render(await BlogPageNumber(params("2")));
    expect(screen.getByRole("heading", { level: 1, name: "Blog Efficience IT" })).toBeInTheDocument();
    expect(screen.getByText(`Page 2 sur ${getBlogPageCount()}`)).toBeInTheDocument();
    expect(screen.getByRole("navigation", { name: "Pagination" })).toBeInTheDocument();
  });

  it.each(["1", "abc", "999"])("responds 404 for the invalid page %s", async (value) => {
    await expect(BlogPageNumber(params(value))).rejects.toThrow();
  });
});

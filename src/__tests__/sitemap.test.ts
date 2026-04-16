import sitemap, { dynamic } from "@/app/sitemap";

describe("sitemap", () => {
  it("returns a valid Date as lastModified for every entry", () => {
    expect(dynamic).toBe("force-static");
    const entries = sitemap();

    expect(entries.length).toBeGreaterThan(0);

    entries.forEach((entry) => {
      const lastModified = new Date(entry.lastModified as string | Date);
      expect(Number.isNaN(lastModified.getTime())).toBe(false);
    });
  });
});

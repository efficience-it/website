import robots, { dynamic } from "@/app/robots";

describe("robots", () => {
  it("ne bloque pas /domain/ pour que le noindex soit lu", () => {
    const { rules } = robots();
    const list = Array.isArray(rules) ? rules : [rules];
    for (const rule of list) {
      expect(rule.disallow).toBeUndefined();
    }
  });

  it("reste statique", () => {
    expect(dynamic).toBe("force-static");
  });

  it("déclare les sitemaps", () => {
    expect(robots().sitemap).toContain("https://www.itefficience.com/sitemap.xml");
  });
});

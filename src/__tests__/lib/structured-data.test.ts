import { howToJsonLd, reviewsJsonLd, serviceJsonLd } from "@/lib/structured-data";
import { categorySlugMap } from "@/lib/blog";

describe("howToJsonLd", () => {
  it("returns correct schema with steps", () => {
    const result = howToJsonLd("Install Node", "How to install Node.js", [
      { name: "Download", text: "Download the installer" },
      { name: "Run", text: "Run the installer" },
      { name: "Verify", text: "Run node --version" },
    ]);

    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("HowTo");
    expect(result.name).toBe("Install Node");
    expect(result.description).toBe("How to install Node.js");
    expect(result.step).toHaveLength(3);
    expect(result.step[0]).toEqual({
      "@type": "HowToStep",
      position: 1,
      name: "Download",
      text: "Download the installer",
    });
    expect(result.step[2].position).toBe(3);
  });

  it("returns empty step array when no steps provided", () => {
    const result = howToJsonLd("Empty", "No steps", []);
    expect(result.step).toEqual([]);
  });
});

describe("serviceJsonLd", () => {
  it("links provider to the canonical organization @id", () => {
    const result = serviceJsonLd({
      name: "Service",
      description: "Description",
      path: "/service",
    });
    expect(result.provider["@id"]).toBe(
      "https://www.itefficience.com/#organization",
    );
    expect(result.provider["@type"]).toBe("ProfessionalService");
  });
});

describe("reviewsJsonLd", () => {
  it("links itemReviewed to the canonical organization @id", () => {
    const result = reviewsJsonLd([
      { name: "X", role: "CEO", company: "Acme", quote: "Great" },
    ]);
    expect(result[0].itemReviewed["@id"]).toBe(
      "https://www.itefficience.com/#organization",
    );
    expect(result[0].itemReviewed["@type"]).toBe("ProfessionalService");
  });
});

describe("categorySlugMap", () => {
  it("maps category names to slugs", () => {
    expect(categorySlugMap["Symfony"]).toBe("symfony");
    expect(categorySlugMap["Green IT"]).toBe("green-it");
    expect(Object.keys(categorySlugMap).length).toBeGreaterThan(0);
  });
});

import { howToJsonLd, reviewsJsonLd, serviceJsonLd, eventJsonLd } from "@/lib/structured-data";
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

describe("eventJsonLd", () => {
  const baseEvent = {
    name: "AFUP Day 2024 Lille",
    startDate: "2024-05-24",
    endDate: "2024-05-24",
    location: { name: "Théâtre de la Comédie de Lille", address: "Place du Théâtre, 59000 Lille, France" },
    organizer: { name: "AFUP", url: "https://afup.org" },
    url: "https://event.afup.org/afup-day-2024/",
  };

  it("returns a valid BusinessEvent schema with required fields", () => {
    const result = eventJsonLd(baseEvent);
    expect(result["@context"]).toBe("https://schema.org");
    expect(result["@type"]).toBe("BusinessEvent");
    expect(result.name).toBe("AFUP Day 2024 Lille");
    expect(result.startDate).toBe("2024-05-24");
    expect(result.endDate).toBe("2024-05-24");
    expect(result.eventStatus).toBe("https://schema.org/EventScheduled");
    expect(result.eventAttendanceMode).toBe("https://schema.org/OfflineEventAttendanceMode");
    expect(result.location).toEqual({ "@type": "Place", name: "Théâtre de la Comédie de Lille", address: "Place du Théâtre, 59000 Lille, France" });
    expect(result.organizer).toEqual({ "@type": "Organization", name: "AFUP", url: "https://afup.org" });
    expect(result.url).toBe("https://event.afup.org/afup-day-2024/");
  });
});

describe("categorySlugMap", () => {
  it("maps category names to slugs", () => {
    expect(categorySlugMap["Symfony"]).toBe("symfony");
    expect(categorySlugMap["Green IT"]).toBe("green-it");
    expect(Object.keys(categorySlugMap).length).toBeGreaterThan(0);
  });
});

import { howToJsonLd, reviewsJsonLd, serviceJsonLd, eventJsonLd, jobPostingJsonLd, articleJsonLd, TECH_ENTITIES } from "@/lib/structured-data";
import { categorySlugMap } from "@/lib/blog";
import type { Job } from "@/../data/jobs";

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
    expect(result.provider).toEqual({
      "@id": "https://www.itefficience.com/#organization",
    });
  });
});

describe("reviewsJsonLd", () => {
  it("links itemReviewed to the canonical organization @id", () => {
    const result = reviewsJsonLd([
      { name: "X", role: "CEO", company: "Acme", quote: "Great" },
    ]);
    expect(result[0].itemReviewed).toEqual({
      "@id": "https://www.itefficience.com/#organization",
    });
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

describe("jobPostingJsonLd", () => {
  const baseJob: Job = {
    slug: "dev-symfony",
    title: "Dev Symfony",
    category: "CDI",
    domain: "developpement",
    description: "Rejoignez une équipe Symfony senior à Lille.",
    datePosted: "2026-04-01",
    employmentType: "FULL_TIME",
    jobLocation: { addressLocality: "Lille", addressCountry: "FR" },
  };

  it("returns the minimal valid JobPosting schema", () => {
    const result = jobPostingJsonLd(baseJob);
    expect(result["@type"]).toBe("JobPosting");
    expect(result.title).toBe("Dev Symfony");
    expect(result.datePosted).toBe("2026-04-01");
    expect(result.employmentType).toBe("FULL_TIME");
    expect(result.url).toContain("/ta-carriere#dev-symfony");
    expect(result.hiringOrganization).toEqual({ "@id": expect.stringContaining("/#organization") });
    expect(result.directApply).toBeUndefined();
    expect(result.validThrough).toBeUndefined();
    expect(result.jobLocationType).toBeUndefined();
    expect(result.experienceRequirements).toBeUndefined();
    expect(result.educationRequirements).toBeUndefined();
    expect(result.skills).toBeUndefined();
  });

  it("includes optional fields when provided", () => {
    const result = jobPostingJsonLd({
      ...baseJob,
      validThrough: "2026-10-01",
      jobLocationType: "TELECOMMUTE",
      experienceRequirements: { monthsOfExperience: 36 },
      educationRequirements: "Bac+5",
      skills: ["Symfony", "PHP", "Doctrine"],
      directApply: true,
    });
    expect(result.validThrough).toBe("2026-10-01");
    expect(result.jobLocationType).toBe("TELECOMMUTE");
    expect(result.experienceRequirements).toEqual({
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: 36,
    });
    expect(result.educationRequirements).toBe("Bac+5");
    expect(result.skills).toBe("Symfony, PHP, Doctrine");
    expect(result.directApply).toBe(true);
  });

  it("omits skills when array is empty", () => {
    const result = jobPostingJsonLd({ ...baseJob, skills: [] });
    expect(result.skills).toBeUndefined();
  });
});

describe("TECH_ENTITIES", () => {
  it("exposes Wikidata entity links for known frameworks", () => {
    expect(TECH_ENTITIES.symfony.sameAs).toContain("https://www.wikidata.org/wiki/Q2063468");
    expect(TECH_ENTITIES.php.sameAs).toContain("https://www.wikidata.org/wiki/Q59");
  });
});

describe("entity linking via mainTech", () => {
  const articleInput = {
    url: "https://www.itefficience.com/article/test",
    isTech: true,
    title: "Test",
    excerpt: "Excerpt",
    author: { "@type": "Person" as const, name: "Auteur", url: "https://example.com", jobTitle: "Author", sameAs: [] },
    category: "Symfony",
    date: "2026-04-01",
    wordCount: 1200,
    timeRequiredMinutes: 6,
  };

  it("serviceJsonLd emits about[] from known mainTech keys", () => {
    const result = serviceJsonLd({
      name: "Service",
      description: "Description",
      path: "/foo",
      mainTech: ["symfony", "php"],
    });
    expect(Array.isArray(result.about)).toBe(true);
    expect(result.about).toHaveLength(2);
    expect(result.about?.[0]).toMatchObject({
      "@type": "Thing",
      name: "Symfony",
      sameAs: expect.arrayContaining(["https://www.wikidata.org/wiki/Q2063468"]),
    });
  });

  it("serviceJsonLd omits about when mainTech is missing", () => {
    const result = serviceJsonLd({ name: "Service", description: "Description", path: "/foo" });
    expect(result.about).toBeUndefined();
  });

  it("filters out unknown tech keys", () => {
    const result = serviceJsonLd({
      name: "Service",
      description: "Description",
      path: "/foo",
      mainTech: ["symfony", "unknown-tech"],
    });
    expect(result.about).toHaveLength(1);
    expect(result.about?.[0].name).toBe("Symfony");
  });

  it("returns no about when all mainTech keys are unknown", () => {
    const result = serviceJsonLd({
      name: "Service",
      description: "Description",
      path: "/foo",
      mainTech: ["nope", "also-nope"],
    });
    expect(result.about).toBeUndefined();
  });

  it("articleJsonLd emits about when mainTech is provided", () => {
    const result = articleJsonLd({ ...articleInput, mainTech: ["symfony"] });
    expect(result.about).toHaveLength(1);
    expect(result.about?.[0].name).toBe("Symfony");
  });

  it("articleJsonLd omits about when mainTech is absent", () => {
    const result = articleJsonLd(articleInput);
    expect(result.about).toBeUndefined();
  });
});

import { getJobsByDomain, domains, jobs, spontaneousEmail, type Job } from "../../../data/jobs";

const sampleJob = (overrides: Partial<Job> = {}): Job => ({
  slug: "dev-symfony",
  title: "Dev Symfony",
  category: "CDI",
  domain: "developpement",
  description: "desc",
  datePosted: "2026-04-01",
  employmentType: "FULL_TIME",
  jobLocation: { addressLocality: "Lille", addressCountry: "FR" },
  ...overrides,
});

describe("getJobsByDomain", () => {
  it("returns an empty array for an unknown domain", () => {
    expect(getJobsByDomain("unknown-domain")).toEqual([]);
  });

  it("returns an empty array for a valid domain when no jobs exist", () => {
    expect(getJobsByDomain("developpement")).toEqual([]);
  });

  it("filters jobs matching the domain slug", () => {
    jobs.push(
      sampleJob({ slug: "dev-symfony", title: "Dev Symfony", domain: "developpement" }),
      sampleJob({ slug: "commercial", title: "Commercial", domain: "business" }),
    );
    const result = getJobsByDomain("developpement");
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe("Dev Symfony");
    jobs.length = 0;
  });
});

describe("domains", () => {
  it("contains expected domain slugs", () => {
    const slugs = domains.map((d) => d.slug);
    expect(slugs).toContain("developpement");
    expect(slugs).toContain("recrutement");
  });
});

describe("spontaneousEmail", () => {
  it("is defined", () => {
    expect(spontaneousEmail).toBe("recrutement@itefficience.com");
  });
});

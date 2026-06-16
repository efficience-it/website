import { formatDate, isRecentlyUpdated } from "@/lib/dates";

describe("formatDate", () => {
  it("formats an ISO date in French long form", () => {
    expect(formatDate("2026-04-12")).toBe("12 avril 2026");
  });

  it("is stable across timezones (UTC)", () => {
    expect(formatDate("2026-01-01")).toBe("1 janvier 2026");
  });
});

describe("isRecentlyUpdated", () => {
  const daysAgo = (n: number) =>
    new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString();

  it("returns true within the window", () => {
    expect(isRecentlyUpdated(daysAgo(10), 90)).toBe(true);
  });

  it("returns false outside the window", () => {
    expect(isRecentlyUpdated(daysAgo(200), 90)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isRecentlyUpdated(undefined, 90)).toBe(false);
  });

  it("returns false for an invalid date string", () => {
    expect(isRecentlyUpdated("not-a-date", 90)).toBe(false);
  });

  it("returns false for a future date", () => {
    expect(isRecentlyUpdated(daysAgo(-5), 90)).toBe(false);
  });
});

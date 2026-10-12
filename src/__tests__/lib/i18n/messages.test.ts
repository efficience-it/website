import { getMessages } from "@/lib/i18n/messages";

describe("getMessages", () => {
  it("returns French messages by default", () => {
    expect(getMessages().tableOfContents).toBe("Sommaire");
  });

  it("returns English messages", () => {
    expect(getMessages("en").tableOfContents).toBe("Contents");
  });

  it("formats the reading time per language", () => {
    expect(getMessages("fr").readingTime(5)).toBe("5 min de lecture");
    expect(getMessages("en").readingTime(5)).toBe("5 min read");
  });

  it("defines the same keys in both languages", () => {
    expect(Object.keys(getMessages("en")).sort()).toEqual(Object.keys(getMessages("fr")).sort());
  });

  it("never reuses a French label in English except identical words", () => {
    const fr = getMessages("fr");
    const en = getMessages("en");
    const shared = ["blog"];
    for (const key of Object.keys(fr) as (keyof typeof fr)[]) {
      if (typeof fr[key] !== "string" || shared.includes(key)) continue;
      expect(en[key]).not.toBe(fr[key]);
    }
  });
});

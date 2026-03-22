import { trackEvent } from "@/lib/tracking";

describe("trackEvent", () => {
  let savedGtag: typeof window.gtag;

  beforeEach(() => {
    savedGtag = window.gtag;
  });

  afterEach(() => {
    window.gtag = savedGtag;
  });

  it("calls window.gtag when available", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    trackEvent("form_submit", { form_type: "contact" });

    expect(gtagSpy).toHaveBeenCalledWith("event", "form_submit", {
      form_type: "contact",
    });
  });

  it("does nothing when window.gtag is undefined", () => {
    window.gtag = undefined;
    expect(() => trackEvent("cta_click")).not.toThrow();
  });

  it("passes all parameters to gtag", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    trackEvent("form_submit", {
      form_type: "audit",
      symfony_version: "7.x",
      team_size: "3-5",
      problem: "Performance",
    });

    expect(gtagSpy).toHaveBeenCalledWith("event", "form_submit", {
      form_type: "audit",
      symfony_version: "7.x",
      team_size: "3-5",
      problem: "Performance",
    });
  });
});

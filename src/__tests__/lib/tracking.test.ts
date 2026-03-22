import { trackEvent } from "@/lib/tracking";

describe("trackEvent", () => {
  it("calls window.gtag when available", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    trackEvent("form_submit", { form_type: "contact" });

    expect(gtagSpy).toHaveBeenCalledWith("event", "form_submit", {
      form_type: "contact",
    });

    delete window.gtag;
  });

  it("does nothing when window.gtag is undefined", () => {
    delete window.gtag;
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

    delete window.gtag;
  });
});

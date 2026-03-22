import { render, screen, fireEvent } from "@testing-library/react";
import CallToAction from "@/components/sections/CallToAction";

describe("CallToAction", () => {
  let savedGtag: typeof window.gtag;

  beforeEach(() => {
    savedGtag = window.gtag;
  });

  afterEach(() => {
    window.gtag = savedGtag;
  });

  it("renders heading and both CTA links", () => {
    render(<CallToAction />);
    expect(screen.getByText("Vous avez un projet en tête ?")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Audit gratuit 30 min" })).toHaveAttribute("href", "/audit-symfony-gratuit");
    expect(screen.getByRole("link", { name: "Contactez-nous" })).toHaveAttribute("href", "/contact");
  });

  it("has data-cta-section attribute", () => {
    const { container } = render(<CallToAction />);
    expect(container.querySelector("[data-cta-section]")).toBeInTheDocument();
  });

  it("fires tracking events on click", () => {
    const gtagSpy = jest.fn();
    window.gtag = gtagSpy;

    render(<CallToAction />);

    fireEvent.click(screen.getByRole("link", { name: "Audit gratuit 30 min" }));
    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "footer_cta",
      cta_text: "Audit gratuit 30 min",
    });

    fireEvent.click(screen.getByRole("link", { name: "Contactez-nous" }));
    expect(gtagSpy).toHaveBeenCalledWith("event", "cta_click", {
      cta_location: "footer_cta",
      cta_text: "Contactez-nous",
    });
  });
});

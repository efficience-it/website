import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";
import * as navigationModule from "@/../data/navigation";

describe("Footer", () => {
  it("renders the copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });

  it("renders footer navigation sections", () => {
    render(<Footer />);
    expect(screen.getByText("Nos expertises")).toBeInTheDocument();
    expect(screen.getByText("L'agence")).toBeInTheDocument();
    expect(screen.getByText("Contactez-nous !")).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(<Footer />);
    expect(screen.getByText("contact@itefficience.com")).toBeInTheDocument();
  });

  it("renders social link label when no icon is provided", () => {
    const original = navigationModule.footerNav.social;
    Object.defineProperty(navigationModule.footerNav, "social", {
      value: [
        ...original,
        { label: "NoIconLink", href: "https://example.com" },
      ],
      writable: true,
      configurable: true,
    });

    render(<Footer />);
    expect(screen.getByText("NoIconLink")).toBeInTheDocument();

    Object.defineProperty(navigationModule.footerNav, "social", {
      value: original,
      writable: true,
      configurable: true,
    });
  });
});

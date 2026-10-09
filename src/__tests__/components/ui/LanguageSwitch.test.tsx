import { render, screen } from "@testing-library/react";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

describe("LanguageSwitch", () => {
  it("renders nothing without a translation", () => {
    const { container } = render(<LanguageSwitch />);
    expect(container).toBeEmptyDOMElement();
  });

  it("links to the English version from a French article", () => {
    render(<LanguageSwitch target={{ language: "en", href: "/en/article/exemple" }} />);
    const link = screen.getByRole("link", { name: "Read this article in English" });
    expect(link).toHaveTextContent("EN");
    expect(link).toHaveAttribute("href", "/en/article/exemple");
    expect(link).toHaveAttribute("hreflang", "en");
    expect(link).toHaveAttribute("lang", "en");
  });

  it("links back to the French version from an English article", () => {
    render(<LanguageSwitch target={{ language: "fr", href: "/article/exemple" }} />);
    const link = screen.getByRole("link", { name: "Lire cet article en français" });
    expect(link).toHaveTextContent("FR");
    expect(link).toHaveAttribute("href", "/article/exemple");
    expect(link).toHaveAttribute("hreflang", "fr");
    expect(link).toHaveAttribute("lang", "fr");
  });
});

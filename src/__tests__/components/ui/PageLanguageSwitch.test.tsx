import { render, screen } from "@testing-library/react";
import PageLanguageSwitch from "@/components/ui/PageLanguageSwitch";

const mockPathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname(),
}));

jest.mock("@/lib/i18n/pages", () => ({
  getPageTranslation: (pathname: string) =>
    pathname === "/contact"
      ? { language: "en", href: "/en/contact" }
      : pathname === "/en/contact"
        ? { language: "fr", href: "/contact" }
        : undefined,
}));

describe("PageLanguageSwitch", () => {
  it("links to the English page when it exists", () => {
    mockPathname.mockReturnValue("/contact");
    render(<PageLanguageSwitch />);
    const link = screen.getByRole("link", { name: "View this page in English" });
    expect(link).toHaveAttribute("href", "/en/contact");
    expect(link).toHaveAttribute("hreflang", "en");
  });

  it("links back to the French page from an English page", () => {
    mockPathname.mockReturnValue("/en/contact");
    render(<PageLanguageSwitch />);
    expect(screen.getByRole("link", { name: "Voir cette page en français" })).toHaveAttribute("href", "/contact");
  });

  it("renders nothing when the page has no translation", () => {
    mockPathname.mockReturnValue("/mentions-legales");
    const { container } = render(<PageLanguageSwitch />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders nothing without a pathname", () => {
    mockPathname.mockReturnValue(null);
    const { container } = render(<PageLanguageSwitch />);
    expect(container).toBeEmptyDOMElement();
  });
});

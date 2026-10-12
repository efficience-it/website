import { render, screen } from "@testing-library/react";
import EnglishHeader from "@/components/layout/EnglishHeader";
import EnglishFooter from "@/components/layout/EnglishFooter";

jest.mock("@/components/layout/ThemeToggle", () => ({
  __esModule: true,
  default: () => <button type="button">theme</button>,
}));

describe("EnglishHeader", () => {
  it("renders the logo linking to the French home and the theme toggle", () => {
    render(<EnglishHeader />);
    expect(screen.getByAltText("Efficience IT")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("hreflang", "fr");
    expect(screen.getByRole("button", { name: "theme" })).toBeInTheDocument();
  });
});

describe("EnglishFooter", () => {
  it("flags French-only pages as French", () => {
    render(<EnglishFooter />);
    const legal = screen.getByRole("link", { name: "Legal notice (in French)" });
    expect(legal).toHaveAttribute("href", "/mentions-legales");
    expect(legal).toHaveAttribute("hreflang", "fr");
    const contact = screen.getByRole("link", { name: "Contact (in French)" });
    expect(contact).toHaveAttribute("lang", "fr");
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import Breadcrumb from "@/components/ui/Breadcrumb";

describe("Breadcrumb", () => {
  it("renders Accueil link", () => {
    render(<Breadcrumb items={[{ label: "Page" }]} />);
    expect(screen.getByText("Accueil")).toHaveAttribute("href", "/");
  });

  it("renders last item as text without link", () => {
    render(<Breadcrumb items={[{ label: "Page" }]} />);
    const item = screen.getByText("Page");
    expect(item.tagName).toBe("SPAN");
  });

  it("renders intermediate item as link when href is provided", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Parent", href: "/parent" },
          { label: "Enfant" },
        ]}
      />,
    );
    expect(screen.getByText("Parent")).toHaveAttribute("href", "/parent");
    const enfant = screen.getByText("Enfant");
    expect(enfant.tagName).toBe("SPAN");
  });
});

describe("Breadcrumb in English", () => {
  it("omits the home link and the leading separator", () => {
    render(
      <Breadcrumb
        language="en"
        items={[{ label: "Blog", href: "/en/blog" }, { label: "Page" }]}
      />,
    );
    expect(screen.queryByText("Home")).toBeNull();
    expect(screen.queryByText("Accueil")).toBeNull();
    expect(screen.getByText("Blog")).toHaveAttribute("href", "/en/blog");
    expect(screen.getByRole("navigation")).toHaveAttribute("aria-label", "Breadcrumb");
    expect(screen.getAllByText("/")).toHaveLength(1);
  });
});

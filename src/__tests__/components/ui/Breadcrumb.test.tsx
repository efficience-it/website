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

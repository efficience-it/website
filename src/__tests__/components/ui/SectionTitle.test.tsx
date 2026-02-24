import { render, screen } from "@testing-library/react";
import SectionTitle from "@/components/ui/SectionTitle";

describe("SectionTitle", () => {
  it("renders the title", () => {
    render(<SectionTitle>Nos expertises</SectionTitle>);
    expect(screen.getByRole("heading", { name: "Nos expertises" })).toBeInTheDocument();
  });

  it("renders a subtitle when provided", () => {
    render(<SectionTitle subtitle="Un sous-titre">Titre</SectionTitle>);
    expect(screen.getByText("Un sous-titre")).toBeInTheDocument();
  });

  it("is centered by default", () => {
    const { container } = render(<SectionTitle>Titre</SectionTitle>);
    expect(container.firstChild).toHaveClass("text-center");
  });
});

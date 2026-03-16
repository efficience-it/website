import { render, screen } from "@testing-library/react";
import Home, { metadata } from "@/app/page";

describe("Home page", () => {
  it("renders the hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /agence symfony/i }),
    ).toBeInTheDocument();
  });

  it("renders the expertise section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /nos expertises/i }),
    ).toBeInTheDocument();
  });

  it("renders the about preview section", () => {
    render(<Home />);
    expect(
      screen.getByText(/solutions digitales rentables/i),
    ).toBeInTheDocument();
  });

  it("renders the process steps", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /notre fonctionnement/i }),
    ).toBeInTheDocument();
  });

  it("renders the CTA section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /projet en tête/i }),
    ).toBeInTheDocument();
  });

  it("renders the testimonials section", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /témoignages/i }),
    ).toBeInTheDocument();
  });

  it("exports metadata", () => {
    expect(metadata).toBeDefined();
    expect(metadata.description).toBeTruthy();
  });
});

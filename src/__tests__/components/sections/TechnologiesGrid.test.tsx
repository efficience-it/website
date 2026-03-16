import { render, screen, fireEvent } from "@testing-library/react";
import TechnologiesGrid from "@/components/sections/TechnologiesGrid";
import { technologies } from "@/../data/expertise";

describe("TechnologiesGrid", () => {
  it("renders up to 16 technologies initially", () => {
    render(<TechnologiesGrid />);
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(Math.min(16, technologies.length));
  });

  it("shows 'Voir plus' button when more than 16 technologies", () => {
    render(<TechnologiesGrid />);
    if (technologies.length > 16) {
      expect(screen.getByText("Voir plus")).toBeInTheDocument();
    }
  });

  it("shows all technologies after clicking 'Voir plus'", () => {
    render(<TechnologiesGrid />);
    if (technologies.length > 16) {
      fireEvent.click(screen.getByText("Voir plus"));
      const images = screen.getAllByRole("img");
      expect(images.length).toBe(technologies.length);
      expect(screen.queryByText("Voir plus")).not.toBeInTheDocument();
    }
  });

  it("renders technology names", () => {
    render(<TechnologiesGrid />);
    expect(screen.getByText(technologies[0].name)).toBeInTheDocument();
  });
});

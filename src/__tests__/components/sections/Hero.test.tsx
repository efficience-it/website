import { render, screen } from "@testing-library/react";
import Hero from "@/components/sections/Hero";

describe("Hero component", () => {
  it("renders the hero heading", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /agence php et symfony/i }),
    ).toBeInTheDocument();
  });

  it("renders hero image with priority and fetchpriority=high", () => {
    render(<Hero />);
    const img = screen.getByAltText(/illustration d'écran de code source/i);
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("fetchpriority")).toBe("high");
  });
});

import { render, screen } from "@testing-library/react";
import NotFound, { metadata } from "@/app/not-found";

describe("Not found page", () => {
  it("renders 404 heading", () => {
    render(<NotFound />);
    expect(screen.getByText("Page non trouvée")).toBeInTheDocument();
  });

  it("renders a link back to home", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("link", { name: /accueil/i }),
    ).toHaveAttribute("href", "/");
  });

  it("exports metadata with noindex", () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBeTruthy();
    expect(metadata.robots).toEqual({ index: false });
  });
});

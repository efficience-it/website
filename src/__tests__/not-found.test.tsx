import { render, screen } from "@testing-library/react";
import NotFound, { metadata } from "@/app/(fr)/not-found";

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

  it("renders suggestion links to useful pages", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { name: "Quelques pistes pour reprendre votre route" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Développement web sur mesure" })).toHaveAttribute("href", "/developpement-web-sur-mesure");
    expect(screen.getByRole("link", { name: "Modernisation de vos applications" })).toHaveAttribute("href", "/modernisation-applicative");
  });
});

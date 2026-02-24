import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("Not found page", () => {
  it("renders 404 text", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("renders a link back to home", () => {
    render(<NotFound />);
    expect(
      screen.getByRole("link", { name: /retour à l'accueil/i }),
    ).toHaveAttribute("href", "/");
  });
});

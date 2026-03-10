import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

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
});

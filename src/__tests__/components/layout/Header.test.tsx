import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Header", () => {
  it("renders the logo", () => {
    render(<Header />);
    expect(screen.getByAltText("Efficience IT")).toBeInTheDocument();
  });

  it("renders the contact button", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "/contact",
    );
  });

  it("renders desktop navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Symfony")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
  });
});

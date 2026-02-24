import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/Footer";

describe("Footer", () => {
  it("renders the copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });

  it("renders footer navigation sections", () => {
    render(<Footer />);
    expect(screen.getByText("Nos expertises")).toBeInTheDocument();
    expect(screen.getByText("L'agence")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders the contact email", () => {
    render(<Footer />);
    expect(screen.getByText("contact@itefficience.com")).toBeInTheDocument();
  });
});

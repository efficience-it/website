import { render, screen } from "@testing-library/react";
import TestimonialCard from "@/components/cards/TestimonialCard";

describe("TestimonialCard", () => {
  const testimonial = {
    name: "Jean Dupont",
    role: "CTO",
    company: "Acme",
    quote: "Super collaboration.",
  };

  it("renders the quote", () => {
    render(<TestimonialCard testimonial={testimonial} />);
    expect(screen.getByText(/super collaboration/i)).toBeInTheDocument();
  });

  it("renders the author name and role", () => {
    render(<TestimonialCard testimonial={testimonial} />);
    expect(screen.getByText("Jean Dupont")).toBeInTheDocument();
    expect(screen.getByText("CTO, Acme")).toBeInTheDocument();
  });
});

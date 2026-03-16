import { render, screen } from "@testing-library/react";
import JobCard from "@/components/cards/JobCard";
import { Job } from "@/../data/jobs";

const mockJob: Job = {
  title: "Dev Symfony",
  category: "Développement",
  domain: "developpement",
  description: "Poste de dev Symfony senior.",
};

describe("JobCard", () => {
  it("renders job title", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getByText("Dev Symfony")).toBeInTheDocument();
  });

  it("renders job category", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getByText("Développement")).toBeInTheDocument();
  });

  it("renders job description", () => {
    render(<JobCard job={mockJob} />);
    expect(screen.getByText("Poste de dev Symfony senior.")).toBeInTheDocument();
  });

  it("renders a link to /contact", () => {
    render(<JobCard job={mockJob} />);
    const link = screen.getByRole("link", { name: "Postuler" });
    expect(link).toHaveAttribute("href", "/contact");
  });
});

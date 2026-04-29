import { render, screen } from "@testing-library/react";
import JobCard from "@/components/cards/JobCard";
import { Job } from "@/../data/jobs";

const mockJob: Job = {
  slug: "dev-symfony",
  title: "Dev Symfony",
  category: "Développement",
  domain: "developpement",
  description: "Poste de dev Symfony senior.",
  datePosted: "2026-04-01",
  employmentType: "FULL_TIME",
  jobLocation: { addressLocality: "Lille", addressCountry: "FR" },
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

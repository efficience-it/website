import { render, screen } from "@testing-library/react";
import ProcessStep from "@/components/cards/ProcessStep";

describe("ProcessStep", () => {
  it("renders the step number", () => {
    render(
      <ProcessStep number={1} title="Cadrage" description="Description" />,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders the title and description", () => {
    render(
      <ProcessStep number={2} title="Planification" description="On planifie" />,
    );
    expect(screen.getByRole("heading", { name: "Planification" })).toBeInTheDocument();
    expect(screen.getByText("On planifie")).toBeInTheDocument();
  });
});

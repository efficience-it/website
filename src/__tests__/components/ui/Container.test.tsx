import { render, screen } from "@testing-library/react";
import Container from "@/components/ui/Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container><p>Inside container</p></Container>);
    expect(screen.getByText("Inside container")).toBeInTheDocument();
  });

  it("applies max-w-7xl class", () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveClass("max-w-7xl");
  });
});

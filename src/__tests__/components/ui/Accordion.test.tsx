import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "@/components/ui/Accordion";

const items = [
  { title: "Question 1", content: "Réponse 1" },
  { title: "Question 2", content: "Réponse 2" },
];

describe("Accordion", () => {
  it("renders all item titles", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("Question 1")).toBeInTheDocument();
    expect(screen.getByText("Question 2")).toBeInTheDocument();
  });

  it("expands an item when clicked", () => {
    render(<Accordion items={items} />);
    const button = screen.getByText("Question 1");
    fireEvent.click(button);
    expect(button.closest("button")).toHaveAttribute("aria-expanded", "true");
  });

  it("collapses an item when clicked again", () => {
    render(<Accordion items={items} />);
    const button = screen.getByText("Question 1");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button.closest("button")).toHaveAttribute("aria-expanded", "false");
  });
});

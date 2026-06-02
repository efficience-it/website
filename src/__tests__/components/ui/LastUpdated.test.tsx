import { render, screen } from "@testing-library/react";
import LastUpdated from "@/components/ui/LastUpdated";
import { getStaticRoutes } from "@/lib/routes";

describe("LastUpdated", () => {
  it("renders the last modified date for a known route", () => {
    const route = getStaticRoutes()[0];
    render(<LastUpdated path={route.path} />);
    expect(screen.getByText(/Page mise à jour le/)).toBeInTheDocument();
    expect(screen.getByText(/Page mise à jour le/).querySelector("time")).toHaveAttribute(
      "dateTime",
      route.lastModified,
    );
  });

  it("renders nothing for an unknown route", () => {
    const { container } = render(<LastUpdated path="/route-inexistante-xyz" />);
    expect(container).toBeEmptyDOMElement();
  });
});

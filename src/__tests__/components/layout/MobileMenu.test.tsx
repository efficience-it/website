import { render, screen, fireEvent } from "@testing-library/react";
import MobileMenu from "@/components/layout/MobileMenu";
import { NavItem } from "@/types/navigation";

jest.mock("next/link", () => {
  const React = jest.requireActual("react");
  const MockLink = React.forwardRef(
    function MockLink(
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
      ref: React.Ref<HTMLAnchorElement>,
    ) {
      return (
        <a ref={ref} {...props}>
          {props.children}
        </a>
      );
    },
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

const items: NavItem[] = [
  {
    label: "Services",
    items: [
      { label: "Dev Symfony", href: "/dev-symfony" },
      { label: "Audit technique", href: "/audit" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Références", href: "/references" },
];

function getHamburger() {
  return screen.getByRole("button", { name: "Ouvrir le menu" });
}

describe("MobileMenu", () => {
  it("renders hamburger button", () => {
    render(<MobileMenu items={items} />);
    expect(getHamburger()).toBeInTheDocument();
    expect(getHamburger()).toHaveAttribute("aria-expanded", "false");
  });

  it("opens menu showing all items on click", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    expect(
      screen.getByRole("button", { name: "Fermer le menu" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Références")).toBeInTheDocument();
  });

  it("toggles dropdown sub-items on click", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    const servicesButton = screen.getByRole("button", { name: /Services/ });
    fireEvent.click(servicesButton);

    expect(screen.getByText("Dev Symfony")).toBeInTheDocument();
    expect(screen.getByText("Audit technique")).toBeInTheDocument();

    fireEvent.click(servicesButton);
    expect(screen.queryByText("Dev Symfony")).not.toBeInTheDocument();
  });

  it("closes menu when clicking a dropdown link", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    const servicesButton = screen.getByRole("button", { name: /Services/ });
    fireEvent.click(servicesButton);

    fireEvent.click(screen.getByText("Dev Symfony"));
    expect(screen.queryByText("Blog")).not.toBeInTheDocument();
    expect(getHamburger()).toBeInTheDocument();
  });

  it("closes menu when clicking a simple link", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    fireEvent.click(screen.getByText("Blog"));
    expect(screen.queryByText("Références")).not.toBeInTheDocument();
    expect(getHamburger()).toBeInTheDocument();
  });

  it("shows both dropdown and simple link items", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
    expect(screen.getByText("Références")).toBeInTheDocument();
  });

  it("shows audit and contact links", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    const auditLink = screen.getByText("Audit Symfony gratuit");
    expect(auditLink).toBeInTheDocument();
    expect(auditLink).toHaveAttribute("href", "/audit-symfony-gratuit");

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute("href", "/contact");
  });

  it("closes menu when clicking audit link", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    fireEvent.click(screen.getByText("Audit Symfony gratuit"));
    expect(screen.queryByText("Blog")).not.toBeInTheDocument();
    expect(getHamburger()).toBeInTheDocument();
  });

  it("closes menu when clicking contact link", () => {
    render(<MobileMenu items={items} />);
    fireEvent.click(getHamburger());

    fireEvent.click(screen.getByText("Contact"));
    expect(screen.queryByText("Blog")).not.toBeInTheDocument();
    expect(getHamburger()).toBeInTheDocument();
  });
});

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
  columns?: number;
  highlight?: NavLink;
}

export type NavItem = NavLink | NavDropdown;

export function isDropdown(item: NavItem): item is NavDropdown {
  return "items" in item;
}

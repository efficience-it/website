"use client";

import { useState } from "react";
import Link from "next/link";
import { NavItem, isDropdown } from "@/types/navigation";

interface MobileMenuProps {
  items: NavItem[];
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="p-2 text-dark"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
      >
        {open ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-full z-50 border-t border-border bg-white shadow-lg">
          <ul className="divide-y divide-border">
            {items.map((item, index) =>
              isDropdown(item) ? (
                <li key={item.label}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 font-medium text-dark"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.label}
                    <span
                      className={`text-xs transition-transform duration-200 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedIndex === index && (
                    <ul className="bg-light-gray pb-2">
                      {item.items.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block px-8 py-2 text-sm text-dark hover:text-primary"
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 font-medium text-dark hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
            <li>
              <Link
                href="/audit-symfony-gratuit"
                className="block px-4 py-3 font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                Audit Symfony gratuit
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-3 font-semibold text-primary"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

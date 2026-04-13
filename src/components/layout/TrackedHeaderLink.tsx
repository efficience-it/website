"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

interface TrackedHeaderLinkProps {
  href: string;
  className?: string;
  location: string;
  text: string;
  children: ReactNode;
}

export default function TrackedHeaderLink({
  href,
  className,
  location,
  text,
  children,
}: TrackedHeaderLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("cta_click", { cta_location: location, cta_text: text })}
    >
      {children}
    </Link>
  );
}

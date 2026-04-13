"use client";

import { ReactNode } from "react";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

type ButtonVariant = "primary" | "outline" | "outline-white" | "white" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface TrackedCtaButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  location: string;
  text: string;
  children: ReactNode;
}

export default function TrackedCtaButton({
  href,
  variant,
  size,
  className,
  location,
  text,
  children,
}: TrackedCtaButtonProps) {
  return (
    <Button
      href={href}
      variant={variant}
      size={size}
      className={className}
      onClick={() => trackEvent("cta_click", { cta_location: location, cta_text: text })}
    >
      {children}
    </Button>
  );
}

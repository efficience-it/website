"use client";

import { trackEvent } from "@/lib/tracking";

interface TrackedEmailLinkProps {
  email: string;
  className?: string;
}

export default function TrackedEmailLink({ email, className }: TrackedEmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("cta_click", { cta_location: "footer", cta_text: "email_contact" })}
    >
      {email}
    </a>
  );
}

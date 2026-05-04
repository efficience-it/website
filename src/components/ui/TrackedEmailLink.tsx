"use client";

import { trackEvent } from "@/lib/tracking";

interface TrackedEmailLinkProps {
  email: string;
  sourceLocation?: string;
  className?: string;
}

export default function TrackedEmailLink({
  email,
  sourceLocation = "footer",
  className,
}: TrackedEmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={() => trackEvent("email_clicked", { source_location: sourceLocation })}
    >
      {email}
    </a>
  );
}

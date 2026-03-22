"use client";

import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

interface TrackedArticleButtonProps {
  href: string;
  label: string;
  slug?: string;
}

export default function TrackedArticleButton({ href, label, slug }: TrackedArticleButtonProps) {
  return (
    <Button
      href={href}
      variant="outline"
      className="mt-4"
      onClick={() => trackEvent("cta_click", {
        cta_location: "article_body",
        cta_text: label,
        article_slug: slug,
      })}
    >
      {label}
    </Button>
  );
}

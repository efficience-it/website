"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/tracking";

interface StickyArticleCtaProps {
  href: string;
  slug?: string;
  label?: string;
}

export default function StickyArticleCta({
  href,
  slug,
  label = "Parler de votre projet",
}: Readonly<StickyArticleCtaProps>) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const targets = document.querySelectorAll("[data-cta-section]");
    if (targets.length === 0) return;

    const intersecting = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.set(entry.target, entry.isIntersecting);
        }
        const anyVisible = Array.from(intersecting.values()).some(Boolean);
        setVisible(!anyVisible);
      },
      { threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-primary/95 px-4 py-4 text-center backdrop-blur-sm transition-transform duration-300 md:inset-x-auto md:right-6 md:bottom-6 md:w-auto md:max-w-xs md:rounded-lg md:border md:px-5 md:py-4 md:shadow-lg ${
        visible
          ? "translate-y-0 md:translate-x-0"
          : "pointer-events-none translate-y-full md:translate-x-[140%] md:translate-y-0"
      }`}
    >
      <p className="mb-3 text-sm font-medium text-white">
        Besoin d&apos;un regard externe sur votre projet ?
      </p>
      <Button
        href={href}
        variant="white"
        size="sm"
        className="w-full"
        onClick={() => trackEvent("cta_click", {
          cta_location: "article_sticky",
          cta_text: label,
          article_slug: slug,
        })}
      >
        {label}
      </Button>
    </div>
  );
}

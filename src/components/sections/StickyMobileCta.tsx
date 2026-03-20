"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const targets = document.querySelectorAll("[data-cta-section]");
    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setVisible(!anyVisible);
      },
      { threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-white/20 bg-primary px-4 py-3 text-center transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/audit-symfony-gratuit"
        className="font-display text-sm font-semibold text-white"
        onClick={() => trackEvent("cta_click", { cta_location: "sticky_mobile", cta_text: "Audit gratuit 30 min" })}
      >
        Audit gratuit 30 min &rarr;
      </Link>
    </div>
  );
}

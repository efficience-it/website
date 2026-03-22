"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking";

interface ScrollDepthTrackerProps {
  slug: string;
}

export default function ScrollDepthTracker({ slug }: ScrollDepthTrackerProps) {
  const firedRef = useRef<Set<number>>(new Set());
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    const checkScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const t of thresholds) {
        if (percent >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);
          trackEvent("scroll_depth", {
            event_label: slug,
            scroll_percent: `${t}%`,
          });
        }
      }
    };

    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        checkScroll();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [slug]);

  return null;
}

"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/tracking";

interface ScrollDepthTrackerProps {
  slug: string;
}

export default function ScrollDepthTracker({ slug }: ScrollDepthTrackerProps) {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;

      const percent = Math.round((window.scrollY / scrollHeight) * 100);

      for (const t of thresholds) {
        if (percent >= t && !firedRef.current.has(t)) {
          firedRef.current.add(t);
          trackEvent("scroll_depth", {
            event_label: slug,
            event_category: `${t}%`,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  return null;
}

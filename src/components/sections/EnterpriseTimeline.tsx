"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/ui/Container";

interface EnterpriseTimelineItem {
  year: string;
  title: string;
  description: string;
}

interface EnterpriseTimelineProps {
  items: EnterpriseTimelineItem[];
}

export default function EnterpriseTimeline({ items }: Readonly<EnterpriseTimelineProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const markerViewportRatio = 0.8;
  const lineStartOffset = 12;

  useEffect(() => {
    const updateTimeline = () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      const rect = container.getBoundingClientRect();
      const markerY = window.innerHeight * markerViewportRatio;
      const rawProgress = markerY - rect.top - lineStartOffset;
      const clampedProgress = Math.max(0, Math.min(rawProgress, rect.height - lineStartOffset));
      if (progressBarRef.current) {
        progressBarRef.current.style.height = `${clampedProgress}px`;
      }

      const nextActiveItems: number[] = [];
      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }
        const itemRect = item.getBoundingClientRect();
        const pointOffset = itemRect.top - rect.top + lineStartOffset;
        if (clampedProgress >= pointOffset) {
          nextActiveItems.push(index);
        }
      });

      setActiveItems(nextActiveItems);
    };

    let rafId = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateTimeline);
    };

    updateTimeline();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const activeSet = useMemo(() => new Set(activeItems), [activeItems]);

  return (
    <section className="py-16">
      <Container>
        <div ref={containerRef} className="relative mx-auto max-w-2xl">
          <div
            className="pointer-events-none absolute left-4 w-1 -translate-x-1/2 bg-primary/20"
            style={{ top: `${lineStartOffset}px`, height: `calc(100% - ${lineStartOffset}px)` }}
          />
          <div
            ref={progressBarRef}
            className="pointer-events-none absolute left-4 w-1 -translate-x-1/2 bg-primary"
            style={{ top: `${lineStartOffset}px`, height: "0px" }}
          />
          {items.map((item, index) => {
            const isActive = activeSet.has(index);
            return (
              <div
                key={`${item.year}-${index}`}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className="relative pb-10 pl-10 last:pb-0"
              >
                <div
                  className={`absolute left-4 top-1 h-5 w-5 -translate-x-1/2 rounded-full border-2 bg-white transition-all duration-500 ${
                    isActive ? "border-primary opacity-100" : "border-primary/30 opacity-40"
                  }`}
                />
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  <span className="text-sm font-bold text-primary">{item.year}</span>
                  <h3 className="mt-1 font-display text-lg font-bold text-dark">{item.title}</h3>
                  <p className="mt-1 text-gray">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

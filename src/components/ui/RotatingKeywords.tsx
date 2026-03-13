"use client";

import { useEffect, useState } from "react";

interface RotatingKeywordsProps {
  keywords: string[];
  interval?: number;
}

export default function RotatingKeywords({
  keywords,
  interval = 2500,
}: RotatingKeywordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % keywords.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [keywords.length, interval]);

  return (
    <span className="relative inline-block">
      <span
        className={`inline-block text-primary transition-all duration-300 ${
          isAnimating
            ? "-translate-y-4 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {keywords[currentIndex]}
      </span>
    </span>
  );
}

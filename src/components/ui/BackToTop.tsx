"use client";

import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 300;

interface BackToTopProps {
    label: string;
}


export default function BackToTop({ label }: Readonly<BackToTopProps>) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > SCROLL_THRESHOLD);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? "auto" : "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            type="button"
            aria-label={label}
            onClick={handleClick}
            className="fixed bottom-4 right-4 z-50 rounded-full bg-primary h-12 w-12 inline-flex items-center justify-center text-white shadow-lg transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:scale-100 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark hover:bg-primary-dark text-2xl">
            <span aria-hidden="true">↑</span>
        </button>
    );
}
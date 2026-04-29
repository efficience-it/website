"use client";

import { useEffect } from "react";

type Theme = "light" | "dark";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
};

export default function ThemeToggle() {
  useEffect(() => {
    const mediaQuery = globalThis.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = (event: MediaQueryListEvent) => {
      const storedTheme = globalThis.localStorage.getItem("theme");
      if (storedTheme) return;
      const nextTheme: Theme = event.matches ? "dark" : "light";
      applyTheme(nextTheme);
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, []);

  const toggleTheme = () => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    const nextTheme: Theme = isDarkNow ? "light" : "dark";
    applyTheme(nextTheme);
    globalThis.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-dark transition-colors hover:bg-light-gray dark:bg-light-gray"
      aria-label="Basculer le thème"
      title="Basculer le thème"
    >
      {/* Soleil: visible en mode sombre (pour indiquer “passer en clair”) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="hidden h-5 w-5 dark:block"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M5.636 5.636l1.59 1.59M16.773 16.773l1.591 1.591M3 12h2.25M18.75 12H21M5.636 18.364l1.59-1.591M16.773 7.227l1.591-1.59M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>

      {/* Lune: visible en mode clair (pour indiquer “passer en sombre”) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 dark:hidden"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3a7.5 7.5 0 0 0 9.79 9.79Z" />
      </svg>
    </button>
  );
}

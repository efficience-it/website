"use client";

import { useSyncExternalStore, useCallback } from "react";
import Link from "next/link";

function subscribe(callback: () => void) {
  window.addEventListener("cookie-consent-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("cookie-consent-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): string | null {
  return localStorage.getItem("cookie-consent");
}

function getServerSnapshot(): string | null {
  return "server";
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const accept = useCallback(() => {
    localStorage.setItem("cookie-consent", "accepted");
    window.dispatchEvent(new Event("cookie-consent-change"));
  }, []);

  const refuse = useCallback(() => {
    localStorage.setItem("cookie-consent", "refused");
    window.dispatchEvent(new Event("cookie-consent-change"));
  }, []);

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-white p-4 shadow-lg sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-8"
    >
      <p className="text-sm text-gray">
        Nous utilisons des cookies pour mesurer l&apos;audience de notre site
        via Google Analytics.{" "}
        <Link
          href="/politique-de-confidentialite"
          className="text-primary underline"
        >
          En savoir plus
        </Link>
      </p>
      <div className="mt-3 flex gap-3 sm:mt-0 sm:shrink-0">
        <button
          onClick={refuse}
          className="min-h-[44px] rounded-lg border border-border px-4 py-2 text-sm font-medium text-gray transition-colors hover:bg-light-gray"
        >
          Refuser
        </button>
        <button
          onClick={accept}
          className="min-h-[44px] rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}

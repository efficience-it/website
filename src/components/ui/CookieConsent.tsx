"use client";

import { useSyncExternalStore, useCallback } from "react";
import Link from "next/link";
import { getMessages } from "@/lib/i18n/messages";
import type { BlogLanguage } from "@/types/blog";

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

export default function CookieConsent({ language }: { readonly language?: BlogLanguage }) {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const messages = getMessages(language);

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
      aria-label={messages.cookieConsentLabel}
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-white p-4 shadow-lg sm:flex sm:items-center sm:justify-between sm:gap-4 sm:px-8 dark:bg-light-gray dark:shadow-black/40"
    >
      <p className="text-sm text-gray">
        {messages.cookieConsentText}{" "}
        <Link
          href="/politique-de-confidentialite"
          hrefLang="fr"
          className="text-primary underline"
        >
          {messages.cookieLearnMore}
        </Link>
      </p>
      <div className="mt-3 flex gap-3 sm:mt-0 sm:shrink-0">
        <button
          onClick={refuse}
          className="min-h-[44px] rounded-sm border-2 border-border px-4 py-2 text-sm font-semibold tracking-wide text-gray transition-colors hover:bg-light-gray"
        >
          {messages.cookieDecline}
        </button>
        <button
          onClick={accept}
          className="min-h-[44px] btn-glow rounded-sm border-2 border-primary bg-primary px-4 py-2 text-sm font-semibold tracking-wide text-white transition-all hover:border-primary-dark hover:bg-primary-dark"
        >
          {messages.cookieAccept}
        </button>
      </div>
    </div>
  );
}
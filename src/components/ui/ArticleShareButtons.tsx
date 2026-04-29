"use client";

import { useRef, useState } from "react";
import { trackEvent } from "@/lib/tracking";

interface ArticleShareButtonsProps {
  readonly url: string;
  readonly title: string;
  readonly articleSlug: string;
}

function buildShareUrl(base: string, params: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `${base}?${searchParams.toString()}`;
}

export default function ArticleShareButtons({ url, title, articleSlug }: ArticleShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interactionClasses =
    "transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const links = [
    {
      label: "LinkedIn",
      method: "linkedin",
      color: "#0A66C2",
      href: buildShareUrl("https://www.linkedin.com/sharing/share-offsite/", {
        url,
      }),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
          <circle cx="5" cy="5.1" r="1.4" />
          <path d="M3.8 8.5h2.4v11H3.8z" />
          <path d="M9 8.5h2.3V10c.6-1.1 1.9-1.8 3.5-1.8 2.8 0 4.6 1.9 4.6 5V19h-2.4v-5.2c0-1.9-.9-3.1-2.6-3.1-1.8 0-3 1.3-3 3.4V19H9z" />
        </svg>
      ),
    },
    {
      label: "X",
      method: "twitter",
      color: "#000000",
      href: buildShareUrl("https://x.com/intent/tweet", {
        url,
        text: title,
      }),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4 shrink-0">
          <path d="M18.244 2H21.5l-7.109 8.127L22.75 22h-6.544l-5.123-6.703L5.22 22H1.96l7.603-8.693L1.25 2h6.71l4.63 6.125zM17.1 20.026h1.803L6.986 3.87H5.05z" />
        </svg>
      ),
    },
  ];

  const copyWithFallback = (text: string) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  };

  const flashCopied = () => {
    setCopied(true);
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 1800);
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        flashCopied();
        trackEvent("share", { method: "copy_link", article_slug: articleSlug });
        return;
      }
    } catch {
      /* empty */
    }

    if (copyWithFallback(url)) {
      flashCopied();
      trackEvent("share", { method: "copy_link", article_slug: articleSlug });
    }
  };

  return (
    <div className="w-full min-[520px]:w-auto min-[520px]:self-stretch">
      <div className="flex h-full items-center gap-2 min-[520px]:justify-end">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Partager sur ${link.label}`}
            title={`Partager sur ${link.label}`}
            onClick={() => trackEvent("share", { method: link.method, article_slug: articleSlug })}
            className={`inline-flex h-8 w-16 cursor-pointer items-center justify-center rounded-md border px-3 text-sm font-medium text-white ${interactionClasses}`}
            style={{
              backgroundColor: link.color,
              borderColor: link.color,
            }}
          >
            {link.icon}
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Lien copié" : "Copier le lien"}
          title={copied ? "Lien copié" : "Copier le lien de l'article"}
          className={`relative inline-flex h-8 w-16 cursor-pointer items-center justify-center rounded-md border border-slate-600 bg-slate-600 px-3 text-sm font-medium text-white ${interactionClasses}`}
        >
          <span className="relative h-4 w-4 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className={`absolute inset-0 h-4 w-4 shrink-0 origin-center transition-all duration-200 ${
                copied ? "scale-75 opacity-0" : "scale-x-110 opacity-100"
              }`}
            >
              <path d="M16 1H6a2 2 0 0 0-2 2v12h2V3h10z" />
              <path d="M18 5H10a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16H10V7h8z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className={`absolute inset-0 h-4 w-4 shrink-0 text-green-400 transition-all duration-200 ${
                copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <path fillRule="evenodd" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7 7a1 1 0 0 1-1.42 0l-3-3A1 1 0 1 1 6.704 9.29L9 11.586l6.296-6.296a1 1 0 0 1 1.408 0Z" clipRule="evenodd" />
            </svg>
          </span>
          <span aria-live="polite" className="sr-only">
            {copied ? "Lien copié" : ""}
          </span>
        </button>
      </div>
    </div>
  );
}

"use client";

import CopyLinkIcon from "@/components/illustrations/CopyLinkIcon";
import LinkedInIcon from "@/components/illustrations/LinkedInIcon";
import XIcon from "@/components/illustrations/XIcon";
import { useState } from "react";

interface ArticleShareProps {
  readonly url: string;
  readonly title: string;
}

function buildShareUrl(base: string, params: Record<string, string>) {
  const searchParams = new URLSearchParams(params);
  return `${base}?${searchParams.toString()}`;
}

export default function ArticleShare({ url, title }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);
  const interactionClasses =
    "transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

  const links = [
    {
      label: "LinkedIn",
      icon: LinkedInIcon,
      iconClassName: "h-5 w-5",
      color: "#0A66C2",
      href: buildShareUrl("https://www.linkedin.com/sharing/share-offsite/", {
        url,
      }),
    },
    {
      label: "X",
      icon: XIcon,
      iconClassName: "h-4 w-4",
      color: "#000000",
      href: buildShareUrl("https://twitter.com/intent/tweet", {
        url,
        text: title,
      }),
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
    document.execCommand("copy");
    textarea.remove();
  };

  const handleCopy = async () => {
    const articleUrl = globalThis.location?.href || url;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(articleUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
        return;
      }
    } catch {
      // Fallback pour les contextes où l'API Clipboard n'est pas disponible.
    }

    copyWithFallback(articleUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
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
            className={`inline-flex h-8 w-16 cursor-pointer! items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium text-white ${interactionClasses}`}
            style={{
              backgroundColor: link.color,
              borderColor: link.color,
              cursor: "pointer",
            }}
          >
            <link.icon className={`${link.iconClassName} shrink-0`} />
          </a>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Lien copié" : "Copier le lien"}
          title={copied ? "Lien copié" : "Copier le lien de l'article"}
          className={`relative inline-flex h-8 w-16 cursor-pointer! items-center justify-center gap-2 rounded-md border px-3 text-sm font-medium text-white ${interactionClasses}`}
          style={{
            backgroundColor: "#475569",
            borderColor: "#475569",
            cursor: "pointer",
          }}
        >
          <span className="relative h-4 w-4 pointer-events-none">
            <CopyLinkIcon
              className={`absolute inset-0 h-4 w-4 shrink-0 transition-all duration-200 ${
                copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
              }`}
            />
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
        </button>
      </div>
    </div>
  );
}

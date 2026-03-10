"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 rounded bg-white/10 px-2 py-1 text-xs text-gray-300 transition-colors hover:bg-white/20"
    >
      {copied ? "Copié !" : "Copier"}
    </button>
  );
}

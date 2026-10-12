import { getRouteLastModified } from "@/lib/routes";
import { formatDate } from "@/lib/dates";
import { getMessages } from "@/lib/i18n/messages";
import type { BlogLanguage } from "@/types/blog";

interface LastUpdatedProps {
  path: string;
  className?: string;
  language?: BlogLanguage;
}

export default function LastUpdated({ path, className = "", language }: LastUpdatedProps) {
  const lastModified = getRouteLastModified(path);
  if (!lastModified) return null;

  return (
    <p className={`text-xs text-gray ${className}`}>
      {getMessages(language).pageUpdatedOn}{" "}
      <time dateTime={lastModified}>{formatDate(lastModified, language)}</time>
    </p>
  );
}

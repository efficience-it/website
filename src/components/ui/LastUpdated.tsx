import { getRouteLastModified } from "@/lib/routes";
import { formatDate } from "@/lib/dates";

interface LastUpdatedProps {
  path: string;
  className?: string;
}

export default function LastUpdated({ path, className = "" }: LastUpdatedProps) {
  const lastModified = getRouteLastModified(path);
  if (!lastModified) return null;

  return (
    <p className={`text-xs text-gray ${className}`}>
      Page mise à jour le{" "}
      <time dateTime={lastModified}>{formatDate(lastModified)}</time>
    </p>
  );
}

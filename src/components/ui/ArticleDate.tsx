import React from "react";
import { formatDate } from "@/lib/dates";

interface ArticleDateProps {
  date: string;
  updatedAt?: string | null;
}

export default function ArticleDate({ date, updatedAt }: ArticleDateProps) {
  const hasUpdated = Boolean(updatedAt && updatedAt !== date);

  return (
    <p className="mt-2 text-sm text-gray">
      {hasUpdated ? (
        <>
          Mis à jour le <time dateTime={updatedAt!}>{formatDate(updatedAt!)}</time>
          <span className="ml-2 text-xs opacity-70">
            (publié le <time dateTime={date}>{formatDate(date)}</time>)
          </span>
        </>
      ) : (
        <>
          Publié le <time dateTime={date}>{formatDate(date)}</time>
        </>
      )}
    </p>
  );
}

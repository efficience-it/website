"use client";

import { usePathname } from "next/navigation";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import { getPageTranslation } from "@/lib/i18n/pages";

export default function PageLanguageSwitch() {
  const translation = getPageTranslation(usePathname() ?? "");
  return <LanguageSwitch target={translation} subject="page" />;
}

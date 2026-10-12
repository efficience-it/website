type GtagEvent = {
  event_category?: string;
  event_label?: string;
  form_name?: string;
  source_page?: string;
  source_location?: string;
  cta_location?: string;
  cta_text?: string;
  subject?: string;
  symfony_version?: string;
  team_size?: string;
  problem?: string;
  scroll_percent?: string;
  page_category?: string;
  article_slug?: string;
  method?: string;
  content_language?: string;
  from_language?: string;
  to_language?: string;
};

declare global {
  interface Window {
    gtag?: (command: string, action: string | GtagEvent, params?: GtagEvent) => void;
  }
}

export function trackEvent(action: string, params?: GtagEvent) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function languageFromPath(pathname: string): "fr" | "en" {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "fr";
}

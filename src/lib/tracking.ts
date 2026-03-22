type GtagEvent = {
  event_category?: string;
  event_label?: string;
  form_type?: string;
  cta_location?: string;
  cta_text?: string;
  subject?: string;
  symfony_version?: string;
  team_size?: string;
  problem?: string;
  scroll_percent?: string;
  page_category?: string;
  article_slug?: string;
};

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: GtagEvent) => void;
  }
}

export function trackEvent(action: string, params?: GtagEvent) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

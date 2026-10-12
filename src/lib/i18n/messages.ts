import type { BlogLanguage } from "@/types/blog";

export interface Messages {
  readonly home: string;
  readonly blog: string;
  readonly breadcrumb: string;
  readonly tableOfContents: string;
  readonly readingTime: (minutes: number) => string;
  readonly recentlyUpdated: string;
  readonly by: string;
  readonly updatedOn: string;
  readonly pageUpdatedOn: string;
  readonly faq: string;
  readonly relatedPosts: string;
  readonly backToBlog: string;
  readonly stickyCtaPrompt: string;
  readonly stickyCtaLabel: string;
  readonly skipToContent: string;
}

const fr: Messages = {
  home: "Accueil",
  blog: "Blog",
  breadcrumb: "Fil d'Ariane",
  tableOfContents: "Sommaire",
  readingTime: (minutes) => `${minutes} min de lecture`,
  recentlyUpdated: "Mis à jour récemment",
  by: "Par",
  updatedOn: "Mis à jour le",
  pageUpdatedOn: "Page mise à jour le",
  faq: "Questions fréquentes",
  relatedPosts: "Articles connexes",
  backToBlog: "Retour au blog",
  stickyCtaPrompt: "Besoin d'un regard externe sur votre projet ?",
  stickyCtaLabel: "Parler de votre projet",
  skipToContent: "Aller au contenu",
};

const en: Messages = {
  home: "Home",
  blog: "Blog",
  breadcrumb: "Breadcrumb",
  tableOfContents: "Contents",
  readingTime: (minutes) => `${minutes} min read`,
  recentlyUpdated: "Recently updated",
  by: "By",
  updatedOn: "Updated on",
  pageUpdatedOn: "Page updated on",
  faq: "Frequently asked questions",
  relatedPosts: "Related articles",
  backToBlog: "Back to the blog",
  stickyCtaPrompt: "Need an outside perspective on your project?",
  stickyCtaLabel: "Talk about your project",
  skipToContent: "Skip to content",
};

const catalog: Record<BlogLanguage, Messages> = { fr, en };

export function getMessages(language: BlogLanguage = "fr"): Messages {
  return catalog[language];
}

import type { BlogLanguage } from "@/types/blog";

interface Messages {
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
  readonly legalNotice: string;
  readonly contact: string;
  readonly inFrench: string;
  readonly rights: string;
  readonly readMore: string;
  readonly shareOn: (network: string) => string;
  readonly midCtaPrompt: string;
  readonly midCtaLabel: string;
  readonly copyCode: string;
  readonly codeCopied: string;
  readonly allPosts: string;
  readonly noPosts: string;
  readonly previous: string;
  readonly next: string;
  readonly pageLabel: (page: number) => string;
  readonly pagination: string;
  readonly copyLink: string;
  readonly copyArticleLink: string;
  readonly linkCopied: string;
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
  legalNotice: "Mentions légales",
  contact: "Contact",
  inFrench: "en français",
  rights: "Tous droits réservés",
  readMore: "Lire la suite",
  shareOn: (network) => `Partager sur ${network}`,
  midCtaPrompt: "Besoin d'accompagnement sur votre projet ?",
  midCtaLabel: "Parlons-en",
  copyCode: "Copier",
  codeCopied: "Copié !",
  allPosts: "Tous",
  noPosts: "Aucun article pour le moment.",
  previous: "Précédent",
  next: "Suivant",
  pageLabel: (page) => `Page ${page}`,
  pagination: "Pagination",
  copyLink: "Copier le lien",
  copyArticleLink: "Copier le lien de l'article",
  linkCopied: "Lien copié",
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
  legalNotice: "Legal notice",
  contact: "Contact",
  inFrench: "in French",
  rights: "All rights reserved",
  readMore: "Read more",
  shareOn: (network) => `Share on ${network}`,
  midCtaPrompt: "Need support on your project?",
  midCtaLabel: "Let's talk",
  copyCode: "Copy",
  codeCopied: "Copied!",
  allPosts: "All",
  noPosts: "No articles yet.",
  previous: "Previous",
  next: "Next",
  pageLabel: (page) => `Page ${page}`,
  pagination: "Pagination",
  copyLink: "Copy link",
  copyArticleLink: "Copy the article link",
  linkCopied: "Link copied",
};

const catalog: Record<BlogLanguage, Messages> = { fr, en };

export function getMessages(language: BlogLanguage = "fr"): Messages {
  return catalog[language];
}

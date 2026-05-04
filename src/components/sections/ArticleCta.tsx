import TrackedArticleButton from "./TrackedArticleButton";

interface ArticleCtaProps {
  category?: string;
  slug?: string;
}

interface CtaConfig {
  heading: string;
  description: string;
  buttonLabel: string;
  href: string;
}

const MIGRATION_SLUGS = new Set([
  "guide-de-migration-dans-un-projet-symfony",
  "migration-symfony-architecture-hexagonale-retour-mission",
  "la-dette-technique-faut-il-vraiment-en-avoir-peur",
  "claude-assistant-architecture-symfony-legacy",
  "symfony-ai-projet-legacy-retour-experience",
  "rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony",
]);

const REPRISE_SLUGS = new Set([
  "claude-assistant-architecture-symfony-legacy",
  "symfony-ai-projet-legacy-retour-experience",
]);

const CODE_QUALITY_SLUGS = [
  "phpstan",
  "code-mort",
  "test",
  "qualite",
  "rector",
  "coding-conventions",
];

const PERFORMANCE_DOCKER_SLUGS = [
  "docker",
  "deployer",
  "deploiement",
  "performance",
  "frankenphp",
];

const AI_SLUGS = ["ia", "llm", "seo", "geo", "rag", "ai", "generativ"];

function matchesSlugKeywords(slug: string, keywords: string[]): boolean {
  return keywords.some((kw) => slug.includes(kw));
}

export function getArticleCtaConfig(category?: string, slug = ""): CtaConfig {
  if (REPRISE_SLUGS.has(slug)) {
    return {
      heading: "Vous faites face à un projet legacy ou une migration PHP ?",
      description:
        "Notre offre de reprise de projet Symfony vous permet de reprendre le contrôle rapidement, avec un audit honnête et une stabilisation progressive.",
      buttonLabel: "Découvrir notre offre de reprise",
      href: "/reprise-projet-symfony",
    };
  }

  if (MIGRATION_SLUGS.has(slug)) {
    return {
      heading: "Vous faites face à un projet legacy ou une migration PHP ?",
      description:
        "Notre offre de modernisation d'application PHP accompagne la migration de votre base de code vers Symfony, étape par étape et sans interruption de service.",
      buttonLabel: "Découvrir notre offre de modernisation",
      href: "/modernisation-application-php",
    };
  }

  if (matchesSlugKeywords(slug, CODE_QUALITY_SLUGS)) {
    return {
      heading: "Faites auditer votre code PHP",
      description:
        "Un regard extérieur sur votre base de code peut révéler des problèmes structurels que l'habitude fait oublier. Profitez d'un audit technique gratuit de 30 minutes.",
      buttonLabel: "Demander un audit gratuit",
      href: "/audit-symfony-gratuit",
    };
  }

  if (matchesSlugKeywords(slug, PERFORMANCE_DOCKER_SLUGS)) {
    return {
      heading: "Optimisez les performances de votre application",
      description:
        "Temps de réponse, infrastructure, déploiement continu : parlons des leviers concrets pour accélérer votre stack.",
      buttonLabel: "Parlons-en",
      href: "/contact",
    };
  }

  if (matchesSlugKeywords(slug, AI_SLUGS)) {
    return {
      heading: "Intégrez l'IA dans votre projet",
      description:
        "RAG, agents, visibilité dans les moteurs IA : nous aidons les équipes Symfony à tirer parti des nouvelles capacités de l'IA.",
      buttonLabel: "Discutons de votre projet",
      href: "/contact",
    };
  }

  const SYMFONY_CATEGORIES = ["Outils", "Formation", "Projet"];
  if (category && SYMFONY_CATEGORIES.includes(category)) {
    return {
      heading: "Besoin d'expertise Symfony ?",
      description:
        "Architecture, dette technique, migration ou performance : notre équipe accompagne les projets Symfony exigeants depuis 2018.",
      buttonLabel: "Demander un audit gratuit",
      href: "/audit-symfony-gratuit",
    };
  }

  return {
    heading: "Un projet en tête ?",
    description:
      "Notre équipe vous répond sous 48h pour étudier votre besoin et vous proposer une approche adaptée.",
    buttonLabel: "Contactez-nous",
    href: "/contact",
  };
}

export default function ArticleCta({ category, slug }: Readonly<ArticleCtaProps>) {
  const cta = getArticleCtaConfig(category, slug);

  return (
    <div data-cta-section className="mt-12 border-l-4 border-primary bg-primary/5 px-6 py-6">
      <p className="font-display text-lg font-bold text-dark">{cta.heading}</p>
      <p className="mt-2 text-gray">{cta.description}</p>
      <TrackedArticleButton href={cta.href} label={cta.buttonLabel} slug={slug} />
    </div>
  );
}

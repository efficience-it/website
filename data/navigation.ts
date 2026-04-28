import { NavItem } from "@/types/navigation";

export const mainNav: NavItem[] = [
  {
    label: "Services",
    columns: 2,
    items: [
      {
        label: "Développement PHP",
        href: "/developpement-php",
        description: "Applications Symfony personnalisées, solides et maintenables",
      },
      {
        label: "Modernisation applicative",
        href: "/modernisation-applicative",
        description: "Migration, refactoring et remise à niveau de vos applications",
      },
      {
        label: "Développement frontend",
        href: "/developpement-frontend",
        description: "React, Vue.js, TypeScript pour vos interfaces utilisateur",
      },
      {
        label: "Cloud & DevOps",
        href: "/cloud-et-devops",
        description: "Infrastructure, CI/CD et déploiements automatisés",
      },
      {
        label: "Développement Node.js",
        href: "/developpement-nodejs",
        description: "API efficaces et applications temps réel",
      },
      {
        label: "Expertise IA",
        href: "/expertise-ia",
        description: "Intégration d'IA dans vos processus métier",
      },
      {
        label: "Audit IA en entreprise",
        href: "/audit-ia-entreprise",
        description: "Diagnostic, accompagnement et formation IA",
      },
    ],
    highlight: {
      label: "Nos expertises",
      href: "/notre-expertise",
      description: "Vue d'ensemble de nos savoir-faire",
    },
  },
  {
    label: "Symfony",
    columns: 2,
    items: [
      {
        label: "Agence Symfony en France",
        href: "/agence-symfony-france",
        description: "Développement, migration et maintenance partout en France",
      },
      {
        label: "Migration Symfony",
        href: "/migration-symfony",
        description: "Montée de version progressive, sans interruption",
      },
      {
        label: "Maintenance applicative",
        href: "/maintenance-applicative-symfony",
        description: "TMA corrective, évolutive et préventive",
      },
      {
        label: "API sur mesure",
        href: "/api-sur-mesure-symfony",
        description: "REST, GraphQL avec API Platform",
      },
      {
        label: "Architecture hexagonale",
        href: "/architecture-hexagonale-symfony",
        description: "DDD et séparation des couches métier",
      },
      {
        label: "Formation Symfony",
        href: "/formation-symfony-entreprise",
        description: "Montée en compétences de vos équipes",
      },
      {
        label: "Reprise de projet",
        href: "/reprise-projet-symfony",
        description: "Audit et reprise d'applications existantes",
      },
    ],
    highlight: {
      label: "Audit Symfony gratuit",
      href: "/audit-symfony-gratuit",
      description: "30 minutes pour évaluer votre application",
    },
  },
  {
    label: "L'agence",
    items: [
      {
        label: "Notre histoire",
        href: "/l-entreprise",
        description: "10 ans de spécialisation PHP et Symfony",
      },
      {
        label: "La team",
        href: "/la-team",
        description: "Des développeurs passionnés et expérimentés",
      },
      {
        label: "Références",
        href: "/nos-references",
        description: "Les projets qui nous ont fait grandir",
      },
      {
        label: "Green IT",
        href: "/green-it",
        description: "Notre engagement pour un numérique responsable",
      },
      {
        label: "Jobs",
        href: "/votre-carriere",
        description: "Rejoignez l'équipe Efficience IT",
      },
    ],
    highlight: {
      label: "Pourquoi nous choisir",
      href: "/pourquoi-efficience-it",
      description: "Agence Symfony vs freelance, ESN ou agence générique",
    },
  },
  {
    label: "Secteurs",
    columns: 2,
    items: [
      {
        label: "E-commerce",
        href: "/secteur/e-commerce",
        description: "Symfony, Sylius et solutions sur mesure",
      },
      {
        label: "Finance",
        href: "/secteur/finance",
        description: "Applications critiques et conformité réglementaire",
      },
      {
        label: "Industrie",
        href: "/secteur/industrie",
        description: "Outils métier, ERP et pilotage de production",
      },
      {
        label: "SaaS",
        href: "/secteur/saas",
        description: "Architecture multi-tenant et scalabilité",
      },
      {
        label: "Migration legacy",
        href: "/secteur/migration-legacy",
        description: "Modernisation progressive de vos applications PHP",
      },
      {
        label: "Application métier",
        href: "/secteur/application-metier",
        description: "Digitalisation de vos processus sur mesure",
      },
      {
        label: "Renfort d'équipe",
        href: "/secteur/renfort-equipe",
        description: "Développeurs Symfony seniors en régie",
      },
      {
        label: "Maintenance applicative",
        href: "/secteur/maintenance-applicative",
        description: "TMA, SLA et continuité de service",
      },
      {
        label: "API et intégration",
        href: "/secteur/api-integration",
        description: "API Platform, connecteurs et flux asynchrones",
      },
      {
        label: "Sécurité et conformité",
        href: "/secteur/securite-conformite",
        description: "Audit OWASP, RGPD et anonymisation",
      },
    ],
  },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  expertises: {
    title: "Nos expertises",
    links: [
      { label: "Modernisation applicative", href: "/modernisation-applicative" },
      { label: "Développement web sur mesure", href: "/developpement-web-sur-mesure" },
      { label: "Cloud & DevOps", href: "/cloud-et-devops" },
      { label: "Accompagnement et Conseil", href: "/accompagnement-et-conseil" },
      { label: "Expertise IA", href: "/expertise-ia" },
      { label: "Audit de code PHP", href: "/audit-code-php" },
      { label: "Audit IA en entreprise", href: "/audit-ia-entreprise" },
      { label: "Migration Symfony", href: "/migration-symfony" },
      { label: "Hébergement Symfony", href: "/hebergement-symfony" },
      { label: "Nos articles", href: "/blog" },
    ],
  },
  symfony: {
    title: "Symfony",
    links: [
      { label: "Agence Symfony en France", href: "/agence-symfony-france" },
      { label: "Agence Symfony Lille", href: "/agence-symfony-lille" },
      { label: "Agence Symfony Paris", href: "/agence-symfony-paris" },
      { label: "Migration Symfony", href: "/migration-symfony" },
      { label: "Maintenance applicative", href: "/maintenance-applicative-symfony" },
      { label: "API sur mesure", href: "/api-sur-mesure-symfony" },
      { label: "Architecture hexagonale", href: "/architecture-hexagonale-symfony" },
      { label: "Formation Symfony", href: "/formation-symfony-entreprise" },
      { label: "Audit Symfony gratuit", href: "/audit-symfony-gratuit" },
    ],
  },
  secteurs: {
    title: "Secteurs",
    links: [
      { label: "Nos secteurs", href: "/secteur" },
      { label: "E-commerce", href: "/secteur/e-commerce" },
      { label: "Finance", href: "/secteur/finance" },
      { label: "Industrie", href: "/secteur/industrie" },
      { label: "SaaS", href: "/secteur/saas" },
      { label: "Migration legacy", href: "/secteur/migration-legacy" },
      { label: "Application métier", href: "/secteur/application-metier" },
      { label: "Renfort d'équipe", href: "/secteur/renfort-equipe" },
      { label: "Maintenance", href: "/secteur/maintenance-applicative" },
      { label: "API et intégration", href: "/secteur/api-integration" },
      { label: "Sécurité", href: "/secteur/securite-conformite" },
    ],
  },
  agence: {
    title: "L'agence",
    links: [
      { label: "Présentation", href: "/l-entreprise" },
      { label: "Pourquoi nous choisir", href: "/pourquoi-efficience-it" },
      { label: "Nos valeurs", href: "/la-team" },
      { label: "Recrutement", href: "/votre-carriere" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/politique-de-confidentialite" },
    ],
  },
  contact: {
    title: "Contactez-nous !",
    email: "contact@itefficience.com",
    cta: { label: "Formulaire de contact", href: "/contact" },
    auditCta: { label: "Audit Symfony gratuit", href: "/audit-symfony-gratuit" },
  },
  social: [
    { label: "GitHub", href: "https://github.com/efficience-it", icon: "/images/icons/github.svg" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/efficience-it",
      icon: "/images/icons/linkedin.svg",
    },
    {
      label: "Google Maps",
      href: "https://www.google.com/maps/place/Efficience+IT",
      icon: "/images/icons/google-maps.webp",
    },
    { label: "AFUP", href: "https://afup.org/home", icon: "/images/icons/afup.webp" },
    { label: "AD2N", href: "https://www.ad2n.org/", icon: "/images/icons/ad2n.webp" },
  ],
};

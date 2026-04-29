import { categorySlugMap } from "@/lib/blog";
import type { BlogPost } from "@/types/blog";

type ChangeFrequency = "weekly" | "monthly" | "yearly";

export interface SiteRoute {
  path: string;
  label: string;
  lastModified: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

export interface BlogSiteRoute extends SiteRoute {
  image?: string;
}

interface RouteSilo {
  id: string;
  title: string;
  routes: SiteRoute[];
}

export const STATIC_SILOS: RouteSilo[] = [
  {
    id: "agence",
    title: "Agence et entreprise",
    routes: [
      { path: "/", label: "Accueil", lastModified: "2026-03-11", changeFrequency: "weekly", priority: 1.0 },
      { path: "/l-entreprise", label: "Notre histoire", lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.7 },
      { path: "/la-team", label: "La team", lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.6 },
      { path: "/ta-carriere", label: "Recrutement", lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.6 },
      { path: "/nos-references", label: "Nos références", lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.7 },
      { path: "/green-it", label: "Green IT", lastModified: "2025-09-01", changeFrequency: "monthly", priority: 0.7 },
      { path: "/processus-collaboration", label: "Processus de collaboration", lastModified: "2026-04-03", changeFrequency: "monthly", priority: 0.8 },
      { path: "/pourquoi-efficience-it", label: "Pourquoi Efficience IT", lastModified: "2026-04-03", changeFrequency: "monthly", priority: 0.8 },
    ],
  },
  {
    id: "expertises",
    title: "Services et expertises techniques",
    routes: [
      { path: "/notre-expertise", label: "Vue d'ensemble des expertises", lastModified: "2026-01-15", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-web-sur-mesure", label: "Développement web sur mesure", lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
      { path: "/cloud-et-devops", label: "Cloud et DevOps", lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
      { path: "/accompagnement-et-conseil", label: "Accompagnement et conseil", lastModified: "2026-03-10", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-php", label: "Développement PHP", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-nodejs", label: "Développement Node.js", lastModified: "2026-03-11", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-frontend", label: "Développement frontend", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-react", label: "Développement React", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-vuejs", label: "Développement Vue.js", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/developpement-typescript", label: "Développement TypeScript", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/api-sur-mesure-symfony", label: "API sur mesure Symfony", lastModified: "2026-03-11", changeFrequency: "monthly", priority: 0.8 },
      { path: "/api-nodejs-nestjs", label: "API Node.js et NestJS", lastModified: "2026-03-11", changeFrequency: "monthly", priority: 0.8 },
      { path: "/architecture-hexagonale-symfony", label: "Architecture hexagonale Symfony", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.8 },
      { path: "/migration-symfony", label: "Migration Symfony", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.8 },
      { path: "/modernisation-applicative", label: "Modernisation applicative", lastModified: "2026-03-16", changeFrequency: "monthly", priority: 0.85 },
      { path: "/modernisation-application-php", label: "Modernisation d'application PHP", lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.8 },
      { path: "/reprise-projet-symfony", label: "Reprise de projet Symfony", lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.8 },
      { path: "/maintenance-applicative-symfony", label: "Maintenance applicative Symfony", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.8 },
      { path: "/audit-code-php", label: "Audit de code PHP", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.8 },
      { path: "/audit-symfony-gratuit", label: "Audit Symfony gratuit", lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.8 },
      { path: "/tests-automatises-php", label: "Tests automatisés PHP", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.8 },
      { path: "/formation-symfony-entreprise", label: "Formation Symfony entreprise", lastModified: "2026-01-13", changeFrequency: "monthly", priority: 0.8 },
      { path: "/expertise-ia", label: "Expertise IA", lastModified: "2026-03-13", changeFrequency: "monthly", priority: 0.8 },
      { path: "/audit-ia-entreprise", label: "Audit IA en entreprise", lastModified: "2026-04-09", changeFrequency: "monthly", priority: 0.8 },
      { path: "/geo-optimisation-ia", label: "Optimisation géographique IA", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.8 },
      { path: "/ecommerce-sylius", label: "E-commerce Sylius", lastModified: "2026-03-13", changeFrequency: "monthly", priority: 0.8 },
      { path: "/hebergement-symfony", label: "Hébergement Symfony", lastModified: "2026-03-13", changeFrequency: "monthly", priority: 0.8 },
      { path: "/integration-docker-symfony", label: "Intégration Docker Symfony", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/securite-application-symfony", label: "Sécurité d'application Symfony", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/base-de-donnees-postgresql-symfony", label: "Base de données PostgreSQL avec Symfony", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/integration-redis-symfony", label: "Intégration Redis Symfony", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/integration-elasticsearch-symfony", label: "Intégration Elasticsearch Symfony", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
    ],
  },
  {
    id: "villes",
    title: "Agences par ville",
    routes: [
      { path: "/agence-symfony-france", label: "Agence Symfony en France", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.8 },
      { path: "/agence-symfony-lille", label: "Agence Symfony Lille", lastModified: "2026-03-11", changeFrequency: "monthly", priority: 0.8 },
      { path: "/agence-symfony-paris", label: "Agence Symfony Paris", lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.8 },
      { path: "/agence-symfony-lyon", label: "Agence Symfony Lyon", lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.8 },
      { path: "/agence-symfony-nantes", label: "Agence Symfony Nantes", lastModified: "2026-03-20", changeFrequency: "monthly", priority: 0.8 },
    ],
  },
  {
    id: "secteurs",
    title: "Secteurs d'activité",
    routes: [
      { path: "/secteur", label: "Tous les secteurs", lastModified: "2026-03-17", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/e-commerce", label: "E-commerce", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/finance", label: "Finance", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/industrie", label: "Industrie", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/saas", label: "SaaS", lastModified: "2026-03-12", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/migration-legacy", label: "Migration legacy", lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/renfort-equipe", label: "Renfort d'équipe", lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/application-metier", label: "Application métier", lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/maintenance-applicative", label: "Maintenance applicative", lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/api-integration", label: "API et intégration", lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.7 },
      { path: "/secteur/securite-conformite", label: "Sécurité et conformité", lastModified: "2026-03-30", changeFrequency: "monthly", priority: 0.7 },
    ],
  },
  {
    id: "blog",
    title: "Blog",
    routes: [
      { path: "/blog", label: "Tous les articles", lastModified: "2026-03-11", changeFrequency: "weekly", priority: 0.9 },
    ],
  },
  {
    id: "ressources",
    title: "Ressources et pages légales",
    routes: [
      { path: "/contact", label: "Contact", lastModified: "2025-09-01", changeFrequency: "yearly", priority: 0.7 },
      { path: "/plan-du-site", label: "Plan du site", lastModified: "2026-04-29", changeFrequency: "monthly", priority: 0.3 },
      { path: "/mentions-legales", label: "Mentions légales", lastModified: "2025-09-01", changeFrequency: "yearly", priority: 0.3 },
      { path: "/politique-de-confidentialite", label: "Politique de confidentialité", lastModified: "2025-09-01", changeFrequency: "yearly", priority: 0.3 },
    ],
  },
];

export function getStaticRoutes(): SiteRoute[] {
  return STATIC_SILOS.flatMap((silo) => silo.routes);
}

export function getCategoryRoutes(posts: BlogPost[]): SiteRoute[] {
  return Object.entries(categorySlugMap).map(([name, slug]) => {
    const latest = posts.find((p) => p.category === name);
    return {
      path: `/blog/${slug}`,
      label: name,
      lastModified: latest?.updatedAt ?? latest?.date ?? "2025-09-01",
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });
}

export function getBlogRoutes(posts: BlogPost[]): BlogSiteRoute[] {
  return posts.map((post) => ({
    path: `/article/${post.slug}`,
    label: post.title,
    lastModified: post.updatedAt ?? post.date,
    changeFrequency: "monthly",
    priority: 0.6,
    image: post.image,
  }));
}

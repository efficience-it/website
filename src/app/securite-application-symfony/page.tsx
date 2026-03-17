import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";

const securiteRelatedLinks: RelatedLink[] = [
  {
    title: "Audit de code PHP",
    description: "Diagnostic complet de votre code PHP sous 48h",
    href: "/audit-code-php",
  },
  {
    title: "Tests automatisés PHP",
    description: "Sécurisez chaque livraison avec des tests solides",
    href: "/tests-automatises-php",
  },
  {
    title: "CVE : comprendre les failles pour mieux se protéger",
    description: "Tout savoir sur les vulnérabilités et leur gestion",
    href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger",
  },
  {
    title: "DbToolsBundle : anonymiser vos bases de données",
    description: "Anonymisation RGPD de vos données de production",
    href: "/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees",
  },
  {
    title: "Symfony Security, documentation officielle",
    description: "Le composant de sécurité du framework Symfony",
    href: "https://symfony.com/doc/current/security.html",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Sécurité applicative Symfony : audit, protection et conformité",
  description:
    "Efficience IT sécurise vos applications Symfony : audit de vulnérabilités, protection OWASP, conformité RGPD et mise en place de bonnes pratiques de sécurité.",
  path: "/securite-application-symfony",
});

const expertises = [
  {
    title: "Audit de vulnérabilités",
    description:
      "Nous analysons votre application Symfony pour identifier les failles de sécurité : injections SQL, XSS, CSRF, désérialisation non sécurisée, dépendances vulnérables. Chaque audit produit un rapport actionnable avec des correctifs priorisés par niveau de risque.",
  },
  {
    title: "Protection OWASP Top 10",
    description:
      "Nous implémentons les protections contre les 10 vulnérabilités les plus critiques référencées par l'OWASP. Validation des entrées, échappement des sorties, gestion sécurisée des sessions et headers de sécurité (CSP, CORS, HSTS).",
  },
  {
    title: "Conformité RGPD technique",
    description:
      "Chiffrement des données sensibles, anonymisation des bases de données avec DbToolsBundle, gestion du consentement et droit à l'effacement. Nous mettons en place les mécanismes techniques pour que votre application respecte le RGPD.",
  },
  {
    title: "Authentification et autorisations",
    description:
      "Symfony Security, JWT, OAuth2, voters personnalisés : nous concevons un système d'authentification et d'autorisations adapté à vos besoins métier. Chaque rôle, chaque permission est testée et documentée.",
  },
];

const stack = [
  { name: "Symfony Security", description: "Composant d'authentification et d'autorisations de Symfony" },
  { name: "JWT / OAuth2", description: "Standards d'authentification pour les API et applications distribuées" },
  { name: "PHPStan (sécurité types)", description: "Analyse statique pour détecter les failles liées au typage" },
  { name: "HTTPS / CSP / CORS", description: "Headers de sécurité et chiffrement des communications" },
  { name: "Symfony Secrets", description: "Gestion sécurisée des variables sensibles en production" },
  { name: "DbToolsBundle (anonymisation)", description: "Anonymisation des bases de données pour la conformité RGPD" },
];

const faqItems = [
  {
    title: "Comment savoir si mon application Symfony est vulnérable ?",
    content:
      "Un audit de sécurité applicatif permet d'identifier les failles existantes. Nous analysons le code source, les dépendances Composer (via symfony security:check), la configuration serveur et les flux de données. Le rapport liste les vulnérabilités classées par criticité avec un plan de remédiation concret.",
  },
  {
    title: "Quelles sont les failles les plus fréquentes dans les applications PHP ?",
    content:
      "Les injections SQL, le cross-site scripting (XSS) et la gestion défaillante des sessions restent les failles les plus courantes. Sur les applications Symfony, on trouve aussi des problèmes de voters mal configurés, des secrets versionnés dans Git et des dépendances obsolètes avec des CVE connues.",
  },
  {
    title: "Comment rendre une application Symfony conforme au RGPD ?",
    content:
      "La conformité RGPD technique passe par le chiffrement des données personnelles en base, l'anonymisation des environnements de test avec DbToolsBundle, la mise en place du droit à l'effacement et du droit à la portabilité, et une gestion propre du consentement. Nous accompagnons vos équipes sur chaque volet technique.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.content,
    },
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Nos expertises", path: "/notre-expertise" },
  { name: "Sécurité applicative Symfony", path: "/securite-application-symfony" },
]);

const service = serviceJsonLd({
  name: "Sécurité applicative Symfony",
  description:
    "Audit de vulnérabilités, protection OWASP, conformité RGPD et mise en place de bonnes pratiques de sécurité pour vos applications Symfony.",
  path: "/securite-application-symfony",
});

const webPage = webPageJsonLd({
  name: "Sécurité applicative Symfony : audit, protection et conformité",
  description:
    "Efficience IT sécurise vos applications Symfony : audit de vulnérabilités, protection OWASP, conformité RGPD et mise en place de bonnes pratiques de sécurité.",
  path: "/securite-application-symfony",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function SecuriteApplicationSymfony() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Nos expertises", href: "/notre-expertise" }, { label: "Sécurité applicative Symfony" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Sécurité Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Sécurité applicative Symfony : audit, protection et conformité
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Une faille de sécurité peut compromettre vos données, votre
                  réputation et la confiance de vos utilisateurs.
                  Efficience IT <strong>sécurise vos applications Symfony</strong> en
                  profondeur : audit de vulnérabilités, protection contre les attaques
                  OWASP Top 10 et conformité RGPD technique.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Nous combinons un{" "}
                  <Link
                    href="/audit-code-php"
                    className="text-primary hover:underline"
                  >
                    audit de code PHP
                  </Link>{" "}
                  rigoureux avec des{" "}
                  <Link
                    href="/tests-automatises-php"
                    className="text-primary hover:underline"
                  >
                    tests automatisés
                  </Link>{" "}
                  pour garantir que chaque livraison renforce la sécurité
                  de votre application.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-32 w-32 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Nos expertises sécurité</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre axes pour sécuriser vos applications Symfony de bout en bout.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {expertises.map((expertise) => (
                  <Card key={expertise.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {expertise.title}
                    </h3>
                    <p className="mt-2 text-gray">{expertise.description}</p>
                  </Card>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
                Pour mieux comprendre les vulnérabilités,{" "}
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  découvrez notre guide sur les CVE
                </Link>{" "}
                et apprenez comment{" "}
                <Link
                  href="/article/comment-former-vos-equipes-a-la-securite-informatique-en-toute-simplicite"
                  className="text-primary hover:underline"
                >
                  former vos équipes à la sécurité informatique
                </Link>.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack sécurité</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils et des standards éprouvés pour protéger vos applications
                à chaque couche.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stack.map((item) => (
                  <Card key={item.name}>
                    <p className="font-display text-base font-bold text-primary">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  La sécurité, un investissement pas une option
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Une faille exploitée coute infiniment plus cher qu&apos;un audit
                  préventif. Les attaques par injection, les vols de sessions et les
                  fuites de données personnelles sont des risques réels pour toute
                  application exposée sur Internet.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, la sécurité fait partie intégrante de chaque
                  projet. De l&apos;
                  <Link
                    href="/audit-code-php"
                    className="text-primary hover:underline"
                  >
                    audit de code
                  </Link>{" "}
                  initial à la mise en production, nous appliquons les bonnes
                  pratiques de sécurité à chaque étape. L&apos;
                  <Link
                    href="/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees"
                    className="text-primary hover:underline"
                  >
                    anonymisation des bases de données
                  </Link>{" "}
                  avec DbToolsBundle complète notre approche pour la conformité RGPD.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Questions fréquentes</SectionTitle>
              <div className="mx-auto max-w-2xl">
                <Accordion items={faqItems} />
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <RelatedLinks links={securiteRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

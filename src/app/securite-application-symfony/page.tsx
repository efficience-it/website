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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";
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
    title: "Conformité NIS2 : préparer votre application Symfony",
    description: "Hardening, MFA, journalisation et gestion des dépendances",
    href: "/article/conformite-nis2-application-symfony",
  },
  {
    title: "Conformité DORA : résilience applicative",
    description: "Traçabilité, continuité, réversibilité et observabilité",
    href: "/article/conformite-dora-resilience-symfony",
  },
  {
    title: "DORA pour fintech : check-list Symfony",
    description: "Check-list, clauses contractuelles et sanctions pour acteurs financiers",
    href: "/article/dora-fintech-resilience-technique-symfony",
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
    "Efficience IT sécurise vos applications Symfony : audit de vulnérabilités, protection OWASP, conformité RGPD et bonnes pratiques de sécurité.",
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

const whenToChoose = [
  "Vous préparez une mise en conformité RGPD ou un audit externe (ISO 27001, SOC 2) et devez documenter vos pratiques de sécurité.",
  "Votre application Symfony manipule des données sensibles : santé, finance, données personnelles à grande échelle.",
  "Vous avez subi un incident de sécurité ou un pentest a remonté des vulnérabilités à corriger en urgence.",
  "Votre application n'a jamais été auditée et vous voulez avoir une vision claire de votre exposition au risque.",
];

const whenNotToChoose = [
  "Votre application est un POC interne sans données sensibles, accessible uniquement en VPN d'entreprise : un audit complet est probablement disproportionné.",
  "Vous avez juste besoin d'une mise à jour des dépendances Composer : un développeur Symfony interne peut le faire avec composer audit.",
  "Vous cherchez un pentest offensif sur l'infrastructure réseau plutôt qu'un audit applicatif : un cabinet spécialisé en pentest sera plus pertinent.",
];

const useCases = [
  {
    title: "Audit avant mise en conformité RGPD",
    description:
      "Audit complet pour une scale-up SaaS B2B : analyse du code Symfony, des dépendances, du chiffrement des données personnelles et de la gestion du consentement, avec un rapport priorisé pour la mise en conformité.",
  },
  {
    title: "Migration d'une auth maison vers Symfony Security",
    description:
      "Refonte de l'authentification d'un éditeur de logiciel B2B, passage d'un système maison fragile vers Symfony Security avec voters, JWT et refresh tokens, sans interruption du service.",
  },
  {
    title: "Hardening post-pentest",
    description:
      "Intervention urgente après un pentest qui a remonté une dizaine de vulnérabilités critiques sur une plateforme e-commerce Symfony : correction, mise en place de tests de non-régression et hardening complet.",
  },
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
  {
    title: "Combien de temps pour un audit de sécurité Symfony ?",
    content:
      "Un audit de sécurité standard prend entre 5 et 15 jours selon la taille du code et le périmètre. Nous démarrons par un kick-off pour cadrer les zones critiques, puis menons l'analyse statique, la revue manuelle du code, l'inspection des dépendances et la vérification de la configuration. Le rapport est remis sous une à deux semaines après la fin de l'analyse.",
  },
  {
    title: "Que livrez-vous concrètement à la fin d'un audit ?",
    content:
      "Un rapport détaillé avec la liste des vulnérabilités classées par criticité (CVSS), pour chacune : l'extrait de code concerné, la preuve d'exploitation quand c'est pertinent, le correctif recommandé et l'effort estimé. Nous livrons aussi un plan de remédiation priorisé et, sur demande, nous accompagnons la mise en œuvre des correctifs avec votre équipe.",
  },
  {
    title: "Mon application Symfony est-elle concernée par NIS2 ?",
    content:
      "Le périmètre de la directive NIS2 est beaucoup plus large que celui de NIS1. Il inclut de nombreuses entités essentielles et importantes, ainsi que leurs sous-traitants et fournisseurs de services numériques au-delà d'un certain seuil de taille. Une PME ou une ETI qui édite un SaaS ou sert une entité essentielle peut être concernée. Nous préparons techniquement votre application (hardening, MFA, journalisation, dépendances) sans nous substituer à un auditeur PASSI.",
  },
  {
    title: "Quelle est la différence entre NIS2 et DORA ?",
    content:
      "NIS2 est une directive transverse qui couvre de nombreux secteurs critiques. DORA est un règlement spécifique au secteur financier (banques, assurances, fintechs et leurs prestataires) centré sur la résilience opérationnelle numérique. Pour une entité financière, DORA prime sur NIS2 sur les sujets qu'il couvre. Les deux partagent une logique commune de gestion des risques, de journalisation et de notification d'incidents, ce qui permet de mutualiser une grande partie des chantiers techniques.",
  },
  {
    title: "Le RGAA s'applique-t-il à mon site e-commerce ?",
    content:
      "Le RGAA concerne le secteur public et ses délégataires, mais l'accessibilité numérique s'impose aussi à de nombreux acteurs privés de l'e-commerce et de la formation, sous l'effet de la réglementation européenne. Nous intervenons sur la remédiation technique (Twig sémantique, ARIA, navigation clavier, tests axe-core en CI) et la déclaration d'accessibilité. Pour l'audit de conformité officiel, nous travaillons avec un auditeur agréé.",
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
  mainTech: ["symfony","php"],
});

const webPage = webPageJsonLd({
  name: "Sécurité applicative Symfony : audit, protection et conformité",
  description:
    "Efficience IT sécurise vos applications Symfony : audit de vulnérabilités, protection OWASP, conformité RGPD et bonnes pratiques de sécurité.",
  path: "/securite-application-symfony",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function SecuriteApplicationSymfony() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
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
                  La sécurité, un investissement, pas une option
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Une faille exploitée coûte infiniment plus cher qu&apos;un audit
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
              <SectionTitle>Quand choisir un audit de sécurité</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Un audit demande du temps et de la préparation côté équipe.
                Voici les contextes où l&apos;investissement est clairement
                justifié.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir un audit si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Regarder ailleurs si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenNotToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Cas d&apos;usage typiques</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Trois exemples concrets de missions de sécurité que nous
                menons régulièrement.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {useCases.map((useCase) => (
                  <Card key={useCase.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-gray">{useCase.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl space-y-12">
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    OWASP Top 10 appliqué à Symfony
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    L&apos;OWASP Top 10 recense les risques de sécurité les plus
                    répandus : injection, défaillances d&apos;authentification,
                    exposition de données sensibles, mauvaises configurations.
                    Symfony fournit des protections natives contre la plupart
                    d&apos;entre eux (requêtes préparées via Doctrine, protection
                    CSRF des formulaires, échappement automatique de Twig), mais
                    aucune n&apos;est efficace si elle est contournée ou mal
                    configurée. Nous auditons chaque catégorie du Top 10 sur votre
                    application, du contrôle d&apos;accès aux dépendances
                    vulnérables. La sensibilisation des équipes fait partie du
                    dispositif : notre article sur{" "}
                    <Link
                      href="/article/comment-former-vos-equipes-a-la-securite-informatique-en-toute-simplicite"
                      className="text-primary hover:underline"
                    >
                      comment former vos équipes à la sécurité informatique
                    </Link>{" "}
                    explique comment ancrer ces réflexes au quotidien.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    Gestion des CVE et politique de patch
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Une application n&apos;est jamais figée : les failles sont
                    découvertes en continu dans les dépendances que vous utilisez.
                    Sans politique de patch, une CVE publiée devient une porte
                    ouverte pendant des mois. Nous mettons en place une veille
                    automatisée (composer audit, alertes de sécurité) et un
                    processus de mise à jour priorisé selon la criticité réelle,
                    pas seulement le score CVSS. Chaque correctif est validé par la
                    suite de tests avant déploiement, pour ne pas troquer une
                    faille contre une régression. Pour comprendre le cycle de vie
                    d&apos;une vulnérabilité, notre article sur{" "}
                    <Link
                      href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                      className="text-primary hover:underline"
                    >
                      les CVE et comment s&apos;en protéger
                    </Link>{" "}
                    pose les bases.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    RGPD et logs applicatifs
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Les logs sont précieux pour le débogage, mais ils deviennent un
                    risque dès qu&apos;ils contiennent des données personnelles :
                    e-mails, identifiants, adresses IP. La conformité RGPD impose de
                    minimiser ces données, de les anonymiser et de borner leur
                    durée de conservation. Nous configurons Monolog pour filtrer
                    les informations sensibles à la source, et nous mettons en place
                    une rotation et une purge maîtrisées. Pour les environnements de
                    test et de pré-production, l&apos;anonymisation des bases est
                    indispensable : notre article sur{" "}
                    <Link
                      href="/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees"
                      className="text-primary hover:underline"
                    >
                      anonymiser vos bases de données avec DbToolsBundle
                    </Link>{" "}
                    montre comment travailler sur des données réalistes sans
                    exposer de données réelles.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    Authentification forte et passkeys WebAuthn
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Le mot de passe seul ne suffit plus. L&apos;authentification
                    forte combine plusieurs facteurs, et les passkeys basées sur le
                    standard WebAuthn permettent une connexion sans mot de passe,
                    résistante au phishing, adossée au matériel de l&apos;utilisateur
                    (empreinte, clé physique). Le composant Security de Symfony
                    s&apos;intègre avec ces mécanismes via des authenticators
                    personnalisés et la double authentification. Nous concevons des
                    parcours de connexion qui élèvent le niveau de sécurité sans
                    dégrader l&apos;expérience utilisateur. Sécuriser l&apos;accès
                    n&apos;est qu&apos;un volet : un{" "}
                    <Link
                      href="/audit-code-php"
                      className="text-primary hover:underline"
                    >
                      audit de code PHP
                    </Link>{" "}
                    complet vérifie aussi la robustesse de la logique
                    d&apos;autorisation derrière l&apos;authentification.
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Conformité NIS2 : préparation technique</SectionTitle>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <p>
                  La directive NIS2 élargit les obligations de cybersécurité à de
                  nombreuses entités essentielles et importantes, ainsi qu&apos;à
                  leurs sous-traitants. Côté application Symfony, nous couvrons les
                  chantiers techniques concrets : durcissement de la
                  configuration, authentification multifacteur, journalisation
                  exploitable et gestion des dépendances vulnérables.
                </p>
                <p>
                  Nous ne délivrons pas l&apos;attestation officielle, qui relève
                  d&apos;un auditeur PASSI : nous préparons votre application pour
                  franchir cet audit sans écart majeur, en complément de votre
                  partenaire. Pour aller plus loin, consultez notre guide pour{" "}
                  <Link
                    href="/article/conformite-nis2-application-symfony"
                    className="text-primary hover:underline"
                  >
                    préparer techniquement votre application à NIS2
                  </Link>{" "}
                  ou commencez par un{" "}
                  <Link
                    href="/audit-symfony-gratuit"
                    className="text-primary hover:underline"
                  >
                    audit de sécurité gratuit
                  </Link>
                  .
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Conformité DORA : résilience applicative</SectionTitle>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <p>
                  Le règlement DORA impose au secteur financier une résilience
                  opérationnelle numérique : banques, assurances, fintechs et
                  leurs prestataires informatiques critiques. Sur vos projets
                  Symfony, nous travaillons la traçabilité du code (signatures Git,
                  builds reproductibles), le plan de continuité et de reprise, la
                  stratégie de sortie vis-à-vis du cloud et l&apos;observabilité
                  avec OpenTelemetry.
                </p>
                <p>
                  L&apos;objectif n&apos;est pas de promettre l&apos;absence de
                  panne, mais de prouver que le système encaisse un incident et se
                  rétablit. Découvrez notre approche détaillée de la{" "}
                  <Link
                    href="/article/conformite-dora-resilience-symfony"
                    className="text-primary hover:underline"
                  >
                    résilience applicative pour DORA
                  </Link>{" "}
                  ou{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    échangez avec notre équipe
                  </Link>
                  .
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Accessibilité RGAA : remédiation</SectionTitle>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <p>
                  Le RGAA encadre l&apos;accessibilité numérique pour le secteur
                  public et ses délégataires, mais l&apos;accessibilité s&apos;impose
                  aussi à de nombreux acteurs de l&apos;e-commerce et de la
                  formation. Nous intervenons sur la remédiation technique : Twig
                  sémantique, attributs ARIA pertinents, navigation au clavier,
                  contrastes, et intégration de tests automatisés axe-core dans la
                  CI pour prévenir les régressions. Nous aidons aussi à rédiger la
                  déclaration d&apos;accessibilité.
                </p>
                <p>
                  Pour l&apos;audit de conformité réglementaire, nous travaillons
                  en partenariat avec un auditeur agréé. Pour comprendre le cadre,
                  lisez notre article sur{" "}
                  <Link
                    href="/article/normes-rgaa-les-cles-dune-experience-utilisateur-reussie-pour-tous"
                    className="text-primary hover:underline"
                  >
                    les normes RGAA et l&apos;accessibilité numérique
                  </Link>{" "}
                  ou{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    contactez-nous
                  </Link>{" "}
                  pour un plan de remédiation.
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

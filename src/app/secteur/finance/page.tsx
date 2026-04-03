import Image from "next/image";
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
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Applications web pour la finance et la banque : sécurité et conformité avec Symfony",
  description:
    "Efficience IT développe des applications web sécurisées pour la finance : banque, fintech, assurance. Conformité et haute disponibilité.",
  path: "/secteur/finance",
});

const expertises = [
  {
    title: "Sécurité applicative renforcée",
    description:
      "Authentification multi-facteurs, chiffrement des données sensibles, gestion fine des rôles et des permissions avec le composant Security de Symfony. Chaque application est auditée pour les vulnérabilités OWASP Top 10 avant mise en production.",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",
  },
  {
    title: "Conformité et traçabilité",
    description:
      "Journalisation complète des actions utilisateur, pistes d'audit, anonymisation des données personnelles. Nos applications sont conçues pour répondre aux exigences réglementaires du secteur financier (RGPD, DSP2, KYC).",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Haute disponibilité",
    description:
      "Architecture conçue pour le zero-downtime : déploiements blue-green, health checks, failover automatique, réplicas de base de données. Votre application reste accessible même pendant les mises à jour et les maintenances.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Intégration de systèmes financiers",
    description:
      "Connexion aux systèmes bancaires (SWIFT, SEPA), passerelles de paiement, outils de scoring et de compliance via des API sur mesure. Des connecteurs robustes avec gestion des erreurs, retry automatique et réconciliation des transactions.",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
];

const references = [
  { name: "Crédit Agricole Auto Bank", image: "/images/clients/auto-bank.webp" },
  { name: "Mon Petit Placement", image: "/images/clients/mes-petits-placements.webp" },
  { name: "Keyliance", image: "/images/clients/keyliance.webp" },
];

const faqItems = [
  {
    title: "Comment assurez-vous la sécurité des données financières ?",
    content:
      "La sécurité est intégrée à chaque étape du développement. Nous appliquons le chiffrement des données sensibles au repos et en transit, la gestion stricte des accès par rôle, et l'audit systématique du code pour les vulnérabilités OWASP. Les tests de sécurité font partie du pipeline CI/CD.",
  },
  {
    title: "Êtes-vous conformes aux réglementations du secteur financier ?",
    content:
      "Nous concevons les applications pour faciliter la conformité : journalisation des actions, anonymisation des données personnelles avec DbToolsBundle, gestion du consentement. Nous travaillons en collaboration avec vos équipes juridiques pour implémenter les exigences spécifiques à votre activité (RGPD, DSP2, KYC).",
  },
  {
    title: "Comment gérez-vous les intégrations avec les systèmes bancaires ?",
    content:
      "Nous concevons des connecteurs dédiés avec gestion des erreurs, retry automatique et réconciliation. Les échanges passent par Symfony Messenger pour garantir qu'aucune transaction ne se perd. Chaque intégration est idempotente pour éviter les doublons.",
  },
  {
    title: "Quelle est votre expérience dans le secteur financier ?",
    content:
      "Nous accompagnons des acteurs de la banque, de la fintech et du courtage. Crédit Agricole Auto Bank, Mon Petit Placement et Keyliance nous font confiance pour le développement et la maintenance de leurs applications métier.",
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
  { name: "Finance", path: "/secteur/finance" },
]);

const service = serviceJsonLd({
  name: "Applications web pour la finance et la banque",
  description:
    "Conception et développement d'applications web sécurisées pour le secteur financier : conformité, haute disponibilité, intégration de systèmes bancaires et traitement de données sensibles.",
  path: "/secteur/finance",
});

const webPage = webPageJsonLd({
  name: "Applications web pour la finance et la banque : sécurité et conformité avec Symfony",
  description:
    "Efficience IT développe des applications web sécurisées pour la finance : banque, fintech, assurance. Conformité et haute disponibilité.",
  path: "/secteur/finance",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "CVE : comprendre les failles de sécurité",
    description:
      "Pourquoi les mises à jour de sécurité sont critiques dans la finance",
    href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger",
  },
  {
    title: "DbToolsBundle : anonymiser vos bases",
    description:
      "Anonymisation des données personnelles pour la conformité RGPD",
    href: "/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees",
  },
  {
    title: "Former vos équipes à la sécurité",
    description:
      "Sensibiliser vos développeurs aux enjeux de sécurité applicative",
    href: "/article/comment-former-vos-equipes-a-la-securite-informatique-en-toute-simplicite",
  },
  {
    title: "Audit de code PHP",
    description:
      "Notre méthode d'audit pour identifier les vulnérabilités",
    href: "/audit-code-php",
  },
  {
    title: "Tests automatisés PHP",
    description:
      "Garantir la fiabilité de votre application avec des tests exhaustifs",
    href: "/tests-automatises-php",
  },
  {
    title: "API sur mesure Symfony",
    description:
      "Connecter vos systèmes financiers via des API robustes et sécurisées",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "OWASP Top 10",
    description: "Les 10 risques de sécurité les plus critiques pour les applications web",
    href: "https://owasp.org/www-project-top-ten/",
    external: true,
  },
];

export default function SecteurFinance() {
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
            <Breadcrumb items={[{ label: "Nos secteurs", href: "/secteur" }, { label: "Finance" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Secteur finance
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Applications web pour la finance et la banque : sécurité et conformité avec Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Dans le secteur financier, une faille de sécurité ou un
                  problème de conformité peut avoir des conséquences majeures.
                  Vos applications doivent être irréprochables sur la sécurité,
                  la traçabilité et la disponibilité.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT développe des{" "}
                  <strong>applications web sécurisées</strong> pour la banque,
                  la fintech et l&apos;assurance. Le composant Security de Symfony,
                  combiné à une{" "}
                  <Link
                    href="/architecture-hexagonale-symfony"
                    className="text-primary hover:underline"
                  >
                    architecture hexagonale
                  </Link>
                  , garantit une gestion rigoureuse des accès et une séparation
                  claire entre logique métier et infrastructure. Notre offre de{" "}
                  <Link
                    href="/maintenance-applicative-symfony"
                    className="text-primary hover:underline"
                  >
                    maintenance applicative
                  </Link>{" "}
                  assure ensuite la continuité de service et les mises à jour de
                  sécurité.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Discutons de votre projet
                  </Button>
                  <Button href="/nos-references" variant="outline">
                    Voir nos références
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
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
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
            <SectionTitle>Notre expertise finance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des applications conçues pour les exigences du secteur financier :
              sécurité, conformité, fiabilité.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expertises.map((item) => (
                <Card key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>La sécurité, au cœur de chaque ligne de code</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Dans la finance, la sécurité n&apos;est pas une feature, c&apos;est un
                prérequis. Chaque application que nous développons passe par un{" "}
                <Link
                  href="/audit-code-php"
                  className="text-primary hover:underline"
                >
                  audit de code
                </Link>{" "}
                systématique avant la mise en production. Nous vérifions les
                vulnérabilités OWASP Top 10, les injections SQL, les failles
                XSS et les problèmes d&apos;authentification.
              </p>
              <p>
                Les données sensibles sont chiffrées au repos et en transit. Les{" "}
                <Link
                  href="/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees"
                  className="text-primary hover:underline"
                >
                  bases de données de recette sont anonymisées
                </Link>{" "}
                pour que les données de production ne se retrouvent jamais dans
                un environnement non sécurisé. Les logs applicatifs sont
                filtrés pour exclure toute donnée personnelle.
              </p>
              <p>
                Notre approche par{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tests automatisés
                </Link>{" "}
                inclut des tests de sécurité dans le pipeline CI/CD. Chaque
                déploiement est vérifié automatiquement pour les régressions de
                sécurité, les dépendances vulnérables (via{" "}
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  CVE
                </Link>
                ) et les mauvaises configurations.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des acteurs de la banque et de la fintech nous confient le
              développement de leurs applications critiques.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-8">
              {references.map((client) => (
                <div
                  key={client.name}
                  className="overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre application financière mérite une sécurité sans compromis
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Discutons de vos enjeux de sécurité et de conformité. Nous
              analysons votre besoin et vous proposons une architecture
              adaptée aux exigences de votre secteur.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Parlons de votre projet
            </Link>
          </div>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Questions fréquentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <RelatedLinks links={relatedLinks} />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

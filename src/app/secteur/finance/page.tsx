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
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Applications web pour la finance et la banque : securite et conformite avec Symfony",
  description:
    "Efficience IT developpe des applications web securisees pour le secteur financier : banque, fintech, assurance. Conformite, haute disponibilite et traitement de donnees sensibles.",
  path: "/secteur/finance",
});

const expertises = [
  {
    title: "Securite applicative renforcee",
    description:
      "Authentification multi-facteurs, chiffrement des donnees sensibles, gestion fine des roles et des permissions avec le composant Security de Symfony. Chaque application est auditee pour les vulnerabilites OWASP Top 10 avant mise en production.",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",
  },
  {
    title: "Conformite et tracabilite",
    description:
      "Journalisation complete des actions utilisateur, pistes d'audit, anonymisation des donnees personnelles. Nos applications sont concues pour repondre aux exigences reglementaires du secteur financier (RGPD, DSP2, KYC).",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Haute disponibilite",
    description:
      "Architecture concue pour le zero-downtime : deploiements blue-green, health checks, failover automatique, replicas de base de donnees. Votre application reste accessible meme pendant les mises a jour et les maintenances.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Integration de systemes financiers",
    description:
      "Connexion aux systemes bancaires (SWIFT, SEPA), passerelles de paiement, outils de scoring et de compliance. Des connecteurs robustes avec gestion des erreurs, retry automatique et reconciliation des transactions.",
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
    title: "Comment assurez-vous la securite des donnees financieres ?",
    content:
      "La securite est integree a chaque etape du developpement. Nous appliquons le chiffrement des donnees sensibles au repos et en transit, la gestion stricte des acces par role, et l'audit systematique du code pour les vulnerabilites OWASP. Les tests de securite font partie du pipeline CI/CD.",
  },
  {
    title: "Etes-vous conformes aux reglementations du secteur financier ?",
    content:
      "Nous concevons les applications pour faciliter la conformite : journalisation des actions, anonymisation des donnees personnelles avec DbToolsBundle, gestion du consentement. Nous travaillons en collaboration avec vos equipes juridiques pour implementer les exigences specifiques a votre activite (RGPD, DSP2, KYC).",
  },
  {
    title: "Comment gerez-vous les integrations avec les systemes bancaires ?",
    content:
      "Nous concevons des connecteurs dedies avec gestion des erreurs, retry automatique et reconciliation. Les echanges passent par Symfony Messenger pour garantir qu'aucune transaction ne se perd. Chaque integration est idempotente pour eviter les doublons.",
  },
  {
    title: "Quelle est votre experience dans le secteur financier ?",
    content:
      "Nous accompagnons des acteurs de la banque, de la fintech et du courtage. Credit Agricole Auto Bank, Mon Petit Placement et Keyliance nous font confiance pour le developpement et la maintenance de leurs applications metier.",
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
    "Conception et developpement d'applications web securisees pour le secteur financier : conformite, haute disponibilite, integration de systemes bancaires et traitement de donnees sensibles.",
  path: "/secteur/finance",
});

const webPage = webPageJsonLd({
  name: "Applications web pour la finance et la banque : securite et conformite avec Symfony",
  description:
    "Efficience IT developpe des applications web securisees pour le secteur financier : banque, fintech, assurance. Conformite, haute disponibilite et traitement de donnees sensibles.",
  path: "/secteur/finance",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "CVE : comprendre les failles de securite",
    description:
      "Pourquoi les mises a jour de securite sont critiques dans la finance",
    href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger",
  },
  {
    title: "DbToolsBundle : anonymiser vos bases",
    description:
      "Anonymisation des donnees personnelles pour la conformite RGPD",
    href: "/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees",
  },
  {
    title: "Former vos equipes a la securite",
    description:
      "Sensibiliser vos developpeurs aux enjeux de securite applicative",
    href: "/article/comment-former-vos-equipes-a-la-securite-informatique-en-toute-simplicite",
  },
  {
    title: "Audit de code PHP",
    description:
      "Notre methode d'audit pour identifier les vulnerabilites",
    href: "/audit-code-php",
  },
  {
    title: "Tests automatises PHP",
    description:
      "Garantir la fiabilite de votre application avec des tests exhaustifs",
    href: "/tests-automatises-php",
  },
  {
    title: "OWASP Top 10",
    description: "Les 10 risques de securite les plus critiques pour les applications web",
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
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Secteur finance
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Applications web pour la finance et la banque : securite et conformite avec Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Dans le secteur financier, une faille de securite ou un
                  probleme de conformite peut avoir des consequences majeures.
                  Vos applications doivent etre irreprochables sur la securite,
                  la tracabilite et la disponibilite.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT developpe des{" "}
                  <strong>applications web securisees</strong> pour la banque,
                  la fintech et l&apos;assurance. Le composant Security de Symfony,
                  combine a une{" "}
                  <Link
                    href="/architecture-hexagonale-symfony"
                    className="text-primary hover:underline"
                  >
                    architecture hexagonale
                  </Link>
                  , garantit une gestion rigoureuse des acces et une separation
                  claire entre logique metier et infrastructure.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Discutons de votre projet
                  </Button>
                  <Button href="/nos-references" variant="outline">
                    Voir nos references
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
              Des applications concues pour les exigences du secteur financier :
              securite, conformite, fiabilite.
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
            <SectionTitle>La securite, au coeur de chaque ligne de code</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Dans la finance, la securite n&apos;est pas une feature, c&apos;est un
                prerequis. Chaque application que nous developpons passe par un{" "}
                <Link
                  href="/audit-code-php"
                  className="text-primary hover:underline"
                >
                  audit de code
                </Link>{" "}
                systematique avant la mise en production. Nous verifions les
                vulnerabilites OWASP Top 10, les injections SQL, les failles
                XSS et les problemes d&apos;authentification.
              </p>
              <p>
                Les donnees sensibles sont chiffrees au repos et en transit. Les{" "}
                <Link
                  href="/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees"
                  className="text-primary hover:underline"
                >
                  bases de donnees de recette sont anonymisees
                </Link>{" "}
                pour que les donnees de production ne se retrouvent jamais dans
                un environnement non securise. Les logs applicatifs sont
                filtres pour exclure toute donnee personnelle.
              </p>
              <p>
                Notre approche par{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tests automatises
                </Link>{" "}
                inclut des tests de securite dans le pipeline CI/CD. Chaque
                deploiement est verifie automatiquement pour les regressions de
                securite, les dependances vulnerables (via{" "}
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
              developpement de leurs applications critiques.
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
              Votre application financiere merite une securite sans compromis
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Discutons de vos enjeux de securite et de conformite. Nous
              analysons votre besoin et vous proposons une architecture
              adaptee aux exigences de votre secteur.
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
            <SectionTitle>Questions frequentes</SectionTitle>
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

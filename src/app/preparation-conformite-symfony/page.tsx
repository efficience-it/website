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
import LastUpdated from "@/components/ui/LastUpdated";

export const metadata = pageMetadata({
  title: "Préparation conformité NIS2 et DORA pour Symfony",
  description:
    "Efficience IT prépare vos applications Symfony à NIS2 et DORA : hardening, conformité continue et mise en condition avant un audit officiel PASSI.",
  path: "/preparation-conformite-symfony",
});

const livrables = [
  {
    title: "Hardening Symfony",
    description:
      "Nous durcissons votre application : configuration sécurisée, authentification multifacteur, gestion des secrets, headers de sécurité et correction des dépendances vulnérables. Vous repartez avec une base technique alignée sur les exigences NIS2 et DORA.",
    points: [
      "Durcissement de la configuration Symfony et serveur",
      "Authentification multifacteur et contrôle d'accès renforcé",
      "Journalisation exploitable et traçabilité des accès",
      "Plan de remédiation priorisé des dépendances vulnérables",
    ],
  },
  {
    title: "Conformité continue",
    description:
      "La conformité n'est pas un instantané. Nous mettons en place un suivi récurrent pour que votre application reste alignée au fil des évolutions : veille des dépendances, revue de configuration et points réguliers avec vos équipes.",
    points: [
      "Veille automatisée des CVE et des dépendances",
      "Revue de configuration et de journalisation périodique",
      "Tableau de bord de conformité partagé",
      "Restitution trimestrielle des écarts et des correctifs",
    ],
  },
  {
    title: "Préparation à l'audit officiel",
    description:
      "Avant le passage d'un auditeur PASSI, nous mettons votre application en condition : revue des écarts, constitution des preuves et accompagnement de vos équipes pour franchir l'audit sans surprise.",
    points: [
      "Cartographie des écarts au regard du référentiel",
      "Constitution du dossier de preuves techniques",
      "Préparation des équipes aux entretiens d'audit",
      "Coordination avec votre auditeur certifié",
    ],
  },
];

const etapes = [
  {
    num: "1",
    title: "Cadrage",
    description:
      "Nous cartographions votre application, vos obligations réglementaires (NIS2, DORA, ou les deux) et le périmètre concerné. Cet échange initial fixe les priorités et les zones critiques.",
  },
  {
    num: "2",
    title: "Diagnostic",
    description:
      "Analyse statique, revue de configuration, inspection des dépendances et de la journalisation. Nous produisons une cartographie des écarts au regard des exigences applicables.",
  },
  {
    num: "3",
    title: "Remédiation",
    description:
      "Nous corrigeons les écarts priorisés avec vos équipes : hardening, authentification forte, traçabilité, plan de continuité. Chaque correctif est validé par les tests pour éviter les régressions.",
  },
  {
    num: "4",
    title: "Préparation à l'audit",
    description:
      "Constitution du dossier de preuves, répétition des entretiens et coordination avec l'auditeur PASSI. Votre application aborde l'audit officiel sans écart majeur.",
  },
];

const useCases = [
  {
    title: "Éditeur SaaS soumis à NIS2",
    description:
      "Un éditeur SaaS B2B servant des entités essentielles découvre qu'il entre dans le périmètre élargi de NIS2. Sa configuration Symfony était permissive, l'authentification reposait sur un mot de passe seul et la journalisation des accès restait lacunaire.",
    after:
      "Après notre intervention, l'application dispose d'une authentification multifacteur, d'une journalisation exploitable et d'une gestion maîtrisée des dépendances. L'éditeur a franchi l'audit de son client sans écart bloquant.",
  },
  {
    title: "Fintech préparant DORA",
    description:
      "Une fintech soumise au règlement DORA devait prouver sa résilience opérationnelle numérique. Le code n'était pas tracé de bout en bout, le plan de reprise n'avait jamais été testé et l'observabilité restait partielle.",
    after:
      "Nous avons mis en place la traçabilité des builds, un plan de continuité testé et une observabilité avec OpenTelemetry. La fintech a pu documenter sa résilience et répondre aux exigences de son régulateur.",
  },
  {
    title: "ETI fournisseur d'un acteur régulé",
    description:
      "Une ETI éditrice d'une application métier critique pour un client bancaire devait se mettre en condition avant un audit PASSI commandité par ce client. Les preuves techniques étaient dispersées et les équipes peu préparées aux entretiens.",
    after:
      "Nous avons constitué le dossier de preuves, corrigé les écarts priorisés et préparé les équipes. L'audit officiel s'est déroulé sans constat majeur et le contrat a été reconduit.",
  },
];

const faqItems = [
  {
    title: "Délivrez-vous l'attestation de conformité NIS2 ou DORA ?",
    content:
      "Non. L'attestation officielle relève d'un auditeur certifié, notamment d'un prestataire PASSI pour les audits encadrés par l'ANSSI. Notre rôle est de préparer techniquement votre application pour qu'elle franchisse cet audit sans écart majeur, en complément de votre auditeur.",
  },
  {
    title: "Mon application Symfony est-elle concernée par NIS2 ?",
    content:
      "Le périmètre de NIS2 est bien plus large que celui de NIS1. Il inclut de nombreuses entités essentielles et importantes ainsi que leurs sous-traitants et fournisseurs de services numériques au-delà d'un certain seuil. Une PME ou une ETI qui édite un SaaS ou sert une entité essentielle peut être concernée. Notre guide pour préparer techniquement votre application à NIS2 détaille les chantiers à mener.",
  },
  {
    title: "Quelle différence entre NIS2 et DORA ?",
    content:
      "NIS2 est une directive transverse qui couvre de nombreux secteurs critiques. DORA est un règlement spécifique au secteur financier centré sur la résilience opérationnelle numérique. Pour une entité financière, DORA prime sur NIS2 sur les sujets qu'il couvre. Les deux partagent une logique commune de gestion des risques, de journalisation et de notification d'incidents, ce qui permet de mutualiser une grande partie des chantiers techniques.",
  },
  {
    title: "Faut-il préparer la conformité avant ou pendant l'audit officiel ?",
    content:
      "Avant. Un auditeur constate des écarts, il ne les corrige pas. Arriver à l'audit sans préparation, c'est risquer un rapport défavorable et un nouveau passage. En préparant en amont, vous abordez l'audit officiel avec un dossier de preuves complet et des équipes prêtes à répondre aux entretiens.",
  },
  {
    title: "Travaillez-vous avec des auditeurs PASSI certifiés ?",
    content:
      "Oui. Nous nous positionnons en amont de l'audit, en complément des prestataires d'audit certifiés. Nous préparons votre application et coordonnons nos travaux avec votre auditeur. Si vous n'en avez pas encore, nous pouvons vous orienter vers des partenaires reconnus.",
  },
  {
    title: "Combien de temps dure une préparation à la conformité ?",
    content:
      "Cela dépend de la maturité de votre application et du périmètre réglementaire. Une application déjà sécurisée demande surtout une mise en condition et une constitution de preuves. Une application jamais auditée nécessite une phase de remédiation plus conséquente. Le cadrage initial permet d'estimer l'effort et de prioriser les chantiers.",
  },
  {
    title: "Intervenez-vous sur la conformité de façon ponctuelle ou récurrente ?",
    content:
      "Les deux. Nous pouvons mener une préparation ponctuelle avant un audit, puis mettre en place un suivi récurrent de conformité continue. Ce suivi évite la dérive au fil des évolutions : veille des dépendances, revue de configuration et restitution régulière des écarts.",
  },
  {
    title: "Par où commencer si je découvre mes obligations ?",
    content:
      "Le plus simple est un premier diagnostic. Notre audit Symfony gratuit de 30 minutes permet d'évaluer votre exposition et de cadrer les priorités. Vous pouvez aussi tester votre niveau avec notre outil d'évaluation NIS2 avant d'échanger avec notre équipe.",
  },
];

const conformiteRelatedLinks: RelatedLink[] = [
  {
    title: "Sécurité applicative Symfony",
    description: "Audit de vulnérabilités, protection OWASP et conformité RGPD",
    href: "/securite-application-symfony",
  },
  {
    title: "Audit Symfony gratuit",
    description: "30 minutes pour évaluer votre exposition au risque",
    href: "/audit-symfony-gratuit",
  },
  {
    title: "Maintenance applicative Symfony",
    description: "Garder votre application sûre et à jour dans la durée",
    href: "/maintenance-applicative-symfony",
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
    title: "Outil d'évaluation NIS2",
    description: "Testez le niveau de préparation de votre application",
    href: "/outil-evaluation-nis2-symfony",
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
  { name: "Sécurité applicative Symfony", path: "/securite-application-symfony" },
  { name: "Préparation conformité NIS2 et DORA", path: "/preparation-conformite-symfony" },
]);

const service = serviceJsonLd({
  name: "Préparation conformité NIS2 et DORA pour Symfony",
  description:
    "Préparation technique de vos applications Symfony aux exigences NIS2 et DORA : hardening, conformité continue et mise en condition avant un audit officiel PASSI.",
  path: "/preparation-conformite-symfony",
  mainTech: ["symfony", "php"],
});

const webPage = webPageJsonLd({
  name: "Préparation conformité NIS2 et DORA pour Symfony",
  description:
    "Efficience IT prépare vos applications Symfony à NIS2 et DORA : hardening, conformité continue et mise en condition avant un audit officiel PASSI.",
  path: "/preparation-conformite-symfony",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
});

export default function PreparationConformiteSymfony() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Sécurité applicative Symfony", href: "/securite-application-symfony" }, { label: "Préparation conformité NIS2 et DORA" }]} />
            <LastUpdated path="/preparation-conformite-symfony" />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Conformité NIS2 et DORA
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Préparation conformité NIS2 et DORA pour Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  NIS2 et DORA imposent de nouvelles obligations de cybersécurité
                  et de résilience à de nombreuses entreprises et à leurs
                  fournisseurs. Efficience IT{" "}
                  <strong>prépare vos applications Symfony</strong> à franchir un
                  audit officiel sans écart majeur : hardening, conformité
                  continue et constitution du dossier de preuves.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Nous intervenons en amont d&apos;un auditeur PASSI, en
                  complément de votre{" "}
                  <Link
                    href="/securite-application-symfony"
                    className="text-primary hover:underline"
                  >
                    démarche de sécurité applicative
                  </Link>
                  , pour mettre votre application en condition réelle.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre conformité</Button>
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
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
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
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Pourquoi préparer la conformité en amont
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Un auditeur constate des écarts, il ne les corrige pas. Aborder
                  un audit officiel sans préparation, c&apos;est risquer un rapport
                  défavorable, un plan de remédiation dans l&apos;urgence et un
                  nouveau passage. Les exigences de NIS2 et de DORA touchent le
                  cœur de votre application : configuration, authentification,
                  journalisation, gestion des dépendances et résilience.
                </p>
                <p className="mt-4 text-lg text-gray">
                  En préparant en amont, vous arrivez à l&apos;audit avec un
                  dossier de preuves complet et des équipes prêtes. C&apos;est le
                  prolongement naturel d&apos;une bonne{" "}
                  <Link
                    href="/securite-application-symfony"
                    className="text-primary hover:underline"
                  >
                    sécurité applicative Symfony
                  </Link>{" "}
                  et d&apos;une{" "}
                  <Link
                    href="/maintenance-applicative-symfony"
                    className="text-primary hover:underline"
                  >
                    maintenance applicative
                  </Link>{" "}
                  régulière qui garde l&apos;application à jour.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Ce que nous livrons</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Trois volets complémentaires pour préparer, maintenir et prouver
                la conformité de votre application Symfony.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {livrables.map((livrable) => (
                  <Card key={livrable.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {livrable.title}
                    </h3>
                    <p className="mt-2 text-gray">{livrable.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-gray">
                      {livrable.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Notre méthodologie en 4 étapes</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Un parcours structuré du cadrage initial à la mise en condition
                avant l&apos;audit officiel.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {etapes.map((etape) => (
                  <Card key={etape.title}>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                      {etape.num}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-dark">
                      {etape.title}
                    </h3>
                    <p className="mt-2 text-gray">{etape.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Un partenariat avec des auditeurs certifiés</SectionTitle>
              <div className="mx-auto max-w-3xl space-y-4 text-lg text-gray">
                <p>
                  Nous ne délivrons pas l&apos;attestation officielle de
                  conformité : celle-ci relève d&apos;un auditeur certifié,
                  notamment d&apos;un prestataire PASSI pour les audits encadrés
                  par l&apos;ANSSI. Notre métier, c&apos;est la préparation
                  technique en amont.
                </p>
                <p>
                  Nous travaillons en complément de votre auditeur : nous mettons
                  l&apos;application en condition, constituons le dossier de
                  preuves et préparons vos équipes aux entretiens. Si vous
                  n&apos;avez pas encore d&apos;auditeur, nous pouvons vous
                  orienter vers des partenaires reconnus. Pour aller plus loin,
                  consultez nos guides pour{" "}
                  <Link
                    href="/article/conformite-nis2-application-symfony"
                    className="text-primary hover:underline"
                  >
                    préparer votre application à NIS2
                  </Link>{" "}
                  et pour assurer la{" "}
                  <Link
                    href="/article/conformite-dora-resilience-symfony"
                    className="text-primary hover:underline"
                  >
                    résilience applicative exigée par DORA
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
              <SectionTitle>Cas d&apos;usage</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Trois situations anonymisées de préparation à la conformité que
                nous menons régulièrement.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {useCases.map((useCase) => (
                  <Card key={useCase.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-gray">{useCase.description}</p>
                    <p className="mt-3 font-semibold text-dark">Après</p>
                    <p className="mt-1 text-gray">{useCase.after}</p>
                  </Card>
                ))}
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
          <RelatedLinks links={conformiteRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

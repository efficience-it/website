import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import AuditForm from "@/components/sections/AuditForm";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, howToJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Diagnostic Symfony gratuit de 30 minutes : premier état des lieux",
  description:
    "Diagnostic gratuit de 30 minutes pour votre application Symfony : premier état des lieux technique, identification des points critiques et pistes d'amélioration. Sans engagement.",
  path: "/audit-symfony-gratuit",
});

const auditTopics = [
  {
    title: "Architecture",
    description:
      "Qualité de l'architecture applicative : couplage, séparation des couches, respect des bonnes pratiques Symfony.",
  },
  {
    title: "Dette technique",
    description:
      "État de la dette technique visible : analyse PHPStan, couverture de tests, complexité du code.",
  },
  {
    title: "Sécurité",
    description:
      "Identification des risques de sécurité évidents : dépendances obsolètes, failles connues, configuration.",
  },
  {
    title: "Performance",
    description:
      "Points de contention identifiables : requêtes lentes, cache, gestion des assets et temps de réponse.",
  },
  {
    title: "Migration",
    description:
      "Stratégie de montée de version si votre application est en Symfony 3, 4 ou 5 : roadmap et priorisation.",
  },
];

const faqItems = [
  {
    title: "Combien de temps dure un audit Symfony ?",
    content:
      "L'audit se déroule en un appel visio de 30 minutes. Nous préparons la session en amont à partir des informations que vous fournissez dans le formulaire. Vous recevez ensuite un compte-rendu écrit sous 48 heures.",
  },
  {
    title: "Que contient le rapport d'audit ?",
    content:
      "Le rapport inclut une synthèse de l'état technique de votre application : architecture, dette technique, sécurité, performance et pistes de migration. Chaque constat est accompagné de recommandations concrètes et priorisées.",
  },
  {
    title: "L'audit est-il vraiment gratuit ?",
    content:
      "Oui, l'audit de 30 minutes est entièrement gratuit et sans engagement. Il n'y a aucune obligation de poursuivre avec une prestation payante. C'est notre façon de vous montrer notre expertise avant tout engagement.",
  },
  {
    title: "Mon code reste-t-il confidentiel ?",
    content:
      "Absolument. Si vous partagez un accès en lecture à votre repository, nous nous engageons à ne pas copier, diffuser ni réutiliser votre code. Nous pouvons signer un accord de confidentialité (NDA) si nécessaire.",
  },
  {
    title: "Que se passe-t-il après l'audit ?",
    content:
      "Vous êtes libre de mettre en œuvre les recommandations par vous-même ou avec l'équipe de votre choix. Si vous souhaitez être accompagné, nous pouvons vous proposer une prestation adaptée, mais rien ne vous y oblige.",
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
  { name: "Diagnostic Symfony gratuit", path: "/audit-symfony-gratuit" },
]);

const howTo = howToJsonLd(
  "Obtenir un audit Symfony gratuit",
  "Comment obtenir un audit technique gratuit de 30 minutes pour votre application Symfony.",
  [
    {
      name: "Remplir le formulaire",
      text: "Renseignez quelques informations sur votre projet Symfony (version, taille de l'équipe, problème principal) via le formulaire en ligne.",
    },
    {
      name: "Appel visio de 30 minutes",
      text: "Un expert Symfony analyse votre application avec vous en visioconférence. Partagez un accès en lecture au repo si possible.",
    },
    {
      name: "Compte-rendu sous 48h",
      text: "Recevez une synthèse écrite avec les constats et recommandations d'amélioration, sans engagement.",
    },
  ],
);

const webPage = webPageJsonLd({
  name: "Diagnostic Symfony gratuit de 30 minutes : premier état des lieux",
  description: "Diagnostic gratuit de 30 minutes pour votre application Symfony : premier état des lieux technique, identification des points critiques et pistes d'amélioration. Sans engagement.",
  path: "/audit-symfony-gratuit",
  datePublished: "2025-09-01",
  dateModified: "2026-02-01",
});

const auditRelatedLinks: RelatedLink[] = [
  {
    title: "Pourquoi choisir Symfony pour vos projets",
    description: "Comprendre les atouts du framework",
    href: "/article/pourquoi-choisir-symfony-pour-vos-projets",
  },
  {
    title: "Accompagnement et Conseil",
    description: "Nos prestations de conseil et formation",
    href: "/accompagnement-et-conseil",
  },
  {
    title: "Symfony, documentation officielle",
    description: "Référence technique du framework",
    href: "https://symfony.com/doc/current/index.html",
    external: true,
  },
];

export default function AuditSymfonyGratuit() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
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
                  Gratuit et sans engagement
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Diagnostic Symfony gratuit de 30 minutes : premier état des lieux
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony a plus de 3 ans ? Vous accumulez de
                  la dette technique sans savoir par où commencer ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Nous vous proposons un{" "}
                  <strong>audit technique gratuit de 30 minutes</strong> pour
                  identifier les points critiques de votre application et vous
                  donner des pistes d&apos;amélioration concrètes.
                  Pour un audit technique complet avec analyse PHPStan niveau max,
                  revue manuelle et rapport détaillé sous 48h, découvrez notre{" "}
                  <Link
                    href="/audit-code-php"
                    className="text-primary hover:underline"
                  >
                    prestation d&apos;audit approfondi
                  </Link>
                  .
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un appel visio de 30 min, un compte-rendu écrit sous 48h.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/illustrations/online-report.svg"
                  alt="Audit Symfony gratuit"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que couvre l&apos;audit</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              En 30 minutes, nous passons en revue les points essentiels de
              votre application Symfony pour vous donner une vision claire de
              son état technique.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {auditTopics.map((topic) => (
                <Card key={topic.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-gray">{topic.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Résultats concrets</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Quelques exemples de résultats obtenus lors de nos audits Symfony
              auprès de clients aux profils variés.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  -40%
                </p>
                <p className="mt-2 text-gray">
                  Réduction de 40% du temps de chargement après optimisation des
                  requêtes Doctrine
                </p>
              </Card>
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  12 failles
                </p>
                <p className="mt-2 text-gray">
                  Détection de 12 failles de sécurité critiques sur une
                  application e-commerce
                </p>
              </Card>
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  3 sprints
                </p>
                <p className="mt-2 text-gray">
                  Migration de Symfony 4.4 à 6.4 planifiée et exécutée en 3
                  sprints
                </p>
              </Card>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que nos clients en disent</SectionTitle>
            <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
              <Card>
                <blockquote className="text-lg italic text-gray">
                  &laquo;&nbsp;L&apos;audit nous a permis d&apos;identifier des
                  problèmes de performance que nous n&apos;avions pas détectés.
                  En 30 minutes, nous avions une feuille de route
                  claire.&nbsp;&raquo;
                </blockquote>
                <p className="mt-4 font-semibold text-dark">
                  CTO, PME e-commerce
                </p>
              </Card>
              <Card>
                <blockquote className="text-lg italic text-gray">
                  &laquo;&nbsp;Pragmatique et sans jargon. L&apos;équipe a su
                  vulgariser les enjeux techniques pour notre
                  direction.&nbsp;&raquo;
                </blockquote>
                <p className="mt-4 font-semibold text-dark">
                  Responsable projet, groupe industriel
                </p>
              </Card>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Comment ça se passe</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Vous remplissez le formulaire
                </h3>
                <p className="mt-2 text-gray">
                  Quelques informations sur votre projet pour que nous puissions
                  préparer l&apos;audit en amont.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Appel visio de 30 min
                </h3>
                <p className="mt-2 text-gray">
                  Nous analysons ensemble votre application. Si vous pouvez
                  partager un accès en lecture au repo, c&apos;est encore mieux.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Compte-rendu sous 48h
                </h3>
                <p className="mt-2 text-gray">
                  Vous recevez une synthèse écrite avec nos constats et
                  recommandations. Sans engagement. Pour en savoir plus sur{" "}
                  <Link href="/article/comment-se-passe-un-audit-chez-efficience-it-quel-contenu-comment-procede-t-on-quels-sont-les-criteres-quel-procede" className="text-primary hover:underline">
                    notre méthodologie d&apos;audit
                  </Link>
                  , consultez notre article dédié.
                </p>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section id="formulaire" className="py-16 md:py-24">
          <Container>
            <SectionTitle>Demander votre audit gratuit</SectionTitle>
            <div className="mx-auto mt-10 grid max-w-5xl items-start gap-12 lg:grid-cols-5">
              <div className="lg:col-span-2">
                <div className="rounded-lg bg-light-gray p-6">
                  <blockquote className="text-lg italic text-gray">
                    &laquo;&nbsp;Efficience IT a su rapidement comprendre nos
                    problématiques. Compréhension approfondie de Symfony permise
                    API performante et fiable.&nbsp;&raquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-dark">Luc Delbreuil</p>
                    <p className="text-sm text-gray">
                      Directeur Général, Glasseo
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-lg bg-light-gray p-6">
                  <blockquote className="text-lg italic text-gray">
                    &laquo;&nbsp;Collaboration avec Efficience IT très appréciée !
                    Proximité technique et flexibilité ont produit qualité en
                    temps record.&nbsp;&raquo;
                  </blockquote>
                  <div className="mt-4">
                    <p className="font-semibold text-dark">Viktor Toldov</p>
                    <p className="text-sm text-gray">CTO, Lituus</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <AuditForm />
                <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray">
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Réponse sous 48h
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    NDA possible
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 text-green-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    0 obligation
                  </span>
                </div>
                <p className="mt-6 text-center text-gray">
                  Vous n&apos;êtes pas sûr que l&apos;audit soit adapté à votre
                  situation ?{" "}
                  <Link
                    href="/contact"
                    className="text-primary hover:underline"
                  >
                    Contactez-nous pour en discuter
                  </Link>
                  , sans engagement.
                </p>
              </div>
            </div>
          </Container>
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
        <RelatedLinks
          links={auditRelatedLinks}
          className="bg-light-gray"
        />
        </FadeIn>
      </main>
    </>
  );
}

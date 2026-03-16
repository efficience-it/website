import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Maintenance applicative Symfony (TMA) : corrective, évolutive, préventive",
  description:
    "Efficience IT assure la maintenance applicative de vos projets Symfony : correction de bugs, évolutions fonctionnelles, mises à jour de sécurité, monitoring et SLA sur mesure.",
  path: "/maintenance-applicative-symfony",
});

const typesMaintenances = [
  {
    title: "Maintenance corrective",
    description:
      "Correction des bugs, des régressions et des anomalies en production. Nous intervenons selon des niveaux de sévérité définis dans le SLA : critique (4h), majeur (24h), mineur (72h).",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "Maintenance évolutive",
    description:
      "Nouvelles fonctionnalités, améliorations de l'existant, intégration de services tiers. Nous travaillons par sprints courts pour livrer de la valeur régulièrement sans déstabiliser l'application.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Maintenance préventive",
    description:
      "Mises à jour de sécurité Symfony et des dépendances Composer, montées de version PHP, refactoring ciblé pour réduire la dette technique avant qu'elle ne devienne bloquante.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
];

const slaItems = [
  {
    title: "Monitoring proactif",
    description:
      "Surveillance en continu de votre application : disponibilité, temps de réponse, erreurs applicatives. Nous détectons les problèmes avant vos utilisateurs.",
  },
  {
    title: "Temps de réaction garanti",
    description:
      "Un SLA adapté à vos enjeux métier. Pour les incidents critiques, nous intervenons en moins de 4 heures, week-end compris si nécessaire.",
  },
  {
    title: "Rapports mensuels",
    description:
      "Un suivi transparent : bugs corrigés, mises à jour effectuées, état de santé de l'application, recommandations d'amélioration. Vous savez exactement où vous en êtes.",
  },
  {
    title: "Interlocuteur dédié",
    description:
      "Un développeur référent qui connaît votre application et votre métier. Pas de turnover, pas de perte de contexte à chaque demande.",
  },
];

const approche = [
  {
    num: "1",
    title: "Audit de l'existant",
    description:
      "Analyse de l'architecture, de la qualité du code, des dépendances et de l'infrastructure. Nous identifions les risques et priorisons les actions.",
  },
  {
    num: "2",
    title: "Plan de maintenance",
    description:
      "Définition du périmètre, des niveaux de SLA, des fréquences de mise à jour et du volume d'évolutions mensuelles. Un cadre clair pour les deux parties.",
  },
  {
    num: "3",
    title: "Prise en charge",
    description:
      "Mise en place du monitoring, de la gestion des tickets et des environnements de recette. Votre application est entre de bonnes mains.",
  },
  {
    num: "4",
    title: "Suivi continu",
    description:
      "Sprints de maintenance réguliers, mises à jour de sécurité, corrections et évolutions. Un point mensuel pour ajuster les priorités selon vos besoins.",
  },
];

const faqItems = [
  {
    title: "Quelle est la différence entre TMA et support technique ?",
    content:
      "Le support technique intervient ponctuellement sur des incidents. La TMA (Tierce Maintenance Applicative) est un engagement continu qui couvre la correction de bugs, les évolutions fonctionnelles, les mises à jour de sécurité et le monitoring. C'est un accompagnement global de votre application dans la durée.",
  },
  {
    title: "Pouvez-vous maintenir une application que vous n'avez pas développée ?",
    content:
      "Oui, c'est même une situation fréquente. Nous commençons par un audit pour comprendre l'architecture, la qualité du code et les zones de risque. En quelques semaines, notre équipe maîtrise le projet suffisamment pour intervenir efficacement.",
  },
  {
    title: "Quelle version minimale de Symfony prenez-vous en charge ?",
    content:
      "Nous intervenons sur Symfony 3.4 et toutes les versions suivantes. Pour les applications sur des versions en fin de vie, nous proposons un plan de migration progressive vers une version LTS maintenue, en parallèle de la maintenance courante.",
  },
  {
    title: "Comment sont gérées les urgences en production ?",
    content:
      "Chaque contrat définit des niveaux de sévérité avec des temps de réaction garantis. Pour un incident critique (application inaccessible, perte de données), nous intervenons dans les 4 heures. Un canal de communication dédié permet de nous alerter immédiatement.",
  },
  {
    title: "La maintenance inclut-elle les montées de version Symfony ?",
    content:
      "Les correctifs de sécurité sur votre version actuelle sont inclus dans la maintenance préventive. Les montées de version majeures (par exemple Symfony 5 vers 6) sont traitées comme des projets dédiés avec un chiffrage et un planning spécifiques.",
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
  { name: "Modernisation applicative", path: "/modernisation-applicative" },
  { name: "Maintenance applicative Symfony", path: "/maintenance-applicative-symfony" },
]);

const service = serviceJsonLd({
  name: "Maintenance applicative Symfony (TMA)",
  description:
    "Maintenance corrective, évolutive et préventive de vos applications Symfony : correction de bugs, évolutions fonctionnelles, mises à jour de sécurité, monitoring et SLA sur mesure.",
  path: "/maintenance-applicative-symfony",
});

const webPage = webPageJsonLd({
  name: "Maintenance applicative Symfony (TMA) : corrective, évolutive, préventive",
  description:
    "Efficience IT assure la maintenance applicative de vos projets Symfony : correction de bugs, évolutions fonctionnelles, mises à jour de sécurité, monitoring et SLA sur mesure.",
  path: "/maintenance-applicative-symfony",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const maintenanceRelatedLinks: RelatedLink[] = [
  { title: "Modernisation applicative", description: "dernière étape du parcours : pérenniser après la modernisation", href: "/modernisation-applicative" },
  { title: "Reprise de projet Symfony", description: "quand le projet nécessite d'abord un sauvetage avant la maintenance", href: "/reprise-projet-symfony" },
  { title: "Guide de migration dans un projet Symfony", description: "notre méthodologie pour monter de version en toute sécurité", href: "/article/guide-de-migration-dans-un-projet-symfony" },
  { title: "Pourquoi nous confier la maintenance de vos applications web", description: "notre vision de la maintenance applicative", href: "/article/decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web" },
  { title: "CVE : comprendre les failles pour mieux se protéger", description: "pourquoi les mises à jour de sécurité sont essentielles", href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger" },
  { title: "Calendrier des versions Symfony", description: "dates de fin de maintenance officielle", href: "https://symfony.com/releases", external: true },
];

export default function MaintenanceApplicativeSymfony() {
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
            <Breadcrumb items={[{ label: "Modernisation applicative", href: "/modernisation-applicative" }, { label: "Maintenance applicative" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  TMA Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Maintenance applicative Symfony (TMA) : corrective, évolutive, préventive
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony tourne en production et vous avez besoin
                  d&apos;une équipe fiable pour la maintenir, la faire évoluer et la
                  sécuriser dans la durée.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT prend en charge la{" "}
                  <strong>maintenance applicative</strong> de vos projets Symfony :
                  correction de bugs, évolutions fonctionnelles, mises à jour de sécurité
                  et monitoring. Un interlocuteur dédié, des SLA clairs, et une équipe
                  qui connaît votre code.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Demander un audit gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
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
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
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
            <SectionTitle>Trois types de maintenance pour couvrir tous vos besoins</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              La maintenance applicative ne se limite pas à corriger des bugs.
              Elle englobe tout ce qui permet à votre application de rester fiable,
              sécurisée et alignée avec vos besoins métier.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {typesMaintenances.map((type) => (
                <Card key={type.title}>
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
                        d={type.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {type.title}
                  </h3>
                  <p className="mt-2 text-gray">{type.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              La{" "}
              <Link
                href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                className="text-primary hover:underline"
              >
                dette technique
              </Link>{" "}
              s&apos;accumule quand la maintenance préventive est négligée. Notre approche
              vise à la réduire progressivement, sprint après sprint.
              Quand une montée de version majeure est nécessaire, notre service de{" "}
              <Link
                href="/migration-symfony"
                className="text-primary hover:underline"
              >
                migration Symfony
              </Link>{" "}
              prend le relais avec une approche par paliers.
              Pour les applications PHP legacy à{" "}
              <Link
                href="/modernisation-application-php"
                className="text-primary hover:underline"
              >
                moderniser
              </Link>
              , nous combinons refactoring progressif et mise en place de tests.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>SLA et monitoring : un cadre clair</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Chaque contrat de maintenance définit des engagements précis.
              Vous savez exactement ce que vous obtenez et comment nous intervenons.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {slaItems.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
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
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Un processus structuré pour prendre en charge votre application
              sans rupture de service.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {approche.map((etape) => (
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
            <p className="mt-10 text-center text-lg text-gray">
              Nous utilisons{" "}
              <Link
                href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                className="text-primary hover:underline"
              >
                PHPStan
              </Link>
              ,{" "}
              <Link
                href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                className="text-primary hover:underline"
              >
                Rector
              </Link>{" "}
              et{" "}
              <Link
                href="/article/symfony-insight-a-quoi-ca-sert-et-comment-le-met-on-en-place"
                className="text-primary hover:underline"
              >
                Symfony Insight
              </Link>{" "}
              pour mesurer et améliorer en continu la qualité de votre code.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre application Symfony mérite une maintenance sérieuse
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit gratuit de 30 minutes. Nous évaluons
              l&apos;état de votre application et vous proposons un plan de
              maintenance adapté.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit gratuit
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
        <RelatedLinks links={maintenanceRelatedLinks} className="bg-light-gray" />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

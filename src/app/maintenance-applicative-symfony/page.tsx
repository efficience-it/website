import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Maintenance applicative Symfony (TMA) : corrective, evolutive, preventive",
  description:
    "Efficience IT assure la maintenance applicative de vos projets Symfony : correction de bugs, evolutions fonctionnelles, mises a jour de securite, monitoring et SLA sur mesure.",
  path: "/maintenance-applicative-symfony",
});

const typesMaintenances = [
  {
    title: "Maintenance corrective",
    description:
      "Correction des bugs, des regressions et des anomalies en production. Nous intervenons selon des niveaux de severite definis dans le SLA : critique (4h), majeur (24h), mineur (72h).",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "Maintenance evolutive",
    description:
      "Nouvelles fonctionnalites, ameliorations de l'existant, integration de services tiers. Nous travaillons par sprints courts pour livrer de la valeur regulierement sans destabiliser l'application.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Maintenance preventive",
    description:
      "Mises a jour de securite Symfony et des dependances Composer, montees de version PHP, refactoring cible pour reduire la dette technique avant qu'elle ne devienne bloquante.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
];

const slaItems = [
  {
    title: "Monitoring proactif",
    description:
      "Surveillance en continu de votre application : disponibilite, temps de reponse, erreurs applicatives. Nous detectons les problemes avant vos utilisateurs.",
  },
  {
    title: "Temps de reaction garanti",
    description:
      "Un SLA adapte a vos enjeux metier. Pour les incidents critiques, nous intervenons en moins de 4 heures, week-end compris si necessaire.",
  },
  {
    title: "Rapports mensuels",
    description:
      "Un suivi transparent : bugs corriges, mises a jour effectuees, etat de sante de l'application, recommandations d'amelioration. Vous savez exactement ou vous en etes.",
  },
  {
    title: "Interlocuteur dedie",
    description:
      "Un developpeur referent qui connait votre application et votre metier. Pas de turnover, pas de perte de contexte a chaque demande.",
  },
];

const approche = [
  {
    num: "1",
    title: "Audit de l'existant",
    description:
      "Analyse de l'architecture, de la qualite du code, des dependances et de l'infrastructure. Nous identifions les risques et priorisons les actions.",
  },
  {
    num: "2",
    title: "Plan de maintenance",
    description:
      "Definition du perimetre, des niveaux de SLA, des frequences de mise a jour et du volume d'evolutions mensuelles. Un cadre clair pour les deux parties.",
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
      "Sprints de maintenance reguliers, mises a jour de securite, corrections et evolutions. Un point mensuel pour ajuster les priorites selon vos besoins.",
  },
];

const faqItems = [
  {
    title: "Quelle est la difference entre TMA et support technique ?",
    content:
      "Le support technique intervient ponctuellement sur des incidents. La TMA (Tierce Maintenance Applicative) est un engagement continu qui couvre la correction de bugs, les evolutions fonctionnelles, les mises a jour de securite et le monitoring. C'est un accompagnement global de votre application dans la duree.",
  },
  {
    title: "Pouvez-vous maintenir une application que vous n'avez pas developpee ?",
    content:
      "Oui, c'est meme une situation frequente. Nous commencons par un audit pour comprendre l'architecture, la qualite du code et les zones de risque. En quelques semaines, notre equipe maitrise le projet suffisamment pour intervenir efficacement.",
  },
  {
    title: "Quelle version minimale de Symfony prenez-vous en charge ?",
    content:
      "Nous intervenons sur Symfony 3.4 et toutes les versions suivantes. Pour les applications sur des versions en fin de vie, nous proposons un plan de migration progressive vers une version LTS maintenue, en parallele de la maintenance courante.",
  },
  {
    title: "Comment sont gerees les urgences en production ?",
    content:
      "Chaque contrat definit des niveaux de severite avec des temps de reaction garantis. Pour un incident critique (application inaccessible, perte de donnees), nous intervenons dans les 4 heures. Un canal de communication dedie permet de nous alerter immediatement.",
  },
  {
    title: "La maintenance inclut-elle les montees de version Symfony ?",
    content:
      "Les correctifs de securite sur votre version actuelle sont inclus dans la maintenance preventive. Les montees de version majeures (par exemple Symfony 5 vers 6) sont traitees comme des projets dedies avec un chiffrage et un planning specifiques.",
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
  { name: "Maintenance applicative Symfony", path: "/maintenance-applicative-symfony" },
]);

const service = serviceJsonLd({
  name: "Maintenance applicative Symfony (TMA)",
  description:
    "Maintenance corrective, evolutive et preventive de vos applications Symfony : correction de bugs, evolutions fonctionnelles, mises a jour de securite, monitoring et SLA sur mesure.",
  path: "/maintenance-applicative-symfony",
});

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
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  TMA Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Maintenance applicative Symfony (TMA) : corrective, evolutive, preventive
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony tourne en production et vous avez besoin
                  d&apos;une equipe fiable pour la maintenir, la faire evoluer et la
                  securiser dans la duree.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT prend en charge la{" "}
                  <strong>maintenance applicative</strong> de vos projets Symfony :
                  correction de bugs, evolutions fonctionnelles, mises a jour de securite
                  et monitoring. Un interlocuteur dedie, des SLA clairs, et une equipe
                  qui connait votre code.
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

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Trois types de maintenance pour couvrir tous vos besoins</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              La maintenance applicative ne se limite pas a corriger des bugs.
              Elle englobe tout ce qui permet a votre application de rester fiable,
              securisee et alignee avec vos besoins metier.
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
              s&apos;accumule quand la maintenance preventive est negligee. Notre approche
              vise a la reduire progressivement, sprint apres sprint.
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>SLA et monitoring : un cadre clair</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Chaque contrat de maintenance definit des engagements precis.
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

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Un processus structure pour prendre en charge votre application
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
              pour mesurer et ameliorer en continu la qualite de votre code.
            </p>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre application Symfony merite une maintenance serieuse
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit gratuit de 30 minutes. Nous evaluons
              l&apos;etat de votre application et vous proposons un plan de
              maintenance adapte.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit gratuit
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Questions frequentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/reprise-projet-symfony"
                  className="text-primary hover:underline"
                >
                  Reprise de projet Symfony
                </Link>{" "}
                , quand le projet necessite d&apos;abord un sauvetage avant la maintenance
              </li>
              <li>
                <Link
                  href="/article/guide-de-migration-dans-un-projet-symfony"
                  className="text-primary hover:underline"
                >
                  Guide de migration dans un projet Symfony
                </Link>{" "}
                , notre methodologie pour monter de version en toute securite
              </li>
              <li>
                <Link
                  href="/article/decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web"
                  className="text-primary hover:underline"
                >
                  Pourquoi nous confier la maintenance de vos applications web
                </Link>{" "}
                , notre vision de la maintenance applicative
              </li>
              <li>
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  CVE : comprendre les failles pour mieux se proteger
                </Link>{" "}
                , pourquoi les mises a jour de securite sont essentielles
              </li>
              <li>
                <a
                  href="https://symfony.com/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Calendrier des versions Symfony
                </a>{" "}
                , dates de fin de maintenance officielle
              </li>
            </ul>
          </Container>
        </section>

        <CallToAction />
      </main>
    </>
  );
}

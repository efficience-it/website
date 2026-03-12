import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Consulting Symfony : expertise technique au service de vos equipes",
  description:
    "Consultant Symfony certifie pour vos missions d'audit, coaching d'equipe, code review et montee en competences. Des developpeurs qui codent au quotidien, pas des theoriciens.",
  path: "/consulting-symfony",
});

const missions = [
  {
    title: "Audit technique",
    description:
      "Analyse approfondie de votre codebase Symfony : architecture, dette technique, securite, performances. Vous obtenez un diagnostic clair et des recommandations actionnables.",
  },
  {
    title: "Coaching d'equipe",
    description:
      "Accompagnement de vos developpeurs sur les bonnes pratiques Symfony : architecture hexagonale, tests automatises, integration continue. Votre equipe monte en autonomie.",
  },
  {
    title: "Code review",
    description:
      "Revue systematique de vos pull requests par un expert Symfony certifie. Detection des anti-patterns, suggestions d'amelioration, transfert de connaissances en continu.",
  },
  {
    title: "Montee en competences",
    description:
      "Formation sur mesure adaptee au niveau de votre equipe : composants Symfony avances, Messenger, Doctrine, API Platform. Du concret, pas de la theorie.",
  },
  {
    title: "Architecture et conception",
    description:
      "Aide a la conception de nouvelles fonctionnalites : choix des composants, modelisation du domaine, strategie de tests. Vous prenez les bonnes decisions des le depart.",
  },
  {
    title: "Accompagnement CTO",
    description:
      "Support technique pour votre CTO ou lead developer : arbitrages technologiques, roadmap technique, organisation de l'equipe de developpement.",
  },
];

const approche = [
  {
    num: "1",
    title: "Diagnostic initial",
    description:
      "Nous analysons votre contexte : etat du code, maturite de l'equipe, contraintes metier. Nous identifions les leviers d'amelioration les plus impactants.",
  },
  {
    num: "2",
    title: "Plan d'intervention",
    description:
      "Nous definissons ensemble le format et la frequence d'intervention : mission ponctuelle, accompagnement recurrent, ou presence en regie partielle.",
  },
  {
    num: "3",
    title: "Intervention operationnelle",
    description:
      "Nous intervenons directement dans votre quotidien : reviews de code, sessions de pair programming, ateliers techniques, recommandations d'architecture.",
  },
  {
    num: "4",
    title: "Transfert et autonomie",
    description:
      "L'objectif est toujours de rendre votre equipe autonome. Nous documentons les decisions, formons vos developpeurs et reduisons progressivement notre intervention.",
  },
];

const pourquoi = [
  {
    title: "Developpeurs certifies Symfony",
    description:
      "Nos consultants sont certifies Symfony et codent au quotidien sur des projets reels. Ce ne sont pas des formateurs deconnectes du terrain, mais des praticiens qui connaissent les problemes concrets.",
  },
  {
    title: "Expertise, pas de la sous-traitance",
    description:
      "Nous ne placons pas des profils : nous apportons une expertise technique pointue. Chaque intervention est realisee par un developpeur senior qui connait Symfony en profondeur.",
  },
  {
    title: "Resultats mesurables",
    description:
      "Moins de bugs en production, meilleure couverture de tests, temps de livraison reduit. Nous suivons des indicateurs concrets pour mesurer l'impact de notre accompagnement.",
  },
];

const faqItems = [
  {
    title: "Quelle est la difference entre consulting et prestation de developpement ?",
    content:
      "Le consulting vise a renforcer votre equipe existante : nous apportons expertise, methode et bonnes pratiques. La prestation de developpement consiste a realiser du code pour vous. Nous faisons les deux, mais le consulting a un impact plus durable car votre equipe monte en competences.",
  },
  {
    title: "Combien de temps dure une mission de consulting Symfony ?",
    content:
      "Cela depend de vos besoins. Un audit technique prend 1 a 2 semaines. Un accompagnement d'equipe se deploie generalement sur 3 a 6 mois a raison de quelques jours par semaine. Nous adaptons le format a votre contexte.",
  },
  {
    title: "Intervenez-vous a distance ou sur site ?",
    content:
      "Les deux. Nous sommes bases a Lille et pouvons intervenir sur site dans la region Hauts-de-France. Pour les missions a distance, nous utilisons les outils collaboratifs de votre equipe : Slack, Teams, GitLab, GitHub.",
  },
  {
    title: "Vos consultants sont-ils vraiment certifies Symfony ?",
    content:
      "Oui. Nos developpeurs detiennent les certifications officielles delivrees par SensioLabs. Mais au-dela du certificat, ce qui compte c'est qu'ils codent sur Symfony tous les jours. La certification valide un socle, la pratique quotidienne fait la difference.",
  },
  {
    title: "Pouvez-vous intervenir sur un projet deja en cours ?",
    content:
      "C'est meme notre specialite. La majorite de nos missions de consulting concernent des projets existants ou l'equipe a besoin d'un regard exterieur pour debloquer une situation, ameliorer la qualite du code ou accelerer le developpement.",
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

const consultingRelatedLinks: RelatedLink[] = [
  { title: "Audit Symfony gratuit", description: "30 minutes pour evaluer votre situation", href: "/audit-symfony-gratuit" },
  { title: "Les certifications Symfony, Twig et Sylius", description: "Ce que garantissent nos certifications", href: "/article/les-certifications-symfony-twig-symfony-sylius" },
  { title: "Les 6 etapes pour monter en competences sur Symfony", description: "Notre methodologie de progression", href: "/article/les-6-etapes-pour-monter-en-competences-sur-symfony" },
  { title: "Documenter votre projet Symfony avec l'approche Diataxis", description: "Perenniser les acquis du consulting", href: "/article/comment-produire-la-documentation-sur-votre-projet-symfony-avec-lapproche-diataxis" },
  { title: "Programme de certification Symfony officiel", description: "Le programme de certification SensioLabs", href: "https://certification.symfony.com/", external: true },
];

const breadcrumb = breadcrumbJsonLd([
  { name: "Consulting Symfony", path: "/consulting-symfony" },
]);

const service = serviceJsonLd({
  name: "Consulting Symfony",
  description:
    "Missions de consulting Symfony : audit technique, coaching d'equipe, code review et montee en competences. Des developpeurs certifies qui codent au quotidien.",
  path: "/consulting-symfony",
});

export default function ConsultingSymfony() {
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
                  Consulting Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Consulting Symfony : expertise technique au service de vos equipes
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre equipe a besoin d&apos;un regard expert sur son code Symfony ?
                  Vous cherchez un consultant qui code vraiment, pas un theoricien
                  qui recite la documentation ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT met a votre disposition des{" "}
                  <strong>developpeurs certifies Symfony</strong> qui
                  interviennent sur des projets reels au quotidien. Audit, coaching,
                  code review ou montee en competences : nous adaptons notre
                  intervention a vos besoins concrets.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un premier echange de 30 minutes, gratuit et sans engagement.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Nos types de missions</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Chaque mission est adaptee a votre contexte. Nous intervenons
              ponctuellement ou sur la duree, selon ce qui fait sens pour votre
              equipe et votre projet.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {missions.map((mission) => (
                <Card key={mission.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {mission.title}
                  </h3>
                  <p className="mt-2 text-gray">{mission.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              La{" "}
              <Link
                href="/article/les-6-etapes-pour-monter-en-competences-sur-symfony"
                className="text-primary hover:underline"
              >
                montee en competences sur Symfony
              </Link>{" "}
              est un investissement durable. Nos missions de consulting
              accelerent ce processus en apportant un cadre structure et un
              retour d&apos;experience terrain.
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Un accompagnement structure pour maximiser l&apos;impact de chaque
              intervention et garantir un transfert de competences reel.
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
              Une bonne{" "}
              <Link
                href="/article/comment-produire-la-documentation-sur-votre-projet-symfony-avec-lapproche-diataxis"
                className="text-primary hover:underline"
              >
                documentation projet
              </Link>{" "}
              est essentielle pour perenniser les acquis du consulting. Nous
              aidons votre equipe a mettre en place une culture de la
              documentation technique.
            </p>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi choisir nos consultants Symfony</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pourquoi.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-center text-lg text-gray">
              <p>
                Nos developpeurs detiennent les{" "}
                <Link
                  href="/article/les-certifications-symfony-twig-symfony-sylius"
                  className="text-primary hover:underline"
                >
                  certifications officielles Symfony
                </Link>
                , un gage de maitrise du framework valide par{" "}
                <a
                  href="https://certification.symfony.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  SensioLabs
                </a>
                . Mais ce qui fait vraiment la difference, c&apos;est leur pratique
                quotidienne du code.
              </p>
              <p>
                Vous vous demandez{" "}
                <Link
                  href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                  className="text-primary hover:underline"
                >
                  pourquoi choisir Symfony
                </Link>{" "}
                pour vos projets ? Nos consultants vous aident a tirer le
                meilleur parti du framework, quelle que soit la taille de votre
                application.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Besoin d&apos;un regard expert sur votre projet Symfony ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Echangeons 30 minutes sur votre contexte. Nous vous donnons un
              premier diagnostic gratuit et sans engagement.
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

        <RelatedLinks links={consultingRelatedLinks} className="bg-light-gray" />

        <CallToAction />
      </main>
    </>
  );
}

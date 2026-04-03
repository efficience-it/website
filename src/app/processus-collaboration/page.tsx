import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Button from "@/components/ui/Button";
import { breadcrumbJsonLd, howToJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Notre processus de collaboration : du premier contact à la production",
  description:
    "Comment se déroule un projet avec Efficience IT : diagnostic gratuit, cadrage, développement agile, revue de code et mise en production Symfony.",
  path: "/processus-collaboration",
});

const processSteps = [
  {
    number: 1,
    title: "Premier contact et diagnostic gratuit",
    duration: "30 minutes",
    description:
      "Tout commence par un échange de 30 minutes en visio, gratuit et sans engagement. Nous écoutons votre besoin, analysons votre contexte technique et identifions les premières pistes. Si vous avez déjà une application existante, nous réalisons un premier état des lieux technique.",
    deliverables: [
      "Compte-rendu écrit sous 48h",
      "Premières recommandations",
      "Estimation de la faisabilité",
    ],
  },
  {
    number: 2,
    title: "Cadrage et spécifications",
    duration: "1 à 2 semaines",
    description:
      "Nous définissons ensemble le périmètre du projet. Cette phase inclut l'analyse fonctionnelle, la rédaction des spécifications techniques et la planification de la feuille de route. Chaque fonctionnalité est découpée en tâches estimées et priorisées.",
    deliverables: [
      "Document de cadrage",
      "Backlog priorisé",
      "Planning prévisionnel",
      "Estimation budgétaire détaillée",
    ],
  },
  {
    number: 3,
    title: "Développement itératif",
    duration: "Sprints de 2 semaines",
    description:
      "Le développement se fait en sprints courts de deux semaines, en méthode agile. À chaque fin de sprint, vous recevez une démonstration fonctionnelle et validez les avancées. Vous avez une visibilité constante sur l'avancement du projet via notre outil de suivi.",
    deliverables: [
      "Démo fonctionnelle à chaque sprint",
      "Accès au serveur de recette",
      "Rapport d'avancement",
    ],
  },
  {
    number: 4,
    title: "Revue de code et assurance qualité",
    duration: "En continu",
    description:
      "Chaque ligne de code passe par une revue de code systématique. Nous utilisons PHPStan au niveau maximum, les tests automatisés (unitaires, fonctionnels, d'intégration) et une pipeline CI/CD pour garantir la qualité. Le code est déployé automatiquement sur un environnement de recette pour validation.",
    deliverables: [
      "Couverture de tests",
      "Rapports d'analyse statique",
      "Environnement de recette à jour",
    ],
  },
  {
    number: 5,
    title: "Mise en production",
    duration: "1 à 3 jours",
    description:
      "Le déploiement en production est préparé en amont : configuration du serveur, mise en place de la supervision, plan de rollback. Le jour J, le déploiement se fait via notre pipeline CI/CD, avec zéro interruption de service. Nous restons disponibles pour surveiller les premières heures.",
    deliverables: [
      "Application en production",
      "Supervision et alertes configurées",
      "Documentation de déploiement",
    ],
  },
  {
    number: 6,
    title: "Suivi et maintenance",
    duration: "En continu",
    description:
      "Après la mise en production, nous assurons la maintenance corrective et évolutive de votre application. Mises à jour de sécurité, montées de version Symfony, nouvelles fonctionnalités : votre application reste performante et sécurisée dans la durée.",
    deliverables: [
      "Mises à jour régulières",
      "Support réactif",
      "Évolutions fonctionnelles",
    ],
  },
];

const faqItems = [
  {
    title: "Combien de temps dure un projet type ?",
    content:
      "La durée dépend de la complexité du projet. Un MVP peut être livré en 6 à 8 semaines. Un projet plus conséquent prend généralement 3 à 6 mois. Le cadrage initial permet de définir un planning réaliste dès le départ.",
  },
  {
    title: "Comment évaluez-vous la faisabilité d'un projet ?",
    content:
      "Chaque projet est différent. Le diagnostic gratuit de 30 minutes nous permet d'évaluer votre besoin, d'identifier les contraintes techniques et de proposer une approche adaptée, sans engagement.",
  },
  {
    title: "Puis-je suivre l'avancement du projet en temps réel ?",
    content:
      "Oui, vous avez accès à l'outil de suivi de projet tout au long du développement. Vous recevez une démo fonctionnelle à chaque fin de sprint (toutes les deux semaines) et pouvez tester sur le serveur de recette à tout moment.",
  },
  {
    title: "Que se passe-t-il si je veux modifier le périmètre en cours de projet ?",
    content:
      "C'est le principe de l'agilité. Le backlog est réévalué à chaque sprint. Vous pouvez ajouter, modifier ou retirer des fonctionnalités. Nous recalculons l'estimation et le planning en toute transparence.",
  },
  {
    title: "Est-ce que je suis propriétaire du code source ?",
    content:
      "Oui, vous êtes propriétaire du code source livré. Vous pouvez le faire évoluer en interne ou avec un autre prestataire. Nous utilisons des technologies open source (Symfony, PHP) sans aucun verrouillage propriétaire.",
  },
  {
    title: "Comment gérez-vous la confidentialité du projet ?",
    content:
      "Nous pouvons signer un accord de confidentialité (NDA) avant tout échange technique. Votre code source et vos données restent strictement confidentiels.",
  },
];

const faqJsonLdData = {
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
  { name: "Processus de collaboration", path: "/processus-collaboration" },
]);

const howTo = howToJsonLd(
  "Comment travailler avec une agence de développement Symfony",
  "Les étapes d'un projet avec Efficience IT, du premier contact à la mise en production et au suivi.",
  [
    {
      name: "Premier contact et diagnostic gratuit",
      text: "Échangez 30 minutes en visio avec un expert. Présentez votre projet et recevez un premier état des lieux technique sous 48h, sans engagement.",
    },
    {
      name: "Cadrage et spécifications",
      text: "Définissez le périmètre du projet avec l'équipe : analyse fonctionnelle, spécifications techniques, backlog priorisé et estimation budgétaire.",
    },
    {
      name: "Développement itératif en sprints",
      text: "Le développement avance en sprints de 2 semaines. Validez les avancées à chaque démo et testez sur le serveur de recette.",
    },
    {
      name: "Revue de code et qualité",
      text: "Chaque ligne de code est revue, testée (PHPStan, tests automatisés) et déployée automatiquement sur l'environnement de recette.",
    },
    {
      name: "Mise en production",
      text: "Déploiement via pipeline CI/CD avec zéro interruption, supervision configurée et plan de rollback.",
    },
    {
      name: "Suivi et maintenance",
      text: "Maintenance corrective et évolutive, mises à jour de sécurité et montées de version pour garder votre application performante.",
    },
  ],
);

const webPage = webPageJsonLd({
  name: "Notre processus de collaboration : du premier contact à la production",
  description:
    "Découvrez comment se déroule un projet avec Efficience IT : audit gratuit, cadrage, développement itératif, revue de code et mise en production.",
  path: "/processus-collaboration",
  datePublished: "2026-04-03",
  dateModified: "2026-04-03",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Diagnostic Symfony gratuit",
    description: "30 minutes pour un premier état des lieux technique",
    href: "/audit-symfony-gratuit",
  },
  {
    title: "Développement web sur mesure",
    description: "Applications robustes adaptées à vos enjeux métiers",
    href: "/developpement-web-sur-mesure",
  },
  {
    title: "Accompagnement et conseil",
    description: "Conseil technique et formation pour vos équipes",
    href: "/accompagnement-et-conseil",
  },
  {
    title: "Maintenance applicative Symfony",
    description: "Suivi, correction et évolution de vos applications",
    href: "/maintenance-applicative-symfony",
  },
  {
    title: "Nos références",
    description: "Les projets que nous avons accompagnés",
    href: "/nos-references",
  },
  {
    title: "Manifeste Agile",
    description: "Les principes fondateurs des méthodes agiles",
    href: "https://agilemanifesto.org/iso/fr/manifesto.html",
    external: true,
  },
];

export default function ProcessusCollaboration() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Processus de collaboration" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Transparence et efficacité
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Notre processus de collaboration : du premier contact à la
                  production
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vous envisagez de faire appel à une{" "}
                  <Link
                    href="/agence-symfony-france"
                    className="text-primary hover:underline"
                  >
                    agence de développement Symfony
                  </Link>{" "}
                  mais vous ne savez pas comment cela se passe concrètement ?
                  Chez Efficience IT, nous avons structuré un processus clair
                  pour que chaque étape de votre projet soit prévisible,
                  transparente et sans mauvaise surprise.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Du premier appel gratuit de 30 minutes jusqu&apos;à la mise en
                  production et au-delà, découvrez comment nous collaborons avec
                  nos clients pour livrer des applications robustes et
                  pérennes.
                </p>
                <div className="mt-8">
                  <Button href="/audit-symfony-gratuit" variant="primary" size="lg">
                    Démarrer par un diagnostic gratuit
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/illustrations/team-work.svg"
                  alt="Processus de collaboration Efficience IT"
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
              <SectionTitle>
                Les 6 étapes de votre projet avec Efficience IT
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Notre méthodologie s&apos;appuie sur les{" "}
                <a
                  href="https://agilemanifesto.org/iso/fr/manifesto.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  principes agiles
                </a>
                , l&apos;amélioration continue et une communication constante.
                Chaque étape est conçue pour vous donner un maximum de
                visibilité sur l&apos;avancement de votre projet.
              </p>
              <div className="mt-12 space-y-8">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-lg bg-white p-6 shadow-md md:p-8"
                  >
                    <div className="flex flex-col gap-6 md:flex-row md:items-start">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                          <h3 className="font-display text-xl font-bold text-dark">
                            {step.title}
                          </h3>
                          <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                            {step.duration}
                          </span>
                        </div>
                        <p className="mt-3 text-gray">{step.description}</p>
                        <div className="mt-4">
                          <p className="text-sm font-semibold text-dark">
                            Livrables :
                          </p>
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {step.deliverables.map((d) => (
                              <li
                                key={d}
                                className="rounded-full bg-light-gray px-3 py-1 text-sm text-gray"
                              >
                                {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Ce qui nous différencie</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Travailler avec Efficience IT, c&apos;est choisir une
                collaboration fondée sur la transparence, la qualité technique
                et l&apos;engagement humain.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Transparence totale
                  </h3>
                  <p className="mt-2 text-gray">
                    Pas de boîte noire. Vous avez accès au code source, à
                    l&apos;outil de suivi et au serveur de recette à tout moment.
                    Chaque décision technique est expliquée et justifiée.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Communication régulière
                  </h3>
                  <p className="mt-2 text-gray">
                    Un point d&apos;avancement à chaque fin de sprint, une démo
                    fonctionnelle et un canal de communication dédié. Vous
                    n&apos;êtes jamais dans le flou sur l&apos;état de votre
                    projet.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Qualité de code vérifiable
                  </h3>
                  <p className="mt-2 text-gray">
                    Revue de code systématique,{" "}
                    <Link
                      href="/tests-automatises-php"
                      className="text-primary hover:underline"
                    >
                      tests automatisés
                    </Link>
                    , analyse statique PHPStan au niveau maximum. La qualité
                    n&apos;est pas un argument marketing, c&apos;est un process
                    vérifiable.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Pas de verrouillage
                  </h3>
                  <p className="mt-2 text-gray">
                    Vous êtes propriétaire du code source. Nous utilisons des
                    technologies open source (Symfony, PHP, PostgreSQL) et nous
                    contribuons activement à l&apos;écosystème. Pas de
                    dépendance forcée.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Transparence totale
                  </h3>
                  <p className="mt-2 text-gray">
                    Estimation détaillée en amont, suivi en temps réel, alertes
                    en cas de dérive. Pas de mauvaise surprise à la
                    livraison.
                  </p>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Expertise Symfony reconnue
                  </h3>
                  <p className="mt-2 text-gray">
                    Notre équipe est spécialisée en{" "}
                    <Link
                      href="/notre-expertise"
                      className="text-primary hover:underline"
                    >
                      développement Symfony
                    </Link>{" "}
                    depuis des années, avec des contributions open source et une
                    veille technique permanente.
                  </p>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Pourquoi un processus structuré fait la différence
              </SectionTitle>
              <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
                <p>
                  Beaucoup d&apos;entreprises hésitent à externaliser leur{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    développement web
                  </Link>{" "}
                  par peur de perdre le contrôle. Les retours d&apos;expérience
                  négatifs sont souvent liés à un manque de processus : pas de
                  cadrage clair, pas de visibilité sur l&apos;avancement, des
                  surprises à la livraison.
                </p>
                <p>
                  C&apos;est pour cette raison que nous avons formalisé chaque
                  étape de notre collaboration. Le cadrage en amont permet de
                  poser des bases solides. Les sprints courts offrent des points
                  de contrôle réguliers. La{" "}
                  <Link
                    href="/cloud-et-devops"
                    className="text-primary hover:underline"
                  >
                    pipeline CI/CD
                  </Link>{" "}
                  garantit des déploiements fiables. Et la{" "}
                  <Link
                    href="/maintenance-applicative-symfony"
                    className="text-primary hover:underline"
                  >
                    maintenance applicative
                  </Link>{" "}
                  assure la pérennité de votre investissement.
                </p>
                <p>
                  Le résultat : des projets livrés dans les délais, des clients
                  qui gardent le contrôle et des applications qui durent. Vous
                  pouvez consulter nos{" "}
                  <Link
                    href="/nos-references"
                    className="text-primary hover:underline"
                  >
                    références clients
                  </Link>{" "}
                  pour voir des exemples concrets de cette approche en action.
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

        <CallToAction />

        <FadeIn>
          <RelatedLinks links={relatedLinks} />
        </FadeIn>

        <StickyMobileCta />
      </main>
    </>
  );
}

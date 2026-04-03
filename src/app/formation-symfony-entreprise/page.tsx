import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { BASE_URL } from "@/lib/metadata";
import UserInterfaceIllustration from "@/components/illustrations/UserInterfaceIllustration";

export const metadata = pageMetadata({
  title: "Formation Symfony pour les entreprises à Lille et à distance",
  description:
    "Formation Symfony pour entreprises, à Lille et à distance. Fondamentaux, architecture hexagonale, API Platform, PHPStan. Formateurs praticiens.",
  path: "/formation-symfony-entreprise",
});

const programs = [
  {
    title: "Symfony fondamentaux",
    description:
      "Routing, controllers, Doctrine ORM, Twig, sécurité et formulaires. La base solide pour développer sereinement avec Symfony.",
    duration: "2 jours",
  },
  {
    title: "Symfony avancé",
    description:
      "Messenger, events, services avancés, performance, tests fonctionnels et bonnes pratiques en production.",
    duration: "2 jours",
  },
  {
    title: "Architecture hexagonale avec Symfony",
    description:
      "Séparation du domaine métier de l'infrastructure, ports et adaptateurs, structuration d'un projet pour le long terme.",
    duration: "2 jours",
  },
  {
    title: "Qualité de code PHP avec PHPStan",
    description:
      "Analyse statique du code, élimination des erreurs de type, configuration PHPStan niveau 8 et intégration en CI.",
    duration: "1 jour",
  },
  {
    title: "API Platform",
    description:
      "Conception d'API REST et GraphQL avec API Platform, sérialisation, sécurité, personnalisation des endpoints.",
    duration: "2 jours",
  },
];

const formats = [
  {
    title: "Sur site à Lille ou dans vos locaux",
    description:
      "Nous nous déplaçons chez vous en région lilloise ou partout en France. Le formateur est dans la salle avec votre équipe.",
  },
  {
    title: "À distance en visio",
    description:
      "Formation 100 % en ligne via visioconférence, avec partage d'écran et exercices pratiques. Même qualité qu'en présentiel.",
  },
  {
    title: "Durée flexible : 1 à 5 jours",
    description:
      "Chaque programme est modulé selon vos besoins. Une journée de sensibilisation ou un parcours complet sur une semaine.",
  },
  {
    title: "Groupes de 2 à 8 personnes",
    description:
      "Petit format garanti pour que chaque participant pose ses questions et travaille sur des cas concrets liés à votre projet.",
  },
  {
    title: "Support post-formation",
    description:
      "Après la formation, vos développeurs peuvent nous solliciter par email pendant 30 jours pour toute question de mise en pratique.",
  },
];

const reasons = [
  {
    title: "Formateurs qui codent au quotidien",
    description:
      "Nos formateurs interviennent sur des projets Symfony en production chaque semaine. Ils transmettent des pratiques réelles, pas des exemples académiques.",
  },
  {
    title: "Cas pratiques sur du vrai code",
    description:
      "Les exercices sont élaborés à partir de situations rencontrées sur de vrais projets : dette technique, migration, API, tests. Votre équipe repart avec des solutions applicables immédiatement.",
  },
  {
    title: "Adaptation au niveau de l'équipe",
    description:
      "Avant chaque formation, nous échangeons avec vous pour calibrer le contenu. Pas de généralités inutiles : on va droit au but en fonction du niveau et des projets de vos développeurs.",
  },
];

const faqItems = [
  {
    title: "Faut-il un niveau minimum pour suivre une formation Symfony ?",
    content:
      "Le programme Symfony fondamentaux s'adresse à des développeurs PHP connaissant les bases orientées objet. Pour les formations avancées, une expérience de 6 mois minimum sur Symfony est recommandée. Nous évaluons le niveau de votre équipe avant chaque session pour adapter le contenu.",
  },
  {
    title: "Peut-on personnaliser le contenu de la formation ?",
    content:
      "Oui. Nous construisons chaque programme en fonction de vos besoins après un échange avec vous. Si votre équipe travaille sur une API Platform en production, on peut consacrer plus de temps à ce sujet et moins à d'autres modules.",
  },
  {
    title: "Les formations sont-elles certifiantes ?",
    content:
      "Nous délivrons une attestation de formation à chaque participant. Pour une certification officielle Symfony, nous recommandons le passage de l'examen Symfony Certification disponible sur le site de SensioLabs. Nos formations constituent une excellente préparation.",
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

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation Symfony pour les entreprises",
  description:
    "Formation Symfony adaptée aux équipes de développement : fondamentaux, architecture hexagonale, API Platform, PHPStan. Présentiel à Lille ou à distance.",
  url: `${BASE_URL}/formation-symfony-entreprise`,
  provider: {
    "@type": "Organization",
    name: "Efficience IT",
    url: BASE_URL,
  },
  educationalLevel: "Intermediate",
  inLanguage: "fr",
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      location: {
        "@type": "Place",
        name: "Efficience IT, Lille",
        address: {
          "@type": "PostalAddress",
          streetAddress: "677 Avenue de la République",
          addressLocality: "Lille",
          postalCode: "59800",
          addressCountry: "FR",
        },
      },
      courseWorkload: "PT8H",
      instructor: {
        "@type": "Organization",
        name: "Efficience IT",
        url: BASE_URL,
      },
    },
  ],
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Formation Symfony entreprise", path: "/formation-symfony-entreprise" },
]);

const webPage = webPageJsonLd({
  name: "Formation Symfony pour les entreprises à Lille et à distance",
  description: "Formation Symfony adaptée aux entreprises, à Lille et à distance. Fondamentaux, architecture hexagonale, API Platform, PHPStan. Groupes de 2 à 8 personnes, formateurs praticiens.",
  path: "/formation-symfony-entreprise",
  datePublished: "2026-01-13",
  dateModified: "2026-01-13",
});

const formationRelatedLinks: RelatedLink[] = [
  { title: "Accompagnement et Conseil", description: "Nos autres prestations d'accompagnement technique", href: "/accompagnement-et-conseil" },
  { title: "Pourquoi choisir Symfony pour vos projets", description: "Les atouts du framework en entreprise", href: "/article/pourquoi-choisir-symfony-pour-vos-projets" },
  { title: "Documentation officielle Symfony", description: "Référence technique du framework", href: "https://symfony.com/doc/current/index.html", external: true },
  { title: "Agence Symfony à Lille", description: "Nos formations en présentiel depuis notre siège lillois", href: "/agence-symfony-lille" },
  { title: "Agence Symfony à Nantes", description: "Nos interventions dans les Pays de la Loire", href: "/agence-symfony-nantes" },
];

export default function FormationSymfonyEntreprise() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
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
            <Breadcrumb items={[{ label: "Formation Symfony" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Formation Symfony entreprise - Lille et à distance
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Formation Symfony pour les entreprises à Lille et à distance
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Montez en compétences sur Symfony avec des formations adaptées à votre équipe.
                  Programmes adaptés à votre équipe, formateurs praticiens, groupes réduits pour un apprentissage
                  efficace.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Demander un programme</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit d&apos;abord
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <UserInterfaceIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Nos programmes de formation</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Chaque programme est construit autour des besoins réels des équipes de
              développement Symfony en entreprise. Du débutant au profil senior, nous couvrons
              tous les niveaux.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programs.map((program) => (
                <Card key={program.title}>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-dark">
                      {program.title}
                    </h3>
                    <span className="shrink-0 rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                      {program.duration}
                    </span>
                  </div>
                  <p className="mt-2 text-gray">{program.description}</p>
                </Card>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-center text-gray">
              Tous les programmes peuvent être combinés et adaptés. Pour aller plus loin sur
              l&apos;analyse statique,{" "}
              <Link
                href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                className="text-primary hover:underline"
              >
                découvrez comment PHPStan peut améliorer la qualité de votre code PHP
              </Link>
              .
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Format et modalités</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous nous adaptons à votre organisation : présentiel dans vos locaux, à distance,
              ou dans nos bureaux à Lille.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {formats.map((format) => (
                <Card key={format.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {format.title}
                  </h3>
                  <p className="mt-2 text-gray">{format.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi se former avec nous</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reasons.map((reason) => (
                <Card key={reason.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-gray">{reason.description}</p>
                </Card>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-4 text-lg text-gray">
              <p>
                Nos formateurs contribuent activement à des projets Symfony en production. Si
                votre équipe doit structurer son code autour d&apos;une{" "}
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale
                </Link>
                , c&apos;est un sujet que nous traitons de bout en bout, avec des retours
                d&apos;expérience concrets.
              </p>
              <p>
                Pour les équipes qui souhaitent consolider les bases du framework avant une
                formation avancée, notre article sur{" "}
                <Link
                  href="/article/les-6-etapes-pour-monter-en-competences-sur-symfony"
                  className="text-primary hover:underline"
                >
                  les 6 étapes pour monter en compétences sur Symfony
                </Link>{" "}
                constitue une bonne préparation.
              </p>
              <p>
                Les formations en présentiel sont dispensées depuis nos bureaux lillois ou chez
                vous en région Hauts-de-France. Notre{" "}
                <Link
                  href="/agence-symfony-lille"
                  className="text-primary hover:underline"
                >
                  agence Symfony à Lille
                </Link>{" "}
                vous garantit une proximité réelle avec un formateur qui connaît votre écosystème
                local.
              </p>
              <p>
                Le module API Platform est particulièrement plébiscité par les équipes qui doivent
                ensuite mettre en pratique leurs acquis sur un vrai projet de{" "}
                <Link
                  href="/api-sur-mesure-symfony"
                  className="text-primary hover:underline"
                >
                  développement d&apos;API avec Symfony
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Prêt à former votre équipe Symfony ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Contactez-nous pour construire le programme adapté à votre équipe et à vos
              objectifs. Nous répondons sous 48h.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander un programme de formation
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
        <RelatedLinks links={formationRelatedLinks} className="bg-light-gray" />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

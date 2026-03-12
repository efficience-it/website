import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { BASE_URL } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Formation Symfony pour les entreprises a Lille et a distance",
  description:
    "Formation Symfony sur mesure pour les entreprises a Lille et a distance. Fondamentaux, architecture hexagonale, API Platform, PHPStan. Groupes de 2 a 8 personnes, formateurs praticiens.",
  path: "/formation-symfony-entreprise",
});

const programs = [
  {
    title: "Symfony fondamentaux",
    description:
      "Routing, controllers, Doctrine ORM, Twig, securite et formulaires. La base solide pour developper sereinement avec Symfony.",
    duration: "2 jours",
  },
  {
    title: "Symfony avance",
    description:
      "Messenger, events, services avances, performance, tests fonctionnels et bonnes pratiques en production.",
    duration: "2 jours",
  },
  {
    title: "Architecture hexagonale avec Symfony",
    description:
      "Separation du domaine metier de l'infrastructure, ports et adaptateurs, structuration d'un projet pour le long terme.",
    duration: "2 jours",
  },
  {
    title: "Qualite de code PHP avec PHPStan",
    description:
      "Analyse statique du code, elimination des erreurs de type, configuration PHPStan niveau 8 et integration en CI.",
    duration: "1 jour",
  },
  {
    title: "API Platform",
    description:
      "Conception d'API REST et GraphQL avec API Platform, serialisation, securite, personnalisation des endpoints.",
    duration: "2 jours",
  },
];

const formats = [
  {
    title: "Sur site a Lille ou dans vos locaux",
    description:
      "Nous nous deplacons chez vous en region lilloise ou partout en France. Le formateur est dans la salle avec votre equipe.",
  },
  {
    title: "A distance en visio",
    description:
      "Formation 100 % en ligne via visioconference, avec partage d'ecran et exercices pratiques. Meme qualite qu'en presentiel.",
  },
  {
    title: "Duree flexible : 1 a 5 jours",
    description:
      "Chaque programme est module selon vos besoins. Une journee de sensibilisation ou un parcours complet sur une semaine.",
  },
  {
    title: "Groupes de 2 a 8 personnes",
    description:
      "Petit format garantit pour que chaque participant pose ses questions et travaille sur des cas concrets lies a votre projet.",
  },
  {
    title: "Support post-formation",
    description:
      "Apres la formation, vos developpeurs peuvent nous solliciter par email pendant 30 jours pour toute question de mise en pratique.",
  },
];

const reasons = [
  {
    title: "Formateurs qui codent au quotidien",
    description:
      "Nos formateurs interviennent sur des projets Symfony en production chaque semaine. Ils transmettent des pratiques reelles, pas des exemples academiques.",
  },
  {
    title: "Cas pratiques sur du vrai code",
    description:
      "Les exercices sont elabores a partir de situations rencontrees sur de vrais projets : dette technique, migration, API, tests. Votre equipe repart avec des solutions applicables immediatement.",
  },
  {
    title: "Adaptation au niveau de l'equipe",
    description:
      "Avant chaque formation, nous echangeons avec vous pour calibrer le contenu. Pas de generalites inutiles : on va droit au but en fonction du niveau et des projets de vos developpeurs.",
  },
];

const faqItems = [
  {
    title: "Faut-il un niveau minimum pour suivre une formation Symfony ?",
    content:
      "Le programme Symfony fondamentaux s'adresse a des developpeurs PHP connaissant les bases orientees objet. Pour les formations avancees, une experience de 6 mois minimum sur Symfony est recommandee. Nous evaluons le niveau de votre equipe avant chaque session pour adapter le contenu.",
  },
  {
    title: "Peut-on personnaliser le contenu de la formation ?",
    content:
      "Oui. Nous construisons chaque programme sur mesure apres un echange avec vous. Si votre equipe travaille sur une API Platform en production, on peut consacrer plus de temps a ce sujet et moins a d'autres modules.",
  },
  {
    title: "Les formations sont-elles certifiantes ?",
    content:
      "Nous delivrons une attestation de formation a chaque participant. Pour une certification officielle Symfony, nous recommandons le passage de l'examen Symfony Certification disponible sur le site de SensioLabs. Nos formations constituent une excellente preparation.",
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
    "Formation Symfony sur mesure pour les equipes de developpement : fondamentaux, architecture hexagonale, API Platform, PHPStan. Presentiel a Lille ou a distance.",
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
        name: "Lille, France",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lille",
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
  name: "Formation Symfony pour les entreprises a Lille et a distance",
  description: "Formation Symfony sur mesure pour les entreprises a Lille et a distance. Fondamentaux, architecture hexagonale, API Platform, PHPStan. Groupes de 2 a 8 personnes, formateurs praticiens.",
  path: "/formation-symfony-entreprise",
  datePublished: "2026-01-13",
  dateModified: "2026-01-13",
});

const formationRelatedLinks: RelatedLink[] = [
  { title: "Accompagnement et Conseil", description: "Nos autres prestations d'accompagnement technique", href: "/accompagnement-et-conseil" },
  { title: "Pourquoi choisir Symfony pour vos projets", description: "Les atouts du framework en entreprise", href: "/article/pourquoi-choisir-symfony-pour-vos-projets" },
  { title: "Documentation officielle Symfony", description: "Reference technique du framework", href: "https://symfony.com/doc/current/index.html", external: true },
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
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Formation Symfony entreprise - Lille et a distance
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                Formation Symfony pour les entreprises a Lille et a distance
              </h1>
              <p className="mt-6 text-lg text-gray">
                Montez en competences sur Symfony avec des formations adaptees a votre equipe.
                Programmes sur mesure, formateurs praticiens, groupes reduits pour un apprentissage
                efficace.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button href="/contact">Demander un programme</Button>
                <Button href="/audit-symfony-gratuit" variant="outline">
                  Audit gratuit d&apos;abord
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Nos programmes de formation</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Chaque programme est construit autour des besoins reels des equipes de
              developpement Symfony en entreprise. Du debutant au profil senior, nous couvrons
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
              Tous les programmes peuvent etre combines et adaptes. Pour aller plus loin sur
              l&apos;analyse statique,{" "}
              <Link
                href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                className="text-primary hover:underline"
              >
                decouvrez comment PHPStan peut ameliorer la qualite de votre code PHP
              </Link>
              .
            </p>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Format et modalites</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous nous adaptons a votre organisation : presentiel dans vos locaux, a distance,
              ou dans nos bureaux a Lille.
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
                Nos formateurs contribuent activement a des projets Symfony en production. Si
                votre equipe doit structurer son code autour d&apos;une{" "}
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale
                </Link>
                , c&apos;est un sujet que nous traitons de bout en bout, avec des retours
                d&apos;experience concrets.
              </p>
              <p>
                Pour les equipes qui souhaitent consolider les bases du framework avant une
                formation avancee, notre article sur{" "}
                <Link
                  href="/article/les-6-etapes-pour-monter-en-competences-sur-symfony"
                  className="text-primary hover:underline"
                >
                  les 6 etapes pour monter en competences sur Symfony
                </Link>{" "}
                constitue une bonne preparation.
              </p>
              <p>
                Les formations en presentiel sont dispensees depuis nos bureaux lillois ou chez
                vous en region Hauts-de-France. Notre{" "}
                <Link
                  href="/agence-symfony-lille"
                  className="text-primary hover:underline"
                >
                  agence Symfony a Lille
                </Link>{" "}
                vous garantit une proximite reelle avec un formateur qui connait votre ecosysteme
                local.
              </p>
              <p>
                Le module API Platform est particulierement plebe pour les equipes qui doivent
                ensuite mettre en pratique leurs acquis sur un vrai projet de{" "}
                <Link
                  href="/api-sur-mesure-symfony"
                  className="text-primary hover:underline"
                >
                  developpement d&apos;API avec Symfony
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Pret a former votre equipe Symfony ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Contactez-nous pour construire le programme adapte a votre equipe et a vos
              objectifs. Nous repondons sous 48h.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander un programme de formation
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

        <RelatedLinks links={formationRelatedLinks} className="bg-light-gray" />
        <StickyMobileCta />
      </main>
    </>
  );
}

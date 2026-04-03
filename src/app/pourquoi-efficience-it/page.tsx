import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import Accordion from "@/components/ui/Accordion";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import TestimonialCard from "@/components/cards/TestimonialCard";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { clients } from "@/../data/clients";
import { testimonials } from "@/../data/testimonials";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Pourquoi choisir Efficience IT pour vos projets Symfony",
  description:
    "Agence Symfony vs freelance, ESN ou agence web : pourquoi choisir Efficience IT pour vos projets PHP. 10+ ans, 150+ projets, certifications Symfony.",
  path: "/pourquoi-efficience-it",
});

const faqItems = [
  {
    title: "Quelle est la différence entre une agence Symfony et un freelance ?",
    content:
      "Un freelance offre de la flexibilité mais reste dépendant d'une seule personne : vacances, maladie ou indisponibilité bloquent le projet. Une agence comme Efficience IT garantit la continuité avec une équipe de développeurs seniors, des processus de revue de code et un engagement contractuel sur les délais.",
  },
  {
    title: "Pourquoi ne pas confier mon projet à une ESN ?",
    content:
      "Les ESN fonctionnent sur un modèle de placement de profils, souvent juniors. Vous n'avez pas de garantie sur l'expertise réelle du développeur affecté. Chez Efficience IT, chaque projet est porté par notre équipe interne, certifiée Symfony, avec une maîtrise de bout en bout.",
  },
  {
    title: "Comment démarrer un projet avec Efficience IT ?",
    content:
      "Tout commence par un diagnostic gratuit de 30 minutes. Nous analysons votre contexte technique, identifions les priorités et vous proposons une feuille de route claire, sans engagement.",
  },
  {
    title: "Travaillez-vous uniquement sur Symfony ?",
    content:
      "Symfony est notre cœur de métier, mais nous intervenons aussi sur l'écosystème PHP au sens large, Sylius pour le e-commerce, API Platform pour les API, ainsi que Node.js et les frameworks front-end React et Vue.js.",
  },
  {
    title: "Comment se passe la collaboration au quotidien ?",
    content:
      "Nous travaillons en sprints agiles avec des livraisons régulières. Vous avez un interlocuteur dédié, un accès au suivi de projet et des points réguliers. Transparence et communication sont au cœur de notre méthode.",
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
  { name: "Pourquoi Efficience IT", path: "/pourquoi-efficience-it" },
]);

const webPage = webPageJsonLd({
  name: "Pourquoi choisir Efficience IT pour vos projets Symfony",
  description:
    "Agence Symfony vs freelance, ESN ou agence web : pourquoi choisir Efficience IT pour vos projets PHP et Symfony.",
  path: "/pourquoi-efficience-it",
  datePublished: "2026-04-03",
  dateModified: "2026-04-03",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Audit Symfony gratuit",
    description: "Diagnostic technique de 30 minutes, sans engagement",
    href: "/audit-symfony-gratuit",
  },
  {
    title: "Nos références",
    description: "Les projets et clients qui nous font confiance",
    href: "/nos-references",
  },
  {
    title: "Développement web sur mesure",
    description: "Applications Symfony, e-commerce et API",
    href: "/developpement-web-sur-mesure",
  },
  {
    title: "Symfony, site officiel",
    description: "Le framework PHP de référence",
    href: "https://symfony.com/",
    external: true,
  },
];

const comparisonData = [
  {
    type: "Freelance Symfony",
    pros: [
      "Flexibilité et disponibilité",
      "Relation directe avec le développeur",
    ],
    cons: [
      "Dépendance à une seule personne",
      "Pas de backup en cas d'indisponibilité",
      "Pas de revue de code systématique",
      "Risque sur la continuité du projet",
    ],
  },
  {
    type: "ESN / SSII",
    pros: [
      "Capacité à mobiliser des équipes",
      "Processus RH structurés",
    ],
    cons: [
      "Profils souvent juniors ou tournés",
      "Peu de spécialisation Symfony",
      "Résultats souvent décevants",
      "Distance entre décision et exécution",
    ],
  },
  {
    type: "Agence web générique",
    pros: [
      "Offre globale (design, marketing, dev)",
      "Interlocuteur unique multi-métiers",
    ],
    cons: [
      "Expertise PHP/Symfony superficielle",
      "Solutions souvent basées sur des CMS",
      "Difficulté sur les projets complexes",
      "Moins de maîtrise du code métier",
    ],
  },
];

export default function PourquoiEfficienceIt() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
            <Breadcrumb items={[{ label: "Pourquoi Efficience IT" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Agence Symfony spécialisée
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Pourquoi choisir Efficience IT pour vos projets Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Freelance, ESN, agence web générique : les options ne manquent
                  pas pour développer votre application. Mais quand il s&apos;agit de{" "}
                  <strong>projets Symfony complexes</strong>, le choix du
                  partenaire fait toute la différence.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT est une{" "}
                  <Link
                    href="/agence-symfony-france"
                    className="text-primary hover:underline"
                  >
                    agence 100 % spécialisée Symfony
                  </Link>
                  . Depuis plus de 10 ans, nous concevons des applications web
                  robustes pour des PME et grands comptes exigeants.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Audit gratuit 30 min
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/illustrations/team-work.svg"
                  alt="Équipe de développement Symfony"
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
                Agence spécialisée vs freelance, ESN et agence générique
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Chaque modèle a ses atouts. Mais pour un{" "}
                <strong>projet Symfony métier</strong>, les limites apparaissent
                vite. Voici un comparatif honnête pour vous aider à faire le bon
                choix.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {comparisonData.map((item) => (
                  <Card key={item.type}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {item.type}
                    </h3>
                    <div className="mt-4">
                      <p className="text-sm font-semibold uppercase text-green-600">
                        Points forts
                      </p>
                      <ul className="mt-2 space-y-1">
                        {item.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-gray">
                            <span className="mt-0.5 text-green-600">&#10003;</span>
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-semibold uppercase text-red-500">
                        Limites
                      </p>
                      <ul className="mt-2 space-y-1">
                        {item.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-gray">
                            <span className="mt-0.5 text-red-500">&#10007;</span>
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>
                Ce qui fait la différence avec Efficience IT
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Une agence qui allie la spécialisation technique d&apos;un expert
                Symfony et la fiabilité d&apos;une structure pérenne.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <p className="font-display text-3xl font-bold text-primary">10+</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-dark">
                    Années d&apos;expérience
                  </h3>
                  <p className="mt-2 text-gray">
                    Une expertise forgée depuis 2014 sur des projets{" "}
                    <Link
                      href="/developpement-php"
                      className="text-primary hover:underline"
                    >
                      PHP et Symfony
                    </Link>{" "}
                    de toutes tailles.
                  </p>
                </Card>
                <Card>
                  <p className="font-display text-3xl font-bold text-primary">150+</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-dark">
                    Projets livrés
                  </h3>
                  <p className="mt-2 text-gray">
                    Applications métier, e-commerce, API, migration : des projets
                    concrets livrés en production.
                  </p>
                </Card>
                <Card>
                  <p className="font-display text-3xl font-bold text-primary">40+</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-dark">
                    Clients accompagnés
                  </h3>
                  <p className="mt-2 text-gray">
                    PME, grands comptes et startups nous font confiance
                    pour leurs projets critiques.
                  </p>
                </Card>
                <Card>
                  <p className="font-display text-3xl font-bold text-primary">500+</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-dark">
                    Contributions open source
                  </h3>
                  <p className="mt-2 text-gray">
                    Nous contribuons activement à l&apos;écosystème Symfony et
                    PHP. Un gage de maîtrise technique.
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
                Nos engagements concrets
              </SectionTitle>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Équipe certifiée Symfony
                    </h3>
                    <p className="mt-1 text-gray">
                      Nos développeurs sont certifiés Symfony et formés en continu.
                      Pas de profil junior affecté sans supervision : chaque
                      livraison passe par une{" "}
                      <Link
                        href="/tests-automatises-php"
                        className="text-primary hover:underline"
                      >
                        revue de code et des tests automatisés
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Continuité garantie
                    </h3>
                    <p className="mt-1 text-gray">
                      Contrairement à un freelance, votre projet ne dépend pas
                      d&apos;une seule personne. Notre équipe assure la
                      continuité en toute circonstance, avec une documentation
                      technique à jour.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Engagement sur les résultats
                    </h3>
                    <p className="mt-1 text-gray">
                      Nous ne facturons pas du temps : nous livrons des
                      fonctionnalités. Sprints agiles, livraisons régulières et{" "}
                      <Link
                        href="/maintenance-applicative-symfony"
                        className="text-primary hover:underline"
                      >
                        maintenance applicative
                      </Link>{" "}
                      incluse dans nos contrats.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Architecture pensée pour durer
                    </h3>
                    <p className="mt-1 text-gray">
                      Nous appliquons les meilleures pratiques :{" "}
                      <Link
                        href="/architecture-hexagonale-symfony"
                        className="text-primary hover:underline"
                      >
                        architecture hexagonale
                      </Link>
                      , SOLID, DDD quand c&apos;est pertinent. Votre application
                      reste maintenable et évolutive dans la durée.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16">
            <Container>
              <p className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
                Ils nous font confiance
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {clients.map((client) => (
                  <Image
                    key={client.name}
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={120}
                    className="h-16 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Ce que nos clients en disent</SectionTitle>
              <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
                <TestimonialCard testimonial={testimonials[4]} />
                <TestimonialCard testimonial={testimonials[0]} />
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-primary py-16 text-center text-white">
            <Container>
              <h2 className="font-display text-3xl font-bold">
                Prêt à sécuriser votre prochain projet Symfony ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Réservez un diagnostic gratuit de 30 minutes. Nous analysons
                votre besoin et vous proposons une approche adaptée, sans engagement.
              </p>
              <Link
                href="/audit-symfony-gratuit"
                className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Demander mon audit gratuit
              </Link>
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

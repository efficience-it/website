import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import CallToAction from "@/components/sections/CallToAction";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Accordion from "@/components/ui/Accordion";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Prestataire Symfony en France : expertise PHP et accompagnement sur mesure",
  description:
    "Efficience IT, prestataire Symfony en France. Développement, migration, audit et maintenance de vos applications PHP et Symfony, en remote ou sur site.",
  path: "/agence-symfony-france",
});

const cards = [
  {
    title: "Expertise Symfony certifiee",
    description:
      "Nos developpeurs sont specialises sur l'ecosysteme Symfony et PHP. Pas de generalistes : chaque intervenant maitrise le framework en profondeur, de Doctrine a Messenger.",
  },
  {
    title: "Intervention remote ou sur site",
    description:
      "Ou que vous soyez en France, nous intervenons a distance ou dans vos locaux. Nos outils et nos rituels sont penses pour le travail distribue, sans perte de qualite.",
  },
  {
    title: "De l'audit au deploiement",
    description:
      "Nous couvrons l'ensemble du cycle de vie de votre application : audit technique, developpement, tests, mise en production et maintenance continue.",
  },
  {
    title: "Stack technique maitrisee",
    description:
      "Symfony, API Platform, Doctrine, PHPStan, PHPUnit, Docker, CI/CD : nous maitrisons les outils qui font la difference entre un projet qui tient et un projet qui s'effondre.",
  },
];

const faqItems = [
  {
    title: "Travaillez-vous uniquement avec des entreprises basees en France ?",
    content:
      "Nous travaillons principalement avec des entreprises francaises, mais nous accompagnons aussi des clients francophones en Belgique, en Suisse et au Luxembourg. L'essentiel est de partager un fuseau horaire compatible et une langue commune pour une collaboration fluide.",
  },
  {
    title: "Comment se deroule une premiere collaboration ?",
    content:
      "Tout commence par un echange gratuit de 30 minutes pour comprendre votre projet, vos contraintes et vos objectifs. Nous vous proposons ensuite un cadrage technique et un devis detaille. Le developpement demarre en sprints courts avec des livraisons regulieres.",
  },
  {
    title:
      "Pouvez-vous reprendre un projet Symfony existant developpe par une autre equipe ?",
    content:
      "Oui, c'est meme l'un de nos cas d'usage les plus frequents. Nous realisons un audit du code existant, identifions la dette technique et proposons un plan de reprise progressif. L'objectif : remettre le projet sur de bons rails sans tout reecrire.",
  },
  {
    title: "Quelle est la difference entre un prestataire Symfony et une agence web classique ?",
    content:
      "Une agence web classique couvre un large spectre (WordPress, Shopify, marketing, design). Un prestataire Symfony comme Efficience IT se concentre exclusivement sur le developpement d'applications PHP et Symfony. Cette specialisation garantit une expertise technique plus profonde et des choix architecturaux plus pertinents pour vos projets metier.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "Efficience IT",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-bleu.webp`,
  image: `${BASE_URL}/images/logo/logo-bleu.webp`,
  description:
    "Prestataire Symfony en France, Efficience IT accompagne les entreprises dans le developpement, la migration et la maintenance de leurs applications PHP et Symfony.",
  email: "contact@itefficience.com",
  knowsAbout: ["Symfony", "PHP", "API Platform", "Doctrine", "DevOps"],
  areaServed: { "@type": "Country", name: "France" },
  priceRange: "$$",
  sameAs: [
    "https://github.com/efficience-it",
    "https://www.linkedin.com/company/efficience-it",
  ],
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Prestataire Symfony France", path: "/agence-symfony-france" },
]);

const webPage = webPageJsonLd({
  name: "Prestataire Symfony en France : expertise PHP et accompagnement sur mesure",
  description:
    "Efficience IT, prestataire Symfony en France. Développement, migration, audit et maintenance de vos applications PHP et Symfony, en remote ou sur site.",
  path: "/agence-symfony-france",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Agence Symfony a Lille",
    description:
      "Notre ancrage lillois pour les entreprises des Hauts-de-France",
    href: "/agence-symfony-lille",
  },
  {
    title: "Agence Symfony a Paris",
    description:
      "Nos interventions en Ile-de-France, a 1h20 en TGV",
    href: "/agence-symfony-paris",
  },
  {
    title: "Agence Symfony a Lyon",
    description:
      "Notre expertise Symfony en Auvergne-Rhone-Alpes",
    href: "/agence-symfony-lyon",
  },
  {
    title: "Agence Symfony a Nantes",
    description:
      "Nos interventions dans les Pays de la Loire",
    href: "/agence-symfony-nantes",
  },
  {
    title: "Guide de migration Symfony",
    description: "Notre methodologie pour les mises a jour de version",
    href: "/article/guide-de-migration-dans-un-projet-symfony",
  },
];

export default function AgenceSymfonyFrance() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb
              items={[{ label: "Prestataire Symfony France" }]}
            />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Prestataire Symfony en France
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Prestataire Symfony en France : expertise PHP et
                  accompagnement sur mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT est un{" "}
                  <strong>prestataire Symfony en France</strong>, specialise dans
                  le developpement d&apos;applications web PHP robustes et
                  maintenables. Nous accompagnons les PME, ETI et startups sur
                  l&apos;ensemble du territoire : developpement sur mesure,
                  migration, audit technique et maintenance.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  En remote ou sur site, nous mettons a votre disposition une
                  equipe d&apos;
                  <Link
                    href="/notre-expertise"
                    className="text-primary hover:underline"
                  >
                    experts Symfony
                  </Link>{" "}
                  dediee, capable d&apos;intervenir rapidement sur vos projets
                  les plus exigeants.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Audit Symfony gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    10
                  </span>
                  <div>
                    <p className="font-semibold text-dark">
                      Ans d&apos;experience
                    </p>
                    <p className="text-sm text-gray">
                      Expertise Symfony depuis les premieres versions LTS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    50+
                  </span>
                  <div>
                    <p className="font-semibold text-dark">
                      Projets Symfony livres
                    </p>
                    <p className="text-sm text-gray">
                      Applications metier, API, e-commerce, SaaS
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    100%
                  </span>
                  <div>
                    <p className="font-semibold text-dark">
                      Focus PHP et Symfony
                    </p>
                    <p className="text-sm text-gray">
                      Specialistes, pas generalistes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Pourquoi nous choisir comme prestataire Symfony
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Choisir un <strong>prestataire technique PHP en France</strong>{" "}
                specialise, c&apos;est s&apos;assurer d&apos;un accompagnement
                adapte a la complexite de vos applications metier.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {cards.map((item) => (
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
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl">
                <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
                  Une agence technique, pas une agence web generaliste
                </h2>
                <div className="mt-8 space-y-4 text-lg text-gray">
                  <p>
                    Beaucoup d&apos;agences web proposent du Symfony parmi une
                    dizaine d&apos;autres technologies. Chez Efficience IT, PHP
                    et Symfony sont notre coeur de metier. C&apos;est cette
                    specialisation qui fait la difference quand il s&apos;agit de
                    concevoir des architectures solides, de migrer un projet
                    legacy ou de reprendre une application sans documentation.
                  </p>
                  <p>
                    En tant qu&apos;
                    <strong>agence Symfony</strong> dediee, nous intervenons sur
                    des problematiques techniques avancees : mise en place
                    d&apos;une{" "}
                    <Link
                      href="/architecture-hexagonale-symfony"
                      className="text-primary hover:underline"
                    >
                      architecture hexagonale avec Symfony
                    </Link>
                    , integration de{" "}
                    <Link
                      href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                      className="text-primary hover:underline"
                    >
                      Symfony Messenger pour les traitements asynchrones
                    </Link>
                    , ou encore{" "}
                    <Link
                      href="/audit-code-php"
                      className="text-primary hover:underline"
                    >
                      audit de code PHP
                    </Link>{" "}
                    approfondi avec PHPStan et des revues manuelles.
                  </p>
                  <p>
                    Nous proposons egalement des{" "}
                    <Link
                      href="/formation-symfony-entreprise"
                      className="text-primary hover:underline"
                    >
                      formations Symfony en entreprise
                    </Link>{" "}
                    pour permettre a vos equipes de monter en competences sur le
                    framework. Et pour les entreprises qui souhaitent moderniser
                    progressivement leur SI, notre offre de{" "}
                    <Link
                      href="/modernisation-applicative"
                      className="text-primary hover:underline"
                    >
                      modernisation applicative
                    </Link>{" "}
                    couvre l&apos;ensemble du parcours, de l&apos;audit initial
                    au deploiement de la nouvelle architecture.
                  </p>
                  <p>
                    Si vous cherchez un{" "}
                    <strong>expert Symfony</strong> capable d&apos;intervenir
                    avec la meme rigueur a Lille, Paris, Lyon ou Bordeaux, vous
                    etes au bon endroit. Notre{" "}
                    <Link
                      href="/agence-symfony-lille"
                      className="text-primary hover:underline"
                    >
                      agence Symfony a Lille
                    </Link>{" "}
                    est notre point d&apos;attache, mais nous travaillons avec
                    des entreprises dans toute la France, en full remote ou en
                    mode hybride.
                  </p>
                </div>
              </div>
            </Container>
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
          <RelatedLinks links={relatedLinks} className="bg-light-gray" />
        </FadeIn>

        <CallToAction />
        <StickyMobileCta />
      </main>
    </>
  );
}

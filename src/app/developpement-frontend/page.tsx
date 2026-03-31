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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import CreativeIllustration from "@/components/illustrations/CreativeIllustration";

const frontendRelatedLinks: RelatedLink[] = [
  {
    title: "Développement React",
    description: "Applications React et TypeScript sur mesure : SPA, dashboards, SSR avec Next.js",
    href: "/developpement-react",
  },
  {
    title: "Développement Vue.js",
    description: "Interfaces réactives et progressives avec Vue.js et Nuxt",
    href: "/developpement-vuejs",
  },
  {
    title: "Développement TypeScript",
    description: "Typage statique et applications maintenables sur la durée",
    href: "/developpement-typescript",
  },
  {
    title: "API sur mesure Symfony",
    description: "Les APIs backend qui alimentent vos interfaces frontend",
    href: "/api-sur-mesure-symfony",
  },
  {
    title: "Quel framework JavaScript choisir",
    description: "Comparatif Node.js, React, Vue.js et Angular pour votre projet",
    href: "/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular",
  },
  {
    title: "React, documentation officielle",
    description: "La référence pour le développement d'interfaces React",
    href: "https://react.dev/",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Développement frontend React, Vue.js et TypeScript sur mesure",
  description:
    "Efficience IT conçoit des interfaces frontend performantes avec React, Vue.js, Next.js et TypeScript. Applications connectées à vos APIs Symfony.",
  path: "/developpement-frontend",
});

const expertises = [
  {
    title: "Applications React",
    description:
      "Interfaces réactives avec React et TypeScript : Single Page Applications, dashboards métier, backoffices complexes. Nous utilisons les hooks, le Server Side Rendering avec Next.js et les state managers adaptés à chaque contexte.",
  },
  {
    title: "Applications Vue.js",
    description:
      "Interfaces légères et progressives avec Vue.js et Nuxt. Vue.js excelle pour les projets qui demandent une courbe d'apprentissage rapide et une intégration fluide avec un backend Symfony existant.",
  },
  {
    title: "TypeScript systématique",
    description:
      "Chaque projet frontend est développé en TypeScript. Le typage statique élimine des catégories entières de bugs, accélère le refactoring et rend le code lisible des mois après son écriture.",
  },
  {
    title: "Intégration API et temps réel",
    description:
      "Connexion de vos interfaces à des APIs REST ou GraphQL, gestion du cache côté client, synchronisation temps réel avec WebSockets ou Server-Sent Events pour les applications collaboratives.",
  },
];

const stack = [
  { name: "React", description: "Interfaces complexes et réactives" },
  { name: "Next.js", description: "SSR, SSG et React Server Components" },
  { name: "Vue.js", description: "Interfaces légères et progressives" },
  { name: "Nuxt", description: "SSR et génération statique avec Vue.js" },
  { name: "TypeScript", description: "Typage statique sur chaque projet" },
  { name: "Tailwind CSS", description: "Design system et styling performant" },
  { name: "Vitest / Cypress", description: "Tests unitaires et end-to-end" },
];

const faqItems = [
  {
    title: "React ou Vue.js : comment choisir ?",
    content:
      "React convient aux applications complexes avec beaucoup d'états partagés, des interfaces dynamiques et une équipe habituée à l'écosystème JavaScript. Vue.js est idéal pour les projets qui nécessitent une intégration progressive dans une application existante, ou quand l'équipe backend veut monter rapidement sur le frontend. Dans les deux cas, nous développons en TypeScript.",
  },
  {
    title: "Pouvez-vous connecter un frontend React à une API Symfony ?",
    content:
      "C'est même notre spécialité. En tant qu'agence Symfony, nous maîtrisons les deux côtés de la stack. Nous concevons des APIs Symfony ou API Platform optimisées pour la consommation frontend : pagination, filtres, serialization groupée, authentification JWT ou session. Le frontend et le backend sont conçus ensemble, pas en silo.",
  },
  {
    title: "Faites-vous du Server Side Rendering (SSR) ?",
    content:
      "Oui. Avec Next.js (React) ou Nuxt (Vue.js), nous mettons en place le SSR pour les applications qui ont des enjeux SEO ou de performance au premier chargement. Le SSR améliore le Time to First Contentful Paint et permet aux moteurs de recherche d'indexer le contenu sans exécuter JavaScript.",
  },
  {
    title: "Reprenez-vous des projets frontend existants ?",
    content:
      "Oui. Nous réalisons un audit du code frontend existant : architecture des composants, gestion d'état, couverture de tests, performances (bundle size, rendering). Nous proposons ensuite un plan de refactoring ou de migration vers une stack plus maintenable.",
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
  { name: "Nos expertises", path: "/notre-expertise" },
  { name: "Développement frontend", path: "/developpement-frontend" },
]);

const service = serviceJsonLd({
  name: "Développement frontend React, Vue.js et TypeScript",
  description:
    "Conception et développement d'interfaces frontend sur mesure avec React, Vue.js, Next.js et TypeScript. Applications connectées à vos APIs Symfony ou Node.js.",
  path: "/developpement-frontend",
});

const webPage = webPageJsonLd({
  name: "Développement frontend React, Vue.js et TypeScript sur mesure",
  description:
    "Efficience IT conçoit des interfaces frontend performantes avec React, Vue.js, Next.js et TypeScript. Applications connectées à vos APIs Symfony.",
  path: "/developpement-frontend",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function DeveloppementFrontend() {
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
            <Breadcrumb items={[{ label: "Développement frontend" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Développement frontend sur mesure
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement frontend React, Vue.js et TypeScript sur mesure
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre backend est solide, mais votre interface ne suit pas.
                  Efficience IT conçoit des{" "}
                  <strong>frontends performants et maintenables</strong> avec
                  React, Vue.js et TypeScript, connectés à vos{" "}
                  <Link
                    href="/api-sur-mesure-symfony"
                    className="text-primary hover:underline"
                  >
                    APIs Symfony
                  </Link>{" "}
                  ou{" "}
                  <Link
                    href="/developpement-nodejs"
                    className="text-primary hover:underline"
                  >
                    Node.js
                  </Link>
                  .
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Dashboards métier, backoffices, applications temps réel,
                  interfaces e-commerce : chaque projet a ses contraintes, et
                  nous choisissons la stack frontend la plus adaptée à votre
                  contexte.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <CreativeIllustration className="h-96 w-full text-primary" />
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Nos expertises frontend</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines où notre expertise frontend apporte une valeur
                immédiate à vos projets.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {expertises.map((expertise) => (
                  <Card key={expertise.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {expertise.title}
                    </h3>
                    <p className="mt-2 text-gray">{expertise.description}</p>
                  </Card>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
                Pour bien choisir entre les frameworks, notre{" "}
                <Link
                  href="/article/quel-framework-javascript-choisir-node-js-react-js-vue-js-ou-angular"
                  className="text-primary hover:underline"
                >
                  comparatif des frameworks JavaScript
                </Link>{" "}
                détaille les forces et faiblesses de chaque option.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack frontend</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils matures, adoptés par l&apos;industrie et soutenus par
                des communautés actives.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stack.map((item) => (
                  <Card key={item.name}>
                    <p className="font-display text-base font-bold text-primary">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Frontend et backend conçus ensemble
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, le frontend n&apos;est pas un projet
                  séparé confié à une autre équipe. Nos développeurs maîtrisent
                  les deux côtés de la stack : ils conçoivent les APIs et les
                  interfaces qui les consomment. Cette approche full stack
                  élimine les allers-retours entre équipes, réduit les bugs
                  d&apos;intégration et accélère les livraisons.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Que votre backend soit en{" "}
                  <Link
                    href="/developpement-web-sur-mesure"
                    className="text-primary hover:underline"
                  >
                    Symfony
                  </Link>
                  ,{" "}
                  <Link
                    href="/developpement-nodejs"
                    className="text-primary hover:underline"
                  >
                    Node.js
                  </Link>{" "}
                  ou un mix des deux, nous concevons le frontend pour qu&apos;il
                  s&apos;intègre parfaitement à votre architecture existante.
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

        <FadeIn>
          <RelatedLinks links={frontendRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

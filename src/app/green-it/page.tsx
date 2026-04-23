import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";
import {
  greenMetrics,
  greenPrinciple,
  greenObjectives,
  greenPractices,
} from "@/../data/greenIt";

export const metadata = pageMetadata({
  title: "Green IT - Démarche numérique responsable",
  description:
    "Efficience IT s'engage dans une démarche Green IT pour réduire l'impact environnemental du numérique via des pratiques techniques responsables.",
  path: "/green-it",
});

const breadcrumb = breadcrumbJsonLd([{ name: "Green IT", path: "/green-it" }]);

const webPage = webPageJsonLd({
  name: "Green IT | Démarche numérique responsable",
  description:
    "Efficience IT s'engage dans une démarche Green IT pour réduire l'impact environnemental du numérique via des pratiques techniques responsables.",
  path: "/green-it",
  datePublished: "2025-09-01",
  dateModified: "2025-09-01",
});

const greenItRelatedLinks: RelatedLink[] = [
  {
    title: "Normes RGAA : accessibilité pour tous",
    description: "Concevoir des sites inclusifs et responsables",
    href: "/article/normes-rgaa-les-cles-dune-experience-utilisateur-reussie-pour-tous",
  },
  {
    title: "GreenIT.fr",
    description: "Communauté du numérique responsable",
    href: "https://www.greenit.fr/",
    external: true,
  },
  {
    title: "Ecosia",
    description: "Le moteur de recherche qui plante des arbres",
    href: "https://www.ecosia.org/",
    external: true,
  },
  {
    title: "W3C, Web Sustainability Guidelines",
    description: "Référentiel de durabilité web",
    href: "https://www.w3.org/TR/sustainability-web/",
    external: true,
  },
];

export default function GreenIt() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
    />
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <Breadcrumb items={[{ label: "Green IT" }]} />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Notre engagement RSE
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                Green IT
              </h1>
              <p className="mt-6 text-lg text-gray">
                Efficience IT est engagée dans une démarche RSE, en particulier
                sur l&apos;écologie, afin de minimiser l&apos;impact
                environnemental de nos activités et celles de nos clients.
              </p>
              <p className="mt-4 text-lg text-gray">
                Nous croyons que la technologie peut être au service de la
                transition écologique. Grâce à des pratiques clean, nous
                optimisons les applications pour réduire les ressources
                nécessaires. Économie et écologie sont des maîtres mots.{" "}
                <Link href="/article/eco-conception-un-ideal-en-marche-ou-une-illusion-durable" className="text-primary hover:underline">
                  L&apos;éco-conception
                </Link>{" "}
                est au cœur de notre approche du développement web responsable.
              </p>
              <p className="mt-4 text-lg text-gray">
                Nous encourageons le télétravail et les déplacements à vélo ou
                en transports en commun. En choisissant Efficience IT, vous
                optez pour une approche responsable et durable de la
                technologie, avec une expertise de pointe en développement web
                durable.
              </p>
              <p className="mt-4 text-lg font-semibold text-dark">
                Chaque journée de développement réalisée nous permet de planter
                un arbre.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/greenit.svg"
                alt="Illustration symbolisant l'éco-conception logicielle et la sobriété numérique"
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
      <section className="py-16">
        <Container>
          <SectionTitle subtitle="Un excellent travail produit d'excellents résultats">
            Nos résultats
          </SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {greenMetrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg bg-white p-6 text-center shadow-md"
              >
                <span className="text-4xl">{metric.icon}</span>
                <p className="mt-3 font-display text-2xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-dark">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs text-gray">{metric.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center font-display text-lg font-bold text-dark">
            {greenPrinciple}
          </p>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <SectionTitle centered={false}>Nos objectifs</SectionTitle>
              <ul className="space-y-4">
                {greenObjectives.map((objective) => (
                  <li
                    key={objective}
                    className="flex items-start gap-3 text-gray"
                  >
                    <span className="mt-1 text-primary">&#10003;</span>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/green-it/objectifs.webp"
                alt="Schéma des objectifs Green IT et engagements environnementaux d'Efficience IT"
                width={500}
                height={250}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Nos pratiques durables</SectionTitle>
          <ul className="mx-auto max-w-2xl space-y-4">
            {greenPractices.map((practice) => (
              <li key={practice} className="flex items-start gap-3 text-gray">
                <span className="mt-1 text-primary">&#10003;</span>
                {practice}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16">
        <Container className="text-center">
          <SectionTitle>Découvrez nos articles Green IT</SectionTitle>
          <p className="mx-auto max-w-2xl text-gray">
            Au-delà de cet engagement, nos collaborateurs utilisent le moteur de
            recherche{" "}
            <Link href="/article/ecosia-preservateur-decologie" className="text-primary hover:underline">
              Ecosia
            </Link>
            , qui plante des arbres grâce aux recherches des utilisateurs.
            Chaque petit geste a son impact.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-gray">
            Retrouvez nos articles sur le numérique responsable,
            l&apos;éco-conception et la décarbonation sur notre blog.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-block font-semibold text-primary hover:underline"
          >
            Voir les articles Green IT →
          </Link>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks
        links={greenItRelatedLinks}
        className="bg-light-gray"
      />
      </FadeIn>

      <FadeIn>
      <CallToAction />
      <StickyMobileCta />
      </FadeIn>
    </main>
    </>
  );
}

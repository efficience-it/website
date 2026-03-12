import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import JobCard from "@/components/cards/JobCard";
import { jobs, domains, spontaneousEmail } from "@/../data/jobs";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";

const relatedLinks: RelatedLink[] = [
  { title: "7 bonnes raisons de rejoindre Efficience IT", description: "notre culture et nos valeurs", href: "/article/7-bonnes-raisons-de-rejoindre-efficience-it" },
  { title: "Les 6 étapes pour monter en compétences sur Symfony", description: "parcours de progression technique", href: "/article/les-6-etapes-pour-monter-en-competences-sur-symfony" },
  { title: "Symfony, documentation officielle", description: "apprendre le framework", href: "https://symfony.com/doc/current/index.html", external: true },
  { title: "Welcome to the Jungle", description: "découvrir les entreprises tech", href: "https://www.welcometothejungle.com/", external: true },
  { title: "AFUP", description: "la communauté PHP en France", href: "https://afup.org/", external: true },
];

export const metadata = pageMetadata({
  title: "On recrute | Efficience IT – Opportunités de carrière",
  description:
    "Découvrez les opportunités de carrière chez Efficience IT : développement, business, recrutement et communication au sein d'une agence web spécialisée Symfony.",
  path: "/ta-carriere",
  absoluteTitle: true,
});

const breadcrumb = breadcrumbJsonLd([{ name: "Jobs", path: "/ta-carriere" }]);

const webPage = webPageJsonLd({
  name: "On recrute | Efficience IT - Opportunités de carrière",
  description:
    "Découvrez les opportunités de carrière chez Efficience IT : développement, business, recrutement et communication au sein d'une agence web spécialisée Symfony.",
  path: "/ta-carriere",
  datePublished: "2025-09-01",
  dateModified: "2025-09-01",
});

export default function TaCarriere() {
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
        <Container className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
            Un projet commun, une vision commune
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold text-dark md:text-5xl">
            Rejoignez notre équipe de talentueux développeurs
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Découvrez nos 7 bonnes raisons de nous rejoindre et participez à
            des projets ambitieux dans un cadre bienveillant.
          </p>
        </Container>
      </section>

      <FadeIn>
      <section className="py-16">
        <Container>
          <SectionTitle>Nos domaines</SectionTitle>
          <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {domains.map((domain) => (
              <Link
                key={domain.slug}
                href={`/domain/${domain.slug}`}
                className="rounded-lg border border-border bg-white p-6 text-center transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-dark">
                  {domain.name}
                </h3>
                <p className="mt-2 text-sm text-gray">{domain.description}</p>
              </Link>
            ))}
          </div>

          <SectionTitle>Offres d&apos;emploi</SectionTitle>
          {jobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray">
              Aucune offre disponible pour le moment.
            </p>
          )}
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={relatedLinks} />
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16">
        <Container className="text-center">
          <SectionTitle>Candidature spontanée</SectionTitle>
          <p className="mx-auto max-w-2xl text-gray">
            Vous ne trouvez pas votre job parfait ? N&apos;hésitez pas à faire
            une candidature spontanée si vous n&apos;avez pas encore trouvé
            votre poste idéal.
          </p>
          <Button
            href={`mailto:${spontaneousEmail}`}
            variant="primary"
            className="mt-6"
          >
            Envoyer ma candidature
          </Button>
          <p className="mt-4 text-sm text-gray">{spontaneousEmail}</p>
        </Container>
      </section>
      </FadeIn>
    </main>
    </>
  );
}

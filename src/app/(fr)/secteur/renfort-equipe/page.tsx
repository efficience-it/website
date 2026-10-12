import Image from "next/image";
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
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Renfort d'équipe Symfony : développeurs seniors en régie",
  description:
    "Efficience IT met à disposition des développeurs Symfony seniors pour renforcer votre équipe : régie, expertise technique et montée en compétences.",
  path: "/secteur/renfort-equipe",
});

const expertises = [
  {
    title: "Développeurs Symfony seniors",
    description:
      "Des développeurs avec 5 à 10 ans d'expérience sur Symfony, capables d'intervenir immédiatement sur votre codebase. Pas de juniors à former : nos développeurs connaissent les composants Symfony en profondeur et sont autonomes dès les premiers jours.",
    icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Intégration rapide dans vos process",
    description:
      "Nous nous adaptons à vos outils (GitLab, GitHub, Jira, Slack), vos conventions de code et votre workflow de déploiement. L'objectif est d'être productif rapidement, pas de vous imposer nos méthodes.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
  },
  {
    title: "Transfert de compétences",
    description:
      "Nos développeurs ne se contentent pas de coder : ils partagent leur expertise avec votre équipe. Revues de code, pair programming, bonnes pratiques Symfony. Quand la mission se termine, votre équipe est plus forte qu'avant.",
    icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
  },
  {
    title: "Flexibilité contractuelle",
    description:
      "Régie à temps plein ou partiel, missions courtes ou longues durées, montée en charge progressive : nous adaptons le format à vos besoins. Vous gardez le contrôle du périmètre et du planning.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  },
];

const references = [
  { name: "Decathlon", image: "/images/clients/decathlon.webp" },
  { name: "Schneider Electric", image: "/images/clients/schneider.webp" },
  { name: "NAT Groupe", image: "/images/clients/nat-groupe.webp" },
];

const faqItems = [
  {
    title: "Quel est le profil de vos développeurs en renfort ?",
    content:
      "Nos développeurs ont entre 5 et 10 ans d'expérience sur Symfony et l'écosystème PHP. Ils maîtrisent les composants avancés (Messenger, Workflow, Security), l'architecture hexagonale, les tests automatisés et les pratiques DevOps. Chaque profil est sélectionné en fonction de vos besoins techniques spécifiques.",
  },
  {
    title: "Sous quel délai un développeur peut-il intégrer notre équipe ?",
    content:
      "En général, sous 1 à 2 semaines. Nous avons un vivier de développeurs disponibles et nous nous occupons de la phase d'onboarding technique (accès aux repos, découverte de la codebase, compréhension de l'architecture) pour accélérer la prise en main.",
  },
  {
    title: "Comment gérez-vous la qualité du code produit ?",
    content:
      "Nos développeurs appliquent les mêmes standards de qualité qu'en interne : tests unitaires et fonctionnels, analyse statique avec PHPStan, revues de code croisées. Si votre équipe a des conventions spécifiques, nous les respectons.",
  },
  {
    title: "Pouvez-vous intervenir sur un projet en difficulté ?",
    content:
      "Oui. Nous avons l'habitude d'intervenir sur des projets en retard ou en difficulté technique. Dans ce cas, nous commençons par un audit rapide pour identifier les blocages, puis nous proposons un plan d'action pour remettre le projet sur les rails.",
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
  { name: "Renfort d'équipe", path: "/secteur/renfort-equipe" },
]);

const service = serviceJsonLd({
  name: "Renfort d'équipe Symfony",
  description:
    "Mise à disposition de développeurs Symfony seniors pour renforcer votre équipe : régie, expertise technique, montée en compétences et transfert de savoir-faire.",
  path: "/secteur/renfort-equipe",
});

const webPage = webPageJsonLd({
  name: "Renfort d'équipe Symfony : développeurs seniors en régie",
  description:
    "Efficience IT met à disposition des développeurs Symfony seniors pour renforcer votre équipe : régie, expertise technique et montée en compétences.",
  path: "/secteur/renfort-equipe",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Comment choisir son prestataire Symfony",
    description:
      "Les critères pour sélectionner le bon partenaire technique",
    href: "/article/comment-choisir-son-prestataire-symfony",
  },
  {
    title: "Les 6 étapes pour monter en compétences sur Symfony",
    description:
      "Le parcours de progression que suivent nos développeurs",
    href: "/article/les-6-etapes-pour-monter-en-competences-sur-symfony",
  },
  {
    title: "Formation Symfony en entreprise",
    description:
      "Former vos équipes pour gagner en autonomie",
    href: "/formation-symfony-entreprise",
  },
  {
    title: "Agence Symfony en France",
    description:
      "Présentation de notre agence et de nos expertises",
    href: "/agence-symfony-france",
  },
  {
    title: "Reprise de projet Symfony",
    description:
      "Reprendre un projet existant et le remettre sur les rails",
    href: "/reprise-projet-symfony",
  },
  {
    title: "Certifications Symfony",
    description: "Les certifications que nos développeurs détiennent",
    href: "https://certification.symfony.com/",
    external: true,
  },
];

export default function SecteurRenfortEquipe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Nos secteurs", href: "/secteur" }, { label: "Renfort d\'équipe" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Renfort d&apos;équipe
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Renfort d&apos;équipe Symfony : développeurs seniors en régie
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vous avez un projet à livrer et votre équipe manque de bande
                  passante. Recruter prend trop de temps, et un freelance
                  généraliste ne connaît pas assez Symfony pour être autonome
                  rapidement.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT met à disposition des{" "}
                  <strong>développeurs Symfony seniors</strong> qui intègrent
                  votre équipe en quelques jours. Nos développeurs connaissent
                  les bonnes pratiques du framework, maîtrisent l&apos;
                  <Link
                    href="/architecture-hexagonale-symfony"
                    className="text-primary hover:underline"
                  >
                    architecture hexagonale
                  </Link>{" "}
                  et sont habitués à travailler sur des projets d&apos;entreprise
                  exigeants.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Discutons de votre besoin
                  </Button>
                  <Button href="/nos-references" variant="outline">
                    Voir nos références
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
                      d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que nous apportons</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des développeurs opérationnels qui renforcent votre équipe
              sans alourdir votre organisation.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expertises.map((item) => (
                <Card key={item.title}>
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
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
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
            <SectionTitle>Plus qu&apos;un prestataire, un partenaire technique</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Un bon renfort d&apos;équipe, ce n&apos;est pas juste un
                développeur supplémentaire. C&apos;est quelqu&apos;un qui comprend
                les enjeux de votre projet et qui apporte une{" "}
                <Link
                  href="/notre-expertise"
                  className="text-primary hover:underline"
                >
                  expertise technique
                </Link>{" "}
                que votre équipe n&apos;a pas forcément en interne. Nos
                développeurs ont travaillé sur des projets dans le{" "}
                <Link
                  href="/secteur/e-commerce"
                  className="text-primary hover:underline"
                >
                  e-commerce
                </Link>
                , la{" "}
                <Link
                  href="/secteur/finance"
                  className="text-primary hover:underline"
                >
                  finance
                </Link>
                , l&apos;
                <Link
                  href="/secteur/industrie"
                  className="text-primary hover:underline"
                >
                  industrie
                </Link>{" "}
                et le{" "}
                <Link
                  href="/secteur/saas"
                  className="text-primary hover:underline"
                >
                  SaaS
                </Link>
                . Cette expérience transversale leur permet de s&apos;adapter
                rapidement à votre contexte.
              </p>
              <p>
                Si votre projet nécessite de la{" "}
                <Link
                  href="/secteur/migration-legacy"
                  className="text-primary hover:underline"
                >
                  migration legacy
                </Link>{" "}
                ou de l&apos;
                <Link
                  href="/secteur/api-integration"
                  className="text-primary hover:underline"
                >
                  intégration d&apos;API
                </Link>
                , nos développeurs ont les compétences pour intervenir sur ces
                sujets sans formation préalable.
              </p>
              <p>
                Et quand la mission se termine, votre équipe a gagné en
                compétences. Nos développeurs pratiquent le pair programming
                et les revues de code. Si vous souhaitez aller plus loin, notre{" "}
                <Link
                  href="/formation-symfony-entreprise"
                  className="text-primary hover:underline"
                >
                  formation Symfony
                </Link>{" "}
                peut compléter ce transfert de savoir-faire.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des entreprises de toutes tailles font appel à nos développeurs
              pour renforcer leurs équipes.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-8">
              {references.map((client) => (
                <div
                  key={client.name}
                  className="overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Renforcez votre équipe avec des experts Symfony
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Décrivez-nous votre besoin et nous vous proposons le profil
              adapté. Intégration sous 1 à 2 semaines.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Discutons de votre besoin
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

import Image from "next/image";
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
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Applications metier pour l'industrie : outils sur mesure avec Symfony",
  description:
    "Efficience IT developpe des applications metier pour l'industrie : outils de production, interconnexion SI, workflows complexes et modernisation d'applications legacy.",
  path: "/secteur/industrie",
});

const expertises = [
  {
    title: "Outils metier sur mesure",
    description:
      "ERP, GMAO, gestion de production, suivi qualite : nous concevons des applications qui epousent vos processus industriels. Pas de compromis avec un logiciel generique, chaque ecran, chaque workflow est pense pour vos equipes terrain.",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "Interconnexion SI",
    description:
      "Votre SI industriel est un ecosysteme complexe : ERP, MES, SCADA, outils de maintenance. Nous connectons ces briques entre elles grace a des API robustes et des files de messages Symfony Messenger pour garantir la fiabilite des echanges.",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    title: "Workflows metier complexes",
    description:
      "Validations multi-niveaux, circuits d'approbation, machines a etats pour le suivi de production : le composant Workflow de Symfony modele vos processus metier tels qu'ils existent dans votre organisation, avec une tracabilite complete.",
    icon: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z",
  },
  {
    title: "Modernisation d'applications legacy",
    description:
      "Migration progressive de vos applications vieillissantes (PHP natif, frameworks obsoletes) vers Symfony sans interruption de service. Nous appliquons le Strangler Fig pattern pour moderniser brique par brique, en limitant les risques.",
    icon: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182",
  },
];

const references = [
  { name: "Groupe Atlantic", image: "/images/clients/groupe-atlantic.webp" },
  { name: "Mobivia", image: "/images/clients/mobivia.webp" },
  { name: "OEMServices", image: "/images/clients/oems.webp" },
];

const faqItems = [
  {
    title: "Pouvez-vous intervenir sur des applications industrielles legacy ?",
    content:
      "C'est meme une de nos specialites. Nous avons l'habitude de reprendre des applications metier developpees en PHP natif ou sur des frameworks obsoletes. Notre methodologie de migration progressive permet de moderniser sans interrompre la production.",
  },
  {
    title: "Comment gerez-vous l'interconnexion avec nos systemes existants ?",
    content:
      "Nous concevons des connecteurs sur mesure en utilisant API Platform pour les echanges synchrones et Symfony Messenger pour les flux asynchrones. Chaque integration est idempotente et resiliente : en cas de panne d'un systeme tiers, les messages sont mis en file d'attente et retraites automatiquement.",
  },
  {
    title: "Vos applications fonctionnent-elles dans des environnements contraints ?",
    content:
      "Oui. Nous avons l'experience des environnements industriels avec des contraintes reseau, des postes de travail anciens ou des connexions intermittentes. Nos applications sont concues pour fonctionner de maniere fiable dans ces conditions.",
  },
  {
    title: "Quelle est votre approche pour les projets industriels complexes ?",
    content:
      "Nous commencons par un audit technique et fonctionnel pour comprendre vos processus. Ensuite, nous livrons par increments courts (sprints de 2 semaines) pour valider chaque brique avec vos equipes terrain avant de passer a la suivante.",
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
  { name: "Industrie", path: "/secteur/industrie" },
]);

const service = serviceJsonLd({
  name: "Applications metier pour l'industrie",
  description:
    "Conception et developpement d'applications metier pour l'industrie : outils de production, interconnexion SI, workflows complexes et modernisation d'applications legacy.",
  path: "/secteur/industrie",
});

const webPage = webPageJsonLd({
  name: "Applications metier pour l'industrie : outils sur mesure avec Symfony",
  description:
    "Efficience IT developpe des applications metier pour l'industrie : outils de production, interconnexion SI, workflows complexes et modernisation d'applications legacy.",
  path: "/secteur/industrie",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Symfony Messenger en archi hexagonale",
    description:
      "Comment nous utilisons Messenger pour les workflows asynchrones",
    href: "/article/symfony-messenger-colonne-vertebrale-archi-hexagonale",
  },
  {
    title: "Migration vers l'architecture hexagonale",
    description:
      "Retour de mission sur la modernisation d'une application couplee",
    href: "/article/migration-symfony-architecture-hexagonale-retour-mission",
  },
  {
    title: "Modernisation d'application PHP",
    description:
      "Notre offre dediee a la modernisation d'applications legacy",
    href: "/modernisation-application-php",
  },
  {
    title: "Les avantages d'un progiciel sur mesure",
    description:
      "Pourquoi un outil metier dedie surpasse un logiciel generique",
    href: "/article/quels-sont-les-avantages-dun-progiciel-pour-votre-entreprise",
  },
  {
    title: "Migration Symfony, guide complet",
    description:
      "Mettre a jour un projet Symfony en toute securite",
    href: "/article/guide-de-migration-dans-un-projet-symfony",
  },
  {
    title: "Symfony Messenger, doc officielle",
    description: "Le composant de messaging asynchrone de Symfony",
    href: "https://symfony.com/doc/current/messenger.html",
    external: true,
  },
];

export default function SecteurIndustrie() {
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
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Secteur industrie
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Applications metier pour l&apos;industrie : outils sur mesure avec Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vos outils de production sont vieillissants, vos donnees sont
                  cloisonnees entre plusieurs systemes, et vos equipes perdent du
                  temps sur des taches manuelles que le SI devrait automatiser.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT concoit des{" "}
                  <strong>applications metier sur mesure</strong> avec Symfony
                  pour l&apos;industrie. Des outils qui s&apos;integrent dans votre
                  SI existant et qui repondent aux contraintes specifiques de
                  votre secteur : fiabilite, tracabilite, performance.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre expertise industrielle</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des applications robustes concues pour les environnements
              industriels exigeants.
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

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>L&apos;industrie a besoin d&apos;outils fiables</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Dans l&apos;industrie, une application qui tombe en panne, c&apos;est
                une chaine de production qui s&apos;arrete. Les enjeux de fiabilite
                et de tracabilite sont critiques. C&apos;est pourquoi nous concevons
                des applications avec une{" "}
                <Link
                  href="/architecture-hexagonale-symfony"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale
                </Link>{" "}
                qui separe la logique metier de l&apos;infrastructure.
              </p>
              <p>
                Cette approche permet de{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tester exhaustivement
                </Link>{" "}
                chaque regle metier independamment des systemes tiers (ERP, MES,
                SCADA). Les echanges de donnees passent par{" "}
                <Link
                  href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                  className="text-primary hover:underline"
                >
                  Symfony Messenger
                </Link>{" "}
                pour garantir qu&apos;aucune information ne se perd, meme en cas de
                panne temporaire d&apos;un systeme.
              </p>
              <p>
                Pour les applications legacy, nous appliquons une strategie de{" "}
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  modernisation progressive
                </Link>{" "}
                qui permet de migrer sans interrompre la production. Chaque
                iteration apporte de la valeur tout en reduisant la dette
                technique.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des groupes industriels nous confient le developpement et la
              modernisation de leurs outils metier.
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

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Modernisez vos outils industriels avec Symfony
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Discutons de vos enjeux lors d&apos;un audit gratuit de 30 minutes.
              Nous analysons votre SI et vous proposons une feuille de route
              concrete.
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

        <RelatedLinks links={relatedLinks} />

        <CallToAction />
      </main>
    </>
  );
}

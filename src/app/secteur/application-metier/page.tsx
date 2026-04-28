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
    "Développement d'applications métier sur mesure avec Symfony",
  description:
    "Efficience IT développe des applications métier sur mesure avec Symfony : digitalisation de processus, outils internes et logiciels de gestion adaptés à votre activité.",
  path: "/secteur/application-metier",
});

const expertises = [
  {
    title: "Analyse et modélisation métier",
    description:
      "Avant de coder, nous comprenons votre métier. Ateliers de cadrage, cartographie des processus, identification des cas d'usage critiques. L'application sera le reflet exact de votre activité, pas un outil générique que vous devrez contourner.",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
  },
  {
    title: "Développement sur mesure",
    description:
      "Chaque application est conçue pour vos besoins spécifiques. Gestion de dossiers, suivi de production, CRM interne, outil de planification : nous développons l'outil qui manque à votre organisation, avec une interface pensée pour vos utilisateurs.",
    icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
  {
    title: "Intégration dans le SI existant",
    description:
      "Votre application métier ne vit pas en silo. Nous la connectons à votre ERP, votre CRM, votre messagerie et vos outils de reporting via des API sur mesure et des flux asynchrones fiables avec Symfony Messenger.",
    icon: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  },
  {
    title: "Livraisons itératives",
    description:
      "Nous livrons par incréments courts pour valider chaque fonctionnalité avec vos utilisateurs finaux. Pas de tunnel de 6 mois suivi d'une livraison décevante : vous voyez l'application prendre forme et vous ajustez le cap en continu.",
    icon: "M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3",
  },
];

const references = [
  { name: "Groupe Atlantic", image: "/images/clients/groupe-atlantic.webp" },
  { name: "CEF", image: "/images/clients/cef.webp" },
  { name: "Ministère", image: "/images/clients/ministere.webp" },
];

const faqItems = [
  {
    title: "Quelle est la différence entre un progiciel et une application sur mesure ?",
    content:
      "Un progiciel (ERP, CRM) est un logiciel standard paramétrable. Une application sur mesure est développée spécifiquement pour votre métier. Le progiciel convient quand vos processus sont standards. L'application sur mesure s'impose quand vos processus sont votre avantage compétitif et qu'aucun logiciel du marché ne les couvre correctement.",
  },
  {
    title: "Comment cadrer le besoin avant de développer ?",
    content:
      "Nous démarrons par des ateliers de cadrage avec vos équipes métier. L'objectif est de cartographier les processus actuels, identifier les irritants et prioriser les fonctionnalités. Nous produisons un cahier des charges fonctionnel qui sert de base au développement, mais qui reste adaptable au fil des itérations.",
  },
  {
    title: "Quel budget prévoir pour une application métier ?",
    content:
      "Un MVP fonctionnel démarre généralement autour de 30 à 50 jours de développement. L'avantage de l'approche itérative, c'est que vous pouvez commencer avec un périmètre restreint et enrichir l'application au fil du temps, en fonction de vos retours et de votre budget.",
  },
  {
    title: "Qui maintient l'application après la livraison ?",
    content:
      "Nous proposons un contrat de maintenance applicative qui couvre la correction de bugs, les mises à jour de sécurité et les évolutions fonctionnelles. Votre application est entre de bonnes mains, et vous gardez la main sur les priorités.",
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
  { name: "Application métier", path: "/secteur/application-metier" },
]);

const service = serviceJsonLd({
  name: "Développement d'applications métier sur mesure",
  description:
    "Conception et développement d'applications métier sur mesure avec Symfony : digitalisation de processus, outils internes, logiciels de gestion et intégration SI.",
  path: "/secteur/application-metier",
});

const webPage = webPageJsonLd({
  name: "Développement d'applications métier sur mesure avec Symfony",
  description:
    "Efficience IT développe des applications métier sur mesure avec Symfony : digitalisation de processus, outils internes et logiciels de gestion adaptés à votre activité.",
  path: "/secteur/application-metier",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Les avantages d'un progiciel sur mesure",
    description:
      "Pourquoi un outil métier dédié surpasse un logiciel générique",
    href: "/article/quels-sont-les-avantages-dun-progiciel-pour-votre-entreprise",
  },
  {
    title: "Cahier des charges application web",
    description:
      "Le guide complet pour cadrer votre projet",
    href: "/article/cahier-des-charges-application-web-guide-complet",
  },
  {
    title: "Symfony Messenger en archi hexagonale",
    description:
      "Comment nous structurons les flux métier asynchrones",
    href: "/article/symfony-messenger-colonne-vertebrale-archi-hexagonale",
  },
  {
    title: "Développement web sur mesure",
    description:
      "Notre approche globale du développement d'applications",
    href: "/developpement-web-sur-mesure",
  },
  {
    title: "Architecture hexagonale Symfony",
    description:
      "L'architecture que nous privilégions pour les applications métier",
    href: "/architecture-hexagonale-symfony",
  },
  {
    title: "Micro-service ou monolithe modulaire",
    description:
      "Choisir la bonne architecture pour votre projet",
    href: "/article/quelle-architecture-de-projet-choisir-entre-micro-service-ou-monolithe-modulaire",
  },
  {
    title: "Symfony, site officiel",
    description: "Le framework PHP pour les applications d'entreprise",
    href: "https://symfony.com/",
    external: true,
  },
];

export default function SecteurApplicationMetier() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Nos secteurs", href: "/secteur" }, { label: "Application métier" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Application métier
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Développement d&apos;applications métier sur mesure avec Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vos équipes jonglent entre des tableurs Excel, des emails
                  et des outils qui ne communiquent pas entre eux. Les
                  processus sont manuels, les erreurs fréquentes, et
                  personne n&apos;a une vision globale de l&apos;activité.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT conçoit des{" "}
                  <strong>applications métier sur mesure</strong> avec Symfony
                  pour digitaliser vos processus. Un{" "}
                  <Link
                    href="/article/quels-sont-les-avantages-dun-progiciel-pour-votre-entreprise"
                    className="text-primary hover:underline"
                  >
                    progiciel dédié
                  </Link>{" "}
                  a votre activité, conçu avec vos équipes et intégré dans
                  votre SI existant.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Discutons de votre projet
                  </Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit
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
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
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
            <SectionTitle>Notre approche du développement métier</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              De l&apos;analyse du besoin à la mise en production, un
              processus structuré qui place vos utilisateurs au centre.
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
            <SectionTitle>Pourquoi développer sur mesure</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                Un logiciel générique couvre 80 % de vos besoins. Les 20 %
                restants, ce sont les processus qui font votre différence.
                Un outil adapté à votre métier supprime les saisies
                en double, automatise les tâches répétitives et donne à vos
                équipes une vision unifiée de l&apos;activité. La rédaction d&apos;un{" "}
                <Link
                  href="/article/cahier-des-charges-application-web-guide-complet"
                  className="text-primary hover:underline"
                >
                  cahier des charges solide
                </Link>{" "}
                est la première étape pour cadrer ce périmètre.
              </p>
              <p>
                Avec Symfony, nous structurons le code autour de votre
                domaine métier grâce à une{" "}
                <Link
                  href="/architecture-hexagonale-symfony"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale
                </Link>
                . Vos règles métier sont isolées, testées et indépendantes
                du framework. Si votre métier évolue, l&apos;application évolue
                avec lui sans réécriture structurelle.
              </p>
              <p>
                L&apos;intégration dans votre SI existant passe par des{" "}
                <Link
                  href="/secteur/api-integration"
                  className="text-primary hover:underline"
                >
                  API sur mesure
                </Link>{" "}
                et des flux asynchrones via{" "}
                <Link
                  href="/article/symfony-messenger-colonne-vertebrale-archi-hexagonale"
                  className="text-primary hover:underline"
                >
                  Symfony Messenger
                </Link>
                . Votre ERP, votre CRM et vos outils internes communiquent
                avec l&apos;application de manière fiable. Et notre{" "}
                <Link
                  href="/secteur/maintenance-applicative"
                  className="text-primary hover:underline"
                >
                  maintenance applicative
                </Link>{" "}
                garantit la pérennité de l&apos;investissement après la
                mise en production.
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
              Des entreprises de tous secteurs nous confient le développement
              de leurs outils métier.
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
              Digitalisez vos processus avec un outil sur mesure
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Décrivez-nous votre besoin. Nous analysons vos processus et
              vous proposons une solution adaptée, avec un premier livrable
              en quelques semaines.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Parlons de votre projet
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

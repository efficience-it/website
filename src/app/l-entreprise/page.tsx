import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, webPageJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import EnterpriseTimeline from "@/components/sections/EnterpriseTimeline";

const enterpriseRelatedLinks: RelatedLink[] = [
  { title: "L'équipe Efficience IT", description: "Les profils qui composent l'agence", href: "/la-team" },
  { title: "On recrute", description: "Rejoignez l'aventure Efficience IT", href: "/ta-carriere" },
  { title: "Nos secteurs d'intervention", description: "E-commerce, finance, industrie et SaaS", href: "/secteur" },
  { title: "7 bonnes raisons de rejoindre Efficience IT", description: "Découvrir notre culture d'entreprise", href: "/article/7-bonnes-raisons-de-rejoindre-efficience-it" },
  { title: "AFUP", description: "Association Française des Utilisateurs de PHP", href: "https://afup.org/", external: true },
];

export const metadata = pageMetadata({
  title: "Agence Symfony – Présentation et expertise",
  description:
    "Découvrez Efficience IT, agence spécialisée Symfony et PHP. Notre équipe conçoit et développe des applications web robustes pour vos enjeux métiers.",
  path: "/l-entreprise",
});

const timeline = [
  {
    year: "2018",
    title: "Création",
    description:
      "Une ambition : une équipe d'experts passionnés. Louis-Arnaud Catoire fonde l'agence avec une vision dédiée à Symfony. L'équipe initiale : trois développeurs et un chef de projet.",
  },
  {
    year: "2019",
    title: "Expansion géographique",
    description:
      "L'agence s'étend en France et en Europe (Belgique, Luxembourg, Royaume-Uni), maintenant la proximité client malgré la distance grâce aux outils digitaux.",
  },
  {
    year: "2020",
    title: "Covid-19 : des besoins plus importants",
    description:
      "La pandémie augmente la demande en outils web. L'agence adopte de nouvelles technologies, accueille de nouveaux collaborateurs et met en place des programmes d'onboarding.",
  },
  {
    year: "2023",
    title: "Les 5 ans",
    description:
      "L'équipe grandit avec de nouveaux collaborateurs passionnés. Un séminaire d'entreprise célèbre les accomplissements et prépare les ambitions futures.",
  },
  {
    year: "2023",
    title: "Certification Scrum & Symfony",
    description:
      "Agence certifiée par L'Agiliste (Scrum Master) et Symfony pour les compétences techniques et managériales.",
  },
  {
    year: "2023",
    title: "AFUP HDF & AD2N",
    description:
      "Adhésion à l'AFUP (association des utilisateurs PHP) et AD2N (communauté des entreprises numériques du Nord). Contributions open-source et participation aux conférences majeures.",
  },
  {
    year: "2025",
    title: "Membre de l'équipe PHP",
    description:
      "Efficience IT rejoint l'équipe PHP avec de nombreuses contributions à son actif sur PHP, Symfony, la documentation Symfony, Nelmio, API Platform et Sylius.",
  },
  {
    year: "Aujourd'hui",
    title: "Notre Collaboration",
    description:
      "Développement back-end, développement front-end, accompagnement à la migration, automatisation et performance, audits et corrections, formation et montée en compétences… nos développeurs experts sauront vous accompagner au mieux.",
  },
];

const pressTestimonials = [
  {
    source: "Pépites Tech",
    quote:
      "Efficience IT se distingue par son expertise en développement web. Leur équipe propose des solutions personnalisées alliant innovation et performance pour répondre aux besoins spécifiques de chaque client.",
  },
  {
    source: "Sortlist",
    quote:
      "Efficience IT réunit des développeurs passionnés spécialisés dans la création de solutions web innovantes. Leur expertise transforme les idées ambitieuses en projets numériques réussis répondant aux besoins spécifiques de chaque client.",
  },
];

const values = [
  {
    title: "Maîtrise de la qualité",
    description:
      "La qualité du code et des projets est au cœur de notre travail. La sécurité et la performance de nos outils sont nos priorités. Nous testons, améliorons et itérons continuellement pour répondre aux attentes et respecter les délais.",
  },
  {
    title: "Architecture adaptée",
    description:
      "Nous mettons en place des microservices avec API-Gateway en fonction de vos enjeux et besoins. Nous pouvons également améliorer vos applications ou architectures monolithiques.",
  },
  {
    title: "Dernières technologies",
    description:
      "Nous utilisons Symfony et les outils de son écosystème pour garantir des solutions à la pointe, performantes, actuelles, stables et durables. Nos experts recherchent constamment les innovations techniques les plus efficaces.",
  },
  {
    title: "Amélioration continue",
    description:
      "Nous utilisons des outils agiles permettant une amélioration constante des projets et du fonctionnement. C'est une activité d'équipe où chacun contribue.",
  },
  {
    title: "L'esprit d'équipe",
    description:
      "Nos collaborateurs sont des experts réactifs en communication constante avec leurs collègues et les interlocuteurs clients. Les réunions quotidiennes challengent l'équipe et assurent réactivité et efficacité.",
  },
  {
    title: "Le dépassement de soi",
    description:
      "Nous sélectionnons des profils passionnés qui aiment les défis. Nous améliorons en interne le niveau de l'équipe par la formation, la veille quotidienne et le team building. Efficience IT s'engage à former les équipes de ses clients.",
  },
];

const breadcrumb = breadcrumbJsonLd([{ name: "Notre histoire", path: "/l-entreprise" }]);

const webPage = webPageJsonLd({
  name: "Agence Symfony - Présentation et expertise",
  description:
    "Découvrez Efficience IT, agence spécialisée Symfony et PHP. Notre équipe conçoit et développe des applications web robustes pour vos enjeux métiers.",
  path: "/l-entreprise",
  type: "AboutPage",
  datePublished: "2025-09-01",
  dateModified: "2025-09-01",
});

export default function LEntreprise() {
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
          <Breadcrumb items={[{ label: "Notre histoire" }]} />
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Notre histoire
              </h1>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Experts en Symfony et en développement web
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Efficience IT est une agence Web spécialisée dans le conseil et le développement, avec un ADN 100 % Symfony, créée pour répondre aux besoins digitaux des entreprises. Elle accompagne ses clients dans la création et la reprise de projets web, en mettant à disposition des experts techniques Symfony sur des prestations adaptées à leurs besoins. Notre équipe contribue activement à la communauté : retrouvez notre vision des{" "}
                <Link href="/article/les-contributions-open-source-un-enjeu-de-taille-pour-les-developpeurs-et-les-projets" className="text-primary hover:underline">
                  contributions open source
                </Link>{" "}
                et leur importance pour les développeurs.
              </p>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                <Link href="/article/pourquoi-choisir-symfony-pour-vos-projets" className="text-primary hover:underline">
                  Symfony
                </Link>{" "}
                nous permet de construire des applications robustes, évolutives, personnalisables et sécurisées, dans un délai et un budget maîtrisés.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/entreprise/geographie.webp"
                alt="Géographie Efficience IT"
                width={400}
                height={300}
                className="w-full rounded-lg"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </section>

      <EnterpriseTimeline items={timeline} />

      <FadeIn>
      <section className="bg-white py-16">
        <Container>
          <SectionTitle>Ils parlent de nous</SectionTitle>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {pressTestimonials.map((t) => (
              <blockquote
                key={t.source}
                className="rounded-lg bg-light-gray p-6"
              >
                <p className="text-gray italic">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 font-display font-bold text-dark">
                 {t.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Nos fondamentaux</SectionTitle>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-lg font-bold text-dark">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-gray">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="bg-white py-16">
        <Container className="text-center">
          <Button href="/contact" variant="primary" size="lg">
            Commencer mon projet
          </Button>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={enterpriseRelatedLinks} />
      </FadeIn>

      <FadeIn>
      <CallToAction />
      </FadeIn>
    </main>
    </>
  );
}

import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/cards/TimelineItem";

export const metadata = pageMetadata({
  title: "Agence Symfony – Présentation et expertise",
  description:
    "Découvrez Efficience IT, agence spécialisée Symfony et PHP. Notre équipe conçoit et développe des applications web sur mesure, robustes et adaptées aux enjeux métiers.",
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
];

const values = [
  "Maîtrise de la qualité",
  "Architecture adaptée",
  "Dernières technologies",
  "Amélioration continue",
  "L'esprit d'équipe",
  "Le dépassement de soi",
];

export default function LEntreprise() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Notre histoire
              </h1>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Expert en Symfony et en développement sur mesure
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Efficience IT est une agence Web spécialisée dans le conseil et le développement avec un ADN 100% Symfony créée pour répondre aux besoins digitaux des entreprises. Elle accompagne ses clients dans la création et reprise de projets web, en mettant à disposition des experts techniques Symfony, sur des prestations sur-mesure.
              </p>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Symfony nous permet de construire des applications robustes, évolutives, personnalisables et sécurisées, dans un délai et un budget maitrisé.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/entreprise/geographie.webp"
                alt="Géographie Efficience IT"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            {timeline.map((item, i) => (
              <TimelineItem
                key={`${item.year}-${i}`}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Nos fondamentaux</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v}
                className="rounded-lg bg-white p-6 text-center font-display font-bold text-dark shadow-sm"
              >
                {v}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = pageMetadata({
  title: "Cloud & DevOps",
  description:
    "Hébergement cloud, automatisation DevOps, migration d'infrastructure. Efficience IT modernise vos infrastructures IT.",
  path: "/cloud-et-devops",
});

const sections = [
  {
    title: "Hébergement Cloud",
    subtitle: "Une infrastructure à la hauteur de vos ambitions",
    items: [
      "Flexibilité et scalabilité adaptées à la croissance",
      "Performance optimale avec sécurité renforcée",
      "Gestion simplifiée via interface intuitive",
      "Support technique disponible",
    ],
  },
  {
    title: "Automatisation DevOps",
    subtitle: "Boostez votre agilité et productivité",
    items: [
      "Accélération des cycles via outils CI/CD",
      "Tests réguliers pour un code fiable",
      "Optimisation des ressources d'équipe",
      "Visibilité et traçabilité en temps réel",
    ],
  },
  {
    title: "Migration d'infrastructure",
    subtitle: "Une transition Cloud maîtrisée",
    items: [
      "Évaluation complète des systèmes",
      "Planification détaillée avec roadmap structurée",
      "Exécution sécurisée de migration",
      "Validation et support continu",
    ],
  },
];

const platforms = [
  { name: "AWS", logo: "/images/expertise/cloud/aws.webp" },
  { name: "Azure", logo: "/images/expertise/cloud/azure.webp" },
  { name: "Google Cloud", logo: "/images/expertise/cloud/google-cloud.webp" },
  { name: "OVH", logo: "/images/expertise/cloud/ovhcloud.webp" },
  { name: "HDS", logo: "/images/expertise/cloud/hds.webp" },
];

export default function CloudEtDevops() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Cloud & DevOps
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Nous accompagnons les PME et grandes entreprises dans la
                modernisation et l&apos;optimisation de leurs infrastructures IT.
                Nos solutions flexibles et innovantes répondent aux défis majeurs de
                scalabilité, de sécurité et de performance.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/online-report.svg"
                alt="Cloud et DevOps"
                width={400}
                height={300}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {sections.map((section) => (
              <Card key={section.title}>
                <h2 className="font-display text-xl font-bold text-dark">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {section.subtitle}
                </p>
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray">
                      <span className="mt-1 text-primary">&#9679;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Plateformes supportées</SectionTitle>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
                <span className="text-sm font-display font-bold text-dark">{p.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

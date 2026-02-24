import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = pageMetadata({
  title: "Nos références",
  description:
    "Découvrez les clients qui font confiance à Efficience IT : Carter Cash, Decathlon, Crédit Agricole, Groupe Atlantic et plus.",
  path: "/nos-references",
});

const allClients = [
  "Carter Cash",
  "Crédit Agricole Auto Bank",
  "Decathlon",
  "Comme j'aime",
  "Groupe Atlantic",
  "Ministère",
  "Nat Groupe",
  "Mon Petit Placement",
  "OEMServices",
  "Assoconnect",
  "Mobivia",
  "Mecatechnic",
  "Centre Européen de Formation",
  "Sesame IT",
  "DPDO",
  "Espérer 95",
  "Faceel IT",
  "Hozana",
  "Myskillcamp",
  "Keyliance",
];

const techStack = [
  "Symfony",
  "Sylius",
  "Twig",
  "Tailwind CSS",
  "React",
  "Docker",
  "Laravel",
  "Nginx",
  "Redis",
  "Elasticsearch",
];

export default function NosReferences() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Nos références
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Ils nous font confiance pour leurs projets web, cloud et DevOps.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Tous nos clients</SectionTitle>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allClients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center rounded-lg bg-white p-4 text-center text-sm font-medium text-dark shadow-sm"
              >
                {client}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Technologies open source utilisées</SectionTitle>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-dark shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
    </main>
  );
}

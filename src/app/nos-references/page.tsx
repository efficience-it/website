import Image from "next/image";
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
  { name: "Carter Cash", image: "/images/clients/carter-cash.webp" },
  { name: "Crédit Agricole Auto Bank", image: "/images/clients/auto-bank.webp" },
  { name: "Decathlon", image: "/images/clients/decathlon.webp" },
  { name: "Comme j'aime", image: "/images/clients/comme-jaime.webp" },
  { name: "Groupe Atlantic", image: "/images/clients/groupe-atlantic.webp" },
  { name: "Ministère", image: "/images/clients/ministere.webp" },
  { name: "Nat Groupe", image: "/images/clients/nat-groupe.webp" },
  { name: "Mon Petit Placement", image: "/images/clients/mes-petits-placements.webp" },
  { name: "OEMServices", image: "/images/clients/oems.webp" },
  { name: "Assoconnect", image: "/images/clients/assoconnect.webp" },
  { name: "Mobivia", image: "/images/clients/mobivia.webp" },
  { name: "Mecatechnic", image: "/images/clients/macatechnic.webp" },
  { name: "Centre Européen de Formation", image: "/images/clients/cef.webp" },
  { name: "Sesame IT", image: "/images/clients/sesame-it.webp" },
  { name: "DPDO", image: "/images/clients/dpdo.webp" },
  { name: "Espérer 95", image: "/images/clients/esperer-95.webp" },
  { name: "Faceel IT", image: "/images/clients/faceel-it.webp" },
  { name: "Hozana", image: "/images/clients/hozana.webp" },
  { name: "Myskillcamp", image: "/images/clients/myskillcamp.webp" },
  { name: "Keyliance", image: "/images/clients/keyliance.webp" },
];

const techStack = [
  { name: "Symfony", logo: "/images/references/tech/symfony.svg" },
  { name: "Sylius", logo: "/images/references/tech/sylius.svg" },
  { name: "API Platform", logo: "/images/references/tech/api-platform.svg" },
  { name: "Tailwind CSS", logo: "/images/references/tech/tailwindcss.svg" },
  { name: "React", logo: "/images/references/tech/react.svg" },
  { name: "Docker", logo: "/images/references/tech/docker.svg" },
  { name: "Laravel", logo: "/images/references/tech/laravel.svg" },
  { name: "Nginx", logo: "/images/references/tech/nginx.svg" },
  { name: "Redis", logo: "/images/references/tech/redis.svg" },
  { name: "Elasticsearch", logo: "/images/references/tech/elasticsearch.svg" },
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
                key={client.name}
                className="flex items-center justify-center rounded-lg bg-white p-4 shadow-sm"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={200}
                  height={120}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Technologies open source utilisées</SectionTitle>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <span className="text-xs font-medium text-dark">{tech.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />
    </main>
  );
}

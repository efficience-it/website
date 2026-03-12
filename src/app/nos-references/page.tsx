import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Testimonials from "@/components/sections/Testimonials";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, webPageJsonLd, reviewsJsonLd } from "@/lib/structured-data";
import { testimonials } from "@/../data/testimonials";

const reviews = reviewsJsonLd(testimonials);

export const metadata = pageMetadata({
  title: "Nos réalisations et contributions open source",
  description:
    "Applications web, outils métiers et contributions open source réalisés par Efficience IT dans des contextes variés.",
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
  { name: "Hozana", image: "/images/clients/hozana.webp" },
  { name: "Myskillcamp", image: "/images/clients/myskillcamp.webp" },
  { name: "Keyliance", image: "/images/clients/keyliance.webp" },
];

const techStack = [
  { name: "PHP", logo: "/images/references/tech/php.svg" },
  { name: "Symfony", logo: "/images/references/tech/symfony.svg" },
  { name: "Laravel", logo: "/images/references/tech/laravel.svg" },
  { name: "Sylius", logo: "/images/references/tech/sylius.svg" },
  { name: "API Platform", logo: "/images/references/tech/api-platform.svg" },
  { name: "Composer", logo: "/images/references/tech/composer.svg" },
  { name: "TypeScript", logo: "/images/references/tech/typescript.svg" },
  { name: "React", logo: "/images/references/tech/react.svg" },
  { name: "Vue.js", logo: "/images/references/tech/vuejs.svg" },
  { name: "Next.js", logo: "/images/references/tech/nextjs.svg" },
  { name: "Node.js", logo: "/images/references/tech/nodejs.svg" },
  { name: "Tailwind CSS", logo: "/images/references/tech/tailwindcss.svg" },
  { name: "PostgreSQL", logo: "/images/references/tech/postgresql.svg" },
  { name: "MariaDB", logo: "/images/references/tech/mariadb.svg" },
  { name: "Redis", logo: "/images/references/tech/redis.svg" },
  { name: "Elasticsearch", logo: "/images/references/tech/elasticsearch.svg" },
  { name: "RabbitMQ", logo: "/images/references/tech/rabbitmq.svg" },
  { name: "Docker", logo: "/images/references/tech/docker.svg" },
  { name: "Nginx", logo: "/images/references/tech/nginx.svg" },
  { name: "Linux", logo: "/images/references/tech/linux.svg" },
  { name: "Git", logo: "/images/references/tech/git.svg" },
  { name: "GitLab", logo: "/images/references/tech/gitlab.svg" },
];

const breadcrumb = breadcrumbJsonLd([{ name: "Références", path: "/nos-references" }]);

const webPage = webPageJsonLd({
  name: "Nos réalisations et contributions open source",
  description:
    "Applications web, outils métiers et contributions open source réalisés par Efficience IT dans des contextes variés.",
  path: "/nos-references",
  type: "CollectionPage",
  datePublished: "2025-09-01",
  dateModified: "2025-09-01",
});

const referencesRelatedLinks: RelatedLink[] = [
  {
    title: "Doctavis et Efficience IT",
    description: "Un cas client détaillé",
    href: "/article/doctavis-et-efficience-it-une-course-contre-la-montre-pour-sortir-un-mvp",
  },
  {
    title: "Les contributions open source",
    description: "Notre engagement dans la communauté",
    href: "/article/les-contributions-open-source-un-enjeu-de-taille-pour-les-developpeurs-et-les-projets",
  },
  {
    title: "Pourquoi nous confier votre maintenance",
    description: "Nos engagements qualité",
    href: "/article/decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web",
  },
  {
    title: "Symfony, site officiel",
    description: "Le framework PHP de référence",
    href: "https://symfony.com/",
    external: true,
  },
  {
    title: "Sylius",
    description: "Plateforme e-commerce open source",
    href: "https://sylius.com/",
    external: true,
  },
  {
    title: "API Platform",
    description: "Framework API pour PHP",
    href: "https://api-platform.com/",
    external: true,
  },
];

export default function NosReferences() {
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
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(reviews) }}
    />
    <main>
      <section className="bg-light-gray py-8 md:py-12">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Nos références
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray">
            Ils nous font confiance pour leurs projets web, cloud et DevOps.
          </p>
        </Container>
      </section>

      <FadeIn>
      <section className="py-16">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">10+</p>
              <p className="mt-2 text-sm font-medium text-gray">Années d&apos;expérience</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">150+</p>
              <p className="mt-2 text-sm font-medium text-gray">Projets livrés</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">40+</p>
              <p className="mt-2 text-sm font-medium text-gray">Clients accompagnés</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-primary md:text-5xl">500+</p>
              <p className="mt-2 text-sm font-medium text-gray">PR sur PHP, Symfony &amp; son écosystème</p>
            </div>
          </div>
        </Container>
      </section>
      </FadeIn>

      <FadeIn>
      <section className="py-16">
        <Container>
          <SectionTitle>Quelques-uns de nos clients</SectionTitle>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allClients.map((client) => (
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
      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Notre engagement open source</SectionTitle>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
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
      </FadeIn>

      <FadeIn>
      <RelatedLinks links={referencesRelatedLinks} />
      </FadeIn>

      <FadeIn>
      <Testimonials />
      </FadeIn>
    </main>
    </>
  );
}

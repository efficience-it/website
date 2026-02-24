import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import JobCard from "@/components/cards/JobCard";
import { domains, getJobsByDomain, spontaneousEmail } from "@/../data/jobs";
import type { Metadata } from "next";

interface DomainPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: DomainPageProps): Promise<Metadata> {
  const { slug } = await params;
  const domain = domains.find((d) => d.slug === slug);
  if (!domain) return { title: "Domaine introuvable" };

  return pageMetadata({
    title: `${domain.name} | Carrières Efficience IT`,
    description: domain.description,
    path: `/domain/${slug}`,
    absoluteTitle: true,
  });
}

export default async function DomainPage({ params }: DomainPageProps) {
  const { slug } = await params;
  const domain = domains.find((d) => d.slug === slug);
  if (!domain) notFound();

  const domainJobs = getJobsByDomain(slug);

  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            {domain.name}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            {domain.description}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Offres en {domain.name.toLowerCase()}</SectionTitle>
          {domainJobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {domainJobs.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray">
              Aucune offre disponible dans ce domaine pour le moment.
            </p>
          )}
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container className="text-center">
          <SectionTitle>Candidature spontanée</SectionTitle>
          <p className="mx-auto max-w-2xl text-gray">
            Pas d&apos;offre correspondant à votre profil ? Envoyez-nous votre
            candidature spontanée.
          </p>
          <Button
            href={`mailto:${spontaneousEmail}`}
            variant="primary"
            className="mt-6"
          >
            Envoyer ma candidature
          </Button>
        </Container>
      </section>
    </main>
  );
}

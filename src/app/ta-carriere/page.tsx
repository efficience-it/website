import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import JobCard from "@/components/cards/JobCard";
import { jobs, spontaneousEmail } from "@/../data/jobs";

export const metadata = pageMetadata({
  title: "Ta carrière",
  description:
    "Rejoignez l'équipe Efficience IT ! Découvrez nos offres d'emploi et postulez en tant que développeur Symfony, chef de projet ou consultant.",
  path: "/ta-carriere",
});

export default function TaCarriere() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Rejoignez notre équipe
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Rejoignez notre équipe de talentueux développeurs et participez à
            des projets ambitieux dans un cadre bienveillant.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Offres d&apos;emploi</SectionTitle>
          {jobs.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {jobs.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray">
              Aucune offre disponible pour le moment.
            </p>
          )}
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container className="text-center">
          <SectionTitle>Candidature spontanée</SectionTitle>
          <p className="mx-auto max-w-2xl text-gray">
            N&apos;hésitez pas à faire une candidature spontanée si vous
            n&apos;avez pas encore trouvé votre poste idéal.
          </p>
          <Button
            href={`mailto:${spontaneousEmail}`}
            variant="primary"
            className="mt-6"
          >
            Envoyer ma candidature
          </Button>
          <p className="mt-4 text-sm text-gray">{spontaneousEmail}</p>
        </Container>
      </section>
    </main>
  );
}

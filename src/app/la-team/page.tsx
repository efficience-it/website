import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { teamMembers, teamValues } from "@/../data/team";

export const metadata = pageMetadata({
  title: "La team",
  description:
    "Rencontrez l'équipe Efficience IT : développeurs Symfony certifiés et chefs de projet passionnés.",
  path: "/la-team",
});

export default function LaTeam() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Une équipe passionnée
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Chefs de projets et développeurs Symfony certifiés pour la plupart,
            notre équipe à taille humaine est engagée et passionnée.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>L&apos;équipe</SectionTitle>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Nos valeurs</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2">
            {teamValues.map((v) => (
              <div key={v.title} className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-dark">
                  {v.title}
                </h3>
                <p className="mt-2 text-gray">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

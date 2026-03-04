import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { teamMembers, teamValues } from "@/../data/team";

export const metadata = pageMetadata({
  title: "L'équipe Efficience IT | Agence web et technique",
  description:
    "Découvrez l'équipe d'Efficience IT : développeurs, profils techniques et métiers engagés dans la réalisation de projets web et applicatifs.",
  path: "/la-team",
  absoluteTitle: true,
});

export default function LaTeam() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Une équipe passionnée
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                À taille humaine, notre équipe est à fond dans le digital et
                l&apos;agilité. Et avec le meilleur framework PHP, nous offrons
                une expertise pointue pour répondre à vos besoins.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/team-work.svg"
                alt="Travail d'équipe"
                width={400}
                height={300}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12 text-center">
            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Qui sommes-nous ?
              </h2>
              <p className="mt-4 text-gray">
                Créée en 2018, nous cherchons à apporter des solutions efficaces
                aux problématiques de nos clients.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Comment se compose l&apos;équipe ?
              </h2>
              <p className="mt-4 text-gray">
                Équipé de chefs de projets, et de développeurs Symfony (certifiés
                pour la plupart), Efficience IT vous propose un accompagnement sur
                mesure en toute agilité. La réactivité, et la communication sont
                les maîtres mots dans les équipes.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Une équipe d&apos;experts au service de vos performances
              </h2>
              <p className="mt-4 text-gray">
                Dotés d&apos;outils d&apos;analyse, Efficience IT réalise des
                outils projets répondant aux normes et standards du secteur.
                Membre de l&apos;AFUP, et grâce à une veille régulière, les
                équipes se tiennent informées et formées sur les dernières
                nouveautés Web.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                Une forte cohésion
              </h2>
              <p className="mt-4 text-gray">
                Chez Efficience IT, la cohésion est essentielle pour servir au
                mieux nos clients. Au-delà du code de conduite, nous suivons la
                charte de diversité, et suivons une parité entre 40 et 60 %. En
                mettant un point d&apos;honneur à être centré sur le
                collaborateur, le bien-être au travail est une valeur importante
                chez Efficience IT ! Pour animer le quotidien, l&apos;impitoyable
                chocoblast fait des victimes, mais bon, c&apos;est pour la bonne
                cause.
              </p>
            </div>
          </div>
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

      <section className="py-16">
        <Container>
          <SectionTitle>Cohésion d&apos;équipe</SectionTitle>
          <div className="grid gap-4 md:grid-cols-3">
            <Image
              src="/images/team/team-cohesion-1.jpg"
              alt="Cohésion d'équipe"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/images/team/team-cohesion-2.webp"
              alt="Séminaire d'équipe"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
            <Image
              src="/images/team/equipo.jpg"
              alt="L'équipe Efficience IT"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
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

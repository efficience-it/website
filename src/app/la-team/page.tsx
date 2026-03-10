import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CallToAction from "@/components/sections/CallToAction";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "L'équipe Efficience IT | Agence web et technique",
  description:
    "Découvrez l'équipe d'Efficience IT : développeurs, profils techniques et métiers engagés dans la réalisation de projets web et applicatifs.",
  path: "/la-team",
  absoluteTitle: true,
});

const breadcrumb = breadcrumbJsonLd([{ name: "La team", path: "/la-team" }]);

export default function LaTeam() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
    <main>
      {/* Hero */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                La team
              </p>
              <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                Une équipe passionnée
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                À taille humaine, notre équipe est à fond dans le digital et
                l&apos;agilité. Et avec le meilleur framework PHP, nous offrons
                une expertise pointue pour répondre à vos besoins.
              </p>
              <Button href="/contact" className="mt-8">
                Prenons contact !
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/team-work.svg"
                alt="Illustration agence web Symfony"
                width={400}
                height={300}
                className="w-full max-w-md"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Qui sommes-nous */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
              <Image
                src="/images/team/team-cohesion-1.jpg"
                alt="Séminaire avec l'équipe Efficience IT"
                width={500}
                height={375}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="md:order-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Qui sommes-nous ?
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-dark md:text-4xl">
                Découvrir l&apos;histoire de l&apos;agence
              </h2>
              <p className="mt-4 text-lg text-gray">
                Créée en 2018, nous cherchons à apporter des solutions efficaces
                aux problématiques de nos clients.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Comment se compose l'équipe */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
                Comment se compose l&apos;équipe ?
              </h2>
              <p className="mt-4 text-lg text-gray">
                Équipé de chefs de projets, et de développeurs Symfony (certifiés
                pour la plupart), Efficience IT vous propose un accompagnement sur
                mesure en toute agilité. La réactivité, et la communication sont
                les maîtres mots dans les équipes.
              </p>
              <Link
                href="/notre-expertise/"
                className="mt-4 inline-block font-semibold text-primary hover:underline"
              >
                Découvrir nos expertises →
              </Link>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/team/team-cohesion-2.webp"
                alt="L'équipe Efficience IT à l'AFUP Day"
                width={500}
                height={375}
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Experts */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex justify-center md:order-2">
              <Image
                src="/images/team/equipo.jpg"
                alt="Projet avec l'équipe Efficience IT"
                width={500}
                height={375}
                className="w-full rounded-lg object-cover"
              />
            </div>
            <div className="md:order-1">
              <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
                Une équipe d&apos;experts au service de vos performances
              </h2>
              <p className="mt-4 text-lg text-gray">
                Dotés d&apos;outils d&apos;analyse, Efficience IT réalise des
                outils projets répondant aux normes et standards du secteur.
              </p>
              <p className="mt-4 text-lg text-gray">
                Membre de l&apos;
                <a
                  href="https://afup.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline"
                >
                  AFUP
                </a>
                , et grâce à une veille régulière, les équipes se tiennent
                informées et formées sur les dernières nouveautés Web.
              </p>
              <Link
                href="/notre-expertise/"
                className="mt-4 inline-block font-semibold text-primary hover:underline"
              >
                Découvrir nos services →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Cohésion */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-dark md:text-4xl">
              Une forte cohésion
            </h2>
            <p className="mt-4 text-lg text-gray">
              Chez Efficience IT, la cohésion est essentielle pour servir au
              mieux nos clients. Au-delà du code de conduite, nous suivons la
              charte de diversité, et suivons une parité entre 40 et 60 %.
            </p>
            <p className="mt-4 text-lg text-gray">
              En mettant un point d&apos;honneur à être centré sur le
              collaborateur, le bien-être au travail est une valeur importante
              chez Efficience IT !
            </p>
            <p className="mt-4 text-lg text-gray">
              Pour animer le quotidien, l&apos;impitoyable{" "}
              <Link
                href="/blog/le-chocoblast-un-premier-pas-vers-la-securite-par-le-jeu/"
                className="font-semibold text-primary hover:underline"
              >
                chocoblast
              </Link>{" "}
              fait des victimes, mais bon, c&apos;est pour la bonne cause.
            </p>
          </div>
        </Container>
      </section>

      {/* Pour aller plus loin */}
      <section className="py-16">
        <Container>
          <h2 className="text-center font-display text-3xl font-bold text-dark">
            Pour aller plus loin
          </h2>
          <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
            <li>
              <Link href="/article/7-bonnes-raisons-de-rejoindre-efficience-it" className="text-primary hover:underline">
                7 bonnes raisons de rejoindre Efficience IT
              </Link>{" "}
             , pourquoi nous rejoindre
            </li>
            <li>
              <Link href="/article/le-chocoblast-un-premier-pas-vers-la-securite-par-le-jeu" className="text-primary hover:underline">
                Le chocoblast
              </Link>{" "}
             , un premier pas vers la sécurité par le jeu
            </li>
            <li>
              <a href="https://afup.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                AFUP
              </a>{" "}
             , Association Française des Utilisateurs de PHP
            </li>
            <li>
              <a href="https://symfony.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Symfony, site officiel
              </a>{" "}
             , le framework au cœur de notre expertise
            </li>
          </ul>
        </Container>
      </section>

      <CallToAction />
    </main>
    </>
  );
}

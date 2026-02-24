import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              À propos
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-dark md:text-4xl">
              Nous transformons vos idées en solutions digitales rentables.
            </h2>
            <p className="mt-6 text-lg text-gray">
              Chez Efficience IT, nous ne livrons pas simplement du code : nous
              construisons des solutions utiles, avec vous et pour vous. Notre
              objectif est simple : vous faire gagner du temps, maîtriser vos coûts
              et obtenir un outil fiable, pensé pour durer.
            </p>
            <Button href="/l-entreprise" variant="outline" className="mt-8">
              Découvrir l&apos;entreprise
            </Button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/team/team-photo.webp"
              alt="L'équipe Efficience IT"
              width={500}
              height={350}
              className="rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

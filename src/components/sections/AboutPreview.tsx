import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              À propos de nous
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-dark md:text-4xl">
              Nous transformons vos idées en solutions digitales rentables.
            </h2>
            <p className="mt-2 font-display text-xl font-semibold text-dark">
              Une équipe passionnée
            </p>
            <p className="mt-4 text-lg text-gray">
              Chez Efficience IT, nous ne livrons pas simplement du code : nous
              construisons des solutions utiles, avec vous et pour vous.
            </p>
            <p className="mt-4 text-lg text-gray">
              Notre objectif est simple : vous faire gagner du temps, maîtriser
              vos coûts et obtenir un outil fiable, pensé pour durer.
            </p>
            <p className="mt-4 text-lg text-gray">
              Écoute, clarté, engagement : vous pouvez compter sur un partenaire
              technique qui comprend vos enjeux et s&apos;investit à vos côtés.
              Découvrez{" "}
              <Link href="/pourquoi-efficience-it" className="text-primary hover:underline">
                pourquoi nous choisir
              </Link>{" "}
              plutôt qu&apos;un freelance, une ESN ou une agence généraliste.
            </p>
            <p className="mt-4 text-lg text-gray">
              Spécialisés sur{" "}
              <Link href="/developpement-php" className="text-primary hover:underline">
                PHP et Symfony
              </Link>
              , nous intervenons sur des sujets techniques exigeants :{" "}
              <Link href="/architecture-hexagonale-symfony" className="text-primary hover:underline">
                architecture hexagonale
              </Link>
              , migration de versions, mise en place de tests automatisés et intégration continue.
            </p>
            <p className="mt-4 text-lg text-gray">
              Nous intervenons partout en France, depuis notre{" "}
              <Link href="/agence-symfony-lille" className="text-primary hover:underline">
                agence Symfony à Lille
              </Link>
              , en remote ou sur site. Nos clients sont à{" "}
              <Link href="/agence-symfony-paris" className="text-primary hover:underline">
                Paris
              </Link>
              ,{" "}
              <Link href="/agence-symfony-lyon" className="text-primary hover:underline">
                Lyon
              </Link>
              ,{" "}
              <Link href="/agence-symfony-nantes" className="text-primary hover:underline">
                Nantes
              </Link>
              {" "}et dans toute la{" "}
              <Link href="/agence-symfony-france" className="text-primary hover:underline">
                France
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/notre-expertise" variant="outline">
                Expertise
              </Button>
              <Button href="/contact">
                Contact
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/team/team-photo.webp"
              alt="L'équipe Efficience IT"
              width={500}
              height={350}
              sizes="(max-width: 768px) 100vw, 380px"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

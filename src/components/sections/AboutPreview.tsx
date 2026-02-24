import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  return (
    <section className="bg-light-gray py-16 md:py-24">
      <Container className="text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
          À propos
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold text-dark md:text-4xl">
          Nous transformons vos idées en solutions digitales rentables.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
          Chez Efficience IT, nous ne livrons pas simplement du code : nous
          construisons des solutions utiles, avec vous et pour vous. Notre
          objectif est simple : vous faire gagner du temps, maîtriser vos coûts
          et obtenir un outil fiable, pensé pour durer. Écoute, clarté,
          engagement : vous pouvez compter sur un partenaire technique qui
          comprend vos enjeux et s&apos;investit à vos côtés.
        </p>
        <Button href="/l-entreprise" variant="outline" className="mt-8">
          Découvrir l&apos;entreprise
        </Button>
      </Container>
    </section>
  );
}

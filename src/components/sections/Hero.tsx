import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-light-gray py-20 md:py-32">
      <Container className="text-center">
        <h1 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
          Besoin d&apos;une Agence Symfony fiable ?
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray md:text-xl">
          À vos côtés, de la première idée jusqu&apos;à l&apos;application en
          main.
        </p>
        <p className="mt-4 text-gray">
          Vos objectifs, notre savoir-faire, des résultats mesurables.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/notre-expertise" size="lg">
            Nos services
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contactez-nous !
          </Button>
        </div>
      </Container>
    </section>
  );
}

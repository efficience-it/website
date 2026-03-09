import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-light-gray py-20 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              Besoin d&apos;une Agence Symfony fiable ?
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">
              À vos côtés, de la première idée jusqu&apos;à l&apos;application en
              main.
            </p>
            <p className="mt-4 text-gray">
              Vos objectifs, notre savoir-faire, des résultats mesurables.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/notre-expertise" size="lg">
                Nos services
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contactez-nous !
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/illustrations/source-code.svg"
              alt="Développement web"
              width={500}
              height={400}
              className="w-full max-w-md"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

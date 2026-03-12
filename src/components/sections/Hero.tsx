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
              Agence Symfony à Lille, experte en développement web
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">
              Votre application Symfony mérite mieux. On la stabilise, la
              migre et la rend maintenable.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/audit-symfony-gratuit" size="lg">
                Demander mon audit gratuit
              </Button>
              <Button href="/notre-expertise" variant="outline" size="lg">
                Nos services
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
              fetchPriority="high"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

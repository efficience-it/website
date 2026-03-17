import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RotatingKeywords from "@/components/ui/RotatingKeywords";

const keywords = [
  "Migration",
  "Performance",
  "Maintenance",
  "Architecture",
  "API",
  "Sécurité",
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-light-gray via-white to-primary/5 py-20 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-display text-4xl font-bold text-dark md:text-5xl lg:text-6xl">
              Agence PHP et Symfony, experte en développement web
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray md:text-xl">
              Votre application Symfony mérite mieux. On la stabilise, la
              migre et la rend maintenable.
            </p>
            <div className="mt-4 flex items-center gap-2 text-lg font-medium text-dark">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              <RotatingKeywords keywords={keywords} />
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/audit-symfony-gratuit" size="lg">
                Demander mon audit gratuit
              </Button>
              <Button href="/notre-expertise" variant="outline" size="lg">
                Nos services
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
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

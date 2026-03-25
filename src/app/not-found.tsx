import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page introuvable | Efficience IT",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center py-16">
      <Container className="flex flex-col items-center text-center">
        <Image
          src="/images/404-robot.svg"
          alt="Page 404 Efficience IT"
          width={400}
          height={400}
          className="mb-8"
        />
        <h1 className="font-display text-4xl font-bold text-primary">
          Page non trouvée
        </h1>
        <p className="mt-4 text-lg text-gray">
          Mayday, mayday !
          <br />
          Nous avons un 404, je répète nous avons un 404 !
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/notre-expertise" variant="outline">
            Nos expertises
          </Button>
          <Button href="/">Accueil</Button>
        </div>
      </Container>
    </main>
  );
}

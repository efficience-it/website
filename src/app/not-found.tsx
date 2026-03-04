import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page introuvable | Efficience IT",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center">
      <Container className="text-center">
        <h1 className="font-display text-6xl font-bold text-primary">404</h1>
        <p className="mt-4 text-xl text-dark">Page introuvable</p>
        <p className="mt-2 text-gray">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Button href="/" className="mt-8">
          Retour à l&apos;accueil
        </Button>
      </Container>
    </main>
  );
}

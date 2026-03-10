"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-[60vh] items-center py-16">
      <Container className="flex flex-col items-center text-center">
        <h2 className="font-display text-4xl font-bold text-primary">
          Oups, quelque chose a mal tourné
        </h2>
        <p className="mt-4 text-lg text-gray">
          Une erreur inattendue s&apos;est produite.
          <br />
          Pas de panique, notre équipe est sur le coup !
        </p>
        <div className="mt-8 flex gap-4">
          <Button variant="outline" onClick={reset}>
            Réessayer
          </Button>
          <Button href="/">Accueil</Button>
        </div>
      </Container>
    </main>
  );
}

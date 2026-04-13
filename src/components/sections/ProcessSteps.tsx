import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessStep from "@/components/cards/ProcessStep";

const steps = [
  {
    title: "Cadrage du projet",
    description:
      "L'objectif est de définir l'ouvrage à mettre en œuvre, c'est une étape clé, réalisée avant le projet. Nous y rappelons le contexte, l'enjeu et les objectifs.",
  },
  {
    title: "Planification de la feuille de route",
    description:
      "Nous plaçons les objectifs et les principaux livrables d'un projet (tâches, jalons) sur une chronologie.",
  },
  {
    title: "Exécution du développement",
    description:
      "Une fois les tâches estimées et priorisées, l'équipe met à jour l'outil de suivi de projet. Les tests sont effectués au fur et à mesure et le projet est déployé sur un serveur de recette.",
  },
  {
    title: "Lancement et mise à l'échelle",
    description:
      "Le projet final est installé, et nous ajoutons des outils de supervision, et de scalabilité pour assumer les montées en charge.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle>Notre fonctionnement</SectionTitle>
        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-gray md:text-lg">
          Basé sur le Lean Startup, l&apos;amélioration continue, le suivi se
          fait en méthode agile et en totale transparence sur les avancées de
          votre projet.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg font-semibold text-dark">
          Un processus simple, robuste et efficace
        </p>
        <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-4xl text-center text-base leading-relaxed text-gray md:text-lg">
          <p>
            Cette méthodologie nous permet de livrer des{" "}
            <Link href="/developpement-web-sur-mesure" className="text-primary hover:underline">
              applications web sur mesure
            </Link>
            {" "}de qualité, dans les délais, avec une visibilité constante sur l&apos;avancement. Chaque livraison est testée, documentée et déployée via notre pipeline{" "}
            <Link href="/cloud-et-devops" className="text-primary hover:underline">
              CI/CD
            </Link>
            . Découvrez en détail{" "}
            <Link href="/processus-collaboration" className="text-primary hover:underline">
              notre processus de collaboration
            </Link>
            , étape par étape.
          </p>
        </div>
      </Container>
    </section>
  );
}

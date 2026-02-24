import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProcessStep from "@/components/cards/ProcessStep";

const steps = [
  {
    title: "Cadrage du projet",
    description:
      "L'objectif est de définir l'ouvrage à mettre en œuvre, c'est une étape clé, réalisée avant le projet.",
  },
  {
    title: "Planification de la feuille de route",
    description:
      "Nous plaçons les objectifs et les principaux livrables d'un projet (tâches, jalons) sur une chronologie.",
  },
  {
    title: "Exécution du développement",
    description:
      "Une fois les tâches estimées et priorisées, l'équipe met à jour l'outil de suivi de projet. Les tests sont effectués au fur et à mesure.",
  },
  {
    title: "Lancement et mise à l'échelle",
    description:
      "Le projet final est installé, et nous ajoutons des outils de supervision et de scalabilité pour assumer les montées en charge.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Une méthode éprouvée">
          Notre processus
        </SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.title}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

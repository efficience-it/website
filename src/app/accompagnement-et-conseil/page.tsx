import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = pageMetadata({
  title: "Accompagnement et Conseil",
  description:
    "Gestion de projet agile, conseil en transformation digitale, audits IT et formation Symfony. Efficience IT vous accompagne.",
  path: "/accompagnement-et-conseil",
});

const challenges = [
  "Optimisation des processus internes",
  "Sécurisation des données et conformité RGPD",
  "Transition numérique et agilité",
  "Performance des applications",
  "Formation et montée en compétences",
];

const services = [
  {
    title: "Gestion de projet agile",
    description:
      "Adaptabilité, communication et rapidité permettent de répondre aux exigences du marché avec un rythme de livraison régulier.",
  },
  {
    title: "Conseil en transformation digitale",
    description:
      "Nous vous guidons dans votre transition numérique avec une stratégie basée sur l'efficacité et la performance.",
  },
  {
    title: "Audits IT",
    description:
      "Audits de sécurité, audits globaux et audits de projet pour identifier les axes d'amélioration de vos outils.",
  },
  {
    title: "Formation Symfony et méthodes agiles",
    description:
      "Montée en compétences de vos équipes sur les technologies et méthodes que nous maîtrisons.",
  },
];

const advantages = [
  "Approche orientée business",
  "Expertise Symfony, JavaScript, cloud computing",
  "Conformité aux meilleures pratiques",
  "Accompagnement personnalisé",
];

export default function AccompagnementEtConseil() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Accompagnement et Conseil
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Chaque projet mérite un accompagnement personnalisé. Notre expertise
            couvre l&apos;agilité et la transformation numérique, proposant des
            solutions adaptées à vos besoins spécifiques.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Vos défis</SectionTitle>
          <div className="mx-auto max-w-2xl">
            <ul className="space-y-3">
              {challenges.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray">
                  <span className="text-primary">&#10003;</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Services proposés</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => (
              <Card key={s.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray">{s.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Nos avantages</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div
                key={a}
                className="rounded-lg border border-border p-4 text-center font-medium text-dark"
              >
                {a}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

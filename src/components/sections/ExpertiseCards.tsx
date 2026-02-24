import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const expertises = [
  {
    title: "Développement Web Sur-Mesure",
    description:
      "Chaque organisation a ses propres défis, c'est pourquoi nous développons des solutions qui répondent à vos usages, s'intègrent à vos outils existants, et évoluent avec vos besoins.",
    href: "/developpement-web-sur-mesure",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Des infrastructures fiables, des déploiements fluides, et moins de stress au quotidien. Environnements cloud performants, déploiements automatisés, migrations sans rupture.",
    href: "/cloud-et-devops",
  },
  {
    title: "Accompagnement et Conseil",
    description:
      "Un regard extérieur, des méthodes solides, et un vrai partenaire pour avancer dans la bonne direction. Gestion de projet agile, conseil en transformation digitale, audits IT.",
    href: "/accompagnement-et-conseil",
  },
];

export default function ExpertiseCards() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Ce que nous faisons de mieux">
          Nos expertises
        </SectionTitle>
        <div className="grid gap-8 md:grid-cols-3">
          {expertises.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-xl font-bold text-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-gray">{item.description}</p>
              <Button href={item.href} variant="ghost" size="sm" className="mt-4">
                En savoir plus &rarr;
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

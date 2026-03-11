import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const expertises = [
  {
    title: "Développement Web Sur-Mesure",
    intro:
      "Chaque organisation a ses propres défis, c'est pourquoi nous développons des solutions qui :",
    items: [
      "répondent à vos usages",
      "s'intègrent à vos outils existants",
      "évoluent avec vos besoins",
    ],
    outro:
      "De la plateforme e-commerce au CRM métier, nous bâtissons du code utile, durable et centré sur vos objectifs.",
    href: "/developpement-web-sur-mesure",
    cta: "Découvrir notre expertise développement web",
  },
  {
    title: "Cloud & DevOps",
    intro:
      "Des infrastructures fiables, des déploiements fluides, et moins de stress au quotidien.",
    items: [
      "Environnements cloud performants",
      "Déploiements automatisés",
      "Migrations sans rupture",
      "Supervision continue",
      "Accompagnement DevOps",
    ],
    href: "/cloud-et-devops",
    cta: "Découvrir notre offre Cloud & DevOps",
  },
  {
    title: "Accompagnement et Conseil",
    intro:
      "Un regard extérieur, des méthodes solides, et un vrai partenaire pour avancer dans la bonne direction.",
    items: [
      "Gestion de projet agile, adaptée à vos contraintes",
      "Conseil en transformation digitale, avec une approche pragmatique",
      "Audits IT pour identifier les freins, sécuriser et optimiser",
    ],
    href: "/accompagnement-et-conseil",
    cta: "Découvrir notre accompagnement et conseil",
  },
];

export default function ExpertiseCards() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle subtitle="Ce que nous faisons de mieux">
          Nos expertises
        </SectionTitle>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((item) => (
            <Card key={item.title}>
              <h3 className="font-display text-xl font-bold text-dark">
                {item.title}
              </h3>
              <p className="mt-3 text-gray">{item.intro}</p>
              {item.items && (
                <ul className="mt-3 space-y-1">
                  {item.items.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray">
                      <span className="mt-0.5 text-primary">–</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {"outro" in item && item.outro && (
                <p className="mt-3 text-gray">{item.outro}</p>
              )}
              <Button href={item.href} variant="ghost" size="sm" className="mt-4">
                {item.cta} &rarr;
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

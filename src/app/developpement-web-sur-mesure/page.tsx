import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";

export const metadata = pageMetadata({
  title: "Développement web sur mesure",
  description:
    "Solutions IT sur mesure pour les PME et grandes entreprises : Symfony, e-commerce Sylius, CRM, ERP, API REST.",
  path: "/developpement-web-sur-mesure",
});

const offerings = [
  {
    title: "Applications web sur mesure",
    description:
      "Nous concevons et développons des applications digitales adaptées à vos besoins : progiciel, CRM, ERP, CMS, sites complexes et dynamiques.",
  },
  {
    title: "E-commerce avec Sylius",
    description:
      "Création de sites e-commerce performants : design responsive, paiements sécurisés et gestion optimisée pour transformer vos visiteurs en clients fidèles.",
  },
  {
    title: "Marketplace",
    description:
      "Développement de plateformes multivendeurs robustes et évolutives, de la conception technique à la gestion complète.",
  },
  {
    title: "CRM & ERP",
    description:
      "Centraliser vos données clients, automatiser les tâches répétitives. Solutions modulables pour gérer stocks, RH et ventes.",
  },
  {
    title: "API REST & SOAP",
    description:
      "Faciliter l'échange de données entre vos différents systèmes. Interfaces robustes, sécurisées et bien documentées avec API Platform.",
  },
  {
    title: "Migrations techniques",
    description:
      "Accompagnement dans les évolutions de version Symfony, migration de plateformes et transfert de données sécurisé sans interruption de service.",
  },
];

const advantages = [
  { title: "Approche sur mesure", description: "Chaque solution est adaptée à vos process et objectifs." },
  { title: "Expertise reconnue", description: "Certifiés Symfony, nous maîtrisons les meilleures pratiques du web." },
  { title: "Accompagnement global", description: "Du cadrage au déploiement, nous restons à vos côtés." },
  { title: "Engagement qualité", description: "Sécurité, évolutivité et performances garanties." },
];

export default function DeveloppementWeb() {
  return (
    <main>
      <section className="bg-light-gray py-16 md:py-24">
        <Container className="text-center">
          <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
            Développement web sur mesure
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray">
            Solutions IT sur mesure pour les PME et grandes entreprises. Vos
            défis, nos solutions personnalisées.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle>Nos expertises IT à votre service</SectionTitle>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((item) => (
              <Card key={item.title}>
                <h3 className="font-display text-lg font-bold text-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light-gray py-16">
        <Container>
          <SectionTitle>Pourquoi nous choisir ?</SectionTitle>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <div key={adv.title} className="text-center">
                <h3 className="font-display font-bold text-dark">{adv.title}</h3>
                <p className="mt-2 text-sm text-gray">{adv.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
  );
}

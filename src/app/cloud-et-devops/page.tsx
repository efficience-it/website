import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Cloud & DevOps | Expertise technique – Efficience IT",
  description:
    "Expertise Cloud et DevOps : Efficience IT accompagne la mise en place d'infrastructures, d'automatisation et de pratiques DevOps adaptées aux projets web.",
  path: "/cloud-et-devops",
  absoluteTitle: true,
});

const platforms = [
  { name: "AWS", logo: "/images/expertise/cloud/aws.webp" },
  { name: "Azure", logo: "/images/expertise/cloud/azure.webp" },
  { name: "Google Cloud", logo: "/images/expertise/cloud/google-cloud.webp" },
  { name: "OVH", logo: "/images/expertise/cloud/ovhcloud.webp" },
  { name: "HDS", logo: "/images/expertise/cloud/hds.webp" },
];

const migrationSteps = [
  {
    step: "1",
    title: "Évaluation de l'infrastructure",
    description:
      "Analyse complète de vos applications, API, données et fichiers pour définir une stratégie de migration personnalisée.",
  },
  {
    step: "2",
    title: "Planification détaillée",
    description:
      "Élaboration d'une roadmap claire et structurée, avec l'appui de nos chefs de projet et DevOps.",
  },
  {
    step: "3",
    title: "Exécution de la migration",
    description:
      "Procédure de migration garantissant l'intégrité et la sécurité des données.",
  },
  {
    step: "4",
    title: "Validation et optimisation",
    description:
      "Tests approfondis pour optimiser vos performances et garantir un environnement Cloud performant.",
  },
  {
    step: "5",
    title: "Support continu",
    description:
      "Une surveillance proactive et des ajustements pour garantir le succès de votre transition vers le Cloud.",
  },
];

const breadcrumb = breadcrumbJsonLd([
  { name: "Nos expertises", path: "/notre-expertise" },
  { name: "Cloud & DevOps", path: "/cloud-et-devops" },
]);

export default function CloudEtDevops() {
  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
    <main>
      {/* Hero */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                Cloud & DevOps
              </h1>
              <p className="mt-6 max-w-3xl text-lg text-gray">
                Chez Efficience IT, nous accompagnons les PME et grandes
                entreprises dans la modernisation et l&apos;optimisation de
                leurs infrastructures IT.
              </p>
              <p className="mt-4 max-w-3xl text-lg text-gray">
                Nos solutions flexibles et innovantes répondent aux défis
                majeurs de scalabilité, de sécurité et de performance, tout en
                vous aidant à maximiser vos ressources et à réduire vos coûts.
              </p>
              <p className="mt-6 text-lg font-semibold text-dark">
                Un projet à déployer ?
              </p>
              <Button href="/contact" className="mt-4">
                Contactez-nous
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/illustrations/online-report.svg"
                alt="Cloud et DevOps"
                width={400}
                height={300}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Hébergement Cloud */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>
            Hébergement Cloud : une infrastructure à la hauteur de vos ambitions
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Adoptez une solution d&apos;hébergement Cloud et évolutive,
            parfaitement adaptée à vos besoins.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Flexibilité et scalabilité à la demande
              </h3>
              <p className="mt-2 text-gray">
                Une infrastructure Cloud qui s&apos;ajuste en temps réel selon
                la croissance de votre entreprise ou les pics de trafic, pour
                garantir une performance constante.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Performance optimale et sécurité renforcée
              </h3>
              <p className="mt-2 text-gray">
                Profitez de serveurs puissants offrant des temps de chargement
                rapides et une expérience utilisateur fluide. Vos données sont
                protégées grâce au chiffrement, à des pare-feu avancés et à des
                sauvegardes automatiques.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Simplicité de gestion et accessibilité
              </h3>
              <p className="mt-2 text-gray">
                Surveillez vos ressources, ajustez vos configurations et accédez
                à votre environnement Cloud de n&apos;importe où grâce à une
                interface intuitive, idéale pour le travail collaboratif et à
                distance.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Support technique et intégration facile
              </h3>
              <p className="mt-2 text-gray">
                Une équipe d&apos;experts disponible pour résoudre vos problèmes
                techniques rapidement, vous permettant de rester concentré sur
                votre activité principale.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Automatisation DevOps */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>
            Automatisation DevOps : boostez votre agilité et productivité
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Optimisez vos processus de développement et réduisez vos délais de
            mise en production grâce à nos pratiques d&apos;automatisation
            DevOps.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Accélération des cycles de développement
              </h3>
              <p className="mt-2 text-gray">
                Grâce aux outils <strong>CI/CD</strong> (GitLab, Bitbucket, CircleCI, etc.), vos
                projets passent de l&apos;idée à la production plus rapidement,
                améliorant ainsi votre réactivité face aux besoins du marché.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Test et qualité applicative
              </h3>
              <p className="mt-2 text-gray">
                Garantissez un code fiable et performant avec des tests
                unitaires, fonctionnels et de sécurité réguliers pour des
                déploiements sans risques.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Optimisation des ressources
              </h3>
              <p className="mt-2 text-gray">
                Libérez vos équipes des tâches répétitives pour leur permettre
                de se concentrer sur des missions à forte valeur ajoutée.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Visibilité et traçabilité
              </h3>
              <p className="mt-2 text-gray">
                Suivez vos projets en temps réel grâce à des outils de
                monitoring et de reporting performants, garantissant une
                transparence totale.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Migration d'infrastructure */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>
            Migration d&apos;infrastructure : une transition Cloud maîtrisée
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
            Facilitez votre passage vers le Cloud avec l&apos;accompagnement de
            nos experts. Nous vous aidons à choisir le fournisseur le mieux
            adapté (AWS, Azure, Google Cloud, OVH, etc.) et à planifier une
            migration fluide et sécurisée.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {migrationSteps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {s.step}
                </div>
                <h3 className="mt-4 font-display text-sm font-bold text-dark">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-gray">{s.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Plateformes */}
      <section className="bg-light-gray py-16 md:py-24">
        <Container>
          <SectionTitle>Plateformes supportées</SectionTitle>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {platforms.map((p) => (
              <div
                key={p.name}
                className="flex w-36 flex-col items-center gap-3 rounded-lg bg-white p-5 shadow-md transition-shadow duration-200 hover:shadow-lg"
              >
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain"
                />
                <span className="font-display text-sm font-bold text-dark">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pourquoi choisir Efficience IT */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionTitle>Pourquoi choisir Efficience IT ?</SectionTitle>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Expertise reconnue
              </h3>
              <p className="mt-2 text-gray">
                Une expertise éprouvée en solutions IT sur mesure pour répondre
                aux enjeux spécifiques de votre secteur.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Approche client
              </h3>
              <p className="mt-2 text-gray">
                Une démarche centrée sur vos besoins pour des solutions
                parfaitement adaptées à votre contexte et à vos objectifs.
              </p>
            </Card>
            <Card>
              <h3 className="font-display text-lg font-bold text-dark">
                Technologies modernes
              </h3>
              <p className="mt-2 text-gray">
                Des technologies performantes et éprouvées pour booster votre
                compétitivité et accompagner votre croissance durablement.
              </p>
            </Card>
          </div>
          <div className="mt-10 text-center">
            <p className="mx-auto max-w-3xl text-lg text-gray">
              Vous souhaitez moderniser votre infrastructure ou déployer une
              solution Cloud adaptée à vos besoins ?
            </p>
            <Button href="/contact" className="mt-6">
              Contactez-nous dès aujourd&apos;hui
            </Button>
          </div>
        </Container>
      </section>

      <CallToAction />
    </main>
    </>
  );
}

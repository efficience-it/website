import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import AuditForm from "@/components/sections/AuditForm";
import { breadcrumbJsonLd, howToJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Audit Symfony gratuit 30 min",
  description:
    "Bénéficiez d'un audit technique Symfony gratuit de 30 minutes : architecture, dette technique, sécurité, performance et stratégie de migration. Sans engagement.",
  path: "/audit-symfony-gratuit",
});

const auditTopics = [
  {
    title: "Architecture",
    description:
      "Qualité de l'architecture applicative : couplage, séparation des couches, respect des bonnes pratiques Symfony.",
  },
  {
    title: "Dette technique",
    description:
      "État de la dette technique visible : analyse PHPStan, couverture de tests, complexité du code.",
  },
  {
    title: "Sécurité",
    description:
      "Identification des risques de sécurité évidents : dépendances obsolètes, failles connues, configuration.",
  },
  {
    title: "Performance",
    description:
      "Points de contention identifiables : requêtes lentes, cache, gestion des assets et temps de réponse.",
  },
  {
    title: "Migration",
    description:
      "Stratégie de montée de version si votre application est en Symfony 3, 4 ou 5 : roadmap et priorisation.",
  },
];

const breadcrumb = breadcrumbJsonLd([
  { name: "Audit Symfony gratuit", path: "/audit-symfony-gratuit" },
]);

const howTo = howToJsonLd(
  "Obtenir un audit Symfony gratuit",
  "Comment obtenir un audit technique gratuit de 30 minutes pour votre application Symfony.",
  [
    {
      name: "Remplir le formulaire",
      text: "Renseignez quelques informations sur votre projet Symfony (version, taille de l'équipe, problème principal) via le formulaire en ligne.",
    },
    {
      name: "Appel visio de 30 minutes",
      text: "Un expert Symfony analyse votre application avec vous en visioconférence. Partagez un accès en lecture au repo si possible.",
    },
    {
      name: "Compte-rendu sous 48h",
      text: "Recevez une synthèse écrite avec les constats et recommandations d'amélioration, sans engagement.",
    },
  ],
);

export default function AuditSymfonyGratuit() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Gratuit et sans engagement
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Audit Symfony gratuit 30 min
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony a plus de 3 ans ? Vous accumulez de
                  la dette technique sans savoir par où commencer ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Nous vous proposons un{" "}
                  <strong>audit technique gratuit de 30 minutes</strong> pour
                  identifier les points critiques de votre application et vous
                  donner des pistes d&apos;amélioration concrètes.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un appel visio de 30 min, un compte-rendu écrit sous 48h.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/illustrations/online-report.svg"
                  alt="Audit Symfony gratuit"
                  width={400}
                  height={300}
                  className="w-full max-w-md"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que couvre l&apos;audit</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              En 30 minutes, nous passons en revue les points essentiels de
              votre application Symfony pour vous donner une vision claire de
              son état technique.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {auditTopics.map((topic) => (
                <Card key={topic.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {topic.title}
                  </h3>
                  <p className="mt-2 text-gray">{topic.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Résultats concrets</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Quelques exemples de résultats obtenus lors de nos audits Symfony
              auprès de clients aux profils variés.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  -40%
                </p>
                <p className="mt-2 text-gray">
                  Réduction de 40% du temps de chargement après optimisation des
                  requêtes Doctrine
                </p>
              </Card>
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  12 failles
                </p>
                <p className="mt-2 text-gray">
                  Détection de 12 failles de sécurité critiques sur une
                  application e-commerce
                </p>
              </Card>
              <Card>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-display text-3xl font-bold text-primary">
                  3 sprints
                </p>
                <p className="mt-2 text-gray">
                  Migration de Symfony 4.4 à 6.4 planifiée et exécutée en 3
                  sprints
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que nos clients en disent</SectionTitle>
            <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
              <Card>
                <blockquote className="text-lg italic text-gray">
                  &laquo;&nbsp;L&apos;audit nous a permis d&apos;identifier des
                  problèmes de performance que nous n&apos;avions pas détectés.
                  En 30 minutes, nous avions une feuille de route
                  claire.&nbsp;&raquo;
                </blockquote>
                <p className="mt-4 font-semibold text-dark">
                  CTO, PME e-commerce
                </p>
              </Card>
              <Card>
                <blockquote className="text-lg italic text-gray">
                  &laquo;&nbsp;Pragmatique et sans jargon. L&apos;équipe a su
                  vulgariser les enjeux techniques pour notre
                  direction.&nbsp;&raquo;
                </blockquote>
                <p className="mt-4 font-semibold text-dark">
                  Responsable projet, groupe industriel
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Comment ça se passe</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Vous remplissez le formulaire
                </h3>
                <p className="mt-2 text-gray">
                  Quelques informations sur votre projet pour que nous puissions
                  préparer l&apos;audit en amont.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Appel visio de 30 min
                </h3>
                <p className="mt-2 text-gray">
                  Nous analysons ensemble votre application. Si vous pouvez
                  partager un accès en lecture au repo, c&apos;est encore mieux.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Compte-rendu sous 48h
                </h3>
                <p className="mt-2 text-gray">
                  Vous recevez une synthèse écrite avec nos constats et
                  recommandations. Sans engagement. Pour en savoir plus sur{" "}
                  <Link href="/article/comment-se-passe-un-audit-chez-efficience-it-quel-contenu-comment-procede-t-on-quels-sont-les-criteres-quel-procede" className="text-primary hover:underline">
                    notre méthodologie d&apos;audit
                  </Link>
                  , consultez notre article dédié.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section id="formulaire" className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-2xl">
              <SectionTitle>Demander votre audit gratuit</SectionTitle>
              <p className="mx-auto mt-4 mb-10 max-w-xl text-center text-gray">
                Remplissez ce formulaire et nous vous recontacterons pour
                planifier votre créneau.
              </p>
              <AuditForm />
              <p className="mt-8 text-center text-gray">
                Vous n&apos;êtes pas sûr que l&apos;audit soit adapté à votre
                situation ?{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:underline"
                >
                  Contactez-nous pour en discuter
                </Link>
                , sans engagement.
              </p>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                  className="text-primary hover:underline"
                >
                  Pourquoi choisir Symfony pour vos projets
                </Link>{" "}
                , comprendre les atouts du framework
              </li>
              <li>
                <Link
                  href="/accompagnement-et-conseil"
                  className="text-primary hover:underline"
                >
                  Accompagnement et Conseil
                </Link>{" "}
                , nos prestations de conseil et formation
              </li>
              <li>
                <a
                  href="https://symfony.com/doc/current/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Symfony, documentation officielle
                </a>{" "}
                , référence technique du framework
              </li>
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}

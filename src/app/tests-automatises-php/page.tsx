import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd, pageGraphJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Tests automatisés PHP et Symfony : sécurisez chaque livraison",
  description:
    "Stratégie de tests automatisés PHP et Symfony : tests unitaires, intégration, fonctionnels et e2e avec PHPUnit, Behat et Cypress. CI/CD inclus.",
  path: "/tests-automatises-php",
});

const typesDeTests = [
  {
    title: "Tests unitaires",
    description:
      "Vérification isolée de chaque classe et méthode. Ils s'exécutent en quelques secondes et garantissent que la logique métier fonctionne indépendamment du reste de l'application.",
  },
  {
    title: "Tests d'intégration",
    description:
      "Validation de l'interaction entre plusieurs composants : services Symfony, repositories Doctrine, file de messages. Ils détectent les problèmes de configuration et de câblage.",
  },
  {
    title: "Tests fonctionnels",
    description:
      "Simulation de requêtes HTTP complètes à travers le Kernel Symfony. Ils vérifient que vos controllers, middlewares et réponses fonctionnent correctement de bout en bout.",
  },
  {
    title: "Tests end-to-end (e2e)",
    description:
      "Exécution dans un navigateur réel pour valider les parcours utilisateur critiques : inscription, paiement, tableau de bord. Ils reproduisent le comportement exact de vos utilisateurs.",
  },
];

const outils = [
  {
    title: "PHPUnit",
    description:
      "Le framework de référence pour les tests unitaires et d'intégration PHP. Nous l'utilisons pour couvrir la logique métier, les services Symfony et les repositories Doctrine.",
  },
  {
    title: "Behat",
    description:
      "Framework BDD (Behavior-Driven Development) qui permet d'écrire des scénarios de test en langage naturel. Idéal pour impliquer les équipes métier dans la définition des comportements attendus.",
  },
  {
    title: "Cypress",
    description:
      "Outil de test e2e moderne qui pilote un vrai navigateur. Nous l'utilisons pour valider les parcours utilisateur critiques et détecter les régressions visuelles.",
  },
  {
    title: "PHPStan",
    description:
      "Analyse statique du code PHP qui détecte les erreurs avant même l'exécution. Combiné aux tests, il constitue un filet de sécurité supplémentaire contre les bugs en production.",
  },
];

const faqItems = [
  {
    title: "Par où commencer quand un projet PHP n'a aucun test ?",
    content:
      "Nous commençons toujours par un audit de la base de code pour identifier les zones les plus critiques. Ensuite, nous mettons en place PHPUnit et écrivons les premiers tests sur la logique métier la plus sensible. L'objectif est d'obtenir un filet de sécurité minimal en quelques jours, puis d'augmenter progressivement la couverture.",
  },
  {
    title: "Quelle couverture de tests viser ?",
    content:
      "Viser 100 % de couverture est rarement pertinent. Nous recommandons de cibler 80 % sur la logique métier et les services critiques, tout en acceptant une couverture plus faible sur le code d'infrastructure. L'important est de couvrir ce qui casse le plus souvent et ce qui a le plus de valeur métier.",
  },
  {
    title: "Les tests ralentissent-ils le développement ?",
    content:
      "À court terme, écrire des tests prend du temps. Mais dès le premier mois, le gain est net : moins de bugs en production, moins de régressions, des refactorings sereins. Sur un projet de 6 mois ou plus, les tests font gagner du temps plutôt qu'en perdre.",
  },
  {
    title: "Comment intégrer les tests dans un pipeline CI/CD existant ?",
    content:
      "Nous configurons votre pipeline GitLab CI, GitHub Actions ou Jenkins pour exécuter automatiquement la suite de tests à chaque push. Les tests unitaires tournent en premier (rapides), suivis des tests d'intégration et fonctionnels. Le déploiement est bloqué si un test échoue.",
  },
  {
    title: "Faut-il utiliser PHPUnit ou Behat ?",
    content:
      "Les deux sont complémentaires. PHPUnit est incontournable pour les tests unitaires et d'intégration. Behat est pertinent quand vous avez besoin d'impliquer des profils non techniques dans la définition des comportements attendus. Nous recommandons PHPUnit comme socle, avec Behat en complément sur les parcours métier complexes.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.content,
    },
  })),
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Modernisation applicative", path: "/modernisation-applicative" },
  { name: "Tests automatisés PHP", path: "/tests-automatises-php" },
]);

const service = serviceJsonLd({
  name: "Tests automatisés PHP et Symfony",
  description:
    "Mise en place de stratégies de tests automatisés pour applications PHP et Symfony : tests unitaires, intégration, fonctionnels et e2e, avec intégration CI/CD pour sécuriser chaque livraison.",
  path: "/tests-automatises-php",
  mainTech: ["php","symfony"],
});

const webPage = webPageJsonLd({
  name: "Tests automatisés PHP et Symfony : sécurisez chaque livraison",
  description:
    "Stratégie de tests automatisés PHP et Symfony : tests unitaires, intégration, fonctionnels et e2e avec PHPUnit, Behat et Cypress. CI/CD inclus.",
  path: "/tests-automatises-php",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

const testsRelatedLinks: RelatedLink[] = [
  { title: "Modernisation applicative", description: "sécuriser le refactoring dans un parcours de modernisation", href: "/modernisation-applicative" },
  { title: "Audit Symfony gratuit", description: "30 minutes pour évaluer l'état de votre application", href: "/audit-symfony-gratuit" },
  { title: "Comment PHPStan peut vous aider à améliorer la qualité de votre code PHP", description: "analyse statique pour compléter vos tests", href: "/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php" },
  { title: "Exécuter des tests Postman avec Newman dans GitLab CI", description: "automatiser les tests d'API dans votre pipeline", href: "/article/comment-executer-des-tests-postman-avec-newman-dans-gitlab-ci" },
  { title: "Conventions de code", description: "un socle indispensable pour des tests maintenables", href: "/article/coding-conventions" },
  { title: "Documentation officielle PHPUnit", description: "référence pour la configuration et l'écriture de tests", href: "https://docs.phpunit.de/", external: true },
];

export default function TestsAutomatisesPhp() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageGraphJsonLd(breadcrumb, service, faqJsonLd, webPage)) }} />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <Breadcrumb items={[{ label: "Modernisation applicative", href: "/modernisation-applicative" }, { label: "Tests automatisés PHP" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Qualité logicielle
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Tests automatisés PHP et Symfony : sécurisez chaque livraison
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Chaque mise en production vous stresse ? Les régressions
                  s&apos;accumulent sprint après sprint ? Vos développeurs
                  n&apos;osent plus toucher au code existant ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT met en place une stratégie de{" "}
                  <strong>tests automatisés</strong> adaptée à votre projet PHP
                  et Symfony. Tests unitaires, d&apos;intégration, fonctionnels
                  et e2e : nous construisons le filet de sécurité qui vous
                  permet de livrer en confiance, à chaque fois.
                </p>
                <p className="mt-6 text-lg font-semibold text-dark">
                  Un premier audit de 30 minutes, gratuit et sans engagement.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Demander un audit gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
                  </Button>
                </div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="flex h-64 w-64 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-32 w-32 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Les quatre niveaux de tests</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une stratégie de tests efficace combine plusieurs niveaux
              complémentaires. Chacun joue un rôle précis dans la détection des
              anomalies, du plus rapide au plus réaliste.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {typesDeTests.map((type) => (
                <Card key={type.title}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark">
                        {type.title}
                      </h3>
                      <p className="mt-2 text-gray">{type.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              L&apos;analyse statique avec{" "}
              <Link
                href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                className="text-primary hover:underline"
              >
                PHPStan
              </Link>{" "}
              complète cette pyramide en détectant les erreurs de type et les
              incohérences avant même l&apos;exécution des tests.
              Pour une vision globale de la santé de votre code, notre{" "}
              <Link
                href="/audit-code-php"
                className="text-primary hover:underline"
              >
                audit de code PHP
              </Link>{" "}
              couvre six axes complémentaires dont la couverture de tests.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Les outils que nous utilisons</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous sélectionnons les outils les plus adaptés à votre contexte
              technique. Voici ceux que nous déployons le plus fréquemment sur
              les projets PHP et Symfony.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {outils.map((outil) => (
                <Card key={outil.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {outil.title}
                  </h3>
                  <p className="mt-2 text-gray">{outil.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Respecter des{" "}
              <Link
                href="/article/coding-conventions"
                className="text-primary hover:underline"
              >
                conventions de code
              </Link>{" "}
              strictes et supprimer le{" "}
              <Link
                href="/article/code-mort-mission-elimination"
                className="text-primary hover:underline"
              >
                code mort
              </Link>{" "}
              sont des prérequis essentiels pour que vos tests restent
              maintenables dans le temps.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Intégration CI/CD</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des tests automatisés ne servent à rien s&apos;ils ne sont pas
              exécutés systématiquement. Nous intégrons votre suite de tests
              dans un pipeline d&apos;intégration continue pour que chaque
              commit soit validé automatiquement.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Exécution automatique à chaque push
                    </h3>
                    <p className="mt-1 text-gray">
                      Les tests se lancent dès qu&apos;un développeur pousse du
                      code. Aucune intervention manuelle, aucun oubli possible.
                      Le pipeline GitLab CI ou GitHub Actions fait le travail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Blocage du déploiement en cas d&apos;échec
                    </h3>
                    <p className="mt-1 text-gray">
                      Si un test échoue, le déploiement est automatiquement
                      bloqué. Impossible de mettre en production du code qui
                      casse un comportement existant.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Rapports de couverture
                    </h3>
                    <p className="mt-1 text-gray">
                      Chaque build génère un rapport de couverture visible
                      directement dans votre merge request. Vous suivez
                      l&apos;évolution de la couverture au fil du temps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Parallélisation des suites de tests
                    </h3>
                    <p className="mt-1 text-gray">
                      Nous configurons l&apos;exécution parallèle pour réduire
                      le temps de feedback. Les tests unitaires, d&apos;intégration
                      et e2e tournent simultanément sur des jobs séparés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Tests Postman dans le pipeline
                    </h3>
                    <p className="mt-1 text-gray">
                      Pour les API, nous intégrons vos collections{" "}
                      <Link
                        href="/article/comment-executer-des-tests-postman-avec-newman-dans-gitlab-ci"
                        className="text-primary hover:underline"
                      >
                        Postman via Newman dans GitLab CI
                      </Link>{" "}
                      afin de valider automatiquement chaque endpoint à chaque
                      déploiement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Analyse statique intégrée
                    </h3>
                    <p className="mt-1 text-gray">
                      PHPStan et les outils de lint sont exécutés dans le même
                      pipeline. Le code est vérifié à la fois sur son
                      comportement et sur sa structure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre projet PHP mérite un filet de sécurité
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit de 30 minutes, gratuit et sans engagement.
              Nous évaluons l&apos;état de vos tests et vous proposons un plan
              d&apos;action concret.
            </p>
            <Link
              href="/audit-symfony-gratuit"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander mon audit gratuit
            </Link>
          </div>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Questions fréquentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <RelatedLinks links={testsRelatedLinks} className="bg-light-gray" />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

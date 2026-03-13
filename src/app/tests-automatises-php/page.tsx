import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Tests automatises PHP et Symfony : securisez chaque livraison",
  description:
    "Mettez en place une strategie de tests automatises PHP et Symfony : tests unitaires, integration, fonctionnels et e2e avec PHPUnit, Behat et Cypress. Pipeline CI/CD inclus.",
  path: "/tests-automatises-php",
});

const typesDeTests = [
  {
    title: "Tests unitaires",
    description:
      "Verification isolee de chaque classe et methode. Ils s'executent en quelques secondes et garantissent que la logique metier fonctionne independamment du reste de l'application.",
  },
  {
    title: "Tests d'integration",
    description:
      "Validation de l'interaction entre plusieurs composants : services Symfony, repositories Doctrine, file de messages. Ils detectent les problemes de configuration et de cablage.",
  },
  {
    title: "Tests fonctionnels",
    description:
      "Simulation de requetes HTTP completes a travers le Kernel Symfony. Ils verifient que vos controllers, middlewares et reponses fonctionnent correctement de bout en bout.",
  },
  {
    title: "Tests end-to-end (e2e)",
    description:
      "Execution dans un navigateur reel pour valider les parcours utilisateur critiques : inscription, paiement, tableau de bord. Ils reproduisent le comportement exact de vos utilisateurs.",
  },
];

const outils = [
  {
    title: "PHPUnit",
    description:
      "Le framework de reference pour les tests unitaires et d'integration PHP. Nous l'utilisons pour couvrir la logique metier, les services Symfony et les repositories Doctrine.",
  },
  {
    title: "Behat",
    description:
      "Framework BDD (Behavior-Driven Development) qui permet d'ecrire des scenarios de test en langage naturel. Ideal pour impliquer les equipes metier dans la definition des comportements attendus.",
  },
  {
    title: "Cypress",
    description:
      "Outil de test e2e moderne qui pilote un vrai navigateur. Nous l'utilisons pour valider les parcours utilisateur critiques et detecter les regressions visuelles.",
  },
  {
    title: "PHPStan",
    description:
      "Analyse statique du code PHP qui detecte les erreurs avant meme l'execution. Combine aux tests, il constitue un filet de securite supplementaire contre les bugs en production.",
  },
];

const faqItems = [
  {
    title: "Par ou commencer quand un projet PHP n'a aucun test ?",
    content:
      "Nous commencons toujours par un audit de la base de code pour identifier les zones les plus critiques. Ensuite, nous mettons en place PHPUnit et ecrivons les premiers tests sur la logique metier la plus sensible. L'objectif est d'obtenir un filet de securite minimal en quelques jours, puis d'augmenter progressivement la couverture.",
  },
  {
    title: "Quelle couverture de tests viser ?",
    content:
      "Viser 100 % de couverture est rarement pertinent. Nous recommandons de cibler 80 % sur la logique metier et les services critiques, tout en acceptant une couverture plus faible sur le code d'infrastructure. L'important est de couvrir ce qui casse le plus souvent et ce qui a le plus de valeur metier.",
  },
  {
    title: "Les tests ralentissent-ils le developpement ?",
    content:
      "A court terme, ecrire des tests prend du temps. Mais des le premier mois, le gain est net : moins de bugs en production, moins de regressions, des refactorings serains. Sur un projet de 6 mois ou plus, les tests font gagner du temps plutot qu'en perdre.",
  },
  {
    title: "Comment integrer les tests dans un pipeline CI/CD existant ?",
    content:
      "Nous configurons votre pipeline GitLab CI, GitHub Actions ou Jenkins pour executer automatiquement la suite de tests a chaque push. Les tests unitaires tournent en premier (rapides), suivis des tests d'integration et fonctionnels. Le deploiement est bloque si un test echoue.",
  },
  {
    title: "Faut-il utiliser PHPUnit ou Behat ?",
    content:
      "Les deux sont complementaires. PHPUnit est incontournable pour les tests unitaires et d'integration. Behat est pertinent quand vous avez besoin d'impliquer des profils non techniques dans la definition des comportements attendus. Nous recommandons PHPUnit comme socle, avec Behat en complement sur les parcours metier complexes.",
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
  { name: "Tests automatises PHP", path: "/tests-automatises-php" },
]);

const service = serviceJsonLd({
  name: "Tests automatises PHP et Symfony",
  description:
    "Mise en place de strategies de tests automatises pour applications PHP et Symfony : tests unitaires, integration, fonctionnels et e2e, avec integration CI/CD pour securiser chaque livraison.",
  path: "/tests-automatises-php",
});

const webPage = webPageJsonLd({
  name: "Tests automatises PHP et Symfony : securisez chaque livraison",
  description:
    "Mettez en place une strategie de tests automatises PHP et Symfony : tests unitaires, integration, fonctionnels et e2e avec PHPUnit, Behat et Cypress. Pipeline CI/CD inclus.",
  path: "/tests-automatises-php",
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
});

export default function TestsAutomatisesPhp() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Qualite logicielle
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Tests automatises PHP et Symfony : securisez chaque livraison
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Chaque mise en production vous stresse ? Les regressions
                  s&apos;accumulent sprint apres sprint ? Vos developpeurs
                  n&apos;osent plus toucher au code existant ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT met en place une strategie de{" "}
                  <strong>tests automatises</strong> adaptee a votre projet PHP
                  et Symfony. Tests unitaires, d&apos;integration, fonctionnels
                  et e2e : nous construisons le filet de securite qui vous
                  permet de livrer en confiance, a chaque fois.
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
              Une strategie de tests efficace combine plusieurs niveaux
              complementaires. Chacun joue un role precis dans la detection des
              anomalies, du plus rapide au plus realiste.
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
              complete cette pyramide en detectant les erreurs de type et les
              incohereances avant meme l&apos;execution des tests.
              Pour une vision globale de la sante de votre code, notre{" "}
              <Link
                href="/audit-code-php"
                className="text-primary hover:underline"
              >
                audit de code PHP
              </Link>{" "}
              couvre six axes complementaires dont la couverture de tests.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Les outils que nous utilisons</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous selectionnons les outils les plus adaptes a votre contexte
              technique. Voici ceux que nous deployons le plus frequemment sur
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
              sont des prerequis essentiels pour que vos tests restent
              maintenables dans le temps.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Integration CI/CD</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des tests automatises ne servent a rien s&apos;ils ne sont pas
              executes systematiquement. Nous integrons votre suite de tests
              dans un pipeline d&apos;integration continue pour que chaque
              commit soit valide automatiquement.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Execution automatique a chaque push
                    </h3>
                    <p className="mt-1 text-gray">
                      Les tests se lancent des qu&apos;un developpeur pousse du
                      code. Aucune intervention manuelle, aucun oubli possible.
                      Le pipeline GitLab CI ou GitHub Actions fait le travail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Blocage du deploiement en cas d&apos;echec
                    </h3>
                    <p className="mt-1 text-gray">
                      Si un test echoue, le deploiement est automatiquement
                      bloque. Impossible de mettre en production du code qui
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
                      Chaque build genere un rapport de couverture visible
                      directement dans votre merge request. Vous suivez
                      l&apos;evolution de la couverture au fil du temps.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Parallelisation des suites de tests
                    </h3>
                    <p className="mt-1 text-gray">
                      Nous configurons l&apos;execution parallele pour reduire
                      le temps de feedback. Les tests unitaires, d&apos;integration
                      et e2e tournent simultanement sur des jobs separes.
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
                      Pour les API, nous integrons vos collections{" "}
                      <Link
                        href="/article/comment-executer-des-tests-postman-avec-newman-dans-gitlab-ci"
                        className="text-primary hover:underline"
                      >
                        Postman via Newman dans GitLab CI
                      </Link>{" "}
                      afin de valider automatiquement chaque endpoint a chaque
                      deploiement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Analyse statique integree
                    </h3>
                    <p className="mt-1 text-gray">
                      PHPStan et les outils de lint sont executes dans le meme
                      pipeline. Le code est verifie a la fois sur son
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
              Votre projet PHP merite un filet de securite
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit de 30 minutes, gratuit et sans engagement.
              Nous evaluons l&apos;etat de vos tests et vous proposons un plan
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
            <SectionTitle>Questions frequentes</SectionTitle>
            <div className="mx-auto max-w-2xl">
              <Accordion items={faqItems} />
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16">
          <Container>
            <SectionTitle>Pour aller plus loin</SectionTitle>
            <ul className="mx-auto mt-8 max-w-3xl space-y-3 text-lg">
              <li>
                <Link
                  href="/audit-symfony-gratuit"
                  className="text-primary hover:underline"
                >
                  Audit Symfony gratuit
                </Link>{" "}
                , 30 minutes pour evaluer l&apos;etat de votre application
              </li>
              <li>
                <Link
                  href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                  className="text-primary hover:underline"
                >
                  Comment PHPStan peut vous aider a ameliorer la qualite de votre code PHP
                </Link>{" "}
                , analyse statique pour completer vos tests
              </li>
              <li>
                <Link
                  href="/article/comment-executer-des-tests-postman-avec-newman-dans-gitlab-ci"
                  className="text-primary hover:underline"
                >
                  Executer des tests Postman avec Newman dans GitLab CI
                </Link>{" "}
                , automatiser les tests d&apos;API dans votre pipeline
              </li>
              <li>
                <Link
                  href="/article/coding-conventions"
                  className="text-primary hover:underline"
                >
                  Conventions de code
                </Link>{" "}
                , un socle indispensable pour des tests maintenables
              </li>
              <li>
                <a
                  href="https://docs.phpunit.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation officielle PHPUnit
                </a>{" "}
                , reference pour la configuration et l&apos;ecriture de tests
              </li>
            </ul>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

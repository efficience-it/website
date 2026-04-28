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
import Breadcrumb from "@/components/ui/Breadcrumb";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";

const dockerRelatedLinks: RelatedLink[] = [
  {
    title: "Cloud et DevOps",
    description: "Notre expertise en infrastructure cloud et automatisation",
    href: "/cloud-et-devops",
  },
  {
    title: "Hébergement Symfony",
    description: "Hébergement optimisé pour vos applications Symfony",
    href: "/hebergement-symfony",
  },
  {
    title: "Docker est indispensable en production",
    description: "Pourquoi conteneuriser vos applications en 2026",
    href: "/article/pourquoi-docker-est-indispensable-en-production-aujourdhui",
  },
  {
    title: "FrankenPHP, le serveur PHP moderne",
    description: "Un serveur PHP natif, performant et pensé pour Docker",
    href: "/article/concretement-cest-quoi-frankenphp",
  },
  {
    title: "Docker, documentation officielle",
    description: "La référence pour la conteneurisation d'applications",
    href: "https://docs.docker.com/",
    external: true,
  },
];

export const metadata = pageMetadata({
  title: "Docker & Symfony – Conteneurisation et déploiement",
  description:
    "Efficience IT conteneurise vos applications Symfony avec Docker. Dockerfile optimisé, Docker Compose, CI/CD et déploiement en production.",
  path: "/integration-docker-symfony",
});

const expertises = [
  {
    title: "Dockerfile PHP optimisé",
    description:
      "Nous construisons des images Docker multi-stage légères et sécurisées pour vos applications PHP. Chaque couche est pensée pour réduire la taille finale, accélérer le build et minimiser la surface d'attaque en production.",
  },
  {
    title: "Docker Compose multi-services",
    description:
      "Votre application ne tourne pas seule. Nous orchestrons PHP, PostgreSQL, Redis, Elasticsearch et vos services métier dans un environnement Docker Compose reproductible, identique du poste développeur à la production.",
  },
  {
    title: "CI/CD et déploiement continu",
    description:
      "Pipeline GitHub Actions ou GitLab CI qui build, teste et déploie vos conteneurs automatiquement. Chaque merge déclenche un déploiement sans intervention manuelle, avec rollback automatique en cas d'échec.",
  },
  {
    title: "Monitoring et observabilité",
    description:
      "Logs centralisés, métriques applicatives et alertes en temps réel. Nous intégrons Grafana et Prometheus pour suivre la santé de vos conteneurs et anticiper les problèmes avant qu'ils n'impactent vos utilisateurs.",
  },
];

const stack = [
  { name: "Docker", description: "Conteneurisation d'applications et isolation des services" },
  { name: "Docker Compose", description: "Orchestration multi-services pour le développement et la production" },
  { name: "GitHub Actions / GitLab CI", description: "Pipelines CI/CD pour build, test et déploiement automatisés" },
  { name: "Traefik", description: "Reverse proxy et load balancer natif pour Docker" },
  { name: "Grafana", description: "Dashboards et monitoring en temps réel" },
  { name: "PHP-FPM / FrankenPHP", description: "Runtimes PHP optimisés pour les conteneurs" },
];

const whenToChoose = [
  "Vous avez plus de deux ou trois développeurs et vous voulez un environnement local identique à la production pour éliminer les bugs liés à la configuration.",
  "Vous déployez sur plusieurs environnements (staging, preprod, prod) et la dérive de configuration entre eux vous coûte du temps.",
  "Vous avez besoin de scaler horizontalement vos services Symfony en production : Docker est la brique de base avant Kubernetes ou un PaaS.",
  "Votre application dépend de plusieurs services tiers (PostgreSQL, Redis, Elasticsearch) : Docker Compose simplifie radicalement leur orchestration.",
];

const whenNotToChoose = [
  "Vous êtes seul développeur sur un projet simple hébergé chez un hébergeur mutualisé : la complexité Docker n'apporte rien à votre cas.",
  "Votre infrastructure est totalement gérée par un PaaS (Heroku, Platform.sh, Clever Cloud) qui abstrait déjà la conteneurisation.",
  "Votre équipe DevOps n'a aucune expérience Docker et vous n'avez pas le temps d'investir dans la formation : commencez par sécuriser le déploiement existant avant de migrer.",
];

const useCases = [
  {
    title: "Conteneurisation d'un monolithe Symfony",
    description:
      "Conteneurisation d'une application Symfony 4 historique pour une plateforme logistique, avec un Dockerfile multi-stage optimisé, Docker Compose pour le développement et déploiement sur Kubernetes en production.",
  },
  {
    title: "Setup local développeur identique à la prod",
    description:
      "Mise en place d'un environnement Docker Compose pour une équipe d'une dizaine de développeurs : démarrage du projet en une seule commande, services PostgreSQL, Redis et MailHog inclus, parité totale avec la production.",
  },
  {
    title: "Pipeline CI multi-environnements",
    description:
      "Pipeline GitHub Actions pour une scale-up SaaS : build des images Docker à chaque push, déploiement automatique sur staging et déploiement sur production validé par approbation manuelle, avec rollback automatique en cas de health check KO.",
  },
];

const faqItems = [
  {
    title: "Quelle différence entre Docker et une machine virtuelle ?",
    content:
      "Une machine virtuelle embarque un OS complet, ce qui la rend lourde et lente à démarrer. Docker partage le noyau de l'hôte et isole uniquement les processus applicatifs. Résultat : des conteneurs qui démarrent en quelques secondes, consomment moins de ressources et se déploient plus facilement. Pour une application Symfony, Docker offre un environnement identique du poste développeur à la production.",
  },
  {
    title: "Docker est-il adapté à la production pour Symfony ?",
    content:
      "Oui. Docker est utilisé en production par des entreprises de toutes tailles. Avec un Dockerfile multi-stage bien construit, une gestion propre des variables d'environnement via Symfony Secrets et un orchestrateur comme Docker Compose ou Kubernetes, vos applications Symfony tournent de manière fiable et scalable en production.",
  },
  {
    title: "Comment intégrer Docker dans un pipeline CI/CD ?",
    content:
      "Le pipeline build l'image Docker à chaque push, lance les tests dans un conteneur isolé, puis pousse l'image sur un registry (GitHub Container Registry, Docker Hub). Le déploiement tire la nouvelle image et relance les conteneurs sans interruption de service grâce au rolling update. Nous mettons en place ce workflow avec GitHub Actions ou GitLab CI.",
  },
  {
    title: "Combien de temps pour conteneuriser une application Symfony existante ?",
    content:
      "Pour une application Symfony classique avec PHP-FPM, PostgreSQL et Redis, comptez 1 à 3 semaines pour une conteneurisation complète : Dockerfile multi-stage optimisé, Docker Compose pour le développement, pipeline CI/CD et premier déploiement en staging. Les applications avec des dépendances système exotiques ou des assets compilés complexes prennent plus de temps.",
  },
  {
    title: "Quelles métriques surveiller en production sur des conteneurs Docker ?",
    content:
      "CPU et mémoire par conteneur, redémarrages inattendus, succès des health checks, temps de démarrage des conteneurs, latence et taux d'erreur HTTP. Côté infrastructure, surveillez l'espace disque (les images et logs s'accumulent vite) et le réseau entre conteneurs. Prometheus avec cAdvisor pour les métriques conteneurs, Grafana pour les dashboards, Loki pour la centralisation des logs et Sentry pour les erreurs applicatives.",
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
  { name: "Nos expertises", path: "/notre-expertise" },
  { name: "Docker et Symfony", path: "/integration-docker-symfony" },
]);

const service = serviceJsonLd({
  name: "Docker et Symfony en production",
  description:
    "Conteneurisation et déploiement d'applications Symfony avec Docker. Dockerfile optimisé, Docker Compose, CI/CD et monitoring en production.",
  path: "/integration-docker-symfony",
});

const webPage = webPageJsonLd({
  name: "Docker et Symfony en production : conteneurisation et déploiement",
  description:
    "Efficience IT conteneurise vos applications Symfony avec Docker. Dockerfile optimisé, Docker Compose, CI/CD et déploiement en production.",
  path: "/integration-docker-symfony",
  datePublished: "2026-03-17",
  dateModified: "2026-03-17",
});

export default function IntegrationDockerSymfony() {
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
            <Breadcrumb items={[{ label: "Nos expertises", href: "/notre-expertise" }, { label: "Docker et Symfony" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Conteneurisation Symfony
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Docker et Symfony en production : conteneurisation et déploiement
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application Symfony tourne sur un serveur configuré à la main,
                  difficile à reproduire et fragile à maintenir.
                  Efficience IT <strong>conteneurise vos applications Symfony avec Docker</strong> pour
                  garantir un environnement identique du développement à la production.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Dockerfile optimisé, Docker Compose multi-services,{" "}
                  <Link
                    href="/cloud-et-devops"
                    className="text-primary hover:underline"
                  >
                    pipelines CI/CD
                  </Link>{" "}
                  et déploiement automatisé : nous mettons en place une infrastructure
                  conteneurisée fiable pour vos projets Symfony, que ce soit sur un{" "}
                  <Link
                    href="/hebergement-symfony"
                    className="text-primary hover:underline"
                  >
                    hébergement dédié
                  </Link>{" "}
                  ou dans le cloud.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit gratuit 30 min
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
                      d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
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
              <SectionTitle>Nos expertises Docker</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Quatre domaines pour conteneuriser et déployer vos applications Symfony
                en toute confiance.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {expertises.map((expertise) => (
                  <Card key={expertise.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {expertise.title}
                    </h3>
                    <p className="mt-2 text-gray">{expertise.description}</p>
                  </Card>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-center text-gray">
                Pour comprendre{" "}
                <Link
                  href="/article/pourquoi-docker-est-indispensable-en-production-aujourdhui"
                  className="text-primary hover:underline"
                >
                  pourquoi Docker est indispensable en production
                </Link>
                , consultez notre article dédié. Et si vous envisagez un runtime PHP moderne,
                découvrez{" "}
                <Link
                  href="/article/concretement-cest-quoi-frankenphp"
                  className="text-primary hover:underline"
                >
                  ce qu&apos;est FrankenPHP
                </Link>{" "}
                et comment il s&apos;intègre parfaitement dans un conteneur Docker.
              </p>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Notre stack Docker</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Des outils éprouvés en production pour conteneuriser, déployer et
                superviser vos applications.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stack.map((item) => (
                  <Card key={item.name}>
                    <p className="font-display text-base font-bold text-primary">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-gray">{item.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-12">
                <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                  Docker et Symfony : le duo gagnant en production
                </h2>
                <p className="mt-4 text-lg text-gray">
                  Conteneuriser une application Symfony ne se limite pas à écrire un
                  Dockerfile. Il faut optimiser les layers, gérer les assets compilés,
                  configurer PHP-FPM ou FrankenPHP, orchestrer les services annexes
                  (base de données, cache, files d&apos;attente) et automatiser le
                  tout dans un pipeline CI/CD.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Chez Efficience IT, nous avons industrialisé ce processus. Chaque
                  projet bénéficie d&apos;une{" "}
                  <Link
                    href="/cloud-et-devops"
                    className="text-primary hover:underline"
                  >
                    infrastructure DevOps
                  </Link>{" "}
                  pensée pour la fiabilité : images multi-stage, health checks,
                  rolling updates et{" "}
                  <Link
                    href="/hebergement-symfony"
                    className="text-primary hover:underline"
                  >
                    hébergement adapté
                  </Link>{" "}
                  à vos contraintes de charge et de sécurité.
                </p>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Quand choisir Docker</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Conteneuriser n&apos;est pas toujours la bonne réponse. Voici
                quand l&apos;effort en vaut clairement la peine, et quand il
                vaut mieux attendre.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Choisir Docker si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card>
                  <h3 className="font-display text-lg font-bold text-dark">
                    Regarder ailleurs si
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray">
                    {whenNotToChoose.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>Cas d&apos;usage typiques</SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Trois exemples concrets de conteneurisations Docker que nous
                menons régulièrement.
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {useCases.map((useCase) => (
                  <Card key={useCase.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {useCase.title}
                    </h3>
                    <p className="mt-2 text-gray">{useCase.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <SectionTitle>Questions fréquentes</SectionTitle>
              <div className="mx-auto max-w-2xl">
                <Accordion items={faqItems} />
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <RelatedLinks links={dockerRelatedLinks} />
        </FadeIn>

        <FadeIn>
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

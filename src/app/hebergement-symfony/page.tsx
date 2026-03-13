import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import CallToAction from "@/components/sections/CallToAction";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import Accordion from "@/components/ui/Accordion";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Hebergement Symfony : infrastructure cloud pour vos applications",
  description:
    "Efficience IT heberge et deploie vos applications Symfony sur le cloud (AWS, GCP, Azure). CI/CD, monitoring, haute disponibilite et securite.",
  path: "/hebergement-symfony",
});

const useCases = [
  {
    title: "Hebergement cloud AWS, GCP et Azure",
    description:
      "Deploiement de vos applications Symfony sur les principales plateformes cloud avec une architecture adaptee a votre trafic et vos contraintes.",
  },
  {
    title: "Pipelines CI/CD",
    description:
      "Mise en place de pipelines d'integration et de deploiement continu avec GitLab CI, GitHub Actions ou CircleCI pour des livraisons fiables et automatisees.",
  },
  {
    title: "Monitoring et alerting",
    description:
      "Supervision de vos applications avec Grafana, Prometheus et des alertes en temps reel pour anticiper les incidents avant qu'ils n'impactent vos utilisateurs.",
  },
  {
    title: "Migration d'infrastructure",
    description:
      "Migration de vos serveurs classiques vers une infrastructure cloud conteneurisee avec Docker et orchestree avec Kubernetes.",
  },
  {
    title: "Haute disponibilite et scalabilite",
    description:
      "Architectures redondantes, load balancing et auto-scaling pour garantir la disponibilite de vos applications meme lors de pics de trafic.",
  },
];

const advantages = [
  {
    title: "Multi-cloud",
    description:
      "Nous travaillons avec AWS, Google Cloud, Azure et OVH. Vous choisissez le cloud adapte a vos contraintes techniques et reglementaires.",
  },
  {
    title: "Automatisation complete",
    description:
      "Infrastructure as Code avec Terraform ou Ansible, pipelines CI/CD et deploiements zero-downtime pour eliminer les interventions manuelles.",
  },
  {
    title: "Securite renforcee",
    description:
      "Certificats SSL, pare-feu applicatif, mises a jour automatiques et audits de securite reguliers pour proteger vos donnees.",
  },
  {
    title: "Performance optimisee",
    description:
      "Cache applicatif (Varnish, Redis), CDN, optimisation des requetes et configuration fine de PHP-FPM pour des temps de reponse minimaux.",
  },
];

const faqItems = [
  {
    title: "Quel cloud recommandez-vous pour une application Symfony ?",
    content:
      "Cela depend de votre contexte. AWS offre la plus grande richesse de services, GCP excelle sur le data et Kubernetes, Azure s'integre bien dans les ecosystemes Microsoft. Nous vous aidons a choisir lors de l'audit initial.",
  },
  {
    title: "Gerez-vous aussi l'hebergement apres la mise en production ?",
    content:
      "Oui. Nous proposons des contrats de maintenance incluant le monitoring, les mises a jour de securite, les sauvegardes et l'intervention en cas d'incident.",
  },
  {
    title: "Comment fonctionne le deploiement continu ?",
    content:
      "Chaque push sur la branche principale declenche un pipeline automatise : tests, analyse statique, build et deploiement. En cas d'echec, le deploiement est annule automatiquement (rollback).",
  },
  {
    title: "Pouvez-vous migrer notre infrastructure existante ?",
    content:
      "Oui. Nous auditons votre infrastructure actuelle, definissons un plan de migration et executons la bascule avec un minimum de downtime. La migration inclut la conteneurisation avec Docker si necessaire.",
  },
  {
    title: "Proposez-vous des hebergements conformes HDS ou RGPD ?",
    content:
      "Oui. Nous pouvons deployer sur des clouds certifies HDS (hebergement de donnees de sante) et configurer des infrastructures conformes au RGPD avec des donnees hebergees en France ou en Europe.",
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
  { name: "Hebergement Symfony", path: "/hebergement-symfony" },
]);

const service = serviceJsonLd({
  name: "Hebergement Symfony",
  description:
    "Hebergement cloud, deploiement CI/CD et monitoring pour les applications Symfony.",
  path: "/hebergement-symfony",
});

const webPage = webPageJsonLd({
  name: "Hebergement Symfony : infrastructure cloud pour vos applications",
  description:
    "Efficience IT heberge et deploie vos applications Symfony sur le cloud. CI/CD, monitoring, haute disponibilite et securite.",
  path: "/hebergement-symfony",
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "Pourquoi Docker est indispensable en production aujourd'hui",
    description: "Les avantages de la conteneurisation pour vos deploiements",
    href: "/article/pourquoi-docker-est-indispensable-en-production-aujourdhui",
  },
  {
    title: "Deployer Nuxt.js avec GitLab CI, S3 et CloudFront",
    description: "Un exemple concret de pipeline CI/CD cloud",
    href: "/article/deployer-nuxtjs-avec-gitlab-ci-s3-et-cloudfront",
  },
  {
    title: "Cloud & DevOps : notre expertise",
    description: "Notre accompagnement DevOps et cloud pour vos projets",
    href: "/cloud-et-devops",
  },
  {
    title: "Symfony Cloud, documentation officielle",
    description: "La plateforme cloud officielle pour Symfony",
    href: "https://symfony.com/cloud",
    external: true,
  },
];

export default function HebergementSymfony() {
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
                <h1 className="font-display text-4xl font-bold text-dark md:text-5xl">
                  Hebergement Symfony : infrastructure cloud pour vos
                  applications
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Vos applications <strong>Symfony</strong> meritent une
                  infrastructure a la hauteur. Chez Efficience IT, nous
                  concevons et gerons des environnements{" "}
                  <strong>cloud</strong> performants, securises et automatises
                  pour vos projets en production.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  De la mise en place de pipelines{" "}
                  <strong>CI/CD</strong> au monitoring en temps reel, notre
                  equipe{" "}
                  <Link
                    href="/cloud-et-devops"
                    className="text-primary hover:underline"
                  >
                    Cloud et DevOps
                  </Link>{" "}
                  prend en charge l&apos;ensemble de votre chaine de
                  deploiement.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Discuter de votre projet</Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit Symfony gratuit
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex h-64 w-full max-w-md items-center justify-center rounded-2xl bg-primary/10 text-6xl">
                  ☁️
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Nos services d&apos;hebergement et deploiement Symfony
              </SectionTitle>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
                Du simple hebergement cloud a l&apos;orchestration
                multi-services, nous adaptons l&apos;infrastructure a la
                complexite de votre projet.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {useCases.map((uc) => (
                  <Card key={uc.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {uc.title}
                    </h3>
                    <p className="mt-2 text-gray">{uc.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="bg-light-gray py-16 md:py-24">
            <Container>
              <div className="space-y-16">
                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    L&apos;hebergement cloud pour Symfony : bien plus qu&apos;un
                    serveur
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Heberger une application Symfony ne se limite pas a louer un
                    serveur. Il faut configurer PHP-FPM, optimiser le cache
                    (OPcache, Varnish, Redis), gerer les certificats SSL et
                    mettre en place des sauvegardes automatiques. Nous concevons
                    des architectures cloud sur AWS, GCP ou Azure, adaptees au
                    trafic et aux exigences de chaque projet.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Nos equipes maitrisent{" "}
                    <Link
                      href="/article/pourquoi-docker-est-indispensable-en-production-aujourdhui"
                      className="text-primary hover:underline"
                    >
                      la conteneurisation avec Docker
                    </Link>{" "}
                    pour garantir la reproductibilite des environnements, du
                    developpement a la production.
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    CI/CD : des deploiements automatises et fiables
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Chaque modification de code passe par un pipeline
                    automatise : execution des tests, analyse statique, build et
                    deploiement. Nous configurons des workflows GitLab CI,
                    GitHub Actions ou CircleCI adaptes a votre projet Symfony.
                    Le deploiement se fait en zero-downtime, avec rollback
                    automatique en cas de probleme.
                  </p>
                  <p className="mt-4 text-lg text-gray">
                    Decouvrez un exemple concret avec notre article sur{" "}
                    <Link
                      href="/article/deployer-nuxtjs-avec-gitlab-ci-s3-et-cloudfront"
                      className="text-primary hover:underline"
                    >
                      le deploiement automatise avec GitLab CI, S3 et
                      CloudFront
                    </Link>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold text-dark md:text-3xl">
                    Monitoring et observabilite : anticiper plutot que subir
                  </h2>
                  <p className="mt-4 text-lg text-gray">
                    Une application en production doit etre surveillee en
                    permanence. Nous mettons en place des dashboards Grafana,
                    des metriques Prometheus et des alertes (Slack, email, SMS)
                    pour detecter les anomalies avant qu&apos;elles
                    n&apos;impactent vos utilisateurs. Logs centralises, APM et
                    health checks completent le dispositif. Notre expertise{" "}
                    <Link
                      href="/cloud-et-devops"
                      className="text-primary hover:underline"
                    >
                      Cloud et DevOps
                    </Link>{" "}
                    garantit une infrastructure fiable et observable.
                  </p>
                </div>
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="py-16 md:py-24">
            <Container>
              <SectionTitle>
                Pourquoi confier votre hebergement a Efficience IT ?
              </SectionTitle>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {advantages.map((a) => (
                  <Card key={a.title}>
                    <h3 className="font-display text-lg font-bold text-dark">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-gray">{a.description}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        </FadeIn>

        <FadeIn>
          <RelatedLinks links={relatedLinks} />
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
          <section className="bg-primary py-16 text-center text-white">
            <div className="mx-auto max-w-3xl px-4">
              <h2 className="font-display text-3xl font-bold">
                Besoin d&apos;une infrastructure cloud pour votre application
                Symfony ?
              </h2>
              <p className="mt-4 text-lg text-white/90">
                Reservez un appel de 30 minutes avec notre equipe pour auditer
                votre infrastructure actuelle et definir un plan d&apos;action.
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
          <CallToAction />
          <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

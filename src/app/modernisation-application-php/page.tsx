import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import FadeIn from "@/components/ui/FadeIn";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";

const modernisationRelatedLinks: RelatedLink[] = [
  { title: "La dette technique : faut-il vraiment en avoir peur ?", description: "comprendre et gerer l'accumulation de dette dans vos projets", href: "/article/la-dette-technique-faut-il-vraiment-en-avoir-peur" },
  { title: "Guide de migration dans un projet Symfony", description: "methodes et bonnes pratiques pour migrer en douceur", href: "/article/guide-de-migration-dans-un-projet-symfony" },
  { title: "Audit Symfony gratuit", description: "evaluez l'etat technique de votre application en 30 min", href: "/audit-symfony-gratuit" },
  { title: "Symfony Releases", description: "calendrier de support et versions LTS officielles", href: "https://symfony.com/releases", external: true },
  { title: "Versions PHP supportees", description: "verifier si votre version PHP est encore maintenue", href: "https://www.php.net/supported-versions.php", external: true },
];

export const metadata = pageMetadata({
  title:
    "Modernisation d'application PHP : reduire la dette technique et remettre aux normes",
  description:
    "Modernisez votre application PHP obsolete : reduction de la dette technique, refactoring progressif, mise aux normes PHP 8 et migration vers Symfony. PHP natif, CodeIgniter, Zend ou Laravel.",
  path: "/modernisation-application-php",
});

const risks = [
  {
    title: "Failles de securite",
    description:
      "Une version PHP en fin de vie ne recoit plus de correctifs de securite. Chaque jour sans mise a jour augmente l'exposition aux attaques.",
  },
  {
    title: "Performance degradee",
    description:
      "Les anciennes versions de PHP et les architectures non optimisees entrainent des temps de reponse eleves et une mauvaise experience utilisateur.",
  },
  {
    title: "Difficulte de recrutement",
    description:
      "Les developpeurs refusent de travailler sur du PHP natif ou des frameworks abandonnes. Recruter et fideliser une equipe sur un projet legacy devient un defi permanent.",
  },
  {
    title: "Maintenance de plus en plus lourde",
    description:
      "La dette technique s'accumule : chaque nouvelle fonctionnalite prend plus de temps, chaque bug corrige en cree deux autres.",
  },
];

const targets = [
  {
    title: "PHP natif (sans framework)",
    description:
      "Applications ecrites en PHP pur, sans structure claire, avec du code spaghetti difficile a maintenir et a faire evoluer.",
  },
  {
    title: "CodeIgniter et CakePHP",
    description:
      "Frameworks populaires dans les annees 2010, aujourd'hui largement depasses en termes d'ecosysteme et de support communautaire.",
  },
  {
    title: "Zend Framework / Laminas",
    description:
      "Nombreuses applications d'entreprise tournent encore sur Zend 1 ou 2, avec des dependances incompatibles avec les versions recentes de PHP.",
  },
  {
    title: "Symfony 2, 3 ou 4",
    description:
      "Ces versions sont en fin de vie (EOL). La migration vers Symfony 6 ou 7 est indispensable pour beneficier du support LTS et des nouvelles fonctionnalites.",
  },
  {
    title: "Laravel ancien",
    description:
      "Les versions 5 et 6 de Laravel ne sont plus maintenues. Une modernisation permet de profiter des gains de performance des versions recentes.",
  },
  {
    title: "Applications internes sur mesure",
    description:
      "Outils metier developpes en interne il y a 10 ou 15 ans, sans tests, sans documentation, avec un seul developpeur qui en connait encore le fonctionnement.",
  },
];

const steps = [
  {
    num: "1",
    title: "Audit technique",
    description:
      "Nous analysons votre base de code : architecture, couverture de tests, niveau de dette technique avec PHPStan, dependances obsoletes et risques de securite.",
  },
  {
    num: "2",
    title: "Plan de migration",
    description:
      "Nous etablissons une feuille de route priorisee : quoi migrer en premier, comment decouper le chantier en etapes livrables, et dans quel ordre les traiter.",
  },
  {
    num: "3",
    title: "Refactoring progressif",
    description:
      "Nous modernisons le code par etapes, sans jamais bloquer votre activite. Chaque module est refactore, documente et couvert par des tests automatises.",
  },
  {
    num: "4",
    title: "Tests et qualite",
    description:
      "Chaque etape est validee par des tests unitaires, d'integration et fonctionnels. Nous mettons en place PHPStan au niveau maximal pour garantir la qualite du code.",
  },
  {
    num: "5",
    title: "Deploiement continu",
    description:
      "Nous configurons une pipeline CI/CD pour automatiser les tests et les deploiements. Votre equipe gagne en confiance et en velocite de livraison.",
  },
];

const symfonyReasons = [
  {
    title: "Ecosysteme mature",
    description:
      "Symfony dispose de composants reutilisables adoptes par des milliers de projets PHP dans le monde, dont Laravel lui-meme.",
  },
  {
    title: "Support LTS garanti",
    description:
      "Les versions Long Term Support de Symfony beneficient de 3 ans de maintenance et de correctifs de securite. Vous savez sur quoi vous appuyez.",
  },
  {
    title: "Communaute et recrutement",
    description:
      "Symfony est le framework PHP le plus demande en France. Recruter des developpeurs Symfony est beaucoup plus simple qu'un framework exotique.",
  },
  {
    title: "Performance native",
    description:
      "Symfony 7 avec PHP 8.3 offre des performances incomparables par rapport a du PHP natif ou des versions obsoletes. Le gain est souvent de 5 a 10x.",
  },
];

const faqItems = [
  {
    title: "Faut-il tout reecrire ou peut-on migrer progressivement ?",
    content:
      "La réécriture complete est rarement la bonne strategie. Nous privilegions une approche de migration progressive par modules : on identifie les parties les plus critiques ou les plus problematiques, on les migre en priorite, et on continue par etapes. Cela permet de maintenir l'application en production pendant toute la duree du chantier.",
  },
  {
    title: "Mon application continuera-t-elle a fonctionner pendant la migration ?",
    content:
      "Oui. Notre approche de refactoring progressif garantit que votre application reste en production a chaque etape. Nous ne livrons du code migre que lorsqu'il est couvert par des tests et valide. Il n'y a pas de periode d'arret prolongee.",
  },
  {
    title: "Quelle version de Symfony ciblez-vous pour la migration ?",
    content:
      "Nous ciblons en priorite Symfony 6.4 LTS (maintenu jusqu'en 2027) ou Symfony 7.2 selon le contexte. Le choix depend de votre besoin de stabilite, des contraintes de votre equipe et de la compatibilite de vos dependances. Nous vous conseillons sur la meilleure strategie lors de l'audit.",
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
  {
    name: "Modernisation d'application PHP",
    path: "/modernisation-application-php",
  },
]);

const service = serviceJsonLd({
  name: "Modernisation d'application PHP",
  description:
    "Migration et modernisation d'applications PHP obsoletes vers Symfony : audit technique, refactoring progressif, mise en place de tests et deploiement continu.",
  path: "/modernisation-application-php",
});

const webPage = webPageJsonLd({
  name: "Modernisation d'application PHP : reduire la dette technique et remettre aux normes",
  description: "Modernisez votre application PHP obsolete : reduction de la dette technique, refactoring progressif, mise aux normes PHP 8 et migration vers Symfony. PHP natif, CodeIgniter, Zend ou Laravel.",
  path: "/modernisation-application-php",
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
});

export default function ModernisationApplicationPhp() {
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
                  Migration PHP - Modernisation applicative
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Modernisation d&apos;application PHP : reduire la dette technique et remettre aux normes
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application PHP vieillit ? Il est temps de la
                  moderniser. PHP natif, CodeIgniter, Zend ou Symfony
                  obsolete : nous transformons votre base de code en une
                  application moderne, securisee et maintenable.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Notre approche de{" "}
                  <strong>refactoring progressif</strong> vous permet de
                  migrer sans interruption de service, etape par etape, avec
                  des resultats mesurables a chaque sprint.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Audit gratuit 30 min
                  </Button>
                  <Button href="/contact" variant="outline">
                    Discuter de mon projet
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                  <div className="text-center">
                    <p className="font-display text-5xl font-bold text-primary">
                      10x
                    </p>
                    <p className="mt-2 text-gray">
                      gain de performance moyen apres migration vers Symfony
                      avec PHP 8
                    </p>
                  </div>
                  <div className="mt-6 border-t pt-6 text-center">
                    <p className="font-display text-5xl font-bold text-primary">
                      -60%
                    </p>
                    <p className="mt-2 text-gray">
                      de bugs en production apres mise en place de tests
                      automatises et PHPStan
                    </p>
                  </div>
                  <div className="mt-6 border-t pt-6 text-center">
                    <p className="font-display text-5xl font-bold text-primary">
                      0
                    </p>
                    <p className="mt-2 text-gray">
                      arret de service : migration progressive sans bloquer
                      votre activite
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>
              Les risques d&apos;une application PHP obsolete
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Repousser la modernisation n&apos;est pas une economie : c&apos;est
              un pari risque. La{" "}
              <Link
                href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                className="text-primary hover:underline"
              >
                dette technique
              </Link>{" "}
              s&apos;accumule et finit par paralyser vos capacites
              d&apos;evolution.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {risks.map((risk) => (
                <Card key={risk.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {risk.title}
                  </h3>
                  <p className="mt-2 text-gray">{risk.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Quelles applications sont concernees</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Si votre application tombe dans l&apos;une de ces categories, une
              modernisation est probablement urgente ou incontournable a court
              terme.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {targets.map((target) => (
                <Card key={target.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {target.title}
                  </h3>
                  <p className="mt-2 text-gray">{target.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Notre methode de modernisation</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Nous suivons un processus eprouve, adapte a chaque projet. Pas de
              réécriture totale risquee : une progression maitrisee, avec des
              livrables a chaque etape.
            </p>
            <div className="mt-12 space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                      {step.num}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-dark">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-lg text-gray">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-xl bg-light-gray p-8">
              <p className="text-lg text-gray">
                Notre outil de reference pour mesurer la qualite du code est{" "}
                <Link
                  href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                  className="text-primary hover:underline"
                >
                  PHPStan
                </Link>
                . Nous l&apos;utilisons systematiquement pour objectiver
                l&apos;etat de la base de code avant et apres chaque etape de
                migration. Combiner PHPStan avec{" "}
                <Link
                  href="/article/rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony"
                  className="text-primary hover:underline"
                >
                  Rector
                </Link>{" "}
                permet d&apos;automatiser une grande partie des mises a jour de
                syntaxe PHP.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi migrer vers Symfony</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Symfony est le choix le plus pertinent pour moderniser une
              application PHP d&apos;entreprise. Voici pourquoi nous le
              recommandons systematiquement.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {symfonyReasons.map((reason) => (
                <Card key={reason.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-gray">{reason.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10 text-center text-lg text-gray">
              <p>
                Pour aller plus loin sur les atouts du framework, consultez
                notre article sur{" "}
                <Link
                  href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                  className="text-primary hover:underline"
                >
                  pourquoi choisir Symfony pour vos projets
                </Link>
                . Pour les projets avec une architecture plus ambitieuse, nous
                appliquons les principes de l&apos;
                <Link
                  href="/article/migration-symfony-architecture-hexagonale-retour-mission"
                  className="text-primary hover:underline"
                >
                  architecture hexagonale dans nos migrations Symfony
                </Link>
                .
              </p>
              <p>
                Si votre application est deja sous Symfony mais sur une version
                obsolete, notre service de{" "}
                <Link
                  href="/migration-symfony"
                  className="text-primary hover:underline"
                >
                  migration Symfony
                </Link>{" "}
                vous accompagne dans la montee de version par paliers.
                Vous heritez d&apos;un projet abandonne ?
                Notre offre de{" "}
                <Link
                  href="/reprise-projet-symfony"
                  className="text-primary hover:underline"
                >
                  reprise de projet Symfony
                </Link>{" "}
                couvre l&apos;audit, la stabilisation et la remise en route.
                Et pour assurer la perennite apres modernisation, nous proposons
                une{" "}
                <Link
                  href="/maintenance-applicative-symfony"
                  className="text-primary hover:underline"
                >
                  maintenance applicative Symfony
                </Link>{" "}
                continue.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Pret a moderniser votre application PHP ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit technique gratuit de 30 minutes. Nous
              analysons votre base de code et vous donnons une feuille de route
              concrete, sans engagement.
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
        <RelatedLinks links={modernisationRelatedLinks} className="bg-light-gray" />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

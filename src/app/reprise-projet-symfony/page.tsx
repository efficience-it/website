import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import StickyMobileCta from "@/components/sections/StickyMobileCta";
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import FadeIn from "@/components/ui/FadeIn";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Reprise de projet Symfony, nous prenons le relais",
  description:
    "Votre prestataire Symfony a disparu ou votre application n'est plus maintenue ? Efficience IT prend en charge la reprise de votre projet : audit, stabilisation, montee de version et maintenance continue.",
  path: "/reprise-projet-symfony",
});

const signes = [
  {
    title: "Bugs non corriges qui s'accumulent",
    description:
      "Les anomalies s'empilent sans qu'aucune correction ne soit apportee. Chaque mise en production devient un pari.",
  },
  {
    title: "Version Symfony obsolete",
    description:
      "Votre application tourne sur Symfony 3 ou 4, des versions qui ne recevront plus aucun correctif de securite.",
  },
  {
    title: "Absence de tests automatises",
    description:
      "Sans suite de tests, chaque modification du code risque de casser une fonctionnalite existante. La regression est permanente.",
  },
  {
    title: "Deploiements risques et manuels",
    description:
      "Mettre en production necessite des interventions manuelles, des fenetre de maintenance et une apprehension a chaque fois.",
  },
  {
    title: "Turnover ou disparition du prestataire",
    description:
      "L'agence ou le developpeur qui connaissait le projet est parti. La documentation est inexistante ou incomplete.",
  },
  {
    title: "Dette technique invisible",
    description:
      "Le code fonctionne mais personne n'ose y toucher. Les nouvelles fonctionnalites prennent de plus en plus de temps a livrer.",
  },
];

const etapes = [
  {
    num: "1",
    title: "Audit initial",
    description:
      "Nous analysons l'etat reel de votre application : architecture, dette technique, securite, couverture de tests et version des dependances. Vous obtenez une vision claire et honnete de ce que vous avez.",
  },
  {
    num: "2",
    title: "Stabilisation",
    description:
      "Correction des bugs critiques, securisation des dependances vulnerables, mise en place d'un environnement de developpement reproductible. L'application retrouve une base saine.",
  },
  {
    num: "3",
    title: "Documentation",
    description:
      "Nous produisons la documentation technique manquante : architecture, regles metier, procedures de deploiement. Vous ne dependez plus d'une seule tete.",
  },
  {
    num: "4",
    title: "Montee de version",
    description:
      "Migration vers une version LTS de Symfony activement maintenue, avec une strategie progressive pour limiter les risques et valider chaque etape.",
  },
  {
    num: "5",
    title: "Maintenance continue",
    description:
      "Contrat de maintenance incluant les mises a jour de securite, la surveillance, la correction de bugs et les evolutions fonctionnelles selon vos priorites.",
  },
];

const pourquoi = [
  {
    title: "Expertise Symfony certifiee",
    description:
      "Notre equipe compte des developpeurs certifies Symfony. Nous connaissons le framework en profondeur, de ses composants internes a ses meilleures pratiques d'architecture.",
  },
  {
    title: "Methodologie eprouvee",
    description:
      "Nous avons deja repris des dizaines de projets en difficulte. Notre approche structuree garantit une transition sereine sans interruption de service.",
  },
  {
    title: "Transparence totale",
    description:
      "Vous savez exactement ce que nous faisons et pourquoi. Chaque decision technique est expliquee, chaque livrable documente. Pas de jargon opaque.",
  },
];

const faqItems = [
  {
    title: "Combien de temps dure une reprise de projet Symfony ?",
    content:
      "La duree depend de l'etat du projet. Une stabilisation initiale prend generalement 2 a 4 semaines. La reprise complete avec montee de version et documentation peut s'etaler sur 2 a 4 mois. Nous etablissons un plan detaille apres l'audit initial.",
  },
  {
    title: "Travaillez-vous sur des anciennes versions de Symfony ?",
    content:
      "Oui. Nous intervenons sur Symfony 3, 4, 5 et 6. Notre premier objectif est de stabiliser votre application sur sa version actuelle avant de planifier une migration vers une version LTS moderne. Nous ne vous forcons jamais a tout reecrire d'un coup.",
  },
  {
    title: "Que comprend l'audit de reprise ?",
    content:
      "L'audit couvre l'architecture applicative, la qualite du code (analyse PHPStan, couverture de tests), la securite (dependances vulnerables, configuration), les performances (requetes lentes, cache) et la dette technique globale. Vous recevez un rapport ecrit avec des recommandations priorisees.",
  },
  {
    title: "Pouvez-vous reprendre un projet sans documentation ?",
    content:
      "C'est precisement notre specialite. La majorite des projets que nous reprenons n'ont aucune documentation. Nous procedons par reverse engineering : lecture du code, entretiens avec les utilisateurs metier, et reconstruction progressive de la connaissance projet.",
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
  { name: "Reprise de projet Symfony", path: "/reprise-projet-symfony" },
]);

const service = serviceJsonLd({
  name: "Reprise de projet Symfony",
  description:
    "Audit, stabilisation, documentation et maintenance d'applications Symfony reprises en cours de vie : nous prenons le relais de votre prestataire et assurons la continuite de votre projet.",
  path: "/reprise-projet-symfony",
});

const webPage = webPageJsonLd({
  name: "Reprise de projet Symfony, nous prenons le relais",
  description: "Votre prestataire Symfony a disparu ou votre application n'est plus maintenue ? Efficience IT prend en charge la reprise de votre projet : audit, stabilisation, montee de version et maintenance continue.",
  path: "/reprise-projet-symfony",
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
});

const repriseRelatedLinks: RelatedLink[] = [
  { title: "Audit Symfony gratuit", description: "30 minutes pour evaluer l'etat de votre application", href: "/audit-symfony-gratuit" },
  { title: "La dette technique : faut-il vraiment en avoir peur ?", description: "Comprendre les enjeux avant d'agir", href: "/article/la-dette-technique-faut-il-vraiment-en-avoir-peur" },
  { title: "Guide de migration dans un projet Symfony", description: "Notre methodologie de montee de version", href: "/article/guide-de-migration-dans-un-projet-symfony" },
  { title: "Pourquoi nous confier la maintenance de vos applications web", description: "Au-dela de la reprise initiale", href: "/article/decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web" },
  { title: "Calendrier des versions Symfony", description: "Dates de fin de maintenance officielle", href: "https://symfony.com/releases", external: true },
];

export default function RepriseProjetSymfony() {
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
                  Reprise de projet
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Reprise de projet Symfony, nous prenons le relais
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre prestataire a disparu ? Votre application Symfony n&apos;est plus maintenue ?
                  Vous heritez d&apos;un code que personne ne maitrise vraiment ?
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT reprend les projets Symfony en difficulte. Nous
                  commencons par un{" "}
                  <strong>audit technique honnete</strong>, puis nous
                  stabilisons, documentons et faisons evoluer votre application
                  pour qu&apos;elle redevienne un actif fiable plutot qu&apos;un boulet.
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
                      d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
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
            <SectionTitle>Les signes qu&apos;il est temps de changer</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Ces situations vous parlent ? Vous n&apos;etes pas seul. Nous intervenons
              regulierement sur des projets qui presentent plusieurs de ces symptomes a la fois.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {signes.map((signe) => (
                <Card key={signe.title}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-red-500">
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
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-dark">
                        {signe.title}
                      </h3>
                      <p className="mt-2 text-gray">{signe.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              La{" "}
              <Link
                href="/article/la-dette-technique-faut-il-vraiment-en-avoir-peur"
                className="text-primary hover:underline"
              >
                dette technique
              </Link>{" "}
              s&apos;accumule silencieusement jusqu&apos;au moment ou elle bloque toute evolution.
              Plus on attend, plus la reprise est complexe et risquee.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Notre approche de reprise</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Une methode eprouvee en cinq etapes pour reprendre le controle de
              votre application Symfony sans rupture de service.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {etapes.map((etape) => (
                <Card key={etape.title}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                    {etape.num}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {etape.title}
                  </h3>
                  <p className="mt-2 text-gray">{etape.description}</p>
                </Card>
              ))}
            </div>
            <p className="mt-10 text-center text-lg text-gray">
              Pour la phase d&apos;audit, nous utilisons notamment{" "}
              <Link
                href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                className="text-primary hover:underline"
              >
                PHPStan
              </Link>{" "}
              pour mesurer la qualite statique du code et identifier rapidement
              les zones les plus fragiles.
            </p>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ce que comprend notre audit de reprise</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Avant de toucher au code, nous vous donnons une vision objective
              de ce que vous avez reellement. L&apos;audit de reprise est inclus
              dans notre offre initiale.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">Architecture et qualite du code</h3>
                    <p className="mt-1 text-gray">
                      Analyse statique PHPStan, detection des anti-patterns, evaluation du couplage et
                      respect des conventions Symfony.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">Securite et dependances</h3>
                    <p className="mt-1 text-gray">
                      Inventaire des dependances Composer, identification des CVE connues,
                      audit de la configuration de securite Symfony.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">Tests et couverture</h3>
                    <p className="mt-1 text-gray">
                      Etat de la suite de tests existante, zones sans couverture,
                      risques de regression identifies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">Performance et infrastructure</h3>
                    <p className="mt-1 text-gray">
                      Requetes Doctrine lentes, configuration du cache, temps de reponse,
                      etat du pipeline de deploiement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">Strategie de migration</h3>
                    <p className="mt-1 text-gray">
                      Si votre application est sur Symfony 3, 4 ou 5, nous etablissons
                      une feuille de route de migration vers une version LTS avec les risques associes.
                      Notre{" "}
                      <Link
                        href="/article/guide-de-migration-dans-un-projet-symfony"
                        className="text-primary hover:underline"
                      >
                        guide de migration Symfony
                      </Link>{" "}
                      vous donne un apercu de notre methodologie.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">Rapport ecrit sous 48h</h3>
                    <p className="mt-1 text-gray">
                      Un document clair avec les constats, les risques priorises et
                      les recommandations d&apos;action imediates et a moyen terme.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Pourquoi nous confier votre projet</SectionTitle>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pourquoi.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
              <div className="mx-auto max-w-3xl text-center">
                <blockquote className="text-lg italic text-gray">
                  &laquo;&nbsp;L&apos;equipe a repris notre projet Symfony en un temps record.
                  En quelques semaines, l&apos;application etait stabilisee et nous avions enfin
                  une documentation exploitable. Le premier audit gratuit nous a immediatement
                  convaincus de la qualite de leur approche.&nbsp;&raquo;
                </blockquote>
                <p className="mt-4 font-semibold text-dark">
                  DSI, entreprise industrielle
                </p>
              </div>
            </div>
            <div className="mt-10 space-y-4 text-center text-lg text-gray">
              <p>
                Votre application n&apos;est pas sous Symfony ? Pour les projets
                PHP natif, CodeIgniter ou Zend, decouvrez notre offre de{" "}
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  modernisation d&apos;application PHP
                </Link>
                , qui suit la meme logique de migration progressive.
              </p>
              <p>
                Nous intervenons principalement depuis Lille et la region
                Hauts-de-France. En tant qu&apos;{" "}
                <Link
                  href="/agence-symfony-lille"
                  className="text-primary hover:underline"
                >
                  agence Symfony a Lille
                </Link>
                , nous pouvons nous deplacer rapidement chez vous pour
                comprendre votre contexte metier.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Votre projet Symfony a besoin d&apos;un regard expert ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Commencez par un audit de 30 minutes, gratuit et sans engagement.
              Nous vous donnons une vision claire avant de proposer quoi que ce soit.
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
        <RelatedLinks links={repriseRelatedLinks} className="bg-light-gray" />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

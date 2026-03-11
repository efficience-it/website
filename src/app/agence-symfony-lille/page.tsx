import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { BASE_URL } from "@/lib/metadata";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "Agence Symfony a Lille, votre partenaire developpement web",
  description:
    "Efficience IT, agence Symfony a Lille : developpement sur mesure, maintenance, migration et audit. Proximite, reactivite et expertise technique au service de vos projets.",
  path: "/agence-symfony-lille",
});

const expertises = [
  {
    title: "Developpement Symfony sur mesure",
    description:
      "Conception et realisation d'applications web metier avec Symfony : architecture propre, code maintenable, livraisons iteratives.",
  },
  {
    title: "Maintenance et TMA",
    description:
      "Prise en charge technique de vos applications existantes : corrections, evolutions, mises a jour de securite et montees de version.",
  },
  {
    title: "Migration Symfony",
    description:
      "Migration de Symfony 3, 4 ou 5 vers les versions LTS actuelles. Strategie progressive, sans interruption de service.",
  },
  {
    title: "API REST et API Platform",
    description:
      "Conception d'API robustes avec API Platform et Symfony. Interfaces documentees, versionnees et testees.",
  },
  {
    title: "Audit technique",
    description:
      "Analyse de votre application : architecture, dette technique, securite, performances. Rapport ecrit avec recommandations priorisees.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,
  name: "Efficience IT",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo/logo-bleu.webp`,
  image: `${BASE_URL}/images/logo/logo-bleu.webp`,
  description:
    "Agence Symfony a Lille, Efficience IT developpe des applications web sur mesure, assure la maintenance et accompagne la migration de vos projets PHP.",
  email: "contact@itefficience.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "677 Avenue de la Republique",
    addressLocality: "Lille",
    postalCode: "59800",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.6292,
    longitude: 3.0573,
  },
  knowsAbout: ["Symfony", "PHP", "API Platform", "Doctrine", "DevOps"],
  areaServed: [
    { "@type": "City", name: "Lille" },
    { "@type": "AdministrativeArea", name: "Hauts-de-France" },
    { "@type": "Country", name: "France" },
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://github.com/efficience-it",
    "https://www.linkedin.com/company/efficience-it",
  ],
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Agence Symfony a Lille", path: "/agence-symfony-lille" },
]);

export default function AgenceSymfonyLille() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <main>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Lille - Hauts-de-France
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Agence Symfony a Lille, votre partenaire developpement web
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Efficience IT est une{" "}
                  <strong>agence Symfony basee a Lille</strong>, specialisee
                  dans le developpement d&apos;applications web PHP robustes et
                  evoluees. Nous accompagnons les PME, ETI et startups du
                  territoire dans leurs projets techniques : creation, maintenance,
                  migration et audit.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Notre ancrage lillois nous permet d&apos;intervenir rapidement,
                  en presentiel ou a distance, avec une connaissance directe de
                  l&apos;ecosysteme tech de la region.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/audit-symfony-gratuit">
                    Audit Symfony gratuit
                  </Button>
                  <Button href="/contact" variant="outline">
                    Contactez-nous
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-lg bg-white p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    10
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Ans d&apos;experience</p>
                    <p className="text-sm text-gray">Expertise Symfony depuis les premieres versions LTS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    50+
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Projets Symfony livres</p>
                    <p className="text-sm text-gray">Applications metier, API, e-commerce, SaaS</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                    100%
                  </span>
                  <div>
                    <p className="font-semibold text-dark">Focus PHP et Symfony</p>
                    <p className="text-sm text-gray">Specialistes, pas generalistes</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>
              Pourquoi choisir une agence Symfony a Lille
            </SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Travailler avec une agence locale presente de vrais avantages
              concrets pour vos projets techniques.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Proximite et reactivite
                </h3>
                <p className="mt-2 text-gray">
                  Reunions en presentiel possibles, interventions rapides sur
                  site, et une communication directe sans intermediaire. Nous
                  sommes dans le meme fuseau horaire, avec les memes contraintes
                  metier que vous.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Connaissance de l&apos;ecosysteme local
                </h3>
                <p className="mt-2 text-gray">
                  Ancres dans la metropole lilloise, nous connaissons les acteurs
                  tech de la region, participons aux evenements de la communaute
                  PHP et Symfony, et entretenons des liens avec les structures
                  d&apos;accompagnement locales.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-lg font-bold text-dark">
                  Partenariat sur le long terme
                </h3>
                <p className="mt-2 text-gray">
                  Notre modele n&apos;est pas celui de la prestation one-shot.
                  Nous construisons des relations durables avec nos clients :
                  vous avez un interlocuteur technique stable qui connait votre
                  application et votre metier.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Nos expertises Symfony</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Toutes nos interventions s&apos;appuient sur une maitrise approfondie
              de{" "}
              <Link
                href="/article/pourquoi-choisir-symfony-pour-vos-projets"
                className="text-primary hover:underline"
              >
                Symfony, le framework PHP de reference
              </Link>{" "}
              pour les applications metier exigeantes.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {expertises.map((item) => (
                <Card key={item.title}>
                  <h3 className="font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
            <div className="mt-10 space-y-4 text-center">
              <p className="text-lg text-gray">
                Vous reprenez une application abandonnee par votre prestataire ?
                Nous intervenons rapidement pour stabiliser et documenter votre
                projet via notre offre de{" "}
                <Link
                  href="/reprise-projet-symfony"
                  className="text-primary hover:underline"
                >
                  reprise de projet Symfony
                </Link>
                .
              </p>
              <p className="text-lg text-gray">
                Pour les bases de code PHP legacy non-Symfony, nous proposons un
                accompagnement dedie a la{" "}
                <Link
                  href="/modernisation-application-php"
                  className="text-primary hover:underline"
                >
                  modernisation d&apos;application PHP
                </Link>{" "}
                avec migration progressive vers Symfony.
              </p>
              <p className="text-lg text-gray">
                Vos equipes veulent monter en competences ?{" "}
                <Link
                  href="/formation-symfony-entreprise"
                  className="text-primary hover:underline"
                >
                  Nos formations Symfony en entreprise
                </Link>{" "}
                sont dispensees en presentiel a Lille ou a distance, par des
                formateurs actifs sur des projets en production.
              </p>
              <p className="text-lg text-gray">
                Vous avez un besoin d&apos;{" "}
                <Link
                  href="/api-sur-mesure-symfony"
                  className="text-primary hover:underline"
                >
                  API sur mesure avec Symfony et API Platform
                </Link>{" "}
                pour connecter vos systemes ou ouvrir votre plateforme a des
                partenaires ?
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Ecosysteme tech
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-dark md:text-4xl">
                  L&apos;ecosysteme tech lillois
                </h2>
                <p className="mt-6 text-lg text-gray">
                  Lille est la <strong>3e ville tech de France</strong>, apres
                  Paris et Lyon. La metropole lilloise accueille plusieurs milliers
                  de profils IT, portee par des initiatives comme{" "}
                  <a
                    href="https://euratechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    EuraTechnologies
                  </a>
                  , l&apos;un des premiers incubateurs tech europeens.
                </p>
                <p className="mt-4 text-lg text-gray">
                  La communaute PHP est particulierement active dans les
                  Hauts-de-France, avec l&apos;
                  <a
                    href="https://afup.org/association/antennes-regionales/afup-hauts-de-france"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    AFUP Hauts-de-France
                  </a>{" "}
                  qui organise regulierement des meetups et conférences autour de
                  PHP, Symfony et les bonnes pratiques de developpement.
                </p>
                <p className="mt-4 text-lg text-gray">
                  Efficience IT s&apos;inscrit dans cet ecosysteme : nous
                  participons a la vie de la communaute, formons nos equipes et
                  contribuons aux debats techniques locaux. C&apos;est aussi ce qui
                  nous permet de vous trouver les meilleurs profils pour renforcer
                  vos equipes.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">3e</p>
                  <p className="mt-1 text-gray">Ville tech en France par le nombre de profils IT</p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">30 000+</p>
                  <p className="mt-1 text-gray">Etudiants en ecoles et universites tech dans la metropole</p>
                </div>
                <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                  <p className="font-display text-3xl font-bold text-primary">1h20</p>
                  <p className="mt-1 text-gray">De Paris en TGV : l&apos;accessibilite d&apos;une capitale, les avantages d&apos;une region</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>Comment nous travaillons</SectionTitle>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  1
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Audit et cadrage
                </h3>
                <p className="mt-2 text-gray">
                  Nous commençons par comprendre votre application, votre metier
                  et vos contraintes. L&apos;
                  <Link
                    href="/audit-symfony-gratuit"
                    className="text-primary hover:underline"
                  >
                    audit Symfony gratuit de 30 minutes
                  </Link>{" "}
                  est le point d&apos;entree naturel.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  2
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Developpement itératif
                </h3>
                <p className="mt-2 text-gray">
                  Nous travaillons en sprints courts avec des livraisons
                  regulieres. Vous avez une visibilite constante sur
                  l&apos;avancement et pouvez reorienter les priorites a tout
                  moment.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  3
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-dark">
                  Suivi et evolution
                </h3>
                <p className="mt-2 text-gray">
                  Apres la mise en production, nous assurons la maintenance et
                  l&apos;evolution de votre application. Un seul interlocuteur,
                  une continuite technique reelle.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <SectionTitle>Ce que vous pouvez attendre de nous</SectionTitle>
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Un code maintenable et documente
                    </h3>
                    <p className="mt-1 text-gray">
                      Nous appliquons les bonnes pratiques Symfony : injection de
                      dependances, separation des couches, tests automatises.{" "}
                      <Link
                        href="/article/les-bundles-les-plus-utilises-dans-les-projets-symfony"
                        className="text-primary hover:underline"
                      >
                        Notre utilisation rigoureuse des bundles Symfony
                      </Link>{" "}
                      garantit des projets evolutifs sur le long terme.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Une communication claire
                    </h3>
                    <p className="mt-1 text-gray">
                      Pas de jargon inutile avec vos equipes metier, pas de
                      sur-simplification avec vos equipes techniques. Nous
                      adaptons notre niveau de communication a votre
                      interlocuteur.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Une equipe stable
                    </h3>
                    <p className="mt-1 text-gray">
                      Vous ne changez pas d&apos;interlocuteur a chaque sprint.
                      Les developpeurs qui demarrent votre projet le suivent dans
                      la duree.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl text-primary">&#10003;</span>
                  <div>
                    <h3 className="font-display font-bold text-dark">
                      Une culture qualite
                    </h3>
                    <p className="mt-1 text-gray">
                      PHPStan, tests PHPUnit, revues de code, integration
                      continue : la qualite n&apos;est pas une option mais une
                      pratique quotidienne. Decouvrez{" "}
                      <Link
                        href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                        className="text-primary hover:underline"
                      >
                        comment PHPStan ameliore la qualite de votre code PHP
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Un projet Symfony a Lille ou en Hauts-de-France ?
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Parlez-nous de votre projet. Un premier echange gratuit de 30
              minutes pour evaluer vos besoins et voir si nous sommes le bon
              partenaire.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/audit-symfony-gratuit"
                className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
              >
                Demander un audit gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-block rounded-lg border border-white/50 px-8 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
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
                , les atouts du framework PHP pour les applications exigeantes
              </li>
              <li>
                <Link
                  href="/article/guide-de-migration-dans-un-projet-symfony"
                  className="text-primary hover:underline"
                >
                  Guide de migration dans un projet Symfony
                </Link>{" "}
                , notre methodologie pour les mises a jour de version
              </li>
              <li>
                <Link
                  href="/developpement-web-sur-mesure"
                  className="text-primary hover:underline"
                >
                  Developpement web sur mesure
                </Link>{" "}
                , notre offre complete de creation d&apos;applications web
              </li>
              <li>
                <a
                  href="https://symfony.com/doc/current/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation officielle Symfony
                </a>{" "}
                , la reference technique du framework
              </li>
            </ul>
          </Container>
        </section>
      </main>
    </>
  );
}

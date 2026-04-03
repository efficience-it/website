import Image from "next/image";
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
import RelatedLinks from "@/components/sections/RelatedLinks";
import type { RelatedLink } from "@/components/sections/RelatedLinks";
import { breadcrumbJsonLd, serviceJsonLd, webPageJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title:
    "Sécurité applicative et conformité RGPD avec Symfony",
  description:
    "Efficience IT sécurise vos applications Symfony : audit de sécurité, conformité RGPD, bonnes pratiques OWASP, anonymisation et chiffrement des données.",
  path: "/secteur/securite-conformite",
});

const expertises = [
  {
    title: "Audit de sécurité applicative",
    description:
      "Analyse complète de votre application selon le référentiel OWASP Top 10 : injections, XSS, authentification, contrôle d'accès, configuration. Vous repartez avec un rapport détaillé et un plan de remédiation priorisé.",
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  },
  {
    title: "Conformité RGPD",
    description:
      "Gestion du consentement, droit à l'oubli, portabilité des données, registre de traitements. Nous intégrons les exigences RGPD dès la conception de l'application, pas en fin de projet quand c'est trop tard.",
    icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  },
  {
    title: "Anonymisation des données",
    description:
      "Les environnements de recette et de développement ne doivent jamais contenir de données personnelles réelles. Nous mettons en place l'anonymisation automatique des bases de données avec DbToolsBundle, intégrée dans votre pipeline CI/CD.",
    icon: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88",
  },
  {
    title: "Chiffrement et gestion des secrets",
    description:
      "Chiffrement des données sensibles au repos et en transit, gestion des clés via Vault ou AWS KMS, rotation automatique des secrets. Les mots de passe, tokens et clés API ne sont jamais stockés en clair.",
    icon: "M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z",
  },
];

const references = [
  { name: "Crédit Agricole Auto Bank", image: "/images/clients/auto-bank.webp" },
  { name: "Mon Petit Placement", image: "/images/clients/mes-petits-placements.webp" },
  { name: "Ministère", image: "/images/clients/ministere.webp" },
];

const faqItems = [
  {
    title: "Comment savoir si mon application est vulnérable ?",
    content:
      "Un audit de sécurité applicative est le meilleur point de départ. Nous analysons le code source, les dépendances, la configuration serveur et les mécanismes d'authentification. Le rapport identifie les vulnérabilités critiques et propose un plan de remédiation priorisé par niveau de risque.",
  },
  {
    title: "La conformité RGPD concerne-t-elle les applications internes ?",
    content:
      "Oui. Toute application qui traite des données personnelles est concernée, y compris les outils internes (CRM, gestion RH, intranet). Les obligations sont les mêmes : base légale de traitement, durée de conservation, droit d'accès et de suppression, registre de traitements.",
  },
  {
    title: "Comment anonymisez-vous les bases de données ?",
    content:
      "Nous utilisons DbToolsBundle, un outil open source développé par notre équipe, qui anonymise les données personnelles directement en base. L'anonymisation est automatisée dans le pipeline CI/CD : chaque copie de la base de production vers la recette passe par l'anonymiseur avant d'être disponible.",
  },
  {
    title: "Proposez-vous des tests de pénétration ?",
    content:
      "Nous réalisons des audits de sécurité applicative (analyse du code et de l'architecture). Pour les tests de pénétration au sens strict (simulation d'attaque sur l'infrastructure), nous travaillons avec des partenaires spécialisés en pentest et coordonnons l'ensemble de la démarche.",
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
  { name: "Sécurité et conformité", path: "/secteur/securite-conformite" },
]);

const service = serviceJsonLd({
  name: "Sécurité applicative et conformité RGPD",
  description:
    "Audit de sécurité applicative, conformité RGPD, anonymisation des données, chiffrement et bonnes pratiques OWASP pour vos applications Symfony.",
  path: "/secteur/securite-conformite",
});

const webPage = webPageJsonLd({
  name: "Sécurité applicative et conformité RGPD avec Symfony",
  description:
    "Efficience IT sécurise vos applications Symfony : audit de sécurité, conformité RGPD, bonnes pratiques OWASP, anonymisation et chiffrement des données.",
  path: "/secteur/securite-conformite",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
});

const relatedLinks: RelatedLink[] = [
  {
    title: "CVE : comprendre les failles de sécurité",
    description:
      "Pourquoi les mises à jour de sécurité sont critiques",
    href: "/article/cve-comprendre-les-failles-pour-mieux-se-proteger",
  },
  {
    title: "DbToolsBundle : anonymiser vos bases",
    description:
      "Notre outil open source d'anonymisation de données",
    href: "/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees",
  },
  {
    title: "Former vos équipes à la sécurité",
    description:
      "Sensibiliser vos développeurs aux bonnes pratiques",
    href: "/article/comment-former-vos-equipes-a-la-securite-informatique-en-toute-simplicite",
  },
  {
    title: "Sécurité application Symfony",
    description:
      "Notre offre complète de sécurisation d'applications",
    href: "/securite-application-symfony",
  },
  {
    title: "Audit de code PHP",
    description:
      "Identifier les vulnérabilités dans votre code source",
    href: "/audit-code-php",
  },
  {
    title: "Applications pour la finance",
    description:
      "Comment nous sécurisons les applications du secteur financier",
    href: "/secteur/finance",
  },
  {
    title: "OWASP Top 10",
    description: "Les 10 risques de sécurité les plus critiques pour les applications web",
    href: "https://owasp.org/www-project-top-ten/",
    external: true,
  },
];

export default function SecteurSecuriteConformite() {
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
            <Breadcrumb items={[{ label: "Nos secteurs", href: "/secteur" }, { label: "Sécurité et conformité" }]} />
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Sécurité et conformité
                </p>
                <h1 className="mt-2 font-display text-4xl font-bold text-dark md:text-5xl">
                  Sécurité applicative et conformité RGPD avec Symfony
                </h1>
                <p className="mt-6 max-w-3xl text-lg text-gray">
                  Votre application traite des données sensibles, et vous
                  n&apos;êtes pas certain qu&apos;elle résisterait à un audit de
                  sécurité. Les obligations RGPD sont floues, et personne
                  dans l&apos;équipe n&apos;a le temps de s&apos;en occuper
                  sérieusement.
                </p>
                <p className="mt-4 max-w-3xl text-lg text-gray">
                  Efficience IT{" "}
                  <Link
                    href="/securite-application-symfony"
                    className="text-primary hover:underline"
                  >
                    sécurise vos applications Symfony
                  </Link>{" "}
                  et vous met en conformité RGPD. Audit de sécurité,
                  remédiation des vulnérabilités,{" "}
                  <Link
                    href="/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees"
                    className="text-primary hover:underline"
                  >
                    anonymisation des données
                  </Link>{" "}
                  et bonnes pratiques intégrées au quotidien de vos équipes.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">
                    Demander un audit
                  </Button>
                  <Button href="/audit-symfony-gratuit" variant="outline">
                    Audit Symfony gratuit
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
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
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
            <SectionTitle>Notre expertise sécurité</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              De l&apos;audit a la remédiation, une approche complète de la
              sécurité applicative.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {expertises.map((item) => (
                <Card key={item.title}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6 text-primary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-dark">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray">{item.description}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-light-gray py-16 md:py-24">
          <Container>
            <SectionTitle>La sécurité, un processus continu</SectionTitle>
            <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg text-gray">
              <p>
                La sécurité n&apos;est pas un audit ponctuel. C&apos;est un
                ensemble de pratiques intégrées au quotidien du développement.
                Chaque{" "}
                <Link
                  href="/article/cve-comprendre-les-failles-pour-mieux-se-proteger"
                  className="text-primary hover:underline"
                >
                  CVE publiée
                </Link>{" "}
                sur une dépendance est évaluée et corrigée. Chaque
                déploiement est vérifié par des{" "}
                <Link
                  href="/tests-automatises-php"
                  className="text-primary hover:underline"
                >
                  tests automatisés
                </Link>{" "}
                qui incluent des vérifications de sécurité.
              </p>
              <p>
                Le composant Security de Symfony offre un socle solide pour la
                gestion des authentifications et des autorisations.
                Nous le complétons avec des pratiques éprouvées : analyse
                statique du code avec{" "}
                <Link
                  href="/article/comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php"
                  className="text-primary hover:underline"
                >
                  PHPStan
                </Link>
                , audit des dépendances, chiffrement des données sensibles
                et gestion centralisée des secrets.
              </p>
              <p>
                Pour la conformité RGPD, nous intégrons les contraintes
                dès la conception de l&apos;
                <Link
                  href="/architecture-hexagonale-symfony"
                  className="text-primary hover:underline"
                >
                  architecture
                </Link>
                . Les données personnelles sont identifiées, leur durée
                de conservation est définie, et l&apos;
                <Link
                  href="/article/dbtoolsbundle-anonymiser-vos-bases-de-donnees"
                  className="text-primary hover:underline"
                >
                  anonymisation
                </Link>{" "}
                des environnements hors production est automatisée. Notre{" "}
                <Link
                  href="/secteur/maintenance-applicative"
                  className="text-primary hover:underline"
                >
                  maintenance applicative
                </Link>{" "}
                assure ensuite le suivi dans la durée.
              </p>
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="py-16 md:py-24">
          <Container>
            <SectionTitle>Ils nous font confiance</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-gray">
              Des acteurs des secteurs régulés nous confient la sécurisation
              de leurs applications.
            </p>
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-8">
              {references.map((client) => (
                <div
                  key={client.name}
                  className="overflow-hidden rounded-lg shadow-sm"
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Container>
        </section>
        </FadeIn>

        <FadeIn>
        <section className="bg-primary py-16 text-center text-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="font-display text-3xl font-bold">
              Sécurisez votre application avant qu&apos;il ne soit trop tard
            </h2>
            <p className="mt-4 text-lg text-white/90">
              Demandez un audit de sécurité. Nous identifions les
              vulnérabilités de votre application et vous proposons un
              plan de remédiation concret.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition hover:bg-gray-100"
            >
              Demander un audit
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
        <RelatedLinks links={relatedLinks} />
        </FadeIn>

        <FadeIn>
        <CallToAction />
        <StickyMobileCta />
        </FadeIn>
      </main>
    </>
  );
}

import type { NextConfig } from "next";

const ARTICLE_REDIRECTS = [
  [
    "ameliorer-lexperience-utilisateur-grace-au-manifeste-des-applications-web",
    "manifeste-applications-web",
  ],
  ["code-mort-mission-elimination", "code-mort-php-detecter-supprimer"],
  [
    "comment-former-vos-equipes-a-la-securite-informatique-en-toute-simplicite",
    "former-equipes-securite-informatique",
  ],
  [
    "comment-phpstan-peut-vous-aider-a-ameliorer-la-qualite-de-votre-code-php",
    "phpstan-2-niveau-10",
  ],
  [
    "envoyer-des-e-mails-sur-symfony-avec-swift-mailer-vs-avec-le-composant-mailer-quelle-difference",
    "symfony-messenger-vs-php-enqueue-differences",
  ],
  [
    "forest-admin-le-gestionnaire-de-donnees-qui-facilite-la-vie",
    "easy-admin-vs-forest-admin-differences-avantages",
  ],
  [
    "retour-sur-la-symfonycon-de-2024",
    "forum-php-symfonycon-2024",
  ],
  [
    "la-certification-twig-une-1ere-pour-le-chemin-de-la-certif-symfony",
    "certifications-symfony-twig-sylius",
  ],
  [
    "comment-rediger-un-cahier-de-charge-pour-un-projet-agile",
    "comment-rediger-cahier-de-charge-projet-agile",
  ],
  [
    "comment-se-passe-un-audit-chez-efficience-it-quel-contenu-comment-procede-t-on-quels-sont-les-criteres-quel-procede",
    "audit-web-efficience-it-methode-criteres-contenu",
  ],
  [
    "comprendre-et-utiliser-le-bundle-alice-faker-dans-vos-projets-symfony",
    "comprendre-utiliser-bundle-alice-faker-projets-symfony",
  ],
  [
    "cve-comprendre-les-failles-pour-mieux-se-proteger",
    "cve-comprendre-failles-securite",
  ],
  [
    "dbtoolsbundle-anonymiser-vos-bases-de-donnees",
    "dbtoolsbundle-anonymiser-bases-de-donnees",
  ],
  [
    "la-decarbonation-du-numerique-une-des-tendances-technologiques-de-2022",
    "decarbonation-numerique-tendances-technologiques",
  ],
  [
    "decouvrez-les-raisons-de-nous-confier-la-maintenance-de-vos-applications-web",
    "decouvrez-raisons-confier-maintenance-applications-web",
  ],
  [
    "la-dette-technique-faut-il-vraiment-en-avoir-peur",
    "dette-technique-faut-il-en-avoir-peur",
  ],
  [
    "doctrine-orm-3-0-une-nouvelle-version-majeure-pour-les-bases-de-donnees",
    "doctrine-orm-3-nouvelle-version-majeure-bases-de-donnees",
  ],
  [
    "easy-admin-vs-forest-admin-differences-et-avantages",
    "easy-admin-vs-forest-admin-differences-avantages",
  ],
  ["ecosia-preservateur-decologie", "ecosia-preservateur-ecologie"],
  [
    "les-evenements-incontournables-de-linnovation-2025",
    "evenements-innovation-2025",
  ],
  ["la-fondation-php-souffle-ses-trois-bougies", "fondation-php-trois-ans"],
  [
    "geo-rendre-votre-application-symfony-visible-dans-les-moteurs-ia",
    "geo-symfony-visibilite-moteurs-ia",
  ],
  [
    "les-certifications-symfony-twig-symfony-sylius",
    "certifications-symfony-twig-sylius",
  ],
  [
    "les-contributions-open-source-un-enjeu-de-taille-pour-les-developpeurs-et-les-projets",
    "contributions-open-source-enjeu-developpeurs-projets",
  ],
  [
    "les-6-etapes-pour-monter-en-competences-sur-symfony",
    "les-6-etapes-monter-en-competences-symfony",
  ],
  [
    "llms-txt-le-nouveau-levier-seo-a-lere-de-lintelligence-artificielle",
    "llms-txt-levier-seo-intelligence-artificielle",
  ],
  [
    "mieux-comprendre-le-vocabulaire-des-developpeurs-web-guide-complet",
    "mieux-comprendre-vocabulaire-developpeurs-web",
  ],
  [
    "normes-rgaa-les-cles-dune-experience-utilisateur-reussie-pour-tous",
    "normes-rgaa-accessibilite",
  ],
  [
    "php-9-0-devoile-ce-que-vous-devez-savoir-avant-la-sortie",
    "php-9-nouveautes-changements-majeurs",
  ],
  [
    "phpstan-2-0-niveau-10-et-nouvelles-fonctionnalites-pour-un-code-impeccable",
    "phpstan-2-niveau-10",
  ],
  [
    "pourquoi-docker-est-indispensable-en-production-aujourdhui",
    "docker-en-production-performance-fiabilite",
  ],
  [
    "quel-outil-choisir-pour-votre-documentation-technique",
    "quel-outil-choisir-documentation-technique",
  ],
  [
    "quelles-sont-les-differences-entre-symfony-messenger-php-enqueue-quoi-utiliser",
    "symfony-messenger-vs-php-enqueue-differences",
  ],
  [
    "quels-sont-les-avantages-dun-progiciel-pour-votre-entreprise",
    "avantages-progiciel-pour-votre-entreprise",
  ],
  [
    "rector-et-ses-pouvoirs-maitrisez-levolution-de-votre-code-symfony",
    "rector-pouvoirs-maitrisez-evolution-code-symfony",
  ],
  ["retour-sur-lafup-day-2024", "retour-sur-afup-day-2024"],
  [
    "retour-sur-lafup-day-2025-lille-php-a-lhonneur-communaute-au-coeur",
    "afup-day-2025-lille",
  ],
  ["retour-sur-le-forum-php-2024", "forum-php-symfonycon-2024"],
  ["sept-raisons-de-recourir-a-une-dev-house", "sept-raisons-recourir-dev-house"],
  [
    "swagger-nelmio-bundle-et-ses-fonctionnalites-pourquoi-lutilise-t-on",
    "swagger-nelmio-bundle-fonctionnalites",
  ],
  [
    "symfony-insight-a-quoi-ca-sert-et-comment-le-met-on-en-place",
    "symfony-insight-a-quoi-ca-sert-mise-en-place",
  ],
  ["tout-savoir-sur-la-mise-en-cache-tips", "tout-savoir-sur-la-mise-en-cache"],
  [
    "utilisation-de-composer-dans-le-developpement-symfony-conseils-pratiques",
    "utilisation-composer-developpement-symfony-conseils-pratiques",
  ],
  ["vivatech-2025-linnovation-au-rendez-vous", "vivatech-2025-innovations-tendances"],
];

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/blog/outils-utiles",
        destination: "/blog/outils",
        permanent: true,
      },
      ...ARTICLE_REDIRECTS.map(([oldSlug, newSlug]) => ({
        source: `/article/${oldSlug}`,
        destination: `/article/${newSlug}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;

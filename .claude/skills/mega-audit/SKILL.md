---
name: mega-audit
description: Audit complet du site itefficience.com à partir du code source (SEO technique, FR/EN, contenu et E-E-A-T, recherche IA, maillage, UX/CRO/accessibilité, orthographe), avec constats prouvés, gravité et plan d'action. À utiliser quand on demande un audit SEO, UX ou éditorial du site, ou d'une partie (`/mega-audit seo`, `/mega-audit blog`, `/mega-audit ortho`).
---

# Audit du site

Le site est une agence de développement PHP/Symfony (itefficience.com), reproduite en Next.js dans ce dépôt. L'audit se fait sur le code source : pages, composants, `src/lib/structured-data.ts`, `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt`, contenus MDX du blog (FR et EN), styles, assets. C'est un avantage sur un audit par crawl : le JSON-LD, les métadonnées et le maillage se lisent directement, sans deviner.

Contrainte absolue : respecter `CLAUDE.md` (pages hors périmètre, décisions SEO volontaires, h2/h3 uniquement, pas de tiret cadratin, jamais de budget ni de prix). Ne jamais recommander une page ou une fonctionnalité exclue.

Argument optionnel : un domaine (`seo`, `i18n`, `contenu`, `ia`, `maillage`, `ux`, `ortho`) ou un chemin pour restreindre l'audit. Sans argument, audit complet.

## Étape 1 : collecter les preuves mesurables

Ne pas faire mesurer par des agents ce qu'un test ou un script mesure déjà. Lancer d'abord, sans `npm run build` :

```bash
npx jest src/__tests__/seo-headings.test.ts src/__tests__/seo-metadata.test.ts src/__tests__/blog-frontmatter.test.ts src/__tests__/internal-links.test.ts src/__tests__/maillage-interne.test.ts src/__tests__/no-em-dash.test.ts src/__tests__/llms-accents.test.ts
npm run check:translations
npx -y tsx@4 scripts/audit-blog-to-service-linking.ts
npm run audit:anchor-diversity
```

Ces contrôles couvrent déjà : headings, title et meta, front matter, 1000 à 2000 mots, densité de liens internes, routes valides, maillage vers les pages services, diversité des ancres (`.docs/reference/anchor-lexicon.md`, `.docs/reference/blog-service-linking.md`), traductions. Leurs résultats sont fournis aux agents comme faits établis : un agent ne les recompte pas, il les interprète.

Données réelles : si un export Search Console (requêtes, pages, positions, CTR) ou GA4 est fourni, l'utiliser en priorité. Sans données, l'écrire en tête du rapport et ne jamais inventer de volume de recherche, de trafic ou de position : toute estimation est marquée « estimation non sourcée ».

## Étape 2 : agents par domaine

Lancer en parallèle, dans le même message, un agent par domaine retenu (outil Agent, sans `isolation`, sans worktree, en lecture seule). Chaque agent reçoit : ce fichier, les règles de `CLAUDE.md`, les résultats de l'étape 1, et la consigne de ne rien valider par complaisance ni d'inventer un défaut pour remplir une section.

### A. SEO technique

- robots.txt : ressources bloquées, robots d'IA autorisés volontairement, référence aux sitemaps (vérifier que chaque sitemap servi y figure).
- Sitemaps : complets, uniquement des URLs canoniques et indexables, cohérents avec les routes existantes (`/domain/*` exclues volontairement).
- Canonicals : auto-référents, absolus, cohérents avec le sitemap et le slash final.
- Indexation : `noindex` volontaires ou accidentels, pages orphelines, redirections en chaîne ou en boucle, paramètres créant du contenu dupliqué.
- Schema.org (`src/lib/structured-data.ts`) : Organization, Article/TechArticle avec `author`, `datePublished`, `dateModified`, BreadcrumbList, Service. FAQPage reste utile pour les moteurs IA mais ne produit plus de résultat enrichi Google pour un site de ce type : ne pas le présenter comme un levier de clic.
- Performance : `width`/`height` sur les images (CLS), image LCP prioritaire sur les pages clés, chargement des polices, JavaScript client inutile sur les pages statiques. Seuils : LCP < 2,5 s, INP < 200 ms, CLS < 0,1. Sans mesure réelle, parler de risque, pas de score.
- Mobile : viewport, cibles tactiles de 44 px minimum, texte lisible sans zoom.

### B. FR/EN (hreflang)

- Chaque page FR et EN déclare son hreflang, avec auto-référence et réciprocité (si A pointe vers B, B pointe vers A).
- Codes valides (`fr`, `en`), `x-default` cohérent.
- Canonical de chaque langue vers elle-même, jamais vers l'autre langue.
- Sitemap : alternates présents pour chaque URL traduite, y compris l'URL elle-même.
- Pages EN pauvres : contenu principal traduit en entier, pas seulement la navigation. Une page EN sans contenu utile nuit au site entier : mieux vaut ne pas la publier.
- Terminologie conforme à `.docs/reference/glossaire-fr-en.md`.

### C. Contenu, E-E-A-T et fraîcheur

Appliquer le test « Who / How / Why » du guide Google sur le contenu utile (https://developers.google.com/search/docs/fundamentals/creating-helpful-content) :

- Qui : auteur visible sur chaque article, bio, lien vers son expertise, schema `author`.
- Comment : expérience vécue (cas client réel, mesure, erreur rencontrée, code testé), pas une paraphrase de la documentation.
- Pourquoi : l'article aide un lecteur précis. Signal négatif : un texte gonflé pour atteindre un nombre de mots. La fourchette 1000 à 2000 mots est un plancher de couverture imposé par la CI, pas un objectif ; un article délayé pour l'atteindre est un défaut.
- Fraîcheur : `updatedAt` renseigné et affiché quand l'article est révisé. Signaler les articles de plus de 12 mois sur un sujet qui bouge (versions de Symfony, PHP, API Platform, Sylius) sans mise à jour, en vérifiant les versions citées.
- Contenu mince ou dupliqué, cannibalisation (plusieurs pages sur la même intention), intentions couvertes (informationnelle, comparative, transactionnelle) et sujets manquants.
- Liens externes : sources à haute autorité, doc Symfony officielle sur les articles Symfony, jamais un concurrent.
- Tournures qui trahissent un texte généré : formules creuses, triplets d'adjectifs, « dans le paysage actuel ».

### D. Recherche IA (AI Overviews, ChatGPT, Perplexity)

Google indique qu'optimiser pour ses fonctions d'IA reste du SEO : mêmes systèmes de classement et de qualité. Pas de fichier ni de balisage spécial pour Google.

- Passages citables : chaque section importante commence par une réponse directe et autonome, compréhensible hors contexte (définition, chiffre, étapes).
- Introduction qui répond à la question du titre dans les premières phrases.
- Tableaux et listes pour les comparaisons, chiffres sourcés, date visible.
- Entités claires : nom de l'entreprise, auteurs, technologies, cohérents entre pages et schema.
- `public/llms.txt` et `llms-full.txt` : à jour avec les pages clés. Le signaler sans lui attribuer d'effet sur Google, qui ne l'utilise pas.
- Page `/geo-optimisation-ia` : le site applique-t-il ce qu'il vend ?

### E. Maillage et architecture sémantique

- Silos cohérents (hub service vers articles et retour), profondeur de 3 clics maximum.
- Pages avec trop peu de liens entrants, notamment les articles récents qui ne reçoivent aucun lien des anciens.
- Ancres descriptives et variées, sans sur-optimisation (seuils de `anchor-lexicon.md`).
- Liens dans le corps privilégiés aux listes de bas de page.
- Headings descriptifs, avec le sujet de la page, sans bourrage.

### F. UX, conversion et accessibilité

- Proposition de valeur claire en moins de 5 secondes, hero, crédibilité B2B.
- Parcours : accueil vers service vers contact, blog vers article vers service vers contact, Google vers service vers contact. Pour chacun : clics, frictions, culs-de-sac.
- CTA : visibles, hiérarchisés, libellés orientés action, adaptés au stade du lecteur, présents dans les articles.
- Preuve sociale avant les CTA critiques : références, témoignages, chiffres vérifiables. Objections traitées.
- Formulaire de contact court, libellés clairs, retour à l'utilisateur.
- Accessibilité WCAG AA : contrastes 4,5:1 (3:1 texte large), focus visible, lien d'évitement, labels de formulaire, `alt` pertinents, landmarks, `prefers-reduced-motion`.
- Cohérence du design system : couleurs, typographie, espacements, composants dupliqués.

### G. Orthographe et typographie

Tout le texte visible : articles FR et EN, pages, composants, métadonnées, `alt`, navigation. Ne pas corriger le code, les termes techniques anglais volontaires, les URLs et slugs.

- Accents (y compris majuscules accentuées : É, À), coquilles, homophones (a/à, ou/où, ce/se, ces/ses, et/est, sur/sûr).
- Accords, conjugaison, participes passés, infinitif ou participe (-er/-é), impératif des CTA.
- Typographie française : espaces insécables avant `:` `;` `?` `!`, guillemets, apostrophes cohérentes, majuscules, ponctuation des listes.
- Ligatures dans le texte visible : cœur, œuvre, œil, sœur.
- Vouvoiement constant, répétitions, anglicismes évitables, phrases trop longues.

## Format de chaque constat

Un constat sans preuve est rejeté. Pour chacun :

- **Domaine** : A à G.
- **Gravité** :
  - Critique : bloque l'indexation, casse une page ou un parcours de conversion, ou nuit à la crédibilité (faute visible en titre, lien mort).
  - Haute : pénalise nettement le classement ou la conversion.
  - Moyenne : optimisation réelle.
  - Basse : finition.
- **Preuve** : fichier et ligne, texte cité, ou sortie de test ou de script.
- **Correction** : précise et applicable.
- **Effort** : faible, moyen, élevé.

Orthographe : fichier, texte original, correction, type (orthographe, grammaire, conjugaison, typographie, ligature, style), gravité.

Chaque domaine se termine par une note sur 10 et ses points forts à ne pas toucher.

## Étape 3 : vérification

Les agents lisent le même code avec le même modèle : leur accord ne prouve rien. Avant le rapport, lancer un agent vérificateur sur tous les constats critiques et hauts. Il relit le code cité et classe chaque constat en confirmé, plausible ou infirmé. Les constats infirmés sont retirés ; les plausibles restent, marqués comme tels.

## Rapport final

1. Sources utilisées : tests et scripts lancés, données réelles fournies ou absence de données.
2. Tableau de synthèse : domaine, note, nombre de constats par gravité.
3. Top 10 des actions, par impact SEO puis conversion : action, preuve, impact attendu, effort, fichiers.
4. Pages stratégiques manquantes : URL, sujet, intention, avec l'origine de l'idée (données ou estimation non sourcée).
5. Bilan orthographique : décompte par type et gravité, fichiers les plus touchés.
6. Points forts à préserver.

Quand l'utilisateur donne un retour ou une correction récurrente sur l'audit, proposer de l'inscrire dans ce fichier.

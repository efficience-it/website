Tu es un expert en optimisation de la conversion (CRO) specialise dans les sites B2B de services.

Tu as acces au code source complet du site. Avant de commencer ton analyse, explore :
- `src/app/page.tsx` (page d'accueil, premier ecran, CTA)
- `src/app/contact/page.tsx` (formulaire de contact)
- `src/app/audit-symfony-gratuit/page.tsx` (page du lead magnet principal)
- `src/components/sections/` (Hero, CallToAction, AuditCallToAction, Testimonials, ClientLogos)
- `src/components/ui/Button.tsx` (variantes de boutons, styles)
- `data/navigation.ts` (structure du menu, CTA header)
- `src/components/layout/Header.tsx` et `Footer.tsx`
- Toutes les pages de service dans `src/app/` (parcours depuis un service vers le contact)
- Les pages sectorielles dans `src/app/secteur/`
- 3-4 articles de blog dans `content/blog/` (CTA en fin d'article)
- `src/app/article/[slug]/page.tsx` (template d'article, CTA integres)

Realise un audit du tunnel de conversion selon les axes suivants :

## 1. Parcours visiteur

- Cartographie les parcours types : homepage > service > contact, blog > article > contact, secteur > service > contact
- Combien de clics minimum entre l'arrivee et la prise de contact pour chaque parcours ?
- Y a-t-il des culs-de-sac (pages sans CTA ou sans lien vers la suite logique) ?
- Les breadcrumbs et la navigation permettent-ils de se reperer facilement ?

## 2. Page d'accueil (premier ecran)

- Le premier ecran (above the fold) donne-t-il envie de scroller ?
- La proposition de valeur est-elle lisible en 5 secondes ?
- Le CTA principal est-il visible sans scroller ?
- Y a-t-il trop d'options (paradoxe du choix) ?

## 3. CTA et boutons

- Les CTA principaux sont-ils visuellement dominants ?
- Y a-t-il une hierarchie claire entre CTA primaire, secondaire et tertiaire ?
- Les labels de boutons sont-ils orientes action et resultat ("Demander mon audit" vs "En savoir plus") ?
- Les CTA sont-ils trop nombreux sur certaines pages (dilution) ?
- Les CTA sont-ils absents sur certaines pages (perte de visiteur) ?

## 4. Lead magnet (audit gratuit)

- La page audit gratuit est-elle optimisee pour la conversion ?
- Le formulaire est-il court et non intimidant ?
- Les benefices de l'audit sont-ils clairs avant le formulaire ?
- Y a-t-il des elements de reassurance (sans engagement, gratuit, 30 min) ?
- Le formulaire capture-t-il les bonnes informations pour qualifier le lead ?

## 5. Micro-conversions

- Y a-t-il des alternatives pour les visiteurs pas encore prets a contacter ? (newsletter, telechargement, webinaire)
- Les articles de blog capturent-ils les lecteurs (opt-in, lien vers service) ?
- Le sticky CTA mobile est-il present et efficace ?
- Y a-t-il un mecanisme de retargeting ou de relance ?

## 6. Preuve sociale et reassurance

- La preuve sociale (logos, temoignages, chiffres) est-elle placee aux moments cles du parcours ?
- Les temoignages sont-ils proches des CTA ?
- Les objections sont-elles traitees avant le formulaire (FAQ, garanties, "sans engagement") ?
- Y a-t-il un sentiment d'urgence ou de rarete ?

## 7. Friction et points de sortie

- Quels elements peuvent faire fuir un visiteur ? (trop de texte, formulaire trop long, jargon technique)
- Les pages de service sont-elles trop longues ou trop courtes ?
- Le temps de chargement peut-il etre un frein ?
- Y a-t-il des liens sortants qui font quitter le site au mauvais moment ?

Format attendu :

Pour chaque axe :
1. Score (optimise / a ameliorer / problematique)
2. Constats precis avec references au code
3. Recommandations concretes priorisees

Termine par :
- Schema du tunnel de conversion actuel (texte)
- Top 5 des quick wins pour ameliorer le taux de conversion
- Les elements de conversion qui fonctionnent bien et qu'il ne faut pas toucher

Tu es un expert en accessibilite web, specialise dans les normes RGAA 4.1 et WCAG 2.2 (niveau AA).

Tu as acces au code source complet du site. Avant de commencer ton analyse, explore :
- `src/components/ui/` (composants reutilisables : boutons, cards, accordions, modals)
- `src/components/layout/Header.tsx` et `Footer.tsx` (navigation, menu mobile)
- `src/components/sections/` (hero, temoignages, carousel, formulaires)
- `src/app/page.tsx` (page d'accueil)
- `src/app/contact/page.tsx` (formulaire de contact)
- `src/app/blog/page.tsx` et `src/app/article/[slug]/page.tsx` (pages de contenu)
- Les images utilisees dans `public/images/`

Realise un audit d'accessibilite selon les axes suivants :

## 1. Navigation et structure

- La navigation au clavier est-elle fonctionnelle sur tout le site ? (tab, enter, escape)
- Les skip links existent-ils ?
- La hierarchie des headings (h1-h3) est-elle coherente sur chaque page ?
- Les landmarks ARIA sont-ils presents et corrects ? (nav, main, footer, etc.)
- Le menu mobile est-il accessible au clavier et aux lecteurs d'ecran ?

## 2. Contrastes et lisibilite

- Les ratios de contraste texte/fond respectent-ils le niveau AA (4.5:1 pour le texte, 3:1 pour le texte large) ?
- Les couleurs primary, gray, light-gray definies dans le theme sont-elles conformes ?
- Les liens sont-ils distinguables du texte environnant autrement que par la couleur ?
- Le texte est-il lisible a 200% de zoom ?

## 3. Images et medias

- Toutes les images ont-elles un attribut alt pertinent (pas vide, pas generique) ?
- Les images decoratives ont-elles un alt vide (`alt=""`) ?
- Les SVG inline ont-elles des titres ou des aria-labels ?
- Les logos clients ont-ils des alt descriptifs ?

## 4. Formulaires

- Chaque champ a-t-il un label associe (htmlFor/id ou aria-label) ?
- Les erreurs de validation sont-elles annoncees aux lecteurs d'ecran (aria-live, role="alert") ?
- Les champs obligatoires sont-ils indiques de maniere accessible (pas seulement par la couleur) ?
- Le focus est-il gere correctement apres soumission ?

## 5. Composants interactifs

- Les accordions (FAQ) sont-ils accessibles (aria-expanded, aria-controls) ?
- Le carousel de temoignages est-il navigable au clavier ?
- Les dropdowns du menu utilisent-ils les bons roles ARIA ?
- Les modals/overlays gerent-ils le focus trap ?
- Les boutons ont-ils des labels accessibles quand ils ne contiennent que des icones ?

## 6. Contenu dynamique

- Les animations respectent-elles prefers-reduced-motion ?
- Le contenu charge dynamiquement est-il annonce aux technologies d'assistance ?
- Les transitions de page ne perturbent-elles pas la navigation au lecteur d'ecran ?

Format attendu :

Pour chaque axe :
1. Note de conformite (conforme / partiellement conforme / non conforme)
2. Problemes trouves dans le code avec fichier et ligne
3. Corrections a appliquer (code concret)

Termine par :
- Un tableau recapitulatif de conformite par axe
- Le top 5 des corrections les plus urgentes (impact utilisateur)
- Les points deja conformes a ne pas casser

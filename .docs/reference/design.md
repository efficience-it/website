Tu es un expert UI/UX senior specialise en design de sites web B2B, accessibilite et performance front-end.

Tu as acces au code source complet du site. Explore-le librement pour comprendre les composants, les pages, la palette de couleurs et les patterns utilises.

Contrainte : respecte les decisions documentees dans `CLAUDE.md` (pages hors perimetre, stack technique, etc.). Ne recommande jamais d'ajouter des fonctionnalites explicitement exclues.

Realise un audit critique du site selon les axes suivants :

## 1. Design et identite visuelle

- Coherence de la palette de couleurs et des espacements
- Typographie : hierarchie visuelle, lisibilite, contraste
- Coherence des composants (boutons, cartes, sections hero, CTA)
- Qualite des transitions et micro-interactions
- Impression generale : le site inspire-t-il confiance pour une agence tech B2B ?

## 2. UX (experience utilisateur)

- Parcours utilisateur : un visiteur trouve-t-il rapidement ce qu'il cherche ?
- Navigation : clarte du menu, logique de l'arborescence
- Hierarchie de l'information sur chaque type de page (accueil, service, article)
- Call-to-action : visibilite, frequence, pertinence
- Formulaires : friction, clarte des labels, feedback utilisateur
- Gestion des etats vides, chargement, erreurs

## 3. Responsive et mobile

- Comportement du header/navigation sur mobile
- Adaptation des grilles et mises en page sur tablette et mobile
- Taille des zones cliquables (touch targets min 44px)
- Lisibilite du texte sans zoom sur mobile
- Images et medias : comportement responsive, lazy loading

## 4. Accessibilite (a11y)

- Structure semantique HTML (landmarks, headings, listes)
- Navigation au clavier (focus visible, ordre logique, skip-to-content)
- Contrastes de couleurs (WCAG AA minimum)
- Attributs ARIA la ou necessaire
- Textes alternatifs sur les images
- Support de prefers-reduced-motion et prefers-color-scheme

## 5. DX (experience developpeur)

- Organisation et nommage des composants
- Reutilisabilite : y a-t-il de la duplication evitable ?
- Props des composants : sont-elles claires et bien typees ?
- Separation des responsabilites (composants UI vs sections vs pages)

## 6. Performance percue

- Temps de chargement percu (above-the-fold, LCP)
- Usage pertinent du lazy loading et du code splitting
- Poids des assets (fonts, images, JS)
- Animations qui pourraient degrader les performances sur mobile

Format attendu :

Pour chaque axe :
1. Points forts (ce qui fonctionne bien)
2. Points faibles (ce qui pose probleme)
3. Recommandations concretes priorisees (quick wins en premier)

Termine par :
- Le top 5 des ameliorations a plus fort impact
- Les elements a ne surtout pas toucher (ce qui fonctionne deja bien)

Tu es un expert en performance web, specialise dans les Core Web Vitals et l'optimisation de sites Next.js.

Tu as acces au code source complet du site. Explore-le librement pour comprendre la configuration, les composants, les assets et les patterns de rendu.

Contrainte : respecte les decisions documentees dans `CLAUDE.md` (stack technique, pas de build en dev, etc.). Ne recommande jamais de changer de stack ou d'ajouter des fonctionnalites explicitement exclues.

Realise un audit de performance selon les axes suivants :

## 1. Core Web Vitals

- **LCP (Largest Contentful Paint)** : quel est l'element LCP probable sur la homepage ? Est-il optimise ? (preload, priority, taille)
- **CLS (Cumulative Layout Shift)** : y a-t-il des elements sans dimensions explicites (images, fonts, embeds) qui causent des decalages ?
- **INP (Interaction to Next Paint)** : y a-t-il des handlers JavaScript lourds qui bloquent le thread principal ?

## 2. Images

- Les images sont-elles au format WebP/AVIF ?
- Les dimensions width/height sont-elles specifiees pour eviter le CLS ?
- Le composant next/image est-il utilise partout (pas de img bruts) ?
- Les images below-the-fold sont-elles en lazy loading ?
- L'image LCP a-t-elle l'attribut priority ?
- Les tailles d'images sont-elles adaptees (pas de 2000px pour un affichage 400px) ?

## 3. JavaScript et bundle

- Y a-t-il des dependances lourdes qui pourraient etre remplacees ou supprimees ?
- Les composants interactifs utilisent-ils "use client" de maniere granulaire (pas de client boundary trop haute) ?
- Y a-t-il du code mort ou des imports inutilises ?
- Les scripts tiers (analytics, etc.) sont-ils charges de maniere asynchrone ?

## 4. Fonts

- Les fonts sont-elles chargees avec next/font (auto-hebergees) ?
- Y a-t-il un font-display: swap pour eviter le FOIT ?
- Combien de variantes de font sont chargees ? Peut-on en reduire ?
- Les fonts sont-elles preload sur les pages critiques ?

## 5. Rendu et SSR

- Les pages sont-elles statiques (SSG) ou dynamiques (SSR) ? Le bon choix est-il fait pour chaque page ?
- Les metadata sont-elles generees statiquement ?
- Y a-t-il des appels API au runtime qui pourraient etre faits au build ?
- Le cache HTTP est-il configure correctement (Cache-Control, stale-while-revalidate) ?

## 6. CSS

- Le CSS inutilise est-il purge correctement par Tailwind ?
- Y a-t-il des styles inline ou des CSS-in-JS qui gonflent le bundle ?
- Les animations CSS utilisent-elles des proprietes performantes (transform, opacity) plutot que des proprietes qui declenchent un repaint (top, left, width) ?

Format attendu :

Pour chaque axe :
1. Problemes identifies avec fichier et ligne
2. Optimisations concretes a appliquer

Termine par :
- Le top 5 des optimisations a plus fort impact sur les Core Web Vitals
- Les bonnes pratiques deja en place a ne pas casser

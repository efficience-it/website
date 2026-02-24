# Efficience IT — Website

Site vitrine d'Efficience IT, construit avec Next.js (App Router), TypeScript et Tailwind CSS.

## Stack technique

- **Next.js 15** (App Router) avec export statique
- **TypeScript**
- **Tailwind CSS**
- **Montserrat + Exo** (Google Fonts)
- **MDX** pour le blog
- **Jest + React Testing Library** pour les tests

## Démarrage

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build statique (dossier `out/`) |
| `npm run lint` | Vérification ESLint |
| `npm test` | Tests unitaires |

## Build statique

```bash
npm run build
npx serve out
```

Le build produit un export statique dans `out/`, prêt pour un hébergement S3.

## Structure du projet

```
src/
├── app/          # Pages (App Router)
├── components/   # Composants React
│   ├── layout/   # Header, Footer, navigation
│   ├── ui/       # Composants génériques (Button, Card, etc.)
│   ├── sections/ # Sections de page (Hero, CTA, etc.)
│   └── cards/    # Cartes (témoignages, blog, équipe)
├── lib/          # Utilitaires (fonts, blog, metadata)
└── types/        # Types TypeScript
```

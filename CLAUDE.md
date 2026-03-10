# CLAUDE.md — Efficience IT Website

## Projet

Clone/reproduction de https://www.itefficience.com en Next.js.

## Stack

- **Framework** : Next.js 15 (React 19, TypeScript, Tailwind CSS 4)
- **Dev** : `npm run dev`
- **Build** : `npm run build`
- **Lint** : `npm run lint`

## Préférences

- **PRs courtes** : une PR = un changement ciblé
- **Pas de co-auteur** : ne pas ajouter `Co-Authored-By` dans les commits
- **Push / PR** : autorisé sans demander confirmation
- **Pas de `npm run build`** : ne pas lancer de build, ça coupe le serveur de dev
- **Pas de commentaires** : ne jamais ajouter de commentaires dans le code
- **Pas de tiret cadratin** : ne jamais utiliser le caractère `—` (em dash), ni dans le code, ni dans les articles

## SEO — Articles de blog

- Le `<title>` doit être identique au `<h1>` de l'article
- Utiliser des `<h2>` et `<h3>` pour structurer le contenu
- Ne jamais utiliser `<h4>`, `<h5>`, `<h6>`
- Viser entre 1000 et 2000 mots par article

## SEO — Décisions volontaires

- Les pages `/domain/*` ne sont pas dans le sitemap (volontaire)
- Le sitemap du live contient des pages hors périmètre (checkout, login, etc.) — on ne les reproduit pas, c'est voulu

## Hors périmètre

Ces fonctionnalités du site original ne seront pas reproduites :

- Authentification (login, signup, reset password)
- E-commerce (checkout, PayPal, confirmation de commande)
- Compte utilisateur
- Recherche (`/search`)
- Pages auteurs (`/author/*`)
- Pages membres / profils (`/profile/*`)

# Efficience IT — Website

[![CI](https://github.com/efficience-it/website/actions/workflows/ci.yml/badge.svg)](https://github.com/efficience-it/website/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/efficience-it/website/gh-pages/coverage.json)](https://github.com/efficience-it/website/actions/workflows/ci.yml)
[![CodeQL](https://github.com/efficience-it/website/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/efficience-it/website/actions/workflows/github-code-scanning/codeql)

Site vitrine d'[Efficience IT](https://www.itefficience.com), agence web lilloise spécialisée dans le développement d'applications Symfony sur mesure.

Construit avec **Next.js 15**, **TypeScript** et **Tailwind CSS 4**.

## Démarrage

```bash
npm install
npm run dev
```

## Configuration

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_NIS2_ENDPOINT` | Endpoint Formspree de capture de lead pour l'outil d'évaluation NIS2. Non définie, le formulaire retombe sur un lien `mailto`. À renseigner dans l'environnement de build. |

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build statique (`out/`) |
| `npm run lint` | ESLint |
| `npm test` | Tests unitaires |

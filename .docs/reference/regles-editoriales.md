# Règles éditoriales

## Titles

**Template global par défaut :** `%s | Efficience IT`

> N'utiliser `absoluteTitle` que pour les exceptions explicitement justifiées.

**Exceptions autorisées :**

- La homepage
- Les pages dont le H1 contient déjà la marque et où le doublon serait redondant

---

## Mini-lexique de réécriture progressive

Objectif : réduire les répétitions sans perdre le sens métier.

| Terme | Alternatives |
|-------|-------------|
| **sur mesure** | personnalisé, adapté, spécifique, dédié, conçu pour, pensé pour, spécialisé, taillé pour, ajusté à |
| **robuste** | fiable, solide, éprouvé, durable, résistant, stable, tenu dans la durée |
| **performant** | rapide, efficace, optimisé, réactif, fluide |

---

## Conseils d'usage

- Varier les reformulations selon le contexte plutôt que répéter le même synonyme
- Privilégier le mot le plus précis pour la phrase
- Éviter les formulations systématiques si elles alourdissent la lecture
- Ne pas faire de remplacement mécanique en bloc : appliquer au fil des éditions de pages pour préserver la justesse sémantique

## Vérifier les titres

Le script `check_title_too_long.sh` parcourt les `metadata.title` du dossier `src/app/` et signale ceux qui dépassent 60 caractères :

```sh
./check_title_too_long.sh
```

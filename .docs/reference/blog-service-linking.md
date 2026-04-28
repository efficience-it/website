# Blog → pages services : règles de maillage interne

## Principe

Chaque article technique du blog doit renvoyer vers la page service commerciale qui correspond à sa thématique. L'article fait du trafic organique, la page service convertit.

## Règle

- Article technique **> 1000 mots** : **au moins 1 lien in-text** vers la page service principale correspondante.
- Optionnel : 1 lien vers une page service secondaire si l'article traite plusieurs sujets.
- Ancre descriptive, ancrée sur un mot-clé (pas "cliquez ici"). Voir la colonne *ancre suggérée* dans la table.
- Conforme à la règle globale CLAUDE.md : ~1 lien interne tous les 200-300 mots, privilégier les liens dans le corps du texte.

## Table thématique

| Thématique | Mots-clés slug | Page service | Ancre suggérée |
|---|---|---|---|
| Symfony Messenger / async | `messenger`, `async` | `/api-sur-mesure-symfony` | architecture asynchrone Symfony |
| Doctrine / ORM / requêtes | `doctrine`, `orm` | `/base-de-donnees-postgresql-symfony` | optimisation Doctrine / PostgreSQL |
| Architecture hexagonale / DDD | `hexagonal`, `ddd`, `architecture` | `/developpement-web-sur-mesure` | conception d'applications métier |
| Migration Symfony | `migration` | `/migration-symfony` | migration Symfony clé en main |
| PHPStan / Rector / tests | `phpstan`, `rector`, `test`, `qualite` | `/tests-automatises-php` | qualité de code PHP |
| Docker / CI / DevOps | `docker`, `devops`, `deployer`, `deploiement`, `ci` | `/cloud-et-devops` | infogérance cloud Symfony |
| API Platform / REST | `api-platform`, `rest`, `api` | `/api-sur-mesure-symfony` | API sur mesure Symfony |
| Sylius / e-commerce | `sylius`, `ecommerce`, `e-commerce` | `/ecommerce-sylius` | agence e-commerce Sylius |
| FrankenPHP / performance | `frankenphp`, `performance` | `/hebergement-symfony` | hébergement Symfony performant |
| Intégration Redis | `redis` | `/integration-redis-symfony` | intégration Redis Symfony |
| Intégration Elasticsearch | `elasticsearch`, `elastic` | `/integration-elasticsearch-symfony` | intégration Elasticsearch Symfony |

## Audit

Script : `scripts/audit-blog-to-service-linking.ts`

Lance :

```
npx -y tsx@4 scripts/audit-blog-to-service-linking.ts
```

Le script liste les articles dont la thématique est détectée mais où le lien vers la page service attendue est absent. Utiliser la sortie pour planifier les mini-PRs de correction (batch de 5-10 articles).

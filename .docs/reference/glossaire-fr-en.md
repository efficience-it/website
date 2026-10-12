# Glossaire français-anglais

Référence unique pour traduire les articles du blog. Toute traduction et toute relecture s'appuient sur ce fichier. Un terme absent du glossaire se tranche à la relecture, puis s'ajoute ici dans la même PR.

## Ce qui ne se traduit jamais

- Le code, les commandes, les noms de fichiers, de classes, de méthodes, de paquets et de variables d'environnement.
- Les noms propres et de produits : Symfony, Doctrine, Messenger, PHPStan, Rector, Deptrac, Composer, Twig, API Platform, GitHub, Docker, Claude Code, Efficience IT.
- Les URL externes et les titres de pages externes cités en lien.
- Les clés du front matter hors `title`, `excerpt`, `category`, `faq`, `proficiencyLevel`.
- Les extraits de sortie de terminal.

Les commentaires n'existent pas dans le code du site : n'en ajouter aucun en traduisant un bloc de code.

## Termes traduits de façon fixe

| Français | Anglais |
| --- | --- |
| dette technique | technical debt |
| montée de version | version upgrade |
| reprise de projet | project takeover |
| architecture hexagonale | hexagonal architecture |
| monolithe modulaire | modular monolith |
| logique métier | business logic |
| cahier des charges | specifications |
| code source | source code |
| code mort | dead code |
| code hérité, application héritée | legacy code, legacy application |
| refonte | rewrite, redesign (selon le contexte) |
| migration | migration |
| mise en production | going to production, release |
| mise en préproduction | staging deployment |
| déploiement | deployment |
| intégration continue | continuous integration |
| livraison continue | continuous delivery |
| chaîne de livraison | delivery pipeline |
| revue de code | code review |
| demande de fusion, pull request | pull request |
| branche | branch |
| dépôt | repository |
| couverture de tests | test coverage |
| tests unitaires | unit tests |
| tests d'intégration | integration tests |
| tests de bout en bout | end-to-end tests |
| test de charge | load test |
| jeu de données | dataset |
| données de test | fixtures, test data |
| analyse statique | static analysis |
| qualité de code | code quality |
| bonnes pratiques | best practices |
| retour d'expérience | lessons learned, case study (selon le contexte) |
| retour de mission | project retrospective |
| audit de code | code audit |
| audit de sécurité | security audit |
| faille de sécurité | security vulnerability |
| correctif de sécurité | security patch |
| veille technologique | technology watch |
| montée en compétence | upskilling |
| formation | training |
| accompagnement | support, coaching (selon le contexte) |
| régie, assistance technique | staff augmentation |
| forfait | fixed-scope engagement |
| prestataire | service provider, vendor |
| agence | agency |
| équipe de développement | development team |
| développeur | developer |
| développeur en mission | consultant developer |
| chef de projet | project manager |
| directeur technique | CTO |
| client | client |
| application web | web application |
| application métier | line-of-business application |
| interface en ligne de commande | command-line interface |
| ligne de commande | command line |
| conteneur | container |
| serveur | server |
| base de données | database |
| requête | query (base de données), request (HTTP) |
| cache | cache |
| file d'attente | queue |
| message asynchrone | asynchronous message |
| traitement asynchrone | asynchronous processing |
| bus de messages | message bus |
| gestionnaire de messages | message handler |
| bus de commandes | command bus |
| événement de domaine | domain event |
| écouteur d'événement | event listener |
| abonné d'événement | event subscriber |
| injection de dépendances | dependency injection |
| conteneur de services | service container |
| service | service |
| contrôleur | controller |
| entité | entity |
| objet valeur | value object |
| agrégat | aggregate |
| cas d'usage | use case |
| couche | layer |
| port, adaptateur | port, adapter |
| domaine | domain |
| sérialisation | serialization |
| désérialisation | deserialization |
| validation | validation |
| formulaire | form |
| authentification | authentication |
| autorisation | authorization |
| gestionnaire de paquets | package manager |
| dépendance | dependency |
| version majeure | major version |
| version mineure | minor version |
| version à support long | long-term support (LTS) version |
| fin de vie | end of life |
| rétrocompatibilité | backward compatibility |
| dépréciation, déprécié | deprecation, deprecated |
| rupture de compatibilité | breaking change |
| documentation officielle | official documentation |
| pour aller plus loin | going further |
| ce qu'il faut retenir | key takeaways |
| questions fréquentes | frequently asked questions |
| intelligence artificielle | artificial intelligence |
| IA générative | generative AI |
| assistant de code | coding assistant |
| agent | agent |
| invite, prompt | prompt |
| fenêtre de contexte | context window |
| serveur MCP | MCP server |
| moteurs de recherche | search engines |
| référencement naturel | SEO |
| accessibilité | accessibility |
| éco-conception | eco-design |
| sobriété numérique | digital sobriety |
| performance | performance |
| temps de réponse | response time |
| monitoring, supervision | monitoring |
| journalisation | logging |
| observabilité | observability |

## Niveaux de difficulté (`proficiencyLevel`)

| Français | Anglais |
| --- | --- |
| Débutant | Beginner |
| Intermédiaire | Intermediate |
| Avancé | Advanced |

## Catégories

| Français | Anglais |
| --- | --- |
| Symfony | Symfony |
| PHP | PHP |
| DevOps | DevOps |
| IA | AI |
| Sécurité | Security |
| Architecture | Architecture |
| Qualité de code | Code quality |
| JavaScript | JavaScript |
| Formation | Training |
| Projet | Project |
| Agence | Agency |
| Green IT | Green IT |

## Ton

- Phrases directes, voix active, une idée par phrase.
- Le vouvoiement français se rend par un ton neutre : `you`, sans formule de politesse ajoutée.
- Le `nous` éditorial reste `we`.
- Pas de calque : une tournure idiomatique vaut mieux qu'une traduction mot à mot.

## Formats

| Élément | Français | Anglais |
| --- | --- | --- |
| Milliers | `1 000` | `1,000` |
| Décimales | `2,5` | `2.5` |
| Date | `9 octobre 2026` | `October 9, 2026` |
| Date dans le front matter | `2026-10-09` | `2026-10-09` |
| Pourcentage | `50 %` | `50%` |
| Guillemets | « texte » | "text" |
| Ponctuation double | `mot : mot ?` | `word: word?` |
| Heure | `14 h 30` | `2:30 PM` |

Les espaces avant `:` `?` `!` `;` sont supprimées. Les espaces insécables françaises ne sont jamais conservées.

## Titres

- Le `title` est identique au `<h1>` de l'article, comme en français.
- Longueur utile équivalente au français, idéalement moins de 60 caractères.
- Aucun tiret cadratin ni demi-cadratin, ni dans le titre ni dans le corps.
- Aucune mention de budget, de tarif, de prix, de coût ou de devise.
- Seuls `<h2>` et `<h3>` structurent le contenu.
- Le mot-clé principal se cherche en anglais, il ne se déduit pas du français.

## Liens

- Les liens internes pointent vers la version anglaise de l'article cible si elle existe, sinon le lien est retiré en gardant le texte.
- Les liens externes restent identiques, sauf s'il existe une version anglaise de la même page officielle.
- Le texte d'ancrage est traduit et reste descriptif.

## Relecture

Le relecteur vérifie dans l'ordre : sens, terminologie du glossaire, ton, formats, titres, liens. Chaque correction récurrente devient une ligne de ce fichier.

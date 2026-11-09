---
name: handle-issue
description: Boucle sur les issues GitHub ouvertes du projet (articles de blog, pages, corrections) : une issue non traitée à la fois, PR, fermeture de l'issue, puis la suivante, avec relecture par des agents exigeants, vérification des images, correction orthographique et accents, et construction SEO. À utiliser quand on demande de traiter, prendre ou implémenter les issues.
---

# Traiter les issues

Boucle : prendre UNE issue ouverte non traitée, la traiter jusqu'à la PR, fermer cette issue, puis aller chercher la suivante. Jamais deux issues en parallèle, jamais deux issues dans la même PR. La boucle s'arrête quand il n'y a plus d'issue ouverte non traitée.

Choix de l'issue à chaque tour : `gh issue list --state open --limit 200`, plus petit numéro d'abord. Est « non traitée » une issue ouverte sans PR ouverte associée (`gh pr list --state open --search "<n>"`) et actionnable. Les issues non actionnables (consigne ambiguë) sont notées pour le compte rendu et laissées ouvertes. Argument optionnel : un numéro (`/handle-issue 1154`) pour démarrer par cette issue, la boucle continue ensuite avec les suivantes.

Avant chaque nouvelle issue, appliquer la section « Surveillance de la CI entre deux issues ». Annoncer ensuite en une ligne l'issue retenue, puis enchaîner sans redemander confirmation. Si une issue bloque (image impossible, CI rouge non résolue), la laisser ouverte, la noter, passer à la suivante.

## Surveillance de la CI entre deux issues

Avant de commencer chaque nouvelle issue (et une dernière fois à la fin de la boucle), vérifier la CI de toutes les PRs ouvertes par cette boucle :

1. Tenir la liste des numéros de PRs ouvertes par cette boucle (ne pas toucher aux autres PRs, même les siennes), puis `gh pr checks <n>` pour chacune. Une CI encore en cours n'est pas un échec : la revérifier au tour suivant, et attendre sa fin (`gh pr checks <n> --watch`) seulement avant le compte rendu final.
2. Pour une PR en échec : lire le journal du job en échec (`gh run view <run-id> --log-failed`), identifier la cause réelle (test Jest, couverture sous 100 %, lint, lychee, nombre de mots ou de liens, orthographe) et ne jamais contourner un contrôle (pas de `--no-verify`, pas de seuil abaissé, pas de test supprimé).
3. Corriger dans le répertoire du projet, sans worktree : `git checkout <branche-de-la-PR>`, correctif minimal, relancer en local les contrôles concernés (`npm run lint`, `npx jest`), puis commit au message générique et `git push` sur la même branche. Ne pas ouvrir de nouvelle PR, ne pas force-push sauf pour corriger l'auteur du commit.
4. Revenir ensuite sur `main` (`git checkout main && git pull`), arbre propre, puis revérifier la CI de cette PR. Maximum 3 tentatives par PR : au-delà, la noter dans le compte rendu avec la cause et passer à la suite.
5. Si un échec vient de `main` ou d'un autre changement que la PR (flaky, panne externe), relancer le job une fois (`gh run rerun <run-id> --failed`), sinon le noter sans le masquer.
6. Pas de commentaire GitHub, pas de merge, pas de modification de la PR d'un autre auteur (dependabot compris).

## Règles non négociables

Lire `CLAUDE.md` avant toute chose. Rappel des points qui reviennent le plus :

- Une issue = une branche = une PR courte. Branche au nom explicite (`feat/...`, `fix/...`), jamais de worktree.
- Jamais de `gh pr merge`, jamais de merge dans `main`, jamais de commentaire GitHub (issues, PRs, commits).
- Pas de `npm run build`. Pas de commentaires dans le code. Pas de tiret cadratin `—`.
- Aucune mention de Claude nulle part (commits, PR, code, contenu), pas de trailer `Co-Authored-By`.
- Repo public : messages de commit opaques et génériques (`update`, `fix`), sans mot-clé SEO, client ni stratégie. Le titre de la PR fait exception : c'est le titre de l'article créé ou mis à jour. La description de la PR reste brève et sans stratégie.
- Jamais de budget, tarif, prix, coût ou euros dans le contenu du site.
- Couverture Jest à 100 % exigée par la CI : tester chaque branche du nouveau code.

## Déroulé (à répéter pour chaque issue)

### 1. Cadrage

1. `gh issue view <n>` : lire le corps complet, les labels, les liens.
2. Repérer le type : nouvel article, modification d'article, page, composant, correctif.
3. Chercher dans le code et le contenu l'existant sur le sujet (articles voisins, slugs, catégories) pour éviter la cannibalisation. Si un article généraliste existe, donner au nouveau un angle distinct et prévoir un lien croisé dans les deux sens.
4. Nouvel article : définir l'intention de recherche visée (informationnelle, comparative, transactionnelle) et la question principale du lecteur. Regarder ce qui sort déjà sur cette requête pour apporter un angle ou une expérience que les autres n'ont pas.
5. Revenir sur `main` à jour (`git checkout main && git pull`), vérifier que l'arbre est propre, puis créer la branche de l'issue depuis `main`.

### 2. Rédaction ou modification

Pour un article de blog, suivre les conventions des articles existants (frontmatter, catégorie, date, auteur, structure du dossier de contenu) en copiant la forme du plus récent.

Règles SEO de `CLAUDE.md` à appliquer :

- `<title>` identique au `<h1>`.
- Structure en `<h2>` et `<h3>` uniquement, jamais `<h4>` ou plus.
- 1000 à 2000 mots.
- Liens internes dans le corps : environ 1 tous les 200 à 300 mots (3 à 5 pour 1000 mots, 7 à 10 pour 1500 à 2000), ancres descriptives, jamais "cliquez ici". Vérifier que chaque slug cible existe.
- Liens externes : 1 à 2 tous les 500 mots, 5 maximum, sources à haute autorité uniquement (doc officielle, GitHub, référence), jamais un concurrent direct. Article Symfony : lien vers la doc officielle du composant quasi obligatoire, plus un lien interne vers un article connexe.
- Meta description unique, moins de 155 caractères. Title de moins de 60 caractères si possible.
- Frontmatter `faq` si pertinent (FAQPage généré automatiquement). Catégories techniques : TechArticle automatique.
- Lead magnet PDF : lien direct vers un fichier de `public/documents/`, sans capture email ni Formspree.
- Introduction qui répond à la question du titre dès les premières phrases, et sections qui commencent par une réponse directe et autonome : c'est ce que reprennent les résultats IA.
- Expérience vécue plutôt que paraphrase de la documentation : cas concret, mesure, erreur rencontrée, code réellement testé. Auteur renseigné.
- 1000 mots est un plancher de couverture, pas un objectif : ne jamais délayer pour l'atteindre.
- Modification d'un article existant : mettre à jour `updatedAt` dans le front matter (il alimente `dateModified`), et vérifier que les versions citées sont toujours actuelles.
- Liens retour : ajouter un lien vers le nouvel article depuis 2 ou 3 articles existants proches du sujet, dans le corps du texte, avec une ancre descriptive.

### 3. Vérification de l'image

Pour chaque image de l'issue (cover ou illustration) :

1. Le fichier existe dans `public/images/...` et le chemin référencé correspond exactement.
2. Format webp, poids raisonnable, dimensions cohérentes (cover 1200x630).
3. Ouvrir l'image avec Read et la regarder : le sujet correspond-il à l'article ? Texte lisible, pas de faute dans l'image, pas de rognage, charte `#0066cc` respectée si c'est un visuel généré ?
4. `alt` renseigné, descriptif, sans bourrage de mots-clés.
5. `width` et `height` définis pour éviter le CLS ; la cover de l'article est celle utilisée en Open Graph.
6. Police des couvertures : le générateur (`npm run generate:blog-covers -- --missing`, entrée à ajouter dans `.docs/covers/photos.json`) utilise Montserrat. Si `fc-list | grep -i montserrat` est vide, la couverture sort en police de repli et ne ressemble pas aux autres. Dans ce cas : télécharger `https://github.com/google/fonts/raw/main/ofl/montserrat/Montserrat%5Bwght%5D.ttf` dans `node_modules/.cache/cover-fonts/` (gitignoré), y créer un `fonts.conf` qui déclare ce dossier et inclut `/etc/fonts/fonts.conf`, puis lancer le générateur avec `FONTCONFIG_FILE=<chemin absolu>/fonts.conf`. Comparer visuellement avec une couverture récente (par exemple `cover-git-hooks-php.webp`) avant de commiter.
7. Si l'image est absente ou mauvaise : la produire (SVG 1200x630 converti en webp avec sharp), ou la signaler à l'utilisateur plutôt que de pousser un visuel douteux.

### 4. Relecture orthographique et accents

Relire chaque fichier modifié en entier, deux passes :

1. **Accents et caractères** : é, è, ê, à, ù, ç, œ, î, ô, majuscules accentuées (`É`, `À`), apostrophes cohérentes avec le reste du fichier. Chercher les mots sans accent par erreur (`ameliorer`, `securite`, `deja`, `a` pour `à`, `ou` pour `où`).
2. **Langue** : orthographe, accords, conjugaison, homophones (`a/à`, `ce/se`, `ces/ses`, `et/est`, `ou/où`, `la/là`, `sur/sûr`), participes passés, ponctuation française (espace avant `:`, `;`, `?`, `!` selon la pratique du site), anglicismes évitables, répétitions.

Vérifier aussi l'absence de `—`, de budget/prix, et de formulations qui trahissent un texte généré (tournures creuses, listes de trois adjectifs, "dans le paysage actuel").

Corriger directement. Ne pas toucher aux identifiants de code, slugs, URLs et noms de fichiers.

### 5. Relecture par des agents exigeants

Lancer en parallèle, dans le même message, 4 agents de relecture via l'outil Agent, sans `isolation`, sans worktree, sur le répertoire du projet et la branche courante. Ils sont en lecture seule : ils ne modifient aucun fichier, ils rapportent des défauts précis (fichier, ligne, citation, correction proposée). Leur donner le slug et les fichiers de l'issue, le contenu de la section règles de `CLAUDE.md`, et l'instruction de ne rien valider par complaisance : un article moyen doit être refusé.

1. **Orthographe et accents** : relecture intégrale, mot par mot, du français (accents, accords, conjugaison, homophones, ponctuation, typographie), détection de `—`, d'apostrophes incohérentes, de coquilles dans le frontmatter et les alt.
2. **SEO** : title = h1, h2/h3 uniquement, longueur, meta description, densité et qualité des liens internes (slugs existants, ancres variées) et externes (autorité, pas de concurrent), cannibalisation avec les articles existants, FAQ, schema, mots-clés dans les headings sans bourrage.
3. **Contenu et style** : exactitude technique (versions, noms de composants, code qui compile, commandes réelles), absence de vide ou de remplissage, absence de ton généré, structure, accroche, conclusion utile, aucun budget ni prix, aucun contenu sensible ou stratégique pour un repo public.
4. **Image et intégration** : fichier présent, rendu vu avec Read, adéquation au sujet, alt, dimensions, Open Graph, chemins, `.lycheeignore`, tests Jest et couverture, fichiers parasites, absence de commentaires de code.

Traitement des retours :

- Corriger soi-même chaque défaut confirmé, puis relancer les agents concernés sur les fichiers corrigés.
- Boucler jusqu'à ce que les 4 agents ne remontent plus aucun défaut bloquant. Maximum 3 tours ; au-delà, noter les points restants dans le compte rendu.
- Contester un retour seulement avec une preuve (source, doc officielle, code), jamais par commodité.

Ensuite, relire soi-même le diff complet (`git diff main`) comme un relecteur :

- Cohérence du frontmatter, slug unique, date plausible.
- Liens internes et externes valides (un lien interne vers un article non encore déployé échoue dans lychee : ajouter le slug et le PDF concernés à `.lycheeignore`, de façon transitoire).
- Headings conformes, title = h1.
- Aucun commentaire de code ajouté, aucun fichier parasite.

### 6. Contrôles automatiques

Lancer, sans `npm run build` :

```bash
npm run lint
npx jest
```

Corriger tout échec. La couverture doit rester à 100 %.

### 7. Commit, push, PR

- Un commit au message générique (`update`, `fix`), sans trailer d'attribution.
- Push de la branche, ouverture de la PR avec pour titre exactement le titre de l'article créé ou mis à jour (celui du frontmatter, identique au h1), et une description de 2 à 3 puces maximum, sans mention de Claude ni emoji robot, avec `Closes #<n>` pour lier l'issue.
- Ne pas merger, ne pas commenter.
- Fermer l'issue sans commentaire : `gh issue close <n>` (sans `--comment`), car la PR n'est jamais mergée par nous et `Closes` ne se déclencherait pas. Ne fermer qu'après le push et l'ouverture réussie de la PR.
- Les PRs ne sont pas mergées, donc les articles des issues précédentes ne sont pas dans `main`. Un lien interne vers un article d'une PR encore ouverte est donc invalide sur la prod : l'ajouter à `.lycheeignore` de façon transitoire, et le signaler dans le compte rendu pour le maillage final.
- Après le push, revenir sur `main`, vérifier `git status` propre et `git worktree list` (un seul worktree), puis passer à la surveillance de la CI des PRs précédentes, et seulement ensuite retourner chercher l'issue suivante (relancer la liste des issues ouvertes, la précédente étant fermée).

## Compte rendu à l'utilisateur

À la fin de la boucle (ou à un blocage), tableau récapitulatif : une ligne par issue avec la PR ouverte, l'état de sa CI, l'issue fermée, le nombre de tours de relecture, les issues sautées et pourquoi. Puis, pour les points notables, résumer en quelques lignes : PR ouverte, image vérifiée ou non (et pourquoi), fautes corrigées, liens ajoutés, points qui demandent une décision. Si l'utilisateur donne un retour ou une correction récurrente, proposer de l'inscrire dans `.claude/skills/mega-audit/SKILL.md`.

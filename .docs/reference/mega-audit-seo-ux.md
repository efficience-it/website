Tu es un expert senior combinant 3 profils : consultant SEO technique, UX/UI designer B2B et CRO specialist. Tu travailles sur le site d'une agence de developpement PHP/Symfony (itefficience.com) dont le code source est un clone Next.js que tu as sous les yeux.

Tu as acces au code source complet du site. Explore-le librement : pages, composants, metadata, sitemap, robots.txt, structure des URLs, maillage interne, contenu editorial, styles, assets.

Contrainte absolue : respecte les decisions documentees dans `CLAUDE.md` (pages hors perimetre, decisions SEO volontaires, regles sur les headings, pas de tiret cadratin, etc.). Ne recommande jamais d'ajouter des pages ou fonctionnalites explicitement exclues.

---

# PARTIE 1 - AUDIT SEO TECHNIQUE

## 1.1 Crawlabilite et indexation

- Le fichier robots.txt bloque-t-il des ressources importantes ?
- Le sitemap.xml est-il complet, valide et coherent avec les pages existantes ?
- Y a-t-il des pages orphelines (aucun lien interne pointant vers elles) ?
- Y a-t-il des pages indexables qui ne devraient pas l'etre, ou l'inverse ?
- Les redirections sont-elles correctement gerees (pas de chaines, pas de boucles) ?
- Y a-t-il des URLs avec des parametres qui creent du contenu duplique ?

## 1.2 Balises meta et structured data

- Chaque page a-t-elle un title unique, descriptif et < 60 caracteres ?
- Chaque page a-t-elle une meta description unique et < 155 caracteres ?
- Le title est-il identique au H1 sur les articles de blog ? (regle CLAUDE.md)
- Les balises Open Graph (og:title, og:description, og:image) sont-elles presentes et correctes ?
- Les Twitter Cards sont-elles configurees ?
- Y a-t-il du schema.org pertinent (Organization, Article, BreadcrumbList, Service, FAQPage) ?
- Le schema.org est-il valide et complet ?

## 1.3 Structure des URLs

- Les URLs sont-elles courtes, descriptives et en minuscules ?
- Y a-t-il des URLs avec des caracteres speciaux, des IDs ou des parametres inutiles ?
- La hierarchie des URLs reflete-t-elle la structure semantique du site ?
- Y a-t-il des trailing slashes incoherents ?

## 1.4 Performance SEO

- Les pages se chargent-elles rapidement (impact sur le ranking) ?
- Les images ont-elles des attributs width/height (CLS) ?
- Le LCP est-il optimise sur les pages cles (homepage, pages services) ?
- Les fonts bloquent-elles le rendu ?
- Le JavaScript bloque-t-il le rendu du contenu principal ?

## 1.5 Mobile et Core Web Vitals

- Le site est-il mobile-first dans son code CSS ?
- Le viewport est-il correctement configure ?
- Les touch targets font-ils au minimum 44x44px ?
- Le texte est-il lisible sans zoom sur mobile ?

---

# PARTIE 2 - AUDIT SEO EDITORIAL ET SEMANTIQUE

## 2.1 Architecture de l'information et silos

- La structure du site forme-t-elle des silos semantiques coherents ?
- La profondeur de crawl est-elle optimale (max 3 clics depuis la homepage) ?
- Les categories/sous-categories sont-elles logiques pour Google ET pour l'utilisateur ?
- Y a-t-il des pages trop profondes dans l'arborescence ?

## 2.2 Hierarchie des headings

- Chaque page a-t-elle un H1 unique ?
- La hierarchie H1 > H2 > H3 est-elle respectee partout ? (jamais de H4/H5/H6 - regle CLAUDE.md)
- Les headings contiennent-ils les mots-cles cibles ?
- Les headings sont-ils descriptifs ou trop generiques ("Nos services", "En savoir plus") ?

## 2.3 Maillage interne

- Cartographier tous les liens internes du site (qui pointe vers qui)
- Y a-t-il des pages avec trop peu de liens entrants (pages faibles) ?
- Y a-t-il des pages avec trop de liens sortants (dilution du jus) ?
- Les ancres de liens sont-elles descriptives et variees (pas de "cliquez ici") ?
- Le maillage suit-il une logique de cluster (hub > spoke) ?
- Les articles de blog respectent-ils la regle : ~1 lien interne / 200-300 mots ?
- Les liens dans le corps du texte sont-ils privilegies vs les listes en bas de page ?

## 2.4 Couverture semantique et mots-cles

- Quels mots-cles sont cibles par chaque page ?
- Y a-t-il de la cannibalisation (plusieurs pages ciblant le meme mot-cle) ?
- Quelles intentions de recherche sont couvertes (informationnelle, navigationnelle, transactionnelle) ?
- Quels sujets/mots-cles strategiques ne sont pas encore couverts ?
- Les contenus repondent-ils aux questions que se posent les prospects (People Also Ask) ?

Reference : utiliser le referentiel de mots-cles du prompt SEO.md pour verifier la couverture par technologie (PHP, Symfony, Laravel, Sylius, API Platform, TypeScript, React, Vue.js, Next.js, Node.js, PostgreSQL, Redis, Elasticsearch, RabbitMQ, Docker).

## 2.5 Contenu des articles de blog

- Les articles font-ils entre 1000 et 2000 mots ? (regle CLAUDE.md)
- Les articles techniques Symfony ont-ils un lien vers la doc officielle ? (regle CLAUDE.md)
- Les liens externes pointent-ils vers des sources a haute autorite ? (regle CLAUDE.md)
- Y a-t-il 1-2 liens externes / 500 mots, max 5 pour un article long ? (regle CLAUDE.md)
- Le contenu est-il original, approfondi et utile (pas du contenu thin) ?
- Les articles couvrent-ils tout le funnel (TOFU, MOFU, BOFU) ?

## 2.6 Liens externes

- Les liens sortants pointent-ils vers des sources fiables et a haute autorite ?
- Y a-t-il des liens casses (404) ?
- Les liens sortants s'ouvrent-ils dans un nouvel onglet quand pertinent ?
- Y a-t-il des liens vers des concurrents directs ? (interdit - regle CLAUDE.md)

---

# PARTIE 3 - AUDIT UX/UI

## 3.1 Premiere impression et proposition de valeur

- La proposition de valeur est-elle claire en moins de 5 secondes ?
- Le hero de la homepage est-il percutant (titre, sous-titre, CTA) ?
- Le site inspire-t-il confiance pour une agence tech B2B premium ?
- Le design est-il coherent avec le positionnement (expertise technique haut de gamme) ?

## 3.2 Navigation et architecture

- Le menu principal est-il clair et logique ?
- Un visiteur peut-il trouver ce qu'il cherche en 3 clics max ?
- Le breadcrumb est-il present et utile ?
- Le footer contient-il les liens essentiels (services, contact, mentions legales) ?
- La navigation mobile est-elle fluide et intuitive ?

## 3.3 Design system et coherence visuelle

- La palette de couleurs est-elle coherente sur tout le site ?
- La typographie est-elle lisible avec une hierarchie visuelle claire ?
- Les espacements (padding, margin) sont-ils reguliers et harmonieux ?
- Les composants (boutons, cartes, sections) sont-ils visuellement coherents ?
- Les icones et illustrations suivent-ils un style uniforme ?

## 3.4 Call-to-Action et conversion

- Les CTA principaux sont-ils visibles et bien places ?
- Y a-t-il une hierarchie claire entre CTA primaire, secondaire, tertiaire ?
- Les labels de boutons sont-ils orientes action ("Demander un audit" vs "En savoir plus") ?
- Y a-t-il des culs-de-sac (pages sans CTA ni lien vers la suite logique) ?
- Le formulaire de contact est-il court et non intimidant ?
- Les CTA sont-ils adaptes au stade du visiteur dans le tunnel de conversion ?

## 3.5 Preuve sociale et reassurance

- Les temoignages clients sont-ils presents aux bons endroits ?
- Les logos clients sont-ils visibles et impactants ?
- Les chiffres cles sont-ils credibles et mis en valeur ?
- La preuve sociale apparait-elle avant les CTA critiques ?
- Les objections sont-elles traitees (FAQ, "sans engagement", garanties) ?

## 3.6 Responsive design

- Le site est-il parfaitement fonctionnel sur mobile, tablette et desktop ?
- Les grilles s'adaptent-elles correctement ?
- Les images sont-elles responsive (pas de debordement, pas de flou) ?
- Le texte est-il lisible sur toutes les tailles d'ecran ?
- Les elements interactifs sont-ils suffisamment grands sur mobile (44px min) ?

## 3.7 Accessibilite (WCAG AA)

- Les contrastes sont-ils suffisants (4.5:1 texte, 3:1 texte large) ?
- La navigation au clavier fonctionne-t-elle partout ?
- Les images ont-elles des alt pertinents ?
- Les formulaires ont-ils des labels associes ?
- Les animations respectent-elles prefers-reduced-motion ?
- Les landmarks ARIA sont-ils corrects ?

## 3.8 Parcours utilisateur et friction

- Cartographier les 3 parcours types :
  1. Homepage > Service > Contact
  2. Blog > Article > Service > Contact
  3. Google > Page service > Contact
- Pour chaque parcours : nombre de clics, friction identifiee, taux de sortie probable
- Quels elements font fuir un visiteur ? (mur de texte, jargon, formulaire long)
- Y a-t-il des liens sortants mal places qui font quitter le site ?

---

# PARTIE 4 - AUDIT COPYWRITING ET CONVERSION

## 4.1 Ton et style editorial

- Le ton est-il coherent sur l'ensemble du site ?
- Le vouvoiement est-il constant ?
- Y a-t-il des mots/expressions surrepresentes ? Proposer 3 alternatives pour chacun
- Le jargon technique est-il dose correctement selon la page ?

## 4.2 Pages services

- Chaque page service suit-elle un schema persuasif (probleme > solution > preuve > CTA) ?
- Les benefices client sont-ils mis en avant (vs les specs techniques) ?
- Les pages repondent-elles a "pourquoi cette agence et pas une autre ?" ?

## 4.3 Pages technologies

- Les pages techno parlent-elles au CTO ET au decideur non-tech ?
- Y a-t-il un equilibre entre expertise technique et vulgarisation ?

## 4.4 Blog

- Les titres d'articles sont-ils accrocheurs et SEO-friendly ?
- Les introductions donnent-elles envie de lire la suite ?
- Les articles apportent-ils une vraie valeur ajoutee (pas du contenu generique) ?
- Y a-t-il des CTA dans les articles pour capter le lecteur ?

---

# FORMAT DE RENDU ATTENDU

Pour chaque section :
1. **Score** : note sur 10
2. **Points forts** : ce qui fonctionne bien (a ne pas toucher)
3. **Problemes critiques** : avec fichier, ligne et texte concerne quand applicable
4. **Quick wins** : corrections rapides a fort impact
5. **Recommandations long terme** : ameliorations structurelles

Terminer par :

### Tableau de synthese
| Categorie | Score /10 | Problemes critiques | Quick wins |
|-----------|-----------|--------------------:|------------|

### Top 10 des actions prioritaires
Liste ordonnee par impact SEO + conversion, avec pour chaque action :
- Description precise de l'action
- Impact attendu (trafic, conversion, UX)
- Effort estime (faible / moyen / eleve)
- Fichiers concernes

### Pages strategiques manquantes
Liste des pages a creer en priorite pour capter du trafic organique, avec :
- URL proposee
- Mot-cle cible
- Volume de recherche estime (faible / moyen / eleve)
- Intent (informationnelle / transactionnelle / navigationnelle)

### Red flags
Tout element qui nuit activement au SEO ou a la conversion et qui doit etre corrige immediatement.

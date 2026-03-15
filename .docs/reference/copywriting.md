Tu es un copywriter senior specialise en B2B tech, avec une expertise en conversion de sites de services.

Tu as acces au code source complet du site. Avant de commencer ton analyse, explore :
- `src/app/page.tsx` (page d'accueil, hero, propositions de valeur)
- Toutes les pages de service dans `src/app/` (H1, sous-titres, arguments, CTA)
- `src/app/contact/page.tsx` (page de contact)
- `src/components/sections/` (Hero, AboutPreview, CallToAction, AuditCallToAction, Testimonials)
- `data/testimonials.ts` et `data/expertise.ts` (donnees affichees)
- 5-10 articles de blog dans `content/blog/` pour le ton editorial
- `src/app/l-entreprise/page.tsx` et `src/app/nos-references/page.tsx` (preuve sociale)
- Les pages sectorielles dans `src/app/secteur/`

Realise un audit de copywriting selon les axes suivants :

## 1. Titres et accroches (H1)

- Les H1 sont-ils orientes benefice client ou description de service ?
- Declenchent-ils une emotion ou un besoin (douleur, aspiration, curiosite) ?
- Sont-ils specifiques ou generiques (pourraient-ils s'appliquer a n'importe quelle agence) ?
- Pour chaque H1, propose une reformulation orientee benefice client

## 2. Proposition de valeur

- La proposition de valeur est-elle claire en moins de 5 secondes ?
- Se differencie-t-elle de la concurrence (agences Symfony/PHP) ?
- Les sous-titres renforcent-ils la proposition ou la diluent ?
- Propose une reformulation du hero principal

## 3. Repetitions et tics de langage

- Quels mots/expressions reviennent trop souvent ? ("sur mesure", "robuste", "performant", etc.)
- Le vocabulaire est-il varie ou tourne-t-il en boucle sur les memes formules ?
- Pour chaque mot surrepresente, propose 3 alternatives contextuelles

## 4. Ton et registre

- Le ton est-il coherent entre la homepage, les pages services, le blog et les pages institutionnelles ?
- Le registre est-il adapte aux cibles (CTO vs decideur non-tech vs dev) ?
- Y a-t-il des ruptures de ton (trop technique par endroits, trop commercial ailleurs) ?
- Le tutoiement/vouvoiement est-il coherent ?

## 5. CTA et incitations a l'action

- Les CTA utilisent-ils des verbes d'action orientes resultat ?
- Sont-ils varies ou repetitifs d'une page a l'autre ?
- Le CTA principal (audit gratuit) est-il formule de maniere optimale ?
- Les micro-copies autour des CTA (texte avant le bouton) creent-elles de l'urgence ou de la confiance ?

## 6. Storytelling et emotion

- Y a-t-il des elements de storytelling (avant/apres, anecdotes, parcours client) ?
- Les temoignages sont-ils exploites a leur plein potentiel ?
- Les pages services racontent-elles une histoire ou listent-elles des fonctionnalites ?
- Les pages sectorielles touchent-elles les preoccupations specifiques du secteur ?

## 7. Structure persuasive

- Les pages suivent-elles un schema persuasif (probleme > agitation > solution, ou AIDA) ?
- Les objections sont-elles anticipees et traitees (FAQ, garanties) ?
- La preuve sociale est-elle placee aux bons endroits (apres un argument fort, avant un CTA) ?

Format attendu :

Pour chaque axe :
1. Note sur 10 avec justification
2. Exemples precis tires du code (avec fichier et texte concerne)
3. Reformulations concretes proposees

Termine par :
- Un tableau recapitulatif des notes
- Le top 5 des reformulations a plus fort impact sur la conversion
- Les formulations actuelles a ne surtout pas changer

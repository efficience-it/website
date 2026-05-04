# Tracking GA4

## Comprendre

Le site utilise Google Analytics 4 (ID : `G-CZN94LWSH2`) avec des events custom pour mesurer la conversion et l'engagement.

L'implementation repose sur un helper `trackEvent` dans `src/lib/tracking.ts` qui encapsule `window.gtag()`. Chaque composant interactif (formulaire, CTA, lien) appelle ce helper avec un nom d'event et des parametres structures.

### Pourquoi ces events

Le site attire du trafic via le blog (79 articles) et les pages service. Sans tracking custom, GA4 ne remonte que les pages vues. Les events custom permettent de :

- Mesurer le taux de conversion reel (formulaires soumis / visites)
- Identifier quels CTAs performent et lesquels sont ignores
- Savoir si les articles sont lus en entier ou abandonnes
- Comparer l'efficacite du CTA mobile sticky vs les CTAs classiques

## Reference

### Events actifs

| Event | Composant | Fichier | Parametres |
|-------|-----------|---------|------------|
| `form_submit` | ContactForm | `src/components/sections/ContactForm.tsx` | `form_name: "contact"`, `source_page`, `subject` |
| `audit_requested` | AuditForm | `src/components/sections/AuditForm.tsx` | `form_name: "audit"`, `source_page`, `symfony_version`, `team_size`, `problem` |
| `email_clicked` | TrackedEmailLink | `src/components/ui/TrackedEmailLink.tsx` | `source_location: "footer"` (par defaut) |
| `cta_click` | CallToAction | `src/components/sections/CallToAction.tsx` | `cta_location: "footer_cta"`, `cta_text` |
| `cta_click` | StickyMobileCta | `src/components/sections/StickyMobileCta.tsx` | `cta_location: "sticky_mobile"`, `cta_text` |
| `cta_click` | MobileMenu | `src/components/layout/MobileMenu.tsx` | `cta_location: "header_mobile"`, `cta_text` |
| `cta_click` | HeaderCtas | `src/components/layout/HeaderCtas.tsx` | `cta_location: "header_desktop"`, `cta_text` |
| `cta_click` | TrackedArticleButton | `src/components/sections/TrackedArticleButton.tsx` | `cta_location: "article_body"`, `cta_text`, `article_slug` |
| `scroll_depth` | ScrollDepthTracker | `src/components/ui/ScrollDepthTracker.tsx` | `event_label: slug`, `scroll_percent: "25%/50%/75%/100%"` |
| `share` | ArticleShareButtons | `src/components/ui/ArticleShareButtons.tsx` | `method: "linkedin" / "twitter" / "copy_link"`, `article_slug` |

### Fichiers cles

- `src/lib/tracking.ts` : helper `trackEvent`, types des parametres
- `src/components/layout/HeaderCtas.tsx` : wrapper client pour les CTAs desktop du header
- `src/components/sections/TrackedArticleButton.tsx` : wrapper client pour le CTA dans les articles
- `src/components/ui/ScrollDepthTracker.tsx` : composant client, observe le scroll avec throttle rAF
- `src/components/ui/TrackedEmailLink.tsx` : wrapper pour les liens mailto avec tracking
- `src/components/ui/ArticleShareButtons.tsx` : boutons de partage social sous le titre des articles

## Guide

### Ajouter un nouvel event

1. Ajouter les parametres necessaires au type `GtagEvent` dans `src/lib/tracking.ts`
2. Appeler `trackEvent("nom_event", { params })` dans le composant concerne
3. Si le composant est un server component, le passer en client (`"use client"`) ou creer un wrapper client
4. Mettre a jour ce document avec le nouvel event

### Verifier les events dans GA4

1. Ouvrir GA4 > Rapports > Temps reel
2. Naviguer sur le site et declencher l'action
3. L'event doit apparaitre dans la section "Nombre d'evenements par nom"
4. Pour un suivi long terme : GA4 > Configurer > Evenements

### Conventions de nommage

- Noms d'events en `snake_case`
- Conversion grade : `form_submit`, `audit_requested`, `email_clicked` (a marquer comme "conversions cles" dans GA4 admin)
- Engagement : `cta_click`, `scroll_depth`, `share`
- `form_name` identifie le formulaire concerne (`contact`, `audit`)
- `source_page` capture `window.location.pathname` au moment de la soumission
- `source_location` identifie ou se trouve l'element (footer, header, etc.)
- `cta_location` / `cta_text` pour les clics CTA

## Explication

### Choix d'architecture

Le tracking est decouple du composant Button pour eviter de forcer tous les boutons en client components. Seuls les composants qui ont besoin de tracking sont en `"use client"`.

Le ScrollDepthTracker est un composant invisible (retourne `null`) injecte dans la page article. Il utilise un `Set` dans un `useRef` pour ne fire chaque seuil qu'une seule fois par page. Le listener scroll est throttle via `requestAnimationFrame` pour eviter les executions excessives.

ArticleCta reste un server component. Seul le bouton est un client component (`TrackedArticleButton`) qui encapsule le tracking. Cela evite de passer toute la logique de routing CTA (50+ lignes) cote client.

### Limites actuelles

- Les formulaires utilisent `mailto:` : le tracking fire avant l'ouverture du client mail, mais ne garantit pas que l'email est effectivement envoye. `form_submit` et `audit_requested` mesurent donc une intention de soumission, pas un succes d'envoi confirme. A migrer vers du tracking backend-confirmed quand le backend des formulaires sera en place.

### Evolutions possibles

- Ajouter un event `page_category` pour segmenter les visites par type de page (service, blog, agence)

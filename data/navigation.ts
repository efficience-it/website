import { NavItem } from "@/types/navigation";

export const mainNav: NavItem[] = [
  {
    label: "Services",
    items: [
      { label: "Nos expertises", href: "/notre-expertise" },
      {
        label: "Développement web sur mesure",
        href: "/developpement-web-sur-mesure",
      },
      { label: "Cloud & DevOps", href: "/cloud-et-devops" },
      {
        label: "Accompagnement et Conseil",
        href: "/accompagnement-et-conseil",
      },
      { label: "Expertise IA", href: "/expertise-ia" },
      { label: "E-commerce Sylius", href: "/ecommerce-sylius" },
      { label: "Hébergement Symfony", href: "/hebergement-symfony" },
      { label: "Audit Symfony gratuit", href: "/audit-symfony-gratuit" },
    ],
  },
  {
    label: "L'agence",
    items: [
      { label: "Notre histoire", href: "/l-entreprise" },
      { label: "La team", href: "/la-team" },
      { label: "Jobs", href: "/ta-carriere" },
    ],
  },
  { label: "Green IT", href: "/green-it" },
  { label: "Références", href: "/nos-references" },
  { label: "Blog", href: "/blog" },
];

export const footerNav = {
  expertises: {
    title: "Nos expertises",
    links: [
      {
        label: "Développement web sur mesure",
        href: "/developpement-web-sur-mesure",
      },
      { label: "Cloud & DevOps", href: "/cloud-et-devops" },
      {
        label: "Accompagnement et Conseil",
        href: "/accompagnement-et-conseil",
      },
      { label: "Expertise IA", href: "/expertise-ia" },
      { label: "E-commerce Sylius", href: "/ecommerce-sylius" },
      { label: "Hébergement Symfony", href: "/hebergement-symfony" },
      { label: "Nos articles", href: "/blog" },
    ],
  },
  secteurs: {
    title: "Secteurs",
    links: [
      { label: "E-commerce", href: "/secteur/e-commerce" },
      { label: "Finance", href: "/secteur/finance" },
      { label: "Industrie", href: "/secteur/industrie" },
      { label: "SaaS", href: "/secteur/saas" },
    ],
  },
  agence: {
    title: "L'agence",
    links: [
      { label: "Présentation", href: "/l-entreprise" },
      { label: "Nos valeurs", href: "/la-team" },
      { label: "Recrutement", href: "/ta-carriere" },
      { label: "Mentions légales", href: "/mentions-legales" },
      { label: "Confidentialité", href: "/politique-de-confidentialite" },
    ],
  },
  contact: {
    title: "Contactez-nous !",
    email: "contact@itefficience.com",
    cta: { label: "Formulaire de contact", href: "/contact" },
    auditCta: { label: "Audit Symfony gratuit", href: "/audit-symfony-gratuit" },
  },
  social: [
    { label: "GitHub", href: "https://github.com/efficience-it", icon: "/images/icons/github.svg" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/efficience-it",
      icon: "/images/icons/linkedin.svg",
    },
    {
      label: "Google Maps",
      href: "https://www.google.com/maps/place/Efficience+IT",
      icon: "/images/icons/google-maps.webp",
    },
    { label: "AFUP", href: "https://afup.org/home", icon: "/images/icons/afup.webp" },
    { label: "AD2N", href: "https://www.ad2n.org/", icon: "/images/icons/ad2n.webp" },
  ],
};

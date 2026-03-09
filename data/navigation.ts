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
        label: "Développement web sur-mesure",
        href: "/developpement-web-sur-mesure",
      },
      { label: "Cloud & DevOps", href: "/cloud-et-devops" },
      {
        label: "Accompagnement et Conseil",
        href: "/accompagnement-et-conseil",
      },
      { label: "Nos articles", href: "/blog" },
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
    title: "Contact",
    email: "contact@itefficience.com",
    cta: { label: "Contactez-nous !", href: "/contact" },
  },
  social: [
    { label: "GitHub", href: "https://github.com/efficience-it", icon: "/images/icons/github.svg" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/efficience-it",
      icon: "/images/icons/linkedin.svg",
    },
    { label: "AFUP", href: "https://afup.org/home", icon: "/images/icons/afup.png" },
    { label: "AD2N", href: "https://www.ad2n.org/", icon: "/images/icons/ad2n.jpg" },
  ],
};

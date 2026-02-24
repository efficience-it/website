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
    ],
  },
  contact: {
    title: "Contactez-nous",
    email: "contact@itefficience.com",
    icon: "/images/icons/mail.svg",
  },
  badges: [
    { label: "GitHub", href: "https://github.com/efficience-it", icon: "/images/icons/github.svg" },
    { label: "Google Maps", href: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x47c32be6bb287679:0xbba82315641f680c?sa=X&ved=1t:8290&ictx=111", icon: "/images/footer/maps.jpg" },
    { label: "AFUP", href: "https://afup.org/home", icon: "/images/footer/afup.png" },
    { label: "AD2N", href: "https://www.ad2n.org/", icon: "/images/footer/screenshot.jpg" },
  ],
};

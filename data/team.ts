export interface TeamMember {
  name: string;
  role: string;
  photo: string;
}

export const teamValues = [
  {
    title: "Agilité",
    description:
      "La réactivité et la communication sont les maîtres mots de notre façon de travailler.",
  },
  {
    title: "Expertise",
    description:
      "Membres de l'AFUP, nous effectuons une veille régulière sur les tendances web et les meilleures pratiques.",
  },
  {
    title: "Cohésion d'équipe",
    description:
      "Le bien-être au travail est une valeur importante. Nous cultivons la convivialité et l'entraide.",
  },
  {
    title: "Diversité",
    description:
      "Nous suivons la charte de diversité et maintenons une parité entre 40 et 60 %.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Louis-Arnaud Catoire",
    role: "Fondateur & Directeur",
    photo: "/images/team/placeholder.svg",
  },
  {
    name: "Jade",
    role: "Chef de projet",
    photo: "/images/team/placeholder.svg",
  },
];

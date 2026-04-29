type EmploymentType = "FULL_TIME" | "PART_TIME" | "CONTRACTOR" | "INTERN";

interface JobLocation {
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  addressCountry: string;
}

export interface Job {
  slug: string;
  title: string;
  category: string;
  domain: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: EmploymentType;
  jobLocation: JobLocation;
  jobLocationType?: "TELECOMMUTE";
  directApply?: boolean;
  experienceMonths?: number;
  educationRequirements?: string;
  skills?: string[];
}

interface Domain {
  slug: string;
  name: string;
  description: string;
}

export const domains: Domain[] = [
  {
    slug: "developpement",
    name: "Développement",
    description:
      "Nos offres en développement web : Symfony, PHP, React, Next.js et plus.",
  },
  {
    slug: "recrutement",
    name: "Recrutement",
    description:
      "Nos offres en recrutement : rejoignez l'équipe qui construit les talents de demain.",
  },
  {
    slug: "communication",
    name: "Communication",
    description:
      "Nos offres en communication : stratégie digitale, réseaux sociaux et branding.",
  },
  {
    slug: "business",
    name: "Business",
    description:
      "Nos offres business : développement commercial, partenariats et stratégie.",
  },
];

export const jobs: Job[] = [];

export function getJobsByDomain(domainSlug: string): Job[] {
  const domain = domains.find((d) => d.slug === domainSlug);
  if (!domain) return [];
  return jobs.filter((j) => j.domain === domain.slug);
}

export const spontaneousEmail = "recrutement@itefficience.com";

import { BASE_URL } from "@/lib/metadata";

interface AuthorPerson {
  "@type": "Person";
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
}

interface AuthorOrganization {
  "@type": "ProfessionalService";
  "@id": string;
  name: string;
  url: string;
}

export type AuthorSchema = AuthorPerson | AuthorOrganization;

const knownAuthors: Record<string, AuthorPerson> = {
  "Louis-Arnaud Catoire": {
    "@type": "Person",
    name: "Louis-Arnaud Catoire",
    jobTitle: "Fondateur & CTO",
    url: `${BASE_URL}/la-team`,
    sameAs: [
      "https://www.linkedin.com/in/louis-arnaud-catoire/",
      "https://github.com/music-music",
    ],
  },
  "Florian Chenot": {
    "@type": "Person",
    name: "Florian Chenot",
    jobTitle: "Développeur Symfony",
    url: `${BASE_URL}/la-team`,
    sameAs: [],
  },
};

const organizationAuthor: AuthorOrganization = {
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#organization`,
  name: "Efficience IT",
  url: BASE_URL,
};

export function getAuthorSchema(authorName: string): AuthorSchema {
  if (!authorName || authorName === "Efficience IT") {
    return organizationAuthor;
  }

  return knownAuthors[authorName] ?? {
    "@type": "Person" as const,
    name: authorName,
    url: `${BASE_URL}/la-team`,
    sameAs: [],
  };
}

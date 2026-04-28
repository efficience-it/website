export type ProficiencyLevel = "Beginner" | "Intermediate" | "Expert";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface EventLocation {
  name: string;
  address: string;
}

export interface EventOrganizer {
  name: string;
  url: string;
}

export interface EventSchema {
  name: string;
  startDate: string;
  endDate: string;
  location: EventLocation;
  organizer: EventOrganizer;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  updatedAt?: string;
  image?: string;
  proficiencyLevel?: ProficiencyLevel;
  faq?: FaqItem[];
  event?: EventSchema;
  content: string;
  wordCount: number;
}

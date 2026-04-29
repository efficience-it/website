export type ProficiencyLevel = "Beginner" | "Intermediate" | "Expert";

export interface FaqItem {
  question: string;
  answer: string;
}

interface EventLocation {
  name: string;
  address: string;
}

interface EventOrganizer {
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

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchema {
  name: string;
  description: string;
  steps: HowToStep[];
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
  howTo?: HowToSchema;
  content: string;
  wordCount: number;
}

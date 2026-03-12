export type ProficiencyLevel = "Beginner" | "Intermediate" | "Expert";

export interface FaqItem {
  question: string;
  answer: string;
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
  content: string;
  wordCount: number;
}

export type ProficiencyLevel = "Beginner" | "Intermediate" | "Expert";

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
  content: string;
  wordCount: number;
}

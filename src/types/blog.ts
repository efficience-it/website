export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  updatedAt?: string;
  image?: string;
  content: string;
  wordCount: number;
}

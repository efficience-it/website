import { getAllPosts } from "../src/lib/blog";

const posts = getAllPosts();
const missing = posts.filter(p => !p.updatedAt);

if (missing.length === 0) {
  console.log('[info] Aucun article sans `updatedAt` trouvé.');
} else {
  console.log(`[info] ${missing.length} article(s) sans updatedAt:`);
  missing.forEach(p => console.log(`- ${p.title} — /article/${p.slug} (date: ${p.date})`));
}

// exit code 0

import { getAllPosts } from "../src/lib/blog";

const DEFAULT_STALE_DAYS = 365;

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    json: args.includes("--json") || process.env.JSON_OUTPUT === "1",
    days: Number(process.env.STALE_DAYS) || DEFAULT_STALE_DAYS,
  };
}

const { json, days } = parseArgs();

const posts = getAllPosts();
const now = new Date();

type OutPost = {
  title: string;
  slug: string;
  date: string;
  updatedAt?: string;
  wordCount?: number;
  daysOld: number;
  pillar: boolean;
};

const stalePosts: OutPost[] = posts
  .map((post) => {
    const dateStr = post.updatedAt || post.date;
    const postDate = new Date(dateStr);
    const diffTime = Math.abs(now.getTime() - postDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return {
      title: post.title,
      slug: post.slug,
      date: post.date,
      updatedAt: post.updatedAt,
      wordCount: post.wordCount,
      daysOld: diffDays,
      pillar: Boolean(post.wordCount && post.wordCount >= 1500),
    };
  })
  .filter((p) => p.daysOld > days)
  .sort((a, b) => {
    // pillars first, then older first
    if (a.pillar === b.pillar) return b.daysOld - a.daysOld;
    return a.pillar ? -1 : 1;
  });

if (stalePosts.length > 0) {
  if (json) {
    console.log(JSON.stringify(stalePosts, null, 2));
  } else {
    console.log(`\n[SEO Warning] Found ${stalePosts.length} articles that haven't been updated in over ${days} days:`);
    stalePosts.forEach((post) => {
      console.log(`- ${post.title} (Last updated: ${post.updatedAt || post.date}) - /article/${post.slug} - words:${post.wordCount || 0} pillar:${post.pillar} days:${post.daysOld}`);
    });
    console.log(`\nRecommendation: Check Search Console for organic traffic on these articles and plan a refresh for high-traffic ones.\n`);
  }
} else {
  console.log("[SEO] All articles are fresh and up to date.");
}
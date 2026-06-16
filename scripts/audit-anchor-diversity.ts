#!/usr/bin/env tsx
/* npx tsx scripts/audit-anchor-diversity.ts (--all) */

import fs from "fs";
import path from "path";

const SCAN_DIRS = ["src/app", "src/components", "content/blog"];
const EXTENSIONS = [".tsx", ".jsx", ".mdx"];
const DEFAULT_THRESHOLD = 60;
const ALERT_MARGIN = 7;

interface AnchorOccurrence {
  file: string;
  line: number;
  href: string;
  anchorText: string;
  category: "exact_match" | "partial" | "semantic";
}

interface PageReport {
  targetUrl: string;
  total: number;
  exactMatch: { count: number; pct: number; anchors: string[] };
  partial: { count: number; pct: number; anchors: string[] };
  semantic: { count: number; pct: number; anchors: string[] };
  occurrences: AnchorOccurrence[];
  alert: boolean;
}

interface LexiconEntry {
  exactMatch: string[];
  partial: string[];
  semantic: string[];
  targets?: { exactMatch: number; partial: number; semantic: number };
}

const LEXICON_PATH = path.resolve(".docs/reference/anchor-lexicon.md");

let _globalTargets: { exactMatch: number; partial: number; semantic: number } | null = null;

function normalizeText(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, " ")
    .replace(/→/g, "")
    .replace(/&rarr;/g, "");
}

function loadLexicon(): Record<string, LexiconEntry> {
  if (!fs.existsSync(LEXICON_PATH)) {
    console.warn(`⚠ Lexique introuvable : ${LEXICON_PATH}`);
    return {};
  }

  const raw = fs.readFileSync(LEXICON_PATH, "utf-8");
  const lexicon: Record<string, LexiconEntry> = {};

  const globalTargetsMatch = raw.match(/^>\s*targets:\s*exactMatch=(\d+)\s+partial=(\d+)\s+semantic=(\d+)/im);
  _globalTargets = globalTargetsMatch
    ? {
      exactMatch: parseInt(globalTargetsMatch[1]),
      partial:    parseInt(globalTargetsMatch[2]),
      semantic:   parseInt(globalTargetsMatch[3]),
    }
    : null;

  let currentUrl: string | null = null;
  let currentCategory: "exactMatch" | "partial" | "semantic" | null = null;

  for (const line of raw.split("\n")) {
    const urlMatch = line.match(/^##\s+(`[^`]+`|\S+)/);
    if (urlMatch) {
      currentUrl = urlMatch[1].replace(/`/g, "").trim();
      lexicon[currentUrl] = { exactMatch: [], partial: [], semantic: [] };
      currentCategory = null;
      continue;
    }

    if (!currentUrl) continue;

    const targetsMatch = line.match(/^>\s*targets:\s*exactMatch=(\d+)\s+partial=(\d+)\s+semantic=(\d+)/i);
    if (targetsMatch) {
      lexicon[currentUrl].targets = {
        exactMatch: parseInt(targetsMatch[1]),
        partial: parseInt(targetsMatch[2]),
        semantic: parseInt(targetsMatch[3]),
      };
      continue;
    }

    if (line.match(/###.*[Ee]xact/)) { currentCategory = "exactMatch"; continue; }
    if (line.match(/###.*([Pp]artial|[Pp]artiel)/)) { currentCategory = "partial"; continue; }
    if (line.match(/###.*([Ss]émantique|[Ss]emantic|[Vv]ariation)/)) { currentCategory = "semantic"; continue; }
    if (line.match(/^###/)) { currentCategory = null; continue; }

    const itemMatch = line.match(/^-\s+(.+)/);
    if (itemMatch && currentCategory && currentCategory in lexicon[currentUrl]) {
      (lexicon[currentUrl] as unknown as Record<string, string[]>)[currentCategory].push(normalizeText(itemMatch[1]));
    }
  }

  return lexicon;
}

function getTargets(entry: LexiconEntry | undefined): { exactMatch: number; partial: number; semantic: number } {
  if (entry?.targets) return entry.targets;
  if (_globalTargets)  return _globalTargets;
  return { exactMatch: 30, partial: 30, semantic: 40 };
}

function walkDir(dir: string, results: string[]): void {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walkDir(fullPath, results);
    } else if (EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
}

function findFiles(): string[] {
  const root = process.cwd();
  const results: string[] = [];
  for (const dir of SCAN_DIRS) {
    const fullDir = path.join(root, dir);
    if (fs.existsSync(fullDir)) walkDir(fullDir, results);
  }
  return results;
}

function extractJsxLinks(content: string, filePath: string): AnchorOccurrence[] {
  const results: AnchorOccurrence[] = [];
  const attrs = `(?:"[^"]*"|'[^']*'|\\{(?:[^{}]|\\{[^{}]*\\})*\\}|[^>"'{])*?`;
  const linkRegex = new RegExp(
    `(?:<Link|<a)\\b${attrs}\\bhref=(?:"([^"#][^"]*?)"|'([^'#][^']*?)'|\`([^\`#][^\`]*?)\`)${attrs}>([\\s\\S]*?)<\\/(?:Link|a)>`,
    "g"
  );

  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(content)) !== null) {
    const href = match[1] || match[2] || match[3];
    const anchorText = match[4].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    if (!anchorText || !href) continue;
    results.push({
      file: path.relative(process.cwd(), filePath),
      line: content.slice(0, match.index).split("\n").length,
      href,
      anchorText,
      category: "semantic",
    });
  }
  return results;
}

function extractMdxLinks(content: string, filePath: string): AnchorOccurrence[] {
  const results: AnchorOccurrence[] = [];
  const mdLinkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;

  let match: RegExpExecArray | null;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const anchorText = match[1].trim();
    const href = match[2].trim();
    if (!anchorText || !href) continue;
    results.push({
      file: path.relative(process.cwd(), filePath),
      line: content.slice(0, match.index).split("\n").length,
      href,
      anchorText,
      category: "semantic",
    });
  }
  return results;
}

function normalizeUrl(url: string): string {
  return url.replace(/\/$/, "").toLowerCase().split("?")[0].split("#")[0];
}

function wordMatch(a: string, b: string): boolean {
  if (b.length < 4) return a === b;
  const re = new RegExp(`(?<![a-z])${b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?![a-z])`, 'i');
  return re.test(a);
}

function categorizeAnchor(
  anchorText: string,
  targetUrl: string,
  lexicon: Record<string, LexiconEntry>
): "exact_match" | "partial" | "semantic" {
  const text = normalizeText(anchorText);
  const lex = lexicon[targetUrl];
  if (!lex) return "semantic";
  if (lex.exactMatch.some((em) => text === em)) return "exact_match";
  if (lex.partial?.some((pt) => wordMatch(text, pt) || wordMatch(pt, text))) return "partial";
  if (lex.semantic.some((sem) => wordMatch(text, sem) || wordMatch(sem, text))) return "semantic";

  const exactWords = lex.exactMatch.join(" ").split(" ");
  const matchedWords = exactWords.filter((w) => w.length > 3 && text.includes(w));
  if (matchedWords.length >= 2) return "partial";
  return "semantic";
}

function buildReport(
  targetUrl: string,
  occurrences: AnchorOccurrence[]
): PageReport {
  const total = occurrences.length;

  if (total === 0) {
    return {
      targetUrl,
      total: 0,
      exactMatch: { count: 0, pct: 0, anchors: [] },
      partial: { count: 0, pct: 0, anchors: [] },
      semantic: { count: 0, pct: 0, anchors: [] },
      occurrences: [],
      alert: false,
    };
  }

  const em = occurrences.filter((o) => o.category === "exact_match");
  const pt = occurrences.filter((o) => o.category === "partial");
  const sm = occurrences.filter((o) => o.category === "semantic");
  const pct = (n: number) => Math.round((n / total) * 100);

  return {
    targetUrl,
    total,
    exactMatch: { count: em.length, pct: pct(em.length), anchors: [...new Set(em.map((o) => o.anchorText))] },
    partial: { count: pt.length, pct: pct(pt.length), anchors: [...new Set(pt.map((o) => o.anchorText))] },
    semantic: { count: sm.length, pct: pct(sm.length), anchors: [...new Set(sm.map((o) => o.anchorText))] },
    occurrences,
    alert: pct(em.length) > DEFAULT_THRESHOLD,
  };
}

interface Projection {
  projExact: number;
  projPartial: number;
  projSemantic: number;
  exactToPartial: number;
  exactToSemantic: number;
  partialToExact: number;
  semanticToExact: number;
  partialToSemantic: number;
  semanticToPartial: number;
}

function computeProjection(
  total: number,
  emCount: number,
  ptCount: number,
  smCount: number,
  targets: { exactMatch: number; partial: number; semantic: number }
): Projection {
  const zero: Projection = {
    projExact: 0, projPartial: 0, projSemantic: 0,
    exactToPartial: 0, exactToSemantic: 0,
    partialToExact: 0, semanticToExact: 0,
    partialToSemantic: 0, semanticToPartial: 0,
  };
  if (total === 0) return zero;

  const emIdeal = Math.round(total * targets.exactMatch / 100);
  const emMax   = Math.floor(total * (targets.exactMatch + ALERT_MARGIN) / 100);
  const projExact = Math.min(emIdeal, emMax);

  const remaining = total - projExact;
  const ptRatio = targets.partial / (targets.partial + targets.semantic);
  let projPartial  = Math.round(remaining * ptRatio);
  let projSemantic = remaining - projPartial;

  if (remaining >= 2) {
    if (projPartial  === 0) { projPartial  = 1; projSemantic -= 1; }
    else if (projSemantic === 0) { projSemantic = 1; projPartial  -= 1; }
  }

  const excessExact   = Math.max(0, emCount  - projExact);
  const missingExact  = Math.max(0, projExact - emCount);

  const ptNeed = Math.max(0, projPartial  - ptCount);
  const smNeed = Math.max(0, projSemantic - smCount);
  const totalNeed = ptNeed + smNeed;

  let exactToPartial = 0, exactToSemantic = 0;
  if (excessExact > 0) {
    if (totalNeed > 0) {
      exactToPartial  = Math.round(excessExact * (ptNeed  / totalNeed));
      exactToSemantic = excessExact - exactToPartial;
    } else {
      exactToPartial  = Math.round(excessExact * ptRatio);
      exactToSemantic = excessExact - exactToPartial;
    }
  }

  let partialToExact = 0, semanticToExact = 0;
  if (missingExact > 0) {
    partialToExact  = Math.min(missingExact, ptCount);
    semanticToExact = Math.min(missingExact - partialToExact, smCount);
  }

  const ptAfter = ptCount - partialToExact + exactToPartial;
  const smAfter = smCount - semanticToExact + exactToSemantic;
  const partialToSemantic  = Math.max(0, ptAfter - projPartial);
  const semanticToPartial  = Math.max(0, smAfter - projSemantic);

  return {
    projExact, projPartial, projSemantic,
    exactToPartial, exactToSemantic,
    partialToExact, semanticToExact,
    partialToSemantic, semanticToPartial,
  };
}

function printReport(reports: PageReport[], isFullAudit: boolean, lexiconUrls: Set<string>, lexicon: Record<string, LexiconEntry>): void {
  const R = "\x1b[31m";
  const G = "\x1b[32m";
  const Y = "\x1b[33m";
  const C = "\x1b[36m";
  const B = "\x1b[1m";
  const X = "\x1b[0m";

  const gap = (actual: number, target: number): string => {
    const diff = actual - target;
    if (Math.abs(diff) <= 5) return `${G}≈ cible${X}`;
    return diff > 0 ? `${R}+${diff}% vs cible${X}` : `${Y}${diff}% vs cible${X}`;
  };

  const mode = isFullAudit ? "Audit complet" : "Pages hub";
  const globalNote = _globalTargets
    ? `global (${_globalTargets.exactMatch}/${_globalTargets.partial}/${_globalTargets.semantic})`
    : "fallback 30/30/40";
  console.log(`\n${B}═══════════════════════════════════════════════════${X}`);
  console.log(`${B}  Audit Diversité des Ancres - ${mode} - Marge : ±${ALERT_MARGIN}%${X}`);
  console.log(`${B}═══════════════════════════════════════════════════${X}`);
  console.log(`\n${B}  Objectif cible par page (depuis lexicon URL > ${globalNote})${X}`);
  console.log(`  ${G}Exact match${X}  ex: "audit Symfony gratuit"`);
  console.log(`  ${Y}Partiel${X}     ex: "notre audit Symfony de 30 minutes"`);
  console.log(`  ${C}Sémantique${X}  ex: "diagnostic technique Symfony"`);
  console.log(`\n  ${G}≈ cible${X}  écart ≤ 5%    ${R}+N% vs cible${X}  trop haut    ${Y}-N% vs cible${X}  trop bas\n`);

  for (const report of reports) {
    const targets = getTargets(lexicon[report.targetUrl]);
    const status = report.alert ? `${R}⚠ ALERTE${X}` : `${G}✓ OK${X}`;
    console.log(`${B}${C}${report.targetUrl}${X}  ${status}`);
    console.log(`  Total occurrences : ${report.total}  (cibles: EM=${targets.exactMatch}% PT=${targets.partial}% SM=${targets.semantic}% · seuil alerte: ${DEFAULT_THRESHOLD}% exact match)`);

    if (report.total === 0) {
      console.log(`  ${Y}Aucun lien trouvé vers cette page.${X}\n`);
      continue;
    }

    const emColor = report.exactMatch.pct > DEFAULT_THRESHOLD ? R : G;
    console.log(`  Exact match : ${emColor}${report.exactMatch.pct}%${X} (${report.exactMatch.count})  cible ~${targets.exactMatch}%  ${gap(report.exactMatch.pct, targets.exactMatch)}`);
    console.log(`    → ${report.exactMatch.anchors.join(" | ") || "-"}`);
    console.log(`  Partiel     : ${report.partial.pct}% (${report.partial.count})  cible ~${targets.partial}%  ${gap(report.partial.pct, targets.partial)}`);
    console.log(`    → ${report.partial.anchors.join(" | ") || "-"}`);
    console.log(`  Semantic    : ${C}${report.semantic.pct}%${X} (${report.semantic.count})  cible ~${targets.semantic}%  ${gap(report.semantic.pct, targets.semantic)}`);
    console.log(`    → ${report.semantic.anchors.slice(0, 5).join(" | ") || "-"}`);

    if (isFullAudit && !lexiconUrls.has(report.targetUrl)) {
      console.log(`  ${Y}ℹ Catégorisation approximative (lexique inféré) - ajouter cette URL dans le lexicon pour un résultat précis.${X}`);
    }

    if (report.alert) {
      const proj = computeProjection(report.total, report.exactMatch.count, report.partial.count, report.semantic.count, targets);
      const parts: string[] = [];
      if (proj.exactToPartial > 0)    parts.push(`${proj.exactToPartial} exact → partiel`);
      if (proj.exactToSemantic > 0)   parts.push(`${proj.exactToSemantic} exact → sémantique`);
      if (proj.partialToExact > 0)    parts.push(`${proj.partialToExact} partiel → exact`);
      if (proj.semanticToExact > 0)   parts.push(`${proj.semanticToExact} sémantique → exact`);
      if (proj.partialToSemantic > 0) parts.push(`${proj.partialToSemantic} partiel → sémantique`);
      if (proj.semanticToPartial > 0) parts.push(`${proj.semanticToPartial} sémantique → partiel`);
      if (parts.length > 0) console.log(`  ${R}→ ${parts.join(" · ")}${X}`);
    }

    console.log();
  }

  const alerts = reports.filter((r) => r.alert);
  if (alerts.length === 0) {
    console.log(`${G}${B}✓ Toutes les pages sont sous le seuil.${X}\n`);
  } else {
    console.log(`${R}${B}⚠ ${alerts.length} page(s) dépassent le seuil d'exact match.${X}\n`);
  }
}

function buildSection(
  r: PageReport,
  lexiconUrls: Set<string>,
  lexicon: Record<string, LexiconEntry>
): string {
  const statusIcon = r.alert ? "⚠️" : "✅";
  const inLexicon = lexiconUrls.has(r.targetUrl);
  const note = !inLexicon
    ? "\n> ⚠️ Catégorisation approximative - ajouter dans `.docs/reference/anchor-lexicon.md`.\n"
    : "";

  const targets = getTargets(lexicon[r.targetUrl]);

  const categoryLabel: Record<AnchorOccurrence["category"], string> = {
    exact_match: "🔵 Exact",
    partial: "🟡 Partiel",
    semantic: "✅ Sémantique",
  };

  const tableRows = (): string => {
    if (r.total === 0) return `| - | - | - | - |`;
    return r.occurrences
      .map((o) => `| ${categoryLabel[o.category]} | \`${o.file}:${o.line}\` | ${o.anchorText} | - |`)
      .join("\n");
  };

  const { projExact, projPartial, projSemantic, exactToPartial, exactToSemantic, partialToExact, semanticToExact, partialToSemantic, semanticToPartial } = computeProjection(
    r.total,
    r.exactMatch.count,
    r.partial.count,
    r.semantic.count,
    targets
  );

  const pct = (n: number) => (r.total > 0 ? Math.round((n / r.total) * 100) : 0);

  const actionParts: string[] = [];
  if (exactToPartial > 0)    actionParts.push(`${exactToPartial} exact → partiel`);
  if (exactToSemantic > 0)   actionParts.push(`${exactToSemantic} exact → sémantique`);
  if (partialToExact > 0)    actionParts.push(`${partialToExact} partiel → exact`);
  if (semanticToExact > 0)   actionParts.push(`${semanticToExact} sémantique → exact`);
  if (partialToSemantic > 0) actionParts.push(`${partialToSemantic} partiel → sémantique`);
  if (semanticToPartial > 0) actionParts.push(`${semanticToPartial} sémantique → partiel`);

  const hasChanges = actionParts.length > 0;

  const actionLine = hasChanges
    ? `> 🔧 Actions : ${actionParts.join(" · ")}`
    : null;

  const projLine = hasChanges
    ? `*Après correction → Exact match : **${pct(projExact)}%** · Partiel : **${pct(projPartial)}%** · Sémantique : **${pct(projSemantic)}%***`
    : null;

  const targetsNote = `> Cibles : Exact match ${targets.exactMatch}% · Partiel ${targets.partial}% · Sémantique ${targets.semantic}%`;

  return [
    `### \`${r.targetUrl}\`  ${statusIcon}`,
    "",
    targetsNote,
    "",
    `Exact match : **${r.exactMatch.pct}%** · Partiel : **${r.partial.pct}%** · Sémantique : **${r.semantic.pct}%** · Total : ${r.total}`,
    projLine,
    actionLine,
    note,
    "| Statut | Fichier | Ancre actuelle | Ancre proposée |",
    "|--------|---------|----------------|----------------|",
    tableRows(),
  ]
    .filter(Boolean)
    .join("\n");
}

function writeRevisionPlan(
  reports: PageReport[],
  lexiconUrls: Set<string>,
  lexicon: Record<string, LexiconEntry>
): void {
  const date = new Date().toISOString().slice(0, 10);
  const alerts = reports.filter((r) => r.alert);
  const ok = reports.filter((r) => !r.alert);

  const alertSections = alerts.map((r) => buildSection(r, lexiconUrls, lexicon)).join("\n\n---\n\n");
  const okSections = ok.map((r) => buildSection(r, lexiconUrls, lexicon)).join("\n\n---\n\n");

  const sections = [
    "## ⚠️ Pages en alerte",
    "",
    alertSections,
    "",
    "---",
    "",
    "## Pages OK",
    "",
    okSections,
  ].join("\n");

  const output = [
    `# Plan de révision des ancres - ${date}`,
    "",
    `> ${alerts.length} page(s) en alerte sur ${reports.length} auditées.`,
    "",
    "## Acceptance criteria",
    "",
    "- [ ] Script d'audit opérationnel",
    "- [ ] Rapport initial produit",
    `- [ ] ${alerts.length === 0 ? "~~Aucune page hub au-dessus du seuil~~" : "Aucune page hub au-dessus du seuil après révision"}`,
    "- [ ] Lexique à jour (`docs/anchor-lexicon.md`)",
    "",
    "---",
    "",
    "## Détail par page",
    "",
    sections,
    "",
    "## Légende",
    "- 🔵 Exact match",
    "- 🟡 Partiel",
    "- ✅ Sémantique",
  ].join("\n");

  const outPath = path.resolve(".docs/reference/anchor-revision-plan.md");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, output, "utf-8");
  console.log(`Plan de révision écrit : ${outPath}`);
}

async function main() {
  const args = process.argv.slice(2);
  const isFullAudit = args.includes("--all");
  const lexicon = loadLexicon();
  const files = findFiles();

  console.log(`Scan de ${files.length} fichiers...`);

  const allOccurrences: AnchorOccurrence[] = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf-8");
    const ext = path.extname(file);
    const raw = ext === ".mdx"
      ? extractMdxLinks(content, file)
      : extractJsxLinks(content, file);
    allOccurrences.push(...raw);
  }

  let targetUrls: string[];

  if (isFullAudit) {
    const allHrefs = allOccurrences
      .map((o) => normalizeUrl(o.href))
      .filter((href) => href.startsWith("/") && !href.match(/\.(png|jpg|svg|ico|webp|pdf)$/));
    targetUrls = [...new Set(allHrefs)].sort();

    for (const url of targetUrls) {
      if (lexicon[url]) continue;
      const urlLabel = url.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') ?? '';
      lexicon[url] = { exactMatch: [urlLabel], partial: [], semantic: [] };
    }
  } else {
    targetUrls = Object.keys(lexicon);
  }

  const reports: PageReport[] = targetUrls.map((url) => {
    const normalized = normalizeUrl(url);
    const relevant = allOccurrences
      .filter((o) => normalizeUrl(o.href) === normalized)
      .map((o) => ({ ...o, category: categorizeAnchor(o.anchorText, url, lexicon) }));
    return buildReport(url, relevant);
  });

  const lexiconUrls = new Set(Object.keys(loadLexicon()));

  printReport(reports, isFullAudit, lexiconUrls, lexicon);
  writeRevisionPlan(reports, lexiconUrls, lexicon);

  process.exit(reports.some((r) => r.alert) ? 1 : 0);
}

main().catch((err) => {
  console.error("Erreur :", err);
  process.exit(2);
});
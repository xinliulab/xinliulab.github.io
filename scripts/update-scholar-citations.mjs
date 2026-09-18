import { mkdir, writeFile } from "node:fs/promises";

const profileId = "w-GyGM4AAAAJ";
const profileUrl = `https://scholar.google.com/citations?user=${profileId}&hl=en&pagesize=100&view_op=list_works&sortby=pubdate`;

function decodeHtml(value) {
  const entities = {
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
    "&apos;": "'",
    "&lt;": "<",
    "&gt;": ">"
  };
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&(amp|quot|#39|apos|lt|gt);/g, (entity) => entities[entity] || entity)
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/\s+/g, " ")
    .trim();
}

const response = await fetch(profileUrl, {
  headers: {
    "User-Agent": "Mozilla/5.0 (compatible; XL-Stack-Lab-Citation-Updater/1.0)"
  }
});

if (!response.ok) {
  throw new Error(`Google Scholar returned HTTP ${response.status}`);
}

const html = await response.text();
const papers = {};
const rowPattern = /<tr[^>]*class="[^"]*gsc_a_tr[^"]*"[^>]*>([\s\S]*?)<\/tr>/g;

for (const match of html.matchAll(rowPattern)) {
  const row = match[1];
  const titleMatch = row.match(/<a[^>]*class="[^"]*gsc_a_at[^"]*"[^>]*>([\s\S]*?)<\/a>/);
  const citationMatch = row.match(/<a[^>]*class="[^"]*gsc_a_ac[^"]*"[^>]*>([\s\S]*?)<\/a>/);
  if (!titleMatch) {
    continue;
  }
  const title = decodeHtml(titleMatch[1]);
  const citationText = citationMatch ? decodeHtml(citationMatch[1]) : "";
  papers[title] = Number.parseInt(citationText, 10) || 0;
}

if (Object.keys(papers).length === 0) {
  throw new Error("No publication rows were found; the existing citation cache was preserved.");
}

await mkdir("data", { recursive: true });
await writeFile(
  "data/scholar-citations.json",
  `${JSON.stringify({ updatedAt: new Date().toISOString(), source: profileUrl, papers }, null, 2)}\n`,
  "utf8"
);

console.log(`Updated citation counts for ${Object.keys(papers).length} publications.`);

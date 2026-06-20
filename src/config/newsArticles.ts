import rawData from '../i18n/new/new.json';

// ── Types ────────────────────────────────────────────────
export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string };

export interface NewsArticle {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryColor: string;
  date: string;
  readingTime: number;
  wordCount: number;
  tags: string[];
  lead: string;
  body: ContentBlock[];
  images: string[];
  sourceUrl: string;
  keyTakeaways?: string[];
  originalSlugs?: string[];
}

// ── Image loader (via import.meta.glob) ──────────────────
// โหลดรูปทั้งหมดจากโฟลเดอร์ date อัตโนมัติ
const imageModules = import.meta.glob<{ default: string }>(
  '../assets/new/20*/**/*.{jpg,jpeg,png}',
  { eager: true }
);

function getImages(date: string): string[] {
  const seen = new Set<string>();
  return Object.entries(imageModules)
    .filter(([path]) => path.includes(`/assets/new/${date}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default)
    .filter((url) => {
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });
}


// ── Category color map ───────────────────────────────────
const categoryColorMap: Record<string, string> = {
  'Brand Tips':       'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
  'Event & กิจกรรม': 'text-emerald-600 bg-emerald-50 border-emerald-100',
  'นวัตกรรม':         'text-cyan-600 bg-cyan-50 border-cyan-100',
  'วิทยาศาสตร์':      'text-blue-600 bg-blue-50 border-blue-100',
};

// ── Content parser ───────────────────────────────────────
// content[] format จาก JSON:
//   [0] subtitle (ซ้ำกับ subtitle field — ข้าม)
//   [1] "DD MMM YYYY · อ่าน N นาที" (ข้าม)
//   [2] lead/excerpt (ใช้เป็น lead แล้ว — ข้าม)
//   [3..n-1] เนื้อหา (heading / paragraph / quote)
//   [-1] "ที่มา: โพสต์ฉบับ Facebook" (ข้าม)
function parseContent(content: string[]): ContentBlock[] {
  const body = content.slice(3, -1);
  return body.map((text): ContentBlock => {
    if (text.length < 75) return { type: 'heading', text };
    if (text.length <= 200) return { type: 'quote', text };
    return { type: 'paragraph', text };
  });
}

// ── Parse reading time from content[1] ───────────────────
function parseReadingTime(content: string[]): number {
  const match = content[1]?.match(/อ่าน\s+(\d+)\s+นาที/);
  return match ? parseInt(match[1], 10) : 5;
}

// ── Slug generator ───────────────────────────────────────
function toSlug(title: string, date: string): string {
  // ใช้ date เป็น slug base แล้วตัด "ที่มา" etc.
  const safe = title
    .toLowerCase()
    .replace(/[^\u0E00-\u0E7Fa-z0-9\s]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 4)
    .join('-');
  return `${date}-${safe}`;
}

interface RawArticle {
  title?: string;
  subtitle?: string;
  category?: string;
  date?: string;
  content?: string[];
  tags?: string[];
  excerpt?: string;
  source_url?: string;
  key_takeaway?: string | string[];
}

// Map JSON to NewsArticles first
const allArticles: NewsArticle[] = rawData.map((item, idx) => {
  const rawItem = item as RawArticle;
  const body = parseContent(rawItem.content ?? []);
  const wordCount = body.reduce((sum, block) => sum + block.text.split(/\s+/).filter(Boolean).length, 0);
  return {
    id: idx + 1,
    slug: toSlug(rawItem.title ?? '', rawItem.date ?? ''),
    title: rawItem.title ?? '',
    subtitle: rawItem.subtitle ?? '',
    category: rawItem.category ?? 'Brand Tips',
    categoryColor: categoryColorMap[rawItem.category ?? ''] ?? 'text-slate-600 bg-slate-50 border-slate-100',
    date: rawItem.date ?? '',
    readingTime: parseReadingTime(rawItem.content ?? []),
    wordCount,
    tags: rawItem.tags ?? [],
    lead: rawItem.excerpt ?? '',
    body,
    images: rawItem.date ? getImages(rawItem.date) : [],
    sourceUrl: rawItem.source_url ?? '',
    keyTakeaways: rawItem.key_takeaway
      ? (Array.isArray(rawItem.key_takeaway) ? rawItem.key_takeaway : [rawItem.key_takeaway])
      : undefined,
  };
});

// Group by date
const articlesByDate = new Map<string, NewsArticle[]>();
allArticles.forEach((art) => {
  const d = art.date;
  if (!articlesByDate.has(d)) {
    articlesByDate.set(d, []);
  }
  articlesByDate.get(d)!.push(art);
});

// Merge groups
const mergedArticles: NewsArticle[] = [];
articlesByDate.forEach((group, date) => {
  if (group.length === 1) {
    mergedArticles.push({
      ...group[0],
      originalSlugs: [group[0].slug],
    });
  } else {
    // Sort group to ensure consistent primary article (e.g. by original ID)
    group.sort((a, b) => a.id - b.id);
    const primary = group[0];
    const originalSlugs = group.map((a) => a.slug);

    // Merge titles (only unique ones)
    const uniqueTitles = Array.from(new Set(group.map((a) => a.title).filter(Boolean)));
    const mergedTitle = uniqueTitles.join(' | ');

    // Merge subtitles
    const uniqueSubtitles = Array.from(new Set(group.map((a) => a.subtitle).filter(Boolean)));
    const mergedSubtitle = uniqueSubtitles.join(' / ');

    // Merge leads
    const uniqueLeads = Array.from(new Set(group.map((a) => a.lead).filter(Boolean)));
    const mergedLead = uniqueLeads.join(' | ');

    // Merge bodies with dividers and subheadings
    const mergedBody: ContentBlock[] = [];
    group.forEach((art, idx) => {
      if (idx > 0) {
        mergedBody.push({ type: 'heading', text: art.title });
        if (art.subtitle) {
          mergedBody.push({ type: 'quote', text: art.subtitle });
        }
        if (art.lead) {
          mergedBody.push({ type: 'paragraph', text: art.lead });
        }
      }
      mergedBody.push(...art.body);
    });

    // Merge tags
    const mergedTags = Array.from(new Set(group.flatMap((a) => a.tags)));

    // Merge images
    const mergedImages = Array.from(new Set(group.flatMap((a) => a.images)));

    // Sum readingTime and wordCount
    const mergedReadingTime = group.reduce((sum, a) => sum + a.readingTime, 0);
    const mergedWordCount = group.reduce((sum, a) => sum + a.wordCount, 0);

    // Merge keyTakeaways
    const mergedTakeawaysSet = new Set<string>();
    group.forEach((art) => {
      if (art.keyTakeaways) {
        art.keyTakeaways.forEach((t) => mergedTakeawaysSet.add(t));
      }
    });
    const mergedTakeaways = mergedTakeawaysSet.size > 0 ? Array.from(mergedTakeawaysSet) : undefined;

    // Source URL
    const uniqueUrls = Array.from(new Set(group.map((a) => a.sourceUrl).filter(Boolean)));
    const mergedSourceUrl = uniqueUrls.length > 0 ? uniqueUrls[0] : '';

    mergedArticles.push({
      id: primary.id,
      slug: toSlug(primary.title, date),
      title: mergedTitle,
      subtitle: mergedSubtitle,
      category: primary.category,
      categoryColor: primary.categoryColor,
      date,
      readingTime: mergedReadingTime,
      wordCount: mergedWordCount,
      tags: mergedTags,
      lead: mergedLead,
      body: mergedBody,
      images: mergedImages,
      sourceUrl: mergedSourceUrl,
      keyTakeaways: mergedTakeaways,
      originalSlugs,
    });
  }
});

export const newsArticles = mergedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


// ── Helpers ──────────────────────────────────────────────
export const getArticleBySlug = (slug: string): NewsArticle | undefined =>
  newsArticles.find((a) => a.slug === slug || a.originalSlugs?.includes(slug));

export const getArticleById = (id: number): NewsArticle | undefined =>
  newsArticles.find((a) => a.id === id);

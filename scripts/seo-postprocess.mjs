import { readdir, readFile, writeFile, access } from "node:fs/promises";
import { join, relative, dirname } from "node:path";

// Keeps the published static build indexable and gives crawlers consistent metadata.
const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const siteUrl = "https://www.lowob.com";

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

function decodeHtml(value = "") {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function escapeAttribute(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function routeFor(file) {
  const rel = relative(dist, file).replaceAll("\\", "/");
  if (rel === "index.html") return "/";
  if (rel.endsWith("/index.html")) return `/${dirname(rel).replaceAll("\\", "/")}`;
  return `/${rel.replace(/\.html$/i, "")}`;
}

async function existingSocialImage() {
  for (const name of ["social-preview.jpg", "social-preview.png", "og-image.jpg", "og-image.png"]) {
    try {
      await access(join(dist, "assets", name));
      return `/assets/${name}`;
    } catch {}
  }
  return null;
}

const socialImage = await existingSocialImage();
const htmlFiles = (await walk(dist)).filter((file) => file.endsWith(".html"));
const sitemapUrls = [];

for (const file of htmlFiles) {
  let html = await readFile(file, "utf8");
  const route = routeFor(file);
  const canonical = `${siteUrl}${route}`;
  sitemapUrls.push(canonical);

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  const descriptionMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta\s+content=["']([^"']*)["']\s+name=["']description["'][^>]*>/i);

  const title = decodeHtml((titleMatch?.[1] || "lowob").replace(/<[^>]+>/g, "").trim());
  const description = decodeHtml(descriptionMatch?.[1] || "Commercial growth for complex markets.");
  const ogType = route.startsWith("/research/") ? "article" : "website";
  const card = socialImage ? "summary_large_image" : "summary";

  html = html
    .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, "");

  const meta = [
    `<link rel="canonical" href="${escapeAttribute(canonical)}">`,
    `<meta name="robots" content="index, follow">`,
    `<meta property="og:type" content="${ogType}">`,
    `<meta property="og:site_name" content="lowob">`,
    `<meta property="og:title" content="${escapeAttribute(title)}">`,
    `<meta property="og:description" content="${escapeAttribute(description)}">`,
    `<meta property="og:url" content="${escapeAttribute(canonical)}">`,
    ...(socialImage ? [
      `<meta property="og:image" content="${escapeAttribute(siteUrl + socialImage)}">`,
      `<meta property="og:image:alt" content="lowob — Commercial growth for complex markets">`,
    ] : []),
    `<meta name="twitter:card" content="${card}">`,
    `<meta name="twitter:title" content="${escapeAttribute(title)}">`,
    `<meta name="twitter:description" content="${escapeAttribute(description)}">`,
    ...(socialImage ? [`<meta name="twitter:image" content="${escapeAttribute(siteUrl + socialImage)}">`] : []),
  ].join("");

  html = html.replace(/<\/head>/i, `${meta}</head>`);
  await writeFile(file, html);
}

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
await writeFile(join(dist, "robots.txt"), robots);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(sitemapUrls)].sort().map((url) => `  <url><loc>${url.replaceAll("&", "&amp;")}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(join(dist, "sitemap.xml"), sitemap);

console.log(`SEO postprocess complete: ${htmlFiles.length} HTML files, ${new Set(sitemapUrls).size} sitemap URLs.`);

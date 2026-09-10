import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const origin = "https://lowob-unified-architecture.lowobserve.chatgpt.site";
const projectRoot = new URL("..", import.meta.url).pathname;
const dist = join(projectRoot, "dist");
const routes = [
  "",
  "strategy",
  "growth",
  "distribution",
  "revenue",
  "ways-to-work",
  "research",
  "about",
  "contact",
];

async function download(url, label) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 Lowob Site Replica" },
  });

  if (!response.ok) {
    throw new Error(`${label} returned ${response.status}`);
  }

  return response;
}

function makeStatic(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, "")
    .replace(
      /<link\b[^>]*rel="stylesheet"[^>]*>/gi,
      '<link rel="stylesheet" href="/assets/site.css" />',
    )
    .replaceAll(
      "https://lowob-source-takeover.lowobserve.chatgpt.site/chris-wells.jpeg",
      "/assets/chris-wells.jpeg",
    )
    .replace(
      "</body>",
      '<script src="/assets/clone.js" defer></script></body>',
    );
}

await mkdir(join(dist, "assets"), { recursive: true });

const cssResponse = await download(
  `${origin}/_next/static/css/index.CZrXT4CS.css`,
  "Site stylesheet",
);
await writeFile(join(dist, "assets", "site.css"), await cssResponse.text());

const portraitResponse = await download(
  "https://lowob-source-takeover.lowobserve.chatgpt.site/chris-wells.jpeg",
  "Founder portrait",
);
await writeFile(
  join(dist, "assets", "chris-wells.jpeg"),
  Buffer.from(await portraitResponse.arrayBuffer()),
);

for (const route of routes) {
  const response = await download(`${origin}/${route}`, route || "Homepage");
  const html = makeStatic(await response.text());
  const output = route
    ? join(dist, route, "index.html")
    : join(dist, "index.html");

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, html);
}

console.log(`Captured ${routes.length} routes and shared visual assets.`);

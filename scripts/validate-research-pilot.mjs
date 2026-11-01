import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { enhanceResearchArticleHtml } from "./research-pilot-enhancements.mjs";
const root=new URL("..",import.meta.url).pathname,dist=join(root,"dist");
const slugs=["what-is-a-distribution-diagnostic","gtm-strategy-vs-tactics","web3-kol-campaign-measurement","programmatic-media-numbers-you-can-trust","ai-companies-distribution-problem"];
const map=await readFile(join(dist,"sitemap.xml"),"utf8");
for(const slug of slugs){const html=await readFile(join(dist,"research",slug,"index.html"),"utf8");if(!html.includes('data-research-design="pilot-1"'))throw Error(slug+" lacks pilot marker");if(!html.includes('class="research-related"')||!html.includes('class="research-next-action"'))throw Error(slug+" missing components");if(!html.includes('/assets/refined.css?v=29'))throw Error(slug+" missing updated stylesheet");if(enhanceResearchArticleHtml(html,slug)!==html)throw Error(slug+" not idempotent");for(const m of html.matchAll(/href="(\/research\/[^"]+)"/g))if(!map.includes('https://lowob.com'+m[1]))throw Error(slug+" broken internal link: "+m[1]);}
console.log("Research pilot: 5 articles checked; links and idempotence OK.");

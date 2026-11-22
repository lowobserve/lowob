import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { build } from 'esbuild';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = resolve(root, 'dist');
const sequence = await readFile(join(root, 'visual-lab/home-sequence.html'), 'utf8');
const edition = 'signal-in-motion';
const style = '<link rel="stylesheet" href="/assets/visual-lab.css?v=8">';
const opening = `<script data-lab-opening>(()=>{try{if(matchMedia('(min-width:851px) and (min-height:680px) and (prefers-reduced-motion:no-preference)').matches&&!location.hash&&sessionStorage.getItem('lowob-signal-intro')!=='seen'){document.documentElement.dataset.labLoading='';setTimeout(()=>delete document.documentElement.dataset.labLoading,1750)}}catch{}})()</script>`;
const motion = '<script type="module" src="/assets/visual-lab.js?v=20261121-fade-v2"></script>';
const footerMotion = '<script type="module" src="/assets/visual-lab-footer.js?v=7"></script>';

const nav = '<nav class="lab-nav" aria-label="Primary">' +
  '<a href="/system/"><strong>lowob</strong> SYSTEM</a><a href="/research/">Research</a>' +
  '<a href="/news/">News Desk</a><a href="/research/ground-control/">Ground Control</a></nav>';

function prepareHome(html) {
  const oldHero = /<section class="hero">[\s\S]+?(?=<!--news-strip-->|<section class="news-strip")/;
  const installed = /<div class="lab-sequence" data-sequence>[\s\S]+?(?=<!--news-strip-->|<section class="news-strip")/;
  const match = html.match(installed) ?? html.match(oldHero);
  const radarData = match?.[0].match(/<script type="application\/json">[\s\S]*?<\/script>/)?.[0];
  if (!radarData) throw new Error('Cannot find the homepage radar data.');
  return html
    .replace(match[0], () => sequence.replace('<!-- RADAR_DATA -->', () => radarData))
    .replace('<section class="closing-dark">', '<section class="lab-closing">')
    .replace(/<section class="gc-entry gc27"[\s\S]*?<\/section>/, forecast =>
      forecast.replace(/ class="scroll-reveal"| scroll-reveal(?=")/g, ''))
    .replace(/<style id="lowob-mobile-home-layout-inline-[^"]+">[\s\S]*?<\/style>/, '')
    .replace(/<link rel="stylesheet" href="\/assets\/(?:lowob-radar(?:-integration)?|scroll-reveal)\.css[^"]*">/g, '')
    .replace(/<script src="\/assets\/(?:lowob-radar|scroll-reveal)\.js[^"]*" defer><\/script>/g, '');
}

async function applyTheme(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await applyTheme(path);
      continue;
    }
    if (entry.name !== 'index.html') continue;
    const prior = await readFile(path, 'utf8');
    if (!prior.includes('class="topbar"')) continue;
    const home = directory === dist;
    const system = directory === join(dist, 'system');
    let html = home ? prepareHome(prior) : prior;
    html = html
      .replace(/<link rel="stylesheet" href="\/assets\/visual-lab\.css[^"]*">/g, '')
      .replace(/<script type="module" src="\/assets\/visual-lab(?:-footer)?\.js[^"]*"><\/script>/g, '')
      .replace(/(<body\b[^>]*?)\s+data-edition="[^"]*"/, '$1')
      .replace('<body', '<body data-edition="' + edition + '"')
      .replace('</head>', style + '</head>')
      .replace(/<nav class="lab-nav"[\s\S]*?<\/nav>/, '')
      .replace('<div class="top-actions">', nav + '<div class="top-actions">');
    if (home) html = html.replace(/<script data-lab-opening>[\s\S]*?<\/script>/, '').replace('</head>', opening + '</head>');
    if (system) html = html.replace(/<nav class="vl-chapter-rail"[\s\S]*?<\/nav>\s*/, '');
    html = html.replace('</body>', (home || system ? motion : '') + footerMotion + '</body>');
    if (html !== prior) await writeFile(path, html);
  }
}

await applyTheme(dist);

const { outputFiles } = await build({
  absWorkingDir: root,
  entryPoints: {
    'visual-lab': 'visual-lab/experience.js',
    'visual-lab-footer': 'visual-lab/footer.js'
  },
  bundle: true,
  splitting: true,
  minify: true,
  format: 'esm',
  target: 'es2022',
  supported: { 'template-literal': false },
  entryNames: '[name]',
  chunkNames: 'visual-lab/[name]-[hash]',
  outdir: 'dist/assets',
  write: false
});

await rm(join(dist, 'assets', 'visual-lab'), { recursive: true, force: true });
for (const output of outputFiles) {
  await mkdir(dirname(output.path), { recursive: true });
  await writeFile(output.path, output.contents);
}

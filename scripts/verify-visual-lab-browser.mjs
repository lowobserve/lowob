import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { chromium } from 'playwright';

const url = process.env.PREVIEW_URL;
const screenshots = 'visual-lab-screenshots';
await mkdir(screenshots, { recursive: true });

const browser = await chromium.launch({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader']
});

async function openPage(viewport, options = {}) {
  const page = await browser.newPage({ viewport, ...options });
  page.setDefaultTimeout(12000);
  return page;
}

async function capture(page, name) {
  await page.screenshot({ path: screenshots + '/' + name + '.png', animations: 'disabled' });
}

async function noHorizontalOverflow(page) {
  const size = await page.evaluate(() => ({ width: innerWidth, scroll: document.documentElement.scrollWidth }));
  assert.ok(size.scroll <= size.width + 1, 'Horizontal overflow at ' + page.url() + ': ' + JSON.stringify(size));
}

try {
  const desktop = await openPage({ width: 1440, height: 900 });
  const errors = [];
  desktop.on('pageerror', error => errors.push(error.message));
  desktop.on('console', message => {
    if (message.type() === 'error' && /WebGLProgram|Shader Error/.test(message.text())) errors.push(message.text());
  });
  await desktop.goto(url, { waitUntil: 'domcontentloaded' });
  await desktop.locator('[data-frame][data-webgl-radar]').waitFor({ state: 'attached' });
  if (await desktop.locator('[data-skip]').isVisible()) {
    await desktop.waitForTimeout(500);
    await capture(desktop, '00-opening');
  }
  await desktop.locator('[data-skip]').waitFor({ state: 'hidden' });
  await desktop.locator('[data-radar-controls]').waitFor();
  assert.match(await desktop.locator('h1').innerText(), /Commercial\s+growth for\s+complex markets/);
  await desktop.evaluate(() => document.fonts.ready);
  const marketLine = desktop.locator('.lab-market-line');
  assert.equal(await marketLine.evaluate(node => getComputedStyle(node).fontStyle), 'normal');
  assert.equal(await marketLine.evaluate(node => node.getBoundingClientRect().right <= node.parentElement.getBoundingClientRect().right + 1), true);
  await noHorizontalOverflow(desktop);
  await capture(desktop, '01-radar');

  const filter = desktop.getByLabel('Filter signals by sector');
  await filter.selectOption('AI');
  const meta = desktop.locator('[data-readout-meta]');
  assert.match(await meta.innerText(), / · AI$/);
  const original = await desktop.locator('[data-readout-title]').innerText();
  await desktop.getByRole('button', { name: 'Next signal', exact: true }).click();
  assert.notEqual(await desktop.locator('[data-readout-title]').innerText(), original);
  await filter.selectOption('');
  await desktop.getByRole('button', { name: 'Pause radar sweep' }).click();
  assert.equal(await desktop.getByRole('button', { name: 'Resume radar sweep' }).getAttribute('aria-pressed'), 'true');

  const compare = desktop.getByRole('button', { name: 'Compare time layers' });
  const firstMarker = desktop.locator('.lab-signal:not([hidden])').first();
  const initialX = await firstMarker.evaluate(node => Number.parseFloat(node.style.left));
  await compare.click();
  await desktop.getByText('Past research', { exact: true }).waitFor();
  await desktop.waitForFunction(() => {
    const aperture = document.querySelector('[data-aperture]');
    const past = [...aperture.querySelectorAll('.lab-signal[data-type="research"]:not([hidden])')];
    return past.length && past.every(node => Number.parseFloat(node.style.left) > aperture.clientWidth / 2);
  });
  await capture(desktop, '01-compare');
  await compare.click();
  await desktop.waitForFunction(x => {
    const signal = document.querySelector('.lab-signal:not([hidden])');
    return Math.abs(Number.parseFloat(signal.style.left) - x) < .15;
  }, initialX);

  const aperture = await desktop.locator('[data-aperture]').boundingBox();
  await desktop.mouse.move(aperture.x + aperture.width * .19, aperture.y + aperture.height * .22);
  await desktop.waitForTimeout(400);
  const hoveredX = await firstMarker.evaluate(node => Number.parseFloat(node.style.left));
  assert.ok(Math.abs(hoveredX - initialX) < .22, 'The face-on radar holds markers still under the pointer');

  await desktop.getByRole('link', { name: 'Explore the four functions' }).click();
  await desktop.waitForFunction(() => document.querySelector('[data-deck]').classList.contains('is-visible'));
  const deck = desktop.locator('[data-deck]');
  assert.equal(await deck.getByRole('button', { name: '01 Strategy' }).getAttribute('aria-expanded'), 'true');
  await desktop.waitForTimeout(750);
  await capture(desktop, '02-system-strategy');
  for (const [index, name] of ['Growth', 'Distribution', 'Revenue'].entries()) {
    await deck.getByRole('button', { name: '0' + (index + 2) + ' ' + name, exact: true }).click();
    await desktop.waitForFunction(label => document.querySelector('.lab-slat.is-active h3')?.textContent === label, name);
  }
  await desktop.waitForTimeout(850);
  assert.equal(await deck.getByRole('link', { name: 'Revenue', exact: true }).getAttribute('href'), '/revenue/');
  await capture(desktop, '03-system-revenue');

  await desktop.locator('.research-showcase h2').evaluate(node => node.scrollIntoView({ block: 'center' }));
  await desktop.waitForTimeout(1050);
  const firstFeature = desktop.locator('.home-research-card').first();
  assert.equal(await firstFeature.evaluate(node => getComputedStyle(node).borderTopLeftRadius), '10px');
  assert.match(await firstFeature.evaluate(node => getComputedStyle(node, '::before').backgroundImage), /gradient/);
  await capture(desktop, '04-research');

  const forecast = desktop.locator('#ground-control-beta');
  await forecast.evaluate(node => node.scrollIntoView({ block: 'start', behavior: 'instant' }));
  for (const element of [
    forecast.getByRole('heading', { name: 'Know what’s coming in 2027' }),
    forecast.getByText('The deadlines worth planning around', { exact: false }),
    forecast.getByRole('textbox', { name: 'Email address' }),
    forecast.getByRole('button', { name: 'Get the 2027 forecast' })
  ]) {
    assert.equal(await element.evaluate(node =>
      !node.closest('.scroll-reveal, [hidden]') &&
      getComputedStyle(node).opacity === '1' &&
      getComputedStyle(node).visibility === 'visible' &&
      getComputedStyle(node).clipPath === 'none'
    ), true);
  }
  await capture(desktop, '04-ground-control');

  const footer = desktop.locator('.architecture-footer');
  await footer.evaluate(node => {
    const animated = new Set();
    new MutationObserver(records => {
      for (const { target, addedNodes } of records) {
        if ([...addedNodes].some(child => child instanceof Element && child.classList.contains('lab-type'))) {
          animated.add(target);
        }
      }
      node.dataset.typedLines = String(animated.size);
    }).observe(node, { childList: true, subtree: true });
    node.scrollIntoView({ block: 'end', behavior: 'instant' });
  });
  await desktop.waitForFunction(() => Number(document.querySelector('.architecture-footer').dataset.typedLines) >= 11);
  await desktop.waitForFunction(() => !document.querySelector('.architecture-footer .lab-type'));
  await capture(desktop, '05-footer');

  const callsToAction = desktop.locator('.top-conversation, .lab-closing .closing-layout > a');
  for (const link of await callsToAction.all()) {
    assert.equal(await link.evaluate(node => getComputedStyle(node).backgroundColor), 'rgba(0, 0, 0, 0)');
  }

  await desktop.getByRole('button', { name: 'Index', exact: true }).click();
  const index = desktop.locator('#site-index');
  await index.getByRole('navigation', { name: 'Site index' }).getByRole('link', { name: 'Ground Control' }).waitFor();
  await desktop.keyboard.press('Escape');
  assert.equal(await index.getAttribute('aria-hidden'), 'true');

  await desktop.goto(url + '/system/#distribution', { waitUntil: 'networkidle' });
  await desktop.waitForFunction(() => {
    const chapter = document.getElementById('distribution');
    const active = document.querySelector('.vl-station[href="#distribution"][aria-current="location"]');
    return active && chapter.getBoundingClientRect().top < innerHeight / 2;
  });
  await noHorizontalOverflow(desktop);
  await capture(desktop, '06-system-route');

  await desktop.goto(url + '/research/');
  const findResearch = desktop.getByRole('searchbox').first();
  await findResearch.fill('buying committee');
  await desktop.locator('a[href="/research/what-is-a-buying-committee/"]:visible').first().waitFor();

  await desktop.goto(url + '/contact/');
  await desktop.locator('#brief-form button[type="submit"]').waitFor();
  await noHorizontalOverflow(desktop);
  await capture(desktop, '07-contact');
  assert.deepEqual(errors, []);

  const mobile = await openPage({ width: 390, height: 844 }, { isMobile: true, hasTouch: true });
  await mobile.goto(url, { waitUntil: 'networkidle' });
  await mobile.locator('[data-frame][data-webgl-radar]').waitFor({ state: 'attached' });
  assert.equal(await mobile.locator('.lab-frame.is-pinned').count(), 0);
  await noHorizontalOverflow(mobile);
  await capture(mobile, '08-mobile');
  await mobile.locator('[data-aperture]').evaluate(node => node.scrollIntoView({ block: 'center', behavior: 'instant' }));
  await capture(mobile, '09-mobile-radar');
  await mobile.locator('#services').evaluate(node => node.scrollIntoView({ behavior: 'instant' }));
  await mobile.waitForFunction(() => {
    const bounds = document.getElementById('services').getBoundingClientRect();
    return bounds.top < 120 && bounds.top >= 0;
  });
  await mobile.locator('#services').getByRole('link', { name: 'Strategy', exact: true }).waitFor();
  await capture(mobile, '10-mobile-system');

  const mobileForecast = mobile.locator('#ground-control-beta');
  await mobileForecast.evaluate(node => node.scrollIntoView({ behavior: 'instant' }));
  await mobileForecast.getByRole('heading', { name: 'Know what’s coming in 2027' }).waitFor();
  assert.equal(await mobileForecast.getByRole('textbox', { name: 'Email address' }).evaluate(node => getComputedStyle(node.closest('form')).opacity), '1');
  await capture(mobile, '10-mobile-ground-control');

  const quiet = await openPage({ width: 1280, height: 800 }, { reducedMotion: 'reduce' });
  await quiet.goto(url + '/#services', { waitUntil: 'networkidle' });
  assert.equal(await quiet.locator('.lab-frame.is-pinned').count(), 0);
  assert.equal(await quiet.locator('.lab-frame canvas').count(), 0);
  for (const name of ['Strategy', 'Growth', 'Distribution', 'Revenue']) {
    assert.equal(await quiet.locator('#services').getByRole('link', { name, exact: true }).isVisible(), true);
  }
  await noHorizontalOverflow(quiet);

  const narrow = await openPage({ width: 320, height: 740 }, { isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  await narrow.goto(url, { waitUntil: 'networkidle' });
  await narrow.evaluate(() => document.fonts.ready);
  assert.equal(await narrow.locator('.index-trigger').evaluate(node => node.getBoundingClientRect().right <= innerWidth), true);
  assert.equal(await narrow.locator('.lab-market-line').evaluate(node => node.getBoundingClientRect().right <= node.parentElement.getBoundingClientRect().right + 1), true);
  await noHorizontalOverflow(narrow);
  await capture(narrow, '11-narrow');
  console.log('Browser checks passed for desktop, mobile, reduced motion, the face-on radar, chapter navigation, the Ground Control signup, footer typing, featured cards, Research search, and Contact.');
} finally {
  await browser.close();
}

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
    assert.equal(await desktop.locator('.lab-radar-logo').evaluate(node => getComputedStyle(node).visibility),'hidden',
      'Final-position logo must not appear while the original WebGL radar introduction is docking');
    assert.equal(await desktop.locator('[data-aperture]').evaluate(node => getComputedStyle(node,'::before').visibility),'hidden',
      'Extra radial lines must be hidden during the original WebGL introduction');
    await desktop.waitForTimeout(500);
    await capture(desktop, '00-opening');
  }
  await desktop.locator('[data-skip]').waitFor({ state: 'hidden' });
  await desktop.locator('[data-radar-controls]').waitFor();
  await desktop.waitForFunction(() => document.querySelectorAll('.lab-signal').length === 15);
  assert.equal(await desktop.locator('.lab-radar-logo .lowob-mark').count(), 1);
  assert.ok(await desktop.locator('.lab-radar-logo').evaluate(node => {
    const aperture=node.closest('[data-aperture]').getBoundingClientRect();
    const glyph=node.querySelector('.lowob-mark').getBoundingClientRect();
    const blade=node.querySelector('span').getBoundingClientRect();
    const centreX=aperture.left+aperture.width/2;
    const centreY=aperture.top+aperture.height/2;
    // The logo container and first blade's transform origin both meet this center.
    const origin=getComputedStyle(node.querySelector('span')).transformOrigin;
    return Math.abs(glyph.left+glyph.width/2-centreX)<1
      && Math.abs(glyph.top+glyph.height/2-centreY)<1
      && origin.split(' ').length>=2
      && getComputedStyle(node.querySelector('span')).top!=='auto';
  }), 'Lowob logo geometry must be centered in the radar aperture');
  await desktop.waitForFunction(() => {
    const aperture=document.querySelector('[data-aperture]');
    const radar=document.querySelector('.lab-radar');
    const film=document.querySelector('.lab-film');
    const logo=document.querySelector('.lab-radar-logo');
    const bounds=aperture?.getBoundingClientRect();
    const dots=[...document.querySelectorAll('.lab-signal:not([hidden])')];
    return bounds&&dots.length===15
      && getComputedStyle(aperture).isolation!=='isolate'
      && Number(getComputedStyle(radar).zIndex)>Number(getComputedStyle(film).zIndex)
      && logo.getBoundingClientRect().width>20
      && dots.every(dot=>{
        const rect=dot.getBoundingClientRect();
        return rect.width>10 && rect.height>10 &&
          rect.left>bounds.left && rect.right<bounds.right &&
          rect.top>bounds.top && rect.bottom<bounds.bottom &&
          getComputedStyle(dot).visibility==='visible';
      });
  },null,{timeout:12000});
  assert.match(await desktop.locator('h1').innerText(), /Commercial\s+growth for\s+complex markets/);
  await desktop.evaluate(() => document.fonts.ready);
  const marketLine = desktop.locator('.lab-market-line');
  assert.equal(await marketLine.evaluate(node => getComputedStyle(node).fontStyle), 'normal');
  assert.equal(await marketLine.evaluate(node => node.getBoundingClientRect().right <= node.parentElement.getBoundingClientRect().right + 1), true);
  await noHorizontalOverflow(desktop);
  await capture(desktop, '01-radar');

  // Verify the logo and dots actually fade during the scroll, not only at its endpoint.
  const scrollFade = async phase => {
    await desktop.evaluate(phase => {
      const frame = document.querySelector('[data-frame]');
      const bar = document.querySelector('.topbar');
      const start = window.scrollY + frame.getBoundingClientRect().top - (bar?.offsetHeight ?? 0);
      const endDistance = frame.clientHeight * 4.25;
      window.scrollTo({top:start+endDistance*(phase/4.36),behavior:'instant'});
    }, phase);
    await desktop.waitForTimeout(1300); // let scrubbed scroll position settle
    return desktop.evaluate(() => ({
      mark: Number(getComputedStyle(document.querySelector('.lab-radar-logo')).opacity),
      dots: Number(getComputedStyle(document.querySelector('[data-radar-targets]')).opacity)
    }));
  };
  const earlyFade = await scrollFade(.25);
  const lateFade = await scrollFade(.53);
  for (const part of ['mark','dots']) {
    assert.ok(earlyFade[part] > .15 && earlyFade[part] < .95,
      'Radar '+part+' must be partially faded early in scroll: '+JSON.stringify(earlyFade));
    assert.ok(lateFade[part] < earlyFade[part] - .1 && lateFade[part] > .02,
      'Radar '+part+' must fade further instead of suddenly disappearing: '+JSON.stringify({earlyFade,lateFade}));
  }
  await desktop.evaluate(() => window.scrollTo({top:0,behavior:'instant'}));
  await desktop.waitForTimeout(1300);
  assert.ok(await desktop.locator('.lab-radar-logo').evaluate(el => Number(getComputedStyle(el).opacity))>.95,
    'Logo should become fully visible when scrolling back up');
  const signalList = desktop.locator('.lab-signal-directory');
  const readout = desktop.locator('.lab-radar-readout');
  assert.equal(await signalList.evaluate(el => el.parentElement.classList.contains('lab-radar-readout')),true);
  const signalAlignment = await desktop.evaluate(() => {
    const meta = document.querySelector('.lab-readout-meta').getBoundingClientRect();
    const list = document.querySelector('.lab-signal-directory').getBoundingClientRect();
    return Math.abs(meta.top-list.top);
  });
  assert.ok(signalAlignment<20, 'Signal list must align with content summary metadata');
  assert.equal(await readout.evaluate(el=>getComputedStyle(el).overflow),'visible',
    'Open signal menu must not be clipped by the fixed-height summary panel');

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

  assert.equal(await desktop.locator('[data-compare]').count(), 0);
  const firstMarker = desktop.locator('.lab-signal:not([hidden])').first();
  const initialX = await firstMarker.evaluate(node => Number.parseFloat(node.style.left));
  const measurements = await desktop.evaluate(() => {
    const plot=document.querySelector('[data-aperture]');
    const radar=document.querySelector('[data-lowob-radar]');
    const ui=radar.querySelector('.lab-radar-ui');
    const bounds=()=> {
      const rect=plot.getBoundingClientRect();
      return {top:rect.top,left:rect.left,width:rect.width,height:rect.height,ui:ui.getBoundingClientRect().height};
    };
    const initial=bounds();
    const result=[];
    const signals=[...plot.querySelectorAll('.lab-signal:not([hidden])')];
    for(const index of [0,2,4,7,10,13,14]){
      signals[index].dispatchEvent(new PointerEvent('pointerenter',{pointerType:'mouse'}));
      signals[index].click();
      result.push(bounds());
    }
    return {initial,result};
  });
  for(const rect of measurements.result){
    for(const axis of ['top','left','width','height','ui']){
      assert.ok(Math.abs(rect[axis]-measurements.initial[axis])<=0.6,
        'Radar geometry changed when selecting featured article ('+axis+'): '+JSON.stringify(measurements));
    }
  }
  const aperture = await desktop.locator('[data-aperture]').boundingBox();
  await desktop.mouse.move(aperture.x + aperture.width * .19, aperture.y + aperture.height * .22);
  await desktop.waitForTimeout(400);
  const hoveredX = await firstMarker.evaluate(node => Number.parseFloat(node.style.left));
  assert.ok(Math.abs(hoveredX - initialX) < .22, 'Radar marker remains fixed during pointer hover');

  const list=desktop.locator('.lab-signal-directory');
  await list.locator('summary').click();
  assert.equal(await list.getAttribute('open'), '');
  await desktop.locator('.lab-hero-copy h1').click({force:true});
  assert.equal(await list.getAttribute('open'), null, 'Outside click must close the signal list');

  await desktop.getByRole('link', { name: 'Explore the four functions' }).click();
  await desktop.waitForFunction(() => document.querySelector('[data-deck]').classList.contains('is-visible'));
  const deck = desktop.locator('[data-deck]');
  assert.equal(await deck.getByRole('button', { name: 'Strategy', exact: true }).getAttribute('aria-expanded'), 'true');
  await desktop.waitForTimeout(750);
  assert.equal(await desktop.evaluate(()=>{
    const tabs=[...document.querySelectorAll('.lab-frame.is-pinned .lab-slat:not(.is-active) .lab-slat-tab')];
    return tabs.length===3 && tabs.every(tab=>{
      const text=tab.querySelector('span:last-child').getBoundingClientRect();
      const bounds=tab.getBoundingClientRect();
      return bounds.bottom-text.bottom>=0 && bounds.bottom-text.bottom<48 && text.top>bounds.top+bounds.height*.55;
    });
  }),true,'Collapsed system labels must sit at the bottom of each card');
  await capture(desktop, '02-system-strategy');
  for (const [index, name] of ['Growth', 'Distribution', 'Revenue'].entries()) {
    await deck.getByRole('button', { name, exact: true }).click();
    await desktop.waitForFunction(label => document.querySelector('.lab-slat.is-active h3')?.textContent === label, name);
  }
  await desktop.waitForTimeout(850);
  assert.equal(await deck.getByRole('link', { name: 'Revenue', exact: true }).getAttribute('href'), '/revenue/');
  await capture(desktop, '03-system-revenue');

  await desktop.locator('.research-showcase h2').evaluate(node => node.scrollIntoView({ block: 'center' }));
  await desktop.waitForTimeout(1050);
  const firstFeature = desktop.locator('.home-research-card').first();
  assert.equal(await firstFeature.evaluate(node => getComputedStyle(node).borderTopLeftRadius), '10px');
  await desktop.waitForFunction(()=>{
    const card=document.querySelector('.home-research-card');
    return card?.dataset.articleSlug && getComputedStyle(card,'::before').backgroundImage!=='none';
  });
  assert.equal(await firstFeature.locator('img.lab-article-art').count(),0);
  const initialCards=await desktop.locator('.home-research-card').evaluateAll(cards=>cards.map(card=>({
    title:card.querySelector('h3')?.textContent,
    artwork:getComputedStyle(card,'::before').backgroundImage
  })));
  assert.equal(initialCards.length,3);
  assert.ok(initialCards.every(c=>c.artwork.includes('gradient')));
  await desktop.waitForTimeout(5000);
  const afterCards=await desktop.locator('.home-research-card').evaluateAll(cards=>cards.map(card=>card.querySelector('h3')?.textContent));
  assert.deepEqual(afterCards,initialCards.map(c=>c.title),'The three original articles must not rotate');
  assert.equal(await firstFeature.locator(':scope > .home-research-meta').count(),1);
  assert.ok(await firstFeature.evaluate(card=>{
    const art=getComputedStyle(card,'::before');
    const meta=card.querySelector('.home-research-meta').getBoundingClientRect();
    return art.display==='block' && Number.parseFloat(art.height)>100 && meta.top-card.getBoundingClientRect().top>110;
  }), 'Artwork must stay on top and all text below it');
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
  assert.equal(await desktop.locator('#vl-score-title').textContent(), 'The Commercial OS');
  assert.equal(await desktop.locator('.vl-chapter-rail').count(), 0, 'Redundant horizontal system tab row must be removed');
  const activeStation = desktop.locator('.vl-station[href="#distribution"]');
  const growthStation = desktop.locator('.vl-station[href="#growth"]');
  await growthStation.hover();
  assert.equal(await activeStation.getAttribute('aria-current'), 'location');
  assert.notEqual(await growthStation.evaluate(node => getComputedStyle(node).borderColor),
    await activeStation.evaluate(node => getComputedStyle(node).borderColor));

  const signalPanel = desktop.locator('#distribution .signal-panel');
  await signalPanel.hover();
  await desktop.waitForFunction(() => {
    const panel = document.querySelector('#distribution .signal-panel');
    return getComputedStyle(panel.querySelector('dt')).color === 'rgb(201, 237, 157)' &&
      getComputedStyle(panel.querySelector('dd')).color === 'rgb(238, 238, 230)';
  });
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

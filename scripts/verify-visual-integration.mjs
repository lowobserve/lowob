import assert from 'node:assert/strict';
import { readFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright';

const url = process.env.PREVIEW_URL;
assert.ok(url?.startsWith('https://'), 'PREVIEW_URL missing');
const baseline = path => execFileSync('git', ['show', 'origin/main:' + path], {encoding:'utf8'});
const local = path => readFileSync(path, 'utf8');
const originalHome=baseline('dist/index.html');
const mergedHome=local('dist/index.html');
const originalSystem=baseline('dist/system/index.html');
const mergedSystem=local('dist/system/index.html');
const between=(value,start,end)=>{
 const a=value.indexOf(start),b=value.indexOf(end,a+start.length);
 assert.ok(a>=0 && b>a,'Missing source boundary: '+start+' / '+end);
 return value.slice(a,b);
};
const footer=html=>between(html,'<footer class="architecture-footer">','</footer>');
assert.equal(footer(mergedHome),footer(originalHome), 'Homepage footer copy or links changed');
assert.equal(footer(mergedSystem),footer(originalSystem),'SYSTEM footer copy or links changed');
assert.equal(
 between(mergedHome,'<!--news-strip-->','<footer class="architecture-footer">'),
 between(originalHome,'<!--news-strip-->','<footer class="architecture-footer">'),
 'Content after the new radar/cards must match production exactly');
assert.equal(
 between(mergedSystem,'<section id="strategy"','<section class="system-read-cta"').replace(/<\/div><\/div>$/,''),
 between(originalSystem,'<section id="strategy"','<section class="system-read-cta"'),
 'SYSTEM capability descriptions changed');
assert.equal(
 between(mergedSystem,'<section class="system-read-cta"','<footer class="architecture-footer">'),
 between(originalSystem,'<section class="system-read-cta"','<footer class="architecture-footer">'),
 'SYSTEM Read CTA and surrounding links changed');
assert.equal(
 between(mergedHome,'<div class="index-layer','<div class="workspace">'),
 between(originalHome,'<div class="index-layer','<div class="workspace">'),
 'Home site-index menu changed');
assert.equal(
 between(mergedSystem,'<div class="index-layer','<div class="detail-workspace">'),
 between(originalSystem,'<div class="index-layer','<div class="detail-workspace">'),
 'SYSTEM site-index menu changed');
assert.match(mergedHome,/class="primary-action" href="\/the-read\/"/);
assert.doesNotMatch(mergedHome,/Book The Read|data-skip/);
assert.match(mergedHome,/data-frame/);
assert.match(mergedSystem,/class="vl-system-score"/);
console.log('Static copy/navigation invariants passed.');

mkdirSync('visual-integration-screenshots',{recursive:true});
const browser=await chromium.launch({args:['--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const screenshot=async(page,name)=>await page.screenshot({path:'visual-integration-screenshots/'+name+'.png',animations:'disabled'});
try{
 const page=await browser.newPage({viewport:{width:1440,height:900}});
 const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(url,{waitUntil:'domcontentloaded'});
 await page.locator('[data-frame][data-webgl-radar]').waitFor({timeout:20000});
 await page.locator('[data-blackout]').waitFor({state:'hidden',timeout:12000});
 await page.waitForFunction(()=>document.querySelectorAll('.lab-signal:not([hidden])').length===15);
 await page.locator('a.primary-action[href="/the-read/"]').waitFor();
 // The SYSTEM CTA is deliberately a secondary text link, while the primary
 // Explore The Read CTA keeps its existing live-site styling.
 const systemCTA=await page.locator('.lab-hero-actions > a[href="/system/"]').evaluate(el=>{
  const css=getComputedStyle(el);
  return {background:css.backgroundColor,borderBottom:css.borderBottomStyle,
    radius:css.borderRadius,opacity:css.opacity,label:el.textContent.trim(),
    href:el.getAttribute('href')};
 });
 assert.equal(systemCTA.background,'rgba(0, 0, 0, 0)',
   'SYSTEM CTA should not appear as another green filled button');
 assert.equal(systemCTA.borderBottom,'solid');
 assert.equal(systemCTA.radius,'0px');
 assert.equal(systemCTA.href,'/system/');
 assert.match(systemCTA.label,/lowob\s*SYSTEM/);
 assert.equal(await page.locator('.topbar .index-trigger').count(),1);
 assert.equal(await page.locator('[data-skip]').count(),0);
 assert.equal(await page.locator('.lab-slat').count(),4);
 assert.ok(await page.locator('[data-aperture] canvas, [data-film] canvas').count()>0);
 // The shared header CTA must look and behave IDENTICALLY on every route.
 const ctaSnapshot=async currentPage=>currentPage.locator('.topbar a.top-conversation').evaluate(el=>{
   const css=getComputedStyle(el);
   const rect=el.getBoundingClientRect();
   return {
     label:el.textContent.trim(),href:el.getAttribute('href'),
     width:Math.round(rect.width),height:Math.round(rect.height),
     fontFamily:css.fontFamily,fontSize:css.fontSize,fontWeight:css.fontWeight,
     letterSpacing:css.letterSpacing,color:css.color,background:css.backgroundColor,
     borderColor:css.borderColor,borderRadius:css.borderRadius,
     padding:css.padding,textTransform:css.textTransform
   };
 });
 const homeCTA=await ctaSnapshot(page);
 assert.equal(homeCTA.label,'Start a conversation');
 assert.equal(homeCTA.href,'/contact/');
 const initial=await page.locator('.home-research-card').evaluateAll(cards=>cards.map(el=>({
  art:getComputedStyle(el,'::before').backgroundImage,
  headline:el.querySelector('h3')?.textContent
 })));
 assert.equal(initial.length,3);
 assert.ok(initial.every(row=>row.art.includes('gradient')));
 await screenshot(page,'01-home');
 await page.waitForFunction(original=>{
  const now=[...document.querySelectorAll('.home-research-card')].map(c=>c.querySelector('h3')?.textContent);
  return now.some((title,i)=>title!==original[i]);
 },initial.map(x=>x.headline),{timeout:15000});
 const images=await page.locator('.home-research-card').evaluateAll(cards=>cards.map(el=>getComputedStyle(el,'::before').backgroundImage));
 assert.deepEqual(images,initial.map(x=>x.art),'Original art changed when cards rotated');
 await screenshot(page,'02-featured-rotation');
 // Scan the physical moving radar / new SYSTEM cards during the handoff.
 await page.evaluate(()=>{
  const frame=document.querySelector('[data-frame]');
  const from=window.scrollY+frame.getBoundingClientRect().top-document.querySelector('.topbar').offsetHeight;
  window.scrollTo({top:from+frame.clientHeight*2.6,behavior:'instant'});
 });
 await page.waitForTimeout(1400);
 await screenshot(page,'03-transition');
 await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
 await page.goto(url+'/system/',{waitUntil:'domcontentloaded'});
 await page.locator('.vl-system-score canvas').waitFor();
 await page.locator('.vl-system-chapters #strategy').waitFor();
 await page.waitForFunction(() => [...document.querySelectorAll('.vl-title-line')]
   .every(el => getComputedStyle(el).transform === 'none'), null,{timeout:5000});
 assert.equal(await page.locator('.vl-system-chapters > .preview-service-section').count(),4);
 assert.match(await page.locator('.preview-system-header').innerText(),/Enter through the problem you recognize/);
 assert.equal(await page.locator('.system-read-cta-button').getAttribute('href'),'/the-read/');
 assert.equal(await page.locator('.topbar .index-trigger').count(),1);
 await screenshot(page,'04-system');
 // Observe the approved footer link/wordmark typing without changing their copy.
 await page.evaluate(() => {
   window.__footerTyped=0;
   const footer=document.querySelector('.architecture-footer');
   new MutationObserver(records => {
     for (const record of records) {
       for (const node of record.addedNodes) {
         if (node instanceof Element && (node.classList.contains('lab-type') || node.querySelector('.lab-type'))) {
           window.__footerTyped++;
         }
       }
     }
   }).observe(footer,{childList:true,subtree:true});
   footer.scrollIntoView({block:'center',behavior:'instant'});
 });
 await page.waitForFunction(() => window.__footerTyped>0,null,{timeout:7000});
 await page.waitForTimeout(2200);
 assert.match(await page.locator('.footer-studio-lockup strong').innerText(),/lowob/);
 const largeFooter=await page.locator('.footer-studio-lockup').evaluate(el=>{
   const strong=el.querySelector('strong');
   const mark=el.querySelector('.lowob-mark');
   const blade=mark.querySelector('span');
   return {
     size:parseFloat(getComputedStyle(strong).fontSize),
     markWidth:mark.getBoundingClientRect().width,
     markHeight:mark.getBoundingClientRect().height,
     bladePosition:parseFloat(getComputedStyle(blade).left),
     text:strong.textContent.trim()
   };
 });
 assert.ok(largeFooter.size>=120 && largeFooter.markWidth>=60
   && Math.abs(largeFooter.markHeight-largeFooter.markWidth)<1
   && Math.abs(largeFooter.bladePosition-largeFooter.markWidth*.45)<1,
   'The large original visual-lab logo must be visible and scalable: '+JSON.stringify(largeFooter));
 assert.equal(await page.locator('.footer-links-grid a[href="/research/"]').innerText(),'lowob RESEARCH');
 await screenshot(page,'04a-footer');
 for(const route of ['/system/','/about/','/contact/','/research/','/news/']){
   await page.goto(url+route,{waitUntil:'domcontentloaded'});
   await page.locator('.topbar a.top-conversation').waitFor();
   const observed=await ctaSnapshot(page);
   assert.deepEqual(observed,homeCTA,
     'The top Start a conversation CTA must match the homepage on '+route);
 }
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await mobile.goto(url,{waitUntil:'domcontentloaded'});
 await mobile.locator('.lab-radar').waitFor();
 const overflow=await mobile.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
 assert.ok(overflow<2,'New homepage has horizontal overflow on mobile: '+overflow);
 await screenshot(mobile,'05-mobile');
 const mobileHomeCTA=await ctaSnapshot(mobile);
 await mobile.locator('.architecture-footer').scrollIntoViewIfNeeded();
 const mobileFooter=await mobile.locator('.footer-studio-lockup').evaluate(el=>({
   fontSize:parseFloat(getComputedStyle(el.querySelector('strong')).fontSize),
   markWidth:el.querySelector('.lowob-mark').getBoundingClientRect().width,
   scrollWidth:document.documentElement.scrollWidth,
   innerWidth:window.innerWidth
 }));
 assert.ok(mobileFooter.fontSize>=70 && mobileFooter.markWidth>=30 &&
   mobileFooter.scrollWidth<=mobileFooter.innerWidth+1,
   'Huge footer logo must fit mobile viewport: '+JSON.stringify(mobileFooter));
 await screenshot(mobile,'05a-mobile-footer');
 await mobile.goto(url+'/system/',{waitUntil:'domcontentloaded'});
 assert.deepEqual(await ctaSnapshot(mobile),mobileHomeCTA,
   'Mobile SYSTEM top CTA must match mobile homepage');
 await mobile.locator('.vl-system-score').waitFor();
 await mobile.waitForFunction(() => [...document.querySelectorAll('.vl-title-line')]
   .every(el => getComputedStyle(el).transform === 'none'), null, {timeout:5000});
 const systemOverflow=await mobile.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
 assert.ok(systemOverflow<2,'SYSTEM page horizontal overflow on mobile: '+systemOverflow);
 await screenshot(mobile,'06-system-mobile');
 for(const route of ['/about/','/contact/','/research/']){
   await mobile.goto(url+route,{waitUntil:'domcontentloaded'});
   assert.deepEqual(await ctaSnapshot(mobile),mobileHomeCTA,
     'Mobile top CTA must match homepage on '+route);
 }
 assert.deepEqual(errors,[],'Browser runtime errors');
 console.log('Browser integration tests passed.');
}finally{await browser.close()}

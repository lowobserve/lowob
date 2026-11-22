/* The radar selection follows actual WebGL beam crossings.
   Featured research copy rotates independently while all three original
   CSS-generated images remain fixed to their card positions. */
(()=>{'use strict';
const root=document.querySelector('[data-lowob-radar]');
const cards=[...document.querySelectorAll('.research-showcase .home-research-card')].slice(0,3);
for(const card of cards){
  const slug=card.getAttribute('href')?.match(/^\/research\/([^/]+)\//)?.[1];
  if(slug)card.dataset.articleSlug=slug;
}

/* Keep data-article-slug untouched: it selects the first three original
   gradients. Only the text, metadata and destination rotate. */
let articlePool=[];
let cardCursor=3;
let cardCursorPosition=0;
let rotationTimer=null;
function renderArticle(card,article){
  const meta=card.querySelector('.home-research-meta');
  const title=card.querySelector('h3');
  const summary=card.querySelector('p');
  if(!meta||!title||!summary)return;
  const labels=meta.querySelectorAll('span');
  if(labels[0])labels[0].textContent=article.label||article.sector||'Research';
  if(labels[1])labels[1].textContent=(article.minutes||7)+'-minute read';
  title.textContent=article.title;
  summary.textContent=article.excerpt||'';
  card.href=article.url;
  card.dataset.displayedArticle=article.slug;
  card.setAttribute('aria-label',article.title);
}
function rotateFeaturedCard(){
  if(document.hidden||!articlePool.length||cards.length!==3||
     cards.some(card=>card.matches(':hover,:focus-within')))return;
  const next=articlePool[cardCursor++%articlePool.length];
  const card=cards[cardCursorPosition++%cards.length];
  if(!next||next.slug===card.dataset.displayedArticle)return;
  card.classList.add('is-changing');
  window.setTimeout(()=>{
    renderArticle(card,next);
    card.classList.remove('is-changing');
  },200);
}
if(cards.length===3){
  cards.forEach(card=>{
    card.dataset.displayedArticle=card.dataset.articleSlug||'';
  });
  fetch('/assets/article-art/manifest.json',{cache:'no-cache'})
    .then(response=>response.ok?response.json():Promise.reject(new Error('Article manifest unavailable')))
    .then(data=>{
      if(!Array.isArray(data.articles)||data.articles.length<4)return;
      articlePool=data.articles.filter(article=>article.title&&article.url&&article.slug);
      if(articlePool.length>3&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
        rotationTimer=window.setInterval(rotateFeaturedCard,4600);
      }
    }).catch(()=>{});
}

if(!root)return;
const TAU=2*Math.PI;
const normalize=angle=>((angle%TAU)+TAU)%TAU;
const aperture=root.querySelector('[data-aperture]');
let previousSweep=null;
let lastAutomaticChange=0;
let manualHoldUntil=0;
const minInterval=2600;
const dots=()=>[...root.querySelectorAll('.lab-signal:not([hidden])')];

function crossing(event){
  if(document.hidden || !aperture || root.querySelector('[data-pause]')?.getAttribute('aria-pressed')==='true')return;
  const rawAngle=Number(event.detail?.angle);
  if(!Number.isFinite(rawAngle))return;
  const sweep=normalize(rawAngle);
  if(previousSweep===null){
    previousSweep=sweep;
    lastAutomaticChange=performance.now();
    return;
  }
  const start=previousSweep;
  previousSweep=sweep;
  // The WebGL beam rotates clockwise: a crossing occurs between consecutive
  // decreasing sweep angles, measured in screen-independent polar coordinates.
  const delta=normalize(start-sweep);
  if(delta<.00001 || delta>.15)return; // ignore jumps after tab/sweep interruptions
  const now=performance.now();
  if(now-lastAutomaticChange<minInterval || now<manualHoldUntil)return;
  const bounds=aperture.getBoundingClientRect();
  const centerX=bounds.left+bounds.width/2;
  const centerY=bounds.top+bounds.height/2;
  const candidates=[];
  for(const dot of dots()){
    if(dot.classList.contains('is-selected'))continue;
    const rect=dot.getBoundingClientRect();
    const dx=rect.left+rect.width/2-centerX;
    const dy=rect.top+rect.height/2-centerY;
    if(Math.hypot(dx,dy)<15)continue;
    // Canvas coordinates increase upward; DOM y increases downward.
    const angle=normalize(Math.atan2(-dy,dx));
    const crossed=normalize(start-angle);
    if(crossed<=delta+.002)candidates.push({dot,crossed});
  }
  if(!candidates.length)return;
  candidates.sort((a,b)=>a.crossed-b.crossed);
  // Selecting the marker is also what moves its square and updates the summary.
  candidates[0].dot.click();
  lastAutomaticChange=now;
}
window.addEventListener('lowob:radar-sweep',crossing);

root.addEventListener('click',event=>{
  if(event.isTrusted && event.target.closest('.lab-signal,[data-step]')){
    manualHoldUntil=performance.now()+5000;
    lastAutomaticChange=performance.now();
  }
});
const list=root.querySelector('.lab-signal-directory');
if(list){
  document.addEventListener('pointerdown',event=>{
    if(list.open&&!list.contains(event.target))list.open=false;
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&list.open){
      list.open=false;
      list.querySelector('summary')?.focus();
    }
  });
}
})();

/* Radar selection follows the WebGL beam crossing actual featured-article dots.
   The original three illustrated research cards remain static. */
(()=>{'use strict';
const root=document.querySelector('[data-lowob-radar]');
const cards=[...document.querySelectorAll('.research-showcase .home-research-card')].slice(0,3);
for(const card of cards){
  const slug=card.getAttribute('href')?.match(/^\/research\/([^/]+)\//)?.[1];
  if(slug)card.dataset.articleSlug=slug;
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

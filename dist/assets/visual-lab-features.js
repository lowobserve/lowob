/* The three original illustrated research cards are deliberately static.
   The radar independently cycles through all 15 featured research signals. */
(()=>{'use strict';
const root=document.querySelector('[data-lowob-radar]');
const cards=[...document.querySelectorAll('.research-showcase .home-research-card')].slice(0,3);
for(const card of cards){
 const match=card.getAttribute('href')?.match(/^\/research\/([^/]+)\//);
 if(match)card.dataset.articleSlug=match[1];
}
if(!root)return;
const reduced=window.matchMedia('(prefers-reduced-motion:reduce)');
let radarIndex=0,pausedUntil=0,manual=false;
const radarDots=()=>[...root.querySelectorAll('.lab-signal:not([hidden])')];
function nextRadar(){
 if(document.hidden||reduced.matches||Date.now()<pausedUntil
   ||root.querySelector('[data-pause]')?.getAttribute('aria-pressed')==='true')return;
 const dots=radarDots();if(!dots.length)return;
 radarIndex=manual?(dots.findIndex(x=>x.classList.contains('is-selected'))+1+dots.length)%dots.length:(radarIndex+1)%dots.length;
 manual=false;dots[radarIndex]?.click();
}
root.addEventListener('pointerover',event=>{
 if(event.target.closest('.lab-signal'))pausedUntil=Date.now()+5300;
});
root.addEventListener('click',event=>{
 if(event.isTrusted&&event.target.closest('.lab-signal,[data-step]')){
   manual=true;pausedUntil=Date.now()+7000;
 }
});
const list=root.querySelector('.lab-signal-directory');
if(list){
 document.addEventListener('pointerdown',event=>{
   if(list.open&&!list.contains(event.target))list.open=false;
 });
 document.addEventListener('keydown',event=>{
   if(event.key==='Escape'&&list.open){
     list.open=false;list.querySelector('summary')?.focus();
   }
 });
}
if(!reduced.matches)setInterval(nextRadar,3300);
})();

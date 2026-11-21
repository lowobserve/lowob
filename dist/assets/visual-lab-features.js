/* Curated research rotation, independent from the visual lab WebGL animation. */
(()=>{'use strict';
const path='/assets/article-art/manifest.json';
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
let articles=[],cycleTimer=null,radarTimer=null,cardCursor=3,cardIndex=0;
const root=document.querySelector('[data-lowob-radar]');
const cards=[...document.querySelectorAll('.research-showcase .home-research-card')].slice(0,3);
if(!root&&!cards.length)return;
let radarPausedUntil=0;
const escapeText=text=>String(text||'');
function content(article){
  const img=document.createElement('img');img.className='lab-article-art';img.src=article.image;img.alt='';img.loading='lazy';img.decoding='async';
  const meta=document.createElement('div');meta.className='home-research-meta';
  const sector=document.createElement('span');sector.textContent=article.sector;
  const time=document.createElement('span');time.textContent=article.minutes+'-minute read';meta.append(sector,time);
  const title=document.createElement('h3');title.textContent=article.title;
  const summary=document.createElement('p');summary.textContent=article.excerpt;
  return [img,meta,title,summary];
}
function applyCard(card,article){
  card.href=article.url;card.replaceChildren(...content(article));card.dataset.articleSlug=article.slug;
  card.setAttribute('aria-label',article.title);
}
function initCards(){
  if(!cards.length)return;
  cards.forEach((card,i)=>applyCard(card,articles[i]));
  if(reduced.matches)return;
  cycleTimer=setInterval(()=>{
    if(document.hidden||cards.some(card=>card.matches(':hover,:focus-within')))return;
    const card=cards[cardIndex%cards.length];cardIndex++;
    const next=articles[cardCursor++%articles.length];
    if(card.dataset.articleSlug===next.slug)return;
    card.classList.add('is-changing');
    setTimeout(()=>{applyCard(card,next);card.classList.remove('is-changing')},220);
  },4600);
}
function findDots(){return [...root.querySelectorAll('.lab-signal:not([hidden])')]}
let radarIndex=0,wasClicked=false;
function rotateRadar(){
 if(!root||document.hidden||reduced.matches||Date.now()<radarPausedUntil)return;
 const dots=findDots();if(!dots.length)return;
 if(wasClicked){radarIndex=(dots.findIndex(dot=>dot.classList.contains('is-selected'))+1)%dots.length;wasClicked=false}
 else radarIndex=(radarIndex+1)%dots.length;
 dots[radarIndex]?.click();
}
function initRadar(){
 if(!root||reduced.matches)return;
 root.addEventListener('pointerover',event=>{if(event.target.closest('.lab-signal'))radarPausedUntil=Date.now()+5800});
 root.addEventListener('click',event=>{if(event.target.closest('.lab-signal,[data-step]')){wasClicked=true;radarPausedUntil=Date.now()+7500}});
 radarTimer=setInterval(rotateRadar,3300);
}
fetch(path,{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('Library missing');return r.json()}).then(data=>{
 if(!Array.isArray(data.articles)||data.articles.length!==15)return;
 articles=data.articles;initCards();initRadar();
}).catch(()=>{});
})();
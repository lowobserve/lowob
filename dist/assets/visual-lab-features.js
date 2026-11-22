/* The original three cards retain their copy and artwork until individually rotated. */
(()=>{'use strict';
const root=document.querySelector('[data-lowob-radar]');
const cards=[...document.querySelectorAll('.research-showcase .home-research-card')].slice(0,3);
const reduced=window.matchMedia('(prefers-reduced-motion:reduce)');
if(!root&&!cards.length)return;
let articles=[],cursor=3,cardIndex=0,radarIndex=0,pausedUntil=0,manual=false;
function buildCard(article){
 const meta=document.createElement('div');meta.className='home-research-meta';
 const category=document.createElement('span');category.textContent=article.label||article.sector||'Research';
 const duration=document.createElement('span');duration.textContent=article.minutes+'-minute read';
 meta.append(category,duration);
 const h3=document.createElement('h3');h3.textContent=article.title;
 const p=document.createElement('p');p.textContent=article.excerpt||'';
 return [meta,h3,p];
}
function applyCard(card,article){
 card.href=article.url;card.replaceChildren(...buildCard(article));
 card.dataset.articleSlug=article.slug;card.setAttribute('aria-label',article.title);
}
function nextCard(){
 if(document.hidden||reduced.matches||cards.some(c=>c.matches(':hover,:focus-within')))return;
 const card=cards[cardIndex++%cards.length];
 const article=articles[cursor++%articles.length];
 if(!article||card.dataset.articleSlug===article.slug)return;
 card.classList.add('is-changing');
 setTimeout(()=>{applyCard(card,article);card.classList.remove('is-changing');},200);
}
function radarDots(){return root?[...root.querySelectorAll('.lab-signal:not([hidden])')]:[]}
function nextRadar(){
 if(!root||document.hidden||reduced.matches||Date.now()<pausedUntil
   ||root.querySelector('[data-pause]')?.getAttribute('aria-pressed')==='true')return;
 const dots=radarDots();if(!dots.length)return;
 radarIndex=manual?(dots.findIndex(x=>x.classList.contains('is-selected'))+1+dots.length)%dots.length:(radarIndex+1)%dots.length;
 manual=false;dots[radarIndex].click();
}
function init(){
 if(cards.length && articles.length){
  cards.forEach((card,i)=>{card.dataset.articleSlug=articles[i].slug;card.setAttribute('aria-label',card.querySelector('h3')?.textContent||articles[i].title);});
  if(!reduced.matches)setInterval(nextCard,4600);
 }
 if(root&&!reduced.matches){
  root.addEventListener('pointerover',event=>{if(event.target.closest('.lab-signal'))pausedUntil=Date.now()+5300;});
  root.addEventListener('click',event=>{if(event.isTrusted&&event.target.closest('.lab-signal,[data-step]')){manual=true;pausedUntil=Date.now()+7000;}});
  setInterval(nextRadar,3300);
 }
}
fetch('/assets/article-art/manifest.json',{cache:'no-cache'})
.then(r=>r.ok?r.json():Promise.reject(Error('Missing article manifest')))
.then(data=>{if(!Array.isArray(data.articles)||data.articles.length!==15)return;articles=data.articles;init();})
.catch(()=>{});
})();

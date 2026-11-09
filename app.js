'use strict';
const container=document.querySelector('#projects');
const count=document.querySelector('#result-count');
const dialog=document.querySelector('#image-dialog');
function element(tag,text,className){const e=document.createElement(tag);if(text)e.textContent=text;if(className)e.className=className;return e;}
function renderCard(p,index){
 const card=element('article',null,'project');card.dataset.category=p.category;
 const imageButton=element('button',null,'image-button');imageButton.type='button';imageButton.setAttribute('aria-label',`View ${p.name} screenshot`);
 const image=element('img');image.src=`assets/${p.id}.webp`;image.alt=p.caption;image.loading='lazy';image.width=1400;image.height=875;imageButton.append(image);
 imageButton.addEventListener('click',()=>{document.querySelector('#image-title').textContent=p.name;const full=document.querySelector('#full-image');full.src=image.src;full.alt=p.caption;document.querySelector('#image-caption').textContent=p.caption+'. '+p.limit;dialog.showModal();});
 const body=element('div',null,'project-body');const top=element('div',null,'project-top');top.append(element('span',p.category),element('span',String(index+1).padStart(2,'0'),'project-number'));
 const tags=element('div',null,'tags');p.stack.forEach(t=>tags.append(element('span',t)));
 const details=element('details');details.append(element('summary','Project details & my contribution'));
 for(const [heading,text] of [['Implemented',p.description],['My contribution',p.role],['Scope & availability',p.limit]]){const para=element('p');para.append(element('strong',heading+': '),document.createTextNode(text));details.append(para);}
 const links=element('div',null,'project-links');if(p.github){const link=element('a','View GitHub ↗');link.href=p.github;link.target='_blank';link.rel='noopener noreferrer';links.append(link);}else links.append(element('span','Source not publicly released'));
 links.append(element('span','No verified hosted demo'));
 body.append(top,element('h3',p.name),element('p',p.problem,'problem'),tags,element('p',p.status,'status'),element('p',p.caption,'image-note'),details,links);card.append(imageButton,body);return card;
}
function filterProjects(category){let visible=0;container.querySelectorAll('.project').forEach(card=>{card.hidden=category!=='All'&&card.dataset.category!==category;if(!card.hidden)visible++;});count.textContent=`${visible} project${visible===1?'':'s'} · ${category==='All'?'all disciplines':category}`;document.querySelectorAll('.filter').forEach(button=>{const active=button.dataset.category===category;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});}
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>filterProjects(button.dataset.category)));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
fetch('projects.json').then(r=>{if(!r.ok)throw new Error('Project data unavailable');return r.json();}).then(projects=>{projects.forEach((p,i)=>container.append(renderCard(p,i)));filterProjects('All');}).catch(()=>{count.textContent='Project data could not be loaded.';const p=element('p','Please reload, or browse the public repositories using the GitHub link above.','load-error');container.append(p);});

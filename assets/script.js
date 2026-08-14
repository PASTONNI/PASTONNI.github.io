function animateBars(el){
  if(!el) return;
  for(let i=0;i<28;i++){
    const b=document.createElement('div');
    b.className='bar';
    el.appendChild(b);
  }
  let i=0;
  const iv=setInterval(()=>{
    const b=el.children[i%el.children.length];
    b.style.height=(8+Math.random()*32)+'px';
    b.style.opacity='0.9';
    setTimeout(()=>{b.style.opacity='0.2'},600);
    i++;
    if(i>140) clearInterval(iv);
  },90);
}

function animateStat(el,target,prefix,suffix,step){
  if(!el) return;
  let n=0;
  const iv=setInterval(()=>{
    n+=step;
    if(n>=target){n=target;clearInterval(iv);}
    el.textContent=prefix+n.toLocaleString()+suffix;
  },30);
}

document.addEventListener('DOMContentLoaded',()=>{
  animateBars(document.querySelector('.bars'));
  const s1=document.querySelector('[data-stat="scan"]');
  const s2=document.querySelector('[data-stat="saved"]');
  animateStat(s1,93,'','%',3);
  animateStat(s2,4660,'$','',140);
});

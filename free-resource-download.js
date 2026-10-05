(function(){
  'use strict';
  const API='/api/r2/free-file';
  const loaded=new Map();
  let resources=[];

  async function loadResources(){
    try{
      const r=await fetch('/api/resources?_free='+Date.now(),{credentials:'same-origin',cache:'no-store'});
      const d=await r.json().catch(()=>({}));
      if(r.ok&&d.ok&&Array.isArray(d.resources)) resources=d.resources;
    }catch(e){ console.warn('Free resource list unavailable:',e); }
    scan();
  }

  function findResource(id){ return resources.find(r=>String(r.id)===String(id)); }
  function isFree(r){
    const price=Number(r?.price??0), discount=Number(r?.discount??r?.discount_price??0);
    return Math.max(0,Math.round(price*(1-Math.max(0,Math.min(100,discount))/100)))===0;
  }
  function fileKey(r){ return String(r?.r2Key||r?.r2_key||'').trim(); }

  async function freeDownload(id, original){
    const r=findResource(id);
    if(!r || !isFree(r) || !fileKey(r)) return false;
    if(original) original.dataset.freeDownloadHandled='1';
    try{
      const url=API+'?resourceId='+encodeURIComponent(r.id)+'&key='+encodeURIComponent(fileKey(r));
      window.location.href=url;
    }catch(e){ alert('Free download could not be started. Please try again.'); }
    return true;
  }

  function addButton(original,r){
    if(!original || !isFree(r) || !fileKey(r)) return;
    const parent=original.parentElement;
    if(!parent || parent.querySelector('[data-free-resource-download="'+CSS.escape(String(r.id))+'"]')) return;
    const b=document.createElement('button');
    b.type='button';
    b.className='download-button free-download-button';
    b.textContent='⬇ Download FREE';
    b.dataset.freeResourceDownload=String(r.id);
    b.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();freeDownload(r.id,b);});
    parent.appendChild(b);
  }

  function scan(){
    document.querySelectorAll('[data-download-resource]').forEach(el=>{
      const id=el.dataset.downloadResource;
      const r=findResource(id);
      if(r) addButton(el,r);
    });
    document.querySelectorAll('[data-free-resource-id]').forEach(el=>{
      const r=findResource(el.dataset.freeResourceId);
      if(r && !el.dataset.freeDownloadReady){
        el.dataset.freeDownloadReady='1';
        el.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();freeDownload(r.id,el);});
      }
    });
  }

  // Capture phase runs before the paid-download handler. A KSh 0 resource bypasses payment.
  document.addEventListener('click',function(e){
    const target=e.target.closest?.('[data-download-resource]');
    if(!target) return;
    const r=findResource(target.dataset.downloadResource);
    if(r && isFree(r) && fileKey(r)){
      e.preventDefault();
      e.stopImmediatePropagation();
      freeDownload(r.id,target);
    }
  },true);

  const observer=new MutationObserver(()=>scan());
  function boot(){
    observer.observe(document.body,{childList:true,subtree:true});
    loadResources();
    setTimeout(scan,500);
    setTimeout(loadResources,2000);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();

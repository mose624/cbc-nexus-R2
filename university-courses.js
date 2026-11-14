/* CBE Nexus — institution-specific course listings
   Prefer official regulator / placement records. Never infer a course title from a broad subject area. */
(function(){
  const list=document.querySelector("#instList");
  if(!list)return;
  const type=document.body.dataset.instType||"";
  const levelEl=document.querySelector("#courseLevel");
  const esc=v=>String(v??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
  const loaded=new WeakMap();
  const observer=("IntersectionObserver" in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){observer.unobserve(e.target);loadCard(e.target)}}),{rootMargin:"500px"}):null;
  function selectedLevel(){return (levelEl?.value||"all").toLowerCase()}
  function matchLevel(item){
    const wanted=selectedLevel(),v=String(item.level||item.qualificationLevel||"").toLowerCase(),n=String(item.name||item.programmeName||item.courseName||"").toLowerCase();
    if(!wanted||wanted==="all")return true;
    if(wanted==="degree")return /bachelor|degree/.test(v+" "+n)&&!/master|phd|doctor|postgraduate/.test(v+" "+n);
    if(wanted==="masters")return /master/.test(v+" "+n);
    if(wanted==="phd")return /phd|doctor/.test(v+" "+n);
    if(wanted==="postgraduate diploma")return /postgraduate diploma/.test(v+" "+n);
    if(wanted==="higher diploma")return /higher diploma/.test(v+" "+n);
    if(wanted==="short")return /short/.test(v+" "+n);
    if(wanted==="diploma")return /diploma/.test(v+" "+n)&&!/higher diploma/.test(v+" "+n);
    if(wanted==="certificate")return /certificate/.test(v+" "+n);
    return true;
  }
  function cardName(card){return card.querySelector("h2")?.textContent?.trim()||""}
  async function getJson(url){const r=await fetch(url,{cache:"no-store"});const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"No official programme record returned");return d}
  async function findCourses(name){
    const requests=[];
    if(["public","private","specialized","colleges","interim"].includes(type)){
      requests.push(async()=>{const d=await getJson("/api/cue/programmes?institution="+encodeURIComponent(name));return {items:d.programmes||[],source:"CUE",date:d.sourceDate||"latest available",url:"https://www.cue.or.ke/index.php?Itemid=253&id=22&option=com_content&view=article"}});
      requests.push(async()=>{const d=await getJson("/api/kuccps/university-programmes?institution="+encodeURIComponent(name));return {items:d.programmes||[],source:"KUCCPS",date:d.cycle||"current placement cycle",url:d.sourceUrl||"https://students.kuccps.net/institutions/"}});
    }else if(type==="tvet"||type==="technical"){
      requests.push(async()=>{const d=await getJson("/api/tveta/institution?institution="+encodeURIComponent(name));return {items:d.courses||[],source:"TVETA",date:d.fetchedAt||"",url:d.sourceUrl||"https://www.tveta.go.ke/accredited-tvet-institutions/"}});
      requests.push(async()=>{const d=await getJson("/api/kuccps/university-programmes?institution="+encodeURIComponent(name));return {items:d.programmes||[],source:"KUCCPS",date:d.cycle||"",url:d.sourceUrl||"https://students.kuccps.net/institutions/"}});
    }else{
      requests.push(async()=>{const d=await getJson("/api/kuccps/university-programmes?institution="+encodeURIComponent(name));return {items:d.programmes||[],source:"KUCCPS",date:d.cycle||"current placement cycle",url:d.sourceUrl||"https://students.kuccps.net/institutions/"}});
      if(type==="kmtc")requests.push(async()=>{const d=await getJson("/api/tveta/institution?institution="+encodeURIComponent(name.replace(/^KMTC\s*[-–]\s*/i,"Kenya Medical Training College")));return {items:d.courses||[],source:"TVETA",date:d.fetchedAt||"",url:d.sourceUrl||"https://www.tveta.go.ke/accredited-tvet-institutions/"}});
    }
    for(const request of requests){try{const result=await request();if(result.items.length)return result}catch(e){}}
    return {items:[],source:"",date:"",url:""};
  }
  async function loadCard(card){
    const name=cardName(card);if(!name||loaded.has(card))return;
    loaded.set(card,"loading");
    const box=document.createElement("section");box.className="cbe-course-box";box.setAttribute("aria-live","polite");
    box.style.cssText="margin:12px 0;padding:12px;border-radius:10px;background:#f8fafc;border:1px solid #dbeafe";
    box.innerHTML="<strong style='color:#075985'>🎓 Institution-specific courses</strong><p style='font-size:.8rem;color:#64748b;margin:7px 0'>Checking the official programme register…</p>";
    const action=card.querySelector(".inst-btn");card.insertBefore(box,action||null);
    try{
      const data=await findCourses(name);
      if(!data.items.length){
        box.innerHTML="<strong style='color:#075985'>🎓 Courses / programmes</strong><p style='font-size:.8rem;color:#475569;margin:7px 0'>No institution-specific course rows were returned by the connected official registers. This is not confirmation that the institution has no courses. Check its current prospectus or admissions office.</p><a href='"+esc(type==="tvet"||type==="technical"?"https://www.tveta.go.ke/tvet-courses/":type==="kmtc"?"https://kmtc.ac.ke/study/academic-programmes":"https://students.kuccps.net/institutions/")+"' target='_blank' rel='noopener' style='font-size:.78rem;font-weight:800'>Open official course register ↗</a>";
        return;
      }
      card.dataset.courseItems=JSON.stringify(data.items);
      card.dataset.courseSource=data.source;
      renderCard(card,box,data);
    }catch(e){
      box.innerHTML="<strong style='color:#075985'>🎓 Institution-specific courses</strong><p style='font-size:.8rem;color:#475569;margin:7px 0'>The official course register is temporarily unavailable. Please check the institution's official website.</p>";
    }
  }
  function renderCard(card,box,data){
    let items=[];try{items=JSON.parse(card.dataset.courseItems||"[]")}catch{}
    const shown=items.filter(matchLevel);
    const title=data?.source||card.dataset.courseSource||"Official register";
    const sourceUrl=data?.url||"https://www.cue.or.ke/";
    const courseName=x=>x.programmeName||x.name||x.courseName||"";
    const courseLevel=x=>x.qualificationLevel||x.level||"Level not stated";
    const tags=shown.slice(0,8).map(x=>"<li style='font-size:.76rem;color:#334155;margin:3px 0'>"+esc(courseName(x))+" <span style='color:#64748b'>("+esc(courseLevel(x))+")</span></li>").join("");
    const more=shown.length>8?"<details style='margin-top:7px'><summary style='cursor:pointer;font-size:.78rem;font-weight:800;color:#075985'>View all "+shown.length+" programmes</summary><ul style='padding-left:18px;margin:7px 0'>"+shown.slice(8).map(x=>"<li style='font-size:.76rem;margin:3px 0'>"+esc(courseName(x))+" <span style='color:#64748b'>("+esc(courseLevel(x))+")</span></li>").join("")+"</ul></details>":"";
    box.innerHTML="<strong style='color:#166534'>🎓 "+esc(shown.length)+" programme(s) listed by "+esc(title)+"</strong>"+(shown.length?"<ul style='padding-left:18px;margin:8px 0'>"+tags+"</ul>"+more:"<p style='font-size:.8rem;color:#64748b'>No programmes match the selected qualification level.</p>")+"<p style='font-size:.7rem;color:#64748b;margin:8px 0'>Source: "+esc(title)+(data?.date?" • "+esc(data.date):"")+". Published course lists and campus availability may change; confirm the exact intake and campus with the institution.</p><a href='"+esc(sourceUrl)+"' target='_blank' rel='noopener' style='font-size:.75rem;font-weight:800'>Verify on official register ↗</a>";
  }
  function scan(){
    list.querySelectorAll(".inst-card").forEach(card=>{
      if(loaded.has(card))return;
      if(observer)observer.observe(card);else loadCard(card);
    });
  }
  const mutation=new MutationObserver(scan);mutation.observe(list,{childList:true,subtree:true});
  levelEl?.addEventListener("change",()=>list.querySelectorAll(".inst-card").forEach(card=>{const box=card.querySelector(".cbe-course-box");if(box&&card.dataset.courseItems)renderCard(card,box,{source:card.dataset.courseSource,url:"https://www.cue.or.ke/"});}));
  scan();
})();
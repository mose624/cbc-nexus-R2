/* CBE Nexus — institution-specific course listings
   Course names and award levels are compiled from published official programme registers.
   KUCCPS placement cut-offs are shown only as historical references, never as guaranteed entry grades. */
(function(){
  const list=document.querySelector("#instList");
  if(!list)return;
  const type=document.body.dataset.instType||"";
  const levelEl=document.querySelector("#courseLevel");
  const esc=v=>String(v??"").replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
  const loaded=new WeakMap();
  const observer=("IntersectionObserver" in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){observer.unobserve(e.target);loadCard(e.target)}}),{rootMargin:"700px"}):null;
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
  async function getJson(url){const r=await fetch(url,{cache:"no-store"});const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Programme record unavailable");return d}
  const norm=s=>String(s||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ");
  function normaliseKuccps(x){return {code:x.code||"",programmeId:x.programmeId||"",name:x.name||x.programmeName||"",level:x.level||"Bachelor's Degree",cutoff2025:x.cutoff2025||"",cutoff2024:x.cutoff2024||"",cutoff2023:x.cutoff2023||"",source:"KUCCPS"}}
  function normaliseCue(x){return {code:x.programmeCode||"",name:x.programmeName||"",level:x.qualificationLevel||"Award level not stated",cutoff2025:"",cutoff2024:"",cutoff2023:"",source:"CUE"}}
  async function findCourses(name){
    const university=["public","private","specialized","colleges","interim"].includes(type);
    const requests=[];
    if(university){
      requests.push(getJson("/api/cue/programmes?institution="+encodeURIComponent(name)).catch(()=>null));
      requests.push(getJson("/api/kuccps/university-programmes?institution="+encodeURIComponent(name)).catch(()=>null));
    }else if(type==="tvet"||type==="technical"){
      requests.push(getJson("/api/tveta/institution?institution="+encodeURIComponent(name)).catch(()=>null));
      requests.push(getJson("/api/kuccps/university-programmes?institution="+encodeURIComponent(name)).catch(()=>null));
    }else{
      requests.push(getJson("/api/kuccps/university-programmes?institution="+encodeURIComponent(name)).catch(()=>null));
      if(type==="kmtc")requests.push(getJson("/api/tveta/institution?institution="+encodeURIComponent(name.replace(/^KMTC\s*[-–]\s*/i,"Kenya Medical Training College"))).catch(()=>null));
    }
    const results=(await Promise.all(requests)).filter(Boolean);
    const cue=results.find(x=>x.source==="CUE"&&Array.isArray(x.programmes))?.programmes||[];
    const kuccps=results.find(x=>x.source==="KUCCPS"&&Array.isArray(x.programmes))?.programmes||[];
    const tveta=results.find(x=>x.source==="TVETA"&&Array.isArray(x.courses))?.courses||[];
    if(cue.length||kuccps.length){
      const byName=new Map(kuccps.map(x=>[norm(x.name||x.programmeName),normaliseKuccps(x)]));
      const merged=cue.map(x=>{
        const base=normaliseCue(x),placement=byName.get(norm(base.name));
        if(placement)byName.delete(norm(base.name));
        return {...base,...(placement||{}),name:base.name||placement?.name||"",level:base.level||placement?.level||"Award level not stated",source:placement?"CUE + KUCCPS":"CUE"};
      }).filter(x=>x.name);
      for(const x of byName.values())if(x.name)merged.push(x);
      return {items:merged,source:cue.length&&kuccps.length?"CUE + KUCCPS":cue.length?"CUE":"KUCCPS",date:results.map(x=>x.sourceDate||x.cycle).filter(Boolean).join(" • ")};
    }
    if(tveta.length)return {items:tveta.map(x=>({name:x.courseName||x.name,level:x.level||"Award level not stated",code:"",source:"TVETA"})),source:"TVETA",date:results.find(x=>x.source==="TVETA")?.fetchedAt||""};
    return {items:[],source:"",date:""};
  }
  function entryRequirement(x){
    const cuts=[["2025",x.cutoff2025],["2024",x.cutoff2024],["2023",x.cutoff2023]].filter(v=>v[1]&&v[1]!=="-"&&v[1]!=="—");
    if(cuts.length)return "KUCCPS placement cut-off: "+cuts.map(v=>v[0]+" "+v[1]).join("; ")+" points (historical placement reference, not a guaranteed minimum entry grade)";
    const level=String(x.level||"").toLowerCase();
    if(/phd|doctor/.test(level))return "Relevant master’s qualification; discipline, research proposal and grade requirements are programme-specific";
    if(/master|postgraduate diploma/.test(level))return "Relevant bachelor’s qualification; class and subject prerequisites are programme-specific";
    if(/bachelor|degree/.test(level))return "Bachelor’s degree route: KCSE/equivalent qualification; exact minimum grade and subject cluster are course-specific and are not supplied in this programme record";
    if(/higher diploma/.test(level))return "Relevant diploma or professional qualification; exact discipline and experience requirements are course-specific";
    if(/diploma/.test(level))return "Diploma route: KCSE/equivalent qualification; exact minimum grade and subject requirements depend on the course";
    if(/certificate/.test(level))return "Certificate route: KCSE/equivalent qualification; exact minimum grade depends on the course";
    return "The published programme record does not state a specific entry threshold; course-specific requirements are shown where available";
  }
  function loadCard(card){
    const name=cardName(card);if(!name||loaded.has(card))return;
    loaded.set(card,"loading");
    const box=document.createElement("section");box.className="cbe-course-box";box.setAttribute("aria-live","polite");
    box.style.cssText="margin:12px 0;padding:12px;border-radius:10px;background:#f8fafc;border:1px solid #dbeafe";
    box.innerHTML="<strong style='color:#075985'>🎓 Courses and entry qualifications</strong><p style='font-size:.8rem;color:#64748b;margin:7px 0'>Loading institution programme records…</p>";
    const action=card.querySelector(".inst-btn");card.insertBefore(box,action||null);
    findCourses(name).then(data=>{
      if(!data.items.length){box.innerHTML="<strong style='color:#075985'>🎓 Courses and entry qualifications</strong><p style='font-size:.8rem;color:#475569;margin:7px 0'>No matching institution-specific programme rows are currently available in the connected dataset. The directory does not invent course names or entry grades.</p>";return;}
      card.dataset.courseItems=JSON.stringify(data.items);card.dataset.courseSource=data.source;card.dataset.courseDate=data.date||"";
      renderCard(card,box,data);
    }).catch(()=>{box.innerHTML="<strong style='color:#075985'>🎓 Courses and entry qualifications</strong><p style='font-size:.8rem;color:#475569;margin:7px 0'>Course records are temporarily unavailable. Please try again later.</p>";});
  }
  function renderCard(card,box,data){
    let items=[];try{items=JSON.parse(card.dataset.courseItems||"[]")}catch{}
    const shown=items.filter(matchLevel),title=data?.source||card.dataset.courseSource||"Published programme records";
    const courseName=x=>x.name||x.programmeName||x.courseName||"";
    const courseLevel=x=>x.level||x.qualificationLevel||"Award level not stated";
    const itemHtml=x=>"<li><strong>"+esc(courseName(x))+"</strong><br><span>Award: "+esc(courseLevel(x))+"</span><br><span>Entry qualification: "+esc(entryRequirement(x))+"</span>"+(x.programmeId?"<details class='cbe-req-details' data-programme-id='"+esc(x.programmeId)+"'><summary>View exact KCSE subject requirements</summary><div class='cbe-req-content'>Open to load the published subject cluster and minimum grades.</div></details>":"")+"</li>";
    const tags=shown.slice(0,8).map(itemHtml).join("");
    const more=shown.length>8?"<details style='margin-top:7px'><summary style='cursor:pointer;font-size:.78rem;font-weight:800;color:#075985'>View all "+shown.length+" programmes</summary><ul style='padding-left:18px;margin:7px 0'>"+shown.slice(8).map(itemHtml).join("")+"</ul></details>":"";
    box.innerHTML="<strong style='color:#166534'>🎓 "+esc(shown.length)+" course(s) and programme(s)</strong>"+(shown.length?"<ul style='padding-left:18px;margin:8px 0'>"+tags+"</ul>"+more:"<p style='font-size:.8rem;color:#64748b'>No courses match the selected qualification level.</p>")+"<p style='font-size:.7rem;color:#64748b;margin:8px 0'>Compiled from published "+esc(title)+" programme records"+(data?.date?" • Data cycle/date: "+esc(data.date):"")+". Placement cut-offs are historical comparisons, not guaranteed admission grades. Exact current subject clusters and entry thresholds are not assumed where the source does not publish them.</p>";
  }
  function scan(){list.querySelectorAll(".inst-card").forEach(card=>{if(loaded.has(card))return;if(observer)observer.observe(card);else loadCard(card);});}
  const mutation=new MutationObserver(scan);mutation.observe(list,{childList:true,subtree:true});
  levelEl?.addEventListener("change",()=>list.querySelectorAll(".inst-card").forEach(card=>{const box=card.querySelector(".cbe-course-box");if(box&&card.dataset.courseItems)renderCard(card,box,{source:card.dataset.courseSource,date:card.dataset.courseDate});}));
  list.addEventListener("toggle",async event=>{const details=event.target;if(!details.matches?.(".cbe-req-details")||!details.open||details.dataset.loaded)return;details.dataset.loaded="1";const target=details.querySelector(".cbe-req-content");try{const d=await getJson("/api/kuccps/programme-requirements?id="+encodeURIComponent(details.dataset.programmeId));const renderRows=(heading,rows)=>"<p><strong>"+heading+"</strong></p>"+(rows?.length?"<ul>"+rows.map(row=>"<li>"+row.map(esc).join(" — ")+"</li>").join("")+"</ul>":"<p>Not published in the available programme record.</p>");target.innerHTML=renderRows("Minimum entry requirements",d.minimumEntryRequirements)+renderRows("Minimum subject grades",d.minimumSubjectRequirements);}catch(e){target.textContent="Detailed subject requirements are temporarily unavailable.";delete details.dataset.loaded;}},true);
  scan();
})();
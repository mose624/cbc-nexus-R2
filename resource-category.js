const gradeSubjects={
"PP1":["Creative Activities","Language Activities","Mathematics Activities","Environmental Activities","Religious Activities"],
"PP2":["Creative Activities","Language Activities","Mathematics Activities","Environmental Activities","Religious Activities"],
"Grade 1":["Creative Activities","CRE","English Activities","Environmental Activities","HRE","Indigenous Languages","IRE","Kiswahili","Mathematics"],
"Grade 2":["Creative Activities","CRE","English Activities","Environmental Activities","HRE","Indigenous Languages","IRE","Kiswahili","Mathematics"],
"Grade 3":["Creative Activities","CRE","English Activities","Environmental Activities","HRE","Indigenous Languages","IRE","Kiswahili","Mathematics"],
"Grade 4":["Agriculture","Arabic","Creative Arts","CRE","English","French","German","HRE","Indigenous Languages","IRE","Kiswahili","Mandarin","Mathematics","Science & Technology","Social Studies"],
"Grade 5":["Agriculture","Arabic","Creative Arts","CRE","English","French","German","HRE","Indigenous Languages","IRE","Kiswahili","Mandarin","Mathematics","Science & Technology","Social Studies"],
"Grade 6":["Agriculture","Arabic","Creative Arts","CRE","English","French","German","HRE","Indigenous Languages","IRE","Kiswahili","Mandarin","Mathematics","Science & Technology","Social Studies"],
"Grade 7":["Agriculture","Arabic","Creative Arts","CRE","English","French","German","HRE","Indigenous Languages","IRE","Kiswahili","Mandarin","Mathematics","Pre-Technical Studies","Integrated Science","Social Studies"],
"Grade 8":["Agriculture","Arabic","Creative Arts","CRE","English","French","German","HRE","Indigenous Languages","IRE","Kiswahili","Mandarin","Mathematics","Pre-Technical Studies","Integrated Science","Social Studies"],
"Grade 9":["Agriculture","Arabic","Creative Arts","CRE","English","French","German","HRE","Indigenous Languages","IRE","Kiswahili","Mandarin","Mathematics","Pre-Technical Studies","Integrated Science","Social Studies"],
"Grade 10":["Agriculture","Aviation","Biology","Building & Construction","Business Studies","Chemistry","CRE","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","IRE","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","HRE","Mandarin Chinese"],
"Grade 11":["Agriculture","Aviation","Biology","Building & Construction","Business Studies","Chemistry","CRE","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","IRE","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","HRE","Mandarin Chinese"],
"Grade 12":["Agriculture","Aviation","Biology","Building & Construction","Business Studies","Chemistry","CRE","Community Service Learning","Computer Studies","Core Mathematics","Electricity","English","Essential Mathematics","Fasihi ya Kiswahili","Fine Arts","General Science","Geography","History & Citizenship","Home Science","ICT","Indigenous Languages","IRE","Kiswahili","Literature in English","Marine & Fisheries","Media Technology","Metal Work","Music & Dance","Physics","Power Mechanics","Sports & Recreation","Theatre & Film","Woodwork","Arabic","French","German","HRE","Mandarin Chinese"]};
const params=new URLSearchParams(location.search),typeSelect=document.getElementById("type"),grade=document.getElementById("grade"),subject=document.getElementById("subject"),search=document.getElementById("search"),results=document.getElementById("results"),filterContext=document.getElementById("filterContext");\nlet renderLimit=60,searchTimer=null;
const resourceTypes=["Notes","Schemes of Work","Lesson Plan","Records of Work","Assessment Test","Topical Questions","Holiday Workbooks","Past Papers","Marking Schemes","Quizzes","Study Guides","Projects","KNEC Rubrics","Assignments","Bookshop"];
/* The HTML already contains the All Resources option; add each real material type only once. */
resourceTypes.forEach(t=>typeSelect.add(new Option(t,t)));
Object.keys(gradeSubjects).forEach(g=>grade.add(new Option(g,g)));
typeSelect.value=params.get("type")||"All Materials";
const subjectAliases={"Christian Religious Education (CRE)":"CRE","Hindu Religious Education (HRE)":"HRE","Islamic Religious Education (IRE)":"IRE","Kiswahili Activities":"Kiswahili","Mathematics Activities":"Mathematics","Indigenous Language":"Indigenous Languages","Science and Technology":"Science & Technology","History & Citizenship":"History and Citizenship","Building and Construction":"Building & Construction","Metal Work":"Metalwork","Woodwork":"Wood Technology","Marine & Fisheries":"Marine and Fisheries Technology","Marine & Fisheries Technology":"Marine and Fisheries Technology","Community Service Learning":"Community Service Learning (CSL)","Community Service Learning (CSL)":"Community Service Learning (CSL)","Kenya Sign Language (KSL)":"Sign Language"};
const subjectForFilter=s=>subjectAliases[s]||s;
function canonicalSubjectName(subject){return subjectForFilter(String(subject||"").trim());}
const typeAliases={"Scheme of Work":"Schemes of Work","Lesson Plans":"Lesson Plan","Assessment Tests":"Assessment Test","Marking Scheme":"Marking Schemes","Topical Question":"Topical Questions","Holiday Workbook":"Holiday Workbooks","Past Paper":"Past Papers","Study Guide":"Study Guides","Assignment":"Assignments","Project":"Projects"};
function canonicalTypeName(type){const value=String(type||"").trim();return typeAliases[value]||value;}
function displaySubject(s){return String(s||"").trim();}
function updateContext(){if(!filterContext)return;const parts=[];if(grade.value!=="All Grades")parts.push(`<span class="context-badge grade-badge">Grade: ${esc(grade.value)}</span>`);if(subject.value!=="All Subjects")parts.push(`<span class="context-badge subject-badge">Subject: ${esc(subject.value)}</span>`);if(typeSelect.value!=="All Materials")parts.push(`<span class="context-badge">Type: ${esc(typeSelect.value)}</span>`);filterContext.innerHTML=parts.join("");}
const initialGrade=params.get("grade")||"All Grades",initialSubject=subjectForFilter(params.get("subject")||"All Subjects");
grade.value=initialGrade;
function fillSubjects(){const g=grade.value;subject.innerHTML='<option value="All Subjects">All Subjects</option>';const configured=g==="All Grades"?[...new Set(Object.values(gradeSubjects).flat())]:(gradeSubjects[g]||[]);const live=resources.filter(r=>g==="All Grades"||String(r.grade||"").trim()===g).map(r=>canonicalSubjectName(r.subject)).filter(Boolean);[...new Set([...configured,...live])].sort((a,b)=>a.localeCompare(b)).forEach(s=>subject.add(new Option(s,s)));if(g===initialGrade&&grade.value!=="All Grades"&&[...subject.options].some(o=>o.value===initialSubject))subject.value=initialSubject;updateContext();render()}
typeSelect.addEventListener("change",()=>{renderLimit=60;updateContext();updateUrl();render()});grade.addEventListener("change",()=>{renderLimit=60;fillSubjects();updateUrl()});subject.addEventListener("change",()=>{renderLimit=60;updateContext();updateUrl();render()});search.addEventListener("input",()=>{clearTimeout(searchTimer);renderLimit=60;searchTimer=setTimeout(render,120);});
function updateUrl(){const p=new URLSearchParams();if(typeSelect.value!=="All Materials")p.set("type",typeSelect.value);if(grade.value!=="All Grades")p.set("grade",grade.value);if(subject.value!=="All Subjects")p.set("subject",subject.value);history.replaceState(null,"","resource-category.html"+(p.toString()?"?"+p.toString():""));}
const RESOURCE_CACHE_KEY="cbeNexusPublicResourcesV1",RESOURCE_CACHE_TTL=60000;
const APPROVED_STATUSES=new Set(["approved","published","active"]);
function filterApproved(list){return Array.isArray(list)?list.map(normalizeResource).filter(r=>APPROVED_STATUSES.has(r.status)):[];}
function readResourceCache(){
  try{
    const cached=JSON.parse(sessionStorage.getItem(RESOURCE_CACHE_KEY)||"null");
    if(cached&&Array.isArray(cached.resources))return {resources:filterApproved(cached.resources),time:Number(cached.time||0)};
  }catch{}
  try{
    const fallback=JSON.parse(localStorage.getItem("cbeResources")||"[]");
    if(Array.isArray(fallback)&&fallback.length)return {resources:filterApproved(fallback),time:0};
  }catch{}
  return {resources:[],time:0};
}
function paintCachedResources(){
  const cached=readResourceCache();
  if(cached.resources.length){resources=cached.resources;render();}
  return cached;
}
function rebuildGradeOptionsFromResources(){
  const current=grade.value;
  const live=[...new Set(resources.map(r=>String(r.grade||"").trim()).filter(Boolean))];
  const configured=Object.keys(gradeSubjects);
  const grades=[...new Set([...configured,...live])];
  grade.innerHTML='<option value="All Grades">All Grades</option>';
  grades.forEach(g=>grade.add(new Option(g,g)));
  grade.value=grades.includes(current)?current:"All Grades";
  fillSubjects();
}
function rebuildTypeOptionsFromResources(){
  const current=typeSelect.value;
  const live=[...new Set(resources.map(r=>canonicalTypeName(r.type)).filter(Boolean))];
  const types=[...new Set([...resourceTypes,...live])];
  typeSelect.innerHTML='<option value="All Materials">All Resources</option>';
  types.forEach(t=>typeSelect.add(new Option(t,t)));
  typeSelect.value=types.includes(current)?current:"All Materials";
}
async function refreshResourcesInBackground(){
  try{
    const response=await fetch("/api/resources",{credentials:"same-origin",cache:"no-store"});
    if(!response.ok)throw new Error("Resource API returned "+response.status);
    const data=await response.json();
    if(!data.ok||!Array.isArray(data.resources))throw new Error("Invalid resource API response");
    const normalized=filterApproved(data.resources);
    const previousSignature=resources.map(r=>String(r.id||r._id||r.key||"")+"|"+r.updatedAt+"|"+r.status).join("\n");
    const nextSignature=normalized.map(r=>String(r.id||r._id||r.key||"")+"|"+r.updatedAt+"|"+r.status).join("\n");
    try{sessionStorage.setItem(RESOURCE_CACHE_KEY,JSON.stringify({time:Date.now(),resources:normalized}));}catch{}
    if(previousSignature!==nextSignature){resources=normalized;rebuildGradeOptionsFromResources();rebuildTypeOptionsFromResources();render();}
    return normalized;
  }catch(error){
    console.warn("CBE Nexus Resource Centre API unavailable:",error);
    if(!resources.length){
      results.innerHTML='<div class="empty"><strong>Resources are temporarily unavailable.</strong><br>Refresh this page in a moment. Approved resources will appear automatically here.</div>';
      results.setAttribute("aria-busy","false");
    }
    return resources;
  }
}
async function getResources(){
  const cached=readResourceCache();
  if(cached.resources.length&&Date.now()-cached.time<RESOURCE_CACHE_TTL)return cached.resources;
  return refreshResourcesInBackground();
}function normalizeResource(r){return {...r,id:r.id??r.resource_id,title:r.title||"Untitled resource",grade:String(r.grade||"").trim(),subject:canonicalSubjectName(r.subject||""),type:canonicalTypeName(r.type||r.resource_type||""),description:r.description||"",price:Number(r.price??0),discount:Number(r.discount??r.discount_price??0),fileName:r.fileName||r.filename||"",r2Key:r.r2Key||r.r2_key||"",previewKey:r.previewKey||r.preview_key||"",file:r.file||(r.r2_key?"/api/r2/file?key="+encodeURIComponent(r.r2_key):""),status:String(r.status||"approved").toLowerCase(),createdAt:r.createdAt||r.created_at||"",updatedAt:r.updatedAt||r.updated_at||""};}
let resources=[];
function norm(v){return canonicalSubjectName(String(v||"").trim());}
function render(){
  updateContext();
  results.setAttribute("aria-busy","true");
  const g=grade.value,s=subject.value,t=typeSelect.value,q=search.value.trim().toLowerCase();
  const list=resources.filter(r=>(g==="All Grades"||String(r.grade||"").trim()===g)&&(s==="All Subjects"||norm(r.subject)===s)&&(t==="All Materials"||String(r.type||"").trim()===t)&&(!q||[r.title,r.description,r.grade,r.subject,r.type].join(" ").toLowerCase().includes(q)));
  const visible=list.slice(0,renderLimit);
  results.innerHTML=visible.length?visible.map(r=>`<article class="card" data-resource-id="${esc(r.id||r._id||r.key||"")}"><div class="tags"><span class="tag grade-tag">${r.grade||""}</span><span class="tag subject-tag">${displaySubject(r.subject)}</span><span class="tag">${r.type||""}</span></div><h2>${esc(r.title||"Untitled resource")}</h2><div class="price-box">${Number(r.discount)>0&&Number(r.discount)<Number(r.price)?`<span class="old-price">KSh ${Number(r.price).toLocaleString()}</span><span class="sale-price">KSh ${Number(r.discount).toLocaleString()}</span><span class="discount-label">DISCOUNT</span>`:`<span class="sale-price">KSh ${Number(r.price||0).toLocaleString()}</span>`}</div><p>${esc(r.description||"Approved CBE Nexus resource.")}</p><div class="actions"><a class="btn preview" href="#" data-resource-view title="Open resource">View</a><button type="button" class="btn download-resource" data-download-resource="${esc(r.id||r._id||r.key||"")}" title="${Number(r.price||0)===0?"Download this free resource":"Download this resource"}">⬇ Download</button><a class="btn whatsapp" target="_blank" rel="noopener" href="https://wa.me/254798462815?text=${encodeURIComponent("CBE NEXUS RESOURCE PURCHASE\\n\\nResource: "+(r.title||"Untitled resource")+"\\nGrade: "+(r.grade||"Not specified")+"\\nSubject: "+(r.subject||"Not specified")+"\\nType: "+(r.type||"Not specified")+"\\nPrice: KSh "+((Number(r.discount)>0?Number(r.discount):Number(r.price)||0).toLocaleString())+"\\n\\nI would like to buy this resource. Please send me the payment instructions and access details.")}">Buy with WhatsApp</a></div></article>`).join(""):`<div class="empty">No approved resources match Grade, Subject and Resource Type yet.</div>`;
  if(list.length>renderLimit)results.innerHTML+=`<div class="empty" style="padding:14px"><button type="button" class="btn preview" data-load-more aria-label="Load more resources">Load more resources (${list.length-renderLimit} remaining)</button></div>`;
  results.setAttribute("aria-busy","false");
}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
fillSubjects();paintCachedResources();rebuildGradeOptionsFromResources();rebuildTypeOptionsFromResources();refreshResourcesInBackground();


document.addEventListener("click",async event=>{const b=event.target.closest("[data-download-resource]");if(!b)return;event.preventDefault();const id=b.dataset.downloadResource;const resource=resources.find(r=>String(r.id||r._id||r.key||"")===String(id));if(!resource)return;const old=b.innerHTML;b.disabled=true;b.innerHTML="⏳ Preparing…";try{if(Number(resource.price||0)===0){const response=await fetch("/api/r2/free-download?resourceId="+encodeURIComponent(id),{credentials:"same-origin",cache:"no-store"});const data=await response.json().catch(()=>({}));if(!response.ok||!data.ok)throw new Error(data.error||"Free download is unavailable.");const a=document.createElement("a");a.href=data.downloadUrl;a.download=data.fileName||"resource";a.rel="noopener";document.body.appendChild(a);a.click();a.remove();}else{const amount=Number(resource.discount)>0?Number(resource.discount):Number(resource.price)||0;const params=new URLSearchParams({resource:resource.title||"Untitled resource",amount:String(amount),grade:resource.grade||"",subject:resource.subject||"",type:resource.type||""});window.location.href="index.html?"+params.toString()+"#payments";}}catch(error){alert(error.message||"Download could not be started.");}finally{b.disabled=false;b.innerHTML=old;}});

const PDFJS_URL="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs";
let pdfjsPromise=null;
async function loadPdfJs(){if(!pdfjsPromise)pdfjsPromise=import(PDFJS_URL);return pdfjsPromise;}
async function renderPdfWithoutToolbar(url){
 const box=document.getElementById("pdfViewer"),frame=document.getElementById("viewerFrame");
 if(!box||!frame)return;
 box.classList.add("active");frame.style.display="none";box.innerHTML='<div class="pdf-loading">Loading document preview…</div>';
 try{
  const pdfjs=await loadPdfJs();
  pdfjs.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
  const pdf=await pdfjs.getDocument({url,withCredentials:false}).promise;
  box.innerHTML="";
  for(let n=1;n<=pdf.numPages;n++){
   const page=await pdf.getPage(n),viewport=page.getViewport({scale:1.35}),canvas=document.createElement("canvas");
   canvas.className="pdf-page";canvas.width=viewport.width;canvas.height=viewport.height;
   box.appendChild(canvas);
   await page.render({canvasContext:canvas.getContext("2d"),viewport}).promise;
  }
 }catch(e){box.innerHTML='<div class="pdf-error">This document preview could not be displayed.</div>';console.warn("PDF preview error",e);}
}
const viewerModal=document.getElementById("viewerModal"),viewerFrame=document.getElementById("viewerFrame"),viewerTitle=document.getElementById("viewerTitle"),viewerClose=document.getElementById("viewerClose");
function closeViewer(){if(!viewerModal)return;viewerModal.classList.remove("open");viewerModal.hidden=true;viewerModal.setAttribute("aria-hidden","true");if(viewerFrame){viewerFrame.src="";viewerFrame.style.display="block";}const box=document.getElementById("pdfViewer");if(box){box.classList.remove("active");box.innerHTML="";}}
viewerClose?.addEventListener("click",closeViewer);
viewerModal?.addEventListener("click",event=>{if(event.target===viewerModal)closeViewer();});
document.addEventListener("keydown",event=>{if(event.key==="Escape")closeViewer();});
async function openResourceViewer(resource){
  if(!resource||!resource.id){return;}
  if(!viewerModal||!viewerFrame)return;
  viewerTitle.textContent=resource.title||"Resource Viewer";
  viewerModal.classList.add("open");
  viewerModal.setAttribute("aria-hidden","false");
  viewerFrame.src="about:blank";
  try{
    const fileName=String(resource.fileName||"").toLowerCase();
    const isPdf=/\.pdf$/.test(fileName);
    let viewUrl="";
    if(isPdf&&resource.previewKey){
      const response=await fetch("/api/r2/preview?key="+encodeURIComponent(resource.previewKey),{credentials:"same-origin",cache:"no-store"});
      const data=await response.json();
      if(!response.ok||!data.ok)throw new Error(data.error||"PDF preview unavailable.");
      viewUrl=data.previewUrl;
    }else{
      const response=await fetch("/api/r2/view?resourceId="+encodeURIComponent(resource.id),{credentials:"same-origin",cache:"no-store"});
      const data=await response.json();
      if(!response.ok||!data.ok)throw new Error(data.error||"Document view unavailable.");
      viewUrl=data.viewUrl;
    }
    if(isPdf){
      await renderPdfWithoutToolbar(viewUrl);
    }else{
      const box=document.getElementById("pdfViewer");if(box)box.classList.remove("active");
      viewerFrame.style.display="block";
      viewerFrame.src="https://view.officeapps.live.com/op/embed.aspx?src="+encodeURIComponent(viewUrl);
    }
  }catch(error){
    closeViewer();
    alert(error.message||"The document could not be opened.");
  }
}
document.addEventListener("click",event=>{
  const link=event.target.closest("[data-resource-view]");
  if(!link)return;
  event.preventDefault();
  const card=link.closest("[data-resource-id]");
  const id=card?.dataset.resourceId;
  const resource=resources.find(r=>String(r.id||r._id||r.key||"")===String(id));
  if(resource)openResourceViewer(resource);
});


document.addEventListener("click",event=>{const button=event.target.closest("[data-mpesa-pay]");if(!button)return;event.preventDefault();const card=button.closest("[data-resource-id]");const id=card?.dataset.resourceId;const resource=resources.find(r=>String(r.id||r._id||r.key||"")===String(id));if(!resource)return;const amount=Number(resource.discount)>0?Number(resource.discount):Number(resource.price)||0;const params=new URLSearchParams({resource:resource.title||"Untitled resource",amount:String(amount),grade:resource.grade||"",subject:resource.subject||"",type:resource.type||""});window.location.href="index.html?"+params.toString()+"#payments";});


/* Automatic colour theme for the selected Resource Centre grade. */
const resourceGradeThemeMap={
  "Grade 1":"lower-primary","Grade 2":"lower-primary","Grade 3":"lower-primary",
  "Grade 4":"upper-primary","Grade 5":"upper-primary","Grade 6":"upper-primary",
  "Grade 7":"junior-secondary","Grade 8":"junior-secondary","Grade 9":"junior-secondary",
  "Grade 10":"senior-school","Grade 11":"senior-school","Grade 12":"senior-school"
};
function applyResourceGradeTheme(value){
  const gradeValue=String(value||"").trim();
  document.documentElement.setAttribute("data-grade-theme",resourceGradeThemeMap[gradeValue]||"preprimary");
  document.body?.setAttribute("data-selected-grade",gradeValue);
}
const originalResourceFillSubjects=fillSubjects;
fillSubjects=function(){originalResourceFillSubjects();applyResourceGradeTheme(grade.value);};
applyResourceGradeTheme(grade.value);


document.addEventListener("click",event=>{const more=event.target.closest("[data-load-more]");if(!more)return;renderLimit+=60;render();});
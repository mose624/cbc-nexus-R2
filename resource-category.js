const gradeSubjects={
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
const params=new URLSearchParams(location.search),typeSelect=document.getElementById("type"),grade=document.getElementById("grade"),subject=document.getElementById("subject"),search=document.getElementById("search"),results=document.getElementById("results"),filterContext=document.getElementById("filterContext");
const resourceTypes=["Notes","Schemes of Work","Lesson Plan","Records of Work","Assessment Test","Topical Questions","Holiday Workbooks","Past Papers","Marking Schemes","Quizzes","Study Guides","Projects","KNEC Rubrics","Assignments","Bookshop"];
typeSelect.add(new Option("All Resources","All Materials"));resourceTypes.forEach(t=>typeSelect.add(new Option(t,t)));
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
function fillSubjects(){const g=grade.value;subject.innerHTML='<option value="All Subjects">All Subjects</option>';(g==="All Grades"?[...new Set(Object.values(gradeSubjects).flat())]:gradeSubjects[g]||[]).forEach(s=>subject.add(new Option(s,s)));if(g===initialGrade&&grade.value!=="All Grades"&&gradeSubjects[g]?.includes(initialSubject))subject.value=initialSubject;updateContext();render()}
typeSelect.addEventListener("change",()=>{updateContext();updateUrl();render()});grade.addEventListener("change",()=>{fillSubjects();updateUrl()});subject.addEventListener("change",()=>{updateContext();updateUrl();render()});search.addEventListener("input",render);
function updateUrl(){const p=new URLSearchParams();if(typeSelect.value!=="All Materials")p.set("type",typeSelect.value);if(grade.value!=="All Grades")p.set("grade",grade.value);if(subject.value!=="All Subjects")p.set("subject",subject.value);history.replaceState(null,"","resource-category.html"+(p.toString()?"?"+p.toString():""));}
async function getResources(){
  try{
    const response=await fetch("/api/resources?_public="+Date.now(),{credentials:"same-origin",cache:"no-store",headers:{"Cache-Control":"no-cache"}});
    if(!response.ok)throw new Error("Resource API returned "+response.status);
    const data=await response.json();
    if(!data.ok||!Array.isArray(data.resources))throw new Error("Invalid resource API response");
    return data.resources.map(normalizeResource).filter(r=>["approved","published","active"].includes(r.status));
  }catch(error){
    console.warn("CBE Nexus Resource Centre API unavailable:",error);
    try{return JSON.parse(localStorage.getItem("cbeResources")||"[]").map(normalizeResource).filter(r=>["approved","published","active"].includes(r.status));}catch{return[]}
  }
}
function normalizeResource(r){return {...r,id:r.id??r.resource_id,title:r.title||"Untitled resource",grade:String(r.grade||"").trim(),subject:canonicalSubjectName(r.subject||""),type:canonicalTypeName(r.type||r.resource_type||""),description:r.description||"",price:Number(r.price??0),discount:Number(r.discount??r.discount_price??0),fileName:r.fileName||r.filename||"",r2Key:r.r2Key||r.r2_key||"",previewKey:r.previewKey||r.preview_key||"",file:r.file||(r.r2_key?"/api/r2/file?key="+encodeURIComponent(r.r2_key):""),status:String(r.status||"approved").toLowerCase(),createdAt:r.createdAt||r.created_at||"",updatedAt:r.updatedAt||r.updated_at||""};}
let resources=[];
function norm(v){return canonicalSubjectName(String(v||"").trim());} function render(){updateContext();const g=grade.value,s=subject.value,t=typeSelect.value,q=search.value.trim().toLowerCase();let list=resources.filter(r=>(g==="All Grades"||String(r.grade||"").trim()===g)&&(s==="All Subjects"||norm(r.subject)===s)&&(t==="All Materials"||String(r.type||"").trim()===t)&&(!q||[r.title,r.description,r.grade,r.subject,r.type].join(" ").toLowerCase().includes(q)));results.innerHTML=list.length?list.map(r=>`<article class="card" data-resource-id="${esc(r.id||r._id||r.key||"")}"><div class="tags"><span class="tag grade-tag">${r.grade||""}</span><span class="tag subject-tag">${displaySubject(r.subject)}</span><span class="tag">${r.type||""}</span></div><h3>${esc(r.title||"Untitled resource")}</h3><p>${esc(r.description||"Approved CBE Nexus resource.")}</p><div class="actions"><a class="btn preview" href="#" data-resource-view title="Open resource">View resource</a><a class="btn whatsapp" target="_blank" rel="noopener" href="https://wa.me/254798462815?text=${encodeURIComponent("I am interested in "+(r.title||"this resource"))}">WhatsApp</a></div></article>`).join(""):'<div class="empty">No approved resources match Grade, Subject and Resource Type yet.</div>'}
function esc(v){return String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]))}
fillSubjects();getResources().then(r=>{resources=r;render()});


document.addEventListener("click",event=>{
  const link=event.target.closest("[data-resource-view]");
  if(!link)return;
  event.preventDefault();
  const card=link.closest("[data-resource-id]");
  const id=card?.dataset.resourceId;
  const resource=resources.find(r=>String(r.id||r._id||r.key||"")===String(id));
  if(resource?.url||resource?.public_url||resource?.downloadUrl){
    window.open(resource.url||resource.public_url||resource.downloadUrl,"_blank","noopener");
  }else{
    const title=resource?.title||"this resource";
    window.location.href="resource-category.html?grade="+encodeURIComponent(resource?.grade||grade.value)+"&subject="+encodeURIComponent(resource?.subject||subject.value);
  }
});

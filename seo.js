const { supabase, supabaseConfigured } = require("./supabase");
const fs = require("fs/promises");
const path = require("path");
const globalSchools = require("./global-schools-data.js");
const GRADES=Array.from({length:12},(_,i)=>String(i+1));
const PRIMARY_SUBJECTS=["English","Kiswahili","Mathematics","Environmental Activities","Science and Technology","Social Studies","Agriculture","Home Science","Creative Arts","Physical Education","Christian Religious Education","Islamic Religious Education"];
const JUNIOR_SUBJECTS=["Mathematics","English","Kiswahili","Integrated Science","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"];
const SUBJECTS={
"7":["Mathematics","Integrated Science","English","Kiswahili","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"],
"8":["Mathematics","Integrated Science","English","Kiswahili","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"],
"9":["Mathematics","Integrated Science","English","Kiswahili","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"],
"10":["Core Mathematics","English","Kiswahili","Biology","Chemistry","Physics","Business Studies","Geography","History and Citizenship","Agriculture","Computer Studies","Community Service Learning","General Science","Home Science","Aviation","Building and Construction","Power Mechanics","Metal Work","Electricity","Woodwork","Marine and Fisheries","Media Technology","English Literature","Fasihi ya Kiswahili","French","German","Mandarin","Arabic","Christian Religious Education","Islamic Religious Education","Hindu Religious Education","Sports and Recreation","Music and Dance","Theatre and Film","Fine Arts"],
"11":["Core Mathematics","English","Kiswahili","Biology","Chemistry","Physics","Business Studies","Geography","History and Citizenship","Agriculture","Computer Studies","Community Service Learning","General Science","Home Science","Aviation","Building and Construction","Power Mechanics","Metal Work","Electricity","Woodwork","Marine and Fisheries","Media Technology","English Literature","Fasihi ya Kiswahili","French","German","Mandarin","Arabic","Christian Religious Education","Islamic Religious Education","Hindu Religious Education","Sports and Recreation","Music and Dance","Theatre and Film","Fine Arts"],
"12":["Core Mathematics","English","Kiswahili","Biology","Chemistry","Physics","Business Studies","Geography","History and Citizenship","Agriculture","Computer Studies","Community Service Learning","General Science","Home Science","Aviation","Building and Construction","Power Mechanics","Metal Work","Electricity","Woodwork","Marine and Fisheries","Media Technology","English Literature","Fasihi ya Kiswahili","French","German","Mandarin","Arabic","Christian Religious Education","Islamic Religious Education","Hindu Religious Education","Sports and Recreation","Music and Dance","Theatre and Film","Fine Arts"]};
for(const g of ["1","2","3","4","5","6"]) SUBJECTS[g]=PRIMARY_SUBJECTS;
for(const g of ["7","8","9"]) SUBJECTS[g]=JUNIOR_SUBJECTS;
const KENYA_COUNTIES=["Baringo","Bomet","Bungoma","Busia","Elgeyo Marakwet","Embu","Garissa","Homa Bay","Isiolo","Kajiado","Kakamega","Kericho","Kiambu","Kilifi","Kirinyaga","Kisii","Kisumu","Kitui","Kwale","Laikipia","Lamu","Machakos","Makueni","Mandera","Marsabit","Meru","Migori","Mombasa","Murang'a","Nairobi","Nakuru","Nandi","Narok","Nyamira","Nyandarua","Nyeri","Samburu","Siaya","Taita Taveta","Tana River","Tharaka Nithi","Trans Nzoia","Turkana","Uasin Gishu","Vihiga","Wajir","West Pokot"];
const LANDINGS={
"/cbc-notes-kenya":["CBC Notes Kenya","CBC and CBE notes for Kenyan learners and teachers. Find Grade 7–12 subject resources, revision materials and learning support from CBE Nexus."],
"/cbc-exams-kenya":["CBC Exams Kenya & Marking Schemes","Find CBC exams, revision questions and marking schemes for Kenyan Grade 7–12 learners and teachers."],
"/kjsea-revision":["KJSEA Revision Materials & Grade 9 Questions","Grade 9 KJSEA revision materials, questions, exams and marking schemes for learners and teachers in Kenya."],
"/free-interactive-questions":["Free Interactive Questions for All Grades | CBE Nexus","Practise free interactive questions online for learners across grades and subjects. Explore CBC and CBE quizzes, instant feedback and Grade 1–12 practice questions, including Grade 7–9 KJSEA preparation and senior school subjects."],
"/grade-9-kjsea-revision-questions":["Grade 9 KJSEA Revision Questions and Answers | CBE Nexus","Prepare for KJSEA with Grade 9 revision questions, answers, practice quizzes and CBC/CBE learning resources for Kenyan learners. Check the portal for currently available questions."],
"/grade-10-cbe-practice-questions":["Grade 10 CBE Practice Questions with Instant Feedback | CBE Nexus","Practise Grade 10 CBE questions online, review answers and build confidence with interactive quizzes and curriculum-linked learning resources on CBE Nexus."],
"/free-cbc-online-quizzes":["Free CBC Online Quizzes for Primary and Junior School | CBE Nexus","Explore free CBC online quizzes and practice questions for primary and junior school learners in Kenya. Availability depends on published quizzes and questions."],
"/mashujaa-day-kenyan-heroes-quiz":["Mashujaa Day: Kenyan Heroes Quiz for Learners | CBE Nexus","Celebrate Mashujaa Day with educational quiz practice about Kenyan heroes, history, citizenship and national heritage for learners."],
"/free-ai-training":["Free AI Training and Digital Skills | CBE Nexus","Explore AI training, artificial intelligence learning and digital skills resources on CBE Nexus. Check individual course pages for access, fees and availability."],
"/free-cv-writing":["Free CV Writing and CV Builder Support | CBE Nexus","Find CV writing guidance, professional CV tips and CV-building support for job seekers. Check CBE Nexus service details for any fees or eligibility conditions."],
"/free-international-jobs":["International Jobs and Teaching Vacancies | CBE Nexus","Explore international job and teaching vacancy information, application guidance and CV support on CBE Nexus. Verify each vacancy with the official employer."],
"/all-schools-in-kenya":["School Directory: Schools in Kenya | CBE Nexus","Explore the CBE Nexus school directory and school information for Kenya. Confirm school details and current status with the relevant school or official authority."]};
function esc(v){return String(v||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function slug(v){return String(v||"").toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function base(req){const e=String(process.env.PUBLIC_SITE_URL||"").trim().replace(/\/$/,"");if(e)return e;return "https://cbenexus.co.ke";}
function page(req,title,description,canonical,h1,intro,links){
 const b=base(req);
 const json=JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":title,"description":description,"url":b+canonical,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":b},"about":{"@type":"EducationalOrganization","name":"CBE Nexus","areaServed":["Kenya","International"]}});
 const ls=links.map(x=>'<li><a href="'+esc(x.url)+'">'+esc(x.label)+'</a></li>').join("");
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+'</title><meta name="description" content="'+esc(description)+'"><meta name="robots" content="index,follow"><link rel="canonical" href="'+esc(b+canonical)+'"><meta property="og:type" content="website"><meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(b+canonical)+'"><script type="application/ld+json">'+json+'</script><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:24px;line-height:1.6;color:#172033}header{padding:18px 0;border-bottom:1px solid #ddd}a{color:#075985}.hero{padding:40px 0}.cta{display:inline-block;background:#075985;color:white;padding:12px 18px;border-radius:8px;text-decoration:none;margin:6px 6px 6px 0}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><section class="hero"><p>Kenyan CBC/CBE learning resources</p><h1>'+esc(h1)+'</h1><p>'+esc(intro)+'</p><a class="cta" href="/#resources">Browse Resource Library</a><a class="cta" href="/free-resources.html">Explore Free Resources</a></section><section><h2>Explore CBE Nexus</h2><ul>'+ls+'</ul></section><section><h2>For Kenyan learners and teachers</h2><p>CBE Nexus provides notes, exams, revision questions, marking schemes and teacher resources for CBC/CBE learning in Kenya.</p></section></main></body></html>';
}
function gradePage(req,g,sub){
 const subjects=SUBJECTS[g]||[], links=subjects.map(s=>({url:"/grade-"+g+"/"+slug(s),label:"Grade "+g+" "+s+" Resources"}));
 if(sub){const name=sub.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase());return page(req,name+" Grade "+g+" Resources Kenya | CBE Nexus","Find "+name+" Grade "+g+" CBC/CBE notes, exams, revision questions and marking schemes for Kenyan learners and teachers.","/grade-"+g+"/"+sub,"Grade "+g+" "+name+" Resources","Explore "+name+" learning and revision resources for Grade "+g+" in Kenya, including notes, practice questions, exams and marking schemes.",links);}
 return page(req,"Grade "+g+" CBC Resources Kenya | CBE Nexus","Grade "+g+" CBC/CBE notes, exams, revision questions, marking schemes and teacher resources for Kenya.","/grade-"+g,"Grade "+g+" CBC Resources Kenya","Browse Grade "+g+" subjects and discover CBC/CBE notes, exams, revision questions, marking schemes and teacher resources.",links);
}
function countyPage(req,county){
 const label=county.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase());
 const links=[
  {url:"/kenya-universities-colleges.html?county="+encodeURIComponent(label),label:label+" universities and colleges"},
  {url:"/tvet-colleges.html?county="+encodeURIComponent(label),label:label+" TVET colleges"},
  {url:"/teacher-training-colleges.html?county="+encodeURIComponent(label),label:label+" teacher training colleges"},
  {url:"/kmtc.html?county="+encodeURIComponent(label),label:label+" KMTC campuses"},
  {url:"/technical-institutions.html?county="+encodeURIComponent(label),label:label+" technical institutions"},
  {url:"/scholarships-opportunities.html",label:"Scholarships and opportunities in Kenya"},
  {url:"/higher-education-jobs.html",label:"Higher education jobs in Kenya"}
 ];
 return page(req,label+" County Education Guide | Universities, TVET & Opportunities | CBE Nexus",
 "Education guide for "+label+" County, Kenya: universities, colleges, TVET institutions, KMTC, technical training, scholarships, courses and education opportunities.",
 "/kenya-education-county/"+slug(label),label+" County Education Guide",
 "Explore education opportunities in "+label+" County, Kenya. Find higher-education institutions, TVET and technical training options, teacher training, KMTC and related opportunities. Confirm current programmes and admissions with the official institution or regulator.",links);
}
async function resourcePage(req,id){
 try{
  let r=null;
  if(supabaseConfigured){
   const {data,error}=await supabase.from("resources").select("id,title,description,grade,subject,resource_type,price,discount_price,status,created_at,filename").eq("id",id).eq("status","approved").maybeSingle();
   if(error)throw error;
   r=data||null;
  }
  if(!r){
   try{
    const local=JSON.parse(await fs.readFile(path.join(__dirname,"backend-data","resources.json"),"utf8"));
    r=(Array.isArray(local)?local:[]).find(x=>String(x.id)===String(id)&&String(x.status||"approved").toLowerCase()==="approved")||null;
   }catch{}
  }
  if(!r)return page(req,"Resource Not Found | CBE Nexus","The requested CBE Nexus resource could not be found or is not currently approved.","/resource/"+encodeURIComponent(String(id)),"Resource not found","This resource is unavailable or has not been approved for publication yet.",[{url:"/",label:"CBE Nexus Home"},{url:"/cbc-notes-kenya",label:"CBC Notes Kenya"},{url:"/cbc-exams-kenya",label:"CBC Exams Kenya"}]);
  const type=r.resource_type||"Learning Resource", grade=r.grade||"CBC", subject=r.subject||"General";
  const title=String(r.title||"").trim()||type+" for Grade "+grade+" "+subject;
  const pageTitle=title+" | Grade "+grade+" "+subject+" | CBE Nexus Kenya";
  const description=(String(r.description||"").trim()||"CBC/CBE learning resource for Kenyan learners and teachers.").slice(0,155);
  const canonical="/resource/"+encodeURIComponent(String(r.id));
  const b=base(req);
  const json=JSON.stringify({"@context":"https://schema.org","@type":"LearningResource","name":title,"description":description,"url":b+canonical,"learningResourceType":type,"educationalLevel":grade,"inLanguage":"en","publisher":{"@type":"EducationalOrganization","name":"CBE Nexus","url":b},"about":{"@type":"Thing","name":subject}});
  let related=[];
  if(supabaseConfigured){
   const q=await supabase.from("resources").select("id,title,grade,subject,resource_type").eq("status","approved").eq("grade",grade).eq("subject",subject).neq("id",r.id).order("created_at",{ascending:false}).limit(8);
   if(!q.error)related=q.data||[];
  }
  const relatedHtml=related.map(x=>'<li><a href="/resource/'+encodeURIComponent(String(x.id))+'">'+esc(String(x.title||"Resource"))+'</a> — '+esc(String(x.resource_type||"Learning Resource"))+'</li>').join("")||"<li>No related resources yet.</li>";
  const gradeUrl="/grade-"+slug(grade);
  const subjectUrl=gradeUrl+"/"+slug(subject);
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(pageTitle)+'</title><meta name="description" content="'+esc(description)+'"><meta name="robots" content="index,follow"><link rel="canonical" href="'+esc(b+canonical)+'"><meta property="og:type" content="article"><meta property="og:title" content="'+esc(pageTitle)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(b+canonical)+'"><script type="application/ld+json">'+json+'</script><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:24px;line-height:1.6;color:#172033}a{color:#075985}.crumbs{font-size:.95rem;color:#52606d}.hero{padding:30px 0}.card{border:1px solid #ddd;border-radius:12px;padding:20px;margin:18px 0}.cta{display:inline-block;background:#075985;color:white;padding:12px 18px;border-radius:8px;text-decoration:none;margin:6px 6px 6px 0}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><p class="crumbs"><a href="/">CBE Nexus</a> / <a href="'+esc(gradeUrl)+'">Grade '+esc(grade)+'</a> / <a href="'+esc(subjectUrl)+'">'+esc(subject)+'</a> / Resource</p><section class="hero"><p>Kenyan CBC/CBE learning resource</p><h1>'+esc(title)+'</h1><p>'+esc(description)+'</p><div class="card"><strong>Grade:</strong> '+esc(grade)+'<br><strong>Subject:</strong> '+esc(subject)+'<br><strong>Resource type:</strong> '+esc(type)+'</div><a class="cta" href="'+esc(subjectUrl)+'">More Grade '+esc(grade)+' '+esc(subject)+' Resources</a><a class="cta" href="/free-resources.html">Explore Free Resources</a></section><section><h2>About this resource</h2><p>'+esc(String(r.description||"Explore this CBC/CBE resource on CBE Nexus for learning, revision and teaching support in Kenya."))+'</p></section><section><h2>Related '+esc(subject)+' resources</h2><ul>'+relatedHtml+'</ul></section></main></body></html>';
 }catch(e){console.warn("SEO resource page lookup failed:",e.message||e);return null;}
}

function countryOpportunityPage(req,countrySlug,kind){
 const country=(globalSchools.countries||[]).find(c=>c.slug===countrySlug);
 if(!country)return null;
 const name=country.name, jobs=kind==="jobs";
 const canonical=(jobs?"/global-teaching-jobs/":"/online-teaching/")+countrySlug;
 const title=jobs
  ? "Teaching Jobs in "+name+" | International & Local Teacher Vacancies | CBE Nexus"
  : "Online Teaching Jobs in "+name+" | Remote Teaching & Tutoring | CBE Nexus";
 const description=jobs
  ? "Explore teaching job search resources for "+name+", including international school recruitment, local vacancies and application guidance. Verify every vacancy, licence, visa and eligibility requirement with the employer and relevant authority."
  : "Explore online teaching and remote tutoring opportunities for teachers in "+name+". Compare online tutoring platforms, check country availability and verify payment, tax and eligibility requirements before applying.";
 const links=jobs?[
  {url:"https://www.tes.com/jobs/search?keywords="+encodeURIComponent("teacher "+name),label:"Search teacher vacancies mentioning "+name+" on TES"},
  {url:"https://www.schrole.com/jobs/",label:"Search international school jobs on Schrole"},
  {url:"https://www.iss.edu/services/teacher-recruitment",label:"International Schools Services recruitment"},
  {url:"https://www.teachaway.com/teaching-jobs-abroad",label:"Teach Away international teaching jobs"},
  {url:"/global-schools/"+countrySlug,label:name+" education and school directory"}
 ]:[
  {url:"https://preply.com/en/teach",label:"Apply to teach online with Preply"},
  {url:"https://www.italki.com/en/teach",label:"Explore language teaching on italki"},
  {url:"https://www.classgap.com/en/become-an-online-tutor",label:"Become an online tutor with Classgap"},
  {url:"https://www.cambly.com/tutors",label:"Explore Cambly tutor opportunities"},
  {url:"/global-schools/"+countrySlug,label:name+" education and school directory"}
 ];
 const intro=jobs
  ? "This country guide helps teachers research local and international school recruitment connected with "+name+". Use the employer and recruitment links below to find current openings, then confirm the job location, closing date, teaching licence, qualifications, work permit and visa rules directly with the hiring organisation."
  : "This guide collects online tutoring and remote teaching platforms that teachers in "+name+" can investigate. Platform access, subject demand, language requirements, identity checks, payout methods and country eligibility can change; confirm the latest terms directly before applying.";
 return page(req,title,description,canonical,jobs?"Teaching Jobs in "+name:"Online Teaching Opportunities in "+name,intro,links);
}

async function match(req){
 const p=new URL(req.url,"http://localhost").pathname.replace(/\/$/,"")||"/";
 const countryJobs=p.match(/^\/global-teaching-jobs\/([a-z0-9-]+)$/);
 if(countryJobs)return countryOpportunityPage(req,countryJobs[1],"jobs");
 const countryOnline=p.match(/^\/online-teaching\/([a-z0-9-]+)$/);
 if(countryOnline)return countryOpportunityPage(req,countryOnline[1],"online");
 if(p==="/daily-quiz"){
  const b=base(req), title="Free Daily CBC & CBE Quiz | CBE Nexus", description="Try the free daily CBC/CBE practice question on CBE Nexus. Get instant feedback, review the explanation and share the challenge with classmates.";
  const json=JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":title,"description":description,"url":b+"/daily-quiz","isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":b}});
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index,follow"><link rel="canonical" href="${esc(b+"/daily-quiz")}"><meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(b+"/daily-quiz")}"><script type="application/ld+json">${json}</script><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:920px;margin:auto;padding:20px;line-height:1.6;color:#172033}header{padding:14px 0;border-bottom:1px solid #ddd}a{color:#075985}.wrap{padding:26px 0}.panel{border:1px solid #dbe3ec;border-radius:14px;padding:20px;margin:18px 0}.eyebrow{color:#047857;font-weight:700}.choice{display:block;width:100%;text-align:left;padding:12px;margin:9px 0;border:1px solid #cbd5e1;border-radius:9px;background:white;color:#172033;cursor:pointer}.choice:focus{outline:3px solid #93c5fd}.primary{display:inline-block;border:0;border-radius:8px;background:#075985;color:white;padding:11px 16px;text-decoration:none;cursor:pointer;margin:6px 6px 6px 0}.secondary{background:#047857}.muted{color:#64748b;font-size:.95rem}#feedback{font-weight:600;margin-top:14px}.actions{margin-top:18px}</style></head><body><header><strong><a href="/" style="text-decoration:none;color:inherit">CBE Nexus</a></strong> — CBC/CBE learning resources</header><main class="wrap"><p class="eyebrow">FREE DAILY CHALLENGE</p><h1>Daily CBC & CBE Quiz</h1><p>Answer today’s question, check your result instantly and share the challenge with a classmate.</p><section class="panel" aria-live="polite"><p id="status" class="muted">Loading a published practice question…</p><h2 id="question"></h2><div id="choices"></div><p id="feedback" role="status"></p><p id="explanation"></p><button class="primary" id="share" type="button">Share on WhatsApp</button><a class="primary secondary" href="/interactive-questions.html">More interactive questions</a></section><p class="muted">Questions are selected from the published learner question bank. If no published questions are available, please try the full interactive questions portal.</p><p><a href="/free-interactive-questions">Browse free questions by grade</a> · <a href="/grade-10-cbe-practice-questions">Grade 10 practice</a> · <a href="/kjsea-revision">Grade 9 KJSEA revision</a></p></main><script>
(function(){
 const $=id=>document.getElementById(id); let selected=null,answered=false;
 const today=new Date(),dayKey=today.getUTCFullYear()+"-"+String(today.getUTCMonth()+1).padStart(2,"0")+"-"+String(today.getUTCDate()).padStart(2,"0");
 function safeText(value){return String(value==null?"":value);}
 function render(q){
  selected=q; $("status").textContent=(q.grade?"Grade "+q.grade+" · ":"")+(q.subject||"Daily practice")+(q.strand?" · "+q.strand:"");
  $("question").textContent=safeText(q.question); $("choices").replaceChildren(); $("feedback").textContent=""; $("explanation").textContent=""; answered=false;
  let opts=Array.isArray(q.options)?q.options:[];
  if(opts.length<2){$("status").textContent="This question does not have enough answer choices. Open the full question bank below.";return;}
  opts.forEach((opt,i)=>{const label=typeof opt==="string"?opt:safeText(opt.label||opt.text||opt.value);const btn=document.createElement("button");btn.type="button";btn.className="choice";btn.textContent=String.fromCharCode(65+i)+". "+label;btn.addEventListener("click",()=>answer(i,btn));$("choices").appendChild(btn);});
 }
 function answer(index,button){
  if(answered)return; answered=true;
  const opts=selected.options||[],raw=opts[index], correct=Number(selected.correctIndex);
  const isCorrect=index===correct; $("feedback").textContent=isCorrect?"Correct — well done!":"Not quite. Review the correct answer and explanation below.";
  const right=opts[correct],rightLabel=typeof right==="string"?right:safeText(right&& (right.label||right.text||right.value));
  $("explanation").textContent="Answer: "+rightLabel+(selected.explanation?" — "+safeText(selected.explanation):"");
  Array.from($("choices").children).forEach((el,i)=>{el.disabled=true;if(i===correct)el.style.borderColor="#16a34a";else if(i===index)el.style.borderColor="#dc2626";});
 }
 $("share").addEventListener("click",()=>{const text="Try the free CBC/CBE Daily Quiz on CBE Nexus: "+location.origin+"/daily-quiz";window.open("https://wa.me/?text="+encodeURIComponent(text),"_blank","noopener,noreferrer");});
 fetch("/api/interactive-questions",{headers:{"Accept":"application/json"}}).then(r=>{if(!r.ok)throw new Error("Question bank unavailable");return r.json();}).then(data=>{
  const qs=Array.isArray(data.questions)?data.questions.filter(q=>q&&q.question&&Array.isArray(q.options)&&q.options.length>=2):[];
  if(!qs.length){$("status").textContent="No published questions are available right now.";return;}
  let hash=0;for(let i=0;i<dayKey.length;i++)hash=(hash*31+dayKey.charCodeAt(i))>>>0;
  render(qs[hash%qs.length]);
 }).catch(()=>{$("status").textContent="The daily question could not load just now. Please use the full interactive questions portal below.";});
})();
</script></body></html>`;
 }
 if(p==="/traffic-dashboard.html"){
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Traffic Growth Dashboard | CBE Nexus</title><meta name="robots" content="noindex,nofollow"><meta name="description" content="Private traffic monitoring dashboard for CBE Nexus."><link rel="canonical" href="${esc(base(req)+"/traffic-dashboard.html")}"><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:22px;line-height:1.6;color:#172033}header{padding:14px 0;border-bottom:1px solid #ddd}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:14px}.card{border:1px solid #dbe3ec;border-radius:12px;padding:18px}.num{font-size:1.8rem;font-weight:750}.muted{color:#64748b}.btn{display:inline-block;background:#075985;color:white;border:0;border-radius:8px;padding:10px 15px;cursor:pointer;text-decoration:none;margin:5px 5px 5px 0}</style></head><body><header><strong><a href="/" style="color:inherit;text-decoration:none">CBE Nexus</a></strong> — Private traffic dashboard</header><main><h1>Traffic Growth Dashboard</h1><p>Track progress toward 1,000,000 monthly visitors. Actual analytics require the existing GA4 reporting integration to be configured and an administrator session.</p><p><button class="btn" id="refresh">Refresh metrics</button> <a class="btn" href="https://search.google.com/search-console?resource_id=sc-domain%3Acbenexus.co.ke" target="_blank" rel="noopener noreferrer">Open Search Console</a> <a class="btn" href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Open Google Analytics</a></p><section class="grid"><div class="card"><div class="muted">Page views (report period)</div><div class="num" id="views">—</div></div><div class="card"><div class="muted">Sessions (report period)</div><div class="num" id="sessions">—</div></div><div class="card"><div class="muted">Pages per session</div><div class="num" id="pps">—</div></div><div class="card"><div class="muted">Sessions vs 1M goal (proxy)</div><div class="num" id="progress">—</div></div></section><p id="notice" class="muted" role="status">Loading analytics…</p><h2>Weekly growth routine</h2><ul><li>Check Google Search Console clicks and impressions.</li><li>Improve pages with impressions but few clicks.</li><li>Expand pages that attract engaged learners.</li><li>Review mobile speed and broken links.</li></ul><p class="muted">This dashboard does not fabricate visitor counts. If metrics are unavailable, use the linked analytics tools to verify setup.</p></main><script>
(function(){const $=id=>document.getElementById(id);const fmt=n=>Number(n||0).toLocaleString();async function load(){ $("notice").textContent="Checking the existing analytics report…";try{const r=await fetch("/api/admin/ad-revenue",{headers:{"Accept":"application/json"},credentials:"same-origin"});const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||(r.status===401?"Please sign in to the admin dashboard first.":"Analytics report unavailable."));const m=d.metrics||{};$("views").textContent=fmt(m.pageviews);$("sessions").textContent=fmt(m.sessions);$("pps").textContent=Number(m.pagesPerSession||0).toFixed(2);$("progress").textContent=(Math.min(100,Number(m.sessions||0)/1000000*100)).toFixed(3)+"%";$("notice").textContent="Report period: "+safe(d.periodDays||"available")+" days. Source: "+safe(d.source||"GA4 Data API")+". These are measured report values, not estimates. Sessions are a proxy only and are not the same as unique visitors.";}catch(e){$("notice").textContent=e.message+" Open the existing admin login, then refresh. If the GA4 service account is not configured, analytics integration needs setup.";} }function safe(v){return String(v==null?"":v).replace(/[<>]/g,"");} $("refresh").addEventListener("click",load);load();})();
</script></body></html>`;
 }
 if(p==="/free-interactive-questions"){
  const gradeLinks=[{url:"/interactive-questions.html",label:"Start free interactive questions"},{url:"/quizzes.html",label:"Automated marked quizzes and learner progress"},...["PP1","PP2",...Array.from({length:12},(_,i)=>"Grade "+(i+1))].map(g=>({url:"/free-interactive-questions/"+slug(g),label:"Free interactive questions for "+g}))];
  return page(req,"Free Interactive Questions for All Grades | CBE Nexus","Practise free interactive questions online for all grades and subjects. CBC and CBE practice quizzes, instant feedback and curriculum-linked questions for Kenyan learners from PP1 and PP2 through Grade 12.","/free-interactive-questions","Free Interactive Questions for All Grades","Build confidence with free online interactive questions and practice quizzes for learners across grades and subjects. Choose a grade to explore practice, or open the Interactive Questions portal to begin.",gradeLinks);
 }
 const iqGrade=p.match(/^\/free-interactive-questions\/(pp1|pp2|grade-(?:[1-9]|1[0-2]))$/i);
 if(iqGrade){
  const raw=iqGrade[1].toUpperCase(), grade=/^PP/.test(raw)?raw:"Grade "+raw.replace(/^GRADE-/i,"");
  const label="Free Interactive Questions for "+grade;
  const desc="Practise free online interactive questions for "+grade+" learners on CBE Nexus. Explore curriculum-linked CBC/CBE questions, subject practice, quizzes and instant feedback. Availability depends on the questions currently published in the learner portal.";
  const links=[{url:"/interactive-questions.html",label:"Open the Interactive Questions portal"},{url:"/quizzes.html",label:"Try automated marked quizzes"},{url:"/free-interactive-questions",label:"Browse interactive questions for all grades"},{url:"/resources.html",label:"Browse learning resources"}];
  return page(req,label+" | CBE Nexus Kenya",desc,"/free-interactive-questions/"+slug(grade),label,"Practise and review "+grade+" questions online with CBE Nexus. Choose the learner portal to see questions currently published for your grade.",links);
 }
 const rm=p.match(/^\/resource\/([^/]+)$/);
 if(rm){return await resourcePage(req,decodeURIComponent(rm[1]));}
 const countyMatch=p.match(/^\/kenya-education-county\/([^/]+)$/);
 if(countyMatch){return countyPage(req,countyMatch[1]);}
 if(p==="/blog-article.html"){const q=new URL(req.url,"http://localhost").searchParams.get("slug");if(q)return await blogArticlePage(req,q);}
 if(p!=="/cbc-exam-generator" && LANDINGS[p]){const x=LANDINGS[p];const links=GRADES.map(g=>({url:"/grade-"+g,label:"Grade "+g+" CBC Resources"}));return page(req,x[0],x[1],p,x[0],x[1],links);}
 const m=p.match(/^\/grade-(1|2|3|4|5|6|7|8|9|10|11|12)(?:\/([^/]+))?$/);return m?gradePage(req,m[1],m[2]):null;
}
async function blogArticlePage(req,slugValue){
 const slugValueClean=String(slugValue||"").trim();
 let r=null;
 try{
  if(supabaseConfigured){
   const {data,error}=await supabase.from("blog_posts").select("*").eq("slug",slugValueClean).eq("status","published").maybeSingle();
   if(error)throw error;
   r=data||null;
  }
  if(!r){
   try{
    const local=JSON.parse(await fs.readFile(path.join(__dirname,"backend-data","blog-posts.json"),"utf8"));
    r=(Array.isArray(local)?local:[]).find(x=>String(x.slug)===slugValueClean&&String(x.status)==="published")||null;
   }catch{}
  }
 }catch(e){console.warn("SEO blog article lookup failed:",e.message||e);}
 if(!r)return null;
 const b=base(req),title=String(r.seo_title||r.seoTitle||r.title||"CBE Nexus Article").trim();
 const description=String(r.meta_description||r.metaDescription||r.excerpt||"").trim().slice(0,320);
 const canonical="/blog-article.html?slug="+encodeURIComponent(slugValueClean);
 const image=String(r.featured_image||r.featuredImage||"").trim();
 const published=r.published_at||r.publishedAt||r.created_at||r.createdAt||new Date().toISOString();
 const modified=r.updated_at||r.updatedAt||published;
 const author=String(r.author||"CBE Nexus").trim();
 const json={"@context":"https://schema.org","@type":"NewsArticle","headline":String(r.title||title),"description":description,"datePublished":published,"dateModified":modified,"author":{"@type":"Person","name":author},"publisher":{"@type":"Organization","name":"CBE Nexus","url":b},"mainEntityOfPage":{"@type":"WebPage","@id":b+canonical},"url":b+canonical,"articleSection":String(r.category||"Education")};
 if(image)json.image=[image.startsWith("http")?image:b+"/"+image.replace(/^\//,"")];
 const body=String(r.content||"");
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+'</title><meta name="description" content="'+esc(description)+'"><meta name="robots" content="index,follow"><link rel="canonical" href="'+esc(b+canonical)+'"><meta property="og:type" content="article"><meta property="og:title" content="'+esc(String(r.title||title))+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(b+canonical)+'">'+(image?'<meta property="og:image" content="'+esc(json.image[0])+'">':"")+'<meta property="article:published_time" content="'+esc(published)+'"><meta property="article:modified_time" content="'+esc(modified)+'"><script type="application/ld+json">'+JSON.stringify(json).replace(/</g,"\\u003c")+'</script><link rel="alternate" type="application/rss+xml" title="CBE Nexus Education Hub RSS" href="/rss.xml"><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:900px;margin:auto;padding:24px;line-height:1.7;color:#172033}header{padding:18px 0;border-bottom:1px solid #ddd}.meta{color:#5b6770;font-size:.9rem}.hero{padding:30px 0 15px}article img{max-width:100%;height:auto;border-radius:12px}article{font-size:1.05rem}a{color:#075985}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><section class="hero"><p class="meta">'+esc(String(r.category||"Education"))+' · '+esc(author)+' · '+esc(new Date(published).toLocaleDateString("en-KE"))+'</p><h1>'+esc(String(r.title||title))+'</h1><p>'+esc(description)+'</p>'+(image?'<img src="'+esc(json.image[0])+'" alt="'+esc(String(r.title||title))+'">':"")+'</section><article>'+body+'</article><p><a href="/blog.html">← More CBE Nexus articles</a> · <a href="/rss.xml">Subscribe to RSS</a></p></main></body></html>';
}
function xml(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
let sitemapCache = { expiresAt: 0, body: "" };
const SITEMAP_CACHE_TTL_MS = 15 * 60 * 1000;

async function sitemap(req){
 if (sitemapCache.body && sitemapCache.expiresAt > Date.now()) return sitemapCache.body;
 const b="https://cbenexus.co.ke";
 const urls=[
  "/","/resources.html","/free-resources.html","/quizzes.html","/projects.html","/tuition.html",
  "/blog.html","/learning-hub.html","/answer-hub.html","/grade-10-school-finder.html","/contact.html",
  "/privacy-policy.html","/terms-and-conditions.html","/copyright.html",
  "/kenya-universities-colleges.html","/public-universities.html","/private-universities.html",
  "/specialized-universities.html","/university-constituent-colleges.html","/interim-universities.html",
  "/university-course-catalogue.html","/technical-vocational-catalogue.html","/tvet-colleges.html",
  "/teacher-training-colleges.html","/kmtc.html","/technical-institutions.html","/higher-education-jobs.html",
  "/scholarships-opportunities.html","/international-teaching-jobs.html","/professional-cv-writing.html",
  "/ai-training.html","/school-directory.html","/international-curriculum.html","/igcse.html",
  "/cambridge-international.html","/ib.html","/pearson-edexcel.html","/a-levels.html","/o-levels.html",
  "/cbc-notes-kenya","/cbc-exams-kenya","/kjsea-revision",
  "/free-interactive-questions","/daily-quiz","/grade-9-kjsea-revision-questions","/grade-10-cbe-practice-questions",
  "/free-cbc-online-quizzes","/mashujaa-day-kenyan-heroes-quiz","/free-ai-training",
  "/free-cv-writing","/free-international-jobs","/all-schools-in-kenya","/global-schools"
 ];
 try{(globalSchools.countries||[]).forEach(c=>{urls.push(c.url);urls.push("/global-teaching-jobs/"+c.slug);urls.push("/online-teaching/"+c.slug);});}catch(e){console.warn("Global schools sitemap lookup failed:",e.message||e);}
 try{
  if(Array.isArray(KENYA_COUNTIES)) KENYA_COUNTIES.forEach(c=>urls.push("/kenya-education-county/"+slug(c)));
 }catch(e){console.warn("SEO sitemap county lookup failed:",e.message||e);}
 try{
  if(Array.isArray(GRADES)) GRADES.forEach(g=>{
   urls.push("/grade-"+g);
   (SUBJECTS[g]||[]).forEach(s=>urls.push("/grade-"+g+"/"+slug(s)));
  });
 }catch(e){console.warn("SEO sitemap grade lookup failed:",e.message||e);}
 if(supabaseConfigured){
  try{
   const {data,error}=await supabase.from("resources").select("id").eq("status","approved").limit(5000);
   if(!error) (data||[]).forEach(r=>{if(r&&r.id) urls.push("/resource/"+encodeURIComponent(String(r.id)));});
  }catch(e){console.warn("SEO sitemap resource lookup failed:",e.message||e);}
  try{
   const {data,error}=await supabase.from("blog_posts").select("slug").eq("status","published").limit(5000);
   if(!error) (data||[]).forEach(p=>{if(p&&p.slug) urls.push("/blog-article.html?slug="+encodeURIComponent(String(p.slug)));});
  }catch(e){console.warn("SEO sitemap blog lookup failed:",e.message||e);}
 }
 // Discover public, indexable root-level HTML pages automatically so new pages are not
 // forgotten when the sitemap is updated. Exclude templates and sensitive/admin pages.
 try{
  const entries=await fs.readdir(__dirname,{withFileTypes:true});
  for(const entry of entries){
   if(!entry.isFile() || !/^[a-z0-9][a-z0-9._-]*\.html$/i.test(entry.name)) continue;
   const filename=entry.name.toLowerCase();
   // Do not publish error, account, payment, upload, or administration pages.
   if(filename==="404.html" || filename==="resource-category.html" ||
      ["blog-article.html","upload.html","admin.html","admin-login.html","login.html"].includes(filename) ||
      /(^|[-_.])(admin|login|upload|dashboard|checkout|payment|account|reset-password)([-_.]|$)/i.test(filename)) continue;
   let html="";
   try{html=await fs.readFile(path.join(__dirname,entry.name),"utf8");}catch{continue;}
   // Respect robots noindex even when name/content attributes appear in either order.
   const metaTags=html.match(/<meta\b[^>]*>/gi)||[];
   const hasNoindex=metaTags.some(tag=>{
    const nameMatch=tag.match(/\bname\s*=\s*["']?([^"'\s/>]+)/i);
    const contentMatch=tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i);
    return nameMatch && nameMatch[1].toLowerCase()==="robots" &&
      contentMatch && /(?:^|[\s,])noindex(?:$|[\s,])/i.test(contentMatch[1]);
   });
   if(hasNoindex) continue;
   urls.push("/"+entry.name);
  }
 }catch(e){console.warn("SEO sitemap static-page discovery failed:",e.message||e);}
 const unique=[...new Set(urls)].filter(u=>typeof u==="string"&&u.startsWith("/"));
 const body=unique.map(u=>"<url><loc>"+xml(b+u)+"</loc></url>").join("");
 const output = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+body+"\n</urlset>";
 sitemapCache = { expiresAt: Date.now() + SITEMAP_CACHE_TTL_MS, body: output };
 return output;
}

module.exports={match,sitemap,base};

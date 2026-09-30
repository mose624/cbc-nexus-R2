const { supabase, supabaseConfigured } = require("./supabase");
const fs = require("fs/promises");
const path = require("path");
const GRADES=["7","8","9","10","11","12"];
const SUBJECTS={
"7":["Mathematics","Integrated Science","English","Kiswahili","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"],
"8":["Mathematics","Integrated Science","English","Kiswahili","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"],
"9":["Mathematics","Integrated Science","English","Kiswahili","Social Studies","Agriculture","Creative Arts","Pre-Technical Studies"],
"10":["Core Mathematics","English","Kiswahili","Biology","Chemistry","Physics","Business Studies","Geography","History and Citizenship","Agriculture","Computer Studies"],
"11":["Core Mathematics","English","Kiswahili","Biology","Chemistry","Physics","Business Studies","Geography","History and Citizenship","Agriculture","Computer Studies"],
"12":["Core Mathematics","English","Kiswahili","Biology","Chemistry","Physics","Business Studies","Geography","History and Citizenship","Agriculture","Computer Studies"]};
const LANDINGS={
"/cbc-notes-kenya":["CBC Notes Kenya","CBC and CBE notes for Kenyan learners and teachers. Find Grade 7–12 subject resources, revision materials and learning support from CBE Nexus."],
"/cbc-exams-kenya":["CBC Exams Kenya & Marking Schemes","Find CBC exams, revision questions and marking schemes for Kenyan Grade 7–12 learners and teachers."],
"/kjsea-revision":["KJSEA Revision Materials & Grade 9 Questions","Grade 9 KJSEA revision materials, questions, exams and marking schemes for learners and teachers in Kenya."],
"/cbc-exam-generator":["Free CBC Exam Generator Kenya","Generate CBC practice exams and marking schemes by grade, subject, strand, marks and number of questions with CBE Nexus."],"/grade-10-cbe-resources":["Grade 10 CBE Resources Kenya 2026","Grade 10 CBE notes, exams, schemes of work, lesson plans, assessments and revision materials for Kenyan learners and teachers."],"/grade-9-kjsea-2026":["Grade 9 KJSEA 2026 Resources Kenya","Grade 9 KJSEA revision papers, exams, marking schemes, notes and assessment resources for Kenya."],"/cbc-schemes-of-work":["CBC Schemes of Work Kenya 2026","CBC and CBE schemes of work for Kenyan teachers, including Grade 7 to Grade 12 subject resources."],"/cbc-lesson-plans":["CBC Lesson Plans Kenya 2026","CBC and CBE lesson plans for Kenyan teachers across primary, junior school and senior school."],"/cbc-assessment-papers":["CBC Assessment Papers Kenya 2026","CBC/CBE assessment papers, tests, revision questions and marking schemes for Kenyan learners and teachers."],"/education-blog":["Kenya Education Blog 2026 | CBE Nexus","Current Kenya education updates, KNEC information, CBC/CBE resources, Grade 9 KJSEA and Grade 10 Senior School guidance."]};
function esc(v){return String(v||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function slug(v){return String(v||"").toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function base(req){const e=String(process.env.PUBLIC_SITE_URL||"").trim().replace(/\/$/,"");if(e)return e;return "https://cbenexus.co.ke";}
function page(req,title,description,canonical,h1,intro,links){
 const b=base(req);
 const json=JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":title,"description":description,"url":b+canonical,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":b},"about":{"@type":"EducationalOrganization","name":"CBE Nexus","areaServed":"Kenya"}});
 const ls=links.map(x=>'<li><a href="'+esc(x.url)+'">'+esc(x.label)+'</a></li>').join("");
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+'</title><meta name="description" content="'+esc(description)+'"><meta name="robots" content="index,follow"><link rel="canonical" href="'+esc(b+canonical)+'"><meta property="og:type" content="website"><meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(b+canonical)+'"><script type="application/ld+json">'+json+'</script><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:24px;line-height:1.6;color:#172033}header{padding:18px 0;border-bottom:1px solid #ddd}a{color:#075985}.hero{padding:40px 0}.cta{display:inline-block;background:#075985;color:white;padding:12px 18px;border-radius:8px;text-decoration:none;margin:6px 6px 6px 0}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><section class="hero"><p>Kenyan CBC/CBE learning resources</p><h1>'+esc(h1)+'</h1><p>'+esc(intro)+'</p><a class="cta" href="/#resources">Browse Resource Library</a><a class="cta" href="/cbc-exam-generator">Free CBC Exam Generator</a></section><section><h2>Explore CBE Nexus</h2><ul>'+ls+'</ul></section><section><h2>For Kenyan learners and teachers</h2><p>CBE Nexus provides notes, exams, revision questions, marking schemes and teacher resources for CBC/CBE learning in Kenya.</p></section></main></body></html>';
}
function gradePage(req,g,sub){
 const subjects=SUBJECTS[g]||[], links=subjects.map(s=>({url:"/grade-"+g+"/"+slug(s),label:"Grade "+g+" "+s+" Resources"}));
 if(sub){const name=sub.replace(/-/g," ").replace(/\b\w/g,c=>c.toUpperCase());return page(req,name+" Grade "+g+" Resources Kenya | CBE Nexus","Find "+name+" Grade "+g+" CBC/CBE notes, exams, revision questions and marking schemes for Kenyan learners and teachers.","/grade-"+g+"/"+sub,"Grade "+g+" "+name+" Resources","Explore "+name+" learning and revision resources for Grade "+g+" in Kenya, including notes, practice questions, exams and marking schemes.",links);}
 return page(req,"Grade "+g+" CBC Resources Kenya | CBE Nexus","Grade "+g+" CBC/CBE notes, exams, revision questions, marking schemes and teacher resources for Kenya.","/grade-"+g,"Grade "+g+" CBC Resources Kenya","Browse Grade "+g+" subjects and discover CBC/CBE notes, exams, revision questions, marking schemes and teacher resources.",links);
}
async function resourcePage(req,id){
 try{
  let r=null;
  if(supabaseConfigured){
   const {data,error}=await supabase.from("resources").select("id,title,description,grade,subject,resource_type,price,discount_price,status,created_at,updated_at,filename").eq("id",id).eq("status","approved").maybeSingle();
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
  const q=await supabase.from("resources").select("id,title,grade,subject,resource_type").eq("status","approved").eq("grade",grade).eq("subject",subject).neq("id",r.id).order("created_at",{ascending:false}).limit(8);
  if(!q.error)related=q.data||[];
  const relatedHtml=related.map(x=>'<li><a href="/resource/'+encodeURIComponent(String(x.id))+'">'+esc(String(x.title||"Resource"))+'</a> — '+esc(String(x.resource_type||"Learning Resource"))+'</li>').join("")||"<li>No related resources yet.</li>";
  const gradeUrl="/grade-"+slug(grade);
  const subjectUrl=gradeUrl+"/"+slug(subject);
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(pageTitle)+'</title><meta name="description" content="'+esc(description)+'"><meta name="robots" content="index,follow"><link rel="canonical" href="'+esc(b+canonical)+'"><meta property="og:type" content="article"><meta property="og:title" content="'+esc(pageTitle)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(b+canonical)+'"><script type="application/ld+json">'+json+'</script><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:24px;line-height:1.6;color:#172033}a{color:#075985}.crumbs{font-size:.95rem;color:#52606d}.hero{padding:30px 0}.card{border:1px solid #ddd;border-radius:12px;padding:20px;margin:18px 0}.cta{display:inline-block;background:#075985;color:white;padding:12px 18px;border-radius:8px;text-decoration:none;margin:6px 6px 6px 0}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><p class="crumbs"><a href="/">CBE Nexus</a> / <a href="'+esc(gradeUrl)+'">Grade '+esc(grade)+'</a> / <a href="'+esc(subjectUrl)+'">'+esc(subject)+'</a> / Resource</p><section class="hero"><p>Kenyan CBC/CBE learning resource</p><h1>'+esc(title)+'</h1><p>'+esc(description)+'</p><div class="card"><strong>Grade:</strong> '+esc(grade)+'<br><strong>Subject:</strong> '+esc(subject)+'<br><strong>Resource type:</strong> '+esc(type)+'</div><a class="cta" href="'+esc(subjectUrl)+'">More Grade '+esc(grade)+' '+esc(subject)+' Resources</a><a class="cta" href="/cbc-exam-generator">Free CBC Exam Generator</a></section><section><h2>About this resource</h2><p>'+esc(String(r.description||"Explore this CBC/CBE resource on CBE Nexus for learning, revision and teaching support in Kenya."))+'</p></section><section><h2>Related '+esc(subject)+' resources</h2><ul>'+relatedHtml+'</ul></section></main></body></html>';
 }catch(e){console.warn("SEO resource page lookup failed:",e.message||e);return null;}
}

function blogPage(req){
 const posts=[["Grade 10 CBE Resources 2026: Notes, Exams, Schemes and Lesson Plans","/grade-10-cbe-resources"],["KJSEA 2026: Grade 9 Revision Materials, Exams and Marking Schemes","/grade-9-kjsea-2026"],["Grade 10 Written Tests 2026: What Teachers and Learners Should Know","/grade-10-cbe-resources"],["Grade 10 CBE Schemes of Work 2026","/cbc-schemes-of-work"],["CBC Lesson Plans for Kenyan Teachers 2026","/cbc-lesson-plans"],["CBC Assessment Papers and Marking Schemes 2026","/cbc-assessment-papers"],["Grade 9 KJSEA Revision Papers 2026","/grade-9-kjsea-2026"],["KNEC 2026 Examination and Assessment Resources","/cbc-assessment-papers"],["Grade 10 Physics Notes and Revision Materials Kenya 2026","/grade-10/physics"],["Grade 10 Biology Notes and Revision Materials Kenya 2026","/grade-10/biology"],["Grade 10 Chemistry Notes and Revision Materials Kenya 2026","/grade-10/chemistry"],["Grade 9 Mathematics Revision Materials for KJSEA","/grade-9/mathematics"],["Grade 7, 8 and 9 JSS Exams with Marking Schemes","/cbc-exams-kenya"],["Free CBC and CBE Teaching Resources for Kenyan Teachers","/cbc-notes-kenya"]];
 const b=base(req),items=posts.map(p=>'<article><h2><a href="'+p[1]+'">'+esc(p[0])+'</a></h2><p>Explore CBC/CBE learning resources and practical information for Kenyan learners and teachers.</p></article>').join("");
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Kenya Education Blog 2026 | CBE Nexus</title><meta name="description" content="Current Kenya education updates, KNEC information, CBC/CBE resources, KJSEA, Grade 9 and Grade 10 learning materials."><meta name="robots" content="index,follow"><link rel="canonical" href="'+b+'/education-blog"><meta property="og:type" content="website"><meta property="og:title" content="Kenya Education Blog 2026 | CBE Nexus"><meta property="og:description" content="Current Kenya education updates and CBC/CBE resource guides."><meta property="og:url" content="'+b+'/education-blog"><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:24px;line-height:1.6;color:#172033}a{color:#075985}header{padding:18px 0;border-bottom:1px solid #ddd}.hero{padding:30px 0}article{border-top:1px solid #ddd;padding:16px 0}h1{margin-bottom:8px}h2{font-size:1.15rem}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><section class="hero"><p>Kenyan CBC/CBE education information</p><h1>Kenya Education Blog 2026</h1><p>Practical guides and current resource information for learners, teachers, parents and schools.</p></section>'+items+'</main></body></html>';
}
\nasync function match(req){
 const p=new URL(req.url,"http://localhost").pathname.replace(/\/$/,"")||"/";
 const rm=p.match(/^\/resource\/([^/]+)$/);
 if(rm){return await resourcePage(req,decodeURIComponent(rm[1]));}
 if(p==="/education-blog")return blogPage(req);\n if(LANDINGS[p]){const x=LANDINGS[p];const links=GRADES.map(g=>({url:"/grade-"+g,label:"Grade "+g+" CBC Resources"}));return page(req,x[0],x[1],p,x[0],x[1],links);}
 const m=p.match(/^\/grade-(7|8|9|10|11|12)(?:\/([^/]+))?$/);return m?gradePage(req,m[1],m[2]):null;
}
function xml(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
async function sitemap(req){
 const b=base(req),urls=["/","/cbc-notes-kenya","/cbc-exams-kenya","/kjsea-revision","/cbc-exam-generator","/grade-10-cbe-resources","/grade-9-kjsea-2026","/cbc-schemes-of-work","/cbc-lesson-plans","/cbc-assessment-papers","/education-blog"];
 GRADES.forEach(g=>{urls.push("/grade-"+g);(SUBJECTS[g]||[]).forEach(s=>urls.push("/grade-"+g+"/"+slug(s)));});
 if(supabaseConfigured){try{const {data}=await supabase.from("resources").select("id").eq("status","approved").limit(5000);(data||[]).forEach(r=>urls.push("/resource/"+encodeURIComponent(r.id)));}catch(e){console.warn("SEO sitemap resource lookup failed:",e.message||e);}}
 return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[...new Set(urls)].map(u=>'<url><loc>'+xml(b+u)+'</loc></url>').join("")+"</urlset>";
}
module.exports={match,sitemap,base};
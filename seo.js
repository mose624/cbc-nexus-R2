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
const KENYA_COUNTIES=["Baringo","Bomet","Bungoma","Busia","Elgeyo Marakwet","Embu","Garissa","Homa Bay","Isiolo","Kajiado","Kakamega","Kericho","Kiambu","Kilifi","Kirinyaga","Kisii","Kisumu","Kitui","Kwale","Laikipia","Lamu","Machakos","Makueni","Mandera","Marsabit","Meru","Migori","Mombasa","Murang'a","Nairobi","Nakuru","Nandi","Narok","Nyamira","Nyandarua","Nyeri","Samburu","Siaya","Taita Taveta","Tana River","Tharaka Nithi","Trans Nzoia","Turkana","Uasin Gishu","Vihiga","Wajir","West Pokot"];
const LANDINGS={
"/cbc-notes-kenya":["CBC Notes Kenya","CBC and CBE notes for Kenyan learners and teachers. Find Grade 7–12 subject resources, revision materials and learning support from CBE Nexus."],
"/cbc-exams-kenya":["CBC Exams Kenya & Marking Schemes","Find CBC exams, revision questions and marking schemes for Kenyan Grade 7–12 learners and teachers."],
"/kjsea-revision":["KJSEA Revision Materials & Grade 9 Questions","Grade 9 KJSEA revision materials, questions, exams and marking schemes for learners and teachers in Kenya."]};
function esc(v){return String(v||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function slug(v){return String(v||"").toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function base(req){const e=String(process.env.PUBLIC_SITE_URL||"").trim().replace(/\/$/,"");if(e)return e;return "https://cbenexus.co.ke";}
function page(req,title,description,canonical,h1,intro,links){
 const b=base(req);
 const json=JSON.stringify({"@context":"https://schema.org","@type":"WebPage","name":title,"description":description,"url":b+canonical,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":b},"about":{"@type":"EducationalOrganization","name":"CBE Nexus","areaServed":"Kenya"}});
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
  return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(pageTitle)+'</title><meta name="description" content="'+esc(description)+'"><meta name="robots" content="index,follow"><link rel="canonical" href="'+esc(b+canonical)+'"><meta property="og:type" content="article"><meta property="og:title" content="'+esc(pageTitle)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+esc(b+canonical)+'"><script type="application/ld+json">'+json+'</script><style>body{font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:1000px;margin:auto;padding:24px;line-height:1.6;color:#172033}a{color:#075985}.crumbs{font-size:.95rem;color:#52606d}.hero{padding:30px 0}.card{border:1px solid #ddd;border-radius:12px;padding:20px;margin:18px 0}.cta{display:inline-block;background:#075985;color:white;padding:12px 18px;border-radius:8px;text-decoration:none;margin:6px 6px 6px 0}</style></head><body><header><strong>CBE Nexus</strong> — Connecting learners to excellence | Kenya</header><main><p class="crumbs"><a href="/">CBE Nexus</a> / <a href="'+esc(gradeUrl)+'">Grade '+esc(grade)+'</a> / <a href="'+esc(subjectUrl)+'">'+esc(subject)+'</a> / Resource</p><section class="hero"><p>Kenyan CBC/CBE learning resource</p><h1>'+esc(title)+'</h1><p>'+esc(description)+'</p><div class="card"><strong>Grade:</strong> '+esc(grade)+'<br><strong>Subject:</strong> '+esc(subject)+'<br><strong>Resource type:</strong> '+esc(type)+'</div><a class="cta" href="'+esc(subjectUrl)+'">More Grade '+esc(grade)+' '+esc(subject)+' Resources</a><a class="cta" href="/free-resources.html">Explore Free Resources</a></section><section><h2>About this resource</h2><p>'+esc(String(r.description||"Explore this CBC/CBE resource on CBE Nexus for learning, revision and teaching support in Kenya."))+'</p></section><section><h2>Related '+esc(subject)+' resources</h2><ul>'+relatedHtml+'</ul></section></main></body></html>';
 }catch(e){console.warn("SEO resource page lookup failed:",e.message||e);return null;}
}
async function match(req){
 const p=new URL(req.url,"http://localhost").pathname.replace(/\/$/,"")||"/";
 const rm=p.match(/^\/resource\/([^/]+)$/);
 if(rm){return await resourcePage(req,decodeURIComponent(rm[1]));}
 const countyMatch=p.match(/^\/kenya-education-county\/([^/]+)$/);
 if(countyMatch){return countyPage(req,countyMatch[1]);}
 if(p==="/blog-article.html"){const q=new URL(req.url,"http://localhost").searchParams.get("slug");if(q)return await blogArticlePage(req,q);}
 if(p!=="/cbc-exam-generator" && LANDINGS[p]){const x=LANDINGS[p];const links=GRADES.map(g=>({url:"/grade-"+g,label:"Grade "+g+" CBC Resources"}));return page(req,x[0],x[1],p,x[0],x[1],links);}
 const m=p.match(/^\/grade-(7|8|9|10|11|12)(?:\/([^/]+))?$/);return m?gradePage(req,m[1],m[2]):null;
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
async function sitemap(req){
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
  "/cbc-notes-kenya","/cbc-exams-kenya","/kjsea-revision"
 ];
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
 const unique=[...new Set(urls)].filter(u=>typeof u==="string"&&u.startsWith("/"));
 const body=unique.map(u=>"<url><loc>"+xml(b+u)+"</loc></url>").join("");
 return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+body+"\n</urlset>";
}
module.exports={match,sitemap,base};
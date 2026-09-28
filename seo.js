const { supabase, supabaseConfigured } = require("./supabase");
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
"/cbc-exam-generator":["Free CBC Exam Generator Kenya","Generate CBC practice exams and marking schemes by grade, subject, strand, marks and number of questions with CBE Nexus."]};
function esc(v){return String(v||"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
function slug(v){return String(v||"").toLowerCase().trim().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function base(req){const e=String(process.env.PUBLIC_SITE_URL||"").trim().replace(/\/$/,"");if(e)return e;return (String(req.headers["x-forwarded-proto"]||"https"))+"://"+String(req.headers.host||"localhost");}
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
function match(req){
 const p=new URL(req.url,"http://localhost").pathname.replace(/\/$/,"")||"/";
 if(LANDINGS[p]){const x=LANDINGS[p];const links=GRADES.map(g=>({url:"/grade-"+g,label:"Grade "+g+" CBC Resources"}));return page(req,x[0],x[1],p,x[0],x[1],links);}
 const m=p.match(/^\/grade-(7|8|9|10|11|12)(?:\/([^/]+))?$/);return m?gradePage(req,m[1],m[2]):null;
}
function xml(v){return String(v).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
async function sitemap(req){
 const b=base(req),urls=["/","/cbc-notes-kenya","/cbc-exams-kenya","/kjsea-revision","/cbc-exam-generator"];
 GRADES.forEach(g=>{urls.push("/grade-"+g);(SUBJECTS[g]||[]).forEach(s=>urls.push("/grade-"+g+"/"+slug(s)));});
 if(supabaseConfigured){try{const {data}=await supabase.from("resources").select("id").eq("status","approved").limit(5000);(data||[]).forEach(r=>urls.push("/resource/"+encodeURIComponent(r.id)));}catch(e){console.warn("SEO sitemap resource lookup failed:",e.message||e);}}
 return '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+[...new Set(urls)].map(u=>'<url><loc>'+xml(b+u)+'</loc></url>').join("")+"</urlset>";
}
module.exports={match,sitemap,base};
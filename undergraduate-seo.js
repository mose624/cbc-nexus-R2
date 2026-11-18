"use strict";
const BASE = "https://cbenexus.com";
const SUBJECTS = {
  "accounting-finance":"Accounting and Finance","architecture":"Architecture",
  "biotechnology":"Biotechnology","business-administration-management":"Business Administration and Management",
  "chemistry-advanced-chapters":"Chemistry","chemistry-notes":"Chemistry","civil-engineering":"Civil Engineering",
  "computer-science":"Computer Science","cybersecurity":"Cybersecurity","data-science-ai":"Data Science and Artificial Intelligence",
  "education":"Education","electrical-electronic-engineering":"Electrical and Electronic Engineering",
  "human-resource-management":"Human Resource Management","information-systems":"Information Systems",
  "law":"Law","medicine-surgery":"Medicine and Surgery","nursing":"Nursing","project-management":"Project Management",
  "psychology":"Psychology","public-health":"Public Health","physics":"Physics"
};
function esc(v){return String(v||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function clean(v){return String(v||"").replace(/<[^>]*>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/\s+/g," ").trim();}
function metaTag(html,name,attr){
  const tags=html.match(/<meta\b[^>]*>/gi)||[];
  return tags.find(t=>new RegExp("\\b"+attr+"=[\\"']"+name+"[\\"']","i").test(t))||"";
}
function getMeta(html,name,attr="name"){const t=metaTag(html,name,attr);return t.match(/\bcontent=["']([^"']*)["']/i)?.[1]||"";}
function setMeta(html,name,value,attr="name"){
  const old=metaTag(html,name,attr),tag='<meta '+attr+'="'+esc(name)+'" content="'+esc(value)+'">';
  return old?html.replace(old,tag):html.replace(/<\/head>/i,tag+"\n</head>");
}
function title(html){return clean(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]||"");}
function h1(html){return clean(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]||"");}
function infoFor(pathname){
  const file=String(pathname||"").split("/").pop()||"";
  const m=file.match(/^(undergraduate-[a-z0-9-]+?)(?:-chapter-(\d+)|-unit-(\d+))?\.html$/i);
  if(!m)return null;
  let slug=m[1].replace(/^undergraduate-/,"");
  let subject=SUBJECTS[slug];
  if(!subject&&/^physics-unit-\d+$/i.test(slug)){slug="physics";subject=SUBJECTS.physics;}
  if(!subject)subject=slug.split("-").map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(" ");
  const chapter=Number(m[2]||0),unit=Number(m[3]||0);
  return {file,slug,subject,chapter,unit,isChapter:chapter>0,isUnit:unit>0||/^physics-unit-\d+$/i.test(m[1])};
}
function keywords(info,heading){
  const topic=heading.replace(/^chapter\s+\d+\s*[:—-]?\s*/i,"").replace(/^unit\s+\d+\s*[:—-]?\s*/i,"").trim();
  return [...new Set([
    info.subject+" undergraduate notes","undergraduate "+info.subject.toLowerCase()+" notes",
    info.subject+" degree study guide",info.subject+" university learning resources",
    topic&&topic+" notes",topic&&topic+" definitions",topic&&topic+" explained",
    topic&&topic+" worked examples",topic&&topic+" revision questions",
    topic&&topic+" case studies","undergraduate exam revision","university chapter notes"
  ].filter(Boolean))].slice(0,14).join(", ");
}
function description(info,heading){
  const value=info.isChapter
    ?"Study "+heading+" in "+info.subject+" with clear explanations, key definitions, diagrams, worked examples, applied cases and revision questions. Independent undergraduate learning notes."
    :"Explore undergraduate "+info.subject+" notes and a structured degree study guide, with chapter topics, key concepts, definitions, practical applications and revision support.";
  return value.length>158?value.slice(0,155).replace(/[\s,:;.-]+$/,"")+"…":value;
}
function addSchema(html,obj,marker){
  if(html.includes('data-cbe-undergraduate-schema="'+marker+'"'))return html;
  const tag='<script type="application/ld+json" data-cbe-undergraduate-schema="'+marker+'">'+JSON.stringify(obj).replace(/</g,"\\u003c")+"</script>";
  return html.replace(/<\/head>/i,tag+"\n</head>");
}
function optimize(html,pathname){
  const info=infoFor(pathname);
  if(!info||!/<html\b/i.test(html)||!/<head\b/i.test(html))return html;
  let out=html;
  const heading=h1(out)||title(out)||info.subject+" Undergraduate Notes";
  const pageTitle=title(out)||(info.isChapter?heading+" | "+info.subject+" Notes | CBE Nexus":info.subject+" Undergraduate Notes and Study Guide | CBE Nexus");
  const canonical=BASE+"/"+info.file;
  const desc=getMeta(out,"description")||description(info,heading);
  out=setMeta(out,"description",desc.slice(0,160));
  out=setMeta(out,"keywords",keywords(info,heading));
  out=setMeta(out,"robots","index,follow,max-image-preview:large");
  out=setMeta(out,"author","CBE Nexus Editorial Team");
  out=setMeta(out,"og:site_name","CBE Nexus","property");
  out=setMeta(out,"og:type",info.isChapter?"article":"website","property");
  out=setMeta(out,"og:title",pageTitle,"property");
  out=setMeta(out,"og:description",desc.slice(0,160),"property");
  out=setMeta(out,"og:url",canonical,"property");
  out=setMeta(out,"twitter:card","summary","name");
  out=setMeta(out,"twitter:title",pageTitle,"name");
  out=setMeta(out,"twitter:description",desc.slice(0,160),"name");
  const canonicalTag='<link rel="canonical" href="'+canonical+'">';
  if(/<link\b[^>]*rel=["']canonical["'][^>]*>/i.test(out))out=out.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/i,canonicalTag);
  else out=out.replace(/<\/head>/i,canonicalTag+"\n</head>");
  out=addSchema(out,{
    "@context":"https://schema.org","@type":"LearningResource","@id":canonical+"#learning-resource",
    "name":heading,"description":desc.slice(0,300),"url":canonical,
    "learningResourceType":info.isChapter?"Textbook chapter":info.isUnit?"Course unit":"Course study guide",
    "educationalLevel":"Undergraduate","inLanguage":"en","isAccessibleForFree":true,
    "publisher":{"@type":"Organization","@id":BASE+"/#organization","name":"CBE Nexus","url":BASE+"/"},
    "about":{"@type":"Thing","name":info.subject}
  },"learning-resource");
  const crumbs=[
    {"@type":"ListItem","position":1,"name":"Home","item":BASE+"/"},
    {"@type":"ListItem","position":2,"name":"Global University Courses","item":BASE+"/global-university-courses.html"},
    {"@type":"ListItem","position":3,"name":info.subject,"item":BASE+"/undergraduate-"+info.slug+".html"}
  ];
  if(info.isChapter)crumbs.push({"@type":"ListItem","position":4,"name":heading,"item":canonical});
  out=addSchema(out,{"@context":"https://schema.org","@type":"BreadcrumbList","@id":canonical+"#breadcrumb","itemListElement":crumbs},"breadcrumb-list");
  return out;
}
module.exports={optimize,infoFor,keywords};

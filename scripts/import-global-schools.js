#!/usr/bin/env node
"use strict";
/* Import a licensed country school CSV/JSON dataset into data/global-schools/<country>.json.
   Example: node scripts/import-global-schools.js --country india --input /tmp/schools.csv --source "UDISE+ / ADS Open Schools" --source-url https://adsopen.org/schools --license "Apache-2.0"
   Never use records without checking source provenance and reuse terms. */
const fs = require("node:fs");
const path = require("node:path");
function arg(name, fallback = "") { const i=process.argv.indexOf("--"+name); return i>=0?(process.argv[i+1]||fallback):fallback; }
const country=arg("country").trim(), input=arg("input").trim(), source=arg("source").trim(), sourceUrl=arg("source-url").trim(), license=arg("license").trim(), verifiedDate=arg("verified-date",new Date().toISOString().slice(0,10));
if(!country||!input||!source||!sourceUrl||!license){console.error("Required: --country <slug> --input <file.csv|file.json> --source <name> --source-url <url> --license <licence>");process.exit(2);}
if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(country))throw new Error("Country must be a lowercase slug.");
if(!/^https?:\/\//i.test(sourceUrl))throw new Error("--source-url must be HTTP(S).");
if(!fs.existsSync(input))throw new Error("Input file not found: "+input);
function parseCsv(text){
 const rows=[];let row=[],field="",quoted=false;
 for(let i=0;i<text.length;i++){const ch=text[i];
  if(quoted){if(ch==='"'&&text[i+1]==='"'){field+='"';i++;}else if(ch==='"')quoted=false;else field+=ch;}
  else if(ch==='"'&&field.length===0)quoted=true;
  else if(ch===","){row.push(field);field="";}
  else if(ch==="\n"){row.push(field.replace(/\r$/,""));if(row.some(v=>v.trim()))rows.push(row);row=[];field="";}
  else field+=ch;
 }
 if(quoted)throw new Error("CSV ended inside a quoted field.");
 if(field.length||row.length){row.push(field.replace(/\r$/,""));if(row.some(v=>v.trim()))rows.push(row);}
 if(!rows.length)return [];
 const headers=rows.shift().map((h,i)=>(i===0?h.replace(/^\uFEFF/,""):h).trim());
 return rows.map(values=>Object.fromEntries(headers.map((h,i)=>[h,values[i]??""])));
}
function key(s){return String(s||"").toLowerCase().replace(/[^a-z0-9]/g,"");}
function get(row,aliases){const index=new Map(Object.keys(row).map(k=>[key(k),k]));for(const alias of aliases){const original=index.get(key(alias));if(original&&String(row[original]??"").trim())return String(row[original]).trim();}return "";}
function slug(s){return String(s||"").toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
const raw=fs.readFileSync(input,"utf8");let rows;
if(/\.json$/i.test(input)){const parsed=JSON.parse(raw);rows=Array.isArray(parsed)?parsed:(Array.isArray(parsed.schools)?parsed.schools:[]);}else rows=parseCsv(raw);
if(!rows.length)throw new Error("No data rows found in input.");
const schools=[],seen=new Set();let rejected=0;
for(const row of rows){
 if(!row||typeof row!=="object"){rejected++;continue;}
 const name=get(row,["school_name","school name","name","institution_name","institution name","establishmentname","school"]);
 if(!name){rejected++;continue;}
 const sourceId=get(row,["udise_code","udise code","nces_id","nces id","school_id","school id","urn","id","emis_code","institution_code","code"]);
 const region=get(row,["state_name","state name","state","province","region_name","region","county"]);
 const district=get(row,["district_name","district name","district","subcounty","local authority"]);
 const city=get(row,["city","town","locality","village"]);
 const address=get(row,["address","street_address","street address","physical_address"]);
 const website=get(row,["website","school_website","school website","url","web"]);
 const phone=get(row,["phone","telephone","phone_number","phone number","contact"]);
 const type=get(row,["school_type","school type","type","sector","institution_type","institution type"]);
 const from=get(row,["class_frm","class_from","grade_from","lowest_grade","lowest grade","grade_low","grade start"]);
 const to=get(row,["class_to","grade_to","highest_grade","highest grade","grade_high","grade end"]);
 const identity=sourceId?"id:"+sourceId.toLowerCase():["name:"+slug(name),slug(region),slug(district),slug(city)].join("|");
 if(seen.has(identity))continue;seen.add(identity);
 schools.push({id:sourceId||identity,name:name.replace(/\s+/g," ").trim(),region,district,city,address,type,grades:[from,to].filter(Boolean).join("–"),website:/^https?:\/\//i.test(website)?website:"",phone,source_id:sourceId,source_record:row});
}
if(!schools.length)throw new Error("No usable school records found. Check source column names.");
const output={country,source,source_url:sourceUrl,license,last_verified:verifiedDate,imported_at:new Date().toISOString(),total_records:schools.length,rejected_rows:rejected,schools};
const outDir=path.join(__dirname,"..","data","global-schools");fs.mkdirSync(outDir,{recursive:true});
const outFile=path.join(outDir,country+".json");fs.writeFileSync(outFile,JSON.stringify(output));
console.log("Wrote "+schools.length+" unique school records to "+outFile+" ("+rejected+" rows without usable names skipped).");

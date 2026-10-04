(function(){
"use strict";
const $=id=>document.getElementById(id);
const fmt=n=>Number(n||0).toLocaleString("en-US",{maximumFractionDigits:0});
const money=n=>"$"+Number(n||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2});
const pct=n=>Number(n||0).toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1})+"%";
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function set(id,value){const e=$(id);if(e)e.textContent=value;}
function render(d){
 const m=d.metrics||{};
 set("arPageviews",fmt(m.pageviews));set("arSessions",fmt(m.sessions));
 set("arPagesSession",Number(m.pagesPerSession||0).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}));
 set("arImpressions",fmt(m.adImpressions));set("arClicks",fmt(m.adClicks));
 set("arCtr",pct(m.adCtr));set("arRpm",money(m.rpm));set("arRevenue",money(m.estimatedRevenue));
 set("arPeriod","Last "+d.periodDays+" days · "+d.startDate+" → "+d.endDate);
 set("arStatus","Live GA4 data");
 set("arLastUpdated","Updated "+new Date().toLocaleString("en-KE"));
 const rows=d.countries||[], total=rows.reduce((s,x)=>s+Number(x.sessions||0),0)||Number(m.sessions||0), host=$("arCountryTable");
 if(host)host.innerHTML=rows.slice(0,15).map(x=>"<tr><td>"+esc(x.country||"Unknown")+"</td><td>"+fmt(x.sessions)+"</td><td>"+pct(total?x.sessions/total*100:0)+"</td><td>"+fmt(x.pageviews)+"</td><td>"+money(x.revenue)+"</td></tr>").join("")||'<tr><td colspan="5">No country data returned.</td></tr>';
 const err=$("arError");if(err)err.hidden=true;
}
async function load(){
 set("arStatus","Loading GA4 data…");
 try{
  const r=await fetch("/api/admin/ad-revenue?_="+Date.now(),{credentials:"same-origin",cache:"no-store"});
  const d=await r.json().catch(()=>({}));
  if(!r.ok||!d.ok)throw new Error(d.error||"GA4 ad revenue data is unavailable.");
  render(d);
 }catch(e){
  set("arStatus","Setup required");
  const host=$("arError");if(host){host.hidden=false;host.innerHTML="<strong>Live data is not available yet.</strong><br>"+esc(e.message)+"<br><small>Configure GA4_PROPERTY_ID and GA4_SERVICE_ACCOUNT_JSON in Render, then grant the service account Viewer access to the GA4 property.</small>";}
 }
}
window.CBENexusAdRevenue={load};
document.addEventListener("DOMContentLoaded",()=>{$("arRefresh")?.addEventListener("click",load);});
})();
(function(){
  "use strict";
  const $=id=>document.getElementById(id);
  const esc=value=>String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  async function request(url,options){
    const response=await fetch(url,{credentials:"same-origin",cache:"no-store",...options});
    const data=await response.json().catch(()=>({ok:false,error:"The server returned an unreadable response."}));
    if(!response.ok||!data.ok)throw new Error(data.error||"Request failed.");
    return data;
  }
  function status(message,isError){
    const node=$("onlineNotesAdminStatus");if(node){node.textContent=message;node.style.color=isError?"#b91c1c":"#047857";}
  }
  function formPayload(){
    return {
      id:$("onNoteId").value.trim(),
      curriculum:$("onCurriculum").value,
      country:$("onCountry").value.trim(),
      level:$("onLevel").value.trim(),
      subject:$("onSubject").value.trim(),
      topic:$("onTopic").value.trim(),
      chapter:$("onChapter").value.trim(),
      title:$("onTitle").value.trim(),
      objectives:$("onObjectives").value,
      content:$("onContent").value,
      examples:$("onExamples").value,
      practical:$("onPractical").value,
      questions:$("onQuestions").value,
      answers:$("onAnswers").value,
      seoTitle:$("onSeoTitle").value.trim(),
      seoDescription:$("onSeoDescription").value.trim(),
      seoKeywords:$("onSeoKeywords").value.trim(),
      status:$("onStatus").value
    };
  }
  function resetForm(){ $("onlineNotesForm").reset();$("onNoteId").value="";$("onCurriculum").value="National Curriculum";$("onStatus").value="draft"; }
  async function loadList(){
    const host=$("onlineNotesList");if(!host)return;
    try{
      const data=await request("/api/admin/online-notes");
      const notes=data.notes||[];
      $("onlineNotesSummary").textContent=notes.length+" saved notes";
      host.innerHTML=notes.map(n=>'<article class="online-note-admin-card"><div><strong>'+esc(n.title)+'</strong><span>'+esc(n.curriculum)+' · '+esc(n.subject)+' · '+esc(n.status)+'</span><small>'+esc([n.country,n.level,n.topic,n.chapter].filter(Boolean).join(" / "))+'</small></div><div class="online-note-actions"><button type="button" data-note-edit="'+esc(n.id)+'">Edit</button><a href="/online-notes.html?id='+encodeURIComponent(n.id)+'" target="_blank" rel="noopener">View</a></div></article>').join("")||'<p class="admin-note">No online notes saved yet. Create the first chapter using the form.</p>';
      host.querySelectorAll("[data-note-edit]").forEach(button=>button.addEventListener("click",()=>editNote(button.dataset.noteEdit)));
    }catch(error){host.innerHTML='<p class="admin-note">'+esc(error.message)+'</p>';}
  }
  async function editNote(id){
    try{
      const data=await request("/api/admin/online-notes?id="+encodeURIComponent(id));
      const n=data.note;if(!n)return;
      $("onNoteId").value=n.id||"";
      const fields={curriculum:"curriculum",country:"country",level:"level",subject:"subject",topic:"topic",chapter:"chapter",title:"title",objectives:"objectives",content:"content",examples:"examples",practical:"practical",questions:"questions",answers:"answers",seoTitle:"seo_title",seoDescription:"seo_description",seoKeywords:"seo_keywords",status:"status"};
      Object.entries(fields).forEach(([id,key])=>{if($( "on"+id[0].toUpperCase()+id.slice(1)))$("on"+id[0].toUpperCase()+id.slice(1)).value=n[key]||"";});
      status("Loaded note for editing.");
      $("onlineNotesForm").scrollIntoView({behavior:"smooth",block:"start"});
    }catch(error){status(error.message,true);}
  }
  function preview(){
    const p=formPayload(),w=window.open("","_blank");
    if(!w){status("Allow pop-ups to preview this note.",true);return;}
    const html="<!doctype html><html><head><meta charset=utf-8><meta name=viewport content='width=device-width'><title>"+esc(p.title)+"</title><style>body{font:17px/1.7 Arial,sans-serif;max-width:900px;margin:40px auto;padding:0 20px;color:#172033}h1,h2{line-height:1.2}pre{white-space:pre-wrap;font:inherit}</style></head><body><p>"+esc([p.curriculum,p.country,p.subject,p.level].filter(Boolean).join(" · "))+"</p><h1>"+esc(p.title)+"</h1><h2>Learning objectives</h2><pre>"+esc(p.objectives)+"</pre><h2>Notes</h2><pre>"+esc(p.content)+"</pre><h2>Worked examples</h2><pre>"+esc(p.examples)+"</pre><h2>Practical applications</h2><pre>"+esc(p.practical)+"</pre><h2>Questions</h2><pre>"+esc(p.questions)+"</pre><h2>Answers and marking guidance</h2><pre>"+esc(p.answers)+"</pre></body></html>";
    w.document.open();w.document.write(html);w.document.close();
  }
  function init(){
    const form=$("onlineNotesForm");if(!form||form.dataset.ready==="1")return;
    form.dataset.ready="1";
    $("onlineNotesReset")?.addEventListener("click",resetForm);
    $("onlineNotesPreview")?.addEventListener("click",preview);
    form.addEventListener("submit",async event=>{
      event.preventDefault();const payload=formPayload();
      if(payload.content.trim().length<100){status("Please add at least 100 characters of lesson content before saving.",true);return;}
      const submit=form.querySelector('button[type="submit"]');if(submit)submit.disabled=true;
      status("Saving note...");
      try{
        const data=await request("/api/admin/online-notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
        $("onNoteId").value=data.note.id;
        status(data.note.status==="published"?"Published. Open the public reader to verify it.":"Draft saved successfully.");
        await loadList();
      }catch(error){status(error.message,true);}
      finally{if(submit)submit.disabled=false;}
    });
    loadList();
  }
  window.initOnlineNotesManager=init;
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});
})();
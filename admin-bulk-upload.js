/* CBE Nexus admin bulk upload: preserves the existing single-file flow. */
(function installAdminBulkUpload(){
  const form=document.getElementById("resourceForm");
  const fileInput=document.getElementById("fileInput");
  if(!form||!fileInput)return;
  fileInput.multiple=true;
  fileInput.setAttribute("aria-describedby","fileHelp bulkUploadHelp");
  const help=document.getElementById("fileHelp");
  if(help)help.textContent="Select one or many files (e.g. 2–30 papers). Existing supported file formats and server size limits still apply.";
  const helpNode=document.createElement("p");
  helpNode.id="bulkUploadHelp";
  helpNode.className="form-status";
  helpNode.setAttribute("aria-live","polite");
  helpNode.textContent="Bulk upload: each file becomes a separate resource. If you choose “Multiple Subjects (Combined Set)”, subject names are detected from filenames where possible.";
  fileInput.insertAdjacentElement("afterend",helpNode);
  fileInput.addEventListener("change",()=>{
    const count=fileInput.files?.length||0;
    helpNode.textContent=count>1
      ? count+" files selected. Each will be uploaded and saved separately; successful files will not be repeated if another file fails."
      : count===1 ? "1 file selected." : "Bulk upload: choose multiple papers in one selection.";
  });
  const originalSubmit=window.handleFormSubmit;
  if(typeof originalSubmit!=="function")return;
  const q=id=>document.getElementById(id);
  const cleanName=name=>String(name||"").replace(/\\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\\s+/g," ").trim();
  const norm=value=>String(value||"").toLowerCase().trim().replace(/\\s+/g," ");
  function subjectForFile(file,selected){
    if(selected!=="Multiple Subjects (Combined Set)")return selected;
    const options=Array.from(q("adminSubjectInput")?.options||[])
      .map(o=>o.value||o.textContent.trim())
      .filter(s=>s&&s!=="Multiple Subjects (Combined Set)")
      .sort((a,b)=>b.length-a.length);
    const filename=norm(cleanName(file.name));
    return options.find(subject=>filename.includes(norm(subject)))||selected;
  }
  async function uploadOne(file,ctx,index,total){
    const fileName=file.name;
    const subject=subjectForFile(file,ctx.subject);
    const title=cleanName(file.name)||file.name;
    const id="admin-"+Date.now()+"-"+index+"-"+Math.random().toString(36).slice(2,8);
    const dupeKey=[norm(file.name),file.size,ctx.grade,norm(subject),norm(ctx.type)].join("|");
    if(ctx.batchKeys.has(dupeKey))throw new Error("Duplicate file in this batch.");
    ctx.batchKeys.add(dupeKey);
    const localResources=[...(JSON.parse(localStorage.getItem("cbeResources")||"[]")), ...(JSON.parse(localStorage.getItem("cbeSellerResources")||"[]"))];
    const duplicate=localResources.some(r=>norm(r.fileName||r.filename||r.originalName)===norm(file.name)&&Number(r.fileSize||r.size||0)===Number(file.size)&&norm(r.grade)===norm(ctx.grade)&&norm(r.subject)===norm(subject)&&norm(r.type||r.resource_type)===norm(ctx.type));
    if(duplicate)throw new Error("Duplicate resource already exists in this browser.");
    const status=q("formStatus");
    if(status)status.textContent="Uploading "+index+" of "+total+": "+file.name;
    const uploadResponse=await fetch("/api/r2/upload",{
      method:"POST",credentials:"same-origin",
      headers:{"Content-Type":file.type||"application/octet-stream","Content-Length":String(file.size),"X-CBE-Role":"admin","X-CBE-Grade":ctx.grade,"X-CBE-Subject":subject,"X-CBE-Type":ctx.type,"X-CBE-Filename":fileName,"X-CBE-Resource-Id":id},
      body:file
    });
    const uploadData=await uploadResponse.json().catch(()=>({}));
    if(!uploadResponse.ok||!uploadData.ok)throw new Error(uploadData.error||"File storage upload failed.");
    const resourceResponse=await fetch("/api/resources",{
      method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({id,role:"admin",title,grade:ctx.grade,curriculum:ctx.curriculum,subject,type:ctx.type,description:ctx.description+(ctx.description?"\n\n":"")+"Uploaded file: "+file.name,notes:ctx.notes,price:ctx.price,discount:ctx.discount,term:ctx.term,isFreeSample:ctx.freeSample,popularity:1,fileName,r2Key:uploadData.r2Key||uploadData.key,previewKey:uploadData.previewKey||""})
    });
    const resourceData=await resourceResponse.json().catch(()=>({}));
    if(!resourceResponse.ok||!resourceData.ok)throw new Error(resourceData.error||"File uploaded but its resource details could not be saved.");
    const saved=resourceData.saved||{...(resourceData.resource||{}),id,title,grade:ctx.grade,subject,type:ctx.type,description:ctx.description,price:ctx.price,discount:ctx.discount,term:ctx.term,isFreeSample:ctx.freeSample,fileName,r2Key:uploadData.r2Key||uploadData.key,fileSize:file.size};
    try{const list=JSON.parse(localStorage.getItem("cbeResources")||"[]");localStorage.setItem("cbeResources",JSON.stringify([...list.filter(r=>String(r.id)!==String(saved.id)),saved]));}catch{}
    return {file:file.name,subject,status:"success"};
  }
  async function bulkSubmit(event){
    event.preventDefault();
    const files=Array.from(fileInput.files||[]);
    if(files.length<=1)return originalSubmit.call(window,event);
    const curriculum=q("adminCurriculumInput")?.value||"CBC/CBE";
    let grade=q("adminGradeInput")?.value||"";
    if(["IGCSE","Cambridge International","IB","O Level","A Level","Pearson"].includes(curriculum))grade=curriculum;
    const ctx={curriculum,grade,subject:q("adminSubjectInput")?.value||"",type:q("adminTypeInput")?.value||"",description:q("descriptionInput")?.value.trim()||"",notes:q("notesContent")?.value.trim()||"",price:Number(q("priceInput")?.value||0),discount:Number(q("discountInput")?.value||0),term:q("termInput")?.value||"Term 1",freeSample:q("freeSample")?.value==="true",batchKeys:new Set()};
    const status=q("formStatus"),button=form.querySelector('button[type="submit"]');
    if(!ctx.grade||!ctx.subject||!ctx.type||!ctx.description||!q("titleInput")?.value.trim()){
      if(status)status.textContent="Complete the title, grade/curriculum, subject, material type and description before bulk uploading.";
      return;
    }
    if(files.some(f=>f.size===0)){if(status)status.textContent="The batch contains an empty file. Remove it and try again.";return;}
    const originalLabel=button?.textContent;
    if(button){button.disabled=true;button.textContent="Uploading batch…";}
    if(status){status.className="form-status";status.textContent="Starting bulk upload of "+files.length+" files…";}
    const results=[];
    let next=0;
    async function worker(){while(next<files.length){const i=next++;try{results[i]=await uploadOne(files[i],ctx,i+1,files.length);}catch(error){results[i]={file:files[i].name,status:"failed",error:error.message||"Upload failed"};}}}
    try{
      await Promise.all(Array.from({length:Math.min(3,files.length)},()=>worker()));
      const succeeded=results.filter(r=>r.status==="success"),failed=results.filter(r=>r.status==="failed");
      if(status){
        status.className="form-status "+(failed.length?"":"upload-success");
        status.textContent="Bulk upload finished: "+succeeded.length+" succeeded, "+failed.length+" failed. "+results.map(r=>(r.status==="success"?"✓ ":"✕ ")+r.file+(r.subject?" — "+r.subject:"")+(r.error?" ("+r.error+")":"")).join(" | ");
      }
      if(typeof showToast==="function")showToast("Bulk upload complete: "+succeeded.length+" successful, "+failed.length+" failed.");
      if(typeof window.loadAdminResourceModeration==="function")Promise.resolve().then(()=>window.loadAdminResourceModeration()).catch(()=>{});
      if(succeeded.length===files.length){
        form.reset();
        if(q("priceInput"))q("priceInput").value="";
        if(q("discountInput"))q("discountInput").value="0";
        if(q("termInput"))q("termInput").value="Term 1";
        if(q("freeSample"))q("freeSample").value="false";
        if(q("notesContent"))q("notesContent").value="";
        if(typeof refreshAdminUploadSubjects==="function")refreshAdminUploadSubjects();
        if(help)help.textContent="Choose one or many files. Existing supported formats and server size limits apply.";
      }else{
        helpNode.textContent="Batch results: "+succeeded.length+" succeeded; "+failed.length+" failed. Remove successful files before retrying to avoid duplicates.";
      }
    }finally{if(button){button.disabled=false;button.textContent=originalLabel||"Publish Resource";}}
  }
  window.handleFormSubmit=bulkSubmit;
})();
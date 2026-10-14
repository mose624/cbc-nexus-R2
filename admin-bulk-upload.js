/* CBE Nexus admin bulk upload.
 * Uses the same authenticated R2 and resource APIs as the existing single-file flow.
 * Each selected file becomes a resource record, with shared package metadata so set
 * members can be identified together. Existing single-file publishing stays unchanged.
 */
(function installAdminBulkUpload(){
  const form=document.getElementById("resourceForm");
  const fileInput=document.getElementById("fileInput");
  if(!form||!fileInput)return;
  fileInput.multiple=true;
  const help=document.getElementById("fileHelp");
  if(help)help.textContent="Choose one or many files. Existing supported formats and server size limits apply.";
  const helpNode=document.createElement("p");
  helpNode.id="bulkUploadHelp";
  helpNode.className="form-status";
  helpNode.setAttribute("aria-live","polite");
  helpNode.textContent="Bulk upload: each file becomes a resource. Use Multiple Subjects (Combined Set) to group papers under one named package.";
  fileInput.insertAdjacentElement("afterend",helpNode);
  fileInput.addEventListener("change",()=>{
    const count=fileInput.files?.length||0;
    helpNode.textContent=count>1
      ? count+" files selected. Files will be uploaded separately with shared package metadata."
      : count===1 ? "1 file selected." : "Choose multiple papers in one selection.";
  });
  const originalSubmit=window.handleFormSubmit;
  if(typeof originalSubmit!=="function")return;
  const q=id=>document.getElementById(id);
  const cleanName=name=>String(name||"").replace(/\.[^.]+$/,"").replace(/[_-]+/g," ").replace(/\s+/g," ").trim();
  const norm=value=>String(value||"").toLowerCase().trim().replace(/\s+/g," ");
  const safeSlug=value=>String(value||"").trim().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").replace(/^-|-$/g,"").toUpperCase();
  function subjectForFile(file,selected){
    if(selected!=="Multiple Subjects (Combined Set)")return selected;
    const options=Array.from(q("adminSubjectInput")?.options||[])
      .map(o=>String(o.value||o.textContent.trim()).trim())
      .filter(s=>s&&s!=="Multiple Subjects (Combined Set)")
      .sort((a,b)=>b.length-a.length);
    const filename=norm(cleanName(file.name));
    return options.find(subject=>filename.includes(norm(subject)))||selected;
  }
  async function uploadOne(file,ctx,index,total){
    const subject=subjectForFile(file,ctx.subject);
    const fileTitle=cleanName(file.name)||file.name;
    const titleParts=[ctx.packageName,subject==="Multiple Subjects (Combined Set)"?fileTitle:subject,fileTitle];
    const title=[...new Set(titleParts.filter(Boolean))].join(" — ").slice(0,240);
    const resourceId="admin-"+Date.now()+"-"+index+"-"+Math.random().toString(36).slice(2,10);
    const dupeKey=[norm(file.name),file.size,ctx.grade,norm(subject),norm(ctx.type),norm(ctx.packageName)].join("|");
    if(ctx.batchKeys.has(dupeKey))throw new Error("Duplicate file in this batch.");
    ctx.batchKeys.add(dupeKey);
    const localResources=[];
    for(const key of ["cbeResources","cbeSellerResources","cbeNexusResources"]){
      try{const value=JSON.parse(localStorage.getItem(key)||"[]");if(Array.isArray(value))localResources.push(...value);}catch{}
    }
    const duplicate=localResources.some(r=>
      norm(r.fileName||r.filename||r.originalName)===norm(file.name)&&
      Number(r.fileSize||r.size||0)===Number(file.size)&&
      norm(r.grade)===norm(ctx.grade)&&norm(r.subject)===norm(subject)&&
      norm(r.type||r.resource_type)===norm(ctx.type)&&
      (!ctx.packageName||norm(r.packageName||r.package_name||r.description).includes(norm(ctx.packageName)))
    );
    if(duplicate)throw new Error("A matching resource appears to exist in this browser. Check existing resources before retrying.");
    const status=q("formStatus");
    if(status)status.textContent="Uploading "+index+" of "+total+": "+file.name;
    const uploadResponse=await fetch("/api/r2/upload",{
      method:"POST",credentials:"same-origin",
      headers:{"Content-Type":file.type||"application/octet-stream","Content-Length":String(file.size),"X-CBE-Role":"admin","X-CBE-Grade":ctx.grade,"X-CBE-Subject":subject,"X-CBE-Type":ctx.type,"X-CBE-Filename":file.name,"X-CBE-Resource-Id":resourceId},
      body:file
    });
    const uploadData=await uploadResponse.json().catch(()=>({}));
    if(!uploadResponse.ok||!uploadData.ok)throw new Error(uploadData.error||"File storage upload failed.");
    const identity=[
      "CBE Nexus package: "+ctx.packageName,
      "Package ID: "+ctx.packageId,
      "Academic year: "+ctx.academicYear,
      "Term: "+ctx.term,
      "Assessment type: "+ctx.assessmentType,
      "Package mode: "+(ctx.subject==="Multiple Subjects (Combined Set)"?"Combined subjects":"Individual resources"),
      "Original filename: "+file.name
    ].join("\n");
    const description=[ctx.description,identity].filter(Boolean).join("\n\n");
    const resourceResponse=await fetch("/api/resources",{
      method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        id:resourceId,role:"admin",title,grade:ctx.grade,curriculum:ctx.curriculum,subject,type:ctx.type,
        description,notes:ctx.notes,price:ctx.price,discount:ctx.discount,term:ctx.term,
        isFreeSample:ctx.freeSample,popularity:1,fileName:file.name,
        r2Key:uploadData.r2Key||uploadData.key,previewKey:uploadData.previewKey||""
      })
    });
    const resourceData=await resourceResponse.json().catch(()=>({}));
    if(!resourceResponse.ok||!resourceData.ok)throw new Error(resourceData.error||"File uploaded but resource details could not be saved. Check storage before retrying.");
    const saved=resourceData.saved||{...(resourceData.resource||{}),id:resourceId,title,grade:ctx.grade,subject,type,description,price:ctx.price,discount:ctx.discount,term:ctx.term,isFreeSample:ctx.freeSample,fileName:file.name,r2Key:uploadData.r2Key||uploadData.key,fileSize:file.size};
    try{const list=JSON.parse(localStorage.getItem("cbeResources")||"[]");localStorage.setItem("cbeResources",JSON.stringify([...list.filter(r=>String(r.id)!==String(saved.id)),saved]));}catch{}
    return {file:file.name,subject,status:"success",title};
  }
  async function bulkSubmit(event){
    const files=Array.from(fileInput.files||[]);
    if(files.length<=1)return originalSubmit.call(window,event);
    event.preventDefault();
    const curriculum=q("adminCurriculumInput")?.value||"CBC/CBE";
    let grade=q("adminGradeInput")?.value||"";
    if(["IGCSE","Cambridge International","IB","O Level","A Level","Pearson"].includes(curriculum))grade=curriculum;
    const title=q("titleInput")?.value.trim()||"";
    const ctx={
      curriculum,grade,subject:q("adminSubjectInput")?.value||"",type:q("adminTypeInput")?.value||"",
      description:q("descriptionInput")?.value.trim()||"",
      notes:q("notesContentInput")?.value.trim()||"",
      price:Number(q("priceInput")?.value||0),discount:Number(q("discountInput")?.value||0),
      term:q("termInput")?.value||"Term 1",
      academicYear:String(q("adminAcademicYearInput")?.value||new Date().getFullYear()).trim(),
      assessmentType:q("adminAssessmentTypeInput")?.value||"Not applicable",
      packageName:q("adminPackageNameInput")?.value.trim()||title,
      freeSample:q("freeSampleInput")?.value==="true",batchKeys:new Set()
    };
    ctx.packageId=["CBENEXUS",safeSlug(ctx.curriculum),safeSlug(ctx.grade),safeSlug(ctx.academicYear),safeSlug(ctx.term),safeSlug(ctx.type),safeSlug(ctx.assessmentType),safeSlug(ctx.packageName)].filter(Boolean).join("-");
    const status=q("formStatus"),button=form.querySelector('button[type="submit"]');
    if(!title||!ctx.grade||!ctx.subject||!ctx.type||!ctx.description||!Number.isFinite(ctx.price)||ctx.price<0){
      if(status)status.textContent="Complete the resource title, grade/curriculum, subject, material type, description and valid price before bulk uploading.";
      return;
    }
    if(!ctx.packageName){if(status)status.textContent="Enter a Package / Set Name so these files can be identified together.";return;}
    if(["Assessment Test","Past Papers"].includes(ctx.type)&&ctx.assessmentType==="Not applicable"){if(status)status.textContent="Choose Opener, Midterm, Endterm, Revision or Topical for assessment and exam resources.";return;}
    if(files.length>30){if(status)status.textContent="Select no more than 30 files per batch.";return;}
    if(files.some(f=>f.size===0)){if(status)status.textContent="The batch contains an empty file. Remove it and try again.";return;}
    const originalLabel=button?.textContent;
    if(button){button.disabled=true;button.textContent="Uploading batch…";}
    if(status){status.className="form-status";status.textContent="Starting bulk upload of "+files.length+" files…";}
    const results=[];let next=0;
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
        if(q("freeSampleInput"))q("freeSampleInput").value="false";
        if(q("adminAcademicYearInput"))q("adminAcademicYearInput").value=String(new Date().getFullYear());
        if(q("adminAssessmentTypeInput"))q("adminAssessmentTypeInput").value="Not applicable";
        if(q("notesContentInput"))q("notesContentInput").value="";
        if(typeof window.refreshAdminUploadSubjects==="function")window.refreshAdminUploadSubjects();
        if(help)help.textContent="Choose one or many files. Existing supported formats and server size limits apply.";
      }else{
        helpNode.textContent="Batch results: "+succeeded.length+" succeeded; "+failed.length+" failed. Check the results before retrying to avoid duplicate uploads.";
      }
    }finally{if(button){button.disabled=false;button.textContent=originalLabel||"Publish Resource";}}
  }
  window.handleFormSubmit=bulkSubmit;
})();

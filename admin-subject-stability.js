/* Keep the combined-set subject option stable when admin subject lists refresh. */
(function(){
  const select=document.getElementById("adminSubjectInput");
  if(!select)return;
  const label="Multiple Subjects (Combined Set)";
  function ensureCombinedOption(){
    const current=select.value;
    let option=Array.from(select.options).find(o=>(o.value||o.textContent.trim())===label);
    if(!option){
      option=document.createElement("option");
      option.value=label;
      option.textContent=label;
      select.insertBefore(option,select.options[1]||null);
    }else{
      option.value=label;
      option.textContent=label;
      if(option!==select.options[1])select.insertBefore(option,select.options[1]||null);
    }
    if(current===label)select.value=label;
  }
  const original=window.refreshAdminUploadSubjects;
  if(typeof original==="function"&&!original.__combinedSubjectStable){
    const wrapped=function(){
      const current=select.value;
      const result=original.apply(this,arguments);
      ensureCombinedOption();
      if(current===label)select.value=label;
      return result;
    };
    wrapped.__combinedSubjectStable=true;
    window.refreshAdminUploadSubjects=wrapped;
  }
  ensureCombinedOption();
  select.addEventListener("focus",ensureCombinedOption);
  select.addEventListener("pointerdown",ensureCombinedOption);
  select.addEventListener("change",()=>{if(select.value===label)ensureCombinedOption();});
})();
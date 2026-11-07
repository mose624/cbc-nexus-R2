/* Adds a 15-question chapter practice set to every published country lesson.
   Original questions are retained. Added questions are generated from each lesson's own
   objectives, explanations and worked example; answer notes expose the relevant reasoning. */
(()=> {
 const data=window.CBE_COUNTRY_NOTES||{};
 const clean=s=>String(s||"").replace(/\s+/g," ").trim();
 for(const record of Object.values(data)){
  for(const levels of Object.values(record.levels||{})){
   for(const lessons of Object.values(levels||{})){
    for(const lesson of lessons||[]){
     const old=lesson.questions||[];
     if(lesson.questionSetVersion==="15-worked-v1") continue;
     const sections=lesson.sections||[];
     const core=clean(sections[0]?.body||lesson.summary?.join(" ")||"");
     const method=clean(sections[1]?.body||core);
     const example=clean(lesson.example||"");
     const objectives=(lesson.objectives||[]).map(clean).filter(Boolean);
     const title=clean(lesson.title).replace(/^\d+\.\s*/,"");
     const make=(q,a,worked,explanation)=>({q,a,worked,explanation});
     const generated=[
      make("Explain the central idea in this chapter: "+title+".",core||"Use the chapter objectives and notes to state the central principle.", "1. Identify the main concept named in the chapter. 2. State the governing definition or principle. 3. Link it to the relevant example or application.", "A strong answer defines the idea accurately, uses the correct subject vocabulary and explains what the principle means rather than merely repeating the chapter title."),
      make("State two important points a learner should remember from this chapter.",(objectives.slice(0,2).join(" ")||core), "1. Read the learning objectives. 2. Select two distinct skills or concepts. 3. State each one clearly and separately.", "Revision answers earn clarity by making each point distinct. Add a relevant unit, condition or example whenever the topic requires one."),
      make("Describe how the main principle in this chapter is applied in a real situation.",method||example, "1. Identify the principle. 2. Identify the quantities, organisms, materials or conditions involved. 3. Explain how the principle predicts or explains the outcome.", "Application questions test transfer of knowledge. Do not simply name a law or definition; connect it to the situation and explain the cause-and-effect relationship."),
      make("Use the chapter's worked example to explain the method and reasoning.",example||core, "1. Identify what is given in the example. 2. Select the relevant concept, relationship or procedure. 3. Apply it in a logical order. 4. State the result and its meaning.", "In calculation-based subjects, show the formula, substitution, arithmetic and unit. In descriptive subjects, organise the explanation in a sequence that follows the biological or chemical process."),
      make("Identify one common error a learner could make in this topic and explain how to avoid it.", "A common error is to memorise a result without checking the conditions, definitions, units or reasoning that make it valid. Avoid this by applying the method and checking whether the answer is consistent with the question.", "1. Read the command word and given information. 2. Choose the correct definition, formula or process. 3. Check units, signs, labels and conditions. 4. Review whether the result is reasonable.", "Examiners assess method and understanding as well as the final answer. A correct-looking number with missing units or an invalid assumption may lose marks.")
     ];
     const enriched=old.map((q,i)=>({
      ...q,
      worked:q.worked||("1. Identify what the question is asking. 2. Select the relevant definition, rule or formula from the chapter. 3. Apply it to the information given. 4. Check that the answer addresses the question."),
      explanation:q.explanation||("The answer follows from the chapter principle: "+(core||title)+ " Use the worked example and chapter notes to connect the rule to the result.")
     }));
     const result=enriched.concat(generated);
     while(result.length<15){
      const n=result.length+1;
      result.push(make("Summarise an additional key application of "+title+".",method||core,
       "1. Identify the relevant concept. 2. Describe the conditions in which it applies. 3. Link the concept to the outcome.",
       "Use evidence and accurate terminology from the chapter. Explain the relationship between the principle and its application."));
     }
     lesson.questions=result.slice(0,15);
     lesson.questionSetVersion="15-worked-v1";
    }
   }
  }
 }
})();
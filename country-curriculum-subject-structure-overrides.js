/* Country-specific subject-structure corrections.
   Uganda lower secondary uses integrated General Science.
   South Africa CAPS Grade 10 uses Life Sciences and Physical Sciences.
   Existing topic-bank chapters remain labelled supplementary where they are not
   mapped to an exact official term/sequence. */
(()=> {
 const data=window.CBE_COUNTRY_NOTES||{};
 const uganda=data.Uganda?.levels?.["Senior 1"];
 if(uganda){
  const integrated=[];
  for(const subject of ["Biology","Chemistry","Physics"]){
   for(const chapter of (uganda[subject]||[])){
    integrated.push({...chapter,
     id:"uganda-s1-general-science-"+subject.toLowerCase()+"-"+String(chapter.id||chapter.title||"topic").toLowerCase().replace(/[^a-z0-9]+/g,"-"),
     title:subject+" — "+String(chapter.title||"Science topic").replace(/^Supplementary topic — /,""),
     curriculumContext:"Uganda NCDC Lower Secondary Curriculum • Senior 1 • Integrated General Science. This is a CBE Nexus supplementary concept lesson; check the current NCDC syllabus for exact competence, term and sequence."
    });
   }
  }
  if(integrated.length){uganda["General Science"]=integrated;delete uganda.Biology;delete uganda.Chemistry;delete uganda.Physics;}
 }
 const sa=data["South Africa"]?.levels?.["Grade 10"];
 if(sa){
  if(sa.Biology){sa["Life Sciences"]=(sa.Biology||[]).map(ch=>({...ch,id:"south-africa-life-sciences-"+String(ch.id||ch.title||"topic").toLowerCase().replace(/[^a-z0-9]+/g,"-"),title:String(ch.title||"").replace(/^Supplementary topic — /,""),curriculumContext:"South Africa CAPS • Grade 10 Life Sciences. These CBE Nexus notes are supplementary concept support, not a substitute for the official CAPS Annual Teaching Plan."}));delete sa.Biology;}
  const physical=[...(sa.Chemistry||[]).map(ch=>({...ch,id:"south-africa-physical-sciences-chemistry-"+String(ch.id||ch.title||"topic").toLowerCase().replace(/[^a-z0-9]+/g,"-"),title:"Chemistry: "+String(ch.title||"").replace(/^Supplementary topic — /,""),curriculumContext:"South Africa CAPS • Grade 10 Physical Sciences. Supplementary chemistry concept support; verify the official CAPS content and Annual Teaching Plan."})),...(sa.Physics||[]).map(ch=>({...ch,id:"south-africa-physical-sciences-physics-"+String(ch.id||ch.title||"topic").toLowerCase().replace(/[^a-z0-9]+/g,"-"),title:"Physics: "+String(ch.title||"").replace(/^Supplementary topic — /,""),curriculumContext:"South Africa CAPS • Grade 10 Physical Sciences. Supplementary physics concept support; verify the official CAPS content and Annual Teaching Plan."}))];
  if(physical.length)sa["Physical Sciences"]=physical;
  delete sa.Chemistry;delete sa.Physics;
  data["South Africa"].curriculum="South Africa • CAPS • Grade 10 • Further Education and Training (FET)";
 }
})();
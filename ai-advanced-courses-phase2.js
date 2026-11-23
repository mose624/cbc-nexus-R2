/* CBE Nexus AI Academy — advanced professional course expansion, phase 2. */
(function(){
 const A=window.CBENexusAICourses||{}, E=window.CBENexusAIEnhanced;
 const profiles={
 "ai-productivity-business":{
  caption:"Professional workflow design, content production and business decision-making.",
  images:["photo-1497366754035-f200968a6e72","photo-1455390582262-044cdead277a","photo-1460925895917-afdab827c52f","photo-1556742049-0cfed4f6a45d","photo-1551288049-bebda4e38f71","photo-1521737711867-e3b97375f902"],
  focus:"Design a repeatable productivity workflow that starts with a clear business objective, uses only appropriate information, separates generation from verification, and ends with an accountable human decision.",
  example:"A small education provider wants to answer common course enquiries. First group the 30 most common questions, approve accurate answers and define which cases need a human. Draft responses using approved information only. Test spelling variations, unclear requests, refund questions and complaints. Measure first-response time, answer accuracy, escalation quality and customer satisfaction before launch.",
  safeguards:"Do not let generated content invent prices, guarantees, testimonials, qualifications, legal terms or performance claims. Protect customer records, review marketing claims, label synthetic media where appropriate, and keep a human escalation route for complaints and sensitive requests.",
  project:"Build a one-week content and customer-response workflow for a real or simulated small organisation. Submit the audience profile, approved facts, content calendar, prompt templates, response rules, test cases, quality rubric and a short evaluation of time saved and corrections required."
 },
 "responsible-ai":{
  caption:"Responsible AI practice: human oversight, privacy, fairness and digital citizenship.",
  images:["photo-1516321318423-f06f85e504b3","photo-1563013544-824ae1b704d3","photo-1450101499163-c8848c66ca85","photo-1550751827-4bd374c3f58b","photo-1529101091764-c3526daf38fe","photo-1454165804606-c3d57bc86b40"],
  focus:"Assess an AI use case through its full lifecycle: purpose, affected people, data, model behaviour, deployment context, monitoring, appeal and retirement.",
  example:"A school considers an AI tool to recommend revision activities. Before use, identify the learning purpose and data collected, test recommendations for different learner profiles, check whether the tool makes unsupported assumptions, and ensure teachers can override suggestions. Do not use a recommendation as a high-stakes judgement about a learner.",
  safeguards:"Use data minimisation, approved services, access controls, retention limits, transparency, accessible alternatives and meaningful human review. Never upload identifiable learner or staff information into an unapproved system. Provide a route to challenge errors and stop use when harm cannot be controlled.",
  project:"Complete a responsible-AI impact review for a proposed school or business workflow. Include purpose, stakeholders, data map, risk register, fairness tests, security controls, human approval points, incident response, monitoring indicators and a proceed/redesign/stop decision."
 },
 "build-with-ai":{
  caption:"AI-assisted software development: requirements, prototypes, testing and deployment.",
  images:["photo-1518770660439-4636190af475","photo-1555066931-4365d14bab8c","photo-1555949963-ff9fe0c870eb","photo-1519389950473-47ba0277781c","photo-1461749280684-dccba630e2f6","photo-1498050108023-c5249f4df085"],
  focus:"Treat AI-assisted development as an engineering workflow: specify requirements, inspect generated code, test behaviour, secure data and deploy with rollback and monitoring.",
  example:"A learner wants to build a study planner. Define the user, inputs, outputs and acceptance criteria. Start with a static interface, then add validated task entry, date handling and local persistence. Test empty input, invalid dates, long text, mobile layout and keyboard navigation. Review dependencies and never expose API secrets in browser code.",
  safeguards:"Do not paste private keys, passwords, production database credentials or personal records into prompts. Validate all inputs, enforce authorisation on the server, escape untrusted content, use HTTPS, review dependencies and test failure states. AI-generated code must be reviewed and tested before deployment.",
  project:"Build a small responsive web application or prototype. Deliver a requirements brief, user flow, code, test plan, accessibility checks, security review, deployment instructions, known limitations and a short demonstration."
 }};
 const imagesBase="https://images.unsplash.com/";
 Object.keys(profiles).forEach(slug=>{
  const c=A[slug],p=profiles[slug]; if(!c)return;
  c.priorityAdvancedNotes=true;
  c.visuals=p.images.map((id,i)=>({src:imagesBase+id+"?auto=format&fit=crop&w=1400&q=85",alt:p.caption,caption:p.caption}));
 });
 if(!E||typeof E.makeLongNotes!=="function")return;
 const prior=E.makeLongNotes;
 E.makeLongNotes=function(slug,course,m,level){
  const base=prior(slug,course,m,level);
  const p=profiles[slug]; if(!p)return base;
  const advanced=level==="advanced", intermediate=level==="medium";
  const moduleIndex=course.modules.indexOf(m)+1;
  const sections=[
   ["PROFESSIONAL MODULE BRIEF", "Course: "+course.title+". Module "+moduleIndex+": "+m[0]+". Scope: "+m[1]+". This chapter connects the module outcomes to an applied professional workflow. Treat the supplied course outcomes as the learning specification and use the examples as practice material, not as a substitute for local policy or professional review."],
   ["CORE CONCEPTS AND WORKING METHOD",p.focus+" Begin by documenting the task owner, intended users, desired result, input sources, constraints and the decision that a human must make. Distinguish facts supplied by an authorised source from assumptions, generated suggestions and unresolved questions."],
   ["DETAILED PROFESSIONAL APPLICATION",m[2]+" "+m[3]+" "+m[4]+" Translate these outcomes into observable evidence. Identify what a competent practitioner should be able to produce, explain, test or justify. Record the tools and versions used, the source material, important settings and any limitations that could affect the result."],
   ["WORKED CASE STUDY",p.example],
   ["IMPLEMENTATION WORKFLOW","1. Define the problem and baseline process. 2. Map users, data and permissions. 3. Break the work into small steps. 4. Prepare approved source material and explicit instructions. 5. Generate or build a candidate solution. 6. Test normal, ambiguous, incomplete and exceptional cases. 7. Verify the result independently. 8. Obtain the required human approval. 9. Record outcomes and monitor performance."],
   ["RISK, QUALITY AND GOVERNANCE",p.safeguards+" Create a risk register with risk, cause, affected party, likelihood, impact, preventive control, detection method, owner and escalation route. Reassess risks whenever the tool, data, audience or operating context changes."],
   ["PRACTICAL WORKSHOP","Workshop A — write a one-page brief with objective, audience, constraints and acceptance criteria. Workshop B — create a small prototype or workflow using non-sensitive sample data. Workshop C — test at least five edge cases. Workshop D — document two failures and improve the design. Workshop E — ask a colleague to review the output without telling them which parts were AI-generated, then compare feedback."],
   ["ASSESSMENT RUBRIC","Assess: problem definition (15%); technical or subject accuracy (20%); suitability for intended users (15%); testing and evidence (20%); privacy, security and fairness (15%); documentation and reflection (15%). A high-quality submission explains limitations and shows evidence of human review."],
   ["CAPSTONE PROJECT",p.project],
   ["REFLECTION AND PROFESSIONAL STANDARD","What assumptions did you make? Which output required the most correction? What evidence supports your conclusion? Who could be disadvantaged? What information should never enter this workflow? Which steps require human approval? State one condition under which you would stop using the system."]
  ];
  if(intermediate)sections.push(["INTERMEDIATE EXTENSION","Compare two workflow designs. Evaluate cost, time, reliability, accessibility, data exposure and maintainability. Use a weighted decision matrix and explain why the selected design is appropriate for this context."]);
  if(advanced)sections.push(["ADVANCED EXTENSION","Design an operational evaluation plan with baseline measures, acceptance thresholds, regression tests, monitoring indicators, incident handling and a rollback or shutdown procedure. Include a documented decision log and identify which decisions must remain with an accountable person."]);
  return base+"\n\n"+sections.map(x=>x[0]+"\n"+x[1]).join("\n\n");
 };
})();
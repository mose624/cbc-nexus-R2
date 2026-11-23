/* CBE Nexus AI Academy — specialist course expansion, phase 3. */
(function(){
 const A=window.CBENexusAICourses||{}, E=window.CBENexusAIEnhanced;
 const profiles={
 "chatgpt-mastery":{
  caption:"Advanced ChatGPT workflows for research, analysis, teaching and professional productivity.",
  images:["photo-1677442136019-21780ecad995","photo-1455390582262-044cdead277a","photo-1553877522-43269d4ea984","photo-1460925895917-afdab827c52f","photo-1516321318423-f06f85e504b3","photo-1521737711867-e3b97375f902"],
  focus:"Use ChatGPT as a supervised work partner: define the task, provide relevant context, specify the output, ask for uncertainty to be identified, verify important claims and retain human responsibility. Select the appropriate mode and tools for the task, and never assume a fluent response is necessarily correct.",
  example:"A teacher needs a differentiated revision pack. They provide a non-identifying syllabus excerpt and specify learner level, learning outcomes, language, duration and assessment format. ChatGPT drafts three levels of questions and a marking guide. The teacher checks syllabus alignment, calculations, answer keys, accessibility and cognitive demand, then edits the pack before sharing it.",
  safeguards:"Verify factual, mathematical, legal, medical and policy claims against authoritative sources. Do not upload confidential learner, employee, customer or institutional information without explicit authorisation and an approved data-handling arrangement. Check generated citations independently. Review account settings and organisational policies before using connected tools or sharing GPTs.",
  project:"Create a reusable ChatGPT workflow for a real professional task. Submit the task brief, context pack, prompt sequence, output specification, at least five test cases, verification log, revised final output, privacy assessment and reflection on where human judgement remained essential."
 },
 "gemini-mastery":{
  caption:"Multimodal AI practice: working with text, images, documents and connected productivity workflows.",
  images:["photo-1516321318423-f06f85e504b3","photo-1498050108023-c5249f4df085","photo-1504384308090-c894fdcc538d","photo-1519389950473-47ba0277781c","photo-1454165804606-c3d57bc86b40","photo-1522071820081-009f0129c71c"],
  focus:"Choose a multimodal workflow based on the input and output required. Prepare readable source material, state what the model should inspect, distinguish visible evidence from inference, and validate the result in the original document or source.",
  example:"A project team reviews a set of non-confidential charts and meeting notes. They ask a multimodal assistant to extract chart labels, summarise the supplied notes and identify apparent inconsistencies. The team checks every extracted value against the original chart, corrects OCR or interpretation errors and records which conclusions are supported by the source.",
  safeguards:"Image and document interpretation can miss small text, context, units or important details. Do not treat visual recognition as identity verification or as proof of a person's attributes. Check permissions before uploading files, confirm sharing settings for connected services and verify any generated summary against the original.",
  project:"Design a multimodal research or productivity task using approved sample files. Include an input inventory, prompt and task instructions, extracted information, source-by-source verification, error log, privacy review, final deliverable and a short comparison with a text-only workflow."
 },
 "ai-agents":{
  caption:"AI agent architecture: bounded autonomy, tool permissions, evaluation and human approval.",
  images:["photo-1558494949-ef010cbdcc31","photo-1518770660439-4636190af475","photo-1555949963-ff9fe0c870eb","photo-1519389950473-47ba0277781c","photo-1551288049-bebda4e38f71","photo-1498050108023-c5249f4df085"],
  focus:"An agentic system combines a goal, model-driven decisions, tools, state and an execution loop. Reliable design constrains the task, limits tool access, validates inputs and outputs, records actions, handles failures and requires approval before consequential or irreversible operations.",
  example:"An internal help-desk agent receives a staff question, searches an approved knowledge base and drafts a response. It may retrieve information but cannot change payroll, reset privileged accounts or send external messages without a designated approval. Unknown answers are escalated and every retrieval and proposed action is logged.",
  safeguards:"Apply least privilege, scoped credentials, allow-listed tools, rate limits, timeouts, output validation and action-specific approval. Treat retrieved pages and documents as untrusted data, not instructions. Prevent prompt injection from changing policy. Test duplicate actions, tool outages, malformed responses, permission failures and attempts to access unrelated records.",
  project:"Design a bounded agent for a low-risk task. Provide an architecture diagram, state and tool definitions, permission matrix, normal and adversarial test cases, human approval gates, logging plan, failure recovery, evaluation metrics and a clear shutdown condition."
 },
 "generative-ai":{
  caption:"Generative AI across text, image, audio and video: creation, evaluation and responsible publishing.",
  images:["photo-1545239351-1141bd82e8a6","photo-1686191128892-3b3b1c6a2a8d","photo-1492619375914-88005aa9e8fb","photo-1516035069371-29a1b244cc32","photo-1536240478700-b869070f9279","photo-1516321318423-f06f85e504b3"],
  focus:"Generative systems produce new outputs from learned patterns and user instructions. The practitioner must define a creative brief, select a suitable modality, iterate deliberately, check factual and visual quality, review rights and permissions, and disclose synthetic or AI-assisted media when required.",
  example:"A learning organisation prepares a short science explainer. The team drafts a script, generates a storyboard and creates supporting visuals. A subject expert checks scientific accuracy; an editor checks narration, captions and accessibility; the team confirms rights and licences for all assets and labels synthetic media according to its publishing policy.",
  safeguards:"Do not imitate a real person's voice or likeness without appropriate permission. Check licences, platform terms, attribution and commercial-use conditions. Review generated media for stereotypes, misleading depictions, factual errors and accidental resemblance to protected works. Obtain consent for personal data and disclose synthetic content where law, policy or audience expectations require it.",
  project:"Produce a small multimodal educational or public-information package. Submit the creative brief, prompts, source and asset register, drafts, factual review, accessibility checks, rights and consent review, disclosure statement and final quality checklist."
 },
 "ai-automation":{
  caption:"AI workflow automation with APIs, webhooks, data validation and human-in-the-loop controls.",
  images:["photo-1518770660439-4636190af475","photo-1558494949-ef010cbdcc31","photo-1551288049-bebda4e38f71","photo-1460925895917-afdab827c52f","photo-1555066931-4365d14bab8c","photo-1519389950473-47ba0277781c"],
  focus:"A dependable automation is an explicit sequence of triggers, transformations, decisions and actions. Define schemas and ownership, authenticate securely, validate every boundary, make retries safe, observe execution and provide a human route for exceptions.",
  example:"A training provider receives course enquiries through a form. An automation validates required fields, stores only necessary information, classifies the enquiry and prepares a draft acknowledgement. It checks for duplicate submissions and routes payment disputes or safeguarding concerns to a human. It does not make refunds or send unreviewed promises.",
  safeguards:"Keep API keys and secrets on trusted servers or secret managers, never in public browser code. Use least-privilege tokens, HTTPS, signature verification for webhooks, input validation, idempotency keys, bounded retries and audit logs. Minimise personal data, define retention and deletion rules, and prevent AI output from directly triggering high-impact actions.",
  project:"Build a sandbox automation for a repeated low-risk process. Include a workflow diagram, trigger and payload schema, credential strategy, validation rules, retry and duplicate handling, human escalation, test evidence, monitoring plan and a rollback procedure."
 }};
 const base="https://images.unsplash.com/";
 Object.keys(profiles).forEach(function(slug){
  const c=A[slug],p=profiles[slug]; if(!c)return;
  c.priorityAdvancedNotes=true;
  c.visuals=p.images.map(function(id){return {src:base+id+"?auto=format&fit=crop&w=1400&q=85",alt:p.caption,caption:p.caption};});
 });
 if(!E||typeof E.makeLongNotes!=="function")return;
 const prior=E.makeLongNotes;
 E.makeLongNotes=function(slug,course,m,level){
  const original=prior(slug,course,m,level),p=profiles[slug]; if(!p)return original;
  const idx=course.modules.indexOf(m)+1,advanced=level==="advanced",intermediate=level==="medium";
  const outcomes=Array.isArray(m)?m.slice(2).filter(Boolean).join(" "):"Apply the module concepts to a documented practical task.";
  const sections=[
   ["MODULE OUTCOMES AND PROFESSIONAL CONTEXT","Course: "+course.title+". Module "+idx+": "+m[0]+". Focus: "+m[1]+". Learning outcomes: "+outcomes+" By the end of this module, learners should be able to explain the relevant concepts, select an appropriate method, produce a useful artefact, test it and justify their decisions."],
   ["CONCEPTUAL FRAMEWORK",p.focus+" Start with a clear problem statement. Identify the intended user, task owner, source material, constraints, acceptable output and decision authority. Separate verified facts from assumptions, model-generated suggestions and questions that remain unanswered."],
   ["PROFESSIONAL WORKED EXAMPLE",p.example],
   ["STEP-BY-STEP PRACTICE","Step 1 — write a concise brief and define success. Step 2 — prepare approved, non-sensitive inputs. Step 3 — select the tool or workflow that fits the task. Step 4 — provide precise instructions and an output format. Step 5 — inspect the result against the original inputs. Step 6 — test edge cases and likely failure modes. Step 7 — correct errors and document changes. Step 8 — obtain human approval where required. Step 9 — save evidence and review the outcome."],
   ["QUALITY ASSURANCE AND VERIFICATION","Use a checklist covering factual accuracy, completeness, relevance, clarity, accessibility, consistency and suitability for the intended audience. Verify calculations independently. Open cited sources and confirm that they support the claim. Compare extracted text with the original file. Test whether the workflow behaves safely when information is missing, contradictory or malformed."],
   ["PRIVACY, SECURITY AND RESPONSIBLE USE",p.safeguards+" Record the purpose for processing information, the minimum data required, who can access it, where it is stored and when it will be deleted. Follow applicable law, institutional rules, platform terms and professional standards."],
   ["PRACTICAL LABORATORY","Lab A: create a one-page task brief and acceptance criteria. Lab B: run the workflow on a small sample. Lab C: test at least five normal and edge cases. Lab D: record incorrect, incomplete or unsafe outputs. Lab E: revise the instructions or workflow and repeat the tests. Lab F: ask a peer to review the evidence and explain any unresolved limitations."],
   ["ASSESSMENT RUBRIC","Problem definition and planning — 15%; conceptual understanding — 15%; quality of the produced work — 20%; verification and testing — 20%; privacy, security and responsible practice — 15%; documentation and reflection — 15%. A strong submission provides evidence, identifies limitations and explains when human intervention is necessary."],
   ["CAPSTONE APPLICATION",p.project],
   ["REFLECTION AND EVIDENCE","What was the intended outcome? Which evidence supports the final result? What did the tool get wrong or omit? Which people or groups could be affected? What information should not be shared? What would cause you to pause, escalate or stop the workflow? Keep a brief decision log that records important corrections and approvals."]
  ];
  if(intermediate)sections.push(["INTERMEDIATE EXTENSION","Compare two approaches using a decision matrix. Score accuracy, cost, time, privacy, accessibility, maintainability and user experience. Explain the weighting, identify trade-offs and state what additional evidence would change your decision."]);
  if(advanced)sections.push(["ADVANCED EXTENSION","Design an evaluation and governance plan with baseline measures, acceptance thresholds, regression tests, monitoring indicators, incident response, ownership and rollback or shutdown criteria. Include adversarial tests relevant to the workflow and identify every action that must remain under accountable human control."]);
  return original+"\n\n"+sections.map(function(s){return s[0]+"\n"+s[1];}).join("\n\n");
 };
})();
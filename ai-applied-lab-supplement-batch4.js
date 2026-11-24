/* CBE Nexus AI Academy — Applied Learning Supplement, Batch 4.
   Volume 3 courses 16–20. Six practical learning modules per course.
   Chains prior note extensions and leaves course registry, quiz and payment flows intact. */
(function(){
 const E=window.CBENexusAIEnhanced;
 if(!E||typeof E.makeLongNotes!=="function")return;
 const previous=E.makeLongNotes.bind(E);
 const notes={
"ai-excel":[
`# Applied Module 1: Advanced workbook architecture and data modelling

## Workbook architecture
A reliable workbook separates raw inputs, calculations, reference tables and reports. Keep imported source data unchanged on a clearly named sheet. Put assumptions and lookup tables in controlled areas, and use a separate dashboard for decision-makers.

## Structured tables and named ranges
Convert datasets to Excel Tables so formulas and ranges expand as records are added. Use meaningful table and column names. Named ranges can make important assumptions, such as a tax rate or target score, easier to identify and audit.

## Data model thinking
A row should represent one clearly defined observation. A transaction table may contain transaction ID, date, customer ID, product ID, quantity and unit price. Customer and product details can live in separate lookup tables. Avoid repeating inconsistent descriptive information in every transaction row.

## Worked example
If a sales table contains quantity and unit price, calculate line value with a structured reference such as `=[@Quantity]*[@[Unit Price]]`. Confirm that quantity and price are numeric and that returns or discounts are treated consistently.

## Practical activity
Design a workbook with separate sheets for source transactions, product reference data, calculations and a management dashboard. Write a short data dictionary for each table.`,
`# Applied Module 2: Advanced formulas and dynamic analysis

## Conditional aggregation
SUMIFS, COUNTIFS and AVERAGEIFS allow analysis using multiple criteria. For example:
```
=SUMIFS(Sales[Revenue],Sales[Region],H2,Sales[Month],I2)
=COUNTIFS(Results[Subject],H2,Results[Score],">=50")
```
Check that criteria ranges have matching dimensions and that dates are stored as dates.

## Dynamic arrays
Functions such as FILTER, SORT, UNIQUE and SEQUENCE can create results that expand automatically in supported Excel versions. Dynamic arrays reduce manual copying but require awareness of spill ranges and compatibility.

## Error handling
IFERROR can display a controlled message when a formula fails, but it should not conceal a broken data process. Investigate the underlying error first. Use explicit checks for blank inputs and invalid denominators.

## Worked calculation
If a department has 240 completed records out of 300 eligible records, completion rate is 240/300 = 0.80 = 80%. A formula could use `=IFERROR(Completed/Eligible,0)`, but the report should also flag an eligible count of zero rather than silently implying a true zero rate.

## Practical activity
Build a formula sheet that uses two criteria, a dynamic filtered list and an error check. Test empty, duplicate and boundary cases.`,
`# Applied Module 3: Power Query and repeatable data preparation

## Purpose
Power Query imports and transforms data through recorded steps. It is useful for combining monthly files, changing data types, removing unwanted columns, splitting fields and appending records.

## Repeatable transformation workflow
1. Connect to the approved source.
2. Inspect column names and sample values.
3. Set correct data types.
4. Standardise categories and dates.
5. Remove only confirmed duplicates.
6. Merge or append tables where appropriate.
7. Load the result to a table or data model.
8. Refresh and validate the output.

## Merge versus append
Merge joins tables using matching key fields, similar to a lookup. Append stacks records with compatible columns, such as monthly sales files. A wrong join key can multiply rows or lose matches, so inspect row counts and unmatched records.

## Worked example
Three monthly attendance files share the same columns. Append them into one table, add a month field if missing, standardise learner IDs and compare the combined record count with the sum of the source counts.

## Practical activity
Prepare a repeatable import for three fictional CSV files. Record each transformation and reconcile the final row count.`,
`# Applied Module 4: PivotTables, Power Pivot and business intelligence

## PivotTable design
Place dimensions such as region, month or subject in Rows and Columns. Place measures such as revenue, learner count or average score in Values. Choose Sum, Count or Average deliberately; a default Sum may be inappropriate for a score or percentage.

## Grouping and filters
Group dates by month or quarter where the underlying date field is valid. Use slicers and report filters to help users explore a report without changing the source data.

## Data model relationships
Power Pivot can relate tables through keys. Use unique values on the lookup side and matching foreign keys on the transaction side. Understand one-to-many relationships and avoid ambiguous paths.

## Worked example
A sales report has a transaction table and a product table. Relate ProductID, then analyse revenue by product category and month. Reconcile the total with the original transaction table.

## Practical activity
Create a PivotTable report with at least two dimensions, two measures, a slicer and a short interpretation. Explain how you validated the totals.`,
`# Applied Module 5: Dashboard design, automation and governance

## Dashboard purpose
A dashboard should answer a small set of management questions. Use clearly defined KPIs, meaningful comparisons and concise visualisations. Avoid decorative gauges or excessive colours that distract from the evidence.

## KPI specification
For every KPI, document its name, formula, unit, reporting period, source, owner and limitations. For example, “monthly completion rate” must define completed records and eligible records.

## Automation
Power Query refreshes can reduce repetitive imports. Office Scripts or macros can automate controlled tasks. Test automation on copies, document permissions and ensure a person can recover from failure.

## Governance and protection
Use role-based access, approved storage, version history and backups. Sheet protection helps prevent accidental edits but is not encryption or a complete security control. Do not store passwords in workbooks.

## Practical activity
Create a dashboard wireframe with four KPIs, two charts and a refresh procedure. Add a data owner, review date and validation checklist.`,
`# Applied Module 6: Excel analytics capstone and assessment

## Capstone
Build an end-to-end workbook for a fictional organisation. Include source tables, a data dictionary, Power Query preparation, advanced formulas, a PivotTable or data model, a dashboard and an audit trail. Demonstrate refresh using a second month of sample data.

## Required evidence
- Original source files and preserved raw data.
- Transformation steps and data-quality log.
- Formula explanations and test cases.
- Reconciled totals and documented assumptions.
- Dashboard with KPI definitions.
- Privacy, access and backup controls.

## Assessment — 20 marks
Workbook architecture 3; data preparation 4; formula accuracy 4; analysis model 3; dashboard communication 3; governance and validation 3.

## Review questions
Distinguish merge from append; explain why lookup keys should be unique; state why IFERROR must not hide data problems; identify two dashboard design principles; explain why sheet protection is not a complete security measure.

**Professional standard:** An Excel report is only as reliable as its source data, definitions, transformations and validation. The analyst is accountable for every result shared.`
],
"ai-for-students":[
`# Module 1: AI-supported study skills and learning goals

## Learning with AI
AI can explain concepts, generate practice questions, help plan revision and provide feedback. It should support active learning rather than replace reading, thinking, solving problems or completing assessed work independently.

## Set a measurable learning goal
Use a clear outcome such as “By Friday, I can balance five chemical equations and explain the conservation of atoms” rather than “I will study Chemistry”. Break the goal into short practice sessions and self-tests.

## Active recall and spaced practice
Active recall means trying to retrieve information before looking at notes. Spaced practice revisits material over increasing intervals. AI can generate retrieval questions, but the learner should answer first and then check against reliable notes.

## Worked example
Prompt: “Quiz me on the structure of an atom one question at a time. Wait for my answer, explain errors, and increase difficulty gradually. Do not reveal the answer before I try.” This encourages retrieval instead of passive reading.

## Practical activity
Choose one topic, write three learning outcomes, request a diagnostic quiz and record which concepts need more revision.`,
`# Module 2: Prompting for explanations, examples and feedback

## Give the AI context
A useful study prompt states subject, level, topic, prior knowledge, task and preferred explanation style. Ask the system to define unfamiliar terms and show reasoning steps appropriate to the subject.

## Socratic tutoring
Ask the AI to guide with questions and hints rather than immediately giving a final answer. For mathematics, request one step at a time and verify calculations independently.

## Compare explanations
Request an explanation using a simple analogy, a formal definition and a worked example. Check whether the analogy preserves the important scientific or mathematical relationship.

## Worked example
“Explain ionic bonding for a secondary-school learner. Define electron transfer, show how sodium and chlorine form ions, draw a simple text representation, then give me two questions without answers until I respond.”

## Practical activity
Use the same topic with three prompt styles: direct explanation, Socratic questioning and worked example. Compare which one helps you explain the idea without assistance.`,
`# Module 3: Research, source evaluation and academic integrity

## Research questions
Turn a broad topic into a focused question. Search for primary sources, textbooks, official education materials and reputable scholarly sources. Record author or organisation, title, date and relevant evidence.

## Evaluate sources
Check authority, accuracy, currency, evidence, purpose and relevance. AI-generated references may be incorrect or fabricated; open and verify each source before citing it.

## Academic integrity
Follow school or university rules on AI assistance. Do not submit generated work as your own where prohibited. Cite sources actually consulted, distinguish your own analysis from assistance and retain drafts or notes when required.

## Worked example
If AI states that a particular chemical has a specific boiling point, verify it in a trusted chemistry reference and note the pressure conditions. A value without conditions may be misleading.

## Practical activity
Research one question using three sources. Create a source table and identify one claim that needs further verification.`,
`# Module 4: AI for mathematics, science and problem solving

## Problem-solving routine
Read the problem, list known values, identify the unknown, select a principle or formula, substitute values with units, calculate, and check whether the answer is reasonable.

## Use AI as a coach
Ask it to identify the next step or explain a formula, not simply to provide the answer. Request unit checks and a second method where appropriate. Verify numerical outputs using a calculator, textbook or independent method.

## Worked calculation
A learner travels 150 metres in 30 seconds. Average speed = distance/time = 150/30 = 5 m/s. Check the units: metres divided by seconds gives metres per second.

## Subject-specific caution
In science, check diagrams, symbols, units and experimental conditions. In mathematics, check algebraic transformations and boundary conditions. In humanities, check context and source interpretation.

## Practical activity
Solve three problems without AI first. Then use AI to critique your method. Correct your work in a different colour and explain each correction.`,
`# Module 5: Study planning, digital wellbeing and safe use

## Revision plan
Prioritise topics by importance, difficulty and assessment date. Alternate subjects, schedule short breaks and include practice tests. A plan should be realistic and revised when evidence shows a topic needs more time.

## Digital wellbeing
Avoid constant notifications and multitasking. Use focused study periods and take breaks. Do not allow AI chat to become a substitute for sleep, teacher support or peer discussion.

## Privacy and safety
Do not upload passwords, private school records, another person's personal details or sensitive documents without permission. Use approved tools and follow school policies. Tell a trusted adult or teacher about harmful or disturbing content.

## Verify before relying
AI can sound confident while being wrong. Verify facts, calculations, dates and quotations. For important decisions, ask a qualified teacher or relevant professional.

## Practical activity
Prepare a seven-day revision timetable with active recall, practice questions, breaks and a weekly reflection. Add a checklist for safe and honest AI use.`,
`# Module 6: Student learning portfolio and assessment

## Capstone
Create a digital learning portfolio for one subject topic. Include learning goals, an initial diagnostic result, verified notes, worked problems, AI prompts used, corrections, self-assessment and a final explanation written independently.

## Assessment — 20 marks
Learning goals and planning 3; quality of verified research 4; subject understanding 5; problem-solving evidence 3; academic integrity and reflection 3; clear presentation 2.

## Reflection questions
How did AI help you learn? Which output did you correct? What source verified your key facts? What can you now explain without AI? What will you practise next?

## Knowledge check
Define active recall; explain why a source must be checked; state one safe prompt practice; calculate speed for 120 m in 20 s; explain why generated work must follow academic-integrity rules.

**Suggested answer:** Speed = 6 m/s. Other answers should demonstrate independent understanding and responsible tool use.

**Student standard:** Use AI to become a stronger learner, not to conceal gaps in understanding or misrepresent authorship.`
],
"ai-for-schools":[
`# Module 1: School-wide AI readiness and educational leadership

## What readiness means
AI readiness includes learning goals, leadership, staff capability, infrastructure, safeguarding, privacy, procurement and evaluation. Buying a tool without a clear educational purpose is not an AI strategy.

## Readiness audit
Review connectivity, device access, accessibility needs, data systems, staff confidence, policies and existing teaching priorities. Include learners, teachers, parents, school leaders and relevant support staff.

## Define priority use cases
Start with low-risk tasks such as drafting lesson outlines, generating practice questions for teacher review, translating routine communications and summarising non-sensitive public material. High-impact decisions about admission, discipline, grading or learner support require careful governance and human authority.

## Worked example
A school identifies teacher workload as a priority. It pilots AI-assisted first drafts of lesson resources with teacher verification, while measuring preparation time and resource quality.

## Practical activity
Prepare a school AI readiness checklist and rank five possible use cases by educational value, risk, cost and feasibility.`,
`# Module 2: AI-enhanced teaching, assessment and inclusion

## Teacher-controlled use
Teachers can use AI to brainstorm examples, differentiate reading passages, create draft rubrics and prepare formative questions. They remain responsible for curriculum alignment, factual accuracy and suitability.

## Assessment design
Use varied evidence: oral explanation, practical work, supervised tasks, drafts, reflection and authentic projects. Explain permitted AI assistance and design tasks that reveal learner understanding.

## Inclusion and accessibility
AI may assist with translation, text simplification, caption drafts and alternative explanations. Check translations and adaptations for accuracy, dignity and accessibility. Do not assume a tool works equally well for every language, disability or device.

## Worked example
A teacher asks AI for three versions of a reading passage at different reading levels. The teacher checks that each version preserves the same key scientific concepts and does not remove essential vocabulary.

## Practical activity
Design one lesson with differentiated support, a formative assessment and a human review checklist. Explain how you will know learners achieved the same core outcome.`,
`# Module 3: School policy, acceptable use and academic integrity

## Policy components
A school AI policy should define purpose, approved tools, age and account requirements, data restrictions, acceptable and prohibited use, disclosure, assessment rules, safeguarding, reporting and review.

## Clear classroom rules
State when AI may be used for brainstorming, practice, editing or research, and when independent work is required. Provide examples so learners and families understand the rules.

## Disclosure
A simple disclosure can record the tool, purpose, type of assistance and extent of editing. Requirements should match school or examination-board rules.

## Worked example
A learner submits an essay. The task instructions specify that AI may be used to generate topic questions but not to write the final essay. The learner submits planning notes and a short disclosure of the permitted use.

## Practical activity
Draft a one-page acceptable-use policy for learners and a separate staff guidance note. Include a process for questions and suspected misuse that is fair and educational.`,
`# Module 4: Privacy, safeguarding, procurement and risk management

## Data protection
Use the minimum information needed. Do not enter identifiable learner records, safeguarding reports, health information or confidential staff records into unapproved AI systems. Check vendor terms, data location, retention, access and whether submitted data may be used for training.

## Safeguarding
Establish age-appropriate access, content controls, reporting routes and adult supervision. AI output must not replace a teacher, counsellor or safeguarding lead.

## Procurement questions
Assess educational purpose, accessibility, security, interoperability, total cost, support, contract terms, data processing and exit arrangements. Require a pilot before wide deployment.

## Risk register
Record risk, likelihood, impact, mitigation, owner and review date. Include inaccurate output, bias, privacy breaches, overdependence, outages and unequal access.

## Practical activity
Evaluate a hypothetical AI learning tool using a procurement checklist and create a five-risk register with named responsible roles.`,
`# Module 5: Implementation, staff development and impact measurement

## Phased implementation
A sensible sequence is discovery, policy, pilot, evaluation, improvement and controlled scale-up. Set entry and exit criteria for each phase. Do not expand a pilot solely because users find a tool exciting.

## Staff development
Training should cover prompt design, verification, privacy, bias, accessibility, assessment integrity and classroom practice. Provide continuing support and opportunities to share tested lesson examples.

## Measure educational impact
Use baseline and follow-up evidence such as teacher preparation time, learner participation, quality of feedback, task completion and subject understanding. Use appropriate comparison methods and acknowledge confounding factors.

## Worked example
A pilot reports that teachers save an average of 20 minutes per lesson plan. Also review resource accuracy, teacher workload elsewhere, learner outcomes and any additional editing time before claiming a net benefit.

## Practical activity
Write a term-long pilot plan with objectives, participants, safeguards, training, baseline measures, review dates and stop conditions.`,
`# Module 6: School AI strategy capstone and assessment

## Capstone
Prepare a school AI implementation strategy. Include a readiness audit, three prioritised use cases, policy summary, privacy and safeguarding controls, procurement checklist, staff development plan, pilot timeline, evaluation framework and a communication plan for families.

## Assessment — 20 marks
Readiness and educational rationale 4; policy and integrity 4; privacy and safeguarding 4; implementation and staff support 4; impact evaluation 4.

## Review questions
Why should a school pilot before scaling? Name four policy areas; explain data minimisation; give two measures of educational impact; explain why AI should not autonomously make disciplinary decisions.

**Professional standard:** School leadership remains accountable for educational quality, learner welfare, lawful data handling and equitable access. AI tools are not substitutes for professional judgement.`
],
"ai-cybersecurity":[
`# Module 1: Cybersecurity foundations and threat awareness

## Core concepts
Cybersecurity protects systems, networks, applications and information against unauthorised access, disruption, alteration or disclosure. The confidentiality, integrity and availability model helps organise security goals.

## Threats and vulnerabilities
Threats include phishing, malware, credential theft, social engineering, misconfiguration, unpatched software and insider misuse. A vulnerability is a weakness that a threat may exploit. Risk depends on likelihood and impact.

## Security roles
Users should protect credentials and report suspicious activity. Administrators manage access and updates. Security teams monitor and respond. Leaders provide resources and governance.

## Worked example
A staff member receives an unexpected message asking them to sign in through a shortened link. The message creates urgency and uses an unfamiliar domain. The safe response is to avoid the link, verify through a known channel and report the message.

## Practical activity
Create a threat-awareness poster explaining phishing, malware, weak passwords and the correct reporting route. Do not test security on systems without explicit authorisation.`,
`# Module 2: Identity, passwords, devices and network protection

## Identity and access
Use unique accounts, least privilege and multi-factor authentication where available. Grant only the permissions needed for a role and remove access promptly when it is no longer required.

## Password management
Use long, unique passwords and a reputable password manager. Never share passwords or reuse a work password on unrelated sites. Store recovery methods securely.

## Device security
Enable supported automatic updates, screen locks, encryption and approved endpoint protection. Install software only from trusted sources. Report lost devices immediately.

## Network basics
Use secure Wi-Fi, change default router credentials, apply firmware updates and avoid exposing administrative interfaces publicly. Public Wi-Fi requires additional caution; use approved secure access methods.

## Practical activity
Complete a personal or organisational security checklist. Identify five improvements and assign a priority and owner. Never publish passwords or secret keys in the checklist.`,
`# Module 3: Phishing, social engineering and safe communication

## Social engineering
Attackers may impersonate colleagues, suppliers, banks or technology support. They exploit urgency, authority, fear, curiosity or a desire to help.

## Warning signs
Look for unexpected attachments, mismatched domains, unusual payment instructions, requests for credentials, spelling or tone changes and pressure to bypass normal approvals. Sophisticated messages may contain no obvious spelling errors.

## Verification procedure
Use a known phone number or trusted channel to confirm unusual requests. Do not reply using contact details supplied in a suspicious message. Follow the organisation's incident reporting procedure.

## AI-enabled scams
Generative AI can produce convincing messages, voice clones and altered images. Verify identity through independent channels and use dual approval for sensitive financial or account changes.

## Practical activity
Review fictional sample messages and identify risk indicators. Write a safe verification response and escalation note. Do not send simulated phishing to real people without formal authorisation and safeguards.`,
`# Module 4: Data protection, backups and incident response

## Data classification
Classify information according to sensitivity and business need. Apply stronger controls to personal, financial, confidential and regulated data. Collect and retain only what is necessary.

## Backups
Maintain protected backups, separate them from everyday accounts where possible and test restoration. A backup that has never been restored is not proven reliable.

## Incident response
A basic response cycle is prepare, identify, contain, eradicate, recover and learn. Preserve relevant evidence, record times and actions, and notify the responsible security or privacy team. Follow legal and organisational reporting obligations.

## Worked example
A laptop containing work files is lost. The response includes immediate reporting, account/session revocation, device-management actions, assessment of data exposure and documented follow-up. Do not delay reporting while trying to investigate alone.

## Practical activity
Create an incident contact sheet and a backup test plan. Include roles, escalation timeframes and recovery verification.`,
`# Module 5: Secure AI use, application security and risk controls

## AI-specific security concerns
Do not paste secrets, API keys, private records or confidential code into unapproved tools. Treat model output and uploaded files as untrusted until reviewed. AI-generated code must be tested and security-reviewed.

## Application security
Use secure authentication, input validation, dependency updates, access controls and logging. Protect API keys using approved secret storage and rotate exposed credentials.

## Prompt injection awareness
Instructions embedded in untrusted documents or web content may attempt to manipulate an AI system. Separate trusted instructions from retrieved content, restrict tool permissions and require human approval for consequential actions.

## Risk-based controls
Prioritise controls according to asset value, exposure, threat likelihood and potential impact. No single control eliminates all risk; layered defences reduce the chance and consequences of failure.

## Practical activity
Review a fictional AI workflow that reads uploaded documents and drafts email replies. Identify data risks, prompt-injection paths, permissions and human approval points.`,
`# Module 6: Cybersecurity improvement capstone and assessment

## Capstone
Prepare a security improvement plan for a small school or business. Include an asset list, simple threat model, access-control plan, phishing awareness activity, backup and recovery procedure, incident response steps and safe-AI-use rules.

## Assessment — 20 marks
Threat identification 4; identity and device controls 4; data and backup protection 4; incident response 4; AI and application security 4.

## Review questions
Explain confidentiality, integrity and availability; distinguish a threat from a vulnerability; name two phishing warning signs; why must backups be tested? What should a user do after losing a work device?

**Safety boundary:** This course teaches defensive awareness and authorised security practice. Do not attempt unauthorised access, credential theft, malware deployment or testing against systems without written permission.`
],
"ai-design":[
`# Module 1: Design thinking, users and visual communication

## Design as problem solving
Design combines user needs, communication goals, constraints and visual decisions. A good design is not simply attractive; it helps a specific audience understand or complete a task.

## Understand the user
Identify audience, context, device, accessibility needs, prior knowledge and likely barriers. Use interviews or usability observation where possible. Avoid designing around stereotypes or unsupported assumptions.

## Design brief
A brief records objective, audience, key message, deliverables, dimensions, platform, brand rules, accessibility requirements, deadline and approval owner.

## Visual hierarchy
Use scale, spacing, alignment, contrast and grouping to guide attention. A clear hierarchy makes it easier to identify the title, main information and next action.

## Practical activity
Write a design brief for a course poster or learning infographic. Sketch three layout alternatives and explain which one best supports the audience's task.`,
`# Module 2: Colour, typography, layout and accessibility

## Colour systems
Choose a limited palette with a clear role for primary, secondary and accent colours. Check contrast between text and background. Do not communicate status using colour alone; add labels, icons or patterns.

## Typography
Use readable typefaces, consistent heading levels and suitable line lengths. Avoid excessive font styles. Body text should remain comfortable on small screens.

## Layout and spacing
Use alignment, repetition, proximity and whitespace to create order. Group related information and separate unrelated content. Keep important actions visually distinct without making every element compete for attention.

## Accessibility checks
Provide alternative text for meaningful images, captions for video, descriptive links, logical reading order and keyboard-accessible controls. Avoid text embedded only in images when selectable text is possible.

## Practical activity
Redesign a cluttered one-page notice. Produce a desktop and mobile version and test contrast, reading order and text size.`,
`# Module 3: AI-assisted ideation, image generation and asset selection

## Generate concepts
Use AI to explore multiple creative directions. Specify the audience, purpose, subject, composition, mood, palette, aspect ratio and constraints. Request variations rather than accepting the first output.

## Review generated assets
Check factual accuracy, distorted details, unwanted text, representation, brand fit and visual quality. AI images may contain inaccurate diagrams, logos or lettering; replace or correct these elements before publication.

## Rights and provenance
Use assets with appropriate licences or permission. Keep records of source, licence, creator and required attribution. Check the terms of the generation service and do not imitate a living artist's distinctive style on request.

## Worked example
For a science infographic, generate a background concept but create the chemical labels and equations separately using verified text and vector shapes. This reduces the risk of incorrect AI-rendered scientific notation.

## Practical activity
Prepare three prompt variations for one design brief. Compare them against a checklist for relevance, accuracy, accessibility and rights.`,
`# Module 4: Design systems, branding and reusable components

## Brand consistency
A brand system defines logo use, colour palette, typography, imagery, tone and spacing. Consistency helps audiences recognise materials across a website, document and social channel.

## Reusable components
Create standard title blocks, buttons, cards, callouts, diagram labels and footer elements. Reuse components while allowing appropriate changes for content and screen size.

## Responsive design
Design for different widths and input methods. Prioritise essential information, allow text to wrap and ensure controls remain usable on touchscreens. Do not rely on a desktop screenshot as proof of mobile quality.

## Version control
Name files consistently, retain approved originals and document major revisions. Keep editable source files so future updates do not require rebuilding from a flattened image.

## Practical activity
Create a mini design system with colour tokens, heading styles, body text, button styles and two reusable content cards.`,
`# Module 5: Design critique, prototyping and user testing

## Prototype before final production
A prototype demonstrates structure and interaction without requiring every final asset. Use low-fidelity sketches first, then refine high-priority areas based on feedback.

## Give useful critique
Evaluate whether the design meets the brief, supports the user task, communicates clearly, is accessible and works on the target device. Critique the work rather than the designer.

## Usability testing
Give participants realistic tasks and observe where they hesitate or make mistakes. Ask neutral questions. Record issues, severity and evidence rather than relying only on preference statements.

## Iterate
Prioritise fixes by user impact and effort. Re-test important changes. Document what changed and why.

## Practical activity
Test a prototype with three people if feasible. Record task completion, confusion points and suggested improvements. Protect participants' privacy and obtain permission for feedback records.`,
`# Module 6: Professional design portfolio capstone

## Capstone
Create a coordinated design set for a real educational or small-business campaign: a design brief, poster, social graphic, infographic or diagram, responsive web card and a mini style guide. Include editable source files and an evidence-based critique.

## Assessment — 20 marks
Audience and brief 3; hierarchy and visual quality 4; typography, colour and accessibility 4; responsible AI and asset rights 3; responsive consistency 3; testing and reflection 3.

## Review questions
What is visual hierarchy? Why should contrast be checked? Name three details for an AI image prompt; explain why source files matter; distinguish a prototype from a finished product.

**Professional standard:** The designer is responsible for accuracy, accessibility, permissions, brand consistency and the final files delivered to the client.`
]
 };
 E.makeLongNotes=function(course,module){
   const base=previous(course,module);
   const slug=course&&course.slug;
   const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
   const extra=notes[slug]&&notes[slug][index];
   return extra?(base||"")+"\n\n---\n\n"+extra:base;
 };
})();
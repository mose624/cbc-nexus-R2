/* CBE Nexus AI Academy — Applied Learning Supplement, Batch 5.
   Courses 21–25: six applied extension modules per course.
   Adds to Volume 4 notes without replacing the existing course registry. */
(function(){
 const E=window.CBENexusAIEnhanced;
 if(!E||typeof E.makeLongNotes!=="function")return;
 const previous=E.makeLongNotes.bind(E);
 const notes={
"ai-video":[
`# Applied Module 1: Production planning, briefs and storyboards

## From idea to production brief
A video brief converts an idea into a production plan. Specify the audience, purpose, key message, learning or communication outcome, platform, duration, format, accessibility requirements, budget, deadline and approval owner. A clear brief prevents expensive editing of footage that does not meet the objective.

## Storyboarding
A storyboard is a sequence of visual frames describing each scene. For every frame, record shot type, action, on-screen text, narration, sound and approximate duration. A shot list translates the storyboard into practical filming tasks.

## Example: a science explainer
For a three-minute video on water purification, plan an opening problem, a labelled process diagram, a demonstration of filtration, a discussion of limitations and a short recap. Do not imply that filtration removes every dissolved contaminant.

## Production schedule
Allow time for research, script approval, asset permissions, recording, editing, captions, review and revisions. Include contingency time for equipment or connectivity problems.

## Practical assignment
Prepare a one-page brief and a six-frame storyboard for a lesson video. State the target learner, one measurable outcome and how you will check whether the video achieved it.`,
`# Applied Module 2: Camera, lighting, framing and sound

## Framing and shot types
Wide shots establish a setting; medium shots show actions and interaction; close-ups reveal detail. Keep the subject's position and eye line consistent across connected shots. Avoid distracting backgrounds and unnecessary camera movement.

## Lighting
Use soft, even light where possible. Position the main light so the subject is visible without harsh shadows. Avoid placing a bright window directly behind a speaker unless a silhouette is intended. Check exposure and white balance before recording.

## Audio quality
Clear audio is often more important than elaborate visuals. Record in a quiet room, keep the microphone at a consistent distance, monitor levels and avoid clipping. Record a short test and listen through headphones.

## Continuity
Check clothing, props, screen content, lighting and camera position between takes. Record room tone to help smooth audio edits. Label files immediately and keep a second copy.

## Practical assignment
Record a 30-second explanation using a wide, medium and close-up shot. Compare sound clarity, framing and lighting, then write three improvements for a second take.`,
`# Applied Module 3: Editing workflow, pacing and visual storytelling

## Organise before editing
Create folders for footage, audio, graphics, project files, exports and licensed assets. Rename clips descriptively. Preserve original recordings and work from copies.

## Editing sequence
Build a rough cut that follows the approved story. Remove mistakes and unnecessary pauses, then refine pacing, add supporting visuals, balance audio, add titles and captions, and review the complete video.

## Transitions and effects
Use cuts and simple transitions to support meaning. Excessive effects, animations and background music can distract from learning. Keep text on screen long enough to read and avoid covering important visual information.

## Export settings
Choose resolution, frame rate, aspect ratio and file format based on the recording and destination platform. Export a short test first. Inspect the exported file rather than assuming the timeline preview represents the final result.

## Practical assignment
Edit a one-minute tutorial from at least four clips. Include a title, two supporting labels, clean audio and a closing recap. Submit the project file as well as the export.`,
`# Applied Module 4: AI-assisted scripts, captions, voice and visual assets

## Using AI in pre-production
AI can help brainstorm story angles, draft scripts, create shot lists and adapt explanations for different audiences. Provide subject level, duration, tone, learning objective and factual constraints. Review every statement against reliable sources.

## Voice and synthetic media
If using generated voices or likenesses, check service terms, consent and disclosure requirements. Never imitate a real person's voice or appearance deceptively. Use only voices and assets you have permission to use.

## Captions and accessibility
Generate draft captions, then correct names, technical vocabulary, punctuation and timing. Captions should identify meaningful non-speech audio when relevant. Provide a transcript where useful and ensure key information is not conveyed by colour or sound alone.

## Scientific and educational accuracy
AI-generated diagrams may contain wrong labels, structures or processes. Build critical labels with editable text and verify diagrams against trusted subject references.

## Practical assignment
Use an AI assistant to draft a script and captions for a short lesson. Submit the prompt, verified script, corrected caption file and a list of changes made after human review.`,
`# Applied Module 5: Publishing, optimisation, rights and analytics

## Prepare for publication
Write an accurate title, concise description, chapters or timestamps where useful, relevant keywords and a clear thumbnail. Metadata should describe the actual video rather than promise unrelated content.

## Rights and permissions
Obtain permission for music, images, footage, fonts and identifiable people where required. Keep a record of licences and releases. Do not assume that material found online is free to reuse.

## Platform adaptation
Check aspect ratio, file size, caption support and audience settings. A vertical short and a widescreen lesson may require different framing and pacing. Preview on a mobile device before publishing.

## Measure performance
Views alone do not prove learning. Review completion, audience retention, feedback, quiz results and whether learners can apply the taught skill. Interpret analytics in context and protect viewer privacy.

## Practical assignment
Prepare a publication pack with title, description, thumbnail concept, captions, rights checklist and two measures of educational effectiveness.`,
`# Applied Module 6: Video production capstone and assessment

## Capstone project
Produce a three-to-five-minute educational or professional video. Submit the brief, storyboard, script, asset register, edited video, captions, transcript and reflection. Demonstrate a clear beginning, logically ordered explanation and meaningful conclusion.

## Quality assurance checklist
Verify facts, pronunciation, captions, audio levels, visual continuity, export quality, permissions, privacy and mobile playback. Confirm that the final video meets its intended learning outcome.

## Assessment — 20 marks
Brief and audience definition 3; script and storyboard 4; production and sound 3; editing and visual communication 4; accessibility and rights 3; evaluation and reflection 3.

## Review questions
Why is a storyboard useful? Name two ways to improve audio. Why should captions be reviewed manually? What evidence is more useful than view count alone?

**Professional standard:** The producer is accountable for accuracy, consent, accessibility, permissions and the final published file.`
],
"ai-research":[
`# Applied Module 1: Research questions, objectives and study design

## From topic to researchable question
A broad topic such as “AI in education” must be narrowed by population, context, issue and time. A focused question identifies what evidence is needed and what can reasonably be investigated.

## Objectives and scope
Write one overall aim and specific objectives that are observable. Define key terms, inclusion criteria, geographic or institutional boundaries and practical limitations before collecting data.

## Research design
Choose a design that fits the question: descriptive, exploratory, correlational, experimental, qualitative, quantitative or mixed methods. A method should not be selected simply because a tool makes it convenient.

## Worked example
Question: “How do weekly AI-supported quizzes relate to learner confidence in one secondary-school science class?” Define confidence, the period, participants, quiz exposure and evidence source. A small class study cannot establish a universal causal effect.

## Practical assignment
Write a research problem, one research question, one aim, three objectives and a short justification of the proposed design.`,
`# Applied Module 2: Literature searching and source management

## Search strategy
Break a research question into concepts and synonyms. Combine terms with AND, OR and quotation marks where supported. Search scholarly databases, institutional repositories, official statistics and relevant professional sources.

## Screening sources
Check author expertise, publication venue, methods, date, evidence, conflicts of interest and relevance. Read beyond abstracts before relying on a study. Distinguish peer-reviewed research from commentary and marketing material.

## Literature matrix
Record citation details, research question, design, sample, findings, limitations and relevance. A matrix helps compare studies rather than producing a sequence of disconnected summaries.

## AI-assisted searching
AI may suggest keywords or themes, but generated references and summaries must be verified against the original publication. Never cite a paper you have not located and checked.

## Practical assignment
Find five relevant sources for your question. Create a literature matrix and explain which source provides the strongest evidence and why.`,
`# Applied Module 3: Data collection, ethics and research quality

## Data collection methods
Surveys, interviews, observations, experiments and document analysis each produce different forms of evidence. Choose instruments that map directly to the research objectives and pilot them before full use.

## Ethics
Obtain appropriate approval and informed consent. Explain purpose, voluntary participation, risks, confidentiality and withdrawal arrangements. Apply additional safeguards when research involves children or vulnerable participants.

## Data minimisation
Collect only necessary information. Remove direct identifiers where possible, restrict access and use approved storage. Anonymisation is difficult when combinations of details can identify a person.

## Research quality
Quantitative work considers validity, reliability, sampling and measurement error. Qualitative work considers credibility, reflexivity, transparency and the fit between evidence and interpretation.

## Practical assignment
Draft a participant information sheet and a short survey or interview guide. Identify possible bias, privacy risks and how the pilot will improve the instrument.`,
`# Applied Module 4: Analysis, synthesis and interpretation

## Quantitative analysis
Start with data cleaning and descriptive statistics. Check missing values, outliers, coding and denominator definitions. Select statistical tests only after considering measurement scale, assumptions, sample size and research design.

## Qualitative analysis
Read transcripts carefully, develop codes, group codes into themes and keep evidence excerpts linked to each interpretation. Avoid selecting only quotations that support an expected conclusion.

## Synthesis
Compare findings across sources, identify agreement and disagreement, assess methodological differences and explain gaps. Synthesis is more than listing what each author said.

## AI as an analysis assistant
AI may help draft code definitions or organise non-sensitive text, but the researcher must check the original data, protect confidentiality and validate interpretations. Do not upload identifiable participant data to unapproved services.

## Practical assignment
Analyse a small fictional dataset. Produce a table or theme map, explain two findings and identify at least two limitations.`,
`# Applied Module 5: Academic writing, citations and responsible AI

## Structure
A research report commonly includes title, abstract, introduction, literature review, methods, results, discussion, conclusion, references and appendices. Follow the required institutional or journal format.

## Argument and evidence
Each paragraph should make a clear point, support it with evidence and explain its relevance. Distinguish findings from interpretation and acknowledge contrary evidence.

## Citation practice
Use the required style consistently. Verify author names, publication year, title, journal, volume, issue, pages and DOI where available. A reference list must correspond to sources cited in the text.

## Responsible AI disclosure
Follow institutional rules. Disclose assistance where required, do not fabricate data or references, and remain responsible for the submitted work. AI-generated prose must be checked for unsupported claims and accidental plagiarism.

## Practical assignment
Write a 700-word mini literature review using verified sources. Include a transparent note describing any AI assistance permitted by your institution.`,
`# Applied Module 6: Research report capstone and assessment

## Capstone
Complete a concise research proposal or report. Include a focused question, rationale, literature matrix, justified methods, ethical safeguards, analysis plan, limitations, timeline and verified references.

## Assessment — 20 marks
Research question and objectives 3; literature quality and synthesis 4; method and ethics 4; analysis and interpretation 4; academic writing and citations 3; responsible AI disclosure 2.

## Review questions
What makes a question researchable? Distinguish a primary from a secondary source; why pilot an instrument? What is the purpose of a literature matrix? Why must generated references be verified?

**Research standard:** Transparency, evidence, ethical conduct and reproducibility are more important than producing a confident-sounding conclusion.`
],
"ai-career":[
`# Applied Module 1: Career direction, skills mapping and labour-market research

## Career clarity
A career plan connects interests, strengths, values, qualifications and realistic opportunities. Separate immediate employment goals from longer-term development goals.

## Skills inventory
Record technical, transferable and interpersonal skills with evidence. Replace unsupported claims such as “excellent communicator” with examples of presentations, reports, customer support or team coordination.

## Labour-market research
Compare job descriptions, required qualifications, tools, experience, location, salary information where reliable and application deadlines. Use several sources and distinguish verified vacancies from suspicious listings.

## AI-assisted gap analysis
Ask AI to compare a job description with a skills inventory you are permitted to share. Remove private details and verify every inferred skill gap. AI cannot guarantee that an employer will shortlist an applicant.

## Practical assignment
Choose a target role, collect three current job descriptions and create a skills matrix showing evidence, gaps and a realistic development action for each gap.`,
`# Applied Module 2: CV architecture, achievement writing and ATS awareness

## CV structure
Use clear sections: contact details, professional profile, key skills, experience, education, certifications and relevant projects. Adapt the order to career stage and local employer expectations.

## Evidence-based achievements
Use action, task, method and result. Quantify outcomes only when accurate and explain the context. Do not invent numbers, job titles, qualifications or responsibilities.

## ATS readability
Use standard headings, readable fonts and simple layouts. Avoid placing essential information only in images, complex tables or decorative graphics. Match relevant terms from the vacancy naturally and truthfully.

## AI-assisted tailoring
Give AI the vacancy and a truthful skills/experience record. Ask it to identify relevant evidence and suggest clearer wording. Review every edit and preserve the meaning of your actual experience.

## Practical assignment
Create a targeted CV for one role. Prepare a before-and-after achievement statement and a checklist verifying dates, qualifications, contact details and factual accuracy.`,
`# Applied Module 3: Cover letters, applications and professional communication

## Cover letter purpose
A cover letter explains why the role and organisation are relevant, and connects selected evidence to the employer's needs. It should complement rather than repeat the entire CV.

## Application workflow
Follow the requested file format, naming convention, document limits and submission channel. Keep a tracker of employer, role, date, deadline, documents, contact and follow-up.

## Professional email
Use a specific subject, polite greeting, concise purpose, relevant attachment reference and clear closing. Check recipient details and attachments before sending.

## AI assistance
AI can help draft a letter or improve clarity, but generic claims and fabricated company knowledge weaken an application. Verify the organisation's work and personalise with genuine evidence.

## Practical assignment
Write a tailored cover letter and application email for a verified vacancy. Check that each claim is supported by your CV and that the instructions are followed.`,
`# Applied Module 4: Interview preparation and workplace communication

## Interview research
Understand the role, organisation, likely responsibilities and current priorities. Prepare questions that demonstrate thoughtful interest rather than asking for information already stated in the advert.

## Structured answers
Use STAR—Situation, Task, Action, Result—to organise examples. Focus on your own contribution while acknowledging teamwork. For technical questions, explain assumptions and reasoning.

## AI mock interviews
Ask an AI tool to act as an interviewer for a specified role and ask one question at a time. Practise aloud, request feedback against clear criteria and verify that suggested answers remain authentic.

## Remote interview readiness
Test audio, camera, lighting and connectivity. Choose a quiet setting, protect confidential information on screen and have a backup contact method.

## Practical assignment
Prepare six interview examples covering problem-solving, teamwork, communication, learning, conflict and achievement. Record one practice response and evaluate clarity and evidence.`,
`# Applied Module 5: Career branding, networking and lifelong learning

## Professional profile
A professional profile should communicate role focus, relevant skills and credible evidence. Keep public information accurate and consistent with your CV.

## Networking
Build professional relationships through useful conversations, communities, alumni, conferences and thoughtful online engagement. Avoid mass messages that make unsupported requests.

## Portfolio evidence
For suitable roles, showcase projects, lesson plans, writing samples, designs or code that you are authorised to share. Remove confidential employer or client information.

## Continuous development
Identify skills likely to change in your field. Choose credible courses, practise in projects and document outcomes. A certificate is useful when it represents real learning and can be verified.

## Practical assignment
Prepare a short professional biography, a portfolio outline and a 90-day development plan with three measurable milestones.`,
`# Applied Module 6: Job-search strategy capstone and assessment

## Capstone
Create a complete application pack for one genuine target role: job-analysis matrix, tailored CV, cover letter, application email, interview preparation sheet, professional profile and follow-up tracker.

## Safety and integrity
Verify the employer and vacancy through official channels. Never pay an unverified recruiter for a guaranteed job, share passwords or provide unnecessary sensitive information. Be truthful about qualifications and work eligibility.

## Assessment — 20 marks
Career research 3; skills evidence 3; CV quality and accuracy 4; tailored application 3; interview preparation 3; professional branding and safe job search 4.

## Review questions
What is an evidence-based achievement? Why use standard CV headings? Explain STAR; name two ways to verify a vacancy; why must AI-generated CV claims be checked?

**Professional standard:** AI may improve presentation and preparation, but the candidate remains responsible for truthful applications and professional conduct.`
],
"computer-digital-literacy":[
`# Applied Module 1: Computer systems, files and operating-system skills

## Computer components
A computer system combines hardware, software, data and users. The processor executes instructions, memory supports active work, storage retains files and input/output devices enable interaction.

## Operating-system tasks
Learners should be able to sign in securely, manage windows, connect approved devices, adjust accessibility settings, install approved updates and shut down safely.

## File management
Use meaningful folder names, consistent file naming and appropriate formats. Understand the difference between local storage, removable media and cloud storage. Keep working files organised by project and date.

## Troubleshooting routine
Describe the problem, note recent changes, check power and connections, read error messages, restart only when safe, consult approved help and record the resolution. Do not open electrical equipment or bypass security controls.

## Practical assignment
Create a folder structure for a school project. Save a document, spreadsheet and image using consistent names, then locate, copy and safely back up each file.`,
`# Applied Module 2: Word processing, documents and professional formatting

## Document structure
Use headings, paragraphs, lists, page breaks and consistent styles. Styles support navigation, accessibility and automatic tables of contents. Avoid formatting every heading manually.

## Page layout
Set margins, page size, orientation and spacing for the intended document. Use headers and footers for useful details such as document title and page number, not unnecessary decoration.

## Tables and images
Use tables for genuinely tabular information. Add descriptive alternative text to meaningful images and keep captions near the relevant content. Ensure documents remain readable when printed or viewed on mobile.

## Review tools
Use spellcheck, comments and tracked changes appropriately. Confirm that suggested corrections do not alter technical terms or intended meaning.

## Practical assignment
Prepare a two-page report with title, headings, numbered steps, a small table, page numbers and a reference section. Check its reading order and print preview.`,
`# Applied Module 3: Spreadsheets, data handling and presentations

## Spreadsheet foundations
A spreadsheet stores information in rows and columns. Use one header row, consistent data types and one observation per row. Avoid merged cells inside datasets intended for sorting or analysis.

## Formula basics
Use formulas for repeatable calculations. Example: if quantity is in B2 and unit price in C2, line total is `=B2*C2`. Verify the result with a manual calculation and format values with appropriate units.

## Presentations
Build slides around one main idea each. Use readable text, meaningful charts and consistent layouts. A chart should have a title, labelled axes and a source where relevant.

## Data integrity
Do not treat a spreadsheet as a secure database. Restrict access, keep backups and avoid storing sensitive information in unapproved files.

## Practical assignment
Create a simple monthly budget spreadsheet with totals and a chart, then prepare three slides explaining the main findings.`,
`# Applied Module 4: Internet, email, cloud collaboration and digital citizenship

## Web literacy
Use descriptive search terms, compare sources and inspect the domain, author, date and evidence. A high search ranking does not guarantee accuracy.

## Email practice
Use clear subjects, concise messages and appropriate recipients. Understand To, Cc and Bcc. Check attachments and avoid opening unexpected links or files.

## Cloud collaboration
Use approved shared folders, sensible permissions and version history. Distinguish viewing, commenting and editing access. Avoid public sharing links for confidential material.

## Digital citizenship
Communicate respectfully, consider permanence of public posts, respect copyright and protect other people's privacy. Report harassment, impersonation and harmful content through appropriate channels.

## Practical assignment
Create a shared project folder with least-privilege access, draft a professional email and evaluate two websites for credibility.`,
`# Applied Module 5: Cyber safety, privacy, accessibility and troubleshooting

## Account security
Use unique passwords, multi-factor authentication and screen locks. Never share verification codes. Report suspected account compromise promptly.

## Privacy and scams
Recognise phishing, fake support messages, fraudulent downloads and impersonation. Verify requests using trusted contact details. Share personal information only when necessary and through approved channels.

## Accessibility
Use captions, readable contrast, keyboard navigation, descriptive links, headings and alternative text. Learn built-in accessibility tools such as screen magnification and speech input.

## Troubleshooting
Check whether the issue affects one file, one device or the whole network. Record error text, test one change at a time and avoid downloading unknown “fix” utilities.

## Practical assignment
Prepare a digital safety checklist for a learner or family. Include account protection, backup, privacy settings, accessibility and a clear incident-reporting contact.`,
`# Applied Module 6: Digital literacy capstone and assessment

## Capstone
Complete a digital project using a word-processed report, spreadsheet, presentation, shared folder and professional email. Demonstrate safe account practices, accessible formatting and organised file management.

## Assessment — 20 marks
Computer and file management 3; document production 3; spreadsheet accuracy 4; presentation and communication 3; internet and collaboration 3; safety, privacy and accessibility 4.

## Review questions
Name four main computer-system elements; why use styles in a document? Calculate 6 items at 250 each; distinguish Cc from Bcc; state two signs of phishing; explain least-privilege sharing.

**Digital competence standard:** A capable user can create, organise, evaluate, communicate and protect information—not merely operate a device.`
],
"data-analysis-excel-powerbi":[
`# Applied Module 1: Analytical thinking, data questions and measurement

## Start with a decision
Data analysis begins with a question that matters. Identify who will use the result, what decision it informs, the unit of analysis, time period and definitions of key measures.

## Data types
Categorical data describe groups; numerical data represent counts or measurements. Dates, identifiers, percentages and currency require correct interpretation. An ID is not a quantity even when it contains digits.

## Data quality
Check completeness, validity, consistency, uniqueness and timeliness. Document missing values and outliers instead of deleting them automatically. Confirm the source and collection process.

## Worked example
A school asks whether attendance improved. Define attendance rate as attended learner-days divided by possible learner-days, specify the term and treatment of authorised absence, then compare like periods.

## Practical assignment
Write three analytical questions for a school or small business. For each, define the measure, required fields, data source and one limitation.`,
`# Applied Module 2: Data cleaning, transformation and integration

## Cleaning sequence
Preserve raw data, inspect structure, standardise labels, correct data types, handle duplicates and missing values, validate ranges and document every change. Never change source values without a traceable rule.

## Combining data
Join tables using a documented key. Confirm key uniqueness on the lookup side and inspect unmatched records. Append files only when their columns represent compatible fields.

## Power Query workflow
Import, profile, transform, validate and load. Use repeatable steps and refresh tests. Record row counts before and after major transformations.

## Worked example
A sales export stores dates as text and prices with currency symbols. Convert dates to a valid date type, parse numeric amounts, standardise product IDs and reconcile the total with the original export.

## Practical assignment
Prepare two fictional CSV files for analysis. Submit a cleaning log, transformation steps and a reconciliation table showing source and final record counts.`,
`# Applied Module 3: Descriptive statistics and analytical reasoning

## Measures of centre
Mean is sensitive to extreme values; median is often more robust for skewed data; mode identifies the most frequent value. Choose a measure based on the distribution and question.

## Measures of spread
Range, interquartile range, variance and standard deviation describe variability in different ways. Averages without spread can conceal important differences between groups.

## Worked calculation
For values 4, 6, 6, 8 and 11, mean = 35/5 = 7; median = 6; mode = 6; range = 11 − 4 = 7. The difference between mean and median reflects the influence of the higher value.

## Correlation and causation
Correlation describes association, not proof that one variable caused another. Consider confounding variables, selection effects, measurement quality and study design.

## Practical assignment
Analyse a small dataset, calculate suitable summary statistics and write a paragraph that distinguishes what the data show from what they cannot establish.`,
`# Applied Module 4: Power BI data modelling and visualisation

## Model structure
A star schema commonly uses a fact table containing events or transactions and dimension tables describing entities such as date, product or location. Use stable keys and clear relationships.

## Measures and calculated columns
Measures calculate results in the filter context of a report; calculated columns add row-level values to a table. Choose based on the analytical need and understand how filter context affects results.

## Visual selection
Use bars to compare categories, lines for time trends, scatter plots for relationships and tables for detailed values. Avoid misleading axes, unnecessary 3D effects and overloaded dashboards.

## Dashboard interaction
Slicers, filters and drill-through can help users explore data. Label filters clearly and ensure interactions do not produce confusing or hidden changes to totals.

## Practical assignment
Build a simple Power BI model from a fact table and two dimensions. Create three visuals, two measures and a short explanation of the relationships.`,
`# Applied Module 5: Communicating insights, governance and refresh

## Insight communication
A useful insight states the finding, evidence, implication and recommended next step. Separate observation from interpretation and disclose uncertainty or data limitations.

## Dashboard governance
Document metric definitions, source systems, refresh frequency, report owner and access permissions. Restrict sensitive rows and columns and follow organisational privacy requirements.

## Refresh and reliability
Test refresh credentials, source availability, transformation errors and row counts. Maintain a change log and a process for notifying users when definitions or data sources change.

## Avoid misleading reports
Show denominators, time periods and units. Do not compare groups with different definitions without explaining the difference. Do not infer causation from a descriptive chart.

## Practical assignment
Prepare a one-page dashboard handover note covering audience, metrics, source, refresh, access, limitations and escalation contact.`,
`# Applied Module 6: Data analytics capstone and assessment

## Capstone
Complete an analysis from raw data to recommendation. Submit a question and metric definitions, raw and cleaned data, transformation log, summary statistics, Power BI model, dashboard, validation evidence and a concise decision brief.

## Assessment — 20 marks
Analytical question and definitions 3; data preparation 4; statistical reasoning 3; data model and measures 4; visualisation and communication 3; governance and validation 3.

## Review questions
Why preserve raw data? Distinguish mean and median; why is correlation not causation? What is the role of a fact table? Name three items in a dashboard handover note.

**Analyst standard:** Trustworthy analysis makes its data, assumptions, calculations, limitations and intended decisions transparent.`
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
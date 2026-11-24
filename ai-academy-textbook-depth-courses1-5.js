/* CBE Nexus AI Academy — Textbook depth extension, Courses 1–5.
   Adds course- and module-specific teaching material after existing notes.
   Existing catalogue, module order, quiz engine, diagrams, certificates and payment
   flows are not modified. */
(function(){
 const E=window.CBENexusAIEnhanced;
 if(!E||typeof E.makeLongNotes!=="function") return;
 const previous=E.makeLongNotes.bind(E);
 const addenda={
 "ai-foundations":[
`## Module 1 extension: What artificial intelligence is and is not

Artificial intelligence is a broad field concerned with building computational systems that perform tasks commonly associated with human intelligence, such as recognising patterns, processing language, making predictions, planning and supporting decisions. The term does not describe one single technology. A rule-based expert system, a statistical classifier, a speech recogniser and a generative language model use different approaches and have different strengths and failure modes.

Distinguish AI from automation. Automation follows a defined workflow; it may use no learning at all. Machine learning is a family of methods in which a system learns patterns from data or feedback. Deep learning uses multi-layer neural networks. Generative AI produces new content such as text, images, audio, video or code from learned patterns and user instructions. These categories overlap, but they are not synonyms.

A system can produce fluent language without possessing human understanding, intention or reliable factual knowledge. Evaluate it by its observable performance on a defined task, not by how human-like its response sounds. Ask what data it uses, what objective it was optimised for, where it fails and who is accountable for its output.

**Worked classification:** A school rule that automatically sends a reminder when attendance is below a fixed threshold is rule-based automation. A model trained on historical records to estimate the likelihood of absence is machine learning. A conversational assistant that drafts a parent communication is generative AI. Each requires different testing and oversight.

Practical task: classify five digital tools you encounter. For each, state its input, output, task, likely technology category, benefit, limitation and the human role required.`,
`## Module 2 extension: Data, algorithms and model learning

Data provides examples or signals from which many AI systems learn. An algorithm is a defined procedure for processing inputs and producing outputs. A model is the learned or configured system produced through a development process. The quality of a model depends not only on algorithm choice but also on data relevance, measurement quality, coverage, labels, objectives and evaluation.

In supervised learning, examples contain input features and target labels. A model learns a mapping that can predict labels or numerical values for new examples. Classification predicts categories, such as whether a message is likely spam. Regression estimates a numerical quantity, such as expected delivery time. Unsupervised learning explores structure without a supplied target label; clustering is one example. Reinforcement learning concerns actions and feedback in an environment, often framed through rewards.

Separate training, validation and test data. Training data fits model parameters. Validation data supports model selection and tuning. Test data provides a final estimate of performance on data not used during development. Repeatedly tuning against the test set leaks information and makes the final evaluation overly optimistic.

Overfitting occurs when a model learns accidental details of training examples and performs poorly on new cases. Underfitting occurs when the model is too limited to capture important patterns. A useful model must generalise to the intended real-world setting.

Practical task: use a small, synthetic labelled dataset. Identify features and target, describe a reasonable split, and explain why a random split might be inappropriate for time-ordered data. Do not train a model on personal records without lawful authority and approved safeguards.`,
`## Module 3 extension: Generative AI and large language models

Generative systems produce outputs by learning statistical structure from large collections of examples. Large language models process text as sequences of tokens and generate likely continuations conditioned on the prompt and context. They can summarise, transform, classify, explain and draft, but generated content can be incomplete, biased or fabricated.

A language model's response is influenced by the wording of the prompt, the context supplied, system constraints, training and post-training processes, and sampling settings. A confident tone is not evidence of correctness. The model may not know whether a statement is current, may misunderstand an ambiguous request or may provide a plausible but nonexistent reference.

Use retrieval and source verification when factual accuracy matters. Ask for claims to be separated from assumptions, then check important claims against primary or authoritative sources. For numerical tasks, reproduce calculations with a calculator or spreadsheet. For code, run tests in a safe environment and inspect the result. For legal, medical, financial or high-impact educational matters, seek qualified human review.

A good generative workflow includes a clear purpose, appropriate data, a bounded prompt, review criteria, verification, editing and disclosure where required. Avoid placing confidential, identifying or sensitive information into consumer services unless the service and institutional policy explicitly permit it.

Practical task: ask a model to explain a scientific concept at two levels. Check the technical claims against a trusted textbook or official source. Record one accurate explanation, one omission and one statement that needed correction.`,
`## Module 4 extension: Evaluating AI quality and performance

Evaluation begins with the task and its consequences. Accuracy alone may be insufficient. For a classifier, examine precision, recall, false-positive and false-negative rates, and the costs of each error. For a generative system, assess factuality, relevance, completeness, clarity, safety, consistency, accessibility and usefulness to the intended audience.

A benchmark is only informative if it resembles the actual use case. A model that performs well on a public test may fail on local languages, specialist terminology, noisy inputs or a population not represented in the evaluation data. Check subgroup performance where lawful and appropriate, and avoid drawing conclusions from tiny samples.

Human evaluation needs a rubric and independent reviewers for consequential tasks. Define what a good answer looks like before reviewing outputs. Blind review can reduce the influence of brand or model expectations. Keep examples of failures and corrections so the team can improve prompts, processes or model selection.

Monitor performance after deployment. Data, user behaviour, model versions and operating conditions can change. Establish thresholds for escalation, human review and suspension. A system should be withdrawn or restricted if it causes unacceptable harm or cannot be monitored adequately.

Practical task: design a ten-item evaluation set for a low-risk AI assistant. Include ordinary requests, ambiguous requests, edge cases and a request it should refuse or redirect. Write a scoring rubric and explain why the test set cannot prove universal reliability.`,
`## Module 5 extension: AI applications across sectors

AI applications should be selected by identifying a genuine problem and comparing the proposed system with simpler alternatives. In education, AI may support practice questions, language assistance, lesson drafting and accessibility, but it should not replace teacher judgement or make unreviewed high-impact decisions about learners. In agriculture, image recognition and forecasting may support crop monitoring, but local validation and field expertise remain essential. In health, AI tools may assist professionals, but clinical use requires rigorous validation, regulation and accountable oversight.

In business, AI can support customer-service triage, demand forecasting, document processing and quality inspection. Organisations should measure actual outcomes such as error rates, response time, user satisfaction and total cost, not just the number of tasks automated. A faster process is not an improvement if it increases errors or excludes users.

Before adoption, map the workflow. Identify users, affected people, data flows, failure points, fallback procedures, accessibility requirements, procurement obligations and ongoing costs. Consider whether a deterministic rule, conventional software or a redesigned process would solve the problem more safely.

Practical task: choose one local problem and compare three options: manual improvement, conventional automation and AI assistance. Score each against cost, reliability, inclusion, privacy, maintainability and expected benefit. Explain which option you recommend and what evidence would change your decision.`,
`## Module 6 extension: Responsible AI project and professional practice

A responsible AI project starts with a documented purpose and a clear boundary. Define what the system may do, what it must not do, who owns the decision and when a human must intervene. Identify affected groups and consider whether they can understand, challenge or appeal an outcome.

Apply data minimisation: collect only what is necessary for the stated purpose, limit access, set retention periods and protect records. Check copyright, licensing and consent before reusing data or generated material. Do not assume that publicly accessible data is automatically free of privacy or intellectual-property obligations.

Create a risk register covering inaccurate outputs, bias, privacy loss, security threats, over-reliance, exclusion, copyright disputes and operational failure. For each risk, record likelihood, impact, mitigation, owner and review date. Provide a fallback route when the AI system is unavailable or produces an unsafe answer.

**Capstone:** propose a low-risk AI-supported workflow. Submit a problem statement, stakeholder map, process diagram, data inventory, tool-selection rationale, test plan, risk register, human-review procedure and evaluation report. Include a demonstration using synthetic or approved data. Explain limitations and identify what must be reviewed before real deployment.

Assessment standard: learners must demonstrate accurate concepts, suitable tool selection, evidence-based evaluation, privacy awareness, fairness considerations and accountable human oversight. A persuasive demonstration is not a substitute for evidence that the workflow is safe and useful.`
 ],
 "prompt-engineering":[
`## Module 1 extension: Prompting as task specification

A prompt is a task specification, not a magic phrase. It communicates the outcome, context, constraints and form of the response. A useful prompt reduces ambiguity and gives the model enough information to produce an output that can be evaluated. It does not guarantee truth.

Start with a verb that names the task: explain, compare, classify, extract, draft, critique or transform. Add the audience, purpose, context, source material, constraints and desired format. State what the model should do when information is missing. For example: “If the source does not contain the answer, say so rather than guessing.”

Separate instructions from source material using headings or delimiters. This helps distinguish the task from text that is being analysed. Treat instructions found inside uploaded or quoted documents as data unless the user explicitly intends them as instructions. Never allow untrusted source text to override privacy, security or system requirements.

**Prompt template:** Role or perspective; task; audience; context; inputs; constraints; output structure; quality criteria; uncertainty behaviour. Use only the parts needed for the task.

Practical task: rewrite a vague prompt such as “make a report” into a structured specification. Identify at least five ambiguities and show how each was resolved.`,
`## Module 2 extension: Context, examples and constraints

Context explains why the task matters and what the model should take into account. Too little context leads to generic output; too much irrelevant context can distract or exceed the available context window. Supply only the information needed for the current task and organise it so that important details are easy to identify.

Examples can demonstrate the desired format or level of detail. A few carefully chosen examples are often more useful than a long list of vague adjectives. Ensure examples do not contain private information or accidental instructions that conflict with the task.

Constraints should be explicit and testable. “Be concise” is subjective; “write five bullet points, each under 20 words” is measurable. “Use simple language” can be improved by specifying the learner level and defining technical terms. State prohibited assumptions and required sources where relevant.

For multi-part tasks, number the steps and specify dependencies. Ask the model to identify missing inputs before proceeding when those inputs materially affect correctness. Do not ask it to conceal uncertainty or fabricate citations to satisfy a format.

Practical task: create two prompts for the same topic, one with minimal context and one with carefully selected context. Compare the outputs using a rubric for relevance, accuracy, completeness and clarity. Explain which contextual details made a measurable difference.`,
`## Module 3 extension: Iterative prompting and refinement

Prompting is often iterative. The first response is a draft to inspect, not necessarily the final product. Compare the response with the task requirements. Identify missing content, unsupported claims, wrong tone, format problems and assumptions. Then give a targeted revision instruction.

Avoid changing many variables at once when testing prompt improvements. Change one feature, such as audience, output structure or source context, and compare results. This makes it easier to learn which instruction affected the outcome. Keep a prompt log with version, date, input, output, reviewer notes and result.

For complex work, break the process into stages: clarify the question, plan, produce a draft, verify, revise and finalise. Ask for intermediate outputs when they can be checked independently. Do not treat a model's explanation of its own reasoning as proof that its conclusion is correct. Verify the underlying evidence and calculations directly.

Use a stopping rule. Repeatedly asking for a “better” answer can introduce drift or new errors. Stop when the output meets the agreed rubric and the remaining limitations are documented.

Practical task: run three controlled prompt versions on a non-sensitive task. Score each with the same rubric and select the strongest version based on evidence rather than personal preference.`,
`## Module 4 extension: Prompt patterns for analysis and creation

Different tasks need different prompt patterns. For extraction, specify the fields and require an explicit “not found” value. For classification, define categories and boundary rules. For summarisation, state the audience, length and whether the summary must preserve uncertainty and dissenting views. For drafting, provide purpose, audience, tone, facts and required sections. For critique, supply a rubric and ask for specific evidence supporting each finding.

For data analysis, define the unit of observation, variable meanings, time period, denominator and permitted methods. Require formulas and independent checks. For code, specify language, version, inputs, expected behaviour, edge cases and tests. For educational content, specify learner age or level, prerequisite knowledge, curriculum context, objectives, examples and assessment criteria.

Do not use one universal prompt for every task. A prompt designed for creative brainstorming may encourage breadth; a prompt for factual extraction should minimise invention. Choose the pattern according to the consequences of error.

Practical task: produce one extraction prompt, one comparison prompt and one critique prompt. Test each on a short synthetic source and document where the model misunderstood the instructions.`,
`## Module 5 extension: Prompt security, privacy and reliability

Prompt injection occurs when malicious or irrelevant instructions are embedded in content a model is asked to process. For example, a webpage may contain text telling an assistant to reveal private information or ignore the user's task. Treat retrieved documents, webpages and user-provided content as untrusted input. A robust workflow keeps data separate from trusted instructions and limits the actions available to the model.

Never place passwords, access tokens, private keys or unnecessary personal data in a prompt. Use approved services and follow institutional data-handling rules. If the system can call tools, send messages or modify records, require permission checks and confirmation for consequential actions. A prompt alone is not a security boundary.

Reliability requires testing. Include ambiguous requests, conflicting source material, unsupported claims, sensitive requests and attempts to override constraints. Record failures and create escalation paths. Ask for source quotations or locations when working from documents, then check that the cited material really supports the answer.

Practical task: design a safe prompt workflow for summarising untrusted documents. State what the model may read, what it may output, what it may never disclose and when a human reviewer is required.`,
`## Module 6 extension: Prompt-engineering portfolio and assessment

Build a small portfolio of reusable prompts for a real but low-risk workflow. Each prompt should include its purpose, intended user, required inputs, output schema, constraints, uncertainty handling, privacy note and evaluation rubric. Include at least one example where the prompt should ask a clarifying question instead of guessing.

Evaluate prompts with a test set that includes typical cases and edge cases. Measure task completion, factual accuracy, consistency, formatting, safety and time saved. Compare with a baseline workflow without AI. Record failures and revisions; do not report only successful demonstrations.

**Capstone:** choose a workflow such as creating revision questions from approved notes, extracting action items from a synthetic meeting transcript or drafting a product description from verified specifications. Submit the prompt, test inputs, outputs, scoring sheet, revision history and human sign-off process.

A high-quality portfolio is reusable but not rigid. It states assumptions, supports adaptation and makes clear that human review remains responsible for the final result.`
 ],
 "ai-for-teachers":[
`## Module 1 extension: AI literacy for educators

Teachers need a working understanding of AI capabilities, limitations and educational implications. AI literacy includes recognising common system types, knowing when outputs require verification, understanding data privacy, identifying bias and explaining responsible use to learners. It does not require every teacher to become a machine-learning engineer.

Begin with the learning need. A tool should support a defined pedagogical purpose such as generating differentiated practice, drafting a lesson outline or providing language scaffolds. It should not be adopted simply because it is new. Compare the proposed use with teacher-created materials, existing accessibility tools and collaborative learning approaches.

The teacher remains responsible for curriculum alignment, factual accuracy, safeguarding, inclusion and professional judgement. Generated material may contain errors, inappropriate examples or assumptions that do not fit the learners' context. Review all content before classroom use and adapt it to local curriculum, language and available resources.

Practical task: select one lesson objective and identify a suitable AI-supported activity. Explain the educational value, the learner action, the teacher's role, the verification method and a non-AI alternative.`,
`## Module 2 extension: Lesson planning and curriculum alignment

A lesson plan should begin with curriculum outcomes and observable learning objectives. An AI assistant can help draft activities, examples and questions, but the teacher must verify alignment with the required syllabus, sequence, learner level and assessment expectations. A generated plan may sound coherent while omitting prerequisite knowledge or overloading the lesson.

Use measurable verbs such as identify, explain, calculate, compare, justify or design. Match the activity and assessment to the objective. If the objective is to interpret a graph, learners need to work with a graph; a lecture about graphs alone does not demonstrate the intended skill.

Prompt with subject, grade or level, curriculum, lesson duration, prior knowledge, resources, language needs, class context and learning objectives. Ask for a realistic sequence with timings, teacher actions, learner actions, formative checks, differentiation and materials. Require the model to flag any curriculum claims that need checking against an official document.

Practical task: generate a draft lesson for one objective, compare it with the official curriculum and revise it. Annotate every change and explain why the teacher's judgement was needed.`,
`## Module 3 extension: Differentiation, inclusion and accessibility

Differentiation responds to learner readiness, interests, language, disability-related access needs and the support required to achieve shared learning goals. AI may help produce alternative explanations, vocabulary supports, graduated practice and multiple ways to demonstrate understanding. These are drafts that require teacher review and learner feedback.

Avoid fixed labels that define a learner by a perceived ability or diagnosis. Do not infer disability, language proficiency or family circumstances from incomplete data. Use respectful, strengths-based language. Ensure adaptations preserve the intended learning objective while removing unnecessary barriers.

Accessibility includes readable formatting, clear instructions, meaningful image descriptions, captions or transcripts where appropriate, keyboard access and alternatives to colour-only information. A generated worksheet may inadvertently exclude learners through dense text, unfamiliar cultural references or inaccessible diagrams.

Practical task: adapt one synthetic lesson resource for three different access needs without lowering the core learning objective. Ask a colleague or learner representative to review the result where appropriate. Document what changed and how learning will be assessed fairly.`,
`## Module 4 extension: Assessment, feedback and academic integrity

AI can help draft question banks, exemplars, marking criteria and feedback sentence starters. The teacher must check curriculum alignment, accuracy, fairness, difficulty and mark allocation. Questions should test the intended knowledge and skills, not merely the ability to imitate a model answer.

Use a range of assessment evidence: observation, discussion, practical performance, written work, retrieval practice and learner reflection. AI-generated feedback should be specific, actionable and respectful. It should identify what the learner did well, the next improvement and an opportunity to practise. Do not upload identifiable learner work to an unapproved service.

Academic integrity policies should explain permitted and prohibited assistance, disclosure expectations and how learners can demonstrate their own understanding. Avoid relying solely on AI-detection scores to accuse a learner; such tools can be unreliable and should not be treated as proof of misconduct.

Practical task: develop a short assessment with a marking rubric and feedback guide. Verify each answer and mark allocation. Explain how the assessment gives learners an opportunity to show independent understanding.`,
`## Module 5 extension: Classroom management, safeguarding and school policy

Before using AI with learners, establish age-appropriate access, supervision, privacy safeguards, acceptable-use rules and procedures for harmful or inaccurate outputs. Follow school policy and applicable law. Check account requirements, data retention, sharing settings and whether learner data is used to improve a service.

Never ask a general-purpose model to act as a safeguarding authority or make a final decision about a learner at risk. Follow established reporting and child-protection procedures. Do not place sensitive disclosures into a tool unless the school has explicitly approved that workflow and safeguards.

A school policy should define approved tools, prohibited data, staff responsibilities, learner expectations, parental communication where required, review processes, incident reporting and procurement checks. Policies need periodic review as tools and risks change.

Practical task: create a one-page classroom AI agreement with clear examples of acceptable use, unacceptable use, verification, disclosure and how to report a concern. Review it for age-appropriate language.`,
`## Module 6 extension: Teacher capstone and professional reflection

Design an AI-supported teaching sequence for a specific learning objective. Include curriculum mapping, lesson plan, learner activity, differentiated resource, assessment, feedback approach, accessibility review, privacy assessment and a non-AI fallback. Demonstrate the workflow with synthetic or approved content.

Evaluate educational value rather than novelty. Collect appropriate evidence such as learner work samples with identifying details removed, completion data, teacher observations or learner feedback. Compare the result with the original approach and identify limitations. Do not claim improved learning based only on satisfaction or faster preparation.

**Capstone rubric (100 marks):** curriculum alignment 15; pedagogical quality 15; accuracy and subject review 15; inclusion and accessibility 15; assessment and feedback 10; privacy and safeguarding 15; evaluation and reflection 10; clarity and reproducibility 5.

A professional submission explains what the teacher retained, changed or rejected from AI output and why. The central principle is that AI can assist teaching work, but the teacher remains accountable for the learning environment and decisions.`
 ],
 "ai-productivity-business":[
`## Module 1 extension: Finding valuable productivity opportunities

Productivity is not simply producing more output. A useful improvement increases value while maintaining quality, safety and staff wellbeing. Start by mapping a workflow from request to completion. Identify repeated tasks, delays, rework, hand-offs, approval points and sources of error. Ask the people doing the work where the real friction occurs.

Classify tasks by frequency, effort, variability, sensitivity and consequence of error. AI may be suitable for drafting, summarising or classifying low-risk material. It may be unsuitable where the task requires confidential judgement, legal authority or a decision that materially affects a person. Some problems are better solved by clarifying a process or using ordinary automation.

Estimate the full cost: subscriptions, integration, training, review time, security, maintenance and the cost of failures. A tool that saves ten minutes but requires fifteen minutes of checking is not a productivity gain.

Practical task: map one routine workflow and identify one low-risk step that could be assisted by AI. Establish a baseline for time and quality before testing a new method.`,
`## Module 2 extension: Writing, communication and document workflows

AI can help create first drafts, adapt tone, summarise approved material and convert notes into structured documents. It should not invent business facts, commitments, prices, policy statements or legal terms. Supply verified source information and clearly distinguish mandatory wording from editable content.

For email and customer communication, define the audience, purpose, tone, key facts, action required and response deadline. Check names, dates, attachments, promises and sensitive details before sending. For reports, provide the reporting period, definitions, source data and intended decision. Keep evidence and interpretation separate.

Create templates for recurring work but review them periodically. A template can become misleading when policy or product details change. Use version control and an owner for every important document.

Practical task: transform synthetic meeting notes into an action log with task, owner, deadline and unresolved question. Compare the output against the source and ensure no action or commitment was invented.`,
`## Module 3 extension: Research, customer insight and market analysis

AI can help organise research questions, classify feedback and summarise supplied material. It cannot turn a small or biased sample into a representative survey. Define the target population, sampling method, collection period and limitations. Distinguish customer comments from measured behaviour and verified market facts.

When researching competitors, use current primary sources where possible: official product pages, published reports, regulatory filings and documented pricing. Record the source and access date. AI-generated citations must be checked; a plausible title or link may be fabricated or outdated.

For customer feedback, remove personal identifiers where possible and use approved systems. Preserve the original wording when coding qualitative responses, and document the categories used. Avoid interpreting sentiment as a complete measure of satisfaction or using automated labels as the sole basis for customer treatment.

Practical task: analyse a synthetic set of customer comments. Create a transparent coding scheme, classify examples, review ambiguous cases manually and report themes alongside sample size and limitations.`,
`## Module 4 extension: Spreadsheet and operational automation

AI may suggest formulas, scripts or workflow steps for repetitive office processes. Before applying them, define the inputs, expected outputs, permissions, exception cases and rollback plan. Test with synthetic records and compare results with a manual baseline.

Use least privilege: a workflow should have only the access required for its task. Separate test and production environments. Protect credentials and secrets; never paste them into prompts or source files. Log important actions and provide a human approval step before external messages, payments, deletions or changes to official records.

Automation should handle exceptions safely. If a required field is missing, a payment status is uncertain or a record does not match, the system should stop and escalate rather than guess. Build duplicate prevention and recovery procedures where relevant.

Practical task: design a low-risk workflow that receives a synthetic request, checks required fields, drafts a response and routes it to a human for approval. Document failure handling and access controls.`,
`## Module 5 extension: Measuring return, risk and change adoption

Evaluate an AI workflow using a baseline and a defined observation period. Measures may include time per task, error rate, rework, completion rate, customer experience, accessibility and total cost. Record whether the workload shifted to reviewers rather than disappeared. Consider both direct and indirect effects.

Return on investment compares measurable benefits with total costs, but not every important outcome is easily monetised. Include qualitative impacts such as staff confidence, fairness and service quality. Do not attribute all changes to AI if staffing, demand or policy changed at the same time.

Successful adoption requires communication, training, clear ownership and a feedback route. Involve affected staff early. Explain what the system does and does not do. Provide a route to report errors and pause the workflow if harm emerges.

Practical task: prepare a simple business case with assumptions, costs, expected benefits, risks, pilot measures and a decision threshold for continuing or stopping.`,
`## Module 6 extension: Business productivity capstone

Select one low-risk business process and create an AI-assisted prototype using synthetic or approved data. Submit the current process map, problem statement, proposed workflow, tool-selection rationale, prompt or configuration, human approval point, test cases, risk register and evaluation plan.

Run a small pilot only with appropriate authorisation. Compare quality and total time with the baseline. Record failures, reviewer effort and user feedback. Explain whether the process should be adopted, revised or rejected. Include a rollback plan and an owner responsible for monitoring it.

**Capstone rubric (100 marks):** problem definition 10; workflow design 15; quality of AI use 15; verification and exception handling 15; privacy and security 15; measurement and business case 15; change management 5; communication and reflection 10.

A credible business case is honest about uncertainty. It does not promise that AI will eliminate jobs or guarantee savings. It explains where the tool adds value, what human work remains and how the organisation will remain accountable.`
 ],
 "responsible-ai":[
`## Module 1 extension: Ethical foundations and human rights

Responsible AI considers how systems affect people, communities and institutions throughout design, procurement, deployment and retirement. Core concerns include human dignity, autonomy, fairness, privacy, safety, transparency, accessibility, accountability and environmental impact. These principles must be translated into operational requirements; a statement of values alone does not prevent harm.

Begin with affected people, not only the organisation buying the tool. Identify who benefits, who bears risk, who may be excluded and who can challenge an outcome. Consider power differences and whether people have a meaningful choice. A system can be technically accurate on average and still cause unfair outcomes for a particular group.

Ethical review is contextual. A low-risk tool that suggests headings for a public newsletter is different from a system that ranks applicants, predicts learner performance or supports access to essential services. The higher the impact, the stronger the evidence, governance, transparency and human oversight required.

Practical task: map stakeholders for a hypothetical AI service. For each group, list potential benefits, harms, information needs and routes for feedback or appeal.`,
`## Module 2 extension: Bias, fairness and inclusion

Bias can enter through historical data, measurement choices, labels, sampling, model design, deployment conditions and human interpretation. Historical data may reflect unequal access or past discrimination. Labels may encode subjective judgements. A proxy variable may reproduce a sensitive characteristic even when that characteristic is omitted.

Fairness has multiple definitions, and they may conflict in real settings. The appropriate evaluation depends on the task, context, law and affected groups. Do not claim a system is “unbiased” because one metric looks similar across groups. Examine error types, data coverage, accessibility, selection effects and the consequences of mistakes.

Mitigation may include improving data quality, changing the task, adding representative evaluation, removing inappropriate features, redesigning a workflow, providing human review or deciding not to deploy. Human review is not automatically fair; reviewers need training, clear criteria and authority to override a system.

Practical task: inspect a synthetic decision dataset for missing groups, inconsistent labels and unequal error consequences. Propose mitigations and explain what evidence would be needed before deployment.`,
`## Module 3 extension: Privacy, data protection and security

Privacy protection begins with purpose limitation and data minimisation. Collect only information needed for a legitimate purpose, restrict access, protect data in transit and at rest, set retention periods and securely dispose of records when no longer needed. De-identification reduces risk but does not guarantee anonymity, especially when datasets can be linked.

Understand the data lifecycle: collection, storage, access, processing, sharing, retention, deletion and incident response. Identify the organisation's role, applicable legal requirements and the service provider's terms. Do not assume that entering information into an AI interface keeps it confidential or prevents retention.

Security risks include prompt injection, data leakage, malicious files, insecure integrations, excessive permissions and compromised credentials. Use approved services, strong authentication, least privilege, monitoring and incident procedures. Never place secrets in prompts or public repositories.

Practical task: draw a data-flow diagram for a hypothetical AI assistant. Mark personal data, external services, access points, retention and deletion. Identify three threats and proportionate controls.`,
`## Module 4 extension: Transparency, explainability and accountability

Transparency means providing people with relevant information about the system's role, limitations and use. It does not require exposing every technical detail, but it should not mislead users about whether they are interacting with AI or how an automated output influences a decision.

Explainability should be appropriate to the audience and consequence. A user may need to know which factors influenced a recommendation, what evidence was considered, how uncertain the output is and how to challenge an error. A technical explanation that users cannot understand is not meaningful transparency.

Accountability requires named owners, documented decisions, audit trails, monitoring, incident reporting and routes for redress. If a vendor supplies the model, the deploying organisation still needs to understand its responsibilities. Contracts should address data handling, security, performance, change notification, service continuity and exit arrangements.

Practical task: draft a user-facing notice for a hypothetical AI-supported service. State the purpose, role of AI, human contact, limitations, data handling summary and complaint or appeal route.`,
`## Module 5 extension: Governance, impact assessment and procurement

Governance defines who may approve, use, monitor and retire AI systems. Establish an inventory of systems, risk tiers, approval gates, documentation requirements, staff training and review cycles. Assign owners for business purpose, data protection, security, model evaluation and operational monitoring.

An impact assessment should describe the proposed use, affected people, data sources, alternatives, expected benefits, foreseeable harms, mitigations, residual risks and decision to proceed or stop. Involve relevant experts and affected communities where appropriate. Reassess when the model, data, purpose or operating environment changes.

Procurement should examine provider capability, independent evidence, security controls, privacy terms, accessibility, intellectual property, subcontractors, incident response, portability and termination. A product demonstration is not sufficient evidence of suitability. Pilot in a controlled environment before broader use.

Practical task: complete a short impact assessment and procurement checklist for a fictional AI tool. Identify unresolved questions that would block approval.`,
`## Module 6 extension: Responsible AI audit and capstone

Conduct a structured review of a hypothetical or approved AI workflow. Define the system boundary, intended purpose, users, affected groups, data flows, model role, human decisions and foreseeable failure modes. Examine fairness, privacy, security, transparency, accessibility, reliability and environmental considerations.

Test ordinary and edge cases. Include cases where information is missing, contradictory or outside the system's intended scope. Record observed outputs, severity, reproducibility and corrective action. Do not test against real people or live systems without authorisation.

**Capstone deliverables:** system description; stakeholder map; data-flow diagram; risk register; fairness and accessibility review; privacy and security controls; user notice; human-oversight procedure; test report; incident and appeal process; and a reasoned go/no-go recommendation.

**Rubric (100 marks):** scope and stakeholder analysis 10; risk identification 15; privacy and security 15; fairness and inclusion 15; transparency and accountability 15; testing and evidence 15; governance and mitigation 10; communication 5.

A responsible outcome may be to redesign, restrict or reject a proposed system. Professional judgement includes recognising when AI should not be used.`
 ]
 };
 E.makeLongNotes=function(slug,course,module,level){
   const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
   const additions=addenda[slug];
   if(additions&&index>=0&&index<additions.length){
     const tier=String(level||"basic").toLowerCase();
     const extension=tier==="advanced"?"\n\n### Advanced professional extension\nPrepare an evidence-backed implementation or evaluation protocol. Define acceptance criteria, governance ownership, edge cases, monitoring indicators, escalation thresholds and an audit trail. Explain what evidence would justify pausing, changing or retiring the approach.":tier==="medium"?"\n\n### Applied practice\nComplete a small exercise using synthetic or approved material. Document assumptions, test an edge case, verify the result independently and explain one limitation. Ask a colleague to critique the output against explicit criteria.":"";
     return previous(slug,course,module,level)+"\n\n"+additions[index]+extension;
   }
   return previous(slug,course,module,level);
 };
})();
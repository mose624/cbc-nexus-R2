/* CBE Nexus AI Academy — Professional AI Training Handbook, Volume 1.
   Integrates handbook teaching notes into the five existing six-module courses.
   Keeps course registry, module metadata, quizzes, certificates and payment flows intact.
   The handbook material is displayed at every existing learning level; level tabs remain unchanged. */
(function(){
  const E=window.CBENexusAIEnhanced, A=window.CBENexusAICourses||{};
  if(!E||typeof E.makeLongNotes!=="function") return;
  const previous=E.makeLongNotes.bind(E);
  const notes={
    "ai-foundations":[
`ARTIFICIAL INTELLIGENCE: MEANING AND SCOPE

Artificial Intelligence (AI) is a field of computer science concerned with developing computer systems that perform tasks normally associated with human intelligence. These tasks include recognising images and speech, understanding and generating language, learning patterns from data, making predictions, solving problems, recommending information and supporting decisions.

An AI system receives information, processes it using a model or set of rules, and produces an output. For example, when a learner asks an AI assistant to explain photosynthesis, the system processes the question and generates a response using patterns learned during training and the context supplied in the conversation.

AI does not necessarily understand the world in the same way a human does. A fluent response is not proof of understanding or truth. Outputs must be evaluated before they are relied upon.

AI AND HUMAN INTELLIGENCE

AI systems process information using computational models and can process large datasets rapidly. People use biological cognition, lived experience, social relationships, contextual judgement and values. Both people and AI systems can exhibit biases, but AI does not have human lived experience.

MAIN BRANCHES OF AI

Machine learning identifies patterns from data. Deep learning uses multi-layer neural networks. Natural Language Processing works with human language. Computer vision interprets images and video. Robotics connects computation with physical action. These branches overlap in many modern applications.

REAL-WORLD APPLICATIONS

Education: adaptive learning, feedback drafting, lesson preparation and educational analytics. Healthcare: medical-image analysis, clinical decision support and administrative assistance. Agriculture: crop monitoring, disease detection, weather analysis and precision farming. Banking: fraud detection, risk analysis and customer support. Transport: route optimisation, traffic prediction and driver assistance. Business: market research, forecasting, customer service and workflow automation.

PRACTICAL ACTIVITY

Identify five activities in your school, workplace or business that could benefit from AI. For each, record the current problem, how the task is performed, how AI could assist, what a person must verify and the expected benefit. Distinguish assistance from decisions that require human responsibility.

CHECK YOUR UNDERSTANDING

Explain AI in your own words. Give three examples of AI applications from different sectors. State two differences between AI systems and human intelligence. Explain why a convincing AI answer should still be checked.`,
`MACHINE LEARNING: HOW SYSTEMS LEARN FROM EXAMPLES

Machine Learning (ML) is a branch of AI that enables computer systems to identify patterns from data and use those patterns to make predictions or decisions. Traditional programming generally uses explicitly written rules. Machine learning instead uses examples and a learning algorithm to produce a trained model.

THREE MAJOR TYPES

Supervised learning uses labelled examples. A school might use historical attendance and assessment records to explore patterns associated with performance outcomes. Classification predicts a category; regression predicts a numerical value. Algorithms can include decision trees, linear regression, logistic regression and support vector machines.

Unsupervised learning explores data without predefined labels. A business might group customers according to purchasing patterns. Common methods include clustering, dimensionality reduction and association analysis.

Reinforcement learning involves an agent interacting with an environment and receiving rewards or penalties based on actions. Through repeated interaction it learns a strategy. Applications include robotics, game-playing and resource optimisation.

THE MACHINE-LEARNING LIFECYCLE

1. Define the problem and the intended outcome.
2. Collect relevant data.
3. Clean and prepare the data.
4. Select an appropriate algorithm.
5. Train the model.
6. Evaluate performance on suitable data.
7. Deploy the model.
8. Monitor results and improve it.

WORKED EXAMPLE: LEARNER SUPPORT

A school might explore whether attendance, assignment completion and previous test scores help identify learners who may benefit from additional support. A hypothetical record could contain attendance 72%, assignment completion 60%, previous test score 48% and four study hours per week. These are possible input features; the outcome being predicted is the target.

A prediction must not become an unquestionable judgement about a learner. Teachers should examine context, data quality, missing information and individual circumstances before offering support.

PRACTICAL EXERCISE

Create a hypothetical dataset of 20 learners with attendance, assignment completion and test scores. Identify input features and the outcome variable. Explain what a model might learn and identify two possible sources of bias.

KEY DISTINCTION

Training is the process of learning model parameters from examples. Inference is the use of a trained model to produce an output for new input. A model's performance should be tested on examples that were not used to train it.`,
`DATA, FEATURES AND MODEL TRAINING

Data is the foundation of most machine-learning systems. Model quality is strongly influenced by the relevance, accuracy and representativeness of training data. A dataset is a structured collection of information. Each row is an observation and each column is a variable. In a learner dataset, attendance and assignment completion may be features while examination score may be the target variable.

IMPORTANT TERMS

Features are input variables used by a model. Labels are correct categories or answers supplied during supervised training. Training data teaches the model. Validation data is used during development to compare and tune models. Test data is kept separate to estimate performance on unseen examples. Data preprocessing means preparing raw information for analysis or training.

WHY DATA IS SPLIT

If a model is evaluated only on examples it has already seen, its apparent performance may be misleading. A common illustrative split is 70% training, 15% validation and 15% testing. This is not a universal rule: dataset size, time dependence and the problem type affect the appropriate split.

OVERFITTING AND UNDERFITTING

Overfitting occurs when a model memorises training examples and performs poorly on new data. Underfitting occurs when a model is too simple to capture important patterns. Good generalisation means the model performs reasonably well on previously unseen examples.

PRACTICAL DATA AUDIT

Take a dataset containing examination scores. Identify missing values, duplicated records and inconsistent formats. Check units and valid ranges. Separate training and testing data. Explain why testing on unseen examples matters and why a missing mark should not automatically be treated as zero.

DISCUSSION

A dataset can contain many rows and still be unsuitable. Ask who is represented, who is missing, how each variable was measured and whether the target label is reliable. Data quality is not just a technical concern: it can affect the fairness and safety of decisions made with a model.`,
`NEURAL NETWORKS AND DEEP LEARNING

Deep Learning is a branch of machine learning that uses artificial neural networks with multiple computational layers. These networks are loosely inspired by interconnected biological nervous systems, but artificial neurons perform mathematical computations rather than biological processes.

A basic neural network contains an input layer, one or more hidden layers and an output layer. Each artificial neuron receives numerical inputs, applies weights and a bias, and passes the result through an activation function. A simplified neuron is y = f(w1x1 + w2x2 + b), where x values are inputs, w values are weights, b is the bias, f is the activation function and y is the output.

HOW TRAINING HAPPENS

The model receives input data and calculates a prediction. The prediction is compared with the expected answer. A loss function measures the error. Backpropagation calculates how model parameters contributed to that error. An optimisation algorithm adjusts the weights. The process repeats over training examples with the aim of reducing error while maintaining good performance on unseen data.

IMPORTANT CONCEPTS

Weights influence the strength of connections. Bias is an additional parameter that shifts a neuron's activation. An activation function introduces non-linearity. A loss function measures prediction error. Gradient descent is an optimisation method for updating parameters. An epoch is one complete pass through the training dataset. The learning rate controls the size of parameter updates.

APPLICATIONS

Image recognition systems can learn to distinguish objects such as animals, vehicles, plants and medical images. Deep learning is also important in speech recognition, language processing and generative AI.

PRACTICAL ACTIVITY

Draw a three-layer neural network and label the input, hidden and output layers. Explain what weights and a loss function do. Describe why performance on training data alone is insufficient evidence that a model will work well in practice.`,
`GENERATIVE AI AND FOUNDATION MODELS

Generative AI refers to systems that create new content based on patterns learned during training. It can generate text, images, audio, video, computer code and synthetic data.

A foundation model is a model trained on broad data that can be adapted to different tasks. Large language models (LLMs) are one category of foundation model. Examples of AI products and model families include ChatGPT, Google Gemini, Claude, Microsoft Copilot and Llama. Capabilities vary by version, subscription, region and enabled features.

HOW AN LLM GENERATES TEXT

Language models process text as tokens. A token can represent a whole word, part of a word, punctuation or another text unit. The model uses context to estimate a probability distribution over possible next tokens. It selects or samples a token and repeats the process to generate a sequence.

For example, given the prompt “The process by which green plants make food is called…”, the model uses context and learned language patterns to predict a likely continuation such as “photosynthesis”. It is not simply retrieving a memorised paragraph each time; it generates output using learned parameters and the supplied context.

LIMITATIONS

Generative AI can produce convincing but false statements, invent references, reproduce biases, misunderstand complex instructions, lack recent information or struggle with specialised and ambiguous questions. Fluent language should not be confused with verified evidence.

PRACTICAL ASSIGNMENT

Ask an AI assistant to explain the water cycle. Request a simple explanation for a 10-year-old, an advanced scientific explanation, a labelled process description and five examination questions. Compare the versions and identify inaccuracies or missing scientific details.

REFLECTION

Explain the difference between a foundation model and a single-purpose application. Define a token. Why can a model produce a confident but incorrect response?`,
`EVALUATING AI SYSTEMS AND REAL-WORLD APPLICATIONS

AI evaluation determines whether a system is suitable for its intended purpose. A system should not be considered successful simply because its output looks convincing.

CLASSIFICATION MEASURES

Accuracy = (TP + TN) / (TP + TN + FP + FN). TP means true positives, TN true negatives, FP false positives and FN false negatives.

Precision = TP / (TP + FP). Precision measures how many positive predictions were correct.

Recall = TP / (TP + FN). Recall measures how many actual positive cases were identified.

F1 = 2 × (Precision × Recall) / (Precision + Recall). The F1 score combines precision and recall.

WORKED EXAMPLE

A fraud-detection model identifies 100 transactions as fraudulent. Of those, 80 are actually fraudulent. Precision = 80/100 = 80%. This means 80% of the transactions flagged as fraudulent were truly fraudulent. It does not by itself tell us how many fraudulent transactions the model missed.

RESPONSIBLE EVALUATION

A comprehensive evaluation also considers fairness, reliability, security, privacy, transparency, accessibility, human oversight and environmental and operational costs. The correct measure depends on the task and the consequences of errors.

COURSE PROJECT

Design a proposal for an AI-powered learning-support system. Include the educational problem, target users, data that might be required, type of AI system, expected outputs, evaluation criteria, potential risks and human review procedures.

FINAL REVIEW QUESTIONS

1. Define AI.
2. Differentiate machine learning from traditional programming.
3. Explain supervised learning.
4. Distinguish training data from test data.
5. Explain overfitting.
6. Describe the layers of a neural network.
7. What is backpropagation?
8. Define a foundation model.
9. Explain token-by-token generation.
10. What is an AI hallucination?
11. Calculate accuracy where 90 predictions are correct out of 100.
12. Explain why human oversight matters.

ANSWER GUIDE

AI refers to computer systems performing tasks associated with human intelligence. Traditional programming follows explicitly coded rules; machine learning learns patterns from data. Supervised learning uses labelled examples. Training data teaches a model; test data evaluates unseen performance. Overfitting is memorising training patterns without generalising. A basic network has input, hidden and output layers. Backpropagation computes gradients used to adjust parameters. A foundation model is broadly trained and adaptable to multiple tasks. An LLM generates successive tokens using context. A hallucination is unsupported or false output presented as fact. The accuracy example is 90%. Human oversight helps identify errors, protect people and ensure appropriate decisions.`
    ],
    "prompt-engineering":[
`UNDERSTANDING PROMPT ENGINEERING

A prompt is the instruction or input provided to an AI system. Prompt engineering is the process of designing and improving prompts to obtain outputs that are more relevant, accurate, useful and appropriately structured. A weak prompt often produces generic answers because it gives the model insufficient direction.

WEAK AND IMPROVED PROMPTS

Weak: “Write about biology.”

Improved: “Act as an experienced secondary-school Biology teacher. Prepare detailed notes on photosynthesis for upper-secondary learners. Explain the light-dependent and light-independent stages, define essential terminology, include a labelled process description, provide two worked examples and finish with ten examination questions and answers.”

The improved prompt specifies role, subject, audience, topic, depth, required content and output expectations.

WHY IT MATTERS

Prompt engineering helps reduce ambiguity, communicate expectations, improve relevance, control output format, reduce unnecessary revisions and create repeatable workflows.

PRACTICAL ACTIVITY

Write three prompts for explaining photosynthesis: one for a primary-school learner, one for a secondary-school learner and one for a university Biology student. Compare depth, vocabulary and examples. Check that simplification does not introduce scientific errors.`,
`THE SIX-PART PROMPT FRAMEWORK

A strong prompt can be constructed using six elements:

1. Role — who should the AI act as or what perspective should it use?
2. Context — what background information is needed?
3. Task — what exactly should be done?
4. Constraints — what limitations, rules or standards apply?
5. Output format — how should the answer be organised?
6. Quality criteria — what makes the response successful?

WORKED EXAMPLE: PROFESSIONAL TRAINING NOTES

“Act as a university-level instructional designer and AI educator. Context: I am developing an international AI training programme for beginners and professionals. Task: Write a comprehensive module on machine learning. Requirements: explain important concepts, include mathematical explanations, use practical examples, explain algorithms, include text diagrams where appropriate, and provide exercises and solutions. Output: organise the material into numbered lessons with headings, tables, examples and an assessment. Quality: the notes must be scientifically accurate, accessible to beginners and sufficiently detailed for independent study.”

PRACTICAL ACTIVITY

Prepare a prompt for a course module. Highlight each of the six elements. Remove any conflicting instruction and define what the AI should do if required information is missing.`,
`CONTEXT, ROLES AND TASK SPECIFICATION

Context gives an AI system the information needed to understand a task. Without context, the system may make assumptions. “Prepare a lesson” does not specify subject, grade, curriculum or duration.

A contextualised instruction is more useful: “Prepare a 60-minute Chemistry lesson on acids and bases for upper-secondary learners. Include learning objectives, prior knowledge, practical demonstrations, safety precautions, formative assessment and homework.”

ROLE PROMPTING

Role prompting specifies a professional perspective or style, for example Chemistry lecturer, research assistant, business consultant, cybersecurity instructor or web developer. A role can guide tone and content, but it does not guarantee expertise or correctness.

TASK DECOMPOSITION

Complex tasks should be broken into smaller stages. For a business plan: analyse the market; identify customers; define the value proposition; develop the business model; estimate costs; create a marketing plan; identify risks; then compile the final plan. Staging makes assumptions easier to review and correct.

PRACTICAL EXERCISE

Improve the instruction “write a business plan” by adding context, audience, product, location, budget, output format and quality criteria. Divide the task into stages and state which assumptions need confirmation.`,
`EXAMPLES, CONSTRAINTS AND OUTPUT FORMATS

Examples demonstrate the format or style expected. Few-shot prompting provides one or more examples to guide the output.

Zero-shot prompting gives an instruction without examples. One-shot prompting gives one example. Few-shot prompting gives multiple examples.

CLASSIFICATION EXAMPLE

Instruction: “Classify each customer message as Positive, Negative or Neutral.”

Examples: “Excellent service” → Positive. “The delivery was late” → Negative. “I received the order” → Neutral.

New message: “The product is good, but delivery was slow.” A suitable answer may identify mixed sentiment, or choose the closest available category and explain the limitation.

OUTPUT CONSTRAINTS

You can specify word count, reading level, number of examples, required sections, tone, language, table structure, JSON format and citation requirements. Asking for citations does not guarantee that references exist; verify them independently.

PRACTICAL ACTIVITY

Create a prompt that classifies feedback. Supply examples, define the allowed categories and specify how the AI should handle ambiguous or mixed feedback. Test it with new messages and inspect inconsistent classifications.`,
`ITERATIVE PROMPTING AND ADVANCED TECHNIQUES

Prompt engineering is usually iterative. The first response may not satisfy all requirements. A useful cycle is: write the prompt, review the output, identify weaknesses, improve instructions, test again and produce a final verified result.

TECHNIQUES

Chain decomposition breaks a complex problem into clearly defined subtasks. Comparative prompting asks the AI to compare approaches against stated criteria. Structured-output prompting specifies headings, table columns or a data structure. Retrieval-grounded prompting supplies relevant documents and instructs the model to answer from those materials, identifying unsupported questions rather than guessing. Self-review prompting asks the system to check its response against a checklist; self-review is not proof of correctness, so independently verify the result.

PRACTICAL EXERCISE

Ask an AI tool to prepare a marketing strategy. First use a short prompt. Then use a detailed prompt containing customer profile, budget, product, location and goals. Compare specificity, relevance, completeness, practical usefulness and accuracy.

QUALITY CONTROL

Keep a record of the prompt version, input material, output, corrections and final decision. Change one major instruction at a time when testing so you can identify which change improved or weakened the result.`,
`PROMPT SYSTEMS AND PROFESSIONAL WORKFLOWS

Professional users can create reusable prompt templates. A template makes repeat tasks more consistent and easier to review. It should identify required inputs, expected output, constraints and verification steps.

WORKED EXAMPLE: CV IMPROVEMENT TEMPLATE

“Act as an international recruitment and CV specialist. Review the CV I provide against the job description. Identify missing qualifications, relevant experience, weak descriptions, missing measurable achievements and important keywords. Rewrite the CV using a professional, ATS-friendly structure. Do not invent qualifications, experience or achievements. Clearly mark any information that requires confirmation.”

PROMPT LIBRARY ASSIGNMENT

Create a prompt library containing five educational prompts, five business prompts, five research prompts, five productivity prompts and five creative prompts. For each prompt, record intended use, required inputs, output format and verification checklist.

FINAL REVIEW QUESTIONS

1. Define prompt engineering.
2. Explain why context matters.
3. Differentiate zero-shot and few-shot prompting.
4. What is role prompting?
5. Explain task decomposition.
6. Why are constraints important?
7. What is structured output?
8. Explain iterative prompting.
9. What is retrieval-grounded prompting?
10. Why must AI-generated references be verified?

ANSWER GUIDE

Prompt engineering is the systematic design and improvement of AI instructions. Context supplies background. Zero-shot uses no examples; few-shot uses examples. Role prompting specifies a perspective. Task decomposition breaks work into stages. Constraints define boundaries. Structured output specifies format. Iterative prompting refines instructions through testing. Retrieval grounding uses supplied evidence. References must be checked because AI can invent or misrepresent sources.`
    ],
    "ai-for-teachers":[
`AI LITERACY AND TEACHER AGENCY

AI is changing how teachers prepare lessons, develop resources, assess learning and communicate with learners. AI can assist with lesson preparation, explaining difficult concepts, generating revision questions, developing activities, language support, drafting feedback, differentiating materials and administrative organisation.

Teachers remain responsible for professional judgement, safeguarding and educational quality. Teacher agency means educators retain the ability and responsibility to make informed decisions about curriculum, instruction, assessment, learner welfare, educational technology and professional ethics.

EXAMPLE: BIOLOGY LESSON ON PHOTOSYNTHESIS

A teacher can use AI to generate an introductory explanation, prepare a diagram description, develop practical questions, produce differentiated activities, create a short formative quiz and review the material for scientific accuracy. The teacher must check the science, curriculum alignment and suitability for learners.

PRACTICAL REFLECTION

Choose one lesson you teach. List tasks where AI could assist and identify decisions that must remain with the teacher. Explain how you would check accuracy and learner suitability before using the output.`,
`AI FOR LESSON PLANNING AND CURRICULUM ALIGNMENT

A lesson plan should connect learning outcomes, learning activities and assessment. Important components include topic, learning outcomes, prior knowledge, teaching methods, learning resources, activities, assessment and reflection.

WRITING MEASURABLE LEARNING OUTCOMES

Weak objective: “Understand respiration.”

Improved objectives: By the end of the lesson, learners should be able to define cellular respiration; distinguish aerobic and anaerobic respiration; write the word equation for aerobic respiration; explain the role of mitochondria; and interpret a simple experimental observation.

AI-ASSISTED LESSON-PLANNING PROMPT

“Act as an experienced Biology teacher. Develop a 60-minute lesson plan on aerobic respiration. Include measurable objectives, prior knowledge, introduction, teacher activities, learner activities, teaching resources, assessment questions, common misconceptions and homework.”

CURRICULUM ALIGNMENT CHECK

Check required learning outcomes, approved terminology, practical skills, grade or level expectations, assessment requirements and language of instruction. An AI-generated lesson plan is not automatically aligned with a national or international curriculum.

PRACTICAL EXERCISE

Use AI to prepare a lesson plan for Biology: transport in plants; Chemistry: acids and bases; and Physics: properties of materials. Compare objectives, activities and assessment methods. Verify each against the relevant syllabus.`,
`AI FOR ASSESSMENT, FEEDBACK AND QUESTION GENERATION

Assessment provides evidence about what learners know and can do. AI can help generate assessment materials, but teachers must validate questions and marking guidance.

TYPES OF ASSESSMENT

Diagnostic assessment identifies prior knowledge and misconceptions. Formative assessment monitors learning during instruction. Summative assessment evaluates achievement after a learning period. Performance assessment requires learners to demonstrate a skill or complete a task.

MULTIPLE-CHOICE QUESTIONS

A good multiple-choice question has a clear stem, one defensible correct answer, plausible distractors, appropriate difficulty and no accidental clues.

Example: Which organelle is primarily responsible for aerobic respiration in eukaryotic cells? A. Ribosome; B. Mitochondrion; C. Golgi apparatus; D. Lysosome. Correct answer: B.

BLOOM'S TAXONOMY

Remember: recall facts. Understand: explain concepts. Apply: use knowledge in a new situation. Analyse: examine relationships and evidence. Evaluate: defend a judgement using criteria. Create: develop an original solution or product. AI can help teachers generate questions at different cognitive levels.

FEEDBACK

Effective feedback is specific, timely, constructive, linked to learning objectives and actionable. Instead of “Your answer is wrong”, say: “You correctly identified the role of oxygen. However, you have not explained how oxygen acts as the final electron acceptor in aerobic respiration. Review the electron transport chain and revise your explanation.”

PRACTICAL ASSIGNMENT

Generate a 20-question Biology assessment with five recall, five understanding, five application and five higher-order questions. Check every answer and prepare a marking scheme.`,
`DIFFERENTIATION AND INCLUSIVE LEARNING

Learners have different abilities, backgrounds, languages and learning needs. Differentiation adapts teaching to provide appropriate learning opportunities. AI can assist by simplifying explanations, creating extension activities, producing vocabulary lists, developing alternative examples, preparing revision materials and supporting multilingual learning.

EXAMPLE: TEACHING DIFFUSION AT THREE LEVELS

Beginner: Diffusion is the movement of particles from a region of higher concentration to a region of lower concentration.

Intermediate: Diffusion occurs because particles move randomly, producing a net movement down a concentration gradient.

Advanced: Under suitable conditions, net flux can be described using Fick's law: J = -D(dC/dx), where J is flux, D is the diffusion coefficient and dC/dx is the concentration gradient. Introduce the mathematical description only when appropriate for the learners' level.

UNIVERSAL DESIGN FOR LEARNING

Useful principles are multiple means of engagement, multiple means of representation, and multiple means of action and expression. AI-generated materials should be checked for readability, accessibility, cultural relevance and suitability.

PRACTICAL EXERCISE

Prepare three explanations of osmosis for learners at different levels. Include a simple analogy, a scientific explanation, a diagram description and two questions per level. Ensure the simplification preserves scientific accuracy.`,
`AI-SUPPORTED CLASSROOM RESOURCES

Teachers can use AI to help prepare revision notes, worksheets, practical instructions, flashcards, lesson presentations, discussion questions, case studies, study guides and reading-comprehension exercises.

EXAMPLE: CHEMISTRY PRACTICAL

Topic: Investigating the effect of concentration on reaction rate. AI can assist with practical objectives, apparatus lists, safety instructions, variables, experimental procedure, results table, graphing instructions and discussion questions. The teacher must verify chemical hazards, procedures and institutional safety requirements.

SAMPLE RESULTS

Experiment 1: concentration 0.2 mol/L, time 120 s. Experiment 2: concentration 0.4 mol/L, time 75 s. Experiment 3: concentration 0.6 mol/L, time 48 s. Learners can plot concentration against reaction rate; an approximate rate may be represented by 1/t if the same observable endpoint is used consistently.

PRACTICAL EXERCISE

Develop a complete practical worksheet for Biology, Chemistry or Physics. Include objective, hypothesis, variables, apparatus, method, results, analysis, conclusion and safety considerations. Independently check the science and all safety instructions before classroom use.`,
`ACADEMIC INTEGRITY, SAFEGUARDING AND EVALUATION

Learners should understand the difference between using AI to explain a difficult topic, generate revision questions or improve grammar, and submitting AI-generated work as entirely independent work when that is prohibited. Institutions should establish clear disclosure and acceptable-use requirements.

SAFEGUARDING

Teachers should avoid uploading learner names linked to sensitive information, medical records, private assessment records, home addresses and confidential disciplinary information. Use approved institutional systems and appropriate data-protection procedures.

TEACHER EVALUATION CHECKLIST

Before using an AI-generated educational resource, ask: Is it scientifically or academically accurate? Does it match the curriculum? Is the language suitable? Is it accessible? Does it contain bias? Does it respect learner privacy? Does it support learning rather than encourage copying?

COURSE PROJECT

Develop an AI-assisted teaching package for one subject. Prepare a complete lesson plan, learner notes, labelled diagram, worksheet, 20-question assessment, marking scheme, differentiated activities and an AI-use disclosure and verification record.

FINAL REVIEW QUESTIONS

1. Define teacher agency.
2. Explain formative versus summative assessment.
3. State five uses of AI in lesson planning.
4. What makes a learning objective measurable?
5. Explain differentiation.
6. Describe the three principles of Universal Design for Learning.
7. Why verify AI-generated questions?
8. Explain academic integrity.
9. Identify five types of learner information to protect.
10. Why should AI not independently determine high-stakes learner outcomes?

ANSWER GUIDE

Teacher agency is professional control and responsibility over educational decisions. Formative assessment monitors ongoing learning; summative assessment evaluates achievement at the end of a period. Other answers should cover lesson planning, differentiation, accessibility, verification, integrity and safeguarding.`
    ],
    "ai-productivity-business":[
`IDENTIFYING AI PRODUCTIVITY OPPORTUNITIES

Productivity means achieving useful results with effective use of time, effort and resources. AI can assist with repetitive and information-intensive tasks.

EXAMPLES

Email management: drafting and summarising messages. Research: organising information and comparing sources. Meetings: preparing agendas and summarising notes. Marketing: developing campaign ideas. Customer service: drafting responses to common questions. Administration: preparing reports and templates. Planning: generating schedules and task lists.

THE PRODUCTIVITY AUDIT

Before introducing AI, examine the existing process. Ask what task takes the most time, how frequently it is repeated, what information it requires, what errors occur, which steps need human judgement and what improvement would look like.

EXAMPLE: SCHOOL ADMINISTRATION

An administrator spends three hours preparing weekly departmental reports. An AI-assisted process might collect approved departmental summaries, organise information, identify repeated themes, draft the report, flag missing information and allow the administrator to verify and approve it. The objective is to reduce unnecessary work while preserving accuracy and accountability.

PRACTICAL ACTIVITY

Choose a repeated task in a school or small business. Record current time, steps, error rate and review requirements. Propose where AI could assist and identify what evidence would show genuine improvement.`,
`RESEARCH, SUMMARISATION AND KNOWLEDGE WORK

AI can support information gathering and summarisation. However, summarisation is not the same as verification.

A RELIABLE RESEARCH WORKFLOW

1. Define the research question.
2. Identify credible sources.
3. Retrieve relevant information.
4. Compare claims across sources.
5. Identify disagreements.
6. Summarise the evidence.
7. Record references.
8. Verify important statements.

PRIMARY AND SECONDARY SOURCES

Primary sources include original research, official datasets, legislation and original institutional documents. Secondary sources interpret or analyse primary evidence, such as review articles, textbooks and analytical reports.

AI SUMMARISATION EXAMPLE

For a 30-page company report, request an executive summary, main findings, supporting evidence, financial implications, risks, recommendations and unanswered questions. Compare the summary against the source document before using it in business decisions.

PRACTICAL EXERCISE

Find a publicly available annual report and prepare a 200-word executive summary, five key findings, three risks, three recommendations and a list of claims that need further verification. Record the source pages supporting each important claim.`,
`WRITING, DOCUMENTS AND PRESENTATIONS

AI can assist in drafting and editing professional content such as business reports, proposals, memoranda, emails, newsletters, training materials, presentations, policies and standard operating procedures.

PROFESSIONAL REPORT STRUCTURE

A good business report generally contains a title, executive summary, background, objectives, methodology, findings, discussion, recommendations, conclusion and references or appendices.

EXAMPLE: EXECUTIVE SUMMARY PROMPT

“Prepare an executive summary for a small business proposal. Explain the business opportunity, customer problem, proposed solution, target market, operational model, financial assumptions, major risks and expected outcomes. Keep the summary factual and identify any assumptions that require confirmation.”

PRESENTATION DEVELOPMENT

A strong presentation should contain one central message per slide, concise headings, relevant visuals, evidence, logical progression and a clear conclusion. Avoid filling slides with large blocks of generated text.

PRACTICAL ACTIVITY

Develop a 10-slide presentation on how AI can improve productivity in small businesses. Verify statistics, claims and images, and ensure that each slide contributes to the central message.`,
`PLANNING, OPERATIONS AND CUSTOMER SUPPORT

AI can support operational management. A business process is a sequence of activities used to produce an outcome.

EXAMPLE: CUSTOMER ORDER PROCESS

Customer submits order → system validates details → payment confirmation → order fulfilment → customer notification.

AI may help identify delays, draft customer notifications and categorise common problems. It should not independently confirm payments or make consequential financial decisions without reliable system evidence and appropriate controls.

CUSTOMER SUPPORT PRINCIPLES

A useful support system should identify the customer's issue, provide accurate information, protect personal data, escalate unusual cases, avoid promising unsupported outcomes and keep an appropriate record of interactions.

EXAMPLE

Customer: “I paid for a course but cannot access the notes.” An AI assistant could draft a response requesting the order reference through an approved secure channel and explaining the verification process. It must not claim payment has been confirmed without checking the actual payment system.

PRACTICAL EXERCISE

Map a customer-support process. Identify common requests, information required, approved responses, escalation triggers and a human review point. Test the process using an unusual or incomplete customer request.`,
`CONTENT WORKFLOWS AND QUALITY ASSURANCE

Content creation involves planning, producing, editing, publishing and evaluating information. Formats include articles, social media posts, videos, podcasts, newsletters, advertisements, educational resources and infographics.

CONTENT PRODUCTION WORKFLOW

1. Define the audience.
2. Select the communication objective.
3. Research the subject.
4. Develop an outline.
5. Produce the first draft.
6. Edit for accuracy and originality.
7. Check rights and permissions.
8. Publish.
9. Monitor engagement.
10. Improve the next version.

EXAMPLE: EDUCATIONAL ARTICLE

Topic: The importance of cybersecurity for students. Possible sections include introduction, common digital threats, password security, phishing, safe internet practices, practical examples, conclusion and references. AI can draft a structure, but the final article should be reviewed for accuracy, relevance and originality.

QUALITY ASSURANCE

Check factual claims, spelling, tone, audience fit, originality, image rights, privacy and calls to action. Confirm that generated content does not invent quotations, testimonials, statistics or credentials.

PRACTICAL ACTIVITY

Create one article and one social post from the same verified source material. Compare their audience, purpose and level of detail. Record the edits required before publication.`,
`MEASURING PRODUCTIVITY AND RETURN ON INVESTMENT

AI implementation should be measured. Useful key performance indicators (KPIs) include time saved, cost per completed task, error rate, customer satisfaction, completion rate, conversion rate, employee workload and output quality.

WORKED EXAMPLE: TIME SAVED

A company previously spent 10 hours preparing a weekly report. After introducing an AI-assisted process it spends 6 hours. Time saved = 10 − 6 = 4 hours. Percentage reduction = (4/10) × 100 = 40%. This is a 40% reduction in preparation time, assuming final quality remains acceptable.

RETURN ON INVESTMENT

A simplified formula is ROI = ((Benefits − Costs) / Costs) × 100. If a company spends KSh20,000 implementing a workflow and estimates KSh30,000 in measurable benefits over the same period, ROI = ((30,000 − 20,000) / 20,000) × 100 = 50%. Include implementation, review and maintenance costs and measure benefits over the same period.

COURSE PROJECT

Design an AI productivity improvement plan for a small organisation. Include the current workflow, problem, proposed solution, required tools, implementation steps, estimated costs, risk assessment, success indicators and expected benefits.

FINAL REVIEW QUESTIONS

1. Define productivity.
2. Explain five workplace applications of AI.
3. What is process mapping?
4. Differentiate primary and secondary sources.
5. Identify components of a professional report.
6. Why is customer-support escalation important?
7. Outline a content production workflow.
8. Define a KPI.
9. Calculate percentage time saved when a task reduces from 8 hours to 5 hours.
10. Define ROI.

ANSWER GUIDE

Productivity is achieving useful results efficiently. Valid applications include research, writing, customer service, marketing, administration and planning. Process mapping represents process steps. Primary sources provide original evidence; secondary sources interpret it. A report includes summary, background, findings, discussion and recommendations. Escalation ensures complex or risky cases receive human attention. Content workflow includes research, planning, drafting, editing, checking and publishing. KPI means key performance indicator. Time saved is 3/8 × 100 = 37.5%. ROI measures benefit relative to cost.`
    ],
    "responsible-ai":[
`HUMAN-CENTRED AI AND DIGITAL CITIZENSHIP

Responsible AI is the development and use of AI systems in ways that respect people, rights, safety and legitimate interests. Digital citizenship involves responsible participation in digital environments.

PRINCIPLES OF RESPONSIBLE AI

Human dignity, fairness, privacy, transparency, accountability, security, reliability and accessibility are important principles.

HUMAN-CENTRED AI

Human-centred AI places people at the centre of technology decisions. An AI system may recommend which learners need additional support, but teachers should consider individual circumstances before acting.

HUMAN OVERSIGHT

Human oversight means people can review, correct or stop an AI-supported process. The required level depends on the possible consequences of an error. A tool generating a social-media caption has a different risk profile from one supporting medical or employment decisions.

PRACTICAL REFLECTION

Choose an AI use case and identify the people affected, possible benefits, possible harms and decisions that must remain subject to human review.`,
`BIAS, FAIRNESS AND INCLUSION

AI systems can produce biased results. Bias may originate from unrepresentative training data, historical discrimination, incorrect labels, poorly designed objectives, inappropriate assumptions or unequal access to technology.

EXAMPLE: RECRUITMENT SYSTEM

Suppose an organisation trains a recruitment model using historical hiring records. If previous recruitment practices systematically favoured a particular group, the model may learn those historical patterns and disadvantage qualified applicants.

TYPES OF BIAS

Sampling bias: the dataset does not represent the relevant population. Measurement bias: collected variables do not accurately measure the intended concept. Historical bias: existing social inequalities are reflected in data. Selection bias: the process used to select data creates distorted representation.

FAIRNESS REVIEW

Ask who is represented, who is missing, whether error rates differ between groups, whether variables are appropriate, whether affected people can challenge a decision and whether the system creates unequal outcomes. Fairness is context-dependent; one statistical measure alone cannot establish that a system is fair.

PRACTICAL ACTIVITY

Imagine an AI system used to select scholarship applicants. Identify five possible sources of bias and propose a control for each. Consider how applicants can request an explanation or challenge an error.`,
`PRIVACY, CONSENT AND DATA PROTECTION

Privacy is a fundamental requirement of responsible digital activity. Personal information can include names, email addresses, telephone numbers, identification information, location information, financial records, health information and education records.

DATA MINIMISATION

Collect only the information necessary for a clearly defined purpose.

CONSENT AND LAWFUL PROCESSING

Organisations should identify an appropriate legal basis for processing personal information, communicate relevant purposes and comply with applicable data-protection requirements. In Kenya, the Office of the Data Protection Commissioner provides guidance on obligations under the Data Protection Act, 2019.

SAFE USE OF AI ASSISTANTS

Before uploading information, check whether the tool is approved, what information is necessary, whether personal details can be removed, what the provider's data-handling terms say, whether the organisation has authorised the activity and whether data may be retained or used for other purposes.

EXAMPLE: LEARNER PERFORMANCE

A teacher wants AI to help analyse learner performance. Instead of uploading identifiable records, the teacher may use appropriately anonymised data while considering re-identification risk. Simply removing names does not always guarantee anonymity.

PRACTICAL CHECK

Create a data-minimisation checklist for a school or small business. Identify data that should never be entered into an unapproved public AI tool.`,
`TRANSPARENCY, EXPLAINABILITY AND ACCOUNTABILITY

Transparency means providing appropriate information about how AI is used. Explainability concerns how understandable system outputs or decisions are. Accountability means responsibility for development, deployment and use is assigned.

WHY TRANSPARENCY MATTERS

Users should understand when they are interacting with AI, what the system is intended to do, its important limitations, whether automated decisions are involved and how errors can be challenged.

EXAMPLE: AI-GENERATED ACADEMIC WORK

A learner uses AI to improve grammar in an assignment. The learner should follow the institution's disclosure policy and remains responsible for the accuracy, originality and academic integrity of the submitted work.

ACCOUNTABILITY FRAMEWORK

A responsible organisation should establish named system owners, approved use cases, review procedures, incident reporting, documentation, audit processes, human escalation and corrective action.

PRACTICAL ACTIVITY

Draft a short disclosure statement explaining where AI assisted with a report, what was checked by a person and who is responsible for the final content.`,
`SAFETY, MISINFORMATION AND INTELLECTUAL PROPERTY

AI makes it easier to generate convincing information, including fabricated news, fake images, deepfake videos, invented scientific claims, false references, misleading statistics and manipulated audio.

VERIFYING INFORMATION

1. Identify the original claim.
2. Locate the original source.
3. Check the author's qualifications or authority.
4. Check the date.
5. Compare with independent credible sources.
6. Inspect supporting evidence.
7. Distinguish fact from opinion.
8. Record uncertainty.

DEEPFAKES

A deepfake is synthetic or manipulated media that may imitate a real person's appearance or voice. Such material can be used for entertainment, but also for fraud, harassment and deception. Do not assume audio or video is authentic simply because it looks convincing.

COPYRIGHT AND INTELLECTUAL PROPERTY

Before using generated content commercially or publicly, check the AI service terms, consider copyright and licensing, obtain permissions where required, respect trademarks, avoid impersonation and do not reproduce protected work without appropriate rights. Disclose synthetic material where appropriate or required. Legal rules vary across jurisdictions.

PRACTICAL EXERCISE

Choose a viral claim or media item. Trace it to its original source, check date and evidence, compare independent reporting and record what remains uncertain. Do not share it as fact until the evidence supports it.`,
`RESPONSIBLE-USE POLICY AND IMPACT ASSESSMENT

Organisations need policies to govern AI use. A responsible AI policy should explain approved applications, prohibited uses, privacy requirements, human oversight, verification standards, intellectual-property requirements, security requirements, disclosure requirements, incident reporting and review procedures.

AI RISK-ASSESSMENT WORKFLOW

Define the intended use. Identify affected people. Identify potential harms. Evaluate likelihood and severity. Introduce safeguards and human review. Monitor, document and improve.

PRACTICAL PROJECT

Develop a responsible AI policy for a school or small organisation. Include the purpose of the policy, approved AI tools, acceptable and unacceptable use, learner or employee privacy, academic integrity, human oversight, copyright, security, incident reporting and annual review.

FINAL REVIEW QUESTIONS

1. Define responsible AI.
2. Explain human-centred AI.
3. Identify five sources of algorithmic bias.
4. What is data minimisation?
5. Why is consent important?
6. Explain transparency.
7. Differentiate explainability and accountability.
8. What is a deepfake?
9. Identify five ways to verify online information.
10. Why does AI-generated content require human review?

ANSWER GUIDE

Responsible AI is safe, fair and accountable AI use. Human-centred AI prioritises people and their rights. Bias can originate in data, measurement, selection, historical patterns and design. Data minimisation limits collection to what is necessary. Consent and lawful processing protect data subjects' rights. Transparency communicates AI use and limitations. Explainability concerns understanding outputs; accountability concerns responsibility. A deepfake is synthetic or manipulated media. Verification includes source checking, dates, independent corroboration and evidence inspection. Human review detects errors and ensures appropriate judgement.`
    ]
  };
  const valid=new Set(Object.keys(notes));
  for(const slug of valid){if(A[slug])A[slug].priorityAdvancedNotes=true;}
  E.makeLongNotes=function(slug,course,module,level){
    const index=(course&&Array.isArray(course.modules))?course.modules.indexOf(module):-1;
    const lesson=notes[slug]&&notes[slug][index];
    if(lesson)return lesson;
    return previous(slug,course,module,level);
  };
})();
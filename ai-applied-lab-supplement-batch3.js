/* CBE Nexus AI Academy — Applied Learning Supplement, Batch 3.
   Courses 11–15: six practical, textbook-style learning modules per course.
   Chains the existing notes renderer; does not replace course, quiz, payment or certificate data. */
(function(){
  const E=window.CBENexusAIEnhanced;
  if(!E||typeof E.makeLongNotes!=="function") return;
  const previous=E.makeLongNotes.bind(E);
  const notes={
"ai-content-creation":[
`# Module 1: Content strategy, audiences and editorial planning

## 1.1 What content creation means
Content creation is the planned development of useful information or entertainment for a defined audience and purpose. Formats include articles, lessons, newsletters, social posts, short videos, podcasts, presentations and downloadable guides. Strong content solves a real audience problem; publishing frequently without a purpose does not create a strategy.

## 1.2 Define the audience
Describe the audience using relevant, non-stereotyped attributes: knowledge level, needs, questions, language, preferred format and access constraints. A school science article for Form 2 learners needs different vocabulary and examples from a technical article for laboratory professionals.

## 1.3 Build a content brief
A useful brief records: topic, audience, objective, search intent, key question, evidence required, format, call to action, publication date and reviewer. AI can draft a brief, but the creator must verify audience assumptions and facts.

## 1.4 Content pillars and journey
Organise content into a small number of themes. For an education platform, pillars might be subject learning, examinations, teacher development, scholarships and career guidance. Map each item to awareness, consideration or action.

**Worked example:** A Biology revision campaign targets secondary learners preparing for an end-of-term examination. Its objective is to help learners understand cell transport, not merely attract clicks. Plan an explainer, a labelled diagram, five practice questions and a revision checklist.

**Practical task:** Write a one-page brief for a piece of content. State the audience, problem, learning or business outcome, evidence sources and success measure.`,
`# Module 2: Research, outlining and long-form writing with AI

## 2.1 Research before drafting
Start with a question, not a prompt asking AI to write everything. Collect authoritative source material, record publication dates and distinguish primary evidence from commentary. For curriculum or policy content, prefer the relevant examination board, ministry, regulator, institution or original research.

## 2.2 Create a structured outline
A useful article outline contains a clear title, introduction, logical H2 sections, supporting H3 sections, examples, common mistakes, summary and references. Each section should answer a distinct reader question. Remove headings that repeat the same idea.

## 2.3 Prompting for a draft
Example instruction:
```
Draft a 1,200-word beginner guide to [topic] for [audience].
Use the supplied source notes only for factual claims.
Explain terminology before using it.
Include two worked examples, a common-mistakes section
and five review questions with answers.
Mark any claim that needs independent verification.
Do not invent quotations, statistics or references.
```

## 2.4 Edit for substance
Check factual accuracy, completeness, logical flow, reading level, originality, accessibility and usefulness. Replace generic claims with specific explanations, examples, calculations or procedures. Avoid padding and repeated keyword phrases.

**Worked example:** For an article on percentage increase, explain the original value, change and calculation: percentage increase = (increase ÷ original value) × 100. If enrolment rises from 80 to 100, the increase is 20 and the percentage increase is 25%.

**Practical task:** Produce an outline and first draft for a topic you know. Add a source note beside every factual claim that requires verification.`,
`# Module 3: Social media publishing and community engagement

## 3.1 Match format to platform and purpose
A short vertical video, a professional network post and a detailed website article serve different reading behaviours. Adapt length, opening, visual treatment and call to action without changing the underlying facts. Do not assume one post should be copied unchanged everywhere.

## 3.2 Build a content calendar
A calendar records date, channel, topic, format, owner, asset status, approval status and intended action. Balance educational, explanatory, community and promotional posts. Leave room for timely updates and corrections.

## 3.3 Write effective posts
A useful post has a relevant opening, one central message, supporting detail and a clear next step. Use plain language. Hashtags should aid discovery or categorisation, not replace meaningful wording.

## 3.4 Moderation and replies
Create response rules for questions, criticism, misinformation, spam and safeguarding concerns. Do not publish personal data from comments. Escalate threats, allegations or sensitive cases to an authorised human reviewer.

**Worked example:** A post promoting a free Chemistry lesson should state the topic, learner level, what the lesson covers and where to access it. It should not promise guaranteed grades or use fabricated testimonials.

**Practical task:** Plan seven days of posts for one campaign. For each, specify audience, format, message, visual and measurable action.`,
`# Module 4: Visual design, accessibility and brand consistency

## 4.1 Design for communication
A visual should clarify the message. Establish hierarchy using a clear title, supporting information and one focal point. Use consistent spacing, alignment, typography and a limited colour palette. Avoid overcrowding and decorative effects that reduce legibility.

## 4.2 Design an educational graphic
A process diagram should show steps in order; a comparison table should align comparable features; a scientific diagram should label structures accurately. Captions should explain what the reader should notice.

## 4.3 Accessibility
Use sufficient colour contrast, readable text, descriptive alternative text, meaningful headings and captions for video. Never rely on colour alone to communicate a distinction. Check the design on a small mobile screen.

## 4.4 AI-generated visuals
Specify subject, purpose, composition, audience, style and required exclusions. Review outputs for distorted text, incorrect scientific details, stereotypes, misleading depictions and possible rights concerns. Use licensed or original assets and retain a record of asset sources.

**Worked example:** A water-cycle graphic needs evaporation, condensation, precipitation and collection in a scientifically sensible sequence. A visually attractive image with reversed arrows is educationally wrong.

**Practical task:** Create a one-page infographic brief. Include exact labels, reading order, accessibility requirements and a fact-checking checklist.`,
`# Module 5: Repurposing, editorial quality and publishing operations

## 5.1 Repurpose with purpose
Repurposing adapts a substantial source into formats suited to different audiences. A lesson may become a summary, quiz, short explainer, teacher handout and revision post. Each adaptation should preserve meaning while changing structure and depth appropriately.

## 5.2 Editorial workflow
A controlled workflow is: brief → research → outline → draft → subject review → copy-edit → accessibility check → approval → publish → monitor → update. Assign a responsible person to each approval stage.

## 5.3 Quality assurance checklist
Check names, dates, units, calculations, links, image rights, spelling, source accuracy, mobile layout and calls to action. Test downloads and forms. Keep a correction log for significant changes.

## 5.4 Content maintenance
Evergreen material still needs periodic review. Set review dates for policy, curriculum, prices, admissions, vacancies and other information that can change. Display update dates honestly.

**Worked example:** Turn a 1,500-word lesson into a 200-word summary and a five-question quiz. Compare both with the original lesson to ensure no important condition or exception has been lost.

**Practical task:** Design an editorial workflow for a small team. Include named roles, approval gates, file naming and a correction procedure.`,
`# Module 6: Content campaign capstone and assessment

## Capstone project
Develop a two-week content campaign for a real educational, community or small-business objective. Submit:
1. Audience and problem statement.
2. Content brief and research notes.
3. One detailed article or lesson.
4. Three platform-adapted posts.
5. One original infographic or visual brief.
6. A publishing calendar.
7. Accessibility, rights and fact-check records.
8. A measurement and improvement report.

## Evaluation
Assess usefulness and audience fit (20%), factual accuracy and evidence (20%), clarity and structure (15%), visual/accessibility quality (15%), channel adaptation (10%), editorial controls (10%) and measurement plan (10%).

## Knowledge check
1. Why should a content brief identify an audience?
2. What is the difference between a primary source and a secondary source?
3. Give two ways to make a graphic accessible.
4. Why must a repurposed post be checked against its source?
5. Name four stages in an editorial workflow.

**Suggested answers:** A brief aligns content to a real need; a primary source provides original evidence while a secondary source interprets it; use contrast, alt text, captions and readable type; adaptation can change meaning; workflow examples include research, drafting, review, approval and publishing.

**Professional standard:** AI may accelerate drafting and ideation, but a named human editor remains accountable for accuracy, rights, safety and final publication.`
],
"ai-digital-marketing":[
`# Module 1: Digital marketing foundations and the customer journey

## 1.1 Meaning and scope
Digital marketing uses online channels and measurable communication to reach audiences, explain value and support customer action. Channels include search, websites, email, social platforms, online video and paid advertising. The best channel depends on audience behaviour and the objective.

## 1.2 The customer journey
A practical journey includes awareness, consideration, conversion, retention and advocacy. A person may discover a course through search, compare its curriculum, register, complete lessons and recommend it. Each stage needs relevant information and a suitable next step.

## 1.3 Define measurable objectives
Use specific outcomes: qualified enquiries, completed registrations, purchases, lesson completion or repeat visits. “Go viral” is not a reliable business objective. Record a baseline, target, time period and measurement source.

## 1.4 Value proposition
Explain who the offer helps, what problem it addresses, what is included and why it is credible. Do not use unsupported guarantees or fabricated social proof.

**Worked example:** A free online mathematics course may aim to increase completed learner registrations. Its landing page should explain level, topics, lesson format, prerequisites and registration steps.

**Practical task:** Map one product or service to the customer journey. Write one useful message and one measurable action for every stage.`,
`# Module 2: Audience research, segmentation and positioning

## 2.1 Research needs and intent
Use interviews, surveys, search queries, customer questions, support records and analytics where lawfully available. Separate observed evidence from assumptions. AI can group anonymised feedback, but small or biased samples must not be treated as representative of everyone.

## 2.2 Segmentation
Segments can be based on needs, behaviour, location, language, stage of learning or product use. Collect only information needed for a legitimate purpose. Avoid sensitive or discriminatory targeting.

## 2.3 Positioning
Positioning describes the distinct value an offer should occupy in the audience's mind. Compare alternatives on relevant dimensions such as cost, depth, convenience, support and credibility. Do not claim superiority without evidence.

## 2.4 Create a practical persona
A useful persona records a real user need and context, not a fictional stereotype. Example: “A working adult who needs evening, mobile-friendly introductory spreadsheet lessons and downloadable practice files.”

**Worked example:** If analytics show that many visitors leave a course page before registration, investigate clarity, load speed, eligibility, trust signals and form friction before assuming the audience is uninterested.

**Practical task:** Create two evidence-based audience segments and list what additional research would validate each one.`,
`# Module 3: Search marketing, SEO and content intent

## 3.1 Search intent
Search intent is the purpose behind a query: informational, navigational, commercial investigation or transactional. A query such as “how to balance chemical equations” needs a worked explanation; “enrol in chemistry course” needs a clear course page.

## 3.2 On-page SEO
Use a descriptive page title, concise meta description, one clear main heading, logical subheadings, descriptive URLs, helpful internal links and image alternative text. Content should answer the question comprehensively without repetition or keyword stuffing.

## 3.3 Technical foundations
Pages should be crawlable, mobile-friendly, secure, fast and free of broken navigation. Use canonical URLs consistently, submit an accurate sitemap and ensure important pages are linked from relevant sections. Structured data must match visible page content.

## 3.4 Local and international discovery
For international audiences, create genuinely useful country or region pages with accurate local details, language and education context. Avoid mass-producing near-identical pages that simply swap country names.

## 3.5 AI-assisted SEO workflow
AI can cluster queries, propose outlines and identify missing questions. Verify search demand, intent, factual claims and page performance using actual tools and first-party data.

**Worked example:** For “Cambridge IGCSE Biology cell structure notes”, a useful page should include level-specific explanations, labelled diagrams, key terms, exam-style questions and links to related topics.

**Practical task:** Select five queries for one page. Label intent, propose a page title and headings, and explain what unique value the page will provide.`,
`# Module 4: Campaign planning, creative testing and paid media

## 4.1 Campaign structure
A campaign has an objective, audience, offer, message, channel, budget, schedule, landing page and measurement plan. Ensure the landing page fulfils the promise made in the advertisement.

## 4.2 Creative variants
Test one meaningful variable at a time where possible: headline, image, offer framing or call to action. Keep audience and measurement consistent enough to interpret results. Do not select a winner from tiny or premature samples.

## 4.3 Budget and funnel metrics
Track impressions, reach, clicks, click-through rate, cost per click, conversions and cost per conversion. Definitions vary by platform; document the exact denominator and attribution window.

**Worked calculation:** An advert receives 2,000 impressions and 80 clicks. CTR = (80 ÷ 2,000) × 100 = 4%. If the campaign spends KSh 2,400, CPC = 2,400 ÷ 80 = KSh 30. If 8 people register, cost per registration = 2,400 ÷ 8 = KSh 300.

## 4.4 Ethical advertising
Clearly identify sponsored content, use truthful claims, respect consent and privacy, and avoid misleading urgency or deceptive interface patterns. Check platform policies before launch.

**Practical task:** Draft two distinct ad concepts for one offer. Specify the hypothesis, audience, landing-page match and success metric.`,
`# Module 5: Analytics, conversion optimisation and retention

## 5.1 Measurement framework
Connect each metric to a business or learning outcome. A high click-through rate is not enough if visitors do not find the promised information or complete the intended action.

## 5.2 Conversion rate
Conversion rate = (number of conversions ÷ number of eligible visits or interactions) × 100. State the denominator clearly. Compare like with like across dates, channels and devices.

## 5.3 Landing-page improvement
Review page speed, message clarity, mobile layout, trust information, form length, error messages and next steps. Change one or two elements, record the date and evaluate the effect.

## 5.4 Retention and lifecycle communication
Useful follow-up may include onboarding, lesson reminders, progress guidance and relevant updates. Obtain appropriate consent, provide opt-out mechanisms and avoid excessive messaging.

**Worked example:** A page has 500 eligible visits and 25 registrations: conversion rate = 25 ÷ 500 × 100 = 5%. After simplifying an unclear form, it receives 600 visits and 42 registrations: 7%. This is an encouraging observation, but check traffic mix and sample size before attributing the change solely to the form.

**Practical task:** Build a one-page dashboard specification with five metrics, definitions, data sources and the decision each metric informs.`,
`# Module 6: Integrated digital marketing capstone

## Capstone
Plan a 30-day campaign for a real course, service or product. Include:
1. Objective, baseline and target.
2. Evidence-based audience segments.
3. Search-intent and keyword map.
4. One SEO landing-page outline.
5. Two organic social posts and two ad concepts.
6. Budget and funnel calculations.
7. Analytics dashboard specification.
8. Privacy, consent and claims checklist.
9. A weekly optimisation decision log.

## Assessment — 20 marks
- Audience research and positioning: 4
- Search and landing-page strategy: 4
- Campaign design and ethical claims: 4
- Correct metric calculations: 4
- Measurement and optimisation plan: 4

## Review questions
Explain search intent; calculate CTR from 150 clicks and 5,000 impressions; distinguish CPC from cost per conversion; name three landing-page checks; explain why consent and accurate claims matter.

**Worked answer:** CTR = 150 ÷ 5,000 × 100 = 3%. CPC measures cost per click; cost per conversion measures cost for the defined completed action. A responsible marketer reports limitations and does not present correlation as proof of causation.`
],
"ai-business":[
`# Module 1: Opportunity discovery and customer problems

## 1.1 Start with a problem
A business opportunity exists when a defined group experiences a problem and is willing and able to adopt a solution. AI brainstorming can generate ideas, but an idea is only a hypothesis until tested with potential customers.

## 1.2 Problem interviews
Ask about recent behaviour rather than leading questions. Useful questions include: “Tell me about the last time this happened”; “What did you do?”; “What was difficult?”; and “What did it cost in time or money?” Do not ask only whether someone likes your idea.

## 1.3 Opportunity assessment
Assess customer urgency, frequency, existing alternatives, willingness to pay, delivery capability, competition, regulation and likely costs. Record assumptions and evidence separately.

## 1.4 AI for idea development
Ask AI to generate alternative customer segments, interview questions, risks and low-cost experiments. Do not upload confidential customer information without a lawful basis and appropriate safeguards.

**Worked example:** A small tutoring business suspects parents need flexible evening lessons. Test this through interviews and a small pilot timetable before investing in a full platform.

**Practical task:** Write three problem hypotheses and design one low-cost experiment for each.`,
`# Module 2: Business models, planning and financial assumptions

## 2.1 Business model
A business model explains the customer, value offered, delivery method, revenue source, key costs, partners and essential activities. A business plan should make these relationships explicit.

## 2.2 Revenue models
Examples include one-time sales, subscriptions, service fees, commissions, licensing and freemium upgrades. Select a model that fits the value delivered and customer purchasing behaviour.

## 2.3 Basic financial planning
Separate fixed costs from variable costs. Estimate price, sales volume, direct cost, operating expenses and cash timing. Label estimates as assumptions rather than confirmed facts.

**Worked example:** A service sells 40 sessions at KSh 1,000 each. Revenue = 40 × 1,000 = KSh 40,000. If direct delivery costs are KSh 400 per session, contribution = 40 × (1,000 − 400) = KSh 24,000 before fixed costs and tax. This is not the same as net profit.

## 2.4 Break-even
Break-even units = fixed costs ÷ contribution per unit, assuming a single product and stable costs. If fixed monthly costs are KSh 18,000 and contribution is KSh 600 per session, break-even = 30 sessions.

**Practical task:** Prepare a one-page business model and a simple monthly forecast. Identify five assumptions that require validation.`,
`# Module 3: AI-supported operations and process improvement

## 3.1 Map the process
Describe the task from trigger to completion. Record who performs each step, what information is needed, where errors occur and what outcome is expected. Automating a poorly designed process can make mistakes happen faster.

## 3.2 Identify suitable AI tasks
AI may assist with classifying enquiries, drafting routine responses, summarising documents, extracting non-sensitive fields and preparing first drafts. Keep human review for consequential, financial, legal, safety or customer-impacting decisions.

## 3.3 Standard operating procedures
An SOP should include purpose, scope, role, prerequisites, numbered steps, quality checks, escalation route and version date. Use plain language so another trained person can follow it.

## 3.4 Measure improvement
Compare baseline and improved process using time per task, error rate, rework, cost and customer experience. Record how the measures were collected.

**Worked example:** A shop receives 50 weekly enquiries. A classification assistant can sort messages into stock, delivery and returns categories, but a staff member confirms the category and sends the final response.

**Practical task:** Map one repetitive business process and propose an AI-supported improvement with a manual fallback.`,
`# Module 4: Marketing, sales and customer service systems

## 4.1 Explain the offer
A clear offer states the target customer, problem solved, deliverables, price or pricing basis, conditions and next step. Avoid exaggerated claims and hidden fees.

## 4.2 Sales pipeline
A simple pipeline may include new enquiry, qualified lead, proposal, decision, won/lost and follow-up. Define each stage so staff classify opportunities consistently.

## 4.3 Customer service knowledge base
Create approved answers for common questions, policies, delivery, refunds and escalation. AI should retrieve or draft from current approved information, not invent policies.

## 4.4 Service recovery
When a customer reports a problem, acknowledge it, clarify facts, explain the next action and give a realistic response time. Escalate cases involving safety, privacy, payment disputes or legal concerns.

**Worked example:** If a customer asks whether a course guarantees employment, the response should accurately describe learning outcomes and support offered, while stating that employment depends on many factors and is not guaranteed.

**Practical task:** Draft five FAQs and a response escalation matrix for a small business.`,
`# Module 5: Cash flow, records, risk and responsible AI

## 5.1 Cash flow versus profit
Profit is calculated income less expenses over a period; cash flow tracks actual money entering and leaving. A profitable business can still face a cash shortage when customers pay late or stock is purchased in advance.

## 5.2 Record keeping
Maintain accurate sales, expenses, invoices, receipts, inventory and payment records. Reconcile transactions and restrict access to personal and financial information. AI summaries must be checked against source records.

## 5.3 Risk register
Record risk, likelihood, impact, controls, owner and review date. Consider cyber incidents, supplier failure, inaccurate AI output, service interruption, regulatory obligations and reputational harm.

## 5.4 Responsible use
Use minimum necessary data, disclose AI assistance where appropriate, check outputs, protect customer confidentiality and retain human accountability. Never let an untested AI workflow approve payments or make high-impact decisions autonomously.

**Worked example:** A monthly sales report generated by AI says revenue increased 12%. Verify the underlying transactions, date range, refunds and calculation before making a business decision.

**Practical task:** Create a simple cash-flow table and a five-item risk register for a small enterprise.`,
`# Module 6: Small-business capstone and assessment

## Capstone
Develop a practical AI-supported business improvement proposal. Include:
1. Customer problem and interview evidence.
2. Value proposition and business model.
3. Basic revenue, cost and break-even calculations.
4. One process map and SOP.
5. Marketing and customer-service examples.
6. Cash-flow forecast and risk register.
7. AI data-handling and human-approval rules.
8. A 90-day pilot plan with measurable outcomes.

## Assessment — 20 marks
- Customer problem and validation: 4
- Business model and financial reasoning: 4
- Operational workflow and SOP: 4
- Customer communication and marketing: 3
- Risk, privacy and responsible AI: 3
- Pilot measures: 2

## Knowledge check
Differentiate revenue and profit; explain contribution per unit; state why customer interviews should be non-leading; identify two AI tasks requiring human review; explain the purpose of a cash-flow forecast.

**Professional standard:** Treat AI as a support tool. The business owner remains responsible for customer promises, records, finances, legal compliance and final decisions.`
],
"ai-data-analytics":[
`# Module 1: Data literacy, questions and analytical thinking

## 1.1 What is data analytics?
Data analytics is the systematic process of examining data to answer questions and support decisions. A typical cycle is: define the question, obtain data, assess quality, prepare data, analyse, communicate findings and review the decision.

## 1.2 Data types
Categorical data describes groups, such as subject or region. Numerical data represents quantities, such as age or score. Numerical values may be discrete counts or continuous measurements. Dates, identifiers and free-text fields require appropriate handling.

## 1.3 Population, sample and bias
A population is the full group of interest; a sample is the subset observed. A sample can be biased if some groups are missing or more likely to respond. Do not generalise beyond the sampling method and evidence.

## 1.4 Ask an answerable question
Replace “How are learners doing?” with “How did the mean Chemistry score change between Term 1 and Term 2 among learners with results recorded in both terms?” Define the group, measure and period.

**Worked example:** A school has scores 45, 55, 60 and 80. Mean = (45 + 55 + 60 + 80) ÷ 4 = 60. The median is (55 + 60) ÷ 2 = 57.5. Different measures describe different aspects of the distribution.

**Practical task:** Write three analytical questions and identify the fields and records needed to answer each.`,
`# Module 2: Data collection, cleaning and quality assurance

## 2.1 Data sources
Data may come from forms, surveys, transaction systems, sensors, public datasets or research. Check permission, purpose, collection date, definitions and provenance before using it.

## 2.2 Data quality dimensions
Assess accuracy, completeness, consistency, validity, uniqueness and timeliness. A dataset can be large but still unsuitable if key fields are missing or definitions change over time.

## 2.3 Cleaning workflow
1. Preserve an untouched source copy.
2. Inspect columns, types and missing values.
3. Identify duplicate records using appropriate keys.
4. Standardise categories and date formats.
5. Check impossible or out-of-range values.
6. Document every transformation.
7. Validate row counts and key totals.

## 2.4 Missing data
A blank value is not automatically zero. Determine whether it means not recorded, not applicable, unknown or deliberately withheld. Choose a treatment that fits the analysis and report its effect.

**Worked example:** “Nairobi”, “NAIROBI” and “Nairobi ” may represent the same category. Standardise after confirming meaning; do not merge values merely because they look similar.

**Practical task:** Create a data dictionary for a small dataset. List field name, meaning, type, allowed values and missing-value rule.`,
`# Module 3: Descriptive statistics and AI-assisted analysis

## 3.1 Measures of centre
Mean = sum of values ÷ number of values. Median is the middle ordered value. Mode is the most frequent value. The mean is sensitive to extreme values; the median can better describe a skewed distribution.

## 3.2 Measures of spread
Range = maximum − minimum. Variance and standard deviation describe dispersion around the mean. Interpret them in the units and context of the data.

## 3.3 Group comparisons
Compare groups only when definitions and observation periods are consistent. Report group sizes as well as averages. A difference in averages does not by itself explain why the difference occurred.

## 3.4 Use AI carefully
AI can suggest formulas, explain code, summarise patterns and generate chart ideas. Supply a clear data dictionary and ask it to state assumptions. Verify calculations independently using spreadsheet formulas or code.

**Worked example:** Group A mean score is 68 across 30 learners; Group B mean is 72 across 8 learners. Report both means and sample sizes. Do not conclude that the teaching method caused the difference without a suitable study design.

**Practical task:** Calculate mean, median, range and count for a small dataset. Write a short interpretation that includes one limitation.`,
`# Module 4: Spreadsheets, SQL and reproducible analysis

## 4.1 Spreadsheet analysis
Use tables with clear headers, one observation per row and one variable per column. Useful operations include sorting, filtering, conditional summaries, PivotTables and charts. Avoid merged cells in raw data tables.

## 4.2 Common spreadsheet formulas
```
=SUM(B2:B101)
=AVERAGE(B2:B101)
=COUNT(B2:B101)
=COUNTIF(C2:C101,"Complete")
=SUMIF(A2:A101,"Biology",B2:B101)
```
Check the selected ranges and whether blank or text cells affect the result.

## 4.3 SQL foundations
A relational database stores information in related tables. Example:
```sql
SELECT subject, AVG(score) AS mean_score,
       COUNT(*) AS learner_count
FROM assessment_results
WHERE term = 'Term 2'
GROUP BY subject
ORDER BY mean_score DESC;
```
This query groups Term 2 records by subject and calculates average score and record count. Confirm table and field names and whether duplicate or incomplete records exist.

## 4.4 Reproducibility
Keep the source data, cleaning steps, formulas or queries, assumptions and output together. Use version control or dated copies. Another analyst should be able to reproduce the result.

**Practical task:** Analyse a small dataset using a spreadsheet or SQL. Save the steps and verify at least two outputs independently.`,
`# Module 5: Visualisation, interpretation and communication

## 5.1 Choose a chart for the question
Bar charts compare categories; line charts show change over ordered time; histograms show numerical distributions; scatter plots examine relationships between two numerical variables. Pie charts are suitable only for a small number of mutually exclusive parts of a whole.

## 5.2 Avoid misleading visuals
Use honest axes, readable labels, appropriate scales and clear units. Do not omit categories to exaggerate a difference. State the time period and data source.

## 5.3 Correlation and causation
Correlation describes association. It does not establish that one variable caused another. Confounding factors, reverse relationships and selection effects may explain an observed pattern.

## 5.4 Communicate findings
A concise analytical report states the question, data and method, main finding, uncertainty or limitations and recommended next step. Distinguish observation from interpretation and recommendation.

**Worked example:** A line chart shows website visits increasing after a campaign. This is a time association. To estimate campaign impact, compare appropriate periods or groups and account for seasonality, other campaigns and changes in tracking.

**Practical task:** Create two charts from one dataset. Write a caption for each and explain why the chart type is suitable.`,
`# Module 6: Analytics project, ethics and assessment

## Capstone
Complete an end-to-end analysis using a lawful, appropriately anonymised dataset. Submit:
1. Analytical question and intended decision.
2. Data dictionary and source/provenance note.
3. Data quality assessment and cleaning log.
4. Reproducible formulas, SQL or analysis steps.
5. Descriptive statistics and two suitable charts.
6. Findings with limitations and uncertainty.
7. A short decision-focused report.
8. Privacy, access and retention safeguards.

## Assessment — 20 marks
- Question and data selection: 3
- Data quality and cleaning: 4
- Correct analysis: 5
- Visualisation and interpretation: 4
- Limitations, ethics and communication: 4

## Review questions
Define a sample; distinguish categorical from numerical data; calculate the mean of 12, 15 and 18; explain why missing is not necessarily zero; distinguish correlation from causation.

**Suggested answer:** Mean = 15. Other responses should use precise definitions and examples.

**Ethical standard:** Minimise personal data, remove direct identifiers where possible, restrict access, document limitations and never present uncertain model-generated analysis as verified fact.`
],
"ai-excel":[
`# Module 1: Spreadsheet design and AI-supported office productivity

## 1.1 Workbook structure
A workbook contains worksheets. Each worksheet is a grid of rows and columns; a cell is identified by its column letter and row number, such as B4. A range is a group of cells. Formulas begin with an equals sign.

## 1.2 Design a reliable data table
Use one header row, one record per row and one variable per column. Avoid blank rows inside the dataset, merged cells and multiple unrelated tables on one sheet. Convert the range to an Excel Table where appropriate.

## 1.3 AI as a spreadsheet assistant
AI can explain functions, suggest formulas, help plan charts and troubleshoot errors. Provide sample column names and a few fictional rows rather than confidential records. Test suggested formulas on known examples.

## 1.4 Formula references
A relative reference such as A2 changes when copied. An absolute reference such as $A$2 remains fixed. A mixed reference locks either the row or column.

**Worked example:** If quantity is in B2 and unit price in C2, total is `=B2*C2`. Copying down adjusts the row references for each record.

**Practical task:** Build a table of ten fictional sales records with date, item, quantity, unit price and total. Format dates and currency consistently.`,
`# Module 2: Core formulas, logic and error handling

## 2.1 Essential functions
```
=SUM(D2:D20)
=AVERAGE(D2:D20)
=MIN(D2:D20)
=MAX(D2:D20)
=COUNT(D2:D20)
=COUNTA(A2:A20)
```
SUM adds values, AVERAGE calculates the arithmetic mean, MIN and MAX return extremes, COUNT counts numeric cells and COUNTA counts non-empty cells.

## 2.2 Conditional functions
```
=IF(D2>=50,"Pass","Review")
=COUNTIF(E2:E100,"Paid")
=SUMIF(A2:A100,"Books",D2:D100)
=AVERAGEIF(A2:A100,"Biology",D2:D100)
```
The criteria must match the data and the selected ranges should align.

## 2.3 Combining conditions
```
=IF(AND(B2>=50,C2>=50),"Meets both","Check")
=IF(OR(B2>=50,C2>=50),"At least one","Neither")
```
AND requires all conditions to be true; OR requires at least one.

## 2.4 Common errors
#DIV/0! may indicate division by zero; #N/A may indicate a missing lookup match; #VALUE! may indicate an inappropriate data type; #REF! may indicate an invalid reference. Do not hide errors until their cause is understood.

**Worked example:** A learner scores 64. `=IF(B2>=50,"Pass","Review")` returns Pass. If the threshold is stored in F1, use `=IF(B2>=$F$1,"Pass","Review")` so the threshold remains fixed when copied.

**Practical task:** Create a marks sheet with total, average, pass status and conditional counts. Test boundary values such as 49, 50 and 51.`,
`# Module 3: Lookups, text functions and data cleaning

## 3.1 Lookup concepts
A lookup finds a key in one range and returns a related value. In supported Excel versions, XLOOKUP is a flexible option:
```
=XLOOKUP(G2,A2:A50,B2:B50,"Not found")
```
It searches for G2 in A2:A50 and returns the corresponding value from B2:B50. Confirm that keys are unique when one result is expected.

## 3.2 Text cleaning
```
=TRIM(A2)
=CLEAN(A2)
=PROPER(A2)
=UPPER(A2)
=LOWER(A2)
```
These functions remove excess spaces, remove certain non-printing characters or standardise case. Review the result before replacing source values.

## 3.3 Dates and duplicates
Check that dates are genuine date values rather than inconsistent text. Identify duplicates using the correct business key; two people may share a name, so a name alone may not identify a duplicate record.

## 3.4 Data validation
Use dropdown lists and input rules to reduce inconsistent entries. Validation does not replace review of imported or pasted data.

**Worked example:** A lookup table maps course codes to course titles. Use XLOOKUP to return the title, then test a code that does not exist to confirm the fallback message appears.

**Practical task:** Clean a fictional contact or inventory table. Record duplicates, missing fields, standardisation rules and any rows needing manual review.`,
`# Module 4: Analysis tools, PivotTables and visual reporting

## 4.1 Sort and filter
Sort records to identify high or low values and filter to inspect a subset. Keep a clear record of filters used when reporting results.

## 4.2 PivotTables
A PivotTable summarises records by categories. Place a category such as subject in Rows and a numeric field such as score in Values. Change the summary from Sum to Average or Count where appropriate.

## 4.3 Charts
Use column or bar charts for category comparisons and line charts for trends over time. Add a descriptive title, units, labels and source. Avoid 3-D effects that distort comparison.

## 4.4 Conditional formatting
Use rules to highlight values outside a threshold, duplicates or trends. Document the rule so users understand what the formatting means.

**Worked example:** A PivotTable groups sales by product and sums revenue. A second view groups by month. Verify that grand totals reconcile to the source table.

**Practical task:** Build a PivotTable and chart for a fictional dataset. Write three findings and state the limitations of the data.`,
`# Module 5: Reporting, automation and secure spreadsheet practice

## 5.1 Reporting structure
A useful report includes purpose, reporting period, key indicators, results, exceptions, interpretation and recommended actions. Label estimates and distinguish actual results from forecasts.

## 5.2 Repeatable workflows
Power Query can import and transform data using documented steps. Macros or Office Scripts can automate supported tasks. AI may help explain or draft transformation logic, but scripts must be reviewed and tested.

## 5.3 Safe automation
Work on a copy, test with sample data, validate totals, restrict permissions and keep backups. Do not run unknown macros or enable untrusted content. Protect sensitive sheets and files appropriately.

## 5.4 Spreadsheet security and privacy
Avoid storing passwords or unnecessary personal information in workbooks. Use approved storage and sharing permissions. Hidden sheets are not a security boundary.

**Worked example:** A monthly report imports transactions, standardises dates, groups revenue by category and creates a chart. Reconcile the total revenue against the source system before distribution.

**Practical task:** Document a monthly reporting process with input files, transformation steps, validation checks, output and responsible reviewer.`,
`# Module 6: Excel productivity capstone and assessment

## Capstone project
Build a complete workbook for a fictional school, shop or small organisation. Include:
1. A clean source-data table.
2. Data validation and consistent formatting.
3. At least six formulas, including one conditional formula and one lookup.
4. A data-cleaning record.
5. A PivotTable or equivalent summary.
6. Two suitable charts.
7. A one-page management report.
8. A backup, privacy and validation checklist.

## Assessment — 20 marks
- Workbook structure and data quality: 3
- Formula accuracy: 5
- Lookup and conditional logic: 3
- Analysis and PivotTable: 3
- Visual report and interpretation: 3
- Security, documentation and testing: 3

## Review questions
What is an absolute reference? What does XLOOKUP return? Why should missing values not automatically be replaced with zero? Which chart is suitable for a monthly trend? Why should a macro be tested on a copy?

**Suggested answers:** An absolute reference locks a cell reference; XLOOKUP returns a related value for a matching key; missing may mean unknown or not applicable; use a line chart for ordered monthly trends; testing on a copy protects original data.

**Professional standard:** The spreadsheet author is responsible for formula logic, source integrity, privacy and the correctness of any report distributed.`
]
  };
  E.makeLongNotes=function(course,module){
    const base=previous(course,module);
    const slug=course&&course.slug;
    const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
    const extra=notes[slug]&&notes[slug][index];
    return extra ? (base||"")+ "\n\n---\n\n"+extra : base;
  };
})();
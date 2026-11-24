/* CBE Nexus AI Academy — AI for Data Analytics, Modules 2–6.
   Course-specific teaching notes. Chains the existing notes engine and leaves
   Data Literacy Module 1 and all unrelated courses unchanged. */
(function(){
  const E=window.CBENexusAIEnhanced;
  if(!E||typeof E.makeLongNotes!=="function") return;
  const previous=E.makeLongNotes.bind(E);
  const lessons={
    1:`# Module 2: AI-Assisted Analysis — Ask Better Questions Before Calculating

## 1. From a vague request to an analytical question
Analysis begins with a decision or a question, not with a chart or an AI prompt. A request such as “analyse our results” is too broad. Clarify who needs the answer, what decision may follow, which population is relevant, what period is covered and what outcome matters. Convert the request into a question that can be answered with available evidence.

A useful analytical brief identifies: the decision context; the unit of analysis; the population or sample; the time window; the outcome and explanatory variables; the comparison of interest; the required level of detail; and the consequences of an incorrect conclusion. Define terms before analysis. “Performance”, for example, could mean revenue, profit, completion rate, examination score or customer retention.

## 2. Four families of analytical questions
Descriptive analysis asks what happened: how many learners completed a course, what the average waiting time was, or how sales changed over a quarter. Diagnostic analysis asks what may explain an observed pattern. Predictive analysis estimates what may happen under stated assumptions. Prescriptive analysis compares possible actions and their consequences.

These categories are not interchangeable. A descriptive trend does not prove why it occurred. A prediction is not a guarantee. A recommendation depends on objectives, constraints, values and risk tolerance, not just a model score. Label the type of question and the strength of evidence in every report.

## 3. Define measures and denominators
A metric needs a precise definition, unit, population and period. “Attendance was 92%” is incomplete unless the reader knows whether this is learner attendance across school days, the proportion of learners present on a particular day, or a different calculation. A conversion rate needs a numerator and denominator. Revenue needs a currency and accounting period. A mean needs the variable and the number of observations.

Before comparing groups, check that they use the same definitions and measurement process. If one class took a different assessment or one branch recorded returns differently, a direct comparison may be invalid. Record exclusions and missing records.

## 4. Build a transparent AI-assisted analysis prompt
A robust prompt gives the AI a bounded task and forbids unsupported conclusions. Example:

“Act as a data-analysis assistant. The dataset contains one row per [unit] for [period]. The decision question is [question]. First inspect the column names, data types, units, missing values, duplicate keys and valid ranges. Do not modify the source data. Propose suitable descriptive statistics and comparisons, explaining why each is appropriate. Show formulas or reproducible steps. Separate observed facts from interpretations. Do not infer causation. Identify limitations, alternative explanations and checks a human analyst must perform. If a field is ambiguous, ask before analysing it.”

Do not upload personal, confidential or sensitive data to an unapproved AI service. Use synthetic or de-identified samples when learning or testing.

## 5. Sampling, coverage and comparison
A dataset may contain every record in a system or only a sample. A large sample is not automatically representative. Ask how records entered the dataset, who was excluded, whether response rates differ between groups and whether observations are independent. Selection bias can make a result look more general than it is.

For comparisons, state group sizes and periods. Avoid comparing a percentage from a small group with a percentage from a much larger group without showing the denominators. Consider whether differences may reflect age, location, exposure, baseline performance or data-collection methods.

## 6. Worked example: course completion
A training provider asks whether completion improved after introducing weekly reminders. The dataset contains learner code, enrolment date, reminder group and completion status. First define completion: for example, a learner who finished all required modules by the stated deadline. Check whether both groups had the same enrolment window and enough time to complete. Count eligible learners and completers in each group, then calculate completion proportions with denominators.

If the reminder group has a higher completion proportion, report an association. Do not claim reminders caused the improvement unless the comparison design supports that conclusion. Learners who chose to receive reminders may differ from those who did not. A stronger evaluation might randomly assign eligible learners, define the outcome in advance and monitor other differences.

## 7. Interpreting AI output
AI may calculate an incorrect denominator, mistake a code for a quantity, overlook missingness or invent a causal explanation. Recalculate key values independently. Ask the model to show the formula, but do not treat a plausible explanation as verification. Compare outputs with the source data and document corrections.

## 8. Practical exercise and assessment
Use a small synthetic dataset. Write one descriptive, one diagnostic and one predictive question. For each, specify the unit of analysis, population, time period, outcome and data needed. Ask an AI assistant to critique the questions for ambiguity. Revise them and explain what evidence would and would not justify an answer.

A competent submission contains a precise question, a data dictionary extract, definitions of metrics, appropriate denominators, a documented prompt, verified calculations and limitations. A strong submission also identifies sampling risks and proposes a better study design where the data cannot answer the original question.`,

    2:`# Module 3: Spreadsheets — Reliable AI-Assisted Calculations and Data Preparation

## 1. The role of spreadsheets in analysis
A spreadsheet is a grid for organising, calculating and examining data. It can support data entry, validation, formulas, summaries, charts and repeatable reports. A spreadsheet is not automatically a database or a reliable analytical system: poor structure, inconsistent entry, hidden formulas and uncontrolled edits can undermine results.

Keep raw data separate from cleaned data, calculations and presentation. Use one row per observation, one column per variable and one value per cell. Give columns clear names and record units. Avoid merged cells, decorative blank rows and manually typed totals inside the data range. Maintain a read-only source copy before making changes.

## 2. Formula fundamentals
A formula begins with an equals sign and combines references, operators and functions. Relative references change when copied; absolute references, commonly written with dollar signs, remain fixed; mixed references lock either a row or a column. Incorrect reference behaviour is a common cause of spreadsheet errors.

Common functions include SUM for totals, AVERAGE for arithmetic means, MEDIAN for the middle value, COUNT for numeric entries, COUNTA for non-empty cells, COUNTIF for conditional counts, SUMIF for conditional totals, IF for logical branching and lookup functions for retrieving related values. Function names and separators may differ by spreadsheet locale or software version.

Never accept a formula solely because an AI tool generated it. Check the referenced ranges, boundary conditions, treatment of blanks, data types and expected result. Test the formula on a small example whose answer can be calculated by hand.

## 3. Data cleaning without destroying evidence
Cleaning may involve standardising dates, trimming accidental spaces, correcting documented category labels, separating combined fields, identifying duplicates and validating ranges. Do not silently overwrite the raw values. Create a cleaning log with the original field, transformation, reason, date and reviewer.

A duplicate is defined by the intended record key. Two customers may share a name; a single customer may have multiple orders. Missing values are not automatically zero. Distinguish blank, unknown, not applicable and not collected when the distinction matters. Outliers should be investigated rather than deleted merely because they are inconvenient.

## 4. AI as a formula and workflow assistant
A useful prompt includes the spreadsheet software, cell layout, field meaning, desired result, sample rows and edge cases. Example:

“In Excel, the table named Attendance has columns LearnerCode, Class, DaysPresent and DaysPossible. I need an attendance rate by class. Explain a formula or PivotTable approach. Define how blanks and zero possible days should be handled. Show the formula, explain each part, provide a small test case and identify checks before I use the result in a report. Do not assume a cell layout that I have not supplied.”

Do not share confidential workbooks with an unapproved AI service. If a formula depends on a particular version or locale, verify the syntax in that environment.

## 5. Summaries and PivotTables
A PivotTable can group records and calculate summaries without manually writing a separate formula for every category. Choose row fields, column fields, values and filters carefully. Confirm whether a value field is being summed, counted or averaged. A count of non-empty records is not always the same as a count of unique people.

Check that filters are visible and that the PivotTable source range includes all intended records. Refresh summaries after data changes. Explain the aggregation method in the report; a chart labelled “average” should not be based on a sum.

## 6. Validation and error checking
Use data validation to restrict entries where appropriate, such as a date range, a permitted category list or a numeric score range. Add checks for impossible values, missing keys and inconsistent totals. Conditional formatting can highlight exceptions, but colour should not be the only way to communicate an error.

Common formula errors include invalid references, division by zero, mismatched data types, incorrect ranges and lookup failures. A formula may return a number and still be logically wrong. Compare totals with an independent method and inspect selected records manually.

## 7. Worked example: weighted assessment
Suppose a course uses a test worth 40% and a project worth 60%. A learner scores 70 out of 100 on the test and 80 out of 100 on the project. The weighted result is (70 × 0.40) + (80 × 0.60) = 76. Before applying this formula, verify that the weights sum to 1 (or 100%), both component scores use the same scale and missing scores are handled under an approved rule. Do not treat a missing project score as zero unless policy explicitly defines it that way.

## 8. Reproducible spreadsheet workflow
A dependable workbook has clearly named sheets, a documented source, consistent field definitions, protected formulas where appropriate, visible assumptions, a version date and a change log. Separate input cells from calculated cells. Use named tables or ranges to reduce fragile cell references. Provide instructions for refreshing data and reproducing the report.

## 9. Practical lab
Create a synthetic sales or attendance workbook with at least 30 records. Ask AI to propose a cleaning checklist and one formula. Test the formula on three hand-calculated cases, including a blank and a boundary value. Create a summary by category and verify the grand total against the source. Submit the untouched source, cleaned copy, cleaning log, formulas, validation checks and a short explanation of limitations.

Assessment focuses on formula correctness, transparent transformations, appropriate aggregation, independent verification, privacy and reproducibility. A polished workbook with hidden errors does not meet the standard.`,

    3:`# Module 4: Visualisation — Communicating Data Without Misleading the Reader

## 1. Why visualisation matters
A chart helps readers notice comparisons, changes, distributions and relationships. It can also distort evidence when the wrong chart, scale, denominator or visual emphasis is used. Visualisation is an analytical decision, not decoration. Begin by identifying the question and the audience.

A good visual answers one main question, uses accurate data, labels units and periods, provides context and makes uncertainty visible where relevant. The title should describe the finding or comparison without claiming more than the data show.

## 2. Match chart type to analytical purpose
Bar charts compare values across categories. Use a common baseline for ordinary bar comparisons and sort categories when that improves interpretation. Line charts show change over ordered time; avoid connecting unrelated categories as if they were a continuous sequence. Histograms show the distribution of numerical values grouped into intervals. Box plots summarise spread and potential outliers. Scatterplots display the relationship between two numerical variables. Tables are often best when exact values matter.

Pie charts can show parts of a whole when there are only a few categories that sum to 100%. They are poor tools for precise comparison across many categories. Maps should be used only when geographic location is relevant and the geographic data are reliable. A map can exaggerate differences if area, population and denominator are ignored.

## 3. Scale, units and context
Label axes, units, categories, date ranges and data sources. A bar chart that starts its vertical axis at a non-zero value can exaggerate small differences. A line chart may use a restricted range for a legitimate analytical reason, but the choice must be clear and not deceptive. Avoid dual axes unless readers can understand the relationship without confusion.

Distinguish counts, percentages, rates and averages. A count of incidents may rise simply because the population grew. A rate per 1,000 people may provide a fairer comparison when population size differs. Always state the denominator and period. Do not compare percentages with different underlying populations without explanation.

## 4. Visual accessibility and integrity
Use sufficient contrast, readable labels and a logical reading order. Do not rely on colour alone: add direct labels, symbols, patterns or text descriptions. Use colour consistently and avoid unnecessary 3D effects, gradients, shadows and decorative icons. Provide a meaningful text alternative or caption for important charts so readers using assistive technologies can understand the message.

A chart should preserve the data. Do not remove inconvenient categories, hide missing values or choose bin widths solely to create a preferred story. If values are estimated, sampled or incomplete, say so. When showing uncertainty, explain what the interval represents and how it was calculated.

## 5. AI-assisted chart selection
AI can recommend a chart, write spreadsheet steps or draft a caption. It may recommend an inappropriate chart or invent an interpretation. Supply the variable types, number of categories, time structure, audience and question. Ask for at least one alternative and a reason to reject it.

Example prompt: “I have monthly revenue by product category for 12 months. The purpose is to compare trends and identify seasonality. Recommend a chart, explain the axes and aggregation, identify what context and units must be shown, and list two ways the chart could mislead. Do not infer a cause for any change. Provide a concise accessible caption.”

## 6. Worked example: comparing completion rates
Two training programmes report 80% and 90% completion. Before charting, show the number enrolled and completed: 40 of 50 and 9 of 10. The percentages differ by 10 percentage points, but the second estimate is based on a much smaller group. A reader should see both percentages and denominators. If learners had different enrolment windows or eligibility rules, disclose that limitation.

## 7. Reading a chart critically
Ask: What is the source? What does one observation represent? What period is shown? Is the axis truncated? Are groups comparable? Are categories missing? Does the chart show counts or rates? Is the sample representative? What uncertainty remains? Could another explanation fit the pattern? A visual can make a claim feel obvious even when the underlying evidence is weak.

## 8. Practical lab and assessment
Use the same dataset to create a category comparison, a time trend and a distribution chart where appropriate. For each chart, write the question it answers, explain the choice, label units and denominator, provide a source note and draft a neutral caption. Ask AI to critique the charts for misleading choices, then independently decide which suggestions are valid.

A strong submission contains legible charts, correct calculations, transparent scales, accessible labels, appropriate context and a clear distinction between observation and interpretation.`,

    4:`# Module 5: Decision Support — Turning Evidence into Responsible Action

## 1. Evidence informs decisions; it does not make them
Decision support organises relevant information so people can compare options and consequences. A decision usually combines evidence, objectives, constraints, professional knowledge, legal duties, values and the preferences of affected people. A data dashboard or AI recommendation is not a substitute for accountable judgement.

Start by stating the decision, who has authority to make it, who is affected, when it must be made and what happens if the decision is wrong. Identify whether the decision is reversible, low-impact or consequential. The higher the impact, the stronger the evidence, review and appeal mechanisms should be.

## 2. Separate facts, assumptions and judgements
A fact is a statement supported by an identified observation or source. An assumption is a condition accepted for analysis but not yet established. A judgement expresses a priority or interpretation. A recommendation proposes an action. Keep these categories distinct in a decision brief.

For example, “stock fell by 20 units” may be a recorded fact. “Demand will remain high next month” is a forecast or assumption. “Avoid stockouts even if holding costs rise” is a business priority. “Increase the order by 15 units” is a recommendation that depends on all three. Labelling these statements makes the reasoning reviewable.

## 3. Compare options against explicit criteria
Define criteria before scoring options. Criteria might include expected benefit, cost, time, reliability, fairness, accessibility, legal compliance, environmental impact and implementation capacity. Set weights only when the decision owner can explain why some criteria matter more. A weighted score is a structured aid, not an objective truth: different weights can change the ranking.

Use scenario analysis to examine plausible conditions, such as low, expected and high demand. State assumptions and ranges. Sensitivity analysis asks whether the preferred option changes when an important assumption changes. If a small adjustment reverses the ranking, the decision is sensitive and should be treated cautiously.

## 4. Forecasts and uncertainty
A forecast estimates a future value based on data and assumptions. It should state the horizon, method, data period, uncertainty and conditions under which it may fail. A forecast based on historical patterns may fail when policies, prices, weather, population or behaviour changes.

Do not report a single predicted number as certainty. Where possible, show a range or scenarios and explain the assumptions. Compare forecasts with a simple baseline. Monitor actual outcomes and update the approach when errors become systematic.

## 5. AI in decision workflows
AI can help organise evidence, draft options, identify missing information and test scenarios. It can also overstate confidence, reflect biased historical patterns or optimise the wrong objective. Never let a model silently determine high-impact decisions about a person's education, employment, health, finance or access to essential services.

A responsible AI-assisted decision process includes a human decision owner, documented purpose, approved data, validation, explanation, review of group impacts, a route to challenge errors and a record of the final decision. The human reviewer must have the authority and information needed to disagree with the AI.

## 6. Worked case: allocating limited learning support
A school has limited tutoring places and wants to identify where additional support may help. A raw ranking by last test score may overlook attendance barriers, assessment accessibility, language needs or recent improvement. Define the educational purpose and use multiple relevant indicators only where they are appropriate and authorised. Do not label learners permanently or treat a score as a measure of potential.

Consider a transparent process: teachers identify learning needs using current evidence; learners can explain barriers; the school checks whether the assessment was accessible; support criteria are published; decisions are reviewed by staff; and learners can ask for reconsideration. Use aggregate data to monitor whether the support reaches different groups fairly. Protect individual records.

## 7. Decision brief structure
A concise decision brief contains: decision required; responsible owner; evidence and sources; key findings; assumptions; options; criteria; costs and benefits; uncertainty; risks and affected groups; recommendation; monitoring measures; review date; and contingency plan. Include what evidence would change the recommendation.

## 8. Practical exercise
Choose a low-risk scenario such as library opening hours or inventory planning. Define the decision and criteria, compare at least three options, show assumptions and run a sensitivity check. Ask AI to identify omitted stakeholders and alternative explanations. Verify the response and write a decision brief that distinguishes evidence from values.

Assessment rewards transparent criteria, realistic scenarios, uncertainty communication, fairness, human accountability and a practical monitoring plan.`,

    5:`# Module 6: Analytics Capstone — Plan, Analyse, Verify and Present a Complete Project

## 1. Capstone purpose
The capstone demonstrates that a learner can move from a real question to a defensible analytical report. The objective is not to produce the most complicated chart or use the largest AI model. It is to answer a useful question with appropriate evidence, reproducible methods, clear limitations and responsible handling of data.

Choose a manageable, low-risk topic such as synthetic school attendance, public weather observations, a simulated sales dataset, library borrowing or a public transport timetable. Do not use identifiable learner, patient, employee or customer records unless there is explicit authority and an approved secure environment.

## 2. Project proposal
Write a short proposal with the problem, intended audience, decision context, analytical question, unit of analysis, population, time period, variables, data source, permission status and expected output. Define one primary question and no more than three supporting questions. Explain what the dataset cannot answer.

Set success criteria before analysis. Examples include correctly describing the dataset, reproducing key calculations, creating accessible visualisations and communicating at least two limitations. Avoid success criteria such as “prove that our programme works” because they assume the result.

## 3. Data acquisition and preparation
Record the source, download or extraction date, version, licence or permission, coverage and known limitations. Preserve an untouched copy. Create a data dictionary and a cleaning log. Check types, units, missing values, duplicate keys, invalid ranges, inconsistent labels and unusual observations.

For every transformation, record the rule and reason. Do not delete records without a defensible rule. Do not fill missing values with invented numbers. If you exclude records, report how many and explain how exclusion may affect the findings.

## 4. Analysis plan
Map each question to variables and methods before calculating. Use counts and proportions for categories; mean and median for suitable numerical distributions; time summaries for chronological data; and visualisations that match the question. Report denominators, sample sizes and units. If a comparison is not valid, explain why rather than forcing a calculation.

Check key calculations independently. Keep formulas, code or spreadsheet steps. Compare results with a simple baseline and inspect selected records. If AI helped, save the prompt, tool or model details where available, the output used, the corrections made and the human reviewer.

## 5. Interpretation and limitations
Describe what the data show and what they do not show. Separate observed patterns from possible explanations. Consider sampling, measurement, missingness, confounding, changing definitions and unusual events. Correlation is not proof of causation. A small sample may produce unstable estimates. A historical pattern may not continue.

Ask AI to critique the report for unsupported claims, missing denominators, alternative explanations and privacy risks. Verify each suggestion against the original data and trusted sources. Do not cite AI as the factual source for a claim that should be supported by the dataset or an authoritative reference.

## 6. Communicating the project
The final report should contain a clear title, executive summary, question, context, data source, methods, quality checks, findings, visualisations, interpretation, limitations, responsible-use statement and recommendations. Include a short appendix with the data dictionary, cleaning log and calculation details. Make charts accessible and captions understandable without the surrounding presentation.

A presentation should be concise. Explain the most important result, its practical meaning, the uncertainty and the next step. Do not overwhelm the audience with every calculation. Be prepared to explain how the result was obtained and what would change your conclusion.

## 7. Example capstone: public rainfall and crop yield
A learner may compare monthly rainfall with publicly available crop-yield figures across several seasons. First check whether the data refer to the same geographic area and agricultural season. Record units, missing months and any change in measurement methods. A scatterplot may show an association, but crop variety, soil, irrigation, pests, fertiliser, planting dates and market conditions may also affect yield. Do not claim rainfall alone caused the observed yield pattern.

## 8. Capstone marking rubric (100 marks)
Problem definition and analytical question: 10. Data provenance, permission and dictionary: 10. Data-quality checks and cleaning log: 15. Appropriate calculations and reproducibility: 15. Visualisation and accessibility: 10. Interpretation and alternative explanations: 15. Privacy, fairness and responsible AI: 10. Communication and decision relevance: 10. Reflection and response to critique: 5.

A passing project must show a verifiable method and honest limitations. A high-quality project is reproducible, proportionate to the question, accessible to its audience and careful about the people represented by the data.

## 9. Reflection and next steps
Reflect on one analytical choice that improved the project, one error or limitation discovered during verification, one AI suggestion you rejected and why, and one additional source or method that could strengthen the analysis. Identify a skill to practise next: spreadsheet formulas, sampling, statistical reasoning, chart design, data governance or communicating uncertainty.

The professional standard is simple: make the question clear, preserve the source, show the method, verify the result, explain uncertainty and remain accountable for the recommendation.`
  };
  E.makeLongNotes=function(slug,course,module,level){
    const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
    if(slug==="ai-data-analytics"&&index>=1&&index<=5){
      const tier=String(level||"basic").toLowerCase();
      const extra=tier==="advanced"?"\n\n## Advanced extension\n\nDesign a repeatable analytical protocol for this module. Define acceptance criteria, edge cases, data governance requirements, independent verification and an audit trail. Conduct a sensitivity or failure analysis and document what would cause you to stop or revise the work. Present a reproducible worked example and justify the limits of any conclusion.":tier==="medium"?"\n\n## Intermediate extension\n\nComplete a practical lab using a synthetic dataset. Document each decision, test at least two edge cases, verify calculations independently and write a short methods note that another learner can reproduce. Ask AI to critique your work for missing assumptions and unsupported claims, then verify its suggestions.":"";
      return lessons[index]+extra;
    }
    return previous(slug,course,module,level);
  };
})();
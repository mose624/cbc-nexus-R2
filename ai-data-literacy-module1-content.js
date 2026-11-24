/* CBE Nexus AI Academy — Data Literacy, Module 1.
   Substantive international-standard notes for the AI for Data Analytics course.
   Adds depth to the existing notes engine without changing course, quiz, certificate,
   learner progress, payment, or resource-download logic. */
(function(){
  const E=window.CBENexusAIEnhanced;
  if(!E||typeof E.makeLongNotes!=="function") return;
  const previous=E.makeLongNotes.bind(E);
  const core = `# Data Literacy: Understanding Data Before Analysis

## Learning objectives
By the end of this module, you should be able to define data literacy; distinguish data, information and evidence; identify rows, columns, variables and observations in a dataset; classify common variable types; assess data quality; recognise missing values and possible bias; use AI to support a basic data review; explain patterns without confusing correlation with causation; and communicate findings with appropriate limitations and human oversight.

## 1. What data literacy means
Data literacy is the ability to read, understand, question, interpret, work with and communicate data in a responsible way. It is not limited to using spreadsheets or writing code. A data-literate person can ask where data came from, what each value represents, how it was collected, what may be missing, which conclusions are justified and who may be affected by a decision based on the data.

Data literacy combines several connected capabilities: data awareness, data collection, data organisation, data quality assessment, basic analysis, interpretation, visual communication, critical evaluation, privacy awareness and ethical decision-making. A person may be technically able to create a chart yet lack data literacy if they cannot explain the source, denominator, uncertainty or limitations.

Data literacy is relevant to education, health, agriculture, public services, research, finance, business and everyday life. A school leader may review attendance patterns; a farmer may compare rainfall and yields; a clinic may monitor waiting times; a small business may examine sales by product. In each case, the quality of the decision depends on understanding the data and its context.

## 2. Data, information, evidence and knowledge
Data are recorded observations, measurements, responses or events. Examples include a learner's recorded attendance, the temperature measured at noon, the number of books borrowed or the value of a sale. Data may be numerical, textual, visual, audio-based or spatial.

Information is data organised or interpreted so that it becomes meaningful. A list of daily attendance records is data; a summary showing that attendance was lower on Mondays during a particular term is information.

Evidence is information that is relevant and sufficiently reliable to support or challenge a claim. Evidence must be assessed for source quality, method, coverage, uncertainty and alternative explanations. A chart alone is not automatically strong evidence.

Knowledge develops when people interpret evidence alongside relevant expertise, context and experience. Decisions also involve values, priorities, risks and responsibilities. Data can inform a decision, but data do not make the decision ethically or automatically.

## 3. Understanding the structure of a dataset
A dataset is an organised collection of related records. In a typical tabular dataset, each row represents one observation or record, each column represents a variable or field, and each cell contains the recorded value for one variable in one observation.

Example: a school attendance dataset may contain one row per learner per school day. Columns could include learner_code, date, class, attendance_status and reason_code. If the dataset contains 500 rows, that does not necessarily mean it represents 500 different learners: the same learner may appear on many dates. Always identify what one row represents before counting records.

A variable is a characteristic that can take different values. Examples include age, class, attendance status, date, subject and assessment score. A value is the recorded entry for a particular variable in a particular observation. A record is the complete set of values for one observation.

A unique identifier distinguishes records or entities. Identifiers should be designed carefully. Names, phone numbers and national identification numbers are usually unnecessary for routine analysis and create privacy risks. A pseudonymous learner code may be sufficient, provided re-identification keys are protected separately.

## 4. Variable types and measurement
Categorical variables describe groups or labels. Nominal categories have no inherent order, such as subject name, county or transport type. Ordinal categories have a meaningful order, such as beginner, intermediate and advanced, or low, medium and high. The distance between ordinal categories is not necessarily equal.

Numerical variables represent quantities. Discrete variables are countable whole-number values, such as the number of books borrowed. Continuous variables can take values across a measurement range, such as height, time or temperature. Some values are stored as whole numbers even though the underlying quantity is continuous.

Dates and times have chronological meaning and should be stored consistently. Text fields may contain names, comments or descriptions. Boolean fields represent two states, such as true/false or yes/no. A code such as 1, 2 or 3 may represent a category rather than a numerical quantity; do not calculate an average of category codes unless the measurement meaning justifies it.

Measurement scales are often described as nominal, ordinal, interval and ratio. Nominal values classify; ordinal values rank; interval values have meaningful equal intervals but no absolute zero, such as Celsius temperature; ratio values have equal intervals and a meaningful zero, such as mass or elapsed time. The measurement scale influences which summaries and calculations are appropriate.

## 5. Data formats, tables and common structures
Structured data follow a defined format, such as a spreadsheet table or relational database. Semi-structured data include JSON or XML records with labels and nested fields. Unstructured data include free-text documents, photographs, audio and video. Different formats require different preparation methods.

A tidy table should have one variable per column, one observation per row and one value per cell. Avoid merging cells inside a data table, embedding several values in one cell, using colour as the only indicator, or placing totals in the middle of raw records. Keep units explicit: 12 may mean 12 days, 12 kilograms or 12 percent. Record the unit in a clear field or column heading.

A data dictionary describes each field: name, definition, data type, unit, permitted values, whether it can be blank, and its source. A dictionary prevents different users from interpreting the same field in different ways. For example, define whether attendance_rate is recorded as 0–1 or 0–100.

## 6. Data quality: fitness for purpose
Data quality is not a single score. It is the degree to which data are suitable for a defined use. Important dimensions include accuracy, completeness, consistency, validity, uniqueness, timeliness and relevance.

Accuracy asks whether values correctly represent what they claim to measure. Completeness asks whether required values are present. Consistency asks whether formats and meanings agree across records and sources. Validity asks whether values conform to defined rules. Uniqueness checks whether duplicate records exist where they should not. Timeliness considers whether data are current enough for the intended decision. Relevance asks whether the data actually address the question.

Quality is purpose-dependent. A dataset suitable for a broad annual trend may be too incomplete or delayed for daily operational decisions. Never describe a dataset as simply good or bad without explaining the intended use and the checks performed.

## 7. Missing values, duplicates and unusual observations
A missing value means that a value was not recorded or is unavailable. It is not automatically zero. Zero may be a genuine measurement, such as zero absences or zero sales. Blank, not applicable, not collected, withheld and unknown can have different meanings and should not be collapsed without justification.

Common reasons for missing data include a question not being asked, a sensor failure, a data-entry omission, a person declining to answer or a field being irrelevant. Record the reason when possible. Before removing rows or filling gaps, determine how much data are missing, whether missingness is concentrated in a group or period, and how the chosen treatment could change the result.

Duplicates may arise from repeated imports, multiple submissions or incorrect identifiers. A duplicate check should use the fields that define a unique record, not an arbitrary single column. Two learners can share a name; one learner can have multiple attendance records on different dates.

An outlier is an observation that differs substantially from the rest. It may be a genuine rare event, a measurement error, a data-entry mistake or a different population. Investigate it before deleting or changing it. Keep an audit trail of corrections and explain any exclusion rule.

## 8. Basic descriptive statistics
Counts show how many observations fall into a category. Frequencies and percentages describe how common a category is. Always state the denominator: 18 absences among 30 learners is 60 percent; 18 absences among 300 learner-days is a different measure.

The mean is the arithmetic average: add all values and divide by the number of values. The median is the middle value after sorting, or the average of the two middle values when there is an even number of observations. The mode is the most frequent value. The range is the maximum minus the minimum. These summaries answer different questions.

Worked example: assessment scores are 40, 50, 50, 60 and 100. The mean is 60. The median is 50. The mode is 50. The range is 60. The high score of 100 raises the mean, so the median may better represent the typical score in this small example. Do not choose a statistic merely because it is familiar; choose one that fits the distribution and question.

Percentages require care. A percentage without its denominator can mislead. A change from 1 to 2 events is a 100 percent increase but only one additional event. A rate should specify the population and time period to which it applies.

## 9. Asking answerable questions
A useful analytical question is specific, measurable and connected to a decision. “How is the school performing?” is too broad. Better questions include: “How did attendance vary by class during Term 2?” or “Which products contributed the largest share of revenue last month?”

Clarify the unit of analysis, population, time period, outcome variable, comparison groups and decision that the analysis may inform. Distinguish descriptive questions (what happened?), diagnostic questions (what may explain it?), predictive questions (what might happen?) and prescriptive questions (what action could be considered?). Each requires different evidence and carries different risks.

## 10. Patterns, correlation and causation
A pattern is a regularity or relationship observed in data. Correlation describes how two variables vary together. Positive correlation means they tend to increase together; negative correlation means one tends to decrease as the other increases. A weak or absent correlation does not prove that no relationship exists.

Correlation does not by itself establish causation. A third variable may influence both; the direction of influence may be reversed; selection effects or measurement problems may create an apparent relationship; or the association may be coincidental. To make causal claims, researchers need an appropriate design and assumptions, such as a well-conducted experiment or a defensible causal-inference method.

Example: learners who attend more lessons may also achieve higher scores. This association does not prove that attendance alone caused the higher scores. Prior attainment, access to learning materials, health, teaching conditions, family circumstances and other factors may also matter. A responsible report says what was observed, what explanations are plausible and what additional evidence would be needed.

## 11. Data visualisation and honest communication
Choose a visualisation according to the question. Bar charts compare categories. Line charts show change over ordered time. Histograms show the distribution of numerical values. Scatterplots show relationships between two numerical variables. Tables are useful when readers need exact values. Maps are appropriate when location is meaningful and geographic data are sufficiently reliable.

Label axes, units, time periods and categories. Use a clear title that describes what is being shown. State the source and relevant sample size. Avoid truncated axes that exaggerate differences, 3D effects that distort comparisons, overloaded colours and decorative graphics that obscure meaning. Do not use a pie chart for many categories or when precise comparisons are required.

A good data explanation states the question, method, main finding, uncertainty or limitation and practical implication. Distinguish observed results from interpretation and recommendation. If a chart shows a change, do not imply that a policy caused it unless the evidence supports that claim.

## 12. Bias, representation and fairness
Bias can enter at collection, sampling, measurement, labelling, cleaning, analysis, interpretation or deployment. A dataset may under-represent rural learners, people with disabilities, a language group or people with limited internet access. A model trained on such data may perform less reliably for those groups.

Ask who is represented, who is missing, who decided what to measure, whether categories are appropriate, whether collection conditions differ, and who may be harmed by an error. Disaggregate results only when lawful, necessary and statistically responsible; small groups can be identifiable even when names are removed.

Fairness is contextual and cannot be established by one metric alone. Consider the purpose, consequences, affected groups, error distribution, accessibility and available remedies. High-impact decisions about education, employment, finance, health or access to services require stronger safeguards and accountable human review.

## 13. Responsible data handling and privacy
Collect only information needed for a legitimate purpose. Explain the purpose, restrict access, use appropriate security, retain data only as long as necessary and follow applicable laws and institutional policy. Do not paste identifiable learner records, confidential business information, health information or private staff data into a public AI tool.

De-identification removes direct identifiers; pseudonymisation replaces identifiers with codes; anonymisation aims to prevent re-identification. These are not interchangeable. A dataset without names may still identify people through combinations of location, age, dates or rare characteristics.

Respect copyright, licence conditions, consent requirements and data-sharing agreements. Keep a record of data sources and transformations. When uncertain, stop and seek approval from the responsible data-protection or institutional officer.

## 14. Using AI as a data-literacy assistant
AI can help explain column meanings, suggest data-quality checks, draft spreadsheet formulas, summarise a dataset, propose visualisations and identify questions for further investigation. It can also misread column types, invent patterns, make arithmetic mistakes, ignore missingness, overstate causation or expose sensitive data.

The human analyst must define the problem, confirm that the dataset is appropriate, inspect the inputs, verify calculations, test alternative explanations and approve any consequential recommendation. AI output is a draft analytical aid, not an independent source of truth.

A safe workflow is: use a synthetic or de-identified sample; describe the dataset and its limitations; ask for proposed checks before conclusions; request calculations with formulas or reproducible steps; independently recalculate important results; compare outputs with the original data; document corrections and retain human approval.

## 15. Professional workflow for a small data task
First, define the decision or question. Second, identify the population, unit of analysis and time period. Third, confirm authority to use the data. Fourth, inspect the source and data dictionary. Fifth, preserve an untouched copy. Sixth, check structure, types, missing values, duplicates, ranges and inconsistent categories. Seventh, document any cleaning. Eighth, calculate appropriate descriptive summaries. Ninth, visualise only what is relevant. Tenth, test alternative explanations and limitations. Eleventh, communicate findings with evidence. Twelfth, obtain human review before action.

A reproducible workflow records the dataset version, date, source, transformations, formulas or code, assumptions, exclusions, outputs and reviewer. Another competent person should be able to understand how the result was produced.

## 16. Worked case study: school attendance and achievement
A school leader wants to understand whether attendance patterns are associated with assessment performance. The supplied spreadsheet has one row per learner, with learner_code, class, attendance_percentage and assessment_score.

Before analysis, confirm what period the attendance percentage covers, how the score was calculated, whether all learners took the same assessment, and how missing scores are represented. Check that percentages are between 0 and 100, scores are within the assessment's valid range, learner codes are unique, and class labels are consistent.

Suppose 120 learner records are supplied, but 8 assessment scores are blank. Report the number of complete records and do not silently treat blank scores as zero. Compare attendance and score distributions, inspect a scatterplot and calculate a correlation only if the variables and data quality support it. Check whether patterns differ substantially by class and whether the sample is representative.

If higher attendance is associated with higher scores, report an association, not proof of causation. Consider confounding factors and avoid using the result to label or punish individual learners. A fair next step may be to investigate barriers to attendance and provide supportive interventions, while protecting learner privacy.

## 17. Practical demonstration: two-stage AI prompt
Prompt version 1: “Review this de-identified dataset. Describe its columns, identify missing values and possible data-quality issues, calculate appropriate descriptive statistics, and suggest two useful visualisations. Do not make causal claims. State uncertainty and show how calculations can be checked.”

Prompt version 2: “You are assisting a data analyst. Context: this dataset contains one row per learner for one school term. The outcome is an assessment score from 0 to 100; attendance_percentage is recorded from 0 to 100. Task: first inspect structure, types, missing values, duplicates, invalid ranges and inconsistent labels. Do not modify the source data. Then calculate the number of records, missingness by field, mean and median for numerical fields, category counts and any appropriate association. Constraints: do not infer causation, do not identify individuals, do not invent missing values, and do not recommend high-impact action about an individual learner. Output: data dictionary observations, quality report, calculations with formulas, findings, alternative explanations, limitations and recommended human checks. If the data do not support a calculation, explain why.”

Compare both outputs. Check whether the second prompt produces more relevant and auditable results. Do not assume it is correct simply because it is longer.

## 18. Teacher application
A teacher can use anonymised class-level data to identify topics where learners may need additional instruction. Start with a clear learning question, check how the assessment was designed, compare like with like and consider accessibility and language factors. Use results to plan support, not to define a learner's ability or potential. Verify AI-generated explanations, examples and calculations before sharing them with learners.

## 19. Student application
Students can use data literacy to interpret science experiments, compare survey results, read charts in the news and evaluate claims online. Ask: Who collected the data? What does each row represent? What is the sample size? What is missing? Does the chart show counts, percentages or rates? Could another explanation fit the pattern? Use AI to practise these questions, but write your own interpretation and verify the evidence.

## 20. Business application
A small business may analyse weekly sales by product. Define whether the objective is revenue, units sold, margin, repeat purchases or stock planning. Confirm currency, tax treatment, returns and date boundaries. Do not confuse revenue with profit. Do not invent market statistics or customer details. Measure whether the analysis improves stock availability, service quality, decision time or another stated outcome.

## 21. Evaluation rubric
Assess an AI-assisted data task from 1 to 5 on: accuracy of data description; correct identification of variable types; completeness of quality checks; correctness and reproducibility of calculations; relevance of visualisations; distinction between observation and interpretation; evidence and source quality; privacy and fairness; clarity of communication; and appropriate human oversight. Keep a short evidence note for every score. A fluent report is not automatically a reliable report.

## 22. Common mistakes to avoid
Do not assume one row always means one person. Do not treat missing as zero. Do not average category codes without justification. Do not delete outliers before investigating them. Do not report percentages without denominators. Do not infer causation from correlation. Do not compare groups with different definitions or time periods without explanation. Do not let an AI tool silently change source data. Do not publish identifiable records or unsupported recommendations.

## 23. Key takeaway
Data literacy is disciplined questioning and responsible interpretation. Reliable analysis begins with understanding the data structure, purpose, quality and context. AI can accelerate parts of the work, but the learner or analyst remains responsible for verification, fairness, privacy, explanation and decisions.`;

  const intermediate = `

## Intermediate practice: build a defensible data-quality report
Create a copy of a small de-identified dataset and prepare a data dictionary. Define the unit of analysis, expected record count, valid ranges, permitted categories and unique-key rule. Run checks for blanks, duplicates, invalid values, inconsistent formats and unusual observations. For each issue, record the number of affected records, likely cause, proposed treatment and possible impact on analysis. Do not overwrite the original dataset.

Calculate mean, median, range and category frequencies where appropriate. Explain why each statistic is suitable. If you compare groups, report group sizes and denominators. If you calculate a relationship, inspect the distribution and outliers first and explain why the association does not establish causality.

## Intermediate lab: create a reproducible analysis brief
Prepare a one-page brief with the question, data source, population, time period, unit of analysis, cleaning decisions, calculations, chart choice, findings, limitations and next steps. Include enough detail for another analyst to repeat the work. Ask an AI assistant to critique the brief for unsupported claims, missing denominators and hidden assumptions; verify each critique against the dataset.

## Intermediate assessment standard
A competent submission identifies the structure correctly, documents quality issues, selects appropriate summaries, shows reproducible calculations, uses honest visualisations, explains uncertainty and protects personal data. A strong submission also compares alternative explanations and explains how missingness or sampling could change the conclusion.`;

  const advanced = `

## Advanced professional practice: analytical governance
Before using data for a consequential decision, define the decision owner, lawful purpose, permitted data, access controls, retention period, review process and remedy if an error occurs. Establish a clear separation between data preparation, analytical judgement and final approval. Record the version of the data and the version of any model or AI tool used.

## Advanced lab: sensitivity and robustness checks
Repeat the analysis using defensible alternative treatments for missing data; compare results with and without a verified extreme observation; test whether conclusions change across relevant groups or time periods; and document the assumptions behind each comparison. Do not select the version that gives the preferred answer. Explain which conclusions remain stable and which are sensitive to methodological choices.

## Advanced AI workflow specification
Design a staged process with separate prompts for data profiling, validation, descriptive analysis, interpretation and report critique. Require structured outputs and explicit uncertainty. Use test cases containing missing values, duplicates, unusual but valid observations, inconsistent labels and misleading correlations. Independently verify formulas and sample outputs. Include a human approval gate before any action that affects a person.

## Advanced capstone
Deliver a small analytical project containing: a defined decision question; a data dictionary; a source and permission statement; a data-quality report; a documented cleaning log; reproducible calculations; at least two justified visualisations where useful; an interpretation distinguishing association from causation; a fairness and privacy review; a limitations statement; and a 200–300 word reflection. Include three test cases and explain one failure discovered during review.

## Professional performance criteria
A professional-quality result is accurate, relevant, reproducible, transparent, privacy-aware, fair, accessible and proportionate to the decision. The analyst must be able to explain the method without relying on the AI system's authority. Human accountability remains essential.`;

  E.makeLongNotes=function(slug,course,module,level){
    const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
    if(slug==="ai-data-analytics"&&index===0){
      const tier=String(level||"basic").toLowerCase();
      return core+(tier==="advanced"?advanced:tier==="medium"?intermediate:"");
    }
    return previous(slug,course,module,level);
  };
})();
# CBE Nexus — Global subject and chapter audit
**Audit date:** 16 November 2026  
**Scope:** 196 registered countries; Biology, Chemistry, Physics and Mathematics.

## Executive result

The register contains **196 countries × 4 subjects = 784 country–subject records**. The repository contains broad supplementary subject resources across the country banks, but this is not the same as having every official national syllabus mapped into chapter-by-chapter notes.

The formal chapter register currently records:
- **784** country–subject combinations.
- **783** subject records still marked `curriculum-mapping-required`.
- **1** partial chapter inventory: Kenya Grade 10 Biology.
- **4** chapter records in that partial inventory.
- **0** chapters marked curriculum-verified.
- **0** chapters certified as meeting the full completion standard.
- **10,000 words per chapter** remains a target; the global register does not certify that target for all countries or subjects.

## Country resource coverage

The main country starter groups contain 194 rows: 50 Africa-batch entries, 50 Asia-batch entries and 94 global-remaining entries. After canonical country-name reconciliation, these represent 192 registered countries. Kenya, Rwanda, Tanzania and Uganda are represented in separate country-specific files. Taiwan appears as an additional education jurisdiction outside the 196-country register.

The main starter inventory is recorded as a supplementary unit with 12 sections, 10 diagrams and 15 practice questions per country–subject entry. The 10,000-word target is explicitly not measured or certified in that starter inventory.

The global deep-wave files add supplementary subject study units. Their own source comments and data labels identify them as supplementary resources and state that learners must check the current national syllabus, grade, pathway and topic sequence. For example, the deep-wave generators add separate Biology, Chemistry, Physics and Mathematics records with contextualised sections, worked examples, activities and practice questions. They do **not** by themselves establish an official chapter list or a 10,000-word chapter.

Additional country batches and subject-specific extensions add worked examples, assessments, local contexts, practical tasks, diagrams and SEO metadata in selected areas. These additions are useful enrichment, but they do not prove that all chapters in all four subjects have been authored or curriculum-verified.

## What is and is not complete

| Audit dimension | Finding |
|---|---|
| Country register | 196 countries |
| Subject register | 4 subjects per country |
| Country–subject records | 784 |
| Supplementary starter resources | Broad coverage across the global country banks and separate country files |
| Official curriculum authority, syllabus and grade/pathway mapping | Not complete across the 784 records |
| Official chapter-by-chapter inventory | Not complete |
| 10,000-word chapter measurement | Not complete globally |
| Minimum 10 diagrams and 15 exam questions | Starter units contain these counts as recorded; deeper chapter-level compliance is not certified globally |
| SEO and AI-search metadata | Present in selected country/subject expansions; not verified for every chapter in every country |

## Evidence reviewed

- `country-curriculum-chapter-completion-register.js` — formal 196-country, four-subject register and current completion statuses.
- `country-online-notes.html` — script loading order for the country notes banks and subject-specific extensions.
- `country-online-notes-data.js` and `country-online-notes-country-expansion.js` — Kenya and selected East African country resources.
- `country-online-notes-rwanda-reb.js` and `country-online-notes-international-country-expansion.js` — additional country-specific resources.
- Africa and Asia Learning Studio batch files and `country-online-notes-global-remaining-01-learning-studio.js` — broad country starter resources.
- `country-online-notes-global-deep-wave1-2026.js` and `country-online-notes-global-deep-wave3-2026.js` through `country-online-notes-global-deep-wave20-2026.js` — supplementary country-level subject study units.
- `country-online-notes-batch31-40-worked.js` through `country-online-notes-batch191-196-worked.js` — supplementary worked examples and revision practice.
- Kenya Biology, Chemistry and Physics chapter extensions; Ghana subject-specific Learning Studio extensions; selected country curriculum-audit files.

## Required next steps

1. For each country, identify the current official education authority, curriculum or examination board, school level, language of instruction and applicable pathway.
2. Extract the official chapter/topic sequence separately for Biology, Chemistry, Physics and Mathematics. Where a country has multiple systems or tracks, keep them separate rather than forcing one generic sequence.
3. Match existing notes to the official chapter inventory. Do not invent missing chapter titles or treat generic study units as official chapters.
4. Measure each chapter's rendered text, diagrams, worked examples, questions, practical activities, misconceptions, marking guidance and SEO metadata.
5. Expand chapters below the 10,000-word target and quality thresholds; mark a chapter complete only after both content checks and curriculum verification pass.
6. Preserve existing learner records, payments, routes and public pages while adding or correcting curriculum content.

**Conclusion:** CBE Nexus has a broad global supplementary resource foundation, but the evidence does not support claiming that all 196 countries have complete, official, 10,000-word chapter coverage in all four subjects. The formal register keeps that distinction visible so incomplete work is not incorrectly labelled complete.

# CBC Nexus assessment update: Grade 8 Mathematics and Grade 9 Kiswahili

This package adds two dedicated assessment banks to the existing CBC Nexus Grades 4–10 website while retaining existing subjects, learner details, progress features, one-attempt behavior, and the two-minute-per-question timer.

## Grade 8 Mathematics
- 30 multiple-choice questions, 30 marks.
- Topics include integers, fractions, percentages, HCF, algebra, patterns, perimeter, area, scale drawings, coordinates, solids, statistics, probability, ratios, rates, discounts and simple interest.
- Suggested answers and worked explanations are included.
- Timer: 60 minutes under the site-wide rule of two minutes per question.

## Grade 9 Kiswahili Lugha
- 30 multiple-choice questions, 30 marks.
- Covers comprehension, paragraph analysis, grammar, punctuation, vocabulary, poetry, and cross-text analysis.
- Questions and feedback use Kiswahili. Question 12 has been adapted to test Kiswahili future-tense usage rather than English apostrophe rules, so the Kiswahili resource remains in the language of the subject.
- The poem wording in Questions 21–25 has been lightly adjusted so the rhyme question has a clearer intended answer.
- Suggested answers and explanations are included.
- Timer: 60 minutes under the site-wide rule of two minutes per question.

## Learner attempt and reporting behavior
Learners enter their details before starting. Attempts and answers are saved in the current browser in offline mode; after final submission, the attempt is locked locally. Cross-device reporting and secure server-enforced single attempts require the Supabase backend to be configured and deployed. Written answers in other assessments may still need AI or teacher marking, depending on the assessment bank and backend configuration.

## Validation
- Each new bank contains exactly 30 questions.
- Each question has four options and a valid answer index.
- JavaScript syntax check and ZIP archive integrity check were run.

These are original practice resources, not official KICD or KNEC examination papers.

## Answer-key notes
The Grade 8 Mathematics paper did not provide a letter key, so its suggested key and calculation explanations were derived from the mathematics in each question. The Grade 9 Kiswahili paper also did not include a letter key; its answers were derived from the supplied questions. The Kiswahili Q12 English apostrophe item was replaced with a Kiswahili future-tense item to follow the resource language rule. The poem in Questions 21–25 was lightly refined so the item on end-rhyme has a clearer intended answer.

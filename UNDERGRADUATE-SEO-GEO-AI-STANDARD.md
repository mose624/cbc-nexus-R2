# CBE Nexus undergraduate notes: SEO, GEO and AI discoverability standard

## Purpose

Apply a consistent, evidence-led publishing standard to undergraduate course guides and chapter notes. The objective is to help students find, understand and use accurate learning material. Rankings, featured snippets and AI citations cannot be guaranteed.

## Definitions

- **Primary keyword:** the main search phrase that best describes one page's subject and intent, for example, "undergraduate nursing notes".
- **Secondary keywords:** closely related concepts that a page genuinely covers, such as "nursing assessment", "clinical reasoning" and "patient safety".
- **Long-tail keyword:** a specific multi-word query that often reveals a clear learning need, such as "explain the stages of wound healing with a labelled diagram".
- **Search intent:** what the learner is trying to do: learn a definition, understand a mechanism, solve a calculation, revise for an examination or compare course topics.
- **Keyword mapping:** assigning a distinct primary topic and supporting concepts to each course or chapter so pages do not compete unnecessarily for the same query.
- **SEO title / meta title:** the page title search engines may use as a result heading. It should be accurate, distinctive and readable.
- **Meta description:** a concise summary that may be used as a search-result snippet. It is not a direct Google ranking factor, and search engines may rewrite it.
- **Canonical URL:** the preferred URL for a page when duplicate or alternate URLs exist. CBE Nexus undergraduate pages use the matching https://cbenexus.com/ URL.
- **Structured data:** machine-readable JSON-LD that describes the real page type and its relationships. It must match visible page content and does not guarantee a rich result.
- **GEO (Generative Engine Optimization):** making material clear, attributable, well-structured and useful to generative search and answer systems. It is not a guaranteed ranking technique.
- **AI search optimization:** improving factual clarity, source traceability, entity consistency, concise answers and crawl accessibility so AI systems can interpret the material reliably.
- **Topical authority:** the depth and coherence of useful coverage across a subject, including connected concepts, examples, references and related chapters. It is earned through quality, not a keyword count.
- **E-E-A-T:** experience, expertise, authoritativeness and trustworthiness—quality concepts used in Google's evaluator guidance, not a simple ranking score or schema property.

## Keyword priority model

1. **Priority A — core course intent:** undergraduate [subject] notes; [degree] course guide; [subject] study materials.
2. **Priority A — chapter intent:** exact chapter topic + notes; [topic] explained; [topic] definitions; [topic] worked examples.
3. **Priority B — learning support:** labelled diagrams, case studies, practical applications, revision questions, model answers and exam preparation—only when the page actually contains them.
4. **Priority B — conceptual queries:** "what is [term]?", "how does [process] work?", "difference between [A] and [B]", "steps of [method]" and "advantages and limitations of [concept]".
5. **Priority C — career and programme intent:** course duration, entry requirements, careers and professional pathways. Include only where verified and clearly distinguish general information from country-specific requirements.

Do not target every phrase on every page. Give each chapter one central topic and a small set of genuinely relevant supporting concepts. Avoid keyword stuffing, repeated boilerplate and claims such as "best", "guaranteed high rank" or "official syllabus" unless independently substantiated.

## Required course-page elements

- A unique H1 naming the degree or subject.
- A concise programme overview and clear statement that the outline is illustrative where it is not an institution's official syllabus.
- Learning outcomes using measurable verbs.
- Course structure grouped by year, semester or logical progression.
- Accurate chapter titles and working links to each chapter.
- Admission, accreditation and professional recognition caveats where relevant.
- Related subject links and links to foundational chapters.
- A distinct title, description, canonical URL, Open Graph metadata and appropriate Course/WebPage structured data.

## Required chapter-page elements

- One clear H1 with the chapter number and exact subject.
- A direct introductory answer explaining what the topic is and why it matters.
- Learning outcomes.
- A topic-specific glossary with approximately 10–20 accurate definitions where the subject warrants it; define symbols, abbreviations and units.
- Detailed explanations that distinguish established facts, models, assumptions and areas of uncertainty.
- Labelled, accessible diagrams with meaningful alt text and explanatory captions.
- Worked examples with assumptions, formulae, units, steps, interpretation and checks.
- Relevant cases or practical applications, with safety and ethical limits where applicable.
- Revision questions at more than one cognitive level, with reasoned answers or marking guidance.
- References to current textbooks, peer-reviewed literature, recognised standards or official regulators. Never invent references.
- Links to the parent course, previous/next chapters and genuinely related topics.
- A unique page title, meta description, canonical URL, social metadata and LearningResource/BreadcrumbList structured data that match the visible content.

## GEO and AI answer-readiness

- Put a concise, accurate answer immediately after question-style headings.
- Define specialist terms before using unexplained abbreviations.
- Name the discipline, topic, relevant population or system, units and jurisdiction where these affect the answer.
- Attribute standards, clinical guidance, legal rules and statistics to their original authoritative sources with dates where appropriate.
- Explain limitations and distinguish educational examples from professional advice or official requirements.
- Use descriptive headings, semantic lists and tables only when they improve comprehension.
- Keep the HTML crawlable and server-rendered. Do not hide essential learning content behind client-only interactions.
- Ensure robots.txt and the XML sitemap allow discovery of public learning pages. An optional llms.txt is supplementary, not a replacement for these controls.

## Metadata guidance

- Write titles for people first; normally include the chapter topic, subject and CBE Nexus without repeating the same phrase unnaturally.
- Keep descriptions specific to the page. Aim for a useful, complete summary rather than a fixed character-count formula.
- Keep canonical URLs stable and on the preferred .com domain.
- Use Course schema on course guides and LearningResource on chapters only when consistent with the visible page. Add BreadcrumbList only when the breadcrumb hierarchy is accurate.
- Do not add fake ratings, reviews, authors, publication dates, FAQs or credentials.
- The HTML meta keywords tag is retained only as a legacy/supporting taxonomy field. Google Search does not use it for ranking; page content, titles, links and user value matter much more.

## Priority recommendations for undergraduate content

1. **Accuracy before length:** check scientific names, formulae, units, mechanisms, legal requirements and clinical claims against authoritative sources.
2. **Definitions and terminology:** add a concise, subject-specific glossary to each chapter, not a generic keyword list.
3. **Worked learning:** add step-by-step calculations, annotated diagrams, realistic cases and explanations of common misconceptions.
4. **Assessment value:** include recall, application, analysis and evaluation questions, plus worked answers or transparent marking guidance.
5. **References and review:** cite sources at the point of use, state when a chapter was last academically reviewed, and review fast-changing topics regularly.
6. **Internal linking:** connect prerequisites, related chapters, course guides and next learning steps using descriptive anchor text.
7. **Accessibility and performance:** use semantic HTML, keyboard-accessible controls, descriptive image alternatives, responsive layouts and compressed media.
8. **Quality control:** verify that every linked chapter exists, metadata is unique, structured data validates, and the live page matches the source before requesting indexing.

## Measurement

Track impressions, clicks, click-through rate and query/page pairs in Search Console; crawl/index status and canonical selection; engagement and navigation to related chapters; page performance and accessibility; and factual/source review status. Compare by subject and page type over consistent periods. Do not judge success from keyword counts or promise a particular ranking position.

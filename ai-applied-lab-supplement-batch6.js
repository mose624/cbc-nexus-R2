/* CBE Nexus AI Academy — Applied Learning Supplement, Batch 6.
   Courses 26–30: practical extension notes with six modules per course.
   Preserves prior note extensions and unrelated course functionality. */
(function(){
 const E=window.CBENexusAIEnhanced;
 if(!E||typeof E.makeLongNotes!=="function")return;
 const previous=E.makeLongNotes.bind(E);
 const notes={
"python-programming":[
`# Applied Module 1: Problem decomposition, algorithms and program design

## From problem to solution
Before writing Python, describe the problem, identify inputs, expected outputs, constraints and exceptional cases. Break a large task into smaller functions or steps. This process is called decomposition and makes programs easier to test and maintain.

## Algorithms and pseudocode
An algorithm is a finite sequence of steps for solving a problem. Pseudocode expresses logic without strict programming syntax. A flowchart can show sequence, decisions and repetition.

## Worked example: average score
Inputs: a list of numeric scores. Process: validate that the list is not empty, calculate the sum and divide by the number of scores. Output: the mean. Consider invalid values, missing scores and the distinction between zero and missing.

## Complexity awareness
A simple loop over n records usually grows proportionally to n. Nested loops may require substantially more work as the dataset grows. Choose a clear solution first, then assess performance for realistic data sizes.

## Practical assignment
Write pseudocode for a program that accepts five test scores, checks that each is between 0 and 100, calculates the mean and reports an appropriate grade band. List at least three test cases before coding.`,
`# Applied Module 2: Python functions, modules and reusable code

## Function design
A function performs a focused task. It may accept parameters and return a result. Use descriptive names and document important assumptions. Prefer small functions that can be tested independently.

## Parameters and return values
Distinguish between printing a value and returning it. A returned value can be stored, tested or passed to another function. Avoid unnecessary global variables because they make program behaviour harder to predict.

## Modules and packages
Python modules organise reusable code. Import only what is needed and use virtual environments to isolate project dependencies. Record dependencies so another person can recreate the environment.

## Worked example
```python
def average(values):
    if not values:
        raise ValueError("At least one value is required")
    return sum(values) / len(values)

scores = [72, 81, 65]
print(average(scores))
```
The function explicitly rejects an empty list instead of dividing by zero.

## Practical assignment
Refactor a long script into at least four functions: input validation, calculation, classification and report output. Test each function with normal and boundary values.`,
`# Applied Module 3: Data structures, files and data processing

## Choosing data structures
Lists preserve order and allow changes; tuples are immutable sequences; sets hold unique items; dictionaries map keys to values. Choose a structure based on the operations your task requires.

## File handling
Use context managers so files are closed reliably:
```python
with open("records.txt", "r", encoding="utf-8") as file:
    text = file.read()
```
For CSV and JSON, use the standard library modules rather than manually splitting complex records.

## Data validation
Check required fields, data types, allowed ranges and duplicate identifiers. Keep original data where possible and record transformations. Do not assume that a file is safe simply because it has a familiar extension.

## Worked example
A dictionary can map a learner ID to a score. Before updating a record, confirm that the ID exists and that the score is numeric and within the permitted range.

## Practical assignment
Read a small CSV of fictional learner results, validate rows, calculate a class summary and write a separate output file. Include a report of rejected rows and reasons.`,
`# Applied Module 4: Object-oriented programming and software design

## Classes and objects
A class defines a type of object, including data attributes and methods. An object is an instance of that class. Use classes when related state and behaviour naturally belong together; not every small script needs object-oriented design.

## Encapsulation
Keep internal details behind a clear interface. Validate values when objects are created or updated so an object cannot easily enter an invalid state.

## Inheritance and composition
Inheritance models a genuine “is-a” relationship. Composition combines objects to build more complex behaviour and is often easier to change. Avoid deep inheritance hierarchies that make code difficult to understand.

## Worked example
A `StudentRecord` class may store an identifier and a list of scores, expose a method to calculate the average and validate scores before adding them. It should not store unnecessary personal information.

## Practical assignment
Design a small library or inventory application using two or three classes. Draw the relationships, write a short implementation and explain why you chose composition or inheritance.`,
`# Applied Module 5: Testing, debugging, APIs and secure coding

## Testing
Use unit tests for individual functions, integration tests for connected components and acceptance tests for user requirements. Include normal inputs, boundary cases and invalid inputs.

## Debugging
Reproduce the error, read the traceback from the bottom, identify the failing line, inspect relevant values and make one controlled change at a time. Avoid fixing symptoms while leaving the underlying cause.

## APIs
An API allows programs to exchange information through defined requests and responses. Check documentation, authentication, rate limits, response status and data format. Handle timeouts and failures gracefully.

## Secure coding
Do not hard-code passwords, tokens or private keys. Use environment-based secret management, validate untrusted input, keep dependencies updated and avoid executing untrusted files or code.

## Practical assignment
Write tests for a small function, debug a deliberately faulty example and create a mock API client that handles a successful response, an error response and a timeout.`,
`# Applied Module 6: Python portfolio capstone and assessment

## Capstone
Build a command-line application that solves a real, bounded problem such as inventory tracking, attendance summaries or budget analysis. Include clear functions or classes, input validation, file persistence, tests and user documentation.

## Required evidence
- Problem statement and algorithm outline.
- Readable, modular source code.
- Sample input and output files.
- Tests for expected and invalid cases.
- Error handling and security notes.
- A short demonstration and reflection.

## Assessment — 20 marks
Problem analysis and design 3; correctness 4; code organisation 3; data handling and validation 3; testing and debugging 4; documentation and responsible practice 3.

## Review questions
Why decompose a problem? Distinguish a list from a set; explain why context managers help with files; when is a function preferable to repeated code? Why should secrets not be committed to a repository?

**Professional standard:** A useful program is correct, testable, understandable, maintainable and safe for its intended users.`
],
"web-development-html-css":[
`# Applied Module 1: Semantic HTML and accessible page structure

## HTML as document structure
HTML describes the meaning and structure of page content. Use elements according to purpose: headings for hierarchy, paragraphs for text, lists for grouped items, links for navigation and buttons for actions.

## Semantic landmarks
Elements such as `header`, `nav`, `main`, `section`, `article` and `footer` help browsers and assistive technologies understand page regions. A page should have a logical heading hierarchy and one clear main content area.

## Forms
Associate each form control with a visible label. Use appropriate input types, explain required fields and provide useful error messages. Do not rely on placeholder text as the only label.

## Accessibility
Images that convey information need meaningful alternative text; decorative images can use empty alt text. Links should make sense out of context. Ensure keyboard users can reach and understand interactive controls.

## Practical assignment
Build a semantic article page with navigation, headings, a labelled form and a footer. Test it using keyboard-only navigation and inspect the heading outline.`,
`# Applied Module 2: CSS layout, responsive design and visual systems

## The cascade and box model
CSS rules are applied through cascade, specificity and inheritance. Every element is laid out as a box with content, padding, border and margin. Use consistent box-sizing rules to make dimensions easier to reason about.

## Flexbox and Grid
Flexbox is useful for arranging items along one axis. Grid supports two-dimensional layouts. Choose the layout model that matches the relationship between content items.

## Responsive design
Use flexible widths, relative units and media queries. Design mobile layouts intentionally rather than shrinking a desktop page. Ensure text wraps, controls remain touch-friendly and content does not overflow.

## Design tokens
Use CSS custom properties for recurring colours, spacing and typography. A small, consistent system is easier to maintain than many unrelated values.

## Practical assignment
Create a responsive two-column resource page that becomes one column on a narrow screen. Test at several widths and document any layout changes.`,
`# Applied Module 3: JavaScript integration and interactive interfaces

## Separation of responsibilities
HTML provides structure, CSS presentation and JavaScript behaviour. Keep these responsibilities understandable. Use external scripts and stylesheets for maintainability.

## DOM interaction
Select elements deliberately, listen for events and update only the necessary content. Avoid unsafe insertion of untrusted strings as HTML. Prefer text content for user-provided values.

## Forms and validation
Use browser validation for basic constraints, but validate again on the server. Provide clear feedback and preserve user input when an error occurs. Client-side validation is not a security boundary.

## Progressive enhancement
Core content should remain understandable if optional JavaScript fails. Interactive features should have clear states, keyboard support and meaningful feedback.

## Practical assignment
Build a simple resource filter with a search field and category selector. Make the controls labelled, keyboard accessible and robust when no results match.`,
`# Applied Module 4: Performance, search visibility and structured content

## Performance foundations
Compress images appropriately, specify image dimensions, reduce unnecessary scripts and avoid blocking resources. Load only what the page needs and test on realistic mobile connections.

## Search-friendly structure
Use descriptive page titles, useful headings, concise URLs, descriptive link text and original content that answers a real user question. Avoid keyword stuffing and duplicated doorway pages.

## Structured data
Use schema markup only when it accurately represents visible page content and follows the relevant specification. Structured data can help search engines interpret content but does not guarantee rich results or ranking.

## Technical checks
Check status codes, canonical URLs, robots directives, sitemap entries, mobile usability and broken links. Keep important content available to crawlers without requiring complex interaction.

## Practical assignment
Audit a sample page for title, headings, canonical, image alt text, performance and internal links. Prioritise three fixes and explain their user benefit.`,
`# Applied Module 5: Secure deployment, testing and maintenance

## Development workflow
Use version control, meaningful commits, code review and separate development and production environments. Keep configuration and secrets out of public source files.

## Deployment
A deployment should include build checks, environment configuration, database migration planning, smoke tests and a rollback approach. Never assume that a successful build proves the whole site works.

## Security basics
Use HTTPS, secure session handling, server-side authorisation, input validation and safe output encoding. Keep dependencies updated and remove unused packages. Do not expose administrative routes or secrets in public pages.

## Testing
Test across browsers, screen sizes, keyboard navigation and realistic content. Check forms, navigation, loading states and error handling after deployment.

## Practical assignment
Create a release checklist for a small website. Include backup, build, configuration, accessibility, security, smoke tests and rollback steps.`,
`# Applied Module 6: Website portfolio capstone and assessment

## Capstone
Build a responsive multi-page educational or business website. Include semantic HTML, a consistent CSS system, accessible forms, a JavaScript interaction, original page content and a deployment checklist.

## Assessment — 20 marks
Semantic structure 3; responsive layout 4; accessibility 3; functional interaction 3; performance and SEO foundations 3; security, testing and documentation 4.

## Review questions
Why use semantic elements? Distinguish Flexbox and Grid; why must server-side validation remain? What does a canonical URL indicate? Name three checks before a production release.

**Professional standard:** A website should be usable, accessible, secure, fast enough for its audience and maintainable after launch.`
],
"javascript-programming":[
`# Applied Module 1: JavaScript language fundamentals and program flow

## Values and types
JavaScript includes primitive values such as strings, numbers, booleans, null, undefined, bigint and symbols, alongside objects. Use `const` by default and `let` when reassignment is required. Understand type conversion rather than relying on surprising coercion.

## Conditions and loops
Use conditions to make decisions and loops to process collections. Prefer clear control flow over deeply nested expressions. Avoid accidental infinite loops by ensuring the loop condition can eventually become false.

## Equality and truthiness
Use strict equality in most application code to avoid unintended type conversion. Learn which values are falsy and validate inputs explicitly where zero, empty text or false are valid values.

## Worked example
```javascript
const scores = [72, 81, 65];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);
```
For production use, also handle an empty array and validate that each score is numeric.

## Practical assignment
Write a small program that validates a list of scores, calculates the average and reports the highest and lowest values. Test empty and invalid input.`,
`# Applied Module 2: Functions, scope, arrays and objects

## Functions
Functions can be declarations, expressions or arrow functions. Choose a form that makes scope and the value of `this` clear. Keep functions focused and return values that callers can reuse.

## Scope and closures
Block scope helps prevent accidental variable leakage. A closure allows a function to retain access to variables from its surrounding scope. Use closures deliberately and avoid hidden shared state.

## Arrays and objects
Use array methods such as map, filter, reduce and find to express transformations. Objects represent named properties. Check whether a property exists and handle missing or unexpected values.

## Immutability
Avoid mutating shared data when it makes program flow difficult to follow. Spread syntax and copying methods can help create new values, but remember that shallow copies do not clone nested objects.

## Practical assignment
Transform an array of product objects into a filtered list, a summary total and a category count. Explain each operation and test duplicate and missing fields.`,
`# Applied Module 3: DOM, events and browser interaction

## DOM selection
Use stable selectors and check whether an element exists before updating it. Keep DOM code separate from calculation logic where possible.

## Event handling
Use event listeners for clicks, form submissions and input changes. Understand event bubbling and use event delegation when many similar elements share a parent.

## Safe rendering
Treat user input as untrusted. Use textContent for plain text and carefully validate any URL or structured content before use. Avoid assigning untrusted input to innerHTML.

## Accessible interaction
Use native buttons, links and form controls where possible. Ensure visible focus, labels, keyboard operation and clear error messages. Do not implement a clickable div when a button is appropriate.

## Practical assignment
Build a task list that can add, complete and remove items. Make it keyboard accessible and ensure task text is inserted safely.`,
`# Applied Module 4: Asynchronous JavaScript, APIs and JSON

## Asynchronous work
Promises represent future results. `async` and `await` make asynchronous code easier to read, but errors still need to be handled with try/catch or an appropriate rejection handler.

## Fetching data
Use Fetch API to request data from an endpoint. Check response status before parsing JSON. Handle network errors, invalid JSON, empty results and loading states.

## JSON
JSON is a text format for exchanging structured data. Validate required fields and types after parsing; valid JSON does not guarantee that the data is appropriate for your application.

## Worked pattern
```javascript
async function loadItems(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Request failed");
  return response.json();
}
```
A user interface should catch the error and show a useful message rather than silently failing.

## Practical assignment
Build a page that loads a public sample dataset, displays a loading state, handles failure and renders an empty-state message when no records are returned.`,
`# Applied Module 5: Modules, testing, security and performance

## JavaScript modules
Use import and export to organise code into reusable files. Keep module responsibilities clear and avoid circular dependencies where possible.

## Testing
Test pure functions with expected, boundary and invalid inputs. Test browser interactions separately. A test should verify observable behaviour rather than merely repeat the implementation.

## Security
Avoid eval and unsafe dynamic code execution. Protect against cross-site scripting by safely rendering untrusted values. Do not place secret keys in client-side JavaScript; browser code is visible to users.

## Performance
Avoid unnecessary DOM updates, excessive event handlers and large dependencies. Debounce expensive search operations where appropriate and measure before optimising.

## Practical assignment
Split a small application into modules, add tests for calculation functions and perform a security review of all places where user input is rendered.`,
`# Applied Module 6: JavaScript application capstone and assessment

## Capstone
Build a small browser application such as a revision planner, inventory tracker or quiz interface. Include modular code, accessible controls, validated inputs, persistent storage only where appropriate, and clear error and empty states.

## Required evidence
- User requirements and simple interface sketch.
- Source code organised into modules.
- Tests for core calculations.
- Accessibility and security checklist.
- Demonstration of normal and error cases.
- Short maintenance guide.

## Assessment — 20 marks
Language fundamentals 3; functions and data structures 3; DOM and accessibility 4; asynchronous/API handling 3; testing and security 4; code organisation and documentation 3.

## Review questions
What is a closure? Why use strict equality? What is the purpose of response.ok? Why is client-side code unsuitable for storing secret API keys?

**Professional standard:** Reliable JavaScript applications handle asynchronous failure, protect users, support accessibility and remain understandable to future developers.`
],
"cybersecurity-fundamentals":[
`# Applied Module 1: Security principles, assets and risk assessment

## Security objectives
Confidentiality limits information access to authorised parties; integrity protects information from unauthorised alteration; availability ensures systems and data are usable when needed. Authenticity and accountability are also important security properties.

## Identify assets
Assets include devices, accounts, applications, networks, records, backups, facilities and reputation. Identify who owns each asset, who uses it and what would happen if it were exposed, changed or unavailable.

## Threat, vulnerability and risk
A threat could exploit a vulnerability. Risk combines likelihood and impact in a particular context. A risk register records the scenario, affected asset, current controls, rating, treatment, owner and review date.

## Worked example
A shared staff account creates accountability and access risks. Replace it with individual accounts, least-privilege permissions and multi-factor authentication where feasible.

## Practical assignment
Create an asset inventory for a small organisation and describe five plausible risks. Rank them using a simple, documented likelihood-impact scale.`,
`# Applied Module 2: Identity, access management and endpoint security

## Identity management
Use individual identities rather than shared accounts. Apply least privilege, role-based access and prompt removal of access when responsibilities change.

## Authentication
Use long unique passwords and multi-factor authentication. Protect recovery codes and verification methods. Never share one-time codes with callers or people claiming to be support staff.

## Endpoint protection
Keep operating systems and applications updated. Enable supported device encryption, screen locks and approved endpoint protection. Restrict installation rights and remove unused software.

## Mobile and remote work
Use approved device management and secure connectivity. Report lost devices immediately. Avoid exposing confidential information on public screens or unmanaged storage.

## Practical assignment
Write an access review procedure for a fictional office. Include joiner, mover and leaver steps, periodic permission review and emergency account revocation.`,
`# Applied Module 3: Network security, phishing and social engineering

## Network basics
Understand routers, switches, Wi-Fi, firewalls and network segmentation at a conceptual level. Change default credentials, apply updates and limit administrative access to trusted users.

## Phishing and impersonation
Watch for unusual urgency, unexpected attachments, credential requests, payment changes and mismatched sender domains. Verify sensitive instructions using an independent trusted channel.

## Safe response
Do not click suspicious links or forward dangerous attachments widely. Report the message through the organisation's approved channel and preserve relevant details.

## Remote access
Use only authorised remote access tools and follow organisational policy. Avoid exposing remote administration services directly to the public internet.

## Practical assignment
Create a phishing-awareness exercise using fictional examples only. Identify warning signs and write a verification procedure for supplier bank-detail changes.`,
`# Applied Module 4: Data protection, backups and incident management

## Information handling
Classify data and apply access controls appropriate to sensitivity. Collect only necessary information, retain it for an approved period and dispose of it securely.

## Backup strategy
Maintain regular, protected backups and separate them from ordinary user access where possible. Test restoration, record results and ensure critical services can be recovered within agreed timeframes.

## Incident lifecycle
Prepare, detect, contain, eradicate, recover and learn. Notify the designated response team quickly. Preserve evidence and document decisions. Follow applicable legal and contractual notification requirements.

## Worked example
If a staff account is suspected to be compromised, use the approved process to revoke sessions, reset credentials through trusted channels, review logs and determine whether data was accessed or changed.

## Practical assignment
Draft a one-page incident response checklist for a lost laptop and a separate backup restoration test record.`,
`# Applied Module 5: Application security, cloud and safe AI adoption

## Application security
Use secure development practices, input validation, output encoding, supported dependencies and appropriate access control. Conduct security review before releasing systems that handle personal or financial data.

## Cloud responsibility
Understand which security controls are managed by the provider and which remain the customer's responsibility. Configure identity, storage permissions, logging, backup and network exposure deliberately.

## AI security
Treat external documents and model output as untrusted. Do not share secrets or sensitive records with unapproved AI services. Restrict tool permissions and require human review for high-impact actions.

## Vulnerability handling
Prioritise updates based on severity, exposure and business impact. Use authorised vulnerability assessment and testing only; do not probe systems without written permission.

## Practical assignment
Review a fictional cloud file-sharing workflow and identify excessive permissions, public exposure, weak authentication and AI data-leakage risks.`,
`# Applied Module 6: Cybersecurity improvement plan and assessment

## Capstone
Develop a practical security plan for a school, small business or community organisation. Include asset inventory, risk register, access policy, phishing awareness, endpoint controls, backup plan, incident response and staff training.

## Assessment — 20 marks
Security principles and asset inventory 3; risk assessment 4; identity and endpoint controls 3; network and phishing awareness 3; data protection and incident response 4; governance and communication 3.

## Review questions
Explain confidentiality, integrity and availability; distinguish a threat from a vulnerability; why are individual accounts important? Why test backups? What should happen after suspected account compromise?

**Safety boundary:** Apply these principles only to systems you own or are explicitly authorised to protect. This course does not authorise unauthorised access or testing.`
],
"entrepreneurship-small-business":[
`# Applied Module 1: Opportunity discovery, customer problems and value propositions

## Start with a customer problem
A business opportunity exists when a group of customers has a problem or unmet need and a feasible solution can create value. Do not begin with a product idea alone; investigate the problem and the people affected.

## Customer discovery
Use respectful interviews, observation and small surveys. Ask about current behaviour, workarounds, costs and frustrations rather than leading questions such as “Would you buy my idea?”

## Value proposition
State the customer, problem, proposed solution and main benefit. Explain why the offer is different and what evidence supports the claim.

## Worked example
A local tutoring service may discover that families need flexible evening lessons and transparent progress updates. The proposed value is convenient scheduling and clear learning feedback, not simply “quality tuition”.

## Practical assignment
Identify three possible customer problems. Interview or survey a small appropriate sample with consent, summarise recurring needs and select one opportunity for further testing.`,
`# Applied Module 2: Market research, competitors and business models

## Market research
Estimate who might buy, how often, where they are and what alternatives they currently use. Distinguish observed facts from assumptions. Small informal samples provide direction, not proof of total market size.

## Competitor analysis
Compare customer segment, offer, price, quality, availability, service and reputation. Competitors include substitutes and the option of doing nothing.

## Business models
A business model explains how value is created, delivered and captured. Revenue may come from sales, subscriptions, commissions, service fees or licensing. Identify costs and the resources needed to deliver the promise.

## AI-assisted research
AI can help structure interview questions or summarise public competitor information. Verify all claims, avoid inventing competitor prices and do not upload confidential customer data without permission.

## Practical assignment
Create a competitor comparison table and a one-page business model canvas. Mark assumptions that still require customer validation.`,
`# Applied Module 3: Pricing, costs, cash flow and financial basics

## Cost categories
Separate fixed costs from variable costs. Include direct materials, labour, packaging, delivery, rent, utilities, platform fees, taxes and marketing where applicable.

## Pricing
A price must be understandable to customers and sustainable for the business. Cost-plus pricing adds a margin to cost, while value-based pricing considers customer-perceived value and alternatives. Check local market conditions and applicable tax rules.

## Worked calculation
If variable cost per item is KSh 400 and selling price is KSh 650, contribution per item = 650 − 400 = KSh 250. If monthly fixed costs are KSh 25,000, break-even quantity = 25,000 / 250 = 100 items, assuming these estimates remain valid.

## Cash flow
Profit is not the same as cash in the bank. Track when customers pay and when expenses fall due. Late payments, inventory purchases and debt repayments can create cash shortages.

## Practical assignment
Prepare a simple monthly cash-flow forecast with sales assumptions, expenses, opening cash and closing cash. Test a lower-sales scenario.`,
`# Applied Module 4: Marketing, sales and customer relationships

## Marketing strategy
Define the target customer, positioning, message, channels, budget and success measures. Choose channels that customers actually use rather than trying to maintain every platform.

## Content and digital presence
Publish accurate information about the offer, prices, contact methods and terms. Use useful educational content, clear calls to action and consistent branding. Avoid fake testimonials and unsupported guarantees.

## Sales process
Understand customer needs, explain the offer, answer questions, state terms clearly and record commitments. Follow up respectfully and avoid pressure tactics.

## Customer retention
Reliable delivery, responsive support, fair complaint handling and honest communication help build trust. Track recurring problems and use feedback to improve the product.

## Practical assignment
Design a one-month marketing plan with three content ideas, a sales follow-up process and measurable targets such as qualified enquiries and repeat purchases.`,
`# Applied Module 5: Operations, legal responsibilities and business risk

## Operations
Map how an order moves from enquiry to delivery and after-sales support. Identify suppliers, inventory, quality checks, turnaround times and service standards.

## Business records
Maintain accurate sales, expense, inventory, customer consent and tax records as required. Separate personal and business finances where practical and use secure backups.

## Legal and ethical responsibilities
Check local registration, licensing, tax, employment, consumer protection, data protection and sector-specific requirements. Requirements vary by jurisdiction; obtain qualified advice where needed.

## Risk management
Consider supplier failure, cash shortage, data loss, fraud, reputational damage and changes in demand. Record prevention, contingency actions, owners and review dates.

## Practical assignment
Create an operations checklist, a basic risk register and a recordkeeping plan for your proposed business.`,
`# Applied Module 6: Business plan capstone and assessment

## Capstone
Prepare a concise business plan containing problem and customer evidence, value proposition, market and competitor analysis, product or service design, pricing, cost and cash-flow estimates, marketing, operations, legal checks, risks and first 90-day milestones.

## Assessment — 20 marks
Customer problem and validation 4; market and competitor analysis 3; business model and pricing 4; marketing and sales 3; operations and compliance 3; financial forecast and risk plan 3.

## Review questions
What is a value proposition? Why interview customers before building? Calculate break-even using fixed costs of 12,000 and contribution of 300 per unit; distinguish profit from cash flow; name three compliance areas to investigate.

**Suggested calculation:** 12,000 / 300 = 40 units.

**Professional standard:** A viable business is built on verified customer needs, realistic numbers, reliable delivery, ethical conduct and continuous learning.`
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
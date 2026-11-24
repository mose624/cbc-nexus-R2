/* CBE Nexus AI Academy — Handbook Volume 12: Advanced expansions for Courses 26–30.
   Adds applied explanations, worked tasks, assessment guidance and capstones.
   Loaded after Volumes 1–11 so these course-specific modules take precedence. */
(function(){
  "use strict";
  const E=window.CBENexusAIEnhanced=window.CBENexusAIEnhanced||{};
  const previous=E.makeLongNotes;
  const notes={
"python-programming":[
`# Module 1: Computational thinking and Python program design

## 1.1 From a real problem to an executable solution
A program is a model of a task. Before writing code, describe the real-world problem, the people affected, the information available, the required output and the rules that constrain the result. For example, a school may need to calculate term averages. The programmer must first establish which subjects count, whether all subjects have equal weight, how missing marks are handled, how rounding works and who may view the results. Coding before clarifying these rules produces software that may run correctly but solve the wrong problem.

A disciplined workflow is: define the problem; identify inputs, outputs and constraints; decompose it into smaller tasks; design an algorithm; implement; test; document; and maintain. Record assumptions explicitly. When a rule is uncertain, ask the responsible stakeholder rather than silently inventing one.

## 1.2 Decomposition, abstraction and algorithms
Decomposition divides a complex task into manageable units. A student-results application can be divided into registration, mark entry, validation, calculation, reporting and storage. Abstraction focuses on the information necessary for the current task. A report may need a learner identifier and subject marks, but not a guardian's private contact details.

An algorithm is a finite, ordered procedure. A useful algorithm has defined inputs, a clear result, unambiguous steps and a termination condition. Pseudocode can be reviewed before it is translated into Python:

```text
INPUT learner name and subject marks
VALIDATE each mark is within the approved range
IF any required mark is missing
    request correction
ELSE
    calculate total and average
    display the result
    save the record
END IF
```

## 1.3 Python execution model
Python executes statements in sequence, evaluates expressions and binds names to objects. Indentation defines suites such as function bodies and conditional branches. A name is not a fixed storage box; it refers to an object. Assignment such as `score = 75` binds the name `score` to an integer object. Reassignment changes the binding.

## 1.4 Development environments and reproducibility
Use a maintained Python 3 release, an editor, a terminal and a project folder. A virtual environment isolates project packages. A reproducible project records dependencies and setup instructions. Do not assume that a package installed globally is available inside every virtual environment.

```bash
python -m venv .venv
# Windows
.venv\\Scripts\\activate
# macOS or Linux
source .venv/bin/activate
python -m pip install --upgrade pip
```

## 1.5 Syntax, runtime and logic errors
A syntax error prevents parsing; a runtime exception occurs during execution; a logic error produces an incorrect result without necessarily raising an exception. A program that calculates an average using the wrong denominator is a logic error. Reproduce the problem, inspect inputs and intermediate values, isolate the smallest failing example and test the correction.

## 1.6 Worked design example
Problem: calculate the average of three equally weighted assessments. Inputs are three numeric marks. Constraint: each mark must be between 0 and 100 inclusive. Output: average to one decimal place. Algorithm: validate all marks, add them, divide by three and format the result.

**Practice:** Write a problem statement and pseudocode for a library fine calculator. State the daily rate, maximum fine, treatment of public holidays and rounding rule as assumptions that must be approved before implementation.`,
`# Module 2: Python data modelling, expressions and validation

## 2.1 Choosing appropriate data types
Use integers for counts, floating-point values for many measured quantities, strings for text, Booleans for true/false states and collections for groups of values. Floating-point arithmetic represents many decimal fractions approximately; for financial calculations, use the `decimal.Decimal` type when exact decimal behaviour is required.

```python
from decimal import Decimal
unit_price = Decimal("12.50")
quantity = 4
total = unit_price * quantity
print(total)  # 50.00
```

## 2.2 Mutable and immutable objects
Strings, integers and tuples are immutable: operations create new values rather than changing the original object. Lists and dictionaries are mutable. This distinction matters when passing data to functions. If two variables refer to the same list, changing the list through one name is visible through the other.

```python
a = [10, 20]
b = a
b.append(30)
print(a)  # [10, 20, 30]
```

Copy a list with `a.copy()` for a shallow copy. Nested structures may require `copy.deepcopy` when independent nested objects are needed.

## 2.3 Operators and precedence
Arithmetic operators include addition, subtraction, multiplication, division, floor division, remainder and exponentiation. Comparisons return Booleans. Membership operators `in` and `not in` test whether a value occurs in a collection. Identity operators `is` and `is not` test object identity; use equality `==` for value comparison in ordinary application logic.

## 2.4 Input validation
Never assume user input is valid. Validate type, range, format and business rules. Convert input inside a controlled error-handling block and explain how the user can correct invalid information.

```python
def read_mark(prompt):
    while True:
        raw = input(prompt).strip()
        try:
            mark = float(raw)
        except ValueError:
            print("Enter a number, for example 64 or 72.5.")
            continue
        if 0 <= mark <= 100:
            return mark
        print("The mark must be from 0 to 100.")
```

This function rejects blank text and non-numeric values through conversion failure, and rejects numbers outside the defined range. An actual institution may use a different scale, so the rule must be configurable rather than assumed.

## 2.5 Collections and data modelling
Lists preserve order and allow duplicates. Sets hold unique hashable values. Tuples represent fixed sequences. Dictionaries associate keys with values. Select a structure based on the operations the program needs, not simply personal preference.

A record can be represented as a dictionary:
```python
learner = {
    "id": "L-104",
    "name": "Amina",
    "marks": {"Biology": 81, "Chemistry": 76}
}
```
Use stable identifiers rather than names as unique keys because two learners may share a name. Avoid collecting personal information that is not necessary.

## 2.6 Worked calculation and boundary tests
For marks 81, 76 and 89, the total is 246 and the mean is 82.0. Test the exact boundaries 0 and 100, a decimal such as 67.5, a negative number, a value above 100, blank input and alphabetic input. Boundary testing often reveals errors that ordinary examples miss.

**Practice:** Build a mark-entry routine that validates values, rejects duplicate subject names and reports the learner's mean. Explain why a missing mark should not automatically be treated as zero.`,
`# Module 3: Control flow, iteration and algorithm efficiency

## 3.1 Branching with explicit conditions
Use `if`, `elif` and `else` to represent mutually exclusive decisions. Order ranges carefully. If a grading scheme uses several bands, define the boundaries in a written specification and test every boundary. Do not publish unofficial grade thresholds as universal standards.

## 3.2 Iteration and loop invariants
A `for` loop is appropriate when iterating through a collection or known sequence. A `while` loop is useful when repetition depends on a condition. Every while loop should have a clear progress rule and termination condition. A loop invariant is a condition that remains true before and after each iteration; it can help reason about correctness.

## 3.3 Accumulation and counting patterns
```python
marks = [72, 84, 65, 91]
total = 0
passed = 0
for mark in marks:
    total += mark
    if mark >= 50:
        passed += 1
average = total / len(marks)
print(total, average, passed)
```
The code assumes a non-empty list and a pass threshold of 50 for demonstration only. Production rules must be supplied by the relevant institution. Guard against empty collections before division.

## 3.4 Searching and sorting
A linear search examines values until it finds a match or reaches the end. Its worst-case time grows proportionally to the number of elements, commonly described as O(n). Sorting arranges values according to an ordering rule. Python's `sorted()` returns a new list; `.sort()` modifies a list in place. A key function can define a custom order.

```python
students = [
    {"name": "Asha", "average": 78.5},
    {"name": "Ben", "average": 84.0}
]
ranking = sorted(students, key=lambda item: item["average"], reverse=True)
```

## 3.5 Nested loops and complexity
A nested loop may compare every item with every other item. If both loops process n elements, work can grow approximately as n squared. This may be acceptable for a small class list but unsuitable for very large datasets. Select data structures and algorithms with expected data size in mind.

## 3.6 Defensive programming
Check preconditions, handle empty data, validate indexes and avoid relying on undocumented ordering. Use clear names and small functions. A defensive program should fail safely and explain the problem without exposing confidential information.

**Practice:** Write a program that finds the highest and lowest mark, counts entries above a configurable threshold and sorts learner records. Test an empty list, one learner and several learners with equal marks.`,
`# Module 4: Functions, modular design, files and exceptions

## 4.1 Designing functions
A function should have a clear purpose, meaningful parameters and a predictable return value. Separate input/output from calculation logic so that the calculation can be tested without a person typing into the terminal.

```python
def calculate_average(marks):
    if not marks:
        raise ValueError("At least one mark is required")
    return sum(marks) / len(marks)
```

## 4.2 Scope and return values
Local variables exist within a function's scope. Pass required information as parameters and return results explicitly. Avoid unnecessary global variables because they make behaviour harder to trace and tests less independent.

## 4.3 Modules and packages
A module is a Python file that can define functions, classes and constants. A package groups related modules. Split a growing application into logical units such as `validation.py`, `calculations.py`, `storage.py` and `reports.py`. Keep the program entry point separate from reusable logic.

## 4.4 Reading and writing files safely
Use `with open(...)` so files close reliably. Specify encoding, choose the correct mode and handle missing files or permission errors. Avoid overwriting important data without a backup or confirmation.

```python
import csv
records = [
    {"learner_id": "L-01", "subject": "Biology", "mark": 82},
    {"learner_id": "L-02", "subject": "Biology", "mark": 75}
]
with open("marks.csv", "w", newline="", encoding="utf-8") as handle:
    writer = csv.DictWriter(handle, fieldnames=records[0].keys())
    writer.writeheader()
    writer.writerows(records)
```

## 4.5 CSV and JSON
CSV is suitable for simple tabular exchange but has limited support for nested relationships. JSON supports nested objects and arrays and is common in web APIs. Validate imported records because a file may be malformed, incomplete or maliciously constructed. Do not load untrusted serialized Python objects using unsafe mechanisms.

## 4.6 Exceptions and recovery
Catch exceptions you can meaningfully handle. `ValueError` may indicate invalid input; `FileNotFoundError` may indicate a missing file; `PermissionError` may indicate insufficient access. Do not suppress every exception with a broad empty handler. Record enough diagnostic information for maintainers while avoiding private data in logs.

## 4.7 Testing and documentation
Write unit tests for calculation functions, integration tests for file workflows and acceptance tests for user requirements. Document setup, inputs, outputs, assumptions and limitations.

**Practice:** Create a small package that validates marks, calculates statistics and exports a CSV report. Include at least five tests, including invalid input and an empty collection.`,
`# Module 5: Object-oriented programming, APIs and secure coding

## 5.1 Classes as domain models
A class describes the data and behaviour of a kind of object. Use classes when they make a domain model clearer; simple functions and dictionaries may be more suitable for small tasks.

```python
class Learner:
    def __init__(self, learner_id, name):
        if not learner_id:
            raise ValueError("A learner ID is required")
        self.learner_id = learner_id
        self.name = name
        self._marks = {}

    def record_mark(self, subject, mark):
        if not 0 <= mark <= 100:
            raise ValueError("Mark outside permitted range")
        self._marks[subject] = mark

    def average(self):
        if not self._marks:
            return None
        return sum(self._marks.values()) / len(self._marks)
```

## 5.2 Encapsulation and object relationships
Encapsulation keeps related state and operations together. Composition models a has-a relationship: a class group may contain learner records. Inheritance models an is-a relationship and should be used only when the subtype genuinely fulfils the parent type's contract. Prefer composition when it avoids fragile class hierarchies.

## 5.3 Type hints and maintainability
Type hints communicate intended inputs and outputs and help editors and static analysis tools. They do not automatically validate data at runtime. Use docstrings for public functions and explain non-obvious decisions.

## 5.4 APIs and HTTP
An API is a defined interface through which systems exchange information. REST-style services commonly use HTTP methods such as GET, POST, PUT, PATCH and DELETE. Responses include status codes: 2xx generally indicates success, 4xx a client-side issue and 5xx a server-side issue. Interpret the API's own documentation rather than relying on status families alone.

## 5.5 Safe API requests
Set timeouts, handle network failures, validate response structure and respect rate limits. Use HTTPS. Keep access tokens out of source code and browser-visible files. Store secrets in environment variables or a dedicated secret manager and restrict their permissions.

## 5.6 Privacy and responsible handling
Student records can be sensitive. Collect only what is needed, restrict access by role, protect backups, use secure transmission, define retention periods and follow applicable law and institutional policy. Do not upload identifiable learner records to public AI tools or unapproved services.

**Practice:** Design a learner-record class and a mock API client. Document authentication, validation, error handling and privacy safeguards. Use a test endpoint or a local mock; do not invent a real service endpoint.`,
`# Module 6: Data automation, testing and capstone project

## 6.1 Automating a repeatable workflow
Automation is valuable when a task is frequent, rules are stable and errors can be detected. Map the manual process, identify exceptions, define permissions and create a recovery plan. Keep a human approval step for consequential actions such as releasing official results or sending bulk messages.

## 6.2 Data analysis with pandas
A DataFrame represents tabular data. Common operations include reading files, inspecting columns, handling missing values, filtering, grouping and exporting. Before analysis, check units, data types, duplicates, missingness and outliers. An average alone may conceal a wide spread or an uneven distribution.

```python
import pandas as pd
df = pd.read_csv("marks.csv")
df["mark"] = pd.to_numeric(df["mark"], errors="coerce")
summary = df.groupby("subject")["mark"].agg(["count", "mean", "min", "max"])
print(summary)
```

## 6.3 Visualisation and interpretation
A bar chart can compare subject averages; a histogram can show the distribution of marks; a line chart can show change over time when observations are ordered. Label axes, include units, state the population and avoid implying causation from simple association.

## 6.4 Software quality
Use version control, meaningful commits, automated tests and code review. Keep configuration separate from code. A release should include a version identifier, known limitations, setup instructions and a backup or rollback approach.

## 6.5 Capstone: Learner performance management tool
Build a command-line or simple desktop application that registers learner IDs, records subject marks, validates entries, calculates approved statistics, exports a report and provides a summary for authorised staff. Include:
- A written requirements document and data dictionary.
- Input validation and duplicate detection.
- Separate modules for calculations, storage and reporting.
- Tests for ordinary, boundary and invalid cases.
- A privacy and access-control plan.
- User instructions and a short demonstration.

## 6.6 Assessment — 20 marks
| Task | Marks |
|---|---:|
| Explain decomposition and algorithm design | 3 |
| Select suitable Python data structures | 3 |
| Write and test a validation function | 4 |
| Explain file handling and exceptions | 3 |
| Describe classes and API security | 3 |
| Present a tested capstone prototype | 4 |
| **Total** | **20** |

**Marking guidance:** Award marks for correctness, clarity, tests and justified design choices. Accept equivalent valid implementations. Do not award full marks to code that runs only for one hard-coded example.`
],
"web-development-html-css":[
`# Module 1: Web architecture, standards and project planning

## 1.1 What a website is
A website is a collection of related resources published under a domain. A web application adds interactive functions such as accounts, search, dashboards, transactions or content management. A successful project begins with user needs and measurable outcomes, not a choice of colour or framework.

## 1.2 Browser and server roles
The browser requests a URL and receives a response. DNS resolves a domain name to network information. HTTP defines request and response semantics. The server may return static files or execute application logic and retrieve data from a database. The browser parses HTML, applies CSS and runs permitted JavaScript.

## 1.3 Front end, back end and database
The front end presents information and collects user actions. The back end enforces business rules, authentication and permissions. A database stores persistent records. Never rely on front-end checks alone for security: users can alter browser code and send requests directly to the server.

## 1.4 Requirements and information architecture
Identify target users, tasks, content, accessibility needs, devices, languages and success criteria. Group pages into a logical hierarchy. A learning portal might have Home, Courses, Course Detail, Notes, Assessments, Help and Account. Use labels that learners understand.

## 1.5 Planning a project
Create a sitemap, low-fidelity wireframes, content inventory and component list. Define responsive breakpoints based on content rather than a particular device model. Record assumptions and acceptance criteria before development.

## 1.6 Development tools and workflow
Use a code editor, browser developer tools, Git, a local server and a deployment environment. Work in small changes, review diffs and test before publishing. Keep secrets out of client-side code and source control.

**Practice:** Draft a sitemap and three wireframes for an online course page. List five acceptance criteria that can be tested objectively.`,
`# Module 2: Semantic HTML and accessible document structure

## 2.1 HTML document foundation
HTML describes the structure and meaning of content. A modern page begins with a doctype, a root html element, a head for metadata and linked resources, and a body for visible content.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Introduction to Biology | CBE Nexus</title>
  <meta name="description" content="Study introductory Biology concepts with explanations and practice.">
</head>
<body>
  <header><h1>Introduction to Biology</h1></header>
  <main><p>Welcome to the lesson.</p></main>
  <footer><p>Learning resources</p></footer>
</body>
</html>
```

## 2.2 Semantic elements
Use headings in a logical hierarchy; `header`, `nav`, `main`, `section`, `article` and `footer` where their meaning fits. Use buttons for actions and anchors for navigation. A clickable `div` is not an equivalent substitute for a properly labelled button.

## 2.3 Text and links
Use paragraphs for prose, lists for grouped items, tables for genuinely tabular information and descriptive link text. Avoid “click here” when the destination can be described. Headings should communicate the topic of the section.

## 2.4 Images and alternative text
Provide meaningful alt text for informative images. Decorative images should generally have empty alternative text so screen readers can skip them. Do not place essential instructions only inside an image. Captions can provide context and sources.

## 2.5 Forms
Associate every form control with a visible label. Use appropriate input types, instructions and validation messages. Explain required fields and errors in text, not colour alone. Client-side validation improves usability but server-side validation remains essential.

## 2.6 Tables and embedded media
Use table headers and captions for data tables. Provide captions or transcripts for relevant audio and video. Avoid using tables to position page layout.

**Practice:** Build a semantic article page with a navigation menu, three heading levels, a labelled diagram, a data table and an accessible enquiry form.`,
`# Module 3: CSS foundations, typography and the box model

## 3.1 How CSS applies styles
CSS rules contain selectors and declarations. A selector identifies elements; declarations specify properties and values. Keep styles in an external stylesheet for maintainability and reuse.

```css
body {
  margin: 0;
  font-family: system-ui, sans-serif;
  line-height: 1.6;
  color: #172033;
}
h1 { line-height: 1.2; }
```

## 3.2 Cascade, inheritance and specificity
When rules conflict, the cascade considers origin, importance, specificity and source order. Inherited properties such as font family pass from parent to child. Avoid escalating specificity unnecessarily; reusable classes are usually easier to maintain than long chains of element selectors.

## 3.3 Box model
Each element has content, padding, border and margin. With `box-sizing: border-box`, declared width includes padding and border, which often makes layout calculations easier.

```css
*, *::before, *::after { box-sizing: border-box; }
.card { padding: 1rem; border: 1px solid #d5dce8; }
```

## 3.4 Typography and readable content
Choose readable font sizes, line heights and line lengths. Use a consistent scale for headings. Avoid low-contrast text and long lines that make reading difficult. Test at common zoom levels and on small screens.

## 3.5 Colour and states
Define design tokens for primary, secondary, text, surface, border and status colours. Ensure focus, hover, disabled and error states are distinguishable. Do not rely on colour alone to communicate status.

## 3.6 Reusable styling
Use classes for repeated components, CSS custom properties for shared values and media queries where layout needs to adapt. Avoid excessive use of absolute positioning for normal content flow.

**Practice:** Style an article and course card using a small spacing scale, consistent typography and a visible keyboard-focus state. Explain how the box model affects the card's final size.`,
`# Module 4: Layout, responsive design and interaction patterns

## 4.1 Normal flow and layout choice
Use normal document flow for most content. Flexbox is suited to one-dimensional alignment; Grid is suited to two-dimensional layouts. Positioning is useful for overlays and specific interface details but should not replace a responsive layout system.

## 4.2 Flexbox
```css
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
```
Flexbox distributes space along a main axis and aligns items along a cross axis. Test wrapping when labels become longer or the viewport narrows.

## 4.3 CSS Grid
```css
.course-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
}
```
Grid can create responsive columns without hard-coding a fixed number of cards. Ensure each child can shrink without causing horizontal overflow.

## 4.4 Responsive design
Design for a range of viewport widths. Use flexible widths, responsive images, relative units and media queries. Test actual content, including long headings, translated labels, large text and empty states.

## 4.5 Navigation and interaction
Provide a consistent navigation structure, clear active-page indication and a keyboard-accessible menu. A mobile menu should expose its expanded/collapsed state to assistive technology and remain operable without a pointer.

## 4.6 Responsive images and media
Use appropriate image dimensions and modern formats where supported. Set intrinsic width and height to reduce layout shifts. Use `max-width: 100%; height: auto;` as a baseline for images in flowing content.

**Practice:** Build a responsive course catalogue with Grid cards and a Flexbox navigation. Test at narrow, medium and wide widths and record any overflow or unreadable content.`,
`# Module 5: Accessibility, technical SEO and secure front-end practice

## 5.1 Accessibility principles
Aim for content that is perceivable, operable, understandable and robust. Provide keyboard access, visible focus, sufficient contrast, meaningful headings, labels, alternative text and clear error messages. Test with keyboard navigation and a screen reader where possible.

## 5.2 Keyboard interaction
All interactive controls should be reachable and usable with a keyboard. Preserve a visible focus indicator. Do not trap focus unexpectedly. Use native HTML controls where possible because they already provide familiar interaction and accessibility behaviour.

## 5.3 Technical SEO foundations
Give each important page a unique, descriptive title and meta description. Use a clear heading structure, descriptive internal links, canonical URLs where appropriate, crawlable content, useful image alt text and an XML sitemap. Search engines need accessible, indexable content; metadata cannot compensate for thin or duplicated pages.

## 5.4 Structured data and content quality
Structured data can clarify entities such as courses, articles or organisations when the page genuinely contains the described information. Markup must match visible page content and follow the relevant search engine guidelines. Do not add fabricated ratings, prices, credentials or reviews.

## 5.5 Front-end security
Treat all user-supplied content as untrusted. Avoid unsafe HTML injection, validate inputs on the server and use secure authentication and session handling. Never put database service-role keys, payment secrets or private API credentials in public JavaScript.

## 5.6 Performance
Optimise image dimensions and formats, minimise unnecessary scripts, defer non-critical resources and avoid large layout shifts. Measure real pages with browser performance tools. A fast page should still preserve readable content and accessible controls.

**Practice:** Audit a course page for headings, keyboard access, image alternatives, title, description, canonical URL, structured data accuracy and mobile performance. Create a prioritised defect list.`,
`# Module 6: Testing, deployment, maintenance and capstone

## 6.1 Testing levels
Validate HTML and CSS, test navigation and forms, inspect console errors and network requests, and verify server responses. Test across browsers, devices, viewport sizes and input methods. Include empty, error, loading and success states.

## 6.2 Functional and usability testing
Write test cases with preconditions, steps and expected results. Example: “When a learner submits a valid search term, relevant course results appear; when no result matches, an informative empty state appears.” Observe real users where possible and distinguish a usability problem from a personal design preference.

## 6.3 Deployment concepts
A domain points users toward a service through DNS. HTTPS protects data in transit. A deployment pipeline builds and publishes the application. Separate development, staging and production environments. Test migrations and backups before changing production data.

## 6.4 Monitoring and maintenance
Monitor uptime, errors, page performance, broken links and security updates. Keep dependencies maintained. Back up data and test restoration. Document who can deploy, how to roll back and how incidents are reported.

## 6.5 Capstone: Accessible global learning website
Create a multi-page learning site with a home page, course catalogue, course detail, lesson article and contact form. Requirements:
- Semantic HTML and responsive CSS.
- Keyboard-accessible navigation and labelled form controls.
- Original, accurate learning content and useful diagrams.
- Unique titles, descriptions and logical internal links.
- No exposed secrets or unnecessary personal-data collection.
- A test report covering mobile, desktop, keyboard and error states.
- Deployment instructions and a rollback plan.

## 6.6 Assessment — 20 marks
| Task | Marks |
|---|---:|
| Explain browser, server and HTTP roles | 3 |
| Construct semantic HTML | 4 |
| Apply CSS box model and responsive layout | 4 |
| Identify accessibility improvements | 3 |
| Explain SEO and front-end security | 3 |
| Demonstrate tested capstone | 3 |
| **Total** | **20** |

**Marking guidance:** Award marks for semantic correctness, usability, responsive behaviour, accessible operation, accurate metadata and evidence of testing. A visually attractive page that cannot be navigated by keyboard is incomplete.`
],
"javascript-programming":[
`# Module 1: JavaScript in the browser and programming foundations

## 1.1 The role of JavaScript
JavaScript is a programming language used in browsers and other runtimes. In a web page it can respond to events, update the document, validate user input, communicate with APIs and manage application state. HTML provides structure, CSS presentation and JavaScript behaviour.

## 1.2 Loading scripts
An external script can be loaded with `defer` so it executes after HTML parsing:
```html
<script src="app.js" defer></script>
```
Avoid placing large amounts of inline code in every page. Use clear modules and load only the code needed for the page.

## 1.3 Values and variables
Use `const` when a binding will not be reassigned and `let` when reassignment is required. Avoid `var` in modern code unless maintaining an older codebase. JavaScript is dynamically typed, so a variable can refer to values of different types; this flexibility requires careful validation.

## 1.4 Primitive and reference values
Primitive values include strings, numbers, Booleans, undefined, null, BigInt and symbols. Objects, arrays and functions are reference values. Equality and copying behave differently for objects than for primitives.

## 1.5 Expressions and operators
Arithmetic, comparison, logical and assignment operators form expressions. Prefer strict equality `===` and `!==` to avoid unexpected type coercion. Use parentheses to make complex conditions understandable.

## 1.6 Developer tools
Use the browser console, debugger, breakpoints, network panel and element inspector. Read the first relevant error and inspect the stack trace. Avoid hiding errors with empty catch blocks.

**Practice:** Write a script that stores a learner's name and three marks, calculates the mean and prints a formatted summary. State assumptions about valid mark ranges.`,
`# Module 2: Data types, arrays, objects and reliable validation

## 2.1 Strings and numbers
Strings represent text. Template literals use backticks and allow interpolation. JavaScript's ordinary Number type uses floating-point representation; for money, store integer minor units where appropriate or use a decimal arithmetic library with explicit rounding rules.

## 2.2 Arrays
Arrays are ordered collections. Common methods include `push`, `pop`, `map`, `filter`, `find`, `some`, `every` and `reduce`. Understand whether a method mutates the original array. For example, `map` returns a new array while `sort` changes the original array.

## 2.3 Objects
Objects group properties and methods. Use meaningful keys and check whether optional data exists. Destructuring can make access concise, but do not assume a property is present merely because a sample object contains it.

## 2.4 Null, undefined and optional data
A missing property may evaluate to `undefined`; an explicitly empty value may be `null`. Use optional chaining for safe access and nullish coalescing when a default should apply only to null or undefined, not to values such as zero or an empty string.

## 2.5 Input validation
Browser form validation improves feedback but is not a security boundary. Validate again on the server. Check required values, allowed ranges, string lengths and expected formats. Treat all client-provided data as untrusted.

## 2.6 Worked example: filtering a catalogue
```javascript
const courses = [
  { title: "Python", level: "Beginner", free: true },
  { title: "Data Analysis", level: "Intermediate", free: false },
  { title: "Web Design", level: "Beginner", free: true }
];
const freeBeginner = courses.filter(
  course => course.free && course.level === "Beginner"
);
console.log(freeBeginner.map(course => course.title));
```
The filter predicate returns a Boolean for each course; map extracts the titles from the filtered result.

**Practice:** Model five courses as objects and write filters for level, availability and keyword. Test missing properties and unexpected values.`,
`# Module 3: Conditions, loops and functions

## 3.1 Conditional statements
Use `if`, `else if` and `else` for branching. The conditional operator can express a simple choice, but nested ternaries reduce readability. Use a `switch` statement when selecting among several discrete cases.

## 3.2 Iteration
Use `for...of` to iterate over iterable values such as arrays. Use `for...in` carefully because it iterates enumerable property keys. Array methods such as `forEach`, `map` and `filter` often express data transformations clearly.

## 3.3 Function declarations and expressions
Functions can be declared, assigned to variables or written as arrow functions. Arrow functions have lexical `this`, which differs from ordinary function behaviour. Select the form that makes the intended scope clear.

## 3.4 Parameters, return values and defaults
A function should perform a defined task and return a result when the caller needs one. Default parameters can supply optional values. Avoid functions that depend on hidden global state because they are harder to test and reuse.

## 3.5 Scope and closures
Block-scoped variables declared with `let` and `const` are limited to their block. A closure occurs when a function retains access to variables from its surrounding lexical environment. Closures are useful for private state and callbacks but can also retain memory longer than expected.

## 3.6 Worked example: reusable validation
```javascript
function isValidMark(value) {
  return typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0 && value <= 100;
}
console.log(isValidMark(75)); // true
console.log(isValidMark("75")); // false
```
The function deliberately requires a numeric value rather than silently converting a string. A user interface may convert validated text before calling it.

**Practice:** Write functions for average, highest score and pass count. Test empty arrays, non-numeric values and boundary marks.`,
`# Module 4: DOM manipulation, events and accessible interfaces

## 4.1 Document Object Model
The DOM represents a document as a tree of nodes. JavaScript can locate elements, read or update text, create nodes and respond to events. Prefer selecting by stable IDs or meaningful data attributes rather than fragile positional selectors.

## 4.2 Safe content updates
Use `textContent` for plain text. Avoid assigning untrusted user content to `innerHTML`, because it can create cross-site scripting vulnerabilities. If rich HTML is genuinely required, use a well-maintained sanitisation approach and enforce server-side controls.

## 4.3 Event handling
An event listener responds to actions such as click, input, submit and keydown. Use `addEventListener` rather than inline event attributes. Prevent the default form submission only when the script provides a complete alternative behaviour.

## 4.4 Form example
```javascript
const form = document.querySelector("#searchForm");
const input = document.querySelector("#searchTerm");
const output = document.querySelector("#searchStatus");

form.addEventListener("submit", event => {
  event.preventDefault();
  const term = input.value.trim();
  if (!term) {
    output.textContent = "Enter a search term.";
    input.focus();
    return;
  }
  output.textContent = `Searching for: ${term}`;
});
```
The HTML should include a visible label for the input and a status region that assistive technologies can identify.

## 4.5 Event propagation
Events can capture, target and bubble through the DOM. Event delegation attaches a listener to a stable parent and identifies the relevant child using the event target. Check that the target is the expected element before acting.

## 4.6 Accessibility and state
Use native buttons and form controls, support keyboard interaction, communicate expanded or selected states and provide visible feedback. A custom clickable element must implement keyboard behaviour and appropriate semantics; native elements are usually safer.

**Practice:** Build a searchable list of courses. Add empty-state feedback, keyboard operation and a clear button. Ensure learner text is displayed safely.`,
`# Module 5: Modern JavaScript, asynchronous code and APIs

## 5.1 Modules
ES modules allow code to be split using `export` and `import`. Keep responsibilities small and avoid circular dependencies. In a browser, module scripts are deferred by default and have module scope.

## 5.2 Promises
A Promise represents an operation that may complete in the future. It can be pending, fulfilled or rejected. Handle rejections and provide user-facing feedback rather than leaving an interface permanently loading.

## 5.3 Async and await
```javascript
async function loadCourses() {
  const response = await fetch("/api/courses");
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}
```
The example assumes an application endpoint exists. Check the actual API contract, response schema and authentication requirements before using it.

## 5.4 Network failure and timeouts
Network requests can fail due to connectivity, server errors, permission issues or invalid responses. Use an AbortController when a request needs a timeout or cancellation. Distinguish an empty result from a failed request.

## 5.5 API security
Do not place secret API keys in front-end JavaScript. Public browser code is visible to users. Route privileged requests through a protected server, validate authorization for every operation and limit the data returned.

## 5.6 State and rendering
Keep application state separate from presentation where possible. Update the interface from a known state rather than making unrelated DOM changes throughout the code. For larger interfaces, use an appropriate framework only when its complexity is justified.

**Practice:** Build a page that requests a local sample JSON file, displays loading, success, empty and error states, and validates each returned record before rendering.`,
`# Module 6: Testing, performance and capstone application

## 6.1 Testing JavaScript
Test pure functions independently, then test DOM behaviour and API integration. Include normal, boundary and invalid cases. Use browser developer tools and an automated test framework where available. Tests should verify behaviour rather than internal implementation details.

## 6.2 Debugging
Use breakpoints, watch expressions and network inspection. Check the first meaningful exception, inspect variable values and verify assumptions about asynchronous order. A Promise rejection may appear after the initiating function has returned.

## 6.3 Performance and resilience
Avoid unnecessary DOM updates, oversized bundles and repeated network requests. Use pagination or filtering for large datasets. Provide fallback behaviour when a network service is unavailable and avoid blocking the whole page for non-critical features.

## 6.4 Security review
Review injection risks, access control, exposed secrets, dependency vulnerabilities and unsafe redirects. Client-side validation is not sufficient for privileged operations. Apply secure defaults and keep dependencies updated.

## 6.5 Capstone: Interactive course finder
Create an application that:
- Displays a structured catalogue of courses.
- Filters by keyword, level and free/paid status.
- Uses accessible form labels and keyboard controls.
- Displays safe loading, empty and error messages.
- Loads sample data asynchronously.
- Validates records before rendering.
- Includes unit tests for filtering and validation.
- Provides a short security and accessibility review.

## 6.6 Assessment — 20 marks
| Task | Marks |
|---|---:|
| Explain JavaScript values and strict equality | 3 |
| Use arrays and objects to model records | 3 |
| Write reusable functions and validation | 4 |
| Explain DOM events and safe rendering | 3 |
| Explain Promises and API security | 3 |
| Demonstrate tested capstone | 4 |
| **Total** | **20** |

**Marking guidance:** Give credit for correct behaviour, safe rendering, meaningful tests and accessible operation. A page that works only with one hard-coded record is not a complete application.`
],
"cybersecurity-fundamentals":[
`# Module 1: Cybersecurity principles, assets and risk

## 1.1 Meaning and purpose
Cybersecurity protects systems, networks, applications and information from unauthorised access, disruption, alteration or destruction. It is a continuous risk-management activity, not a one-time software installation. People, processes, technology and governance all contribute to security.

## 1.2 The CIA triad
Confidentiality limits information access to authorised parties. Integrity protects accuracy and prevents unauthorised alteration. Availability ensures systems and information are accessible when required. A control may improve one objective while affecting another, so decisions should consider operational needs.

## 1.3 Assets and threat actors
Assets include devices, accounts, data, applications, networks, services and reputation. Threat actors may include criminals, insiders, opportunists, competitors or state-sponsored groups. Their capability and motivation vary. Do not assume every incident has the same attacker profile.

## 1.4 Threat, vulnerability and risk
A threat is a potential cause of harm. A vulnerability is a weakness that could be exploited. Risk combines likelihood and impact in a defined context. A simple risk register records the asset, threat, weakness, likelihood, impact, existing controls, owner and treatment plan.

## 1.5 Security controls
Administrative controls include policies and training. Technical controls include encryption, access control and monitoring. Physical controls include locks, access barriers and secure equipment storage. Defence in depth uses multiple layers so one failed control does not expose everything.

## 1.6 Governance and responsibility
Define ownership, acceptable use, access approval, incident reporting, backup responsibilities and review schedules. Follow applicable laws, contracts and institutional policies. Security is a shared responsibility, but accountable roles must be clear.

**Practice:** Create a risk register for a small school computer laboratory. Identify five assets, threats, vulnerabilities and proportionate controls.`,
`# Module 2: Social engineering, phishing and malicious software

## 2.1 Social engineering
Social engineering manipulates people into revealing information or performing actions. Attackers may exploit urgency, authority, fear, curiosity, trust or familiarity. A message may imitate a colleague, bank, delivery service or technology provider.

## 2.2 Phishing and its variants
Phishing uses deceptive messages or websites to obtain credentials, payment details or other sensitive information. Spear phishing targets a specific person or organisation. Smishing uses text messages; vishing uses voice calls. Business email compromise may involve impersonation or compromised mailboxes.

## 2.3 Recognising suspicious messages
Check the actual sender address, domain spelling, unexpected attachments, unusual payment instructions, pressure tactics and requests for credentials. Do not rely solely on logos or display names. Verify sensitive requests through a separately obtained trusted channel.

## 2.4 Malware categories
Malware includes viruses, worms, trojans, ransomware, spyware and keyloggers. Ransomware may encrypt or steal data and demand payment. Malware can arrive through malicious attachments, compromised websites, unsafe downloads or exploited vulnerabilities.

## 2.5 Safe response
Do not open suspicious attachments or enter credentials from an unexpected link. Report the message through the organisation's approved process. If credentials may have been exposed, contact the administrator immediately, reset credentials from a trusted device and review active sessions.

## 2.6 Awareness exercises
Run only authorised simulations. Do not shame participants or collect real passwords. Use exercises to teach verification, reporting and recovery. Measure whether people report suspicious messages promptly rather than merely counting clicks.

**Practice:** Analyse three fictional messages and list observable warning signs, a safe verification method and the correct reporting route.`,
`# Module 3: Identity, authentication and endpoint protection

## 3.1 Identification, authentication and authorisation
Identification states who a user claims to be. Authentication verifies that claim. Authorisation determines what the authenticated identity may do. These are separate decisions and should be implemented separately.

## 3.2 Password management
Use long, unique passwords or passphrases for each service. A password manager can generate and store them. Never reuse a critical password across unrelated sites. Organisations should store passwords using appropriate salted password-hashing algorithms, not plaintext or reversible encryption.

## 3.3 Multi-factor authentication
MFA combines factors from different categories: something known, possessed or inherent. Authenticator apps, hardware security keys and passkeys can reduce dependence on passwords. Some methods are more resistant to phishing than others. Enable the strongest supported method and protect recovery procedures.

## 3.4 Least privilege
Give each user only the permissions needed for their role and remove access when it is no longer required. Separate ordinary accounts from administrator accounts. Review privileged access periodically and log sensitive actions.

## 3.5 Endpoint security
Keep operating systems and applications updated, enable supported security protections, use device encryption, restrict installation rights and maintain backups. Lock unattended devices and securely erase equipment before disposal or reassignment.

## 3.6 Account recovery and compromise
Recovery channels can become an attack path. Protect recovery email and phone accounts, store backup codes securely and review active sessions. If compromise is suspected, use a trusted device to change credentials, revoke sessions and contact the service administrator.

**Practice:** Design an account-security checklist for teachers and learners. Explain why MFA, unique passwords and least privilege work together.`,
`# Module 4: Network security, encryption and secure communication

## 4.1 Network fundamentals
A network connects devices so they can exchange information. Common concepts include IP addresses, routers, switches, DNS, ports and protocols. Understanding the normal network design helps identify unusual traffic and misconfiguration.

## 4.2 Common network threats
Threats include eavesdropping, spoofing, denial of service, insecure wireless access, rogue devices and exploitation of exposed services. Risk depends on system configuration, exposure, patch status and the value of the information.

## 4.3 Encryption in transit and at rest
Encryption in transit protects data as it moves between systems; HTTPS uses TLS to protect web communication. Encryption at rest protects stored information if a device or storage medium is accessed without authorisation. Key management is essential: lost keys can make data unavailable, while exposed keys can defeat protection.

## 4.4 Wireless security
Use modern supported Wi-Fi security, strong router administration credentials, updated firmware and a separate guest network where appropriate. Avoid transmitting sensitive information over untrusted networks unless a trusted secure connection is used.

## 4.5 Firewalls and segmentation
A firewall controls network traffic according to defined rules. Network segmentation limits movement between systems. Restrict exposed services to the minimum required and review rules periodically. A firewall is not a substitute for patching, authentication or monitoring.

## 4.6 Remote access
Use approved remote-access solutions, MFA and managed devices. Disable unnecessary remote services. Avoid exposing administrative interfaces directly to the public internet. Record and review access to sensitive systems.

**Practice:** Draw a simple network diagram for a learning centre. Mark public, staff and administration devices, then propose segmentation and access rules.`,
`# Module 5: Vulnerability management, monitoring and incident response

## 5.1 Vulnerability lifecycle
Maintain an asset inventory, identify weaknesses, assess severity and exposure, prioritise remediation, apply patches or mitigations, and verify the result. Prioritisation should consider exploitability, business impact and whether a weakness is actively exploited—not just a numerical score.

## 5.2 Safe vulnerability assessment
Only scan systems you own or are explicitly authorised to assess. Define scope, timing, permitted techniques and contacts. Unauthorised scanning or testing can disrupt services and violate law or policy.

## 5.3 Logging and monitoring
Logs help establish what happened and when. Collect relevant authentication, application, endpoint and network events. Synchronise system clocks, restrict log access and protect logs against alteration. Avoid recording passwords, tokens or unnecessary personal information.

## 5.4 Incident response stages
A common response lifecycle includes preparation, identification, containment, eradication, recovery and lessons learned. Preserve evidence and follow the organisation's incident plan. Do not delete suspicious files or power down systems without considering evidence-preservation guidance.

## 5.5 Backup and recovery
Maintain backups according to business needs, protect them from alteration and test restoration. A backup that has never been restored is not proven. Consider offline or immutable copies for critical information and define recovery time and recovery point objectives.

## 5.6 Reporting and communication
Report suspected incidents quickly through approved channels. Record time, affected systems, observed symptoms and actions taken. Communicate facts, not speculation. Escalate legal, privacy or safety concerns to designated officers.

**Practice:** Draft a tabletop exercise for a ransomware incident affecting a school office. Identify first actions, decision owners, evidence to preserve and recovery priorities.`,
`# Module 6: Security culture, ethics and capstone

## 6.1 Privacy and data protection
Collect only necessary personal data, explain its purpose, restrict access, protect it in transit and at rest, and retain it only as long as justified. Follow applicable data-protection law and institutional rules. Security controls should respect the rights of learners, employees and other users.

## 6.2 Ethical and lawful practice
Obtain permission before testing, accessing or disclosing systems and data. Do not use security knowledge to steal credentials, disrupt services, spy on people or bypass access controls. Document authorisation and stop if activity exceeds the agreed scope.

## 6.3 Secure-by-design thinking
Consider security during requirements, design, development, procurement and retirement. Use secure defaults, minimise privileges, validate input, protect secrets, patch dependencies and review supplier risks.

## 6.4 Security awareness programme
Provide role-specific guidance, short practical exercises and clear reporting channels. Evaluate improvements through incident reporting quality, MFA adoption, patch coverage and recovery testing rather than relying only on attendance.

## 6.5 Capstone: Cybersecurity improvement plan
Prepare a security improvement plan for a small education institution. Include an asset inventory, risk register, identity controls, endpoint and network safeguards, backup strategy, incident-response contacts, awareness programme, review timetable and measurable indicators. Keep all proposed tests within authorised scope.

## 6.6 Assessment — 20 marks
| Task | Marks |
|---|---:|
| Explain confidentiality, integrity and availability | 3 |
| Identify phishing and social-engineering indicators | 3 |
| Compare authentication and authorisation | 3 |
| Explain encryption and network controls | 3 |
| Outline incident response and recovery | 4 |
| Present a realistic security improvement plan | 4 |
| **Total** | **20** |

**Marking guidance:** Reward risk-based reasoning, lawful scope, clear ownership and practical recovery. Do not award full marks to a plan that relies on a single antivirus product or an untested backup.`
],
"entrepreneurship-small-business":[
`# Module 1: Entrepreneurial thinking and opportunity identification

## 1.1 Entrepreneurship defined
Entrepreneurship is the process of identifying an opportunity, organising resources, accepting calculated uncertainty and creating value. A business may create economic, social or environmental value. Entrepreneurship is not simply registering a company or selling a product; it requires understanding a real need and delivering a sustainable solution.

## 1.2 Problems, needs and opportunities
An opportunity begins with a problem experienced by a defined group. Observe repeated difficulties, delays, high costs, poor access or unmet expectations. Separate a genuine customer problem from an idea that merely interests the founder.

## 1.3 Entrepreneurial mindset
Useful habits include curiosity, disciplined experimentation, resilience, ethical judgement, learning from evidence and willingness to revise assumptions. Resilience does not mean ignoring repeated evidence that a business model is not working.

## 1.4 Opportunity screening
Assess customer need, market size, willingness to pay, competition, capabilities, regulation, startup cost and delivery risk. A simple scoring matrix can compare opportunities, but scores are only decision aids; assumptions must be tested.

## 1.5 Value proposition
A value proposition states the customer, problem, proposed solution and reason to choose it. Example: “We provide affordable, scheduled online revision sessions for secondary learners who need structured practice and feedback.” The statement should be specific enough to test.

## 1.6 Ethics and social value
Consider product safety, honest advertising, fair employment, accessibility, environmental impact, customer privacy and transparent pricing. A business should not promise outcomes it cannot reasonably deliver.

**Practice:** Identify three problems in an education or community setting. Interview potential customers with open questions and record evidence without collecting unnecessary personal information.`,
`# Module 2: Market research, customer discovery and validation

## 2.1 Why research matters
Market research reduces uncertainty about customers, competitors, demand, pricing and distribution. It cannot guarantee success, but it helps avoid investing heavily in an untested assumption.

## 2.2 Define the customer segment
Describe customers by relevant needs, behaviours, location, purchasing authority and constraints. For a school service, distinguish the learner who uses it, the guardian who may pay and the school that may approve procurement.

## 2.3 Primary and secondary research
Primary research includes interviews, surveys, observation and prototype testing. Secondary research includes official statistics, industry reports, published studies and competitor information. Evaluate source date, sample, method, bias and relevance.

## 2.4 Interview design
Ask about past behaviour rather than only hypothetical interest. “Tell me about the last time you needed revision support” is more informative than “Would you buy my app?” Avoid leading questions and record patterns across several participants.

## 2.5 Competitor analysis
Compare direct competitors, substitutes and the option of doing nothing. Assess their audience, pricing, strengths, weaknesses, distribution and customer experience. Do not assume a competitor's weakness without evidence.

## 2.6 Minimum viable product and experiments
A minimum viable product is the smallest useful version that tests a key assumption. A landing page, sample lesson, manual service or prototype may be enough. Define the metric before testing: sign-ups, repeat use, paid conversion, completion or customer satisfaction.

**Practice:** Design a one-week validation experiment for a proposed service. State the hypothesis, target participants, method, success threshold and ethical safeguards.`,
`# Module 3: Business models and business planning

## 3.1 Business model
A business model explains how an organisation creates, delivers and captures value. It covers customer segments, value proposition, channels, relationships, revenue, key resources, activities, partners and costs.

## 3.2 Revenue models
Common models include direct sales, subscriptions, licensing, commissions, advertising, service fees and freemium. Select a model that matches customer behaviour and the cost of delivering the service. Recurring revenue is not automatically profitable if support and acquisition costs are high.

## 3.3 Channels and customer relationships
Channels include physical outlets, websites, marketplaces, social media, agents and partnerships. Decide how customers discover, evaluate, purchase, receive and get support for the product. Ensure the channel is accessible to the target market.

## 3.4 Business plan structure
A practical plan includes an executive summary, problem and solution, market evidence, competitor analysis, marketing strategy, operations, team, legal considerations, financial forecasts, risks and milestones. The plan should be updated when evidence changes.

## 3.5 Business Model Canvas
Use a one-page canvas to expose assumptions and connections. For example, a tutoring service may rely on qualified tutors, scheduling software, trusted learner acquisition channels and reliable payment collection. Each element creates dependencies and costs.

## 3.6 Legal structure and compliance
Business registration, tax, licensing, consumer protection, employment, intellectual property and data protection requirements vary by jurisdiction and sector. Consult the relevant official authority or qualified professional before making legal or tax decisions.

**Practice:** Produce a Business Model Canvas and a two-page plan for a small service business. Highlight three assumptions that still require validation.`,
`# Module 4: Finance, pricing, cash flow and operations

## 4.1 Startup costs
Separate one-time setup costs from recurring operating costs. Examples include equipment, registration, software, rent, transport, marketing, stock and professional services. Include working capital for the period before revenue becomes reliable.

## 4.2 Revenue, costs and profit
Revenue is money earned from sales before expenses. Gross profit is revenue less direct cost of goods or services. Net profit accounts for other operating costs and applicable expenses. Cash flow measures actual cash entering and leaving the business; profit and cash flow are not identical.

## 4.3 Break-even analysis
Break-even quantity is fixed costs divided by contribution per unit, where contribution per unit equals selling price minus variable cost per unit.

Worked example: monthly fixed costs are 60,000 currency units. Selling price is 1,000 and variable cost is 400. Contribution is 600. Break-even volume is 60,000 / 600 = 100 sales per month. This assumes constant prices and costs and a single product; real businesses may have mixed products and changing costs.

## 4.4 Pricing
Pricing can be based on cost, customer value, competitor benchmarks or a combination. Include delivery, transaction, support, tax and acquisition costs. Test willingness to pay and communicate what is included. Avoid pricing below sustainable cost merely to attract early attention.

## 4.5 Cash-flow planning
Prepare a monthly forecast of expected receipts and payments. Identify late customer payments, seasonal demand, stock purchases and debt obligations. Maintain a cash reserve where possible and update forecasts using actual results.

## 4.6 Operations and controls
Document how orders are received, work is delivered, quality is checked, complaints are handled and records are stored. Separate approval and payment duties where practical. Reconcile sales, receipts and inventory regularly.

**Practice:** Prepare a 12-month cash-flow forecast and calculate break-even for a proposed business. State assumptions and show how the result changes if variable cost rises by 10%.`,
`# Module 5: Marketing, sales, customer experience and digital growth

## 5.1 Marketing strategy
Marketing identifies and serves customers through product, price, place and promotion. Begin with the audience and value proposition. Choose channels based on customer behaviour, not popularity alone.

## 5.2 Brand and positioning
A brand is the set of associations and experiences customers connect with a business. Define a clear promise, tone, visual identity and service standard. Positioning should be supported by actual delivery.

## 5.3 Digital marketing channels
Search, useful website content, email, social platforms, partnerships and paid advertising can support discovery. Select channels that match the customer's decision process. Track outcomes such as qualified enquiries, conversion, repeat purchase and cost per acquisition.

## 5.4 Content and search visibility
Publish original, helpful content that answers real customer questions. Use clear page titles, descriptive headings, accurate contact details and useful internal links. Do not copy competitors' content, fabricate testimonials or create misleading claims to attract traffic.

## 5.5 Sales process
A simple sales process includes lead qualification, needs discovery, solution explanation, objection handling, proposal, agreement, delivery and follow-up. Listen before recommending. Keep promises realistic and record customer consent for follow-up communication.

## 5.6 Customer experience and retention
Make purchasing, payment, delivery, support and refunds understandable. Resolve complaints fairly and use feedback to improve. Retention depends on continuing value, reliability and trust—not repeated promotional messages.

**Practice:** Create a 30-day marketing plan with audience, message, channel, content schedule, budget and measurable outcomes. Include a customer complaint-response procedure.`,
`# Module 6: Risk, growth, sustainability and capstone

## 6.1 Business risk
Risks include weak demand, cash shortages, supplier failure, cyber incidents, regulatory changes, staff turnover, reputational damage and operational interruption. Record likelihood, impact, early warning signs, controls and an accountable owner.

## 6.2 Business resilience
Maintain critical supplier alternatives, secure records, backups, emergency contacts and clear customer communication. Test the continuity plan. A plan that depends on one person, one device or one payment channel may be fragile.

## 6.3 Growth decisions
Growth can involve new products, new locations, partnerships, digital delivery or increased capacity. Confirm that demand and unit economics support expansion. Growing sales while losing money on each transaction can increase losses.

## 6.4 Sustainability and responsible enterprise
Consider energy, waste, sourcing, accessibility, fair work and community effects. Measure relevant impacts and avoid unsupported “green” claims. Sustainability should be integrated into operations and purchasing decisions.

## 6.5 Capstone: Evidence-based small-business launch plan
Prepare a launch plan for a real or simulated small business. Include:
- Customer problem and evidence from discovery.
- Customer segment and value proposition.
- Competitor and substitute analysis.
- Business Model Canvas and operating workflow.
- Pricing, startup budget, break-even and 12-month cash forecast.
- Marketing and sales plan with measurable indicators.
- Legal and ethical issues requiring local verification.
- Risk register, continuity plan and growth milestones.

## 6.6 Assessment — 20 marks
| Task | Marks |
|---|---:|
| Explain opportunity identification and value creation | 3 |
| Design a customer research experiment | 3 |
| Describe a viable business model | 3 |
| Calculate contribution and break-even | 4 |
| Propose a measurable marketing strategy | 3 |
| Present a risk-aware business plan | 4 |
| **Total** | **20** |

**Marking guidance:** Reward evidence, transparent assumptions, correct calculations, realistic cash planning and ethical practice. A business idea without customer validation or financial reasoning is not a complete launch plan.`
]
  };
  E.makeLongNotes=function(slug,course,module,level){
    const items=notes[slug];
    const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
    if(items&&index>=0&&items[index]) return items[index];
    return typeof previous==="function" ? previous.call(E,slug,course,module,level) : "";
  };
})();
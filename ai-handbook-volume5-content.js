/* CBE Nexus AI Academy — Handbook Volume 5: Courses 26–30.
   Source: user-supplied comprehensive training notes.
   Six substantive modules per course; mapped to the existing course catalogue.
   The extension chains the notes engine and leaves unrelated courses unchanged. */
(function(){
  const E=window.CBENexusAIEnhanced;
  if(!E||typeof E.makeLongNotes!=="function") return;
  const previous=E.makeLongNotes.bind(E);
  const notes={
  "python-programming":[
`# Module 1: Introduction to Python programming

## 1.1 Programming and problem solving
Programming is the process of expressing instructions in a form a computer can execute. A useful program starts with a clearly defined problem, identifies required inputs, processes them through logical steps and produces an output. Examples include calculating examination averages, maintaining student records, automating reports and analysing scientific measurements.

A basic problem-solving cycle is:
1. Define the problem and intended result.
2. Identify inputs, outputs and constraints.
3. Design an algorithm or flowchart.
4. Write the program.
5. Test normal, boundary and invalid cases.
6. Correct errors and document the solution.

## 1.2 What is Python?
Python is a high-level, general-purpose language recognised for readable syntax and a broad ecosystem. It is used in web development, automation, scientific computing, data analysis, education and artificial intelligence. Python is interpreted in the usual development workflow and supports procedural, object-oriented and functional programming styles.

## 1.3 Setting up a Python environment
Learners may use a local Python installation, Visual Studio Code with the Python extension, Jupyter Notebook or a reputable online environment. A typical local workflow is to install Python, confirm the installation, create a project folder, create a `.py` file, run it and inspect the output.

Commands:
```bash
python --version
python hello.py
```
On some systems the launcher is `python3` rather than `python`.

## 1.4 Your first program
```python
print("Welcome to CBE Nexus AI Academy!")
```
The `print()` function displays information. Python statements normally run from top to bottom. Text is represented by strings enclosed in matching quotation marks.

## 1.5 Comments and readable code
```python
# Display a learner greeting
print("Hello, learner!")
```
Comments explain intent to people reading the program; they are not executed as program instructions. Use meaningful names, consistent indentation and short functions.

## 1.6 Syntax errors and debugging
A missing quotation mark or parenthesis causes a syntax error:
```python
# Incorrect
print("Hello"

# Correct
print("Hello")
```
Read the traceback from the final line upward to identify the exception and the line where it occurred. Do not guess: reproduce the problem, inspect the relevant values and change one thing at a time.

**Practical exercise:** Write a program that displays your name, course, institution and one learning goal on separate lines. Intentionally remove a closing parenthesis, observe the error, then repair it.`,
`# Module 2: Variables, data types and operators

## 2.1 Variables
A variable is a name bound to a value. Python creates the binding when an assignment executes:
```python
student_name = "James"
age = 19
course = "Python Programming"
``
Choose descriptive names such as `total_marks` and `average_score`. Names are case-sensitive, cannot begin with a digit, cannot contain spaces and must not be reserved keywords. Python convention commonly uses lowercase words separated by underscores.

## 2.2 Core data types
| Type | Purpose | Example |
|---|---|---|
| `str` | Text | `"Biology"` |
| `int` | Whole numbers | `25` |
| `float` | Decimal numbers | `12.5` |
| `bool` | Truth values | `True` |
| `list` | Mutable ordered collection | `[2, 4, 6]` |
| `tuple` | Immutable ordered collection | `(2, 4, 6)` |
| `dict` | Key-value mapping | `{"name": "Mary"}` |
| `set` | Unique hashable elements | `{2, 4, 6}` |

Inspect a value with `type(value)`. A list can be changed after creation; a tuple cannot have its elements reassigned.

## 2.3 Arithmetic and operator precedence
| Operator | Meaning | Example |
|---|---|---|
| `+` | Addition | `5 + 3` |
| `-` | Subtraction | `5 - 3` |
| `*` | Multiplication | `5 * 3` |
| `/` | True division | `10 / 3` |
| `//` | Floor division | `10 // 3` |
| `%` | Remainder | `10 % 3` |
| `**` | Exponentiation | `2 ** 3` |

Parentheses make complex expressions clearer. Floor division rounds down to the next integer value; it is not the same as ordinary division.

## 2.4 Worked example: learner average
```python
biology = 78
chemistry = 82
mathematics = 70

total = biology + chemistry + mathematics
average = total / 3

print("Total:", total)
print(f"Average: {average:.2f}")
```
The result is total 230 and average 76.67. An f-string embeds expressions in text; `:.2f` formats a floating-point value to two decimal places.

## 2.5 Input and type conversion
```python
name = input("Enter your name: ")
age_text = input("Enter your age: ")
age = int(age_text)
print(f"Hello {name}. You are {age} years old.")
```
`input()` returns a string. Convert deliberately using `int()`, `float()` or another appropriate constructor. Invalid text can raise `ValueError`, so real applications should validate it.

## 2.6 Expressions and comparison
Comparison operators include `==`, `!=`, `>`, `<`, `>=` and `<=`. They produce Boolean values. Use `==` to compare values; a single `=` assigns a value.

**Practical exercise:** Build a two-number calculator that displays addition, subtraction, multiplication and division. Handle a zero divisor and invalid numeric input.`,
`# Module 3: Conditions, loops and data structures

## 3.1 Decision-making with conditions
Conditional statements select a path based on a Boolean expression:
```python
marks = 76
if marks >= 80:
    print("Excellent")
elif marks >= 60:
    print("Good")
elif marks >= 40:
    print("Pass")
else:
    print("Needs improvement")
```
Python uses indentation to define each block. Ensure grade boundaries do not overlap or leave unintended gaps. Confirm the grading scale with the relevant institution before using it for official results.

## 3.2 Logical operators
`and` requires both conditions to be true, `or` requires at least one, and `not` reverses a truth value.
```python
age = 22
has_certificate = True
if age >= 18 and has_certificate:
    print("Eligible")
```
Use parentheses when combining several conditions to make the intended logic explicit.

## 3.3 Iteration with for and while
A `for` loop iterates over an iterable:
```python
for number in range(1, 6):
    print(number)
```
`range(1, 6)` includes 1 but excludes 6. A `while` loop repeats while its condition remains true:
```python
counter = 1
while counter <= 5:
    print(counter)
    counter += 1
```
Update the condition variable to avoid an unintended infinite loop. `break` exits a loop and `continue` skips to its next iteration.

## 3.4 Lists
Lists are ordered and mutable; indexing starts at zero:
```python
subjects = ["Biology", "Chemistry", "Physics", "Mathematics"]
print(subjects[0])
subjects.append("Computer Science")
subjects.sort()
```
Useful operations include `append`, `extend`, `insert`, `remove`, `pop`, `sort`, `len`, `sum`, `min` and `max`. Check list length before accessing an index supplied by a user.

## 3.5 Dictionaries, tuples and sets
A dictionary maps unique keys to values:
```python
student = {"name": "Grace", "age": 18, "course": "Biology"}
print(student["name"])
print(student.get("guardian", "Not supplied"))
```
Use `.get()` when a key may be absent. Tuples are useful for fixed records; sets store unique elements and support operations such as union and intersection.

## 3.6 Combining structures
A list of dictionaries can represent a small collection of student records:
```python
students = [
    {"name": "Mary", "marks": [80, 75, 90]},
    {"name": "John", "marks": [65, 72, 70]}
]
for student in students:
    average = sum(student["marks"]) / len(student["marks"])
    print(student["name"], round(average, 2))
```
Check for an empty marks list before dividing. Larger applications should validate each record and use persistent storage.

**Practical exercise:** Create a student-record program that stores at least five names and marks, calculates averages, identifies the highest score and handles missing marks.`,
`# Module 4: Functions, files and error handling

## 4.1 Functions and reuse
A function packages a task under a name:
```python
def greet():
    print("Welcome to Python!")

greet()
```
Functions reduce repetition and make programs easier to test. A good function usually performs one clearly described task.

## 4.2 Parameters and return values
```python
def calculate_area(length, width):
    return length * width

area = calculate_area(10, 5)
print(area)
```
Parameters receive inputs; `return` sends a result to the caller. A function that only prints a value is less reusable than one that returns it.

## 4.3 Default and keyword arguments
```python
def greet(name="Learner"):
    print(f"Welcome, {name}!")

greet()
greet(name="Amina")
```
Keyword arguments improve readability. Avoid mutable objects as default parameter values unless their shared behaviour is intentional.

## 4.4 Reading and writing text files
```python
with open("students.txt", "w", encoding="utf-8") as file:
    file.write("Mary,85\\n")
    file.write("John,76\\n")

with open("students.txt", "r", encoding="utf-8") as file:
    content = file.read()

print(content)
```
The `with` statement closes the file reliably. Mode `w` replaces existing content; `a` appends; `r` reads. Use the correct path and protect files containing personal information.

## 4.5 Structured files
For simple tabular data, CSV is often more suitable than manually splitting strings. Python's `csv` module handles quoted fields. JSON is useful for nested structured data; use `json.load()` and `json.dump()` with appropriate encoding.

## 4.6 Exception handling
```python
try:
    number = int(input("Enter an integer: "))
    print(100 / number)
except ValueError:
    print("Please enter a valid integer.")
except ZeroDivisionError:
    print("Division by zero is not allowed.")
```
Catch expected exceptions and give actionable messages. Avoid broad exception handling that hides programming defects.

## 4.7 Debugging and testing
Common exceptions include `SyntaxError`, `NameError`, `TypeError`, `ValueError`, `IndexError` and `KeyError`. A logic error may produce a result without raising an exception. Test typical inputs, boundary values, empty data and invalid input.

**Practical exercise:** Accept learner marks, calculate the average, classify performance, save each record to a file and handle invalid entries without crashing.`,
`# Module 5: Object-oriented programming, libraries and APIs

## 5.1 Classes and objects
Object-oriented programming groups related data and behaviour. A class defines a type; an object is an instance of that class.
```python
class Student:
    def __init__(self, name, marks):
        self.name = name
        self.marks = marks

    def average(self):
        if not self.marks:
            return 0
        return sum(self.marks) / len(self.marks)

student1 = Student("Mary", [80, 75, 90])
print(student1.name)
print(student1.average())
```
`__init__` initialises an object and `self` refers to the current instance.

## 5.2 Encapsulation and methods
Encapsulation groups state and operations behind a defined interface. Python uses naming conventions such as a leading underscore to signal internal attributes; this is a convention, not strict private access. Methods can validate changes before updating object state.

## 5.3 Inheritance and polymorphism
```python
class Person:
    def __init__(self, name):
        self.name = name

class Teacher(Person):
    def teach(self):
        return f"{self.name} is teaching."

teacher = Teacher("Mr James")
print(teacher.teach())
```
Inheritance reuses and extends behaviour. Polymorphism allows different object types to respond to the same operation in their own way. Prefer composition when it produces a simpler design.

## 5.4 Python libraries
| Library | Common use |
|---|---|
| NumPy | Numerical arrays and computation |
| pandas | Tabular data manipulation |
| Matplotlib | Data visualisation |
| Requests | HTTP requests |
| Flask / Django | Web applications |
| scikit-learn | Classical machine learning |

Install packages in the intended environment:
```bash
python -m pip install pandas
```
Use virtual environments to isolate project dependencies and record requirements for reproducibility.

## 5.5 Working with an API
An API defines how software systems exchange information. HTTP APIs commonly use methods such as GET and POST and return status codes and structured responses.
```python
import requests

url = "https://api.example.com/data"  # illustrative endpoint
response = requests.get(url, timeout=10)
response.raise_for_status()
data = response.json()
print(data)
```
A real endpoint must be supplied by the API provider. Production code should handle timeouts, HTTP errors, invalid JSON, rate limits and authentication.

## 5.6 Secure development
Do not commit API keys, passwords or tokens to source control. Use environment variables or a secrets manager, restrict permissions, rotate exposed credentials and avoid logging secrets. Validate external data before using it.

**Practical exercise:** Create a `Student` class, store several objects, calculate their averages and write a short design note explaining the class's attributes, methods and validation rules.`,
`# Module 6: Automation, data science and capstone

## 6.1 Automating repetitive work
Python can automate file organisation, spreadsheet processing, report generation, data validation and approved notifications. First document the manual process, identify exceptions and define how to recover from partial failure. Automation should not perform consequential actions without appropriate review.

## 6.2 File automation example
```python
from pathlib import Path

folder = Path("reports")
folder.mkdir(exist_ok=True)

for path in folder.glob("*.txt"):
    print("Found report:", path.name)
```
Use `pathlib` for portable path handling. Test file operations on copies before applying them to important records.

## 6.3 Data analysis with pandas
```python
import pandas as pd

data = {
    "Student": ["Mary", "John", "Grace"],
    "Biology": [80, 70, 90],
    "Chemistry": [85, 75, 88]
}
df = pd.DataFrame(data)
df["Average"] = (df["Biology"] + df["Chemistry"]) / 2
print(df)
print(df["Average"].mean())
```
Check missing values, duplicate records, data types and unusual values before interpreting results. Averages can conceal variation; inspect distributions and context.

## 6.4 Introduction to machine learning
Machine learning uses data to fit a model that identifies patterns and makes predictions or groupings. Supervised learning uses labelled examples; unsupervised learning looks for structure without target labels; reinforcement learning learns through interaction and reward signals. Model performance depends on data quality, task definition and evaluation.

## 6.5 Testing a program
```python
def add(a, b):
    return a + b

assert add(2, 3) == 5
assert add(10, 5) == 15
```
For larger projects, use a test framework such as `unittest` or `pytest`. Test expected results, edge cases and failure conditions.

## Capstone: Student performance management application
Build an application that registers learners, accepts subject marks, validates entries, calculates totals and averages, assigns institution-approved categories, displays individual results, saves records and generates a summary report. Include a clear data format, error handling, tests and instructions for running the application.

## Assessment — 20 marks
| Question | Marks |
|---|---:|
| Explain variables and data types | 3 |
| Write a conditional Python program | 3 |
| Differentiate `for` and `while` loops | 3 |
| Write a reusable function | 3 |
| Explain classes and objects | 3 |
| Develop a simple data-processing program | 5 |
| **Total** | **20** |`
  ],
  "web-development-html-css":[
`# Module 1: Introduction to web development

## 1.1 What web development involves
Web development is the design, construction, testing and maintenance of websites and web applications. A website may publish information, support learning, sell products, collect enquiries or provide interactive services.

Front-end development creates the interface users interact with. Back-end development handles server-side logic, authentication, databases, payments and other services. Full-stack development combines both areas.

## 1.2 The three foundational browser technologies
- **HTML** describes document structure and meaning.
- **CSS** controls presentation and layout.
- **JavaScript** adds behaviour and interactivity.

These technologies have different responsibilities. CSS should not be used to replace meaningful document structure, and JavaScript should not be required merely to display essential static content.

## 1.3 How a website is delivered
A browser requests a resource using a URL. DNS helps locate the relevant server; the browser sends an HTTP request; the server responds with a status code, headers and content. The browser parses HTML, loads linked resources such as stylesheets and images, and renders the page. Dynamic applications may make further requests to APIs.

## 1.4 Development tools
Use a code editor such as Visual Studio Code, a modern browser, browser developer tools, Git for version control and a local development server. Developer tools help inspect the DOM, CSS, console errors, accessibility and network requests.

## 1.5 Project structure
```text
my-website/
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── logo.png
```
Organise files consistently and use descriptive names. Avoid spaces and inconsistent capitalisation in paths.

## 1.6 First development task
Create the project folder and a simple home page. Open it in a browser, inspect the source and use developer tools to identify the page's main elements.

**Exercise:** Draw a simple diagram showing browser, DNS, web server and (where relevant) application/database. Explain the role of each component.`,
`# Module 2: HTML fundamentals

## 2.1 What HTML does
HTML means HyperText Markup Language. It describes the structure and meaning of content. An HTML element commonly has an opening tag, content and a closing tag. Void elements such as `img` and `input` do not wrap content.

## 2.2 A valid document foundation
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Website</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <p>This is my first web page.</p>
</body>
</html>
```
The doctype selects standards mode. The language attribute helps assistive technology and language processing. The viewport meta tag supports responsive layout.

## 2.3 Headings, paragraphs and text semantics
Use headings in a logical hierarchy to organise sections. A page normally has one main page heading, followed by relevant section headings. Use `p` for paragraphs, `strong` for strong importance and `em` for emphasis. Do not choose elements solely for their default appearance.

## 2.4 Links and images
```html
<a href="https://example.com">Visit Example</a>

<img src="images/logo.png" alt="CBE Nexus logo" width="200">
```
Links should describe their destination. Provide useful alternative text for informative images; use empty alt text for purely decorative images so screen readers can skip them. Use meaningful filenames and appropriately sized images.

## 2.5 Lists and tables
Use `ul` for unordered lists, `ol` for ordered steps and `li` for list items. Use tables for genuinely tabular data, not page layout. Include header cells and captions where useful.

## 2.6 Forms and input controls
Forms collect information. Associate every control with a visible `label`; choose appropriate input types such as email, number or date; use `name` attributes for submitted fields; and provide clear instructions. Client-side constraints improve user experience but are not a security boundary.

**Practical exercise:** Build an educational page with a heading hierarchy, paragraphs, subject list, useful link, informative image with alt text, timetable table and labelled contact form.`,
`# Module 3: CSS fundamentals and visual styling

## 3.1 What CSS does
Cascading Style Sheets controls the appearance and layout of HTML. A CSS rule contains a selector and declarations. Each declaration has a property and value.

## 3.2 Connecting an external stylesheet
Place this in the document head:
```html
<link rel="stylesheet" href="css/style.css">
```
External stylesheets support reuse and easier maintenance across pages.

## 3.3 Selectors and the cascade
```css
h1 { color: navy; }
p { font-size: 1rem; }
.course-card { background: white; }
#main-title { text-align: center; }
```
Element selectors target tags, class selectors target reusable classes and ID selectors target a unique identifier. The cascade considers origin, importance, specificity and source order. Prefer simple, maintainable selectors over excessive specificity.

## 3.4 The box model
A CSS box consists of content, padding, border and margin. Padding is inside the border; margin is outside. The default content-box sizing means declared width applies to content alone. A common reset is:
```css
*, *::before, *::after { box-sizing: border-box; }
```
This makes sizing more predictable.

## 3.5 Typography, colour and spacing
CSS supports named colours, HEX, RGB and HSL values. Choose readable fonts, line height and text contrast. Use a consistent spacing scale rather than arbitrary values:
```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #222;
  background: #f4f7fb;
}
.card {
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 0.75rem;
}
```

## 3.6 Backgrounds and visual hierarchy
```css
.hero {
  background: linear-gradient(120deg, #123456, #2196f3);
  color: white;
  padding: 3rem 1.5rem;
}
```
Use contrast, whitespace, alignment and size to show information hierarchy. Check text against its background and do not communicate status by colour alone.

**Practical exercise:** Style the Module 2 educational page with a consistent palette, readable typography, navigation, card components and visible focus states.`,
`# Module 4: Layout systems, navigation and responsive design

## 4.1 Flexbox
Flexbox arranges items along a main axis and aligns them on a cross axis. It is useful for navigation bars, toolbars and rows of cards:
```css
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}
```
Understand `justify-content`, `align-items`, `flex-direction`, `flex-wrap` and `gap`.

## 4.2 CSS Grid
Grid supports two-dimensional row-and-column layouts:
```css
.course-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.25rem;
}
```
Use Grid for page regions and card galleries. `minmax(0, 1fr)` helps prevent long content from forcing tracks wider than intended.

## 4.3 Responsive design principles
Responsive design adapts to available space rather than assuming one device width. Use flexible containers, relative units, responsive images, Grid/Flexbox and media queries. Start with the content and introduce breakpoints where the layout needs them.

## 4.4 Media queries
```css
.course-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
@media (max-width: 768px) {
  .course-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 480px) {
  .course-grid { grid-template-columns: 1fr; }
}
```
Test at intermediate widths as well as named breakpoints. Avoid horizontal overflow and controls that are too small to operate.

## 4.5 Responsive media
```css
img, video { max-width: 100%; height: auto; }
```
Use appropriate image dimensions and avoid stretching. Consider captions and transcripts for video.

## 4.6 Navigation design
Use a semantic `nav` element, descriptive labels, visible focus indicators and a logical keyboard order. On small screens, any collapsible menu must expose its state and remain keyboard-operable. Do not hide essential navigation behind an interaction that cannot be used with assistive technology.

**Practical exercise:** Build a responsive learning-resource page with a header, navigation, three-column desktop course grid, two-column tablet layout and single-column phone layout. Test keyboard use and horizontal scrolling.`,
`# Module 5: Semantic HTML, accessibility and SEO

## 5.1 Semantic structure
Semantic elements communicate purpose:
```html
<header><h1>Learning Centre</h1></header>
<nav aria-label="Main navigation">
  <a href="/">Home</a>
  <a href="/courses">Courses</a>
</nav>
<main>
  <article>
    <h2>Introduction to Biology</h2>
    <p>Study the characteristics of living organisms.</p>
  </article>
</main>
<footer><p>Copyright information</p></footer>
```
Use `main` for the primary page content, `article` for self-contained content, `section` for a thematic section with a heading and `aside` for related supporting material.

## 5.2 Accessibility fundamentals
Provide text alternatives for informative images, sufficient contrast, descriptive links, logical headings, keyboard access, visible focus, labelled forms and clear error messages. Use native HTML controls before creating custom widgets. Test with keyboard navigation and, where possible, screen readers.

## 5.3 Accessible forms
```html
<form>
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Submit</button>
</form>
```
Validation errors should identify the affected field and explain how to correct it. Server-side validation remains essential because browser checks can be bypassed.

## 5.4 Search-friendly page metadata
```html
<title>Free Biology Learning Resources | CBE Nexus</title>
<meta name="description"
      content="Explore Biology notes, explanations and practice questions.">
<link rel="canonical" href="https://example.com/biology">
```
Write a unique, accurate title and description for each important page. Canonical URLs should identify the preferred equivalent page, not be copied blindly across unrelated pages.

## 5.5 Content and technical SEO
Create original, useful content that answers the visitor's question. Use clear headings, crawlable links, descriptive URLs, useful internal links, mobile-friendly layouts and reliable performance. Avoid keyword stuffing and doorway pages.

## 5.6 Structured data
Structured data uses a defined vocabulary such as Schema.org to describe page content. Types may include Organization, Article, BreadcrumbList and Course when they accurately describe visible content and meet search-engine requirements. Markup does not guarantee rich results; validate syntax and follow current search documentation.

**Practical exercise:** Audit a course page for semantic structure, title, description, canonical URL, heading hierarchy, image alternatives, form labels and keyboard operation.`,
`# Module 6: Website testing, performance, deployment and capstone

## 6.1 Testing before publication
Test navigation, links, forms, images, responsive layouts, keyboard operation, contrast, content accuracy and browser compatibility. Check the browser console and network panel for errors and missing resources. Test form behaviour with valid, invalid and empty inputs.

## 6.2 Performance optimisation
Resize and compress images, use modern formats where supported, avoid unnecessary scripts and large dependencies, minimise render-blocking resources and configure caching appropriately. Measure performance rather than assuming a change improved it. Do not remove accessibility or essential functionality to make a page faster.

## 6.3 Hosting choices
Static hosting is suitable for files that can be served directly. Dynamic applications may need an application server, database and secure environment configuration. Compare reliability, deployment process, bandwidth, storage, support and cost before choosing a host.

## 6.4 Git and GitHub
Git tracks source-code changes:
```bash
git init
git add .
git commit -m "Initial website"
git status
```
A remote repository supports collaboration and backup. Use meaningful commits, review changes and never commit secrets or private learner data.

## 6.5 Deployment workflow
A safe workflow is: test locally, commit changes, push to a repository, configure the hosting service, set required environment variables securely, deploy, inspect build logs and test the live URL. Keep a rollback path for failed releases.

## Capstone: Professional education website
Build Home, About, Courses and Contact pages; add consistent navigation, responsive layout, accessible images, a labelled form interface, SEO metadata and a useful footer. Deploy it to a suitable host and submit the source, live URL, test checklist and a short explanation of design decisions.

## Assessment — 20 marks
| Question | Marks |
|---|---:|
| Explain HTML, CSS and JavaScript roles | 3 |
| Create a basic HTML document | 3 |
| Explain the CSS box model | 3 |
| Differentiate Flexbox and Grid | 3 |
| Explain semantic HTML and accessibility | 4 |
| Develop and test a responsive website | 4 |
| **Total** | **20** |`
  ],
  "javascript-programming":[
`# Module 1: Introduction to JavaScript

## 1.1 What JavaScript is
JavaScript is a programming language widely used to create interactive web experiences. In browsers it can respond to events, validate forms, update page content, request data and manage application state. JavaScript is also used outside browsers, including server-side environments.

## 1.2 HTML, CSS and JavaScript
HTML defines structure and meaning; CSS controls presentation; JavaScript implements behaviour. Keep these responsibilities clear so that pages remain maintainable and accessible.

## 1.3 Adding JavaScript to a page
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JavaScript Lesson</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>My First JavaScript Program</h1>
</body>
</html>
```
The `defer` attribute lets the browser parse the document before executing the external script.

## 1.4 Output and the console
```javascript
console.log("Welcome to JavaScript!");
```
The console is useful for debugging. `alert()` displays a blocking dialog and should be used sparingly in real interfaces. `document.write()` is generally unsuitable for modern application updates because it can replace document content.

## 1.5 Comments and code organisation
```javascript
// A single-line comment

/*
A multi-line
comment
*/
```
Use meaningful identifiers, consistent formatting and small functions. Comments should explain why a decision exists rather than repeat obvious code.

## 1.6 Developer tools
Use the console for errors and diagnostic messages, Elements panel to inspect the DOM, Sources panel for breakpoints and Network panel to inspect requests. Learn to reproduce errors and inspect variable values rather than relying on guesswork.

**Practical exercise:** Create an HTML page linked to a separate JavaScript file. Display a heading in the page and log a welcome message in the console.`,
`# Module 2: Variables, data types and operators

## 2.1 Declaring variables
Use `let` for bindings that will be reassigned and `const` by default when reassignment is not needed:
```javascript
let age = 20;
const course = "JavaScript";
age = 21;
console.log(age, course);
```
`var` is function-scoped and appears in older code. Understand it when maintaining legacy projects, but prefer `let` and `const` for new code.

## 2.2 Primitive and object types
Primitive types include string, number, boolean, undefined, null, bigint and symbol. Objects include arrays, functions and plain objects. JavaScript is dynamically typed: a variable can be assigned values of different types, so validate data at application boundaries.

## 2.3 Strings and template literals
```javascript
const firstName = "Mary";
const lastName = "Wanjiku";
const fullName = `${firstName} ${lastName}`;
console.log(fullName);
```
Template literals use backticks and support embedded expressions and multi-line strings.

## 2.4 Numbers and arithmetic
```javascript
const price = 500;
const quantity = 3;
const total = price * quantity;
console.log(total);
```
Be aware that JavaScript numbers use floating-point representation; decimal arithmetic such as money may require integer minor units or a decimal library.

## 2.5 Comparison and logical operators
Use strict equality `===` and strict inequality `!==` in most application code to avoid unintended type coercion. Logical operators include `&&`, `||` and `!`. Understand truthy and falsy values when using conditions.

## 2.6 Type conversion and validation
```javascript
const input = "45";
const number = Number(input);
if (Number.isFinite(number)) {
  console.log(number + 5);
}
```
Conversion can produce `NaN`; check results before calculations. Avoid assuming that a user-entered string is valid merely because it looks numeric.

**Practical exercise:** Write a program that accepts product price and quantity, validates both values and calculates the total cost. Explain how you handle invalid input.`,
`# Module 3: Conditions, loops, arrays and objects

## 3.1 Conditional statements
```javascript
const marks = 75;
if (marks >= 80) {
  console.log("Excellent");
} else if (marks >= 60) {
  console.log("Good");
} else if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Needs improvement");
}
```
Check boundaries carefully and use the grading scale authorised for the intended context.

## 3.2 Switch statements
```javascript
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the working week");
    break;
  case "Friday":
    console.log("End of the working week");
    break;
  default:
    console.log("Regular working day");
}
```
A missing `break` may cause fall-through. Use it intentionally or choose a different structure.

## 3.3 Loops
A `for` loop is useful when the iteration pattern is known:
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```
A `while` loop continues while a condition is true. Ensure the condition can eventually become false to avoid an infinite loop. `for...of` iterates values in an iterable; `for...in` iterates enumerable property keys and is generally not the preferred way to traverse array values.

## 3.4 Arrays and methods
```javascript
const marks = [70, 80, 90];
const doubled = marks.map(mark => mark * 2);
const highScores = marks.filter(mark => mark >= 80);
const total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(doubled, highScores, total);
```
`map` transforms each item, `filter` selects items and `reduce` combines values. Methods such as `push` mutate an array; understand when mutation is appropriate.

## 3.5 Objects
```javascript
const student = {
  name: "Grace",
  age: 18,
  course: "Biology"
};
console.log(student.name);
```
Objects group related properties. Use bracket notation when a property name is dynamic or contains characters unsuitable for dot notation.

## 3.6 Destructuring and data modelling
```javascript
const { name, course } = student;
console.log(name, course);
```
An array of student objects can model a small dataset. Validate required properties and handle missing values before rendering or calculating.

**Practical exercise:** Create an array of student records, calculate each student's average and filter learners whose average meets a specified threshold.`,
`# Module 4: Functions, DOM and event handling

## 4.1 Functions
```javascript
function calculateArea(length, width) {
  return length * width;
}
console.log(calculateArea(10, 5));
```
Functions can accept parameters and return values. Keep functions focused and give them names that describe their purpose.

## 4.2 Arrow functions
```javascript
const add = (a, b) => a + b;
console.log(add(5, 3));
```
Arrow functions have lexical `this` behaviour and are useful for callbacks. They are not a universal replacement for every function declaration.

## 4.3 Understanding the DOM
The Document Object Model represents an HTML document as nodes and objects. JavaScript can select elements, read or update text, change attributes, create elements and respond to events.

## 4.4 Selecting and updating elements
```javascript
const heading = document.querySelector("h1");
if (heading) {
  heading.textContent = "Welcome to CBE Nexus!";
}
```
Use `textContent` for plain text. Avoid inserting untrusted strings with `innerHTML`, because unsafe HTML insertion can create cross-site scripting vulnerabilities.

## 4.5 Event handling
```html
<button id="welcomeButton" type="button">Click Me</button>
<p id="message" aria-live="polite"></p>
```
```javascript
const button = document.querySelector("#welcomeButton");
const message = document.querySelector("#message");

button?.addEventListener("click", () => {
  message.textContent = "You clicked the button!";
});
```
Events include click, input, change, submit, keydown and focus. Use native controls and preserve keyboard operation.

## 4.6 Form validation
```javascript
const form = document.querySelector("#registrationForm");
form?.addEventListener("submit", event => {
  const email = document.querySelector("#email").value.trim();
  if (!email.includes("@")) {
    event.preventDefault();
    alert("Enter a valid email address.");
  }
});
```
This is only a simple demonstration. Use native constraints such as `type="email"`, show accessible inline errors and validate again on the server. A string containing `@` is not a complete email validation rule.

**Practical exercise:** Build a registration form that validates required fields, displays useful messages and updates a confirmation area without reloading the page.`,
`# Module 5: Modern JavaScript, asynchronous programming and APIs

## 5.1 Modern language features
Modern JavaScript includes template literals, arrow functions, destructuring, spread syntax, classes, modules, promises and async/await. These features improve clarity when used appropriately.

## 5.2 Spread syntax
```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
console.log(combined);
```
Spread syntax can copy iterable values into a new array or copy enumerable properties into an object. Such copies are shallow; nested objects remain shared references.

## 5.3 JSON
JSON is a text format used to exchange structured data:
```javascript
const student = { name: "David", marks: 85 };
const jsonData = JSON.stringify(student);
const objectData = JSON.parse(jsonData);
console.log(objectData.name);
```
Invalid JSON causes parsing to fail, so handle errors when processing external responses.

## 5.4 Asynchronous programming
Network requests, timers and other operations may complete later. Asynchronous code allows the application to continue while waiting. A Promise represents an operation that may be pending, fulfilled or rejected.

## 5.5 Async and await with fetch
```javascript
async function loadData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Unable to load data:", error);
  }
}
loadData();
```
A fetch promise normally rejects for network failures, not merely for HTTP error status; check `response.ok`. Also consider cancellation, loading states, timeouts where appropriate and user-friendly error messages.

## 5.6 API design and security
APIs allow applications to exchange information. They may use GET, POST, PUT, PATCH and DELETE methods. Never expose private credentials in browser-side JavaScript. Route secret-bearing requests through a protected server, validate input, enforce authorisation and limit data returned.

**Practical exercise:** Fetch a public sample record, display its title on a page, show a loading message, handle HTTP/network errors and provide a retry control.`,
`# Module 6: Application development, testing and capstone

## 6.1 Application architecture
A web application commonly includes a user interface, front-end logic, server-side API, database, authentication and file storage. Separate responsibilities so that interface code does not become responsible for protecting secrets or enforcing critical permissions.

## 6.2 Browser storage
`localStorage` persists key-value strings across browser sessions; `sessionStorage` is scoped to a tab session; IndexedDB supports larger structured client-side data. Browser storage is accessible to scripts running on the origin and is not a safe place for passwords, private keys or sensitive records.

## 6.3 Debugging workflow
Reproduce the issue, inspect the console and network requests, set breakpoints, examine values, isolate the failing function, fix the cause and add a regression test. Do not silence errors without understanding them.

## 6.4 Testing
Test normal and invalid input, empty forms, slow or failed network requests, unexpected response shapes, repeated clicks, keyboard operation and small-screen layouts. Unit tests check individual functions; integration tests check cooperating components; end-to-end tests exercise user workflows.

## 6.5 Maintainability and security
Use modules to separate code, validate external data, render untrusted text safely, keep dependencies updated and avoid exposing credentials. Use server-side authorisation for protected operations. Provide meaningful error states without leaking internal details.

## Capstone: Interactive online course dashboard
Build an application that displays courses, descriptions and categories; searches by course name; filters categories; opens course details; tracks selected courses; validates registration details; and adapts to mobile screens. Include empty-state and error-state designs, keyboard accessibility and a brief testing report.

## Assessment — 20 marks
| Question | Marks |
|---|---:|
| Explain JavaScript variables and data types | 3 |
| Differentiate arrays and objects | 3 |
| Write a function | 3 |
| Explain DOM manipulation | 3 |
| Explain Promises and async/await | 4 |
| Develop an interactive webpage | 4 |
| **Total** | **20** |`
  ],
  "cybersecurity-fundamentals":[
`# Module 1: Introduction to cybersecurity

## 1.1 Meaning and scope
Cybersecurity is the practice of protecting computers, networks, applications and information against unauthorised access, damage, disclosure or disruption. It applies to individuals, schools, businesses, hospitals, public institutions and critical services.

## 1.2 Why protection matters
A compromised account can expose personal information; a ransomware incident can interrupt school operations; a manipulated payment instruction can cause financial loss. Security therefore protects privacy, trust, continuity, safety and organisational assets.

## 1.3 The CIA triad
- **Confidentiality:** information is available only to authorised people and systems.
- **Integrity:** information remains accurate, complete and protected from unauthorised change.
- **Availability:** systems and information are accessible when needed.

A school may protect confidentiality by limiting learner-record access, integrity by recording authorised changes and availability through tested backups and resilient services.

## 1.4 Threats, vulnerabilities and risk
A threat is a potential cause of harm; a vulnerability is a weakness; risk considers the likelihood and impact of a threat exploiting a weakness. Examples include phishing, malware, ransomware, credential theft, insider misuse, data breaches and denial-of-service attacks.

## 1.5 Identify and value assets
Assets include learner records, staff accounts, financial systems, devices, networks, websites, intellectual property and operational processes. Record who owns each asset, where it is stored, who needs access and what would happen if it were exposed, changed or unavailable.

## 1.6 Foundational controls
Keep software updated, use unique passwords and multifactor authentication, back up important information, restrict permissions, secure devices, train users and establish a reporting route for suspicious activity.

**Practical exercise:** List ten digital assets in a school or small business. For each, identify one threat, one vulnerability and a control that reduces risk.`,
`# Module 2: Malware, phishing and social engineering

## 2.1 Malware
Malware is software designed to damage, disrupt, spy on or gain unauthorised access to systems.
| Type | Description |
|---|---|
| Virus | Attaches to files or programs and spreads when executed |
| Worm | Can spread between systems without relying on a host file |
| Trojan | Disguises itself as legitimate software |
| Ransomware | Blocks access to or encrypts data for extortion |
| Spyware | Secretly collects information |
| Rootkit | Conceals malicious activity or privileged access |

One device can be affected by more than one type. Use reputable security controls and obtain software from trusted sources.

## 2.2 Phishing
Phishing is a deceptive attempt to obtain information or persuade a person to perform an unsafe action. Messages may impersonate banks, employers, delivery services, schools or colleagues. They may request passwords, one-time codes, money transfers or attachment downloads.

## 2.3 Warning signs
Check sender address and domain carefully; be suspicious of unexpected urgency, threats, unusual payment changes, attachments, shortened links and requests for credentials. Grammar and logos alone are not reliable indicators: sophisticated scams can look professional.

## 2.4 Social engineering
Social engineering manipulates people rather than exploiting only technical weaknesses. Techniques include impersonation, pretexting, baiting, tailgating and fake technical support. Attackers may use information from public profiles to make a request seem credible.

## 2.5 Safe verification and reporting
Do not use contact details in a suspicious message to verify it. Contact the organisation through a known official number or website. Report the message using the organisation's process. If credentials were entered, use the official service to change them, revoke active sessions where possible and notify the security contact.

## 2.6 Awareness exercise
Create fictional training messages that contain clear warning signs; do not send real phishing messages or collect passwords. Teach learners to hover or inspect links safely, verify unusual requests through a second channel and report without embarrassment.

**Practical exercise:** Review five fictional emails and annotate sender, request, link destination, urgency, attachment and verification method. Explain your decision for each.`,
`# Module 3: Passwords, authentication and device security

## 3.1 Password hygiene
Use long, unique passwords or passphrases for each service. A reputable password manager can generate and store them. Do not reuse passwords, share credentials or disclose one-time authentication codes. Change a password promptly if compromise is suspected; routine changes without a reason are not a substitute for strong authentication.

## 3.2 Multifactor authentication
MFA combines evidence from different categories:
- Something you know: password or PIN.
- Something you have: security key or authenticator device.
- Something you are: biometric characteristic.

Where possible, prefer phishing-resistant methods such as hardware security keys or passkeys. Protect recovery methods because attackers may target account recovery.

## 3.3 Authentication and authorisation
Authentication verifies identity; authorisation determines permitted actions. A teacher may sign in successfully but only access assigned class records. Enforce permissions on the server, not merely by hiding interface controls.

## 3.4 Access control principles
Apply least privilege, role-based access where appropriate, separation of duties and periodic permission reviews. Remove access promptly when a person changes role or leaves. Avoid shared accounts because they weaken accountability.

## 3.5 Device protection
Use screen locks, supported operating-system updates, full-disk encryption, endpoint protection, secure configuration and physical safeguards. Enable automatic locking and do not leave devices unattended in public areas.

## 3.6 Backup and recovery
The 3-2-1 guideline recommends three copies of important data, on two different storage types, with one copy off-site. Keep backups protected from ordinary account compromise, define recovery priorities and test restoration. An untested backup may not be usable when needed.

**Practical exercise:** Write a one-page password, MFA, device and backup policy for a small school. Include account creation, role changes, lost devices and backup restoration tests.`,
`# Module 4: Network security and secure communication

## 4.1 Networks
A network connects devices to exchange information and share services. LAN commonly describes a local area network; WAN spans larger areas; WLAN is a wireless LAN; PAN connects personal devices over a short range.

## 4.2 Network components
A router forwards traffic between networks; a switch connects devices within a LAN; an access point provides wireless connectivity; a firewall enforces traffic rules; a modem connects to an internet service. A server provides services or resources to clients.

## 4.3 IP addressing
An IP address identifies a network interface for communication. IPv4 uses 32-bit addresses, commonly written as four decimal octets, for example `192.168.1.10`. IPv6 uses 128-bit addresses. The example is from a private IPv4 range and is not a public website address.

## 4.4 DNS and web communication
DNS helps translate domain names into records used to locate services. HTTPS protects browser-to-server communication using TLS. TLS helps provide confidentiality and integrity in transit and authenticates the server through certificate validation. HTTPS does not guarantee that the website itself is honest or free of harmful content.

## 4.5 Firewalls and segmentation
Firewalls allow or block traffic according to rules. Network segmentation separates systems so that compromise in one area does not automatically expose every other area. Restrict management interfaces and permit only necessary services.

## 4.6 Secure Wi-Fi
Use WPA2-AES or WPA3 where supported, change default administrator credentials, update router firmware, disable unnecessary remote administration, use a separate guest network and review connected devices. Avoid transmitting sensitive information over untrusted networks unless using appropriately secured services.

**Practical exercise:** Draw a small-school network showing internet connection, router/firewall, switch, staff network, learner/guest Wi-Fi, server and backup. Explain which systems should be separated and why.`,
`# Module 5: Vulnerability management, monitoring and incident response

## 5.1 Vulnerabilities
A vulnerability is a weakness that may be exploited. Examples include unsupported software, weak authentication, exposed administration panels, excessive permissions, insecure application code and misconfigured cloud storage.

## 5.2 Vulnerability management lifecycle
1. Maintain an inventory of systems and owners.
2. Identify weaknesses using authorised methods.
3. Assess severity, exposure and business impact.
4. Prioritise remediation.
5. Apply patches or compensating controls.
6. Verify the correction.
7. Monitor for recurrence.

Only assess systems for which you have explicit permission. Keep records of scope and approval.

## 5.3 Prioritising risk
Consider technical severity, exploitability, whether the asset is internet-facing, the sensitivity of data, operational importance and available mitigations. A high-severity issue on a critical exposed system may require urgent action; a lower-severity issue on an isolated test device may be scheduled differently.

## 5.4 Security monitoring
Monitor repeated failed logins, unexpected privilege changes, unfamiliar devices, unusual data transfers, suspicious mailbox rules and unexpected account recovery events. Centralised logs help correlate events, but protect log data and restrict who can access it.

## 5.5 Incident response lifecycle
Preparation; detection and analysis; containment; eradication; recovery; and lessons learned. Maintain contact lists, decision authority, evidence-handling procedures, communication plans and tested backups before an incident occurs.

## 5.6 Scenario: compromised school email
Notify the designated security contact; secure the account through trusted recovery procedures; revoke suspicious sessions; reset exposed credentials; review sign-in and mailbox activity; determine whether information was accessed or sent; preserve relevant evidence; communicate and notify affected parties where required; document lessons. Avoid deleting evidence before the response team has assessed it.

**Practical exercise:** Create an incident runbook for a compromised staff account, assigning responsibilities, immediate actions, evidence to preserve, communication steps and recovery checks.`,
`# Module 6: Governance, ethics and capstone

## 6.1 Security governance
Governance defines accountability, policies, risk ownership, reporting, compliance and oversight. Senior leadership should approve priorities and resources; system owners implement controls; users follow procedures and report concerns.

## 6.2 Frameworks and standards
The NIST Cybersecurity Framework provides an outcome-oriented approach to governing, identifying, protecting, detecting, responding and recovering. ISO/IEC 27001 specifies requirements for an information security management system. CIS Critical Security Controls provide prioritised safeguards. OWASP publishes guidance for application security. Select a framework appropriate to organisational size, sector and obligations.

## 6.3 Data protection and privacy
Collect only necessary personal information, explain purposes, restrict access, secure storage and transfers, define retention periods and dispose of information safely. For organisations operating in Kenya, consider the Data Protection Act, 2019 and current guidance from the Office of the Data Protection Commissioner. International operations must assess the laws that apply to their users and activities. Obtain qualified advice for compliance decisions.

## 6.4 Ethics and authorised practice
Security testing requires explicit permission and a defined scope. Never access accounts, scan networks, test vulnerabilities or copy information without authorisation. Use personal labs, intentionally vulnerable training environments and approved exercises. Respect privacy and minimise collection of evidence.

## 6.5 Security culture
Provide regular, role-appropriate training; make reporting easy; avoid blaming people who report mistakes promptly; review incidents and near misses; and update controls as systems and threats change.

## Capstone: Cybersecurity protection plan
For a fictional school or small business, submit an asset inventory, threat assessment, risk register, password/MFA policy, backup plan, network diagram, incident response procedure, staff awareness plan, data-protection considerations and review schedule. Prioritise recommendations and identify owners.

## Assessment — 20 marks
| Question | Marks |
|---|---:|
| Explain the CIA security triad | 3 |
| Differentiate four types of malware | 3 |
| Explain phishing and social engineering | 3 |
| Describe authentication and authorisation | 3 |
| Explain the 3-2-1 backup approach | 3 |
| Develop an incident response plan | 5 |
| **Total** | **20** |`
  ],
  "entrepreneurship-small-business":[
`# Module 1: Introduction to entrepreneurship

## 1.1 Meaning
Entrepreneurship is the process of identifying an opportunity, organising resources and creating value through a business or other enterprise. Entrepreneurs may launch products, provide services, improve existing operations, introduce new business models or address social and environmental challenges.

## 1.2 Types of entrepreneurship
Small-business entrepreneurship serves a defined market and may provide local employment. Social entrepreneurship uses enterprise methods to address social or environmental needs. Technology entrepreneurship builds around technological products or services. Scalable entrepreneurship seeks a model capable of substantial growth. Corporate entrepreneurship develops new opportunities within an established organisation.

## 1.3 Entrepreneurial capabilities
Useful capabilities include creativity, initiative, resilience, adaptability, leadership, financial discipline, customer awareness and evidence-based decision-making. These are developed through practice, feedback and learning rather than being fixed personality traits.

## 1.4 Finding opportunities
Opportunities may emerge from unmet customer needs, inefficient services, new technologies, market gaps, changes in behaviour, local resources or regulatory developments. An idea is not automatically an opportunity: customers must value the proposed solution and the enterprise must be able to deliver it sustainably.

## 1.5 Define the problem
Example: small schools struggle to organise digital learning resources. A possible service could help schools organise and deliver curriculum-aligned materials. Before building it, investigate who experiences the problem, how they currently solve it, how often it occurs and whether they would pay for a better solution.

## 1.6 Value creation
Value is created when a product or service solves a problem or satisfies a need in a way customers consider worthwhile. A clear value proposition states the customer, problem, benefit and reason the solution is useful.

**Practical exercise:** Identify five problems in your community. For each, describe the affected customer, existing alternatives, proposed solution and evidence you would collect before investing.`,
`# Module 2: Market research and business idea validation

## 2.1 Market research
Market research collects and analyses information about customers, competitors and market conditions. It helps estimate demand, understand buying behaviour, assess pricing, identify alternatives and reduce unsupported assumptions.

## 2.2 Target customers and segmentation
Segment customers using relevant characteristics such as location, organisation type, needs, budget, occupation, behaviour or purchasing context. Avoid relying on demographic labels that do not explain the problem or buying decision.

## 2.3 Customer personas
A persona is a research-informed description of a typical customer, not an invented fact. Example: a small private-school administrator may need organised digital learning resources, have limited administrative time and value simple access and reliable support. Validate these assumptions through interviews and observation.

## 2.4 Competitor analysis
Compare direct and indirect alternatives, products, pricing, quality, customer service, distribution, positioning and customer feedback. A competitor may be a manual process or an existing free service, not only another company. Identify where customers are dissatisfied and where your solution can be meaningfully different.

## 2.5 SWOT analysis
| Strengths | Weaknesses |
|---|---|
| Flexible delivery | New brand |
| Lower physical overhead | Limited initial tutors |
| Opportunities | Threats |
| Growing interest in online learning | Established competitors |
| Partnerships with schools | Connectivity and trust barriers |

Strengths and weaknesses are internal; opportunities and threats are external. Make each point specific and evidence-based.

## 2.6 Validate assumptions and test an MVP
Validation methods include customer interviews, surveys, landing-page experiments, prototype demonstrations and pilot programmes. An MVP is the smallest useful version that tests important assumptions with real users. Define what evidence would support, change or reject the idea before running the test.

**Practical exercise:** Interview five potential customers. Ask about their current behaviour and problems rather than leading them toward your preferred solution. Summarise recurring themes, contradictions and what you will test next.`,
`# Module 3: Business models and business planning

## 3.1 Business model
A business model explains how an enterprise creates, delivers and captures value. It connects the customer problem, solution, delivery method, resources, activities, partners, revenue and costs.

## 3.2 Business Model Canvas
The nine elements are:
1. Customer segments.
2. Value propositions.
3. Channels.
4. Customer relationships.
5. Revenue streams.
6. Key resources.
7. Key activities.
8. Key partnerships.
9. Cost structure.

## 3.3 Example: online learning business
| Element | Example |
|---|---|
| Customers | Learners, schools and teachers |
| Value | Accessible digital learning resources |
| Channels | Website, email and partnerships |
| Relationships | Online support and learner community |
| Revenue | Subscriptions and resource sales |
| Resources | Content, platform and teaching expertise |
| Activities | Content production and platform management |
| Partners | Schools and educators |
| Costs | Hosting, content development and marketing |

This is a starting hypothesis, not proof of demand. Test willingness to pay, delivery costs and customer acquisition assumptions.

## 3.4 Business plan structure
A business plan commonly contains an executive summary, business overview, customer problem, market evidence, products/services, marketing strategy, operations, management, financial projections, risks and growth strategy. The plan should be updated when evidence changes.

## 3.5 SMART objectives
Objectives should be specific, measurable, achievable, relevant and time-bound. “Increase sales” is vague. A stronger objective is “Increase monthly sales by 15% within six months while maintaining the target gross margin,” provided the baseline and target are realistic.

## 3.6 Revenue models and pricing
Revenue models include direct sales, subscriptions, licensing, commission, advertising, consulting, freemium and membership. Pricing may reflect cost, competitor alternatives, customer value, demand and positioning. Calculate the contribution from each sale before choosing a price.

**Practical exercise:** Complete a Business Model Canvas for one proposed enterprise. Identify the three riskiest assumptions and design a low-cost test for each.`,
`# Module 4: Business finance and operations

## 4.1 Startup costs
Startup costs are expenses incurred before trading begins, such as registration, equipment, initial stock, website development, branding, licences and launch marketing. Separate one-off costs from recurring expenses and retain evidence for each estimate.

## 4.2 Fixed and variable costs
Fixed costs generally remain stable within a relevant operating range, such as rent or some subscriptions. Variable costs change with output or sales, such as materials, packaging, delivery and transaction fees. Some costs are mixed and contain both components.

## 4.3 Revenue, gross profit and net profit
Revenue is income from sales. Gross profit is revenue less cost of goods sold. Net profit is what remains after applicable operating expenses, finance costs, taxes and other relevant expenses are accounted for.
` + "\n" + `\[ Profit = Revenue - Total\ Expenses \]

**Worked example:** A business sells 100 products at KSh 500 each. Revenue is 100 × 500 = KSh 50,000. If product cost is KSh 20,000, rent KSh 8,000, marketing KSh 3,000 and other expenses KSh 4,000, total listed expenses are KSh 35,000 and the resulting profit before applicable taxes and unlisted adjustments is KSh 15,000.

## 4.4 Break-even analysis
Break-even is the output level where total revenue equals total costs.
` + "\n" + `\[ Break\text{-}even\ quantity = \frac{Fixed\ Costs}{Selling\ Price - Variable\ Cost\ per\ Unit} \]
`
For fixed costs of KSh 30,000, selling price KSh 500 and variable cost KSh 200:
` + "\n" + `\[ Q = \frac{30,000}{500-200} = 100\ units \]
`
The contribution per unit is KSh 300. The business must sell 100 units to break even under these assumptions. This calculation assumes constant selling price and variable cost over the relevant range.

## 4.5 Cash flow
Cash flow tracks money entering and leaving the business. A profitable enterprise can still run out of cash if customers pay late or expenses fall due before receipts arrive. Prepare a monthly forecast of opening cash, expected receipts, payments and closing cash.

## 4.6 Records and operations
Maintain sales, expense, invoice, receipt, inventory, bank and tax records. Operations include purchasing, production, stock control, delivery, customer support, quality assurance and staff coordination. Define who is responsible and how performance is checked.

**Practical exercise:** Prepare a one-month cash-flow forecast for a small enterprise. State assumptions, show opening balance, receipts, payments and closing balance, then identify the week with the lowest cash position.`,
`# Module 5: Marketing, digital growth and business management

## 5.1 Marketing strategy
Marketing identifies, communicates and delivers value to customers. Define target market, positioning, objectives, channels, budget and measures before selecting tactics. A marketing plan should connect each activity to a customer need and a measurable outcome.

## 5.2 Marketing mix
The traditional 4Ps are Product, Price, Place and Promotion. Service marketing often extends this to 7Ps by adding People, Process and Physical Evidence. Apply each element to the customer experience, not just advertising.

## 5.3 Digital marketing channels
Channels include search engines, social media, email, content marketing, online advertising, affiliate partnerships and video platforms. Select channels based on audience behaviour, budget, capability and the cost of acquiring a customer.

## 5.4 Search engine optimisation
SEO improves the ability of a website to attract relevant organic search traffic. Activities include keyword and search-intent research, original useful content, technical accessibility, internal linking, performance and credible references. SEO takes time and does not guarantee rankings. Avoid keyword stuffing or pages created solely to manipulate search results.

## 5.5 Customer relationship management
CRM systems organise customer interactions such as enquiries, purchases, complaints, follow-ups and sales opportunities. Collect only necessary information, restrict access and comply with applicable privacy requirements. A spreadsheet may be sufficient for a very small operation if access and backups are controlled.

## 5.6 Retention and growth
Retention improves through dependable service, consistent quality, responsive support, useful communication and feedback. Growth may involve new products, new markets, partnerships, online sales, licensing or operational efficiency. Monitor whether growth improves sustainable contribution and customer outcomes.

## 5.7 AI in entrepreneurship
AI can assist with idea generation, research questions, draft plans, customer-service drafts, scenario modelling and content. Verify market facts, calculations, legal requirements and competitor claims independently. Do not upload confidential customer information to tools without appropriate authority and safeguards.

**Practical exercise:** Develop a 30-day marketing plan for a small business. Include audience, value proposition, three channels, weekly activities, budget and measurable indicators.`,
`# Module 6: Risk management, sustainability and capstone

## 6.1 Business risks
Common risks include financial, operational, market, legal, cybersecurity, reputational and supply-chain risks. Identify what could happen, why it might happen and the consequences for customers and the enterprise.

## 6.2 Risk management process
Identify risks; assess likelihood and impact; prioritise; select controls; assign an owner; set a review date; and monitor whether controls work. A risk register should record risk description, cause, consequence, rating, mitigation, owner and status.

## 6.3 Legal and regulatory considerations
Depending on jurisdiction and activity, a business may need to consider registration, tax, licences, employment obligations, consumer protection, data protection, intellectual property and sector-specific rules. Requirements change and vary by location. Consult current official sources and qualified professionals for legal or tax decisions.

## 6.4 Sustainable entrepreneurship
Sustainable enterprises consider financial viability, social impact, environmental responsibility, ethical supply chains, resource efficiency and long-term customer value. Measure material impacts rather than relying only on promotional claims.

## 6.5 Performance indicators
Useful measures include revenue growth, gross margin, net margin, customer acquisition cost, retention, conversion rate, average transaction value, inventory turnover and cash position. Define each metric consistently and interpret it alongside customer and operational context.

## Capstone: Complete business plan
Choose a real or fictional business and submit: concept and problem statement; target customer; market research; competitor analysis; SWOT; Business Model Canvas; marketing and pricing strategy; startup budget; 12-month forecast; break-even calculation; operations plan; risk register; and growth strategy. Label assumptions and explain how they will be validated.

## Assessment — 20 marks
| Question | Marks |
|---|---:|
| Explain entrepreneurship and value creation | 3 |
| Describe market research and idea validation | 3 |
| Explain the Business Model Canvas | 3 |
| Calculate break-even quantity | 4 |
| Differentiate revenue, gross profit and net profit | 3 |
| Develop a practical business plan | 4 |
| **Total** | **20** |`
  ]
  };
  E.makeLongNotes=function(slug,course,module,level){
    const courseNotes=notes[slug];
    const index=course&&Array.isArray(course.modules)?course.modules.indexOf(module):-1;
    if(courseNotes&&index>=0&&courseNotes[index]) return courseNotes[index];
    return previous(slug,course,module,level);
  };
})();
/* CBE Nexus Learning Studio — Ghana SHS Year 1 Mathematics.
   Original supplementary country-aligned chapter: Number systems, sets, indices and scientific notation.
   Not an official NaCCA textbook; teachers should confirm sequence with the current school scheme. */
(()=> {
 "use strict";
 const level=window.CBE_COUNTRY_NOTES?.Ghana?.levels?.["SHS Year 1"];
 if(!level) return;
 const list=level.Mathematics||(level.Mathematics=[]);
 if(list.some(x=>x.id==="gh-shs1-maths-number-sets-indices-studio")) return;
 const esc=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
 const diagram=(title,items,caption)=>{
  const x=[24,196,368], colours=["#dceeff","#fff0c2","#dcf7e5"], strokes=["#3478a8","#bd8700","#348653"];
  const boxes=items.map((v,i)=>'<rect x="'+x[i]+'" y="35" width="128" height="64" rx="12" fill="'+colours[i]+'" stroke="'+strokes[i]+'" stroke-width="2"/><text x="'+(x[i]+64)+'" y="73" text-anchor="middle" font-size="14" font-weight="700" fill="#17324d">'+esc(v)+'</text>');
  return '<svg viewBox="0 0 520 145" role="img" aria-label="'+esc(title)+'" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="510" height="135" rx="14" fill="#f7fbff" stroke="#b8cce0"/>'+boxes.join("")+'<path d="M152 67 H194 M324 67 H366" stroke="#2563eb" stroke-width="3"/><path d="M185 60 L195 67 L185 74 M357 60 L367 67 L357 74" fill="none" stroke="#2563eb" stroke-width="3"/><text x="260" y="123" text-anchor="middle" font-size="12" fill="#40566d">'+esc(caption)+'</text></svg>';
 };
 const diagrams=[
  ["Number classification",["Natural","Integers","Rational"],"Number sets are nested within the real number system"],
  ["Real number line",["−3","0","+4"],"Numbers increase from left to right"],
  ["Set notation",["A = {1,2}","B = {2,3}","A ∩ B = {2}"],"Intersection contains elements common to both sets"],
  ["Union of sets",["A only","Common","B only"],"Union includes every element in either set"],
  ["Venn diagram logic",["A region","A ∩ B","B region"],"Overlapping circles represent shared membership"],
  ["Index laws",["aᵐ × aⁿ","aᵐ ÷ aⁿ","(aᵐ)ⁿ"],"Add, subtract or multiply exponents as appropriate"],
  ["Scientific notation",["Coefficient","× 10ⁿ","Power"],"Coefficient has magnitude at least 1 and less than 10"],
  ["Fraction operations",["Find LCM","Common base","Simplify"],"Use equivalent fractions before adding or subtracting"],
  ["Percentage change",["Original","Change","New value"],"Percentage change compares change with original value"],
  ["Problem-solving cycle",["Understand","Calculate","Check"],"Translate words into operations and verify the result"]
 ];
 const questions=[
  ["Classify −7, 0, 3/5 and √2 as rational or irrational where applicable.","−7 and 0 are rational integers; 3/5 is rational; √2 is irrational.",4,["−7 rational (1); 0 rational (1); 3/5 rational (1); √2 irrational (1)."]],
  ["Express 0.375 as a fraction in its simplest form.","0.375 = 375/1000 = 3/8.",2,["Correct fraction conversion (1); simplest form (1)."]],
  ["Evaluate 2³ × 2⁴.","2³ × 2⁴ = 2⁷ = 128.",2,["Add indices (1); evaluate (1)."]],
  ["Simplify 5⁶ ÷ 5².","5⁶ ÷ 5² = 5⁴ = 625.",2,["Subtract indices (1); evaluate (1)."]],
  ["Evaluate (3²)³.","(3²)³ = 3⁶ = 729.",2,["Multiply indices (1); evaluate (1)."]],
  ["Write 0.000072 in scientific notation.","7.2 × 10⁻⁵.",2,["Coefficient 7.2 (1); power −5 (1)."]],
  ["Write 6.35 × 10⁴ as an ordinary number.","63,500.",1,["Correct placement of decimal point (1)."]],
  ["Find 15% of GH₵ 240.","0.15 × 240 = GH₵36.",2,["Convert percentage to decimal (1); answer (1)."]],
  ["A school bag costs GH₵180 and is discounted by 20%. Find the sale price.","Discount = 0.20 × 180 = GH₵36. Sale price = 180 − 36 = GH₵144.",3,["Discount (1); subtraction (1); sale price (1)."]],
  ["Let A = {1,2,3,4} and B = {3,4,5}. Find A ∪ B.","A ∪ B = {1,2,3,4,5}.",2,["All distinct elements included (2)."]],
  ["For the sets in Question 10, find A ∩ B.","A ∩ B = {3,4}.",2,["Common elements only (2)."]],
  ["In a class of 40 learners, 22 study Mathematics, 18 study Science and 10 study both. How many study at least one of the two subjects?","n(M ∪ S) = 22 + 18 − 10 = 30 learners.",3,["Union formula (1); substitution (1); 30 (1)."]],
  ["Simplify 3/4 + 2/3.","3/4 + 2/3 = 9/12 + 8/12 = 17/12 = 1 5/12.",3,["Common denominator (1); equivalent fractions (1); simplified answer (1)."]],
  ["Solve 4x − 7 = 21.","4x = 28, so x = 7.",2,["Add 7 to both sides (1); divide by 4 (1)."]],
  ["A water tank contains 250 litres. It is 68% full. Calculate the volume of water in the tank.","0.68 × 250 = 170 litres.",2,["Percentage as decimal (1); 170 L (1)."]]
 ];
 const chapter={
  id:"gh-shs1-maths-number-sets-indices-studio",
  title:"Number systems, sets, indices and scientific notation",
  lessons:"Learning Studio chapter • clear explanations, visual summaries, worked mathematics and examination practice",
  curriculumContext:"Ghana NaCCA Senior High School Mathematics, Year 1 foundational number and set concepts. This original CBE Nexus supplementary resource is not an official NaCCA textbook. Teachers should confirm the exact topic sequence and scope against the current curriculum and school scheme.",
  curriculumStatus:"supplementary-country-aligned",
  objectives:[
   "Classify natural numbers, whole numbers, integers, rational numbers and irrational numbers.",
   "Represent and compare real numbers using a number line.",
   "Use set notation to describe elements, subsets, unions and intersections.",
   "Solve simple problems involving two sets and Venn diagrams.",
   "Apply the laws of indices to simplify numerical expressions.",
   "Convert numbers to and from scientific notation.",
   "Perform calculations involving fractions, decimals and percentages in context.",
   "Show clear mathematical working and check the reasonableness of answers."
  ],
  sections:[
   {heading:"1. Number systems and the real number line",paragraphs:[
    "Numbers are used to count, measure, compare and describe patterns. The natural numbers are commonly used for counting: 1, 2, 3, 4, and so on. Some conventions include zero in the natural numbers, so always follow the definition given in a question. Whole numbers include zero and the positive counting numbers.",
    "Integers include negative whole numbers, zero and positive whole numbers. Examples are −5, −2, 0, 3 and 12. Integers are useful for describing quantities such as temperatures below zero, money owed and positions below a reference level.",
    "A rational number can be written as a fraction p/q, where p and q are integers and q is not zero. Fractions, terminating decimals and recurring decimals are rational. For example, 0.4 = 2/5 and 0.333... = 1/3.",
    "An irrational number cannot be expressed as a ratio of two integers. Its decimal expansion is non-terminating and non-recurring. Examples include √2 and π. Rational and irrational numbers together form the real number system.",
    "A number line represents real numbers in order. Values increase from left to right. Negative values lie to the left of zero and positive values to the right. The distance of a number from zero is its absolute value; for example, |−6| = 6."
   ],keyTerms:["natural number","whole number","integer","rational number","irrational number","real number","absolute value"]},
   {heading:"2. Fractions, decimals and equivalent forms",paragraphs:[
    "A fraction represents part of a whole or a ratio. The numerator counts the selected parts and the denominator shows the number of equal parts in the whole. The denominator cannot be zero. Equivalent fractions have the same value even when their numerators and denominators differ.",
    "To simplify a fraction, divide the numerator and denominator by their highest common factor. For example, 18/24 simplifies by dividing both terms by 6, giving 3/4. A fraction is in its simplest form when the numerator and denominator have no common factor other than 1.",
    "To add or subtract fractions, first express them with a common denominator. For 2/3 + 1/4, use the lowest common denominator 12: 8/12 + 3/12 = 11/12. Do not add denominators directly.",
    "To multiply fractions, multiply the numerators and multiply the denominators, then simplify. To divide by a fraction, multiply by its reciprocal. For example, 3/5 ÷ 2/7 = 3/5 × 7/2 = 21/10.",
    "A terminating decimal has a finite number of digits after the decimal point. A recurring decimal has a digit or group of digits that repeats indefinitely. To convert a terminating decimal to a fraction, write it over 10, 100, 1000 or the appropriate power of ten and simplify."
   ],keyTerms:["numerator","denominator","equivalent fractions","lowest common denominator","reciprocal","terminating decimal","recurring decimal"]},
   {heading:"3. Sets and set notation",paragraphs:[
    "A set is a well-defined collection of distinct objects called elements or members. Sets are usually named with capital letters and written inside braces. For example, A = {2, 4, 6, 8}. The statement 4 ∈ A means that 4 is an element of A; 5 ∉ A means that 5 is not an element of A.",
    "A set may be described by listing its elements or by stating a rule that identifies its members. For example, {2, 4, 6, 8} is the set of even natural numbers less than 10. Repeated elements are written only once because a set contains distinct members.",
    "The empty set, written ∅ or {}, has no elements. A universal set contains all the elements being considered in a particular problem. The complement of A contains the elements in the universal set that are not in A.",
    "A is a subset of B if every element of A is also an element of B, written A ⊆ B. Two sets are equal if they contain exactly the same elements, regardless of the order in which those elements are listed.",
    "The cardinal number n(A) is the number of distinct elements in a finite set A. If A = {a, b, c, d}, then n(A) = 4. Counting distinct elements carefully prevents double counting in set problems."
   ],keyTerms:["set","element","universal set","empty set","subset","complement","cardinality"]},
   {heading:"4. Union, intersection and Venn diagrams",paragraphs:[
    "The union of sets A and B, written A ∪ B, contains every element that belongs to A, to B or to both. List each element only once. The intersection A ∩ B contains only the elements common to both sets.",
    "If A = {1, 2, 3, 4} and B = {3, 4, 5}, then A ∪ B = {1, 2, 3, 4, 5} and A ∩ B = {3, 4}. The elements 3 and 4 are shared, so they appear in the intersection.",
    "A Venn diagram uses closed curves, often circles, inside a rectangle representing the universal set. The overlapping region represents the intersection. The non-overlapping parts represent elements belonging to only one of the sets, while the area outside both circles represents elements in neither set.",
    "For two finite sets, n(A ∪ B) = n(A) + n(B) − n(A ∩ B). The intersection is subtracted because common elements are counted once in n(A) and again in n(B). This formula is especially useful in survey questions.",
    "When solving a Venn diagram problem, begin with the information that belongs in the intersection, then fill the 'only A' and 'only B' regions. Add the regions to check the total. If the question includes learners who study neither subject, place that number outside the circles but inside the universal-set rectangle."
   ],keyTerms:["union","intersection","complement","Venn diagram","disjoint sets","overlap"]},
   {heading:"5. Laws of indices",paragraphs:[
    "An index or exponent tells how many times a base is used as a factor. For example, 2⁴ = 2 × 2 × 2 × 2 = 16. The base is 2 and the index is 4. Indices provide a concise way to write repeated multiplication.",
    "For the same non-zero base, multiplication follows aᵐ × aⁿ = aᵐ⁺ⁿ. For example, 3² × 3⁴ = 3⁶. The base remains unchanged and the indices are added.",
    "For division with the same non-zero base, aᵐ ÷ aⁿ = aᵐ⁻ⁿ. For example, 5⁶ ÷ 5² = 5⁴. This rule follows because common factors cancel. The base must not be zero.",
    "A power raised to another power follows (aᵐ)ⁿ = aᵐⁿ. For example, (2³)² = 2⁶. When a product is raised to a power, each factor is raised to that power: (ab)ⁿ = aⁿbⁿ.",
    "Any non-zero number raised to the power zero is 1: a⁰ = 1 for a ≠ 0. A negative index means the reciprocal: a⁻ⁿ = 1/aⁿ. For example, 2⁻³ = 1/8. Do not confuse a negative index with a negative value of the base.",
    "Fractional indices connect powers and roots. For a positive number a, a¹/² = √a and a¹/³ = ∛a. More generally, aᵐ/ⁿ represents the nth root of a raised to the mth power, subject to the domain of the expression."
   ],keyTerms:["base","index","exponent","zero index","negative index","fractional index","reciprocal"]},
   {heading:"6. Standard form and scientific notation",paragraphs:[
    "Scientific notation is a convenient way to write very large or very small numbers. A number is written as a × 10ⁿ, where 1 ≤ |a| < 10 and n is an integer. The coefficient a contains the significant digits and the power of ten records the scale.",
    "To write 72,000 in scientific notation, move the decimal point four places to the left to obtain 7.2. Therefore 72,000 = 7.2 × 10⁴. A large positive power is used for numbers greater than or equal to 10.",
    "To write 0.00056 in scientific notation, move the decimal point four places to the right to obtain 5.6. Therefore 0.00056 = 5.6 × 10⁻⁴. Small positive numbers less than 1 have negative powers of ten.",
    "To convert back to ordinary notation, use the exponent to determine the direction and number of places the decimal point moves. For 3.4 × 10³, move three places to the right to obtain 3400. For 3.4 × 10⁻³, move three places to the left to obtain 0.0034.",
    "Scientific notation is used in science and technology to express distances, particle sizes, populations and measurements with many zeros. It also makes multiplication and division of very large or very small quantities more manageable."
   ],keyTerms:["scientific notation","standard form","coefficient","power of ten","significant figures"]},
   {heading:"7. Percentages, ratios and proportional reasoning",paragraphs:[
    "A percentage is a fraction expressed out of 100. The symbol % means 'per hundred'. To convert a percentage to a decimal, divide by 100; for example, 35% = 0.35. To convert a decimal to a percentage, multiply by 100 and add the percentage sign.",
    "To calculate a percentage of an amount, multiply the amount by the percentage expressed as a decimal. For example, 15% of GH₵240 = 0.15 × 240 = GH₵36. Check whether the question asks for the percentage amount or the final amount after an increase or decrease.",
    "A percentage increase is calculated using the original amount as the reference: percentage increase = (increase ÷ original amount) × 100%. A percentage decrease uses the same structure with the decrease in the numerator. The final price after a discount is original price minus discount.",
    "A ratio compares quantities in the same units. The ratio 12:18 can be simplified by dividing both terms by 6, giving 2:3. If quantities use different units, convert them to the same unit before simplifying or comparing.",
    "Direct proportion describes a relationship in which one quantity is a constant multiple of another. If y is directly proportional to x, y = kx for a constant k. In inverse proportion, y = k/x for non-zero x. Use a table of values or the stated relationship to determine the constant."
   ],keyTerms:["percentage","ratio","rate","direct proportion","inverse proportion","discount","percentage change"]},
   {heading:"8. Translating word problems into mathematics",paragraphs:[
    "A word problem describes a situation using everyday language. Identify what is known, what is unknown and the relationship connecting them. Define a variable for the unknown quantity and write an equation before attempting to solve it.",
    "Words such as 'total', 'altogether' and 'sum' often indicate addition; 'difference' or 'how many more' may indicate subtraction; 'product' indicates multiplication; and 'shared equally' may indicate division. These clues are helpful, but always interpret the complete context rather than relying on a single keyword.",
    "For a simple linear equation, maintain equality by performing the same operation on both sides. For example, 4x − 7 = 21. Add 7 to both sides to obtain 4x = 28, then divide both sides by 4 to obtain x = 7.",
    "Check a solution by substituting it into the original equation. For x = 7, 4(7) − 7 = 28 − 7 = 21, which matches the right-hand side. A check can reveal arithmetic or sign errors before an answer is submitted.",
    "State a final answer in the context of the question. If x represents the number of learners, it should be a whole number; if it represents a length, include an appropriate unit. Reject answers that are mathematically possible but unreasonable in the real situation."
   ],keyTerms:["variable","expression","equation","coefficient","solution","substitution","verification"]},
   {heading:"9. Worked examples and guided practice",paragraphs:[
    "Example 1 — Simplify 3/4 + 2/3. The lowest common denominator is 12. Convert to 9/12 + 8/12 = 17/12 = 1 5/12. The denominator is not added; equivalent fractions are formed first.",
    "Example 2 — A learner scores 42 marks out of 60. Percentage = (42/60) × 100% = 70%. The score is 70 percent.",
    "Example 3 — A class has 22 learners studying Mathematics, 18 studying Science and 10 studying both. Number studying at least one = 22 + 18 − 10 = 30. The overlap is subtracted once to avoid double counting.",
    "Example 4 — Simplify (2³ × 2⁵) ÷ 2⁴. First add indices in the numerator: 2⁸ ÷ 2⁴ = 2⁴ = 16. Apply the laws in a clear order and keep the common base unchanged.",
    "When a problem has several steps, write each transformation on a new line. This makes the reasoning easy to follow and helps a teacher award method marks even if a later arithmetic slip occurs."
   ],workedExamples:[
    {title:"Fraction addition",question:"Evaluate 5/6 + 3/4 and give the answer as a mixed number.",marks:3,method:"Find the lowest common denominator, form equivalent fractions, add and simplify.",steps:["LCM of 6 and 4 is 12","5/6 = 10/12 and 3/4 = 9/12","10/12 + 9/12 = 19/12 = 1 7/12"],answer:"1 7/12",explanation:"A common denominator is required before adding the numerators."},
    {title:"Percentage discount",question:"A school calculator costs GH₵150. It is discounted by 12%. Find the discounted price.",marks:4,method:"Calculate the discount, then subtract it from the original price.",steps:["Discount = 12/100 × 150 = GH₵18","Sale price = 150 − 18"],answer:"GH₵132",explanation:"The discount is not the final price; it must be subtracted from the original amount."},
    {title:"Two-set survey",question:"In a group of 50 learners, 28 study French, 24 study Spanish and 9 study both. How many study neither language?",marks:4,method:"Find the union, then subtract it from the universal-set total.",steps:["n(F ∪ S) = 28 + 24 − 9 = 43","Neither = 50 − 43 = 7"],answer:"7 learners",explanation:"The overlap is counted once in the union; learners outside both circles study neither."}
   ]},
   {heading:"10. Practical applications, misconceptions and revision",paragraphs:[
    "Mathematics supports daily decisions in Ghanaian homes, schools, farms, shops and businesses. Fractions and percentages are used when sharing produce, calculating discounts, comparing examination scores and planning budgets. Ratios are used in recipes, mixing materials and scaling drawings.",
    "Scientific notation is useful when scientists describe microscopic dimensions or astronomical distances. Set theory helps organise survey responses, classify information and avoid double counting. Indices make repeated multiplication and scientific calculations concise.",
    "Misconception: every decimal is irrational. Correction: terminating and recurring decimals are rational; only non-terminating, non-recurring decimals are irrational.",
    "Misconception: to add fractions, add the top numbers and bottom numbers. Correction: first find a common denominator, then add the numerators.",
    "Misconception: a⁻² is a negative number. Correction: for non-zero a, a⁻² = 1/a², the reciprocal of a squared.",
    "Misconception: the intersection includes all elements in either set. Correction: intersection contains only elements common to both; union contains all elements in either set.",
    "Misconception: a 20% discount means paying 20% of the original price. Correction: a 20% discount means paying 80% of the original price."
   ],practicalActivities:[
    {title:"Class survey and Venn diagram",description:"Survey a group about two subjects, sports or languages. Record the universal-set total, both set totals and the overlap. Draw a Venn diagram and calculate how many belong to neither set."},
    {title:"Market percentage investigation",description:"Select a hypothetical or observed item price, calculate a 5%, 10% or 15% discount, and compare the sale price with the original price. Show every step and state the currency."},
    {title:"Powers and scientific notation",description:"Use a calculator to compare large and small quantities written in ordinary notation and scientific notation. Explain how the exponent changes the position of the decimal point."}
   ],commonMisconceptions:[
    {misconception:"All decimals are irrational.",correction:"Terminating and recurring decimals are rational because they can be written as fractions."},
    {misconception:"Add the numerators and denominators when adding fractions.",correction:"Use a common denominator, then add the numerators and simplify."},
    {misconception:"A negative index makes the value negative.",correction:"A negative index means reciprocal: a⁻ⁿ = 1/aⁿ for a non-zero base."},
    {misconception:"The union and intersection of sets mean the same thing.",correction:"Union combines elements from either set; intersection contains only shared elements."},
    {misconception:"A 20% discount means the buyer pays 20% of the original price.",correction:"The buyer pays 80% of the original price after a 20% discount."}
   ]},
   {heading:"11. Examination practice and marking guidance",paragraphs:[
    "Attempt all questions without looking at the answers. Show your working, use correct mathematical symbols and simplify final fractions where possible. For set questions, use braces and list each element once. For percentage questions, identify the original value before calculating the percentage change.",
    "For index questions, state the law used before simplifying. In scientific notation, check that the coefficient is at least 1 and less than 10 in magnitude. For word problems, include the unit or context in the final answer and verify that the result is reasonable."
   ]}
  ],
  diagramGallery:diagrams.map(([title,items,caption])=>({title,svg:diagram(title,items,caption),explanation:caption+"."})),
  realLifeApplications:[
   "Percentages and ratios help compare market prices, discounts, savings and household budgets.",
   "Set theory organises survey data about school subjects, languages, sports and community interests.",
   "Fractions and proportional reasoning support food preparation, agriculture, construction and measurement.",
   "Scientific notation is used in science to describe microscopic structures and very large distances.",
   "Number systems and algebra provide foundations for accounting, computing, engineering and further study."
  ],
  summary:[
   "Natural numbers, whole numbers and integers are number groups within the real number system.",
   "Rational numbers can be written as fractions; irrational numbers cannot be expressed as ratios of integers.",
   "A set is a well-defined collection of distinct elements; union combines sets and intersection finds shared elements.",
   "For two finite sets, n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
   "For the same non-zero base, multiply powers by adding indices and divide powers by subtracting indices.",
   "Scientific notation uses a × 10ⁿ with 1 ≤ |a| < 10.",
   "A percentage is a fraction out of 100; calculate percentage change using the original value.",
   "Show steps, use correct units and verify answers in the original context."
  ],
  questions:questions.map(([q,a,marks,markingPoints])=>({q,a,marks,category:"Number, sets and indices",markingPoints,explanation:a})),
  seo:{
   title:"Ghana SHS Mathematics Notes: Number Systems, Sets, Indices and Percentages",
   description:"Learn Ghana SHS Year 1 Mathematics with detailed notes on real numbers, fractions, set notation, Venn diagrams, laws of indices, scientific notation, percentages, ratios and worked exam questions.",
   keywords:["Ghana SHS Mathematics notes","SHS 1 Mathematics Ghana","real numbers and number systems","sets and Venn diagrams","laws of indices worked examples","scientific notation Ghana","fractions percentages and ratios","NaCCA mathematics revision questions"],
   faq:[
    {question:"What is the difference between rational and irrational numbers?",answer:"A rational number can be expressed as a fraction of two integers with a non-zero denominator. An irrational number cannot be expressed in that form."},
    {question:"How do you find the union of two sets?",answer:"The union contains every distinct element that belongs to either set or both sets."},
    {question:"What is the rule for multiplying powers with the same base?",answer:"Keep the base and add the indices: aᵐ × aⁿ = aᵐ⁺ⁿ."},
    {question:"How is a percentage of an amount calculated?",answer:"Convert the percentage to a decimal by dividing by 100, then multiply by the amount."}
   ]
  }
 };
 list.unshift(chapter);
})();

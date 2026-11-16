/* CBE Nexus global Mathematics worked-example layer.
   Adds original, fully worked online examples to existing country Mathematics chapters.
   It does not create or relabel national curriculum topics. */
(function(){
  "use strict";
  const countries=window.CBE_COUNTRY_NOTES||{};
  const library=[
    {key:"calculus",match:/calculus|differentiat|integrat|limit|derivative/i,examples:[
      {title:"Differentiate a polynomial",question:"Differentiate y = 3x² − 5x + 4.",steps:["Use the power rule: d(xⁿ)/dx = nxⁿ⁻¹.","Differentiate each term: d(3x²)/dx = 6x.","d(−5x)/dx = −5, and the derivative of a constant is 0.","Combine the terms."],answer:"dy/dx = 6x − 5",explanation:"The derivative gives the gradient of the curve at any value of x.",marks:3},
      {title:"Find a definite integral",question:"Evaluate ∫₀² (2x + 3) dx.",steps:["Integrate term by term: ∫(2x + 3)dx = x² + 3x.","Apply the limits: [x² + 3x]₀².","At x = 2: 2² + 3(2) = 10.","At x = 0: 0² + 3(0) = 0.","Subtract the lower value from the upper value."],answer:"10",explanation:"A definite integral gives the signed area under the curve between the stated limits.",marks:4}]},
    {key:"trigonometry",match:/trigon|bearing|sine rule|cosine rule|elevation|depression/i,examples:[
      {title:"Find a side using sine",question:"A right-angled triangle has an angle of 30° and hypotenuse 12 cm. Find the side opposite the 30° angle.",steps:["Use sin θ = opposite ÷ hypotenuse.","Substitute: sin 30° = opposite ÷ 12.","Rearrange: opposite = 12 × sin 30°.","Evaluate sin 30° = 0.5."],answer:"6 cm",explanation:"The opposite side is half the hypotenuse when the acute angle is 30°.",marks:3},
      {title:"Find an angle using tangent",question:"In a right-angled triangle, the opposite side is 8 cm and the adjacent side is 6 cm. Find θ to 1 decimal place.",steps:["Use tan θ = opposite ÷ adjacent.","tan θ = 8 ÷ 6 = 1.3333…","θ = tan⁻¹(1.3333…).","Evaluate using degree mode."],answer:"θ = 53.1°",explanation:"Check that the calculator is in degrees when the question uses degrees.",marks:3}]},
    {key:"statistics",match:/statistic|mean|median|mode|frequency|data handling|histogram|quartile|standard deviation/i,examples:[
      {title:"Calculate mean, median and range",question:"The five scores are 4, 7, 7, 9 and 13. Find the mean, median, mode and range.",steps:["Mean = (4 + 7 + 7 + 9 + 13) ÷ 5 = 40 ÷ 5 = 8.","The data are already in order; the middle value is 7, so median = 7.","The most frequent value is 7, so mode = 7.","Range = 13 − 4 = 9."],answer:"Mean = 8; median = 7; mode = 7; range = 9.",explanation:"The mean uses every value; the median is the central ordered value; the range measures the spread from minimum to maximum.",marks:4},
      {title:"Find a missing frequency",question:"A data set has values 1, 2 and 3 with frequencies 2, f and 4. There are 10 observations altogether. Find f.",steps:["Add the known frequencies: 2 + 4 = 6.","Total frequency = 10.","Therefore f = 10 − 6."],answer:"f = 4",explanation:"The sum of all frequencies must equal the total number of observations.",marks:2}]},
    {key:"probability",match:/probability|chance|sample space|tree diagram|independent event|conditional/i,examples:[
      {title:"Probability with a fair die",question:"A fair six-sided die is rolled once. Find the probability of obtaining a prime number.",steps:["List the possible outcomes: 1, 2, 3, 4, 5, 6.","The prime outcomes are 2, 3 and 5.","There are 3 favourable outcomes out of 6 equally likely outcomes.","Probability = favourable outcomes ÷ total outcomes = 3/6."],answer:"1/2",explanation:"A probability is between 0 and 1 inclusive.",marks:3},
      {title:"Use the complement",question:"The probability that a bus is late is 0.18. Find the probability that it is not late.",steps:["The probabilities of an event and its complement add to 1.","P(not late) = 1 − P(late).","P(not late) = 1 − 0.18."],answer:"0.82",explanation:"The complement represents all outcomes in which the event does not occur.",marks:2}]},
    {key:"mensuration",match:/mensuration|area|perimeter|volume|surface area|cylinder|sphere|prism|pyramid/i,examples:[
      {title:"Area of a triangle",question:"A triangle has base 14 cm and perpendicular height 9 cm. Calculate its area.",steps:["Use area = ½ × base × perpendicular height.","Substitute: area = ½ × 14 × 9.","Calculate 7 × 9."],answer:"63 cm²",explanation:"Area is measured in square units. The height must be perpendicular to the selected base.",marks:3},
      {title:"Volume of a cylinder",question:"A cylinder has radius 3 cm and height 10 cm. Calculate its volume in terms of π.",steps:["Use V = πr²h.","Substitute r = 3 and h = 10.","V = π × 3² × 10 = 90π."],answer:"90π cm³ (approximately 282.7 cm³)",explanation:"Volume is measured in cubic units. Keep π exact unless a decimal answer is requested.",marks:3}]},
    {key:"geometry",match:/geometry|angle|polygon|parallel line|circle theorem|similarity|congruence|transformation/i,examples:[
      {title:"Angles in a triangle",question:"Two interior angles of a triangle are 48° and 67°. Find the third angle.",steps:["The interior angles of a triangle sum to 180°.","Add the known angles: 48° + 67° = 115°.","Subtract from 180°: 180° − 115°."],answer:"65°",explanation:"Always identify the relevant angle rule before calculating.",marks:2},
      {title:"Angles on a straight line",question:"Two adjacent angles on a straight line are (3x + 10)° and (2x − 5)°. Find x and both angles.",steps:["Angles on a straight line sum to 180°.","(3x + 10) + (2x − 5) = 180.","5x + 5 = 180, so 5x = 175.","x = 35.","First angle = 3(35) + 10 = 115°; second = 2(35) − 5 = 65°."],answer:"x = 35; angles are 115° and 65°.",explanation:"Check: 115° + 65° = 180°.",marks:4}]},
    {key:"coordinate",match:/coordinate|straight.line graph|gradient|intercept|linear graph|graph of|function/i,examples:[
      {title:"Find the gradient of a line",question:"A straight line passes through A(2, 3) and B(6, 11). Find its gradient.",steps:["Use gradient = change in y ÷ change in x.","Change in y = 11 − 3 = 8.","Change in x = 6 − 2 = 4.","Gradient = 8 ÷ 4."],answer:"2",explanation:"The gradient measures the change in y for each unit increase in x.",marks:3},
      {title:"Find the equation of a straight line",question:"A line has gradient 3 and y-intercept −2. Write its equation.",steps:["Use y = mx + c.","The gradient m = 3 and intercept c = −2.","Substitute the values."],answer:"y = 3x − 2",explanation:"In y = mx + c, m is the gradient and c is the y-intercept.",marks:2}]},
    {key:"quadratic",match:/quadratic|polynomial|factoris|factoriz|completing the square/i,examples:[
      {title:"Solve a quadratic by factorisation",question:"Solve x² − 5x + 6 = 0.",steps:["Find two numbers whose product is 6 and sum is −5: −2 and −3.","Factorise: (x − 2)(x − 3) = 0.","Set each factor equal to zero: x − 2 = 0 or x − 3 = 0.","Solve each equation."],answer:"x = 2 or x = 3",explanation:"Substitution gives 2² − 5(2) + 6 = 0 and 3² − 5(3) + 6 = 0.",marks:4},
      {title:"Expand and simplify",question:"Expand and simplify (x + 4)(x − 2).",steps:["Multiply each term in the first bracket by each term in the second.","x × x = x²; x × (−2) = −2x.","4 × x = 4x; 4 × (−2) = −8.","Collect like terms: −2x + 4x = 2x."],answer:"x² + 2x − 8",explanation:"Expanding is checked by multiplying the factors back together.",marks:3}]},
    {key:"algebra",match:/algebra|equation|inequalit|expression|formula|simultaneous/i,examples:[
      {title:"Solve a linear equation",question:"Solve 4x − 7 = 21.",steps:["Add 7 to both sides: 4x = 28.","Divide both sides by 4: x = 7.","Check in the original equation: 4(7) − 7 = 28 − 7 = 21."],answer:"x = 7",explanation:"Perform the same operation on both sides to preserve equality.",marks:3},
      {title:"Solve simultaneous equations",question:"Solve x + y = 11 and x − y = 3.",steps:["Add the equations: (x + y) + (x − y) = 11 + 3.","This gives 2x = 14, so x = 7.","Substitute into x + y = 11: 7 + y = 11.","Therefore y = 4."],answer:"x = 7, y = 4",explanation:"Check: 7 + 4 = 11 and 7 − 4 = 3.",marks:4}]},
    {key:"sequence",match:/sequence|series|nth term|arithmetic progression|geometric progression/i,examples:[
      {title:"Find the nth term of an arithmetic sequence",question:"Find the nth term of 5, 8, 11, 14, …",steps:["The common difference is 8 − 5 = 3.","The nth term has the form 3n + c.","Use the first term: 3(1) + c = 5, so c = 2."],answer:"3n + 2",explanation:"Check n = 1 gives 5 and n = 2 gives 8.",marks:3},
      {title:"Find a term in a sequence",question:"For the sequence with nth term 4n − 1, find the 12th term.",steps:["Substitute n = 12 into 4n − 1.","Calculate 4 × 12 − 1 = 48 − 1."],answer:"47",explanation:"Substitute the term position into the rule.",marks:2}]},
    {key:"ratio",match:/ratio|proportion|percentage|discount|profit|interest|rate|standard form|currency/i,examples:[
      {title:"Share an amount in a ratio",question:"Divide 840 in the ratio 3:4.",steps:["Add the ratio parts: 3 + 4 = 7.","One part = 840 ÷ 7 = 120.","First share = 3 × 120 = 360.","Second share = 4 × 120 = 480."],answer:"360 and 480",explanation:"Check: 360 + 480 = 840 and 360:480 simplifies to 3:4.",marks:4},
      {title:"Calculate a percentage discount",question:"A jacket costs 2,500 currency units and is reduced by 12%. Find the sale price.",steps:["Discount = 12/100 × 2,500 = 300.","Sale price = original price − discount.","Sale price = 2,500 − 300."],answer:"2,200 currency units",explanation:"The currency is deliberately unspecified so the example can be used in different countries.",marks:3}]},
    {key:"number",match:/number|integer|fraction|decimal|indices|index|surds|root|standard form|arithmetic/i,examples:[
      {title:"Add fractions with different denominators",question:"Evaluate 3/4 + 2/3.",steps:["Find the lowest common denominator of 4 and 3: 12.","Convert: 3/4 = 9/12 and 2/3 = 8/12.","Add the numerators: 9/12 + 8/12 = 17/12.","Write as a mixed number if required."],answer:"17/12 = 1 5/12",explanation:"Only add the numerators after expressing both fractions with a common denominator.",marks:3},
      {title:"Evaluate an expression using order of operations",question:"Evaluate 18 − 2 × (3 + 4).",steps:["Evaluate the brackets: 3 + 4 = 7.","Multiply: 2 × 7 = 14.","Subtract: 18 − 14."],answer:"4",explanation:"Complete brackets before multiplication, then subtraction.",marks:2}]},
    {key:"general",match:/.*/,examples:[
      {title:"Apply a mathematical method",question:"A learner obtains 36 when evaluating 6 × (4 + 2). Show the correct working.",steps:["Evaluate the bracket first: 4 + 2 = 6.","Multiply: 6 × 6 = 36.","The learner's result is correct."],answer:"36",explanation:"Show each step clearly and keep the order of operations consistent.",marks:2},
      {title:"Check a numerical result",question:"A rectangle is 8 cm long and 5 cm wide. Find its perimeter.",steps:["Perimeter = 2(length + width).","Substitute: 2(8 + 5).","Calculate: 2 × 13."],answer:"26 cm",explanation:"Perimeter is a length, so the answer uses cm rather than cm².",marks:2}]}
  ];
  const pick=text=>library.find(x=>x.key!=="general"&&x.match.test(text))||library[library.length-1];
  let countriesUpdated=0,chaptersUpdated=0,examplesAdded=0;
  Object.entries(countries).forEach(([country,record])=>{
    Object.entries(record.levels||{}).forEach(([level,subjects])=>{
      const mathsKey=Object.keys(subjects||{}).find(k=>/^mathematics$|^maths$|^mathematics?\s*\(/i.test(k));
      if(!mathsKey||!Array.isArray(subjects[mathsKey]))return;
      let touched=false;
      subjects[mathsKey].forEach(chapter=>{
        if(chapter.cbeWorkedExamplesVersion==="2026-11-16-global-v1")return;
        const descriptor=[chapter.title,chapter.lessons,(chapter.objectives||[]).join(" "),(chapter.sections||[]).map(s=>s.heading).join(" ")].join(" ");
        const selected=pick(descriptor);
        const examples=selected.examples.map((e,i)=>Object.assign({id:"cbe-math-"+selected.key+"-"+(i+1)},JSON.parse(JSON.stringify(e))));
        chapter.sections=Array.isArray(chapter.sections)?chapter.sections:[];
        chapter.sections.push({
          heading:"Online worked examples — "+selected.key.charAt(0).toUpperCase()+selected.key.slice(1),
          body:"Study each complete solution. Follow the mathematical reasoning, write down each operation and check the final result. These original CBE Nexus examples support practice and are supplementary to the country's official syllabus.",
          workedExamples:examples
        });
        chapter.cbeWorkedExamplesVersion="2026-11-16-global-v1";
        chapter.workedExamplesCount=(chapter.workedExamplesCount||0)+examples.length;
        chapter.aiWorkedExamplesSummary="Step-by-step online Mathematics worked examples with method, calculations, final answers and checks.";
        chaptersUpdated++;examplesAdded+=examples.length;touched=true;
      });
      if(touched){record.mathematicsWorkedExamplesUpdated=true;record.mathematicsWorkedExamplesLevel=level;countriesUpdated++;}
    });
  });
  window.CBE_MATHEMATICS_WORKED_EXAMPLES_REPORT={countriesUpdated,chaptersUpdated,examplesAdded,version:"2026-11-16-global-v1"};
})();
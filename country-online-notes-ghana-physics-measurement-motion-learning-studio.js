/* CBE Nexus Learning Studio — Ghana SHS Year 1 Physics.
   Original supplementary chapter: physical quantities, measurement and motion.
   Country curriculum alignment: Ghana NaCCA SHS Physics pathway; verify sequence against the current school scheme.
   Append-only: retains existing country notes and prior Learning Studio chapters. */
(()=> {
 "use strict";
 const level=window.CBE_COUNTRY_NOTES?.Ghana?.levels?.["SHS Year 1"];
 if(!level) return;
 const list=level.Physics||(level.Physics=[]);
 if(list.some(x=>x.id==="gh-shs1-phy-measurement-motion-studio")) return;
 const esc=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
 const svg=(title,labels,caption)=>{
  const xs=[28,196,364], fills=["#dceeff","#fff0c2","#dcf7e5"], strokes=["#3478a8","#bd8700","#348653"];
  const nodes=labels.map((v,i)=>'<rect x="'+xs[i]+'" y="36" width="128" height="66" rx="11" fill="'+fills[i]+'" stroke="'+strokes[i]+'" stroke-width="2"/><text x="'+(xs[i]+64)+'" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#17324d">'+esc(v)+'</text>');
  return '<svg viewBox="0 0 520 156" role="img" aria-label="'+esc(title)+'" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="510" height="146" rx="14" fill="#f7fbff" stroke="#b8cce0"/>'+nodes.join("")+'<path d="M156 69 H194 M324 69 H362" stroke="#2563eb" stroke-width="3"/><path d="M185 62 L195 69 L185 76 M353 62 L363 69 L353 76" fill="none" stroke="#2563eb" stroke-width="3"/><text x="260" y="128" text-anchor="middle" font-size="12" fill="#40566d">'+esc(caption)+'</text></svg>';
 };
 const diagrams=[
  ["Physics measurement process",["Observe","Measure","Record"],"A reliable measurement uses an appropriate instrument and unit"],
  ["SI base quantities",["Length: m","Mass: kg","Time: s"],"These are three of the seven SI base quantities"],
  ["Reading a metre rule",["Zero mark","Object length","Eye level"],"Read at eye level and check the zero reference"],
  ["Micrometer screw gauge",["Sleeve scale","Thimble","Ratchet"],"Use the ratchet gently and account for zero error"],
  ["Distance and displacement",["Start point","Path length","Final position"],"Distance is scalar; displacement includes direction"],
  ["Distance-time graph",["At rest","Constant speed","Faster motion"],"Gradient represents speed on a distance-time graph"],
  ["Velocity-time graph",["Velocity","Time","Area"],"Gradient is acceleration; signed area is displacement"],
  ["Acceleration",["Initial speed","Change in speed","Time taken"],"Acceleration = change in velocity divided by time"],
  ["Scalar and vector",["Scalar: 5 m","Vector: 5 m east","Direction"],"Vectors require magnitude and direction"],
  ["Experimental method",["Independent","Dependent","Controlled"],"Change one factor and control other relevant variables"]
 ];
 const questions=[
  ["Define a physical quantity.","A physical quantity is a property that can be measured and expressed as a numerical value and a unit.",2,["Measurable property (1); value and unit (1)."]],
  ["State the SI units of length, mass and time.","Metre (m), kilogram (kg) and second (s), respectively.",3,["Each correct unit (1 each)."]],
  ["Distinguish between a scalar and a vector quantity.","A scalar has magnitude only; a vector has both magnitude and direction.",2,["Scalar definition (1); vector definition (1)."]],
  ["A runner travels 400 m in 50 s. Calculate the average speed.","Average speed = distance ÷ time = 400 ÷ 50 = 8 m/s.",3,["Formula (1); substitution (1); 8 m/s (1)."]],
  ["Explain the difference between distance and displacement.","Distance is the total length of the route travelled and is a scalar. Displacement is the straight-line change in position from start to finish in a specified direction and is a vector.",4,["Distance definition (2); displacement definition (2)."]],
  ["A car changes velocity from 5 m/s to 25 m/s in 4 s. Calculate its average acceleration.","Acceleration = (final velocity − initial velocity) ÷ time = (25 − 5) ÷ 4 = 5 m/s².",3,["Formula (1); substitution (1); answer with unit (1)."]],
  ["A student measures a book as 0.245 m. Express this length in centimetres and millimetres.","0.245 m = 24.5 cm = 245 mm.",2,["24.5 cm (1); 245 mm (1)."]],
  ["State two precautions when using a metre rule.","Align the zero mark with the start of the object; read the scale at eye level to avoid parallax; keep the rule parallel to the measured length.",2,["Any two valid precautions (1 each)."]],
  ["What is meant by zero error in a measuring instrument?","Zero error is a non-zero reading shown by an instrument when the true measured value should be zero.",2,["Reading at true zero (1); instrument offset (1)."]],
  ["A distance-time graph is a straight line with a constant positive gradient. What does this indicate?","The object is moving at constant speed because the gradient of a distance-time graph represents speed.",2,["Constant speed (1); gradient interpretation (1)."]],
  ["A horizontal line appears on a distance-time graph. Interpret it.","The distance from the reference point is not changing with time, so the object is at rest.",2,["No change in distance (1); at rest (1)."]],
  ["Explain how to determine acceleration from a velocity-time graph.","Calculate the gradient: change in velocity divided by the corresponding time interval.",2,["Gradient (1); change in velocity/time (1)."]],
  ["A cyclist travels 3 km east and then 4 km west. Find the total distance and the displacement from the starting point.","Distance = 3 + 4 = 7 km. Taking east as positive, displacement = 3 − 4 = −1 km, meaning 1 km west.",4,["Total distance 7 km (2); displacement 1 km west (2)."]],
  ["Why should repeated measurements be taken in an experiment?","Repeats help identify anomalous readings, reveal variation and allow a mean to be calculated, improving reliability.",2,["Identify variation/anomaly (1); mean or reliability (1)."]],
  ["A learner records speed in metres. Explain why this unit is unsuitable.","Metre is a unit of length, not speed. Speed is distance divided by time and should be expressed in m/s or another length-per-time unit.",2,["Metre measures length (1); correct speed unit (1)."]]
 ];
 const chapter={
  id:"gh-shs1-phy-measurement-motion-studio",
  title:"Physical quantities, measurement and motion",
  lessons:"Learning Studio chapter • concepts, diagrams, worked calculations and examination practice",
  curriculumContext:"Ghana NaCCA Senior High School Physics, Year 1 foundational measurement and mechanics. This is original CBE Nexus supplementary material, not an official NaCCA textbook. Confirm the exact sequence and depth with the current curriculum and school scheme of learning.",
  curriculumStatus:"supplementary-country-aligned",
  objectives:[
   "Explain why measurement and standard units are essential in Physics.",
   "Identify physical quantities, SI base units and common derived units.",
   "Use common measuring instruments correctly and recognise zero and parallax errors.",
   "Distinguish distance from displacement and speed from velocity.",
   "Calculate average speed, velocity and acceleration using appropriate units.",
   "Interpret simple distance-time and velocity-time graphs.",
   "Plan a fair measurement investigation and evaluate reliability."
  ],
  sections:[
   {heading:"1. Physics, observation and measurement",paragraphs:[
    "Physics investigates matter, energy, motion, forces and the interactions that explain natural phenomena. Scientific explanations are strengthened by observations that can be tested and measurements that can be repeated. Measurement connects a physical observation to a number and an agreed unit. Saying that a table is 1.2 metres long is more informative than saying that it is 'long', because the statement can be checked and compared.",
    "A physical quantity is a property that can be measured. Examples include length, mass, time, temperature, electric current and speed. A measurement is expressed as a numerical value and a unit. The number tells how many units are present; the unit defines the size of the standard being used.",
    "Standard units allow scientists, engineers, teachers and learners in different places to communicate results consistently. The International System of Units, abbreviated SI, is the internationally accepted system. Using standard units reduces confusion and makes calculations easier to compare.",
    "Measurements are never perfectly exact. Instrument resolution, calibration, environmental conditions, the observer and the method all affect the result. A careful scientist records the instrument used, the unit, the precision justified by the scale and any important limitations."
   ],keyTerms:["Physics","physical quantity","measurement","unit","SI","resolution"]},
   {heading:"2. SI base quantities and derived quantities",paragraphs:[
    "The SI system has seven base quantities, each with a defined base unit. Length is measured in metres (m), mass in kilograms (kg), time in seconds (s), electric current in amperes (A), thermodynamic temperature in kelvins (K), amount of substance in moles (mol), and luminous intensity in candelas (cd).",
    "Many quantities are derived from base quantities. Area is measured in square metres (m²), volume in cubic metres (m³), speed in metres per second (m/s), acceleration in metres per second squared (m/s²), and density in kilograms per cubic metre (kg/m³). A derived unit can be understood by examining the relationship used to calculate the quantity.",
    "Prefixes represent powers of ten and make very large or very small measurements convenient. Examples include kilo (k) for 10³, centi (c) for 10⁻², milli (m) for 10⁻³, and micro (µ) for 10⁻⁶. Thus 1 kilometre is 1000 metres, 1 centimetre is 0.01 metres and 1 millimetre is 0.001 metres.",
    "Always convert quantities to consistent units before substituting into equations. For example, a distance in kilometres and a time in seconds should not be divided without converting the distance if the answer is required in metres per second. Write the unit at each stage to reduce avoidable errors."
   ],keyTerms:["SI base unit","derived quantity","prefix","metre","kilogram","second"]},
   {heading:"3. Measuring length, time and mass",paragraphs:[
    "A metre rule or measuring tape is suitable for many everyday lengths. Place the zero mark at one end of the object, align the scale with the length being measured and view the reading directly from above to reduce parallax error. If the zero edge is damaged, take readings at two marks and subtract the initial reading from the final reading.",
    "A vernier caliper can measure external diameter, internal diameter and depth more precisely than an ordinary ruler. The final reading combines the main-scale reading with the vernier contribution, with any zero error corrected according to the instrument's design. Learners should practise using the actual instrument supplied by the school because scale layouts differ.",
    "A micrometer screw gauge is used for small thicknesses and diameters. It commonly has a sleeve scale and a rotating thimble. The ratchet helps apply a consistent gentle force. Read the sleeve and thimble scales, check for zero error and avoid overtightening, which can deform a soft object or damage the instrument.",
    "Time intervals can be measured using a stopwatch or electronic timer. Human reaction time can introduce uncertainty when starting and stopping a manual stopwatch. Repeating the timing over several cycles, such as timing ten oscillations and dividing by ten, can reduce the effect of reaction-time variation on the calculated period.",
    "Mass is measured using a balance, such as a digital or beam balance. Mass is not the same as weight: mass describes the amount of matter and is measured in kilograms, while weight is a gravitational force measured in newtons. A balance should be zeroed or tared before use and the object placed safely on the pan."
   ],keyTerms:["metre rule","vernier caliper","micrometer","stopwatch","balance","zero error","parallax"]},
   {heading:"4. Accuracy, precision, errors and reliability",paragraphs:[
    "Accuracy describes how close a measurement is to the accepted or true value. Precision describes the closeness of repeated measurements to one another or the fineness of the measurement scale. A set of readings can be precise but inaccurate if an instrument has a systematic calibration error.",
    "Random errors vary unpredictably between readings. Examples include small variations in reaction time or difficulty judging a scale mark. Repeating measurements and calculating a mean can reduce the influence of random variation, although it does not remove systematic errors.",
    "Systematic errors shift readings consistently in one direction. A balance that has not been zeroed, a ruler with a worn zero edge or a thermometer with an incorrect calibration may produce systematic error. The instrument should be checked, calibrated or corrected before measurements are accepted.",
    "Parallax error occurs when a scale is viewed from an angle rather than directly in line with the pointer or meniscus. To reduce it, place the eye perpendicular to the scale at the level of the reading. For a liquid in a narrow transparent tube, read the appropriate part of the meniscus as instructed for the liquid and apparatus.",
    "Reliability is improved by using a consistent method, repeating readings, controlling relevant variables and recording observations honestly. Do not discard an inconvenient reading without a scientific reason. Identify a possible anomaly, repeat the measurement if appropriate and explain how the final value was selected."
   ],keyTerms:["accuracy","precision","random error","systematic error","parallax","reliability","mean"]},
   {heading:"5. Scalars, vectors, distance and displacement",paragraphs:[
    "A scalar quantity has magnitude only. Examples include distance, speed, mass, time, temperature and energy. A vector quantity has both magnitude and direction. Examples include displacement, velocity, acceleration and force. Direction is essential when adding or comparing vectors.",
    "Distance is the total length of the path travelled. It is a scalar and cannot be negative. Displacement is the change in position from the starting point to the finishing point, measured along the straight line between them with a specified direction. Displacement may be zero even when a person has travelled a non-zero distance.",
    "Imagine walking 3 km east and then 4 km west along a straight road. The total distance is 7 km. If east is positive, the final displacement is 3 − 4 = −1 km, which means 1 km west of the starting point. The distance describes the route; displacement describes the overall change in position.",
    "When working with one-dimensional motion, choose a positive direction and use it consistently. A negative displacement or velocity does not mean that the object has a negative amount of motion; it indicates motion in the direction chosen as negative."
   ],keyTerms:["scalar","vector","distance","displacement","magnitude","direction"]},
   {heading:"6. Speed, velocity and acceleration",paragraphs:[
    "Average speed is the total distance travelled divided by the total time taken. It is a scalar and is commonly expressed in m/s or km/h. For example, if a learner cycles 600 metres in 120 seconds, average speed = 600 ÷ 120 = 5 m/s.",
    "Average velocity is displacement divided by the time taken. It is a vector because it has direction. If a person completes a lap and returns to the starting point, the total distance is not zero, but the overall displacement is zero; therefore the average velocity for the complete journey is zero.",
    "Acceleration is the rate of change of velocity with time. For motion in a straight line, average acceleration = (final velocity − initial velocity) ÷ time interval. Its SI unit is m/s². An object accelerates if its velocity changes in magnitude, direction or both.",
    "A negative acceleration value depends on the chosen positive direction. It does not always mean that an object is slowing down. An object moving in the negative direction may speed up while its acceleration is negative. Interpret signs together with the direction of velocity.",
    "Equations of uniformly accelerated motion are useful when acceleration is constant. At introductory level, learners commonly use v = u + at, s = ut + ½at² and v² = u² + 2as, where u is initial velocity, v is final velocity, a is acceleration, t is time and s is displacement. Check that the conditions for each equation are satisfied before applying it."
   ],keyTerms:["speed","velocity","acceleration","uniform acceleration","initial velocity","final velocity"]},
   {heading:"7. Interpreting motion graphs",paragraphs:[
    "A distance-time graph shows how the distance from a chosen reference point changes with time. Time is usually placed on the horizontal axis and distance on the vertical axis. The gradient of a straight section gives speed. A steeper positive gradient represents a greater speed; a horizontal section indicates that the distance is not changing.",
    "A curved distance-time graph indicates changing speed because its gradient changes. The speed at a particular instant can be estimated by drawing a tangent to the curve and calculating the tangent's gradient. Axes must be labelled with quantities and units, and scales should use most of the graph paper clearly.",
    "A velocity-time graph shows velocity on the vertical axis and time on the horizontal axis. Its gradient gives acceleration. A horizontal line indicates constant velocity, while a straight sloping line indicates constant acceleration. A line below the time axis represents velocity in the negative direction according to the chosen sign convention.",
    "The signed area between a velocity-time graph and the time axis represents displacement. Areas above the axis are positive and areas below are negative. The total distance travelled requires adding the magnitudes of the separate areas, not simply taking the signed total.",
    "Graphs are not decorative sketches. Plot points accurately, choose a sensible scale, label axes, show units and draw a best-fit line or curve where appropriate. Do not force a straight line through every point if the evidence indicates a curved relationship."
   ],keyTerms:["distance-time graph","velocity-time graph","gradient","area under graph","best-fit line","tangent"]},
   {heading:"8. Planning a fair measurement investigation",paragraphs:[
    "A scientific investigation begins with a question that can be tested. Identify the independent variable, which is deliberately changed; the dependent variable, which is measured; and controlled variables, which are kept as constant as practical. A fair test changes one factor at a time while controlling other factors that could influence the result.",
    "Choose an instrument with a suitable range and resolution. Plan how many readings will be taken and whether repeats are needed. Record measurements immediately in a table with headings and units. Do not round intermediate values unnecessarily; round the final answer to a precision justified by the measurements.",
    "A graph can reveal patterns that are difficult to see in a table. Plot the independent variable on the horizontal axis and dependent variable on the vertical axis unless the investigation requires another convention. Consider whether the data show a direct relationship, inverse relationship, threshold or more complex pattern.",
    "An evaluation should identify sources of uncertainty and suggest realistic improvements. For example, use an electronic timer to reduce reaction-time uncertainty, repeat trials, improve alignment, use a higher-resolution instrument or control temperature. Improvements should address the actual weakness in the method rather than simply saying 'be more careful'."
   ],keyTerms:["independent variable","dependent variable","controlled variable","fair test","uncertainty","data table"]},
   {heading:"9. Worked examples and examination calculations",paragraphs:[
    "Worked example 1 — A bus travels 150 km in 3 hours. Average speed = distance ÷ time = 150 ÷ 3 = 50 km/h. If the answer is required in m/s, convert 50 km/h by multiplying by 1000/3600, giving approximately 13.9 m/s.",
    "Worked example 2 — A cyclist's velocity changes from 4 m/s to 16 m/s in 6 seconds. Average acceleration = (16 − 4) ÷ 6 = 2 m/s². The positive result indicates acceleration in the chosen positive direction.",
    "Worked example 3 — A learner walks 5 m north and then 12 m east. If the path consists of perpendicular straight sections, the displacement magnitude is found using Pythagoras: √(5² + 12²) = 13 m. Direction must also be stated; the displacement is towards the north-east, at an angle determined from the component ratio.",
    "For every calculation, write the relationship, substitute the values with consistent units, show the arithmetic and state the answer with the correct unit and direction where necessary. A numerical answer without a unit may lose a mark even when the arithmetic is correct."
   ],workedExamples:[
    {title:"Average speed and unit conversion",question:"A vehicle covers 180 km in 2.5 hours. Calculate its average speed in km/h and m/s.",marks:4,method:"Average speed = total distance ÷ total time. Convert km/h to m/s by multiplying by 1000/3600.",steps:["Speed = 180 ÷ 2.5 = 72 km/h","72 × 1000 ÷ 3600 = 20 m/s"],answer:"72 km/h or 20 m/s",explanation:"The conversion uses 1 km = 1000 m and 1 h = 3600 s."},
    {title:"Average acceleration",question:"A motorbike increases its velocity from 6 m/s to 18 m/s in 3 seconds. Find its average acceleration.",marks:3,method:"a = (v − u) ÷ t.",steps:["u = 6 m/s; v = 18 m/s; t = 3 s","a = (18 − 6) ÷ 3","a = 4 m/s²"],answer:"4 m/s²",explanation:"Acceleration is the change in velocity divided by the time interval."},
    {title:"Distance and displacement",question:"A learner walks 8 m east and then 6 m west. Calculate total distance and displacement.",marks:4,method:"Add path lengths for distance; use a consistent sign convention for displacement.",steps:["Distance = 8 + 6 = 14 m","Take east as positive","Displacement = +8 − 6 = +2 m"],answer:"Distance = 14 m; displacement = 2 m east.",explanation:"Distance measures the full route while displacement measures the net change in position."}
   ]},
   {heading:"10. Practical activities and common misconceptions",paragraphs:[
    "Practical A — Measure the length and width of several classroom objects using a metre rule. Repeat each measurement, compare readings and explain differences. Include units and the precision supported by the instrument.",
    "Practical B — Time a trolley or toy vehicle over a measured track. Repeat the timing, calculate average speed and discuss how reaction time, track slope and release method could affect the results. Use a safe, clear track and keep people and equipment away from moving hazards.",
    "Practical C — Use a motion sensor or a teacher-provided data set to construct distance-time and velocity-time graphs. Describe sections of the graph and calculate gradients or areas where appropriate.",
    "Misconception: distance and displacement are interchangeable. Correction: distance is total path length; displacement is the directed change in position.",
    "Misconception: a negative acceleration always means slowing down. Correction: the sign indicates direction relative to the chosen positive axis; compare velocity and acceleration signs to determine whether speed increases or decreases.",
    "Misconception: a more precise instrument is automatically accurate. Correction: precision and accuracy are different; a finely graduated instrument can still be miscalibrated.",
    "Misconception: the gradient of every motion graph means speed. Correction: distance-time gradient gives speed; velocity-time gradient gives acceleration."
   ],practicalActivities:[
    {title:"Classroom length survey",description:"Measure several objects with a metre rule or tape. Repeat readings, record units and explain how alignment and parallax affect results."},
    {title:"Motion and average speed",description:"Time a safe moving trolley or toy over a measured straight track. Repeat trials, calculate mean time and average speed, and identify controlled variables."},
    {title:"Motion graph interpretation",description:"Plot a distance-time graph from measured or supplied data. Identify rest and constant-speed intervals and calculate the gradient of a straight section."}
   ],commonMisconceptions:[
    {misconception:"Distance and displacement are the same quantity.",correction:"Distance is total path length; displacement is the directed change from starting to finishing position."},
    {misconception:"A negative acceleration always means an object is slowing down.",correction:"The sign shows direction relative to the chosen axis. Compare velocity and acceleration directions to decide whether speed increases or decreases."},
    {misconception:"A precise instrument must be accurate.",correction:"Precision concerns repeatability or resolution; accuracy concerns closeness to the accepted value. Calibration errors can make precise readings inaccurate."},
    {misconception:"The gradient of every motion graph gives speed.",correction:"Distance-time gradient gives speed; velocity-time gradient gives acceleration."},
    {misconception:"A larger distance always means a larger displacement.",correction:"Displacement depends on the net change in position and direction, not the total route length."}
   ]},
   {heading:"11. Examination practice and marking guidance",paragraphs:[
    "Attempt the questions independently before checking the marking points. In numerical questions, show the formula and substitution before the final answer. Use SI units unless the question requests another unit. For vector questions, state direction clearly and keep the sign convention consistent.",
    "In graph questions, identify the quantity represented by each axis before interpreting the gradient or area. In experimental-design questions, name the independent, dependent and controlled variables and explain how the method improves reliability. A good scientific explanation links evidence to a conclusion."
   ]}
  ],
  diagramGallery:diagrams.map(([title,labels,caption])=>({title,svg:svg(title,labels,caption),explanation:caption+"."})),
  realLifeApplications:[
   "Speed and acceleration measurements support road safety, vehicle design and transport planning.",
   "Accurate length and mass measurements are essential in construction, manufacturing, health care and trade.",
   "Motion graphs help engineers analyse vehicle performance, athlete movement and machine operation.",
   "Reliable measurement supports agricultural experiments, water-flow monitoring and environmental field studies.",
   "Understanding measurement uncertainty helps people interpret laboratory results and technical specifications responsibly."
  ],
  summary:[
   "A physical measurement consists of a numerical value and a unit; SI units support consistent communication.",
   "Length, mass and time have SI base units metre, kilogram and second.",
   "Accuracy, precision, reliability and resolution describe different aspects of measurement quality.",
   "Distance is scalar; displacement is vector. Speed is scalar; velocity is vector.",
   "Average speed = total distance ÷ total time; acceleration = change in velocity ÷ time.",
   "The gradient of a distance-time graph gives speed; the gradient of a velocity-time graph gives acceleration.",
   "The signed area under a velocity-time graph gives displacement."
  ],
  questions:questions.map(([q,a,marks,markingPoints])=>({q,a,marks,category:"Measurement and mechanics",markingPoints,explanation:a})),
  seo:{
   title:"Ghana SHS Physics Notes: Measurement, SI Units, Speed and Motion",
   description:"Study Ghana SHS Year 1 Physics with clear notes on SI units, measuring instruments, errors, scalars, vectors, distance, displacement, speed, velocity, acceleration and motion graphs, plus worked examples and exam questions.",
   keywords:["Ghana SHS Physics notes","SHS 1 Physics measurement","SI units Physics Ghana","speed velocity acceleration notes","distance and displacement","motion graphs Physics","measuring instruments and errors","NaCCA Physics revision questions"],
   faq:[
    {question:"What are the SI units of length, mass and time?",answer:"The SI units are the metre (m), kilogram (kg) and second (s), respectively."},
    {question:"What is the difference between distance and displacement?",answer:"Distance is the total path length travelled; displacement is the directed change in position from start to finish."},
    {question:"How is average speed calculated?",answer:"Average speed equals total distance travelled divided by total time taken."},
    {question:"What does the gradient of a velocity-time graph represent?",answer:"The gradient of a velocity-time graph represents acceleration."}
   ]
  }
 };
 list.unshift(chapter);
})();

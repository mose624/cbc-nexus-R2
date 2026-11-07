/* CBE Nexus Kenya Grade 10 examination skills and marking guide.
   Original learner guidance; check each assessment against the current KICD assessment framework. */
window.CBE_EXAM_SKILLS = {
  title: "How to answer examination questions and earn marks",
  intro: "Read the instruction word, identify the required knowledge or skill, plan the response, show the evidence requested and check that every part of the question has been answered. Marks are awarded for demonstrated knowledge and correct working, not for length alone.",
  commands: [
    ["State", "Give a short, direct fact or name. Do not add a long explanation unless asked."],
    ["Define", "Give the accepted meaning of the term, including its essential features."],
    ["List / Name", "Give separate points or items. Keep each point clear."],
    ["Describe", "Say what happens or what something is like, in a logical sequence where needed."],
    ["Explain", "Give the reason or mechanism. Link cause to effect using because, therefore or consequently."],
    ["Compare", "Show similarities and/or differences using paired points about the same features."],
    ["Distinguish", "State the difference clearly; a paired contrast is usually safest."],
    ["Calculate", "Write the formula or relationship, substitute values, show working, give the answer and unit."],
    ["Determine", "Use the information or data provided to work out the required result; show the method."],
    ["Sketch / Draw", "Make a clear, proportionate diagram, use a pencil where appropriate, label accurately and include a title if useful."],
    ["Plot", "Choose a suitable scale, label axes with units, plot points accurately and draw the appropriate line or curve."],
    ["Evaluate / Discuss", "Consider relevant evidence or both sides, explain strengths and limitations, then make a supported judgement."]
  ],
  method: [
    "Read the whole question twice. Underline the command word, topic and limiting words such as two, explain, using the graph or in terms of energy.",
    "Check the marks and parts (a), (b), (c). Use the marks as a guide to the amount of relevant detail, not as a guarantee that one sentence earns one mark.",
    "Recall the relevant principle, definition, equation, diagram or evidence before writing.",
    "Arrange points in a logical order. Number separate points when the question asks for several.",
    "For calculations, show the equation, substitution with units, intermediate steps and final answer with the correct unit and sensible significant figures.",
    "For explanations, make the link explicit: observation or cause → scientific or mathematical reason → result.",
    "Check that the response answers the exact question and that no requested labels, units, comparisons or conclusions are missing."
  ],
  marking: [
    ["Knowledge / fact mark", "The correct term, fact, law, definition or principle is stated."],
    ["Method mark", "A valid method, formula, construction or sequence is shown, even if a later arithmetic slip affects the final result."],
    ["Accuracy mark", "The calculation, graph, diagram, value or conclusion is correct."],
    ["Unit / label mark", "A required unit, axis label, symbol, state symbol or diagram label is included correctly."],
    ["Reasoning mark", "The explanation connects evidence and scientific or mathematical reasoning rather than merely repeating the question."]
  ],
  subjects: {
    "Mathematics": {
      focus: "In Mathematics, make your method visible. Do not jump from the question to an unexplained answer.",
      steps: ["Write the relevant formula, identity or theorem.", "Substitute the given values carefully and preserve brackets.", "Show each algebraic or numerical step on a new line.", "Keep units where quantities have units.", "State the final answer clearly and check it by substitution, estimation or an inverse operation."],
      sampleQuestion: "A learner buys 3 exercise books at KSh 45 each and pays with KSh 200. Calculate the change.",
      sampleAnswer: "Cost = 3 × 45 = KSh 135\nChange = 200 − 135 = KSh 65",
      marks: [["Correct total cost operation", "1 mark"], ["Correct total cost: KSh 135", "1 mark"], ["Correct subtraction for change", "1 mark"], ["Final answer with KSh", "1 mark"]],
      warning: "A correct final number without working may lose method marks where the question requires working. An answer without units may lose an accuracy or unit mark when a unit is required."
    },
    "Chemistry": {
      focus: "In Chemistry, use correct chemical language, formulae, balanced equations, state symbols and observations.",
      steps: ["Identify the substances and the chemical process involved.", "Write correct formulae before balancing an equation.", "Balance atoms on both sides; change coefficients, never subscripts.", "Include state symbols or conditions when requested.", "For practical questions, separate the observation from the inference or explanation."],
      sampleQuestion: "Write a balanced equation for magnesium reacting with oxygen to form magnesium oxide.",
      sampleAnswer: "Word equation: magnesium + oxygen → magnesium oxide\nFormula equation: Mg + O₂ → MgO\nBalanced equation: 2Mg + O₂ → 2MgO",
      marks: [["Correct reactant and product formulae", "1 mark"], ["Correct balancing of magnesium atoms", "1 mark"], ["Correct balancing of oxygen atoms", "1 mark"]],
      warning: "Do not balance an equation by changing a chemical formula's subscript. MgO and MgO₂ represent different substances."
    },
    "Biology": {
      focus: "In Biology, use precise biological terms and explain processes in the correct sequence.",
      steps: ["Identify the organism, structure or process named.", "Use the correct biological vocabulary.", "For a process, put events in their correct order.", "Link structure to function when asked how a structure is adapted.", "For diagrams, draw large and clear, use single label lines and avoid crossing labels."],
      sampleQuestion: "Explain why the small intestine is adapted for absorption of digested food.",
      sampleAnswer: "The small intestine is long, providing a large area and time for absorption. Its lining has many villi and microvilli, which greatly increase surface area. The epithelium is thin, giving a short diffusion distance. Each villus has blood capillaries to carry away absorbed glucose and amino acids, while a lacteal absorbs many fatty acids and glycerol.",
      marks: [["Large surface area / villi or microvilli", "1 mark"], ["Thin epithelium / short diffusion distance", "1 mark"], ["Blood capillaries transport soluble nutrients", "1 mark"], ["Lacteal absorbs products of fat digestion", "1 mark"]],
      warning: "Avoid vague phrases such as 'it is well adapted'. Name the feature and explain how that feature helps absorption."
    },
    "Physics": {
      focus: "In Physics, state the principle, identify quantities, use SI units and show the calculation or experimental reasoning.",
      steps: ["Write down the known quantities and the quantity required.", "Choose the correct equation and rearrange it before substitution if needed.", "Substitute values with units and show the arithmetic.", "Give the final answer with the correct SI unit.", "For practical questions, identify variables, describe a fair test and state how readings are taken."],
      sampleQuestion: "A force of 12 N moves an object 3 m in the direction of the force. Calculate the work done.",
      sampleAnswer: "Work done, W = force × distance\nW = F × d\nW = 12 N × 3 m\nW = 36 J",
      marks: [["Correct relationship W = F × d", "1 mark"], ["Correct substitution 12 × 3", "1 mark"], ["Correct answer 36", "1 mark"], ["Correct unit joule (J)", "1 mark"]],
      warning: "Work is measured in joules, not newtons. Always check that the unit matches the physical quantity."
    }
  },
  handwriting: "Some model responses should be presented as learner-written examination scripts, with clear working, line-by-line steps, labelled diagrams where appropriate and examiner annotations showing where each mark is earned. The typed version remains available for accessibility and searching."
};
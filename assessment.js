(() => {
  const QUIZ_KEY = "cbeQuizProgress";
  const grades = ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"];
  const bank = {
    Mathematics: [
      ["What is 7 × 8?",["54","56","64","48"],1,"Number","7 groups of 8 make 56."],
      ["What is 3/4 of 20?",["5","10","15","16"],2,"Fractions","20 ÷ 4 = 5, then 5 × 3 = 15."],
      ["Which number is prime?",["21","27","29","33"],2,"Number","29 has only 1 and 29 as positive factors."],
      ["What is 2.5 + 1.75?",["3.25","4.25","4.15","3.75"],1,"Decimals","2.50 + 1.75 = 4.25."],
      ["A rectangle is 8 cm long and 3 cm wide. What is its area?",["11 cm²","22 cm²","24 cm²","48 cm²"],2,"Measurement","Area = length × width = 24 cm²."],
      ["What is 15% of 200?",["15","20","30","35"],2,"Percentages","0.15 × 200 = 30."],
      ["If x + 9 = 17, what is x?",["6","7","8","9"],2,"Algebra","17 − 9 = 8."],
      ["How many degrees are in a right angle?",["45°","90°","180°","360°"],1,"Geometry","A right angle measures 90°."],
      ["What is the mean of 4, 6 and 8?",["5","6","7","8"],1,"Statistics","(4 + 6 + 8) ÷ 3 = 6."],
      ["A KSh 500 item is discounted by 10%. What is the discount?",["KSh 10","KSh 25","KSh 50","KSh 100"],2,"Percentages","10% of KSh 500 is KSh 50."]
    ],
    Science: [
      ["Which organ pumps blood around the body?",["Lungs","Heart","Kidney","Stomach"],1,"Human Body","The heart pumps blood through the circulatory system."],
      ["Which gas do green plants use during photosynthesis?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Plants","Plants use carbon dioxide during photosynthesis."],
      ["Which state of matter has a fixed volume but no fixed shape?",["Solid","Liquid","Gas","Plasma"],1,"Matter","A liquid keeps its volume but takes the shape of its container."],
      ["What force pulls objects towards Earth?",["Friction","Magnetism","Gravity","Upthrust"],2,"Forces","Gravity attracts objects towards Earth."],
      ["Which part of a plant absorbs most water from the soil?",["Flower","Leaf","Root","Fruit"],2,"Plants","Roots absorb water and mineral salts from the soil."],
      ["Which simple machine is commonly used to draw water from a well?",["Pulley","Wedge","Screw","Wheelbarrow"],0,"Machines","A pulley changes the direction of the pulling force."],
      ["Which material is a good electrical conductor?",["Rubber","Copper","Plastic","Wood"],1,"Electricity","Copper allows electric current to flow easily."],
      ["What happens to most substances when they are heated?",["They always shrink","They expand","They disappear","They become magnetic"],1,"Heat","Most substances expand when heated."],
      ["Which planet is closest to the Sun?",["Earth","Mars","Venus","Mercury"],3,"Space","Mercury is the innermost planet."],
      ["Which method separates sand from water?",["Filtration","Evaporation only","Magnetism","Mixing"],0,"Separation","Filtration retains insoluble sand while water passes through."]
    ],
    "Integrated Science": [
      ["Which instrument measures temperature?",["Barometer","Thermometer","Ammeter","Balance"],1,"Measurement","A thermometer measures temperature."],
      ["Which process changes a liquid into a gas?",["Freezing","Condensation","Evaporation","Melting"],2,"Matter","Evaporation changes liquid into vapour."],
      ["What is the main source of energy for most life on Earth?",["The Moon","The Sun","Soil","Wind only"],1,"Energy","Sunlight drives photosynthesis and supports most food chains."],
      ["Which blood cells help fight disease-causing organisms?",["Red blood cells","White blood cells","Platelets","Plasma only"],1,"Health","White blood cells help defend the body against infection."],
      ["Which component is needed to complete a simple electric circuit?",["An unconnected wire","A source of electrical energy","Only a switch","Only a bulb"],1,"Electricity","A circuit needs a source and a complete conducting path."],
      ["Which method can make drinking water safer from many microorganisms?",["Boiling","Adding soil","Leaving it uncovered","Mixing with oil"],0,"Health","Boiling kills many disease-causing microorganisms."],
      ["Which gas is released by green plants during photosynthesis?",["Carbon dioxide","Oxygen","Methane","Nitrogen"],1,"Plants","Oxygen is released as a product of photosynthesis."],
      ["Which is a renewable source of energy?",["Coal","Petroleum","Solar energy","Natural gas"],2,"Energy","Solar energy is naturally replenished."],
      ["What is the function of a fuse in an electrical circuit?",["Increase voltage","Protect the circuit from excessive current","Store water","Produce light"],1,"Electricity","A fuse breaks the circuit when current becomes too high."],
      ["Which practice helps prevent soil erosion?",["Planting vegetation","Removing all plants","Overgrazing","Leaving soil bare"],0,"Environment","Plant roots help hold soil together and reduce erosion."]
    ],
    English: [
      ["Choose the correctly spelled word.",["Beautifull","Beautiful","Beutiful","Beautifull"],1,"Spelling","The correct spelling is beautiful."],
      ["What is the opposite of 'ancient'?",["Old","Modern","Historic","Past"],1,"Vocabulary","Modern means relating to the present or recent times."],
      ["Which word is a verb in: 'The learners read quietly'?",["learners","read","quietly","the"],1,"Grammar","Read is the action word."],
      ["Choose the plural of 'child'.",["Childs","Childes","Children","Childrens"],2,"Grammar","The irregular plural of child is children."],
      ["Which punctuation mark ends a direct question?",["Full stop","Comma","Question mark","Colon"],2,"Punctuation","A question mark ends a direct question."],
      ["Which word is closest in meaning to 'rapid'?",["Slow","Fast","Weak","Late"],1,"Vocabulary","Rapid means very fast or quick."],
      ["Complete: 'She ___ to school every day.'",["go","goes","going","gone"],1,"Grammar","With 'she' in the simple present, the verb is 'goes'."],
      ["Which is a noun?",["Quickly","Honest","Teacher","Run"],2,"Grammar","Teacher names a person and is a noun."],
      ["What is the main purpose of a title in a passage?",["Hide the topic","Give an idea of the content","Add punctuation","Replace the conclusion"],1,"Comprehension","A title usually gives readers an idea of the text."],
      ["Which sentence is in the past tense?",["They play football.","They are playing football.","They played football.","They will play football."],2,"Grammar","Played is the past-tense form."]
    ],
    "CBC Skills": [
      ["CBC learning mainly emphasizes:",["Competencies and skills","Memorisation only","Copying notes only","Avoiding practical work"],0,"Competencies","CBC focuses on developing competencies through meaningful learning."],
      ["A rubric is mainly used to:",["Decorate a book","Assess work using criteria","Replace all teaching","Record attendance only"],1,"Assessment","A rubric describes criteria and performance levels."],
      ["Which is an example of collaboration?",["Working alone","Working with others towards a shared goal","Ignoring group members","Avoiding discussion"],1,"Collaboration","Collaboration involves working with others towards a shared goal."],
      ["Critical thinking involves:",["Accepting every claim","Examining evidence and reasoning","Guessing only","Copying another answer"],1,"Critical Thinking","Critical thinking examines evidence, assumptions and reasoning."],
      ["Which activity best demonstrates creativity?",["Producing an original solution","Copying exactly","Refusing alternatives","Memorising only"],0,"Creativity","Creativity involves generating useful original ideas or solutions."],
      ["A learner portfolio is useful for:",["Showing evidence of learning","Replacing every lesson","Storing only fees","Avoiding assessment"],0,"Assessment","A portfolio collects evidence showing learning over time."],
      ["Which action demonstrates problem solving?",["Identifying a problem and testing solutions","Ignoring the problem","Blaming others","Stopping immediately"],0,"Problem Solving","Problem solving involves understanding a problem and testing solutions."],
      ["Self-assessment means:",["A teacher marks another learner","A learner reflects on their own work","A parent writes every answer","No assessment"],1,"Assessment","Self-assessment is a learner's reflection on performance."],
      ["Why are practical activities important?",["They connect knowledge with action","They remove thinking","They prevent collaboration","They are only entertainment"],0,"Practical Learning","Practical activities help learners apply concepts and develop skills."],
      ["Which habit supports lifelong learning?",["Curiosity and reflection","Avoiding questions","Rejecting feedback","Never revising"],0,"Lifelong Learning","Curiosity, reflection and feedback support continued learning."]
    ]
  };

  const form = document.getElementById("quizForm");
  if (!form) return;

  if (typeof handleQuizSubmit === "function") {
    form.removeEventListener("submit", handleQuizSubmit);
  }

  const learner = document.getElementById("quizLearnerInput");
  const grade = document.getElementById("quizGradeInput");
  const subject = document.getElementById("quizSubjectInput");
  const length = document.getElementById("quizLengthInput");
  const mode = document.getElementById("quizModeInput");
  const startButton = document.getElementById("startQuizButton");
  const submitButton = document.getElementById("submitQuizButton");
  const clearButton = document.getElementById("clearQuizButton");
  const clearProgressButton = document.getElementById("clearQuizProgressButton");
  const instructions = document.getElementById("quizInstructions");
  const timer = document.getElementById("quizTimer");
  const questionsBox = document.getElementById("quizQuestions");
  const resultBox = document.getElementById("quizResultPanel");
  const status = document.getElementById("quizStatus");
  const progressBox = document.getElementById("progressReport");

  // Populate the assessment Grade dropdown with Grade 1–12.
  // Clear existing options first so this remains safe if the page already has options.
  grade.innerHTML = "";
  grades.forEach((g) => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    grade.appendChild(option);
  });
  grade.value = grade.querySelector('option[value="Grade 7"]') ? "Grade 7" : grades[0];

  // Keep the selected grade visible and usable whenever the learner changes it.
  grade.addEventListener("change", () => {
    if (instructions) {
      instructions.textContent = grade.value + " " + subject.value + " selected. Click Start / Restart Quiz.";
    }
  });
  if (subject) {
    subject.addEventListener("change", () => {
      if (instructions) {
        instructions.textContent = grade.value + " " + subject.value + " selected. Click Start / Restart Quiz.";
      }
    });
  }

  let active = [];
  let startedAt = 0;
  let timerId = null;
  let submitted = false;

  function escapeHtml(value) {
    return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
  }

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(QUIZ_KEY) || "[]"); } catch { return []; }
  }

  function saveAttempt(attempt) {
    const attempts = readProgress();
    attempts.unshift(attempt);
    localStorage.setItem(QUIZ_KEY, JSON.stringify(attempts.slice(0, 100)));
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i]; copy[i] = copy[j]; copy[j] = temp;
    }
    return copy;
  }

  function renderProgress() {
    const attempts = readProgress();
    if (!attempts.length) {
      progressBox.innerHTML = "<div class=\"empty-state\">No quiz attempts yet. Start a quiz to generate a learner progress report.</div>";
      return;
    }

    const groups = {};
    attempts.forEach((a) => {
      const key = a.learner || "Learner";
      if (!groups[key]) groups[key] = [];
      groups[key].push(a);
    });

    progressBox.innerHTML = Object.keys(groups).map((name) => {
      const list = groups[name];
      const average = Math.round(list.reduce((sum, a) => sum + Number(a.score || 0), 0) / list.length);
      const best = Math.max.apply(null, list.map((a) => Number(a.score || 0)));
      const latest = list[0];
      const subjectMap = {};
      list.forEach((a) => {
        if (!subjectMap[a.subject]) subjectMap[a.subject] = [];
        subjectMap[a.subject].push(Number(a.score || 0));
      });

      const subjectHtml = Object.keys(subjectMap).map((sub) => {
        const scores = subjectMap[sub];
        const avg = Math.round(scores.reduce((x,y) => x + y, 0) / scores.length);
        return "<div class=\"progress-subject\"><span>" + escapeHtml(sub) + "</span><strong>" + avg + "%</strong><span class=\"progress-meter\"><i style=\"width:" + avg + "%\"></i></span></div>";
      }).join("");

      return "<article class=\"learner-progress-card\">" +
        "<div class=\"learner-progress-header\"><div><strong>" + escapeHtml(name) + "</strong><span>" +
        list.length + " quiz attempt" + (list.length === 1 ? "" : "s") + " | Latest: " + escapeHtml(latest.grade || "") + " " + escapeHtml(latest.subject || "") +
        "</span></div><div class=\"progress-score\">" + average + "%<small>average</small></div></div>" +
        "<div class=\"progress-stats\"><div><strong>" + best + "%</strong><span>Best Score</span></div><div><strong>" + list.length +
        "</strong><span>Quizzes</span></div><div><strong>" + latest.score + "%</strong><span>Latest</span></div></div>" +
        "<div class=\"progress-subject-list\">" + subjectHtml + "</div>" +
        "<div class=\"progress-meter large\"><span style=\"width:" + average + "%\"></span></div>" +
        "</article>";
    }).join("");
  }

  function updateTimer() {
    if (!startedAt) {
      timer.textContent = "Time: 00:00";
      return;
    }
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");
    timer.textContent = "Time: " + mm + ":" + ss + (mode.value === "assessment" ? " — assessment mode (10 min)" : " — practice mode");
    if (mode.value === "assessment" && elapsed >= 600 && !submitted) {
      markQuiz(true);
    }
  }

  function startQuiz() {
    if (!learner.value.trim()) {
      status.textContent = "Enter the learner name before starting.";
      learner.focus();
      return;
    }

    const selectedBank = bank[subject.value] || bank["CBC Skills"];
    active = shuffle(selectedBank).slice(0, Math.min(Number(length.value || 10), selectedBank.length));
    startedAt = Date.now();
    submitted = false;
    clearInterval(timerId);

    questionsBox.innerHTML = "";
    active.forEach((item, index) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-question";
      const legend = document.createElement("legend");
      legend.textContent = (index + 1) + ". " + item[0];
      fieldset.appendChild(legend);

      item[1].forEach((optionText, optionIndex) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "quizQuestion" + index;
        input.value = String(optionIndex);
        input.required = true;
        const span = document.createElement("span");
        span.textContent = optionText;
        label.appendChild(input);
        label.appendChild(span);
        fieldset.appendChild(label);
      });
      questionsBox.appendChild(fieldset);
    });

    submitButton.disabled = false;
    resultBox.classList.add("hidden-section");
    resultBox.innerHTML = "";
    instructions.innerHTML = "<strong>" + escapeHtml(grade.value + " " + subject.value) + "</strong> — " + active.length + " randomized questions.";
    status.textContent = "Quiz started. Answer every question and submit when ready.";
    updateTimer();
    if (mode.value === "assessment") timerId = setInterval(updateTimer, 1000);
    questionsBox.scrollIntoView({behavior:"smooth", block:"start"});
  }

  function markQuiz(autoSubmit) {
    if (!active.length || submitted) return;

    const answers = new FormData(form);
    let answered = 0;
    let correct = 0;
    const results = [];

    active.forEach((item, index) => {
      const raw = answers.get("quizQuestion" + index);
      const selected = raw === null ? null : Number(raw);
      if (selected !== null) answered++;
      const right = selected === item[2];
      if (right) correct++;
      results.push({
        question: item[0],
        selected: selected,
        correctAnswer: item[2],
        isCorrect: right,
        topic: item[3],
        explanation: item[4]
      });
    });

    const total = active.length;
    const score = Math.round((correct / total) * 100);
    const attempt = {
      id: "quiz-" + Date.now(),
      learner: learner.value.trim(),
      grade: grade.value,
      subject: subject.value,
      mode: mode.value,
      total: total,
      answered: answered,
      correct: correct,
      score: score,
      durationSeconds: Math.floor((Date.now() - startedAt) / 1000),
      results: results,
      createdAt: new Date().toISOString(),
      remark: score >= 80 ? "Excellent progress" : score >= 60 ? "Good progress — keep practising" : "Needs guided revision"
    };

    submitted = true;
    clearInterval(timerId);
    saveAttempt(attempt);

    if (typeof postToBackend === "function" && typeof API_ENDPOINTS !== "undefined") {
      postToBackend(API_ENDPOINTS.quizzes, attempt).catch(() => {});
    }

    status.textContent = autoSubmit
      ? "Time ended. " + attempt.learner + " scored " + score + "%."
      : attempt.learner + " scored " + score + "%. " + attempt.remark + ".";

    const missed = results.filter((r) => !r.isCorrect);
    let review = "";
    if (missed.length) {
      review = "<div class=\"quiz-review\"><h4>Review incorrect answers</h4>" +
        missed.map((item) => {
          const index = results.indexOf(item);
          const q = active[index];
          const yourAnswer = item.selected === null ? "Not answered" : q[1][item.selected];
          return "<article><strong>" + escapeHtml(item.question) + "</strong>" +
            "<span>Your answer: " + escapeHtml(yourAnswer) + "</span>" +
            "<span>Correct answer: " + escapeHtml(q[1][item.correctAnswer]) + "</span>" +
            "<p>" + escapeHtml(item.explanation) + "</p></article>";
        }).join("") + "</div>";
    } else {
      review = "<p>Excellent — all questions were answered correctly.</p>";
    }

    resultBox.classList.remove("hidden-section");
    resultBox.innerHTML =
      "<div class=\"quiz-result-summary\"><div><strong>" + score + "%</strong><span>Score</span></div>" +
      "<div><strong>" + correct + "/" + total + "</strong><span>Correct</span></div>" +
      "<div><strong>" + answered + "/" + total + "</strong><span>Answered</span></div>" +
      "<div><strong>" + Math.floor(attempt.durationSeconds / 60) + "m " + (attempt.durationSeconds % 60) + "s</strong><span>Time</span></div></div>" +
      "<h3>" + escapeHtml(attempt.remark) + "</h3>" + review;

    renderProgress();
    if (typeof showToast === "function") showToast("Quiz marked and learner progress updated.");
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    markQuiz(false);
  });

  startButton.addEventListener("click", startQuiz);
  clearButton.addEventListener("click", function() {
    form.querySelectorAll('input[type="radio"]').forEach((input) => { input.checked = false; });
    status.textContent = "Answers cleared.";
  });

  clearProgressButton.addEventListener("click", function() {
    if (!window.confirm("Clear all quiz progress stored in this browser?")) return;
    localStorage.removeItem(QUIZ_KEY);
    renderProgress();
    status.textContent = "Quiz progress cleared.";
  });

  renderProgress();
  window.CBENexusQuiz = { startQuiz: startQuiz, markQuiz: markQuiz, renderProgress: renderProgress };
})();
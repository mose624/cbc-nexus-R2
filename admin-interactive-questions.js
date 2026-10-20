(function () {
  "use strict";
  const $ = (id) => document.getElementById(id);
  const form = $("adminInteractiveQuestionForm");
  if (!form) return;
  const status = $("adminInteractiveQuestionStatus");
  const list = $("adminInteractiveQuestionList");
  const submit = $("adminInteractiveQuestionSubmit");
  const api = "/api/admin/interactive-questions";
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  function setStatus(message, bad) {
    status.textContent = message || "";
    status.style.borderColor = bad ? "#efaaaa" : "";
    status.style.color = bad ? "#9f1d1d" : "";
  }
  async function request(url, options) {
    const response = await fetch(url, Object.assign({credentials:"same-origin", cache:"no-store"}, options || {}));
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) throw new Error(data.error || "The question request failed.");
    return data;
  }
  const gradeSubjects = {
    lower:["Mathematics","English Activities","Kiswahili","Environmental Activities","Creative Activities","Christian Religious Education","Islamic Religious Education","Hindu Religious Education"],
    upper:["Mathematics","English","Kiswahili","Science & Technology","Social Studies","Agriculture","Creative Arts","Christian Religious Education","Islamic Religious Education","Hindu Religious Education","Arabic","French","German","Mandarin","Indigenous Language"],
    junior:["English","Kiswahili","Mathematics","Integrated Science","Health Education","Pre-Technical Studies","Social Studies","Religious Education","Business Studies","Agriculture","Life Skills Education","Sports & Physical Education","Visual Arts","Performing Arts","Home Science","Computer Science","French","German","Mandarin","Arabic","Kenyan Sign Language","Indigenous Languages"],
    senior:["English","Kiswahili","Core Mathematics","Essential Mathematics","Community Service Learning","Biology","Chemistry","Physics","General Science","Agriculture","Computer Studies","Home Science","Aviation","Building Construction","Electricity","Metalwork","Power Mechanics","Wood Technology","Media Technology","Marine & Fisheries Technology","Business Studies","History & Citizenship","Geography","Literature in English","Indigenous Languages","Fasihi ya Kiswahili","Sign Language","Arabic","French","German","Mandarin Chinese","Christian Religious Education","Islamic Religious Education","Hindu Religious Education","Sports & Recreation","Music & Dance","Theatre & Film","Fine Arts"]
  };
  function populateSubjects(preferred) {
    const grade = Number(String($("iqAdminGrade").value).replace(/[^0-9]/g, ""));
    const options = grade <= 3 ? gradeSubjects.lower : grade <= 6 ? gradeSubjects.upper : grade <= 9 ? gradeSubjects.junior : gradeSubjects.senior;
    const subject = $("iqAdminSubject");
    subject.replaceChildren();
    const first = document.createElement("option");
    first.value = "";
    first.textContent = "Choose subject / learning area";
    subject.appendChild(first);
    options.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      subject.appendChild(option);
    });
    subject.value = options.includes(preferred) ? preferred : "";
  }
  $("iqAdminGrade").addEventListener("change", () => populateSubjects(""));
  populateSubjects("");

  async function loadQuestions() {
    if (!list) return;
    list.replaceChildren();
    try {
      const data = await request(api);
      const questions = Array.isArray(data.questions) ? data.questions : [];
      if (!questions.length) {
        const empty = document.createElement("div");
        empty.className = "iq-admin-empty";
        empty.textContent = "No questions have been published yet. Use the form above to add the first one.";
        list.appendChild(empty);
        return;
      }
      questions.forEach((q) => {
        const card = document.createElement("article");
        card.className = "iq-admin-question";
        const info = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = q.question;
        const meta = document.createElement("span");
        meta.className = "iq-admin-meta";
        meta.textContent = [q.grade, q.subject, q.strand || "General topic", "Correct: " + ["A","B","C","D"][Number(q.correctIndex)]].join(" · ");
        info.append(title, meta);
        const del = document.createElement("button");
        del.type = "button";
        del.className = "iq-admin-delete";
        del.textContent = "Delete";
        del.addEventListener("click", async () => {
          if (!window.confirm("Delete this published question? It will no longer appear in new quizzes.")) return;
          del.disabled = true;
          try {
            await request(api + "/" + encodeURIComponent(q.id), {method:"DELETE"});
            setStatus("Question deleted.");
            await loadQuestions();
            window.dispatchEvent(new Event("cbe:interactive-questions-updated"));
          } catch (error) {
            setStatus(error.message || "Could not delete the question.", true);
            del.disabled = false;
          }
        });
        card.append(info, del);
        list.appendChild(card);
      });
    } catch (error) {
      list.innerHTML = "";
      const empty = document.createElement("div");
      empty.className = "iq-admin-empty";
      empty.textContent = error.message || "Could not load questions. Sign in to the admin dashboard and refresh.";
      list.appendChild(empty);
    }
  }
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const payload = {
      grade: $("iqAdminGrade").value,
      subject: $("iqAdminSubject").value.trim(),
      strand: $("iqAdminTopic").value.trim() || "All Topics",
      question: $("iqAdminQuestion").value.trim(),
      options: ["A","B","C","D"].map((letter) => $("iqAdminOption" + letter).value.trim()),
      correctIndex: Number($("iqAdminCorrect").value),
      explanation: $("iqAdminExplanation").value.trim()
    };
    if (!payload.subject || !payload.question || payload.options.some((option) => !option)) {
      setStatus("Please complete the subject, question and all four answer options.", true);
      return;
    }
    submit.disabled = true;
    submit.textContent = "Publishing…";
    setStatus("Saving question to the shared question bank…");
    try {
      await request(api, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)});
      form.reset();
      $("iqAdminGrade").value = payload.grade;
      populateSubjects(payload.subject);
      $("iqAdminCorrect").value = "0";
      setStatus("Question published. It is now available to learners in the matching grade and subject.");
      await loadQuestions();
      window.dispatchEvent(new Event("cbe:interactive-questions-updated"));
    } catch (error) {
      setStatus(error.message || "Question could not be published.", true);
    } finally {
      submit.disabled = false;
      submit.textContent = "Publish question";
    }
  });
  // Bulk authoring for the main admin dashboard: grade, subject and topic are shared,
  // while each question has its own prompt, options, correct answer and explanation.
  const batchCount = $("iqAdminBulkCount");
  const generateBatch = $("iqAdminGenerateBatch");
  const batchEditor = $("iqAdminBatchEditor");
  const publishBatch = $("iqAdminPublishBatch");
  const batchStatus = $("iqAdminBatchStatus");
  function setBatchStatus(message, bad) {
    if (!batchStatus) return;
    batchStatus.textContent = message || "";
    batchStatus.style.color = bad ? "#9f1d1d" : "";
  }
  function generateBatchForms() {
    const count = Number.parseInt(batchCount.value, 10);
    if (!Number.isInteger(count) || count < 1 || count > 50) {
      setBatchStatus("Enter a number from 1 to 50.", true);
      batchCount.focus();
      return;
    }
    if (!$("iqAdminGrade").value || !$("iqAdminSubject").value) {
      setBatchStatus("Choose the grade and subject in the main form above first.", true);
      return;
    }
    batchEditor.replaceChildren();
    for (let i = 0; i < count; i++) {
      const card = document.createElement("fieldset");
      card.className = "iq-admin-batch-question";
      card.style.cssText = "border:1px solid #cbd5e1;border-radius:10px;padding:14px;margin:12px 0;background:#fff";
      card.innerHTML = `
        <legend style="font-weight:800;padding:0 6px">Question ${i + 1}</legend>
        <label style="display:block;margin:8px 0">Question<textarea data-bulk="question" required maxlength="20000" rows="3" style="display:block;width:100%;box-sizing:border-box"></textarea></label>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:10px">
          <label>Option A<input data-bulk="A" required maxlength="600" style="display:block;width:100%;box-sizing:border-box"></label>
          <label>Option B<input data-bulk="B" required maxlength="600" style="display:block;width:100%;box-sizing:border-box"></label>
          <label>Option C<input data-bulk="C" required maxlength="600" style="display:block;width:100%;box-sizing:border-box"></label>
          <label>Option D<input data-bulk="D" required maxlength="600" style="display:block;width:100%;box-sizing:border-box"></label>
          <label>Correct answer<select data-bulk="correct" style="display:block"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></label>
          <label>Explanation (optional)<input data-bulk="explanation" maxlength="2000" style="display:block;width:100%;box-sizing:border-box"></label>
        </div>`;
      batchEditor.appendChild(card);
    }
    batchEditor.hidden = false;
    publishBatch.hidden = false;
    setBatchStatus(count + " question forms created. Complete each one, then publish the batch.");
    batchEditor.scrollIntoView({behavior:"smooth", block:"start"});
  }
  if (generateBatch && batchEditor && publishBatch) {
    generateBatch.addEventListener("click", generateBatchForms);
    publishBatch.addEventListener("click", async () => {
      const grade = $("iqAdminGrade").value;
      const subject = $("iqAdminSubject").value.trim();
      const strand = $("iqAdminTopic").value.trim() || "All Topics";
      if (!grade || !subject) {
        setBatchStatus("Choose the grade and subject in the main form above.", true);
        return;
      }
      const cards = Array.from(batchEditor.querySelectorAll(".iq-admin-batch-question"));
      if (!cards.length) {
        setBatchStatus("Create question forms first.", true);
        return;
      }
      const payloads = [];
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const get = (key) => card.querySelector('[data-bulk="' + key + '"]').value.trim();
        const question = get("question");
        const options = ["A","B","C","D"].map(get);
        if (!question || options.some((option) => !option)) {
          setBatchStatus("Complete the question text and all four options for Question " + (i + 1) + ".", true);
          card.querySelector(":invalid")?.focus();
          return;
        }
        payloads.push({grade, subject, strand, question, options, correctIndex:Number(get("correct")), explanation:get("explanation")});
      }
      publishBatch.disabled = true;
      generateBatch.disabled = true;
      publishBatch.textContent = "Publishing batch…";
      setBatchStatus("Publishing " + payloads.length + " questions. Please keep this page open.");
      let published = 0;
      try {
        for (const payload of payloads) {
          await request(api, {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(payload)});
          published++;
        }
        batchEditor.replaceChildren();
        batchEditor.hidden = true;
        publishBatch.hidden = true;
        setBatchStatus("Successfully published all " + published + " questions. They are available to learners.");
        await loadQuestions();
        window.dispatchEvent(new Event("cbe:interactive-questions-updated"));
      } catch (error) {
        setBatchStatus(published + " of " + payloads.length + " questions were published before an error: " + (error.message || "request failed") + ". Do not republish the entire batch without checking the published question bank first.", true);
        await loadQuestions();
      } finally {
        publishBatch.disabled = false;
        generateBatch.disabled = false;
        publishBatch.textContent = "Publish all questions";
      }
    });
  }


  // File-based bulk importer: Excel/CSV, DOCX and text-based PDF. Publishing still
  // goes through the authenticated existing endpoint, preserving current storage and permissions.
  const importImages = $("iqBulkImageFiles");
  const analyzeImport = $("iqBulkAnalyze");
  const publishImport = $("iqBulkPublish");
  const downloadReport = $("iqBulkDownloadReport");
  const importStatus = $("iqBulkImportStatus");
  const importPreview = $("iqBulkImportPreview");
  let importRows = [];
  let importErrors = [];
  let importReportRows = [];
  const setImportStatus = (message, bad) => {
    const text = message || "";
    [importStatus, $("iqBulkPasteStatus")].filter(Boolean).forEach((node) => {
      node.textContent = text;
      node.style.color = bad ? "#9f1d1d" : "";
      node.style.display = text ? "block" : "";
      node.style.padding = text ? "10px" : "";
      node.style.marginTop = text ? "10px" : "";
      node.style.border = text ? "1px solid " + (bad ? "#efaaaa" : "#9ac7a8") : "";
      node.style.borderRadius = text ? "8px" : "";
      node.style.background = text ? (bad ? "#fff1f1" : "#f0fff5") : "";
    });
  };
  const norm = (v) => String(v == null ? "" : v).toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").replace(/\s+/g," ").trim();
  const headerKey = (v) => norm(v).replace(/[^a-z0-9]/g,"");
  function loadBrowserScript(src, globalName) {
    if (window[globalName]) return Promise.resolve(window[globalName]);
    return new Promise((resolve,reject) => {
      const existing = document.querySelector('script[data-iq-import-lib="' + globalName + '"]');
      const script = existing || document.createElement("script");
      script.src = src; script.async = true; script.dataset.iqImportLib = globalName;
      script.onload = () => window[globalName] ? resolve(window[globalName]) : reject(new Error("Could not load file reader library."));
      script.onerror = () => reject(new Error("Could not load file reader library. Check your internet connection and try again."));
      if (!existing) document.head.appendChild(script);
      else if (window[globalName]) resolve(window[globalName]);
    });
  }
  function first(row, aliases) {
    const map = {};
    Object.keys(row || {}).forEach(k => map[headerKey(k)] = row[k]);
    for (const alias of aliases) if (map[headerKey(alias)] != null && String(map[headerKey(alias)]).trim() !== "") return String(map[headerKey(alias)]).trim();
    return "";
  }
  function answerIndex(value) {
    const v = String(value || "").trim().toUpperCase();
    if (/^[ABCD]$/.test(v)) return "ABCD".indexOf(v);
    const labelled = v.match(/^([ABCD])(?:[.)\s:\-].*)?$/);
    if (labelled) return "ABCD".indexOf(labelled[1]);
    if (/^[1-4]$/.test(v)) return Number(v)-1;
    return -1;
  }
  function mapRow(row, index) {
    let grade = first(row, ["Grade","Class"]) || $("iqAdminGrade").value;
    const gradeMatch = String(grade).trim().match(/^grade\s*(1[0-2]|[1-9])$/i);
    if (gradeMatch) grade = "Grade " + Number(gradeMatch[1]);
    const subject = first(row, ["Subject","Learning Area","LearningArea"]) || $("iqAdminSubject").value;
    const strand = first(row, ["Topic","Strand","Sub-strand","Substrand"]) || $("iqAdminTopic").value || "All Topics";
    const question = first(row, ["Question","Question Text","Prompt","Stem"]);
    const options = [
      first(row, ["Option A","A","Choice A","Answer A"]),
      first(row, ["Option B","B","Choice B","Answer B"]),
      first(row, ["Option C","C","Choice C","Answer C"]),
      first(row, ["Option D","D","Choice D","Answer D"])
    ];
    const correctIndex = answerIndex(first(row, ["Correct Answer","CorrectAnswer","Answer Key","Correct Option","Answer"]));
    const explanation = first(row, ["Explanation","Rationale","Solution"]);
    const imageUrl = first(row, ["Image URL","ImageURL","Diagram URL","Image"]);
    
    const errors = [];
    if (!/^Grade (?:[1-9]|1[0-2])$/i.test(grade)) errors.push("Grade must be Grade 1–12");
    if (!subject) errors.push("Subject is missing");
    if (!question) errors.push("Question text is missing");
    if (question.length > 20000) errors.push("Question or passage exceeds 20,000 characters");
    if (options.some(x => !x)) errors.push("All four options (A–D) are required");
    if (options.some(x => x.length > 1500)) errors.push("An option exceeds 1,500 characters");
    if (correctIndex < 0) errors.push("Correct answer must be A, B, C, D or 1–4");
    if (explanation.length > 2000) errors.push("Explanation exceeds 2,000 characters");
    if (imageUrl && !/^https:\/\//i.test(imageUrl)) errors.push("Image URL must begin with https://");
    return {rowNumber:index+2, grade, subject, strand, question, options, correctIndex, explanation, imageUrl, imageData:"", imageAlt:question.slice(0,160), difficulty:first(row,["Difficulty","Level"]), errors};
  }
  function parseQuestionText(text) {
    // Preserve meaningful layout while normalizing common Word/Docs/Markdown paste artefacts.
    const normalized = String(text || "")
      .replace(/\r/g, "")
      .replace(/\u00a0/g, " ")
      .replace(/[‐‑‒–—]/g, "-")
      .replace(/^[ \t]*(?:[-*+]\s+)?(?=(?:\*\*|__)?(?:Question\s*)?\d{1,3}\s*[.)\]:])/gim, "")
      .replace(/\*\*(?=(?:Question\s*)?\d{1,3}\s*[.)\]:])/gi, "")
      .replace(/(?<=(?:Question\s*)?\d{1,3}\s*[.)\]:])\*\*/gi, "");

    const answerKey = new Map();
    const keyPatterns = [
      /^\s*\|\s*(\d{1,3})\s*\|\s*([ABCD])\s*(?:\||$)/gim,
      /^\s*(\d{1,3})\s*[.)]?\s*[-:|]?\s*(?:Answer\s*[:=]?\s*)?([ABCD])\s*$/gim
    ];
    keyPatterns.forEach(re => { let m; while ((m = re.exec(normalized)) !== null) answerKey.set(Number(m[1]), m[2].toUpperCase()); });

    // A question number must begin a line. This avoids mistaking ordinary numbers,
    // algebra steps, years and numbered calculations inside a sentence for new items.
    const starts = [...normalized.matchAll(/(?:^|\n)[ \t]*(?:Question\s*)?(\d{1,3})\s*[.)\]:]\s*/gi)];
    const candidates = [];
    for (let i = 0; i < starts.length; i++) {
      const startAt = starts[i].index + starts[i][0].length;
      const endAt = i + 1 < starts.length ? starts[i + 1].index : normalized.length;
      const block = normalized.slice(startAt, endAt).trim();
      // Only regard a numbered block as an MCQ if it contains recognizable option labels.
      const optionLabels = [...block.matchAll(/(?:^|\n|[ \t])(?:\*\*)?([ABCD])(?:\*\*)?[.)][ \t]+/gim)]
        .map(m => m[1].toUpperCase());
      if (block && ["A","B","C","D"].every(letter => optionLabels.includes(letter))) {
        candidates.push({ number: Number(starts[i][1]), startAt, endAt, block, sourceStart: starts[i].index });
      }
    }

    // Carry section labels and reading passages/contexts forward into related questions.
    // They are included in each affected stem so learners see the required context.
    const rows = [];
    let sharedContext = "";
    let lastSection = "";
    let lastNumber = null;
    const sectionPattern = /^\s*(?:SECTION\s+[A-Z0-9IVX]+|PART\s+[A-Z0-9IVX]+|READING\s+PASSAGE|PASSAGE|SOURCE\s+[A-Z0-9]+|COMPREHENSION|USE\s+THE\s+(?:PASSAGE|INFORMATION|GRAPH|DIAGRAM|TABLE|FIGURE)[\s\S]{0,100})\s*[:\-]?\s*$/i;
    for (let idx = 0; idx < candidates.length; idx++) {
      const item = candidates[idx];
      const priorBoundary = idx === 0 ? 0 : candidates[idx - 1].endAt;
      const interstitial = normalized.slice(priorBoundary, item.sourceStart).trim();
      if (interstitial) {
        const lines = interstitial.split("\n").map(s => s.trim()).filter(Boolean);
        const sectionLines = lines.filter(line => sectionPattern.test(line));
        if (sectionLines.length) {
          lastSection = sectionLines.join(" ");
          sharedContext = "";
        }
        const contextLines = lines.filter(line => !sectionPattern.test(line) &&
          !/^(?:Grade\s*:|Subject\s*:|Topic\s*:|Strand\s*:|Answer\s+Key\b|Answers?\s*:)/i.test(line) &&
          !/^\|?\s*\d{1,3}\s*\|\s*[ABCD]\s*\|?$/i.test(line));
        if (contextLines.length) {
          const candidateContext = contextLines.join("\n");
          // Keep passage/source/graph instructions, but do not carry a previous answer
          // or explanation into the next question.
          if (candidateContext.length <= 20000 && !/^(?:Correct answer|Explanation|Rationale|Solution)\s*:/i.test(candidateContext)) {
            sharedContext = candidateContext;
          }
        }
      }

      const block = item.block;
      const correctMatch = block.match(/(?:Correct\s+answer|Answer\s+key|Correct\s+option|Answer)\s*:\s*([ABCD1-4])\b/i);
      const keyedAnswer = answerKey.get(item.number) || "";
      const explanationMatch = block.match(/(?:Explanation|Rationale|Solution)\s*:\s*([\s\S]*?)(?=\n\s*(?:Question\s*)?\d{1,3}\s*[.)\]]\s*|$)/i);
      const optionRe = /(?:^|\n|[ \t])(?:\*\*)?([ABCD])(?:\*\*)?[.)][ \t]+/gim;
      const matches = [...block.matchAll(optionRe)];
      const answerPos = block.search(/(?:Correct\s+answer|Answer\s+key|Correct\s+option|Answer)\s*:/i);
      const explanationPos = block.search(/(?:Explanation|Rationale|Solution)\s*:/i);
      const ordered = matches.filter(m => (answerPos < 0 || m.index < answerPos) && (explanationPos < 0 || m.index < explanationPos));
      const firstOption = ordered.length ? ordered[0].index : -1;
      let stem = (firstOption >= 0 ? block.slice(0, firstOption) : "").trim();
      const optionValues = ["A","B","C","D"].map(letter => {
        const at = ordered.findIndex(m => m[1].toUpperCase() === letter);
        if (at < 0) return "";
        const m = ordered[at];
        const contentStart = m.index + m[0].length;
        let contentEnd = block.length;
        for (const next of ordered) if (next.index > m.index && next.index < contentEnd) contentEnd = next.index;
        [answerPos, explanationPos].filter(pos => pos >= 0).forEach(pos => { contentEnd = Math.min(contentEnd, pos); });
        // Keep maths, units, signs and line breaks readable rather than flattening all whitespace.
        return block.slice(contentStart, contentEnd).trim().replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n");
      });
      const sectionPrefix = lastSection ? lastSection + "\n" : "";
      const contextPrefix = sharedContext && !stem.includes(sharedContext) ? sharedContext + "\n\n" : "";
      stem = (sectionPrefix + contextPrefix + stem).trim();
      const row = {
        "Grade": (block.match(/Grade\s*(?:\/\s*)?[:\-]?\s*(1[0-2]|[1-9])\b/i) || [])[0] || $("iqAdminGrade").value,
        "Subject": (block.match(/Subject\s*:\s*([^\n]+)/i) || [])[1] || $("iqAdminSubject").value,
        "Topic": (block.match(/(?:Topic|Strand)\s*:\s*([^\n]+)/i) || [])[1] || $("iqAdminTopic").value || "All Topics",
        "Question": stem,
        "Option A": optionValues[0], "Option B": optionValues[1], "Option C": optionValues[2], "Option D": optionValues[3],
        "Correct Answer": correctMatch ? correctMatch[1].toUpperCase() : keyedAnswer,
        "Explanation": explanationMatch ? explanationMatch[1].trim() : "",
        "Image URL": (block.match(/(?:Image|Diagram)\s+URL\s*:\s*(https:\/\/\S+)/i) || [])[1] || ""
      };
      rows.push(row);
      lastNumber = item.number;
    }
    return rows;
  }
  async function readImportFile(file) {
    const ext = file.name.split(".").pop().toLowerCase();
    if (["xlsx","xls","csv"].includes(ext)) {
      const XLSX = await loadBrowserScript("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js","XLSX");
      const data = await file.arrayBuffer();
      const workbook = XLSX.read(data,{type:"array"});
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      return XLSX.utils.sheet_to_json(sheet,{defval:"",raw:false}).map((row,i)=>mapRow(row,i));
    }
    if (ext === "docx") {
      const mammoth = await loadBrowserScript("https://cdnjs.cloudflare.com/ajax/libs/mammoth/1.9.0/mammoth.browser.min.js","mammoth");
      const arrayBuffer = await file.arrayBuffer();
      const textResult = await mammoth.extractRawText({arrayBuffer});
      const rows = parseQuestionText(textResult.value).map((row,i)=>mapRow(row,i));
      // Mammoth can read embedded Word images in the browser. Convert them to data URLs,
      // then attach each diagram to the closest preceding numbered question block where possible.
      // The existing API stores one diagram per question; extra images for a question are ignored.
      const htmlResult = await mammoth.convertToHtml({arrayBuffer},{
        convertImage: mammoth.images.imgElement(async image => {
          const base64 = await image.read("base64");
          const dataUrl = "data:" + image.contentType + ";base64," + base64;
          return {src: dataUrl, alt: "Embedded Word diagram"};
        })
      });
      const doc = new DOMParser().parseFromString(htmlResult.value || "", "text/html");
      const nodes = Array.from(doc.body.querySelectorAll("p, li, div, td, th, img"));
      let currentIndex = -1;
      let nextFallbackIndex = 0;
      for (const node of nodes) {
        if (node.tagName !== "IMG") {
          const text = String(node.textContent || "").trim();
          const start = text.match(/^(?:Question\s*)?(\d{1,3})\s*[.)\]:]\s*/i);
          if (start) {
            const numbered = Number(start[1]);
            const matchIndex = rows.findIndex(r => Number(r.rowNumber) === numbered + 1);
            if (matchIndex >= 0) currentIndex = matchIndex;
            else if (nextFallbackIndex < rows.length) currentIndex = nextFallbackIndex++;
          }
          continue;
        }
        let targetIndex = currentIndex;
        if (targetIndex < 0 && nextFallbackIndex < rows.length) targetIndex = nextFallbackIndex++;
        if (targetIndex < 0 || !rows[targetIndex] || rows[targetIndex].imageData) continue;
        const dataUrl = node.getAttribute("src") || "";
        if (!/^data:image\/(?:png|jpeg|gif|webp|svg\+xml);base64,/i.test(dataUrl)) continue;
        if (dataUrl.length > 1400000) {
          rows[targetIndex].errors.push("Embedded Word diagram is over 1 MB; upload a resized image separately");
          continue;
        }
        rows[targetIndex].imageData = dataUrl;
        rows[targetIndex].imageAlt = String(node.getAttribute("alt") || "Diagram for " + rows[targetIndex].question).slice(0,160);
      }
      return rows;
    }
    if (ext === "pdf") {
      const pdfjsLib = await loadBrowserScript("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js","pdfjsLib");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
      const pdf = await pdfjsLib.getDocument({data:await file.arrayBuffer()}).promise;
      let text = "";
      for (let p=1;p<=pdf.numPages;p++) {
        const page = await pdf.getPage(p);
        const content = await page.getTextContent();
        text += "\n" + content.items.map(x=>x.str).join("\n") + "\n";
      }
      return parseQuestionText(text).map((row,i)=>mapRow(row,i));
    }
    throw new Error("Unsupported file type. Upload Excel, CSV, Word (.docx) or PDF.");
  }
  function renderImportPreview(rows) {
    importPreview.replaceChildren();
    const table = document.createElement("table");
    table.style.cssText="border-collapse:collapse;width:100%;font-size:.86rem;background:#fff";
    const headers=["Row","Status","Grade","Subject","Question","Correct answer","Issue"];
    const thead=document.createElement("thead"), tr=document.createElement("tr");
    headers.forEach(h=>{const th=document.createElement("th");th.textContent=h;th.style.cssText="border:1px solid #d5e0e8;padding:8px;text-align:left;background:#eaf2f8";tr.appendChild(th);});
    thead.appendChild(tr); table.appendChild(thead);
    const tbody=document.createElement("tbody");
    rows.slice(0,250).forEach(r=>{
      const tr=document.createElement("tr");
      const vals=[r.rowNumber,r.errors.length?"Needs fixing":"Ready",r.grade,r.subject,r.question,r.correctIndex>=0?"ABCD"[r.correctIndex]:"",r.errors.join("; ")];
      vals.forEach((v,i)=>{const td=document.createElement("td");td.textContent=String(v||"");td.style.cssText="border:1px solid #d5e0e8;padding:7px;vertical-align:top;max-width:320px;overflow-wrap:anywhere";tr.appendChild(td);});
      tbody.appendChild(tr);
    });
    table.appendChild(tbody); importPreview.appendChild(table);
    if(rows.length>250){const note=document.createElement("p");note.textContent="Preview limited to first 250 rows. All rows will be validated.";importPreview.appendChild(note);}
  }
  // Quick paste importer: lets administrators paste a whole numbered MCQ bank without creating a file.
  const importFile = $("iqBulkImportFile");
  if (importFile && !document.getElementById("iqBulkPasteText")) {
    const pastePanel = document.createElement("section");
    pastePanel.id = "iqBulkPastePanel";
    pastePanel.style.cssText = "border:2px solid #16803c;border-radius:12px;padding:16px;margin:16px 0;background:#f0fff5";
    pastePanel.innerHTML = `
      <h3 style="margin:0 0 8px;color:#14532d">Quick Paste — Add Many Questions at Once</h3>
      <p style="margin:0 0 10px">Paste numbered multiple-choice questions below. No Excel or Word file needed. Use the format shown in the example, then preview and publish.</p>
      <label for="iqBulkPasteText" style="display:block;font-weight:700;margin-bottom:6px">Paste your questions</label>
      <textarea id="iqBulkPasteText" rows="12" placeholder="1. Which instrument measures electric current?\nA. Voltmeter\nB. Ammeter\nC. Thermometer\nD. Barometer\nCorrect answer: B\nExplanation: An ammeter measures current.\n\n2. ...\nA. ...\nB. ...\nC. ...\nD. ...\nCorrect answer: A" style="display:block;width:100%;box-sizing:border-box;padding:12px;border:1px solid #a7cdb3;border-radius:8px;font:inherit"></textarea>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
        <button type="button" id="iqBulkPastePreview" style="background:#16803c;color:#fff;border:0;border-radius:8px;padding:10px 16px;font-weight:800;cursor:pointer">Preview pasted questions</button>
        <button type="button" id="iqBulkPastePublish" disabled style="background:#0b5ed7;color:#fff;border:0;border-radius:8px;padding:10px 16px;font-weight:800;cursor:pointer;opacity:.55">Publish previewed questions</button>
        <button type="button" id="iqBulkPasteClear" style="background:#e5e7eb;color:#111827;border:0;border-radius:8px;padding:10px 16px;font-weight:700;cursor:pointer">Clear text</button>
      </div>
      <p id="iqBulkPasteHelp" style="margin:8px 0 0;font-size:.9rem">Tip: add “Grade: 10”, “Subject: English”, and “Topic: Reading” above a question if you want to override the defaults. Otherwise choose grade and subject in the main form first.</p>
      <p id="iqBulkPasteStatus" role="status" aria-live="polite" style="display:none"></p>`;
    const anchor = importFile.closest("section, .admin-card, .iq-admin-import, div") || importFile.parentElement;
    if (anchor && anchor.parentElement) anchor.parentElement.insertBefore(pastePanel, anchor);
    else form.parentElement.insertBefore(pastePanel, form.nextSibling);
    $("iqBulkPastePublish").addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const pastePublish = $("iqBulkPastePublish");
      const ready = importRows.filter(r => !r.errors.length);
      if (!ready.length) {
        setImportStatus("Preview the pasted questions first. Only questions marked Ready can be published.", true);
        return;
      }
      if (pastePublish.dataset.publishing === "1") return;
      pastePublish.dataset.publishing = "1";
      pastePublish.disabled = true;
      pastePublish.textContent = "Publishing…";
      let published = 0;
      const failed = [];
      try {
        setImportStatus("Publishing " + ready.length + " valid questions… keep this page open. 0 / " + ready.length);
        for (const r of ready) {
          try {
            await request(api, {
              method: "POST",
              headers: {"Content-Type":"application/json"},
              body: JSON.stringify({
                grade:r.grade, subject:r.subject, strand:r.strand||"All Topics",
                question:r.question, options:r.options, correctIndex:r.correctIndex,
                explanation:r.explanation||"", imageUrl:r.imageUrl||"",
                imageData:r.imageData||"", imageAlt:r.imageAlt||r.question.slice(0,160)
              })
            });
            published++;
          } catch (e) {
            failed.push({"Source row":r.rowNumber,"Grade":r.grade,"Subject":r.subject,"Question":r.question,"Status":"Failed to publish","Errors":e.message||"Save failed"});
          }
          setImportStatus("Publishing questions… " + (published + failed.length) + " / " + ready.length + " processed.");
        }
        const skipped = importReportRows.filter(r => r.Errors);
        importReportRows = [...skipped, ...failed];
        downloadReport.disabled = importReportRows.length === 0;
        await loadQuestions();
        window.dispatchEvent(new Event("cbe:interactive-questions-updated"));
        setImportStatus("Finished: " + published + " questions published; " + (importErrors.length + failed.length) + " skipped or failed." + (failed.length ? " Download the report to review failures." : ""), failed.length > 0);
        pastePublish.textContent = published ? "Published " + published + " question" + (published===1?"":"s") : "Nothing published — review errors";
      } catch (e) {
        setImportStatus("Publishing stopped: " + (e.message || "Unexpected error"), true);
        pastePublish.textContent = "Retry publishing";
      } finally {
        delete pastePublish.dataset.publishing;
        pastePublish.disabled = !importRows.some(r => !r.errors.length);
        if (pastePublish.disabled) pastePublish.style.opacity = ".55";
        else pastePublish.style.opacity = "1";
      }
    });
    $("iqBulkPasteClear").addEventListener("click", () => {
      $("iqBulkPasteText").value = "";
      const pastePublish = $("iqBulkPastePublish");
      if (pastePublish) { pastePublish.disabled = true; pastePublish.style.opacity = ".55"; pastePublish.textContent = "Publish previewed questions"; }
      $("iqBulkImportPreview").replaceChildren();
      setImportStatus("");
      $("iqBulkPasteText").focus();
    });
    $("iqBulkPastePreview").addEventListener("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      setImportStatus("Preview button clicked. Checking pasted questions…");
      const raw = $("iqBulkPasteText").value.trim();
      if (!raw) { setImportStatus("Paste your numbered questions first.", true); return; }
      const btn = $("iqBulkPastePreview");
      btn.disabled = true;
      setImportStatus("Reading and validating pasted questions…");
      try {
        // Accept defaults supplied above the first numbered question, or use the main form.
        const firstQuestionAt = raw.search(/(?:^|\n)\s*(?:Question\s*)?\d{1,3}\s*[.)]\s*/i);
        const headerText = firstQuestionAt > 0 ? raw.slice(0, firstQuestionAt) : "";
        const headerGrade = (headerText.match(/Grade\s*:\s*(Grade\s*)?(1[0-2]|[1-9])\b/i) || []);
        const headerSubject = (headerText.match(/Subject\s*:\s*([^\n]+)/i) || [])[1];
        const headerTopic = (headerText.match(/(?:Topic|Strand)\s*:\s*([^\n]+)/i) || [])[1];
        const parsedRows = parseQuestionText(raw);
        if (!parsedRows.length) throw new Error("No questions detected. Number each question (1., 2., 3.) and include options A–D and Correct answer: A/B/C/D.");
        const globalGrade = headerGrade.length ? "Grade " + Number(headerGrade[2]) : $("iqAdminGrade").value;
        const globalSubject = headerSubject ? headerSubject.trim() : $("iqAdminSubject").value;
        const globalTopic = headerTopic ? headerTopic.trim() : $("iqAdminTopic").value;
        if (!globalGrade || !globalSubject) throw new Error("Choose the grade and subject in the main form, or put Grade: 10 and Subject: English above your pasted questions.");
        let rows = parsedRows.map((row,i) => {
          if (headerGrade.length && (!row.Grade || row.Grade === $("iqAdminGrade").value)) row.Grade = globalGrade;
          if (headerSubject && (!row.Subject || row.Subject === $("iqAdminSubject").value)) row.Subject = globalSubject;
          if (headerTopic && (!row.Topic || row.Topic === $("iqAdminTopic").value)) row.Topic = globalTopic;
          return mapRow(row,i);
        });
        if (!rows.length) throw new Error("No questions detected. Number each question (1., 2., 3.) and include options A–D and Correct answer: A/B/C/D.");
        const seen = new Set();
        for (const row of rows) {
          const key = norm(row.grade)+"|"+norm(row.subject)+"|"+norm(row.question);
          if (!row.errors.length && seen.has(key)) row.errors.push("Duplicate question within pasted text");
          seen.add(key);
        }
        let existing;
        try { const data = await request(api); existing = Array.isArray(data.questions) ? data.questions : []; }
        catch (e) { throw new Error("Could not check existing questions. Sign in to the admin dashboard and try again. " + e.message); }
        rows.forEach(row => {
          if (!row.errors.length && existing.some(q => norm(q.grade)===norm(row.grade) && norm(q.subject)===norm(row.subject) && norm(q.question)===norm(row.question))) row.errors.push("Already exists in the published question bank");
        });
        importRows = rows;
        importErrors = rows.filter(r => r.errors.length);
        importReportRows = rows.map(r => ({"Source row":r.rowNumber,"Grade":r.grade,"Subject":r.subject,"Question":r.question,"Status":r.errors.length?"Skipped":"Ready","Errors":r.errors.join("; ")}));
        renderImportPreview(rows);
        const ready = rows.length - importErrors.length;
        setImportStatus("Pasted "+rows.length+" questions: "+ready+" ready to publish, "+importErrors.length+" needing correction or skipped. Review the preview below.");
        publishImport.disabled = ready === 0;
        downloadReport.disabled = importErrors.length === 0;
        const pastePublish = $("iqBulkPastePublish");
        if (pastePublish) {
          pastePublish.disabled = ready === 0;
          pastePublish.style.opacity = ready === 0 ? ".55" : "1";
          pastePublish.textContent = ready ? "Publish " + ready + " ready question" + (ready === 1 ? "" : "s") : "No valid questions to publish";
        }
        // Keep the standard publish path, duplicate checks, report and authenticated API.
      } catch (e) {
        const pastePublish = $("iqBulkPastePublish");
        if (pastePublish) { pastePublish.disabled = true; pastePublish.style.opacity = ".55"; }
        setImportStatus(e.message || "Could not parse pasted questions.", true);
      }
      finally { btn.disabled = false; }
    });
  }

  function csvEscape(v){const s=String(v==null?"":v);return /[",\n\r]/.test(s)?'"'+s.replace(/"/g,'""')+'"':s;}
  function downloadCsv(filename, rows, headers) {
    const csv=[headers.map(csvEscape).join(","),...rows.map(r=>headers.map(h=>csvEscape(r[h])).join(","))].join("\r\n");
    const blob=new Blob(["\ufeff"+csv],{type:"text/csv;charset=utf-8"});
    const url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
  }
  if ($("iqDownloadTemplate")) $("iqDownloadTemplate").addEventListener("click", async()=>{
    try {
      const XLSX=await loadBrowserScript("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js","XLSX");
      const headers=["Grade","Subject","Topic","Question","Option A","Option B","Option C","Option D","Correct Answer","Explanation","Difficulty","Image URL"];
      const example=["Grade 10","Physics","Electricity","Which instrument measures electric current?","Voltmeter","Ammeter","Thermometer","Barometer","B","An ammeter is connected in series to measure current.","Easy"];
      const ws=XLSX.utils.aoa_to_sheet([headers,example]); ws["!cols"]=headers.map(()=>({wch:22})); ws["!cols"][3]={wch:55};ws["!cols"][9]={wch:55};
      const wb=XLSX.utils.book_new();XLSX.utils.book_append_sheet(wb,ws,"Questions");XLSX.writeFile(wb,"CBE-Nexus-Bulk-Question-Template.xlsx");
    } catch(e) {
      downloadCsv("CBE-Nexus-Bulk-Question-Template.csv",[{"Grade":"Grade 10","Subject":"Physics","Topic":"Electricity","Question":"Which instrument measures electric current?","Option A":"Voltmeter","Option B":"Ammeter","Option C":"Thermometer","Option D":"Barometer","Correct Answer":"B","Explanation":"An ammeter is connected in series to measure current." ,"Difficulty":"Easy"}],["Grade","Subject","Topic","Question","Option A","Option B","Option C","Option D","Correct Answer","Explanation","Difficulty"]);
      setImportStatus("Excel template library could not load, so a compatible CSV template was downloaded instead.");
    }
  });
  if (analyzeImport) analyzeImport.addEventListener("click", async()=>{
    const file=importFile.files && importFile.files[0];
    if(!file){setImportStatus("Choose an Excel, Word or PDF file first.",true);return;}
    if(file.size>15*1024*1024){setImportStatus("For reliable browser processing, keep each file under 15 MB.",true);return;}
    analyzeImport.disabled=true; publishImport.disabled=true; setImportStatus("Reading and validating file…"); importPreview.replaceChildren();
    try {
      const rows=await readImportFile(file);
      if(!rows.length) throw new Error("No questions were detected. Check the template or the required question format.");
      const imageFiles=Array.from(importImages && importImages.files || []);
      for(const imageFile of imageFiles){
        if(!/^image\/(png|jpeg|gif|webp|svg\+xml)$/i.test(imageFile.type)) throw new Error("Image attachments must be PNG, JPG, GIF, WEBP or SVG files.");
        if(imageFile.size>1024*1024) throw new Error("Each image must be 1 MB or smaller. Resize large diagrams before importing.");
      }
      for(const imageFile of imageFiles){
        const stem=imageFile.name.replace(/\.[^.]+$/,"").toLowerCase().replace(/^(?:question|q|image|img)[-_ ]*/,"");
        const number=Number(stem);
        if(!Number.isInteger(number)||number<1) continue;
        const target=rows.find(r=>r.rowNumber===number) || rows[number-1];
        if(target) target.imageData=await new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve(String(reader.result||""));reader.onerror=()=>reject(new Error("Could not read image "+imageFile.name));reader.readAsDataURL(imageFile);});
      }
      const unmatchedImages=imageFiles.filter(f=>!Number.isInteger(Number(f.name.replace(/\.[^.]+$/,"").toLowerCase().replace(/^(?:question|q|image|img)[-_ ]*/,""))));
      if(unmatchedImages.length) setImportStatus("Image files must be named with their question row/number (for example 2.png or q1.jpg). Unmatched filenames will be ignored.");
      const seen=new Set();
      for(const row of rows){
        const key=norm(row.grade)+"|"+norm(row.subject)+"|"+norm(row.question);
        if(!row.errors.length && seen.has(key)) row.errors.push("Duplicate question within this file");
        if(key.endsWith("||") || !row.question) { if(!row.errors.includes("Question text is missing")) row.errors.push("Question text is missing"); }
        seen.add(key);
      }
      let existing=[];
      try { const data=await request(api); existing=Array.isArray(data.questions)?data.questions:[]; }
      catch(e){throw new Error("Could not check existing questions. Sign in to the admin dashboard and try again. "+e.message);}
      rows.forEach(row=>{
        if(!row.errors.length && existing.some(q=>norm(q.grade)===norm(row.grade)&&norm(q.subject)===norm(row.subject)&&norm(q.question)===norm(row.question))) row.errors.push("Already exists in the published question bank");
      });
      importRows=rows; importErrors=rows.filter(r=>r.errors.length);
      importReportRows=rows.map(r=>({"Source row":r.rowNumber,"Grade":r.grade,"Subject":r.subject,"Question":r.question,"Status":r.errors.length?"Skipped":"Ready","Errors":r.errors.join("; ")}));
      renderImportPreview(rows);
      const ready=rows.length-importErrors.length;
      setImportStatus("Read "+rows.length+" questions: "+ready+" ready to publish, "+importErrors.length+" needing correction or skipped. Preview is limited to 250 rows.");
      publishImport.disabled=ready===0; downloadReport.disabled=importErrors.length===0;
      publishImport.dataset.autoPending = (ready>0 && $("iqBulkAutoPublish") && $("iqBulkAutoPublish").checked) ? "1" : "";
    } catch(e) {setImportStatus(e.message||"Could not read this file.",true);}
    finally {
      analyzeImport.disabled=false;
      if (publishImport.dataset.autoPending === "1") {
        delete publishImport.dataset.autoPending;
        publishImport.click();
      }
    }
  });
  if (publishImport) publishImport.addEventListener("click",async()=>{
    const ready=importRows.filter(r=>!r.errors.length);
    if(!ready.length){setImportStatus("There are no valid questions to publish.",true);return;}
    publishImport.disabled=true; analyzeImport.disabled=true;
    let published=0, failed=[];
    setImportStatus("Publishing valid questions… keep this page open. 0 / "+ready.length);
    for(const r of ready){
      try {
        await request(api,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({grade:r.grade,subject:r.subject,strand:r.strand||"All Topics",question:r.question,options:r.options,correctIndex:r.correctIndex,explanation:r.explanation||"",imageUrl:r.imageUrl||"",imageData:r.imageData||"",imageAlt:r.imageAlt||r.question.slice(0,160)})});
        published++;
      } catch(e) { failed.push({"Source row":r.rowNumber,"Grade":r.grade,"Subject":r.subject,"Question":r.question,"Status":"Failed to publish","Errors":e.message||"Save failed"}); }
      if(published%5===0 || published+failed.length===ready.length) setImportStatus("Publishing valid questions… "+(published+failed.length)+" / "+ready.length+" processed.");
    }
    const combined=[...importReportRows.filter(r=>r.Errors),...failed];
    importReportRows=combined;
    downloadReport.disabled=combined.length===0;
    await loadQuestions();
    window.dispatchEvent(new Event("cbe:interactive-questions-updated"));
    setImportStatus("Finished: "+published+" published; "+(importErrors.length+failed.length)+" skipped or failed. Download the report to review issues.",failed.length>0);
    analyzeImport.disabled=false;
  });
  if(downloadReport) downloadReport.addEventListener("click",()=>{
    downloadCsv("CBE-Nexus-Question-Import-Report.csv",importReportRows,["Source row","Grade","Subject","Question","Status","Errors"]);
  });

  window.loadAdminInteractiveQuestions = loadQuestions;
  const watchAdmin = () => {
    if (document.body.classList.contains("admin-unlocked")) loadQuestions();
  };
  const observer = new MutationObserver(watchAdmin);
  observer.observe(document.body, {attributes:true, attributeFilter:["class"]});
  const adminSection = $("admin");
  if (adminSection) observer.observe(adminSection, {attributes:true, attributeFilter:["class"]});
  request("/api/admin/me").then((data) => { if (data.authenticated) loadQuestions(); }).catch(() => {});
})();

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
        <label style="display:block;margin:8px 0">Question<textarea data-bulk="question" required maxlength="2500" rows="3" style="display:block;width:100%;box-sizing:border-box"></textarea></label>
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

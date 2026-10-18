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

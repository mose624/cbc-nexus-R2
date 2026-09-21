/* CBE Nexus grade -> subject accordion.
   Works on desktop and mobile without changing the header/footer. */
(() => {
  const lowerPrimary = [
    "Kiswahili Activities", "Literacy", "English Activities", "Mathematics Activities",
    "Environmental Activities", "Hygiene and Nutrition Activities", "Creative Activities",
    "Movement Activities", "Christian Religious Education", "Hindu Religious Education",
    "Islamic Religious Education"
  ];
  const upperPrimary = [
    "Agriculture", "Arabic", "Creative Arts", "Christian Religious Education", "English",
    "French", "German", "Hindu Religious Education", "Indigenous Language",
    "Islamic Religious Education", "Kiswahili", "Mandarin", "Mathematics",
    "Science and Technology", "Social Studies"
  ];
  const junior = [
    "Agriculture", "Arabic", "Creative Arts", "Christian Religious Education", "English",
    "French", "German", "Hindu Religious Education", "Indigenous Language",
    "Integrated Science", "Islamic Religious Education", "Kiswahili", "Mandarin",
    "Mathematics", "Pre-Technical Studies", "Social Studies"
  ];
  const senior = [
    "English", "Kiswahili", "Kenya Sign Language", "Community Service Learning",
    "Physical Education", "ICT Skills", "Mathematics", "Advanced Mathematics", "Biology",
    "Chemistry", "Physics", "General Science", "Agriculture", "Computer Studies",
    "Home Science", "Drawing and Design", "Aviation Technology", "Building and Construction",
    "Electrical Technology", "Metal Technology", "Power Mechanics", "Wood Technology",
    "Media Technology", "Marine and Fisheries Technology", "Advanced English",
    "Literature in English", "Indigenous Language", "Kiswahili Kipevu", "Fasihi ya Kiswahili",
    "Sign Language", "Arabic", "French", "German", "Mandarin Chinese",
    "History and Citizenship", "Geography", "Christian Religious Education",
    "Islamic Religious Education", "Hindu Religious Education", "Business Studies",
    "Sports and Recreation", "Music and Dance", "Theatre and Film", "Fine Arts"
  ];

  const subjectsFor = (grade) => {
    const n = Number(String(grade).match(/\d+/)?.[0] || 0);
    if (n >= 1 && n <= 3) return lowerPrimary;
    if (n >= 4 && n <= 6) return upperPrimary;
    if (n >= 7 && n <= 9) return junior;
    if (n >= 10 && n <= 12) return senior;
    return [];
  };

  function normaliseGrade(text) {
    const match = String(text || "").match(/Grade\s*\d+/i);
    return match ? `Grade ${match[0].match(/\d+/)[0]}` : String(text || "").trim();
  }

  function ensureSubjects(card, grade) {
    let menu = card.querySelector(".subject-menu");
    if (!menu) {
      menu = document.createElement("div");
      menu.className = "subject-menu";
      card.appendChild(menu);
    }
    if (!menu.children.length) {
      subjectsFor(grade).forEach((subject) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "subject-chip";
        button.textContent = subject;
        button.dataset.grade = grade;
        button.dataset.subject = subject;
        menu.appendChild(button);
      });
    }
    return menu;
  }

  function openGrade(card, grade) {
    const menu = ensureSubjects(card, grade);
    const wasOpen = card.classList.contains("open");
    document.querySelectorAll("#gradeList .grade-card.open").forEach((other) => {
      if (other !== card) other.classList.remove("open");
    });
    card.classList.toggle("open", !wasOpen);
    menu.hidden = wasOpen;
    if (!wasOpen) menu.hidden = false;
  }

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("#gradeList .grade-toggle, #gradeList [data-grade-toggle]");
    if (!toggle) return;
    const card = toggle.closest(".grade-card");
    if (!card) return;
    event.preventDefault();
    event.stopPropagation();
    const grade = normaliseGrade(toggle.dataset.grade || toggle.textContent);
    openGrade(card, grade);
  }, true);

  document.addEventListener("click", (event) => {
    const subject = event.target.closest("#gradeList .subject-chip");
    if (!subject) return;
    const grade = subject.dataset.grade || normaliseGrade(subject.closest(".grade-card")?.querySelector(".grade-toggle")?.textContent);
    const value = subject.dataset.subject || subject.textContent.trim();
    const gradeFilter = document.querySelector("#gradeFilter");
    const subjectFilter = document.querySelector("#subjectFilter");
    if (gradeFilter) {
      gradeFilter.value = grade;
      gradeFilter.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (subjectFilter) {
      subjectFilter.value = value;
      subjectFilter.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
})();

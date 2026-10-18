(function () {
  "use strict";
  window.CBENexusAdminQuestions = Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [];
  window.CBENexusAdminQuestionsReady = fetch("/api/interactive-questions", {credentials:"same-origin", cache:"no-store"})
    .then((response) => response.ok ? response.json() : Promise.reject(new Error("Question bank unavailable")))
    .then((data) => {
      window.CBENexusAdminQuestions = Array.isArray(data.questions) ? data.questions : [];
      return window.CBENexusAdminQuestions;
    })
    .catch(() => {
      window.CBENexusAdminQuestions = [];
      return [];
    });
  window.addEventListener("cbe:interactive-questions-updated", () => {
    window.CBENexusAdminQuestionsReady = fetch("/api/interactive-questions", {credentials:"same-origin", cache:"no-store"})
      .then((response) => response.ok ? response.json() : {questions:[]})
      .then((data) => (window.CBENexusAdminQuestions = Array.isArray(data.questions) ? data.questions : []))
      .catch(() => (window.CBENexusAdminQuestions = []));
  });
})();

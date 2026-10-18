(function () {
  "use strict";
  async function loadPublishedQuestions() {
    window.CBENexusAdminQuestionsLoadError = null;
    try {
      const response = await fetch("/api/interactive-questions", {
        credentials: "same-origin",
        cache: "no-store"
      });
      if (!response.ok) throw new Error("HTTP " + response.status);
      const data = await response.json();
      if (!data || !Array.isArray(data.questions)) throw new Error("Invalid question-bank response");
      window.CBENexusAdminQuestions = data.questions.filter((item) => item && item.published !== false);
      return window.CBENexusAdminQuestions;
    } catch (error) {
      window.CBENexusAdminQuestions = [];
      window.CBENexusAdminQuestionsLoadError = error;
      console.error("CBE Nexus published question bank could not be loaded:", error);
      return [];
    }
  }

  window.CBENexusAdminQuestions = Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [];
  window.CBENexusAdminQuestionsReady = loadPublishedQuestions();
  window.addEventListener("cbe:interactive-questions-updated", () => {
    window.CBENexusAdminQuestionsReady = loadPublishedQuestions();
  });
})();
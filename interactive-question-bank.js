(function () {
  "use strict";
  async function loadPublishedQuestions() {
    window.CBENexusAdminQuestionsLoadError = null;
    let lastError = null;
    // Retry transient Render/Supabase delays so the learner dashboard does not
    // incorrectly settle on an empty question bank after one failed request.
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const response = await fetch("/api/interactive-questions", {
          credentials: "same-origin",
          cache: "no-store",
          headers: { "Accept": "application/json" }
        });
        if (!response.ok) throw new Error("HTTP " + response.status);
        const data = await response.json();
        if (!data || !Array.isArray(data.questions)) throw new Error("Invalid question-bank response");
        window.CBENexusAdminQuestions = data.questions.filter((item) =>
          item && item.published !== false && String(item.question || "").trim() &&
          Array.isArray(item.options) && item.options.length >= 4
        );
        window.CBENexusAdminQuestionsLoadError = null;
        window.dispatchEvent(new CustomEvent("cbe:interactive-questions-loaded", {
          detail: { count: window.CBENexusAdminQuestions.length }
        }));
        return window.CBENexusAdminQuestions;
      } catch (error) {
        lastError = error;
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
      }
    }
    window.CBENexusAdminQuestionsLoadError = lastError;
    console.error("CBE Nexus published question bank could not be loaded after retries:", lastError);
    return Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [];
  }

  window.CBENexusAdminQuestions = Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [];
  window.CBENexusAdminQuestionsReady = loadPublishedQuestions();
  window.addEventListener("cbe:interactive-questions-updated", () => {
    window.CBENexusAdminQuestionsReady = loadPublishedQuestions();
  });
})();
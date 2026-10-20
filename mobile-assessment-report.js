/* Mobile-safe assessment PDF delivery for CBE Nexus.
   Desktop keeps the normal PDF download. On mobile, open a PDF viewer tab
   during the user gesture, then route the generated Blob URL to that tab. */
(() => {
  const isMobile = () =>
    /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
    (navigator.maxTouchPoints > 1 && /Macintosh/i.test(navigator.userAgent));

  let reportWindow = null;

  document.addEventListener("click", (event) => {
    const button = event.target && event.target.closest
      ? event.target.closest("#generateAssessmentReportButton")
      : null;
    if (!button || !isMobile()) return;

    // Open synchronously from the user's tap so mobile browsers are less
    // likely to block the PDF viewer as a popup.
    reportWindow = window.open("about:blank", "_blank");
    if (reportWindow) {
      try {
        reportWindow.document.title = "CBE Nexus Assessment Report";
        reportWindow.document.body.innerHTML =
          '<p style="font:16px Arial,sans-serif;padding:24px">Generating your assessment report PDF…</p>';
      } catch (_) {}
    }
  }, true);

  document.addEventListener("click", (event) => {
    const link = event.target && event.target.closest
      ? event.target.closest("#quizResultPanel a[download]")
      : null;
    if (!link || !isMobile() || !link.href || !link.href.startsWith("blob:")) return;

    if (reportWindow && !reportWindow.closed) {
      event.preventDefault();
      reportWindow.location.href = link.href;
      reportWindow = null;
    }
    // If the browser blocked the new tab, leave the normal download behavior
    // intact as a fallback.
  }, true);

  const style = document.createElement("style");
  style.textContent = `
    #quizResultPanel #generateAssessmentReportButton {
      display: inline-flex !important;
      visibility: visible !important;
      opacity: 1 !important;
      max-width: 100%;
      white-space: normal;
      overflow-wrap: anywhere;
      touch-action: manipulation;
    }
    @media (max-width: 640px) {
      #quizResultPanel #generateAssessmentReportButton {
        width: 100% !important;
        min-height: 52px;
        padding: 14px 12px !important;
        margin: 16px 0 !important;
        font-size: 16px !important;
        line-height: 1.35;
      }
      #quizResultPanel a[download] {
        display: flex !important;
        width: 100%;
        min-height: 48px;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        white-space: normal;
        overflow-wrap: anywhere;
      }
    }
  `;
  document.head.appendChild(style);
})();

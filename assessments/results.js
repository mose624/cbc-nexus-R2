// assessments/results.js
(async function(){
  const params = new URLSearchParams(location.search);
  const attemptId = params.get('attempt_id');
  const panel = document.getElementById('resultPanel');
  if (!attemptId) { panel.innerHTML = '<p class="muted">No attempt specified.</p>'; return }

  // Fetch attempt and answers
  try {
    const supUrl = window.SUPABASE?.url;
    if (!supUrl) {
      // local sample
      const res = await fetch('assessments/sample-attempts.json');
      const arr = await res.json();
      const att = arr.find(a=>a.id===attemptId);
      if (!att) { panel.innerHTML = '<p class="muted">Attempt not found.</p>'; return }
      render(att);
      return;
    }
    const endpoint = `${window.SUPABASE.url.replace(/\/+$/,'')}/rest/v1/attempts?id=eq.${encodeURIComponent(attemptId)}&select=*`;
    const r = await fetch(endpoint, { headers:{ apikey: window.SUPABASE.key, Authorization: `Bearer ${window.SUPABASE.key}` } });
    const arr = await r.json(); if (!arr[0]) { panel.innerHTML = '<p class="muted">Attempt not found.</p>'; return }
    const attempt = arr[0];
    // fetch submitted answers
    const answersEp = `${window.SUPABASE.url.replace(/\/+$/,'')}/rest/v1/submitted_answers?attempt_id=eq.${attemptId}&select=*`;
    const ar2 = await fetch(answersEp, { headers:{ apikey: window.SUPABASE.key, Authorization: `Bearer ${window.SUPABASE.key}` } });
    const answers = await ar2.json();
    attempt.answers = answers;
    render(attempt);
  } catch (e){ console.error(e); panel.innerHTML = '<p class="muted">Failed to load results.</p>' }

  function render(attempt){
    panel.innerHTML = `<h2>Results — ${escape(attempt.assessment_id)}</h2><p>Score: ${attempt.score || 0}/${attempt.total_marks || 'N/A'} (${attempt.percentage || 0}%)</p>`;
    if (attempt.answers && attempt.answers.length){
      const list = document.createElement('div');
      attempt.answers.forEach(ans => {
        const box = document.createElement('div'); box.className='card';
        box.innerHTML = `<div><strong>Question ${ans.question_id}</strong></div><div>Your answer: ${escape(ans.answer_text || ans.selected_option_ids || '')}</div><div>Awarded marks: ${ans.awarded_marks ?? 0}</div><div>Model answer: ${escape(ans.model_answer || '')}</div>`;
        list.appendChild(box);
      });
      panel.appendChild(list);
    }
  }
  function escape(s){ if (!s) return ''; return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])) }
})();

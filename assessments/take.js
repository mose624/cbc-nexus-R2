// assessments/take.js
// Renders assessment, enforces time limits, collects answers and submits to server function for marking.

(async function(){
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const container = document.getElementById('assessment');
  const notice = document.getElementById('notice');
  if (!id) { container.innerHTML = '<p class="muted">No assessment specified.</p>'; return }

  // Fetch assessment and questions
  async function fetchAssessment(){
    if (!window.__ASSESS_API) return null;
    try {
      if (!window.SUPABASE || !window.SUPABASE.url) {
        // local sample data
        const res = await fetch('assessments/sample-assessments.json');
        const all = await res.json();
        return all.find(a=>a.id===id);
      }
      const endpoint = `${window.SUPABASE.url.replace(/\/+$/,'')}/rest/v1/assessments?id=eq.${encodeURIComponent(id)}&select=*`;
      const resp = await fetch(endpoint, { headers: { apikey: window.SUPABASE.key, Authorization: `Bearer ${window.SUPABASE.key}` } });
      const arr = await resp.json();
      const assessment = arr[0];
      // fetch questions
      const qep = `${window.SUPABASE.url.replace(/\/+$/,'')}/rest/v1/assessment_questions?assessment_id=eq.${encodeURIComponent(id)}&order=order.asc`;
      const qres = await fetch(qep, { headers:{ apikey: window.SUPABASE.key, Authorization: `Bearer ${window.SUPABASE.key}` } });
      const questions = await qres.json();
      // fetch options
      for (const q of questions){
        const op = `${window.SUPABASE.url.replace(/\/+$/,'')}/rest/v1/question_options?question_id=eq.${q.id}&order=order.asc`;
        const ores = await fetch(op, { headers:{ apikey: window.SUPABASE.key, Authorization: `Bearer ${window.SUPABASE.key}` } });
        q.options = await ores.json();
      }
      assessment.questions = questions;
      return assessment;
    } catch (e) { console.error(e); return null }
  }

  const assessment = await fetchAssessment();
  if (!assessment) { container.innerHTML = '<p class="muted">Assessment not found.</p>'; return }

  // Render UI
  container.innerHTML = `
    <div class="card">
      <h2>${escape(assessment.title)}</h2>
      <div class="meta">Grade ${escape(assessment.grade)} • ${escape(assessment.subject)}</div>
      <p>${escape(assessment.description||'')}</p>
    </div>
    <form id="attemptForm"></form>
  `;

  const form = document.getElementById('attemptForm');

  // Timer
  let remaining = null; let timerInterval = null;
  if (assessment.time_limit_minutes && Number(assessment.time_limit_minutes) > 0){
    remaining = Number(assessment.time_limit_minutes) * 60;
    const timerEl = document.createElement('div'); timerEl.id='timer'; timerEl.className='notice'; timerEl.textContent = `Time remaining: ${formatTime(remaining)}`;
    container.prepend(timerEl);
    timerInterval = setInterval(()=>{
      remaining--; timerEl.textContent = `Time remaining: ${formatTime(remaining)}`;
      if (remaining <= 0){ clearInterval(timerInterval); submitAttempt(); }
    },1000);
  }

  // Render questions
  assessment.questions.forEach((q, idx)=>{
    const qEl = document.createElement('div'); qEl.className='question';
    qEl.innerHTML = `<div><strong>Q${idx+1} (${q.marks} marks)</strong> ${q.prompt}</div>`;
    const ansDiv = document.createElement('div'); ansDiv.className='q-options';
    if (q.question_type === 'mcq'){
      q.options.forEach(opt=>{
        const idOpt = `q_${q.id}_opt_${opt.id}`;
        const r = document.createElement('label'); r.innerHTML = `<input type="radio" name="q_${q.id}" value="${opt.id}"> ${escape(opt.label)}`;
        ansDiv.appendChild(r);
      });
    } else if (q.question_type === 'tf'){
      ['True','False'].forEach(val=>{ const r = document.createElement('label'); r.innerHTML = `<input type="radio" name="q_${q.id}" value="${val}"> ${val}`; ansDiv.appendChild(r); });
    } else if (q.question_type === 'short' || q.question_type === 'written'){
      const ta = document.createElement('textarea'); ta.name = `q_${q.id}`; ta.rows=4; ta.style.width='100%'; ansDiv.appendChild(ta);
    }
    qEl.appendChild(ansDiv);
    form.appendChild(qEl);
  });

  const submitBtn = document.createElement('button'); submitBtn.textContent='Submit'; submitBtn.type='button'; submitBtn.addEventListener('click', submitAttempt);
  form.appendChild(submitBtn);

  function escape(s){ if (!s) return ''; return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])) }
  function formatTime(s){ const m=Math.floor(s/60), sec=s%60; return `${m}:${String(sec).padStart(2,'0')}` }

  async function submitAttempt(){
    // Collect answers
    const formData = new FormData(form);
    const answers = assessment.questions.map(q=>{
      const key = `q_${q.id}`;
      const val = formData.get(key);
      if (val == null) return { question_id: q.id, answer: null };
      return { question_id: q.id, answer: val };
    });

    // Create attempt row via Supabase REST (anon) or call Edge Function to create and mark
    // We'll call Edge Function /functions/submit-attempt to securely validate and mark. This endpoint must exist in your Supabase project.

    try {
      notice.textContent = 'Submitting...';
      const token = localStorage.getItem('supabase_token') || ''; // if using auth, get JWT
      const resp = await fetch('/functions/submit-attempt', {
        method: 'POST', headers: { 'Content-Type':'application/json', 'Authorization': token ? `Bearer ${token}` : '' },
        body: JSON.stringify({ assessment_id: assessment.id, answers })
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data?.message || 'Submit failed');
      // Redirect to results page with attempt id
      window.location.href = `assessments/result.html?attempt_id=${encodeURIComponent(data.attempt_id)}`;
    } catch (e) {
      console.error(e);
      notice.textContent = 'Submission failed: ' + (e.message || e);
    }
  }

})();

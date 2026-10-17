// Learning Hub client logic
// - Loads lesson list from Supabase if configured, otherwise local lessons.json
// - Renders filters and lesson pages

(async function(){
  const LESSONS_JSON = 'learning/lessons.json';

  // Utility: fetch local JSON
  async function fetchLocal() {
    const res = await fetch(LESSONS_JSON);
    if (!res.ok) throw new Error('Local lessons.json not found');
    return res.json();
  }

  // Attempt to use Supabase if supabase-config.js exposes SUPABASE (window.SUPABASE)
  async function fetchFromSupabase() {
    if (!window.SUPABASE || !window.SUPABASE.url || !window.SUPABASE.key) return null;
    try {
      const url = window.SUPABASE.url.replace(/\/+$/,'');
      const key = window.SUPABASE.key;
      const endpoint = `${url}/rest/v1/learning_lessons?select=*`;
      const resp = await fetch(endpoint, { headers: { apikey: key, Authorization: `Bearer ${key}` } });
      if (!resp.ok) throw new Error('Supabase fetch failed');
      const data = await resp.json();
      // Normalize data shape if needed
      return data.map(normalizeLessonFromDB);
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to local data', e);
      return null;
    }
  }

  function normalizeLessonFromDB(row){
    // If fields were stored as JSON strings, parse them.
    const parse = v => { try { return (typeof v === 'string') ? JSON.parse(v) : v } catch(e){ return v } }
    return {
      id: row.id || String(row.created_at) ,
      grade: row.grade || '',
      subject: row.subject || '',
      topic: row.topic || '',
      subtopic: row.subtopic || '',
      objectives: parse(row.objectives) || [],
      key_concepts: parse(row.key_concepts) || [],
      notes: row.notes || '',
      worked_examples: parse(row.worked_examples) || [],
      activities: parse(row.activities) || [],
      applications: row.applications || '',
      illustrations: parse(row.illustrations) || [],
      summary: row.summary || '',
      revision_questions: parse(row.revision_questions) || [],
      resources: parse(row.resources) || [],
      verified: !!row.verified
    }
  }

  // Load lessons (try Supabase then local)
  let lessons = [];
  const fromSupabase = await fetchFromSupabase();
  if (fromSupabase && fromSupabase.length) {
    lessons = fromSupabase;
    console.info('Loaded lessons from Supabase');
  } else {
    try {
      lessons = await fetchLocal();
      console.info('Loaded lessons from local lessons.json');
    } catch (e) {
      console.error('Failed to load lessons', e);
      lessons = [];
    }
  }

  // Expose for debugging
  window.__LESSONS = lessons;

  // Elements
  const listEl = document.getElementById('lessonsList');
  const gradeSel = document.getElementById('filterGrade');
  const subjectSel = document.getElementById('filterSubject');
  const topicSel = document.getElementById('filterTopic');
  const typeSel = document.getElementById('filterType');
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('clearFilters');
  const preview = document.getElementById('lessonPreview');

  function unique(values){ return [...new Set(values.filter(Boolean))].sort(); }

  function populateFilters(){
    const grades = unique(lessons.map(l => l.grade));
    const subjects = unique(lessons.map(l => l.subject));
    const topics = unique(lessons.map(l => l.topic));

    grades.forEach(g => gradeSel.appendChild(new Option(g,g)));
    subjects.forEach(s => subjectSel.appendChild(new Option(s,s)));
    topics.forEach(t => topicSel.appendChild(new Option(t,t)));
  }

  function matchesFilter(lesson){
    const grade = gradeSel.value;
    const subject = subjectSel.value;
    const topic = topicSel.value;
    const type = typeSel.value;
    const q = (searchInput.value || '').toLowerCase().trim();

    if (grade && lesson.grade !== grade) return false;
    if (subject && lesson.subject !== subject) return false;
    if (topic && lesson.topic !== topic) return false;
    if (type) {
      if (type === 'notes' && !lesson.notes) return false;
      if (type === 'examples' && (!lesson.worked_examples || !lesson.worked_examples.length)) return false;
      if (type === 'activities' && (!lesson.activities || !lesson.activities.length)) return false;
    }

    if (q) {
      const hay = [lesson.grade, lesson.subject, lesson.topic, lesson.subtopic, lesson.notes, lesson.summary, ...(lesson.key_concepts||[]), ...(lesson.objectives||[])].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function renderLessons(){
    listEl.innerHTML = '';
    const filtered = lessons.filter(matchesFilter);
    if (!filtered.length) {
      listEl.innerHTML = '<p class="muted">No lessons found for those filters.</p>';
      return;
    }
    filtered.forEach(l => {
      const card = document.createElement('article');
      card.className = 'lesson-card';
      card.innerHTML = `
        <h3>${escapeHtml(l.topic || 'Untitled')}</h3>
        <div class="lesson-meta">Grade ${escapeHtml(l.grade||'')} • ${escapeHtml(l.subject||'')}</div>
        <div class="tags">
          <span class="tag">${escapeHtml(l.subtopic||'')}</span>
          ${l.verified ? '<span class="tag">Reviewed</span>' : '<span class="tag" title="Unverified sample content">Sample</span>'}
        </div>
        <div class="lesson-desc">${escapeHtml( (l.summary || '').slice(0,220) )}${(l.summary||'').length>220? '…':''}</div>
      `;

      const actions = document.createElement('div');
      actions.className = 'lesson-actions';
      const openBtn = document.createElement('button');
      openBtn.className = 'btn primary';
      openBtn.textContent = 'Open';
      openBtn.addEventListener('click', ()=> openLessonPage(l.id));

      const previewBtn = document.createElement('button');
      previewBtn.className = 'btn ghost';
      previewBtn.textContent = 'Preview';
      previewBtn.addEventListener('click', ()=> showPreview(l));

      actions.appendChild(previewBtn);
      actions.appendChild(openBtn);
      card.appendChild(actions);

      listEl.appendChild(card);
    });
  }

  function showPreview(lesson){
    if (!preview) return;
    preview.classList.remove('hidden');
    preview.innerHTML = `
      <h3 id="previewHeading">${escapeHtml(lesson.topic)}</h3>
      <div class="lesson-meta">Grade ${escapeHtml(lesson.grade)} • ${escapeHtml(lesson.subject)}</div>
      ${lesson.verified ? '' : '<div class="notice-unverified">This lesson is unverified sample content. Replace with reviewed curriculum materials as needed.</div>'}
      <section>
        <strong>Learning objectives</strong>
        <ul>${(lesson.objectives || []).map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
      </section>
      <section>
        <strong>Key concepts</strong>
        <ul>${(lesson.key_concepts || []).map(k => `<li>${escapeHtml(k.term||k)}</li>`).join('')}</ul>
      </section>
      <div style="display:flex;gap:8px;margin-top:8px">
        <button class="btn primary" onclick="window.location.href='learning/lesson.html?id=${encodeURIComponent(lesson.id)}'">Open full</button>
        <button class="btn ghost" id="closePreview">Close</button>
      </div>
    `;
    document.getElementById('closePreview').addEventListener('click', ()=> preview.classList.add('hidden'));
  }

  function openLessonPage(id){
    window.location.href = `learning/lesson.html?id=${encodeURIComponent(id)}`;
  }

  function escapeHtml(s){ if(s==null) return ''; return String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

  // Filters events
  [gradeSel, subjectSel, topicSel, typeSel, searchInput].forEach(el => el && el.addEventListener('change', renderLessons));
  if (searchInput) searchInput.addEventListener('input', debounce(renderLessons,300));
  clearBtn.addEventListener('click', ()=>{ gradeSel.value='';subjectSel.value='';topicSel.value='';typeSel.value='';searchInput.value='';renderLessons(); });

  // If we're on lesson.html, render lesson detail
  if (document.body.classList.contains('lesson-page') || location.pathname.endsWith('/learning/lesson.html')){
    renderLessonDetail();
    return;
  }

  populateFilters();
  renderLessons();

  // Lesson detail renderer
  async function renderLessonDetail(){
    const params = new URLSearchParams(location.search);
    const id = params.get('id') || params.get('lesson');
    const target = document.getElementById('lessonPage');
    if (!target) return;
    const lesson = lessons.find(l => String(l.id) === String(id));
    if (!lesson) {
      target.innerHTML = '<p class="muted">Lesson not found.</p>';
      return;
    }

    target.innerHTML = `
      <div class="lesson-header">
        <div>
          <h1>${escapeHtml(lesson.topic)}</h1>
          <div class="meta">Grade ${escapeHtml(lesson.grade)} • ${escapeHtml(lesson.subject)} ${lesson.subtopic? '• '+escapeHtml(lesson.subtopic):''}</div>
        </div>
        <div style="margin-left:auto;text-align:right">
          ${lesson.verified ? '<div class="tag">Reviewed</div>' : '<div class="tag">Sample (unverified)</div>'}
          <div style="margin-top:8px"><button class="btn" onclick="window.print()">Print / Download</button></div>
        </div>
      </div>
      ${lesson.verified? '': '<div class="notice-unverified">This lesson is unverified sample content. Replace with reviewed curriculum materials as needed.</div>'}
      <div class="lesson-body">
        <section>
          <h2>Learning objectives</h2>
          <ul>${(lesson.objectives||[]).map(o=>`<li>${escapeHtml(o)}</li>`).join('')}</ul>
        </section>
        <section>
          <h2>Key concepts & definitions</h2>
          <ul>${(lesson.key_concepts||[]).map(k=>`<li><strong>${escapeHtml(k.term||k)}</strong>: ${escapeHtml(k.definition||'')}</li>`).join('')}</ul>
        </section>
        <section>
          <h2>Detailed lesson notes</h2>
          <div>${(lesson.notes || '')}</div>
        </section>
        <section>
          <h2>Worked examples</h2>
          ${(lesson.worked_examples||[]).map(we => `<article><h3>${escapeHtml(we.title||'Example')}</h3><div>${we.content||''}</div></article>`).join('')}
        </section>
        <section>
          <h2>Practical activities</h2>
          <ol>${(lesson.activities||[]).map(a=>`<li>${a}</li>`).join('')}</ol>
        </section>
        <section>
          <h2>Everyday-life applications</h2>
          <div>${escapeHtml(lesson.applications||'')}</div>
        </section>
        <section>
          <h2>Illustrations & diagrams</h2>
          ${(lesson.illustrations||[]).map(img => `<figure><img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt||'illustration')}" style="max-width:100%"><figcaption>${escapeHtml(img.caption||'')}</figcaption></figure>`).join('')}
        </section>
        <section>
          <h2>Summary notes</h2>
          <div>${escapeHtml(lesson.summary||'')}</div>
        </section>
        <section>
          <h2>Revision questions</h2>
          <ol>${(lesson.revision_questions||[]).map(q=>`<li>${escapeHtml(q)}</li>`).join('')}</ol>
        </section>
        <section>
          <h2>Resources & downloads</h2>
          <ul>${(lesson.resources||[]).map(r=>`<li><a href="${escapeHtml(r.url)}" target="_blank">${escapeHtml(r.label||r.url)}</a></li>`).join('')}</ul>
        </section>
      </div>
    `;
  }

  // Helpers
  function debounce(fn, t){ let id; return (...a)=>{ clearTimeout(id); id = setTimeout(()=>fn(...a), t) }}

})();

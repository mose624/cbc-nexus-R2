// assessments/assessments.js
// List page: loads assessments and renders filters

(async function(){
  const list = document.getElementById('list');
  const gradeSel = document.getElementById('filterGrade');
  const subjectSel = document.getElementById('filterSubject');
  const topicSel = document.getElementById('filterTopic');
  const typeSel = document.getElementById('filterType');
  const search = document.getElementById('search');
  const clear = document.getElementById('clear');

  let assessments = [];
  try { assessments = await window.__ASSESS_API.fetchAssessments(); } catch(e){ console.error(e); list.innerHTML = '<p class="notice">Failed to load assessments</p>'; return }

  window.__ASSESSMENTS = assessments;

  const uniq = arr => [...new Set(arr.filter(Boolean))].sort();
  uniq(assessments.map(a=>a.grade)).forEach(g=> gradeSel.appendChild(new Option(g,g)));
  uniq(assessments.map(a=>a.subject)).forEach(s=> subjectSel.appendChild(new Option(s,s)));
  uniq(assessments.map(a=>a.topic)).forEach(t=> topicSel.appendChild(new Option(t,t)));

  function matches(a){
    if (gradeSel.value && a.grade !== gradeSel.value) return false;
    if (subjectSel.value && a.subject !== subjectSel.value) return false;
    if (topicSel.value && a.topic !== topicSel.value) return false;
    if (typeSel.value && a.type !== typeSel.value) return false;
    if (search.value){ const q = search.value.toLowerCase(); if (!(a.title||'').toLowerCase().includes(q) && !(a.topic||'').toLowerCase().includes(q)) return false }
    return true;
  }

  function render(){
    list.innerHTML = '';
    const filtered = assessments.filter(matches);
    if (!filtered.length) { list.innerHTML = '<p class="muted">No assessments</p>'; return }
    filtered.forEach(a=>{
      const card = document.createElement('article'); card.className='card';
      card.innerHTML = `<h3>${escape(a.title)}</h3><div class="meta">Grade ${escape(a.grade)} • ${escape(a.subject)} • ${escape(a.topic||'')}</div><p>${escape(a.description||'')}</p>`;
      const actions = document.createElement('div');
      const start = document.createElement('button'); start.textContent='Start'; start.className='btn-inline'; start.addEventListener('click', ()=> startAssessment(a.id));
      const preview = document.createElement('a'); preview.textContent='Preview'; preview.href=`../learning/lesson.html?id=${encodeURIComponent(a.linked_lesson||'')}`; preview.className='btn-inline';
      actions.appendChild(start); actions.appendChild(preview);
      card.appendChild(actions);
      list.appendChild(card);
    });
  }

  function escape(s){ if (!s) return ''; return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])) }

  async function startAssessment(id){
    // Open take page with id
    window.location.href = `assessments/take.html?id=${encodeURIComponent(id)}`;
  }

  [gradeSel,subjectSel,topicSel,typeSel,search].forEach(el=>el.addEventListener('change', render));
  clear.addEventListener('click', ()=>{ gradeSel.value='';subjectSel.value='';topicSel.value='';typeSel.value='';search.value=''; render(); })
  render();
})();

// assessments/admin.js
// Simple teacher editor UI (requires authenticated user and RLS privileges in DB)
(async function(){
  const btnNew = document.getElementById('btnNew');
  const editor = document.getElementById('editor');
  const editorForm = document.getElementById('editorForm');
  const questionsEditor = document.getElementById('questionsEditor');
  const adminList = document.getElementById('adminList');
  const btnAddQuestion = document.getElementById('btnAddQuestion');

  let assessments = [];
  try { assessments = await window.__ASSESS_API.fetchAssessments(); } catch(e){ console.error(e); adminList.innerHTML = '<p class="muted">Failed to load assessments</p>' }

  function renderList(){ adminList.innerHTML=''; assessments.forEach(a=>{ const el = document.createElement('div'); el.className='card'; el.innerHTML = `<strong>${escape(a.title)}</strong> <div class="meta">${escape(a.grade)} • ${escape(a.subject)}</div>`; const edit = document.createElement('button'); edit.textContent='Edit'; edit.addEventListener('click', ()=> editAssessment(a)); el.appendChild(edit); adminList.appendChild(el); }); }
  function escape(s){ if (!s) return ''; return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])) }

  btnNew.addEventListener('click', ()=>{ openEditor(); });
  btnAddQuestion.addEventListener('click', ()=> addQuestionEditor());
  document.getElementById('btnCancel').addEventListener('click', ()=> { editor.classList.add('hidden'); });

  function openEditor(data){
    editor.classList.remove('hidden');
    editorForm.reset(); questionsEditor.innerHTML='';
    if (data){ document.getElementById('editorTitle').textContent = 'Edit assessment'; Object.entries(data).forEach(([k,v])=>{ const el = editorForm.elements[k]; if (el) el.value = v; }); // load questions later if integrated
    } else { document.getElementById('editorTitle').textContent = 'New assessment'; }
  }

  function addQuestionEditor(q){
    const id = Math.random().toString(36).slice(2,9);
    const wrapper = document.createElement('div'); wrapper.className='question'; wrapper.dataset.qid = id;
    wrapper.innerHTML = `
      <label>Question prompt<textarea name="prompt_${id}"></textarea></label>
      <label>Type<select name="type_${id}"><option value="mcq">Multiple choice</option><option value="tf">True/False</option><option value="short">Short answer</option><option value="written">Structured written</option></select></label>
      <label>Marks <input name="marks_${id}" type="number" value="1"></label>
      <div class="optionsArea"></div>
      <button type="button" class="btnAddOpt">Add option</button>
      <button type="button" class="btnRemoveQ">Remove question</button>
    `;
    questionsEditor.appendChild(wrapper);
    wrapper.querySelector('.btnAddOpt').addEventListener('click', ()=> addOptionEditor(wrapper));
    wrapper.querySelector('.btnRemoveQ').addEventListener('click', ()=> wrapper.remove());
  }
  function addOptionEditor(qWrapper){
    const area = qWrapper.querySelector('.optionsArea');
    const id = Math.random().toString(36).slice(2,8);
    const div = document.createElement('div'); div.innerHTML = `<label>Option <input name="opt_${id}" placeholder="label"> Correct? <input type="checkbox" name="optcorr_${id}"></label>`;
    area.appendChild(div);
  }

  editorForm.addEventListener('submit', async function(e){
    e.preventDefault();
    const fm = new FormData(editorForm);
    const payload = { title: fm.get('title'), grade: fm.get('grade'), subject: fm.get('subject'), topic: fm.get('topic'), time_limit_minutes: fm.get('time_limit_minutes'), attempt_limit: fm.get('attempt_limit'), type: fm.get('type') };
    // TODO: assemble questions from editor DOM
    try{
      // POST to Supabase via REST (requires proper RLS/policies)
      if (!window.SUPABASE || !window.SUPABASE.url) { alert('Supabase not configured — in local mode please edit sample JSON'); return }
      const ep = `${window.SUPABASE.url.replace(/\/+$/,'')}/rest/v1/assessments`;
      const res = await fetch(ep, { method:'POST', headers:{ 'Content-Type':'application/json', apikey: window.SUPABASE.key, Authorization: `Bearer ${window.SUPABASE.key}` }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error('Save failed');
      alert('Saved (note: questions upload not implemented in this simple editor).');
      location.reload();
    } catch (err){ console.error(err); alert('Save failed: ' + err.message) }
  });

  renderList();
})();

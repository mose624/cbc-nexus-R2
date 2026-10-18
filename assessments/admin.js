// assessments/admin.js
// Admin assessment editor. Saves assessment rows, question rows and MCQ options
// to the existing Supabase schema in assessments/schema.sql.
(async function () {
  const btnNew = document.getElementById('btnNew');
  const editor = document.getElementById('editor');
  const editorForm = document.getElementById('editorForm');
  const questionsEditor = document.getElementById('questionsEditor');
  const adminList = document.getElementById('adminList');
  const btnAddQuestion = document.getElementById('btnAddQuestion');
  const submitButton = editorForm.querySelector('[type="submit"]');
  const cfg = window.SUPABASE || {};
  const base = String(cfg.url || '').replace(/\/+$/, '');
  const apiKey = cfg.key || '';
  let assessments = [];
  let editingId = null;

  function escape(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function headers(extra) {
    return Object.assign({
      apikey: apiKey,
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json'
    }, extra || {});
  }
  async function request(path, options) {
    if (!base || !apiKey) throw new Error('Supabase is not configured. Check supabase-config.js.');
    const response = await fetch(base + '/rest/v1/' + path, options || { headers: headers() });
    if (!response.ok) {
      let detail = '';
      try { detail = (await response.text()).slice(0, 500); } catch (_) {}
      throw new Error('Database request failed (' + response.status + '). ' + detail);
    }
    if (response.status === 204) return [];
    const text = await response.text();
    return text ? JSON.parse(text) : [];
  }
  async function loadAssessments() {
    assessments = await window.__ASSESS_API.fetchAssessments();
    renderList();
  }
  function renderList() {
    adminList.replaceChildren();
    if (!assessments.length) {
      adminList.innerHTML = '<p class="muted">No assessments yet. Choose “New assessment” to create one.</p>';
      return;
    }
    assessments.forEach(a => {
      const card = document.createElement('div');
      card.className = 'card';
      const title = document.createElement('strong');
      title.textContent = a.title || 'Untitled assessment';
      const meta = document.createElement('div');
      meta.className = 'meta';
      meta.textContent = [a.grade ? 'Grade ' + a.grade : '', a.subject, a.topic].filter(Boolean).join(' • ');
      const edit = document.createElement('button');
      edit.type = 'button';
      edit.textContent = 'Edit';
      edit.addEventListener('click', () => editAssessment(a));
      card.append(title, meta, edit);
      adminList.appendChild(card);
    });
  }
  function addQuestionEditor(q) {
    q = q || {};
    const wrapper = document.createElement('fieldset');
    wrapper.className = 'question';
    wrapper.dataset.qid = q.id || ('new-' + Math.random().toString(36).slice(2, 10));
    wrapper.innerHTML = `
      <legend>Question</legend>
      <label>Question prompt<textarea data-field="prompt" required rows="3"></textarea></label>
      <label>Question type<select data-field="question_type">
        <option value="mcq">Multiple choice</option>
        <option value="tf">True / False</option>
        <option value="short">Short answer</option>
        <option value="written">Structured written</option>
      </select></label>
      <label>Marks<input data-field="marks" type="number" min="0.5" step="0.5" value="1" required></label>
      <label>Model answer (optional)<textarea data-field="model_answer" rows="2"></textarea></label>
      <label>Explanation (optional)<textarea data-field="explanation" rows="2"></textarea></label>
      <div class="optionsArea"></div>
      <button type="button" class="btnAddOpt">Add answer option</button>
      <button type="button" class="btnRemoveQ">Remove question</button>`;
    wrapper.querySelector('[data-field="prompt"]').value = q.prompt || '';
    wrapper.querySelector('[data-field="question_type"]').value = q.question_type || 'mcq';
    wrapper.querySelector('[data-field="marks"]').value = q.marks == null ? 1 : q.marks;
    wrapper.querySelector('[data-field="model_answer"]').value = q.model_answer || '';
    wrapper.querySelector('[data-field="explanation"]').value = q.explanation || '';
    questionsEditor.appendChild(wrapper);
    wrapper.querySelector('.btnAddOpt').addEventListener('click', () => addOptionEditor(wrapper));
    wrapper.querySelector('.btnRemoveQ').addEventListener('click', () => wrapper.remove());
    (q.options || []).forEach(option => addOptionEditor(wrapper, option));
    toggleOptions(wrapper);
    wrapper.querySelector('[data-field="question_type"]').addEventListener('change', () => toggleOptions(wrapper));
  }
  function toggleOptions(wrapper) {
    const isChoice = ['mcq', 'tf'].includes(wrapper.querySelector('[data-field="question_type"]').value);
    wrapper.querySelector('.optionsArea').hidden = !isChoice;
    wrapper.querySelector('.btnAddOpt').hidden = !isChoice;
    if (isChoice && wrapper.querySelector('[data-field="question_type"]').value === 'tf' &&
        !wrapper.querySelector('.option-row')) {
      addOptionEditor(wrapper, { label: 'True', is_correct: false });
      addOptionEditor(wrapper, { label: 'False', is_correct: false });
    }
  }
  function addOptionEditor(wrapper, option) {
    option = option || {};
    const row = document.createElement('div');
    row.className = 'option-row';
    row.innerHTML = `<label>Option text<input data-field="option-label" required></label>
      <label><input data-field="option-correct" type="checkbox"> Correct answer</label>
      <button type="button" class="btnRemoveOpt">Remove option</button>`;
    row.querySelector('[data-field="option-label"]').value = option.label || '';
    row.querySelector('[data-field="option-correct"]').checked = !!option.is_correct;
    row.querySelector('.btnRemoveOpt').addEventListener('click', () => row.remove());
    wrapper.querySelector('.optionsArea').appendChild(row);
  }
  function resetEditor() {
    editingId = null;
    editorForm.reset();
    questionsEditor.replaceChildren();
    document.getElementById('editorTitle').textContent = 'New assessment';
    editorForm.elements.attempt_limit.value = '1';
  }
  function openEditor() {
    resetEditor();
    editor.classList.remove('hidden');
    addQuestionEditor();
    editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  async function editAssessment(a) {
    try {
      resetEditor();
      editingId = a.id;
      document.getElementById('editorTitle').textContent = 'Edit assessment';
      ['title', 'grade', 'subject', 'topic', 'time_limit_minutes', 'attempt_limit', 'type'].forEach(k => {
        if (editorForm.elements[k]) editorForm.elements[k].value = a[k] == null ? '' : a[k];
      });
      const questions = await request('assessment_questions?assessment_id=eq.' +
        encodeURIComponent(a.id) + '&select=*&order=order.asc');
      for (const q of questions) {
        q.options = await request('question_options?question_id=eq.' + encodeURIComponent(q.id) +
          '&select=*&order=order.asc');
        addQuestionEditor(q);
      }
      if (!questions.length) addQuestionEditor();
      editor.classList.remove('hidden');
      editor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      console.error(err);
      alert('Could not load this assessment for editing. Check the Supabase schema and permissions. ' + err.message);
    }
  }
  function collectQuestions() {
    return [...questionsEditor.querySelectorAll('.question')].map((wrapper, index) => {
      const value = field => wrapper.querySelector('[data-field="' + field + '"]').value.trim();
      const type = value('question_type');
      const options = [...wrapper.querySelectorAll('.option-row')].map((row, order) => ({
        label: row.querySelector('[data-field="option-label"]').value.trim(),
        is_correct: row.querySelector('[data-field="option-correct"]').checked,
        order
      })).filter(o => o.label);
      if (!value('prompt')) throw new Error('Every question needs a prompt.');
      if (type === 'mcq' && options.length < 2) throw new Error('Each multiple-choice question needs at least two options.');
      if (type === 'mcq' && !options.some(o => o.is_correct)) throw new Error('Select a correct answer for each multiple-choice question.');
      if (type === 'tf' && !options.some(o => o.is_correct)) throw new Error('Select True or False as the correct answer.');
      return {
        question_type: type, prompt: value('prompt'),
        marks: Number(value('marks')) || 1,
        model_answer: value('model_answer'), explanation: value('explanation'),
        order: index, options: type === 'mcq' || type === 'tf' ? options : []
      };
    });
  }
  async function saveAssessment(event) {
    event.preventDefault();
    let questions;
    try { questions = collectQuestions(); } catch (err) { alert(err.message); return; }
    if (!questions.length) { alert('Add at least one question before saving.'); return; }
    if (!base || !apiKey) { alert('Supabase is not configured.'); return; }
    submitButton.disabled = true;
    submitButton.textContent = 'Saving…';
    try {
      const fm = new FormData(editorForm);
      const id = editingId || (crypto.randomUUID ? crypto.randomUUID() : 'assess-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8));
      const payload = {
        id, title: String(fm.get('title') || '').trim(),
        grade: String(fm.get('grade') || '').trim(),
        subject: String(fm.get('subject') || '').trim(),
        topic: String(fm.get('topic') || '').trim(),
        time_limit_minutes: fm.get('time_limit_minutes') ? Number(fm.get('time_limit_minutes')) : null,
        attempt_limit: fm.get('attempt_limit') ? Number(fm.get('attempt_limit')) : 1,
        type: String(fm.get('type') || 'quiz'),
        description: ''
      };
      if (!payload.title) throw new Error('Enter an assessment title.');
      if (editingId) {
        await request('assessments?id=eq.' + encodeURIComponent(id), {
          method: 'PATCH', headers: headers({ Prefer: 'return=minimal' }), body: JSON.stringify(payload)
        });
        // Replace child rows so edits cannot leave stale questions/options behind.
        const oldQuestions = await request('assessment_questions?assessment_id=eq.' + encodeURIComponent(id) + '&select=id');
        for (const q of oldQuestions) {
          await request('question_options?question_id=eq.' + encodeURIComponent(q.id), {
            method: 'DELETE', headers: headers({ Prefer: 'return=minimal' })
          });
        }
        await request('assessment_questions?assessment_id=eq.' + encodeURIComponent(id), {
          method: 'DELETE', headers: headers({ Prefer: 'return=minimal' })
        });
      } else {
        await request('assessments', {
          method: 'POST', headers: headers({ Prefer: 'return=minimal' }), body: JSON.stringify(payload)
        });
      }
      for (const q of questions) {
        const inserted = await request('assessment_questions', {
          method: 'POST', headers: headers({ Prefer: 'return=representation' }),
          body: JSON.stringify({
            assessment_id: id, question_type: q.question_type, prompt: q.prompt,
            marks: q.marks, model_answer: q.model_answer, explanation: q.explanation, order: q.order
          })
        });
        const questionId = inserted[0] && inserted[0].id;
        if (questionId && q.options.length) {
          await request('question_options', {
            method: 'POST', headers: headers({ Prefer: 'return=minimal' }),
            body: JSON.stringify(q.options.map(o => ({
              question_id: questionId, label: o.label, is_correct: o.is_correct, order: o.order
            })))
          });
        }
      }
      editor.classList.add('hidden');
      await loadAssessments();
      alert('Assessment and questions saved successfully.');
    } catch (err) {
      console.error(err);
      alert('Save failed. Check Supabase tables, authentication and Row Level Security policies. ' + err.message);
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Save assessment';
    }
  }
  btnNew.addEventListener('click', openEditor);
  btnAddQuestion.addEventListener('click', () => addQuestionEditor());
  document.getElementById('btnAddQuestionBatch').addEventListener('click', () => {
    const countInput = document.getElementById('questionBatchCount');
    const count = Number.parseInt(countInput.value, 10);
    if (!Number.isInteger(count) || count < 1 || count > 100) {
      alert('Enter a number from 1 to 100.');
      countInput.focus();
      return;
    }
    for (let i = 0; i < count; i++) addQuestionEditor();
    const added = document.createElement('p');
    added.className = 'muted';
    added.textContent = count + ' question editor' + (count === 1 ? '' : 's') + ' added. Fill them in, then save the assessment.';
    questionsEditor.prepend(added);
  });
  document.getElementById('btnCancel').addEventListener('click', () => editor.classList.add('hidden'));
  editorForm.addEventListener('submit', saveAssessment);
  try { await loadAssessments(); }
  catch (err) {
    console.error(err);
    adminList.innerHTML = '<p class="notice">Could not load assessments. Check Supabase configuration and permissions.</p>';
  }
})();
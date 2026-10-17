// Supabase Edge Function: submit-attempt
// File: supabase-functions/submit-attempt/index.ts

// This Edge Function validates submitted answers, calculates marks for objective questions (MCQ/TF/short where possible),
// creates an attempt record (if not existing) and stores submitted_answers. It must be deployed to Supabase Functions and
// requires the SUPABASE_SERVICE_ROLE_KEY in the environment to perform DB writes securely.

export default async (req: Request) => {
  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    if (!supabaseUrl || !serviceKey) return new Response(JSON.stringify({ message: 'Server not configured' }), { status:500 });

    const authHeader = req.headers.get('authorization') || '';
    // Verify user from the incoming JWT (if present)
    let userId = null;
    if (authHeader.startsWith('Bearer ')){
      const r = await fetch(`${supabaseUrl}/auth/v1/user`, { headers: { Authorization: authHeader } });
      if (r.ok){ const u = await r.json(); userId = u?.id || null; }
    }

    const body = await req.json();
    const { assessment_id, answers, attempt_id } = body;
    if (!assessment_id || !Array.isArray(answers)) return new Response(JSON.stringify({ message: 'Invalid payload' }), { status:400 });

    // Fetch assessment questions and options using service role
    const qRes = await fetch(`${supabaseUrl}/rest/v1/assessment_questions?assessment_id=eq.${encodeURIComponent(assessment_id)}&select=*`, { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } });
    const questions = await qRes.json();
    const qMap = new Map();
    for (const q of questions){
      // fetch options
      const opRes = await fetch(`${supabaseUrl}/rest/v1/question_options?question_id=eq.${q.id}&select=*`, { headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}` } });
      const opts = await opRes.json();
      q.options = opts;
      qMap.set(String(q.id), q);
    }

    // Compute total marks
    let totalMarks = 0; let score = 0;
    for (const q of questions) totalMarks += Number(q.marks || 0);

    // Create attempt row (or use provided attempt_id)
    let attemptId = attempt_id;
    if (!attemptId){
      // insert attempt
      const create = await fetch(`${supabaseUrl}/rest/v1/attempts`, {
        method: 'POST', headers: { 'Content-Type':'application/json', apikey: serviceKey, Authorization: `Bearer ${serviceKey}` },
        body: JSON.stringify({ assessment_id, user_id: userId, started_at: new Date().toISOString(), status: 'submitted' })
      });
      if (!create.ok) { const text = await create.text(); return new Response(JSON.stringify({ message:'Failed to create attempt', detail:text }), { status:500 }) }
      const created = await create.json(); attemptId = created[0].id;
    }

    // Prepare submitted_answers inserts
    const answersToInsert = [];
    for (const ans of answers){
      const q = qMap.get(String(ans.question_id));
      if (!q) continue;
      const qType = q.question_type;
      let awarded = 0; let graded = false;

      if (qType === 'mcq'){
        // ans.answer expected option id (as string or number)
        const selectedId = Number(ans.answer);
        const selectedOpt = q.options.find(o => Number(o.id) === selectedId);
        const correct = selectedOpt ? selectedOpt.is_correct : false;
        if (correct) awarded = Number(q.marks || 0);
        graded = true;
      } else if (qType === 'tf'){
        // options may be stored as True/False labels - find correct option
        const correctOpt = q.options.find(o => o.is_correct);
        const selectedLabel = String(ans.answer || '').toLowerCase();
        if (correctOpt && String(correctOpt.label || '').toLowerCase() === selectedLabel) awarded = Number(q.marks || 0);
        graded = true;
      } else if (qType === 'short'){
        // short answers: optionally attempt simple matching against model_answer (case-insensitive substring)
        if (q.model_answer && ans.answer && String(ans.answer).toLowerCase().includes(String(q.model_answer).toLowerCase())){
          awarded = Number(q.marks || 0);
          graded = true;
        } else {
          // leave for manual grading
          awarded = 0; graded = false;
        }
      } else if (qType === 'written'){
        // structured written answers require manual grading
        awarded = 0; graded = false;
      }

      score += Number(awarded || 0);

      answersToInsert.push({ attempt_id: attemptId, question_id: q.id, selected_option_ids: ans.answer && Array.isArray(ans.answer) ? ans.answer.map(Number) : (typeof ans.answer === 'number' ? [ans.answer] : null), answer_text: (typeof ans.answer === 'string' ? ans.answer : null), awarded_marks: awarded, graded, model_answer: q.model_answer });
    }

    // Insert submitted answers
    if (answersToInsert.length){
      const insertRes = await fetch(`${supabaseUrl}/rest/v1/submitted_answers`, { method:'POST', headers:{ 'Content-Type':'application/json', apikey: serviceKey, Authorization: `Bearer ${serviceKey}` }, body: JSON.stringify(answersToInsert) });
      if (!insertRes.ok){ const t = await insertRes.text(); return new Response(JSON.stringify({ message:'Failed to save answers', detail:t }), { status:500 }); }
    }

    // Update attempt with score and totals
    const updateRes = await fetch(`${supabaseUrl}/rest/v1/attempts?id=eq.${encodeURIComponent(attemptId)}`, { method: 'PATCH', headers:{ 'Content-Type':'application/json', apikey: serviceKey, Authorization: `Bearer ${serviceKey}` }, body: JSON.stringify({ submitted_at: new Date().toISOString(), duration_seconds: 0, score, total_marks: totalMarks, percentage: (totalMarks>0? (score/totalMarks)*100 : 0), status: 'submitted' }) });
    if (!updateRes.ok){ const t = await updateRes.text(); return new Response(JSON.stringify({ message:'Failed to update attempt', detail:t }), { status:500 }); }

    return new Response(JSON.stringify({ attempt_id: attemptId, score, total_marks: totalMarks, percentage: (totalMarks>0? (score/totalMarks)*100 : 0) }), { status:200 });

  } catch (e){ console.error(e); return new Response(JSON.stringify({ message: 'Server error', detail: String(e) }), { status:500 }) }
};

// assessments/api.js
// Centralized helper for Supabase interactions used by assessments pages.

const SUPABASE = (function(){
  const cfg = window.SUPABASE || {};
  return {
    url: cfg.url || '',
    key: cfg.key || ''
  };
})();

async function apiGet(path){
  const endpoint = `${SUPABASE.url.replace(/\/+$/,'')}/rest/v1/${path}`;
  const res = await fetch(endpoint + '?select=*', { headers:{ apikey: SUPABASE.key, Authorization: `Bearer ${SUPABASE.key}` } });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

async function apiRpc(fn, body){
  // Call a Supabase Edge Function (recommended) at /functions/v1/<fn>
  const url = `/api/${fn}`; // proxy or edge function; callers should set up a function
  const res = await fetch(url, { method:'POST', headers:{ 'Content-Type':'application/json' }, body: JSON.stringify(body) });
  return res.json();
}

// Helper to fetch assessments (with optional filters)
async function fetchAssessments(){
  if (!SUPABASE.url) {
    // Fallback local sample data
    const res = await fetch('assessments/sample-assessments.json');
    if (!res.ok) throw new Error('Local sample data missing');
    return res.json();
  }
  // Use Supabase REST
  const endpoint = `${SUPABASE.url.replace(/\/+$/,'')}/rest/v1/assessments?select=*`;
  const resp = await fetch(endpoint, { headers:{ apikey: SUPABASE.key, Authorization: `Bearer ${SUPABASE.key}` } });
  if (!resp.ok) throw new Error('Failed to fetch assessments');
  return resp.json();
}

// Export for other scripts
window.__ASSESS_API = { fetchAssessments, apiGet, apiRpc };

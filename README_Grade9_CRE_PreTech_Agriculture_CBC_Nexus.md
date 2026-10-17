# CBC Nexus — Grade 9 assessment update

This package keeps the existing Grades 4–10 CBC Nexus content and adds three Grade 9 assessment banks:

- **Pre-Technical Studies:** 10 MCQs and 10 structured drawing/calculation tasks. Question 11 did not have a supplied mark allocation, so a provisional 5 marks is assigned; this makes the paper 55 marks.
- **Agriculture & Nutrition:** 20 MCQs and 6 structured tasks; 50 marks total.
- **Christian Religious Education (CRE):** 30 MCQs; 30 marks.

## Timer and attempts

CBC Nexus applies 2 minutes per question: Pre-Technical Studies 40 minutes, Agriculture & Nutrition 52 minutes, CRE 60 minutes. The local HTML build saves progress in the browser. Server-enforced single attempts and cross-device reporting require the Supabase backend below to be configured and deployed.

## CRE answer-key quality check

The source key did not match the best answer on Questions 2, 3, 8, 16, 18 and 20. The integrated key corrects these to C, C, B, C, A and A respectively, based on the question wording. The other supplied answers were retained.

## Open locally

Open `index.html` in a modern browser. Online teacher reporting and AI written marking require the Supabase project URL and publishable key to be configured in `supabase-config.js`, the SQL schema to be applied, the `cbc-nexus-results` Edge Function to be deployed, and server-side secrets to be configured. Never place an OpenAI API key or Supabase service-role key in browser code.

## Included deployment files

- `index.html` — complete website
- `supabase-config.js` — public configuration template
- `supabase/schema.sql` — database schema and policies
- `supabase/functions/cbc-nexus-results/index.ts` — backend function
- `supabase/functions/.env.example` — server-side secret names
- `supabase/config.toml` — Supabase function configuration
- `README_AI_WRITTEN_MARKING_AND_TIMING.md` — AI marking and timer setup notes

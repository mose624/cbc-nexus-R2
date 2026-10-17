# Assessments — README

This directory adds a full assessment and quiz system to the project. It uses Supabase (Postgres) as the recommended backend and includes a server-side Edge Function for secure marking.

Included files
- assessments/index.html — list and filters for assessments
- assessments/take.html — attempt UI with timer and submission
- assessments/result.html — result viewer
- assessments/admin.html — basic teacher editor (client-only scaffold)
- assessments/*.js, *.css — client logic and styles
- assessments/schema.sql — SQL schema for Postgres/Supabase
- supabase-functions/submit-attempt — Edge Function to validate and mark submissions
- assessments/sample-assessments.json / sample-attempts.json — local dev data

Database schema
- See assessments/schema.sql for CREATE TABLE statements. Key tables:
  - assessments
  - assessment_questions
  - question_options
  - attempts
  - submitted_answers

Edge Function (submit-attempt)
- Deploy the content of supabase-functions/submit-attempt to Supabase Functions.
- The function expects SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to be set as environment variables.
- It accepts POST requests with JSON: { assessment_id, answers: [ { question_id, answer } ], attempt_id? }
- The function computes automatic marks for MCQ/TF (and simple matching for short answers if model_answer is present), stores submitted_answers and updates the attempts row with the computed score.

Security recommendations
- Do not expose service_role keys in browser files. The Edge Function uses the service role key securely server-side.
- Enable Row Level Security (RLS) on attempts/submitted_answers and add policies so students can only insert/select their own attempts and cannot modify score fields.
- Use Supabase Auth for teacher accounts and create a role-based policy to allow teacher inserts/updates for assessments and question tables.

Testing locally
1. Without Supabase: open assessments/index.html — it uses assessments/sample-assessments.json and shows sample data.
2. With Supabase: create the tables using assessments/schema.sql. Insert sample rows or use the sample JSON as a guide.
3. Create a Supabase Edge Function named submit-attempt and deploy the provided TypeScript function. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars.
4. Create supabase-config.js at the repo root with your anon PUBLIC key and URL (only for client reads):

window.SUPABASE = { url: 'https://<project>.supabase.co', key: '<PUBLIC_ANON_KEY>' }

5. Authentication: the client expects that the user's JWT (if used) is provided in Authorization when calling the Edge Function. When using Supabase client-side auth, pass the JWT in the Authorization header for the function call.

Notes and next steps
- The teacher editor is a scaffold; for production add a full editor that writes questions and options to the DB via secure server endpoints or via the Supabase REST API with proper RLS policies.
- Add grading UI for teachers to mark manual/structured written responses and update awarded_marks in submitted_answers.
- Add attempt limiting and time enforcement server-side in the Edge Function (check previous attempts by user and enforce attempt_limit).

If you want, I can:
- Implement the teacher editor fully (question creation + options upload) with secure server-side endpoints.
- Add automatic PDF generation for printable assessments and answer sheets.
- Add detailed RLS policies tailored to your Supabase Auth setup.

# CBC Nexus — AI Written Marking, Rubrics, One Attempt, and Timing

This package contains the current CBC Nexus Grades 4–10 HTML website plus the Supabase database schema and Edge Function used for online learner reporting and AI-assisted written marking.

## Included behaviour

- Every selected question has a **2-minute allocation** (`120 seconds`). The paper timer is the number of displayed questions multiplied by 120 seconds. Examples: 20 questions = 40 minutes; 30 = 60 minutes; 40 = 80 minutes.
- The timer starts when a learner starts the paper, is saved with the attempt, resumes from its original deadline after a refresh, and triggers final submission when time expires.
- Online server records include allowed seconds, deadline, elapsed seconds and the timed-out flag.
- The learner provides name, school and stream before starting.
- The online backend enforces one recorded attempt per normalized name + school + stream + assessment code. The local-only website can only lock the current browser's local record; it cannot provide school-wide identity enforcement without the online backend.
- MCQs are marked against the synced objective key.
- Written answers are marked by an OpenAI model on the server, against a per-question rubric generated from the question's model answer and marking guide. Each criterion has a maximum mark. Awarded marks are clamped to the criterion and question maxima, partial credit is supported, and lower-confidence results are flagged for teacher moderation.
- Blank written answers are assigned zero. If AI marking is not configured or fails, the submitted attempt remains locked and the written section is flagged for teacher marking; the system does not invent a final paper score.
- The Teacher Dashboard displays written marks, per-criterion feedback, review flags, timings, result status and CSV export.
- `AI_MARKING_DAILY_LIMIT` defaults to 250 marked submissions per UTC day. This is an application safeguard, not a substitute for provider-side billing/usage limits; concurrent calls can make the count approximate.

## Important: the online backend is not pre-connected

No Supabase project URL, publishable key, teacher account or OpenAI API key is included in this package. The website's online AI marking and shared result reporting will **not** work until you complete the setup below. Never paste an OpenAI secret or Supabase service-role/secret key into the HTML, `supabase-config.js`, a public repository, or a learner device.

## Setup

### 1. Create a Supabase project

Create a project in Supabase and keep its Project URL, publishable key, and server-side secret key available to the administrator only.

### 2. Create the database tables

In Supabase SQL Editor, run the complete file:

`cbenexus-all-grades/supabase/schema.sql`

This creates the assessment-key/rubric store, attempt store and teacher-admin table, including one-attempt uniqueness and timer metadata. Run the script as the project owner.

### 3. Configure server-side secrets

In the Supabase Edge Function secrets/settings, configure:

- `OPENAI_API_KEY` — your OpenAI API key (server-side only)
- `OPENAI_MARKING_MODEL` — defaults to `gpt-4.1-mini`
- `AI_MARKING_DAILY_LIMIT` — optional cap, default `250`
- `ALLOWED_ORIGINS` — e.g. `https://cbenexus.co.ke,https://www.cbenexus.co.ke`
- `SUPABASE_SERVICE_ROLE_KEY` only if your Supabase environment does not automatically provide a supported server-side secret/service role key to Edge Functions

`SUPABASE_URL` should be available to the hosted Edge Function environment. If it is not, add it as a server-side secret. Do not expose service-role/secret keys to the browser.

An example environment file is included at:

`cbenexus-all-grades/supabase/functions/.env.example`

### 4. Deploy the Edge Function

Using the Supabase CLI from a project directory with the included `supabase/` folder:

```sh
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase functions deploy cbc-nexus-results
```

The included `supabase/config.toml` configures this function with platform JWT verification disabled because learner requests use single-attempt tokens; the function itself validates teacher/admin JWTs for all teacher actions. Do not remove those checks.

### 5. Set the public project URL and publishable key

Edit `cbenexus-all-grades/supabase-config.js` and fill in only the **project URL** and **publishable key**:

```js
window.CBC_NEXUS_SUPABASE_CONFIG = {
  url: "https://YOUR_PROJECT_REF.supabase.co",
  publishableKey: "YOUR_SUPABASE_PUBLISHABLE_KEY",
  functionName: "cbc-nexus-results"
};
```

Do not put `OPENAI_API_KEY`, the Supabase service-role key, or any other server secret in this file. Publish `index.html` and `supabase-config.js` together over HTTPS; do not rely on `file://` for online results.

### 6. Create the teacher/admin account

Create a user in Supabase Authentication. Copy that user's UUID, then run this SQL as project owner (replace both placeholders):

```sql
insert into public.teacher_admins (user_id, display_name)
values ('AUTH_USER_UUID_HERE', 'CBC Nexus Administrator');
```

The user must sign in via the Teacher Dashboard with the account's email and password. Only IDs in `teacher_admins` can use teacher endpoints.

### 7. Sync assessment keys and rubrics

1. Open the hosted website and open the Teacher Dashboard.
2. Enter the Supabase URL and publishable key if they are not already filled in.
3. Sign in with the authorized teacher/admin account.
4. Review a paper's generated rubrics using **Preview current rubrics** and optionally download the JSON for moderation.
5. Click **Sync current paper + rubrics** to sync one paper, or **Sync all assessment keys + rubrics (Grades 4–10)** to send all assessment keys in smaller batches.
6. Check the status message for rubrics that need mark allocation. Rubrics are inferred from the content currently in the bank, so teachers should review them before a live exam.

### 8. Run a test before learners use it

- Use a non-production test learner and paper.
- Confirm that starting an attempt produces a timer of `question count × 2 minutes`.
- Type a written response, refresh before time expires, and confirm the same attempt resumes.
- Submit one test attempt and verify objective score, written-question rubric marks, overall percentage, status and elapsed time in the Teacher Dashboard.
- Confirm that a second attempt using the same name, school, stream and paper is rejected by the server.
- Confirm a low-confidence rubric result gets a teacher-review flag.
- Set a provider usage/billing limit for OpenAI as a second line of protection.

## How per-question rubrics are created

The browser creates a JSON marking rubric for each non-MCQ question using the question text, allocated marks, model answer and supplied marking guide. The marking criteria are subject-aware; extended writing tasks use task/content, organisation/coherence, language accuracy, and register/style criteria (translated to Kiswahili labels for Kiswahili subjects). Rubrics accept semantically equivalent answers and partial credit. Because inferred rubrics can split a marking guide imperfectly, review the rubric and correct the source marking guide before high-stakes use.

## Scoring and learner privacy

The final score is only available after the backend has completed AI marking. If AI marking cannot run, the objective score can still be shown, but the written section stays pending and the overall paper is not falsely shown as fully marked. Results are stored in Supabase when online mode is configured; submitted answers are sent to the OpenAI API for marking. Do not include unnecessary learner identifiers in answers or prompts. Provide appropriate school notices/permissions and restrict teacher access according to your local student-data and privacy requirements.

## Files

- `cbenexus-all-grades/index.html` — website, learner gate, 2-minute-per-question timer, local/online progress and Teacher Dashboard.
- `cbenexus-all-grades/supabase-config.js` — public Supabase URL/publishable-key placeholders.
- `cbenexus-all-grades/supabase/schema.sql` — database schema/migrations.
- `cbenexus-all-grades/supabase/functions/cbc-nexus-results/index.ts` — secure backend endpoint for one-attempt handling, server timing, objective scoring, AI written marking, teacher reports and teacher moderation.
- `cbenexus-all-grades/supabase/config.toml` — Edge Function settings.

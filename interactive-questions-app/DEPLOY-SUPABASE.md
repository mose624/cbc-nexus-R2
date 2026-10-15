# Deploy Interactive Questions backend safely

This app is isolated under `interactive-questions-app/`. Do not move its Supabase files into the repository-root `supabase/` folder: CBE Nexus already has its own Supabase migrations.

## 1. Prepare the source folder on your computer

Use the original ZIP you uploaded and extract it. Open the folder `cbenexus-all-grades`; it contains:
- `supabase/config.toml`
- `supabase/functions/cbc-nexus-results/index.ts`

The original config has `project_id = "cbc-nexus"` as a placeholder. When linking with the CLI, use the real project ref `xfwupmfzmzkdonabzysp`.

## 2. Deploy from that extracted folder (Windows)

Install Node.js if needed, then open Command Prompt or PowerShell in the extracted `cbenexus-all-grades` folder and run:

```powershell
npx supabase login
npx supabase link --project-ref xfwupmfzmzkdonabzysp
npx supabase functions deploy cbc-nexus-results --no-verify-jwt
```

If prompted, complete Supabase login in the browser. Confirm the project shown is the project ending in `xfwupmfzmzkdonabzysp` before deploying. The `--no-verify-jwt` flag is required by this function because learner requests use per-attempt tokens and teacher-only actions validate a real Auth JWT inside the function.

## 3. Configure server-side secrets

In Supabase Dashboard → Edge Functions → Secrets, configure:
- `ALLOWED_ORIGINS` = `https://cbenexus.co.ke,https://www.cbenexus.co.ke`
- `OPENAI_API_KEY` = your own OpenAI API key only if you want AI written-answer marking.

Optional:
- `OPENAI_MARKING_MODEL` = `gpt-4.1-mini`
- `AI_MARKING_DAILY_LIMIT` = `250`

Do not put the OpenAI API key or a Supabase service-role/secret key into `index.html`, `supabase-config.js`, GitHub, or this chat. The function should use the Supabase server-provided credentials. Never set a service-role key as the publishable key.

## 4. After deployment

- In Supabase → Edge Functions, confirm `cbc-nexus-results` is deployed.
- The database must already contain `teacher_admins`, `assessment_keys`, and `learner_attempts`, with RLS enabled and the policies from the app's schema.
- Import/publish assessment question maps before learner attempts can start.
- Add an authorised teacher's Supabase Auth user ID to `teacher_admins` before testing teacher-only actions.
- Test a learner attempt, saved results, and teacher access using a test assessment before publishing the website branch.

The public frontend configuration lives at `interactive-questions-app/supabase-config.js`; it uses only the project's URL and publishable key. This branch has not been merged to `main` and is not live on the production website yet.

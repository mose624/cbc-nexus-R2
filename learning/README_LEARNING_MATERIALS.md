# Learning Materials — CBE Nexus

This folder implements a Learning Hub for structured lesson content. It provides:

- A lesson index (learning/index.html) with filters for grade, subject, topic and content type.
- A lesson page (learning/lesson.html) that shows all required sections: objectives, key concepts, notes, examples, activities, applications, illustrations, summary, revision questions and downloadable/printable view.
- A client-side system (learning/learning.js) that loads lessons from Supabase when configured, otherwise falls back to local learning/lessons.json for development.
- Styling files (learning/learning.css and learning/print.css).
- Sample data (learning/lessons.json) — clearly marked unverified sample content.

Important notes
- Do NOT treat the sample content as KICD-approved material. Use the "verified" flag on lesson objects to mark curriculum-reviewed materials.
- The site intentionally does not ship official curriculum content.

Database setup (Supabase)

If you use Supabase for managed content storage, create a table named `learning_lessons` with the following example SQL (Postgres):

```sql
create table public.learning_lessons (
  id text primary key,
  grade text,
  subject text,
  topic text,
  subtopic text,
  objectives jsonb,
  key_concepts jsonb,
  notes text,
  worked_examples jsonb,
  activities jsonb,
  applications text,
  illustrations jsonb,
  summary text,
  revision_questions jsonb,
  resources jsonb,
  verified boolean default false,
  created_at timestamptz default now()
);

-- Example: grant RLS or public read as appropriate for your deployment
```

Integration

1. Create or update `supabase-config.js` at the repo root with the following (do NOT commit service_role keys):

```js
// supabase-config.js (example)
window.SUPABASE = {
  url: 'https://your-project.supabase.co',
  key: 'PUBLIC_ANON_KEY'
}
```

2. When SUPABASE is present the client will attempt to fetch lessons from the REST API (`/rest/v1/learning_lessons`). The code expects the row fields to match the schema above. JSON columns can be stored as proper JSON types or as strings.

3. If Supabase is not configured or the fetch fails, the app uses `learning/lessons.json` as a local development fallback.

Adding lessons

- To add lessons without changing code, add rows to the `learning_lessons` table or edit the `learning/lessons.json` file during development. Each lesson uses a stable `id` string.
- Use the `verified` boolean to mark content that has been reviewed by curriculum teams.

Security and publishing

- Never store service-role keys or secret API keys in browser-exposed files. Use server-side functions or Edge Functions for protected operations such as editing or approving content.
- Use Supabase Row Level Security and a simple editorial workflow (e.g., staging table) for reviewed curriculum materials.

Customisation & next steps

- Add server endpoints or an editorial UI to create/update lessons using secure server-side keys.
- Hook this content into teacher dashboards and student progress tracking where needed.

If you want, I can:
- Add an editorial UI (protected route) for creating and reviewing lessons.
- Add sample print-friendly PDF generation for printable lesson packs.

-- CBE Nexus AI Academy certificate table
create table if not exists public.ai_certificates (
  id text primary key,
  certificate_id text unique not null,
  learner_name text not null,
  email text,
  course_slug text not null,
  course_title text not null,
  assessment_result numeric not null,
  competencies jsonb not null default '[]'::jsonb,
  issued_at timestamptz not null default now(),
  status text not null default 'valid',
  framework text,
  credential_statement text
);
create index if not exists ai_certificates_certificate_id_idx on public.ai_certificates(certificate_id);
create index if not exists ai_certificates_email_idx on public.ai_certificates(email);
alter table public.ai_certificates enable row level security;
create policy "Public certificate verification read"
on public.ai_certificates for select
to anon, authenticated
using (status = 'valid');


-- AI Academy admin-published notes
create table if not exists public.ai_course_notes (id text primary key,course_slug text not null,course_title text not null,module_number integer not null check(module_number between 1 and 6),module_title text not null,level text not null check(level in ('basic','medium','advanced')),status text not null default 'draft' check(status in ('draft','published')),content text not null,objectives text default '',examples text default '',activity text default '',questions text default '',created_at timestamptz not null default now(),updated_at timestamptz not null default now(),unique(course_slug,module_number,level));
create index if not exists ai_course_notes_public_idx on public.ai_course_notes(course_slug,module_number,level,status);
alter table public.ai_course_notes enable row level security;
create policy "Public published AI notes read" on public.ai_course_notes for select to anon,authenticated using(status='published');
create policy "Service role manages AI course notes" on public.ai_course_notes for all to service_role using(true) with check(true);


-- AI Academy PDF notes storage metadata (safe to run after the table already exists)
alter table public.ai_course_notes
  add column if not exists pdf_r2_key text,
  add column if not exists pdf_filename text,
  add column if not exists pdf_size bigint,
  add column if not exists pdf_content_type text default 'application/pdf';

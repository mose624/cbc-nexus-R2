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

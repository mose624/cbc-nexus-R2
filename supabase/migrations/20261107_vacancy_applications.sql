-- CBE Nexus on-site international teaching vacancy applications.
-- Run this once in the Supabase SQL Editor for the project's database.
create table if not exists public.vacancy_applications (
  id uuid primary key default gen_random_uuid(),
  vacancy_id text not null,
  vacancy_title text not null,
  employer text not null,
  applicant_name text not null,
  applicant_email text not null,
  applicant_phone text not null,
  applicant_country text not null,
  qualification text not null,
  experience text not null,
  cover_message text not null default '',
  cv_file_name text not null,
  cv_content_type text not null,
  cv_storage_key text not null,
  status text not null default 'received' check (status in ('received','reviewing','shortlisted','contacted','rejected','closed')),
  created_at timestamptz not null default now()
);
create index if not exists vacancy_applications_created_at_idx
  on public.vacancy_applications (created_at desc);
create index if not exists vacancy_applications_vacancy_id_idx
  on public.vacancy_applications (vacancy_id);
alter table public.vacancy_applications enable row level security;
revoke all on table public.vacancy_applications from anon, authenticated;
grant all on table public.vacancy_applications to service_role;

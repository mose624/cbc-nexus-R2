-- CBE Nexus: international teaching vacancies
-- Run this once in the Supabase SQL Editor for the project used by CBE Nexus.

create table if not exists public.teaching_vacancies (
  id text primary key,
  title text not null,
  school text not null,
  country text not null,
  region text,
  subject text not null,
  level text not null,
  employment text,
  salary text,
  deadline text,
  description text,
  requirements text,
  apply_url text not null,
  featured boolean not null default false,
  status text not null default 'published',
  source text,
  verified_date text,
  why_match text,
  documents text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists teaching_vacancies_status_idx
  on public.teaching_vacancies(status);

create index if not exists teaching_vacancies_country_idx
  on public.teaching_vacancies(country);

create index if not exists teaching_vacancies_created_at_idx
  on public.teaching_vacancies(created_at desc);

alter table public.teaching_vacancies enable row level security;

-- The CBE Nexus server uses the Supabase service-role key, so no public
-- INSERT/UPDATE/DELETE policy is required for this server-managed table.

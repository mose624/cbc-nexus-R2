-- CBC Nexus learner reporting + AI written-marking schema
-- Run in Supabase SQL Editor as project owner before deploying the Edge Function.
-- Secret/service-role keys stay server-side only.

create extension if not exists pgcrypto;

create table if not exists public.teacher_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'CBC Nexus Administrator',
  created_at timestamptz not null default now()
);

create table if not exists public.assessment_keys (
  assessment_code text primary key,
  grade text not null,
  subject text not null,
  topic text not null default 'all',
  title text not null,
  question_count integer not null check (question_count >= 0),
  max_auto_marks numeric(10,2) not null default 0 check (max_auto_marks >= 0),
  max_manual_marks numeric(10,2) not null default 0 check (max_manual_marks >= 0),
  total_marks numeric(10,2) not null default 0 check (total_marks >= 0),
  question_map jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.learner_attempts (
  id uuid primary key default gen_random_uuid(),
  assessment_code text not null references public.assessment_keys(assessment_code),
  grade text not null,
  subject text not null,
  topic text not null default 'all',
  learner_name text not null,
  school_name text not null,
  stream_name text not null,
  learner_hash text not null,
  attempt_token_hash text not null unique,
  status text not null default 'in-progress',
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  updated_at timestamptz not null default now(),
  time_allowed_seconds integer not null default 0 check (time_allowed_seconds >= 0),
  deadline_at timestamptz,
  elapsed_seconds integer check (elapsed_seconds is null or elapsed_seconds >= 0),
  timed_out boolean not null default false,
  question_count integer not null default 0,
  answered_count integer not null default 0,
  responses jsonb not null default '[]'::jsonb,
  auto_score numeric(10,2),
  max_auto_marks numeric(10,2) not null default 0,
  auto_percent numeric(6,2),
  performance_band text,
  correct_count integer not null default 0,
  auto_count integer not null default 0,
  manual_count integer not null default 0,
  manual_score numeric(10,2),
  max_manual_marks numeric(10,2) not null default 0,
  ai_written_score numeric(10,2),
  ai_max_written_marks numeric(10,2) not null default 0,
  written_results jsonb not null default '[]'::jsonb,
  ai_marking_status text not null default 'not_started',
  ai_marking_model text,
  ai_marking_summary text,
  ai_needs_review_count integer not null default 0,
  ai_marked_at timestamptz,
  final_score numeric(10,2),
  total_marks numeric(10,2) not null default 0,
  final_percent numeric(6,2),
  final_band text,
  marked_at timestamptz,
  marked_by uuid references auth.users(id),
  constraint one_attempt_per_learner_and_assessment unique (assessment_code, learner_hash)
);

-- Safe migrations when upgrading an existing CBC Nexus database.
alter table public.learner_attempts add column if not exists ai_written_score numeric(10,2);
alter table public.learner_attempts add column if not exists ai_max_written_marks numeric(10,2) not null default 0;
alter table public.learner_attempts add column if not exists written_results jsonb not null default '[]'::jsonb;
alter table public.learner_attempts add column if not exists ai_marking_status text not null default 'not_started';
alter table public.learner_attempts add column if not exists ai_marking_model text;
alter table public.learner_attempts add column if not exists ai_marking_summary text;
alter table public.learner_attempts add column if not exists ai_needs_review_count integer not null default 0;
alter table public.learner_attempts add column if not exists ai_marked_at timestamptz;
alter table public.learner_attempts add column if not exists time_allowed_seconds integer not null default 0 check (time_allowed_seconds >= 0);
alter table public.learner_attempts add column if not exists deadline_at timestamptz;
alter table public.learner_attempts add column if not exists elapsed_seconds integer check (elapsed_seconds is null or elapsed_seconds >= 0);
alter table public.learner_attempts add column if not exists timed_out boolean not null default false;
alter table public.learner_attempts drop constraint if exists learner_attempts_status_check;
alter table public.learner_attempts add constraint learner_attempts_status_check check (status in ('in-progress','grading','submitted','awaiting_teacher_marking','marked'));

create index if not exists learner_attempts_school_idx on public.learner_attempts (school_name, stream_name);
create index if not exists learner_attempts_subject_idx on public.learner_attempts (grade, subject, started_at desc);
create index if not exists learner_attempts_status_idx on public.learner_attempts (status, started_at desc);

create or replace function public.is_teacher_admin()
returns boolean
language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.teacher_admins t where t.user_id = auth.uid()); $$;

alter table public.teacher_admins enable row level security;
alter table public.assessment_keys enable row level security;
alter table public.learner_attempts enable row level security;
revoke all on public.teacher_admins from anon, authenticated;
revoke all on public.assessment_keys from anon, authenticated;
revoke all on public.learner_attempts from anon, authenticated;
grant select on public.teacher_admins to authenticated;
grant select on public.learner_attempts to authenticated;
grant execute on function public.is_teacher_admin() to authenticated;

drop policy if exists "Teacher can read own admin profile" on public.teacher_admins;
create policy "Teacher can read own admin profile" on public.teacher_admins for select to authenticated using (user_id = auth.uid());
drop policy if exists "Admins can read all learner attempts" on public.learner_attempts;
create policy "Admins can read all learner attempts" on public.learner_attempts for select to authenticated using (public.is_teacher_admin());
-- assessment keys and learner writes are only accessed by the server-side Edge Function.

-- SQL schema for assessments (Postgres / Supabase)

create table if not exists public.assessments (
  id text primary key,
  title text not null,
  description text,
  grade text,
  subject text,
  topic text,
  type text,
  time_limit_minutes integer,
  attempt_limit integer default 1,
  linked_lesson text,
  created_by uuid,
  created_at timestamptz default now()
);

create table if not exists public.assessment_questions (
  id bigserial primary key,
  assessment_id text references public.assessments(id) on delete cascade,
  question_type text not null,
  prompt text not null,
  marks numeric default 1,
  model_answer text,
  explanation text,
  "order" integer default 0
);

create table if not exists public.question_options (
  id bigserial primary key,
  question_id bigint references public.assessment_questions(id) on delete cascade,
  label text not null,
  is_correct boolean default false,
  "order" integer default 0
);

create table if not exists public.attempts (
  id uuid primary key default gen_random_uuid(),
  assessment_id text references public.assessments(id) on delete cascade,
  user_id uuid,
  started_at timestamptz default now(),
  submitted_at timestamptz,
  duration_seconds integer,
  score numeric,
  total_marks numeric,
  percentage numeric,
  status text default 'in_progress',
  attempt_number integer default 1
);

create table if not exists public.submitted_answers (
  id bigserial primary key,
  attempt_id uuid references public.attempts(id) on delete cascade,
  question_id bigint references public.assessment_questions(id) on delete cascade,
  selected_option_ids int[],
  answer_text text,
  awarded_marks numeric,
  graded boolean default false,
  model_answer text
);

-- Indexes
create index if not exists idx_assessments_grade on public.assessments(grade);
create index if not exists idx_assessments_subject on public.assessments(subject);
create index if not exists idx_attempts_user on public.attempts(user_id);

-- Row level security guidance (enable per table and create policies):

-- Example: enable RLS on attempts and allow users to insert/select their own attempts only
-- ALTER TABLE public.attempts ENABLE ROW LEVEL SECURITY;
-- Create policy for insert/select/update for authenticated users:
-- CREATE POLICY "attempts_user_policy" ON public.attempts FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- For teachers/admins, create policies that check if user has a specific role (store roles in a separate table or use a custom claim).


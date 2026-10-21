-- CBE Nexus learner assessment history
create table if not exists public.assessment_records (id text primary key, serial_number text, learner text not null, learner_id text, grade text not null, subject text not null, strand text, sub_strand text, learning_outcome text, mode text not null default 'practice', total integer not null default 0 check (total between 0 and 50), answered integer not null default 0 check (answered between 0 and 50), correct integer not null default 0 check (correct between 0 and 50), score numeric not null default 0 check (score between 0 and 100), duration_seconds integer not null default 0 check (duration_seconds >= 0), results jsonb not null default '[]'::jsonb, remark text, created_at timestamptz not null default now());
create index if not exists assessment_records_created_at_idx on public.assessment_records (created_at desc);
create index if not exists assessment_records_learner_id_idx on public.assessment_records (learner_id);
create index if not exists assessment_records_grade_subject_idx on public.assessment_records (grade, subject);
alter table public.assessment_records enable row level security;

-- CBE Nexus interactive questions persistent storage
create table if not exists public.interactive_questions (
  id text primary key,
  grade text not null,
  subject text not null,
  strand text not null default 'All Topics',
  question text not null,
  options jsonb not null default '[]'::jsonb,
  correct_index integer not null check (correct_index between 0 and 3),
  explanation text not null default '',
  image_url text not null default '',
  image_data text not null default '',
  image_alt text not null default '',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists interactive_questions_grade_subject_idx on public.interactive_questions (grade, subject, published);
alter table public.interactive_questions enable row level security;

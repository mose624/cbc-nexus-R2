-- International curriculum metadata for the shared interactive question bank.
alter table public.interactive_questions
  add column if not exists country text not null default 'Kenya',
  add column if not exists curriculum text not null default 'Kenya CBC/CBE';
create index if not exists interactive_questions_global_scope_idx
  on public.interactive_questions (country, curriculum, grade, subject, published);

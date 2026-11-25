-- CBE Nexus universal online notes manager
create table if not exists public.online_notes (
  id text primary key,
  curriculum text not null,
  country text not null default '',
  level text not null,
  subject text not null,
  topic text not null default '',
  chapter text not null default '',
  title text not null,
  objectives text not null default '',
  content text not null,
  examples text not null default '',
  practical text not null default '',
  questions text not null default '',
  answers text not null default '',
  seo_title text not null default '',
  seo_description text not null default '',
  seo_keywords text not null default '',
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists online_notes_public_idx
  on public.online_notes(status,curriculum,country,subject,level,updated_at desc);
create index if not exists online_notes_subject_idx
  on public.online_notes(subject,curriculum,country);
alter table public.online_notes enable row level security;
drop policy if exists "Public published online notes read" on public.online_notes;
create policy "Public published online notes read"
  on public.online_notes for select to anon,authenticated using(status='published');
drop policy if exists "Service role manages online notes" on public.online_notes;
create policy "Service role manages online notes"
  on public.online_notes for all to service_role using(true) with check(true);

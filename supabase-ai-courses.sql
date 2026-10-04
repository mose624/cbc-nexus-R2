create table if not exists public.ai_courses (
  id text primary key,
  slug text not null,
  title text not null,
  short text,
  description text,
  provider text,
  category text,
  level text default 'Beginner',
  duration text,
  course_url text not null,
  featured boolean default false,
  status text default 'published',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists ai_courses_status_idx on public.ai_courses(status);
create index if not exists ai_courses_featured_idx on public.ai_courses(featured);

alter table public.ai_courses enable row level security;
drop policy if exists "Public published AI courses" on public.ai_courses;
create policy "Public published AI courses"
on public.ai_courses for select
using (status='published');
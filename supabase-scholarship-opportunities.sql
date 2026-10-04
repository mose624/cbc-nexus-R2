create table if not exists public.scholarship_opportunities (
 id text primary key,
 title text not null,
 organization text,
 country text,
 type text not null default 'Scholarship',
 level text,
 field text,
 funding text,
 description text,
 eligibility text,
 benefits text,
 requirements text,
 opening_date text,
 deadline text,
 apply_url text not null,
 featured boolean default false,
 status text default 'published',
 created_at timestamptz default now(),
 updated_at timestamptz default now()
);
create index if not exists scholarship_opportunities_status_idx on public.scholarship_opportunities(status);
create index if not exists scholarship_opportunities_deadline_idx on public.scholarship_opportunities(deadline);
alter table public.scholarship_opportunities enable row level security;
create policy "Public can view published opportunities" on public.scholarship_opportunities for select using (status='published');
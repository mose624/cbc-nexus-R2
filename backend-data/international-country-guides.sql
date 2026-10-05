-- CBE Nexus: international country application guides
create table if not exists public.international_country_guides (
  id text primary key,
  country text not null,
  flag text default '',
  currency text default '',
  region text default '',
  average_salary text default '',
  salary_period text default 'Monthly',
  cost_of_living text default '',
  rent text default '',
  food text default '',
  transport text default '',
  healthcare text default '',
  estimated_savings text default '',
  housing_benefit text default '',
  flight_benefit text default '',
  visa text default '',
  work_permit text default '',
  qualifications text default '',
  teacher_registration text default '',
  experience text default '',
  language text default '',
  curricula text default '',
  subjects_in_demand text default '',
  recruitment_period text default '',
  required_documents text default '',
  official_links text default '',
  notes text default '',
  last_verified text default '',
  status text not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.international_country_guides enable row level security;
drop policy if exists "Public can read published country guides" on public.international_country_guides;
create policy "Public can read published country guides" on public.international_country_guides for select using (status='published');

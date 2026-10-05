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
create policy "Public can read published country guides"
on public.international_country_guides
for select
using (status = 'published');

create index if not exists international_country_guides_status_idx
on public.international_country_guides(status);

create index if not exists international_country_guides_country_idx
on public.international_country_guides(country);

-- Initial country directory. Values such as salary and cost of living are intentionally
-- blank until verified and entered from current official/reliable sources.
insert into public.international_country_guides
(id,country,flag,currency,region,salary_period,status)
values
('country-1','United Arab Emirates','🇦🇪','AED','Gulf','Monthly','published'),
('country-2','Qatar','🇶🇦','QAR','Gulf','Monthly','published'),
('country-3','Saudi Arabia','🇸🇦','SAR','Gulf','Monthly','published'),
('country-4','Oman','🇴🇲','OMR','Gulf','Monthly','published'),
('country-5','United States','🇺🇸','USD','North America','Monthly','published'),
('country-6','Canada','🇨🇦','CAD','North America','Monthly','published'),
('country-7','United Kingdom','🇬🇧','GBP','Europe','Monthly','published'),
('country-8','China','🇨🇳','CNY','Asia','Monthly','published'),
('country-9','Japan','🇯🇵','JPY','Asia','Monthly','published'),
('country-10','South Korea','🇰🇷','KRW','Asia','Monthly','published'),
('country-11','Singapore','🇸🇬','SGD','Asia','Monthly','published'),
('country-12','Australia','🇦🇺','AUD','Oceania','Monthly','published'),
('country-13','New Zealand','🇳🇿','NZD','Oceania','Monthly','published'),
('country-14','South Africa','🇿🇦','ZAR','Africa','Monthly','published'),
('country-15','Germany','🇩🇪','EUR','Europe','Monthly','published'),
('country-16','France','🇫🇷','EUR','Europe','Monthly','published')
on conflict (id) do nothing;

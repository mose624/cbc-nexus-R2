alter table public.teaching_vacancies
  add column if not exists official_apply_url text,
  add column if not exists school_website_url text,
  add column if not exists official_website_verified boolean not null default false;

create index if not exists teaching_vacancies_official_website_verified_idx
  on public.teaching_vacancies (official_website_verified)
  where official_website_verified = true;

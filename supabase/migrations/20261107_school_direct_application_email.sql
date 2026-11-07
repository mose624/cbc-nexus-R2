-- Store the school's own recruitment email for direct applicant contact.
alter table public.teaching_vacancies
  add column if not exists application_email text,
  add column if not exists application_email_verified boolean not null default false;

create index if not exists teaching_vacancies_application_email_verified_idx
  on public.teaching_vacancies (application_email_verified)
  where application_email_verified = true;

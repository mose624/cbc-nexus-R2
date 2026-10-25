-- CBE Nexus teacher listing checkout: run once in Supabase SQL Editor.
-- Stores a unique Paystack reference to bind provider verification to one application.
alter table public.global_teachers
  add column if not exists payment_reference text;

create unique index if not exists global_teachers_payment_reference_unique
  on public.global_teachers (payment_reference)
  where payment_reference is not null;

notify pgrst, 'reload schema';

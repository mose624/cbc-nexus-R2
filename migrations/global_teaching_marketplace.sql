-- CBE Nexus Global Online Teaching Marketplace
-- Run once in Supabase SQL Editor. Server-side service role handles writes.
create extension if not exists pgcrypto;

create table if not exists public.global_teachers (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  country text not null,
  languages text not null default '',
  subjects text not null default '',
  levels text not null default '',
  curriculum text not null default '',
  experience text not null default '',
  qualifications text not null default '',
  bio text not null default '',
  hourly_rate numeric(10,2),
  rate_currency text not null default 'USD',
  status text not null default 'pending' check (status in ('pending','approved','rejected','suspended')),
  payment_status text not null default 'unpaid' check (payment_status in ('unpaid','pending','paid','waived','refunded')),
  listing_plan text not null default 'basic' check (listing_plan in ('basic','visibility','global')),
  promoted_until timestamptz,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists global_teachers_email_unique on public.global_teachers (lower(email));
create index if not exists global_teachers_status_created_idx on public.global_teachers (status, created_at desc);
create index if not exists global_teachers_country_idx on public.global_teachers (country);
create index if not exists global_teachers_plan_idx on public.global_teachers (listing_plan, promoted_until desc);

alter table public.global_teachers enable row level security;
drop policy if exists "Public approved teacher profiles" on public.global_teachers;
create policy "Public approved teacher profiles"
  on public.global_teachers for select to anon, authenticated
  using (status = 'approved' and payment_status in ('paid','waived'));

-- No public INSERT/UPDATE/DELETE policies are granted: all writes and moderation
-- must go through the CBE Nexus server using SUPABASE_SERVICE_ROLE_KEY.

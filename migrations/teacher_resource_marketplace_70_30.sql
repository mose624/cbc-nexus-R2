-- CBE Nexus teacher resource marketplace extension
-- Run once in the Supabase SQL editor before enabling the seller marketplace.
alter table public.resources
  add column if not exists country text,
  add column if not exists currency text not null default 'KES';

create table if not exists public.seller_earnings (
  id uuid primary key default gen_random_uuid(),
  purchase_id uuid not null unique references public.purchases(id) on delete restrict,
  resource_id uuid not null references public.resources(id) on delete restrict,
  seller_id uuid not null references public.sellers(id) on delete restrict,
  gross_amount numeric(14,2) not null check (gross_amount > 0),
  seller_amount numeric(14,2) not null check (seller_amount >= 0),
  platform_amount numeric(14,2) not null check (platform_amount >= 0),
  currency text not null default 'KES',
  status text not null default 'earned' check (status in ('earned','approved_for_payout','paid','reversed')),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create index if not exists seller_earnings_seller_created_idx
  on public.seller_earnings (seller_id, created_at desc);
create index if not exists resources_country_currency_status_idx
  on public.resources (country, currency, status);

alter table public.seller_earnings enable row level security;
-- Server-side Supabase service-role access is used by the CBE Nexus API.
-- No public policies are added; seller earnings are never exposed anonymously.

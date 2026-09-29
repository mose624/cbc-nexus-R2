-- CBE Nexus live marketplace analytics
-- Run this once in the Supabase SQL Editor.

create table if not exists public.purchases (
  id uuid primary key default gen_random_uuid(),
  resource_id text not null,
  customer_phone text,
  amount numeric(12,2) not null default 0,
  status text not null default 'paid',
  payment_reference text,
  created_at timestamptz not null default now()
);

create index if not exists purchases_resource_id_idx on public.purchases(resource_id);
create index if not exists purchases_status_idx on public.purchases(status);

create table if not exists public.downloads (
  id uuid primary key default gen_random_uuid(),
  resource_id text not null,
  customer_phone text,
  purchase_id uuid references public.purchases(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists downloads_resource_id_idx on public.downloads(resource_id);

-- Keep these tables server-only. The Node backend uses the Supabase service-role key,
-- which bypasses RLS, while browser clients must not be given direct access.
alter table public.purchases enable row level security;
alter table public.downloads enable row level security;


-- Admin-controlled download approval workflow
create table if not exists public.download_approvals (
  id text primary key,
  resource_id text not null,
  customer_phone text not null,
  payment_reference text,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  approved_at timestamptz
);
create index if not exists download_approvals_resource_idx on public.download_approvals(resource_id);
create index if not exists download_approvals_phone_idx on public.download_approvals(customer_phone);
create index if not exists download_approvals_status_idx on public.download_approvals(status);
alter table public.download_approvals enable row level security;


-- Server-side Safaricom Daraja STK Push verification fields
alter table public.purchases add column if not exists checkout_request_id text;
alter table public.purchases add column if not exists merchant_request_id text;
alter table public.purchases add column if not exists mpesa_receipt text;
alter table public.purchases add column if not exists result_code integer;
alter table public.purchases add column if not exists result_desc text;
alter table public.purchases add column if not exists transaction_time text;
alter table public.purchases add column if not exists verified_at timestamptz;
create unique index if not exists purchases_checkout_request_id_uidx on public.purchases(checkout_request_id) where checkout_request_id is not null;
create index if not exists purchases_customer_phone_idx on public.purchases(customer_phone);

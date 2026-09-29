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

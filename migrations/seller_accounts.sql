-- CBE Nexus seller accounts
-- Apply this migration in the Supabase SQL Editor before enabling seller registration.
-- Seller passwords are hashed by the application server with scrypt; never store plaintext passwords.
-- All writes and seller lookups are performed by the server using SUPABASE_SERVICE_ROLE_KEY.
-- No anonymous or authenticated client policies are created.

create extension if not exists pgcrypto;

create table if not exists public.sellers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  username text not null,
  password_hash text not null,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Keep the migration safe to re-run and support installations where the table
-- was created earlier with only part of the expected seller-account columns.
alter table public.sellers
  add column if not exists name text,
  add column if not exists phone text,
  add column if not exists username text,
  add column if not exists password_hash text,
  add column if not exists status text not null default 'pending',
  add column if not exists created_at timestamptz not null default now(),
  add column if not exists updated_at timestamptz not null default now();

create unique index if not exists sellers_username_lower_unique
  on public.sellers (lower(username));

create index if not exists sellers_status_created_idx
  on public.sellers (status, created_at desc);

alter table public.sellers enable row level security;

-- Intentionally no public policies: the CBE Nexus server uses the Supabase
-- service-role key, which must remain a server-side secret.

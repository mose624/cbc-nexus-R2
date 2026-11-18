-- CBE Nexus seller account storage
-- Apply this migration in the Supabase SQL Editor before enabling seller registration.
-- The application stores scrypt password hashes, never plaintext passwords.
-- All writes and seller lookups are performed server-side with SUPABASE_SERVICE_ROLE_KEY.
-- No anonymous or authenticated client policies are created.

create extension if not exists pgcrypto;

-- The marketplace admin dashboard also reads this application-level user directory.
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  full_name text,
  phone text not null,
  role text not null default 'seller',
  status text not null default 'active',
  created_at timestamptz not null default now()
);

alter table public.users
  add column if not exists name text,
  add column if not exists full_name text,
  add column if not exists phone text,
  add column if not exists role text not null default 'seller',
  add column if not exists status text not null default 'active',
  add column if not exists created_at timestamptz not null default now();

create table if not exists public.sellers (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  name text not null,
  phone text not null,
  username text not null,
  password_hash text not null,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.sellers
  add column if not exists user_id text,
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

alter table public.users enable row level security;
alter table public.sellers enable row level security;

-- Intentionally no public policies. The server-side service-role key is required.

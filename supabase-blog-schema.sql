-- CBE Nexus Blog publishing system
-- Run this in Supabase SQL Editor before publishing from the Admin Dashboard.

create table if not exists public.blog_posts (
  id text primary key,
  title text not null,
  slug text not null unique,
  category text not null default 'CBC/CBE',
  excerpt text not null default '',
  content text not null,
  featured_image text not null default '',
  keywords text not null default '',
  seo_title text not null default '',
  meta_description text not null default '',
  author text not null default 'CBE Nexus',
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_status_created_idx
  on public.blog_posts(status, created_at desc);

create index if not exists blog_posts_slug_idx
  on public.blog_posts(slug);

alter table public.blog_posts enable row level security;

-- The Node/Express backend uses the Supabase service-role key.
-- Do not expose that key in browser JavaScript.
-- Public blog reads are performed through /api/blog/posts and /api/blog/post/:slug.

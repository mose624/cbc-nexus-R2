-- CBE Nexus: Explee hot-lead feed storage.
-- Run once in the Supabase SQL Editor. Server access uses the existing service-role key.
CREATE TABLE IF NOT EXISTS public.explee_hot_leads (
  person_id text PRIMARY KEY,
  campaign_id bigint NOT NULL,
  project_id bigint NOT NULL DEFAULT 68532,
  name text,
  email text,
  job_title text,
  company_name text,
  company_domain text,
  linkedin_url text,
  country text,
  phone text,
  why_hot text,
  became_hot_at timestamptz,
  replied_at timestamptz,
  erased boolean NOT NULL DEFAULT false,
  raw jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS explee_hot_leads_project_hot_idx
  ON public.explee_hot_leads(project_id, became_hot_at DESC);
ALTER TABLE public.explee_hot_leads ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.explee_hot_leads FROM anon, authenticated;

CREATE TABLE IF NOT EXISTS public.explee_hot_lead_sync_state (
  id text PRIMARY KEY,
  cursor_at timestamptz,
  last_checked_at timestamptz,
  last_error text,
  last_lead_count integer NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.explee_hot_lead_sync_state ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.explee_hot_lead_sync_state FROM anon, authenticated;

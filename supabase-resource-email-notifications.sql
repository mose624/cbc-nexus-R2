-- CBE Nexus: Resend resource update email integration
-- Run this in the Supabase SQL Editor after the resource_subscribers table exists.

ALTER TABLE public.resource_subscribers
  ADD COLUMN IF NOT EXISTS unsubscribed_at timestamptz;

CREATE TABLE IF NOT EXISTS public.resource_update_notifications (
  resource_id text NOT NULL,
  subscriber_email text NOT NULL,
  resend_email_id text,
  sent_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (resource_id, subscriber_email)
);

ALTER TABLE public.resource_update_notifications ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON TABLE public.resource_update_notifications FROM anon, authenticated;

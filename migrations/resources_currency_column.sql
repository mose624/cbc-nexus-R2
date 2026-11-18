-- CBE Nexus seller resource currency compatibility
-- Seller uploads, public resource lookups and seller earnings read/write resources.currency.
-- Existing resources are preserved and receive the KES default.
ALTER TABLE public.resources
  ADD COLUMN IF NOT EXISTS currency text NOT NULL DEFAULT 'KES';

NOTIFY pgrst, 'reload schema';

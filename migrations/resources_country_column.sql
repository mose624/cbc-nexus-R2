-- CBE Nexus seller resource metadata compatibility
-- The seller upload and dashboard APIs read/write resources.country.
-- Safe to run repeatedly; existing resources and payment records are preserved.
ALTER TABLE public.resources
  ADD COLUMN IF NOT EXISTS country text;

NOTIFY pgrst, 'reload schema';

-- CBE Nexus seller resource upload schema compatibility
-- Safe to run repeatedly. Adds only optional marketplace metadata columns;
-- existing resource records, purchases and payment flows are preserved.

ALTER TABLE public.resources
  ADD COLUMN IF NOT EXISTS country text,
  ADD COLUMN IF NOT EXISTS currency text NOT NULL DEFAULT 'KES',
  ADD COLUMN IF NOT EXISTS online_content text NOT NULL DEFAULT '';

COMMENT ON COLUMN public.resources.online_content IS
  'HTML content rendered inside the CBE Nexus website reader; not a PDF URL or file download.';

NOTIFY pgrst, 'reload schema';

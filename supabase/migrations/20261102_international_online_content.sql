-- Add website-native reading content for international resources.
-- Store sanitized HTML authored for the CBE Nexus online reader.
ALTER TABLE public.resources
  ADD COLUMN IF NOT EXISTS online_content text NOT NULL DEFAULT '';

COMMENT ON COLUMN public.resources.online_content IS
  'HTML content rendered inside the CBE Nexus website reader; not a PDF URL or file download.';

-- Store the Cloudflare R2 object key for each required teacher passport photo.
ALTER TABLE public.global_teachers
  ADD COLUMN IF NOT EXISTS photo_url text;

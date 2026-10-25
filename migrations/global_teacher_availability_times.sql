ALTER TABLE public.global_teachers
  ADD COLUMN IF NOT EXISTS availability_times text[] NOT NULL DEFAULT '{}';

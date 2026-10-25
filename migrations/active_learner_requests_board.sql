-- CBE Nexus: private Active Learners Seeking Teachers board.
ALTER TABLE public.global_teachers ADD COLUMN IF NOT EXISTS password_hash text;
CREATE TABLE IF NOT EXISTS public.active_learner_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 learner_name text NOT NULL,
 guardian_name text NOT NULL DEFAULT '',
 contact_email text NOT NULL DEFAULT '',
 contact_phone text NOT NULL DEFAULT '',
 learner_country text NOT NULL,
 education_level text NOT NULL,
 subjects text NOT NULL,
 curriculum text NOT NULL DEFAULT '',
 preferred_times text NOT NULL,
 time_zone text NOT NULL DEFAULT '',
 lesson_mode text NOT NULL DEFAULT 'Online',
 sessions_per_week text NOT NULL DEFAULT '',
 budget text NOT NULL DEFAULT '',
 learner_notes text NOT NULL DEFAULT '',
 status text NOT NULL DEFAULT 'pending' CHECK(status IN ('pending','active','closed','filled')),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS active_learner_requests_status_created_idx ON public.active_learner_requests(status,created_at DESC);
ALTER TABLE public.active_learner_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.active_learner_requests FROM anon, authenticated;

-- Safe additions for databases where the original board table already exists.
ALTER TABLE public.active_learner_requests ADD COLUMN IF NOT EXISTS guardian_name text NOT NULL DEFAULT '';
ALTER TABLE public.active_learner_requests ADD COLUMN IF NOT EXISTS contact_email text NOT NULL DEFAULT '';
ALTER TABLE public.active_learner_requests ADD COLUMN IF NOT EXISTS contact_phone text NOT NULL DEFAULT '';
ALTER TABLE public.active_learner_requests ADD COLUMN IF NOT EXISTS sessions_per_week text NOT NULL DEFAULT '';
ALTER TABLE public.active_learner_requests ADD COLUMN IF NOT EXISTS budget text NOT NULL DEFAULT '';
ALTER TABLE public.active_learner_requests ALTER COLUMN status SET DEFAULT 'pending';
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'active_learner_requests_status_check') THEN
    ALTER TABLE public.active_learner_requests DROP CONSTRAINT active_learner_requests_status_check;
  END IF;
  ALTER TABLE public.active_learner_requests ADD CONSTRAINT active_learner_requests_status_check CHECK (status IN ('pending','active','closed','filled'));
END $$;

-- CBE Nexus: private Active Learners Seeking Teachers board.
ALTER TABLE public.global_teachers ADD COLUMN IF NOT EXISTS password_hash text;
CREATE TABLE IF NOT EXISTS public.active_learner_requests (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 learner_name text NOT NULL,
 learner_country text NOT NULL,
 education_level text NOT NULL,
 subjects text NOT NULL,
 curriculum text NOT NULL DEFAULT '',
 preferred_times text NOT NULL,
 time_zone text NOT NULL DEFAULT '',
 lesson_mode text NOT NULL DEFAULT 'Online',
 learner_notes text NOT NULL DEFAULT '',
 status text NOT NULL DEFAULT 'active' CHECK(status IN ('active','closed','filled')),
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS active_learner_requests_status_created_idx ON public.active_learner_requests(status,created_at DESC);
ALTER TABLE public.active_learner_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.active_learner_requests FROM anon, authenticated;

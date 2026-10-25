-- Store a teacher's target learner countries for marketplace matching.
-- An empty array means the teacher is open to learners worldwide.
ALTER TABLE public.global_teachers
  ADD COLUMN IF NOT EXISTS preferred_countries text[] NOT NULL DEFAULT '{}';


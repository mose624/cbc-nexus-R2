-- CBE Nexus School Directory
CREATE TABLE IF NOT EXISTS public.schools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT,
  curriculum TEXT,
  type TEXT,
  website TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  description TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.school_vacancies (
  id TEXT PRIMARY KEY,
  school_id TEXT NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  subject TEXT NOT NULL,
  level TEXT NOT NULL,
  employment TEXT,
  salary TEXT,
  deadline TEXT,
  description TEXT,
  requirements TEXT,
  apply_url TEXT NOT NULL,
  status TEXT DEFAULT 'pending',
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_vacancies ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view published schools" ON public.schools;
CREATE POLICY "Public can view published schools"
ON public.schools FOR SELECT TO anon, authenticated
USING (status = 'published');

DROP POLICY IF EXISTS "Public can view published school vacancies" ON public.school_vacancies;
CREATE POLICY "Public can view published school vacancies"
ON public.school_vacancies FOR SELECT TO anon, authenticated
USING (status = 'published');

CREATE INDEX IF NOT EXISTS schools_status_idx ON public.schools(status);
CREATE INDEX IF NOT EXISTS school_vacancies_school_id_idx ON public.school_vacancies(school_id);
CREATE INDEX IF NOT EXISTS school_vacancies_status_idx ON public.school_vacancies(status);
CREATE INDEX IF NOT EXISTS school_vacancies_deadline_idx ON public.school_vacancies(deadline);

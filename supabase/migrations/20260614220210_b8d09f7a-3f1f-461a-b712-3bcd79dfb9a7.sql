ALTER TABLE public.chem_questions ADD COLUMN IF NOT EXISTS school_level TEXT NOT NULL DEFAULT 'medio' CHECK (school_level IN ('fundamental','medio'));
ALTER TABLE public.chem_terms ADD COLUMN IF NOT EXISTS school_level TEXT NOT NULL DEFAULT 'medio' CHECK (school_level IN ('fundamental','medio'));
CREATE INDEX IF NOT EXISTS idx_chem_questions_level ON public.chem_questions(school_level);
CREATE INDEX IF NOT EXISTS idx_chem_terms_level ON public.chem_terms(school_level);
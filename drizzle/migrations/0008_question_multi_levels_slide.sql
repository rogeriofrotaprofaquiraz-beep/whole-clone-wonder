ALTER TABLE public.chem_questions ADD COLUMN IF NOT EXISTS school_levels text[] NOT NULL DEFAULT '{}';
ALTER TABLE public.chem_questions ADD COLUMN IF NOT EXISTS slide_content text;
UPDATE public.chem_questions SET school_levels = ARRAY[school_level] WHERE school_levels = '{}';
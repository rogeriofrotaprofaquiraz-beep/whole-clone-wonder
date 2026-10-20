ALTER TYPE public.chem_area ADD VALUE IF NOT EXISTS 'ciencias';
ALTER TABLE public.chem_questions ADD COLUMN IF NOT EXISTS lesson text, ADD COLUMN IF NOT EXISTS image_url text;

ALTER TABLE public.lesson_plans
  ADD COLUMN IF NOT EXISTS school_id uuid,
  ADD COLUMN IF NOT EXISTS discipline text,
  ADD COLUMN IF NOT EXISTS lesson_date date,
  ADD COLUMN IF NOT EXISTS bimestre text,
  ADD COLUMN IF NOT EXISTS contents_topics text,
  ADD COLUMN IF NOT EXISTS slides_material text,
  ADD COLUMN IF NOT EXISTS bncc_codes text,
  ADD COLUMN IF NOT EXISTS objective text,
  ADD COLUMN IF NOT EXISTS methodology text,
  ADD COLUMN IF NOT EXISTS curricular_components text,
  ADD COLUMN IF NOT EXISTS competencies_codes text,
  ADD COLUMN IF NOT EXISTS competencies_text text,
  ADD COLUMN IF NOT EXISTS skills_codes text,
  ADD COLUMN IF NOT EXISTS skills_text text,
  ADD COLUMN IF NOT EXISTS descriptors_codes text,
  ADD COLUMN IF NOT EXISTS descriptors_text text;

ALTER TABLE public.topic_overrides
  ADD COLUMN IF NOT EXISTS lesson_plan text,
  ADD COLUMN IF NOT EXISTS bncc_codes jsonb NOT NULL DEFAULT '[]'::jsonb;
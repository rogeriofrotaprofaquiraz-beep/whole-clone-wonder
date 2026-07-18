ALTER TABLE public.topic_overrides
  ADD COLUMN IF NOT EXISTS daily_life text[] DEFAULT '{}'::text[],
  ADD COLUMN IF NOT EXISTS curiosities text[] DEFAULT '{}'::text[],
  ADD COLUMN IF NOT EXISTS fun_facts text[] DEFAULT '{}'::text[];
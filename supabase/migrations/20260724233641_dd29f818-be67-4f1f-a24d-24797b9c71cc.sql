ALTER TABLE public.topic_overrides
  ADD COLUMN IF NOT EXISTS edit_complete boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS reviewed boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS published boolean NOT NULL DEFAULT false;
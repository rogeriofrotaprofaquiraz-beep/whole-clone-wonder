ALTER TABLE public.topic_overrides
  ADD COLUMN IF NOT EXISTS video_url text,
  ADD COLUMN IF NOT EXISTS materials jsonb NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE public.courses
  ADD COLUMN IF NOT EXISTS edit_complete boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS reviewed boolean NOT NULL DEFAULT false;

CREATE TABLE public.topic_exercise_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  topic_slug text not null,
  topic_title text not null,
  category text,
  course_id uuid references public.courses on delete set null,
  score numeric(4,2) not null,
  correct int not null,
  total int not null,
  answers jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.topic_exercise_attempts TO authenticated;
GRANT ALL ON public.topic_exercise_attempts TO service_role;
ALTER TABLE public.topic_exercise_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user manages own attempts"
  ON public.topic_exercise_attempts FOR ALL
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE POLICY "admin views all attempts"
  ON public.topic_exercise_attempts FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE INDEX topic_attempts_user_created_idx
  ON public.topic_exercise_attempts (user_id, created_at DESC);
CREATE INDEX topic_attempts_slug_idx
  ON public.topic_exercise_attempts (topic_slug);

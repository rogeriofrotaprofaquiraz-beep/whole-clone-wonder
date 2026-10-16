ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_olympiad boolean NOT NULL DEFAULT false;

CREATE TABLE public.olympiads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  acronym text NOT NULL,
  name text NOT NULL,
  description text,
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.olympiads TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.olympiads TO authenticated;
GRANT ALL ON public.olympiads TO service_role;
ALTER TABLE public.olympiads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "olympiads read" ON public.olympiads FOR SELECT USING (true);
CREATE POLICY "olympiads manage" ON public.olympiads FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator'))
  WITH CHECK (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator'));

CREATE TABLE public.olympiad_exams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  olympiad_id uuid NOT NULL REFERENCES public.olympiads(id) ON DELETE CASCADE,
  title text NOT NULL,
  year integer,
  source text NOT NULL DEFAULT 'manual',
  questions jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.olympiad_exams TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.olympiad_exams TO authenticated;
GRANT ALL ON public.olympiad_exams TO service_role;
ALTER TABLE public.olympiad_exams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "exams read" ON public.olympiad_exams FOR SELECT USING (true);
CREATE POLICY "exams manage" ON public.olympiad_exams FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator'))
  WITH CHECK (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator'));

CREATE TABLE public.olympiad_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  exam_id uuid NOT NULL REFERENCES public.olympiad_exams(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  score numeric NOT NULL,
  correct integer NOT NULL,
  total integer NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.olympiad_attempts TO authenticated;
GRANT ALL ON public.olympiad_attempts TO service_role;
ALTER TABLE public.olympiad_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "attempts read" ON public.olympiad_attempts FOR SELECT TO authenticated USING (true);
CREATE POLICY "attempts insert own" ON public.olympiad_attempts FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());
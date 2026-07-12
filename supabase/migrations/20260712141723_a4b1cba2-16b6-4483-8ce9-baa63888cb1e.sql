
-- 1) carga horária no curso
ALTER TABLE public.courses ADD COLUMN IF NOT EXISTS hours INTEGER NOT NULL DEFAULT 40;

-- 2) avaliações por curso
CREATE TABLE IF NOT EXISTS public.course_assessments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL DEFAULT 'Avaliação Final',
  passing_score NUMERIC(4,2) NOT NULL DEFAULT 7.00,
  questions JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(course_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.course_assessments TO authenticated;
GRANT ALL ON public.course_assessments TO service_role;
ALTER TABLE public.course_assessments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "assessments viewable by authenticated"
  ON public.course_assessments FOR SELECT TO authenticated USING (true);
CREATE POLICY "admins manage assessments"
  ON public.course_assessments FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin'))
  WITH CHECK (public.has_role(auth.uid(),'admin'));

-- 3) tentativas
CREATE TABLE IF NOT EXISTS public.assessment_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  assessment_id UUID REFERENCES public.course_assessments(id) ON DELETE SET NULL,
  score NUMERIC(4,2) NOT NULL DEFAULT 0,
  total_questions INTEGER NOT NULL DEFAULT 0,
  correct_count INTEGER NOT NULL DEFAULT 0,
  passed BOOLEAN NOT NULL DEFAULT false,
  answers JSONB NOT NULL DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.assessment_attempts TO authenticated;
GRANT ALL ON public.assessment_attempts TO service_role;
ALTER TABLE public.assessment_attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own attempts view"
  ON public.assessment_attempts FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "own attempts insert"
  ON public.assessment_attempts FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 4) certificados
CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  code TEXT NOT NULL UNIQUE,
  hours INTEGER NOT NULL,
  score NUMERIC(4,2) NOT NULL,
  student_name TEXT NOT NULL,
  course_title TEXT NOT NULL,
  issued_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, course_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.certificates TO authenticated;
GRANT SELECT ON public.certificates TO anon;
GRANT ALL ON public.certificates TO service_role;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "certificates public validation"
  ON public.certificates FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "own certificate insert"
  ON public.certificates FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 5) trigger updated_at
DROP TRIGGER IF EXISTS trg_assessments_updated ON public.course_assessments;
CREATE TRIGGER trg_assessments_updated BEFORE UPDATE ON public.course_assessments
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 6) função para submeter tentativa e emitir certificado
CREATE OR REPLACE FUNCTION public.submit_assessment(
  _course_id UUID,
  _answers JSONB
) RETURNS JSONB
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  _uid UUID := auth.uid();
  _assessment RECORD;
  _course RECORD;
  _questions JSONB;
  _q JSONB;
  _idx INT := 0;
  _correct INT := 0;
  _total INT := 0;
  _score NUMERIC(4,2);
  _passed BOOLEAN;
  _cert_code TEXT;
  _uname TEXT;
  _cert_id UUID;
BEGIN
  IF _uid IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  SELECT * INTO _course FROM public.courses WHERE id = _course_id;
  IF _course IS NULL THEN RAISE EXCEPTION 'Curso não encontrado'; END IF;
  SELECT * INTO _assessment FROM public.course_assessments WHERE course_id = _course_id;
  IF _assessment IS NULL THEN RAISE EXCEPTION 'Avaliação não configurada'; END IF;

  _questions := _assessment.questions;
  _total := jsonb_array_length(_questions);
  IF _total = 0 THEN RAISE EXCEPTION 'Nenhuma questão'; END IF;

  FOR _idx IN 0.._total-1 LOOP
    _q := _questions -> _idx;
    IF (_answers -> _idx)::text = (_q -> 'correct')::text THEN
      _correct := _correct + 1;
    END IF;
  END LOOP;

  _score := ROUND((_correct::numeric / _total::numeric) * 10, 2);
  _passed := _score >= _assessment.passing_score;

  INSERT INTO public.assessment_attempts
    (user_id, course_id, assessment_id, score, total_questions, correct_count, passed, answers)
  VALUES
    (_uid, _course_id, _assessment.id, _score, _total, _correct, _passed, _answers);

  IF _passed THEN
    SELECT COALESCE(username, 'Aluno') INTO _uname FROM public.profiles WHERE id = _uid;
    _cert_code := 'EH-' || upper(substr(replace(encode(gen_random_bytes(6),'hex'),'-',''),1,10));

    INSERT INTO public.certificates
      (user_id, course_id, code, hours, score, student_name, course_title)
    VALUES
      (_uid, _course_id, _cert_code, _course.hours, _score, _uname, _course.title)
    ON CONFLICT (user_id, course_id) DO UPDATE
      SET score = GREATEST(public.certificates.score, EXCLUDED.score),
          issued_at = now()
    RETURNING id INTO _cert_id;
  END IF;

  RETURN jsonb_build_object(
    'score', _score,
    'passed', _passed,
    'correct', _correct,
    'total', _total,
    'passing_score', _assessment.passing_score,
    'certificate_code', _cert_code
  );
END; $$;

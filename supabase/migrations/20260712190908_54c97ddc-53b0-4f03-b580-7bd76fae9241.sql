
ALTER TABLE public.course_assessments 
  ADD COLUMN IF NOT EXISTS question_bank jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS questions_per_attempt int NOT NULL DEFAULT 10;

CREATE OR REPLACE FUNCTION public.submit_assessment(_course_id uuid, _answers jsonb, _indices jsonb DEFAULT NULL)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  _uid UUID := auth.uid();
  _assessment RECORD;
  _course RECORD;
  _bank JSONB;
  _q JSONB;
  _idx INT := 0;
  _bank_idx INT;
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

  -- Prefer question_bank if populated; otherwise fall back to legacy questions
  IF jsonb_array_length(COALESCE(_assessment.question_bank, '[]'::jsonb)) > 0 THEN
    _bank := _assessment.question_bank;
  ELSE
    _bank := _assessment.questions;
  END IF;

  _total := jsonb_array_length(_answers);
  IF _total = 0 THEN RAISE EXCEPTION 'Nenhuma resposta enviada'; END IF;

  FOR _idx IN 0.._total-1 LOOP
    IF _indices IS NOT NULL AND jsonb_array_length(_indices) = _total THEN
      _bank_idx := (_indices -> _idx)::text::int;
    ELSE
      _bank_idx := _idx;
    END IF;
    _q := _bank -> _bank_idx;
    IF _q IS NULL THEN CONTINUE; END IF;
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
END; $function$;

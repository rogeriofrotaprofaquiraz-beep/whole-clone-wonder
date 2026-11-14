CREATE TABLE public.course_question_disciplines (course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL, discipline_key text REFERENCES public.question_disciplines(key) ON DELETE CASCADE NOT NULL, PRIMARY KEY(course_id, discipline_key));
GRANT SELECT,INSERT,DELETE ON public.course_question_disciplines TO authenticated; GRANT ALL ON public.course_question_disciplines TO service_role;
ALTER TABLE public.course_question_disciplines ENABLE ROW LEVEL SECURITY;
CREATE POLICY course_question_read ON public.course_question_disciplines FOR SELECT TO authenticated USING (true);
CREATE POLICY course_question_manage ON public.course_question_disciplines FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TABLE public.student_game_access (user_id uuid PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE, all_courses boolean NOT NULL DEFAULT false);
GRANT SELECT,INSERT,UPDATE,DELETE ON public.student_game_access TO authenticated; GRANT ALL ON public.student_game_access TO service_role;
ALTER TABLE public.student_game_access ENABLE ROW LEVEL SECURITY;
CREATE POLICY student_access_read ON public.student_game_access FOR SELECT TO authenticated USING (user_id=auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY student_access_manage ON public.student_game_access FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TABLE public.student_game_courses (user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL, course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL, PRIMARY KEY(user_id,course_id));
GRANT SELECT,INSERT,DELETE ON public.student_game_courses TO authenticated; GRANT ALL ON public.student_game_courses TO service_role;
ALTER TABLE public.student_game_courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY student_courses_read ON public.student_game_courses FOR SELECT TO authenticated USING (user_id=auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY student_courses_manage ON public.student_game_courses FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE TABLE public.student_question_history (user_id uuid REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL, question_id uuid REFERENCES public.chem_questions(id) ON DELETE CASCADE NOT NULL, question_text text NOT NULL, game text NOT NULL, shown_at timestamptz NOT NULL DEFAULT now(), answered_at timestamptz, answer text, correct_answer text, is_correct boolean, points integer NOT NULL DEFAULT 0, PRIMARY KEY(user_id,question_id));
GRANT SELECT ON public.student_question_history TO authenticated; GRANT ALL ON public.student_question_history TO service_role;
ALTER TABLE public.student_question_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY student_history_read ON public.student_question_history FOR SELECT TO authenticated USING (user_id=auth.uid() OR public.is_staff(auth.uid()));
CREATE INDEX student_question_text_idx ON public.student_question_history(user_id,lower(btrim(question_text)));
CREATE OR REPLACE FUNCTION public.game_question_eligible(_user uuid,_question uuid) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT public.is_staff(_user) OR EXISTS(SELECT 1 FROM public.student_game_access a WHERE a.user_id=_user AND a.all_courses) OR EXISTS(SELECT 1 FROM public.student_game_courses s JOIN public.course_question_disciplines d ON d.course_id=s.course_id JOIN public.chem_questions q ON q.discipline=d.discipline_key WHERE s.user_id=_user AND q.id=_question)
$$;
REVOKE ALL ON FUNCTION public.game_question_eligible(uuid,uuid) FROM PUBLIC; GRANT EXECUTE ON FUNCTION public.game_question_eligible(uuid,uuid) TO authenticated;
CREATE OR REPLACE FUNCTION public.get_game_question_pool(_area text DEFAULT NULL,_topic text DEFAULT NULL,_level text DEFAULT NULL) RETURNS SETOF public.chem_questions LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
 SELECT q.* FROM public.chem_questions q WHERE auth.uid() IS NOT NULL AND public.game_question_eligible(auth.uid(),q.id)
 AND (_area IS NULL OR q.area::text=_area) AND (_topic IS NULL OR lower(btrim(coalesce(q.topic,q.lesson,'')))=lower(btrim(_topic))) AND (_level IS NULL OR q.school_level=_level OR _level=ANY(q.school_levels))
 AND NOT EXISTS(SELECT 1 FROM public.student_question_history h WHERE h.user_id=auth.uid() AND (h.question_id=q.id OR lower(btrim(h.question_text))=lower(btrim(q.question))))
 AND NOT EXISTS(SELECT 1 FROM public.game_question_log l WHERE l.user_id=auth.uid() AND lower(btrim(l.question))=lower(btrim(q.question))) ORDER BY q.id
$$;
REVOKE ALL ON FUNCTION public.get_game_question_pool(text,text,text) FROM PUBLIC; GRANT EXECUTE ON FUNCTION public.get_game_question_pool(text,text,text) TO authenticated;
CREATE OR REPLACE FUNCTION public.claim_game_questions(_ids uuid[],_game text) RETURNS SETOF public.chem_questions LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE v_uid uuid:=auth.uid(); v_q public.chem_questions; v_inserted integer;
BEGIN
 IF v_uid IS NULL THEN RAISE EXCEPTION 'Faça login para jogar'; END IF;
 IF cardinality(_ids)>100 OR length(_game)>100 OR btrim(_game)='' THEN RAISE EXCEPTION 'Seleção inválida'; END IF;
 PERFORM pg_advisory_xact_lock(hashtextextended(v_uid::text,0));
 FOREACH v_q.id IN ARRAY _ids LOOP
  SELECT * INTO v_q FROM public.chem_questions WHERE id=v_q.id;
  IF v_q.id IS NULL OR NOT public.game_question_eligible(v_uid,v_q.id) THEN CONTINUE; END IF;
  IF EXISTS(SELECT 1 FROM public.student_question_history WHERE user_id=v_uid AND lower(btrim(question_text))=lower(btrim(v_q.question))) OR EXISTS(SELECT 1 FROM public.game_question_log WHERE user_id=v_uid AND lower(btrim(question))=lower(btrim(v_q.question))) THEN CONTINUE; END IF;
  INSERT INTO public.student_question_history(user_id,question_id,question_text,game) VALUES(v_uid,v_q.id,v_q.question,_game) ON CONFLICT DO NOTHING;
  GET DIAGNOSTICS v_inserted=ROW_COUNT;
  IF v_inserted=1 THEN RETURN NEXT v_q; END IF;
 END LOOP;
END $$;
REVOKE ALL ON FUNCTION public.claim_game_questions(uuid[],text) FROM PUBLIC; GRANT EXECUTE ON FUNCTION public.claim_game_questions(uuid[],text) TO authenticated;
CREATE OR REPLACE FUNCTION public.answer_game_question(_question uuid,_answer text) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE h public.student_question_history; q public.chem_questions; ok boolean; correct text; pts integer;
BEGIN
 IF auth.uid() IS NULL OR length(_answer)>4000 THEN RAISE EXCEPTION 'Resposta inválida'; END IF;
 SELECT * INTO h FROM public.student_question_history WHERE user_id=auth.uid() AND question_id=_question FOR UPDATE;
 IF h.question_id IS NULL OR h.answered_at IS NOT NULL THEN RAISE EXCEPTION 'Questão indisponível ou já respondida'; END IF;
 SELECT * INTO q FROM public.chem_questions WHERE id=_question;
 correct:=coalesce(nullif(q.answer_text,''),q.options->>q.correct_index,'');
 ok:=lower(public.unaccent(btrim(_answer)))=lower(public.unaccent(btrim(correct)));
 pts:=CASE WHEN ok THEN 4 ELSE 1 END;
 UPDATE public.student_question_history SET answered_at=now(),answer=_answer,correct_answer=correct,is_correct=ok,points=pts WHERE user_id=auth.uid() AND question_id=_question;
 INSERT INTO public.game_question_log(user_id,game,question,answer,correct_answer,is_correct) VALUES(auth.uid(),h.game,q.question,_answer,correct,ok);
 RETURN jsonb_build_object('is_correct',ok,'points',pts,'correct_answer',correct);
END $$;
REVOKE ALL ON FUNCTION public.answer_game_question(uuid,text) FROM PUBLIC; GRANT EXECUTE ON FUNCTION public.answer_game_question(uuid,text) TO authenticated;
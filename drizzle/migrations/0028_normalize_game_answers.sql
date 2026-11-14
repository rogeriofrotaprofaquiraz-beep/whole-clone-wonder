CREATE OR REPLACE FUNCTION public.answer_game_question(_question uuid,_answer text) RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE h public.student_question_history; q public.chem_questions; ok boolean; correct text; pts integer;
BEGIN
 IF auth.uid() IS NULL OR _answer IS NULL OR length(_answer)>4000 THEN RAISE EXCEPTION 'Resposta inválida'; END IF;
 SELECT * INTO h FROM public.student_question_history WHERE user_id=auth.uid() AND question_id=_question FOR UPDATE;
 IF h.question_id IS NULL OR h.answered_at IS NOT NULL THEN RAISE EXCEPTION 'Questão indisponível ou já respondida'; END IF;
 SELECT * INTO q FROM public.chem_questions WHERE id=_question;
 correct:=coalesce(q.options->>q.correct_index,nullif(q.answer_text,''),'');
 ok:=translate(lower(btrim(_answer)),'áàâãäéèêëíìîïóòôõöúùûüç','aaaaaeeeeiiiiooooouuuuc')=translate(lower(btrim(correct)),'áàâãäéèêëíìîïóòôõöúùûüç','aaaaaeeeeiiiiooooouuuuc') OR (q.answer_text IS NOT NULL AND translate(lower(btrim(_answer)),'áàâãäéèêëíìîïóòôõöúùûüç','aaaaaeeeeiiiiooooouuuuc')=translate(lower(btrim(q.answer_text)),'áàâãäéèêëíìîïóòôõöúùûüç','aaaaaeeeeiiiiooooouuuuc'));
 pts:=CASE WHEN ok THEN 4 ELSE 1 END;
 UPDATE public.student_question_history SET answered_at=now(),answer=_answer,correct_answer=correct,is_correct=ok,points=pts WHERE user_id=auth.uid() AND question_id=_question;
 INSERT INTO public.game_question_log(user_id,game,question,answer,correct_answer,is_correct) VALUES(auth.uid(),h.game,q.question,_answer,correct,ok);
 RETURN jsonb_build_object('is_correct',ok,'points',pts,'correct_answer',correct);
END $$;
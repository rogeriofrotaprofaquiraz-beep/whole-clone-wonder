CREATE TABLE public.game_question_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  game text NOT NULL,
  question text NOT NULL,
  answer text,
  correct_answer text,
  is_correct boolean NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.game_question_log TO authenticated;
GRANT ALL ON public.game_question_log TO service_role;
ALTER TABLE public.game_question_log ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own insert" ON public.game_question_log FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "own or staff read" ON public.game_question_log FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'moderator'));
CREATE INDEX ON public.game_question_log(user_id, created_at DESC);
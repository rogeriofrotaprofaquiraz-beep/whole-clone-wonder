CREATE TABLE public.student_lesson_resets (
  user_id uuid NOT NULL,
  lesson_id uuid NOT NULL,
  course_id uuid NOT NULL,
  reset_at timestamptz NOT NULL DEFAULT now(),
  reset_by uuid,
  PRIMARY KEY (user_id, lesson_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.student_lesson_resets TO authenticated;
GRANT ALL ON public.student_lesson_resets TO service_role;
ALTER TABLE public.student_lesson_resets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own or staff read resets" ON public.student_lesson_resets FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY "staff write resets" ON public.student_lesson_resets FOR ALL TO authenticated USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "staff read deck logs" ON public.activity_logs FOR SELECT TO authenticated USING (action = 'deck_score' AND public.is_staff(auth.uid()));
CREATE POLICY "staff read enrollments" ON public.course_enrollments FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "staff read completions" ON public.lesson_completions FOR SELECT TO authenticated USING (public.is_staff(auth.uid()));
CREATE POLICY "staff delete completions" ON public.lesson_completions FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
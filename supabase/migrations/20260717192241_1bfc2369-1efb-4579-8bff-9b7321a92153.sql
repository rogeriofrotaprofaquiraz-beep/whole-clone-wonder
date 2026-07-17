
GRANT SELECT ON public.courses TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.courses TO authenticated;
GRANT ALL ON public.courses TO service_role;

GRANT SELECT ON public.course_lessons TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.course_lessons TO authenticated;
GRANT ALL ON public.course_lessons TO service_role;

GRANT SELECT ON public.course_assessments TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.course_assessments TO authenticated;
GRANT ALL ON public.course_assessments TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.course_enrollments TO authenticated;
GRANT ALL ON public.course_enrollments TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.lesson_completions TO authenticated;
GRANT ALL ON public.lesson_completions TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.assessment_attempts TO authenticated;
GRANT ALL ON public.assessment_attempts TO service_role;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.certificates TO authenticated;
GRANT ALL ON public.certificates TO service_role;

GRANT SELECT ON public.topic_overrides TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.topic_overrides TO authenticated;
GRANT ALL ON public.topic_overrides TO service_role;

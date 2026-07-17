
CREATE POLICY "anon read published courses" ON public.courses
  FOR SELECT TO anon USING (published = true);

CREATE POLICY "anon read lessons of published" ON public.course_lessons
  FOR SELECT TO anon USING (EXISTS (SELECT 1 FROM public.courses c WHERE c.id = course_lessons.course_id AND c.published = true));

GRANT SELECT ON public.courses TO anon;
GRANT SELECT ON public.course_lessons TO anon;
GRANT SELECT ON public.topic_overrides TO anon;

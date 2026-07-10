
-- COURSES
CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  area text NOT NULL DEFAULT 'geral',
  level text NOT NULL DEFAULT 'medio',
  cover_url text,
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.courses TO authenticated;
GRANT ALL ON public.courses TO service_role;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read published courses" ON public.courses FOR SELECT TO authenticated
  USING (published = true OR author_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "teachers create courses" ON public.courses FOR INSERT TO authenticated
  WITH CHECK (author_id = auth.uid());
CREATE POLICY "authors update courses" ON public.courses FOR UPDATE TO authenticated
  USING (author_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "authors delete courses" ON public.courses FOR DELETE TO authenticated
  USING (author_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER courses_updated BEFORE UPDATE ON public.courses
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- LESSONS
CREATE TABLE public.course_lessons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title text NOT NULL,
  content text,
  video_url text,
  order_index int NOT NULL DEFAULT 0,
  xp_reward int NOT NULL DEFAULT 20,
  coin_reward int NOT NULL DEFAULT 10,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.course_lessons TO authenticated;
GRANT ALL ON public.course_lessons TO service_role;
ALTER TABLE public.course_lessons ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read lessons of visible courses" ON public.course_lessons FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.courses c WHERE c.id = course_id
     AND (c.published = true OR c.author_id = auth.uid() OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "authors manage lessons" ON public.course_lessons FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.courses c WHERE c.id = course_id
     AND (c.author_id = auth.uid() OR public.has_role(auth.uid(),'admin'))))
  WITH CHECK (EXISTS (SELECT 1 FROM public.courses c WHERE c.id = course_id
     AND (c.author_id = auth.uid() OR public.has_role(auth.uid(),'admin'))));
CREATE TRIGGER lessons_updated BEFORE UPDATE ON public.course_lessons
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- ENROLLMENTS
CREATE TABLE public.course_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  enrolled_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (course_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.course_enrollments TO authenticated;
GRANT ALL ON public.course_enrollments TO service_role;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "self read enroll" ON public.course_enrollments FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin')
    OR EXISTS (SELECT 1 FROM public.courses c WHERE c.id = course_id AND c.author_id = auth.uid()));
CREATE POLICY "self enroll" ON public.course_enrollments FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "self unenroll" ON public.course_enrollments FOR DELETE TO authenticated
  USING (user_id = auth.uid());

-- COMPLETIONS
CREATE TABLE public.lesson_completions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  lesson_id uuid NOT NULL REFERENCES public.course_lessons(id) ON DELETE CASCADE,
  user_id uuid NOT NULL,
  completed_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lesson_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lesson_completions TO authenticated;
GRANT ALL ON public.lesson_completions TO service_role;
ALTER TABLE public.lesson_completions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "self read completions" ON public.lesson_completions FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin')
    OR EXISTS (SELECT 1 FROM public.course_lessons l
       JOIN public.courses c ON c.id = l.course_id
       WHERE l.id = lesson_id AND c.author_id = auth.uid()));
CREATE POLICY "self complete" ON public.lesson_completions FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "self uncomplete" ON public.lesson_completions FOR DELETE TO authenticated
  USING (user_id = auth.uid());

-- SEED: Química Geral
DO $$
DECLARE _cid uuid;
BEGIN
  INSERT INTO public.courses (title, description, area, level, published)
  VALUES ('Química Geral — Fundamentos',
          'Curso introdutório de química: matéria, átomos, tabela periódica, ligações e reações.',
          'geral', 'medio', true)
  RETURNING id INTO _cid;

  INSERT INTO public.course_lessons (course_id, title, content, order_index, xp_reward, coin_reward) VALUES
  (_cid, 'O que é Química?',
   'A Química estuda a matéria, suas propriedades, transformações e a energia envolvida. Nesta aula você entenderá o objeto de estudo da Química e sua importância no dia a dia (alimentos, remédios, materiais).',
   1, 20, 10),
  (_cid, 'Matéria e suas propriedades',
   'Matéria é tudo que tem massa e ocupa espaço. Estudaremos estados físicos (sólido, líquido, gasoso), mudanças de estado, propriedades gerais (massa, volume) e específicas (densidade, ponto de fusão).',
   2, 25, 12),
  (_cid, 'Átomo e modelos atômicos',
   'Do átomo indivisível de Dalton ao modelo quântico. Prótons, nêutrons e elétrons. Número atômico (Z) e número de massa (A). Isótopos, isóbaros e isótonos.',
   3, 30, 15),
  (_cid, 'Tabela Periódica',
   'Organização dos 118 elementos por número atômico. Períodos e grupos (famílias). Metais, ametais e gases nobres. Propriedades periódicas: raio atômico, eletronegatividade, energia de ionização.',
   4, 35, 18),
  (_cid, 'Ligações químicas',
   'Como átomos se unem para formar substâncias: ligação iônica (metal + ametal), covalente (ametal + ametal) e metálica. Regra do octeto. Fórmulas moleculares e estruturas de Lewis.',
   5, 40, 20),
  (_cid, 'Reações químicas e balanceamento',
   'Transformações químicas: reagentes → produtos. Tipos de reação (síntese, decomposição, simples troca, dupla troca). Balanceamento pelo método das tentativas. Lei da conservação das massas (Lavoisier).',
   6, 50, 25);
END $$;

CREATE TABLE public.parent_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid NOT NULL,
  student_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (parent_id, student_id)
);
GRANT SELECT, DELETE ON public.parent_links TO authenticated;
GRANT ALL ON public.parent_links TO service_role;
ALTER TABLE public.parent_links ENABLE ROW LEVEL SECURITY;
CREATE POLICY "parent sees own links" ON public.parent_links FOR SELECT TO authenticated
  USING (parent_id = auth.uid() OR student_id = auth.uid() OR public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher'));
CREATE POLICY "parent removes own links" ON public.parent_links FOR DELETE TO authenticated USING (parent_id = auth.uid());

CREATE TABLE public.access_rules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id uuid,
  role public.app_role NOT NULL,
  feature_key text NOT NULL,
  allowed boolean NOT NULL DEFAULT true,
  updated_by uuid,
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX access_rules_uniq ON public.access_rules (COALESCE(class_id,'00000000-0000-0000-0000-000000000000'::uuid), role, feature_key);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.access_rules TO authenticated;
GRANT ALL ON public.access_rules TO service_role;
ALTER TABLE public.access_rules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "everyone reads rules" ON public.access_rules FOR SELECT TO authenticated USING (true);
CREATE POLICY "staff manage rules" ON public.access_rules FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator') OR public.has_role(auth.uid(),'coordinator') OR public.has_role(auth.uid(),'director'))
  WITH CHECK (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator') OR public.has_role(auth.uid(),'coordinator') OR public.has_role(auth.uid(),'director'));

CREATE OR REPLACE FUNCTION public.link_child_by_code(_code text)
RETURNS uuid LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE _sid uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  SELECT id INTO _sid FROM public.profiles WHERE upper(access_code) = upper(trim(_code)) LIMIT 1;
  IF _sid IS NULL THEN RAISE EXCEPTION 'Código não encontrado'; END IF;
  IF _sid = auth.uid() THEN RAISE EXCEPTION 'Código inválido'; END IF;
  INSERT INTO public.parent_links(parent_id, student_id) VALUES (auth.uid(), _sid) ON CONFLICT DO NOTHING;
  INSERT INTO public.user_roles(user_id, role) SELECT auth.uid(), 'parent'
    WHERE NOT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'parent');
  RETURN _sid;
END $$;

CREATE OR REPLACE FUNCTION public.parent_child_overview(_student_id uuid)
RETURNS jsonb LANGUAGE plpgsql STABLE SECURITY DEFINER SET search_path = public AS $$
DECLARE r jsonb;
BEGIN
  IF NOT (EXISTS (SELECT 1 FROM public.parent_links WHERE parent_id = auth.uid() AND student_id = _student_id)
          OR public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher')) THEN
    RAISE EXCEPTION 'Sem permissão';
  END IF;
  SELECT jsonb_build_object(
    'profile', (SELECT to_jsonb(p) - 'access_code' FROM (SELECT id, username, level, xp, wins, losses, rank_points FROM public.profiles WHERE id = _student_id) p),
    'wallet', (SELECT jsonb_build_object('coins', coins, 'lifetime_coins', lifetime_coins) FROM public.player_wallet WHERE user_id = _student_id),
    'stats', (SELECT jsonb_build_object('total_games', total_games, 'total_wins', total_wins, 'total_losses', total_losses, 'ranking_points', ranking_points) FROM public.player_stats WHERE user_id = _student_id),
    'matches', COALESCE((SELECT jsonb_agg(m ORDER BY m.created_at DESC) FROM (SELECT id, status, match_type, winner_id = _student_id AS won, created_at FROM public.matches WHERE player1_id = _student_id OR player2_id = _student_id ORDER BY created_at DESC LIMIT 30) m), '[]'::jsonb),
    'exercises', COALESCE((SELECT jsonb_agg(e ORDER BY e.created_at DESC) FROM (SELECT topic_title, score, correct, total, created_at FROM public.topic_exercise_attempts WHERE user_id = _student_id ORDER BY created_at DESC LIMIT 30) e), '[]'::jsonb),
    'assessments', COALESCE((SELECT jsonb_agg(a ORDER BY a.created_at DESC) FROM (SELECT c.title, x.score, x.passed, x.created_at FROM public.assessment_attempts x JOIN public.courses c ON c.id = x.course_id WHERE x.user_id = _student_id ORDER BY x.created_at DESC LIMIT 30) a), '[]'::jsonb),
    'certificates', COALESCE((SELECT jsonb_agg(jsonb_build_object('course_title', course_title, 'score', score, 'code', code, 'issued_at', issued_at)) FROM public.certificates WHERE user_id = _student_id), '[]'::jsonb),
    'usage', COALESCE((SELECT jsonb_agg(u ORDER BY u.seconds DESC) FROM (SELECT COALESCE(page, path, action) AS page, SUM(COALESCE(duration_seconds,0))::int AS seconds, COUNT(*)::int AS visits, MAX(created_at) AS last_at FROM public.activity_logs WHERE user_id = _student_id GROUP BY 1 ORDER BY 2 DESC LIMIT 20) u), '[]'::jsonb)
  ) INTO r;
  RETURN r;
END $$;

CREATE OR REPLACE FUNCTION public.parent_children()
RETURNS TABLE(student_id uuid, username text) LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT l.student_id, p.username FROM public.parent_links l LEFT JOIN public.profiles p ON p.id = l.student_id WHERE l.parent_id = auth.uid();
$$;
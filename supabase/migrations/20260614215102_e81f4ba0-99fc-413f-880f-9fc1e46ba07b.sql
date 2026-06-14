
-- Enums
CREATE TYPE public.chem_area AS ENUM ('organica','inorganica','geral','ambiental','farmacologia');
CREATE TYPE public.game_mode AS ENUM ('quiz','forca','caca_palavras','cruzada','memoria');
CREATE TYPE public.session_status AS ENUM ('lobby','active','paused','finished');

-- chem_questions
CREATE TABLE public.chem_questions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  area public.chem_area NOT NULL,
  topic text,
  difficulty int NOT NULL DEFAULT 1 CHECK (difficulty BETWEEN 1 AND 5),
  question text NOT NULL,
  options jsonb NOT NULL DEFAULT '[]'::jsonb,
  correct_index int NOT NULL DEFAULT 0,
  answer_text text,
  explanation text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.chem_questions TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.chem_questions TO authenticated;
GRANT ALL ON public.chem_questions TO service_role;
ALTER TABLE public.chem_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone reads questions" ON public.chem_questions FOR SELECT USING (true);
CREATE POLICY "admins manage questions" ON public.chem_questions FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE INDEX chem_questions_area_idx ON public.chem_questions(area);

-- game_sessions
CREATE TABLE public.game_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text NOT NULL UNIQUE,
  teacher_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  mode public.game_mode NOT NULL DEFAULT 'quiz',
  area public.chem_area NOT NULL DEFAULT 'geral',
  status public.session_status NOT NULL DEFAULT 'lobby',
  current_question_id uuid REFERENCES public.chem_questions(id) ON DELETE SET NULL,
  current_round int NOT NULL DEFAULT 0,
  total_rounds int NOT NULL DEFAULT 10,
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.game_sessions TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.game_sessions TO authenticated;
GRANT ALL ON public.game_sessions TO service_role;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone reads sessions" ON public.game_sessions FOR SELECT USING (true);
CREATE POLICY "authenticated creates session" ON public.game_sessions FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = teacher_id);
CREATE POLICY "teacher or admin updates session" ON public.game_sessions FOR UPDATE TO authenticated
  USING (auth.uid() = teacher_id OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (auth.uid() = teacher_id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "teacher or admin deletes session" ON public.game_sessions FOR DELETE TO authenticated
  USING (auth.uid() = teacher_id OR public.has_role(auth.uid(),'admin'));

-- game_teams
CREATE TABLE public.game_teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES public.game_sessions(id) ON DELETE CASCADE,
  name text NOT NULL,
  color text NOT NULL DEFAULT '#059669',
  score int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.game_teams TO anon, authenticated;
GRANT ALL ON public.game_teams TO service_role;
ALTER TABLE public.game_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone reads teams" ON public.game_teams FOR SELECT USING (true);
CREATE POLICY "anyone manages teams in lobby/active sessions" ON public.game_teams FOR ALL
  USING (EXISTS (SELECT 1 FROM public.game_sessions s WHERE s.id = session_id AND s.status IN ('lobby','active','paused')))
  WITH CHECK (EXISTS (SELECT 1 FROM public.game_sessions s WHERE s.id = session_id AND s.status IN ('lobby','active','paused')));
CREATE INDEX game_teams_session_idx ON public.game_teams(session_id);

-- team_members
CREATE TABLE public.team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id uuid NOT NULL REFERENCES public.game_teams(id) ON DELETE CASCADE,
  display_name text NOT NULL,
  joined_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.team_members TO anon, authenticated;
GRANT ALL ON public.team_members TO service_role;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone reads members" ON public.team_members FOR SELECT USING (true);
CREATE POLICY "anyone joins team" ON public.team_members FOR INSERT WITH CHECK (true);
CREATE POLICY "anyone removes self" ON public.team_members FOR DELETE USING (true);

-- session_answers
CREATE TABLE public.session_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid NOT NULL REFERENCES public.game_sessions(id) ON DELETE CASCADE,
  team_id uuid NOT NULL REFERENCES public.game_teams(id) ON DELETE CASCADE,
  question_id uuid REFERENCES public.chem_questions(id) ON DELETE SET NULL,
  round_number int NOT NULL,
  answer jsonb NOT NULL,
  is_correct boolean NOT NULL DEFAULT false,
  points int NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.session_answers TO anon, authenticated;
GRANT ALL ON public.session_answers TO service_role;
ALTER TABLE public.session_answers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone reads answers" ON public.session_answers FOR SELECT USING (true);
CREATE POLICY "anyone inserts answers in active session" ON public.session_answers FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM public.game_sessions s WHERE s.id = session_id AND s.status = 'active'));
CREATE INDEX session_answers_session_idx ON public.session_answers(session_id);

-- updated_at triggers
CREATE TRIGGER chem_questions_updated_at BEFORE UPDATE ON public.chem_questions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER game_sessions_updated_at BEFORE UPDATE ON public.game_sessions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- realtime
ALTER TABLE public.game_sessions REPLICA IDENTITY FULL;
ALTER TABLE public.game_teams REPLICA IDENTITY FULL;
ALTER TABLE public.session_answers REPLICA IDENTITY FULL;
ALTER TABLE public.team_members REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.game_sessions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.game_teams;
ALTER PUBLICATION supabase_realtime ADD TABLE public.session_answers;
ALTER PUBLICATION supabase_realtime ADD TABLE public.team_members;

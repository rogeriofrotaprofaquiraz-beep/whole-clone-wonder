
-- Schools
CREATE TABLE public.schools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  city text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.schools TO authenticated;
GRANT ALL ON public.schools TO service_role;
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
CREATE POLICY "owner manages school" ON public.schools FOR ALL
  USING (owner_id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (owner_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "authenticated read schools" ON public.schools FOR SELECT TO authenticated USING (true);

-- Classes
CREATE TABLE public.classes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  school_id uuid NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  name text NOT NULL,
  grade_year smallint NOT NULL CHECK (grade_year BETWEEN 6 AND 9),
  invite_code text NOT NULL UNIQUE DEFAULT upper(substr(md5(random()::text),1,6)),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.classes TO authenticated;
GRANT ALL ON public.classes TO service_role;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "teacher manages classes" ON public.classes FOR ALL
  USING (EXISTS (SELECT 1 FROM public.schools s WHERE s.id=school_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))))
  WITH CHECK (EXISTS (SELECT 1 FROM public.schools s WHERE s.id=school_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "authenticated read classes" ON public.classes FOR SELECT TO authenticated USING (true);

-- Class members (students)
CREATE TABLE public.class_members (
  class_id uuid NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL DEFAULT 'student' CHECK (role IN ('student','teacher')),
  joined_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (class_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_members TO authenticated;
GRANT ALL ON public.class_members TO service_role;
ALTER TABLE public.class_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "members visible to class teacher and self" ON public.class_members FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.classes c JOIN public.schools s ON s.id=c.school_id WHERE c.id=class_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin')))
  );
CREATE POLICY "student self-join" ON public.class_members FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR EXISTS (SELECT 1 FROM public.classes c JOIN public.schools s ON s.id=c.school_id WHERE c.id=class_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "teacher manages members" ON public.class_members FOR DELETE TO authenticated
  USING (user_id = auth.uid() OR EXISTS (SELECT 1 FROM public.classes c JOIN public.schools s ON s.id=c.school_id WHERE c.id=class_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "teacher updates members" ON public.class_members FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.classes c JOIN public.schools s ON s.id=c.school_id WHERE c.id=class_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))));

-- Teams within classes
CREATE TABLE public.class_teams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id uuid NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  name text NOT NULL,
  color text DEFAULT '#3b82f6',
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_teams TO authenticated;
GRANT ALL ON public.class_teams TO service_role;
ALTER TABLE public.class_teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "teacher manages class teams" ON public.class_teams FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.classes c JOIN public.schools s ON s.id=c.school_id WHERE c.id=class_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))))
  WITH CHECK (EXISTS (SELECT 1 FROM public.classes c JOIN public.schools s ON s.id=c.school_id WHERE c.id=class_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))));
CREATE POLICY "members read teams" ON public.class_teams FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.class_members m WHERE m.class_id = class_teams.class_id AND m.user_id = auth.uid()));

CREATE TABLE public.class_team_members (
  team_id uuid NOT NULL REFERENCES public.class_teams(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  PRIMARY KEY (team_id, user_id)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.class_team_members TO authenticated;
GRANT ALL ON public.class_team_members TO service_role;
ALTER TABLE public.class_team_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "team members visible to class" ON public.class_team_members FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.class_teams t
    JOIN public.classes c ON c.id=t.class_id
    LEFT JOIN public.class_members m ON m.class_id=c.id AND m.user_id=auth.uid()
    JOIN public.schools s ON s.id=c.school_id
    WHERE t.id = team_id AND (m.user_id = auth.uid() OR s.owner_id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  ));
CREATE POLICY "teacher manages team members" ON public.class_team_members FOR ALL TO authenticated
  USING (EXISTS (
    SELECT 1 FROM public.class_teams t JOIN public.classes c ON c.id=t.class_id JOIN public.schools s ON s.id=c.school_id
    WHERE t.id=team_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))
  ))
  WITH CHECK (EXISTS (
    SELECT 1 FROM public.class_teams t JOIN public.classes c ON c.id=t.class_id JOIN public.schools s ON s.id=c.school_id
    WHERE t.id=team_id AND (s.owner_id=auth.uid() OR public.has_role(auth.uid(),'admin'))
  ));

-- Add classroom context to chem_questions
ALTER TABLE public.chem_questions ADD COLUMN IF NOT EXISTS class_id uuid REFERENCES public.classes(id) ON DELETE SET NULL;
ALTER TABLE public.chem_questions ADD COLUMN IF NOT EXISTS grade_year smallint;

-- Join class by invite code (security definer to allow students)
CREATE OR REPLACE FUNCTION public.join_class_by_code(_code text)
RETURNS uuid
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE _cid uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Not authenticated'; END IF;
  SELECT id INTO _cid FROM public.classes WHERE invite_code = upper(_code) LIMIT 1;
  IF _cid IS NULL THEN RAISE EXCEPTION 'Código inválido'; END IF;
  INSERT INTO public.class_members (class_id, user_id, role) VALUES (_cid, auth.uid(), 'student')
  ON CONFLICT (class_id, user_id) DO NOTHING;
  RETURN _cid;
END; $$;
GRANT EXECUTE ON FUNCTION public.join_class_by_code(text) TO authenticated;

-- updated_at triggers
CREATE TRIGGER trg_schools_updated BEFORE UPDATE ON public.schools FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER trg_classes_updated BEFORE UPDATE ON public.classes FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

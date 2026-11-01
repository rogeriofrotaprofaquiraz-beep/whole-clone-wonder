CREATE OR REPLACE FUNCTION public.is_staff(_uid uuid) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _uid AND role IN ('admin','teacher','coordinator','director','moderator'))
$$;

CREATE TABLE public.game_results (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  game_key text NOT NULL,
  correct integer NOT NULL DEFAULT 0,
  wrong integer NOT NULL DEFAULT 0,
  points integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX game_results_user_idx ON public.game_results(user_id, game_key);
GRANT SELECT, INSERT ON public.game_results TO authenticated;
GRANT ALL ON public.game_results TO service_role;
ALTER TABLE public.game_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own or staff read results" ON public.game_results FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY "Insert own results" ON public.game_results FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE TABLE public.game_assignments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  game_key text NOT NULL,
  note text,
  assigned_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  completed_at timestamptz
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.game_assignments TO authenticated;
GRANT ALL ON public.game_assignments TO service_role;
ALTER TABLE public.game_assignments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Own or staff read assignments" ON public.game_assignments FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY "Staff create assignments" ON public.game_assignments FOR INSERT TO authenticated WITH CHECK (public.is_staff(auth.uid()));
CREATE POLICY "Own or staff update assignments" ON public.game_assignments FOR UPDATE TO authenticated USING (user_id = auth.uid() OR public.is_staff(auth.uid()));
CREATE POLICY "Staff delete assignments" ON public.game_assignments FOR DELETE TO authenticated USING (public.is_staff(auth.uid()));
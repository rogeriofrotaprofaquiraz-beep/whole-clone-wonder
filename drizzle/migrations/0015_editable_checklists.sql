CREATE TABLE public.checklist_config (
  scope text PRIMARY KEY,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.checklist_checks (
  target_id text NOT NULL,
  item_key text NOT NULL,
  checked_by uuid,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (target_id, item_key)
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checklist_config TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.checklist_checks TO authenticated;
GRANT ALL ON public.checklist_config TO service_role;
GRANT ALL ON public.checklist_checks TO service_role;
ALTER TABLE public.checklist_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.checklist_checks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "read config" ON public.checklist_config FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin config" ON public.checklist_config FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "read checks" ON public.checklist_checks FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin checks" ON public.checklist_checks FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE TABLE public.app_blueprints (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  app_name text,
  version text,
  exported_at timestamptz,
  pages jsonb NOT NULL DEFAULT '[]'::jsonb,
  entities jsonb NOT NULL DEFAULT '[]'::jsonb,
  raw jsonb,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.app_blueprints TO authenticated;
GRANT ALL ON public.app_blueprints TO service_role;
ALTER TABLE public.app_blueprints ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own blueprints" ON public.app_blueprints
  FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins view all blueprints" ON public.app_blueprints
  FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

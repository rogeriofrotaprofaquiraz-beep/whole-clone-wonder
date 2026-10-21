CREATE TABLE public.access_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  base_role app_role NOT NULL DEFAULT 'student',
  class_id uuid REFERENCES public.classes(id) ON DELETE CASCADE,
  builtin boolean NOT NULL DEFAULT false,
  created_by uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.access_profiles TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.access_profiles TO authenticated;
GRANT ALL ON public.access_profiles TO service_role;
ALTER TABLE public.access_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "everyone reads profiles" ON public.access_profiles FOR SELECT TO authenticated USING (true);
CREATE POLICY "staff manage profiles" ON public.access_profiles FOR ALL TO authenticated
USING (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator') OR public.has_role(auth.uid(),'coordinator') OR public.has_role(auth.uid(),'director'))
WITH CHECK (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator') OR public.has_role(auth.uid(),'coordinator') OR public.has_role(auth.uid(),'director'));
ALTER TABLE public.access_rules ADD COLUMN profile_id uuid REFERENCES public.access_profiles(id) ON DELETE CASCADE;
ALTER TABLE public.class_members ADD COLUMN profile_id uuid REFERENCES public.access_profiles(id) ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS public.role_permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  role public.app_role NOT NULL,
  feature_key text NOT NULL,
  feature_label text NOT NULL,
  can_view boolean NOT NULL DEFAULT false,
  can_edit boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (role, feature_key)
);

GRANT SELECT ON public.role_permissions TO authenticated;
GRANT ALL ON public.role_permissions TO service_role;

ALTER TABLE public.role_permissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can read permissions"
  ON public.role_permissions FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "Admins manage permissions insert"
  ON public.role_permissions FOR INSERT
  TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE POLICY "Admins manage permissions update"
  ON public.role_permissions FOR UPDATE
  TO authenticated USING (public.has_role(auth.uid(),'admin'))
  WITH CHECK (public.has_role(auth.uid(),'admin'));

CREATE POLICY "Admins manage permissions delete"
  ON public.role_permissions FOR DELETE
  TO authenticated USING (public.has_role(auth.uid(),'admin'));

CREATE TRIGGER trg_role_permissions_updated
  BEFORE UPDATE ON public.role_permissions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- RPC to get permissions for current user
CREATE OR REPLACE FUNCTION public.get_my_permissions()
RETURNS TABLE(feature_key text, feature_label text, can_view boolean, can_edit boolean)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT rp.feature_key, rp.feature_label,
         bool_or(rp.can_view) AS can_view,
         bool_or(rp.can_edit) AS can_edit
  FROM public.role_permissions rp
  JOIN public.user_roles ur ON ur.role = rp.role
  WHERE ur.user_id = auth.uid()
  GROUP BY rp.feature_key, rp.feature_label;
$$;

REVOKE EXECUTE ON FUNCTION public.get_my_permissions() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_my_permissions() TO authenticated;

-- Seed default matrix
DO $$
DECLARE
  features text[][] := ARRAY[
    ['aula','Aula / Salas ao vivo'],
    ['treino','Treino solo'],
    ['perfil','Perfil & Avatar'],
    ['carteira','Carteira de Átomos'],
    ['progresso','Progresso & Recompensas'],
    ['escola','Cadastro de Escola/Turmas'],
    ['ranking','Ranking'],
    ['plano_aula','Plano de Aula (IA)'],
    ['herois','Galeria de Heróis'],
    ['colecao','Coleção do Jogador'],
    ['permissoes','Cadastro de Permissões'],
    ['relatorios_filho','Acompanhar filho(a)']
  ];
  f text[];
  r text;
  perms record;
BEGIN
  FOREACH f SLICE 1 IN ARRAY features LOOP
    FOR r IN SELECT unnest(ARRAY['student','teacher','coordinator','director','parent','admin']) LOOP
      INSERT INTO public.role_permissions(role, feature_key, feature_label, can_view, can_edit)
      VALUES (
        r::public.app_role, f[1], f[2],
        CASE
          WHEN r='admin' THEN true
          WHEN r='director' THEN true
          WHEN r='coordinator' THEN f[1] <> 'permissoes'
          WHEN r='teacher' THEN f[1] IN ('aula','treino','perfil','carteira','progresso','ranking','plano_aula','herois','colecao','escola')
          WHEN r='student' THEN f[1] IN ('aula','treino','perfil','carteira','progresso','ranking','herois','colecao')
          WHEN r='parent' THEN f[1] IN ('ranking','progresso','relatorios_filho')
          ELSE false
        END,
        CASE
          WHEN r='admin' THEN true
          WHEN r='director' THEN f[1] NOT IN ('permissoes')
          WHEN r='coordinator' THEN f[1] IN ('aula','plano_aula','escola','ranking')
          WHEN r='teacher' THEN f[1] IN ('aula','plano_aula','treino','perfil','herois')
          WHEN r='student' THEN f[1] IN ('perfil','treino','herois','colecao')
          WHEN r='parent' THEN false
          ELSE false
        END
      )
      ON CONFLICT (role, feature_key) DO NOTHING;
    END LOOP;
  END LOOP;
END $$;

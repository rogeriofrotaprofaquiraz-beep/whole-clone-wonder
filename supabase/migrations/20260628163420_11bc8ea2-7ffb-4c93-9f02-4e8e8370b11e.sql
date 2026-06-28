
-- 1. lesson_plans per teacher
CREATE TABLE public.lesson_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  class_id uuid REFERENCES public.classes(id) ON DELETE SET NULL,
  title text NOT NULL,
  subject text,
  grade_year int,
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lesson_plans TO authenticated;
GRANT ALL ON public.lesson_plans TO service_role;
ALTER TABLE public.lesson_plans ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Teachers manage own plans" ON public.lesson_plans
  FOR ALL TO authenticated
  USING (teacher_id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (teacher_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_lesson_plans_updated BEFORE UPDATE ON public.lesson_plans
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 2. economy_settings (editable avatar action costs)
CREATE TABLE public.economy_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action_key text NOT NULL UNIQUE,
  label text NOT NULL,
  cost int NOT NULL DEFAULT 0,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.economy_settings TO authenticated, anon;
GRANT ALL ON public.economy_settings TO service_role;
ALTER TABLE public.economy_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone reads economy" ON public.economy_settings FOR SELECT USING (true);
CREATE POLICY "Admins write economy insert" ON public.economy_settings
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write economy update" ON public.economy_settings
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE POLICY "Admins write economy delete" ON public.economy_settings
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_economy_updated BEFORE UPDATE ON public.economy_settings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

INSERT INTO public.economy_settings (action_key, label, cost) VALUES
  ('generateAvatarAI','Gerar avatar com IA',50),
  ('changeAppearance','Alterar aparência',5),
  ('uploadPhoto','Upload de foto de referência',10),
  ('uploadAvatar','Upload direto de avatar',20);

-- 3. credit_promotions
CREATE TABLE public.credit_promotions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  class_id uuid REFERENCES public.classes(id) ON DELETE CASCADE,
  name text NOT NULL,
  bonus_pct int NOT NULL DEFAULT 0,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.credit_promotions TO authenticated;
GRANT ALL ON public.credit_promotions TO service_role;
ALTER TABLE public.credit_promotions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "All read promotions" ON public.credit_promotions FOR SELECT TO authenticated USING (true);
CREATE POLICY "Owners manage promotions" ON public.credit_promotions
  FOR ALL TO authenticated
  USING (created_by = auth.uid() OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (created_by = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER trg_promo_updated BEFORE UPDATE ON public.credit_promotions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 4. credit_grants log
CREATE TABLE public.credit_grants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  granted_by uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount int NOT NULL,
  reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.credit_grants TO authenticated;
GRANT ALL ON public.credit_grants TO service_role;
ALTER TABLE public.credit_grants ENABLE ROW LEVEL SECURITY;
CREATE POLICY "View own or granted by me" ON public.credit_grants FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR granted_by = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Insert via RPC only" ON public.credit_grants FOR INSERT TO authenticated
  WITH CHECK (granted_by = auth.uid());

-- 5. RPC: grant coins (permission via role_permissions feature 'banco' OR admin/teacher)
CREATE OR REPLACE FUNCTION public.grant_coins_to_user(_user_id uuid, _amount int, _reason text)
RETURNS int LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE _allowed bool; _new_balance int;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  IF _amount = 0 THEN RAISE EXCEPTION 'Valor inválido'; END IF;
  SELECT public.has_role(auth.uid(),'admin')
      OR EXISTS (
        SELECT 1 FROM public.role_permissions rp
        JOIN public.user_roles ur ON ur.role = rp.role
        WHERE ur.user_id = auth.uid() AND rp.feature_key='banco' AND rp.can_edit
      )
    INTO _allowed;
  IF NOT _allowed THEN RAISE EXCEPTION 'Sem permissão para conceder créditos'; END IF;

  INSERT INTO public.player_wallet (user_id, coins, lifetime_coins)
  VALUES (_user_id, GREATEST(_amount,0), GREATEST(_amount,0))
  ON CONFLICT (user_id) DO UPDATE
    SET coins = public.player_wallet.coins + _amount,
        lifetime_coins = public.player_wallet.lifetime_coins + GREATEST(_amount,0)
  RETURNING coins INTO _new_balance;

  INSERT INTO public.credit_grants (granted_by, user_id, amount, reason)
  VALUES (auth.uid(), _user_id, _amount, _reason);
  RETURN _new_balance;
END; $$;

-- 6. RPC current promotion bonus
CREATE OR REPLACE FUNCTION public.current_credit_bonus(_user_id uuid)
RETURNS int LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT COALESCE(MAX(p.bonus_pct), 0)
  FROM public.credit_promotions p
  LEFT JOIN public.class_members cm ON cm.class_id = p.class_id AND cm.user_id = _user_id AND cm.status='approved'
  WHERE p.active
    AND now() BETWEEN p.starts_at AND p.ends_at
    AND (p.class_id IS NULL OR cm.user_id IS NOT NULL);
$$;

-- 7. Seed permissions: Painel do Professor + Banco
INSERT INTO public.role_permissions (role, feature_key, feature_label, can_view, can_edit) VALUES
  ('admin','painel_professor','Painel do Professor',true,true),
  ('teacher','painel_professor','Painel do Professor',true,true),
  ('coordinator','painel_professor','Painel do Professor',true,false),
  ('director','painel_professor','Painel do Professor',true,false),
  ('student','painel_professor','Painel do Professor',false,false),
  ('parent','painel_professor','Painel do Professor',false,false),
  ('admin','banco','Banco / Economia',true,true),
  ('teacher','banco','Banco / Economia',true,true),
  ('coordinator','banco','Banco / Economia',true,false),
  ('director','banco','Banco / Economia',true,false),
  ('student','banco','Banco / Economia',false,false),
  ('parent','banco','Banco / Economia',false,false)
ON CONFLICT (role, feature_key) DO NOTHING;

-- 8. Grant 100 coins to all approved students currently in any class
INSERT INTO public.player_wallet (user_id, coins, lifetime_coins)
SELECT cm.user_id, 100, 100
FROM public.class_members cm
WHERE cm.role='student' AND cm.status='approved'
ON CONFLICT (user_id) DO UPDATE
  SET coins = public.player_wallet.coins + 100,
      lifetime_coins = public.player_wallet.lifetime_coins + 100;

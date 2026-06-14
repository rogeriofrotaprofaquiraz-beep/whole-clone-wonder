GRANT SELECT ON public.profiles TO anon, authenticated;
GRANT INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public' AND tablename = 'profiles' AND policyname = 'Users can insert own profile'
  ) THEN
    CREATE POLICY "Users can insert own profile"
    ON public.profiles
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = id);
  END IF;
END $$;

CREATE OR REPLACE FUNCTION public.ensure_current_user_access()
RETURNS TABLE(role public.app_role)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _uid uuid := auth.uid();
  _username text := COALESCE(
    NULLIF(auth.jwt() -> 'user_metadata' ->> 'username', ''),
    NULLIF(auth.jwt() -> 'user_metadata' ->> 'full_name', ''),
    NULLIF(split_part(COALESCE(auth.jwt() ->> 'email', 'jogador'), '@', 1), ''),
    'jogador'
  );
BEGIN
  IF _uid IS NULL THEN
    RAISE EXCEPTION 'Usuário não autenticado';
  END IF;

  INSERT INTO public.profiles (id, username)
  VALUES (_uid, _username)
  ON CONFLICT (id) DO NOTHING;

  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_uid, 'admin')
    ON CONFLICT DO NOTHING;
  ELSIF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _uid) THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_uid, 'user')
    ON CONFLICT DO NOTHING;
  END IF;

  INSERT INTO public.player_wallet (user_id, coins, lifetime_coins)
  VALUES (_uid, 0, 0)
  ON CONFLICT (user_id) DO NOTHING;

  INSERT INTO public.player_avatars (user_id, equipped, unlocked)
  VALUES (_uid, '{"background":"bg_violet"}'::jsonb, '["bg_violet"]'::jsonb)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN QUERY
  SELECT ur.role
  FROM public.user_roles ur
  WHERE ur.user_id = _uid;
END;
$$;

REVOKE ALL ON FUNCTION public.ensure_current_user_access() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.ensure_current_user_access() TO authenticated;
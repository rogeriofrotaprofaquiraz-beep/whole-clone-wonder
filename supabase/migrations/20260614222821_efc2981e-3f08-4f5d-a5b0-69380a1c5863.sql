CREATE OR REPLACE FUNCTION public.ensure_current_user_access()
RETURNS TABLE(role public.app_role)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _uid uuid := auth.uid();
  _base_username text := COALESCE(
    NULLIF(auth.jwt() -> 'user_metadata' ->> 'username', ''),
    NULLIF(auth.jwt() -> 'user_metadata' ->> 'full_name', ''),
    NULLIF(split_part(COALESCE(auth.jwt() ->> 'email', 'jogador'), '@', 1), ''),
    'jogador'
  );
  _safe_username text;
BEGIN
  IF _uid IS NULL THEN
    RAISE EXCEPTION 'Usuário não autenticado';
  END IF;

  _safe_username := left(regexp_replace(_base_username, '[^[:alnum:]_]+', '_', 'g'), 40);
  IF _safe_username = '' THEN
    _safe_username := 'jogador';
  END IF;

  INSERT INTO public.profiles (id, username)
  VALUES (_uid, _safe_username)
  ON CONFLICT (id) DO NOTHING;

  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = _uid) THEN
    INSERT INTO public.profiles (id, username)
    VALUES (_uid, left(_safe_username, 30) || '_' || substr(_uid::text, 1, 8))
    ON CONFLICT DO NOTHING;
  END IF;

  IF NOT EXISTS (SELECT 1 FROM public.user_roles WHERE user_roles.role = 'admin') THEN
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
  SELECT user_roles.role
  FROM public.user_roles
  WHERE user_roles.user_id = _uid;
END;
$$;

REVOKE EXECUTE ON FUNCTION public.ensure_current_user_access() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.ensure_current_user_access() FROM anon;
GRANT EXECUTE ON FUNCTION public.ensure_current_user_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.ensure_current_user_access() TO service_role;
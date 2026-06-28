
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS access_code TEXT UNIQUE;

CREATE OR REPLACE FUNCTION public.generate_access_code(_user_id uuid)
RETURNS text LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
DECLARE _code text; _try int := 0;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Não autenticado'; END IF;
  IF auth.uid() <> _user_id AND NOT public.has_role(auth.uid(),'admin')
     AND NOT EXISTS (SELECT 1 FROM public.role_permissions rp JOIN public.user_roles ur ON ur.role=rp.role
                     WHERE ur.user_id=auth.uid() AND rp.feature_key IN ('escola','banco') AND rp.can_edit) THEN
    RAISE EXCEPTION 'Sem permissão';
  END IF;
  LOOP
    _try := _try + 1;
    _code := 'AH-' || upper(substr(replace(encode(gen_random_bytes(6),'base64'),'/','A'),1,6));
    _code := regexp_replace(_code,'[^A-Z0-9-]','X','g');
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.profiles WHERE access_code=_code) OR _try > 8;
  END LOOP;
  UPDATE public.profiles SET access_code=_code WHERE id=_user_id;
  RETURN _code;
END $$;

-- backfill existing profiles
DO $$ DECLARE r record; BEGIN
  FOR r IN SELECT id FROM public.profiles WHERE access_code IS NULL LOOP
    UPDATE public.profiles SET access_code =
      'AH-' || upper(substr(md5(r.id::text || random()::text),1,6))
    WHERE id = r.id;
  END LOOP;
END $$;

CREATE OR REPLACE FUNCTION public.history_by_access_code(_code text)
RETURNS TABLE(username text, level int, xp int, coins int, lifetime_coins int)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT p.username, COALESCE(p.level,0), COALESCE(p.xp,0),
         COALESCE(w.coins,0), COALESCE(w.lifetime_coins,0)
  FROM public.profiles p
  LEFT JOIN public.player_wallet w ON w.user_id = p.id
  WHERE p.access_code = upper(_code);
$$;

GRANT EXECUTE ON FUNCTION public.generate_access_code(uuid) TO authenticated;
GRANT EXECUTE ON FUNCTION public.history_by_access_code(text) TO anon, authenticated;


CREATE OR REPLACE FUNCTION public.generate_access_code(_user_id uuid)
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $function$
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
    _code := 'AH-' || upper(substr(replace(replace(encode(uuid_send(gen_random_uuid()),'base64'),'/','A'),'+','B'),1,6));
    _code := regexp_replace(_code,'[^A-Z0-9-]','X','g');
    EXIT WHEN NOT EXISTS (SELECT 1 FROM public.profiles WHERE access_code=_code) OR _try > 8;
  END LOOP;
  UPDATE public.profiles SET access_code=_code WHERE id=_user_id;
  RETURN _code;
END $function$;

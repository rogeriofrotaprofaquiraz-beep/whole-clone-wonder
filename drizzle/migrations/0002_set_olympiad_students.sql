CREATE OR REPLACE FUNCTION public.set_olympiad_students(_on uuid[], _off uuid[])
RETURNS integer LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE n integer;
BEGIN
  IF NOT (public.has_role(auth.uid(),'admin') OR public.has_role(auth.uid(),'teacher') OR public.has_role(auth.uid(),'moderator') OR public.has_role(auth.uid(),'director') OR public.has_role(auth.uid(),'coordinator')) THEN
    RAISE EXCEPTION 'Sem permissão';
  END IF;
  UPDATE public.profiles SET is_olympiad = true WHERE id = ANY(coalesce(_on,'{}'));
  GET DIAGNOSTICS n = ROW_COUNT;
  UPDATE public.profiles SET is_olympiad = false WHERE id = ANY(coalesce(_off,'{}'));
  RETURN n;
END $$;
REVOKE ALL ON FUNCTION public.set_olympiad_students(uuid[], uuid[]) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.set_olympiad_students(uuid[], uuid[]) TO authenticated;
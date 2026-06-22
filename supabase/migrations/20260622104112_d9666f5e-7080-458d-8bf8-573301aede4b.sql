
CREATE OR REPLACE FUNCTION public.lookup_user_ids_by_emails(_emails text[])
RETURNS TABLE(email text, user_id uuid)
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN
    RAISE EXCEPTION 'Apenas administradores podem mapear e-mails';
  END IF;

  RETURN QUERY
  SELECT lower(u.email)::text AS email, u.id AS user_id
  FROM auth.users u
  WHERE lower(u.email) = ANY (SELECT lower(unnest(_emails)));
END;
$$;

REVOKE ALL ON FUNCTION public.lookup_user_ids_by_emails(text[]) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.lookup_user_ids_by_emails(text[]) TO authenticated;

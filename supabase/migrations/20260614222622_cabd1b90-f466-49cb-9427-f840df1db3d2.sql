REVOKE EXECUTE ON FUNCTION public.ensure_current_user_access() FROM PUBLIC;
REVOKE EXECUTE ON FUNCTION public.ensure_current_user_access() FROM anon;
GRANT EXECUTE ON FUNCTION public.ensure_current_user_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.ensure_current_user_access() TO service_role;
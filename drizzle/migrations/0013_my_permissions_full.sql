CREATE OR REPLACE FUNCTION public.get_my_permissions_full()
RETURNS TABLE(feature_key text, can_view boolean, can_edit boolean, can_create boolean, can_delete boolean, is_admin boolean)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT rp.feature_key, bool_or(rp.can_view), bool_or(rp.can_edit), bool_or(rp.can_create), bool_or(rp.can_delete), bool_or(rp.is_admin)
  FROM public.role_permissions rp JOIN public.user_roles ur ON ur.role = rp.role
  WHERE ur.user_id = auth.uid() GROUP BY rp.feature_key;
$$;
GRANT EXECUTE ON FUNCTION public.get_my_permissions_full() TO authenticated;
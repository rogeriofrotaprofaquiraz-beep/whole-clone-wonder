
CREATE TABLE IF NOT EXISTS public.access_code_sends (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  sent_by uuid NOT NULL,
  channel text NOT NULL CHECK (channel IN ('email','sms')),
  recipient text NOT NULL,
  access_code text NOT NULL,
  note text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.access_code_sends TO authenticated;
GRANT ALL ON public.access_code_sends TO service_role;
ALTER TABLE public.access_code_sends ENABLE ROW LEVEL SECURITY;

CREATE POLICY "view own or staff" ON public.access_code_sends FOR SELECT
TO authenticated USING (
  user_id = auth.uid()
  OR sent_by = auth.uid()
  OR public.has_role(auth.uid(),'admin')
  OR EXISTS (SELECT 1 FROM public.role_permissions rp JOIN public.user_roles ur ON ur.role=rp.role
             WHERE ur.user_id=auth.uid() AND rp.feature_key IN ('escola','banco') AND rp.can_view)
);

CREATE POLICY "insert by staff" ON public.access_code_sends FOR INSERT
TO authenticated WITH CHECK (
  sent_by = auth.uid() AND (
    public.has_role(auth.uid(),'admin')
    OR EXISTS (SELECT 1 FROM public.role_permissions rp JOIN public.user_roles ur ON ur.role=rp.role
               WHERE ur.user_id=auth.uid() AND rp.feature_key IN ('escola','banco') AND rp.can_edit)
  )
);

CREATE INDEX IF NOT EXISTS idx_access_code_sends_user ON public.access_code_sends(user_id, created_at DESC);

CREATE OR REPLACE FUNCTION public.history_by_access_codes(_codes text[])
RETURNS TABLE(access_code text, username text, level int, xp int, coins int, lifetime_coins int)
LANGUAGE sql STABLE SECURITY DEFINER SET search_path=public AS $$
  SELECT p.access_code, p.username, COALESCE(p.level,0), COALESCE(p.xp,0),
         COALESCE(w.coins,0), COALESCE(w.lifetime_coins,0)
  FROM public.profiles p
  LEFT JOIN public.player_wallet w ON w.user_id = p.id
  WHERE p.access_code = ANY(SELECT upper(unnest(_codes)));
$$;
GRANT EXECUTE ON FUNCTION public.history_by_access_codes(text[]) TO anon, authenticated;

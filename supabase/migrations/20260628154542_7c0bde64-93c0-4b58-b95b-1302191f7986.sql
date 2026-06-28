ALTER TABLE public.class_members ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'approved';
ALTER TABLE public.class_members DROP CONSTRAINT IF EXISTS class_members_status_check;
ALTER TABLE public.class_members ADD CONSTRAINT class_members_status_check CHECK (status IN ('pending','approved'));

CREATE OR REPLACE FUNCTION public.join_class_by_code(_code text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE _cid uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Not authenticated'; END IF;
  SELECT id INTO _cid FROM public.classes WHERE invite_code = upper(_code) LIMIT 1;
  IF _cid IS NULL THEN RAISE EXCEPTION 'Código inválido'; END IF;
  INSERT INTO public.class_members (class_id, user_id, role, status)
  VALUES (_cid, auth.uid(), 'student', 'pending')
  ON CONFLICT (class_id, user_id) DO NOTHING;
  RETURN _cid;
END; $$;

CREATE OR REPLACE FUNCTION public.approve_class_member(_class_id uuid, _user_id uuid, _approve boolean)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.classes c JOIN public.schools s ON s.id = c.school_id
    WHERE c.id = _class_id AND (s.owner_id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  ) THEN
    RAISE EXCEPTION 'Sem permissão';
  END IF;
  IF _approve THEN
    UPDATE public.class_members SET status='approved' WHERE class_id=_class_id AND user_id=_user_id;
  ELSE
    DELETE FROM public.class_members WHERE class_id=_class_id AND user_id=_user_id;
  END IF;
END; $$;
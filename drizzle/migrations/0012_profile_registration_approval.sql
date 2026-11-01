ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS full_name text,
  ADD COLUMN IF NOT EXISTS birth_date date,
  ADD COLUMN IF NOT EXISTS registration_completed boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS approved boolean NOT NULL DEFAULT false;

UPDATE public.profiles p SET email = u.email FROM auth.users u WHERE u.id = p.id AND p.email IS NULL;
UPDATE public.profiles SET approved = true, registration_completed = true;

CREATE OR REPLACE FUNCTION public.profiles_guard_approval()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  SELECT u.email INTO NEW.email FROM auth.users u WHERE u.id = NEW.id;
  IF auth.uid() IS NOT NULL AND NOT public.has_role(auth.uid(), 'admin') THEN
    IF TG_OP = 'INSERT' THEN
      NEW.approved := false;
    ELSE
      NEW.approved := OLD.approved;
    END IF;
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS profiles_guard_approval ON public.profiles;
CREATE TRIGGER profiles_guard_approval BEFORE INSERT OR UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.profiles_guard_approval();

CREATE OR REPLACE FUNCTION public.set_user_approved(_user_id uuid, _approved boolean)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  IF NOT public.has_role(auth.uid(), 'admin') THEN RAISE EXCEPTION 'Apenas administradores'; END IF;
  UPDATE public.profiles SET approved = _approved WHERE id = _user_id;
END $$;
GRANT EXECUTE ON FUNCTION public.set_user_approved(uuid, boolean) TO authenticated;
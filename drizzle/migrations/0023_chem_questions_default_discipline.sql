CREATE OR REPLACE FUNCTION public.chem_questions_default_discipline()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN
  IF NEW.discipline IS NULL THEN
    NEW.discipline := CASE NEW.area::text WHEN 'farmacologia' THEN 'farmacos' ELSE NEW.area::text END;
  END IF;
  RETURN NEW;
END $$;
CREATE TRIGGER chem_questions_default_discipline BEFORE INSERT ON public.chem_questions
FOR EACH ROW EXECUTE FUNCTION public.chem_questions_default_discipline();

CREATE TABLE public.elements (
  symbol text PRIMARY KEY,
  number integer NOT NULL,
  name text NOT NULL,
  hero_name text,
  hero_description text,
  hero_image text,
  rarity text,
  attributes jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.elements TO anon, authenticated;
GRANT ALL ON public.elements TO authenticated, service_role;

ALTER TABLE public.elements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read elements" ON public.elements
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert elements" ON public.elements
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update elements" ON public.elements
  FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete elements" ON public.elements
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER elements_updated_at BEFORE UPDATE ON public.elements
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

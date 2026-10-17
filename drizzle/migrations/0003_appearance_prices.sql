CREATE TABLE public.appearance_prices (
  category text NOT NULL,
  option_value text NOT NULL,
  price integer NOT NULL DEFAULT 0,
  updated_by uuid,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (category, option_value)
);
GRANT SELECT ON public.appearance_prices TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.appearance_prices TO authenticated;
GRANT ALL ON public.appearance_prices TO service_role;
ALTER TABLE public.appearance_prices ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Todos logados leem precos" ON public.appearance_prices FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admin gerencia precos" ON public.appearance_prices FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin') AND price >= 0);
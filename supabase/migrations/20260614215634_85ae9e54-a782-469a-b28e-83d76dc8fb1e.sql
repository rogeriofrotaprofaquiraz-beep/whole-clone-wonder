
CREATE TABLE public.chem_terms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  area public.chem_area NOT NULL,
  term text NOT NULL,
  clue text NOT NULL,
  difficulty int NOT NULL DEFAULT 2 CHECK (difficulty BETWEEN 1 AND 5),
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.chem_terms TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.chem_terms TO authenticated;
GRANT ALL ON public.chem_terms TO service_role;
ALTER TABLE public.chem_terms ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone reads terms" ON public.chem_terms FOR SELECT USING (true);
CREATE POLICY "admins manage terms" ON public.chem_terms FOR ALL TO authenticated
  USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE INDEX chem_terms_area_idx ON public.chem_terms(area);
CREATE UNIQUE INDEX chem_terms_area_term_idx ON public.chem_terms(area, lower(term));

CREATE TABLE public.question_disciplines (
  key text PRIMARY KEY,
  label text NOT NULL,
  area chem_area NOT NULL DEFAULT 'geral',
  color text NOT NULL DEFAULT '#059669',
  sort integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.question_disciplines TO authenticated;
GRANT INSERT, UPDATE, DELETE ON public.question_disciplines TO authenticated;
GRANT ALL ON public.question_disciplines TO service_role;
ALTER TABLE public.question_disciplines ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Disciplinas visíveis" ON public.question_disciplines FOR SELECT TO authenticated USING (true);
CREATE POLICY "Staff gerencia disciplinas" ON public.question_disciplines FOR ALL TO authenticated
  USING (public.is_staff(auth.uid())) WITH CHECK (public.is_staff(auth.uid()));

INSERT INTO public.question_disciplines (key,label,area,color,sort) VALUES
 ('organica','Química Orgânica','organica','#16A34A',1),
 ('inorganica','Química Inorgânica','inorganica','#7C3AED',2),
 ('geral','Química Geral','geral','#D97706',3),
 ('ambiental','Química Ambiental','ambiental','#15803D',4),
 ('farmacos','Química dos Fármacos','farmacologia','#DB2777',5),
 ('ciencias','Ciências Gerais','ciencias','#0EA5E9',6),
 ('ciencias6','Ciências — 6º Ano','ciencias','#0284C7',7),
 ('ciencias7','Ciências — 7º Ano','ciencias','#0369A1',8),
 ('ciencias8','Ciências — 8º Ano','ciencias','#075985',9),
 ('ciencias9','Ciências — 9º Ano','ciencias','#0C4A6E',10),
 ('fisicoquimica','Físico-Química','geral','#EA580C',11),
 ('bioquimica','Bioquímica','organica','#65A30D',12),
 ('verde','Química Verde','ambiental','#22C55E',13),
 ('analitica','Química Analítica','geral','#0891B2',14),
 ('eletroquimica','Eletroquímica','geral','#CA8A04',15),
 ('nuclear','Química Nuclear','geral','#DC2626',16),
 ('alimentos','Química dos Alimentos','organica','#F59E0B',17),
 ('forense','Química Forense','inorganica','#475569',18),
 ('materiais','Química de Materiais e Polímeros','organica','#9333EA',19),
 ('historia','História da Química','geral','#A16207',20);

ALTER TABLE public.chem_questions
  ADD COLUMN IF NOT EXISTS discipline text,
  ADD COLUMN IF NOT EXISTS games text[] NOT NULL DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS hint text,
  ADD COLUMN IF NOT EXISTS subcategory text,
  ADD COLUMN IF NOT EXISTS time_limit integer NOT NULL DEFAULT 30;

UPDATE public.chem_questions SET discipline = CASE area::text
  WHEN 'farmacologia' THEN 'farmacos' ELSE area::text END WHERE discipline IS NULL;

CREATE INDEX IF NOT EXISTS chem_questions_games_idx ON public.chem_questions USING gin (games);
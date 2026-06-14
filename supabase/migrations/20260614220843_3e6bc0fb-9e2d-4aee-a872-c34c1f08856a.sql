CREATE TABLE IF NOT EXISTS public.player_wallet (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  coins INTEGER NOT NULL DEFAULT 0,
  lifetime_coins INTEGER NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.player_wallet TO authenticated;
GRANT ALL ON public.player_wallet TO service_role;
ALTER TABLE public.player_wallet ENABLE ROW LEVEL SECURITY;
CREATE POLICY "wallet self read" ON public.player_wallet FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "wallet self upsert" ON public.player_wallet FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "wallet self update" ON public.player_wallet FOR UPDATE USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.player_avatars (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  skin TEXT NOT NULL DEFAULT 'F2C9A0',
  background TEXT NOT NULL DEFAULT 'gradient-violet',
  equipped JSONB NOT NULL DEFAULT '{}'::jsonb,
  unlocked TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.player_avatars TO authenticated;
GRANT ALL ON public.player_avatars TO service_role;
ALTER TABLE public.player_avatars ENABLE ROW LEVEL SECURITY;
CREATE POLICY "avatar self read" ON public.player_avatars FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "avatar self upsert" ON public.player_avatars FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "avatar self update" ON public.player_avatars FOR UPDATE USING (auth.uid() = user_id);

-- Seed elements (alguns comuns) — somente se vazio
INSERT INTO public.elements (symbol, number, name, rarity, attributes)
SELECT * FROM (VALUES
  ('H',1,'Hidrogênio','comum','{"category":"não-metal"}'::jsonb),
  ('He',2,'Hélio','comum','{"category":"gás nobre"}'::jsonb),
  ('Li',3,'Lítio','comum','{"category":"metal alcalino"}'::jsonb),
  ('C',6,'Carbono','comum','{"category":"não-metal"}'::jsonb),
  ('N',7,'Nitrogênio','comum','{"category":"não-metal"}'::jsonb),
  ('O',8,'Oxigênio','comum','{"category":"não-metal"}'::jsonb),
  ('F',9,'Flúor','comum','{"category":"halogênio"}'::jsonb),
  ('Ne',10,'Neônio','comum','{"category":"gás nobre"}'::jsonb),
  ('Na',11,'Sódio','comum','{"category":"metal alcalino"}'::jsonb),
  ('Mg',12,'Magnésio','comum','{"category":"alcalino terroso"}'::jsonb),
  ('Al',13,'Alumínio','comum','{"category":"metal"}'::jsonb),
  ('Si',14,'Silício','comum','{"category":"semimetal"}'::jsonb),
  ('P',15,'Fósforo','comum','{"category":"não-metal"}'::jsonb),
  ('S',16,'Enxofre','comum','{"category":"não-metal"}'::jsonb),
  ('Cl',17,'Cloro','comum','{"category":"halogênio"}'::jsonb),
  ('K',19,'Potássio','comum','{"category":"metal alcalino"}'::jsonb),
  ('Ca',20,'Cálcio','comum','{"category":"alcalino terroso"}'::jsonb),
  ('Fe',26,'Ferro','comum','{"category":"metal de transição"}'::jsonb),
  ('Cu',29,'Cobre','comum','{"category":"metal de transição"}'::jsonb),
  ('Zn',30,'Zinco','comum','{"category":"metal de transição"}'::jsonb),
  ('Br',35,'Bromo','raro','{"category":"halogênio"}'::jsonb),
  ('Ag',47,'Prata','raro','{"category":"metal de transição"}'::jsonb),
  ('I',53,'Iodo','raro','{"category":"halogênio"}'::jsonb),
  ('Au',79,'Ouro','épico','{"category":"metal de transição"}'::jsonb),
  ('Hg',80,'Mercúrio','raro','{"category":"metal de transição"}'::jsonb),
  ('Pb',82,'Chumbo','raro','{"category":"metal pós-transição"}'::jsonb)
) AS v(symbol, number, name, rarity, attributes)
WHERE NOT EXISTS (SELECT 1 FROM public.elements LIMIT 1);
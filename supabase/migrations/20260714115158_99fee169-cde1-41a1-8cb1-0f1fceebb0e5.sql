
CREATE TABLE public.topic_overrides (
  slug TEXT PRIMARY KEY,
  title TEXT,
  lesson TEXT,
  simple TEXT,
  formal TEXT,
  keys JSONB DEFAULT '[]'::jsonb,
  principles JSONB DEFAULT '[]'::jsonb,
  formulas JSONB DEFAULT '[]'::jsonb,
  examples JSONB DEFAULT '[]'::jsonb,
  pitfalls JSONB DEFAULT '[]'::jsonb,
  exercises JSONB DEFAULT '[]'::jsonb,
  refs JSONB DEFAULT '[]'::jsonb,
  image_url TEXT,
  updated_by UUID,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT ON public.topic_overrides TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.topic_overrides TO authenticated;
GRANT ALL ON public.topic_overrides TO service_role;

ALTER TABLE public.topic_overrides ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Todos podem ler edições de tópicos"
  ON public.topic_overrides FOR SELECT USING (true);

CREATE POLICY "Admins podem inserir edições"
  ON public.topic_overrides FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins podem atualizar edições"
  ON public.topic_overrides FOR UPDATE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins podem remover edições"
  ON public.topic_overrides FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER topic_overrides_updated_at
  BEFORE UPDATE ON public.topic_overrides
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

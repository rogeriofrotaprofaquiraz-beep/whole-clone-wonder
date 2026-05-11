-- Tabela de perfis para estender os dados do auth
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username TEXT UNIQUE,
  avatar_url TEXT,
  level INTEGER DEFAULT 1,
  xp INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de partidas (Multiplayer)
CREATE TABLE public.matches (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player1_id UUID NOT NULL REFERENCES public.profiles(id),
  player2_id UUID REFERENCES public.profiles(id), -- NULL se for contra CPU ou aguardando
  status TEXT NOT NULL DEFAULT 'waiting', -- waiting, active, finished
  current_turn UUID REFERENCES public.profiles(id),
  winner_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de jogadas por partida
CREATE TABLE public.match_moves (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  match_id UUID NOT NULL REFERENCES public.matches(id) ON DELETE CASCADE,
  player_id UUID NOT NULL REFERENCES public.profiles(id),
  attribute_selected TEXT NOT NULL,
  card_symbol TEXT NOT NULL,
  round_number INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Coleção de cartas do usuário
CREATE TABLE public.user_collection (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  element_symbol TEXT NOT NULL,
  acquired_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, element_symbol)
);

-- Habilitar RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.match_moves ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_collection ENABLE ROW LEVEL SECURITY;

-- Políticas para Profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Políticas para Matches
CREATE POLICY "Participants can view their matches" ON public.matches 
FOR SELECT USING (auth.uid() = player1_id OR auth.uid() = player2_id);

CREATE POLICY "Participants can create matches" ON public.matches 
FOR INSERT WITH CHECK (auth.uid() = player1_id);

CREATE POLICY "Participants can update their matches" ON public.matches 
FOR UPDATE USING (auth.uid() = player1_id OR auth.uid() = player2_id);

-- Políticas para Match Moves
CREATE POLICY "Participants can view moves of their matches" ON public.match_moves 
FOR SELECT USING (
  EXISTS (
    SELECT 1 FROM public.matches 
    WHERE matches.id = match_moves.match_id 
    AND (matches.player1_id = auth.uid() OR matches.player2_id = auth.uid())
  )
);

CREATE POLICY "Participants can insert moves" ON public.match_moves 
FOR INSERT WITH CHECK (auth.uid() = player_id);

-- Políticas para User Collection
CREATE POLICY "Users can view own collection" ON public.user_collection 
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can add to own collection" ON public.user_collection 
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Trigger para atualizar updated_at
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_matches_updated_at BEFORE UPDATE ON public.matches FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Habilitar Realtime para partidas e jogadas
ALTER PUBLICATION supabase_realtime ADD TABLE public.matches;
ALTER PUBLICATION supabase_realtime ADD TABLE public.match_moves;
-- Atualizar profiles com estatísticas
ALTER TABLE public.profiles 
ADD COLUMN wins INTEGER DEFAULT 0,
ADD COLUMN losses INTEGER DEFAULT 0,
ADD COLUMN streak INTEGER DEFAULT 0,
ADD COLUMN rank_points INTEGER DEFAULT 0;

-- Atualizar matches para suportar salas com código
ALTER TABLE public.matches 
ADD COLUMN room_code TEXT UNIQUE,
ADD COLUMN total_rounds INTEGER DEFAULT 5,
ADD COLUMN current_round INTEGER DEFAULT 1,
ADD COLUMN match_type TEXT DEFAULT 'friendly'; -- friendly ou ranked

-- Criar índice para busca rápida por código de sala
CREATE INDEX idx_matches_room_code ON public.matches(room_code) WHERE room_code IS NOT NULL;

-- Criar uma view para o ranking
CREATE OR REPLACE VIEW public.leaderboard AS
SELECT 
  id, 
  username, 
  avatar_url, 
  rank_points, 
  wins, 
  losses, 
  level
FROM public.profiles
ORDER BY rank_points DESC;

-- Habilitar Realtime para o ranking (opcional, mas bom para atualizações ao vivo)
ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
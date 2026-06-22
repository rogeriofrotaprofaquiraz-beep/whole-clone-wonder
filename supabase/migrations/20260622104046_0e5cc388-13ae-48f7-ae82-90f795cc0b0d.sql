
-- 1) player_avatars: novos campos do Base44
ALTER TABLE public.player_avatars
  ADD COLUMN IF NOT EXISTS gender text,
  ADD COLUMN IF NOT EXISTS body_type text,
  ADD COLUMN IF NOT EXISTS skin_tone text,
  ADD COLUMN IF NOT EXISTS hair_style text,
  ADD COLUMN IF NOT EXISTS hair_color text,
  ADD COLUMN IF NOT EXISTS outfit text,
  ADD COLUMN IF NOT EXISTS accessories text[] DEFAULT ARRAY[]::text[],
  ADD COLUMN IF NOT EXISTS avatar_url text,
  ADD COLUMN IF NOT EXISTS unlocked_items text[] DEFAULT ARRAY[]::text[],
  ADD COLUMN IF NOT EXISTS total_earnings integer NOT NULL DEFAULT 0;

-- 2) player_stats: nova tabela
CREATE TABLE IF NOT EXISTS public.player_stats (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text,
  avatar_url text,
  ranking_points integer NOT NULL DEFAULT 1000,
  total_games integer NOT NULL DEFAULT 0,
  total_wins integer NOT NULL DEFAULT 0,
  total_losses integer NOT NULL DEFAULT 0,
  total_draws integer NOT NULL DEFAULT 0,
  win_streak integer NOT NULL DEFAULT 0,
  best_win_streak integer NOT NULL DEFAULT 0,
  favorite_element text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.player_stats TO authenticated;
GRANT ALL ON public.player_stats TO service_role;

ALTER TABLE public.player_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "player_stats_select_all_authenticated"
  ON public.player_stats FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "player_stats_insert_own"
  ON public.player_stats FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "player_stats_update_own_or_admin"
  ON public.player_stats FOR UPDATE TO authenticated
  USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "player_stats_delete_admin"
  ON public.player_stats FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER trg_player_stats_updated_at
  BEFORE UPDATE ON public.player_stats
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 3) activity_logs: novos campos do Base44
ALTER TABLE public.activity_logs
  ADD COLUMN IF NOT EXISTS user_email text,
  ADD COLUMN IF NOT EXISTS user_name text,
  ADD COLUMN IF NOT EXISTS session_id text,
  ADD COLUMN IF NOT EXISTS page text,
  ADD COLUMN IF NOT EXISTS duration_seconds integer;

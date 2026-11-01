import { supabase } from "@/integrations/supabase/client";

// Jogo aberto no momento (definido pelo Campeonato). Fora dele, cada jogo informa sua própria chave.
let currentGame: string | null = null;
export const setCurrentGame = (key: string | null) => { currentGame = key; };

async function save(game: string, correct: number, wrong: number, points: number) {
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  await (supabase as any).from("game_results").insert({ user_id: data.user.id, game_key: game, correct, wrong, points });
}

export function recordHit(points = 0, game?: string) {
  const g = game ?? currentGame; if (g) save(g, 1, 0, points).catch(() => {});
}
export function recordMiss(game?: string) {
  const g = game ?? currentGame; if (g) save(g, 0, 1, 0).catch(() => {});
}

export const PENDING_GAME_KEY = "pendingAssignedGame";

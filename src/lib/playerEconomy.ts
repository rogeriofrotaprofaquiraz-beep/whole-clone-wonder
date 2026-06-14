import { supabase } from "@/integrations/supabase/client";

export type AvatarItem = {
  id: string;
  slot: "hat" | "glasses" | "outfit" | "background";
  name: string;
  emoji: string;
  price: number;
};

export const SKIN_TONES = ["F2C9A0", "E8B58A", "C68863", "8D5524", "FFE0BD"];

export const SHOP_ITEMS: AvatarItem[] = [
  { id: "hat_grad", slot: "hat", name: "Chapéu de formando", emoji: "🎓", price: 30 },
  { id: "hat_crown", slot: "hat", name: "Coroa", emoji: "👑", price: 120 },
  { id: "hat_lab", slot: "hat", name: "Capacete", emoji: "👷", price: 50 },
  { id: "glasses_nerd", slot: "glasses", name: "Óculos nerd", emoji: "🤓", price: 25 },
  { id: "glasses_sun", slot: "glasses", name: "Óculos escuros", emoji: "🕶️", price: 40 },
  { id: "glasses_vr", slot: "glasses", name: "VR", emoji: "🥽", price: 80 },
  { id: "outfit_lab", slot: "outfit", name: "Jaleco", emoji: "🥼", price: 40 },
  { id: "outfit_tie", slot: "outfit", name: "Gravata", emoji: "👔", price: 30 },
  { id: "outfit_medal", slot: "outfit", name: "Medalha", emoji: "🏅", price: 60 },
  { id: "bg_violet", slot: "background", name: "Fundo Roxo", emoji: "🟣", price: 0 },
  { id: "bg_emerald", slot: "background", name: "Fundo Verde", emoji: "🟢", price: 20 },
  { id: "bg_amber", slot: "background", name: "Fundo Âmbar", emoji: "🟠", price: 20 },
  { id: "bg_galaxy", slot: "background", name: "Galáxia", emoji: "🌌", price: 100 },
];

export const BG_STYLES: Record<string, string> = {
  bg_violet: "linear-gradient(135deg,#4C1D95,#7C3AED)",
  bg_emerald: "linear-gradient(135deg,#065F46,#10B981)",
  bg_amber: "linear-gradient(135deg,#92400E,#F59E0B)",
  bg_galaxy: "radial-gradient(circle at 30% 30%,#7C3AED,#0F172A 70%)",
};

/** Moedas por acerto: dificuldade × bônus de tempo (mesma curva do score). */
export function coinsFor(difficulty: number, elapsedMs: number, maxMs = 90_000) {
  const base = [1, 2, 5, 10, 20][Math.max(1, Math.min(5, difficulty)) - 1];
  const t = Math.min(1, Math.max(0, elapsedMs / maxMs));
  const factor = 1 - 0.7 * t;
  return Math.max(1, Math.round(base * factor));
}

export async function loadWallet(userId: string) {
  const { data } = await supabase.from("player_wallet").select("*").eq("user_id", userId).maybeSingle();
  if (data) return data as any;
  const { data: created } = await supabase
    .from("player_wallet")
    .insert({ user_id: userId, coins: 0, lifetime_coins: 0 })
    .select().single();
  return created as any;
}

export async function addCoins(userId: string, amount: number) {
  const w = await loadWallet(userId);
  const next = { coins: (w?.coins ?? 0) + amount, lifetime_coins: (w?.lifetime_coins ?? 0) + amount };
  await supabase.from("player_wallet").update(next).eq("user_id", userId);
  return next;
}

export async function loadAvatar(userId: string) {
  const { data } = await supabase.from("player_avatars").select("*").eq("user_id", userId).maybeSingle();
  if (data) return data as any;
  const { data: created } = await supabase
    .from("player_avatars")
    .insert({ user_id: userId, equipped: { background: "bg_violet" }, unlocked: ["bg_violet"] })
    .select().single();
  return created as any;
}

export async function buyItem(userId: string, item: AvatarItem) {
  const w = await loadWallet(userId);
  const a = await loadAvatar(userId);
  if ((a.unlocked ?? []).includes(item.id)) return { ok: false, reason: "Já desbloqueado" };
  if ((w.coins ?? 0) < item.price) return { ok: false, reason: "Moedas insuficientes" };
  const unlocked = [...(a.unlocked ?? []), item.id];
  await supabase.from("player_wallet").update({ coins: w.coins - item.price }).eq("user_id", userId);
  await supabase.from("player_avatars").update({ unlocked }).eq("user_id", userId);
  return { ok: true };
}

export async function equipItem(userId: string, item: AvatarItem) {
  const a = await loadAvatar(userId);
  const equipped = { ...(a.equipped ?? {}), [item.slot]: item.id };
  await supabase.from("player_avatars").update({ equipped }).eq("user_id", userId);
  return equipped;
}

export async function setSkin(userId: string, skin: string) {
  await supabase.from("player_avatars").update({ skin }).eq("user_id", userId);
}

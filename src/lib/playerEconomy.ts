import { supabase } from "@/integrations/supabase/client";

/** Nome e símbolo da moeda do jogo. */
export const COIN_NAME = "Átomos";
export const COIN_NAME_SINGULAR = "Átomo";
export const COIN_SYMBOL = "⚛";

/** Custos das ações de personalização (em Átomos). Admin paga 0. */
export const COSTS = {
  generateAvatarAI: 50,   // Gerar avatar com IA
  changeAppearance: 5,    // Cada alteração de gênero/corpo/pele/cabelo
  uploadPhoto: 10,        // Upload de foto de referência
  uploadAvatar: 20,       // Upload direto de imagem como avatar
  applyLocalAvatar: 5,    // Aplicar avatar montado no compositor local (sem IA)
} as const;

export type AvatarItem = {
  id: string;
  slot: "hat" | "glasses" | "outfit" | "background" | "accessory";
  name: string;
  emoji: string;
  price: number;
};

export const SKIN_TONES = ["F2C9A0", "E8B58A", "C68863", "8D5524", "FFE0BD"];

export const SHOP_ITEMS: AvatarItem[] = [
  // Roupa (outfit) - estilos
  { id: "outfit_casual", slot: "outfit", name: "Casual", emoji: "👕", price: 0 },
  { id: "outfit_cientista", slot: "outfit", name: "Cientista", emoji: "🥼", price: 40 },
  { id: "outfit_heroi", slot: "outfit", name: "Herói", emoji: "🦸", price: 80 },
  { id: "outfit_futurista", slot: "outfit", name: "Futurista", emoji: "🤖", price: 100 },
  { id: "outfit_formal", slot: "outfit", name: "Formal", emoji: "👔", price: 50 },
  // Cenário (background)
  { id: "bg_lab", slot: "background", name: "Laboratório", emoji: "🧪", price: 0 },
  { id: "bg_space", slot: "background", name: "Espaço", emoji: "🌌", price: 60 },
  { id: "bg_nature", slot: "background", name: "Natureza", emoji: "🌳", price: 40 },
  { id: "bg_city", slot: "background", name: "Cidade", emoji: "🏙️", price: 40 },
  { id: "bg_abstract", slot: "background", name: "Abstrato", emoji: "🎨", price: 30 },
  // Extras (acessórios)
  { id: "acc_oculos", slot: "accessory", name: "Óculos", emoji: "👓", price: 40 },
  { id: "acc_oculos_protecao", slot: "accessory", name: "Óculos de Proteção", emoji: "🥽", price: 60 },
  { id: "acc_jaleco", slot: "accessory", name: "Jaleco", emoji: "🥼", price: 80 },
  { id: "acc_luvas", slot: "accessory", name: "Luvas", emoji: "🧤", price: 30 },
  { id: "acc_capa", slot: "accessory", name: "Capa de Herói", emoji: "🦸‍♂️", price: 150 },
  { id: "acc_capacete", slot: "accessory", name: "Capacete", emoji: "⛑️", price: 120 },
  { id: "acc_mascara", slot: "accessory", name: "Máscara", emoji: "🎭", price: 100 },
  { id: "acc_mochila", slot: "accessory", name: "Mochila", emoji: "🎒", price: 70 },
];

export const BG_STYLES: Record<string, string> = {
  bg_lab: "linear-gradient(135deg,#0F172A,#1E3A8A)",
  bg_space: "radial-gradient(circle at 30% 30%,#7C3AED,#0F172A 70%)",
  bg_nature: "linear-gradient(135deg,#065F46,#10B981)",
  bg_city: "linear-gradient(135deg,#1F2937,#6B7280)",
  bg_abstract: "linear-gradient(135deg,#EC4899,#F59E0B)",
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
    .insert({ user_id: userId, equipped: { background: "bg_lab", outfit: "outfit_casual" }, unlocked: ["bg_lab", "outfit_casual"] })
    .select().single();
  return created as any;
}

export async function isAdmin(userId: string) {
  const { data, error } = await supabase.rpc("has_role", { _user_id: userId, _role: "admin" });
  if (!error) return !!data;

  const { data: roleData } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", userId)
    .eq("role", "admin")
    .maybeSingle();
  return !!roleData;
}

export async function buyItem(userId: string, item: AvatarItem) {
  const w = await loadWallet(userId);
  const a = await loadAvatar(userId);
  if ((a.unlocked ?? []).includes(item.id)) return { ok: false, reason: "Já desbloqueado" };
  const admin = await isAdmin(userId);
  if (!admin && (w.coins ?? 0) < item.price) return { ok: false, reason: "Moedas insuficientes" };
  const unlocked = [...(a.unlocked ?? []), item.id];
  if (!admin) {
    await supabase.from("player_wallet").update({ coins: w.coins - item.price }).eq("user_id", userId);
  }
  await supabase.from("player_avatars").update({ unlocked }).eq("user_id", userId);
  return { ok: true, admin };
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

/** Cobra moedas; admin não paga. Retorna { ok, reason?, admin }. */
export async function spendCoins(userId: string, amount: number, reason: string) {
  const admin = await isAdmin(userId);
  if (admin) return { ok: true, admin: true, charged: 0 };
  if (amount <= 0) return { ok: true, admin: false, charged: 0 };
  const w = await loadWallet(userId);
  if ((w?.coins ?? 0) < amount) {
    return { ok: false, admin: false, charged: 0, reason: `${COIN_NAME} insuficientes para ${reason} (precisa ${amount}${COIN_SYMBOL})` };
  }
  await supabase.from("player_wallet").update({ coins: w.coins - amount }).eq("user_id", userId);
  return { ok: true, admin: false, charged: amount };
}

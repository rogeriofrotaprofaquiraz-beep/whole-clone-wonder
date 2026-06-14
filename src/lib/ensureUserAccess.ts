import { supabase } from "@/integrations/supabase/client";
import { loadAvatar, loadWallet } from "@/lib/playerEconomy";

type AppRole = "admin" | "teacher" | "user";

const safeUsername = (raw: string, userId: string) => {
  const base = raw.split("@")[0]?.replace(/[^a-zA-Z0-9_]+/g, "_").slice(0, 30) || "jogador";
  return `${base}_${userId.slice(0, 8)}`;
};

export async function ensureUserAccess(user: { id: string; email?: string | null; user_metadata?: any }): Promise<AppRole> {
  const username = safeUsername(
    user.user_metadata?.username || user.user_metadata?.full_name || user.email || "jogador",
    user.id,
  );

  await supabase
    .from("profiles")
    .upsert({ id: user.id, username }, { onConflict: "id", ignoreDuplicates: true });

  await Promise.all([loadWallet(user.id), loadAvatar(user.id)]);

  const { data: roles } = await supabase
    .from("user_roles")
    .select("role")
    .eq("user_id", user.id);

  if (roles?.some((r) => r.role === "admin")) return "admin";
  if (roles?.some((r) => r.role === "moderator")) return "teacher";
  return "user";
}
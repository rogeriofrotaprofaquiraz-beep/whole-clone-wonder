import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const GAME_FEATURES = [
  { key: "jogo_quiz", label: "Quiz (sala ao vivo)" },
  { key: "jogo_forca", label: "Forca" },
  { key: "jogo_caca", label: "Caça-palavras" },
  { key: "jogo_memoria", label: "Memória" },
  { key: "jogo_batalha", label: "Batalha de cartas" },
] as const;

export const PAGE_FEATURES = [
  { key: "pagina_cursos", label: "Cursos", path: "/cursos" },
  { key: "pagina_ranking", label: "Ranking", path: "/ranking" },
  { key: "pagina_olimpiadas", label: "Olimpíadas", path: "/olimpiadas" },
  { key: "pagina_carteira", label: "Carteira", path: "/carteira" },
  { key: "pagina_progresso", label: "Progresso", path: "/progresso" },
  { key: "pagina_perfil", label: "Perfil / Avatar", path: "/perfil" },
  { key: "pagina_aula", label: "Aula / Treino", path: "/aula" },
] as const;

export const CONFIG_ROLES = [
  { value: "student", label: "Aluno" },
  { value: "user", label: "Usuário comum" },
  { value: "parent", label: "Pais / Responsável" },
] as const;

const STAFF = ["admin", "teacher", "moderator", "coordinator", "director"];

export type Rule = { class_id: string | null; role: string; feature_key: string; allowed: boolean };

/** Regra da turma vence a regra geral; sem regra = liberado. */
export function resolveAccess(rules: Rule[], roles: string[], classIds: string[], feature: string): boolean {
  if (roles.some((r) => STAFF.includes(r))) return true;
  const rel = rules.filter((r) => r.feature_key === feature && roles.includes(r.role));
  const cls = rel.filter((r) => r.class_id && classIds.includes(r.class_id));
  if (cls.length) return cls.some((r) => r.allowed);
  const glob = rel.filter((r) => !r.class_id);
  if (glob.length) return glob.some((r) => r.allowed);
  return true;
}

export function useFeatureAccess() {
  const [state, setState] = useState<{ loading: boolean; can: (f: string) => boolean }>({ loading: true, can: () => true });
  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return setState({ loading: false, can: () => true });
      const [{ data: roles }, { data: members }, { data: rules }] = await Promise.all([
        supabase.from("user_roles").select("role").eq("user_id", u.user.id),
        supabase.from("class_members").select("class_id,status").eq("user_id", u.user.id),
        supabase.from("access_rules").select("class_id,role,feature_key,allowed"),
      ]);
      let r = (roles ?? []).map((x: any) => x.role as string);
      if (!r.length) r = ["user"];
      if (!r.includes("student") && (members ?? []).length) r.push("student");
      const cls = (members ?? []).filter((m: any) => m.status !== "pending").map((m: any) => m.class_id);
      setState({ loading: false, can: (f) => resolveAccess((rules ?? []) as Rule[], r, cls, f) });
    })();
  }, []);
  return state;
}

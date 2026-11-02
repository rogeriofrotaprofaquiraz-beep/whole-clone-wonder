import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export type Perm = { view: boolean; edit: boolean; create: boolean; remove: boolean; admin: boolean };
const ALL: Perm = { view: true, edit: true, create: true, remove: true, admin: true };
const NONE: Perm = { view: false, edit: false, create: false, remove: false, admin: false };

/** Permissões do usuário logado para uma função do site (matriz de permissões). Admin tem tudo. */
export function usePermission(featureKey: string): Perm & { loading: boolean } {
  const [perm, setPerm] = useState<Perm>(NONE);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let alive = true;
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { if (alive) { setPerm(NONE); setLoading(false); } return; }
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", session.user.id);
      if ((roles ?? []).some((r: any) => r.role === "admin")) { if (alive) { setPerm(ALL); setLoading(false); } return; }
      const { data } = await (supabase.rpc as any)("get_my_permissions_full");
      const row = (data ?? []).find((p: any) => p.feature_key === featureKey);
      const p: Perm = row
        ? row.is_admin ? ALL : { view: !!row.can_view, edit: !!row.can_edit, create: !!row.can_create, remove: !!row.can_delete, admin: false }
        : NONE;
      if (alive) { setPerm(p); setLoading(false); }
    })();
    return () => { alive = false; };
  }, [featureKey]);
  return { ...perm, loading };
}

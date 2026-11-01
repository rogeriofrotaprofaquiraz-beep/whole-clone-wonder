import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { GAME_FEATURES } from "@/lib/featureAccess";

/** Liga/desliga os jogos dos alunos de uma turma (regra da turma, perfil Aluno). */
export function ClassGamesDialog({ cls, onClose }: { cls: { id: string; name: string } | null; onClose: () => void }) {
  const [rules, setRules] = useState<Record<string, { id: string; allowed: boolean }>>({});
  const load = async () => {
    if (!cls) return;
    const { data } = await supabase.from("access_rules").select("id,feature_key,allowed")
      .eq("class_id", cls.id).eq("role", "student").is("profile_id", null).is("user_id", null);
    const m: Record<string, any> = {};
    (data ?? []).forEach((r: any) => (m[r.feature_key] = { id: r.id, allowed: r.allowed }));
    setRules(m);
  };
  useEffect(() => { load(); }, [cls?.id]);

  const toggle = async (key: string, allowed: boolean) => {
    const { data: u } = await supabase.auth.getUser();
    const ex = rules[key];
    const { error } = ex
      ? await supabase.from("access_rules").update({ allowed, updated_by: u.user?.id, updated_at: new Date().toISOString() }).eq("id", ex.id)
      : await supabase.from("access_rules").insert({ feature_key: key, allowed, role: "student", class_id: cls!.id, updated_by: u.user?.id });
    if (error) return toast.error(error.message);
    toast.success(allowed ? "Jogo liberado" : "Jogo bloqueado");
    load();
  };

  return (
    <Dialog open={!!cls} onOpenChange={(o) => !o && onClose()}>
      <DialogContent>
        <DialogHeader><DialogTitle>🎮 Jogos da turma {cls?.name}</DialogTitle></DialogHeader>
        <div className="space-y-2">
          {GAME_FEATURES.map((f) => (
            <div key={f.key} className="flex items-center justify-between border rounded-lg p-3">
              <span>{f.label}</span>
              <Switch checked={rules[f.key]?.allowed ?? true} onCheckedChange={(v) => toggle(f.key, v)} />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

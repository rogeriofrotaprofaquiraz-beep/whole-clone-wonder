import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { CONFIG_ROLES, GAME_FEATURES, PAGE_FEATURES } from "@/lib/featureAccess";

const ALL = "__all__";

export default function ControleAcesso() {
  const navigate = useNavigate();
  const [allowedUser, setAllowedUser] = useState<boolean | null>(null);
  const [classes, setClasses] = useState<any[]>([]);
  const [classId, setClassId] = useState<string>(ALL);
  const [role, setRole] = useState<string>("student");
  const [rules, setRules] = useState<Record<string, { id: string; allowed: boolean }>>({});
  const [uid, setUid] = useState<string>("");

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return setAllowedUser(false);
      setUid(u.user.id);
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
      const ok = (roles ?? []).some((r: any) => ["admin", "teacher", "moderator", "coordinator", "director"].includes(r.role));
      setAllowedUser(ok);
      const { data: cls } = await supabase.from("classes").select("id,name,grade_year").order("name");
      setClasses(cls ?? []);
    })();
  }, []);

  const load = async () => {
    let q = supabase.from("access_rules").select("id,feature_key,allowed").eq("role", role as any);
    q = classId === ALL ? q.is("class_id", null) : q.eq("class_id", classId);
    const { data } = await q;
    const m: Record<string, any> = {};
    (data ?? []).forEach((r: any) => (m[r.feature_key] = { id: r.id, allowed: r.allowed }));
    setRules(m);
  };
  useEffect(() => { if (allowedUser) load(); }, [allowedUser, role, classId]);

  const toggle = async (key: string, allowed: boolean) => {
    const ex = rules[key];
    const { error } = ex
      ? await supabase.from("access_rules").update({ allowed, updated_by: uid, updated_at: new Date().toISOString() }).eq("id", ex.id)
      : await supabase.from("access_rules").insert({ feature_key: key, allowed, role: role as any, class_id: classId === ALL ? null : classId, updated_by: uid });
    if (error) return toast.error(error.message);
    toast.success(allowed ? "Liberado" : "Bloqueado");
    load();
  };

  if (allowedUser === null) return null;
  if (!allowedUser) return <div className="p-8 text-center">Somente professores e gestores podem configurar acessos.</div>;

  const Section = ({ title, items }: { title: string; items: readonly { key: string; label: string }[] }) => (
    <Card className="p-5">
      <h3 className="font-bold mb-3">{title}</h3>
      <div className="space-y-3">
        {items.map((f) => (
          <div key={f.key} className="flex items-center justify-between border rounded-lg p-3">
            <span>{f.label}</span>
            <Switch checked={rules[f.key]?.allowed ?? true} onCheckedChange={(v) => toggle(f.key, v)} />
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <Button variant="ghost" onClick={() => navigate(-1)}><ArrowLeft size={16} className="mr-1" />Voltar</Button>
        <Card className="p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> Controle de Acesso por Perfil</h1>
          <p className="text-sm text-muted-foreground">Escolha o perfil e a turma. Regras da turma valem mais que a regra geral. Sem regra, tudo fica liberado.</p>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <div>
              <Label>Perfil</Label>
              <Select value={role} onValueChange={setRole}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{CONFIG_ROLES.map((r) => <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label>Turma</Label>
              <Select value={classId} onValueChange={setClassId}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>Todas as turmas (regra geral)</SelectItem>
                  {classes.map((c) => <SelectItem key={c.id} value={c.id}>{c.name} · {c.grade_year}º ano</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>
        <div className="grid md:grid-cols-2 gap-4">
          <Section title="Jogos" items={GAME_FEATURES} />
          <Section title="Páginas do site" items={PAGE_FEATURES} />
        </div>
      </div>
    </div>
  );
}

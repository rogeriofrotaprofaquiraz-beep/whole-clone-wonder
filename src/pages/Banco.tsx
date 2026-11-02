import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { usePermission } from "@/lib/permissions";
import { ArrowLeft, Coins, Percent, Settings, Loader2, Plus, Save } from "lucide-react";

type Profile = { id: string; username: string | null };
type EconRow = { id: string; action_key: string; label: string; cost: number; dirty?: boolean };
type Promo = {
  id?: string; name: string; bonus_pct: number; starts_at: string; ends_at: string;
  active: boolean; class_id: string | null; created_by?: string;
};
type ClassRow = { id: string; name: string };

export default function Banco() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [me, setMe] = useState<string>("");
  const perm = usePermission("banco");

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [search, setSearch] = useState("");
  const [grantUser, setGrantUser] = useState<string>("");
  const [grantAmount, setGrantAmount] = useState<number>(50);
  const [grantReason, setGrantReason] = useState<string>("Bônus do professor");

  const [econ, setEcon] = useState<EconRow[]>([]);
  const [promos, setPromos] = useState<Promo[]>([]);
  const [classes, setClasses] = useState<ClassRow[]>([]);
  const [newPromo, setNewPromo] = useState<Promo>({
    name: "Final de semana turbo", bonus_pct: 20,
    starts_at: new Date().toISOString().slice(0, 16),
    ends_at: new Date(Date.now() + 86400000).toISOString().slice(0, 16),
    active: true, class_id: null,
  });

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.user) { navigate("/"); return; }
      setMe(session.user.id);
      const role = await ensureUserAccess(session.user);
      const { data: perms } = await supabase.rpc("get_my_permissions");
      const banco = (perms ?? []).find((p: any) => p.feature_key === "banco");
      const allowed = role === "admin" || role === "teacher" || banco?.can_view;
      if (!allowed) { toast.error("Acesso restrito"); navigate("/"); return; }
      setAuthorized(true);

      const [{ data: ps }, { data: es }, { data: pr }, { data: cs }] = await Promise.all([
        supabase.from("profiles").select("id, username").order("username"),
        supabase.from("economy_settings").select("*").order("label"),
        supabase.from("credit_promotions").select("*").order("starts_at", { ascending: false }),
        supabase.from("classes").select("id, name").order("name"),
      ]);
      setProfiles(ps ?? []);
      setEcon((es ?? []) as any);
      setPromos((pr ?? []) as any);
      setClasses((cs ?? []) as any);
      setLoading(false);
    })();
  }, [navigate]);

  const filtered = useMemo(
    () => profiles.filter((p) => (p.username ?? "").toLowerCase().includes(search.toLowerCase())).slice(0, 50),
    [profiles, search],
  );

  const grant = async () => {
    if (!perm.create) return toast.error("Seu perfil não tem permissão para dar Átomos.");
    if (!grantUser || !grantAmount) return toast.error("Informe usuário e valor");
    const { data, error } = await supabase.rpc("grant_coins_to_user", {
      _user_id: grantUser, _amount: grantAmount, _reason: grantReason,
    });
    if (error) return toast.error(error.message);
    toast.success(`Saldo atualizado: ${data} Átomos`);
  };

  const saveEcon = async () => {
    if (!perm.edit) return toast.error("Seu perfil não tem permissão para editar custos.");
    const dirty = econ.filter((e) => e.dirty);
    for (const e of dirty) {
      await supabase.from("economy_settings").update({ cost: e.cost, label: e.label }).eq("id", e.id);
    }
    setEcon((p) => p.map((e) => ({ ...e, dirty: false })));
    toast.success(`${dirty.length} custos atualizados`);
  };

  const addPromo = async () => {
    if (!perm.create) return toast.error("Seu perfil não tem permissão para criar promoções.");
    if (!newPromo.name) return toast.error("Nome obrigatório");
    const { data, error } = await supabase.from("credit_promotions").insert({
      ...newPromo, created_by: me,
      starts_at: new Date(newPromo.starts_at).toISOString(),
      ends_at: new Date(newPromo.ends_at).toISOString(),
    }).select().single();
    if (error) return toast.error(error.message);
    setPromos((p) => [data as any, ...p]);
    toast.success("Promoção criada");
  };

  const togglePromo = async (id: string, active: boolean) => {
    if (!perm.edit) return toast.error("Seu perfil não tem permissão para editar promoções.");
    await supabase.from("credit_promotions").update({ active }).eq("id", id);
    setPromos((p) => p.map((x) => (x.id === id ? { ...x, active } : x)));
  };

  if (loading) return <div className="min-h-screen grid place-items-center text-white"><Loader2 className="animate-spin" /></div>;
  if (!authorized) return null;

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2" />Voltar</Button></Link>
          <h1 className="text-3xl font-black flex items-center gap-2">
            <Coins className="w-7 h-7 text-amber-300" /> Banco de Átomos
          </h1>
          <div />
        </div>

        <Tabs defaultValue="grant">
          <TabsList className="bg-slate-900/60">
            <TabsTrigger value="grant">Conceder créditos</TabsTrigger>
            <TabsTrigger value="economy">Custos do avatar</TabsTrigger>
            <TabsTrigger value="promo">Promoções</TabsTrigger>
          </TabsList>

          <TabsContent value="grant">
            <Card className="p-4 bg-slate-900/60 border-white/10 space-y-4">
              <div className="grid md:grid-cols-4 gap-3">
                <Input placeholder="Buscar aluno" value={search} onChange={(e) => setSearch(e.target.value)}
                  className="md:col-span-2 bg-slate-800 border-white/10 text-white" />
                <Input type="number" placeholder="Valor" value={grantAmount}
                  onChange={(e) => setGrantAmount(parseInt(e.target.value) || 0)}
                  className="bg-slate-800 border-white/10 text-white" />
                <Input placeholder="Motivo" value={grantReason} onChange={(e) => setGrantReason(e.target.value)}
                  className="bg-slate-800 border-white/10 text-white" />
              </div>
              <div className="border border-white/10 rounded-lg max-h-96 overflow-y-auto divide-y divide-white/5">
                {filtered.map((p) => (
                  <button key={p.id} onClick={() => setGrantUser(p.id)}
                    className={`w-full text-left px-3 py-2 hover:bg-white/5 flex items-center justify-between ${grantUser === p.id ? "bg-amber-500/20" : ""}`}>
                    <span className="font-bold">{p.username ?? p.id.slice(0, 8)}</span>
                    {grantUser === p.id && <span className="text-xs text-amber-300">selecionado</span>}
                  </button>
                ))}
              </div>
              <Button onClick={grant} className="bg-amber-500 hover:bg-amber-600 text-black font-black">
                <Coins className="w-4 h-4 mr-2" /> Conceder {grantAmount} Átomos
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="economy">
            <Card className="p-4 bg-slate-900/60 border-white/10 space-y-3">
              <p className="text-sm text-white/70 flex items-center gap-2">
                <Settings className="w-4 h-4" /> Edite o custo (em Átomos) cobrado de cada ação do avatar para todos os jogadores.
              </p>
              {econ.map((e) => (
                <div key={e.id} className="grid grid-cols-12 gap-2 items-center">
                  <div className="col-span-6 font-bold">{e.label}<div className="text-[10px] text-white/40">{e.action_key}</div></div>
                  <Input type="number" value={e.cost} onChange={(ev) =>
                    setEcon((p) => p.map((x) => x.id === e.id ? { ...x, cost: parseInt(ev.target.value) || 0, dirty: true } : x))
                  } className="col-span-4 bg-slate-800 border-white/10 text-white font-bold" />
                  <span className="col-span-2 text-amber-300">⚛ Átomos</span>
                </div>
              ))}
              <Button onClick={saveEcon} disabled={!econ.some((e) => e.dirty)}>
                <Save className="w-4 h-4 mr-2" /> Salvar custos
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="promo">
            <Card className="p-4 bg-slate-900/60 border-white/10 space-y-4">
              <p className="text-sm text-white/70 flex items-center gap-2">
                <Percent className="w-4 h-4" /> Defina períodos em que os alunos ganham bônus percentual extra de Átomos por acerto.
              </p>
              <div className="grid md:grid-cols-5 gap-2">
                <Input placeholder="Nome" value={newPromo.name}
                  onChange={(e) => setNewPromo({ ...newPromo, name: e.target.value })}
                  className="bg-slate-800 border-white/10 text-white" />
                <Input type="number" placeholder="Bônus %" value={newPromo.bonus_pct}
                  onChange={(e) => setNewPromo({ ...newPromo, bonus_pct: parseInt(e.target.value) || 0 })}
                  className="bg-slate-800 border-white/10 text-white" />
                <Input type="datetime-local" value={newPromo.starts_at}
                  onChange={(e) => setNewPromo({ ...newPromo, starts_at: e.target.value })}
                  className="bg-slate-800 border-white/10 text-white" />
                <Input type="datetime-local" value={newPromo.ends_at}
                  onChange={(e) => setNewPromo({ ...newPromo, ends_at: e.target.value })}
                  className="bg-slate-800 border-white/10 text-white" />
                <Select value={newPromo.class_id ?? "all"} onValueChange={(v) => setNewPromo({ ...newPromo, class_id: v === "all" ? null : v })}>
                  <SelectTrigger className="bg-slate-800 border-white/10 text-white"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as turmas</SelectItem>
                    {classes.map((c) => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={addPromo}><Plus className="w-4 h-4 mr-2" /> Criar promoção</Button>

              <div className="space-y-2">
                {promos.map((p) => (
                  <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/60 border border-white/10">
                    <div>
                      <div className="font-black">{p.name} <span className="text-amber-300">+{p.bonus_pct}%</span></div>
                      <div className="text-xs text-white/60">
                        {new Date(p.starts_at).toLocaleString()} → {new Date(p.ends_at).toLocaleString()}
                        {p.class_id ? " · turma específica" : " · todas as turmas"}
                      </div>
                    </div>
                    <Button size="sm" variant={p.active ? "default" : "secondary"} onClick={() => togglePromo(p.id!, !p.active)}>
                      {p.active ? "Ativa" : "Inativa"}
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

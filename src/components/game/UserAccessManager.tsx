import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { ChevronDown, ChevronUp, Search, Shield, Trash, CheckCircle2, XCircle } from "lucide-react";
import { GAME_FEATURES, PAGE_FEATURES } from "@/lib/featureAccess";

const FEATURES = [...GAME_FEATURES.map((f) => ({ ...f, group: "Jogos" })), ...PAGE_FEATURES.map((f) => ({ key: f.key, label: f.label, group: "Páginas" }))];
const ALL = "__all";

type Props = {
  profiles: any[];
  onRole: (id: string, r: "admin" | "moderator" | "user") => void;
  onCoins: (id: string, v: number) => void;
  onDelete: (id: string) => void;
  onGrantAll: () => void;
  onRefresh: () => void;
};

export function UserAccessManager({ profiles, onRole, onCoins, onDelete, onGrantAll, onRefresh }: Props) {
  const [schools, setSchools] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [rules, setRules] = useState<Record<string, Record<string, { id: string; allowed: boolean }>>>({});
  const [school, setSchool] = useState(ALL);
  const [klass, setKlass] = useState(ALL);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const loadRules = async () => {
    const { data } = await supabase.from("access_rules").select("id,user_id,feature_key,allowed").not("user_id", "is", null);
    const m: typeof rules = {};
    (data ?? []).forEach((r: any) => ((m[r.user_id] ??= {})[r.feature_key] = { id: r.id, allowed: r.allowed }));
    setRules(m);
  };

  useEffect(() => {
    (async () => {
      const [s, c, mm] = await Promise.all([
        supabase.from("schools").select("id,name").order("name"),
        supabase.from("classes").select("id,name,school_id,grade_year").order("name"),
        supabase.from("class_members").select("user_id,class_id,status"),
      ]);
      setSchools(s.data ?? []); setClasses(c.data ?? []); setMembers(mm.data ?? []);
    })();
    loadRules();
  }, []);

  const classOf = (uid: string) => members.filter((m) => m.user_id === uid && m.status !== "pending").map((m) => classes.find((c) => c.id === m.class_id)).filter(Boolean);

  const visible = useMemo(() => profiles.filter((p) => {
    const t = q.toLowerCase();
    if (t && !(`${p.username ?? ""} ${p.email ?? ""}`.toLowerCase().includes(t))) return false;
    const cl = classOf(p.id);
    if (klass !== ALL) return cl.some((c: any) => c.id === klass);
    if (school !== ALL) return cl.some((c: any) => c.school_id === school);
    return true;
  }), [profiles, q, school, klass, members, classes]);

  const allowedFor = (uid: string, key: string) => rules[uid]?.[key]?.allowed ?? true;

  const setRule = async (uid: string, key: string, allowed: boolean) => {
    const { data: u } = await supabase.auth.getUser();
    const ex = rules[uid]?.[key];
    const { error } = ex
      ? await supabase.from("access_rules").update({ allowed, updated_by: u.user?.id, updated_at: new Date().toISOString() }).eq("id", ex.id)
      : await supabase.from("access_rules").insert({ user_id: uid, role: "student" as any, feature_key: key, allowed, updated_by: u.user?.id });
    if (error) throw error;
  };

  const toggle = async (uid: string, key: string, allowed: boolean) => {
    try { await setRule(uid, key, allowed); await loadRules(); } catch (e: any) { toast.error(e.message); }
  };

  const bulk = async (key: string, allowed: boolean) => {
    if (!visible.length) return;
    setBusy(true);
    try {
      for (const p of visible) await setRule(p.id, key, allowed);
      await loadRules();
      toast.success(`${allowed ? "Liberado" : "Bloqueado"} para ${visible.length} usuário(s)`);
    } catch (e: any) { toast.error(e.message); } finally { setBusy(false); }
  };

  const classesForSchool = classes.filter((c) => school === ALL || c.school_id === school);
  const sel = "w-full h-9 rounded-md border border-input bg-background px-3 text-sm";

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold"><Shield className="w-5 h-5 text-primary" /> Gestão de Usuários</h2>
          <p className="text-xs text-muted-foreground">Nível de acesso, Átomos e o que cada usuário pode usar</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onGrantAll}>+50 ⚛ Todos</Button>
          <Button variant="outline" size="sm" onClick={() => { onRefresh(); loadRules(); }}>Atualizar</Button>
        </div>
      </div>

      <div className="grid gap-3 rounded-xl border bg-card p-4 md:grid-cols-3">
        <label className="text-xs space-y-1"><span className="text-muted-foreground">Escola</span>
          <select className={sel} value={school} onChange={(e) => { setSchool(e.target.value); setKlass(ALL); }}>
            <option value={ALL}>Todas as escolas</option>
            {schools.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </label>
        <label className="text-xs space-y-1"><span className="text-muted-foreground">Turma</span>
          <select className={sel} value={klass} onChange={(e) => setKlass(e.target.value)}>
            <option value={ALL}>Todas as turmas</option>
            {classesForSchool.map((c) => <option key={c.id} value={c.id}>{c.name}{c.grade_year ? ` • ${c.grade_year}` : ""}</option>)}
          </select>
        </label>
        <label className="text-xs space-y-1"><span className="text-muted-foreground">Buscar</span>
          <div className="relative"><Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input className="pl-8 h-9" placeholder="Nome ou e-mail..." value={q} onChange={(e) => setQ(e.target.value)} /></div>
        </label>
      </div>

      <div className="rounded-xl border bg-card p-4 space-y-2">
        <p className="text-sm text-muted-foreground">Aplicar para todos os {visible.length} usuários visíveis:</p>
        <div className="flex flex-wrap gap-2">
          {FEATURES.map((f) => (
            <div key={f.key} className="flex">
              <Button size="sm" variant="outline" disabled={busy} className="h-7 rounded-r-none text-xs text-primary" onClick={() => bulk(f.key, true)}><CheckCircle2 className="w-3 h-3 mr-1" />{f.label}</Button>
              <Button size="sm" variant="outline" disabled={busy} className="h-7 rounded-l-none border-l-0 text-xs text-destructive" onClick={() => bulk(f.key, false)}><XCircle className="w-3 h-3 mr-1" />Bloquear</Button>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {visible.map((p) => {
          const cl = classOf(p.id);
          const isOpen = open === p.id;
          return (
            <div key={p.id} className="rounded-xl border bg-card">
              <button className="flex w-full items-center gap-3 p-4 text-left" onClick={() => setOpen(isOpen ? null : p.id)}>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">{(p.username || p.email || "?")[0]?.toUpperCase()}</div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-semibold">{p.username || "Sem nome"}</div>
                  <div className="truncate text-xs text-muted-foreground">{cl.length ? cl.map((c: any) => `${c.name}${c.grade_year ? ` • ${c.grade_year}` : ""}`).join(", ") : (p.email || "sem turma")}</div>
                </div>
                <span className="hidden sm:inline rounded bg-muted px-2 py-0.5 text-[10px] font-bold uppercase">{p.role || "user"}</span>
                <span className="text-sm font-bold text-accent-foreground">{p.coins ?? 0} ⚛</span>
                <div className="hidden md:flex gap-1">
                  {FEATURES.map((f) => <span key={f.key} title={f.label} className={`h-2 w-2 rounded-full ${allowedFor(p.id, f.key) ? "bg-primary" : "bg-destructive"}`} />)}
                </div>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {isOpen && (
                <div className="space-y-4 border-t p-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase text-muted-foreground">Nível de acesso · desde {new Date(p.created_at).toLocaleDateString("pt-BR")}</p>
                      <div className="flex gap-2">
                        {(["user", "moderator", "admin"] as const).map((r) => (
                          <Button key={r} size="sm" className="flex-1 h-8 text-xs" variant={p.role === r ? "default" : "outline"} onClick={() => onRole(p.id, r)}>
                            {r === "user" ? "Usuário" : r === "moderator" ? "Moderador" : "Admin"}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[10px] uppercase text-muted-foreground">⚛ Átomos: {p.coins ?? 0}</p>
                      <div className="flex gap-1">
                        {[10, 50, 100, 500].map((v) => <Button key={v} size="sm" variant="secondary" className="flex-1 h-8 text-xs" onClick={() => onCoins(p.id, v)}>+{v}</Button>)}
                        <Button size="sm" variant="outline" className="h-8 text-xs text-destructive" onClick={() => onCoins(p.id, -(p.coins ?? 0))}>Zerar</Button>
                      </div>
                    </div>
                  </div>
                  {(["Jogos", "Páginas"] as const).map((g) => (
                    <div key={g} className="space-y-2">
                      <p className="text-xs font-semibold text-muted-foreground">{g}</p>
                      <div className="grid gap-2 md:grid-cols-2">
                        {FEATURES.filter((f) => f.group === g).map((f) => (
                          <div key={f.key} className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2">
                            <span className="text-sm">{f.label}</span>
                            <Switch checked={allowedFor(p.id, f.key)} onCheckedChange={(v) => toggle(p.id, f.key, v)} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-end">
                    <Button size="sm" variant="ghost" className="text-destructive" onClick={() => onDelete(p.id)}><Trash className="w-4 h-4 mr-1" />Excluir usuário</Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {!visible.length && <p className="py-8 text-center text-sm text-muted-foreground">Nenhum usuário encontrado.</p>}
      </div>
    </div>
  );
}

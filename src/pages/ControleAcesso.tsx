import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ShieldCheck, Plus, Pencil, Trash2, Check } from "lucide-react";
import { toast } from "sonner";
import { CONFIG_ROLES, GAME_FEATURES, PAGE_FEATURES } from "@/lib/featureAccess";
import { AdminPanel } from "@/components/game/AdminPanel";

const ALL = "__all__";
const STAFF = ["admin", "teacher", "moderator", "coordinator", "director"];
type Prof = { id: string; name: string; base_role: string; class_id: string | null; builtin: boolean };

export default function ControleAcesso() {
  const navigate = useNavigate();
  const [allowedUser, setAllowedUser] = useState<boolean | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [classes, setClasses] = useState<any[]>([]);
  const [classId, setClassId] = useState<string>(ALL);
  const [sel, setSel] = useState<string>("role:student");
  const [profiles, setProfiles] = useState<Prof[]>([]);
  const [rules, setRules] = useState<Record<string, { id: string; allowed: boolean }>>({});
  const [uid, setUid] = useState<string>("");
  const [newName, setNewName] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [courseFeats, setCourseFeats] = useState<{ key: string; label: string }[]>([]);
  const [members, setMembers] = useState<{ user_id: string; username: string; profile_id: string | null }[]>([]);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return setAllowedUser(false);
      setUid(u.user.id);
      const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", u.user.id);
      setIsAdmin((roles ?? []).some((r: any) => r.role === "admin"));
      setAllowedUser((roles ?? []).some((r: any) => STAFF.includes(r.role)));
      const { data: cls } = await supabase.from("classes").select("id,name,grade_year").order("name");
      setClasses(cls ?? []);
      const { data: cs } = await supabase.from("courses").select("id,title").order("title");
      setCourseFeats(((cs ?? []) as any[]).sort((a, b) => a.title.localeCompare(b.title, "pt-BR", { numeric: true })).map((c) => ({ key: "curso_" + c.id, label: c.title })));
      loadProfiles();
    })();
  }, []);

  const loadProfiles = async () => {
    const { data } = await supabase.from("access_profiles").select("*").order("created_at");
    setProfiles((data ?? []) as Prof[]);
  };

  const builtinLabel = (role: string, def: string) => profiles.find((p) => p.builtin && p.base_role === role)?.name ?? def;
  const custom = profiles.filter((p) => !p.builtin && (classId === ALL ? !p.class_id : p.class_id === classId || !p.class_id));
  const isCustom = sel.startsWith("p:");
  const selId = sel.slice(2);
  const selRole = sel.startsWith("role:") ? sel.slice(5) : profiles.find((p) => p.id === selId)?.base_role ?? "student";

  const load = async () => {
    let q = supabase.from("access_rules").select("id,feature_key,allowed").eq("role", selRole as any);
    q = isCustom ? q.eq("profile_id", selId) : q.is("profile_id", null);
    q = q.is("user_id", null);
    q = classId === ALL ? q.is("class_id", null) : q.eq("class_id", classId);
    const { data } = await q;
    const m: Record<string, any> = {};
    (data ?? []).forEach((r: any) => (m[r.feature_key] = { id: r.id, allowed: r.allowed }));
    setRules(m);
  };
  useEffect(() => { if (allowedUser) load(); }, [allowedUser, sel, classId]);

  const loadMembers = async () => {
    if (classId === ALL) return setMembers([]);
    const { data: ms } = await supabase.from("class_members").select("user_id,profile_id").eq("class_id", classId);
    const ids = (ms ?? []).map((m: any) => m.user_id);
    const { data: ps } = ids.length ? await supabase.from("profiles").select("id,username").in("id", ids) : { data: [] as any[] };
    setMembers((ms ?? []).map((m: any) => ({ ...m, username: (ps ?? []).find((p: any) => p.id === m.user_id)?.username ?? m.user_id.slice(0, 8) })));
  };
  useEffect(() => { if (allowedUser) loadMembers(); }, [allowedUser, classId]);

  const toggle = async (key: string, allowed: boolean) => {
    const ex = rules[key];
    const { error } = ex
      ? await supabase.from("access_rules").update({ allowed, updated_by: uid, updated_at: new Date().toISOString() }).eq("id", ex.id)
      : await supabase.from("access_rules").insert({ feature_key: key, allowed, role: selRole as any, class_id: classId === ALL ? null : classId, updated_by: uid, profile_id: isCustom ? selId : null });
    if (error) return toast.error(error.message);
    toast.success(allowed ? "Liberado" : "Bloqueado");
    load();
  };

  const addProfile = async () => {
    if (!newName.trim()) return toast.error("Digite o nome do perfil");
    const { data, error } = await supabase.from("access_profiles").insert({ name: newName.trim(), base_role: "student", class_id: classId === ALL ? null : classId, created_by: uid }).select().single();
    if (error) return toast.error(error.message);
    setNewName(""); await loadProfiles(); setSel("p:" + data.id); toast.success("Perfil criado");
  };

  const rename = async (key: string) => {
    const name = editName.trim();
    if (!name) return;
    let error;
    if (key.startsWith("p:")) ({ error } = await supabase.from("access_profiles").update({ name }).eq("id", key.slice(2)));
    else {
      const role = key.slice(5);
      const ex = profiles.find((p) => p.builtin && p.base_role === role);
      ({ error } = ex
        ? await supabase.from("access_profiles").update({ name }).eq("id", ex.id)
        : await supabase.from("access_profiles").insert({ name, base_role: role as any, builtin: true, created_by: uid }));
    }
    if (error) return toast.error(error.message);
    setEditing(null); loadProfiles(); toast.success("Nome atualizado");
  };

  const remove = async (id: string) => {
    if (!confirm("Excluir este perfil? As regras dele também serão apagadas.")) return;
    const { error } = await supabase.from("access_profiles").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setSel("role:student"); loadProfiles(); loadMembers();
  };

  const assign = async (userId: string, on: boolean) => {
    const { error } = await supabase.from("class_members").update({ profile_id: on ? selId : null }).eq("class_id", classId).eq("user_id", userId);
    if (error) return toast.error(error.message);
    loadMembers();
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

  const allOptions = [
    ...CONFIG_ROLES.map((r) => ({ key: "role:" + r.value, name: builtinLabel(r.value, r.label), custom: false })),
    ...custom.map((p) => ({ key: "p:" + p.id, name: p.name + (p.class_id ? " (turma)" : ""), custom: true })),
  ];

  const rulesView = (
    <div className="space-y-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold flex items-center gap-2"><ShieldCheck /> Controle de Acesso por Perfil</h1>
        <p className="text-sm text-muted-foreground">Escolha a turma e o perfil. Perfil personalizado vale mais que a turma, e a turma vale mais que a regra geral. Sem regra, tudo fica liberado.</p>
        <div className="mt-4 max-w-md">
          <Label>Turma</Label>
          <Select value={classId} onValueChange={(v) => { setClassId(v); setSel("role:student"); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value={ALL}>Todas as turmas (regra geral)</SelectItem>
              {classes.map((c) => <SelectItem key={c.id} value={c.id}>{c.name} · {c.grade_year}º ano</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <Label className="block mt-4 mb-2">Perfis</Label>
        <div className="space-y-2">
          {allOptions.map((o) => (
            <div key={o.key} className={`flex items-center gap-2 border rounded-lg p-2 ${sel === o.key ? "border-primary bg-primary/10" : ""}`}>
              {editing === o.key ? (
                <>
                  <Input value={editName} onChange={(e) => setEditName(e.target.value)} onKeyDown={(e) => e.key === "Enter" && rename(o.key)} autoFocus />
                  <Button size="icon" variant="ghost" onClick={() => rename(o.key)}><Check size={16} /></Button>
                </>
              ) : (
                <>
                  <button className="flex-1 text-left font-semibold" onClick={() => setSel(o.key)}>{o.name}</button>
                  <Button size="icon" variant="ghost" onClick={() => { setEditing(o.key); setEditName(o.name.replace(" (turma)", "")); }}><Pencil size={14} /></Button>
                  {o.custom && <Button size="icon" variant="ghost" onClick={() => remove(o.key.slice(2))}><Trash2 size={14} /></Button>}
                </>
              )}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-3">
          <Input placeholder={classId === ALL ? "Novo perfil (todas as turmas)" : "Novo perfil para esta turma"} value={newName} onChange={(e) => setNewName(e.target.value)} />
          <Button onClick={addProfile}><Plus size={16} className="mr-1" />Adicionar</Button>
        </div>
      </Card>

      {isCustom && classId !== ALL && (
        <Card className="p-5">
          <h3 className="font-bold mb-3">Alunos da turma neste perfil</h3>
          {members.length === 0 && <p className="text-sm text-muted-foreground">Nenhum aluno nesta turma.</p>}
          <div className="grid md:grid-cols-2 gap-2">
            {members.map((m) => (
              <label key={m.user_id} className="flex items-center gap-2 border rounded-lg p-2 cursor-pointer">
                <Checkbox checked={m.profile_id === selId} onCheckedChange={(v) => assign(m.user_id, !!v)} />
                <span>{m.username}</span>
              </label>
            ))}
          </div>
        </Card>
      )}
      {isCustom && classId === ALL && (
        <p className="text-sm text-muted-foreground">Para colocar alunos neste perfil, escolha uma turma acima.</p>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <Section title="Jogos" items={GAME_FEATURES} />
        <Section title="Páginas do site" items={PAGE_FEATURES} />
      </div>
      <Section title="Cursos (liberar um por um)" items={courseFeats} />
    </div>
  );

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <Button variant="ghost" onClick={() => navigate(-1)}><ArrowLeft size={16} className="mr-1" />Voltar</Button>
        {isAdmin ? (
          <Tabs defaultValue="rules">
            <TabsList>
              <TabsTrigger value="rules">Controle por perfil</TabsTrigger>
              <TabsTrigger value="users">Gerenciar usuários</TabsTrigger>
            </TabsList>
            <TabsContent value="rules">{rulesView}</TabsContent>
            <TabsContent value="users"><AdminPanel userRole="admin" usersOnly /></TabsContent>
          </Tabs>
        ) : rulesView}
      </div>
    </div>
  );
}

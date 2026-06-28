import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Save, Shield, UserCog, Plus } from "lucide-react";

type Role =
  | "student"
  | "parent"
  | "teacher"
  | "coordinator"
  | "director"
  | "admin"
  | "moderator"
  | "user";

const ROLE_LABEL: Record<Role, string> = {
  student: "Aluno",
  parent: "Responsável",
  teacher: "Professor",
  coordinator: "Coordenador",
  director: "Diretor",
  admin: "Administrador",
  moderator: "Moderador",
  user: "Usuário",
};

const ROLE_ORDER: Role[] = [
  "student",
  "parent",
  "teacher",
  "coordinator",
  "director",
  "admin",
];

type PermRow = {
  id?: string;
  role: Role;
  feature_key: string;
  feature_label: string;
  can_view: boolean;
  can_edit: boolean;
  dirty?: boolean;
};

type ProfileRow = {
  id: string;
  username: string | null;
  roles: Role[];
};

export default function Permissoes() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [rows, setRows] = useState<PermRow[]>([]);
  const [saving, setSaving] = useState(false);

  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u?.user) { navigate("/"); return; }
      const { data: roles } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", u.user.id);
      const isAdmin = roles?.some((r: any) => r.role === "admin");
      if (!isAdmin) {
        toast.error("Apenas administradores podem acessar Permissões");
        navigate("/");
        return;
      }
      setAuthorized(true);

      const { data: perms } = await supabase
        .from("role_permissions")
        .select("*")
        .order("feature_label");
      setRows((perms ?? []) as any);

      const { data: profs } = await supabase
        .from("profiles")
        .select("id, username")
        .order("username");
      const { data: allRoles } = await supabase.from("user_roles").select("user_id, role");
      const byUser: Record<string, Role[]> = {};
      (allRoles ?? []).forEach((r: any) => {
        byUser[r.user_id] = [...(byUser[r.user_id] ?? []), r.role as Role];
      });
      setProfiles(
        (profs ?? []).map((p: any) => ({
          id: p.id,
          username: p.username,
          roles: byUser[p.id] ?? [],
        })),
      );

      setLoading(false);
    })();
  }, [navigate]);

  const features = useMemo(() => {
    const map = new Map<string, string>();
    rows.forEach((r) => map.set(r.feature_key, r.feature_label));
    return Array.from(map.entries()).map(([key, label]) => ({ key, label }));
  }, [rows]);

  const rowsByRoleKey = useMemo(() => {
    const m = new Map<string, PermRow>();
    rows.forEach((r) => m.set(`${r.role}::${r.feature_key}`, r));
    return m;
  }, [rows]);

  const togglePerm = (role: Role, key: string, field: "can_view" | "can_edit", value: boolean) => {
    setRows((prev) =>
      prev.map((r) =>
        r.role === role && r.feature_key === key
          ? { ...r, [field]: value, dirty: true, ...(field === "can_edit" && value ? { can_view: true } : {}) }
          : r,
      ),
    );
  };

  const saveAll = async () => {
    setSaving(true);
    try {
      const dirty = rows.filter((r) => r.dirty);
      for (const r of dirty) {
        await supabase
          .from("role_permissions")
          .update({ can_view: r.can_view, can_edit: r.can_edit })
          .eq("id", r.id!);
      }
      setRows((prev) => prev.map((r) => ({ ...r, dirty: false })));
      toast.success(`${dirty.length} alterações salvas`);
    } catch (e: any) {
      toast.error(e.message ?? "Falha ao salvar");
    } finally {
      setSaving(false);
    }
  };

  const addFeature = async () => {
    const key = prompt("Identificador da funcionalidade (ex: relatorios):");
    if (!key) return;
    const label = prompt("Nome amigável:") ?? key;
    const ins = ROLE_ORDER.map((role) => ({
      role,
      feature_key: key,
      feature_label: label,
      can_view: role === "admin",
      can_edit: role === "admin",
    }));
    const { data, error } = await supabase.from("role_permissions").insert(ins).select();
    if (error) return toast.error(error.message);
    setRows((prev) => [...prev, ...((data ?? []) as any)]);
    toast.success("Funcionalidade adicionada");
  };

  const setUserRole = async (userId: string, role: Role, has: boolean) => {
    if (has) {
      await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", role);
    } else {
      await supabase.from("user_roles").insert({ user_id: userId, role });
    }
    setProfiles((prev) =>
      prev.map((p) =>
        p.id === userId
          ? { ...p, roles: has ? p.roles.filter((r) => r !== role) : [...p.roles, role] }
          : p,
      ),
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-white">
        <Loader2 className="animate-spin" />
      </div>
    );
  }
  if (!authorized) return null;

  const filteredProfiles = profiles.filter((p) =>
    (p.username ?? "").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div>
            <h1 className="text-3xl font-black flex items-center gap-2">
              <Shield className="w-7 h-7 text-rose-400" /> Cadastro de Permissões
            </h1>
            <p className="text-white/70">
              Defina o que cada perfil pode <strong>ver</strong> e <strong>editar</strong> no sistema.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" onClick={addFeature}>
              <Plus className="w-4 h-4 mr-1" /> Nova Função
            </Button>
            <Button onClick={saveAll} disabled={saving || !rows.some((r) => r.dirty)}>
              {saving ? <Loader2 className="animate-spin w-4 h-4 mr-1" /> : <Save className="w-4 h-4 mr-1" />}
              Salvar Alterações
            </Button>
          </div>
        </div>

        <Card className="p-4 overflow-x-auto bg-slate-900/60 border-white/10">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b border-white/10">
                <th className="py-2 px-2 font-black text-white">Funcionalidade</th>
                {ROLE_ORDER.map((r) => (
                  <th key={r} className="py-2 px-2 text-center font-black text-white whitespace-nowrap">
                    {ROLE_LABEL[r]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.key} className="border-b border-white/5 hover:bg-white/5">
                  <td className="py-3 px-2 font-bold">{f.label}<div className="text-[10px] text-white/50">{f.key}</div></td>
                  {ROLE_ORDER.map((role) => {
                    const r = rowsByRoleKey.get(`${role}::${f.key}`);
                    if (!r) return <td key={role} />;
                    return (
                      <td key={role} className="py-3 px-2 text-center">
                        <div className="flex items-center justify-center gap-3">
                          <label className="flex items-center gap-1 text-xs">
                            <Checkbox
                              checked={r.can_view}
                              onCheckedChange={(v) => togglePerm(role, f.key, "can_view", !!v)}
                            />
                            Ver
                          </label>
                          <label className="flex items-center gap-1 text-xs">
                            <Checkbox
                              checked={r.can_edit}
                              onCheckedChange={(v) => togglePerm(role, f.key, "can_edit", !!v)}
                            />
                            Editar
                          </label>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card className="p-4 bg-slate-900/60 border-white/10">
          <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
            <h2 className="text-xl font-black flex items-center gap-2">
              <UserCog className="w-5 h-5 text-cyan-300" /> Atribuir perfis aos usuários
            </h2>
            <Input
              placeholder="Buscar usuário"
              className="max-w-xs bg-slate-800 border-white/10 text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-white/10">
                  <th className="py-2 px-2 font-black">Usuário</th>
                  <th className="py-2 px-2 font-black">Perfis ativos</th>
                  <th className="py-2 px-2 font-black w-64">Adicionar perfil</th>
                </tr>
              </thead>
              <tbody>
                {filteredProfiles.slice(0, 100).map((p) => (
                  <tr key={p.id} className="border-b border-white/5">
                    <td className="py-2 px-2 font-semibold">{p.username ?? p.id.slice(0, 8)}</td>
                    <td className="py-2 px-2">
                      <div className="flex flex-wrap gap-1">
                        {p.roles.length === 0 && <span className="text-white/40 text-xs">nenhum</span>}
                        {p.roles.map((r) => (
                          <button
                            key={r}
                            onClick={() => setUserRole(p.id, r, true)}
                            className="px-2 py-0.5 rounded-full text-xs bg-rose-500/20 border border-rose-400/40 hover:bg-rose-500/40"
                            title="Clique para remover"
                          >
                            {ROLE_LABEL[r] ?? r} ×
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="py-2 px-2">
                      <Select
                        onValueChange={(v) => setUserRole(p.id, v as Role, false)}
                      >
                        <SelectTrigger className="bg-slate-800 border-white/10 text-white">
                          <SelectValue placeholder="Adicionar..." />
                        </SelectTrigger>
                        <SelectContent>
                          {ROLE_ORDER.filter((r) => !p.roles.includes(r)).map((r) => (
                            <SelectItem key={r} value={r}>{ROLE_LABEL[r]}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-white/50 mt-2">
            Mostrando até 100 usuários. Use a busca para filtrar.
          </p>
        </Card>
      </div>
    </div>
  );
}

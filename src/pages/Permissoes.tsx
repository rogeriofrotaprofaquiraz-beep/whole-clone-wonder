import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Save, Shield, UserCog, Plus, Eye, Pencil, Users, Filter, QrCode, Copy, Link as LinkIcon } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

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

const ROLE_COLOR: Record<Role, string> = {
  student: "bg-sky-500/20 border-sky-400/40 text-sky-800",
  parent: "bg-amber-500/20 border-amber-400/40 text-amber-800",
  teacher: "bg-emerald-500/20 border-emerald-400/40 text-emerald-800",
  coordinator: "bg-indigo-500/20 border-indigo-400/40 text-indigo-800",
  director: "bg-purple-500/20 border-purple-400/40 text-purple-800",
  admin: "bg-rose-500/20 border-rose-400/40 text-rose-800",
  moderator: "bg-orange-500/20 border-orange-400/40 text-orange-800",
  user: "bg-slate-500/20 border-slate-400/40 text-slate-800",
};

const ROLE_ORDER: Role[] = [
  "student",
  "parent",
  "user",
  "teacher",
  "coordinator",
  "director",
  "moderator",
  "admin",
];

type PermField = "can_view" | "can_edit" | "can_create" | "can_delete" | "is_admin";
const PERM_FIELDS: { key: PermField; label: string; short: string }[] = [
  { key: "can_view", label: "Acessar", short: "Acessar" },
  { key: "can_edit", label: "Editar / Modificar", short: "Editar" },
  { key: "can_create", label: "Adicionar", short: "Adicionar" },
  { key: "can_delete", label: "Excluir", short: "Excluir" },
  { key: "is_admin", label: "Admin geral", short: "Admin" },
];

const ROLE_DESC: Record<Role, string> = {
  student: "Acessa jogos, cursos e o próprio progresso",
  parent: "Acompanha o desempenho dos filhos vinculados",
  user: "Usuário comum, acesso básico ao site",
  teacher: "Gerencia turmas, questões, aulas e campeonatos",
  coordinator: "Coordena professores e turmas da escola",
  director: "Administrador de uma escola específica",
  moderator: "Ajuda a moderar conteúdo e usuários",
  admin: "Acesso total ao sistema, pode gerenciar várias escolas",
};

type PermRow = {
  id?: string;
  role: Role;
  feature_key: string;
  feature_label: string;
  can_view: boolean;
  can_edit: boolean;
  can_create: boolean;
  can_delete: boolean;
  is_admin: boolean;
  dirty?: boolean;
};

type ProfileRow = {
  id: string;
  username: string | null;
  access_code: string | null;
  roles: Role[];
};

export default function Permissoes({ embedded = false }: { embedded?: boolean } = {}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [rows, setRows] = useState<PermRow[]>([]);
  const [saving, setSaving] = useState(false);

  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "all" | "none">("all");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

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
      await reloadAll();
      setLoading(false);
    })();
  }, [navigate]);

  const reloadAll = async () => {
    const [{ data: perms }, { data: profs }, { data: allRoles }] = await Promise.all([
      supabase.from("role_permissions").select("*").order("feature_label"),
      supabase.from("profiles").select("id, username, access_code").order("username"),
      supabase.from("user_roles").select("user_id, role"),
    ]);
    setRows((perms ?? []) as any);
    const byUser: Record<string, Role[]> = {};
    (allRoles ?? []).forEach((r: any) => {
      byUser[r.user_id] = [...(byUser[r.user_id] ?? []), r.role as Role];
    });
    setProfiles(
      (profs ?? []).map((p: any) => ({
        id: p.id,
        username: p.username,
        access_code: p.access_code,
        roles: byUser[p.id] ?? [],
      })),
    );
  };

  const features = useMemo(() => {
    const map = new Map<string, string>();
    rows.forEach((r) => map.set(r.feature_key, r.feature_label));
    return Array.from(map.entries())
      .map(([key, label]) => ({ key, label }))
      .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
  }, [rows]);

  const rowsByRoleKey = useMemo(() => {
    const m = new Map<string, PermRow>();
    rows.forEach((r) => m.set(`${r.role}::${r.feature_key}`, r));
    return m;
  }, [rows]);

  const roleCounts = useMemo(() => {
    const c: Record<string, number> = { all: profiles.length, none: 0 };
    ROLE_ORDER.forEach((r) => (c[r] = 0));
    profiles.forEach((p) => {
      if (p.roles.length === 0) c.none++;
      p.roles.forEach((r) => (c[r] = (c[r] ?? 0) + 1));
    });
    return c;
  }, [profiles]);

  const togglePerm = (role: Role, key: string, field: PermField, value: boolean) => {
    setRows((prev) =>
      prev.map((r) => {
        if (r.role !== role || r.feature_key !== key) return r;
        const n: PermRow = { ...r, [field]: value, dirty: true };
        if (field === "is_admin" && value) Object.assign(n, { can_view: true, can_edit: true, can_create: true, can_delete: true });
        if (field !== "can_view" && value) n.can_view = true;
        if (field === "can_view" && !value) Object.assign(n, { can_edit: false, can_create: false, can_delete: false, is_admin: false });
        if (field !== "is_admin" && !value) n.is_admin = false;
        return n;
      }),
    );
  };

  const setRoleAll = (role: Role, field: PermField, value: boolean) => {
    features.forEach((f) => togglePerm(role, f.key, field, value));
  };

  const [editingRole, setEditingRole] = useState<Role | null>(null);

  const saveAll = async () => {
    setSaving(true);
    try {
      const dirty = rows.filter((r) => r.dirty);
      for (const r of dirty) {
        await supabase
          .from("role_permissions")
          .update({ can_view: r.can_view, can_edit: r.can_edit, can_create: r.can_create, can_delete: r.can_delete, is_admin: r.is_admin })
          .eq("id", r.id!);
      }
      setRows((prev) => prev.map((r) => ({ ...r, dirty: false })));
      toast.success(`${dirty.length} alteração(ões) salva(s)`);
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
      can_create: role === "admin",
      can_delete: role === "admin",
      is_admin: role === "admin",
    }));
    const { data, error } = await supabase.from("role_permissions").insert(ins).select();
    if (error) return toast.error(error.message);
    setRows((prev) => [...prev, ...((data ?? []) as any)]);
    toast.success("Funcionalidade adicionada");
  };

  const setUserRole = async (userId: string, role: Role, has: boolean) => {
    if (has) {
      const { error } = await supabase.from("user_roles").delete().eq("user_id", userId).eq("role", role);
      if (error) return toast.error(error.message);
    } else {
      const { error } = await supabase.from("user_roles").insert({ user_id: userId, role });
      if (error) return toast.error(error.message);
    }
    setProfiles((prev) =>
      prev.map((p) =>
        p.id === userId
          ? { ...p, roles: has ? p.roles.filter((r) => r !== role) : [...p.roles, role] }
          : p,
      ),
    );
    toast.success(has ? "Perfil removido" : `Perfil ${ROLE_LABEL[role]} atribuído`);
  };

  const effectivePermsFor = (userRoles: Role[]) => {
    const eff: Record<string, { label: string; view: boolean; edit: boolean }> = {};
    features.forEach((f) => (eff[f.key] = { label: f.label, view: false, edit: false }));
    userRoles.forEach((role) => {
      features.forEach((f) => {
        const r = rowsByRoleKey.get(`${role}::${f.key}`);
        if (!r) return;
        if (r.can_view) eff[f.key].view = true;
        if (r.can_edit) eff[f.key].edit = true;
      });
    });
    return eff;
  };

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center text-slate-900">
        <Loader2 className="animate-spin" />
      </div>
    );
  }
  if (!authorized) return null;

  const filteredProfiles = profiles.filter((p) => {
    const matchesSearch =
      (p.username ?? "").toLowerCase().includes(search.toLowerCase()) ||
      (p.access_code ?? "").toLowerCase().includes(search.toLowerCase());
    const matchesRole =
      roleFilter === "all"
        ? true
        : roleFilter === "none"
        ? p.roles.length === 0
        : p.roles.includes(roleFilter);
    return matchesSearch && matchesRole;
  });

  const selected = profiles.find((p) => p.id === selectedUser) ?? null;
  const selectedEff = selected ? effectivePermsFor(selected.roles) : null;

  return (
    <div className={embedded ? "text-slate-900 rounded-2xl bg-slate-50 border border-slate-200 p-4 md:p-6" : "min-h-screen p-4 md:p-8 text-slate-900 bg-slate-50"}>
      <div className={embedded ? "space-y-6" : "max-w-7xl mx-auto space-y-6"}>
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            {!embedded && (
              <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900">
                <ArrowLeft size={18} /> Voltar
              </Link>
            )}
            <div>
              <h1 className={embedded ? "text-2xl font-black flex items-center gap-2" : "text-3xl font-black flex items-center gap-2"}>
                <Shield className="w-7 h-7 text-rose-600" /> Gestão de Usuários e Permissões
              </h1>
              <p className="text-slate-600 text-sm">
                Cada perfil abaixo consome direto das regras da matriz — mudanças aqui refletem
                imediatamente no acesso dos usuários.
              </p>
            </div>
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

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="bg-white border border-slate-200">
            <TabsTrigger value="users" className="text-slate-600 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-slate-900">
              <Users className="w-4 h-4 mr-1" /> Usuários ({profiles.length})
            </TabsTrigger>
            <TabsTrigger value="roles" className="text-slate-600 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-slate-900">
              <UserCog className="w-4 h-4 mr-1" /> Perfis
            </TabsTrigger>
            <TabsTrigger value="matrix" className="text-slate-600 data-[state=active]:bg-white data-[state=active]:shadow data-[state=active]:text-slate-900">
              <Shield className="w-4 h-4 mr-1" /> Matriz de Permissões
            </TabsTrigger>
          </TabsList>

          {/* ===== USUÁRIOS ===== */}
          <TabsContent value="users" className="space-y-4 mt-4">
            <Card className="p-4 bg-white border-slate-200">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Filter className="w-4 h-4 text-cyan-600" />
                <button
                  onClick={() => setRoleFilter("all")}
                  className={`px-3 py-1 rounded-full text-xs border ${
                    roleFilter === "all"
                      ? "bg-cyan-200 border-cyan-400"
                      : "bg-slate-100 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  Todos ({roleCounts.all})
                </button>
                {ROLE_ORDER.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRoleFilter(r)}
                    className={`px-3 py-1 rounded-full text-xs border ${
                      roleFilter === r
                        ? "bg-cyan-200 border-cyan-400"
                        : "bg-slate-100 border-slate-200 hover:bg-slate-200"
                    }`}
                  >
                    {ROLE_LABEL[r]} ({roleCounts[r] ?? 0})
                  </button>
                ))}
                <button
                  onClick={() => setRoleFilter("none")}
                  className={`px-3 py-1 rounded-full text-xs border ${
                    roleFilter === "none"
                      ? "bg-cyan-200 border-cyan-400"
                      : "bg-slate-100 border-slate-200 hover:bg-slate-200"
                  }`}
                >
                  Sem perfil ({roleCounts.none})
                </button>
                <div className="flex-1" />
                <Input
                  placeholder="Buscar por nome ou código"
                  className="max-w-xs bg-white border-slate-200 text-slate-900"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <div className="grid md:grid-cols-[1fr,380px] gap-4">
                <div className="overflow-x-auto max-h-[600px] overflow-y-auto rounded border border-slate-200">
                  <table className="w-full text-sm">
                    <thead className="sticky top-0 bg-slate-100">
                      <tr className="text-left border-b border-slate-200">
                        <th className="py-2 px-2 font-black">Usuário</th>
                        <th className="py-2 px-2 font-black">Perfis</th>
                        <th className="py-2 px-2 font-black w-44">Adicionar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProfiles.slice(0, 200).map((p) => (
                        <tr
                          key={p.id}
                          onClick={() => setSelectedUser(p.id)}
                          className={`border-b border-slate-100 cursor-pointer ${
                            selectedUser === p.id ? "bg-cyan-50" : "hover:bg-slate-50"
                          }`}
                        >
                          <td className="py-2 px-2">
                            <div className="font-semibold">{p.username ?? p.id.slice(0, 8)}</div>
                            {p.access_code && (
                              <div className="text-[10px] text-slate-500 font-mono">{p.access_code}</div>
                            )}
                          </td>
                          <td className="py-2 px-2">
                            <div className="flex flex-wrap gap-1">
                              {p.roles.length === 0 && <span className="text-slate-400 text-xs">nenhum</span>}
                              {p.roles.map((r) => (
                                <button
                                  key={r}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setUserRole(p.id, r, true);
                                  }}
                                  className={`px-2 py-0.5 rounded-full text-xs border ${ROLE_COLOR[r]} hover:opacity-80`}
                                  title="Clique para remover"
                                >
                                  {ROLE_LABEL[r]} ×
                                </button>
                              ))}
                            </div>
                          </td>
                          <td className="py-2 px-2" onClick={(e) => e.stopPropagation()}>
                            <Select onValueChange={(v) => setUserRole(p.id, v as Role, false)}>
                              <SelectTrigger className="bg-white border-slate-200 text-slate-900 h-8 text-xs">
                                <SelectValue placeholder="+ perfil" />
                              </SelectTrigger>
                              <SelectContent>
                                {ROLE_ORDER.filter((r) => !p.roles.includes(r)).map((r) => (
                                  <SelectItem key={r} value={r}>
                                    {ROLE_LABEL[r]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {filteredProfiles.length === 0 && (
                    <p className="text-center text-slate-500 text-sm py-6">Nenhum usuário encontrado.</p>
                  )}
                </div>

                {/* Painel lateral com permissões efetivas */}
                <div className="rounded border border-slate-200 bg-white p-3">
                  {!selected ? (
                    <div className="text-center text-slate-500 text-sm py-10">
                      <UserCog className="w-10 h-10 mx-auto mb-2 opacity-40" />
                      Selecione um usuário para ver o acesso efetivo derivado da matriz.
                    </div>
                  ) : (
                    <>
                      <div className="mb-3">
                        <div className="text-xs text-slate-500">Usuário selecionado</div>
                        <div className="text-lg font-black">
                          {selected.username ?? selected.id.slice(0, 8)}
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {selected.roles.length === 0 ? (
                            <Badge variant="outline" className="text-slate-500">
                              sem perfil — acesso mínimo
                            </Badge>
                          ) : (
                            selected.roles.map((r) => (
                              <Badge key={r} className={ROLE_COLOR[r]}>
                                {ROLE_LABEL[r]}
                              </Badge>
                            ))
                          )}
                        </div>
                      </div>

                      {/* Link + QR de acesso individual */}
                      <div className="mb-4 rounded-lg border border-cyan-400/30 bg-cyan-50 p-3">
                        <div className="text-xs font-black text-cyan-800 uppercase mb-2 flex items-center gap-1">
                          <QrCode className="w-3.5 h-3.5" /> Acesso do usuário
                        </div>
                        {selected.access_code ? (
                          (() => {
                            const origin = typeof window !== "undefined" ? window.location.origin : "";
                            const url = `${origin}/?ac=${encodeURIComponent(selected.access_code)}`;
                            return (
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 bg-white rounded border border-slate-200 px-2 py-1">
                                  <LinkIcon className="w-3 h-3 text-slate-500 shrink-0" />
                                  <span className="text-[10px] font-mono text-slate-600 truncate flex-1">{url}</span>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="h-6 px-2 text-slate-600 hover:text-slate-900"
                                    onClick={() => {
                                      navigator.clipboard.writeText(url);
                                      toast.success("Link copiado");
                                    }}
                                  >
                                    <Copy className="w-3 h-3" />
                                  </Button>
                                </div>
                                <div className="flex gap-3 items-start">
                                  <div className="bg-white p-2 rounded">
                                    <QRCodeSVG value={url} size={110} level="M" />
                                  </div>
                                  <div className="text-[11px] text-slate-500 leading-relaxed flex-1">
                                    Código: <span className="font-mono text-slate-900">{selected.access_code}</span>
                                    <br />
                                    Ao entrar por este link, o usuário acessa o ambiente com as permissões do seu perfil.
                                    <div className="flex gap-1 mt-2">
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-6 px-2 text-[10px]"
                                        onClick={() => window.open(url, "_blank")}
                                      >
                                        Abrir
                                      </Button>
                                      <Button
                                        size="sm"
                                        variant="outline"
                                        className="h-6 px-2 text-[10px]"
                                        onClick={async () => {
                                          const { data, error } = await supabase.rpc("generate_access_code", {
                                            _user_id: selected.id,
                                          });
                                          if (error) return toast.error(error.message);
                                          toast.success("Novo código gerado");
                                          await reloadAll();
                                          if (data) setSelectedUser(selected.id);
                                        }}
                                      >
                                        Regerar
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })()
                        ) : (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs text-slate-500">Sem código de acesso ainda.</span>
                            <Button
                              size="sm"
                              className="h-7 text-xs"
                              onClick={async () => {
                                const { error } = await supabase.rpc("generate_access_code", {
                                  _user_id: selected.id,
                                });
                                if (error) return toast.error(error.message);
                                toast.success("Código gerado");
                                await reloadAll();
                                setSelectedUser(selected.id);
                              }}
                            >
                              Gerar código
                            </Button>
                          </div>
                        )}
                      </div>

                      <div className="text-xs font-black text-slate-600 uppercase mb-2">
                        Acesso efetivo por funcionalidade
                      </div>
                      <div className="space-y-1 max-h-[480px] overflow-y-auto pr-1">
                        {selectedEff &&
                          Object.entries(selectedEff).map(([key, v]) => (
                            <div
                              key={key}
                              className="flex items-center justify-between bg-slate-100 rounded px-2 py-1.5"
                            >
                              <div>
                                <div className="text-sm font-semibold">{v.label}</div>
                                <div className="text-[10px] text-slate-400 font-mono">{key}</div>
                              </div>
                              <div className="flex gap-2 text-xs">
                                <span
                                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded ${
                                    v.view ? "bg-emerald-200 text-emerald-800" : "bg-slate-100 text-slate-400"
                                  }`}
                                  title="Pode visualizar"
                                >
                                  <Eye className="w-3 h-3" />
                                  {v.view ? "sim" : "não"}
                                </span>
                                <span
                                  className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded ${
                                    v.edit ? "bg-amber-200 text-amber-800" : "bg-slate-100 text-slate-400"
                                  }`}
                                  title="Pode editar"
                                >
                                  <Pencil className="w-3 h-3" />
                                  {v.edit ? "sim" : "não"}
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Mostrando até 200 usuários filtrados. Clique em uma linha para ver o acesso efetivo.
              </p>
            </Card>
          </TabsContent>

          {/* ===== PERFIS ===== */}
          <TabsContent value="roles" className="mt-4 space-y-4">
            {ROLE_ORDER.map((role) => {
              const rs = features.map((f) => rowsByRoleKey.get(`${role}::${f.key}`)).filter(Boolean) as PermRow[];
              const active = rs.filter((r) => r.can_view).length;
              const editing = editingRole === role;
              return (
                <Card key={role} className="p-5 bg-white border-slate-200 border-t-4 border-t-cyan-400">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl grid place-items-center border ${ROLE_COLOR[role]}`}>
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xl font-black">{ROLE_LABEL[role]}</div>
                        <div className="text-sm text-slate-500">{ROLE_DESC[role]}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-slate-200 rounded px-2 py-1">{role}</code>
                      <Button size="sm" variant={editing ? "default" : "outline"} onClick={() => setEditingRole(editing ? null : role)}>
                        <Pencil className="w-4 h-4 mr-1" /> {editing ? "Fechar" : "Editar"}
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 mb-2">
                    <div className="text-sm font-bold text-slate-600">Permissões ativas:</div>
                    <Badge variant="outline" className="text-slate-900">{active} de {rs.length}</Badge>
                  </div>
                  {editing && (
                    <div className="flex flex-wrap gap-2 mb-3 text-xs">
                      {PERM_FIELDS.map((pf) => (
                        <div key={pf.key} className="flex items-center gap-1 bg-slate-100 rounded px-2 py-1">
                          <span>{pf.label}:</span>
                          <button className="underline text-emerald-700" onClick={() => setRoleAll(role, pf.key, true)}>todos</button>
                          <button className="underline text-rose-600" onClick={() => setRoleAll(role, pf.key, false)}>nenhum</button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {rs.map((r) => (
                      <div key={r.feature_key} className={`rounded-lg border px-3 py-2 ${r.can_view ? "bg-emerald-50 border-emerald-400/30" : "bg-slate-100 border-slate-200 text-slate-400"}`}>
                        <div className="flex items-center gap-2 text-sm font-semibold">
                          <span className={`w-2 h-2 rounded-full ${r.can_view ? "bg-emerald-400" : "bg-slate-300"}`} />
                          {r.feature_label}
                        </div>
                        {editing ? (
                          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                            {PERM_FIELDS.map((pf) => (
                              <label key={pf.key} className="flex items-center gap-1 text-[11px] text-slate-900">
                                <Checkbox checked={!!r[pf.key]} onCheckedChange={(v) => togglePerm(role, r.feature_key, pf.key, !!v)} />
                                {pf.short}
                              </label>
                            ))}
                          </div>
                        ) : (
                          r.can_view && (
                            <div className="text-[10px] text-slate-500 mt-1">
                              {PERM_FIELDS.filter((pf) => r[pf.key]).map((pf) => pf.short).join(" · ")}
                            </div>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
            <p className="text-xs text-slate-500">Depois de editar, clique em <strong>Salvar Alterações</strong> no topo.</p>
          </TabsContent>

          {/* ===== MATRIZ ===== */}
          <TabsContent value="matrix" className="mt-4">
            <Card className="p-4 overflow-x-auto bg-white border-slate-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-slate-200">
                    <th className="py-2 px-2 font-black text-slate-900">Funcionalidade</th>
                    {ROLE_ORDER.map((r) => (
                      <th key={r} className="py-2 px-2 text-center font-black text-slate-900 whitespace-nowrap">
                        {ROLE_LABEL[r]}
                        <div className="text-[10px] font-normal text-slate-500">
                          {roleCounts[r] ?? 0} usuários
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((f) => (
                    <tr key={f.key} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="py-3 px-2 font-bold">
                        {f.label}
                        <div className="text-[10px] text-slate-500">{f.key}</div>
                      </td>
                      {ROLE_ORDER.map((role) => {
                        const r = rowsByRoleKey.get(`${role}::${f.key}`);
                        if (!r) return <td key={role} />;
                        return (
                          <td key={role} className="py-3 px-2 text-center">
                            <div className="flex flex-col items-start gap-1 mx-auto w-fit">
                              {PERM_FIELDS.map((pf) => (
                                <label key={pf.key} className="flex items-center gap-1 text-[11px]">
                                  <Checkbox
                                    checked={!!r[pf.key]}
                                    onCheckedChange={(v) => togglePerm(role, f.key, pf.key, !!v)}
                                  />
                                  {pf.short}
                                </label>
                              ))}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-slate-500 mt-2">
                Marcar Editar, Adicionar ou Excluir ativa <strong>Acessar</strong>; <strong>Admin geral</strong> ativa tudo. Não esqueça
                de <strong>Salvar Alterações</strong>.
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

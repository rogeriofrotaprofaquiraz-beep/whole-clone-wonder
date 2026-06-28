import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Plus, School, Users, Trash2, Copy, UserPlus, QrCode, Check, X, Pencil } from "lucide-react";
import { toast } from "sonner";
import { QRCodeSVG } from "qrcode.react";

type SchoolRow = { id: string; name: string; city: string | null };
type ClassRow = { id: string; school_id: string; name: string; grade_year: number; invite_code: string };
type MemberRow = { user_id: string; role: string; status: string; username?: string };
type TeamRow = { id: string; class_id: string; name: string; color: string };

export default function Escola() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [role, setRole] = useState<string | null>(null);
  const [schools, setSchools] = useState<SchoolRow[]>([]);
  const [classes, setClasses] = useState<ClassRow[]>([]);
  const [activeClass, setActiveClass] = useState<ClassRow | null>(null);
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [teams, setTeams] = useState<TeamRow[]>([]);
  const [teamMembers, setTeamMembers] = useState<Record<string, string[]>>({});

  const [newSchool, setNewSchool] = useState({ name: "", city: "" });
  const [newClass, setNewClass] = useState({ school_id: "", name: "", grade_year: 6 });
  const [emailsRaw, setEmailsRaw] = useState("");
  const [newTeam, setNewTeam] = useState({ name: "", color: "#3b82f6" });
  const [joinCode, setJoinCode] = useState("");
  const [qrClass, setQrClass] = useState<ClassRow | null>(null);
  const [editStudent, setEditStudent] = useState<null | {
    user_id: string; username: string; level: number; xp: number; coins: number; class_role: string;
    email: string; guardian_name: string; guardian_email: string; guardian_phone: string; guardian_relationship: string;
    access_code: string;
  }>(null);


  const buildJoinUrl = (code: string) => `${window.location.origin}/escola?join=${code}`;

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) { navigate("/"); return; }
      const r = await ensureUserAccess(session.user);
      setRole(r);
      await refresh();
      const j = params.get("join");
      if (j) {
        const { error } = await supabase.rpc("join_class_by_code", { _code: j });
        if (error) toast.error(error.message);
        else toast.success("Solicitação enviada! Aguarde aprovação do professor.");
        navigate("/escola", { replace: true });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refresh = async () => {
    const [s, c] = await Promise.all([
      supabase.from("schools").select("*").order("created_at", { ascending: false }),
      supabase.from("classes").select("*").order("grade_year"),
    ]);
    setSchools(s.data ?? []);
    setClasses(c.data ?? []);
  };

  const loadClassDetails = async (cls: ClassRow) => {
    setActiveClass(cls);
    const [m, t] = await Promise.all([
      supabase.from("class_members").select("user_id, role, status").eq("class_id", cls.id),
      supabase.from("class_teams").select("*").eq("class_id", cls.id),
    ]);
    const userIds = (m.data ?? []).map((x: any) => x.user_id);
    let profileMap: Record<string, string> = {};
    if (userIds.length) {
      const { data: profs } = await supabase.from("profiles").select("id, username").in("id", userIds);
      profs?.forEach((p: any) => (profileMap[p.id] = p.username));
    }
    setMembers((m.data ?? []).map((x: any) => ({ ...x, username: profileMap[x.user_id] ?? x.user_id.slice(0, 8) })));
    setTeams(t.data ?? []);
    if ((t.data ?? []).length) {
      const teamIds = t.data!.map((x: any) => x.id);
      const { data: tm } = await supabase.from("class_team_members").select("*").in("team_id", teamIds);
      const map: Record<string, string[]> = {};
      tm?.forEach((row: any) => { (map[row.team_id] ||= []).push(row.user_id); });
      setTeamMembers(map);
    } else setTeamMembers({});
  };

  const createSchool = async () => {
    if (!newSchool.name.trim()) return toast.error("Informe o nome da escola");
    const { data: { session } } = await supabase.auth.getSession();
    const { error } = await supabase.from("schools").insert({ name: newSchool.name.trim(), city: newSchool.city.trim() || null, owner_id: session!.user.id });
    if (error) return toast.error(error.message);
    toast.success("Escola criada");
    setNewSchool({ name: "", city: "" });
    refresh();
  };

  const createClass = async () => {
    if (!newClass.school_id || !newClass.name.trim()) return toast.error("Selecione escola e nome");
    const { error } = await supabase.from("classes").insert({ school_id: newClass.school_id, name: newClass.name.trim(), grade_year: newClass.grade_year });
    if (error) return toast.error(error.message);
    toast.success("Turma criada");
    setNewClass({ school_id: "", name: "", grade_year: 6 });
    refresh();
  };

  const addStudentsByEmail = async () => {
    if (!activeClass) return;
    const emails = emailsRaw.split(/[\s,;]+/).map(e => e.trim()).filter(Boolean);
    if (!emails.length) return;
    const { data, error } = await supabase.rpc("lookup_user_ids_by_emails", { _emails: emails });
    if (error) return toast.error(error.message);
    const found = (data ?? []) as { email: string; user_id: string }[];
    if (!found.length) return toast.error("Nenhum e-mail encontrado");
    const rows = found.map(f => ({ class_id: activeClass.id, user_id: f.user_id, role: "student" }));
    const { error: insErr } = await supabase.from("class_members").upsert(rows, { onConflict: "class_id,user_id" });
    if (insErr) return toast.error(insErr.message);
    toast.success(`${found.length} aluno(s) adicionados`);
    setEmailsRaw("");
    loadClassDetails(activeClass);
  };

  const removeMember = async (uid: string) => {
    if (!activeClass) return;
    await supabase.from("class_members").delete().eq("class_id", activeClass.id).eq("user_id", uid);
    loadClassDetails(activeClass);
  };

  const openEdit = async (uid: string) => {
    if (!activeClass) return;
    const [{ data: prof }, { data: wallet }, { data: cm }] = await Promise.all([
      supabase.from("profiles").select("username, level, xp, email, guardian_name, guardian_email, guardian_phone, guardian_relationship, access_code").eq("id", uid).maybeSingle(),
      supabase.from("player_wallet").select("coins").eq("user_id", uid).maybeSingle(),
      supabase.from("class_members").select("role").eq("class_id", activeClass.id).eq("user_id", uid).maybeSingle(),
    ]);
    let code = (prof as any)?.access_code ?? "";
    if (!code) {
      const { data: gen } = await supabase.rpc("generate_access_code", { _user_id: uid });
      code = (gen as any) ?? "";
    }
    setEditStudent({
      user_id: uid,
      username: prof?.username ?? "",
      level: prof?.level ?? 1,
      xp: prof?.xp ?? 0,
      coins: wallet?.coins ?? 0,
      class_role: cm?.role ?? "student",
      email: prof?.email ?? "",
      guardian_name: prof?.guardian_name ?? "",
      guardian_email: prof?.guardian_email ?? "",
      guardian_phone: prof?.guardian_phone ?? "",
      guardian_relationship: prof?.guardian_relationship ?? "",
      access_code: code,
    });
  };

  const regenAccessCode = async () => {
    if (!editStudent) return;
    const { data, error } = await supabase.rpc("generate_access_code", { _user_id: editStudent.user_id });
    if (error) return toast.error(error.message);
    setEditStudent({ ...editStudent, access_code: (data as any) ?? "" });
    toast.success("Novo código gerado");
  };

  const sendAccessCode = (channel: "email" | "sms") => {
    if (!editStudent) return;
    const code = editStudent.access_code;
    const url = `${window.location.origin}/historico?code=${code}`;
    const msg = `Olá! Seu Código de Acesso ao histórico no Elemental Heroes é ${code}. Acesse: ${url}`;
    if (channel === "email") {
      const to = editStudent.email || editStudent.guardian_email;
      if (!to) return toast.error("Cadastre um e-mail do aluno ou do responsável");
      window.location.href = `mailto:${to}?subject=${encodeURIComponent("Código de Acesso - Elemental Heroes")}&body=${encodeURIComponent(msg)}`;
    } else {
      const tel = (editStudent.guardian_phone || "").replace(/\D/g, "");
      if (!tel) return toast.error("Cadastre um telefone do responsável");
      window.location.href = `sms:${tel}?body=${encodeURIComponent(msg)}`;
    }
  };


  const saveEdit = async () => {
    if (!editStudent || !activeClass) return;
    const e = editStudent;
    const { error: pe } = await supabase.from("profiles")
      .update({
        username: e.username, level: e.level, xp: e.xp,
        email: e.email || null,
        guardian_name: e.guardian_name || null,
        guardian_email: e.guardian_email || null,
        guardian_phone: e.guardian_phone || null,
        guardian_relationship: e.guardian_relationship || null,
      }).eq("id", e.user_id);
    if (pe) return toast.error(pe.message);
    const cur = await supabase.from("player_wallet").select("coins").eq("user_id", e.user_id).maybeSingle();
    const delta = e.coins - (cur.data?.coins ?? 0);
    if (delta !== 0) {
      const { error: ge } = await supabase.rpc("grant_coins_to_user", {
        _user_id: e.user_id, _amount: delta, _reason: "Ajuste do administrador",
      });
      if (ge) return toast.error(ge.message);
    }
    await supabase.from("class_members").update({ role: e.class_role })
      .eq("class_id", activeClass.id).eq("user_id", e.user_id);
    toast.success("Aluno atualizado");
    setEditStudent(null);
    loadClassDetails(activeClass);
  };



  const createTeam = async () => {
    if (!activeClass || !newTeam.name.trim()) return;
    const { error } = await supabase.from("class_teams").insert({ class_id: activeClass.id, name: newTeam.name.trim(), color: newTeam.color });
    if (error) return toast.error(error.message);
    setNewTeam({ name: "", color: "#3b82f6" });
    loadClassDetails(activeClass);
  };

  const deleteTeam = async (id: string) => {
    await supabase.from("class_teams").delete().eq("id", id);
    if (activeClass) loadClassDetails(activeClass);
  };

  const toggleTeamMember = async (teamId: string, uid: string) => {
    const cur = teamMembers[teamId] ?? [];
    if (cur.includes(uid)) {
      await supabase.from("class_team_members").delete().eq("team_id", teamId).eq("user_id", uid);
    } else {
      await supabase.from("class_team_members").insert({ team_id: teamId, user_id: uid });
    }
    if (activeClass) loadClassDetails(activeClass);
  };

  const joinByCode = async () => {
    if (!joinCode.trim()) return;
    const { error } = await supabase.rpc("join_class_by_code", { _code: joinCode.trim() });
    if (error) return toast.error(error.message);
    toast.success("Solicitação enviada! Aguarde aprovação do professor.");
    setJoinCode("");
    refresh();
  };

  const approveMember = async (uid: string, approve: boolean) => {
    if (!activeClass) return;
    const { error } = await supabase.rpc("approve_class_member", { _class_id: activeClass.id, _user_id: uid, _approve: approve });
    if (error) return toast.error(error.message);
    toast.success(approve ? "Aluno aprovado" : "Solicitação recusada");
    loadClassDetails(activeClass);
  };

  const canTeach = role === "admin" || role === "teacher";

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <h1 className="text-2xl md:text-3xl font-black italic uppercase">Escola</h1>
          <div/>
        </div>

        {/* Aluno: entrar com código */}
        <Card className="bg-slate-900/60 border-white/20 mb-6">
          <CardHeader><CardTitle className="text-base font-black uppercase tracking-widest text-white">Entrar em uma turma</CardTitle></CardHeader>
          <CardContent className="flex gap-2">
            <Input placeholder="Código de convite" value={joinCode} onChange={(e) => setJoinCode(e.target.value.toUpperCase())} className="bg-slate-950 border-white/20 uppercase text-white font-bold placeholder:text-white/60"/>
            <Button onClick={joinByCode}><UserPlus className="w-4 h-4 mr-1"/>Entrar</Button>
          </CardContent>
        </Card>

        {canTeach && (
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="bg-slate-900/60 border-white/20">
              <CardHeader><CardTitle className="text-base font-black uppercase tracking-widest flex items-center gap-2 text-white"><School className="w-4 h-4"/>Nova Escola</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Input placeholder="Nome da escola" value={newSchool.name} onChange={e => setNewSchool({ ...newSchool, name: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold placeholder:text-white/60"/>
                <Input placeholder="Cidade" value={newSchool.city} onChange={e => setNewSchool({ ...newSchool, city: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold placeholder:text-white/60"/>
                <Button onClick={createSchool} className="w-full"><Plus className="w-4 h-4 mr-1"/>Criar Escola</Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-900/60 border-white/20">
              <CardHeader><CardTitle className="text-base font-black uppercase tracking-widest flex items-center gap-2 text-white"><Users className="w-4 h-4"/>Nova Turma (6º–9º)</CardTitle></CardHeader>
              <CardContent className="space-y-2">
                <Select value={newClass.school_id} onValueChange={v => setNewClass({ ...newClass, school_id: v })}>
                  <SelectTrigger className="bg-slate-950 border-white/20 text-white font-bold"><SelectValue placeholder="Selecione a escola"/></SelectTrigger>
                  <SelectContent>{schools.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}</SelectContent>
                </Select>
                <Input placeholder="Nome da turma (ex: A, B…)" value={newClass.name} onChange={e => setNewClass({ ...newClass, name: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold placeholder:text-white/60"/>
                <Select value={String(newClass.grade_year)} onValueChange={v => setNewClass({ ...newClass, grade_year: Number(v) })}>
                  <SelectTrigger className="bg-slate-950 border-white/20 text-white font-bold"><SelectValue placeholder="Ano"/></SelectTrigger>
                  <SelectContent>{[6,7,8,9].map(g => <SelectItem key={g} value={String(g)}>{g}º ano</SelectItem>)}</SelectContent>
                </Select>
                <Button onClick={createClass} className="w-full"><Plus className="w-4 h-4 mr-1"/>Criar Turma</Button>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900/60 border-white/10 md:col-span-1">
            <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest">Turmas</CardTitle></CardHeader>
            <CardContent className="space-y-2 max-h-[500px] overflow-y-auto">
              {classes.length === 0 && <p className="text-xs text-white/50">Nenhuma turma ainda.</p>}
              {classes.map(c => {
                const sch = schools.find(s => s.id === c.school_id);
                return (
                  <button key={c.id} onClick={() => loadClassDetails(c)} className={`w-full text-left p-3 rounded-xl border ${activeClass?.id === c.id ? "bg-violet-600/20 border-violet-500" : "bg-slate-950/60 border-white/10"}`}>
                    <div className="font-bold text-sm">{c.name} <Badge variant="outline" className="ml-1 text-[10px]">{c.grade_year}º ano</Badge></div>
                    <div className="text-[10px] text-white/50">{sch?.name ?? "—"}</div>
                    <div className="text-[10px] text-amber-300 mt-1 flex items-center gap-2">
                      <span className="font-mono">{c.invite_code}</span>
                      <Copy className="w-3 h-3 cursor-pointer" onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(c.invite_code); toast.success("Código copiado"); }}/>
                      <QrCode className="w-3 h-3 cursor-pointer text-cyan-300" onClick={(e) => { e.stopPropagation(); setQrClass(c); }}/>
                    </div>
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            {activeClass ? (
              <>
                <Card className="bg-slate-900/60 border-white/10">
                  <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest">Alunos — {activeClass.name}</CardTitle></CardHeader>
                  <CardContent>
                    {canTeach && (
                      <div className="flex gap-2 mb-3">
                        <Input placeholder="e-mails separados por vírgula" value={emailsRaw} onChange={e => setEmailsRaw(e.target.value)} className="bg-slate-950 border-white/10"/>
                        <Button onClick={addStudentsByEmail}><UserPlus className="w-4 h-4"/></Button>
                      </div>
                    )}
                    {canTeach && members.some(m => m.status === "pending") && (
                      <div className="mb-3 p-2 rounded-lg border border-amber-500/40 bg-amber-500/10">
                        <div className="text-[11px] font-black uppercase text-amber-300 mb-1">Solicitações pendentes</div>
                        <div className="space-y-1">
                          {members.filter(m => m.status === "pending").map(m => (
                            <div key={m.user_id} className="flex items-center justify-between text-xs">
                              <span>@{m.username}</span>
                              <div className="flex gap-1">
                                <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => approveMember(m.user_id, true)}><Check className="w-3 h-3 text-emerald-400"/></Button>
                                <Button size="sm" variant="ghost" className="h-7 px-2" onClick={() => approveMember(m.user_id, false)}><X className="w-3 h-3 text-rose-400"/></Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="space-y-1 max-h-[300px] overflow-y-auto">
                      {members.filter(m => m.status === "approved").length === 0 && <p className="text-xs text-white/50">Sem alunos aprovados. Compartilhe o código <strong className="text-amber-300">{activeClass.invite_code}</strong> ou o QR Code.</p>}
                      {members.filter(m => m.status === "approved").map(m => (
                        <div key={m.user_id} className="flex items-center justify-between bg-slate-950/60 border border-white/10 rounded-lg px-3 py-2 text-xs">
                          <span>@{m.username} <Badge variant="outline" className="ml-2 text-[9px]">{m.role}</Badge></span>
                          <div className="flex gap-1">
                            {role === "admin" && (
                              <Button size="sm" variant="ghost" onClick={() => openEdit(m.user_id)} title="Editar cadastro"><Pencil className="w-3 h-3 text-cyan-300"/></Button>
                            )}
                            {canTeach && <Button size="sm" variant="ghost" onClick={() => removeMember(m.user_id)}><Trash2 className="w-3 h-3 text-rose-400"/></Button>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900/60 border-white/10">
                  <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest">Equipes</CardTitle></CardHeader>
                  <CardContent>
                    {canTeach && (
                      <div className="flex gap-2 mb-3">
                        <Input placeholder="Nome da equipe" value={newTeam.name} onChange={e => setNewTeam({ ...newTeam, name: e.target.value })} className="bg-slate-950 border-white/10"/>
                        <input type="color" value={newTeam.color} onChange={e => setNewTeam({ ...newTeam, color: e.target.value })} className="w-12 h-10 rounded bg-slate-950 border border-white/10"/>
                        <Button onClick={createTeam}><Plus className="w-4 h-4"/></Button>
                      </div>
                    )}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {teams.map(t => (
                        <div key={t.id} className="bg-slate-950/60 border border-white/10 rounded-xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="w-3 h-3 rounded-full" style={{ background: t.color }}/>
                              <span className="font-bold text-sm">{t.name}</span>
                            </div>
                            {canTeach && <Button size="sm" variant="ghost" onClick={() => deleteTeam(t.id)}><Trash2 className="w-3 h-3 text-rose-400"/></Button>}
                          </div>
                          <div className="space-y-1 max-h-32 overflow-y-auto">
                            {members.map(m => {
                              const inTeam = (teamMembers[t.id] ?? []).includes(m.user_id);
                              return canTeach ? (
                                <label key={m.user_id} className="flex items-center gap-2 text-[11px] cursor-pointer hover:bg-white/5 rounded px-1">
                                  <input type="checkbox" checked={inTeam} onChange={() => toggleTeamMember(t.id, m.user_id)}/>
                                  @{m.username}
                                </label>
                              ) : inTeam ? <div key={m.user_id} className="text-[11px]">@{m.username}</div> : null;
                            })}
                          </div>
                        </div>
                      ))}
                      {teams.length === 0 && <p className="text-xs text-white/50">Nenhuma equipe ainda.</p>}
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <div className="text-white/50 text-sm p-8 text-center bg-slate-900/30 rounded-xl border border-dashed border-white/10">
                Selecione uma turma à esquerda para ver alunos e equipes.
              </div>
            )}
          </div>
        </div>
      </div>

      <Dialog open={!!qrClass} onOpenChange={(o) => !o && setQrClass(null)}>
        <DialogContent className="bg-slate-900 border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-black uppercase tracking-widest text-white">QR Code — Turma {qrClass?.name}</DialogTitle>
          </DialogHeader>
          {qrClass && (
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="bg-white p-4 rounded-xl">
                <QRCodeSVG value={buildJoinUrl(qrClass.invite_code)} size={240} level="M"/>
              </div>
              <div className="text-center">
                <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Código</div>
                <div className="font-mono text-3xl font-black tracking-widest text-amber-300">{qrClass.invite_code}</div>
              </div>
              <div className="text-[11px] text-white/70 text-center font-bold break-all">{buildJoinUrl(qrClass.invite_code)}</div>
              <Button onClick={() => { navigator.clipboard.writeText(buildJoinUrl(qrClass.invite_code)); toast.success("Link copiado"); }} className="w-full">
                <Copy className="w-4 h-4 mr-2"/>Copiar link de convite
              </Button>
              <p className="text-[11px] text-white/60 text-center">Alunos escaneiam o QR ou digitam o código. A entrada precisa ser <strong className="text-amber-300">aprovada pelo professor</strong>.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={!!editStudent} onOpenChange={(o) => !o && setEditStudent(null)}>
        <DialogContent className="bg-slate-900 border-white/20 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="font-black uppercase tracking-widest">Editar Aluno</DialogTitle>
          </DialogHeader>
          {editStudent && (
            <div className="space-y-3 py-2">
              <div>
                <label className="text-[11px] font-black uppercase text-white/70">Nome de usuário</label>
                <Input value={editStudent.username} onChange={e => setEditStudent({ ...editStudent, username: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold"/>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] font-black uppercase text-white/70">Nível</label>
                  <Input type="number" value={editStudent.level} onChange={e => setEditStudent({ ...editStudent, level: parseInt(e.target.value) || 0 })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase text-white/70">XP</label>
                  <Input type="number" value={editStudent.xp} onChange={e => setEditStudent({ ...editStudent, xp: parseInt(e.target.value) || 0 })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                </div>
                <div>
                  <label className="text-[11px] font-black uppercase text-white/70">Átomos</label>
                  <Input type="number" value={editStudent.coins} onChange={e => setEditStudent({ ...editStudent, coins: parseInt(e.target.value) || 0 })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                </div>
              </div>
              <div>
                <label className="text-[11px] font-black uppercase text-white/70">Papel na turma</label>
                <Select value={editStudent.class_role} onValueChange={v => setEditStudent({ ...editStudent, class_role: v })}>
                  <SelectTrigger className="bg-slate-950 border-white/20 text-white font-bold"><SelectValue/></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Aluno</SelectItem>
                    <SelectItem value="assistant">Monitor</SelectItem>
                    <SelectItem value="teacher">Professor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-[11px] font-black uppercase text-white/70">E-mail do aluno</label>
                <Input type="email" value={editStudent.email} onChange={e => setEditStudent({ ...editStudent, email: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold"/>
              </div>
              <div className="border-t border-white/10 pt-3 space-y-2">
                <p className="text-[11px] font-black uppercase tracking-widest text-cyan-300">Responsável</p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-black uppercase text-white/70">Nome</label>
                    <Input value={editStudent.guardian_name} onChange={e => setEditStudent({ ...editStudent, guardian_name: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                  </div>
                  <div>
                    <label className="text-[11px] font-black uppercase text-white/70">Parentesco</label>
                    <Input placeholder="Mãe, pai, tutor..." value={editStudent.guardian_relationship} onChange={e => setEditStudent({ ...editStudent, guardian_relationship: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                  </div>
                  <div>
                    <label className="text-[11px] font-black uppercase text-white/70">E-mail</label>
                    <Input type="email" value={editStudent.guardian_email} onChange={e => setEditStudent({ ...editStudent, guardian_email: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                  </div>
                  <div>
                    <label className="text-[11px] font-black uppercase text-white/70">Telefone</label>
                    <Input value={editStudent.guardian_phone} onChange={e => setEditStudent({ ...editStudent, guardian_phone: e.target.value })} className="bg-slate-950 border-white/20 text-white font-bold"/>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 pt-3 space-y-2">
                <p className="text-[11px] font-black uppercase tracking-widest text-amber-300">Código de Acesso</p>
                <div className="flex gap-2 items-center">
                  <Input readOnly value={editStudent.access_code} className="bg-slate-950 border-amber-500/40 text-amber-200 font-black tracking-widest text-center"/>
                  <Button size="sm" variant="ghost" onClick={() => { navigator.clipboard.writeText(editStudent.access_code); toast.success("Código copiado"); }} title="Copiar"><Copy className="w-4 h-4 text-white"/></Button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <Button size="sm" variant="secondary" onClick={regenAccessCode}>Gerar novo</Button>
                  <Button size="sm" onClick={() => sendAccessCode("email")} className="bg-cyan-600 hover:bg-cyan-700">Enviar e-mail</Button>
                  <Button size="sm" onClick={() => sendAccessCode("sms")} className="bg-emerald-600 hover:bg-emerald-700">Enviar SMS</Button>
                </div>
                <p className="text-[10px] text-white/50">O código é gerado no cadastro. Envia por e-mail do aluno/responsável ou SMS do responsável.</p>
              </div>
              <p className="text-[10px] text-white/50">ID: {editStudent.user_id}</p>
            </div>

          )}
          <DialogFooter>
            <Button variant="ghost" onClick={() => setEditStudent(null)}>Cancelar</Button>
            <Button onClick={saveEdit}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Trophy, Medal } from "lucide-react";

type Row = { user_id: string; username: string; coins: number };

export default function RankingPage() {
  const navigate = useNavigate();
  const [global, setGlobal] = useState<Row[]>([]);
  const [classes, setClasses] = useState<{ id: string; name: string; grade_year: number }[]>([]);
  const [classId, setClassId] = useState<string>("");
  const [classRank, setClassRank] = useState<Row[]>([]);
  const [teams, setTeams] = useState<{ id: string; name: string; color: string; total: number; members: string[] }[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) { navigate("/"); return; }
      await ensureUserAccess(session.user);
      await loadGlobal();
      const { data: cls } = await supabase.from("classes").select("id, name, grade_year").order("grade_year");
      setClasses(cls ?? []);
    });
  }, [navigate]);

  const loadGlobal = async () => {
    const { data: w } = await supabase.from("player_wallet").select("user_id, lifetime_coins").order("lifetime_coins", { ascending: false }).limit(100);
    const ids = (w ?? []).map(x => x.user_id);
    if (!ids.length) return setGlobal([]);
    const { data: profs } = await supabase.from("profiles").select("id, username").in("id", ids);
    const map = new Map(profs?.map(p => [p.id, p.username]) ?? []);
    setGlobal((w ?? []).map(r => ({ user_id: r.user_id, username: map.get(r.user_id) ?? r.user_id.slice(0, 8), coins: r.lifetime_coins ?? 0 })));
  };

  const loadClass = async (cid: string) => {
    setClassId(cid);
    const { data: m } = await supabase.from("class_members").select("user_id").eq("class_id", cid);
    const ids = (m ?? []).map(x => x.user_id);
    if (!ids.length) { setClassRank([]); setTeams([]); return; }
    const [{ data: w }, { data: profs }, { data: teamRows }, { data: teamMembers }] = await Promise.all([
      supabase.from("player_wallet").select("user_id, lifetime_coins").in("user_id", ids),
      supabase.from("profiles").select("id, username").in("id", ids),
      supabase.from("class_teams").select("*").eq("class_id", cid),
      supabase.from("class_team_members").select("team_id, user_id"),
    ]);
    const profMap = new Map(profs?.map(p => [p.id, p.username]) ?? []);
    const coinMap = new Map(w?.map(x => [x.user_id, x.lifetime_coins ?? 0]) ?? []);
    const rows: Row[] = ids.map(uid => ({ user_id: uid, username: profMap.get(uid) ?? uid.slice(0, 8), coins: coinMap.get(uid) ?? 0 }))
      .sort((a, b) => b.coins - a.coins);
    setClassRank(rows);

    const teamIds = new Set((teamRows ?? []).map(t => t.id));
    const tmByTeam: Record<string, string[]> = {};
    (teamMembers ?? []).filter(tm => teamIds.has(tm.team_id)).forEach(tm => { (tmByTeam[tm.team_id] ||= []).push(tm.user_id); });
    const ts = (teamRows ?? []).map(t => {
      const memberIds = tmByTeam[t.id] ?? [];
      const total = memberIds.reduce((s, uid) => s + (coinMap.get(uid) ?? 0), 0);
      return { id: t.id, name: t.name, color: t.color, total, members: memberIds.map(uid => profMap.get(uid) ?? uid.slice(0, 8)) };
    }).sort((a, b) => b.total - a.total);
    setTeams(ts);
  };

  const renderRows = (rows: Row[]) => (
    <div className="space-y-1">
      {rows.length === 0 && <p className="text-xs text-white/50">Sem dados.</p>}
      {rows.map((r, i) => (
        <div key={r.user_id} className="flex items-center justify-between bg-slate-950/60 border border-white/10 rounded-lg px-3 py-2">
          <div className="flex items-center gap-3">
            <span className="w-6 text-center font-black">{i === 0 ? <Trophy className="w-4 h-4 text-yellow-400"/> : i < 3 ? <Medal className="w-4 h-4 text-slate-300"/> : i + 1}</span>
            <span className="text-sm">@{r.username}</span>
          </div>
          <span className="text-amber-300 font-black">{r.coins} ⚛</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <h1 className="text-2xl md:text-3xl font-black italic uppercase">Ranking</h1>
          <div/>
        </div>

        <Tabs defaultValue="global">
          <TabsList className="bg-slate-900/60 border border-white/10">
            <TabsTrigger value="global">Geral</TabsTrigger>
            <TabsTrigger value="class">Por Turma</TabsTrigger>
            <TabsTrigger value="team">Por Equipe</TabsTrigger>
          </TabsList>

          <TabsContent value="global">
            <Card className="bg-slate-900/60 border-white/10 mt-3"><CardHeader><CardTitle className="text-sm">Top 100 — Átomos acumulados</CardTitle></CardHeader>
              <CardContent>{renderRows(global)}</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="class">
            <Card className="bg-slate-900/60 border-white/10 mt-3">
              <CardHeader>
                <Select value={classId} onValueChange={loadClass}>
                  <SelectTrigger className="bg-slate-950 border-white/10"><SelectValue placeholder="Selecione a turma"/></SelectTrigger>
                  <SelectContent>{classes.map(c => <SelectItem key={c.id} value={c.id}>{c.name} — {c.grade_year}º ano</SelectItem>)}</SelectContent>
                </Select>
              </CardHeader>
              <CardContent>{renderRows(classRank)}</CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card className="bg-slate-900/60 border-white/10 mt-3">
              <CardHeader>
                <Select value={classId} onValueChange={loadClass}>
                  <SelectTrigger className="bg-slate-950 border-white/10"><SelectValue placeholder="Selecione a turma"/></SelectTrigger>
                  <SelectContent>{classes.map(c => <SelectItem key={c.id} value={c.id}>{c.name} — {c.grade_year}º ano</SelectItem>)}</SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {teams.length === 0 && <p className="text-xs text-white/50">Selecione uma turma com equipes.</p>}
                  {teams.map((t, i) => (
                    <div key={t.id} className="bg-slate-950/60 border border-white/10 rounded-xl p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-6 text-center font-black">{i + 1}</span>
                          <span className="w-3 h-3 rounded-full" style={{ background: t.color }}/>
                          <span className="font-bold">{t.name}</span>
                        </div>
                        <span className="text-amber-300 font-black">{t.total} ⚛</span>
                      </div>
                      <div className="text-[10px] text-white/50 mt-1 ml-8">{t.members.map(m => `@${m}`).join(" · ") || "sem membros"}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

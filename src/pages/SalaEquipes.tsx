import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { QUESTION_COUNTS, COINS_RIGHT, COINS_WRONG } from "@/lib/miniGames";
import { loadSeen, pickUnseen, saveSeen } from "@/lib/questionPicker";
import { teamPrize, teamWinners } from "@/lib/teamRoom";

type Team = { id: string; name: string; members: string[] };
const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

export default function SalaEquipes() {
  const [staff, setStaff] = useState<boolean | null>(null);
  const [classes, setClasses] = useState<any[]>([]);
  const [classId, setClassId] = useState("");
  const [teams, setTeams] = useState<Team[]>([]);
  const [count, setCount] = useState(5);
  const [qs, setQs] = useState<any[]>([]);
  const [idx, setIdx] = useState(0); // índice global de pergunta
  const [score, setScore] = useState<Record<string, { right: number; wrong: number }>>({});
  const [chosen, setChosen] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return setStaff(false);
      const r = await Promise.all(["admin", "teacher"].map((role) => supabase.rpc("has_role", { _user_id: data.user!.id, _role: role as any })));
      const ok = r.some((x) => x.data);
      setStaff(ok);
      if (ok) supabase.from("classes").select("id,name,grade_year").order("grade_year").then(({ data }) => setClasses(data ?? []));
    });
  }, []);

  useEffect(() => {
    if (!classId) return;
    (async () => {
      const { data: t } = await supabase.from("class_teams").select("*").eq("class_id", classId);
      const ids = (t ?? []).map((x: any) => x.id);
      const { data: tm } = ids.length ? await supabase.from("class_team_members").select("*").in("team_id", ids) : { data: [] as any[] };
      setTeams((t ?? []).map((x: any) => ({ id: x.id, name: x.name, members: (tm ?? []).filter((m: any) => m.team_id === x.id).map((m: any) => m.user_id) })));
    })();
  }, [classId]);

  const start = async () => {
    const n = count * teams.length;
    const { data } = await supabase.from("chem_questions").select("id,question,options,correct_index,difficulty").limit(1000);
    const pool = (data ?? []).filter((r: any) => Array.isArray(r.options) && r.options[r.correct_index] != null);
    const { picked, seen } = pickUnseen(pool as any[], loadSeen(`sala:${classId}`), n);
    saveSeen(`sala:${classId}`, seen);
    if (picked.length < n) return toast.error("Não há perguntas suficientes no banco.");
    setQs(picked.map((r: any) => ({ ...r, opts: shuffle(r.options.map(String)), correct: String(r.options[r.correct_index]) })));
    setScore(Object.fromEntries(teams.map((t) => [t.id, { right: 0, wrong: 0 }])));
    setIdx(0); setChosen(null); setDone(false);
  };

  const finish = async (sc: typeof score) => {
    setDone(true);
    const win = teamWinners(sc);
    const members = teams.filter((t) => win.includes(t.id)).flatMap((t) => t.members);
    const prize = teamPrize(sc[win[0]]);
    if (!members.length || prize < 1) return;
    const { error } = await supabase.rpc("award_team_coins" as any, { _user_ids: members, _amount: prize });
    error ? toast.error("Não foi possível dar as moedas: " + error.message) : toast.success(`Cada membro da equipe vencedora ganhou ${prize} ⚛`);
  };

  if (staff === null) return <div className="p-8 text-center">Carregando…</div>;
  if (!staff) return <div className="p-8 text-center">A sala de equipes é aberta pelo professor. <Link to="/" className="underline">Voltar</Link></div>;

  const q = qs[idx];
  const team = teams[idx % Math.max(1, teams.length)];
  const answer = (o: string) => {
    if (chosen) return;
    setChosen(o);
    const ok = o === q.correct;
    const sc = { ...score, [team.id]: { right: score[team.id].right + (ok ? 1 : 0), wrong: score[team.id].wrong + (ok ? 0 : 1) } };
    setScore(sc);
    setTimeout(() => {
      setChosen(null);
      if (idx + 1 >= qs.length) finish(sc); else setIdx(idx + 1);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="flex items-center justify-between"><h1 className="text-3xl font-black">👥 Sala de Jogos com Equipes</h1><Link to="/"><Button variant="ghost">← Início</Button></Link></div>

        {!qs.length && (
          <Card className="p-5 space-y-4">
            <select value={classId} onChange={(e) => setClassId(e.target.value)} className="border rounded-lg px-3 py-2 bg-background w-full">
              <option value="">Escolha a turma…</option>
              {classes.map((c) => <option key={c.id} value={c.id}>{c.name ?? `${c.grade_year}º ano`}</option>)}
            </select>
            {classId && (teams.length < 2
              ? <p className="text-sm text-muted-foreground">Esta turma precisa de pelo menos 2 equipes. Crie as equipes na página <Link to="/escola" className="underline">Escola</Link>.</p>
              : <>
                <div className="grid sm:grid-cols-2 gap-2">{teams.map((t) => <div key={t.id} className="rounded-lg border p-2 text-sm"><b>{t.name}</b> · {t.members.length} membros</div>)}</div>
                <div className="flex flex-wrap items-center gap-2"><span className="text-sm font-bold">Perguntas por equipe:</span>
                  {QUESTION_COUNTS.map((n) => <Button key={n} size="sm" variant={count === n ? "default" : "outline"} onClick={() => setCount(n)}>{n}</Button>)}</div>
                <p className="text-xs text-muted-foreground">Cada membro da equipe vencedora ganha {COINS_RIGHT}⚛ por acerto e {COINS_WRONG}⚛ por erro da equipe.</p>
                <Button size="lg" onClick={start}>▶ Começar</Button>
              </>)}
          </Card>
        )}

        {qs.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {teams.map((t) => <Badge key={t.id} variant={!done && t.id === team.id ? "default" : "outline"} className="justify-center py-2 text-sm">{t.name}: ✅{score[t.id]?.right ?? 0} ❌{score[t.id]?.wrong ?? 0}</Badge>)}
          </div>
        )}

        {qs.length > 0 && !done && q && (
          <Card className="p-6 space-y-4">
            <div className="text-sm text-muted-foreground">Pergunta {idx + 1}/{qs.length} · vez da equipe <b>{team.name}</b></div>
            <h2 className="text-xl font-bold">{q.question}</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {q.opts.map((o: string) => (
                <Button key={o} variant="outline" disabled={!!chosen} onClick={() => answer(o)}
                  className={`h-auto min-h-14 whitespace-normal ${chosen && o === q.correct ? "border-primary bg-primary/20" : ""} ${chosen === o && o !== q.correct ? "border-destructive bg-destructive/20" : ""}`}>{o}</Button>
              ))}
            </div>
          </Card>
        )}

        {done && (
          <Card className="p-6 text-center space-y-3">
            <div className="text-3xl font-black">🏆 {teams.filter((t) => teamWinners(score).includes(t.id)).map((t) => t.name).join(" e ")} venceu!</div>
            <Button onClick={() => setQs([])}>Nova partida</Button>
          </Card>
        )}
      </div>
    </div>
  );
}

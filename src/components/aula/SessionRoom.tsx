import { useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { TEAM_COLORS, areaMeta } from "@/lib/aula";
import { Trophy, Users, Play, SkipForward, Square, Loader2, Check, X } from "lucide-react";

const STORAGE_KEY = "aula_member_v1";

export function SessionRoom({ code, isHost }: { code: string; isHost: boolean }) {
  const [session, setSession] = useState<any | null>(null);
  const [teams, setTeams] = useState<any[]>([]);
  const [members, setMembers] = useState<any[]>([]);
  const [question, setQuestion] = useState<any | null>(null);
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // student state
  const [myTeamId, setMyTeamId] = useState<string | null>(null);
  const [myName, setMyName] = useState("");
  const [newTeamName, setNewTeamName] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submittedRound, setSubmittedRound] = useState<number | null>(null);
  const submittingRef = useRef(false);

  // load saved identity
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved.code === code) {
        setMyTeamId(saved.teamId ?? null);
        setMyName(saved.name ?? "");
      }
    } catch {}
  }, [code]);

  // load session
  useEffect(() => {
    let canceled = false;
    (async () => {
      const { data, error } = await supabase.from("game_sessions").select("*").eq("code", code).maybeSingle();
      if (canceled) return;
      if (error || !data) { toast.error("Sala não encontrada"); setLoading(false); return; }
      setSession(data);
      setLoading(false);
    })();
    return () => { canceled = true; };
  }, [code]);

  // realtime subscriptions
  useEffect(() => {
    if (!session?.id) return;
    const ch = supabase
      .channel(`room-${session.id}`)
      .on("postgres_changes", { event: "*", schema: "public", table: "game_sessions", filter: `id=eq.${session.id}` },
        (p) => setSession((s: any) => ({ ...s, ...(p.new as any) })))
      .on("postgres_changes", { event: "*", schema: "public", table: "game_teams", filter: `session_id=eq.${session.id}` },
        () => loadTeams())
      .on("postgres_changes", { event: "*", schema: "public", table: "session_answers", filter: `session_id=eq.${session.id}` },
        () => loadAnswers())
      .on("postgres_changes", { event: "*", schema: "public", table: "team_members" },
        () => loadMembers())
      .subscribe();
    loadTeams(); loadMembers(); loadAnswers();
    return () => { supabase.removeChannel(ch); };
  }, [session?.id]);

  // load current question
  useEffect(() => {
    if (!session?.current_question_id) { setQuestion(null); return; }
    supabase.from("chem_questions").select("*").eq("id", session.current_question_id).maybeSingle()
      .then(({ data }) => setQuestion(data));
    setSelectedOption(null);
  }, [session?.current_question_id]);

  const loadTeams = async () => {
    const { data } = await supabase.from("game_teams").select("*").eq("session_id", session!.id).order("score", { ascending: false });
    setTeams(data ?? []);
  };
  const loadMembers = async () => {
    if (!session?.id) return;
    const { data: t } = await supabase.from("game_teams").select("id").eq("session_id", session.id);
    const ids = (t ?? []).map((x) => x.id);
    if (!ids.length) { setMembers([]); return; }
    const { data } = await supabase.from("team_members").select("*").in("team_id", ids);
    setMembers(data ?? []);
  };
  const loadAnswers = async () => {
    const { data } = await supabase.from("session_answers").select("*").eq("session_id", session!.id)
      .eq("round_number", session!.current_round).order("created_at");
    setAnswers(data ?? []);
  };

  // ---------- Student actions ----------
  const createTeam = async () => {
    if (!newTeamName.trim() || !myName.trim()) { toast.error("Preencha seu nome e nome do time"); return; }
    const color = TEAM_COLORS[teams.length % TEAM_COLORS.length];
    const { data, error } = await supabase.from("game_teams").insert({ session_id: session.id, name: newTeamName.trim(), color }).select().single();
    if (error) { toast.error(error.message); return; }
    await joinTeam(data.id);
  };
  const joinTeam = async (teamId: string) => {
    if (!myName.trim()) { toast.error("Digite seu nome"); return; }
    const { error } = await supabase.from("team_members").insert({ team_id: teamId, display_name: myName.trim() });
    if (error) { toast.error(error.message); return; }
    setMyTeamId(teamId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ code, teamId, name: myName.trim() }));
    toast.success("Você entrou no time!");
  };
  const submitAnswer = async (idx: number) => {
    if (submittingRef.current) return;
    if (!myTeamId || !question || submittedRound === session.current_round) return;
    submittingRef.current = true;
    setSelectedOption(idx);
    const isCorrect = idx === question.correct_index;
    const points = isCorrect ? Math.max(1, 10 - answers.filter((a) => a.is_correct).length * 2) : 0;
    const { error } = await supabase.from("session_answers").insert({
      session_id: session.id, team_id: myTeamId, question_id: question.id,
      round_number: session.current_round, answer: { index: idx }, is_correct: isCorrect, points,
    });
    submittingRef.current = false;
    if (error) { toast.error(error.message); return; }
    if (isCorrect && points > 0) {
      const team = teams.find((t) => t.id === myTeamId);
      await supabase.from("game_teams").update({ score: (team?.score ?? 0) + points }).eq("id", myTeamId);
    }
    setSubmittedRound(session.current_round);
    toast[isCorrect ? "success" : "error"](isCorrect ? `+${points} pontos!` : "Resposta incorreta");
  };

  // ---------- Host actions ----------
  const nextQuestion = async () => {
    const usedIds = answers.map((a) => a.question_id).filter(Boolean);
    let query = supabase.from("chem_questions").select("*").eq("area", session.area).limit(50);
    const { data: pool } = await query;
    const candidates = (pool ?? []).filter((q) => q.id !== session.current_question_id);
    if (!candidates.length) { toast.error("Sem mais questões nessa área"); return; }
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    const nextRound = session.current_round + 1;
    if (nextRound > session.total_rounds) { return finishSession(); }
    await supabase.from("game_sessions").update({
      status: "active", current_question_id: pick.id, current_round: nextRound,
    }).eq("id", session.id);
  };
  const finishSession = async () => {
    await supabase.from("game_sessions").update({ status: "finished" }).eq("id", session.id);
    toast.success("Partida encerrada!");
  };

  if (loading) return <div className="flex justify-center p-12"><Loader2 className="animate-spin" /></div>;
  if (!session) return <div className="text-center p-12">Sala não encontrada</div>;

  const meta = areaMeta(session.area);
  const finished = session.status === "finished";
  const inLobby = session.status === "lobby";
  const hasAnswered = submittedRound === session.current_round;

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      <Card className="p-4 flex items-center gap-3" style={{ borderLeft: `6px solid ${meta.color}` }}>
        <div className="text-3xl">{meta.emoji}</div>
        <div className="flex-1">
          <div className="font-mono text-2xl font-black">{session.code}</div>
          <div className="text-xs text-muted-foreground">{meta.label} · Rodada {session.current_round}/{session.total_rounds}</div>
        </div>
        <Badge variant={finished ? "secondary" : inLobby ? "outline" : "default"}>{session.status}</Badge>
      </Card>

      {/* Scoreboard */}
      <Card className="p-4">
        <h3 className="font-bold mb-3 flex items-center gap-2"><Trophy className="text-[#D97706]" /> Placar</h3>
        {teams.length === 0 && <div className="text-sm text-muted-foreground">Aguardando equipes...</div>}
        <div className="space-y-2">
          {teams.map((t, i) => {
            const teamMembers = members.filter((m) => m.team_id === t.id);
            return (
              <div key={t.id} className="flex items-center gap-3 p-2 rounded-lg" style={{ background: `${t.color}15` }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black" style={{ background: t.color }}>{i + 1}</div>
                <div className="flex-1">
                  <div className="font-bold">{t.name} {myTeamId === t.id && <Badge variant="outline" className="ml-1">você</Badge>}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-1"><Users size={10} />{teamMembers.map((m) => m.display_name).join(", ") || "vazio"}</div>
                </div>
                <div className="text-2xl font-black" style={{ color: t.color }}>{t.score}</div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Join UI for students */}
      {!isHost && !myTeamId && !finished && (
        <Card className="p-4 space-y-3">
          <h3 className="font-bold">Entrar na partida</h3>
          <Input placeholder="Seu nome" value={myName} onChange={(e) => setMyName(e.target.value)} />
          <div className="grid grid-cols-2 gap-2">
            {teams.map((t) => (
              <Button key={t.id} variant="outline" onClick={() => joinTeam(t.id)} style={{ borderColor: t.color }}>
                Entrar em {t.name}
              </Button>
            ))}
          </div>
          <div className="flex gap-2">
            <Input placeholder="Nome do novo time" value={newTeamName} onChange={(e) => setNewTeamName(e.target.value)} />
            <Button onClick={createTeam} className="bg-[#4C1D95]">Criar Time</Button>
          </div>
        </Card>
      )}

      {/* Question */}
      {question && session.status === "active" && (
        <Card className="p-6">
          <Badge className="mb-3" style={{ background: meta.color }}>{meta.label}</Badge>
          <h3 className="text-xl font-bold mb-4">{question.question}</h3>
          <div className="grid gap-2">
            {(question.options as string[]).map((opt, i) => {
              const showResult = hasAnswered || isHost;
              const isCorrect = i === question.correct_index;
              return (
                <Button
                  key={i}
                  variant="outline"
                  disabled={isHost || hasAnswered || !myTeamId}
                  onClick={() => submitAnswer(i)}
                  className={`justify-start text-left h-auto py-3 ${
                    showResult && isCorrect ? "border-green-500 bg-green-50" :
                    showResult && selectedOption === i ? "border-red-500 bg-red-50" : ""
                  }`}
                >
                  <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                  <span className="flex-1">{opt}</span>
                  {showResult && isCorrect && <Check className="text-green-600" size={18} />}
                  {showResult && selectedOption === i && !isCorrect && <X className="text-red-600" size={18} />}
                </Button>
              );
            })}
          </div>
          {hasAnswered && question.explanation && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded text-sm">
              <strong>Explicação:</strong> {question.explanation}
            </div>
          )}
        </Card>
      )}

      {/* Host controls */}
      {isHost && !finished && (
        <Card className="p-4 flex gap-2">
          <Button onClick={nextQuestion} className="flex-1 bg-[#059669]">
            {session.current_round === 0 ? <><Play className="mr-2" />Iniciar</> : <><SkipForward className="mr-2" />Próxima</>}
          </Button>
          <Button onClick={finishSession} variant="destructive"><Square className="mr-2" />Encerrar</Button>
        </Card>
      )}

      {finished && (
        <Card className="p-8 text-center bg-gradient-to-br from-[#D97706] to-[#F59E0B] text-white">
          <Trophy className="mx-auto mb-3" size={48} />
          <h2 className="text-3xl font-black">Partida Encerrada!</h2>
          {teams[0] && <p className="mt-2 text-xl">🏆 Vencedor: <strong>{teams[0].name}</strong> ({teams[0].score} pts)</p>}
        </Card>
      )}
    </div>
  );
}

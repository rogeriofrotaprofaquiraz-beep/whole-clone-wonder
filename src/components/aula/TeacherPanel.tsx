import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { AREAS, MODES, genCode, areaMeta, AreaValue, LEVELS, LevelValue, DIFFICULTIES } from "@/lib/aula";
import { Sparkles, Play, Copy, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function TeacherPanel({ userId }: { userId: string }) {
  const navigate = useNavigate();
  const [area, setArea] = useState<AreaValue>("geral");
  const [level, setLevel] = useState<LevelValue>("medio");
  const [mode, setMode] = useState("quiz");
  const [rounds, setRounds] = useState(10);
  const [count, setCount] = useState(10);
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState(2);
  const [generating, setGenerating] = useState(false);
  const [generatingTerms, setGeneratingTerms] = useState(false);
  const [creating, setCreating] = useState(false);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [sessions, setSessions] = useState<any[]>([]);

  const loadStats = async () => {
    const out: Record<string, number> = {};
    for (const a of AREAS) {
      const { count: c } = await supabase
        .from("chem_questions")
        .select("*", { count: "exact", head: true })
        .eq("area", a.value);
      out[a.value] = c ?? 0;
    }
    setStats(out);
  };

  const loadSessions = async () => {
    const { data } = await supabase
      .from("game_sessions")
      .select("*")
      .eq("teacher_id", userId)
      .order("created_at", { ascending: false })
      .limit(10);
    setSessions(data ?? []);
  };

  useEffect(() => {
    loadStats();
    loadSessions();
  }, [userId]);

  const generateQuestions = async () => {
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-chem-questions", {
        body: { area, count, difficulty, topic: topic || undefined, school_level: level },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      toast.success(`${(data as any).inserted} questões adicionadas!`);
      loadStats();
    } catch (e: any) {
      toast.error(e.message || "Falha ao gerar questões");
    } finally {
      setGenerating(false);
    }
  };

  const generateTerms = async () => {
    setGeneratingTerms(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-chem-terms", {
        body: { area, count: 15, difficulty, school_level: level },
      });
      if (error) throw error;
      if ((data as any)?.error) throw new Error((data as any).error);
      toast.success(`${(data as any).inserted} termos adicionados!`);
    } catch (e: any) {
      toast.error(e.message || "Falha ao gerar termos");
    } finally {
      setGeneratingTerms(false);
    }
  };



  const createSession = async () => {
    if ((stats[area] ?? 0) < 1) {
      toast.error("Gere questões para essa área primeiro");
      return;
    }
    setCreating(true);
    try {
      const code = genCode();
      const { data, error } = await supabase
        .from("game_sessions")
        .insert({ code, teacher_id: userId, mode: mode as any, area, total_rounds: rounds })
        .select()
        .single();
      if (error) throw error;
      toast.success(`Sala criada: ${code}`);
      navigate(`/aula/sala/${data.code}?host=1`);
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setCreating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-[#4C1D95] to-[#7C3AED] text-white border-0">
        <h2 className="text-2xl font-bold mb-1">Painel do Professor</h2>
        <p className="text-white/80 text-sm">Gere questões com IA e crie partidas para sua turma</p>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="text-[#D97706]" />
          <h3 className="text-lg font-bold">Banco de Questões (IA)</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          {AREAS.map((a) => (
            <div
              key={a.value}
              className="rounded-lg p-3 text-white text-center"
              style={{ background: a.color }}
            >
              <div className="text-2xl">{a.emoji}</div>
              <div className="text-xs font-bold mt-1">{a.label}</div>
              <div className="text-lg font-black">{stats[a.value] ?? 0}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <Label>Área</Label>
            <Select value={area} onValueChange={(v) => setArea(v as AreaValue)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {AREAS.map((a) => <SelectItem key={a.value} value={a.value}>{a.emoji} {a.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Nível de ensino</Label>
            <Select value={level} onValueChange={(v) => setLevel(v as LevelValue)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {LEVELS.map((l) => <SelectItem key={l.value} value={l.value}>{l.emoji} {l.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Tópico (opcional)</Label>
            <Input value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Ex: nomenclatura IUPAC" />
          </div>
          <div>
            <Label>Quantidade ({count})</Label>
            <Input type="number" min={1} max={25} value={count} onChange={(e) => setCount(+e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <Label>Dificuldade</Label>
            <div className="flex flex-wrap gap-2 mt-1">
              {DIFFICULTIES.map((d) => (
                <button key={d.value} type="button" onClick={() => setDifficulty(d.value)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold border-2 ${difficulty === d.value ? "bg-[#D97706] text-white border-[#D97706]" : "bg-white border-slate-200"}`}>
                  {d.value}★ {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Button onClick={generateQuestions} disabled={generating} className="bg-[#D97706] hover:bg-[#B45309]">
            {generating ? <><Loader2 className="animate-spin mr-2" />Gerando...</> : <><Sparkles className="mr-2" />Gerar Quiz</>}
          </Button>
          <Button onClick={generateTerms} disabled={generatingTerms} className="bg-[#4C1D95] hover:bg-[#3B1486]">
            {generatingTerms ? <><Loader2 className="animate-spin mr-2" />Gerando...</> : <><Sparkles className="mr-2" />Gerar Termos</>}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">"Quiz" alimenta o Quiz competitivo. "Termos" alimenta Forca, Caça-palavras e Memória (treino solo).</p>
      </Card>




      <Card className="p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Play className="text-[#059669]" /> Nova Partida</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <div>
            <Label>Modo</Label>
            <Select value={mode} onValueChange={setMode}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {MODES.map((m) => (
                  <SelectItem key={m.value} value={m.value} disabled={!m.available}>
                    {m.emoji} {m.label} {!m.available && "(em breve)"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Área</Label>
            <Select value={area} onValueChange={(v) => setArea(v as AreaValue)}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {AREAS.map((a) => <SelectItem key={a.value} value={a.value}>{a.emoji} {a.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Rodadas</Label>
            <Input type="number" min={3} max={30} value={rounds} onChange={(e) => setRounds(+e.target.value)} />
          </div>
        </div>
        <Button onClick={createSession} disabled={creating} className="mt-4 w-full bg-[#059669] hover:bg-[#047857]">
          {creating ? <Loader2 className="animate-spin mr-2" /> : <Play className="mr-2" />}
          Criar Sala
        </Button>
      </Card>

      {sessions.length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-bold mb-4">Suas Salas Recentes</h3>
          <div className="space-y-2">
            {sessions.map((s) => {
              const m = areaMeta(s.area);
              return (
                <div key={s.id} className="flex items-center gap-3 p-3 rounded-lg border">
                  <div className="text-2xl">{m.emoji}</div>
                  <div className="flex-1">
                    <div className="font-bold font-mono text-lg">{s.code}</div>
                    <div className="text-xs text-muted-foreground">{m.label} · {s.mode} · {s.total_rounds} rodadas</div>
                  </div>
                  <Badge variant={s.status === "active" ? "default" : "secondary"}>{s.status}</Badge>
                  <Button size="sm" variant="ghost" onClick={() => { navigator.clipboard.writeText(s.code); toast.success("Código copiado"); }}>
                    <Copy size={14} />
                  </Button>
                  <Button size="sm" onClick={() => navigate(`/aula/sala/${s.code}?host=1`)}>Abrir</Button>
                </div>
              );
            })}
          </div>
        </Card>
      )}
    </div>
  );
}

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
import { AreaQuestionsDialog } from "./AreaQuestionsDialog";
import { QuestionBankCentral } from "./QuestionBankCentral";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DisciplinesDialog } from "./DisciplinesDialog";
import type { Discipline } from "@/lib/questionImport";

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
  const [content, setContent] = useState("");
  const [generatingAll, setGeneratingAll] = useState(false);
  const [bankRevision, setBankRevision] = useState(0);
  const [stats, setStats] = useState<Record<string, number>>({});
  const [openArea, setOpenArea] = useState<AreaValue | null>(null);
  const [sessions, setSessions] = useState<any[]>([]);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [discStats, setDiscStats] = useState<Record<string, number>>({});
  const [discKey, setDiscKey] = useState("");
  const [openDisc, setOpenDisc] = useState<Discipline | null>(null);
  const [discDialog, setDiscDialog] = useState(false);
  const [topicOptions, setTopicOptions] = useState<string[]>([]);
  const selectedDisc = disciplines.find((d) => d.key === discKey) ?? null;

  const loadDisciplines = async () => {
    const { data } = await supabase.from("question_disciplines").select("*").order("sort");
    const list = (data as Discipline[]) ?? [];
    setDisciplines(list);
    const counts = await Promise.all(list.map((d) =>
      supabase.from("chem_questions").select("id", { count: "exact", head: true }).eq("discipline", d.key)));
    setDiscStats(Object.fromEntries(list.map((d, i) => [d.key, counts[i].count ?? 0])));
  };

  useEffect(() => {
    if (!selectedDisc) { setTopicOptions([]); return; }
    supabase.from("chem_questions").select("topic, lesson").eq("discipline", selectedDisc.key).limit(1000)
      .then(({ data }) => setTopicOptions([...new Set((data ?? []).map((r: any) => (r.topic || r.lesson || "").trim()).filter(Boolean))].sort()));
  }, [discKey, disciplines, discStats]);

  const [stdProgress, setStdProgress] = useState("");

  const generateStandard = async () => {
    const jobs: { area: string; school_level: string; difficulty: number }[] = [];
    for (const a of AREAS) for (const l of LEVELS) for (const d of DIFFICULTIES)
      jobs.push({ area: a.value, school_level: l.value, difficulty: d.value });
    if (!confirm(`Gerar 5 questões para cada combinação (${jobs.length} combinações, ~${jobs.length * 5} questões)? Pode levar alguns minutos.`)) return;
    let done = 0, ok = 0, fail = 0;
    setStdProgress(`0/${jobs.length}`);
    const queue = [...jobs];
    const worker = async () => {
      while (queue.length) {
        const j = queue.shift();
        if (!j) break;
        try {
          const { data, error } = await supabase.functions.invoke("generate-chem-questions", { body: { ...j, count: 5 } });
          if (error || (data as any)?.error) fail++; else ok += (data as any)?.inserted ?? 0;
        } catch { fail++; }
        done++;
        setStdProgress(`${done}/${jobs.length}`);
      }
    };
    await Promise.all([worker(), worker(), worker(), worker()]);
    setStdProgress("");
    toast.success(`Banco padrão: ${ok} questões criadas${fail ? ` (${fail} combinações falharam)` : ""}`);
    loadStats();
  };

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
    setBankRevision(v => v + 1);
    loadDisciplines();
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
        body: { area, count, difficulty, topic: topic || undefined, school_level: level, content: content || undefined,
          discipline: selectedDisc?.key, discipline_label: selectedDisc?.label },
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
        body: { area, count: 15, difficulty, school_level: level, content: content || undefined },
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



  const loadFile = async (f: File) => {
    try {
      if (f.name.toLowerCase().endsWith(".docx")) {
        const mammoth: any = await import("mammoth");
        const r = await mammoth.extractRawText({ arrayBuffer: await f.arrayBuffer() });
        setContent(r.value);
      } else setContent(await f.text());
      toast.success("Conteúdo carregado");
    } catch { toast.error("Não foi possível ler o arquivo"); }
  };

  const generateAll = async () => {
    setGeneratingAll(true);
    try {
      await Promise.all([generateQuestions(), generateTerms()]);
    } finally { setGeneratingAll(false); }
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

      <Tabs defaultValue="banco" className="space-y-4">
        <TabsList className="grid grid-cols-3 h-auto w-full">
          <TabsTrigger value="banco" className="py-2 font-bold">🗃️ Banco de Questões</TabsTrigger>
          <TabsTrigger value="aula" className="py-2 font-bold">📄 Gerar pela aula</TabsTrigger>
          <TabsTrigger value="partidas" className="py-2 font-bold">🎮 Partidas ao vivo</TabsTrigger>
        </TabsList>

      <TabsContent value="aula">
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="text-[#D97706]" />
          <h3 className="text-lg font-bold">Gerar questões pela aula</h3>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <p className="text-xs text-muted-foreground">Clique numa disciplina para adicionar, editar ou excluir assuntos e questões.</p>
          <Button size="sm" variant="outline" onClick={() => setDiscDialog(true)}>📚 Gerenciar disciplinas</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4">
          {disciplines.map((d) => (
            <button
              type="button"
              key={d.key}
              onClick={() => setOpenDisc(d)}
              title="Ver e editar assuntos"
              className="rounded-lg p-3 text-white text-left hover:opacity-90 transition"
              style={{ background: d.color }}
            >
              <div className="text-xl">{areaMeta(d.area as AreaValue).emoji}</div>
              <div className="text-xs font-bold mt-1 leading-tight">{d.label}</div>
              <div className="text-[11px] opacity-90">{discStats[d.key] ?? 0} questões</div>
            </button>
          ))}
        </div>
        <AreaQuestionsDialog
          area={openDisc ? (openDisc.area as AreaValue) : openArea}
          discipline={openDisc ? { key: openDisc.key, label: openDisc.label } : null}
          onClose={() => { setOpenDisc(null); setOpenArea(null); }}
          onChanged={() => loadStats()}
        />
        <DisciplinesDialog open={discDialog} onOpenChange={setDiscDialog} list={disciplines} onChanged={() => loadStats()} />
        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <Label>Disciplina</Label>
            <Select value={discKey || "_none"} onValueChange={(v) => {
              const k = v === "_none" ? "" : v; setDiscKey(k); setTopic("");
              const d = disciplines.find((x) => x.key === k); if (d) setArea(d.area as AreaValue);
            }}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="_none">— Sem disciplina —</SelectItem>
                {disciplines.map((d) => <SelectItem key={d.key} value={d.key}>{d.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Área</Label>
            <Select value={area} onValueChange={(v) => setArea(v as AreaValue)} disabled={!!selectedDisc}>
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
            <Label>Assunto (opcional)</Label>
            <Input list="aula-topic-options" value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Escolha um assunto ou digite um novo" />
            <datalist id="aula-topic-options">{topicOptions.map((t) => <option key={t} value={t} />)}</datalist>
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
        <div className="mt-3 space-y-1">
          <Label>Conteúdo / planejamento da aula (opcional)</Label>
          <Input type="file" accept=".docx,.txt,.md" onChange={(e) => e.target.files?.[0] && loadFile(e.target.files[0])} />
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={5}
            placeholder="Cole aqui o conteúdo ou anexe a aula (.docx). As questões e termos serão criados com base nele."
            className="w-full rounded-md border border-input bg-background p-2 text-sm" />
        </div>
        <Button onClick={generateAll} disabled={generatingAll || generating || generatingTerms} className="w-full mt-4 bg-[#059669] hover:bg-[#047857]">
          {generatingAll ? <><Loader2 className="animate-spin mr-2" />Gerando para todos os jogos...</> : <><Sparkles className="mr-2" />Gerar para TODOS os jogos (Quiz, Forca, Caça-palavras, Memória)</>}
        </Button>
        <Button onClick={generateStandard} disabled={!!stdProgress || generatingAll} variant="outline" className="w-full mt-2">
          {stdProgress ? <><Loader2 className="animate-spin mr-2" />Banco padrão: {stdProgress}</> : <><Sparkles className="mr-2" />Gerar banco padrão (5 questões por dificuldade · todas as áreas e níveis)</>}
        </Button>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <Button onClick={generateQuestions} disabled={generating} className="bg-[#D97706] hover:bg-[#B45309]">
            {generating ? <><Loader2 className="animate-spin mr-2" />Gerando...</> : <><Sparkles className="mr-2" />Gerar Quiz</>}
          </Button>
          <Button onClick={generateTerms} disabled={generatingTerms} className="bg-[#4C1D95] hover:bg-[#3B1486]">
            {generatingTerms ? <><Loader2 className="animate-spin mr-2" />Gerando...</> : <><Sparkles className="mr-2" />Gerar Termos</>}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">"Quiz" alimenta o Quiz competitivo. "Termos" alimenta Forca, Caça-palavras e Memória (treino solo).</p>
      </Card>
      </TabsContent>

      <TabsContent value="banco">

      <Card className="p-6"><QuestionBankCentral userId={userId} revision={bankRevision} onChanged={loadStats} /></Card>
      </TabsContent>

      <TabsContent value="partidas" className="space-y-6">
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
      </TabsContent>
      </Tabs>
    </div>
  );
}

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { BookOpen, FileDown, FileText, Loader2, Pencil, Plus, Settings2, Sparkles, Trash2, Upload } from "lucide-react";
import { QuestionBankByTopic } from "./QuestionBankByTopic";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DisciplinesDialog } from "./DisciplinesDialog";
import { QuestionEditorDialog, type BankQuestion } from "./QuestionEditorDialog";
import { LEVELS, DIFFICULTIES } from "@/lib/aula";
import { GAME_TYPES, gamesFor, gameLabel, questionPoints } from "@/lib/questionGames";
import { parseCsv, rowsToQuestions, tableToObjects, TEMPLATE_CSV, type Discipline } from "@/lib/questionImport";

type Row = BankQuestion & { id: string };

const sel = "border border-input rounded-md px-2 h-9 text-sm bg-background w-full";
const diffLabel = (d: number) => DIFFICULTIES.find((x) => x.value === d)?.label ?? `${d}`;
const levelLabel = (l: string) => LEVELS.find((x) => x.value === l)?.label ?? l;

export function QuestionBankCentral({ userId, revision = 0, onChanged }: { userId: string; revision?: number; onChanged?: () => void }) {
  const [rows, setRows] = useState<Row[]>([]);
  const [disciplines, setDisciplines] = useState<Discipline[]>([]);
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);
  const [disc, setDisc] = useState("");
  const [game, setGame] = useState("");
  const [level, setLevel] = useState("");
  const [q, setQ] = useState("");
  const [editing, setEditing] = useState<Row | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [discOpen, setDiscOpen] = useState(false);
  const [gen, setGen] = useState({ count: 5, level: "medio", disc: "geral", game: "quiz", difficulty: 2 });
  const [generating, setGenerating] = useState(false);
  const [importing, setImporting] = useState(false);
  const [tab, setTab] = useState("lista");
  const fileRef = useRef<HTMLInputElement>(null);

  const refresh = useCallback(() => { setTick((t) => t + 1); onChanged?.(); }, [onChanged]);

  const loadDisciplines = useCallback(async () => {
    const { data } = await supabase.from("question_disciplines").select("*").order("sort");
    setDisciplines((data as Discipline[]) ?? []);
  }, []);
  useEffect(() => { loadDisciplines(); }, [loadDisciplines]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const all: Row[] = [];
      for (let from = 0; ; from += 1000) {
        const { data, error } = await supabase.from("chem_questions")
          .select("id,area,discipline,topic,subcategory,difficulty,question,options,correct_index,answer_text,school_level,games,hint,explanation,time_limit")
          .order("created_at", { ascending: false }).range(from, from + 999);
        if (error) break;
        all.push(...((data as unknown as Row[]) ?? []));
        if (!data || data.length < 1000) break;
      }
      setRows(all); setLoading(false);
    })();
  }, [revision, tick]);

  const discMap = useMemo(() => new Map(disciplines.map((d) => [d.key, d])), [disciplines]);
  const withGames = useMemo(() => rows.map((r) => ({ ...r, gameList: gamesFor(r) })), [rows]);
  const list = withGames.filter((r) =>
    (!disc || r.discipline === disc) && (!level || r.school_level === level) &&
    (!game || r.gameList.includes(game)) &&
    (!q || (r.question + " " + (r.topic ?? "") + " " + (r.answer_text ?? "")).toLowerCase().includes(q.toLowerCase())));

  const generate = async () => {
    const d = discMap.get(gen.disc);
    if (!d) return toast.error("Escolha a disciplina");
    const g = GAME_TYPES.find((x) => x.key === gen.game);
    setGenerating(true);
    const { data, error } = await supabase.functions.invoke("generate-chem-questions", {
      body: {
        area: d.area, count: gen.count, difficulty: gen.difficulty, school_level: gen.level,
        discipline: d.key, discipline_label: d.label, game: gen.game, game_label: g?.label, word_answer: g?.kind === "word",
      },
    });
    setGenerating(false);
    if (error || data?.error) return toast.error(data?.error ?? error?.message ?? "Erro ao gerar");
    toast.success(`${data.inserted} questões criadas para ${g?.label}`); refresh();
  };

  const downloadTemplate = () => {
    const blob = new Blob(["\ufeff" + TEMPLATE_CSV], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "modelo-questoes.csv"; a.click();
  };

  const importFile = async (file: File) => {
    setImporting(true);
    try {
      const name = file.name.toLowerCase();
      let objs: Record<string, unknown>[];
      if (name.endsWith(".json")) {
        const j = JSON.parse(await file.text());
        objs = Array.isArray(j) ? j : Array.isArray(j.questions) ? j.questions : [];
      } else if (name.endsWith(".xlsx")) {
        const { readSheet } = await import("read-excel-file/browser");
        objs = tableToObjects((await readSheet(file)) as unknown[][]);
      } else objs = parseCsv(await file.text());
      const { ok, errors } = rowsToQuestions(objs, disciplines, userId);
      if (ok.length) {
        const { error } = await supabase.from("chem_questions").insert(ok as never);
        if (error) throw error;
      }
      toast.success(`${ok.length} questões importadas${errors.length ? ` · ${errors.length} linhas com erro` : ""}`);
      if (errors.length) toast.error(errors.slice(0, 3).join(" · "));
      refresh();
    } catch (e) {
      toast.error("Não foi possível importar: " + (e as Error).message);
    } finally { setImporting(false); if (fileRef.current) fileRef.current.value = ""; }
  };

  const remove = async (r: Row) => {
    if (!confirm("Excluir esta questão?")) return;
    const { error } = await supabase.from("chem_questions").delete().eq("id", r.id);
    if (error) return toast.error(error.message);
    refresh();
  };

  return (
    <section className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-2xl font-black flex items-center gap-2"><BookOpen className="text-primary" /> Banco de Questões</h2>
          <p className="text-sm text-muted-foreground">{loading ? "Carregando…" : `${rows.length} questões cadastradas`}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => setDiscOpen(true)}><Settings2 className="mr-1 h-4 w-4" /> Disciplinas</Button>
          <Button variant="outline" onClick={() => setTab("importar")}><Upload className="mr-1 h-4 w-4" /> Importar</Button>
          <Button onClick={() => { setEditing(null); setEditorOpen(true); }}><Plus className="mr-1 h-4 w-4" /> Nova Questão</Button>
        </div>
      </div>

      <Tabs value={tab} onValueChange={setTab} className="space-y-4">
        <TabsList className="flex flex-wrap h-auto justify-start">
          <TabsTrigger value="lista">📋 Questões ({rows.length})</TabsTrigger>
          <TabsTrigger value="assuntos">📚 Por assunto</TabsTrigger>
          <TabsTrigger value="gerar">✨ Gerar com IA</TabsTrigger>
          <TabsTrigger value="importar">📥 Importar</TabsTrigger>
        </TabsList>

      <TabsContent value="gerar">
      <div className="rounded-xl border bg-gradient-to-r from-primary/10 via-background to-accent/30 p-4">
        <h3 className="font-bold text-lg flex items-center gap-2 mb-3"><Sparkles className="h-5 w-5 text-primary" /> Gerar Questões com IA</h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 items-end">
          <div><Label>Quantidade</Label><Input type="number" min={1} max={25} value={gen.count} onChange={(e) => setGen({ ...gen, count: Number(e.target.value) })} /></div>
          <div><Label>Nível de Ensino</Label>
            <select className={sel} value={gen.level} onChange={(e) => setGen({ ...gen, level: e.target.value })}>
              {LEVELS.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select></div>
          <div><Label>Disciplina</Label>
            <select className={sel} value={gen.disc} onChange={(e) => setGen({ ...gen, disc: e.target.value })}>
              {disciplines.map((d) => <option key={d.key} value={d.key}>{d.label}</option>)}
            </select></div>
          <div><Label>Tipo de Jogo</Label>
            <select className={sel} value={gen.game} onChange={(e) => setGen({ ...gen, game: e.target.value })}>
              {GAME_TYPES.map((g) => <option key={g.key} value={g.key}>{g.label}</option>)}
            </select></div>
          <div><Label>Dificuldade</Label>
            <select className={sel} value={gen.difficulty} onChange={(e) => setGen({ ...gen, difficulty: Number(e.target.value) })}>
              {DIFFICULTIES.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
            </select></div>
          <Button onClick={generate} disabled={generating}>
            {generating ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : <Sparkles className="mr-1 h-4 w-4" />} Gerar
          </Button>
        </div>
      </div>

      </TabsContent>

      <TabsContent value="importar" className="space-y-3">
      <div className="rounded-xl border p-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <FileText className="h-6 w-6 text-primary" />
          <div><div className="font-bold">Importar Questões</div><div className="text-xs text-muted-foreground">CSV, XLSX ou JSON — com disciplina e jogos de cada questão</div></div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={downloadTemplate}><FileDown className="mr-1 h-4 w-4" /> Baixar Modelo</Button>
          <Button variant="outline" disabled={importing} onClick={() => fileRef.current?.click()}>
            {importing ? <Loader2 className="mr-1 h-4 w-4 animate-spin" /> : <Upload className="mr-1 h-4 w-4" />} Importar Arquivo
          </Button>
          <input ref={fileRef} type="file" accept=".csv,.xlsx,.json" className="hidden" onChange={(e) => e.target.files?.[0] && importFile(e.target.files[0])} />
        </div>
      </div>

      <div className="rounded-xl border p-4 text-sm space-y-1">
        <div className="font-bold">Colunas do arquivo</div>
        <p className="text-muted-foreground">disciplina · nivel (fundamental, medio, olimpiada, superior) · dificuldade (1 a 5) · assunto · jogos (separados por vírgula, ex.: quiz,forca) · pergunta · opcao_a a opcao_d · resposta · dica · explicacao</p>
      </div>
      </TabsContent>

      <TabsContent value="lista" className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-2">
        <Input placeholder="Buscar questões…" value={q} onChange={(e) => setQ(e.target.value)} />
        <select className={sel} value={disc} onChange={(e) => setDisc(e.target.value)}>
          <option value="">Todas Disciplinas</option>
          {disciplines.map((d) => <option key={d.key} value={d.key}>{d.label}</option>)}
        </select>
        <select className={sel} value={game} onChange={(e) => setGame(e.target.value)}>
          <option value="">Todos Jogos</option>
          {GAME_TYPES.map((g) => <option key={g.key} value={g.key}>{g.label}</option>)}
        </select>
        <select className={sel} value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="">Todos Níveis</option>
          {LEVELS.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
        </select>
      </div>
      <div className="text-sm font-bold">{loading ? "Carregando…" : `${list.length} de ${rows.length} questões`}</div>

      <div className="max-h-[640px] overflow-auto space-y-2 pr-1">
        {list.slice(0, 300).map((r) => {
          const opts = Array.isArray(r.options) ? (r.options as string[]) : [];
          const d = r.discipline ? discMap.get(r.discipline) : undefined;
          const marked = r.games?.length > 0;
          return (
            <div key={r.id} className="rounded-xl border bg-card p-3">
              <div className="flex items-start gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1 mb-2 text-xs font-semibold">
                    <span className="px-2 py-0.5 rounded text-primary-foreground" style={{ background: d?.color ?? "hsl(var(--muted-foreground))" }}>{d?.label ?? "Sem disciplina"}</span>
                    <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{diffLabel(r.difficulty)}</span>
                    <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground">{levelLabel(r.school_level)}</span>
                    <span className="px-2 py-0.5 rounded border">{questionPoints(r.difficulty)} pts</span>
                    {r.topic && <span className="px-2 py-0.5 rounded border">{r.topic}</span>}
                  </div>
                  <div className="font-bold">{r.question}</div>
                  <div className="text-sm text-primary mt-1">Resposta: <b>{r.answer_text || opts[r.correct_index]}</b></div>
                  {r.hint && <div className="text-xs text-muted-foreground">Dica: {r.hint}</div>}
                  <div className="text-xs mt-1">
                    🎮 {marked ? "Marcada para: " : "Automático: "}
                    {r.gameList.length
                      ? r.gameList.slice(0, 4).map(gameLabel).join(" · ") + (r.gameList.length > 4 ? ` +${r.gameList.length - 4} jogos` : "")
                      : "nenhum jogo"}
                  </div>
                </div>
                <Button size="icon" variant="ghost" aria-label="Editar" onClick={() => { setEditing(r); setEditorOpen(true); }}><Pencil className="h-4 w-4" /></Button>
                <Button size="icon" variant="ghost" aria-label="Excluir" onClick={() => remove(r)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
              </div>
            </div>
          );
        })}
        {list.length > 300 && <div className="text-xs text-muted-foreground">Mostrando 300 — use os filtros para refinar.</div>}
      </div>

      </TabsContent>

      <TabsContent value="assuntos">
        <QuestionBankByTopic userId={userId} revision={revision + tick} embedded onChanged={onChanged} />
      </TabsContent>
      </Tabs>

      <QuestionEditorDialog open={editorOpen} onOpenChange={setEditorOpen} value={editing}
        disciplines={disciplines} userId={userId} onSaved={refresh} />
      <DisciplinesDialog open={discOpen} onOpenChange={setDiscOpen} list={disciplines}
        onChanged={() => { loadDisciplines(); refresh(); }} />
    </section>
  );
}

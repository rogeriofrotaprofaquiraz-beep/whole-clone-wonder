import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { areaMeta, genCode, LEVELS } from "@/lib/aula";
import { BookOpen, Trophy, Medal, ChevronDown, ChevronUp } from "lucide-react";

type Q = { id: string; question: string; options: any; correct_index: number; explanation: string | null; area: string; difficulty: number; school_level: string; topic: string | null; lesson: string | null };
type Group = { key: string; area: string; items: Q[] };

/** Banco de questões agrupado por assunto, com envio para campeonato (sala) ou olimpíada. */
export function QuestionBankByTopic({ userId }: { userId: string }) {
  const navigate = useNavigate();
  const [qs, setQs] = useState<Q[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [olympiads, setOlympiads] = useState<{ id: string; acronym: string; name: string }[]>([]);
  const [olyDialog, setOlyDialog] = useState<Group | null>(null);
  const [olyId, setOlyId] = useState("");
  const [olyTitle, setOlyTitle] = useState("");

  useEffect(() => {
    supabase.from("chem_questions").select("id,question,options,correct_index,explanation,area,difficulty,school_level,topic,lesson")
      .order("created_at", { ascending: false }).limit(1000).then(({ data }) => setQs((data ?? []) as Q[]));
    supabase.from("olympiads").select("id,acronym,name").order("acronym").then(({ data }) => setOlympiads(data ?? []));
  }, []);

  const groups = useMemo(() => {
    const m = new Map<string, Group>();
    for (const q of qs) {
      const key = (q.lesson || q.topic || "Sem assunto").trim();
      if (!m.has(key)) m.set(key, { key, area: q.area, items: [] });
      m.get(key)!.items.push(q);
    }
    const s = search.toLowerCase();
    return [...m.values()].filter((g) => !s || g.key.toLowerCase().includes(s))
      .sort((a, b) => a.key.localeCompare(b.key, "pt-BR", { numeric: true }));
  }, [qs, search]);

  const pickIds = (g: Group) => {
    const chosen = g.items.filter((q) => selected.has(q.id));
    return (chosen.length ? chosen : g.items).sort((a, b) => a.difficulty - b.difficulty);
  };

  const toChampionship = async (g: Group) => {
    const list = pickIds(g);
    const code = genCode();
    const { data, error } = await supabase.from("game_sessions").insert({
      code, teacher_id: userId, mode: "quiz" as any, area: g.area as any,
      total_rounds: list.length, settings: { question_ids: list.map((q) => q.id), topic: g.key } as any,
    }).select().single();
    if (error) return toast.error(error.message);
    toast.success(`Campeonato criado: ${code}`);
    navigate(`/aula/sala/${data.code}?host=1`);
  };

  const toOlympiad = async () => {
    if (!olyDialog || !olyId) return toast.error("Escolha a olimpíada");
    const list = pickIds(olyDialog);
    const questions = list.map((q) => ({ q: q.question, options: Array.isArray(q.options) ? q.options : [], correct: q.correct_index, explanation: q.explanation ?? undefined }));
    const { error } = await supabase.from("olympiad_exams").insert({
      olympiad_id: olyId, title: olyTitle || olyDialog.key, source: "banco", questions: questions as any, created_by: userId,
    } as any);
    if (error) return toast.error(error.message);
    toast.success(`Prova com ${questions.length} questões enviada para a olimpíada`);
    setOlyDialog(null);
  };

  const toggle = (id: string) => setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <Card className="p-6">
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2"><BookOpen className="text-primary" /> Questões por assunto</h3>
      <p className="text-xs text-muted-foreground mb-3">Abra um assunto, marque as questões (ou deixe sem marcar para usar todas) e envie para um campeonato ou olimpíada.</p>
      <Input placeholder="Buscar assunto…" value={search} onChange={(e) => setSearch(e.target.value)} className="mb-3" />
      {!groups.length && <div className="text-sm text-muted-foreground">Nenhuma questão gerada ainda.</div>}
      <div className="space-y-2 max-h-[520px] overflow-y-auto">
        {groups.map((g) => {
          const m = areaMeta(g.area);
          const isOpen = open === g.key;
          const nSel = g.items.filter((q) => selected.has(q.id)).length;
          return (
            <div key={g.key} className="border rounded-lg">
              <div className="flex flex-wrap items-center gap-2 p-3">
                <button className="flex-1 min-w-[180px] text-left font-semibold flex items-center gap-2" onClick={() => setOpen(isOpen ? null : g.key)}>
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />} {m.emoji} {g.key}
                  <Badge variant="secondary">{g.items.length}</Badge>
                  {nSel > 0 && <Badge>{nSel} marcadas</Badge>}
                </button>
                <Button size="sm" variant="outline" onClick={() => toChampionship(g)}><Trophy size={14} className="mr-1" />Campeonato</Button>
                <Button size="sm" variant="outline" onClick={() => { setOlyDialog(g); setOlyTitle(g.key); }}><Medal size={14} className="mr-1" />Olimpíada</Button>
              </div>
              {isOpen && (
                <div className="border-t p-3 space-y-1">
                  {g.items.sort((a, b) => a.difficulty - b.difficulty).map((q) => (
                    <label key={q.id} className="flex items-start gap-2 text-sm py-1">
                      <input type="checkbox" checked={selected.has(q.id)} onChange={() => toggle(q.id)} className="mt-1" />
                      <span className="flex-1">{q.question}</span>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{"★".repeat(q.difficulty)} · {LEVELS.find((l) => l.value === q.school_level)?.label ?? q.school_level}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Dialog open={!!olyDialog} onOpenChange={(o) => !o && setOlyDialog(null)}>
        <DialogContent>
          <DialogHeader><DialogTitle>Enviar para olimpíada</DialogTitle></DialogHeader>
          <div className="space-y-3">
            <select className="w-full border rounded-md p-2 text-sm bg-background" value={olyId} onChange={(e) => setOlyId(e.target.value)}>
              <option value="">— Escolha a olimpíada —</option>
              {olympiads.map((o) => <option key={o.id} value={o.id}>{o.acronym} — {o.name}</option>)}
            </select>
            <Input value={olyTitle} onChange={(e) => setOlyTitle(e.target.value)} placeholder="Nome da prova" />
            <div className="text-xs text-muted-foreground">{olyDialog && pickIds(olyDialog).length} questões serão enviadas.</div>
            <Button className="w-full" onClick={toOlympiad}>Criar prova</Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

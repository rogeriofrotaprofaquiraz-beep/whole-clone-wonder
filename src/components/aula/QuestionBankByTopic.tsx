import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { areaMeta, genCode, LEVELS, AREAS, DIFFICULTIES } from "@/lib/aula";
import { BookOpen, Trophy, Medal, ChevronDown, ChevronUp, Pencil, ImagePlus } from "lucide-react";
import { SlideEditor } from "./SlideEditor";
import { groupQuestionsByTopic, questionPlacement } from "@/lib/questionTopics";
import { usePermission } from "@/lib/permissions";

type Q = { id: string; question: string; options: any; correct_index: number; explanation: string | null; area: string; difficulty: number; school_level: string; topic: string | null; lesson: string | null; image_url: string | null; school_levels: string[] | null; slide_content: string | null };
type Group = { id: string; key: string; area: string; items: Q[] };

/** Banco de questões agrupado por assunto, com envio para campeonato (sala) ou olimpíada. */
export function QuestionBankByTopic({ userId, revision = 0, embedded = false, onChanged }: { userId: string; revision?: number; embedded?: boolean; onChanged?: () => void }) {
  const navigate = useNavigate();
  const [qs, setQs] = useState<Q[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [olympiads, setOlympiads] = useState<{ id: string; acronym: string; name: string }[]>([]);
  const [olyDialog, setOlyDialog] = useState<Group | null>(null);
  const [olyId, setOlyId] = useState("");
  const [olyTitle, setOlyTitle] = useState("");
  const [edit, setEdit] = useState<Q | null>(null);
  const [areaFilter, setAreaFilter] = useState("");
  const [moving, setMoving] = useState<Group | null>(null);
  const [targetArea, setTargetArea] = useState("geral");
  const [targetTopic, setTargetTopic] = useState("");
  const [saving, setSaving] = useState(false);
  const perm = usePermission("painel_professor");

  const uploadImage = async (q: Q, file: File) => {
    if (!perm.edit) return toast.error("Seu perfil não tem permissão para editar questões.");
    const path = `questions/${q.id}-${Date.now()}.${file.name.split(".").pop()}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file);
    if (error) return toast.error(error.message);
    const { data: signed } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365 * 10);
    const url = signed?.signedUrl ?? null;
    if (edit && edit.id === q.id) setEdit({ ...edit, image_url: url });
    else await saveQ({ ...q, image_url: url });
  };

  const saveQ = async (q: Q) => {
    if (!perm.edit) return toast.error("Seu perfil não tem permissão para editar questões.");
    setSaving(true);
    const { error } = await supabase.from("chem_questions").update({
      ...questionPlacement(q.area, q.topic ?? q.lesson ?? ""), question: q.question, options: q.options, correct_index: q.correct_index, explanation: q.explanation,
      difficulty: q.difficulty, school_level: (q.school_levels?.[0] ?? q.school_level), school_levels: q.school_levels?.length ? q.school_levels : [q.school_level], slide_content: q.slide_content, image_url: q.image_url,
    } as any).eq("id", q.id);
    setSaving(false);
    if (error) return toast.error(error.message);
    setQs((all) => all.map((x) => (x.id === q.id ? q : x)));
    onChanged?.();
    toast.success("Questão salva");
    setEdit(null);
  };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const all: Q[] = [];
      for (let from = 0; ; from += 1000) {
        const { data, error } = await supabase.from("chem_questions")
          .select("id,question,options,correct_index,explanation,area,difficulty,school_level,topic,lesson,image_url,school_levels,slide_content")
          .order("id").range(from, from + 999);
        if (error) { toast.error(error.message); return; }
        all.push(...((data ?? []) as Q[]));
        if (!data || data.length < 1000) break;
      }
      if (!cancelled) setQs(all);
    })();
    supabase.from("olympiads").select("id,acronym,name").order("acronym").then(({ data }) => setOlympiads(data ?? []));
    return () => { cancelled = true; };
  }, [revision]);

  const groups = useMemo(() => {
    const term = search.toLocaleLowerCase("pt-BR");
    return groupQuestionsByTopic(qs).filter(g => (!areaFilter || g.area === areaFilter) &&
      (!term || g.key.toLocaleLowerCase("pt-BR").includes(term) || g.items.some(q => q.question.toLocaleLowerCase("pt-BR").includes(term))));
  }, [qs, search, areaFilter]);

  const moveQuestions = async () => {
    if (!moving || !perm.edit || !targetTopic.trim()) return;
    setSaving(true);
    const placement = questionPlacement(targetArea, targetTopic);
    const ids = pickIds(moving).map(q => q.id);
    const { error } = await supabase.from("chem_questions").update(placement as any).in("id", ids);
    setSaving(false);
    if (error) return toast.error(error.message);
    setQs(all => all.map(q => ids.includes(q.id) ? { ...q, ...placement } : q));
    setSelected(new Set()); setMoving(null); onChanged?.();
    toast.success("Questões movidas para o assunto escolhido");
  };

  const deleteQuestion = async (q: Q) => {
    if (!perm.remove || !confirm("Excluir esta questão do banco?")) return;
    const { error } = await supabase.from("chem_questions").delete().eq("id", q.id);
    if (error) return toast.error(error.message);
    setQs(all => all.filter(item => item.id !== q.id)); onChanged?.();
    toast.success("Questão excluída");
  };

  const pickIds = (g: Group) => {
    const chosen = g.items.filter((q) => selected.has(q.id));
    return [...(chosen.length ? chosen : g.items)].sort((a, b) => a.difficulty - b.difficulty);
  };

  const toChampionship = async (g: Group) => {
    if (!perm.create) return toast.error("Seu perfil não tem permissão para criar campeonatos.");
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
    if (!perm.create) return toast.error("Seu perfil não tem permissão para criar provas.");
    if (!olyDialog || !olyId) return toast.error("Escolha a olimpíada");
    const list = pickIds(olyDialog);
    const questions = list.map((q: any) => ({ q: q.question, options: Array.isArray(q.options) ? q.options : [], correct: q.correct_index, explanation: q.explanation ?? undefined, slide: q.slide_content ?? undefined, image: q.image_url ?? undefined }));
    const { error } = await supabase.from("olympiad_exams").insert({
      olympiad_id: olyId, title: olyTitle || olyDialog.key, source: "banco", questions: questions as any, created_by: userId,
    } as any);
    if (error) return toast.error(error.message);
    toast.success(`Prova com ${questions.length} questões enviada para a olimpíada`);
    setOlyDialog(null);
  };

  const toggle = (id: string) => setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });

  return (
    <section className={embedded ? "space-y-3 border-t pt-4" : "space-y-3"}>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2"><BookOpen className="text-primary" /> Questões por assunto</h3>
      <select aria-label="Área das questões por assunto" className="border rounded-md p-2 bg-background text-sm max-w-full" value={areaFilter} onChange={e => setAreaFilter(e.target.value)}><option value="">Todas as áreas</option>{AREAS.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}</select>
      <Input placeholder="Buscar assunto…" value={search} onChange={(e) => setSearch(e.target.value)} className="mb-3" />
      {!groups.length && <div className="text-sm text-muted-foreground">Nenhuma questão gerada ainda.</div>}
      <div className="space-y-2 max-h-[520px] overflow-y-auto">
        {groups.map((g) => {
          const m = areaMeta(g.area);
          const isOpen = open === g.id;
          const nSel = g.items.filter((q) => selected.has(q.id)).length;
          return (
            <div key={g.id} className="border rounded-lg">
              <div className="flex flex-wrap items-center gap-2 p-3">
                <Button variant="ghost" className="flex-1 min-w-0 h-auto whitespace-normal justify-start text-left font-semibold flex items-center gap-2" onClick={() => setOpen(isOpen ? null : g.id)}>
                  {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />} {m.emoji} {g.key}
                  <Badge variant="secondary">{g.items.length}</Badge>
                  {nSel > 0 && <Badge>{nSel} marcadas</Badge>}
                </Button>
                <Badge variant="outline">{m.label}</Badge>
                {perm.edit && <Button size="sm" variant="outline" onClick={() => { setMoving(g); setTargetArea(g.area); setTargetTopic(g.key === "Sem assunto" ? "" : g.key); }}>Mover / assunto</Button>}
                <Button size="sm" variant="outline" onClick={() => toChampionship(g)}><Trophy size={14} className="mr-1" />Campeonato</Button>
                <Button size="sm" variant="outline" onClick={() => { setOlyDialog(g); setOlyTitle(g.key); }}><Medal size={14} className="mr-1" />Olimpíada</Button>
              </div>
              {isOpen && (
                <div className="border-t p-3 space-y-1">
                  {[...g.items].sort((a, b) => a.difficulty - b.difficulty).map((q) => (
                    <div key={q.id} className="flex flex-wrap items-start gap-2 text-sm py-1">
                      <input type="checkbox" checked={selected.has(q.id)} onChange={() => toggle(q.id)} className="mt-1" />
                      {q.image_url && <img src={q.image_url} alt="" className="w-10 h-10 object-cover rounded" />}
                      <span className="flex-1 min-w-[160px] break-words">{q.question}</span>
                      <label className="cursor-pointer text-muted-foreground hover:text-foreground" title="Adicionar imagem">
                        <ImagePlus size={16} />
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => e.target.files?.[0] && uploadImage(q, e.target.files[0])} />
                      </label>
                      <Button variant="ghost" size="icon" disabled={!perm.edit} type="button" title="Editar questão" onClick={(e) => { e.preventDefault(); setEdit({ ...q, options: Array.isArray(q.options) ? [...q.options] : [] }); }} className="text-muted-foreground hover:text-foreground"><Pencil size={16} /></Button>
                      {perm.remove && <Button variant="ghost" size="sm" onClick={() => deleteQuestion(q)}>Excluir</Button>}
                      <span className="text-xs text-muted-foreground">{"★".repeat(q.difficulty)} · {(q.school_levels?.length ? q.school_levels : [q.school_level]).map((v) => LEVELS.find((l) => l.value === v)?.label ?? v).join(", ")}{q.slide_content ? " · 🖥️ slide" : ""}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Dialog open={!!moving} onOpenChange={o => !o && setMoving(null)}>
        <DialogContent><DialogHeader><DialogTitle>Mover questões para área e assunto</DialogTitle></DialogHeader>
          <select aria-label="Área de destino" className="border rounded-md p-2 bg-background" value={targetArea} onChange={e => setTargetArea(e.target.value)}>{AREAS.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}</select>
          <Input aria-label="Assunto de destino" placeholder="Assunto de destino" value={targetTopic} onChange={e => setTargetTopic(e.target.value)} />
          <p className="text-sm text-muted-foreground">{moving ? pickIds(moving).length : 0} questões selecionadas</p>
          <Button disabled={saving || !targetTopic.trim()} onClick={moveQuestions}>Mover questões</Button>
        </DialogContent>
      </Dialog>
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
      <Dialog open={!!edit} onOpenChange={(o) => !o && setEdit(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Editar questão</DialogTitle></DialogHeader>
          {edit && (
            <div className="space-y-3 text-sm">
              <textarea className="w-full border rounded-md p-2 bg-background" rows={3} value={edit.question} onChange={(e) => setEdit({ ...edit, question: e.target.value })} />
              {(edit.options as string[]).map((o, k) => (
                <div key={k} className="flex items-center gap-2">
                  <input type="radio" checked={edit.correct_index === k} onChange={() => setEdit({ ...edit, correct_index: k })} title="Resposta certa" />
                  <Input value={o} onChange={(e) => setEdit({ ...edit, options: (edit.options as string[]).map((x, j) => (j === k ? e.target.value : x)) })} />
                </div>
              ))}
              <textarea className="w-full border rounded-md p-2 bg-background" rows={2} placeholder="Explicação" value={edit.explanation ?? ""} onChange={(e) => setEdit({ ...edit, explanation: e.target.value || null })} />
              <select aria-label="Área da questão" className="w-full border rounded-md p-2 bg-background" value={edit.area} onChange={e => setEdit({ ...edit, area: e.target.value })}>{AREAS.map(a => <option key={a.value} value={a.value}>{a.label}</option>)}</select>
              <Input aria-label="Assunto da questão" placeholder="Assunto" value={edit.topic ?? edit.lesson ?? ""} onChange={(e) => setEdit({ ...edit, topic: e.target.value || null })} />
              <div className="grid grid-cols-2 gap-2">
                <select className="border rounded-md p-2 bg-background" value={edit.difficulty} onChange={(e) => setEdit({ ...edit, difficulty: +e.target.value })}>
                  {[1, 2, 3, 4, 5].map((d) => <option key={d} value={d}>{DIFFICULTIES.find(item => item.value === d)?.label} ({d})</option>)}
                </select>
                <div className="flex flex-wrap gap-2 items-center">
                  {LEVELS.map((l) => {
                    const cur = edit.school_levels?.length ? edit.school_levels : [edit.school_level];
                    const on = cur.includes(l.value);
                    return (
                      <label key={l.value} className="flex items-center gap-1 text-xs">
                        <input type="checkbox" checked={on} onChange={() => {
                          const next = on ? cur.filter((x) => x !== l.value) : [...cur, l.value];
                          if (!next.length) return;
                          setEdit({ ...edit, school_levels: next, school_level: next[0] });
                        }} />{l.label}
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Slide de conteúdo (aparece antes da questão)</div>
                <SlideEditor value={edit.slide_content} image={edit.image_url} onChange={(v) => setEdit({ ...edit, slide_content: v })} />
              </div>
              <div className="space-y-1">
                <div className="font-semibold">Imagem</div>
                {edit.image_url && <img src={edit.image_url} alt="" className="max-h-40 rounded" />}
                <div className="flex gap-2">
                  <Input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && uploadImage(edit, e.target.files[0])} />
                  {edit.image_url && <Button variant="outline" size="sm" onClick={() => setEdit({ ...edit, image_url: null })}>Remover</Button>}
                </div>
              </div>
              <Button className="w-full" disabled={saving} onClick={() => saveQ(edit)}>{saving ? "Salvando…" : "Salvar"}</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

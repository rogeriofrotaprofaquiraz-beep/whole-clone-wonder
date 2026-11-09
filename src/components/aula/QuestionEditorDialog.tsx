import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { LEVELS, DIFFICULTIES } from "@/lib/aula";
import { GAME_TYPES, autoGames } from "@/lib/questionGames";
import type { Discipline } from "@/lib/questionImport";

export type BankQuestion = {
  id?: string; area: string; discipline: string | null; topic: string | null; subcategory: string | null;
  difficulty: number; question: string; options: unknown; correct_index: number; answer_text: string | null;
  school_level: string; games: string[]; hint: string | null; explanation: string | null; time_limit: number;
};

const empty = (d?: Discipline): BankQuestion => ({
  area: d?.area ?? "geral", discipline: d?.key ?? null, topic: null, subcategory: null, difficulty: 2,
  question: "", options: ["", "", "", ""], correct_index: 0, answer_text: "", school_level: "medio",
  games: [], hint: "", explanation: "", time_limit: 30,
});

const sel = "border border-input rounded-md px-2 h-9 text-sm bg-background w-full";

export function QuestionEditorDialog({ open, onOpenChange, value, disciplines, userId, onSaved }: {
  open: boolean; onOpenChange: (v: boolean) => void; value: BankQuestion | null;
  disciplines: Discipline[]; userId: string; onSaved: () => void;
}) {
  const [q, setQ] = useState<BankQuestion>(empty());
  useEffect(() => {
    if (!open) return;
    const base = value ?? empty(disciplines[0]);
    const opts = Array.isArray(base.options) ? (base.options as string[]).map(String) : [];
    while (opts.length < 4) opts.push("");
    setQ({ ...base, options: opts, answer_text: base.answer_text || opts[base.correct_index] || "" });
  }, [open, value, disciplines]);

  const opts = q.options as string[];
  const set = (p: Partial<BankQuestion>) => setQ((x) => ({ ...x, ...p }));
  const toggleGame = (k: string) => set({ games: q.games.includes(k) ? q.games.filter((g) => g !== k) : [...q.games, k] });

  const save = async () => {
    if (!q.question.trim()) return toast.error("Escreva a pergunta");
    const answer = (q.answer_text ?? "").trim();
    if (!answer) return toast.error("Informe a resposta correta");
    let options = opts.map((o) => o.trim()).filter(Boolean);
    let idx = options.findIndex((o) => o.toLowerCase() === answer.toLowerCase());
    if (idx < 0) { options = [answer, ...options].slice(0, 4); idx = 0; }
    const d = disciplines.find((x) => x.key === q.discipline);
    const row = {
      area: (d?.area ?? q.area) as never, discipline: q.discipline, topic: q.topic || null, lesson: q.topic || null,
      subcategory: q.subcategory || null, difficulty: q.difficulty, question: q.question.trim(), options,
      correct_index: idx, answer_text: answer, school_level: q.school_level, school_levels: [q.school_level],
      games: q.games, hint: q.hint || null, explanation: q.explanation || null, time_limit: q.time_limit || 30,
    };
    const { error } = q.id
      ? await supabase.from("chem_questions").update(row).eq("id", q.id)
      : await supabase.from("chem_questions").insert({ ...row, created_by: userId });
    if (error) return toast.error(error.message);
    toast.success("Questão salva"); onOpenChange(false); onSaved();
  };

  const auto = autoGames({ ...q, options: opts.filter(Boolean).length ? opts : [q.answer_text ?? ""] });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
        <DialogHeader><DialogTitle>{q.id ? "Editar Questão" : "Nova Questão"}</DialogTitle></DialogHeader>
        <div className="grid grid-cols-2 gap-3">
          <div><Label>Disciplina</Label>
            <select className={sel} value={q.discipline ?? ""} onChange={(e) => set({ discipline: e.target.value || null })}>
              <option value="">Sem disciplina</option>
              {disciplines.map((d) => <option key={d.key} value={d.key}>{d.label}</option>)}
            </select></div>
          <div><Label>Nível de Ensino</Label>
            <select className={sel} value={q.school_level} onChange={(e) => set({ school_level: e.target.value })}>
              {LEVELS.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select></div>
          <div><Label>Dificuldade</Label>
            <select className={sel} value={q.difficulty} onChange={(e) => set({ difficulty: Number(e.target.value) })}>
              {DIFFICULTIES.map((d) => <option key={d.value} value={d.value}>{d.value}★ {d.label}</option>)}
            </select></div>
          <div><Label>Tempo Limite (segundos)</Label>
            <Input type="number" min={5} value={q.time_limit} onChange={(e) => set({ time_limit: Number(e.target.value) })} /></div>
          <div><Label>Assunto</Label>
            <Input placeholder="Ex: Tabela Periódica" value={q.topic ?? ""} onChange={(e) => set({ topic: e.target.value })} /></div>
          <div><Label>Subcategoria</Label>
            <Input placeholder="Ex: Hidrocarbonetos" value={q.subcategory ?? ""} onChange={(e) => set({ subcategory: e.target.value })} /></div>
        </div>
        <div><Label>Pergunta / Dica</Label>
          <textarea rows={3} className="w-full rounded-md border border-input bg-background p-2 text-sm" value={q.question} onChange={(e) => set({ question: e.target.value })} /></div>
        <div><Label>Resposta Correta</Label>
          <Input value={q.answer_text ?? ""} onChange={(e) => set({ answer_text: e.target.value })} /></div>
        <div><Label>Opções (Quiz)</Label>
          <div className="grid grid-cols-2 gap-2">
            {opts.map((o, i) => (
              <Input key={i} placeholder={`Opção ${"ABCD"[i]}`} value={o}
                onChange={(e) => { const n = [...opts]; n[i] = e.target.value; set({ options: n }); }} />
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">Se a resposta correta não estiver nas opções, ela entra como a primeira.</p>
        </div>
        <div>
          <Label>🎮 Jogos em que esta questão pode aparecer</Label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 mt-1">
            {GAME_TYPES.map((g) => (
              <label key={g.key} className="flex items-center gap-2 text-sm border rounded-md px-2 py-1 cursor-pointer hover:bg-muted">
                <input type="checkbox" checked={q.games.includes(g.key)} onChange={() => toggleGame(g.key)} />
                {g.label}
              </label>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {q.games.length ? `Marcada para ${q.games.length} jogo(s).` : `Nenhum marcado: vai automaticamente para ${auto.length} jogo(s) que combinam com o formato da questão.`}
          </p>
        </div>
        <div><Label>Dica Adicional</Label>
          <Input value={q.hint ?? ""} onChange={(e) => set({ hint: e.target.value })} /></div>
        <div><Label>Explicação</Label>
          <textarea rows={3} className="w-full rounded-md border border-input bg-background p-2 text-sm" value={q.explanation ?? ""} onChange={(e) => set({ explanation: e.target.value })} /></div>
        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancelar</Button>
          <Button onClick={save}>Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

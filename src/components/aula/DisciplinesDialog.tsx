import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { AREAS } from "@/lib/aula";
import type { Discipline } from "@/lib/questionImport";
import { parseTopicList } from "@/lib/parseTopicList";

const slug = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

export function DisciplinesDialog({ open, onOpenChange, list, onChanged }: {
  open: boolean; onOpenChange: (v: boolean) => void; list: Discipline[]; onChanged: () => void;
}) {
  const [edit, setEdit] = useState<Discipline | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [topicsText, setTopicsText] = useState("");

  const save = async () => {
    if (!edit?.label.trim()) return toast.error("Digite o nome da disciplina");
    const topics = parseTopicList(topicsText);
    const row = { ...edit, label: edit.label.trim(), area: edit.area as never, topics };
    const { error } = isNew
      ? await supabase.from("question_disciplines").insert({ ...row, key: slug(row.label) || crypto.randomUUID().slice(0, 8), sort: list.length + 1 })
      : await supabase.from("question_disciplines").update({ label: row.label, area: row.area, color: row.color, topics }).eq("key", edit.key);
    if (error) return toast.error(error.message);
    toast.success("Disciplina salva"); setEdit(null); onChanged();
  };

  const remove = async (d: Discipline) => {
    if (!confirm(`Excluir a disciplina "${d.label}"? As questões dela ficam sem disciplina, mas não são apagadas.`)) return;
    await supabase.from("chem_questions").update({ discipline: null }).eq("discipline", d.key);
    const { error } = await supabase.from("question_disciplines").delete().eq("key", d.key);
    if (error) return toast.error(error.message);
    toast.success("Disciplina excluída"); onChanged();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-auto">
        <DialogHeader><DialogTitle>📚 Disciplinas</DialogTitle></DialogHeader>
        <div className="space-y-1">
          {list.map((d) => (
            <div key={d.key} className="flex items-center gap-2 border rounded-md px-2 py-1.5 text-sm">
              <span className="w-3 h-3 rounded-full shrink-0" style={{ background: d.color }} />
              <span className="flex-1 font-semibold">{d.label}</span>
              <span className="text-xs text-muted-foreground">{(d.topics?.length ?? 0)} tópicos · {AREAS.find((a) => a.value === d.area)?.label}</span>
              <Button size="sm" variant="ghost" onClick={() => { setIsNew(false); setEdit({ ...d }); setTopicsText((d.topics ?? []).join("\n")); }}>✏️</Button>
              <Button size="sm" variant="ghost" onClick={() => remove(d)}>🗑️</Button>
            </div>
          ))}
        </div>
        {edit ? (
          <div className="border rounded-md p-3 space-y-2 bg-muted/40">
            <div className="text-sm font-bold">{isNew ? "Nova disciplina" : "Editar disciplina"}</div>
            <Input placeholder="Nome (ex.: Química Analítica)" value={edit.label} onChange={(e) => setEdit({ ...edit, label: e.target.value })} />
            <div className="flex gap-2 items-center">
              <select className="border rounded px-2 h-9 text-sm bg-background flex-1" value={edit.area} onChange={(e) => setEdit({ ...edit, area: e.target.value })}>
                {AREAS.map((a) => <option key={a.value} value={a.value}>Área: {a.label}</option>)}
              </select>
              <input type="color" aria-label="Cor" value={edit.color} onChange={(e) => setEdit({ ...edit, color: e.target.value })} className="h-9 w-12 rounded border" />
            </div>
            <div>
              <div className="text-xs font-semibold mb-1">Tópicos da disciplina (um por linha) — base para gerar as questões</div>
              <textarea className="w-full min-h-[140px] border rounded-md p-2 text-sm bg-background"
                placeholder={"1. Hidrocarbonetos\n2. Funções oxigenadas\n3. Isomeria"}
                value={topicsText} onChange={(e) => setTopicsText(e.target.value)} />
              <div className="text-xs text-muted-foreground">{parseTopicList(topicsText).length} tópicos · pode colar uma lista pronta</div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="outline" onClick={() => setEdit(null)}>Cancelar</Button>
              <Button onClick={save}>Salvar</Button>
            </div>
          </div>
        ) : (
          <Button onClick={() => { setIsNew(true); setTopicsText(""); setEdit({ key: "", label: "", area: "geral", color: "#059669", sort: 0 }); }}>＋ Adicionar disciplina</Button>
        )}
      </DialogContent>
    </Dialog>
  );
}

import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from "@dnd-kit/core";
import { SortableContext, arrayMove, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableStructureRow from "@/components/SortableStructureRow";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ClipboardPaste, Plus } from "lucide-react";
import { parseTopicList } from "@/lib/parseTopicList";

export type AutoItem = { key: string; label: string; ok: boolean; info: string; optional?: boolean };
type CfgItem = { key: string; label: string; optional?: boolean };

/** Lista de verificação editável pelo admin: inserir, renomear, excluir itens.
 *  Itens com chave de um item automático usam a verificação automática; os demais são marcados à mão. */
export default function EditableChecklistGrid({ scope, targetId, auto, onGoTo, onProgress }: {
  scope: "topic" | "course"; targetId: string; auto: AutoItem[];
  onGoTo?: (key: string) => void; onProgress?: (done: number, total: number) => void;
}) {
  const [cfg, setCfg] = useState<CfgItem[] | null>(null);
  const [checks, setChecks] = useState<Set<string>>(new Set());
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState<CfgItem[]>([]);
  const [newLabel, setNewLabel] = useState("");
  const [bulkOpen, setBulkOpen] = useState(false);
  const [bulkText, setBulkText] = useState("");
  const pastedTopics = parseTopicList(bulkText);
  const insertPastedTopics = () => {
    if (!pastedTopics.length) return;
    setDraft(items => [...items, ...pastedTopics.map(label => ({ key: `c_${crypto.randomUUID()}`, label }))]);
    setBulkText("");
    setBulkOpen(false);
  };
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 6 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates }),
  );
  const reorder = ({ active, over }: DragEndEvent) => {
    if (!over || active.id === over.id) return;
    setDraft(items => {
      const from = items.findIndex(item => item.key === active.id);
      const to = items.findIndex(item => item.key === over.id);
      return from < 0 || to < 0 ? items : arrayMove(items, from, to);
    });
  };

  useEffect(() => {
    (async () => {
      const [{ data: c }, { data: ch }] = await Promise.all([
        supabase.from("checklist_config").select("items").eq("scope", scope).maybeSingle(),
        supabase.from("checklist_checks").select("item_key").eq("target_id", targetId),
      ]);
      const items = (c as any)?.items;
      setCfg(Array.isArray(items) && items.length ? items : null);
      setChecks(new Set((ch ?? []).map((x: any) => x.item_key)));
    })();
  }, [scope, targetId]);

  const base: CfgItem[] = cfg ?? auto.map(a => ({ key: a.key, label: a.label, optional: a.optional }));
  const rows = base.map(it => {
    const a = auto.find(x => x.key === it.key);
    const ok = a ? a.ok : checks.has(it.key);
    return { ...it, ok, info: it.optional ? "opcional" : a ? a.info : ok ? "feito" : "marcar", manual: !a };
  });
  const req = rows.filter(r => !r.optional);
  const done = req.filter(r => r.ok).length;
  useEffect(() => { onProgress?.(done, req.length); }, [done, req.length]); // eslint-disable-line

  const toggleManual = async (key: string) => {
    const on = !checks.has(key);
    const { data: u } = await supabase.auth.getUser();
    const { error } = on
      ? await supabase.from("checklist_checks").insert({ target_id: targetId, item_key: key, checked_by: u.user?.id })
      : await supabase.from("checklist_checks").delete().eq("target_id", targetId).eq("item_key", key);
    if (error) { toast.error(error.message); return; }
    const n = new Set(checks); on ? n.add(key) : n.delete(key); setChecks(n);
  };

  const save = async () => {
    const clean = draft.filter(d => d.label.trim());
    const { error } = await supabase.from("checklist_config").upsert({ scope, items: clean as any, updated_at: new Date().toISOString() });
    if (error) { toast.error(error.message); return; }
    setCfg(clean); setEditing(false); toast.success("Checklist atualizado (vale para todos)");
  };
  const reset = async () => {
    if (!confirm("Voltar para a lista padrão?")) return;
    await supabase.from("checklist_config").delete().eq("scope", scope);
    setCfg(null); setEditing(false);
  };

  if (editing) {
    const missing = auto.filter(a => !draft.some(d => d.key === a.key));
    return (
      <div className="mb-4 space-y-1.5">
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={reorder}>
        <SortableContext items={draft.map(d => d.key)} strategy={verticalListSortingStrategy}>
        {draft.map((d, i) => (
          <SortableStructureRow key={d.key} id={d.key} label={d.label}>
            <button type="button" className="px-1 text-slate-500" disabled={i === 0} onClick={() => { const n = [...draft]; [n[i - 1], n[i]] = [n[i], n[i - 1]]; setDraft(n); }}>▲</button>
            <button type="button" className="px-1 text-slate-500" disabled={i === draft.length - 1} onClick={() => { const n = [...draft]; [n[i + 1], n[i]] = [n[i], n[i + 1]]; setDraft(n); }}>▼</button>
            <input value={d.label} onChange={e => setDraft(draft.map((x, j) => j === i ? { ...x, label: e.target.value } : x))} className="flex-1 border border-slate-300 rounded px-2 py-1 text-slate-800 bg-white" />
            <span className="text-[10px] text-slate-500 w-16">{auto.some(a => a.key === d.key) ? "automático" : "manual"}</span>
            <label className="flex items-center gap-1 text-slate-600"><input type="checkbox" checked={!!d.optional} onChange={e => setDraft(draft.map((x, j) => j === i ? { ...x, optional: e.target.checked } : x))} /> opcional</label>
            <button type="button" className="text-rose-600 px-2" onClick={() => setDraft(draft.filter((_, j) => j !== i))}>🗑️</button>
          </SortableStructureRow>
        ))}
        </SortableContext>
        </DndContext>
        <div className="pt-2">
          <Button type="button" size="sm" variant="outline" onClick={() => setBulkOpen(open => !open)} aria-expanded={bulkOpen}>
            <ClipboardPaste /> Colar vários tópicos
          </Button>
          {bulkOpen && (
            <div className="mt-2 space-y-2">
              <label htmlFor={`bulk-topics-${scope}-${targetId}`} className="text-xs font-medium text-foreground">Tópicos (um por linha)</label>
              <Textarea id={`bulk-topics-${scope}-${targetId}`} value={bulkText} onChange={e => setBulkText(e.target.value)} rows={7}
                placeholder={"Sólido\nLíquido\nGasoso\nPlasma"} />
              <div className="flex flex-wrap items-center gap-2">
                <Button type="button" size="sm" disabled={!pastedTopics.length} onClick={insertPastedTopics}>
                  <Plus /> Inserir tópicos{pastedTopics.length ? ` (${pastedTopics.length})` : ""}
                </Button>
                <Button type="button" size="sm" variant="ghost" onClick={() => { setBulkText(""); setBulkOpen(false); }}>Cancelar</Button>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2 pt-2">
          <input value={newLabel} onChange={e => setNewLabel(e.target.value)} placeholder="Nome do novo item" className="flex-1 border border-slate-300 rounded px-2 py-1 text-xs text-slate-800 bg-white" />
          <button type="button" className="text-xs px-3 py-1 rounded bg-violet-600 text-white" onClick={() => { if (!newLabel.trim()) return; setDraft([...draft, { key: "c_" + Date.now(), label: newLabel.trim() }]); setNewLabel(""); }}>➕ Inserir</button>
        </div>
        {missing.length > 0 && (
          <div className="flex flex-wrap gap-1 text-[11px] pt-1">
            <span className="text-slate-500">Recolocar automáticos:</span>
            {missing.map(m => <button type="button" key={m.key} className="px-2 rounded border border-slate-300 text-slate-700" onClick={() => setDraft([...draft, { key: m.key, label: m.label, optional: m.optional }])}>+ {m.label}</button>)}
          </div>
        )}
        <div className="flex gap-2 pt-2">
          <button type="button" className="text-xs px-3 py-1 rounded bg-emerald-600 text-white" onClick={save}>💾 Salvar checklist</button>
          <button type="button" className="text-xs px-3 py-1 rounded border border-slate-300 text-slate-700" onClick={() => setEditing(false)}>Cancelar</button>
          <button type="button" className="text-xs px-3 py-1 rounded border border-violet-300 text-violet-700 ml-auto" title="Reordena os itens na mesma ordem das seções da página, mantendo nomes editados e itens manuais no final"
            onClick={() => setDraft(d => [
              ...auto.map(a => d.find(x => x.key === a.key) ?? { key: a.key, label: a.label, optional: a.optional }),
              ...d.filter(x => !auto.some(a => a.key === x.key)),
            ])}>🔄 Alinhar à estrutura real</button>
          <button type="button" className="text-xs px-3 py-1 rounded border border-slate-300 text-slate-500" onClick={reset}>Restaurar padrão</button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="flex justify-end mb-1">
        <button type="button" className="text-[11px] px-2 py-0.5 rounded border border-violet-300 text-violet-700 hover:bg-violet-50" onClick={() => { setDraft(base); setEditing(true); }}>✏️ Editar itens do checklist</button>
      </div>
      <div className="grid sm:grid-cols-2 gap-1.5">
        {rows.map(it => (
          <button type="button" key={it.key} onClick={() => it.manual ? toggleManual(it.key) : onGoTo?.(it.key)} title={it.manual ? "Marcar / desmarcar" : "Ir para o campo"} className={`text-left flex items-center gap-2 text-xs px-2 py-1.5 rounded border hover:ring-2 hover:ring-violet-300 ${it.ok ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-rose-50 border-rose-200 text-rose-700"}`}>
            <span>{it.ok ? "✅" : "⬜"}</span>
            <span className="flex-1">{it.label}</span>
            <span className="text-[10px] opacity-70">{it.info}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

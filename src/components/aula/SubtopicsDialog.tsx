import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";

export type Subtopic = { id: string; title: string; content: string; image_url?: string; video_url?: string };

const uid = () => Math.random().toString(36).slice(2, 10);

export default function SubtopicsDialog({ open, onClose, slug, title, lesson, upload }: {
  open: boolean; onClose: () => void; slug: string; title: string; lesson: string;
  upload: (f: File) => Promise<string | null>;
}) {
  const [items, setItems] = useState<Subtopic[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    supabase.from("topic_overrides").select("subtopics").eq("slug", slug).maybeSingle()
      .then(({ data }) => setItems(((data as any)?.subtopics as Subtopic[]) ?? []));
  }, [open, slug]);

  const upd = (i: number, p: Partial<Subtopic>) => setItems(a => a.map((x, j) => j === i ? { ...x, ...p } : x));
  const move = (i: number, d: number) => setItems(a => {
    const j = i + d; if (j < 0 || j >= a.length) return a;
    const c = [...a]; [c[i], c[j]] = [c[j], c[i]]; return c;
  });

  const save = async () => {
    setSaving(true);
    const clean = items.filter(s => s.title.trim());
    const { error } = await supabase.from("topic_overrides")
      .upsert({ slug, title, lesson, subtopics: clean } as any, { onConflict: "slug" });
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Subtópicos salvos");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={o => !o && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-white text-slate-900">
        <DialogHeader><DialogTitle>🌿 Subtópicos — {title}</DialogTitle></DialogHeader>
        {items.length === 0 && <p className="text-sm italic text-slate-500">Nenhum subtópico ainda.</p>}
        <div className="space-y-3">
          {items.map((s, i) => (
            <div key={s.id} className="p-3 rounded-lg border border-violet-200 bg-violet-50/50 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-violet-800 w-8">{i + 1}</span>
                <Input value={s.title} placeholder="Nome do subtópico" onChange={e => upd(i, { title: e.target.value })} />
                <Button size="sm" variant="outline" onClick={() => move(i, -1)}><ArrowUp size={12} /></Button>
                <Button size="sm" variant="outline" onClick={() => move(i, 1)}><ArrowDown size={12} /></Button>
                <Button size="sm" variant="outline" className="text-red-600"
                  onClick={() => confirm(`Excluir "${s.title || "subtópico"}"?`) && setItems(a => a.filter((_, j) => j !== i))}>
                  <Trash2 size={12} />
                </Button>
              </div>
              <Textarea rows={4} value={s.content} placeholder="Conteúdo do subtópico" onChange={e => upd(i, { content: e.target.value })} />
              <div className="flex flex-wrap items-center gap-2">
                <Input className="flex-1 min-w-[200px]" value={s.image_url ?? ""} placeholder="URL da imagem (opcional)" onChange={e => upd(i, { image_url: e.target.value })} />
                <label className="text-xs px-2 py-1 rounded border bg-white cursor-pointer">
                  Enviar imagem
                  <input type="file" accept="image/*" className="hidden" onChange={async e => {
                    const f = e.target.files?.[0]; if (!f) return;
                    const url = await upload(f); if (url) upd(i, { image_url: url });
                  }} />
                </label>
                <Input className="flex-1 min-w-[200px]" value={s.video_url ?? ""} placeholder="Link do vídeo (opcional)" onChange={e => upd(i, { video_url: e.target.value })} />
              </div>
              {s.image_url && <img src={s.image_url} alt="" className="h-20 rounded border" />}
            </div>
          ))}
        </div>
        <div className="flex justify-between pt-2">
          <Button variant="outline" onClick={() => setItems(a => [...a, { id: uid(), title: "", content: "" }])}>
            <Plus size={14} className="mr-1" /> Adicionar subtópico
          </Button>
          <Button onClick={save} disabled={saving}>{saving ? "Salvando..." : "Salvar"}</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const embed = (u: string) => {
  const m = u.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return m ? `https://www.youtube.com/embed/${m[1]}` : u;
};

export function SubtopicsView({ items }: { items?: Subtopic[] }) {
  if (!items?.length) return null;
  return (
    <section className="rounded-xl p-4 bg-white border border-violet-200 space-y-4">
      <h3 className="font-bold text-violet-900">🌿 Subtópicos</h3>
      {items.map((s, i) => (
        <details key={s.id} open={i === 0} className="rounded-lg border border-violet-100 p-3">
          <summary className="cursor-pointer font-semibold text-violet-800">{i + 1}. {s.title}</summary>
          {s.content && <p className="mt-2 whitespace-pre-line text-slate-800">{s.content}</p>}
          {s.image_url && <img src={s.image_url} alt={s.title} className="mt-2 max-h-80 rounded" />}
          {s.video_url && (
            <div className="mt-2 aspect-video"><iframe src={embed(s.video_url)} className="w-full h-full rounded" allowFullScreen title={s.title} /></div>
          )}
        </details>
      ))}
    </section>
  );
}

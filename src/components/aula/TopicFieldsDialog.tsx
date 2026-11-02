import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2, ArrowUp, ArrowDown, Loader2 } from "lucide-react";
import { toast } from "sonner";

export type FieldType = "texto" | "imagem" | "video";
export type CustomField = { id: string; label: string; type: FieldType; value: string };

export const FIELD_TYPES: { v: FieldType; label: string }[] = [
  { v: "texto", label: "📝 Texto" },
  { v: "imagem", label: "🖼️ Imagem" },
  { v: "video", label: "🎬 Vídeo" },
];

export function videoEmbedUrl(u: string): string {
  const yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
  return u;
}

export function CustomFieldsView({ fields }: { fields?: CustomField[] | null }) {
  const list = (fields || []).filter(f => (f.value || "").trim());
  if (!list.length) return null;
  return (
    <div className="space-y-4">
      {list.map(f => (
        <section key={f.id} className="rounded-xl border bg-card p-4">
          {f.label && <h3 className="font-bold mb-2">{f.label}</h3>}
          {f.type === "texto" && <p className="whitespace-pre-line text-sm leading-relaxed">{f.value}</p>}
          {f.type === "imagem" && <img src={f.value} alt={f.label} className="w-full max-h-[480px] object-contain rounded" />}
          {f.type === "video" && (
            /\.(mp4|webm|ogg)(\?|$)/i.test(f.value)
              ? <video src={f.value} controls className="w-full rounded" />
              : <div className="aspect-video"><iframe src={videoEmbedUrl(f.value)} className="w-full h-full rounded" allowFullScreen title={f.label} /></div>
          )}
        </section>
      ))}
    </div>
  );
}

type Props = {
  open: boolean; onClose: () => void;
  slug: string; title: string; lesson: string;
  upload: (f: File) => Promise<string>;
};

export default function TopicFieldsDialog({ open, onClose, slug, title, lesson, upload }: Props) {
  const [fields, setFields] = useState<CustomField[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    supabase.from("topic_overrides").select("custom_fields").eq("slug", slug).maybeSingle()
      .then(({ data }) => { setFields(((data as any)?.custom_fields as CustomField[]) || []); setLoading(false); });
  }, [open, slug]);

  const upd = (id: string, p: Partial<CustomField>) => setFields(fs => fs.map(f => f.id === id ? { ...f, ...p } : f));
  const move = (i: number, d: number) => setFields(fs => {
    const a = [...fs]; const j = i + d; if (j < 0 || j >= a.length) return a;
    [a[i], a[j]] = [a[j], a[i]]; return a;
  });
  const add = (type: FieldType) => setFields(fs => [...fs, { id: crypto.randomUUID(), label: "", type, value: "" }]);

  const save = async () => {
    setSaving(true);
    const { error } = await supabase.from("topic_overrides")
      .upsert({ slug, title, lesson, custom_fields: fields } as any, { onConflict: "slug" });
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Campos do tópico salvos");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={o => !o && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
        <DialogHeader><DialogTitle>Campos do tópico — {title}</DialogTitle></DialogHeader>
        {loading ? <Loader2 className="animate-spin mx-auto" /> : (
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">Escolha para que serve cada campo: texto, imagem ou vídeo. Eles aparecem para o aluno na página do tópico, nesta ordem.</p>
            {fields.length === 0 && <p className="text-sm italic text-muted-foreground">Nenhum campo ainda.</p>}
            {fields.map((f, i) => (
              <div key={f.id} className="border rounded-lg p-3 space-y-2 bg-muted/30">
                <div className="flex gap-2 items-center flex-wrap">
                  <Input className="flex-1 min-w-[160px]" placeholder="Nome do campo (ex.: Experimento)" value={f.label} onChange={e => upd(f.id, { label: e.target.value })} />
                  <select className="border rounded-md h-10 px-2 text-sm bg-background" value={f.type}
                    onChange={e => upd(f.id, { type: e.target.value as FieldType, value: "" })}>
                    {FIELD_TYPES.map(t => <option key={t.v} value={t.v}>{t.label}</option>)}
                  </select>
                  <Button size="icon" variant="outline" onClick={() => move(i, -1)}><ArrowUp size={14} /></Button>
                  <Button size="icon" variant="outline" onClick={() => move(i, 1)}><ArrowDown size={14} /></Button>
                  <Button size="icon" variant="outline" className="text-destructive"
                    onClick={() => confirm("Excluir este campo?") && setFields(fs => fs.filter(x => x.id !== f.id))}><Trash2 size={14} /></Button>
                </div>
                {f.type === "texto" ? (
                  <Textarea rows={4} placeholder="Texto" value={f.value} onChange={e => upd(f.id, { value: e.target.value })} />
                ) : (
                  <div className="flex gap-2 items-center flex-wrap">
                    <Input className="flex-1 min-w-[200px]" placeholder={f.type === "video" ? "Link do YouTube ou do vídeo" : "Link da imagem"}
                      value={f.value} onChange={e => upd(f.id, { value: e.target.value })} />
                    <label className="cursor-pointer text-xs px-3 py-2 rounded-md border bg-background">
                      {busy === f.id ? "Enviando..." : "Enviar do computador"}
                      <input type="file" className="hidden" accept={f.type === "video" ? "video/*" : "image/*"}
                        onChange={async e => {
                          const file = e.target.files?.[0]; if (!file) return;
                          setBusy(f.id);
                          try { upd(f.id, { value: await upload(file) }); }
                          catch (err: any) { toast.error(err?.message ?? "Falha no envio"); }
                          finally { setBusy(null); }
                        }} />
                    </label>
                  </div>
                )}
                {f.type === "imagem" && f.value && <img src={f.value} alt="" className="max-h-24 rounded border" />}
              </div>
            ))}
            <div className="flex gap-2 flex-wrap">
              {FIELD_TYPES.map(t => (
                <Button key={t.v} size="sm" variant="outline" onClick={() => add(t.v)}><Plus size={12} className="mr-1" />{t.label}</Button>
              ))}
            </div>
          </div>
        )}
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button onClick={save} disabled={saving}>{saving ? "Salvando..." : "Salvar campos"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

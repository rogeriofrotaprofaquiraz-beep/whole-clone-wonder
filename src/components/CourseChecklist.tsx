import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Target } from "lucide-react";
import { toast } from "sonner";

type Lesson = { id: string; title: string; content?: string | null; video_url?: string | null; image_url?: string | null; slide_url?: string | null };

export default function CourseChecklist({ courseId, lessons }: { courseId: string; lessons: Lesson[] }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [c, setC] = useState<any>(null);
  const [assess, setAssess] = useState<number>(0);
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (!u.user) return;
      const { data } = await supabase.rpc("has_role", { _user_id: u.user.id, _role: "admin" });
      setIsAdmin(!!data);
      if (!data) return;
      const [{ data: course }, { data: a }] = await Promise.all([
        supabase.from("courses").select("*").eq("id", courseId).maybeSingle(),
        supabase.from("course_assessments").select("questions,question_bank").eq("course_id", courseId).maybeSingle(),
      ]);
      setC(course);
      const qb = (a as any)?.question_bank; const qs = (a as any)?.questions;
      setAssess(Math.max(Array.isArray(qb) ? qb.length : 0, Array.isArray(qs) ? qs.length : 0));
    })();
  }, [courseId]);

  if (!isAdmin || !c) return null;

  const withContent = lessons.filter(l => (l.content || "").trim().length > 40).length;
  const withMedia = lessons.filter(l => l.video_url || l.image_url || l.slide_url).length;
  const items = [
    { key: "cover", label: "Imagem de capa", ok: !!(c.image_url || c.cover_url), info: c.image_url || c.cover_url ? "ok" : "falta" },
    { key: "desc", label: "Descrição do curso", ok: (c.description || "").trim().length > 20, info: `${(c.description || "").trim().length}/21 letras` },
    { key: "hours", label: "Carga horária", ok: (c.hours || 0) > 0, info: `${c.hours || 0}h` },
    { key: "lessons", label: "Aulas cadastradas (mín. 3)", ok: lessons.length >= 3, info: `${lessons.length}/3` },
    { key: "content", label: "Aulas com conteúdo", ok: lessons.length > 0 && withContent === lessons.length, info: `${withContent}/${lessons.length}` },
    { key: "assess", label: "Avaliação final (mín. 5 questões)", ok: assess >= 5, info: `${assess}/5` },
    { key: "media", label: "Aulas com vídeo/imagem/slide (opcional)", ok: withMedia > 0, info: "opcional" },
    { key: "slide", label: "Slide do curso (opcional)", ok: !!c.slide_url, info: "opcional" },
  ];
  const required = items.filter(i => !["media", "slide"].includes(i.key));
  const done = required.filter(i => i.ok).length;
  const pct = Math.round((done / required.length) * 100);
  const editComplete = !!c.edit_complete, reviewed = !!c.reviewed, published = !!c.published;

  const toggle = async (flag: "edit_complete" | "reviewed" | "published") => {
    const cur: any = { edit_complete: editComplete, reviewed, published };
    const next = !cur[flag];
    if (flag === "reviewed" && next && !editComplete) { toast.error("Conclua 'Edição completa' antes"); return; }
    if (flag === "published" && next && (!editComplete || !reviewed)) { toast.error("Conclua edição e revisão antes"); return; }
    const patch: any = { [flag]: next };
    if (!next && flag !== "published") patch.published = false;
    if (!next && flag === "edit_complete") patch.reviewed = false;
    setBusy(flag);
    const { error } = await supabase.from("courses").update(patch).eq("id", courseId);
    setBusy(null);
    if (error) { toast.error(error.message); return; }
    setC({ ...c, ...patch, updated_at: new Date().toISOString() });
    toast.success("Atualizado");
  };

  const box = (on: boolean, color: string, dis: boolean) =>
    `flex items-center gap-2 cursor-pointer px-3 py-2 rounded border text-sm font-semibold ${on ? color : "bg-white border-slate-300 text-slate-600"} ${dis ? "opacity-50 pointer-events-none" : ""}`;

  return (
    <Card className="mb-6 p-4 bg-white/95 border-0">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2 text-[#4C1D95] font-bold">
          <Target size={18} /> Checklist de publicação do curso (admin)
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-600">🕓 Última atualização: <span className="font-semibold text-slate-800">{c.updated_at ? new Date(c.updated_at).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }) : "—"}</span></span>
          <span className="font-semibold text-slate-600">{done}/{required.length} · {pct}%</span>
        </div>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded overflow-hidden mb-3">
        <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="grid sm:grid-cols-2 gap-1.5 mb-4">
        {items.map(it => (
          <div key={it.key} className={`flex items-center gap-2 text-xs px-2 py-1.5 rounded border ${it.ok ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-rose-50 border-rose-200 text-rose-700"}`}>
            <span>{it.ok ? "✅" : "⬜"}</span>
            <span className="flex-1">{it.label}</span>
            <span className="text-[10px] opacity-70">{it.info}</span>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-2 pt-3 border-t border-slate-200">
        <label className={box(editComplete, "bg-amber-50 border-amber-300 text-amber-800", busy !== null)}>
          <input type="checkbox" checked={editComplete} onChange={() => toggle("edit_complete")} className="accent-amber-600" /> 1. Edição completa
        </label>
        <label className={box(reviewed, "bg-blue-50 border-blue-300 text-blue-800", !editComplete || busy !== null)}>
          <input type="checkbox" checked={reviewed} onChange={() => toggle("reviewed")} className="accent-blue-600" /> 2. Revisado
        </label>
        <label className={box(published, "bg-emerald-50 border-emerald-300 text-emerald-800", !editComplete || !reviewed || busy !== null)}>
          <input type="checkbox" checked={published} onChange={() => toggle("published")} className="accent-emerald-600" /> 3. Publicar
        </label>
      </div>
    </Card>
  );
}

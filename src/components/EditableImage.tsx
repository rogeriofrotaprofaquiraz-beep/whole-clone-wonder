import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pencil, Upload, Link as LinkIcon, X, Loader2 } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  isAdmin: boolean;
  slug: string;
  title: string;
  lesson?: string;
  imageKey: string;
  currentOverride?: string | null;
  onChange: (url: string | null) => void;
};

export default function EditableImage({
  src, alt, className, isAdmin, slug, title, lesson,
  imageKey, currentOverride, onChange,
}: Props) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const persist = async (url: string | null) => {
    // Read current, patch key, upsert
    const { data: cur } = await supabase
      .from("topic_overrides")
      .select("section_images")
      .eq("slug", slug)
      .maybeSingle();
    const next = { ...((cur?.section_images as any) || {}) };
    if (url) next[imageKey] = url; else delete next[imageKey];
    const { error } = await supabase
      .from("topic_overrides")
      .upsert({ slug, title, lesson, section_images: next } as any, { onConflict: "slug" });
    if (error) { toast.error(error.message); return; }
    onChange(url);
    toast.success(url ? "Imagem atualizada" : "Imagem removida");
  };

  const handleFile = async (file: File) => {
    setUploading(true);
    const path = `topicos/${slug}/img-${imageKey}-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]+/g, "_")}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file, { upsert: false });
    if (error) { setUploading(false); toast.error(error.message); return; }
    const { data: signed } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365);
    setUploading(false);
    if (signed?.signedUrl) await persist(signed.signedUrl);
  };

  const promptUrl = async () => {
    const url = window.prompt("URL da imagem:", currentOverride || "");
    if (url === null) return;
    await persist(url.trim() || null);
  };

  return (
    <div className={`relative group ${className || ""}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = "hidden"; }}
      />
      {isAdmin && (
        <>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) handleFile(f);
              e.target.value = "";
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="p-1.5 rounded bg-white/90 hover:bg-white text-slate-800 shadow"
              title="Enviar imagem"
            >
              {uploading ? <Loader2 size={14} className="animate-spin" /> : <Upload size={14} />}
            </button>
            <button
              type="button"
              onClick={promptUrl}
              className="p-1.5 rounded bg-white/90 hover:bg-white text-slate-800 shadow"
              title="Definir por URL"
            >
              <LinkIcon size={14} />
            </button>
            {currentOverride && (
              <button
                type="button"
                onClick={() => persist(null)}
                className="p-1.5 rounded bg-white/90 hover:bg-white text-red-600 shadow"
                title="Remover imagem personalizada"
              >
                <X size={14} />
              </button>
            )}
          </div>
          {!currentOverride && (
            <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition">
              <span className="text-[10px] bg-black/60 text-white px-1.5 py-0.5 rounded flex items-center gap-1">
                <Pencil size={10} /> editar
              </span>
            </div>
          )}
          {currentOverride && (
            <div className="absolute top-1 left-1">
              <span className="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded">personalizada</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { FileJson, Loader2, Upload } from "lucide-react";
import { AREAS, AreaValue } from "@/lib/aula";

type Detected = {
  elements: any[];
  questions: any[];
  terms: any[];
};

const VALID_AREAS = new Set(AREAS.map((a) => a.value));

function toArea(v: any): AreaValue {
  const s = String(v ?? "").toLowerCase().trim();
  return (VALID_AREAS.has(s as AreaValue) ? s : "geral") as AreaValue;
}

function isSchemaOnly(json: any): boolean {
  // Estrutura tipo "elemental_heroes_estrutura": só descreve entidades/páginas, sem dados.
  if (!json || typeof json !== "object") return false;
  const hasPages = Array.isArray(json.pages);
  const hasEntities =
    Array.isArray(json.entities) &&
    json.entities.every(
      (e: any) => e && typeof e === "object" && "key_fields" in e && !("symbol" in e) && !("question" in e)
    );
  return hasPages && hasEntities;
}

function detect(json: any): Detected {
  const out: Detected = { elements: [], questions: [], terms: [] };
  // Base44 backup shape: { elements: [...], questions: [...] } or { data: { ... } }
  const root = json?.data ?? json;
  const buckets: any[] = Array.isArray(root) ? [root] : [root];
  for (const b of buckets) {
    if (Array.isArray(b?.elements)) out.elements.push(...b.elements);
    if (Array.isArray(b?.questions)) out.questions.push(...b.questions);
    if (Array.isArray(b?.terms)) out.terms.push(...b.terms);
    if (Array.isArray(b)) {
      // Heurística pelo formato
      for (const item of b) {
        if (item?.symbol && (item?.number || item?.atomic_number)) out.elements.push(item);
        else if (item?.question && (item?.options || item?.option_a)) out.questions.push(item);
        else if (item?.term && item?.clue) out.terms.push(item);
      }
    }
  }
  return out;
}


function normElement(e: any) {
  const number = Number(e.number ?? e.atomic_number ?? 0);
  const symbol = String(e.symbol ?? "").trim();
  const { number: _n, symbol: _s, name, hero_name, hero_description, description, image, hero_image, image_url, ...rest } = e;
  return {
    number,
    symbol,
    name: name ?? hero_name ?? symbol,
    hero_name: hero_name ?? name ?? symbol,
    hero_description: hero_description ?? description ?? null,
    hero_image: hero_image ?? image_url ?? image ?? null,
    attributes: rest,
  };
}

function normQuestion(q: any, userId: string) {
  const options =
    q.options ?? [q.option_a, q.option_b, q.option_c, q.option_d].filter(Boolean);
  const correct_index = Number(q.correct_index ?? q.correct ?? 0);
  return {
    area: toArea(q.area),
    school_level: (q.school_level ?? "medio") as string,
    difficulty: Math.max(1, Math.min(5, Number(q.difficulty) || 2)),
    topic: q.topic ?? null,
    question: String(q.question ?? "").trim(),
    options,
    correct_index: Math.max(0, Math.min(options.length - 1, correct_index)),
    answer_text: q.answer_text ?? options[correct_index] ?? null,
    explanation: q.explanation ?? null,
    created_by: userId,
  };
}

function normTerm(t: any, userId: string) {
  return {
    area: toArea(t.area),
    school_level: (t.school_level ?? "medio") as string,
    difficulty: Math.max(1, Math.min(5, Number(t.difficulty) || 2)),
    term: String(t.term ?? "")
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^A-Z]/g, ""),
    clue: String(t.clue ?? "").trim(),
    created_by: userId,
  };
}

export function JsonImporter({ onImported }: { onImported?: () => void }) {
  const [detected, setDetected] = useState<Detected | null>(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFile = async (file: File) => {
    setFileName(file.name);
    try {
      const text = await file.text();
      const json = JSON.parse(text);
      const schemaOnly = isSchemaOnly(json);
      const d = detect(json);
      setDetected(d);
      if (schemaOnly) {
        toast.warning(
          "JSON de estrutura detectado (sem dados). Você pode importar mesmo assim, mas nada será inserido."
        );
      }
      const total = d.elements.length + d.questions.length + d.terms.length;
      if (!total) toast.error("Nenhum dado reconhecido no JSON");
      else toast.success(`Detectado: ${d.elements.length} elementos, ${d.questions.length} questões, ${d.terms.length} termos`);
    } catch (e: any) {

      toast.error("JSON inválido: " + e.message);
      setDetected(null);
    }
  };

  const doImport = async () => {
    if (!detected) return;
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return toast.error("Faça login");
    setLoading(true);
    try {
      let total = 0;
      if (detected.elements.length) {
        const rows = detected.elements.map(normElement).filter((e) => e.symbol && e.number);
        const { error } = await supabase
          .from("elements")
          .upsert(rows, { onConflict: "symbol" });
        if (error) throw error;
        total += rows.length;
      }
      if (detected.questions.length) {
        const rows = detected.questions
          .map((q) => normQuestion(q, user.id))
          .filter((q) => q.question && q.options.length >= 2);
        const { error } = await supabase.from("chem_questions").insert(rows);
        if (error) throw error;
        total += rows.length;
      }
      if (detected.terms.length) {
        const rows = detected.terms
          .map((t) => normTerm(t, user.id))
          .filter((t) => t.term.length >= 3 && t.term.length <= 16 && t.clue);
        const { error } = await supabase.from("chem_terms").insert(rows);
        if (error) throw error;
        total += rows.length;
      }
      toast.success(`${total} registros importados`);
      setDetected(null);
      setFileName("");
      onImported?.();
    } catch (e: any) {
      toast.error(e.message || "Falha na importação");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <FileJson className="text-[#4C1D95]" />
        <h3 className="text-lg font-bold">Importar Backup (JSON)</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-3">
        Aceita backup Base44 (<code>elements</code> / <code>questions</code>) ou arrays soltos de
        elementos, questões ou termos.
      </p>
      <Input
        type="file"
        accept=".json,application/json"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        className="max-w-md"
      />
      {detected && (
        <div className="mt-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            {fileName && <Badge variant="outline">{fileName}</Badge>}
            <Badge>Elementos: {detected.elements.length}</Badge>
            <Badge>Questões: {detected.questions.length}</Badge>
            <Badge>Termos: {detected.terms.length}</Badge>
          </div>
          <Button
            onClick={doImport}
            disabled={loading}
            className="bg-[#4C1D95] hover:bg-[#3B1486]"
          >
            {loading ? <Loader2 className="animate-spin mr-2" size={14} /> : <Upload size={14} className="mr-1" />}
            Importar tudo
          </Button>
        </div>
      )}
    </Card>
  );
}

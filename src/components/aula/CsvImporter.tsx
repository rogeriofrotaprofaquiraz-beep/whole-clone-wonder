import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Upload, FileDown, Loader2 } from "lucide-react";
import { AREAS, AreaValue, LEVELS, LevelValue } from "@/lib/aula";

type Mode = "questions" | "terms";

const TEMPLATES: Record<Mode, { name: string; content: string }> = {
  questions: {
    name: "modelo-questoes.csv",
    content:
      "area;school_level;difficulty;topic;question;option_a;option_b;option_c;option_d;correct_index;explanation\n" +
      "geral;medio;2;Tabela Periódica;Qual o símbolo do Sódio?;Na;So;S;N;0;Sódio = Na\n" +
      "organica;fundamental;1;Funções;Qual é um álcool?;Metanol;Benzeno;Metano;Eteno;0;Álcool tem -OH\n",
  },
  terms: {
    name: "modelo-termos.csv",
    content:
      "area;school_level;difficulty;term;clue\n" +
      "geral;medio;2;BENZENO;Hidrocarboneto aromático de 6 carbonos\n" +
      "inorganica;fundamental;1;AGUA;Composto H2O essencial à vida\n",
  },
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let cur: string[] = [];
  let val = "";
  let inQ = false;
  const sep = text.includes(";") && !text.includes(",") ? ";" : (text.split("\n")[0].includes(";") ? ";" : ",");
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"' && text[i + 1] === '"') { val += '"'; i++; }
      else if (ch === '"') inQ = false;
      else val += ch;
    } else {
      if (ch === '"') inQ = true;
      else if (ch === sep) { cur.push(val); val = ""; }
      else if (ch === "\n") { cur.push(val); rows.push(cur); cur = []; val = ""; }
      else if (ch === "\r") { /* skip */ }
      else val += ch;
    }
  }
  if (val.length || cur.length) { cur.push(val); rows.push(cur); }
  return rows.filter((r) => r.some((c) => c.trim().length));
}

export function CsvImporter({ onImported }: { onImported?: () => void }) {
  const [mode, setMode] = useState<Mode>("questions");
  const [defaultArea, setDefaultArea] = useState<AreaValue>("geral");
  const [defaultLevel, setDefaultLevel] = useState<LevelValue>("medio");
  const [preview, setPreview] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const downloadTemplate = () => {
    const t = TEMPLATES[mode];
    const blob = new Blob([t.content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = t.name; a.click();
    URL.revokeObjectURL(url);
  };

  const handleFile = async (file: File) => {
    const text = await file.text();
    const rows = parseCsv(text);
    if (!rows.length) return toast.error("Arquivo vazio");
    const header = rows[0].map((h) => h.trim().toLowerCase());
    const body = rows.slice(1);
    const get = (r: string[], k: string) => {
      const i = header.indexOf(k);
      return i >= 0 ? (r[i] ?? "").trim() : "";
    };

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return toast.error("Faça login");

    if (mode === "questions") {
      const parsed = body.map((r) => ({
        area: (get(r, "area") || defaultArea) as AreaValue,
        school_level: (get(r, "school_level") || defaultLevel) as LevelValue,
        difficulty: Math.max(1, Math.min(5, parseInt(get(r, "difficulty")) || 2)),
        topic: get(r, "topic") || null,
        question: get(r, "question"),
        options: [get(r, "option_a"), get(r, "option_b"), get(r, "option_c"), get(r, "option_d")].filter(Boolean),
        correct_index: Math.max(0, Math.min(3, parseInt(get(r, "correct_index")) || 0)),
        explanation: get(r, "explanation") || null,
        created_by: user.id,
      })).filter((q) => q.question && q.options.length === 4);
      setPreview(parsed);
    } else {
      const parsed = body.map((r) => ({
        area: (get(r, "area") || defaultArea) as AreaValue,
        school_level: (get(r, "school_level") || defaultLevel) as LevelValue,
        difficulty: Math.max(1, Math.min(5, parseInt(get(r, "difficulty")) || 2)),
        term: get(r, "term").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, ""),
        clue: get(r, "clue"),
        created_by: user.id,
      })).filter((t) => t.term.length >= 3 && t.term.length <= 16 && t.clue);
      setPreview(parsed);
    }
  };

  const doImport = async () => {
    if (!preview.length) return;
    setLoading(true);
    try {
      if (mode === "questions") {
        const rows = preview.map((p) => ({ ...p, answer_text: p.options[p.correct_index] ?? null }));
        const { error } = await supabase.from("chem_questions").insert(rows);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("chem_terms").upsert(preview, { onConflict: "area,term", ignoreDuplicates: true });
        if (error) throw error;
      }
      toast.success(`${preview.length} linhas importadas`);
      setPreview([]);
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
        <Upload className="text-[#059669]" />
        <h3 className="text-lg font-bold">Importar Banco (CSV)</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-3 mb-3">
        <div>
          <Label>Tipo</Label>
          <Select value={mode} onValueChange={(v) => { setMode(v as Mode); setPreview([]); }}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="questions">Questões (Quiz)</SelectItem>
              <SelectItem value="terms">Termos (Forca / Memória / Caça)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Área padrão</Label>
          <Select value={defaultArea} onValueChange={(v) => setDefaultArea(v as AreaValue)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{AREAS.map((a) => <SelectItem key={a.value} value={a.value}>{a.emoji} {a.label}</SelectItem>)}</SelectContent>
          </Select>
        </div>
        <div>
          <Label>Nível padrão</Label>
          <Select value={defaultLevel} onValueChange={(v) => setDefaultLevel(v as LevelValue)}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{LEVELS.map((l) => <SelectItem key={l.value} value={l.value}>{l.emoji} {l.label}</SelectItem>)}</SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        <Button variant="outline" size="sm" onClick={downloadTemplate}><FileDown size={14} className="mr-1" />Baixar modelo</Button>
        <Input type="file" accept=".csv,text/csv" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} className="max-w-xs" />
      </div>

      {preview.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">{preview.length} linhas válidas</Badge>
            <Button size="sm" onClick={doImport} disabled={loading} className="bg-[#059669] hover:bg-[#047857]">
              {loading ? <Loader2 className="animate-spin mr-2" size={14} /> : <Upload size={14} className="mr-1" />} Importar
            </Button>
          </div>
          <div className="max-h-48 overflow-auto text-xs border rounded p-2 bg-slate-50 font-mono">
            {preview.slice(0, 8).map((p, i) => (
              <div key={i} className="truncate">{JSON.stringify(p)}</div>
            ))}
            {preview.length > 8 && <div className="text-muted-foreground mt-1">…e mais {preview.length - 8}</div>}
          </div>
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-3">
        Use ";" ou "," como separador. Cabeçalhos válidos:&nbsp;
        <code>{mode === "questions" ? "area;school_level;difficulty;topic;question;option_a..d;correct_index;explanation" : "area;school_level;difficulty;term;clue"}</code>
      </p>
    </Card>
  );
}

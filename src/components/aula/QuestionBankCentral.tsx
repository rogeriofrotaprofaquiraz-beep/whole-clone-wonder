import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AREAS } from "@/lib/aula";
import { gamesFor, difficultyBand, MC_GAMES, WORD_GAMES } from "@/lib/questionGames";

type Row = {
  id: string; area: string; topic: string | null; difficulty: number; question: string;
  options: unknown; correct_index: number; answer_text: string | null; school_level: string;
};

const BANDS = [
  { v: "", l: "Todas" }, { v: "facil", l: "Fácil" }, { v: "medio", l: "Médio" }, { v: "dificil", l: "Difícil" },
];

export function QuestionBankCentral() {
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [area, setArea] = useState("");
  const [band, setBand] = useState("");
  const [game, setGame] = useState("");
  const [q, setQ] = useState("");

  useEffect(() => {
    (async () => {
      const all: Row[] = [];
      for (let from = 0; ; from += 1000) {
        const { data } = await supabase.from("chem_questions")
          .select("id,area,topic,difficulty,question,options,correct_index,answer_text,school_level")
          .order("created_at", { ascending: false }).range(from, from + 999);
        all.push(...((data as Row[]) ?? []));
        if (!data || data.length < 1000) break;
      }
      setRows(all); setLoading(false);
    })();
  }, []);

  const withGames = useMemo(() => rows.map((r) => ({ ...r, games: gamesFor(r) })), [rows]);
  const list = withGames.filter((r) =>
    (!area || r.area === area) && (!band || difficultyBand(r.difficulty) === band) &&
    (!game || r.games.includes(game)) &&
    (!q || (r.question + " " + (r.topic ?? "")).toLowerCase().includes(q.toLowerCase())));

  return (
    <Card className="p-4 space-y-3">
      <div>
        <h2 className="text-lg font-black">🗃️ Banco de Questões — todas as questões</h2>
        <p className="text-xs text-muted-foreground">Todas as questões do app reunidas, com os jogos em que cada uma é usada.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <select className="border rounded px-2 py-1 text-sm bg-background" value={area} onChange={(e) => setArea(e.target.value)}>
          <option value="">Todas as disciplinas</option>
          {AREAS.map((a) => <option key={a.value} value={a.value}>{a.label}</option>)}
        </select>
        <select className="border rounded px-2 py-1 text-sm bg-background" value={band} onChange={(e) => setBand(e.target.value)}>
          {BANDS.map((b) => <option key={b.v} value={b.v}>{b.v ? b.l : "Todas as dificuldades"}</option>)}
        </select>
        <select className="border rounded px-2 py-1 text-sm bg-background" value={game} onChange={(e) => setGame(e.target.value)}>
          <option value="">Todos os jogos</option>
          {[...MC_GAMES, ...WORD_GAMES].map((g) => <option key={g}>{g}</option>)}
        </select>
        <Input className="max-w-xs h-8" placeholder="Buscar pergunta ou assunto…" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div className="text-sm font-bold">{loading ? "Carregando…" : `${list.length} de ${rows.length} questões`}</div>
      <div className="max-h-[520px] overflow-auto space-y-2">
        {list.slice(0, 300).map((r) => {
          const opts = Array.isArray(r.options) ? (r.options as string[]) : [];
          const b = difficultyBand(r.difficulty);
          return (
            <div key={r.id} className="border rounded-lg p-2 text-sm">
              <div className="flex flex-wrap gap-1 mb-1">
                <Badge variant="secondary">{AREAS.find((a) => a.value === r.area)?.label ?? r.area}</Badge>
                <Badge variant={b === "dificil" ? "destructive" : b === "medio" ? "default" : "outline"}>
                  {BANDS.find((x) => x.v === b)?.l} ({r.difficulty})
                </Badge>
                {r.topic && <Badge variant="outline">{r.topic}</Badge>}
              </div>
              <div className="font-semibold">{r.question}</div>
              <div className="text-xs text-muted-foreground">✔ {r.answer_text || opts[r.correct_index]}</div>
              <div className="text-xs mt-1">🎮 {r.games.length ? r.games.join(" · ") : "Nenhum jogo (sem alternativas)"}</div>
            </div>
          );
        })}
        {list.length > 300 && <div className="text-xs text-muted-foreground">Mostrando 300 — use os filtros para refinar.</div>}
      </div>
    </Card>
  );
}

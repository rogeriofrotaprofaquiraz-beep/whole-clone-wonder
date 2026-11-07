import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { addCoins } from "@/lib/playerEconomy";
import {
  QUESTION_COUNTS, coinsFor, MOLECULES, sameAtoms, HUNT_ELEMENTS, PLANET, ESCAPE, CELLS, cellVoltage, rounds, norm, shuffle,
} from "@/lib/miniGames";

type GameKey = "moleculas" | "biologicas" | "caca" | "planeta" | "escape" | "pilhas" | "temperatura";
const GAMES: { key: GameKey; emoji: string; title: string; area: string; desc: string }[] = [
  { key: "moleculas", emoji: "🧩", title: "Montagem de Moléculas", area: "Orgânica e Geral", desc: "Junte átomos C, H, O, N, Cl para formar a molécula pedida." },
  { key: "biologicas", emoji: "🧬", title: "Moléculas Biológicas", area: "Bioquímica", desc: "Monte glicose, aminoácido e ureia como um quebra-cabeça." },
  { key: "caca", emoji: "🗺️", title: "Caça aos Elementos", area: "Inorgânica", desc: "Ache metais, gases nobres e halogênios no mapa." },
  { key: "planeta", emoji: "🌍", title: "Salve o Planeta", area: "Ambiental", desc: "Escolha os processos menos poluentes." },
  { key: "escape", emoji: "🔐", title: "Escape Room de Laboratório", area: "Avançado", desc: "Resolva pistas químicas para escapar." },
  { key: "pilhas", emoji: "🔋", title: "Monte a Pilha", area: "Eletroquímica", desc: "Escolha o par de metais que gera mais energia." },
  { key: "temperatura", emoji: "🌡️", title: "Equilibre as Temperaturas", area: "Físico-química", desc: "Calcule a temperatura final da mistura de águas." },
];

async function payout(right: number, wrong: number) {
  const coins = coinsFor(right, wrong);
  const { data } = await supabase.auth.getSession();
  if (data.session && coins > 0) await addCoins(data.session.user.id, coins);
  toast.success(`Fim! ${right} acertos, ${wrong} erros → +${coins}⚛`);
}

export default function Minijogos() {
  const [game, setGame] = useState<GameKey | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const info = GAMES.find((g) => g.key === game);

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground">🎮 Minijogos de Química</h1>
          {game ? <Button variant="outline" onClick={() => { setGame(null); setCount(null); }}>← Minijogos</Button>
            : <Link to="/" className="text-sm text-muted-foreground underline">Voltar</Link>}
        </div>
        {!game && (
          <>
            <p className="text-muted-foreground">Cada acerto vale 4⚛ e cada erro 1⚛. Quer misturar reagentes? Vá ao <Link className="underline" to="/laboratorio">Laboratório Virtual</Link>.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {GAMES.map((g) => (
                <Card key={g.key} className="p-4 cursor-pointer hover:bg-muted transition" onClick={() => setGame(g.key)}>
                  <div className="text-3xl">{g.emoji}</div>
                  <h2 className="font-bold text-foreground">{g.title}</h2>
                  <p className="text-xs text-primary">{g.area}</p>
                  <p className="text-sm text-muted-foreground">{g.desc}</p>
                </Card>
              ))}
            </div>
          </>
        )}
        {game && !count && (
          <Card className="p-6 space-y-4 text-center">
            <h2 className="text-xl font-bold text-foreground">{info?.emoji} {info?.title}</h2>
            <p className="text-muted-foreground">Quantas perguntas?</p>
            <div className="flex justify-center gap-3">
              {QUESTION_COUNTS.map((n) => <Button key={n} size="lg" onClick={() => setCount(n)}>{n}</Button>)}
            </div>
          </Card>
        )}
        {game && count && <Runner key={game + count} game={game} count={count} onExit={() => setCount(null)} />}
      </div>
    </div>
  );
}

type Q = { prompt: string; render: (answer: (ok: boolean, why?: string) => void) => JSX.Element };

function buildQuestions(game: GameKey, n: number): Q[] {
  if (game === "moleculas" || game === "biologicas") {
    const pool = MOLECULES.filter((m) => (game === "biologicas" ? m.level === 3 : m.level < 3 || m.name === "Ácido acético"));
    return rounds(pool, n).map((m) => ({ prompt: `Monte: ${m.name}`, render: (ans) => <MoleculeBuilder target={m.atoms} onDone={(ok) => ans(ok, `${m.name} = ${m.formula}`)} /> }));
  }
  if (game === "caca") {
    const targets: ("metal" | "gás nobre" | "halogênio")[] = ["metal", "gás nobre", "halogênio"];
    return Array.from({ length: n }, (_, i) => {
      const fam = targets[i % 3];
      return { prompt: `Encontre um ${fam} escondido no mapa`, render: (ans) => <Hunt family={fam} onDone={ans} /> };
    });
  }
  if (game === "planeta") {
    return rounds(PLANET, n).map((s) => ({
      prompt: `${s.area}: ${s.title}`,
      render: (ans) => (
        <div className="grid gap-2">{shuffle(s.choices).map((c) => <Button key={c.text} variant="outline" className="h-auto whitespace-normal" onClick={() => ans(c.good, c.why)}>{c.text}</Button>)}</div>
      ),
    }));
  }
  if (game === "escape") {
    return rounds(ESCAPE, n).map((p, i) => ({ prompt: `🔒 Porta ${i + 1}: ${p.clue}`, render: (ans) => <TextAnswer onSubmit={(v) => ans(norm(v) === norm(p.answer), `Resposta: ${p.answer}`)} /> }));
  }
  if (game === "pilhas") {
    return Array.from({ length: n }, () => {
      const opts = shuffle(CELLS).slice(0, 4);
      const pairs: [typeof opts[0], typeof opts[0]][] = [[opts[0], opts[1]], [opts[2], opts[3]], [opts[0], opts[3]]];
      const best = Math.max(...pairs.map(([a, b]) => cellVoltage(a, b)));
      return {
        prompt: "Qual par de eletrodos gera a maior voltagem?",
        render: (ans) => (
          <div className="grid gap-2">{pairs.map(([a, b]) => {
            const v = cellVoltage(a, b);
            return <Button key={a.metal + b.metal} variant="outline" onClick={() => ans(v === best, `${a.metal}/${b.metal} = ${v} V (maior: ${best} V)`)}>{a.metal} | {b.metal}</Button>;
          })}</div>
        ),
      };
    });
  }
  // temperatura: m1*T1 + m2*T2 = (m1+m2)*Tf
  return Array.from({ length: n }, () => {
    const m1 = [100, 200, 300][Math.floor(Math.random() * 3)], m2 = [100, 200, 300][Math.floor(Math.random() * 3)];
    const t1 = 10 + Math.floor(Math.random() * 3) * 10, t2 = 60 + Math.floor(Math.random() * 3) * 10;
    const tf = Math.round((m1 * t1 + m2 * t2) / (m1 + m2));
    const opts = shuffle([tf, tf + 10, tf - 10, Math.round((t1 + t2) / 2) === tf ? tf + 5 : Math.round((t1 + t2) / 2)]);
    return {
      prompt: `Misturo ${m1} g de água a ${t1} °C com ${m2} g a ${t2} °C. Qual a temperatura final?`,
      render: (ans) => <div className="grid grid-cols-2 gap-2">{[...new Set(opts)].map((o) => <Button key={o} variant="outline" onClick={() => ans(o === tf, `Tf = (${m1}·${t1} + ${m2}·${t2}) / ${m1 + m2} ≈ ${tf} °C`)}>{o} °C</Button>)}</div>,
    };
  });
}

function Runner({ game, count, onExit }: { game: GameKey; count: number; onExit: () => void }) {
  const qs = useMemo(() => buildQuestions(game, count), [game, count]);
  const [i, setI] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [fb, setFb] = useState<{ ok: boolean; why?: string } | null>(null);
  const done = i >= qs.length;

  const answer = (ok: boolean, why?: string) => {
    if (fb) return;
    setFb({ ok, why });
    ok ? setRight((r) => r + 1) : setWrong((w) => w + 1);
  };
  const next = () => {
    setFb(null);
    if (i + 1 >= qs.length) payout(right, wrong);
    setI(i + 1);
  };

  if (done) return (
    <Card className="p-6 text-center space-y-3">
      <h2 className="text-2xl font-bold text-foreground">🏁 Fim de jogo</h2>
      <p className="text-foreground">✅ {right} acertos · ❌ {wrong} erros · +{coinsFor(right, wrong)}⚛</p>
      <Button onClick={onExit}>Jogar de novo</Button>
    </Card>
  );
  const q = qs[i];
  return (
    <Card className="p-6 space-y-4">
      <p className="text-sm text-muted-foreground">Pergunta {i + 1} de {qs.length}</p>
      <h2 className="text-lg font-bold text-foreground">{q.prompt}</h2>
      <div className={fb ? "pointer-events-none opacity-70" : ""}>{q.render(answer)}</div>
      {fb && (
        <div className="space-y-2">
          <p className={`font-semibold ${fb.ok ? "text-primary" : "text-destructive"}`}>{fb.ok ? "✅ Acertou! +4⚛" : "❌ Errou. +1⚛"}</p>
          {fb.why && <p className="text-sm text-muted-foreground">{fb.why}</p>}
          <Button onClick={next}>{i + 1 >= qs.length ? "Ver resultado" : "Próxima →"}</Button>
        </div>
      )}
    </Card>
  );
}

const ATOMS = ["C", "H", "O", "N", "Cl"];
function MoleculeBuilder({ target, onDone }: { target: Record<string, number>; onDone: (ok: boolean) => void }) {
  const [built, setBuilt] = useState<Record<string, number>>({});
  const addAtom = (a: string) => setBuilt((b) => ({ ...b, [a]: (b[a] ?? 0) + 1 }));
  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        {ATOMS.map((a) => (
          <div key={a} draggable onDragStart={(e) => e.dataTransfer.setData("atom", a)} onClick={() => addAtom(a)}
            className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold cursor-grab select-none">{a}</div>
        ))}
      </div>
      <div onDragOver={(e) => e.preventDefault()} onDrop={(e) => addAtom(e.dataTransfer.getData("atom"))}
        className="min-h-24 rounded-xl border-2 border-dashed border-border p-3 flex flex-wrap gap-2 items-center">
        {Object.keys(built).length === 0 && <span className="text-sm text-muted-foreground">Arraste ou toque nos átomos</span>}
        {Object.entries(built).flatMap(([a, n]) => Array.from({ length: n }, (_, k) => (
          <button key={a + k} onClick={() => setBuilt((b) => ({ ...b, [a]: b[a] - 1 }))} className="w-9 h-9 rounded-full bg-accent text-accent-foreground font-bold">{a}</button>
        )))}
      </div>
      <div className="flex gap-2">
        <Button onClick={() => onDone(sameAtoms(Object.fromEntries(Object.entries(built).filter(([, n]) => n > 0)), target))}>Conferir</Button>
        <Button variant="outline" onClick={() => setBuilt({})}>Limpar</Button>
      </div>
    </div>
  );
}

function Hunt({ family, onDone }: { family: string; onDone: (ok: boolean, why?: string) => void }) {
  const cells = useMemo(() => shuffle(HUNT_ELEMENTS).slice(0, 12), []);
  const [picked, setPicked] = useState<(typeof HUNT_ELEMENTS)[0] | null>(null);
  const [group, setGroup] = useState("");
  const [period, setPeriod] = useState("");
  const pool = cells.some((c) => c.family === family) ? cells : [...cells.slice(0, 11), HUNT_ELEMENTS.find((h) => h.family === family)!];
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {pool.map((c) => (
          <button key={c.symbol} onClick={() => setPicked(c)}
            className={`h-14 rounded-lg border text-lg font-bold ${picked?.symbol === c.symbol ? "border-primary bg-muted text-foreground" : "border-border bg-card text-foreground"}`}>
            {picked?.symbol === c.symbol ? c.symbol : "❔"}
          </button>
        ))}
      </div>
      {picked && <p className="text-foreground">Você revelou <b>{picked.name} ({picked.symbol})</b>. Bônus: informe grupo e período.</p>}
      <div className="flex gap-2">
        <Input placeholder="Grupo" value={group} onChange={(e) => setGroup(e.target.value)} />
        <Input placeholder="Período" value={period} onChange={(e) => setPeriod(e.target.value)} />
      </div>
      <Button disabled={!picked} onClick={() => {
        if (!picked) return;
        const ok = picked.family === family;
        const bonus = ok && Number(group) === picked.group && Number(period) === picked.period;
        onDone(ok, `${picked.name}: ${picked.family}, grupo ${picked.group}, período ${picked.period}${bonus ? " — grupo e período certos! 🌟" : ""}`);
      }}>Confirmar</Button>
    </div>
  );
}

function TextAnswer({ onSubmit }: { onSubmit: (v: string) => void }) {
  const [v, setV] = useState("");
  return (
    <form className="flex gap-2" onSubmit={(e) => { e.preventDefault(); onSubmit(v); }}>
      <Input value={v} onChange={(e) => setV(e.target.value)} placeholder="Sua resposta" />
      <Button type="submit">Abrir</Button>
    </form>
  );
}

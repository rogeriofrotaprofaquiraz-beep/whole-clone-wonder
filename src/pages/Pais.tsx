import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { levelFromLifetime } from "@/lib/playerProfile";

const fmtDate = (d: string) => new Date(d).toLocaleString("pt-BR");
const fmtTime = (s: number) => (s >= 3600 ? `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}min` : `${Math.floor(s / 60)}min ${s % 60}s`);

export default function Pais() {
  const navigate = useNavigate();
  const [logged, setLogged] = useState<boolean | null>(null);
  const [children, setChildren] = useState<{ student_id: string; username: string | null }[]>([]);
  const [sel, setSel] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  const loadChildren = async () => {
    const { data } = await supabase.rpc("parent_children");
    setChildren(data ?? []);
    if (data?.length && !sel) setSel(data[0].student_id);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setLogged(!!data.user);
      if (data.user) loadChildren();
    });
  }, []);

  useEffect(() => {
    if (!sel) return;
    setData(null);
    supabase.rpc("parent_child_overview", { _student_id: sel }).then(({ data, error }) => {
      if (error) toast.error(error.message);
      else setData(data);
    });
  }, [sel]);

  const link = async () => {
    setBusy(true);
    const { data, error } = await supabase.rpc("link_child_by_code", { _code: code });
    setBusy(false);
    if (error) return toast.error(error.message);
    toast.success("Aluno vinculado!");
    setCode("");
    setSel(data as string);
    loadChildren();
  };

  if (logged === null) return null;
  if (!logged)
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="p-8 max-w-md text-center">
          <h2 className="text-xl font-bold mb-2">Área dos Pais</h2>
          <p className="text-sm text-muted-foreground mb-4">Crie sua conta de responsável ou entre para acompanhar seu filho.</p>
          <Button onClick={() => navigate("/")}>Entrar / Criar conta</Button>
        </Card>
      </div>
    );

  const p = data?.profile, w = data?.wallet, st = data?.stats;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-5xl mx-auto space-y-4">
        <Button variant="ghost" onClick={() => navigate("/")}><ArrowLeft size={16} className="mr-1" />Voltar</Button>
        <Card className="p-6">
          <h1 className="text-2xl font-bold flex items-center gap-2"><Users /> Área dos Pais</h1>
          <p className="text-sm text-muted-foreground">Acompanhe pontos, partidas, tempo de uso e notas do seu filho.</p>
          <div className="flex gap-2 mt-4">
            <Input placeholder="Código de acesso do aluno (AH-XXXXXX)" value={code} onChange={(e) => setCode(e.target.value)} />
            <Button onClick={link} disabled={!code || busy}>{busy ? <Loader2 className="animate-spin" /> : "Vincular aluno"}</Button>
          </div>
          {children.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {children.map((c) => (
                <Button key={c.student_id} variant={sel === c.student_id ? "default" : "outline"} size="sm" onClick={() => setSel(c.student_id)}>
                  {c.username ?? "Aluno"}
                </Button>
              ))}
            </div>
          )}
        </Card>

        {sel && !data && <div className="text-center p-8"><Loader2 className="animate-spin mx-auto" /></div>}

        {data && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["Nível", levelFromLifetime(w?.lifetime_coins ?? 0)],
                ["Átomos", w?.coins ?? 0],
                ["Partidas", st?.total_games ?? 0],
                ["Vitórias", st?.total_wins ?? p?.wins ?? 0],
              ].map(([l, v]) => (
                <Card key={l as string} className="p-4 text-center">
                  <div className="text-xs text-muted-foreground">{l}</div>
                  <div className="text-2xl font-black">{v as any}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-5">
                <h3 className="font-bold mb-3">Tempo de uso</h3>
                {data.usage.length === 0 ? <p className="text-sm text-muted-foreground">Sem registros ainda.</p> :
                  data.usage.map((u: any) => (
                    <div key={u.page} className="flex justify-between text-sm border-b py-1.5">
                      <span>{u.page}</span><span className="font-semibold">{fmtTime(u.seconds)} · {u.visits}x</span>
                    </div>
                  ))}
              </Card>
              <Card className="p-5">
                <h3 className="font-bold mb-3">Histórico de partidas</h3>
                {data.matches.length === 0 ? <p className="text-sm text-muted-foreground">Nenhuma partida.</p> :
                  data.matches.map((m: any) => (
                    <div key={m.id} className="flex justify-between text-sm border-b py-1.5">
                      <span>{fmtDate(m.created_at)} · {m.match_type ?? "batalha"}</span>
                      <Badge variant={m.won ? "default" : "secondary"}>{m.status === "finished" ? (m.won ? "Vitória" : "Derrota") : m.status}</Badge>
                    </div>
                  ))}
              </Card>
              <Card className="p-5">
                <h3 className="font-bold mb-3">Exercícios e quizzes</h3>
                {data.exercises.length === 0 ? <p className="text-sm text-muted-foreground">Nenhum exercício.</p> :
                  data.exercises.map((e: any, i: number) => (
                    <div key={i} className="flex justify-between text-sm border-b py-1.5">
                      <span>{e.topic_title}</span><span className="font-semibold">{e.correct}/{e.total} · nota {Number(e.score).toFixed(1)}</span>
                    </div>
                  ))}
              </Card>
              <Card className="p-5">
                <h3 className="font-bold mb-3">Notas dos cursos e certificados</h3>
                {data.assessments.length === 0 && data.certificates.length === 0 && <p className="text-sm text-muted-foreground">Nenhuma avaliação.</p>}
                {data.assessments.map((a: any, i: number) => (
                  <div key={i} className="flex justify-between text-sm border-b py-1.5">
                    <span>{a.title}</span>
                    <Badge variant={a.passed ? "default" : "destructive"}>{Number(a.score).toFixed(1)}</Badge>
                  </div>
                ))}
                {data.certificates.map((c: any) => (
                  <div key={c.code} className="text-sm py-1.5">🎓 {c.course_title} — {Number(c.score).toFixed(1)}</div>
                ))}
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

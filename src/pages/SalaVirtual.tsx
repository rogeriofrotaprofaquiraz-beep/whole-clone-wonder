import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { AREAS, genCode, type AreaValue } from "@/lib/aula";
import { gameOrFilter } from "@/lib/linkedBank";
import { LogIn, Loader2, Play, Users } from "lucide-react";

/** Sala virtual em grupo: qualquer aluno cria a sala e os colegas entram pelo código. */
export default function SalaVirtual() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [joinCode, setJoinCode] = useState("");
  const [area, setArea] = useState<AreaValue>("geral");
  const [rounds, setRounds] = useState(10);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null));
  }, []);

  const create = async () => {
    if (!userId) return toast.error("Faça login para criar uma sala");
    setCreating(true);
    try {
      const { count } = await supabase.from("chem_questions").select("id", { count: "exact", head: true })
        .eq("area", area).or(gameOrFilter("partida_ao_vivo"));
      if (!count) throw new Error("Ainda não há questões dessa área para jogar");
      const code = genCode();
      const { error } = await supabase.from("game_sessions")
        .insert({ code, teacher_id: userId, mode: "quiz", area, total_rounds: Math.max(3, Math.min(30, rounds)) });
      if (error) throw error;
      toast.success(`Sala criada: ${code}`);
      navigate(`/aula/sala/${code}?host=1`);
    } catch (e: any) {
      toast.error(e.message ?? "Não foi possível criar a sala");
    } finally { setCreating(false); }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-2"><Users /> Sala Virtual em Grupo</h1>
          <Link to="/" className="text-sm text-muted-foreground underline">← Voltar</Link>
        </div>
        <p className="text-muted-foreground">Um aluno cria a sala e compartilha o código. Os colegas entram com o código, formam equipes e respondem juntos.</p>

        <Card className="p-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><LogIn /> Entrar com código</h3>
          <div className="flex gap-2">
            <Input placeholder="CÓDIGO" value={joinCode} maxLength={6}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              className="font-mono text-xl text-center tracking-widest" />
            <Button disabled={joinCode.length < 4} onClick={() => navigate(`/aula/sala/${joinCode}`)}>Entrar</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2"><Play /> Criar uma sala</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <Label>Área</Label>
              <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm" value={area}
                onChange={(e) => setArea(e.target.value as AreaValue)}>
                {AREAS.map((a) => <option key={a.value} value={a.value}>{a.emoji} {a.label}</option>)}
              </select>
            </div>
            <div>
              <Label>Rodadas</Label>
              <Input type="number" min={3} max={30} value={rounds} onChange={(e) => setRounds(+e.target.value)} />
            </div>
          </div>
          <Button onClick={create} disabled={creating || !userId} className="w-full mt-4">
            {creating ? <Loader2 className="animate-spin mr-2" /> : <Play className="mr-2" />} Criar sala e gerar código
          </Button>
          {!userId && <p className="text-xs text-muted-foreground mt-2">Faça login para criar uma sala.</p>}
        </Card>
      </div>
    </div>
  );
}

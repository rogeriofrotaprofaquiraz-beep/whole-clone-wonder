import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";
import { toast } from "sonner";

type Row = { username: string; level: number; xp: number; coins: number; lifetime_coins: number };

export default function Historico() {
  const [params] = useSearchParams();
  const [code, setCode] = useState(params.get("code") ?? "");
  const [row, setRow] = useState<Row | null>(null);
  const [loading, setLoading] = useState(false);

  const search = async (c?: string) => {
    const q = (c ?? code).trim().toUpperCase();
    if (!q) return;
    setLoading(true);
    const { data, error } = await supabase.rpc("history_by_access_code", { _code: q });
    setLoading(false);
    if (error) return toast.error(error.message);
    const r = (data as any)?.[0];
    if (!r) { setRow(null); return toast.error("Código não encontrado"); }
    setRow(r);
  };

  useEffect(() => { if (params.get("code")) search(params.get("code")!); }, []); // eslint-disable-line

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">
      <div className="max-w-xl mx-auto space-y-6">
        <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
        <Card className="p-6 bg-slate-900/80 border-white/10 space-y-4">
          <h1 className="text-2xl font-black">Código de Acesso</h1>
          <Input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}
            placeholder="AH-XXXXXX"
            className="bg-slate-950 border-white/20 text-white font-black tracking-widest text-center text-lg"/>
          <p className="text-xs text-white/60">O código foi gerado no momento do cadastro do aluno. Se não o tem, solicite à escola.</p>
          <Button onClick={() => search()} disabled={loading} className="w-full bg-amber-600 hover:bg-amber-700 font-black">
            <Search className="w-4 h-4 mr-2"/>Acessar Histórico
          </Button>
        </Card>

        {row && (
          <Card className="p-6 bg-slate-900/80 border-white/10 space-y-2">
            <h2 className="text-xl font-black">{row.username}</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-slate-800/60 rounded"><div className="text-white/60 text-xs">Nível</div><div className="font-black text-lg">{row.level}</div></div>
              <div className="p-3 bg-slate-800/60 rounded"><div className="text-white/60 text-xs">XP</div><div className="font-black text-lg">{row.xp}</div></div>
              <div className="p-3 bg-slate-800/60 rounded"><div className="text-white/60 text-xs">Átomos</div><div className="font-black text-lg text-amber-300">{row.coins} ⚛</div></div>
              <div className="p-3 bg-slate-800/60 rounded"><div className="text-white/60 text-xs">Total ganho</div><div className="font-black text-lg">{row.lifetime_coins} ⚛</div></div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

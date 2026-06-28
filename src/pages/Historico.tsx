import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Search, Users } from "lucide-react";
import { toast } from "sonner";

type Row = { access_code?: string; username: string; level: number; xp: number; coins: number; lifetime_coins: number };

export default function Historico() {
  const [params] = useSearchParams();
  const [code, setCode] = useState(params.get("code") ?? "");
  const [rows, setRows] = useState<Row[]>([]);
  const [bulk, setBulk] = useState("");
  const [loading, setLoading] = useState(false);

  const parseCodes = (s: string) =>
    Array.from(new Set(s.split(/[\s,;]+/).map((x) => x.trim().toUpperCase()).filter(Boolean)));

  const searchOne = async (c?: string) => {
    const q = (c ?? code).trim().toUpperCase();
    if (!q) return;
    setLoading(true);
    const { data, error } = await supabase.rpc("history_by_access_code", { _code: q });
    setLoading(false);
    if (error) return toast.error(error.message);
    const r = (data as any)?.[0];
    if (!r) { setRows([]); return toast.error("Código não encontrado"); }
    setRows([{ ...r, access_code: q }]);
  };

  const searchMany = async () => {
    const codes = parseCodes(bulk);
    if (!codes.length) return toast.error("Informe um ou mais códigos");
    setLoading(true);
    const { data, error } = await supabase.rpc("history_by_access_codes", { _codes: codes });
    setLoading(false);
    if (error) return toast.error(error.message);
    setRows((data as any) ?? []);
    const found = new Set(((data as any) ?? []).map((r: any) => r.access_code));
    const missing = codes.filter((c) => !found.has(c));
    if (missing.length) toast.warning(`Não encontrados: ${missing.join(", ")}`);
    else toast.success(`${codes.length} códigos válidos`);
  };

  useEffect(() => { if (params.get("code")) searchOne(params.get("code")!); }, []); // eslint-disable-line

  return (
    <div className="min-h-screen p-4 md:p-8 text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>

        <Card className="p-6 bg-slate-900/80 border-white/10">
          <Tabs defaultValue="single">
            <TabsList className="bg-slate-800/60">
              <TabsTrigger value="single">Individual</TabsTrigger>
              <TabsTrigger value="bulk"><Users className="w-4 h-4 mr-1"/>Em grupo</TabsTrigger>
            </TabsList>

            <TabsContent value="single" className="space-y-3 pt-3">
              <h1 className="text-xl font-black">Código de Acesso</h1>
              <Input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="AH-XXXXXX"
                className="bg-slate-950 border-white/20 text-white font-black tracking-widest text-center text-lg"/>
              <Button onClick={() => searchOne()} disabled={loading} className="w-full bg-amber-600 hover:bg-amber-700 font-black">
                <Search className="w-4 h-4 mr-2"/>Validar e acessar
              </Button>
            </TabsContent>

            <TabsContent value="bulk" className="space-y-3 pt-3">
              <h1 className="text-xl font-black">Validação em grupo</h1>
              <p className="text-xs text-white/60">Cole vários códigos separados por vírgula, espaço ou linha.</p>
              <Textarea value={bulk} onChange={(e) => setBulk(e.target.value.toUpperCase())}
                placeholder="AH-ABC123, AH-DEF456..."
                className="bg-slate-950 border-white/20 text-white font-bold min-h-32"/>
              <Button onClick={searchMany} disabled={loading} className="w-full bg-amber-600 hover:bg-amber-700 font-black">
                <Search className="w-4 h-4 mr-2"/>Validar {parseCodes(bulk).length || ""} códigos
              </Button>
            </TabsContent>
          </Tabs>
        </Card>

        {rows.length > 0 && (
          <Card className="p-4 bg-slate-900/80 border-white/10">
            <table className="w-full text-sm">
              <thead className="text-xs uppercase text-white/60">
                <tr><th className="text-left p-2">Código</th><th className="text-left p-2">Aluno</th><th className="p-2">Nível</th><th className="p-2">XP</th><th className="p-2">Átomos</th><th className="p-2">Total</th></tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-white/10">
                    <td className="p-2 font-black text-amber-300">{r.access_code}</td>
                    <td className="p-2 font-bold">{r.username}</td>
                    <td className="p-2 text-center">{r.level}</td>
                    <td className="p-2 text-center">{r.xp}</td>
                    <td className="p-2 text-center text-amber-300">{r.coins} ⚛</td>
                    <td className="p-2 text-center text-white/70">{r.lifetime_coins}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}
      </div>
    </div>
  );
}

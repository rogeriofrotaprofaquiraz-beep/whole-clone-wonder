import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { loadWallet, isAdmin, COIN_NAME, COIN_SYMBOL, COSTS } from "@/lib/playerEconomy";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Atom, TrendingUp, History, Wallet, Sparkles } from "lucide-react";

export default function Carteira() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [wallet, setWallet] = useState<any>(null);
  const [admin, setAdmin] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) { navigate("/"); return; }
      setSession(session);
      await ensureUserAccess(session.user);
      const [w, isAdm, lg] = await Promise.all([
        loadWallet(session.user.id),
        isAdmin(session.user.id),
        supabase.from("activity_logs")
          .select("action, path, metadata, created_at")
          .eq("user_id", session.user.id)
          .order("created_at", { ascending: false })
          .limit(30),
      ]);
      setWallet(w); setAdmin(isAdm); setLogs(lg.data ?? []);
    });
  }, [navigate]);

  if (!session) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Carregando…</div>;

  const coins = wallet?.coins ?? 0;
  const lifetime = wallet?.lifetime_coins ?? 0;
  const spent = Math.max(0, lifetime - coins);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">Carteira</h1>
          <div/>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          <Card className="bg-gradient-to-br from-amber-600/30 to-orange-700/30 border-amber-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-black mb-2"><Wallet className="w-4 h-4"/>Saldo atual</div>
              <div className="text-4xl font-black flex items-center gap-2">{admin ? "∞" : coins} <span className="text-2xl text-amber-400">{COIN_SYMBOL}</span></div>
              <div className="text-xs text-white/60 mt-1">{COIN_NAME} disponíveis</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/60 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-emerald-300 text-xs uppercase tracking-widest font-black mb-2"><TrendingUp className="w-4 h-4"/>Total ganho</div>
              <div className="text-4xl font-black">{lifetime}</div>
              <div className="text-xs text-white/60 mt-1">Acumulado em toda a jornada</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/60 border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-rose-300 text-xs uppercase tracking-widest font-black mb-2"><Atom className="w-4 h-4"/>Total gasto</div>
              <div className="text-4xl font-black">{spent}</div>
              <div className="text-xs text-white/60 mt-1">Em desbloqueios e personalizações</div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900/60 border-white/10 mb-6">
          <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><Sparkles className="w-4 h-4"/>Tabela de Preços</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-2 text-sm">
            <Row label="Gerar avatar com IA" value={COSTS.generateAvatarAI}/>
            <Row label="Alterar aparência" value={COSTS.changeAppearance}/>
            <Row label="Upload de foto" value={COSTS.uploadPhoto}/>
            <Row label="Upload de avatar" value={COSTS.uploadAvatar}/>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/60 border-white/10">
          <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><History className="w-4 h-4"/>Atividade recente</CardTitle></CardHeader>
          <CardContent>
            {logs.length === 0 ? (
              <p className="text-sm text-white/50">Sem atividades registradas ainda. Jogue para começar a ganhar {COIN_NAME}!</p>
            ) : (
              <div className="divide-y divide-white/5 max-h-[400px] overflow-y-auto">
                {logs.map((l, i) => (
                  <div key={i} className="py-2 flex items-center justify-between text-xs">
                    <div>
                      <Badge variant="outline" className="border-white/10 text-white/80 mr-2">{l.action}</Badge>
                      <span className="text-white/60">{l.path}</span>
                    </div>
                    <span className="text-white/40">{new Date(l.created_at).toLocaleString("pt-BR")}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between bg-slate-950/60 border border-white/5 rounded-xl px-3 py-2">
      <span className="text-white/80">{label}</span>
      <span className="font-black text-amber-300">{value}{COIN_SYMBOL}</span>
    </div>
  );
}

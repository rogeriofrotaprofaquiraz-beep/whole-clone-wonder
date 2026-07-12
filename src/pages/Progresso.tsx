import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { loadAvatar, loadWallet, isAdmin, COIN_NAME, COIN_SYMBOL } from "@/lib/playerEconomy";
import { levelFromLifetime, xpProgress, maxAtomicForLevel, MAX_LEVEL } from "@/lib/playerProfile";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Gift, Lock, Check, Sparkles, Star, ClipboardCheck } from "lucide-react";
import { toast } from "sonner";

/** Recompensas por nível: cada um libera Átomos extras (pode reivindicar 1x). */
const LEVEL_REWARDS: Record<number, { coins: number; title: string }> = {
  1: { coins: 50, title: "Aprendiz Atômico" },
  2: { coins: 150, title: "Iniciante Elemental" },
  3: { coins: 300, title: "Cadete da Tabela" },
  4: { coins: 500, title: "Estudante de Transição" },
  5: { coins: 800, title: "Mestre dos Metais" },
  6: { coins: 1200, title: "Guardião dos Halogênios" },
  7: { coins: 1800, title: "Sábio dos Gases Nobres" },
  8: { coins: 2600, title: "Lorde Lantanídeo" },
  9: { coins: 3800, title: "Arconte Actinídeo" },
  10: { coins: 5500, title: "Soberano da Tabela" },
};

const REWARD_KEY = (lvl: number) => `reward_lvl_${lvl}`;

export default function Progresso() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [wallet, setWallet] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);
  const [admin, setAdmin] = useState(false);
  const [busy, setBusy] = useState(false);
  const [attempts, setAttempts] = useState<any[]>([]);


  const refresh = async (uid: string) => {
    const [w, a, isAdm] = await Promise.all([loadWallet(uid), loadAvatar(uid), isAdmin(uid)]);
    setWallet(w); setAvatar(a); setAdmin(isAdm);
  };

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session?.user) { navigate("/"); return; }
      setSession(session);
      await ensureUserAccess(session.user);
      await refresh(session.user.id);
    });
  }, [navigate]);

  const lifetime = wallet?.lifetime_coins ?? 0;
  const coins = wallet?.coins ?? 0;
  const progress = useMemo(() => xpProgress(lifetime), [lifetime]);
  const level = progress.level;
  const claimed: string[] = avatar?.unlocked ?? [];

  const claimReward = async (lvl: number) => {
    if (!session?.user) return;
    const key = REWARD_KEY(lvl);
    if (claimed.includes(key)) return;
    if (level < lvl) { toast.error(`Você precisa alcançar o nível ${lvl}.`); return; }
    setBusy(true);
    try {
      const reward = LEVEL_REWARDS[lvl];
      const newUnlocked = [...claimed, key];
      await supabase.from("player_avatars").update({ unlocked: newUnlocked }).eq("user_id", session.user.id);
      if (!admin) {
        await supabase.from("player_wallet").update({
          coins: coins + reward.coins,
          lifetime_coins: lifetime + reward.coins,
        }).eq("user_id", session.user.id);
      }
      await refresh(session.user.id);
      toast.success(`+${reward.coins}${COIN_SYMBOL} — ${reward.title} desbloqueado!`);
    } finally { setBusy(false); }
  };

  if (!session) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Carregando…</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <h1 className="text-2xl md:text-3xl font-black italic uppercase tracking-tight">Progresso & Recompensas</h1>
          <div/>
        </div>

        <Card className="bg-gradient-to-br from-violet-700/30 to-fuchsia-700/30 border-violet-400/30 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-xs uppercase tracking-widest text-white/60 font-black">Nível atual</div>
                <div className="text-5xl font-black flex items-center gap-3">
                  <Star className="w-8 h-8 text-amber-300"/>{level}
                  <span className="text-sm text-white/60 font-medium">/ {MAX_LEVEL}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-widest text-white/60 font-black">XP total</div>
                <div className="text-3xl font-black flex items-center gap-2"><Trophy className="w-6 h-6 text-amber-300"/>{lifetime}</div>
                <div className="text-[10px] text-white/60">Libera elementos até nº {admin ? "∞" : maxAtomicForLevel(level)}</div>
              </div>
            </div>
            <Progress value={progress.percent} className="h-3"/>
            <div className="text-[10px] text-white/60 mt-2">{progress.current}/{progress.needed} XP para o próximo nível</div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/60 border-white/10">
          <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><Gift className="w-4 h-4"/>Trilha de Recompensas</CardTitle></CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-3">
            {Array.from({ length: MAX_LEVEL }, (_, i) => i + 1).map((lvl) => {
              const reward = LEVEL_REWARDS[lvl];
              const key = REWARD_KEY(lvl);
              const isClaimed = claimed.includes(key);
              const isReached = level >= lvl;
              return (
                <div key={lvl} className={`relative rounded-2xl p-4 border ${isClaimed ? "bg-emerald-500/10 border-emerald-500/30" : isReached ? "bg-slate-950/70 border-amber-500/30" : "bg-slate-950/40 border-white/5 opacity-60"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-white/20 text-white/80 font-black">Nível {lvl}</Badge>
                    {isClaimed ? <Check className="w-4 h-4 text-emerald-400"/> : isReached ? <Sparkles className="w-4 h-4 text-amber-300"/> : <Lock className="w-4 h-4 text-white/40"/>}
                  </div>
                  <div className="font-black text-base">{reward.title}</div>
                  <div className="text-xs text-white/60 mb-3">Recompensa: <span className="text-amber-300 font-black">+{reward.coins}{COIN_SYMBOL}</span> {COIN_NAME}</div>
                  <Button
                    size="sm"
                    disabled={busy || isClaimed || !isReached}
                    onClick={() => claimReward(lvl)}
                    className={`w-full ${isClaimed ? "bg-emerald-700 hover:bg-emerald-700" : "bg-gradient-to-r from-amber-500 to-orange-600"}`}
                  >
                    {isClaimed ? "Resgatado" : isReached ? `Resgatar +${reward.coins}${COIN_SYMBOL}` : `Bloqueado`}
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

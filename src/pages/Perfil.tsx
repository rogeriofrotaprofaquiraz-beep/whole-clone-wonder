import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PlayerAvatar, AvatarDisplay } from "@/components/aula/PlayerAvatar";
import {
  Coins, Star, Trophy, Zap, TrendingUp, Award, Sparkles, ArrowLeft, Gamepad2,
} from "lucide-react";

type Profile = {
  id: string; username: string | null; level: number | null; xp: number | null;
  wins: number | null; losses: number | null; streak: number | null; rank_points: number | null;
};
type Wallet = { coins: number; lifetime_coins: number };
type Stats = {
  display_name: string | null;
  avatar_url: string | null;
  ranking_points: number;
  total_games: number;
  total_wins: number;
  total_losses: number;
  total_draws: number;
  win_streak: number;
  best_win_streak: number;
  favorite_element: string | null;
};
type Avatar = { generated_url: string | null; photo_url: string | null; current_card: string | null; unlocked_cards: string[] | null };
type Element = { symbol: string; number: number; name: string; hero_name: string | null; hero_image: string | null; rarity: string | null };

const MILESTONES = [
  { at: 5, label: "Cientista", icon: "🧪" },
  { at: 10, label: "Especialista", icon: "🎯" },
  { at: 18, label: "Mestre", icon: "⭐" },
  { at: 30, label: "Grandioso", icon: "👑" },
  { at: 50, label: "Lendário", icon: "🏆" },
];

const DIFFICULTY = [
  { label: "Fácil", desc: "1 moeda/resposta", color: "from-emerald-600/20 to-emerald-900/20 border-emerald-700 text-emerald-300" },
  { label: "Médio", desc: "2 moedas/resposta", color: "from-amber-600/20 to-amber-900/20 border-amber-700 text-amber-300" },
  { label: "Difícil", desc: "3 moedas/resposta", color: "from-rose-600/20 to-rose-900/20 border-rose-700 text-rose-300" },
  { label: "Bônus Tempo", desc: "Resposta rápida", color: "from-violet-600/20 to-violet-900/20 border-violet-700 text-violet-300" },
];

export default function Perfil() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [unlockedHeroes, setUnlockedHeroes] = useState<Element[]>([]);
  const [totalHeroes, setTotalHeroes] = useState(0);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { navigate("/"); return; }
      setUserId(data.user.id);
    });
  }, [navigate]);

  useEffect(() => {
    if (!userId) return;
    (async () => {
      const [{ data: p }, { data: w }, { data: a }, { data: s }, { count }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
        supabase.from("player_wallet").select("coins, lifetime_coins").eq("user_id", userId).maybeSingle(),
        supabase.from("player_avatars").select("generated_url, photo_url, current_card, unlocked_cards").eq("user_id", userId).maybeSingle(),
        (supabase as any).from("player_stats").select("*").eq("user_id", userId).maybeSingle(),
        supabase.from("elements").select("*", { count: "exact", head: true }),
      ]);
      setProfile(p as Profile | null);
      setWallet((w as Wallet | null) ?? { coins: 0, lifetime_coins: 0 });
      setAvatar(a as Avatar | null);
      setStats((s as Stats | null) ?? null);
      setTotalHeroes(count ?? 0);

      const symbols = (a as Avatar | null)?.unlocked_cards ?? [];
      if (symbols.length) {
        const { data: heroes } = await supabase.from("elements")
          .select("symbol,number,name,hero_name,hero_image,rarity").in("symbol", symbols);
        setUnlockedHeroes((heroes as Element[]) ?? []);
      } else {
        setUnlockedHeroes([]);
      }
    })();
  }, [userId]);

  if (!profile || !wallet) {
    return <div className="min-h-screen bg-slate-950 text-slate-300 flex items-center justify-center">Carregando perfil…</div>;
  }

  const wins = stats?.total_wins ?? profile.wins ?? 0;
  const losses = stats?.total_losses ?? profile.losses ?? 0;
  const draws = stats?.total_draws ?? 0;
  const totalGames = stats?.total_games ?? (wins + losses);
  const level = profile.level ?? 1;
  const points = stats?.ranking_points ?? profile.rank_points ?? 0;
  const streak = stats?.win_streak ?? profile.streak ?? 0;
  const bestStreak = stats?.best_win_streak ?? profile.streak ?? 0;
  const displayName = stats?.display_name ?? profile.username ?? "jogador";
  const favorite = stats?.favorite_element ?? null;
  const heroCount = unlockedHeroes.length;
  const nextMilestone = MILESTONES.find((m) => heroCount < m.at) ?? MILESTONES[MILESTONES.length - 1];
  const heroProgress = Math.min(100, (heroCount / nextMilestone.at) * 100);
  const activeHero = unlockedHeroes.find((h) => h.symbol === avatar?.current_card) ?? unlockedHeroes[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-[#0f0a1f] to-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-slate-300 hover:text-white">
            <ArrowLeft size={16} className="mr-1" />Voltar
          </Button>
          <Link to="/aula" className="text-sm text-violet-300 hover:text-violet-200 flex items-center gap-1">
            <Gamepad2 size={14} />Jogar
          </Link>
        </div>

        {/* HEADER */}
        <Card className="p-5 bg-gradient-to-br from-[#2d1f5f] via-[#3b1f6e] to-[#1e1145] border-violet-800/60 shadow-xl shadow-violet-950/40">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
            <div className="flex items-end gap-2">
              <div className="rounded-full p-1 bg-gradient-to-br from-violet-400 to-fuchsia-500">
                <div className="rounded-full bg-slate-950 p-0.5">
                  <AvatarDisplay avatar={avatar} size={88} />
                </div>
              </div>
              {activeHero?.hero_image && (
                <div className="relative -ml-3 rounded-xl overflow-hidden border-2 border-amber-400/70 shadow-lg shadow-amber-500/20">
                  <img src={activeHero.hero_image} alt={activeHero.hero_name ?? activeHero.symbol}
                       className="w-14 h-14 object-cover" />
                  <Badge className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-[10px] px-1 py-0">
                    {activeHero.symbol}
                  </Badge>
                </div>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-black tracking-tight">
                {profile.username ?? "jogador"}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-amber-950/60 border border-amber-700 text-amber-300 flex items-center gap-1 px-3 py-1">
                  <Coins size={12} />{wallet.coins} moedas
                </Badge>
                <Badge className="bg-blue-950/60 border border-blue-700 text-blue-300 flex items-center gap-1 px-3 py-1">
                  <Star size={12} />Nível {level}
                </Badge>
                <Badge className="bg-violet-950/60 border border-violet-700 text-violet-300 flex items-center gap-1 px-3 py-1">
                  <Sparkles size={12} />{points} pontos
                </Badge>
                <Badge className="bg-emerald-950/60 border border-emerald-700 text-emerald-300 flex items-center gap-1 px-3 py-1">
                  <Trophy size={12} />{wins} vitórias
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <StatCard icon={<TrendingUp size={16} className="text-amber-400" />} label="Total Ganho"
                    value={`${wallet.lifetime_coins} moedas`} accent="from-amber-900/30 to-transparent border-amber-800/60" />
          <StatCard icon={<Zap size={16} className="text-violet-400" />} label="Melhor Sequência"
                    value={`${profile.streak ?? 0} vitórias`} accent="from-violet-900/30 to-transparent border-violet-800/60" />
          <StatCard icon={<Trophy size={16} className="text-blue-400" />} label="Total de Jogos"
                    value={`${totalGames}`} accent="from-blue-900/30 to-transparent border-blue-800/60" />
        </div>

        {/* PROGRESSION */}
        <Card className="p-5 bg-gradient-to-br from-violet-950/60 to-slate-950/80 border-violet-800/60">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-amber-400" />
              <span className="font-bold">
                Nível {level} — {heroCount} herói(s) desbloqueado(s)
              </span>
            </div>
            <span className="text-xs text-slate-400">{heroCount}/{nextMilestone.at}</span>
          </div>
          <Progress value={heroProgress} className="h-2 bg-slate-800" />
          <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
            <span>Heróis: {heroCount}</span>
            <span>Próximo marco: {nextMilestone.at} heróis</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {MILESTONES.map((m) => (
              <Badge key={m.label} variant="outline"
                     className={`border-slate-700 ${heroCount >= m.at ? "bg-violet-700/40 text-white border-violet-500" : "bg-slate-900/60 text-slate-400"}`}>
                {m.icon} {m.at} — {m.label}
              </Badge>
            ))}
          </div>
        </Card>

        {/* COLLECTION */}
        <Card className="p-5 bg-slate-900/60 border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold flex items-center gap-2">
              <Sparkles size={16} className="text-violet-400" />Coleção de Heróis Elementais
            </h2>
            <span className="text-xs text-slate-400">{heroCount} / {totalHeroes} desbloqueados</span>
          </div>
          {heroCount === 0 ? (
            <div className="text-center text-sm text-slate-500 py-8">
              Você ainda não desbloqueou nenhum herói. Jogue para conquistar cartas!
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {unlockedHeroes.slice(0, 10).map((h) => {
                const active = h.symbol === avatar?.current_card;
                return (
                  <div key={h.symbol}
                       className={`relative rounded-xl overflow-hidden border-2 ${active ? "border-emerald-400 ring-2 ring-emerald-500/40" : "border-slate-700"} bg-slate-950`}>
                    {active && <Badge className="absolute top-1 right-1 z-10 bg-emerald-500 text-black text-[10px]">ATIVO</Badge>}
                    <div className="aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-950">
                      {h.hero_image ? <img src={h.hero_image} alt={h.hero_name ?? h.symbol} className="w-full h-full object-cover" />
                        : <div className="w-full h-full flex items-center justify-center text-3xl text-violet-400 font-black">{h.symbol}</div>}
                    </div>
                    <div className="p-2">
                      <div className="text-xs font-bold truncate">{h.hero_name ?? h.name}</div>
                      <div className="text-[10px] text-slate-400">{h.symbol} — #{h.number}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </Card>

        {/* AVATAR CUSTOMIZE */}
        <Card className="p-5 bg-slate-900/60 border-slate-800">
          <h2 className="font-bold mb-1">Personalize seu Avatar</h2>
          <p className="text-sm text-slate-400 mb-4">
            Ganhe moedas jogando e use-as para personalizar seu avatar! Quanto maior a dificuldade, mais moedas você ganha.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {DIFFICULTY.map((d) => (
              <div key={d.label} className={`rounded-lg border bg-gradient-to-br ${d.color} px-3 py-2`}>
                <div className="font-bold text-sm">{d.label}</div>
                <div className="text-xs opacity-80">{d.desc}</div>
              </div>
            ))}
          </div>
          <Button onClick={() => setShowCustomize((v) => !v)}
                  className="w-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-fuchsia-500 hover:opacity-90 text-white font-bold">
            {showCustomize ? "Fechar" : "Personalizar Avatar"}
          </Button>
          {showCustomize && (
            <div className="mt-4">
              <PlayerAvatar />
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, accent }: { icon: React.ReactNode; label: string; value: string; accent: string }) {
  return (
    <Card className={`p-4 bg-gradient-to-br ${accent}`}>
      <div className="flex items-center gap-2 text-xs text-slate-300/80 mb-1">{icon}{label}</div>
      <div className="text-xl font-black">{value}</div>
    </Card>
  );
}

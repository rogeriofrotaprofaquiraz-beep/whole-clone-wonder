import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  SHOP_ITEMS, SKIN_TONES, BG_STYLES, AvatarItem,
  loadAvatar, loadWallet, buyItem, equipItem, setSkin, isAdmin,
} from "@/lib/playerEconomy";
import { Coins, Lock, Check, ShoppingBag, Infinity as InfinityIcon } from "lucide-react";
import { toast } from "sonner";

export function AvatarDisplay({ avatar, size = 96 }: { avatar: any; size?: number }) {
  if (!avatar) return null;
  const eq = avatar.equipped ?? {};
  const bg = BG_STYLES[eq.background] ?? BG_STYLES.bg_violet;
  const item = (id: string) => SHOP_ITEMS.find((i) => i.id === id);
  const hat = item(eq.hat); const glasses = item(eq.glasses); const outfit = item(eq.outfit);
  const skin = `#${avatar.skin ?? "F2C9A0"}`;
  return (
    <div className="relative rounded-2xl overflow-hidden flex items-end justify-center"
         style={{ width: size, height: size, background: bg }}>
      <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow">
        {/* shoulders / torso */}
        <path d="M10 100 Q10 72 32 66 L68 66 Q90 72 90 100 Z" fill="#1f2937" />
        <path d="M44 66 L56 66 L54 78 Q50 82 46 78 Z" fill={skin} />
        {/* head */}
        <ellipse cx="50" cy="42" rx="22" ry="24" fill={skin} />
        {/* hair */}
        <path d="M28 38 Q32 18 50 18 Q68 18 72 38 Q66 30 50 30 Q34 30 28 38 Z" fill="#3b2410" />
        {/* ears */}
        <ellipse cx="27" cy="44" rx="3" ry="5" fill={skin} />
        <ellipse cx="73" cy="44" rx="3" ry="5" fill={skin} />
        {/* eyes */}
        <ellipse cx="42" cy="44" rx="2.2" ry="2.8" fill="#1f2937" />
        <ellipse cx="58" cy="44" rx="2.2" ry="2.8" fill="#1f2937" />
        <circle cx="42.6" cy="43.2" r="0.7" fill="#fff" />
        <circle cx="58.6" cy="43.2" r="0.7" fill="#fff" />
        {/* nose */}
        <path d="M50 47 L48 54 Q50 56 52 54 Z" fill="#00000022" />
        {/* mouth */}
        <path d="M43 58 Q50 64 57 58" stroke="#7c2d12" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* cheeks */}
        <circle cx="36" cy="54" r="3" fill="#ef444455" />
        <circle cx="64" cy="54" r="3" fill="#ef444455" />
      </svg>
      {hat && <div className="absolute" style={{ top: size * 0.02, fontSize: size * 0.36, lineHeight: 1 }}>{hat.emoji}</div>}
      {glasses && <div className="absolute" style={{ top: size * 0.34, fontSize: size * 0.28, lineHeight: 1 }}>{glasses.emoji}</div>}
      {outfit && <div className="absolute" style={{ bottom: size * 0.04, right: size * 0.06, fontSize: size * 0.3, lineHeight: 1 }}>{outfit.emoji}</div>}
    </div>
  );
}


export function PlayerAvatar() {
  const [userId, setUserId] = useState<string | null>(null);
  const [wallet, setWallet] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id ?? null);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError(null);
    Promise.all([loadWallet(userId), loadAvatar(userId)])
      .then(([walletData, avatarData]) => {
        setWallet(walletData);
        setAvatar(avatarData);
        if (!walletData || !avatarData) setError("Não foi possível criar o avatar agora.");
      })
      .catch((e) => setError(e.message || "Erro ao carregar avatar."))
      .finally(() => setLoading(false));
  }, [userId, tick]);

  // poll wallet every 4s so coins update after game wins
  useEffect(() => {
    if (!userId) return;
    const id = setInterval(() => loadWallet(userId).then(setWallet), 4000);
    return () => clearInterval(id);
  }, [userId]);

  if (loading) {
    return <Card className="p-4 text-center text-sm text-muted-foreground">Carregando avatar...</Card>;
  }

  if (!userId) {
    return (
      <Card className="p-4 text-center text-sm text-muted-foreground">
        Faça login para ter avatar e moedas.
      </Card>
    );
  }

  if (error || !avatar || !wallet) {
    return <Card className="p-4 text-center text-sm text-destructive">{error || "Avatar indisponível."}</Card>;
  }

  const unlocked: string[] = avatar.unlocked ?? [];
  const eq = avatar.equipped ?? {};

  const handleBuy = async (item: AvatarItem) => {
    const r = await buyItem(userId, item);
    if (!r.ok) return toast.error(r.reason!);
    await equipItem(userId, item);
    toast.success(`${item.emoji} ${item.name} desbloqueado!`);
    setTick((t) => t + 1);
  };

  const handleEquip = async (item: AvatarItem) => {
    if (eq[item.slot] === item.id) {
      // unequip by re-equipping default for backgrounds (always violet)
      if (item.slot === "background") {
        await equipItem(userId, SHOP_ITEMS.find((i) => i.id === "bg_violet")!);
      } else {
        const a = await loadAvatar(userId);
        const e = { ...(a.equipped ?? {}) }; delete e[item.slot];
        await supabase.from("player_avatars").update({ equipped: e }).eq("user_id", userId);
      }
    } else {
      await equipItem(userId, item);
    }
    setTick((t) => t + 1);
  };

  const changeSkin = async (s: string) => { await setSkin(userId, s); setTick((t) => t + 1); };

  return (
    <Card className="p-4 flex items-center gap-3">
      <AvatarDisplay avatar={avatar} size={72} />
      <div className="flex-1 min-w-0">
        <div className="font-bold text-sm truncate">Criar e melhorar meu Avatar</div>
        <div className="flex items-center gap-1 text-amber-600 font-black">
          <Coins size={16} /> {wallet.coins} <span className="text-xs text-muted-foreground font-normal">moedas</span>
        </div>
        <div className="text-xs text-muted-foreground">Total ganho: {wallet.lifetime_coins}</div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="outline"><ShoppingBag size={14} className="mr-1" />Loja</Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              Loja do Avatar
              <Badge className="bg-amber-500"><Coins size={12} className="mr-1" />{wallet.coins}</Badge>
            </DialogTitle>
          </DialogHeader>

          <div className="flex justify-center my-3"><AvatarDisplay avatar={avatar} size={120} /></div>

          <div className="mb-4">
            <div className="text-xs font-bold mb-2 uppercase text-muted-foreground">Tom de pele</div>
            <div className="flex gap-2">
              {SKIN_TONES.map((s) => (
                <button key={s} onClick={() => changeSkin(s)}
                  className={`w-8 h-8 rounded-full border-2 ${avatar.skin === s ? "border-violet-700 ring-2 ring-violet-300" : "border-white"}`}
                  style={{ background: `#${s}` }} />
              ))}
            </div>
          </div>

          {(["hat", "glasses", "outfit", "background"] as const).map((slot) => (
            <div key={slot} className="mb-4">
              <div className="text-xs font-bold mb-2 uppercase text-muted-foreground">
                {slot === "hat" ? "Chapéus" : slot === "glasses" ? "Óculos" : slot === "outfit" ? "Roupas" : "Fundo"}
              </div>
              <div className="grid grid-cols-3 gap-2">
                {SHOP_ITEMS.filter((i) => i.slot === slot).map((item) => {
                  const owned = unlocked.includes(item.id);
                  const equippedNow = eq[item.slot] === item.id;
                  return (
                    <button key={item.id} onClick={() => owned ? handleEquip(item) : handleBuy(item)}
                      className={`p-3 rounded-lg border-2 text-left transition ${equippedNow ? "border-violet-600 bg-violet-50" : "border-slate-200 bg-white hover:border-slate-400"}`}>
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="text-xs font-bold truncate">{item.name}</div>
                      <div className="text-xs mt-1 flex items-center gap-1">
                        {owned
                          ? (equippedNow
                              ? <span className="text-violet-700 font-bold flex items-center gap-1"><Check size={12} />Equipado</span>
                              : <span className="text-emerald-700">Equipar</span>)
                          : <span className="text-amber-700 flex items-center gap-1">
                              {wallet.coins < item.price && <Lock size={10} />}<Coins size={10} />{item.price}
                            </span>}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </DialogContent>
      </Dialog>
    </Card>
  );
}

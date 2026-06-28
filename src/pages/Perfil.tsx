import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { loadAvatar, loadWallet, isAdmin, COIN_SYMBOL, COIN_NAME, COSTS } from "@/lib/playerEconomy";
import { ELEMENTS_DATA } from "@/data/elements";
import { levelFromLifetime, xpProgress, maxAtomicForLevel, canUnlockCard, cardUnlockCost, listAllCards } from "@/lib/playerProfile";
import { RARITY_FRAME, FAMILY_BADGE, getFamily, calcRarity } from "@/lib/heroStyles";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowLeft, Atom, Lock, Sparkles, Trophy, Wand2, Check } from "lucide-react";

const APPEARANCE_LABELS: Record<string, string> = {
  gender: "Gênero",
  body: "Tipo de corpo",
  skin: "Tom de pele",
  hairStyle: "Estilo de cabelo",
  hairColor: "Cor do cabelo",
};

const APPEARANCE_OPTIONS = {
  gender: [
    { v: "masculino", l: "Masculino" },
    { v: "feminino", l: "Feminino" },
  ],
  body: [
    { v: "magro", l: "Magro" },
    { v: "normal", l: "Atlético" },
    { v: "musculoso", l: "Musculoso" },
    { v: "curvy", l: "Curvilíneo" },
  ],
  skin: [
    { v: "muito_clara", l: "Muito clara" },
    { v: "clara", l: "Clara" },
    { v: "morena", l: "Morena" },
    { v: "escura", l: "Escura" },
    { v: "negra", l: "Negra" },
  ],
  hairStyle: [
    { v: "curto", l: "Curto" },
    { v: "medio", l: "Médio" },
    { v: "longo", l: "Longo" },
    { v: "cacheado", l: "Cacheado" },
    { v: "crespo", l: "Crespo" },
    { v: "careca", l: "Careca" },
  ],
  hairColor: [
    { v: "preto", l: "Preto" },
    { v: "castanho", l: "Castanho" },
    { v: "loiro", l: "Loiro" },
    { v: "ruivo", l: "Ruivo" },
    { v: "grisalho", l: "Grisalho" },
  ],
};


export default function Perfil() {
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);
  const [wallet, setWallet] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);
  const [admin, setAdmin] = useState(false);
  const [busy, setBusy] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [profileName, setProfileName] = useState<string>("");




  const refresh = async (userId: string) => {
    const [w, a, isAdm, prof] = await Promise.all([
      loadWallet(userId),
      loadAvatar(userId),
      isAdmin(userId),
      supabase.from("profiles").select("username").eq("id", userId).maybeSingle(),
    ]);
    // garante hidrogênio inicial
    const unlocked: string[] = a?.unlocked_cards ?? [];
    if (!unlocked.includes("H")) {
      const next = ["H", ...unlocked];
      const patch: any = { unlocked_cards: next };
      if (!a?.current_card) patch.current_card = "H";
      await supabase.from("player_avatars").update(patch).eq("user_id", userId);
      a.unlocked_cards = next;
      a.current_card = a.current_card || "H";
    } else if (!a?.current_card) {
      await supabase.from("player_avatars").update({ current_card: "H" }).eq("user_id", userId);
      a.current_card = "H";
    }
    setWallet(w);
    setAvatar(a);
    setAdmin(isAdm);
    setProfileName(prof.data?.username ?? "");
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
  const maxAtomic = maxAtomicForLevel(level);
  const currentSymbol = avatar?.current_card ?? "H";
  const currentEl = ELEMENTS_DATA[currentSymbol] ?? ELEMENTS_DATA["H"];
  const family = getFamily(currentEl.symbol, currentEl.number);
  const fb = FAMILY_BADGE[family];
  const rarity = calcRarity(currentEl.attributes, currentEl.rarity);
  const frame = RARITY_FRAME[rarity];

  const avatarImage = avatar?.generated_url || currentEl.heroImage;

  const unlockedSet = new Set<string>(avatar?.unlocked_cards ?? ["H"]);

  const handleEquip = async (symbol: string) => {
    if (!session?.user) return;
    if (!unlockedSet.has(symbol)) return;
    setBusy(true);
    try {
      await supabase.from("player_avatars").update({ current_card: symbol, generated_url: null }).eq("user_id", session.user.id);
      await refresh(session.user.id);
      toast.success(`Carta equipada: ${ELEMENTS_DATA[symbol]?.name ?? symbol}`);
    } finally { setBusy(false); }
  };

  const handleUnlock = async (symbol: string) => {
    if (!session?.user) return;
    if (!canUnlockCard(symbol, level) && !admin) {
      toast.error(`Suba de nível para desbloquear (atual nível ${level} libera até nº ${maxAtomic}).`);
      return;
    }
    const cost = cardUnlockCost(symbol);
    if (!admin && coins < cost) { toast.error(`${COIN_NAME} insuficientes (precisa ${cost}${COIN_SYMBOL}).`); return; }
    setBusy(true);
    try {
      const newUnlocked = [...(avatar?.unlocked_cards ?? []), symbol];
      await supabase.from("player_avatars").update({ unlocked_cards: newUnlocked }).eq("user_id", session.user.id);
      if (!admin) {
        await supabase.from("player_wallet").update({ coins: coins - cost }).eq("user_id", session.user.id);
      }
      await refresh(session.user.id);
      toast.success(`Carta desbloqueada: ${ELEMENTS_DATA[symbol]?.name ?? symbol}`);
    } finally { setBusy(false); }
  };

  const updateAppearance = async (patch: Record<string, string>) => {
    if (!session?.user) return;
    const nextApp = { ...(avatar?.appearance ?? {}), ...patch };
    await supabase.from("player_avatars").update({ appearance: nextApp }).eq("user_id", session.user.id);
    setAvatar({ ...avatar, appearance: nextApp });
  };

  const handleGenerate = async () => {
    if (!session?.user) return;
    if (!admin && coins < COSTS.generateAvatarAI) {
      toast.error(`Precisa de ${COSTS.generateAvatarAI}${COIN_SYMBOL} para gerar com IA.`);
      return;
    }
    setGenerating(true);
    try {
      if (!admin) {
        await supabase.from("player_wallet").update({ coins: coins - COSTS.generateAvatarAI }).eq("user_id", session.user.id);
      }
      const { data, error } = await supabase.functions.invoke("generate-player-avatar", {
        body: { cardSymbol: currentSymbol, appearance: avatar?.appearance ?? {}, equipped: avatar?.equipped ?? {}, photoBase64 },
      });

      if (error || data?.error) {
        if (!admin) await supabase.from("player_wallet").update({ coins }).eq("user_id", session.user.id);
        toast.error(data?.error ?? error?.message ?? "Falha ao gerar avatar");
      } else {
        toast.success(data?.message ?? "Avatar gerado com sucesso!");
        if (data?.fallback && !admin) await supabase.from("player_wallet").update({ coins }).eq("user_id", session.user.id);
      }
      await refresh(session.user.id);
    } finally { setGenerating(false); }
  };

  if (!session) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Carregando…</div>;

  const allCards = listAllCards();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/"><Button variant="ghost" className="text-white"><ArrowLeft className="w-4 h-4 mr-2"/>Voltar</Button></Link>
          <div className="flex items-center gap-3 bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-2">
            <Atom className="w-4 h-4 text-amber-400"/>
            <span className="font-black">{admin ? "∞" : coins} {COIN_SYMBOL}</span>
            <span className="text-xs text-white/40">{COIN_NAME}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Avatar atual */}
          <Card className="md:col-span-1 bg-slate-900/60 border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-sm font-black uppercase tracking-widest">Seu Herói</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`relative rounded-2xl overflow-hidden border-[3px] ${frame.ring} ${frame.glow} bg-slate-950 aspect-[2/3]`}>
                <img src={avatarImage} alt={currentEl.heroName} className="w-full h-full object-cover"/>
                <div className="absolute top-2 left-2">
                  <div className={`min-w-10 h-10 px-2 rounded-xl flex items-center justify-center border ${fb.bg} ${fb.text} ${fb.border} ${fb.glow} backdrop-blur-md`}>
                    <span className="text-xl font-black italic">{currentEl.symbol}</span>
                  </div>
                </div>
                <div className="absolute top-2 right-2 min-w-10 h-10 px-2 rounded-xl flex items-center justify-center bg-black/60 border border-white/30 backdrop-blur-md">
                  <span className="text-lg font-black italic">{currentEl.number}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <p className="text-xs font-black uppercase tracking-wider">{currentEl.heroName}</p>
                  <p className="text-[10px] text-white/60">{currentEl.name}</p>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/60 mb-1">
                    <span>Nível {level}</span>
                    <span className="flex items-center gap-1"><Trophy className="w-3 h-3"/>{lifetime} XP</span>
                  </div>
                  <Progress value={progress.percent}/>
                  <div className="text-[10px] text-white/40 mt-1">{progress.current}/{progress.needed} para o próximo nível</div>
                </div>
                <div className="text-xs text-white/70">
                  <span className="font-bold">@{profileName || session.user.email?.split("@")[0]}</span>
                </div>
                <Button onClick={handleGenerate} disabled={generating || busy} className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white font-black">
                  <Wand2 className="w-4 h-4 mr-2"/>
                  {generating ? "Gerando…" : `Personalizar com IA (${admin ? "∞" : COSTS.generateAvatarAI}${COIN_SYMBOL})`}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Personalização + Cartas */}
          <div className="md:col-span-2">
            <Tabs defaultValue="customize">
              <TabsList className="bg-slate-900/60 border border-white/10">
                <TabsTrigger value="customize">Aparência</TabsTrigger>
              </TabsList>
              <div className="mt-3 mb-4 text-xs text-white/60 bg-slate-900/40 border border-white/10 rounded-xl p-3">
                Quer desbloquear novas cartas ou trocar a equipada? Acesse a <Link to="/carteira" className="text-amber-300 font-bold underline">Carteira</Link> e use seus {COIN_NAME}.
              </div>

              <TabsContent value="_hidden_cards" className="hidden">
                <Card className="bg-slate-900/60 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center justify-between">
                      <span>Galeria de Cartas</span>
                      <Badge variant="outline" className="border-white/20 text-white/70">
                        Nível {level} libera até nº {admin ? "∞" : maxAtomic}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[600px] overflow-y-auto pr-2">
                      {allCards.map((el) => {
                        const isUnlocked = unlockedSet.has(el.symbol);
                        const isEquipped = el.symbol === currentSymbol;
                        const reachable = admin || canUnlockCard(el.symbol, level);
                        const cost = cardUnlockCost(el.symbol);
                        const rty = calcRarity(el.attributes, el.rarity);
                        const fr = RARITY_FRAME[rty];
                        return (
                          <div key={el.symbol} className={`relative rounded-xl overflow-hidden border-2 ${fr.ring} ${isEquipped ? "ring-2 ring-fuchsia-400" : ""} ${!reachable && !isUnlocked ? "opacity-40 grayscale" : ""}`}>
                            <div className="aspect-[2/3] bg-slate-950">
                              {el.heroImage?.endsWith(".mp4") ? (
                                <video src={el.heroImage} muted loop autoPlay playsInline className="w-full h-full object-cover"/>
                              ) : (
                                <img src={el.heroImage || "/placeholder.svg"} alt={el.heroName} className="w-full h-full object-cover"/>
                              )}
                            </div>
                            <div className="absolute top-1 left-1 text-[10px] font-black bg-black/60 rounded px-1">{el.symbol}</div>
                            <div className="absolute top-1 right-1 text-[10px] font-black bg-black/60 rounded px-1">#{el.number}</div>
                            <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black to-transparent">
                              <div className="text-[9px] font-bold truncate">{el.name}</div>
                              {isEquipped ? (
                                <div className="text-[9px] flex items-center gap-1 text-fuchsia-300"><Check className="w-3 h-3"/>EQUIPADO</div>
                              ) : isUnlocked ? (
                                <Button size="sm" className="w-full h-6 text-[9px] mt-1" onClick={() => handleEquip(el.symbol)} disabled={busy}>Equipar</Button>
                              ) : (
                                <Button size="sm" variant="secondary" className="w-full h-6 text-[9px] mt-1"
                                  onClick={() => handleUnlock(el.symbol)}
                                  disabled={busy || (!reachable && !admin)}>
                                  {reachable || admin ? (<><Sparkles className="w-3 h-3 mr-1"/>{admin ? "Grátis" : `${cost}${COIN_SYMBOL}`}</>) : (<><Lock className="w-3 h-3 mr-1"/>Nv {Math.ceil(el.number/10)}</>)}
                                </Button>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="customize">
                <Card className="bg-slate-900/60 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-sm font-black uppercase tracking-widest">Aparência do Personagem</CardTitle>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4">
                    {Object.entries(APPEARANCE_OPTIONS).map(([key, opts]) => (
                      <div key={key}>
                        <label className="text-[10px] uppercase tracking-widest text-white font-black mb-1 block">{APPEARANCE_LABELS[key] ?? key}</label>
                        <Select value={avatar?.appearance?.[key] ?? ""} onValueChange={(v) => updateAppearance({ [key]: v })}>
                          <SelectTrigger className="bg-slate-950/70 border-white/20 text-white font-black [&>span]:text-white [&>span]:font-black">
                            <SelectValue placeholder="Selecione…" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-950 border-white/20 text-white font-bold">
                            {opts.map((o) => (<SelectItem key={o.v} value={o.v} className="text-white font-bold focus:bg-fuchsia-600 focus:text-white">{o.l}</SelectItem>))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}

                    <div className="sm:col-span-2 border-t border-white/10 pt-4 mt-2">
                      <label className="text-[10px] uppercase tracking-widest text-white font-black mb-2 block">
                        Foto de referência (opcional — para semelhança realista)
                      </label>
                      <div className="flex items-center gap-3">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            if (file.size > 5 * 1024 * 1024) { toast.error("Imagem muito grande (máx 5MB)"); return; }
                            const reader = new FileReader();
                            reader.onload = () => {
                              const result = reader.result as string;
                              setPhotoBase64(result);
                              setPhotoPreview(result);
                              toast.success("Foto carregada. Clique em Personalizar com IA.");
                            };
                            reader.readAsDataURL(file);
                          }}
                          className="text-xs text-white font-bold file:mr-3 file:rounded-md file:border-0 file:bg-fuchsia-600 file:text-white file:px-3 file:py-1.5 file:text-xs file:font-bold"
                        />
                        {photoPreview && (
                          <div className="flex items-center gap-2">
                            <img src={photoPreview} alt="Referência" className="w-12 h-12 rounded-lg object-cover border border-white/20"/>
                            <Button size="sm" variant="ghost" className="text-xs text-white font-bold" onClick={() => { setPhotoBase64(null); setPhotoPreview(null); }}>Remover</Button>
                          </div>
                        )}
                      </div>
                      <p className="text-[10px] text-white font-bold mt-1">Sua face será usada apenas como referência de semelhança facial.</p>
                    </div>

                    <div className="sm:col-span-2 text-[11px] text-white font-bold">
                      As alterações são salvas automaticamente. {admin && <span className="text-emerald-300 font-black">Administrador: créditos infinitos (∞).</span>} Clique em <strong className="text-white font-black">Personalizar com IA</strong> para gerar o avatar com base na carta equipada.
                    </div>
                  </CardContent>

                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

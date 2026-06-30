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
import { HeroOptionsDialog } from "@/components/game/HeroOptionsDialog";
import { backgroundsFor } from "@/lib/elementBackgrounds";

const APPEARANCE_LABELS: Record<string, string> = {
  gender: "Gênero",
  body: "Tipo de corpo",
  skin: "Tom de pele",
  faceShape: "Formato do rosto",
  hairStyle: "Estilo de cabelo",
  hairColor: "Cor do cabelo",
  eyeColor: "Cor dos olhos",
  mask: "Máscara",
  uniform: "Uniforme",
  chestSymbol: "Símbolo no peito",
  cape: "Capa",
  gloves: "Luvas",
  boots: "Botas",
  aura: "Aura",
  mainPower: "Poder principal",
  accessory: "Acessórios",
  pose: "Posição",
  scene: "Fundo",
};

// helpers
const opt = (v: string, l: string, extra: any = {}) => ({ v, l, ...extra });

// Banco de opções — clique em uma para trocar
const APPEARANCE_OPTIONS: Record<string, Array<{ v: string; l: string; e?: string; c?: string }>> = {
  gender: [
    opt("masculino", "Masculino", { e: "♂" }),
    opt("feminino", "Feminino", { e: "♀" }),
    opt("androgino", "Andrógino", { e: "⚧" }),
  ],
  body: [
    opt("magro", "Magro", { e: "🚶" }),
    opt("atletico", "Atlético", { e: "🏃" }),
    opt("musculoso", "Musculoso", { e: "💪" }),
    opt("fisiculturista", "Fisiculturista", { e: "🏋️" }),
    opt("robusto", "Robusto", { e: "🧱" }),
    opt("grande", "Grande", { e: "🦣" }),
    opt("gigante", "Gigante", { e: "🦍" }),
    opt("esguio", "Esguio", { e: "🕴️" }),
    opt("definido", "Definido", { e: "🤸" }),
    opt("curvilineo", "Curvilíneo", { e: "💃" }),
  ],
  skin: [
    opt("albino", "Albino", { c: "#fff5ee" }),
    opt("muito_clara", "Muito clara", { c: "#f7d9c4" }),
    opt("clara", "Clara", { c: "#eac393" }),
    opt("bege", "Bege", { c: "#d8b48a" }),
    opt("morena_clara", "Morena clara", { c: "#c68863" }),
    opt("morena", "Morena", { c: "#a06a42" }),
    opt("parda", "Parda", { c: "#7a4a2b" }),
    opt("negra", "Negra", { c: "#3d2415" }),
    opt("chocolate", "Chocolate", { c: "#2a160b" }),
    opt("azul", "Azul", { c: "#3b6ed1" }),
    opt("verde", "Verde", { c: "#3aa860" }),
    opt("cinza", "Cinza", { c: "#8a8d93" }),
    opt("vermelha", "Vermelha", { c: "#c8302d" }),
    opt("roxa", "Roxa", { c: "#7c3ac2" }),
    opt("dourada", "Dourada", { c: "#d4a017" }),
    opt("prateada", "Prateada", { c: "#c0c4c9" }),
  ],
  faceShape: [
    opt("oval", "Oval"), opt("redondo", "Redondo"),
    opt("quadrado", "Quadrado"), opt("alongado", "Alongado"),
  ],
  hairStyle: [
    opt("careca", "Careca", { e: "🥚" }),
    opt("raspado", "Raspado"),
    opt("buzz", "Buzz cut"),
    opt("curto", "Curto", { e: "✂️" }),
    opt("curto_ondulado", "Curto ondulado"),
    opt("medio", "Médio", { e: "💇" }),
    opt("longo", "Longo", { e: "👱" }),
    opt("longo_liso", "Longo liso"),
    opt("longo_ondulado", "Longo ondulado"),
    opt("cacheado", "Cacheado", { e: "🌀" }),
    opt("crespo", "Crespo", { e: "🦱" }),
    opt("black_power", "Black power"),
    opt("afro_curto", "Afro curto"),
    opt("afro_grande", "Afro grande"),
    opt("dreadlocks", "Dreadlocks"),
    opt("trancas", "Tranças"),
    opt("box_braids", "Box braids"),
    opt("moicano", "Moicano", { e: "🦅" }),
    opt("topete", "Topete"),
    opt("samurai", "Samurai"),
    opt("coque", "Coque"),
    opt("rabo", "Rabo de cavalo", { e: "🎀" }),
    opt("mullet", "Mullet"),
  ],
  hairColor: [
    opt("preto", "Preto", { c: "#1a1a1a" }),
    opt("castanho_escuro", "Castanho escuro", { c: "#3b2412" }),
    opt("castanho", "Castanho", { c: "#5a3825" }),
    opt("castanho_claro", "Castanho claro", { c: "#8a5a35" }),
    opt("loiro", "Loiro", { c: "#e2c275" }),
    opt("platinado", "Platinado", { c: "#ece6d4" }),
    opt("branco", "Branco", { c: "#f0f0f0" }),
    opt("cinza", "Cinza", { c: "#9aa0a6" }),
    opt("ruivo", "Ruivo", { c: "#b5512b" }),
    opt("azul", "Azul", { c: "#2f6df0" }),
    opt("azul_escuro", "Azul escuro", { c: "#163a8f" }),
    opt("azul_neon", "Azul neon", { c: "#00e0ff" }),
    opt("verde", "Verde", { c: "#2f8f3a" }),
    opt("verde_neon", "Verde neon", { c: "#39ff14" }),
    opt("rosa", "Rosa", { c: "#ff66b3" }),
    opt("roxo", "Roxo", { c: "#8a3ef0" }),
    opt("vermelho", "Vermelho", { c: "#d2352f" }),
    opt("laranja", "Laranja", { c: "#ff8a1f" }),
    opt("dourado", "Dourado", { c: "#d4a017" }),
    opt("prateado", "Prateado", { c: "#c0c4c9" }),
    opt("arco_iris", "Arco-íris", { c: "linear-gradient(90deg,#ff5fa2,#ffd35f,#5fff9a,#5fb8ff,#a85fff)" }),
  ],
  eyeColor: [
    opt("castanho", "Castanho", { c: "#5a3825" }),
    opt("mel", "Mel", { c: "#b88a3a" }),
    opt("ambar", "Âmbar", { c: "#e2a13a" }),
    opt("azul", "Azul", { c: "#2f6df0" }),
    opt("azul_claro", "Azul claro", { c: "#7ec8ff" }),
    opt("verde", "Verde", { c: "#2f8f3a" }),
    opt("cinza", "Cinza", { c: "#9aa0a6" }),
    opt("preto", "Preto", { c: "#000000" }),
    opt("branco", "Branco", { c: "#ffffff" }),
    opt("vermelho", "Vermelho", { c: "#d2352f" }),
    opt("roxo", "Roxo", { c: "#8a3ef0" }),
    opt("dourado", "Dourado", { c: "#d4a017" }),
    opt("prateado", "Prateado", { c: "#c0c4c9" }),
    opt("laranja", "Laranja", { c: "#ff8a1f" }),
    opt("ciano", "Ciano", { c: "#00e0ff" }),
    opt("sem_pupila", "Sem pupila"),
    opt("brilhante", "Brilhante", { e: "✨" }),
  ],
  mask: [
    opt("sem", "Sem máscara"),
    opt("meia", "Meia máscara"),
    opt("completa", "Máscara completa"),
    opt("capuz", "Capuz"),
    opt("tecnologica", "Máscara tecnológica"),
    opt("ninja", "Máscara ninja"),
    opt("tatica", "Máscara tática"),
    opt("caveira", "Máscara de caveira"),
    opt("metalica", "Máscara metálica"),
    opt("energia", "Máscara de energia"),
  ],
  uniform: [
    opt("classico", "Clássico"),
    opt("tecnologico", "Tecnológico"),
    opt("espacial", "Espacial"),
    opt("militar", "Militar"),
    opt("tatico", "Tático"),
    opt("mistico", "Místico"),
    opt("armadura_pesada", "Armadura pesada"),
    opt("nanoarmadura", "Nanoarmadura"),
    opt("stealth", "Stealth"),
    opt("cyberpunk", "Cyberpunk"),
    opt("alienigena", "Alienígena"),
    opt("organico", "Orgânico"),
  ],
  chestSymbol: [
    opt("sem", "Sem símbolo"),
    opt("raio", "Raio", { e: "⚡" }),
    opt("fogo", "Fogo", { e: "🔥" }),
    opt("gelo", "Gelo", { e: "❄️" }),
    opt("agua", "Água", { e: "💧" }),
    opt("arvore", "Árvore", { e: "🌳" }),
    opt("folha", "Folha", { e: "🍃" }),
    opt("escudo", "Escudo", { e: "🛡️" }),
    opt("asa", "Asa", { e: "🪽" }),
    opt("estrela", "Estrela", { e: "⭐" }),
    opt("lua", "Lua", { e: "🌙" }),
    opt("sol", "Sol", { e: "☀️" }),
    opt("dragao", "Dragão", { e: "🐉" }),
    opt("lobo", "Lobo", { e: "🐺" }),
    opt("leao", "Leão", { e: "🦁" }),
    opt("aguia", "Águia", { e: "🦅" }),
    opt("fenix", "Fênix", { e: "🐦‍🔥" }),
    opt("serpente", "Serpente", { e: "🐍" }),
    opt("coracao", "Coração", { e: "❤️" }),
    opt("diamante", "Diamante", { e: "💎" }),
    opt("inicial", "Inicial da letra", { e: "🔤" }),
    opt("elemento", "Elemento químico", { e: "⚛️" }),
  ],
  cape: [
    opt("sem", "Sem capa"), opt("curta", "Curta"), opt("media", "Média"),
    opt("longa", "Longa"), opt("gigante", "Gigante"), opt("rasgada", "Rasgada"),
    opt("metalica", "Metálica"), opt("energia", "Energia"),
    opt("transparente", "Transparente"), opt("sombras", "Sombras"),
  ],
  gloves: [
    opt("sem", "Sem luvas"), opt("curtas", "Curtas"), opt("longas", "Longas"),
    opt("blindadas", "Blindadas"), opt("metalicas", "Metálicas"),
    opt("tecnologicas", "Tecnológicas"), opt("misticas", "Místicas"),
  ],
  boots: [
    opt("leves", "Leves"), opt("militares", "Militares"),
    opt("blindadas", "Blindadas"), opt("tecnologicas", "Tecnológicas"),
    opt("espaciais", "Espaciais"), opt("esportivas", "Esportivas"),
  ],
  aura: [
    opt("sem", "Sem aura"),
    opt("fogo", "Fogo", { c: "#ff5a1f" }),
    opt("gelo", "Gelo", { c: "#7ec8ff" }),
    opt("eletricidade", "Eletricidade", { c: "#ffe14a" }),
    opt("luz", "Luz", { c: "#fff8c2" }),
    opt("sombras", "Sombras", { c: "#1a1030" }),
    opt("azul", "Energia azul", { c: "#2f6df0" }),
    opt("roxa", "Energia roxa", { c: "#8a3ef0" }),
    opt("verde", "Energia verde", { c: "#39ff14" }),
    opt("dourada", "Energia dourada", { c: "#d4a017" }),
    opt("fumaca", "Fumaça", { c: "#888" }),
    opt("cristal", "Cristal", { c: "#a0e3ff" }),
    opt("raio", "Raio", { c: "#ffd200" }),
    opt("cosmica", "Cósmica", { c: "linear-gradient(90deg,#5b2a86,#1f6feb,#000)" }),
  ],
  mainPower: [
    opt("forca", "Super força"), opt("velocidade", "Super velocidade"),
    opt("voo", "Voo"), opt("teletransporte", "Teletransporte"),
    opt("tempo", "Controle do tempo"), opt("gravidade", "Controle da gravidade"),
    opt("eletricidade", "Eletricidade"), opt("fogo", "Fogo"),
    opt("gelo", "Gelo"), opt("agua", "Água"), opt("vento", "Vento"),
    opt("terra", "Terra"), opt("metal", "Metal"), opt("plantas", "Plantas"),
    opt("luz", "Luz"), opt("sombras", "Sombras"),
    opt("invisibilidade", "Invisibilidade"), opt("telepatia", "Telepatia"),
    opt("telecinese", "Telecinese"), opt("regeneracao", "Regeneração"),
    opt("elasticidade", "Elasticidade"), opt("duplicacao", "Duplicação"),
    opt("mental", "Controle mental"), opt("molecular", "Manipulação molecular"),
    opt("cosmica", "Energia cósmica"),
  ],
  accessory: [
    opt("oculos", "Óculos"), opt("viseira", "Viseira"),
    opt("pulseiras", "Pulseiras"), opt("cinto", "Cinto"),
    opt("ombreiras", "Ombreiras"), opt("colar", "Colar"),
    opt("brincos", "Brincos"), opt("tiara", "Tiara"),
    opt("asas", "Asas"), opt("cauda", "Cauda"),
    opt("bracadeiras", "Braçadeiras"), opt("joelheiras", "Joelheiras"),
  ],
  pose: [
    opt("heroica", "Heróica"), opt("bracos_cruzados", "Braços cruzados"),
    opt("punhos", "Punhos fechados"), opt("voando", "Voando"),
    opt("correndo", "Correndo"), opt("agachado", "Agachado"),
    opt("atacando", "Atacando"), opt("meditando", "Meditando"),
    opt("flutuando", "Flutuando"),
  ],
  scene: [
    opt("cidade", "Cidade"), opt("espaco", "Espaço"),
    opt("tempestade", "Tempestade"), opt("montanhas", "Montanhas"),
    opt("laboratorio", "Laboratório"), opt("floresta", "Floresta"),
    opt("deserto", "Deserto"), opt("gelo", "Gelo"),
    opt("vulcao", "Vulcão"), opt("portal", "Portal dimensional"),
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
  const [optionsOpen, setOptionsOpen] = useState(false);
  const [optionUrls, setOptionUrls] = useState<string[]>([]);




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
    setOptionsOpen(true);
    setOptionUrls([]);
    try {
      if (!admin) {
        await supabase.from("player_wallet").update({ coins: coins - COSTS.generateAvatarAI }).eq("user_id", session.user.id);
      }
      const { data, error } = await supabase.functions.invoke("generate-player-avatar", {
        body: { cardSymbol: currentSymbol, appearance: avatar?.appearance ?? {}, equipped: avatar?.equipped ?? {}, photoBase64, count: 5 },
      });

      if (error || data?.error) {
        if (!admin) await supabase.from("player_wallet").update({ coins }).eq("user_id", session.user.id);
        toast.error(data?.error ?? error?.message ?? "Falha ao gerar avatar");
        setOptionsOpen(false);
      } else {
        const urls: string[] = data?.urls ?? (data?.url ? [data.url] : []);
        setOptionUrls(urls);
        toast.success(data?.message ?? `${urls.length} variações geradas — escolha a melhor!`);
        if (data?.fallback && !admin) await supabase.from("player_wallet").update({ coins }).eq("user_id", session.user.id);
      }
    } finally { setGenerating(false); }
  };

  const handlePickOption = async (url: string) => {
    if (!session?.user) return;
    setBusy(true);
    try {
      await supabase.from("player_avatars").update({ generated_url: url, current_card: currentSymbol }).eq("user_id", session.user.id);
      await refresh(session.user.id);
      setOptionsOpen(false);
      toast.success("Avatar escolhido!");
    } finally { setBusy(false); }
  };

  if (!session) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Carregando…</div>;

  const allCards = listAllCards();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <HeroOptionsDialog
        open={optionsOpen}
        onOpenChange={setOptionsOpen}
        urls={optionUrls}
        loading={generating}
        onPick={handlePickOption}
        onRegenerate={handleGenerate}
      />
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
            <Tabs defaultValue="gallery">
              <TabsList className="bg-slate-900/60 border border-white/10">
                <TabsTrigger value="gallery">Galeria (grátis)</TabsTrigger>
                <TabsTrigger value="customize">Aparência (IA)</TabsTrigger>
              </TabsList>

              <TabsContent value="gallery">
                <Card className="bg-slate-900/60 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center justify-between">
                      <span>Escolha um avatar pronto</span>
                      <Badge variant="outline" className="border-emerald-400/40 text-emerald-300 font-black">Sem gastar créditos</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[11px] text-white/70 mb-3 font-bold">
                      Selecione uma das opções abaixo — a troca é instantânea e <span className="text-emerald-300">não consome créditos de IA nem Átomos</span>.
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 max-h-[600px] overflow-y-auto pr-2">
                      {allCards
                        .filter((el) => el.heroImage && !el.heroImage.endsWith(".mp4"))
                        .map((el) => {
                          const selected = avatar?.generated_url === el.heroImage;
                          return (
                            <button
                              key={el.symbol}
                              type="button"
                              disabled={busy}
                              onClick={async () => {
                                if (!session?.user) return;
                                setBusy(true);
                                try {
                                  await supabase.from("player_avatars")
                                    .update({ generated_url: el.heroImage, current_card: el.symbol })
                                    .eq("user_id", session.user.id);
                                  await refresh(session.user.id);
                                  toast.success(`Avatar definido: ${el.heroName}`);
                                } finally { setBusy(false); }
                              }}
                              className={`relative rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.03] ${selected ? "border-emerald-400 ring-2 ring-emerald-400" : "border-white/10 hover:border-white/40"}`}
                            >
                              <div className="aspect-[2/3] bg-slate-950">
                                <img src={el.heroImage} alt={el.heroName} className="w-full h-full object-cover" loading="lazy"/>
                              </div>
                              <div className="absolute top-1 left-1 text-[10px] font-black bg-black/70 rounded px-1.5 py-0.5">{el.symbol}</div>
                              <div className="absolute top-1 right-1 text-[10px] font-black bg-black/70 rounded px-1.5 py-0.5">#{el.number}</div>
                              <div className="absolute bottom-0 left-0 right-0 p-1.5 bg-gradient-to-t from-black to-transparent">
                                <div className="text-[9px] font-black truncate">{el.heroName}</div>
                                <div className="text-[8px] text-white/60 truncate">{el.name}</div>
                              </div>
                              {selected && (
                                <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/20">
                                  <div className="bg-emerald-500 rounded-full p-2"><Check className="w-5 h-5 text-white"/></div>
                                </div>
                              )}
                            </button>
                          );
                        })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
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
                  <CardContent className="space-y-5">
                    {Object.entries(APPEARANCE_OPTIONS).map(([key, opts]) => {
                      const current = avatar?.appearance?.[key];
                      return (
                        <div key={key}>
                          <label className="text-[10px] uppercase tracking-widest text-white font-black mb-2 block">
                            {APPEARANCE_LABELS[key] ?? key} <span className="text-white/40">— escolha 1</span>
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {opts.map((o: any) => {
                              const selected = current === o.v;
                              return (
                                <button
                                  key={o.v}
                                  type="button"
                                  onClick={() => updateAppearance({ [key]: o.v })}
                                  className={`group flex items-center gap-2 px-3 py-2 rounded-xl border-2 transition-all hover:scale-105 ${selected ? "border-emerald-400 ring-2 ring-emerald-400 bg-emerald-500/10" : "border-white/15 bg-slate-950/70 hover:border-fuchsia-400"}`}
                                >
                                  {"c" in o && (
                                    <span className="w-5 h-5 rounded-full border border-white/30" style={{ background: o.c }} />
                                  )}
                                  {"e" in o && <span className="text-base">{o.e}</span>}
                                  <span className="text-xs font-black text-white">{o.l}</span>
                                  {selected && <Check className="w-3 h-3 text-emerald-300" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}

                    {/* Cenário de fundo baseado no elemento equipado */}
                    <div className="border-t border-white/10 pt-4">
                      <label className="text-[10px] uppercase tracking-widest text-white font-black mb-2 block">
                        Cenário de fundo — onde {currentEl.name} é abundante / produzido
                      </label>
                      <p className="text-[10px] text-white/70 font-bold mb-3">
                        Escolha 1 ambiente inspirado na origem natural ou industrial do elemento. Ele será usado de fundo na geração com IA.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {backgroundsFor(currentSymbol).map((s) => {
                          const selected = avatar?.equipped?.background?.id === s.id;
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={async () => {
                                if (!session?.user) return;
                                const nextEq = { ...(avatar?.equipped ?? {}), background: { id: s.id, name: s.prompt, label: s.label } };
                                await supabase.from("player_avatars").update({ equipped: nextEq }).eq("user_id", session.user.id);
                                setAvatar({ ...avatar, equipped: nextEq });
                              }}
                              className={`px-3 py-2 rounded-xl border-2 text-xs font-black transition-all hover:scale-105 ${selected ? "border-amber-300 ring-2 ring-amber-300 bg-amber-500/10 text-amber-100" : "border-white/15 bg-slate-950/70 text-white hover:border-amber-300"}`}
                            >
                              {s.label}
                              {selected && <Check className="inline w-3 h-3 ml-1 text-amber-300" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Variações grátis por opção selecionada — sem créditos Lovable */}
                    <div className="border-t border-white/10 pt-4">
                      <label className="text-[10px] uppercase tracking-widest text-white font-black mb-2 block">
                        Variações sugeridas (7 opções grátis — sem gastar créditos)
                      </label>
                      <p className="text-[10px] text-white/70 font-bold mb-3">
                        Toda vez que você muda uma opção acima, geramos 7 sugestões prontas a partir das cartas existentes. Clique em uma para usá-la como seu avatar.
                      </p>
                      <div className="grid grid-cols-7 gap-2">

                        {(() => {
                          const app = avatar?.appearance ?? {};
                          const seedStr = `${app.gender ?? ""}|${app.body ?? ""}|${app.skin ?? ""}|${app.hairStyle ?? ""}|${app.hairColor ?? ""}|${currentSymbol}`;
                          let h = 2166136261;
                          for (let i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
                          const pool = allCards.filter((e) => e.heroImage && !e.heroImage.endsWith(".mp4"));
                          const picks: typeof pool = [];
                          const used = new Set<number>();
                          let s = h >>> 0;
                          while (picks.length < 7 && used.size < pool.length) {
                            s = (s * 1664525 + 1013904223) >>> 0;
                            const idx = s % pool.length;
                            if (!used.has(idx)) { used.add(idx); picks.push(pool[idx]); }
                          }
                          return picks.map((el, i) => {
                            const selected = avatar?.generated_url === el.heroImage;
                            return (
                              <button
                                key={`${el.symbol}-${i}`}
                                type="button"
                                disabled={busy}
                                onClick={async () => {
                                  if (!session?.user) return;
                                  setBusy(true);
                                  try {
                                    await supabase.from("player_avatars")
                                      .update({ generated_url: el.heroImage, current_card: el.symbol })
                                      .eq("user_id", session.user.id);
                                    await refresh(session.user.id);
                                    toast.success(`Avatar atualizado: ${el.heroName}`);
                                  } finally { setBusy(false); }
                                }}
                                className={`relative rounded-lg overflow-hidden border-2 transition-all hover:scale-[1.05] ${selected ? "border-emerald-400 ring-2 ring-emerald-400" : "border-white/15 hover:border-fuchsia-400"}`}
                                title={el.heroName}
                              >
                                <div className="aspect-[2/3] bg-slate-950">
                                  <img src={el.heroImage} alt={el.heroName} className="w-full h-full object-cover" loading="lazy"/>
                                </div>
                                <div className="absolute top-0.5 left-0.5 text-[8px] font-black bg-black/70 rounded px-1">{el.symbol}</div>
                                {selected && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/30">
                                    <Check className="w-4 h-4 text-white"/>
                                  </div>
                                )}
                              </button>
                            );
                          });
                        })()}
                      </div>
                    </div>

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

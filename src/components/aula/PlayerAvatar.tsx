import { useEffect, useState, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  SHOP_ITEMS, AvatarItem, COIN_NAME, COIN_SYMBOL, COSTS,
  loadAvatar, loadWallet, buyItem, equipItem, isAdmin, spendCoins,
} from "@/lib/playerEconomy";
import { ensureUserAccess } from "@/lib/ensureUserAccess";
import { Coins, Lock, Check, Upload, Sparkles, Zap, ShoppingBag, Loader2, ChevronLeft, ChevronRight, User, Shirt, Backpack } from "lucide-react";
import { toast } from "sonner";

type Element = { symbol: string; number: number; name: string; hero_name?: string | null; hero_image?: string | null; rarity?: string | null };
type Appearance = Record<string, string>;
type AvatarState = {
  generated_url?: string | null;
  photo_url?: string | null;
  appearance?: Appearance | null;
  unlocked_cards?: string[] | null;
  current_card?: string | null;
  unlocked?: string[] | null;
  equipped?: Partial<Record<AvatarItem["slot"], string>> | null;
};
type WalletState = { coins: number; lifetime_coins?: number };
type FunctionPayload = { error?: string } | null;
type FunctionInvokeError = Error & { context?: unknown };

const errorMessage = (error: unknown) => error instanceof Error ? error.message : String(error);

const GENDERS = [{ id: "masculino", label: "Masculino" }, { id: "feminino", label: "Feminino" }];
const BODIES = [{ id: "normal", label: "Normal" }, { id: "atletico", label: "Atlético" }, { id: "magro", label: "Magro" }, { id: "musculoso", label: "Musculoso" }];
const SKINS = [{ id: "clara", label: "Clara" }, { id: "media", label: "Média" }, { id: "morena", label: "Morena" }, { id: "escura", label: "Escura" }];
const HAIR_STYLES = [{ id: "curto", label: "Curto" }, { id: "longo", label: "Longo" }, { id: "cacheado", label: "Cacheado" }, { id: "espetado", label: "Espetado" }, { id: "careca", label: "Careca" }];
const HAIR_COLORS = [
  { id: "preto", label: "Preto" }, { id: "castanho", label: "Castanho" },
  { id: "loiro", label: "Loiro" }, { id: "ruivo", label: "Ruivo" },
  { id: "azul", label: "Azul" }, { id: "roxo", label: "Roxo" }, { id: "branco", label: "Branco" },
];

function PickGrid({ value, onChange, options }: { value: string; onChange: (v: string) => void; options: { id: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {options.map((o) => (
        <button key={o.id} onClick={() => onChange(o.id)}
          className={`px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition ${value === o.id ? "border-violet-400 bg-violet-600/30 text-white" : "border-slate-700 bg-slate-800/60 text-slate-200 hover:border-slate-500"}`}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

const validGeneratedAvatarUrl = (url?: string | null) => (url && !url.includes("-hero-") ? url : null);

export function AvatarDisplay({ avatar, size = 96 }: { avatar: Pick<AvatarState, "generated_url" | "photo_url"> | null; size?: number }) {
  const url = validGeneratedAvatarUrl(avatar?.generated_url) || avatar?.photo_url;
  if (url) {
    return <img src={url} alt="Avatar" style={{ width: size, height: size }} className="rounded-2xl object-cover border border-slate-700" />;
  }
  return (
    <div style={{ width: size, height: size }} className="rounded-2xl bg-gradient-to-br from-violet-700 to-slate-900 flex items-center justify-center text-3xl border border-slate-700">
      🧪
    </div>
  );
}

export function PlayerAvatar() {
  const [userId, setUserId] = useState<string | null>(null);
  const [wallet, setWallet] = useState<WalletState | null>(null);
  const [avatar, setAvatar] = useState<AvatarState | null>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const [tick, setTick] = useState(0);

  const appearance = avatar?.appearance ?? {};
  const updateAppearance = async (patch: Appearance) => {
    if (!userId) return;
    const spend = await spendCoins(userId, COSTS.changeAppearance, "alterar aparência");
    if (!spend.ok) { toast.error(spend.reason!); return; }
    const next = { ...appearance, ...patch };
    setAvatar((a) => a ? ({ ...a, appearance: next }) : a);
    await supabase.from("player_avatars").update({ appearance: next }).eq("user_id", userId);
    if (spend.charged > 0) toast.success(`-${spend.charged}${COIN_SYMBOL} ${COIN_NAME}`);
    setTick((t) => t + 1);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        setUserId(null);
        return;
      }
      setUserId(data.user.id);
      ensureUserAccess(data.user).then((role) => setAdmin(role === "admin"));
    });
  }, []);

  useEffect(() => {
    if (!userId) return;
    isAdmin(userId).then(setAdmin);
  }, [userId]);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    Promise.all([loadWallet(userId), loadAvatar(userId)])
      .then(([w, a]) => { setWallet(w); setAvatar(a); })
      .finally(() => setLoading(false));
  }, [userId, tick]);

  useEffect(() => {
    if (!avatar?.unlocked_cards?.length) return;
    supabase.from("elements")
      .select("symbol,number,name,hero_name,hero_image,rarity")
      .in("symbol", avatar.unlocked_cards)
      .then(({ data }) => setElements((data as Element[]) ?? []));
  }, [avatar?.unlocked_cards]);

  if (!userId) {
    return <Card className="p-4 text-center text-sm text-muted-foreground">Faça login para criar seu avatar.</Card>;
  }
  if (loading || !avatar) {
    return <Card className="p-4 text-center text-sm text-muted-foreground">Carregando avatar…</Card>;
  }

  const currentCard = elements.find((e) => e.symbol === avatar.current_card) ?? elements[0];
  const previewUrl = validGeneratedAvatarUrl(avatar.generated_url) || avatar.photo_url;

  const handlePhotoFile = async (file: File) => {
    if (!userId) return;
    const spend = await spendCoins(userId, COSTS.uploadPhoto, "carregar foto");
    if (!spend.ok) { toast.error(spend.reason!); return; }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhotoBase64(result);
      toast.success(`Foto carregada${spend.charged ? ` (-${spend.charged}${COIN_SYMBOL})` : ""} — clique em Gerar Avatar IA`);
    };
    reader.readAsDataURL(file);
    setTick((t) => t + 1);
  };

  const handleUploadAvatar = async (file: File) => {
    try {
      const spend = await spendCoins(userId!, COSTS.uploadAvatar, "enviar avatar");
      if (!spend.ok) { toast.error(spend.reason!); return; }
      const ext = file.name.split(".").pop() || "png";
      const path = `${userId}/upload-${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from("player-avatars").upload(path, file, { contentType: file.type, upsert: true });
      if (error) throw error;
      const { data: signed } = await supabase.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      await supabase.from("player_avatars").update({ generated_url: signed?.signedUrl }).eq("user_id", userId);
      toast.success(`Avatar enviado!${spend.charged ? ` -${spend.charged}${COIN_SYMBOL}` : ""}`);
      setTick((t) => t + 1);
    } catch (e: unknown) {
      toast.error("Erro no upload: " + errorMessage(e));
    }
  };

  const handleGenerate = async () => {
    if (!currentCard) return toast.error("Selecione uma carta primeiro");
    if (!userId) return;
    const spend = await spendCoins(userId, COSTS.generateAvatarAI, "gerar avatar IA");
    if (!spend.ok) { toast.error(spend.reason!); return; }
    setGenerating(true);
    try {
      const eqNow = (avatar?.equipped ?? {}) as Partial<Record<AvatarItem["slot"], string>>;
      const equippedItems = {
        outfit: SHOP_ITEMS.find((i) => i.id === eqNow.outfit) ?? null,
        background: SHOP_ITEMS.find((i) => i.id === eqNow.background) ?? null,
        accessory: SHOP_ITEMS.find((i) => i.id === eqNow.accessory) ?? null,
      };
      const { data, error } = await supabase.functions.invoke("generate-player-avatar", {
        body: { cardSymbol: currentCard.symbol, appearance, photoBase64, equipped: equippedItems },
      });
      if (error) {
        const response = (error as FunctionInvokeError).context;
        if (response instanceof Response) {
          const payload = await response.json().catch(() => null) as FunctionPayload;
          throw new Error(payload?.error || error.message);
        }
        throw error;
      }
      const payload = data as FunctionPayload;
      if (payload?.error) throw new Error(payload.error);
      toast.success(`Avatar gerado!${spend.charged ? ` -${spend.charged}${COIN_SYMBOL} ${COIN_NAME}` : " (admin)"}`);
      setTick((t) => t + 1);
    } catch (e: unknown) {
      // Reembolsa em caso de falha
      if (spend.charged > 0) {
        const w = await loadWallet(userId);
        await supabase.from("player_wallet").update({ coins: (w?.coins ?? 0) + spend.charged }).eq("user_id", userId);
      }
      toast.error("Erro: " + errorMessage(e));
    } finally {
      setGenerating(false);
    }
  };

  const unlocked: string[] = avatar.unlocked ?? [];
  const eq = avatar.equipped ?? {};
  const handleShopAction = async (item: AvatarItem): Promise<void> => {
    if (unlocked.includes(item.id)) {
      await equipItem(userId, item);
    } else {
      const r = await buyItem(userId, item);
      if (!r.ok) { toast.error(r.reason!); return; }
      await equipItem(userId, item);
      toast.success(`${item.emoji} ${item.name} desbloqueado${r.admin ? " (modo administrador)" : ""}!`);
    }
    setTick((t) => t + 1);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* PREVIEW */}
      <Card className="p-4 bg-slate-900/60 border-slate-700">
        <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[2/3]">
          {previewUrl ? (
            <img src={previewUrl} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-3 p-6 text-center">
              <Sparkles size={48} className="opacity-50" />
              <div className="text-sm">Escolha uma carta e clique em <strong className="text-violet-300">Gerar Avatar IA</strong></div>
            </div>
          )}
          <Badge className="absolute top-2 right-2 bg-amber-500 text-black flex items-center gap-1" title={`${COIN_NAME} — moeda do jogo`}>
            <span className="text-sm leading-none">{COIN_SYMBOL}</span>{admin ? "∞" : wallet?.coins ?? 0}
          </Badge>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 bg-emerald-950/40 border border-emerald-800 rounded-lg px-3 py-2 text-emerald-300 text-sm">
          <span className="flex items-center gap-2"><Check size={14} /> Avatar desbloqueado</span>
          <span className="text-xs text-amber-300">Saldo: {admin ? "∞" : wallet?.coins ?? 0}{COIN_SYMBOL} {COIN_NAME}</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button onClick={handleGenerate} disabled={generating} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90">
            {generating ? <Loader2 className="animate-spin mr-1" size={16} /> : <Sparkles size={16} className="mr-1" />}
            Gerar IA <span className="ml-1 text-xs opacity-80">({admin ? "grátis" : `${COSTS.generateAvatarAI}${COIN_SYMBOL}`})</span>
          </Button>
          <Button variant="outline" onClick={() => fileRef.current?.click()}>
            <Upload size={16} className="mr-1" /> Upload <span className="ml-1 text-xs opacity-70">({admin ? "grátis" : `${COSTS.uploadAvatar}${COIN_SYMBOL}`})</span>
          </Button>
          <input ref={fileRef} type="file" accept="image/*" hidden
                 onChange={(e) => e.target.files?.[0] && handleUploadAvatar(e.target.files[0])} />
        </div>
      </Card>

      {/* WIZARD */}
      <Card className="p-3 bg-slate-900/60 border-slate-700">
        <Wizard
          userId={userId}
          avatar={avatar}
          appearance={appearance}
          updateAppearance={updateAppearance}
          elements={elements}
          currentCard={currentCard}
          photoBase64={photoBase64}
          photoRef={photoRef}
          handlePhotoFile={handlePhotoFile}
          setTick={setTick}
          unlocked={unlocked}
          eq={eq}
          wallet={wallet}
          admin={admin}
          handleShopAction={handleShopAction}
          handleGenerate={handleGenerate}
          generating={generating}
        />
      </Card>
    </div>
  );
}

type WizardProps = {
  userId: string;
  avatar: AvatarState;
  appearance: Appearance;
  updateAppearance: (p: Appearance) => void;
  elements: Element[];
  currentCard?: Element;
  photoBase64: string | null;
  photoRef: React.RefObject<HTMLInputElement>;
  handlePhotoFile: (f: File) => Promise<void>;
  setTick: React.Dispatch<React.SetStateAction<number>>;
  unlocked: string[];
  eq: Partial<Record<AvatarItem["slot"], string>>;
  wallet: WalletState | null;
  admin: boolean;
  handleShopAction: (item: AvatarItem) => Promise<void>;
  handleGenerate: () => Promise<unknown>;
  generating: boolean;
};

const STEPS = [
  { id: "cartas", label: "Cartas", icon: Zap },
  { id: "aparencia", label: "Aparência", icon: User },
  { id: "roupa", label: "Roupa", icon: Shirt },
  { id: "extras", label: "Extras", icon: Backpack },
] as const;

function Wizard(p: WizardProps) {
  const [step, setStep] = useState(0);
  const StepIcon = STEPS[step].icon;

  return (
    <div>
      {/* Stepper header */}
      <div className="flex items-center justify-between gap-1 mb-3">
        {STEPS.map((s, i) => {
          const active = i === step;
          const done = i < step;
          const Icon = s.icon;
          return (
            <button
              key={s.id}
              onClick={() => setStep(i)}
              className={`flex-1 flex flex-col items-center gap-1 py-2 rounded-lg border-2 transition ${
                active
                  ? "border-violet-400 bg-violet-600/30 text-white"
                  : done
                  ? "border-emerald-600 bg-emerald-900/30 text-emerald-300"
                  : "border-slate-700 bg-slate-800/40 text-slate-400 hover:border-slate-500"
              }`}
            >
              <div className="flex items-center gap-1 text-[10px] font-bold uppercase">
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${active ? "bg-violet-500 text-white" : done ? "bg-emerald-500 text-black" : "bg-slate-700"}`}>
                  {done ? <Check size={10} /> : i + 1}
                </span>
                <Icon size={12} />
              </div>
              <span className="text-xs font-semibold">{s.label}</span>
            </button>
          );
        })}
      </div>

      {/* Step content */}
      <div className="min-h-[440px]">
        {step === 0 && (
          <div>
            <div className="text-center mb-2">
              <div className="font-bold text-white flex items-center justify-center gap-1"><StepIcon size={14} className="text-amber-400" />Selecione sua carta de inspiração</div>
              <div className="text-xs text-slate-400">A IA gerará seu avatar no estilo do herói elemental</div>
            </div>
            <ScrollArea className="h-[400px] pr-2">
              <div className="grid grid-cols-2 gap-3">
                {p.elements.map((e) => {
                  const active = p.avatar.current_card === e.symbol;
                  return (
                    <button key={e.symbol}
                      onClick={() => { supabase.from("player_avatars").update({ current_card: e.symbol }).eq("user_id", p.userId).then(() => p.setTick((t) => t + 1)); }}
                      className={`relative rounded-xl border-2 overflow-hidden bg-slate-950 transition ${active ? "border-emerald-400 ring-2 ring-emerald-500/50" : "border-slate-700 hover:border-slate-500"}`}>
                      <div className="absolute top-1 left-1 z-10 bg-black/60 rounded px-1.5 py-0.5 text-xs font-bold text-white">{e.symbol}</div>
                      {active && <div className="absolute top-1 right-1 z-10 bg-emerald-500 rounded-full p-0.5"><Check size={12} className="text-black" /></div>}
                      <div className="aspect-[2/3] bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center">
                        {e.hero_image ? <img src={e.hero_image} alt={e.name} className="w-full h-full object-cover" />
                                      : <div className="text-4xl font-black text-violet-300">{e.symbol}</div>}
                      </div>
                      <div className="p-2 bg-slate-900">
                        <div className="text-xs font-bold text-white truncate">{e.hero_name || e.name}</div>
                        <div className="text-[10px] text-slate-400">{e.symbol} — #{e.number}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
            {p.currentCard && (
              <div className="mt-3 rounded-lg bg-violet-950/40 border border-violet-800 px-3 py-2 text-sm text-violet-200">
                ✨ Avatar será gerado no estilo de <strong>{p.currentCard.hero_name || p.currentCard.name}</strong>
              </div>
            )}
          </div>
        )}

        {step === 1 && (
          <ScrollArea className="h-[440px] pr-2">
            <div className="space-y-4">
              <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                <Label className="text-sm text-white">Sua Foto (Opcional)</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Input readOnly value={p.photoBase64 ? "Foto carregada ✓" : ""} placeholder="Nenhuma foto" className="bg-white text-slate-900" />
                  <Button variant="outline" onClick={() => p.photoRef.current?.click()}>
                    <Upload size={14} className="mr-1" />Escolher
                  </Button>
                  <input ref={p.photoRef} type="file" accept="image/*" hidden
                         onChange={(e) => e.target.files?.[0] && p.handlePhotoFile(e.target.files[0])} />
                </div>
              </div>
              <div><Label className="text-sm text-white block mb-2">Gênero</Label>
                <PickGrid value={p.appearance.gender ?? "masculino"} onChange={(v) => p.updateAppearance({ gender: v })} options={GENDERS} /></div>
              <div><Label className="text-sm text-white block mb-2">Tipo de Corpo</Label>
                <PickGrid value={p.appearance.body ?? "normal"} onChange={(v) => p.updateAppearance({ body: v })} options={BODIES} /></div>
              <div><Label className="text-sm text-white block mb-2">Tom de Pele</Label>
                <PickGrid value={p.appearance.skin ?? "clara"} onChange={(v) => p.updateAppearance({ skin: v })} options={SKINS} /></div>
              <div><Label className="text-sm text-white block mb-2">Estilo de Cabelo</Label>
                <PickGrid value={p.appearance.hairStyle ?? "curto"} onChange={(v) => p.updateAppearance({ hairStyle: v })} options={HAIR_STYLES} /></div>
              <div><Label className="text-sm text-white block mb-2">Cor do Cabelo</Label>
                <PickGrid value={p.appearance.hairColor ?? "castanho"} onChange={(v) => p.updateAppearance({ hairColor: v })} options={HAIR_COLORS} /></div>
            </div>
          </ScrollArea>
        )}

        {step === 2 && (
          <ScrollArea className="h-[440px] pr-2">
            {(["outfit", "background"] as const).map((slot) => (
              <div key={slot} className="mb-4">
                <div className="text-xs font-bold mb-2 uppercase text-slate-400">
                  {slot === "outfit" ? "Roupa" : "Cenário"}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {SHOP_ITEMS.filter((i) => i.slot === slot).map((item) => {
                    const owned = p.unlocked.includes(item.id);
                    const eqNow = p.eq[item.slot] === item.id;
                    return (
                      <button key={item.id} onClick={() => p.handleShopAction(item)}
                        className={`px-3 py-2.5 rounded-lg border-2 text-sm font-semibold transition flex items-center justify-between ${eqNow ? "border-violet-400 bg-violet-600/30 text-white" : "border-slate-700 bg-slate-800/60 text-slate-200 hover:border-slate-500"}`}>
                        <span className="flex items-center gap-2"><span className="text-lg">{item.emoji}</span>{item.name}</span>
                        {owned
                          ? (eqNow ? <Check size={14} className="text-emerald-400" /> : <span className="text-xs text-emerald-400">Equipar</span>)
                          : <span className="text-xs text-amber-400 flex items-center gap-1">
                              {!p.admin && (p.wallet?.coins ?? 0) < item.price && <Lock size={10} />}<Coins size={10} />{p.admin ? "grátis" : item.price}
                            </span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </ScrollArea>
        )}

        {step === 3 && (
          <ScrollArea className="h-[440px] pr-2">
            <div className="space-y-2">
              {SHOP_ITEMS.filter((i) => i.slot === "accessory").map((item) => {
                const owned = p.unlocked.includes(item.id);
                const eqNow = p.eq[item.slot] === item.id;
                return (
                  <button key={item.id} onClick={() => p.handleShopAction(item)}
                    className={`w-full px-4 py-3 rounded-lg border-2 flex items-center justify-between transition ${eqNow ? "border-emerald-400 bg-emerald-900/30" : "border-emerald-700/60 bg-slate-800/40 hover:border-emerald-500"}`}>
                    <span className="flex items-center gap-3">
                      <span className="text-xl">{item.emoji}</span>
                      <span className="font-bold text-white">{item.name}</span>
                    </span>
                    {owned
                      ? (eqNow ? <span className="text-emerald-300 text-xs font-bold flex items-center gap-1"><Check size={12} />Equipado</span>
                               : <span className="text-emerald-400 text-xs">Equipar</span>)
                      : <span className="text-amber-400 text-sm flex items-center gap-1 font-bold">
                          {!p.admin && (p.wallet?.coins ?? 0) < item.price && <Lock size={12} />}<Coins size={12} />{p.admin ? "grátis" : item.price}
                        </span>}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </div>

      {/* Nav buttons */}
      <div className="mt-3 flex items-center justify-between gap-2">
        <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          <ChevronLeft size={16} className="mr-1" />Anterior
        </Button>
        <div className="text-xs text-slate-400">Passo {step + 1} de {STEPS.length}</div>
        {step < STEPS.length - 1 ? (
          <Button onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))} className="bg-violet-600 hover:bg-violet-500">
            Próximo<ChevronRight size={16} className="ml-1" />
          </Button>
        ) : (
          <Button onClick={p.handleGenerate} disabled={p.generating} className="bg-gradient-to-r from-emerald-600 to-emerald-500">
            {p.generating ? <Loader2 className="animate-spin mr-1" size={16} /> : <Sparkles size={16} className="mr-1" />}
            Gerar Avatar IA
          </Button>
        )}
      </div>
    </div>
  );
}

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
  SHOP_ITEMS, AvatarItem,
  loadAvatar, loadWallet, buyItem, equipItem, isAdmin,
} from "@/lib/playerEconomy";
import { Coins, Lock, Check, Upload, Sparkles, Zap, Infinity as InfinityIcon, ShoppingBag, Loader2 } from "lucide-react";
import { toast } from "sonner";

type Element = { symbol: string; number: number; name: string; hero_name?: string | null; hero_image?: string | null; rarity?: string | null };

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

export function AvatarDisplay({ avatar, size = 96 }: { avatar: any; size?: number }) {
  const url = avatar?.generated_url || avatar?.photo_url;
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
  const [wallet, setWallet] = useState<any>(null);
  const [avatar, setAvatar] = useState<any>(null);
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const photoRef = useRef<HTMLInputElement>(null);
  const [tick, setTick] = useState(0);

  const appearance = avatar?.appearance ?? {};
  const updateAppearance = (patch: Record<string, any>) => {
    if (!userId) return;
    const next = { ...appearance, ...patch };
    setAvatar((a: any) => ({ ...a, appearance: next }));
    supabase.from("player_avatars").update({ appearance: next }).eq("user_id", userId);
  };

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUserId(data.user?.id ?? null);
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
      .then(({ data }) => setElements((data as any) ?? []));
  }, [avatar?.unlocked_cards]);

  if (!userId) {
    return <Card className="p-4 text-center text-sm text-muted-foreground">Faça login para criar seu avatar.</Card>;
  }
  if (loading || !avatar) {
    return <Card className="p-4 text-center text-sm text-muted-foreground">Carregando avatar…</Card>;
  }

  const currentCard = elements.find((e) => e.symbol === avatar.current_card) ?? elements[0];

  const handlePhotoFile = async (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPhotoBase64(result);
      toast.success("Foto carregada — clique em Gerar Avatar IA");
    };
    reader.readAsDataURL(file);
  };

  const handleUploadAvatar = async (file: File) => {
    try {
      const ext = file.name.split(".").pop() || "png";
      const path = `${userId}/upload-${Date.now()}.${ext}`;
      const { error } = await supabase.storage.from("player-avatars").upload(path, file, { contentType: file.type, upsert: true });
      if (error) throw error;
      const { data: signed } = await supabase.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      await supabase.from("player_avatars").update({ generated_url: signed?.signedUrl }).eq("user_id", userId);
      toast.success("Avatar enviado!");
      setTick((t) => t + 1);
    } catch (e: any) {
      toast.error("Erro no upload: " + e.message);
    }
  };

  const handleGenerate = async () => {
    if (!currentCard) return toast.error("Selecione uma carta primeiro");
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke("generate-player-avatar", {
        body: { cardSymbol: currentCard.symbol, appearance, photoBase64 },
      });
      if (error || (data as any)?.error) throw new Error(error?.message || (data as any).error);
      toast.success("Avatar gerado!");
      setTick((t) => t + 1);
    } catch (e: any) {
      toast.error("Erro: " + e.message);
    } finally {
      setGenerating(false);
    }
  };

  const unlocked: string[] = avatar.unlocked ?? [];
  const eq = avatar.equipped ?? {};
  const handleShopAction = async (item: AvatarItem) => {
    if (unlocked.includes(item.id)) {
      await equipItem(userId, item);
    } else {
      const r = await buyItem(userId, item);
      if (!r.ok) return toast.error(r.reason!);
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
          {avatar.generated_url || avatar.photo_url ? (
            <img src={avatar.generated_url || avatar.photo_url} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 gap-3 p-6 text-center">
              <Sparkles size={48} className="opacity-50" />
              <div className="text-sm">Escolha uma carta e clique em <strong className="text-violet-300">Gerar Avatar IA</strong></div>
            </div>
          )}
          <Badge className="absolute top-2 right-2 bg-amber-500 text-black flex items-center gap-1">
            <Coins size={12} />{admin ? 99999 : wallet?.coins ?? 0}
          </Badge>
        </div>
        <div className="mt-3 flex items-center justify-between gap-2 bg-emerald-950/40 border border-emerald-800 rounded-lg px-3 py-2 text-emerald-300 text-sm">
          <span className="flex items-center gap-2"><Check size={14} /> Avatar desbloqueado</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <Button onClick={handleGenerate} disabled={generating} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90">
            {generating ? <Loader2 className="animate-spin mr-1" size={16} /> : <Sparkles size={16} className="mr-1" />}
            Gerar Avatar IA
          </Button>
          <Button variant="outline" onClick={() => fileRef.current?.click()}>
            <Upload size={16} className="mr-1" /> Upload
          </Button>
          <input ref={fileRef} type="file" accept="image/*" hidden
                 onChange={(e) => e.target.files?.[0] && handleUploadAvatar(e.target.files[0])} />
        </div>
      </Card>

      {/* TABS */}
      <Card className="p-3 bg-slate-900/60 border-slate-700">
        <Tabs defaultValue="cartas">
          <TabsList className="grid grid-cols-4 w-full bg-slate-800">
            <TabsTrigger value="cartas"><Zap size={14} className="mr-1 text-amber-400" />Cartas</TabsTrigger>
            <TabsTrigger value="aparencia">Aparência</TabsTrigger>
            <TabsTrigger value="roupa"><ShoppingBag size={14} className="mr-1" />Roupa</TabsTrigger>
            <TabsTrigger value="extras">Extras</TabsTrigger>
          </TabsList>

          {/* CARTAS */}
          <TabsContent value="cartas" className="mt-3">
            <div className="text-center mb-2">
              <div className="font-bold text-white">Selecione sua carta de inspiração</div>
              <div className="text-xs text-slate-400">A IA gerará seu avatar no estilo do herói elemental</div>
            </div>
            <ScrollArea className="h-[420px] pr-2">
              <div className="grid grid-cols-2 gap-3">
                {elements.map((e) => {
                  const active = avatar.current_card === e.symbol;
                  return (
                    <button key={e.symbol}
                      onClick={() => { supabase.from("player_avatars").update({ current_card: e.symbol }).eq("user_id", userId).then(() => setTick((t) => t + 1)); }}
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
            {currentCard && (
              <div className="mt-3 rounded-lg bg-violet-950/40 border border-violet-800 px-3 py-2 text-sm text-violet-200">
                ✨ Avatar será gerado no estilo de <strong>{currentCard.hero_name || currentCard.name}</strong>
                <div className="text-xs text-violet-300/80">Clique em "Gerar Avatar IA" para aplicar</div>
              </div>
            )}
          </TabsContent>

          {/* APARÊNCIA */}
          <TabsContent value="aparencia" className="mt-3">
            <ScrollArea className="h-[480px] pr-2">
              <div className="space-y-4">
                <div className="rounded-lg border border-slate-700 bg-slate-950 p-3">
                  <Label className="text-sm text-white">Sua Foto (Opcional)</Label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Input readOnly value={photoBase64 ? "Foto carregada ✓" : ""} placeholder="Nenhuma foto" className="bg-white text-slate-900" />
                    <Button variant="outline" onClick={() => photoRef.current?.click()}>
                      <Upload size={14} className="mr-1" />Escolher
                    </Button>
                    <input ref={photoRef} type="file" accept="image/*" hidden
                           onChange={(e) => e.target.files?.[0] && handlePhotoFile(e.target.files[0])} />
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Use sua foto para criar um avatar personalizado</div>
                </div>

                <div>
                  <Label className="text-sm text-white block mb-2">Gênero</Label>
                  <PickGrid value={appearance.gender ?? "masculino"} onChange={(v) => updateAppearance({ gender: v })} options={GENDERS} />
                </div>
                <div>
                  <Label className="text-sm text-white block mb-2">Tipo de Corpo</Label>
                  <PickGrid value={appearance.body ?? "normal"} onChange={(v) => updateAppearance({ body: v })} options={BODIES} />
                </div>
                <div>
                  <Label className="text-sm text-white block mb-2">Tom de Pele</Label>
                  <PickGrid value={appearance.skin ?? "clara"} onChange={(v) => updateAppearance({ skin: v })} options={SKINS} />
                </div>
                <div>
                  <Label className="text-sm text-white block mb-2">Estilo de Cabelo</Label>
                  <PickGrid value={appearance.hairStyle ?? "curto"} onChange={(v) => updateAppearance({ hairStyle: v })} options={HAIR_STYLES} />
                </div>
                <div>
                  <Label className="text-sm text-white block mb-2">Cor do Cabelo</Label>
                  <PickGrid value={appearance.hairColor ?? "castanho"} onChange={(v) => updateAppearance({ hairColor: v })} options={HAIR_COLORS} />
                </div>
              </div>
            </ScrollArea>
          </TabsContent>

          {/* ROUPA + EXTRAS (shop) */}
          {(["roupa", "extras"] as const).map((tab) => {
            const slots = tab === "roupa" ? (["outfit", "hat"] as const) : (["glasses", "background"] as const);
            return (
              <TabsContent key={tab} value={tab} className="mt-3">
                <ScrollArea className="h-[480px] pr-2">
                  {slots.map((slot) => (
                    <div key={slot} className="mb-4">
                      <div className="text-xs font-bold mb-2 uppercase text-slate-400">
                        {slot === "hat" ? "Chapéus" : slot === "glasses" ? "Óculos" : slot === "outfit" ? "Roupas" : "Fundo"}
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {SHOP_ITEMS.filter((i) => i.slot === slot).map((item) => {
                          const owned = unlocked.includes(item.id);
                          const eqNow = eq[item.slot] === item.id;
                          return (
                            <button key={item.id} onClick={() => handleShopAction(item)}
                              className={`p-2 rounded-lg border-2 text-left transition ${eqNow ? "border-violet-500 bg-violet-900/40" : "border-slate-700 bg-slate-800/40 hover:border-slate-500"}`}>
                              <div className="text-2xl mb-1">{item.emoji}</div>
                              <div className="text-xs font-bold text-white truncate">{item.name}</div>
                              <div className="text-xs mt-0.5 flex items-center gap-1">
                                {owned
                                  ? (eqNow ? <span className="text-violet-300 font-bold flex items-center gap-1"><Check size={10} />Equipado</span>
                                           : <span className="text-emerald-400">Equipar</span>)
                                  : <span className="text-amber-400 flex items-center gap-1">
                                      {!admin && (wallet?.coins ?? 0) < item.price && <Lock size={10} />}<Coins size={10} />{admin ? "grátis" : item.price}
                                    </span>}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </TabsContent>
            );
          })}
        </Tabs>
      </Card>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { ELEMENTS_DATA, PeriodicElement, ElementAttribute } from '@/data/elements';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Plus, Save, Wand2, Trash2, List, Settings, History, Users, Shield, User as UserIcon, Search, Activity, Trash } from 'lucide-react';

const ATTRIBUTE_LABELS = [
  "Fraquezas", "Risco/Benefício à natureza", "Risco à saúde", "Benefício",
  "Nº de ligantes possíveis", "Abundância na natureza", "Abundância no universo",
  "Massa atômica", "Densidade", "Raio atômico", "Oxidação", "Condutividade elétrica",
  "Eletronegatividade", "Estado físico", "Maior subnível energético",
  "Distribuição eletrônica", "Nº de prótons / Nº de elétrons", "Nº de nêutrons",
  "Radioatividade", "Aplicabilidade / Utilidade", "Local de origem", "Curiosidade",
  "Origem do nome", "Descobridor", "Ano de descoberta", "Ponto de fusão", "Ponto de ebulição"
];

const defaultAttributes = (): ElementAttribute[] => ATTRIBUTE_LABELS.map((label, index) => ({
  id: index + 1,
  label,
  value: "",
  justification: "",
  score: 50,
}));

const normalizeAttributes = (raw: any): ElementAttribute[] => {
  let attrs = raw;
  if (typeof attrs === "string") {
    try { attrs = JSON.parse(attrs); } catch { attrs = []; }
  }
  if (!Array.isArray(attrs)) attrs = [];

  const fallback = defaultAttributes();
  return fallback.map((base, index) => {
    const current = attrs[index] || attrs.find?.((a: any) => a?.label === base.label) || {};
    return {
      ...base,
      ...current,
      id: Number(current.id ?? base.id),
      label: current.label ?? base.label,
      value: current.value ?? "",
      justification: current.justification ?? "",
      score: Number(current.score ?? base.score) || 0,
    };
  });
};

export const AdminPanel = ({ userRole, initialSymbol }: { userRole?: string | null; initialSymbol?: string | null }) => {
  const [logs, setLogs] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [logFilter, setLogFilter] = useState("all");
  const [activeSubTab, setActiveSubTab] = useState(userRole === 'admin' ? "users" : "editor");
  const [editingSymbol, setEditingSymbol] = useState<string>("H");
  const [formData, setFormData] = useState<Partial<PeriodicElement>>(ELEMENTS_DATA["H"] || {
    number: 0,
    symbol: "",
    name: "",
    heroName: "",
    heroDescription: "",
    heroImage: "",
    rarity: "Comum",
    attributes: defaultAttributes()
  });

  const handleInputChange = (field: keyof PeriodicElement, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAttributeChange = (index: number, field: keyof ElementAttribute, value: any) => {
    const newAttributes = normalizeAttributes(formData.attributes);
    newAttributes[index] = { ...newAttributes[index], [field]: value };
    setFormData(prev => ({ ...prev, attributes: newAttributes }));
  };

  const [generating, setGenerating] = useState(false);
  const [uploading, setUploading] = useState(false);

  const buildHeroPrompt = (el: Partial<PeriodicElement>) => {
    const attrs = normalizeAttributes(el.attributes);
    const stateAttr = (attrs.find(a => a.label === "Estado físico")?.value || "Sólido").toString();
    const originAttr = (attrs.find(a => a.label === "Local de origem")?.value || "natural environment where this element is found or extracted").toString();
    const colorAttr = (attrs.find(a => a.label === "Cor")?.value || "").toString();
    const s = stateAttr.toLowerCase();
    const isGas = s.includes("gás") || s.includes("gas");
    const isLiquid = s.includes("líquido") || s.includes("liquido") || s.includes("liquid");
    const texture = isGas
      ? "translucent gaseous shimmering texture, soft glowing particles, like the real gaseous element"
      : isLiquid
      ? "flowing liquid metallic texture with reflective ripples, like the real liquid element"
      : "solid crystalline/metallic texture matching the raw mineral form of the real element";
    const cape = isGas
      ? "shiny, gaseous and translucent cape with soft colored light and luminous glowing edges"
      : "luminous translucent cape with soft colored light and glowing edges";
    const gender = Math.random() > 0.5 ? "male" : "female";
    const hairColors = ["black","brown","blonde","red","white","silver","auburn"];
    const hair = hairColors[Math.floor(Math.random()*hairColors.length)];
    const palette = colorAttr ? `Color palette coherent with the real element (${colorAttr}).` : "Color palette matching the real element's natural appearance.";

    return [
      `Vertical trading card portrait, 2:3 aspect ratio (6cm x 9cm), cinematic fantastic realism, ultra high definition, 8k.`,
      `FULL BODY SHOT of a realistic ${gender} superhero representing the chemical element "${el.name}" (symbol ${el.symbol}). Entire body visible from head to toe — both feet and head fully inside the frame with comfortable top and bottom margins. DO NOT CROP any part of the body.`,
      `Camera: full-body framing, centered composition, slightly low angle for a heroic effect, shallow depth of field with sharp focus on the character.`,
      `Lighting: strong cool frontal key light revealing suit texture and confident expression, soft diffuse ambient fill, gentle natural shadows.`,
      `Character: hero standing on the ground or slightly floating, balanced heroic pose, confident expression. Random realistic human ethnicity and features. ${hair} hair with a defined hairstyle.`,
      `Suit: texture as close as possible to the REAL natural appearance of the element — ${texture}. Glowing luminous "${el.symbol}" emblem centered on the chest. ${cape}.`,
      `Background: ${originAttr} — the natural place where the element originates or is extracted, rendered in cinematic realism and harmonized with the frontal lighting.`,
      palette,
      `Style: fantastic realism, central focus, short depth of field, balanced light, complete body details, no cropping, no text, no watermark, no logo, no borders.`,
    ].join(" ");
  };


  const generateAIPrompt = async () => {
    if (!formData.name || !formData.symbol) {
      toast.error("Preencha o nome do elemento e o símbolo primeiro!");
      return;
    }
    setGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-hero-image', {
        body: {
          prompt: buildHeroPrompt(formData),
          symbol: formData.symbol,
          name: formData.name,
          heroName: formData.heroName,
          rarity: formData.rarity,
        },
      });
      if (error || (data as any)?.error) throw new Error(error?.message || (data as any).error);
      handleInputChange('heroImage', (data as any).url);
      toast.success((data as any)?.fallback ? "Avatar de herói criado e salvo!" : "Imagem de herói gerada pela IA!");
    } catch (e: any) {
      toast.error("Erro ao gerar imagem: " + e.message);
    } finally {
      setGenerating(false);
    }
  };

  const handleImageUpload = async (file: File) => {
    if (!formData.symbol) {
      toast.error("Defina o símbolo do elemento primeiro!");
      return;
    }
    setUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'png';
      const path = `${formData.symbol}/${Date.now()}.${ext}`;
      const { error: upErr } = await supabase.storage.from('hero-images').upload(path, file, { upsert: true, contentType: file.type });
      if (upErr) throw upErr;
      const { data: signed } = await supabase.storage.from('hero-images').createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      handleInputChange('heroImage', signed?.signedUrl ?? '');
      toast.success("Imagem enviada!");
    } catch (e: any) {
      toast.error("Erro no upload: " + e.message);
    } finally {
      setUploading(false);
    }
  };

  const generateAllHeros = async () => {
    const symbols = Object.keys(ELEMENTS_DATA);
    toast.info(`Gerando imagens para ${symbols.length} heróis. Isso pode demorar...`);
    let ok = 0, fail = 0;
    for (const sym of symbols) {
      const el = ELEMENTS_DATA[sym];
      try {
        const { data, error } = await supabase.functions.invoke('generate-hero-image', {
          body: { prompt: buildHeroPrompt(el), symbol: sym },
        });
        if (error || (data as any)?.error) { fail++; continue; }
        const url = (data as any).url;
        await supabase.from('elements').upsert({
          symbol: sym, number: el.number, name: el.name,
          hero_name: el.heroName, hero_description: el.heroDescription,
          hero_image: url, rarity: el.rarity, attributes: el.attributes as any,
        });
        ELEMENTS_DATA[sym].heroImage = url;
        ok++;
      } catch { fail++; }
    }
    toast.success(`Geração concluída: ${ok} sucesso, ${fail} falhas.`);
  };

  const saveElement = async () => {
    if (!formData.symbol) {
      toast.error("Símbolo é obrigatório!");
      return;
    }
    const { error } = await supabase.from('elements').upsert({
      symbol: formData.symbol,
      number: formData.number ?? 0,
      name: formData.name ?? '',
      hero_name: formData.heroName ?? '',
      hero_description: formData.heroDescription ?? '',
      hero_image: formData.heroImage ?? '',
      rarity: formData.rarity ?? 'Comum',
      attributes: (formData.attributes ?? []) as any,
    });
    if (error) {
      toast.error("Erro ao salvar: " + error.message);
      return;
    }
    ELEMENTS_DATA[formData.symbol] = formData as PeriodicElement;
    toast.success(`Elemento ${formData.symbol} salvo no banco!`);
  };

  const loadElement = (symbol: string) => {
    const element = ELEMENTS_DATA[symbol];
    if (element) {
      setFormData({ ...element, attributes: normalizeAttributes(element.attributes) });
      setEditingSymbol(symbol);
    }
  };

  const calculateAverage = () => {
    const attrs = normalizeAttributes(formData.attributes);
    const total = attrs.reduce((acc, curr) => acc + (Number(curr.score) || 0), 0);
    return (total / attrs.length).toFixed(1);
  };

  const fetchLogs = async () => {
    const { data, error } = await supabase
      .from('activity_logs')
      .select('*, profiles(username, email)')
      .order('created_at', { ascending: false })
      .limit(50);
    
    if (data && !error) setLogs(data);
  };

  const fetchProfiles = async () => {
    const { data: profilesData } = await supabase
      .from('profiles')
      .select('*')
      .order('username', { ascending: true });
    const { data: rolesData } = await supabase
      .from('user_roles')
      .select('user_id, role');
    const { data: walletsData } = await supabase
      .from('player_wallet')
      .select('user_id, coins, lifetime_coins');

    if (profilesData) {
      const merged = profilesData.map(p => ({
        ...p,
        role: rolesData?.find(r => r.user_id === p.id)?.role ?? 'user',
        coins: walletsData?.find(w => w.user_id === p.id)?.coins ?? 0,
        lifetime_coins: walletsData?.find(w => w.user_id === p.id)?.lifetime_coins ?? 0,
      }));
      setProfiles(merged);
    }
  };

  const grantCoins = async (userId: string, amount: number) => {
    const { data: w } = await supabase.from('player_wallet').select('*').eq('user_id', userId).maybeSingle();
    if (!w) {
      await supabase.from('player_wallet').insert({ user_id: userId, coins: Math.max(0, amount), lifetime_coins: Math.max(0, amount) });
    } else {
      const newCoins = Math.max(0, (w.coins ?? 0) + amount);
      const newLifetime = amount > 0 ? (w.lifetime_coins ?? 0) + amount : (w.lifetime_coins ?? 0);
      await supabase.from('player_wallet').update({ coins: newCoins, lifetime_coins: newLifetime }).eq('user_id', userId);
    }
    toast.success(amount > 0 ? `+${amount} ⚛ enviados!` : `${amount} ⚛ removidos`);
    fetchProfiles();
  };

  const grantAll = async (amount: number) => {
    if (!confirm(`Dar ${amount} ⚛ Átomos para TODOS os ${profiles.length} jogadores?`)) return;
    for (const p of profiles) await grantCoins(p.id, amount);
  };


  useEffect(() => {
    if (userRole === 'admin') {
      fetchLogs();
      fetchProfiles();
    }
  }, [userRole]);

  useEffect(() => {
    if (initialSymbol && ELEMENTS_DATA[initialSymbol]) {
      loadElement(initialSymbol);
      setActiveSubTab('editor');
    }
  }, [initialSymbol]);

  const updateUserRole = async (userId: string, newRole: 'admin' | 'moderator' | 'user') => {
    // Remove any existing roles for this user, then insert the new one
    await supabase.from('user_roles').delete().eq('user_id', userId);
    const { error } = await supabase.from('user_roles').insert({ user_id: userId, role: newRole });
    if (error) {
      toast.error("Erro ao atualizar nível de acesso");
    } else {
      toast.success("Nível de acesso atualizado!");
      fetchProfiles();
    }
  };

  const deleteUser = async (userId: string) => {
    if (!confirm("Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.")) return;
    
    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);
    
    if (error) {
      toast.error("Erro ao excluir usuário");
    } else {
      toast.success("Usuário removido do sistema");
      fetchProfiles();
    }
  };


  const filteredProfiles = profiles.filter(p => 
    (p.username?.toLowerCase() || "").includes(searchTerm.toLowerCase()) || 
    (p.email?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
    p.id.includes(searchTerm)
  );

  const filteredLogs = logs.filter(log => {
    if (logFilter === "all") return true;
    return log.action === logFilter;
  });

  const stats = {
    totalUsers: profiles.length,
    admins: profiles.filter((p: any) => p.role === 'admin').length,
    activeToday: new Set(logs.filter(l => new Date(l.created_at).toDateString() === new Date().toDateString()).map(l => l.user_id)).size
  };


  return (
    <div className="flex flex-col gap-8 p-4 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="w-full">
        <TabsList className="bg-slate-900/60 border border-white/10 p-1 rounded-xl mb-6 h-auto gap-2 backdrop-blur-xl">
          {userRole === 'admin' && (
            <TabsTrigger value="users" className="px-6 py-2 rounded-lg data-[state=active]:bg-emerald-600 font-bold transition-all gap-2">
              <Users className="w-4 h-4" /> GERENCIAR USUÁRIOS
            </TabsTrigger>
          )}
          <TabsTrigger value="editor" className="px-6 py-2 rounded-lg data-[state=active]:bg-blue-600 font-bold transition-all gap-2">
            <Settings className="w-4 h-4" /> EDITOR DE CARTAS
          </TabsTrigger>
          {userRole === 'admin' && (
            <TabsTrigger value="logs" className="px-6 py-2 rounded-lg data-[state=active]:bg-purple-600 font-bold transition-all gap-2">
              <History className="w-4 h-4" /> RASTREAR ATIVIDADES
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="editor">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl h-[800px] flex flex-col">
              <CardHeader className="border-b border-white/5">
                <CardTitle className="flex items-center gap-2 text-xl font-black italic uppercase tracking-tighter">
                  <List className="w-5 h-5 text-blue-400" /> Biblioteca Elemental
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 flex-1 overflow-hidden">
                <ScrollArea className="h-full p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {Object.keys(ELEMENTS_DATA).map(symbol => (
                      <button
                        key={symbol}
                        onClick={() => loadElement(symbol)}
                        className={`p-2 rounded-lg border text-xs font-black transition-all ${
                          editingSymbol === symbol 
                            ? 'bg-blue-600 border-white text-white scale-110 z-10 shadow-lg' 
                            : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-500'
                        }`}
                      >
                        {symbol}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2 bg-slate-900/50 border-white/10 backdrop-blur-xl">
              <CardHeader className="flex flex-row items-center justify-between border-b border-white/5">
                <CardTitle className="text-xl font-black italic uppercase tracking-tighter">Laboratório de Heróis</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-blue-600/30 text-blue-400 font-bold" onClick={generateAllHeros}>
                    <Wand2 className="w-4 h-4 mr-2" /> GERAR TUDO (IA)
                  </Button>
                  <Button size="sm" onClick={saveElement} className="bg-blue-600 hover:bg-blue-700 font-bold text-white">
                    <Save className="w-4 h-4 mr-2" /> ATUALIZAR
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[650px] pr-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nº Atômico</Label>
                          <Input 
                            type="number" 
                            value={formData.number} 
                            onChange={e => handleInputChange('number', parseInt(e.target.value))}
                            className="bg-black/40 border-white/10 font-black h-12 text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Símbolo</Label>
                          <Input 
                            value={formData.symbol} 
                            onChange={e => handleInputChange('symbol', e.target.value)}
                            className="bg-black/40 border-white/10 font-black h-12 text-center text-xl text-white"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nome</Label>
                          <Input 
                            value={formData.name} 
                            onChange={e => handleInputChange('name', e.target.value)}
                            className="bg-black/40 border-white/10 font-black h-12 text-white"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Raridade da Carta</Label>
                        <div className="flex gap-2 flex-wrap">
                          {['Comum', 'Incomum', 'Raro', 'Épico', 'Lendário'].map(r => (
                            <Button
                              key={r}
                              size="sm"
                              variant={formData.rarity === r ? 'default' : 'outline'}
                              className={`text-[10px] font-black italic px-4 ${formData.rarity === r ? 'bg-blue-600 border-white' : 'border-white/5 bg-white/5'}`}
                              onClick={() => handleInputChange('rarity', r)}
                            >
                              {r.toUpperCase()}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Nome do Herói</Label>
                        <Input 
                          value={formData.heroName} 
                          onChange={e => handleInputChange('heroName', e.target.value)}
                          className="bg-black/40 border-white/10 h-12 font-bold italic text-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Grito de Guerra / Descrição</Label>
                        <Textarea 
                          value={formData.heroDescription} 
                          onChange={e => handleInputChange('heroDescription', e.target.value)}
                          className="bg-black/40 border-white/10 h-24 italic text-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                          Avatar do Herói
                          <Button variant="link" size="sm" onClick={generateAIPrompt} disabled={generating} className="h-auto p-0 text-blue-400 font-black italic hover:text-blue-300">
                            <Wand2 className="w-3 h-3 mr-1" /> {generating ? 'GERANDO...' : 'GERAR COM IA'}
                          </Button>
                        </Label>
                        <div className="relative group">
                          <Input 
                            value={formData.heroImage} 
                            onChange={e => handleInputChange('heroImage', e.target.value)}
                            className="bg-black/40 border-white/10 text-[9px] h-10 text-white/40 font-mono pr-20"
                            placeholder="URL da imagem (gerada ou enviada)..."
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-600/20 rounded-md text-[8px] font-black text-blue-400 border border-blue-500/30">
                            LOVABLE AI
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            type="file"
                            accept="image/*"
                            disabled={uploading}
                            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(f); }}
                            className="bg-black/40 border-white/10 text-[10px] h-9 text-white/60"
                          />
                          {uploading && <span className="text-[9px] text-blue-400 font-bold">ENVIANDO...</span>}
                        </div>
                        <p className="text-[9px] text-slate-500 italic">
                          Gere com IA, envie do computador, ou cole uma URL. As imagens são salvas no armazenamento do projeto.
                        </p>
                      </div>
                      {formData.heroImage && (
                        <div className="aspect-[9/30] w-full rounded-2xl bg-black/60 overflow-hidden border-2 border-white/10 shadow-2xl relative group">
                          <div className="w-full h-full">
                            {formData.heroImage.endsWith('.mp4') ? (
                              <video src={formData.heroImage} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                            ) : (
                              <img 
                                src={formData.heroImage} 
                                className="w-full h-full object-cover transition-opacity duration-500" 
                                alt="Preview"
                                onLoad={(e) => (e.currentTarget.style.opacity = "1")}
                                style={{ opacity: 0 }}
                              />
                            )}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black italic text-white uppercase">Proporção 30x9</span>
                              <span className="text-[8px] text-white/40 uppercase tracking-widest">Enquadramento Full Body</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-8 pb-20">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <h3 className="text-xl font-black italic uppercase tracking-tighter flex items-center gap-2">
                        <Settings className="w-5 h-5 text-blue-400" /> Matriz de Atributos
                      </h3>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-600/30 px-4 py-1 text-lg font-black italic">
                        POWER: {calculateAverage()}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {normalizeAttributes(formData.attributes).map((attr, index) => (
                        <div key={attr.id} className="p-5 bg-white/5 rounded-2xl border border-white/5 space-y-4 hover:bg-white/10 transition-colors group">
                          <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-black uppercase tracking-widest text-blue-400/60">Critério #{attr.id}</span>
                              <span className="text-sm font-black italic text-white uppercase">{attr.label}</span>
                            </div>
                            <div className="flex items-center gap-3 bg-black/40 p-2 rounded-xl border border-white/5">
                              <Label className="text-[10px] font-black text-slate-500 uppercase">Score</Label>
                              <Input 
                                type="number" 
                                value={attr.score} 
                                onChange={e => handleAttributeChange(index, 'score', parseInt(e.target.value))}
                                className="w-16 h-8 bg-blue-600/20 border-blue-600/30 text-xs font-black text-blue-400 text-center"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                              <Label className="text-[9px] font-black uppercase text-slate-600">Valor Nominal</Label>
                              <Input 
                                placeholder="Ex: 1.008 u" 
                                value={attr.value} 
                                onChange={e => handleAttributeChange(index, 'value', e.target.value)}
                                className="bg-black/40 border-white/10 text-sm font-bold text-white"
                              />
                            </div>
                            <div className="space-y-1">
                              <Label className="text-[9px] font-black uppercase text-slate-600">Justificativa Lore/Ciência</Label>
                              <Textarea 
                                placeholder="Conecte a propriedade química ao poder do herói..." 
                                value={attr.justification} 
                                onChange={e => handleAttributeChange(index, 'justification', e.target.value)}
                                className="bg-black/40 border-white/10 text-[10px] h-16 italic text-white"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {userRole === 'admin' && (
          <>
            <TabsContent value="logs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card className="bg-emerald-600/10 border-emerald-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-emerald-400">Usuários Totais</span>
                      <Users className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-3xl font-black mt-2">{stats.totalUsers}</p>
                  </CardContent>
                </Card>
                <Card className="bg-blue-600/10 border-blue-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-blue-400">Ativos Hoje</span>
                      <Activity className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-3xl font-black mt-2">{stats.activeToday}</p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-600/10 border-purple-500/20">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black uppercase text-purple-400">Administradores</span>
                      <Shield className="w-4 h-4 text-purple-400" />
                    </div>
                    <p className="text-3xl font-black mt-2">{stats.admins}</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="flex items-center gap-2">
                    <History className="w-5 h-5 text-purple-400" /> Histórico de Atividades
                  </CardTitle>
                  <div className="flex gap-2">
                    <select 
                      className="bg-black/40 border border-white/10 rounded-md text-xs px-2 py-1"
                      value={logFilter}
                      onChange={(e) => setLogFilter(e.target.value)}
                    >
                      <option value="all">Todos os Logs</option>
                      <option value="LOGIN">Logins</option>
                      <option value="TAB_CHANGE">Troca de Abas</option>
                      <option value="VIEW_ELEMENT">Visualizações</option>
                    </select>
                    <Button variant="outline" size="sm" onClick={fetchLogs}>Atualizar</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {filteredLogs.map(log => (
                        <div key={log.id} className="p-3 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-all">
                          <div className="flex flex-col">
                            <span className="font-bold text-xs text-purple-400">{log.profiles?.username || log.profiles?.email || 'Sistema'}</span>
                            <span className="text-xs text-white/80">
                              <Badge variant="outline" className="mr-2 text-[8px] h-4">{log.action}</Badge>
                              {log.action === 'VIEW_ELEMENT' ? `Visualizou ${log.metadata?.symbol}` : log.action === 'TAB_CHANGE' ? `Navegou para ${log.metadata?.tab || log.path}` : log.action}
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-500 block">{new Date(log.created_at).toLocaleString('pt-BR')}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="users">
              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" /> Gestão de Usuários
                  </CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500" />
                      <Input 
                        placeholder="Buscar por nome ou e-mail..." 
                        className="pl-8 h-8 text-xs bg-black/40 border-white/10 w-64"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                     <Button variant="outline" size="sm" onClick={() => grantAll(50)} className="text-amber-300 border-amber-500/40">+50 ⚛ Todos</Button>
                     <Button variant="outline" size="sm" onClick={fetchProfiles}>Atualizar</Button>
                   </div>
                 </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredProfiles.map(profile => (
                      <div key={profile.id} className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-4 relative group">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all h-8 w-8"
                          onClick={() => deleteUser(profile.id)}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                            <UserIcon className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="font-bold truncate text-sm">{profile.username || 'Sem nome'}</span>
                            <span className="text-[9px] text-slate-500 truncate">{profile.email}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="flex justify-between items-center">
                            <Label className="text-[9px] uppercase text-slate-500">Nível de Acesso</Label>
                            <span className="text-[8px] text-slate-600">Desde: {new Date(profile.created_at).toLocaleDateString()}</span>
                          </div>
                          <div className="flex gap-2">
                            {(['user', 'moderator', 'admin'] as const).map(r => (
                              <Button
                                key={r}
                                size="sm"
                                variant={profile.role === r ? 'default' : 'outline'}
                                className={`text-[9px] h-7 flex-1 font-black ${profile.role === r ? (r === 'admin' ? 'bg-red-600' : r === 'moderator' ? 'bg-blue-600' : 'bg-slate-600') : 'border-white/5'}`}
                                onClick={() => updateUserRole(profile.id, r)}
                              >
                                {r.toUpperCase()}
                              </Button>
                             ))}
                           </div>
                           <div className="mt-2 p-2 bg-amber-500/10 border border-amber-500/20 rounded-lg space-y-2">
                             <div className="flex items-center justify-between">
                               <Label className="text-[9px] uppercase text-amber-300">⚛ Átomos</Label>
                               <span className="text-sm font-black text-amber-200">{profile.coins ?? 0}</span>
                             </div>
                             <div className="flex gap-1">
                               {[10, 50, 100, 500].map(v => (
                                 <Button key={v} size="sm" className="text-[9px] h-6 flex-1 bg-amber-600 hover:bg-amber-500 px-1" onClick={() => grantCoins(profile.id, v)}>+{v}</Button>
                               ))}
                               <Button size="sm" variant="outline" className="text-[9px] h-6 px-2 border-red-500/40 text-red-300" onClick={() => grantCoins(profile.id, -(profile.coins ?? 0))}>Zerar</Button>
                             </div>
                           </div>
                         </div>
                       </div>
                     ))}

                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
};

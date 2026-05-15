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
import { Plus, Save, Wand2, Trash2, List, Settings, History, Users, Shield, User as UserIcon } from 'lucide-react';

const ATTRIBUTE_LABELS = [
  "Fraquezas", "Risco/Benefício à natureza", "Risco à saúde", "Benefício",
  "Nº de ligantes possíveis", "Abundância na natureza", "Abundância no universo",
  "Massa atômica", "Densidade", "Raio atômico", "Oxidação", "Condutividade elétrica",
  "Eletronegatividade", "Estado físico", "Maior subnível energético",
  "Distribuição eletrônica", "Nº de prótons / Nº de elétrons", "Nº de nêutrons",
  "Radioatividade", "Aplicabilidade / Utilidade", "Local de origem", "Curiosidade",
  "Origem do nome", "Descobridor", "Ano de descoberta", "Ponto de fusão", "Ponto de ebulição"
];

export const AdminPanel = ({ userRole }: { userRole?: string | null }) => {
  const [logs, setLogs] = useState<any[]>([]);
  const [profiles, setProfiles] = useState<any[]>([]);
  const [activeSubTab, setActiveSubTab] = useState("editor");
  const [editingSymbol, setEditingSymbol] = useState<string>("H");
  const [formData, setFormData] = useState<Partial<PeriodicElement>>(ELEMENTS_DATA["H"] || {
    number: 0,
    symbol: "",
    name: "",
    heroName: "",
    heroDescription: "",
    heroImage: "",
    rarity: "Comum",
    attributes: ATTRIBUTE_LABELS.map((label, index) => ({
      id: index + 1,
      label,
      value: "",
      justification: "",
      score: 50
    }))
  });

  const handleInputChange = (field: keyof PeriodicElement, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAttributeChange = (index: number, field: keyof ElementAttribute, value: any) => {
    const newAttributes = [...(formData.attributes || [])];
    newAttributes[index] = { ...newAttributes[index], [field]: value };
    setFormData(prev => ({ ...prev, attributes: newAttributes }));
  };

  const generateAIPrompt = () => {
    if (!formData.name || !formData.symbol) {
      toast.error("Preencha o nome do elemento e o símbolo primeiro!");
      return;
    }

    const stateAttr = formData.attributes?.find(a => a.label === "Estado físico")?.value || "Sólido";
    const originAttr = formData.attributes?.find(a => a.label === "Local de origem")?.value || "Natureza";
    
    let texture = "metallic and solid";
    if (stateAttr.toString().toLowerCase().includes("gás")) texture = "gaseous and glowing";
    if (stateAttr.toString().toLowerCase().includes("líquido")) texture = "liquid and flowing";
    
    const randomGender = Math.random() > 0.5 ? "male" : "female";
    
    const prompt = `Professional cinematic character portrait, 2:3 aspect ratio (6x9 proportion). 
    Character: A realistic ${randomGender} superhero representing the chemical element "${formData.name}". 
    Features: Varied human traits, confident expression, heroic and balanced pose. 
    Composition: FULL BODY shot from head to toe, perfectly centered, both right and left feet clearly visible, complete margins at top and bottom, character is fully contained within the frame with no cropping. 
    Camera: Full-body position, slightly low angle for heroic effect, sharp focus, shallow depth of field. 
    Lighting: Soft cinematic lighting with luminous glowing edges (rim lighting), balanced light and complete body details. 
    Suit: ${texture} texture with luminosity coherent with element type, glowing symbol "${formData.symbol}" in the center of the chest. 
    Cape: Glowing, translucent, and ${texture} texture with soft luminous edges. 
    Background: Cinematic realistic environment representing its natural origin: ${originAttr}, harmonized with frontal lighting. 
    Style: Fantastic realism, high definition, 8k, coherent element palette.`;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt.trim())}?width=800&height=1200&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
    handleInputChange('heroImage', imageUrl);
    toast.success("Design de Herói Gerado! O link acima contém as instruções enviadas para a IA.");
  };

  const generateAllHeros = () => {
    toast.info("Iniciando geração de prompts para todos os 118 heróis...");
    // In a real app, this would iterate and save. Here we show how the prompt would be structured.
    console.log("Generating prompts for all elements with the new style...");
  };

  const saveElement = () => {
    if (!formData.symbol) {
      toast.error("Símbolo é obrigatório!");
      return;
    }
    // Update local data for this session
    if (formData.symbol) {
      ELEMENTS_DATA[formData.symbol] = formData as PeriodicElement;
    }
    toast.success(`Elemento ${formData.symbol} atualizado na memória com sucesso!`);
  };

  const loadElement = (symbol: string) => {
    const element = ELEMENTS_DATA[symbol];
    if (element) {
      setFormData({...element});
      setEditingSymbol(symbol);
    }
  };

  const calculateAverage = () => {
    if (!formData.attributes) return 0;
    const total = formData.attributes.reduce((acc, curr) => acc + curr.score, 0);
    return (total / formData.attributes.length).toFixed(1);
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
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('username', { ascending: true });
    
    if (data && !error) setProfiles(data);
  };

  useEffect(() => {
    if (userRole === 'admin') {
      fetchLogs();
      fetchProfiles();
    }
  }, [userRole]);

  const updateUserRole = async (userId: string, newRole: string) => {
    const { error } = await supabase
      .from('profiles')
      .update({ role: newRole })
      .eq('id', userId);
    
    if (error) {
      toast.error("Erro ao atualizar nível de acesso");
    } else {
      toast.success("Nível de acesso atualizado!");
      fetchProfiles();
    }
  };

  return (
    <div className="flex flex-col gap-8 p-4 max-w-[1600px] mx-auto animate-in fade-in duration-700">
      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="w-full">
        <TabsList className="bg-slate-900/60 border border-white/10 p-1 rounded-xl mb-6 h-auto gap-2 backdrop-blur-xl">
          <TabsTrigger value="editor" className="px-6 py-2 rounded-lg data-[state=active]:bg-blue-600 font-bold transition-all gap-2">
            <Settings className="w-4 h-4" /> EDITOR DE CARTAS
          </TabsTrigger>
          {userRole === 'admin' && (
            <>
              <TabsTrigger value="logs" className="px-6 py-2 rounded-lg data-[state=active]:bg-purple-600 font-bold transition-all gap-2">
                <History className="w-4 h-4" /> LOGS DE ATIVIDADE
              </TabsTrigger>
              <TabsTrigger value="users" className="px-6 py-2 rounded-lg data-[state=active]:bg-emerald-600 font-bold transition-all gap-2">
                <Users className="w-4 h-4" /> GESTÃO DE ACESSO
              </TabsTrigger>
            </>
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
                          Avatar do Herói (Gerado por IA)
                          <Button variant="link" size="sm" onClick={generateAIPrompt} className="h-auto p-0 text-blue-400 font-black italic hover:text-blue-300">
                            <Wand2 className="w-3 h-3 mr-1" /> GERAR NOVO DESIGN
                          </Button>
                        </Label>
                        <div className="relative group">
                          <Input 
                            value={formData.heroImage} 
                            onChange={e => handleInputChange('heroImage', e.target.value)}
                            className="bg-black/40 border-white/10 text-[9px] h-10 text-white/40 font-mono pr-20"
                            placeholder="URL da imagem será gerada aqui..."
                          />
                          <div className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-blue-600/20 rounded-md text-[8px] font-black text-blue-400 border border-blue-500/30">
                            POLLINATIONS AI
                          </div>
                        </div>
                        <p className="text-[9px] text-slate-500 italic">
                          Este endereço é um link direto para o motor de IA Pollinations, que cria a imagem em tempo real baseada nas características do elemento.
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
                      {formData.attributes?.map((attr, index) => (
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
              <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <History className="w-5 h-5 text-purple-400" /> Histórico de Atividade (Rastreador)
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={fetchLogs}>Atualizar</Button>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[600px]">
                    <div className="space-y-4">
                      {logs.map(log => (
                        <div key={log.id} className="p-4 bg-white/5 rounded-xl border border-white/5 flex justify-between items-center">
                          <div className="flex flex-col">
                            <span className="font-bold text-purple-400">{log.profiles?.username || log.profiles?.email}</span>
                            <span className="text-sm text-white/80">{log.action} em <span className="text-blue-400 font-mono">{log.path}</span></span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-slate-500 block">{new Date(log.created_at).toLocaleString('pt-BR')}</span>
                            {log.metadata && <Badge variant="outline" className="text-[8px] mt-1">META DATA</Badge>}
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
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-emerald-400" /> Controle de Acesso
                  </CardTitle>
                  <Button variant="outline" size="sm" onClick={fetchProfiles}>Atualizar</Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {profiles.map(profile => (
                      <div key={profile.id} className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center border border-emerald-500/30">
                            <UserIcon className="w-5 h-5 text-emerald-400" />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="font-bold truncate">{profile.username || 'Sem nome'}</span>
                            <span className="text-[10px] text-slate-500 truncate">{profile.id}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label className="text-[10px] uppercase text-slate-500">Nível de Acesso</Label>
                          <div className="flex gap-2">
                            {['student', 'teacher', 'admin'].map(r => (
                              <Button
                                key={r}
                                size="sm"
                                variant={profile.role === r ? 'default' : 'outline'}
                                className={`text-[10px] h-7 flex-1 ${profile.role === r ? (r === 'admin' ? 'bg-red-600' : r === 'teacher' ? 'bg-blue-600' : 'bg-slate-600') : 'border-white/5'}`}
                                onClick={() => updateUserRole(profile.id, r)}
                              >
                                {r.toUpperCase()}
                              </Button>
                            ))}
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

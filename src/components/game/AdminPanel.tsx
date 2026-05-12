import React, { useState } from 'react';
import { ELEMENTS_DATA, PeriodicElement, ElementAttribute } from '@/data/elements';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Plus, Save, Wand2, Trash2, List, Settings } from 'lucide-react';

const ATTRIBUTE_LABELS = [
  "Fraquezas", "Risco/Benefício à natureza", "Risco à saúde", "Benefício",
  "Nº de ligantes possíveis", "Abundância na natureza", "Abundância no universo",
  "Massa atômica", "Densidade", "Raio atômico", "Oxidação", "Condutividade elétrica",
  "Eletronegatividade", "Estado físico", "Maior subnível energético",
  "Distribuição eletrônica", "Nº de prótons / Nº de elétrons", "Nº de nêutrons",
  "Radioatividade", "Aplicabilidade / Utilidade", "Local de origem", "Curiosidade",
  "Origem do nome", "Descobridor", "Ano de descoberta", "Ponto de fusão", "Ponto de ebulição"
];

export const AdminPanel = () => {
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
    
    const prompt = `Vertical card composition (2:3 ratio), cinematic 8k resolution. 
    Character: A realistic ${randomGender} superhero representing the chemical element "${formData.name}". 
    Features: Varied human traits, random hair style and color, confident expression, heroic and balanced pose. 
    Composition: Full body shot from head to toe, centered, both right and left feet clearly visible, complete margins at top and bottom, no cropping. 
    Camera: Slightly low angle for a heroic effect, sharp focus on character, shallow depth of field. 
    Lighting: Strong cold frontal light highlighting suit textures and expression, diffused natural ambient light with soft shadows. 
    Suit: ${texture} texture with luminosity coherent with element type, glowing symbol "${formData.symbol}" in the center of the chest. 
    Cape: Glowing, translucent, and ${texture} texture with soft luminous edges. 
    Background: High-definition cinematic realistic environment representing its natural origin: ${originAttr}. 
    Movement: Hero floating slightly above the ground. 
    Style: Fantastic realism, high definition, complete body details, coherent element palette.`;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=900&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`;
    handleInputChange('heroImage', imageUrl);
    toast.success("Novo design de herói gerado seguindo os novos critérios!");
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-4 max-w-[1600px] mx-auto animate-in fade-in duration-700">
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
                    Avatar Cinematográfico
                    <Button variant="link" size="sm" onClick={generateAIPrompt} className="h-auto p-0 text-blue-400 font-black italic">
                      <Wand2 className="w-3 h-3 mr-1" /> GERAR IMAGEM
                    </Button>
                  </Label>
                  <Input 
                    value={formData.heroImage} 
                    onChange={e => handleInputChange('heroImage', e.target.value)}
                    className="bg-black/40 border-white/10 text-[10px] h-10 text-white"
                  />
                </div>
                {formData.heroImage && (
                  <div className="aspect-[2/3] w-full rounded-2xl bg-black/60 overflow-hidden border-2 border-white/10 shadow-2xl relative group">
                    <div className="w-full h-full animate-float">
                      {formData.heroImage.endsWith('.mp4') ? (
                        <video src={formData.heroImage} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                      ) : (
                        <img src={formData.heroImage} className="w-full h-full object-cover" alt="Preview" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                       <span className="text-[10px] font-black italic text-white/60 uppercase">Proporção 2:3 (6cm x 9cm)</span>
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
  );
};

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
import { Plus, Save, Wand2, Trash2, List } from 'lucide-react';

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
  const [editingSymbol, setEditingSymbol] = useState<string>("");
  const [formData, setFormData] = useState<Partial<PeriodicElement>>({
    number: 0,
    symbol: "",
    name: "",
    heroName: "",
    heroDescription: "",
    heroImage: "",
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
    if (!formData.name || !formData.heroName) {
      toast.error("Preencha o nome do elemento e do herói primeiro!");
      return;
    }
    const prompt = `A cinematic superhero character named ${formData.heroName}, representing the chemical element ${formData.name}, ${formData.heroDescription}, wearing high-tech power suit inspired by ${formData.name} properties, highly detailed, digital art, masterpiece, comic book style, 8k resolution`;
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=800&nologo=true`;
    handleInputChange('heroImage', imageUrl);
    toast.success("Prompt de imagem gerado com sucesso!");
  };

  const saveElement = () => {
    if (!formData.symbol) {
      toast.error("Símbolo é obrigatório!");
      return;
    }
    // In a real app, this would be an API call
    console.log("Saving element:", formData);
    toast.success(`Elemento ${formData.symbol} salvo com sucesso! (Simulado)`);
  };

  const loadElement = (symbol: string) => {
    const element = ELEMENTS_DATA[symbol];
    if (element) {
      setFormData(element);
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
      {/* Sidebar: List */}
      <Card className="bg-slate-900/50 border-white/10 backdrop-blur-xl h-[800px] flex flex-col">
        <CardHeader className="border-b border-white/5">
          <CardTitle className="flex items-center gap-2 text-xl font-black italic">
            <List className="w-5 h-5 text-blue-400" /> GERENCIAR ELEMENTOS
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full p-4">
            <div className="grid grid-cols-4 gap-2">
              {Object.keys(ELEMENTS_DATA).map(symbol => (
                <button
                  key={symbol}
                  onClick={() => loadElement(symbol)}
                  className={`p-2 rounded-lg border text-xs font-bold transition-all ${
                    editingSymbol === symbol 
                      ? 'bg-blue-600 border-white text-white' 
                      : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-400'
                  }`}
                >
                  {symbol}
                </button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Main Content: Form */}
      <Card className="lg:col-span-2 bg-slate-900/50 border-white/10 backdrop-blur-xl">
        <CardHeader className="flex flex-row items-center justify-between border-b border-white/5">
          <CardTitle className="text-xl font-black italic">EDITOR DE HERÓI</CardTitle>
          <div className="flex gap-2">
            <Badge variant="outline" className="text-blue-400 border-blue-400/30">Média: {calculateAverage()}</Badge>
            <Button size="sm" onClick={saveElement} className="bg-green-600 hover:bg-green-700">
              <Save className="w-4 h-4 mr-2" /> SALVAR
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <ScrollArea className="h-[650px] pr-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>Nº Atômico</Label>
                    <Input 
                      type="number" 
                      value={formData.number} 
                      onChange={e => handleInputChange('number', parseInt(e.target.value))}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Símbolo</Label>
                    <Input 
                      value={formData.symbol} 
                      onChange={e => handleInputChange('symbol', e.target.value)}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Nome</Label>
                    <Input 
                      value={formData.name} 
                      onChange={e => handleInputChange('name', e.target.value)}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Nome do Herói</Label>
                  <Input 
                    value={formData.heroName} 
                    onChange={e => handleInputChange('heroName', e.target.value)}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Descrição do Herói</Label>
                  <Textarea 
                    value={formData.heroDescription} 
                    onChange={e => handleInputChange('heroDescription', e.target.value)}
                    className="bg-white/5 border-white/10 h-24"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="flex justify-between">
                    URL da Imagem / Vídeo
                    <Button variant="link" size="sm" onClick={generateAIPrompt} className="h-auto p-0 text-blue-400">
                      <Wand2 className="w-3 h-3 mr-1" /> Gerar com IA
                    </Button>
                  </Label>
                  <Input 
                    value={formData.heroImage} 
                    onChange={e => handleInputChange('heroImage', e.target.value)}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                {formData.heroImage && (
                  <div className="aspect-[3/4] rounded-xl bg-black/40 overflow-hidden border border-white/10">
                    <img src={formData.heroImage} className="w-full h-full object-contain" alt="Preview" />
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-black italic border-b border-white/5 pb-2">ATRIBUTOS (27 CRITÉRIOS)</h3>
              <div className="grid grid-cols-1 gap-4">
                {formData.attributes?.map((attr, index) => (
                  <div key={attr.id} className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black uppercase text-blue-400">{attr.label}</span>
                      <div className="flex items-center gap-2">
                        <Label className="text-[10px] text-slate-500">SCORE:</Label>
                        <Input 
                          type="number" 
                          value={attr.score} 
                          onChange={e => handleAttributeChange(index, 'score', parseInt(e.target.value))}
                          className="w-16 h-8 bg-black/40 border-white/10 text-xs"
                        />
                      </div>
                    </div>
                    <Input 
                      placeholder="Valor (ex: 1.008 u, Altamente reativo...)" 
                      value={attr.value} 
                      onChange={e => handleAttributeChange(index, 'value', e.target.value)}
                      className="bg-black/40 border-white/10 text-sm"
                    />
                    <Textarea 
                      placeholder="Justificativa científica para o herói..." 
                      value={attr.justification} 
                      onChange={e => handleAttributeChange(index, 'justification', e.target.value)}
                      className="bg-black/40 border-white/10 text-xs h-16"
                    />
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

import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles, X } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  urls: string[];
  loading?: boolean;
  onPick: (url: string) => void;
  onRegenerate?: () => void;
};

export const HeroOptionsDialog: React.FC<Props> = ({ open, onOpenChange, urls, loading, onPick, onRegenerate }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl bg-slate-950 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="w-5 h-5 text-amber-300" />
            Escolha a melhor versão do herói
          </DialogTitle>
        </DialogHeader>

        {loading && urls.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-3 text-slate-300">
            <Loader2 className="w-10 h-10 animate-spin text-amber-300" />
            <p className="text-sm">Gerando 5 variações com sexo, etnia e cor de pele sorteados...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {urls.map((u, i) => (
              <button
                key={u + i}
                type="button"
                onClick={() => onPick(u)}
                className="group relative rounded-xl overflow-hidden border-2 border-white/10 hover:border-amber-300 transition-all hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <img src={u} alt={`Opção ${i + 1}`} className="w-full aspect-[2/3] object-cover" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end justify-center pb-3">
                  <span className="opacity-0 group-hover:opacity-100 text-xs font-black uppercase tracking-widest bg-amber-400 text-black px-3 py-1.5 rounded-full">
                    Escolher #{i + 1}
                  </span>
                </div>
                <div className="absolute top-2 left-2 w-7 h-7 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-xs font-black">
                  {i + 1}
                </div>
              </button>
            ))}
            {loading && urls.length > 0 && (
              <div className="flex items-center justify-center aspect-[2/3] border-2 border-dashed border-white/20 rounded-xl">
                <Loader2 className="w-8 h-8 animate-spin text-amber-300" />
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between gap-2 pt-2">
          <Button variant="ghost" onClick={() => onOpenChange(false)} className="text-slate-300">
            <X className="w-4 h-4 mr-1" /> Fechar
          </Button>
          {onRegenerate && (
            <Button onClick={onRegenerate} disabled={loading} className="bg-amber-500 hover:bg-amber-400 text-black font-bold">
              {loading ? <Loader2 className="w-4 h-4 mr-1 animate-spin" /> : <Sparkles className="w-4 h-4 mr-1" />}
              Gerar mais 5
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

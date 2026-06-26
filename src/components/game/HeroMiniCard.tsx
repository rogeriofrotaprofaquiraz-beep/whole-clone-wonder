import React from "react";
import { PeriodicElement } from "@/data/elements";
import { Badge } from "@/components/ui/badge";
import { RARITY_FRAME, FAMILY_BADGE, getFamily, calcRarity } from "@/lib/heroStyles";

type Props = {
  element: PeriodicElement;
  onClick?: () => void;
  size?: "sm" | "md";
};

export const HeroMiniCard: React.FC<Props> = ({ element, onClick, size = "md" }) => {
  const rarity = calcRarity(element.attributes as any, element.rarity);
  const frame = RARITY_FRAME[rarity];
  const family = getFamily(element.symbol, element.number);
  const familyBadge = FAMILY_BADGE[family];
  const heroImage = element.heroImage || "/placeholder.svg";
  const isVideo = heroImage.endsWith(".mp4");

  const sizing = size === "sm"
    ? "w-[150px] h-[230px]"
    : "w-[200px] h-[300px]";

  return (
    <button
      type="button"
      onClick={onClick}
      title={`${element.name} — ${rarity} — ${family}`}
      className={`relative ${sizing} rounded-2xl overflow-hidden border-2 ${frame.ring} ${frame.glow} bg-slate-950 group transition-transform duration-300 hover:scale-[1.04] hover:z-10 focus:outline-none focus:ring-2 focus:ring-white/60 text-left`}
    >
      {/* rarity gradient frame inside */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br ${frame.gradient} opacity-20`} />

      {/* hero image */}
      <div className="absolute inset-0">
        {isVideo ? (
          <video src={heroImage} muted autoPlay loop playsInline className="w-full h-full object-cover" />
        ) : (
          <img src={heroImage} alt={element.heroName || element.name} className="w-full h-full object-cover" loading="lazy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
      </div>

      {/* top-left family-colored symbol badge */}
      <div className={`absolute top-2 left-2 z-10 min-w-9 h-9 px-2 rounded-lg inline-flex items-center justify-center font-black text-base border ${familyBadge.bg} ${familyBadge.text} ${familyBadge.border} ${familyBadge.glow} backdrop-blur-sm`}>
        {element.symbol}
      </div>

      {/* top-right atomic number */}
      <div className="absolute top-2 right-2 z-10 min-w-9 h-9 px-2 rounded-lg inline-flex items-center justify-center font-black text-sm bg-black/70 text-white border border-white/30 backdrop-blur-sm">
        {element.number}
      </div>

      {/* rarity chip */}
      <Badge variant="outline" className={`absolute top-12 right-2 z-10 text-[9px] font-black uppercase tracking-widest ${frame.chip}`}>
        {rarity}
      </Badge>

      {/* bottom name band */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-2 bg-gradient-to-t from-black via-black/85 to-transparent">
        <div className="text-[10px] text-white/60 uppercase tracking-widest leading-tight font-bold">{family}</div>
        <div className="text-sm font-black text-white leading-tight truncate uppercase">{element.name}</div>
        <div className="text-[10px] text-blue-300 font-bold truncate italic">{element.heroName}</div>
      </div>
    </button>
  );
};

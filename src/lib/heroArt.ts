import type { PeriodicElement } from "@/data/elements";
import { getFamily } from "@/lib/heroStyles";
import { buildAvatarDataUrl } from "@/lib/localAvatar";

/** Arte gerada para a galeria: herói de corpo inteiro com características do elemento. */
export function fullBodyHeroUrl(el: PeriodicElement, seed = el.number): string {
  const family = getFamily(el.symbol, el.number);
  const desc = (el.heroDescription || "").slice(0, 220);
  const prompt =
    `Full body photorealistic superhero, entire figure visible from head to boots, standing heroic pose, centered, ` +
    `named ${el.heroName}, personification of the chemical element ${el.name} (symbol ${el.symbol}, atomic number ${el.number}, ${family}). ` +
    `Suit colors, materials, texture and powers inspired by the real physical and chemical properties of ${el.name}. ${desc} ` +
    `Glowing emblem with the letters "${el.symbol}" on the chest, cinematic lighting, detailed background matching the element, 8k, no text, no border.`;
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=600&height=900&nologo=true&seed=${seed}`;
}

/** Imagem principal da carta na galeria (vídeo enviado pelo professor é mantido). */
export function galleryHeroSource(el: PeriodicElement): { src: string; isVideo: boolean } {
  const img = el.heroImage || "";
  if (/\.(mp4|mov|webm)(\?|$)/i.test(img)) return { src: img, isVideo: true };
  if (!img || /pollinations\.ai/i.test(img)) return { src: fullBodyHeroUrl(el), isVideo: false };
  return { src: img, isVideo: false };
}

/** Desenho local de corpo inteiro usado se a imagem online falhar. */
export function localHeroFallback(el: PeriodicElement): string {
  return buildAvatarDataUrl({}, el.symbol);
}

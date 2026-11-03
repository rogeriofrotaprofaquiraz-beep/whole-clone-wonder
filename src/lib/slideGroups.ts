export function groupSlides(slides: { title: string }[]) {
  const groups: { key: string; label: string; idx: number[] }[] = [];
  slides.forEach((slide, i) => {
    const title = slide.title.trim();
    const match = title.match(/^(\d+)(?:[.)\s]|$)/);
    const last = groups[groups.length - 1];
    if (match && (!last || last.key !== match[1])) {
      groups.push({ key: match[1], label: !/^\d+\.\d/.test(title) ? title : `Módulo ${match[1]}`, idx: [i] });
    } else if (last) last.idx.push(i);
    else groups.push({ key: "geral", label: "Geral", idx: [i] });
  });
  return groups;
}

export function applyGroupHeader<T extends { title: string; header?: { image?: string; show?: boolean } }>(slides: T[], indices: number[], image: string): T[] {
  const selected = new Set(indices);
  return slides.map((slide, i) => selected.has(i)
    ? { ...slide, header: { ...slide.header, image, show: true } }
    : slide);
}
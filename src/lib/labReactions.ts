// Reações do Laboratório Virtual: misturas comuns em laboratórios escolares e combinações de elementos.
export type Reagent = { id: string; name: string; formula: string; emoji: string; kind: "elemento" | "substancia" };

export const REAGENTS: Reagent[] = [
  { id: "H", name: "Hidrogênio", formula: "H₂", emoji: "💨", kind: "elemento" },
  { id: "O", name: "Oxigênio", formula: "O₂", emoji: "🫧", kind: "elemento" },
  { id: "Na", name: "Sódio", formula: "Na", emoji: "🧈", kind: "elemento" },
  { id: "Cl", name: "Cloro", formula: "Cl₂", emoji: "🟢", kind: "elemento" },
  { id: "C", name: "Carbono", formula: "C", emoji: "⚫", kind: "elemento" },
  { id: "Fe", name: "Ferro", formula: "Fe", emoji: "🔩", kind: "elemento" },
  { id: "Mg", name: "Magnésio", formula: "Mg", emoji: "✨", kind: "elemento" },
  { id: "S", name: "Enxofre", formula: "S", emoji: "🟡", kind: "elemento" },
  { id: "Cu", name: "Cobre", formula: "Cu", emoji: "🟠", kind: "elemento" },
  { id: "vinagre", name: "Vinagre", formula: "CH₃COOH", emoji: "🍶", kind: "substancia" },
  { id: "bicarbonato", name: "Bicarbonato de sódio", formula: "NaHCO₃", emoji: "🧂", kind: "substancia" },
  { id: "HCl", name: "Ácido clorídrico", formula: "HCl", emoji: "🧪", kind: "substancia" },
  { id: "NaOH", name: "Hidróxido de sódio", formula: "NaOH", emoji: "🧴", kind: "substancia" },
  { id: "agua", name: "Água", formula: "H₂O", emoji: "💧", kind: "substancia" },
  { id: "AgNO3", name: "Nitrato de prata", formula: "AgNO₃", emoji: "🥈", kind: "substancia" },
  { id: "NaCl", name: "Sal de cozinha", formula: "NaCl", emoji: "🧂", kind: "substancia" },
  { id: "H2O2", name: "Água oxigenada", formula: "H₂O₂", emoji: "🫙", kind: "substancia" },
  { id: "KI", name: "Iodeto de potássio", formula: "KI", emoji: "⚗️", kind: "substancia" },
  { id: "CuSO4", name: "Sulfato de cobre", formula: "CuSO₄", emoji: "🔷", kind: "substancia" },
  { id: "fenolftaleina", name: "Fenolftaleína", formula: "C₂₀H₁₄O₄", emoji: "🩷", kind: "substancia" },
];

export type Reaction = {
  reagents: string[];
  product: string;
  equation: string;
  effect: string;
  color: string; // token css: var name
  explanation: string;
};

export const REACTIONS: Reaction[] = [
  { reagents: ["H", "O"], product: "Água", equation: "2H₂ + O₂ → 2H₂O", effect: "💥 Estalo e vapor!", color: "--primary", explanation: "Síntese: hidrogênio queima no oxigênio formando água e liberando muita energia." },
  { reagents: ["Na", "Cl"], product: "Cloreto de sódio (sal)", equation: "2Na + Cl₂ → 2NaCl", effect: "🔥 Chama amarela intensa", color: "--accent", explanation: "Um metal alcalino doa elétron ao halogênio: ligação iônica." },
  { reagents: ["C", "O"], product: "Gás carbônico", equation: "C + O₂ → CO₂", effect: "🔥 Combustão", color: "--muted-foreground", explanation: "Combustão completa do carbono." },
  { reagents: ["Fe", "O"], product: "Óxido de ferro (ferrugem)", equation: "4Fe + 3O₂ → 2Fe₂O₃", effect: "🟤 Pó avermelhado", color: "--destructive", explanation: "Oxidação do ferro, a mesma da ferrugem." },
  { reagents: ["Mg", "O"], product: "Óxido de magnésio", equation: "2Mg + O₂ → 2MgO", effect: "⚪ Luz branca ofuscante", color: "--primary", explanation: "O magnésio queima com luz muito forte." },
  { reagents: ["Fe", "S"], product: "Sulfeto de ferro", equation: "Fe + S → FeS", effect: "🔥 Brilho alaranjado", color: "--muted-foreground", explanation: "Síntese de um sal a partir de metal e ametal." },
  { reagents: ["Cu", "O"], product: "Óxido de cobre", equation: "2Cu + O₂ → 2CuO", effect: "⚫ Superfície escurece", color: "--muted-foreground", explanation: "O cobre aquecido oxida formando óxido preto." },
  { reagents: ["vinagre", "bicarbonato"], product: "Gás carbônico + acetato de sódio", equation: "CH₃COOH + NaHCO₃ → CH₃COONa + H₂O + CO₂", effect: "🫧 Muita espuma!", color: "--accent", explanation: "Ácido + bicarbonato libera CO₂ — o clássico vulcão." },
  { reagents: ["HCl", "NaOH"], product: "Sal + água (neutralização)", equation: "HCl + NaOH → NaCl + H₂O", effect: "🌡️ Esquenta levemente", color: "--primary", explanation: "Ácido + base formam sal e água." },
  { reagents: ["HCl", "Mg"], product: "Gás hidrogênio", equation: "Mg + 2HCl → MgCl₂ + H₂", effect: "🫧 Borbulhas rápidas", color: "--accent", explanation: "Metais reativos deslocam o hidrogênio dos ácidos." },
  { reagents: ["AgNO3", "NaCl"], product: "Cloreto de prata", equation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃", effect: "⚪ Precipitado branco", color: "--muted-foreground", explanation: "Dupla troca com formação de sólido insolúvel." },
  { reagents: ["H2O2", "KI"], product: "Oxigênio (pasta de dente de elefante)", equation: "2H₂O₂ → 2H₂O + O₂ (KI catalisa)", effect: "🐘 Espuma gigante!", color: "--accent", explanation: "O iodeto acelera a decomposição da água oxigenada." },
  { reagents: ["Fe", "CuSO4"], product: "Cobre metálico", equation: "Fe + CuSO₄ → FeSO₄ + Cu", effect: "🟠 O prego fica cor de cobre", color: "--accent", explanation: "Simples troca: o ferro é mais reativo que o cobre." },
  { reagents: ["Na", "agua"], product: "Hidróxido de sódio + hidrogênio", equation: "2Na + 2H₂O → 2NaOH + H₂", effect: "💥 Corre na água e estoura", color: "--destructive", explanation: "Metais alcalinos reagem violentamente com água." },
  { reagents: ["NaOH", "fenolftaleina"], product: "Solução rosa (meio básico)", equation: "Indicador em pH > 8,2", effect: "🩷 Fica rosa!", color: "--accent", explanation: "A fenolftaleína fica rosa em meio básico." },
  { reagents: ["HCl", "fenolftaleina"], product: "Solução incolor (meio ácido)", equation: "Indicador em pH < 8,2", effect: "⚪ Continua incolor", color: "--muted-foreground", explanation: "Em meio ácido a fenolftaleína não muda de cor." },
  { reagents: ["NaCl", "agua"], product: "Solução salina", equation: "NaCl(s) → Na⁺ + Cl⁻ (aq)", effect: "💧 O sal dissolve", color: "--primary", explanation: "Dissolução: mistura homogênea, não é reação química." },
];

const key = (ids: string[]) => [...ids].sort().join("+");

/** Encontra a reação para os reagentes escolhidos (ordem não importa). */
export function mix(ids: string[]): Reaction | null {
  if (ids.length < 2) return null;
  const k = key(ids);
  return REACTIONS.find((r) => key(r.reagents) === k) ?? null;
}

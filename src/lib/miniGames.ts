// Regras e dados dos minijogos.
export const QUESTION_COUNTS = [3, 5, 10, 15] as const;
export const COINS_RIGHT = 4;
export const COINS_WRONG = 1;
export const coinsFor = (right: number, wrong: number) => right * COINS_RIGHT + wrong * COINS_WRONG;

export type Molecule = { name: string; formula: string; atoms: Record<string, number>; level: number };
export const MOLECULES: Molecule[] = [
  { name: "Água", formula: "H₂O", atoms: { H: 2, O: 1 }, level: 1 },
  { name: "Metano", formula: "CH₄", atoms: { C: 1, H: 4 }, level: 1 },
  { name: "Gás carbônico", formula: "CO₂", atoms: { C: 1, O: 2 }, level: 1 },
  { name: "Amônia", formula: "NH₃", atoms: { N: 1, H: 3 }, level: 1 },
  { name: "Ácido clorídrico", formula: "HCl", atoms: { H: 1, Cl: 1 }, level: 1 },
  { name: "Etanol", formula: "C₂H₅OH", atoms: { C: 2, H: 6, O: 1 }, level: 2 },
  { name: "Metanol", formula: "CH₃OH", atoms: { C: 1, H: 4, O: 1 }, level: 2 },
  { name: "Clorometano", formula: "CH₃Cl", atoms: { C: 1, H: 3, Cl: 1 }, level: 2 },
  { name: "Ácido acético", formula: "CH₃COOH", atoms: { C: 2, H: 4, O: 2 }, level: 3 },
  { name: "Glicina (aminoácido)", formula: "C₂H₅NO₂", atoms: { C: 2, H: 5, N: 1, O: 2 }, level: 3 },
  { name: "Glicose", formula: "C₆H₁₂O₆", atoms: { C: 6, H: 12, O: 6 }, level: 3 },
  { name: "Ureia", formula: "CO(NH₂)₂", atoms: { C: 1, O: 1, N: 2, H: 4 }, level: 3 },
];
export function sameAtoms(a: Record<string, number>, b: Record<string, number>) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) if ((a[k] ?? 0) !== (b[k] ?? 0)) return false;
  return true;
}

export type HuntEl = { symbol: string; name: string; group: number; period: number; family: "metal" | "gás nobre" | "halogênio" | "outro" };
export const HUNT_ELEMENTS: HuntEl[] = [
  { symbol: "Na", name: "Sódio", group: 1, period: 3, family: "metal" },
  { symbol: "Fe", name: "Ferro", group: 8, period: 4, family: "metal" },
  { symbol: "Cu", name: "Cobre", group: 11, period: 4, family: "metal" },
  { symbol: "Mg", name: "Magnésio", group: 2, period: 3, family: "metal" },
  { symbol: "Al", name: "Alumínio", group: 13, period: 3, family: "metal" },
  { symbol: "He", name: "Hélio", group: 18, period: 1, family: "gás nobre" },
  { symbol: "Ne", name: "Neônio", group: 18, period: 2, family: "gás nobre" },
  { symbol: "Ar", name: "Argônio", group: 18, period: 3, family: "gás nobre" },
  { symbol: "F", name: "Flúor", group: 17, period: 2, family: "halogênio" },
  { symbol: "Cl", name: "Cloro", group: 17, period: 3, family: "halogênio" },
  { symbol: "Br", name: "Bromo", group: 17, period: 4, family: "halogênio" },
  { symbol: "I", name: "Iodo", group: 17, period: 5, family: "halogênio" },
  { symbol: "C", name: "Carbono", group: 14, period: 2, family: "outro" },
  { symbol: "O", name: "Oxigênio", group: 16, period: 2, family: "outro" },
  { symbol: "N", name: "Nitrogênio", group: 15, period: 2, family: "outro" },
  { symbol: "S", name: "Enxofre", group: 16, period: 3, family: "outro" },
];

export type Choice = { text: string; good: boolean; why: string };
export type Scenario = { title: string; area: string; choices: Choice[] };
export const PLANET: Scenario[] = [
  { title: "Tratar a água do rio poluído", area: "Água", choices: [
    { text: "Floculação com sulfato de alumínio e filtração", good: true, why: "Agrupa a sujeira e a filtra, como nas estações de tratamento." },
    { text: "Despejar mais cloro sem filtrar", good: false, why: "Cloro em excesso não tira a sujeira e forma subprodutos tóxicos." }] },
  { title: "Gerar energia para a escola", area: "Energia", choices: [
    { text: "Painéis solares", good: true, why: "Não emite CO₂ durante o uso." },
    { text: "Gerador a diesel", good: false, why: "Queima combustível fóssil e emite CO₂ e fuligem." }] },
  { title: "Destino do óleo de cozinha usado", area: "Resíduos", choices: [
    { text: "Transformar em sabão", good: true, why: "Saponificação: reaproveita o óleo." },
    { text: "Jogar na pia", good: false, why: "1 litro de óleo pode contaminar milhares de litros de água." }] },
  { title: "Reduzir a chuva ácida", area: "Ar", choices: [
    { text: "Filtros que retiram SO₂ das chaminés", good: true, why: "SO₂ forma ácido sulfúrico na chuva." },
    { text: "Chaminés mais altas", good: false, why: "Só espalha a poluição para mais longe." }] },
  { title: "Pilhas e baterias velhas", area: "Resíduos", choices: [
    { text: "Levar ao ponto de coleta", good: true, why: "Metais pesados são recuperados com segurança." },
    { text: "Lixo comum", good: false, why: "Mercúrio, chumbo e cádmio contaminam o solo." }] },
  { title: "Embalagens plásticas", area: "Resíduos", choices: [
    { text: "Separar para reciclagem", good: true, why: "O plástico vira matéria-prima de novo." },
    { text: "Queimar no quintal", good: false, why: "Libera dioxinas e gases tóxicos." }] },
  { title: "Produzir um sabonete na indústria", area: "Química verde", choices: [
    { text: "Processo com catalisador e menos solvente", good: true, why: "Química verde: menos resíduos e energia." },
    { text: "Processo com solvente clorado em excesso", good: false, why: "Gera resíduos perigosos." }] },
  { title: "Combustível do ônibus escolar", area: "Energia", choices: [
    { text: "Biodiesel ou etanol", good: true, why: "Renovável: o CO₂ é reabsorvido pelas plantas." },
    { text: "Gasolina com chumbo", good: false, why: "Chumbo é tóxico e foi proibido." }] },
];

export type Puzzle = { clue: string; answer: string };
export const ESCAPE: Puzzle[] = [
  { clue: "Balanceie: _H₂ + O₂ → 2H₂O. Qual o coeficiente do H₂?", answer: "2" },
  { clue: "Gás que apaga a vela e turva a água de cal (fórmula).", answer: "CO2" },
  { clue: "pH de uma solução neutra a 25 °C.", answer: "7" },
  { clue: "Símbolo do metal líquido à temperatura ambiente.", answer: "Hg" },
  { clue: "Quantos átomos de hidrogênio tem o metano?", answer: "4" },
  { clue: "Indicador que fica rosa em meio básico.", answer: "fenolftaleina" },
];

export type Cell = { metal: string; e: number };
// Pilhas: potencial padrão de redução (V)
export const CELLS: Cell[] = [
  { metal: "Zn", e: -0.76 }, { metal: "Cu", e: 0.34 }, { metal: "Ag", e: 0.8 },
  { metal: "Fe", e: -0.44 }, { metal: "Mg", e: -2.37 }, { metal: "Pb", e: -0.13 },
];
export const cellVoltage = (a: Cell, b: Cell) => Math.round(Math.abs(a.e - b.e) * 100) / 100;

export const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[₀-₉]/g, (c) => String(c.charCodeAt(0) - 8320)).replace(/\s/g, "").toLowerCase();

export function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; }
  return b;
}
/** Monta N rodadas reaproveitando a lista se necessário. */
export function rounds<T>(list: T[], n: number): T[] {
  const out: T[] = [];
  while (out.length < n) out.push(...shuffle(list));
  return out.slice(0, n);
}

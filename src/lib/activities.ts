/** Atividades interativas dos slides (inspiradas nos tipos de pergunta do Wayground). */
export type ActivityType =
  | "multipla" | "vf" | "selecao" | "lacunas" | "tabela" | "nuvem" | "aberta" | "enquete" | "passagem" | "video"
  | "combinar" | "reordenar" | "arraste" | "categorizar" | "suspenso" | "marcacao" | "audio" | "resposta_video"
  | "destaque" | "correspondencia" | "forum"
  | "matematica" | "hotspot" | "graficos" | "multipartes" | "desenhar"
  | "cruzadinha" | "roleta" | "domino" | "forca" | "memoria" | "cacapalavras" | "anagrama";

export type Question = {
  id: string; type: ActivityType; prompt: string;
  options?: string[]; correct?: number[];          // múltipla, V/F, seleção, suspenso, enquete
  text?: string;                                   // lacunas: palavras entre [colchetes]
  pairs?: { a: string; b: string }[];              // combinar
  items?: string[];                                // reordenar (ordem correta)
  categories?: { name: string; items: string[] }[]; // categorizar
  image?: string;                                  // imagem de apoio da pergunta
  chart?: string;                                  // gráfico de barras: uma linha "Rótulo: valor"
  optionImages?: (string | null)[];                // imagem de cada alternativa (mesma posição de options)
  layout?: "horizontal" | "vertical";              // disposição das alternativas
  answer?: string;                                 // resposta matemática (número)
};
export type Activity = { questions: Question[] };

export const ACTIVITY_TYPES: { key: ActivityType; label: string; icon: string; group: "basico" | "interativo" | "jogo"; ready: boolean }[] = [
  { key: "multipla", label: "Múltipla escolha", icon: "✔️", group: "basico", ready: true },
  { key: "vf", label: "Verdadeiro ou falso", icon: "⚖️", group: "basico", ready: true },
  { key: "selecao", label: "Seleção múltipla", icon: "☑️", group: "basico", ready: true },
  { key: "lacunas", label: "Preencha os espaços em branco", icon: "▭", group: "basico", ready: true },
  { key: "tabela", label: "Preenchimento de tabela", icon: "▦", group: "basico", ready: false },
  { key: "nuvem", label: "Nuvem de Palavras", icon: "☁️", group: "basico", ready: true },
  { key: "aberta", label: "Aberta", icon: "📝", group: "basico", ready: true },
  { key: "enquete", label: "Enquete", icon: "📊", group: "basico", ready: true },
  { key: "passagem", label: "Passagem", icon: "📄", group: "basico", ready: false },
  { key: "video", label: "Vídeo interativo", icon: "🎬", group: "basico", ready: false },
  { key: "combinar", label: "Combinar", icon: "🔗", group: "interativo", ready: true },
  { key: "reordenar", label: "Reordenar", icon: "📶", group: "interativo", ready: true },
  { key: "arraste", label: "Arraste e solte", icon: "✋", group: "interativo", ready: false },
  { key: "categorizar", label: "Categorizar", icon: "🗂️", group: "interativo", ready: true },
  { key: "suspenso", label: "Suspenso", icon: "🔽", group: "interativo", ready: true },
  { key: "marcacao", label: "Marcação", icon: "📍", group: "interativo", ready: false },
  { key: "audio", label: "Resposta em áudio", icon: "🎙️", group: "interativo", ready: false },
  { key: "resposta_video", label: "Resposta em vídeo", icon: "📹", group: "interativo", ready: false },
  { key: "destaque", label: "Texto em destaque", icon: "🖍️", group: "interativo", ready: false },
  { key: "correspondencia", label: "Tabela de correspondência", icon: "🧮", group: "interativo", ready: false },
  { key: "forum", label: "Fórum de discussão", icon: "💬", group: "interativo", ready: false },
  { key: "matematica", label: "Resposta matemática", icon: "𝑓", group: "interativo", ready: true },
  { key: "hotspot", label: "Ponto de acesso", icon: "🎯", group: "interativo", ready: false },
  { key: "graficos", label: "Gráficos", icon: "📈", group: "interativo", ready: false },
  { key: "multipartes", label: "Multipartes", icon: "🧩", group: "interativo", ready: false },
  { key: "desenhar", label: "Desenhar", icon: "🎨", group: "interativo", ready: false },
  { key: "cruzadinha", label: "Palavra cruzada", icon: "✏️", group: "jogo", ready: true },
  { key: "roleta", label: "Roleta de perguntas", icon: "🎡", group: "jogo", ready: true },
  { key: "domino", label: "Dominó (pergunta e resposta)", icon: "🁫", group: "jogo", ready: true },
  { key: "forca", label: "Forca", icon: "🪢", group: "jogo", ready: true },
  { key: "memoria", label: "Jogo da memória", icon: "🧠", group: "jogo", ready: true },
  { key: "cacapalavras", label: "Caça-palavras", icon: "🔎", group: "jogo", ready: true },
  { key: "anagrama", label: "Anagrama (desembaralhe)", icon: "🔀", group: "jogo", ready: true },
];

const uid = () => (globalThis.crypto?.randomUUID?.() ?? String(Math.random()));

export function newQuestion(type: ActivityType, about = ""): Question {
  const prompt = about ? `Sobre "${about}": ` : "";
  switch (type) {
    case "vf": return { id: uid(), type, prompt: prompt + "A afirmação é verdadeira?", options: ["Verdadeiro", "Falso"], correct: [0] };
    case "multipla": case "suspenso": return { id: uid(), type, prompt: prompt + "Qual alternativa está correta?", options: ["", "", "", ""], correct: [0] };
    case "selecao": return { id: uid(), type, prompt: prompt + "Marque todas as corretas", options: ["", "", "", ""], correct: [0] };
    case "enquete": return { id: uid(), type, prompt: prompt + "Qual sua opinião?", options: ["", ""], correct: [] };
    case "lacunas": return { id: uid(), type, prompt: prompt + "Complete o texto", text: "A [Química] estuda a [matéria]." };
    case "domino": case "combinar": return { id: uid(), type, prompt: prompt + "Ligue cada item ao seu par", pairs: [{ a: "", b: "" }, { a: "", b: "" }, { a: "", b: "" }] };
    case "reordenar": return { id: uid(), type, prompt: prompt + "Coloque na ordem correta", items: ["", "", ""] };
    case "categorizar": return { id: uid(), type, prompt: prompt + "Separe os itens nas categorias", categories: [{ name: "Grupo A", items: [""] }, { name: "Grupo B", items: [""] }] };
    case "cruzadinha": case "forca": case "anagrama": case "cacapalavras": return { id: uid(), type, prompt: prompt + (type === "cacapalavras" ? "Encontre as palavras" : "Descubra as palavras pelas dicas"), pairs: [{ a: "Ciência que estuda a matéria", b: "QUIMICA" }, { a: "Menor parte de um elemento", b: "ATOMO" }, { a: "Tudo que tem massa e ocupa espaço", b: "MATERIA" }] };
    case "roleta": case "domino": case "memoria": return { id: uid(), type, prompt: prompt + (type === "roleta" ? "Gire a roleta e responda" : type === "domino" ? "Encaixe cada pergunta na peça com a resposta" : "Encontre os pares"), pairs: [{ a: "H₂O", b: "Água" }, { a: "NaCl", b: "Sal de cozinha" }, { a: "CO₂", b: "Gás carbônico" }] };
    case "matematica": return { id: uid(), type, prompt: prompt + "Quanto vale?", answer: "" };
    default: return { id: uid(), type, prompt: prompt + "Escreva sua resposta" };
  }
}

/** Tipos cujas respostas são alternativas (cartões coloridos no editor). */
export const OPTION_TYPES: ActivityType[] = ["multipla", "selecao", "vf", "suspenso", "enquete"];

/** Troca o tipo de uma pergunta mantendo enunciado, mídia e, quando possível, as alternativas. */
export function convertQuestion(q: Question, type: ActivityType): Question {
  if (q.type === type) return q;
  const fresh = newQuestion(type);
  const out: Question = { ...fresh, id: q.id, prompt: q.prompt, image: q.image, chart: q.chart, layout: q.layout };
  const fromOpts = OPTION_TYPES.includes(q.type) && q.type !== "vf" && q.options;
  if (OPTION_TYPES.includes(type) && type !== "vf" && fromOpts) {
    out.options = [...q.options!];
    out.optionImages = q.optionImages ? [...q.optionImages] : undefined;
    const c = (q.correct || []).filter(i => i < out.options!.length);
    out.correct = type === "enquete" ? [] : type === "selecao" ? (c.length ? c : [0]) : [c[0] ?? 0];
  }
  if ((type === "combinar" || GAME_LIKE.includes(type)) && q.pairs) out.pairs = q.pairs.map(p => ({ ...p }));
  return out;
}
const GAME_LIKE: ActivityType[] = ["cruzadinha", "roleta", "domino", "forca", "memoria", "cacapalavras", "anagrama"];

const num = (s: unknown) => Number(String(s ?? "").trim().replace(/\s+/g, "").replace(",", "."));

/** Respostas que não têm certo/errado (abertas, enquete, nuvem) sempre contam como feitas. */
export const isGraded = (q: Question) => !["aberta", "enquete", "nuvem"].includes(q.type);

export const blanksOf = (text = "") => [...text.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
const n = (s: string) => (s || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/** Corrige uma resposta. Formato da resposta por tipo:
 * multipla/vf/suspenso: number · selecao: number[] · lacunas: string[] · combinar: number[] (índice de B escolhido para cada A)
 * cruzadinha/roleta/anagrama: string[] (palavra por par) · domino: igual combinar · forca/memoria/cacapalavras: true quando o aluno vence
 * reordenar: string[] (ordem do aluno) · categorizar: Record<item, nomeCategoria> · aberta/nuvem: string · enquete: number */
export function grade(q: Question, r: any): boolean {
  if (!isGraded(q)) return r !== undefined && r !== null && r !== "";
  switch (q.type) {
    case "multipla": case "vf": case "suspenso": return r === (q.correct?.[0] ?? 0);
    case "selecao": { const a = [...(r || [])].sort().join(","); const b = [...(q.correct || [])].sort().join(","); return a === b; }
    case "lacunas": { const b = blanksOf(q.text); return b.length > 0 && b.every((w, i) => n(r?.[i]) === n(w)); }
    case "domino": case "combinar": return (q.pairs || []).every((_, i) => r?.[i] === i);
    case "reordenar": return JSON.stringify((r || []).map(n)) === JSON.stringify((q.items || []).map(n));
    case "categorizar": return (q.categories || []).every(c => c.items.filter(Boolean).every(it => r?.[it] === c.name));
    case "cruzadinha": case "roleta": case "anagrama": { const p = (q.pairs || []).filter(x => x.b.trim()); return p.length > 0 && p.every((x, i) => n(r?.[i]).replace(/\s+/g, "") === n(x.b).replace(/\s+/g, "")); }
    case "forca": case "memoria": case "cacapalavras": return r === true;
    case "matematica": { const a = num(q.answer), b = num(r); return String(q.answer ?? "").trim() !== "" && Number.isFinite(a) && Number.isFinite(b) && Math.abs(a - b) <= 1e-9 * Math.max(1, Math.abs(a)); }
    default: return false;
  }
}

/** Lê o gráfico digitado pelo professor: uma linha por barra, no formato "Rótulo: valor". */
export function parseChart(text = ""): { label: string; value: number }[] {
  return text.split("\n").map(l => l.match(/^\s*(.+?)\s*[:=;]\s*(-?[\d.,]+)\s*$/)).filter((m): m is RegExpMatchArray => !!m)
    .map(m => ({ label: m[1], value: Number(m[2].replace(",", ".")) })).filter(x => Number.isFinite(x.value));
}

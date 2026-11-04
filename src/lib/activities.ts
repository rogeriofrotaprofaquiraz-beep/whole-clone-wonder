/** Atividades interativas dos slides (inspiradas nos tipos de pergunta do Wayground). */
export type ActivityType =
  | "multipla" | "vf" | "selecao" | "lacunas" | "tabela" | "nuvem" | "aberta" | "enquete" | "passagem" | "video"
  | "combinar" | "reordenar" | "arraste" | "categorizar" | "suspenso" | "marcacao" | "audio" | "resposta_video"
  | "destaque" | "correspondencia" | "forum";

export type Question = {
  id: string; type: ActivityType; prompt: string;
  options?: string[]; correct?: number[];          // múltipla, V/F, seleção, suspenso, enquete
  text?: string;                                   // lacunas: palavras entre [colchetes]
  pairs?: { a: string; b: string }[];              // combinar
  items?: string[];                                // reordenar (ordem correta)
  categories?: { name: string; items: string[] }[]; // categorizar
  image?: string;                                  // imagem de apoio da pergunta
  chart?: string;                                  // gráfico de barras: uma linha "Rótulo: valor"
};
export type Activity = { questions: Question[] };

export const ACTIVITY_TYPES: { key: ActivityType; label: string; icon: string; group: "basico" | "interativo"; ready: boolean }[] = [
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
    case "combinar": return { id: uid(), type, prompt: prompt + "Ligue cada item ao seu par", pairs: [{ a: "", b: "" }, { a: "", b: "" }, { a: "", b: "" }] };
    case "reordenar": return { id: uid(), type, prompt: prompt + "Coloque na ordem correta", items: ["", "", ""] };
    case "categorizar": return { id: uid(), type, prompt: prompt + "Separe os itens nas categorias", categories: [{ name: "Grupo A", items: [""] }, { name: "Grupo B", items: [""] }] };
    default: return { id: uid(), type, prompt: prompt + "Escreva sua resposta" };
  }
}

/** Respostas que não têm certo/errado (abertas, enquete, nuvem) sempre contam como feitas. */
export const isGraded = (q: Question) => !["aberta", "enquete", "nuvem"].includes(q.type);

export const blanksOf = (text = "") => [...text.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
const n = (s: string) => (s || "").trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

/** Corrige uma resposta. Formato da resposta por tipo:
 * multipla/vf/suspenso: number · selecao: number[] · lacunas: string[] · combinar: number[] (índice de B escolhido para cada A)
 * reordenar: string[] (ordem do aluno) · categorizar: Record<item, nomeCategoria> · aberta/nuvem: string · enquete: number */
export function grade(q: Question, r: any): boolean {
  if (!isGraded(q)) return r !== undefined && r !== null && r !== "";
  switch (q.type) {
    case "multipla": case "vf": case "suspenso": return r === (q.correct?.[0] ?? 0);
    case "selecao": { const a = [...(r || [])].sort().join(","); const b = [...(q.correct || [])].sort().join(","); return a === b; }
    case "lacunas": { const b = blanksOf(q.text); return b.length > 0 && b.every((w, i) => n(r?.[i]) === n(w)); }
    case "combinar": return (q.pairs || []).every((_, i) => r?.[i] === i);
    case "reordenar": return JSON.stringify((r || []).map(n)) === JSON.stringify((q.items || []).map(n));
    case "categorizar": return (q.categories || []).every(c => c.items.filter(Boolean).every(it => r?.[it] === c.name));
    default: return false;
  }
}

/** Lê o gráfico digitado pelo professor: uma linha por barra, no formato "Rótulo: valor". */
export function parseChart(text = ""): { label: string; value: number }[] {
  return text.split("\n").map(l => l.match(/^\s*(.+?)\s*[:=;]\s*(-?[\d.,]+)\s*$/)).filter((m): m is RegExpMatchArray => !!m)
    .map(m => ({ label: m[1], value: Number(m[2].replace(",", ".")) })).filter(x => Number.isFinite(x.value));
}

import { GAME_TYPES } from "./questionGames";

export type Discipline = { key: string; label: string; area: string; color: string; sort: number; topics?: string[] };

export const IMPORT_HEADERS = [
  "disciplina", "nivel", "dificuldade", "assunto", "jogos", "pergunta",
  "opcao_a", "opcao_b", "opcao_c", "opcao_d", "resposta", "dica", "explicacao",
];

export const TEMPLATE_CSV =
  IMPORT_HEADERS.join(";") + "\n" +
  "Química Geral;medio;2;Tabela Periódica;quiz,forca;Qual o símbolo do Sódio?;Na;So;S;N;Na;Lembre do nome em latim;Natrium = Na\n" +
  "Ciências — 6º Ano;fundamental;1;Matéria;caca_palavras,memoria;Estado físico da água no gelo;Sólido;Líquido;Gasoso;Plasma;Sólido;Pense no gelo;O gelo é água sólida\n";

const norm = (s: unknown) => String(s ?? "").trim();
const fold = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

export function parseCsv(text: string): Record<string, string>[] {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.trim());
  if (!lines.length) return [];
  const sep = lines[0].includes(";") ? ";" : ",";
  const head = lines[0].split(sep).map((h) => fold(h));
  return lines.slice(1).map((l) => {
    const cells = l.split(sep);
    return Object.fromEntries(head.map((h, i) => [h, norm(cells[i])]));
  });
}

export function tableToObjects(rows: unknown[][]): Record<string, string>[] {
  if (!rows.length) return [];
  const head = rows[0].map((h) => fold(norm(h)));
  return rows.slice(1).filter((r) => r.some((c) => norm(c))).map((r) =>
    Object.fromEntries(head.map((h, i) => [h, norm(r[i])])));
}

function findDiscipline(v: string, list: Discipline[]) {
  const f = fold(v);
  return list.find((d) => fold(d.key) === f || fold(d.label) === f) ?? null;
}

function parseGames(v: string) {
  return v.split(/[,|/]/).map((g) => fold(g)).map((g) =>
    GAME_TYPES.find((t) => t.key === g || fold(t.label) === g)?.key).filter(Boolean) as string[];
}

/** Converte linhas de planilha/JSON em questões prontas para o banco. */
export function rowsToQuestions(objs: Record<string, unknown>[], list: Discipline[], userId: string) {
  const ok: Record<string, unknown>[] = [];
  const errors: string[] = [];
  objs.forEach((o, i) => {
    const g = (k: string) => norm(o[k] ?? o[k.replace("_", "")]);
    const question = g("pergunta") || norm(o.question);
    const disc = findDiscipline(g("disciplina") || norm(o.discipline) || "geral", list);
    if (!question) { errors.push(`Linha ${i + 2}: sem pergunta`); return; }
    if (!disc) { errors.push(`Linha ${i + 2}: disciplina "${g("disciplina")}" não cadastrada`); return; }
    const options = Array.isArray(o.options) ? (o.options as unknown[]).map(norm).filter(Boolean)
      : ["opcao_a", "opcao_b", "opcao_c", "opcao_d"].map(g).filter(Boolean);
    const answer = g("resposta") || norm(o.answer);
    let idx = options.findIndex((x) => fold(x) === fold(answer));
    if (idx < 0 && answer) { options.unshift(answer); options.splice(4); idx = 0; }
    if (idx < 0) idx = 0;
    const level = fold(g("nivel") || "medio");
    const school_level = ["fundamental", "medio", "olimpiada", "superior"].includes(level) ? level : "medio";
    const difficulty = Math.min(5, Math.max(1, parseInt(g("dificuldade")) || 2));
    const topic = g("assunto") || null;
    ok.push({
      area: disc.area, discipline: disc.key, school_level, school_levels: [school_level], difficulty,
      topic, lesson: topic, question, options, correct_index: idx, answer_text: answer || options[idx] || null,
      games: parseGames(g("jogos")), hint: g("dica") || null, explanation: g("explicacao") || null,
      created_by: userId,
    });
  });
  return { ok, errors };
}

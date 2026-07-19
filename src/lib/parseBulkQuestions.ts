export type ParsedQuestion = {
  q: string;
  options: string[];
  correct: number;
  context?: string;
  explanation?: string;
};

/**
 * Faz o parse de questões coladas em texto livre.
 *
 * Formato aceito (flexível):
 *
 *   1) Qual é o símbolo do hidrogênio?
 *   Contexto: opcional em uma linha começando por "Contexto:"
 *   a) H2
 *   *b) H            ← marque a correta com * OU ✓ OU ✔ no início
 *   c) He
 *   d) O
 *   Resposta: B      ← alternativa: use "Resposta:", "Gabarito:" ou "Correta:"
 *   Explicação: ...  ← opcional
 *
 *   (linha em branco separa a próxima questão — ou pode iniciar direto com "2)")
 *
 * Também aceita alternativas nos formatos: "A)", "A.", "A-", "(A)", "[A]", "A:".
 */
export function parseBulkQuestions(raw: string): ParsedQuestion[] {
  const text = raw.replace(/\r\n?/g, "\n").trim();
  if (!text) return [];

  // Divide em blocos por linha em branco OU por início de uma nova questão numerada.
  const normalized = text
    // insere quebra dupla antes de "1) ..." quando já veio da linha anterior sem espaço
    .replace(/\n(?=\s*(?:Q(?:uest[ãa]o)?\s*)?\d+\s*[)\.\-:])/gi, "\n\n");

  const blocks = normalized
    .split(/\n{2,}/)
    .map((b) => b.trim())
    .filter(Boolean);

  const optionRe =
    /^\s*(?<mark>[*✓✔]\s*)?[\(\[]?\s*(?<letter>[a-eA-E])\s*[\)\]\.\-:]\s*(?<body>.+?)\s*$/;

  const answerRe =
    /^\s*(?:resposta|gabarito|correta|answer)\s*[:\-]\s*[\(\[]?\s*([a-eA-E])\s*[\)\]]?\s*\.?\s*$/i;

  const contextRe = /^\s*(?:contexto|situa[çc][ãa]o[\-\s]*problema|situa[çc][ãa]o)\s*[:\-]\s*(.+)$/i;

  const explanationRe =
    /^\s*(?:explica[çc][ãa]o|coment[áa]rio|justificativa|feedback|resolu[çc][ãa]o)\s*[:\-]\s*(.+)$/i;

  const stripQuestionNumber = (s: string) =>
    s.replace(/^\s*(?:Q(?:uest[ãa]o)?\s*)?\d+\s*[)\.\-:]\s*/i, "").trim();

  const out: ParsedQuestion[] = [];

  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length < 2) continue;

    const stemLines: string[] = [];
    const options: { letter: string; body: string; marked: boolean }[] = [];
    let context: string | undefined;
    let explanation: string | undefined;
    let explicitAnswer: string | undefined;
    let optionsStarted = false;

    for (const line of lines) {
      const answerMatch = line.match(answerRe);
      if (answerMatch) {
        explicitAnswer = answerMatch[1].toUpperCase();
        continue;
      }
      const explMatch = line.match(explanationRe);
      if (explMatch) {
        explanation = (explanation ? explanation + " " : "") + explMatch[1].trim();
        continue;
      }
      const ctxMatch = line.match(contextRe);
      if (ctxMatch && !optionsStarted) {
        context = (context ? context + " " : "") + ctxMatch[1].trim();
        continue;
      }
      const optMatch = line.match(optionRe);
      if (optMatch && optMatch.groups) {
        optionsStarted = true;
        options.push({
          letter: optMatch.groups.letter.toUpperCase(),
          body: optMatch.groups.body.trim(),
          marked: !!optMatch.groups.mark,
        });
        continue;
      }
      if (!optionsStarted) {
        stemLines.push(line);
      } else if (options.length > 0) {
        // Continuação da alternativa anterior (quebra de linha dentro da opção)
        options[options.length - 1].body += " " + line;
      }
    }

    if (options.length < 2) continue;

    const stem = stripQuestionNumber(stemLines.join(" ")).trim();
    if (!stem) continue;

    let correctIdx = options.findIndex((o) => o.marked);
    if (correctIdx < 0 && explicitAnswer) {
      correctIdx = options.findIndex((o) => o.letter === explicitAnswer);
    }
    if (correctIdx < 0) correctIdx = 0;

    out.push({
      q: stem,
      options: options.map((o) => o.body),
      correct: correctIdx,
      context,
      explanation,
    });
  }

  return out;
}

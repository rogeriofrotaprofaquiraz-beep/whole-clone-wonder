export type TopicQuestion = { id: string; area: string; topic: string | null; lesson?: string | null };

export function questionTopic(question: TopicQuestion) {
  return question.topic?.trim() || question.lesson?.trim() || "Sem assunto";
}

export function groupQuestionsByTopic<T extends TopicQuestion>(questions: T[]) {
  const groups = new Map<string, { id: string; key: string; area: string; items: T[] }>();
  for (const question of questions) {
    const key = questionTopic(question);
    const id = JSON.stringify([question.area, key]);
    const group = groups.get(id) ?? { id, key, area: question.area, items: [] };
    group.items.push(question);
    groups.set(id, group);
  }
  return [...groups.values()].sort((a, b) => a.key.localeCompare(b.key, "pt-BR", { numeric: true }) || a.area.localeCompare(b.area));
}

export function questionPlacement(area: string, topic: string) {
  return { area, topic: topic.trim() || null, lesson: topic.trim() || null };
}
/** Filtro PostgREST: assunto cadastrado ou, quando ele falta, a aula antiga. */
export function topicOrFilter(topic: string) {
  const v = `"${topic.trim().replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  return `topic.eq.${v},and(topic.is.null,lesson.eq.${v})`;
}

/** Lista de assuntos (sem repetir, em ordem) a partir das questões de uma área. */
export function topicNames(rows: { topic: string | null; lesson?: string | null }[]) {
  const names = new Set<string>();
  for (const r of rows) {
    const name = r.topic?.trim() || r.lesson?.trim();
    if (name) names.add(name);
  }
  return [...names].sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true }));
}

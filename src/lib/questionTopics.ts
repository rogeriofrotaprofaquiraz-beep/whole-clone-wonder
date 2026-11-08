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
import { describe, expect, it } from "vitest";
import { groupQuestionsByTopic, questionPlacement, questionTopic, topicNames, topicOrFilter } from "./questionTopics";

describe("organização do banco por assunto", () => {
  it("mantém assuntos de áreas diferentes separados", () => {
    const groups = groupQuestionsByTopic([
      { id: "1", area: "geral", topic: "Moléculas" },
      { id: "2", area: "organica", topic: "Moléculas" },
    ]);
    expect(groups).toHaveLength(2);
    expect(groups.map(g => g.items.length)).toEqual([1, 1]);
  });
  it("prioriza o assunto cadastrado e recupera a aula antiga quando ele falta", () => {
    expect(questionTopic({ id: "1", area: "geral", topic: "Átomos", lesson: "Antigo" })).toBe("Átomos");
    expect(questionTopic({ id: "2", area: "geral", topic: null, lesson: "Ligações" })).toBe("Ligações");
  });
  it("transferir mantém assunto e aula alinhados para os jogos", () => {
    expect(questionPlacement("organica", "  Hidrocarbonetos  ")).toEqual({ area: "organica", topic: "Hidrocarbonetos", lesson: "Hidrocarbonetos" });
  });
  it("jogos encontram questões antigas pela aula quando falta o assunto", () => {
    expect(topicOrFilter("Ácidos, bases")).toBe('topic.eq."Ácidos, bases",and(topic.is.null,lesson.eq."Ácidos, bases")');
  });
  it("lista de assuntos dos jogos inclui aulas antigas sem repetir", () => {
    expect(topicNames([{ topic: "Átomos" }, { topic: null, lesson: "Ligações" }, { topic: " Átomos " }, { topic: null, lesson: null }])).toEqual(["Átomos", "Ligações"]);
  });
});

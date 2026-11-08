import type { PeriodicElement } from "@/data/elements";
import { COINS_RIGHT, COINS_WRONG } from "./miniGames";

/** Moedas da partida de cartas: 4 por rodada vencida, 1 por rodada perdida, +4 de bônus pela vitória. */
export function battleCoins(won: number, lost: number) {
  return won * COINS_RIGHT + lost * COINS_WRONG + (won > lost ? COINS_RIGHT : 0);
}

/** Explica, em linguagem de aluno, por que uma carta venceu no atributo escolhido. */
export function explainBattle(a: PeriodicElement, b: PeriodicElement, label: string) {
  const x = a.attributes.find((t) => t.label === label);
  const y = b.attributes.find((t) => t.label === label);
  if (!x || !y) return "";
  const head = x.score === y.score
    ? `${a.name} e ${b.name} são equivalentes em ${label}.`
    : `${x.score > y.score ? a.name : b.name} é mais forte em ${label}: ${x.score > y.score ? x.value : y.value} contra ${x.score > y.score ? y.value : x.value}.`;
  return `${head}\n• ${a.name} (${x.value}): ${x.justification}\n• ${b.name} (${y.value}): ${y.justification}`;
}

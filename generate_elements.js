
import fs from 'fs';

const elements = [
  { symbol: "Te", name: "Telúrio", number: 52, mass: "127.60", density: "6.24", melt: "449.5", boil: "988", electro: "2.1", abund: "0.001", hardness: "2.25", desc: "Tellurium Memory: O mestre do armazenamento óptico e fotocondutividade, um herói que converte luz em energia e guarda dados com precisão semicondutora." },
  { symbol: "I", name: "Iodo", number: 53, mass: "126.90", density: "4.93", melt: "113.7", boil: "184.3", electro: "2.66", abund: "0.45", hardness: "N/A", desc: "Iodine Shield: O sentinela da saúde e guardião da tireoide, essencial para o equilíbrio metabólico e mestre da sublimação purificadora." },
  { symbol: "Xe", name: "Xenônio", number: 54, mass: "131.29", density: "5.89", melt: "-111.7", boil: "-108.1", electro: "2.6", abund: "0.00001", hardness: "N/A", desc: "Xenon Bright: O iluminador nobre e motor de íons cósmicos, um herói que rasga a escuridão com luz intensa e impulsiona naves rumo às estrelas." },
  { symbol: "Cs", name: "Césio", number: 55, mass: "132.91", density: "1.93", melt: "28.4", boil: "671", electro: "0.79", abund: "3", hardness: "0.2", desc: "Cesium Clock: O mestre do tempo absoluto e guardião da precisão atômica, cujas vibrações definem o ritmo do universo tecnológico." },
  { symbol: "Ba", name: "Bário", number: 56, mass: "137.33", density: "3.51", melt: "727", boil: "1897", electro: "0.89", abund: "425", hardness: "1.25", desc: "Barium Vision: O revelador de contrastes e mestre da transparência interna, capaz de tornar visível o invisível através de raios-X e diagnósticos." },
  { symbol: "La", name: "Lantânio", number: 57, mass: "138.91", density: "6.16", melt: "920", boil: "3464", electro: "1.1", abund: "39", hardness: "2.5", desc: "Lanthanum Luminous: O pioneiro das terras raras e mestre da ótica avançada, herói que clareia o caminho com lentes de altíssima precisão." },
  { symbol: "Ce", name: "Cério", number: 58, mass: "140.12", density: "6.77", melt: "798", boil: "3443", electro: "1.12", abund: "66", hardness: "2.5", desc: "Cerium Spark: O senhor das faíscas e catalisador da pureza, cujas chamas purificam os céus e impulsionam a energia limpa." }
];

function generateAttributes(el) {
  return `[
      { "id": 1, "label": "Massa Atômica", "value": "${el.mass} u", "justification": "Massa atômica relativa do ${el.name}.", "score": ${Math.round(parseFloat(el.mass)/3)} },
      { "id": 2, "label": "Abundância na Crosta", "value": "${el.abund} ppm", "justification": "Concentração média encontrada na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "${el.melt} °C", "justification": "Temperatura em que o elemento passa para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "${el.boil} °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "${el.density} g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "${el.hardness}", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "${el.electro}", "justification": "Capacidade de atrair elétrons em ligações.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons através do material.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "${parseFloat(el.melt) > 25 ? 'Sólido' : parseFloat(el.boil) < 25 ? 'Gás' : 'Líquido'}", "justification": "Forma física em temperatura ambiente.", "score": 99 },
      { "id": 14, "label": "Reatividade Química", "value": "Moderada", "justification": "Facilidade de participação em reações.", "score": 60 },
      { "id": 15, "label": "Reciclabilidade", "value": "Alta", "justification": "Potencial de reutilização sustentável.", "score": 80 },
      { "id": 16, "label": "Resistência à Corrosão", "value": "Boa", "justification": "Capacidade de resistir à oxidação.", "score": 75 },
      { "id": 17, "label": "Refletividade", "value": "Metálica", "justification": "Capacidade de refletir radiação.", "score": 70 },
      { "id": 18, "label": "Maleabilidade", "value": "Moderada", "justification": "Capacidade de ser moldado em lâminas.", "score": 60 },
      { "id": 19, "label": "Dutibilidade", "value": "Moderada", "justification": "Capacidade de ser esticado em fios.", "score": 60 },
      { "id": 20, "label": "Isótopos Estáveis", "value": "Sim", "justification": "Existência de variantes nucleares estáveis.", "score": 90 },
      { "id": 21, "label": "Toxicidade", "value": "Baixa", "justification": "Impacto biológico em organismos vivos.", "score": 85 },
      { "id": 22, "label": "Aplicações Tecnológicas", "value": "Várias", "justification": "Importância estratégica na indústria moderna.", "score": 95 },
      { "id": 23, "label": "Magnético", "value": "Paramagnético", "justification": "Resposta a campos magnéticos externos.", "score": 20 },
      { "id": 24, "label": "Custo de Produção", "value": "Variável", "justification": "Esforço econômico para extração e purificação.", "score": 50 },
      { "id": 25, "label": "Risco à Natureza", "value": "Baixo", "justification": "Potencial de dano ambiental.", "score": 80 },
      { "id": 26, "label": "Radioatividade", "value": "Nula", "justification": "Estabilidade nuclear natural.", "score": 100 },
      { "id": 27, "label": "Origem do Nome", "value": "Histórica", "justification": "Etimologia baseada na descoberta.", "score": 80 }
    ]`;
}

elements.forEach(el => {
  console.log(`ELEMENT: ${el.symbol}`);
  console.log(`HERO: ${el.desc}`);
  console.log(`ATTRIBUTES: ${generateAttributes(el)}`);
  console.log('---');
});

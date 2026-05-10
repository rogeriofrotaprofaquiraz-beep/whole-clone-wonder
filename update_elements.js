
import fs from 'fs';

const elements = [
  { symbol: "Pr", name: "Praseodímio", number: 59, mass: "140.91", density: "6.77", melt: "931", boil: "3520", electro: "1.13", abund: "9.2", hardness: "N/A", desc: "Praseodymium Green: O mestre do vidro verde e dos ímãs poderosos, um herói que une força magnética e elegância ótica." },
  { symbol: "Nd", name: "Neodímio", number: 60, mass: "144.24", density: "7.01", melt: "1021", boil: "3074", electro: "1.14", abund: "41.5", hardness: "N/A", desc: "Neodymium Force: O titã dos ímãs permanentes e mestre do magnetismo supremo, herói que sustenta a tecnologia moderna com sua força invisível." },
  { symbol: "Pm", name: "Promécio", number: 61, mass: "145", density: "7.26", melt: "1042", boil: "3000", electro: "N/A", abund: "0", hardness: "N/A", desc: "Promethium Glow: O portador da luz eterna e mestre da luminescência atômica, herói que brilha na escuridão com energia radioativa." },
  { symbol: "Sm", name: "Samário", number: 62, mass: "150.36", density: "7.52", melt: "1072", boil: "1794", electro: "1.17", abund: "7.05", hardness: "N/A", desc: "Samarium Spark: O especialista em resistências extremas e mestre dos ímãs térmicos, herói que mantém sua força mesmo no calor das batalhas." },
  { symbol: "Eu", name: "Európio", number: 63, mass: "151.96", density: "5.24", melt: "822", boil: "1529", electro: "N/A", abund: "2.1", hardness: "N/A", desc: "Europium Light: O mestre das cores vivas e guardião da autenticidade, herói que ilumina as telas do mundo e protege as moedas da falsificação." },
  { symbol: "Gd", name: "Gadolínio", number: 64, mass: "157.25", density: "7.90", melt: "1313", boil: "3273", electro: "1.2", abund: "6.2", hardness: "N/A", desc: "Gadolinium Vision: O mestre do contraste magnético e guardião do frio extremo, herói que revela segredos médicos e domina a refrigeração do futuro." }
];

function generateAttributes(el) {
  const score = Math.round(parseFloat(el.mass)/3) || 50;
  return `[
      { "id": 1, "label": "Massa Atômica", "value": "${el.mass} u", "justification": "Massa atômica relativa do ${el.name}.", "score": ${score} },
      { "id": 2, "label": "Abundância na Crosta", "value": "${el.abund} ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "${el.melt} °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "${el.boil} °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "${el.density} g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "${el.hardness}", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "${el.electro}", "justification": "Capacidade de atrair elétrons.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "Sólido", "justification": "Forma física em temperatura ambiente.", "score": 99 },
      { "id": 14, "label": "Reatividade Química", "value": "Alta", "justification": "Típico dos lantanídeos.", "score": 70 },
      { "id": 15, "label": "Reciclabilidade", "value": "Alta", "justification": "Potencial de reutilização.", "score": 85 },
      { "id": 16, "label": "Resistência à Corrosão", "value": "Moderada", "justification": "Necessita de proteção em algumas ligas.", "score": 65 },
      { "id": 17, "label": "Refletividade", "value": "Metálica", "justification": "Brilho prateado característico.", "score": 75 },
      { "id": 18, "label": "Maleabilidade", "value": "Boa", "justification": "Pode ser moldado com facilidade.", "score": 80 },
      { "id": 19, "label": "Dutibilidade", "value": "Boa", "justification": "Pode ser esticado em fios.", "score": 75 },
      { "id": 20, "label": "Isótopos Estáveis", "value": "Sim", "justification": "Variantes estáveis na natureza.", "score": 90 },
      { "id": 21, "label": "Toxicidade", "value": "Baixa", "justification": "Impacto biológico limitado.", "score": 90 },
      { "id": 22, "label": "Aplicações Tecnológicas", "value": "Crítica", "justification": "Essencial para alta tecnologia.", "score": 100 },
      { "id": 23, "label": "Magnético", "value": "Forte", "justification": "Propriedades magnéticas excepcionais.", "score": 95 },
      { "id": 24, "label": "Custo de Produção", "value": "Alto", "justification": "Dificuldade de separação.", "score": 30 },
      { "id": 25, "label": "Risco à Natureza", "value": "Baixo", "justification": "Estável no ambiente.", "score": 85 },
      { "id": 26, "label": "Radioatividade", "value": "${el.symbol === 'Pm' ? 'Alta' : 'Nula'}", "justification": "Estabilidade nuclear do elemento.", "score": ${el.symbol === 'Pm' ? 10 : 100} },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
    ]`;
}

const content = fs.readFileSync('src/data/elements.ts', 'utf8');
let newContent = content;

elements.forEach(el => {
  const regex = new RegExp(`("${el.symbol}": \\{[\\s\\S]*?"heroName": ")([^"]*)("[\\s\\S]*?"heroDescription": ")([^"]*)("[\\s\\S]*?"attributes": \\[)([\\s\\S]*?)(\\s+\\]\\s+\\})`, 'm');
  const heroName = el.desc.split(':')[0];
  const heroDescription = el.desc.split(': ')[1];
  const attributes = generateAttributes(el);
  
  newContent = newContent.replace(regex, `$1${heroName}$3${heroDescription}$5${attributes}$7`);
});

fs.writeFileSync('src/data/elements.ts', newContent);
console.log('Updated 6 elements.');

export interface ElementAttribute {
  id: number;
  label: string;
  value: string | number;
  justification: string;
  score: number; // 0-100
}

export interface PeriodicElement {
  number: number;
  symbol: string;
  name: string;
  heroName: string;
  heroDescription: string;
  heroImage: string;
  attributes: ElementAttribute[];
}

export const ELEMENTS_DATA: Record<string, PeriodicElement> = {
  H: {
    number: 1,
    symbol: "H",
    name: "Hidrogênio",
    heroName: "Hydrogen Force",
    heroDescription: "O pioneiro do cosmos, capaz de gerar energia infinita e moldar as estrelas.",
    heroImage: "/placeholder.svg", // Será atualizado com imagens reais
    attributes: [
      { id: 1, label: "Fraquezas", value: "Altamente inflamável", justification: "Instável, risco de explosão.", score: 10 },
      { id: 2, label: "Risco/Benefício à natureza", value: "Gás limpo, mas perigoso", justification: "Baixo impacto ambiental, mas manipulação perigosa.", score: 70 },
      { id: 3, label: "Risco à saúde", value: "Pouco tóxico, asfixiante", justification: "Seguro biologicamente, porém explosivo.", score: 60 },
      { id: 4, label: "Benefício", value: "Células a combustível, NH₃, H₂O", justification: "Muito útil industrialmente.", score: 90 },
      { id: 5, label: "Nº de ligantes possíveis", value: "≈95 elementos", justification: "Alta diversidade de compostos.", score: 90 },
      { id: 6, label: "Abundância na natureza", value: "0,15% na crosta", justification: "Raro na crosta, mas comum em compostos.", score: 20 },
      { id: 7, label: "Abundância no universo", value: "~75%", justification: "Elemento mais abundante do universo.", score: 100 },
      { id: 8, label: "Massa atômica", value: "1,008 u", justification: "Menor entre todos os elementos.", score: 1 },
      { id: 9, label: "Densidade", value: "0,0899 g/cm³", justification: "Levíssimo.", score: 1 },
      { id: 10, label: "Raio atômico", value: "~53 pm", justification: "Próximo ao menor raio atômico.", score: 5 },
      { id: 11, label: "Oxidação", value: "+1 / −1", justification: "Apenas dois estados de oxidação.", score: 25 },
      { id: 12, label: "Condutividade elétrica", value: "Isolante (gás)", justification: "Não conduz eletricidade no estado gasoso.", score: 1 },
      { id: 13, label: "Eletronegatividade", value: "2,20", justification: "Valor médio entre os elementos.", score: 45 },
      { id: 14, label: "Estado físico", value: "Gás", justification: "Gás à temperatura ambiente.", score: 1 },
      { id: 15, label: "Maior subnível energético", value: "1s¹", justification: "Nível energético mais baixo (n=1).", score: 1 },
      { id: 16, label: "Distribuição eletrônica", value: "1s¹", justification: "Extremamente simples.", score: 95 },
      { id: 17, label: "Nº prótons/elétrons", value: "1", justification: "Menor número entre os elementos.", score: 1 },
      { id: 18, label: "Nº nêutrons", value: "0", justification: "Valor mínimo possível.", score: 1 },
      { id: 19, label: "Radioatividade", value: "Estável", justification: "Sem radioatividade natural.", score: 100 },
      { id: 20, label: "Aplicabilidade", value: "Energia, química, fusão", justification: "Altíssima utilidade atual.", score: 95 },
      { id: 21, label: "Local de origem", value: "Inglaterra (Cavendish)", justification: "Origem histórica na Europa Científica.", score: 80 },
      { id: 22, label: "Curiosidade", value: "Chama invisível", justification: "Muitas aplicações únicas.", score: 85 },
      { id: 23, label: "Origem do nome", value: "Formador de água", justification: "Nome altamente representativo.", score: 95 },
      { id: 24, label: "Descobridor", value: "Henry Cavendish", justification: "Reconhecido cientista.", score: 90 },
      { id: 25, label: "Ano de descoberta", value: "1766", justification: "Um dos primeiros elementos isolados.", score: 99 },
      { id: 26, label: "Ponto de fusão", value: "-259,14 °C", justification: "Um dos valores mais baixos.", score: 1 },
      { id: 27, label: "Ponto de ebulição", value: "-252,87 °C", justification: "Um dos menores pontos de ebulição.", score: 1 },
    ]
  },
  Fe: {
    number: 26,
    symbol: "Fe",
    name: "Ferro",
    heroName: "Iron Guardian",
    heroDescription: "A espinha dorsal da civilização, mestre do magnetismo e da resistência inquebrável.",
    heroImage: "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777817322180-0ipir-ChatGPT_Image_25_de_jan._de_2026__22_11_07.png",
    attributes: [
      { id: 1, label: "Fraquezas", value: "Oxidação (Ferrugem)", justification: "Corrói facilmente em contato com oxigênio e umidade.", score: 40 },
      { id: 2, label: "Risco/Benefício à natureza", value: "Essencial e reciclável", justification: "Fundamental para a vida (hemoglobina) e altamente reciclável.", score: 95 },
      { id: 3, label: "Risco à saúde", value: "Baixo (essencial)", justification: "Necessário para o transporte de oxigênio no sangue.", score: 90 },
      { id: 4, label: "Benefício", value: "Estruturas, ferramentas, transporte", justification: "O metal mais usado na história da humanidade.", score: 100 },
      { id: 5, label: "Nº de ligantes possíveis", value: "Complexo", justification: "Forma diversas ligas como o aço.", score: 85 },
      { id: 6, label: "Abundância na natureza", value: "5% na crosta", justification: "Quarto elemento mais abundante na crosta terrestre.", score: 80 },
      { id: 7, label: "Abundância no universo", value: "Comum", justification: "Produzido em estrelas massivas no fim da vida.", score: 70 },
      { id: 8, label: "Massa atômica", value: "55,845 u", justification: "Massa média.", score: 50 },
      { id: 9, label: "Densidade", value: "7,874 g/cm³", justification: "Metal denso e sólido.", score: 78 },
      { id: 10, label: "Raio atômico", value: "126 pm", justification: "Tamanho médio para um metal de transição.", score: 45 },
      { id: 11, label: "Oxidação", value: "+2, +3", justification: "Estados de oxidação muito comuns e estáveis.", score: 60 },
      { id: 12, label: "Condutividade elétrica", value: "Condutor", justification: "Bom condutor, embora inferior ao cobre.", score: 70 },
      { id: 13, label: "Eletronegatividade", value: "1,83", justification: "Valor típico de metais.", score: 40 },
      { id: 14, label: "Estado físico", value: "Sólido", justification: "Sólido metálico à temperatura ambiente.", score: 100 },
      { id: 15, label: "Maior subnível energético", value: "3d⁶", justification: "Metal de transição com subnível d incompleto.", score: 60 },
      { id: 16, label: "Distribuição eletrônica", value: "[Ar] 3d⁶ 4s²", justification: "Configuração clássica de transição.", score: 75 },
      { id: 17, label: "Nº prótons/elétrons", value: "26", justification: "Posição central na tabela.", score: 26 },
      { id: 18, label: "Nº nêutrons", value: "30", justification: "Isótopo mais estável (Fe-56).", score: 30 },
      { id: 19, label: "Radioatividade", value: "Estável", justification: "Altamente estável.", score: 100 },
      { id: 20, label: "Aplicabilidade", value: "Indústria pesada, aço", justification: "Base da infraestrutura moderna.", score: 100 },
      { id: 21, label: "Local de origem", value: "Antiguidade", justification: "Conhecido desde os primórdios da humanidade.", score: 100 },
      { id: 22, label: "Curiosidade", value: "Ferromagnetismo", justification: "Propriedades magnéticas únicas.", score: 95 },
      { id: 23, label: "Origem do nome", value: "Ferrum (Latim)", justification: "Origem clássica e universal.", score: 90 },
      { id: 24, label: "Descobridor", value: "Desconhecido", justification: "Usado desde a pré-história.", score: 50 },
      { id: 25, label: "Ano de descoberta", value: "~3500 a.C.", justification: "Um dos metais mais antigos.", score: 100 },
      { id: 26, label: "Ponto de fusão", value: "1538 °C", justification: "Ponto de fusão elevado.", score: 85 },
      { id: 27, label: "Ponto de ebulição", value: "2862 °C", justification: "Ponto de ebulição muito alto.", score: 90 },
    ]
  }
};

export interface ElementAttribute {
  id: number;
  label: string;
  value: string | number;
  justification: string;
  score: number;
}

export interface PeriodicElement {
  number: number;
  symbol: string;
  name: string;
  heroName: string;
  heroDescription: string;
  heroImage: string;
  rarity?: 'Comum' | 'Incomum' | 'Raro' | 'Épico' | 'Lendário';
  attributes: ElementAttribute[];
}

export const ELEMENTS_DATA: Record<string, PeriodicElement> = {
  "H": {
    "number": 1,
    "symbol": "H",
    "name": "Hidrogênio",
    "heroName": "Hydrogen Genesis",
    "heroDescription": "O primeiro elemento, faísca primordial das estrelas e combustível do futuro infinito.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777818237494-j6one-PixVerse_V5_Image_Text_360P_transformar_em_mov.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente inflamável",
        "justification": "Instável, risco de explosão.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Gás limpo, mas perigoso",
        "justification": "Baixo impacto ambiental, mas manipulação perigosa.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, asfixiante",
        "justification": "Seguro biologicamente, porém explosivo.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Células a combustível, NH₃, H₂O",
        "justification": "Muito útil industrialmente.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Liga-se com ≈95 elementos",
        "justification": "Alta diversidade de compostos.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Cerca de 0,15% na crosta",
        "justification": "Raro na crosta, mas comum em compostos.",
        "score": 20
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "~75% da massa do universo",
        "justification": "Elemento mais abundante do universo.",
        "score": 100
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "1,008 u (menor)",
        "justification": "Menor entre todos os elementos.",
        "score": 1
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,0899 g/cm³ (mínima)",
        "justification": "Levíssimo.",
        "score": 1
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "~53 pm",
        "justification": "Próximo ao menor raio atômico.",
        "score": 5
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1 / −1",
        "justification": "Apenas dois estados de oxidação.",
        "score": 25
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante em gás",
        "justification": "Não conduz eletricidade no estado gasoso.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,20 (Pauling)",
        "justification": "Valor médio entre os elementos.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gás à temperatura ambiente = nota mínima.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "1s¹",
        "justification": "Nível energético mais baixo (n=1).",
        "score": 1
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s¹",
        "justification": "Extremamente simples.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons",
        "value": "1 próton, 1 elétron",
        "justification": "Menor número entre os elementos.",
        "score": 1
      },
      {
        "id": 18,
        "label": "Nº nêutrons",
        "value": "0 (no isótopo mais comum)",
        "justification": "Valor mínimo possível.",
        "score": 1
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem radioatividade natural.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Energia, química, fusão",
        "justification": "Altíssima utilidade atual.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Cavendish isolou na Inglaterra",
        "justification": "Origem histórica na Europa Científica.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Chama invisível, astrofísica",
        "justification": "Muitas aplicações únicas.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "“Formador de água”",
        "justification": "Nome altamente representativo.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Henry Cavendish",
        "justification": "Reconhecido cientista.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1766",
        "justification": "Um dos primeiros elementos isolados.",
        "score": 99
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–259,14 °C / 13,99 K / –434,45 °F",
        "justification": "Um dos valores mais baixos entre todos os elementos.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–252,87 °C / 20,28 K / –423,17 °F",
        "justification": "Um dos menores pontos de ebulição da Tabela Periódica.",
        "score": 1
      }
    ]
  },
  "He": {
    "number": 2,
    "symbol": "He",
    "name": "Hélio",
    "heroName": "Solaris",
    "heroDescription": "Nascido no fogo das estrelas, Solaris é a essência da luz e o fôlego da ascensão cósmica.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777824274005-l1qse-helio_mov.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Inerte, pouco reativo",
        "justification": "Baixíssima reatividade pode ser vista como limitação.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Gás nobre não tóxico",
        "justification": "Extremamente seguro para o meio ambiente.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Não tóxico, mas pode causar asfixia",
        "justification": "Seguro, exceto em ambientes fechados em alta concentração.",
        "score": 85
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Criogenia, balões, ressonância magnética",
        "justification": "Múltiplas aplicações tecnológicas.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Quase nenhum (inércia química)",
        "justification": "Praticamente não forma compostos.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Muito raro na Terra",
        "justification": "Escasso na crosta terrestre.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Segundo mais abundante após o hidrogênio",
        "justification": "Muito presente em estrelas e no Sol.",
        "score": 90
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "4,0026 u",
        "justification": "Uma das menores massas atômicas.",
        "score": 2
      },
      {
        "id": 9,
        "label": "Densidade (0,1786 g/L a 0°C)",
        "value": "Extremamente baixa",
        "justification": "Segundo gás mais leve da Tabela.",
        "score": 2
      },
      {
        "id": 10,
        "label": "Raio atômico (~31 pm)",
        "value": "Um dos menores",
        "justification": "Muito pequeno devido à camada completa.",
        "score": 3
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "Nenhum estado típico",
        "justification": "Quimicamente inerte.",
        "score": 1
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito baixa",
        "justification": "Não conduz eletricidade no estado gasoso.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "Não aplicável",
        "justification": "Não forma compostos — não mensurável.",
        "score": 1
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gás sob condições ambientes.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "1s²",
        "justification": "Nível mais baixo possível.",
        "score": 1
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s²",
        "justification": "Estável, extremamente simples.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons",
        "value": "2",
        "justification": "Entre os menores.",
        "score": 2
      },
      {
        "id": 18,
        "label": "Nº nêutrons (mais comum: 2)",
        "value": "2",
        "justification": "Valor muito baixo.",
        "score": 2
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Totalmente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Diversas áreas: medicina, mergulho, indústria",
        "justification": "Muito utilizado apesar da inércia química.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Isolado de gás natural nos EUA",
        "justification": "Descoberto no Sol antes de ser isolado na Terra.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado para balões, voz aguda, descoberto no Sol",
        "justification": "Muitas curiosidades únicas.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "“Hélios” (Sol, em grego)",
        "justification": "Origem mitológica e científica marcante.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Janssen & Lockyer (espectroscopia solar)",
        "justification": "Descoberto por observação do espectro solar.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1868",
        "justification": "Descoberto antes de ser isolado na Terra (1895).",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–272,2 °C / 0,95 K / –457,96 °F",
        "justification": "Um dos pontos de fusão mais baixos.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–268,9 °C / 4,22 K / –452,02 °F",
        "justification": "Elemento com menor ponto de ebulição conhecido.",
        "score": 1
      }
    ]
  },
  "Li": {
    "number": 3,
    "symbol": "Li",
    "name": "Lítio",
    "heroName": "Lithium Volt",
    "heroDescription": "O metal mais leve do cosmos, carregado com a energia pulsante de um milhão de baterias.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777826513112-s1xkd-litio_mov.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com água e ar; precisa de armazenamento em óleo",
        "justification": "Reatividade moderada; risco de incêndio.",
        "score": 60
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pode causar impacto em ecossistemas",
        "justification": "Mineração intensa pode prejudicar o meio ambiente.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Levemente tóxico; pode causar irritações",
        "justification": "Pouco tóxico, mas perigoso em altas doses.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Baterias, psiquiatria, ligas metálicas",
        "justification": "Uso tecnológico e medicinal extremamente relevante.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Valência 1 – forma 1 ligação iônica",
        "justification": "Liga-se apenas com 1 elemento diretamente.",
        "score": 20
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Relativamente raro (~0,0017%)",
        "justification": "Menor abundância em comparação a outros metais.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Pouco abundante",
        "justification": "Um dos metais menos abundantes no universo.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~6,94 u)",
        "value": "Terceira menor massa atômica",
        "justification": "Muito leve, atrás apenas de H e He.",
        "score": 5
      },
      {
        "id": 9,
        "label": "Densidade (0,534 g/cm³)",
        "value": "Menor entre os metais sólidos",
        "justification": "Extremamente leve para um metal.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~152 pm)",
        "value": "Relativamente grande",
        "justification": "Raio significativo para sua posição na Tabela.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "1",
        "justification": "Apenas um estado de oxidação.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Excelente condutor, como todos os metais alcalinos.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,98)",
        "value": "Muito baixa",
        "justification": "Um dos menores valores da Tabela.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Sólido estável a temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2s¹",
        "justification": "Nível energético baixo (n=2).",
        "score": 15
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s¹)",
        "value": "Simples e didática",
        "justification": "Boa para estudos introdutórios.",
        "score": 60
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=3)",
        "value": "3",
        "justification": "Valor pequeno.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (4 no isótopo mais comum)",
        "value": "4",
        "justification": "Também baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Baterias, medicina, indústria",
        "justification": "Extremamente útil na era tecnológica.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Descoberto em minerais naturais",
        "justification": "Isolado por eletrólise de sais fundidos.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Elemento essencial em baterias recarregáveis",
        "justification": "Alta demanda atual, envolve geopolítica.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego lithos = pedra",
        "justification": "Nome relacionado ao estado natural mineral.",
        "score": 70
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Johan August Arfwedson",
        "justification": "Reconhecido cientista sueco, 1817.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1817",
        "justification": "Descoberto logo após o avanço da eletroquímica.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "180,5 °C / 453,7 K / 356,9 °F",
        "justification": "Baixo para um metal, mas mais alto que sódio e potássio.",
        "score": 40
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1342 °C / 1615 K / 2447,6 °F",
        "justification": "Alto para um metal alcalino leve; facilita aplicações em altas temperaturas.",
        "score": 70
      }
    ]
  },
  "Be": {
    "number": 4,
    "symbol": "Be",
    "name": "Berílio",
    "heroName": "Beryl Shield",
    "heroDescription": "Uma guardiã de metal ultraleve e resistente, capaz de suportar as condições mais extremas do espaço e da radiação.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777827780458-p3485-4_be_mov.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Tóxico, manuseio perigoso",
        "justification": "Inalação de poeira de Be pode causar beriliose (doença pulmonar grave).",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco abundante, mas perigoso em mineração",
        "justification": "Pode causar danos ambientais e humanos se mal explorado.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente tóxico em pó",
        "justification": "Considerado um dos metais mais tóxicos para humanos.",
        "score": 20
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas leves e resistentes, aeroespacial",
        "justification": "Aplicações estratégicas e tecnológicas.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Valência 2",
        "justification": "Liga-se com poucos elementos comparado a metais de transição.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Raro (~0,0002%)",
        "justification": "Pouquíssimo abundante.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Um dos elementos menos abundantes no universo.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~9,01 u)",
        "value": "Leve",
        "justification": "Massa atômica baixa, porém mais que H, He e Li.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (1,85 g/cm³)",
        "value": "Baixa para um metal",
        "justification": "Leve, útil em aplicações estruturais.",
        "score": 30
      },
      {
        "id": 10,
        "label": "Raio atômico (~112 pm)",
        "value": "Médio",
        "justification": "Menor que o do lítio, mas ainda razoável.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "2",
        "justification": "Apenas um estado de oxidação comum.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Excelente condutor de calor e eletricidade.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,57)",
        "value": "Moderadamente baixa",
        "justification": "Mais alto que outros metais alcalino-terrosos.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2s²",
        "justification": "Subnível baixo, simples.",
        "score": 20
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s²)",
        "value": "Simples",
        "justification": "Curta e funcional para estudos básicos.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=4)",
        "value": "4",
        "justification": "Ainda entre os elementos mais leves.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (5 no isótopo mais comum)",
        "value": "5",
        "justification": "Valor ainda baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas aeroespaciais, reatores nucleares, janelas de raios X",
        "justification": "Aplicações estratégicas e tecnológicas.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Isolado de minerais como berilo e crisoberilo",
        "justification": "Descoberto em minerais raros.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Transparente a raios X",
        "justification": "Propriedade física única entre os metais.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Derivado de \"berilo\"",
        "justification": "Nome ligado ao mineral de origem.",
        "score": 70
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Louis-Nicolas Vauquelin (1798)",
        "justification": "Reconhecido cientista francês.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1798",
        "justification": "Descoberto durante o século da química moderna.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1287 °C / 1560 K / 2349 °F",
        "justification": "Alto ponto de fusão útil em indústria metalúrgica.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2470 °C / 2743 K / 4478 °F",
        "justification": "Extremamente alto, comparável a metais refratários.",
        "score": 85
      }
    ]
  },
  "B": {
    "number": 5,
    "symbol": "B",
    "name": "Boro",
    "heroName": "Boro Titan",
    "heroDescription": "O mestre da resistência e o arquiteto da rigidez, Boro Titan funde a força dos metais com a astúcia dos não-metais.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828214445-smw78-5_boro_mov.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Frágil, semicondutor, difícil de manipular puro",
        "justification": "Duro, mas quebradiço e sensível a oxidação.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico, útil, não poluente",
        "justification": "Impacto ambiental baixo, com boa utilidade.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas pode causar irritação",
        "justification": "Exposição excessiva pode causar efeitos em olhos e pele.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Vidros, semicondutores, inseticidas, nutrição vegetal",
        "justification": "Diversidade de aplicações.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Valência 3",
        "justification": "Forma muitos compostos, inclusive complexos.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Moderadamente abundante (~0,001%)",
        "justification": "Não é raro, mas também não é comum.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Elemento raro no universo.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~10,81 u)",
        "value": "Leve",
        "justification": "Massa leve, mas maior que Be e Li.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (~2,34 g/cm³)",
        "value": "Baixa",
        "justification": "Ainda considerado leve.",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~87 pm)",
        "value": "Relativamente pequeno",
        "justification": "Médio-baixo comparado a outros não metais.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1 a +3 (mais comum: +3)",
        "justification": "Apresenta mais de um estado de oxidação.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semicondutor",
        "justification": "Condutor limitado — base da eletrônica moderna.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,04)",
        "value": "Moderada",
        "justification": "Posição intermediária entre metais e ametais.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Forma sólida estável a temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p¹",
        "justification": "Nível eletrônico simples.",
        "score": 20
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p¹)",
        "value": "Simples e didática",
        "justification": "Útil no ensino de estrutura.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=5)",
        "value": "5",
        "justification": "Valor pequeno.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (6 no isótopo mais comum)",
        "value": "6",
        "justification": "Ainda baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Cerâmica, nutrição, tecnologia, borossilicatos",
        "justification": "Muito versátil.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais como bórax (Turquia, EUA)",
        "justification": "Extraído de minerais, com produção global relevante.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Base de painéis solares, superfibras, materiais duros",
        "justification": "Usado em materiais inovadores.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do mineral “bórax”",
        "justification": "Nome ligado ao composto mais comum.",
        "score": 65
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Joseph Gay-Lussac & Louis Thénard (1808)",
        "justification": "Cientistas notáveis da era napoleônica.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1808",
        "justification": "Século da química moderna.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2076 °C / 2349 K / 3769 °F",
        "justification": "Extremamente alto, usado como material refratário.",
        "score": 85
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3927 °C / 4200 K / 7101 °F",
        "justification": "Um dos mais altos da Tabela Periódica.",
        "score": 95
      }
    ]
  },
  "C": {
    "number": 6,
    "symbol": "C",
    "name": "Carbono",
    "heroName": "Carbon Prime",
    "heroDescription": "O arquiteto da existência e a espinha dorsal da vida. Capaz de se transformar de grafite macio em diamante indestrutível.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828520876-l4av9-6_carb.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Pode formar gases tóxicos como CO, poluição orgânica",
        "justification": "Compostos tóxicos e aquecimento global associados.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial à vida, mas ligado à poluição",
        "justification": "Depende do composto; efeito estufa x ciclo natural.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "CO é tóxico, mas o elemento em si é neutro",
        "justification": "Compostos podem ser perigosos, mas o carbono puro não é.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Base da vida, nanotecnologia, materiais, combustíveis",
        "justification": "Elemento com maior relevância biológica e tecnológica.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Pode formar 4 ligações",
        "justification": "Máxima versatilidade em química orgânica.",
        "score": 95
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Moderadamente abundante (~0,02%)",
        "justification": "Valor moderado.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Um dos mais abundantes entre os não-metais",
        "justification": "Elemento universal em compostos orgânicos e interestelares.",
        "score": 60
      },
      {
        "id": 8,
        "label": "Massa atômica (~12,01 u)",
        "value": "Leve",
        "justification": "Massa baixa, favorecendo estruturas orgânicas.",
        "score": 15
      },
      {
        "id": 9,
        "label": "Densidade (grafite: 2,26 g/cm³)",
        "value": "Baixa",
        "justification": "Leve, mas mais denso que elementos anteriores.",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~70 pm)",
        "value": "Pequeno",
        "justification": "Valor compatível com ligações covalentes fortes.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "De –4 a +4",
        "justification": "Ampla gama de estados de oxidação.",
        "score": 80
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa em grafite; isolante no diamante",
        "justification": "Depende do alótropo.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,55)",
        "value": "Moderada-alta",
        "justification": "Permite ligações com metais e ametais.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido (grafite, diamante)",
        "justification": "Estável em formas sólidas cristalinas.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p²",
        "justification": "Nível energético simples.",
        "score": 25
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p²)",
        "value": "Clara, útil no ensino",
        "justification": "Relevante em estrutura de Lewis, orbitais híbridos.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=6)",
        "value": "6",
        "justification": "Leve, mas não entre os mínimos.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (6 no isótopo mais comum)",
        "value": "6",
        "justification": "Valor ainda baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (exceto C-14, que é usado em datação)",
        "justification": "Isótopo radioativo útil, mas o C-12 é estável.",
        "score": 90
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Biologia, materiais, indústria, nanotubos",
        "justification": "Elemento mais aplicado em diferentes áreas.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Onipresente: organismos, combustíveis fósseis",
        "justification": "Naturalmente difundido na biosfera.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Forma diamante, grafite, grafeno, fulerenos",
        "justification": "Versatilidade estrutural única.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim carbo = carvão",
        "justification": "Nome clássico e significativo.",
        "score": 70
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Elemento usado desde tempos pré-históricos.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Pré-histórico",
        "justification": "Sem data oficial; sempre foi conhecido.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão (sublimação):",
        "value": "3550 °C / 3823 K / 6422 °F",
        "justification": "Extremamente alto – sublima sem derreter (grafite).",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "4827 °C / 5100 K / 8720 °F",
        "justification": "Um dos mais altos de toda a tabela.",
        "score": 100
      }
    ]
  },
  "N": {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogênio",
    "heroName": "Nitro Frost",
    "heroDescription": "O mestre do frio absoluto e o guardião da atmosfera. Invisível e onipresente, Nitro Frost mantém o equilíbrio vital de todo o planeta.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828651281-141mv-7_nitrogenio.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Inerte como gás, pode formar compostos tóxicos (NO₂, NH₃)",
        "justification": "Estável em N₂, mas perigoso em alguns compostos.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial à vida, mas polui em excesso (fertilizantes, NOx)",
        "justification": "Impacto ambiental depende do uso (agro x industrial).",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Gás inerte; compostos como NO₂ são tóxicos",
        "justification": "N₂ é seguro, mas compostos são irritantes e perigosos.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fertilizantes, DNA, proteínas, atmosfera",
        "justification": "Base da vida e da agricultura moderna.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Pode formar 3 ou mais ligações (até 4)",
        "justification": "Alta versatilidade de ligação.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Baixa, mas presente em compostos",
        "justification": "Pouco abundante na crosta sólida.",
        "score": 30
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Mais comum que fósforo e enxofre.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Massa atômica (~14,01 u)",
        "value": "Leve",
        "justification": "Entre os elementos mais leves.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (gás N₂: 1,2506 g/L)",
        "value": "Baixa",
        "justification": "Um dos gases mais leves da atmosfera.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~56 pm)",
        "value": "Pequeno",
        "justification": "Pequeno tamanho favorece ligações múltiplas.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "De –3 a +5",
        "justification": "Uma das maiores variedades de oxidação.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito baixa como gás",
        "justification": "Não conduz eletricidade.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade (3,04)",
        "value": "Alta",
        "justification": "Um dos valores mais altos da Tabela.",
        "score": 85
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Nota mínima por ser gás.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p³",
        "justification": "Camada pouco energética.",
        "score": 30
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p³)",
        "value": "Didática",
        "justification": "Boa para ensino de orbitais e ligações.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=7)",
        "value": "7",
        "justification": "Ainda leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (7 no isótopo mais comum)",
        "value": "7",
        "justification": "Baixo valor.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fertilizantes, explosivos, atmosfera, medicina",
        "justification": "Uso industrial, agrícola e biológico.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Isolado da atmosfera (Rutherford, 1772)",
        "justification": "Descoberta científica precoce e relevante.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "78% do ar, fixação por relâmpagos e bactérias",
        "justification": "Ciclo do nitrogênio é fundamental na natureza.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego: nitron (salitre) + genes (formador)",
        "justification": "Nome ligado à produção de compostos.",
        "score": 70
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Daniel Rutherford (1772)",
        "justification": "Figura de destaque na química do século XVIII.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1772",
        "justification": "Um dos primeiros elementos identificados no ar.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–210,0 °C / 63,15 K / –346,0 °F",
        "justification": "Muito baixo, como esperado para gases.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–195,8 °C / 77,36 K / –320,4 °F",
        "justification": "Ponto de ebulição extremamente baixo.",
        "score": 5
      }
    ]
  },
  "O": {
    "number": 8,
    "symbol": "O",
    "name": "Oxigênio",
    "heroName": "Oxy Vitalis",
    "heroDescription": "O combustível da vida e o mestre da combustão. Sem Oxy Vitalis, o fogo se apaga e o fôlego do mundo cessa.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828713122-ejdx8-8_oxig_nio.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo, causa oxidação e combustão",
        "justification": "Essencial à vida, mas altamente oxidante e inflamável.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial, mas provoca corrosão",
        "justification": "Vital para a vida, mas pode desgastar materiais.",
        "score": 85
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altas concentrações são tóxicas",
        "justification": "Necessário, mas o excesso é danoso aos tecidos.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Respiração, combustão, ozônio, medicina",
        "justification": "Extremamente essencial à vida e indústria.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Pode formar 2 ligações, mas aceita mais em casos específicos",
        "justification": "Versátil em ligações duplas, compostos peróxidos, etc.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Elemento mais abundante (~46%)",
        "justification": "O mais abundante na crosta terrestre.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito abundante",
        "justification": "Um dos elementos mais abundantes após H e He.",
        "score": 80
      },
      {
        "id": 8,
        "label": "Massa atômica (~16,00 u)",
        "value": "Leve",
        "justification": "Massa ainda baixa, ideal para ligações orgânicas.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (gás O₂: 1,429 g/L)",
        "value": "Leve como gás",
        "justification": "Pouco mais denso que o ar médio.",
        "score": 15
      },
      {
        "id": 10,
        "label": "Raio atômico (~48 pm)",
        "value": "Pequeno",
        "justification": "Excelente para formar ligações curtas e fortes.",
        "score": 80
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "–2 a +2 (ozônio: 0)",
        "justification": "Alguns estados, mas não tão variados como o Nitrogênio.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Baixa",
        "justification": "Gás isolante.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade (3,44)",
        "value": "Altíssima",
        "justification": "Segundo elemento mais eletronegativo (atrás apenas do Flúor).",
        "score": 100
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Recebe nota mínima por ser gasoso.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p⁴",
        "justification": "Configuração energética simples.",
        "score": 35
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p⁴)",
        "value": "Importante para estudo de valência e hibridização",
        "justification": "Muito utilizada em química orgânica e inorgânica.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=8)",
        "value": "8",
        "justification": "Valor leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (8 no isótopo mais comum)",
        "value": "8",
        "justification": "Valor ainda baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Respiração, medicina, industrial, ozônio",
        "justification": "Alta aplicabilidade em diversas áreas.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Atmosfera (~21%) e água (H₂O)",
        "justification": "Amplamente disponível em formas diversas.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Forma ozônio, muda de cor em estado líquido",
        "justification": "Gasoso é incolor, líquido azul, ozônio é azulado e explosivo.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego: oxys (ácido) + genes (formador)",
        "justification": "Nome vinculado à antiga teoria dos ácidos.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Joseph Priestley / Carl Scheele (~1774)",
        "justification": "Descoberto quase simultaneamente por cientistas europeus.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1774",
        "justification": "Elemento identificado no século da Revolução Química.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–218,8 °C / 54,36 K / –361,8 °F",
        "justification": "Ponto muito baixo, típico de gases.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–182,96 °C / 90,19 K / –297,3 °F",
        "justification": "Ponto de ebulição muito baixo.",
        "score": 5
      }
    ]
  },
  "F": {
    "number": 9,
    "symbol": "F",
    "name": "Flúor",
    "heroName": "Fluorine Phantom",
    "heroDescription": "O elemento mais reativo e implacável do cosmos. Fluorine Phantom é o mestre da eletronegatividade, capaz de romper qualquer ligação.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828798671-dg6tr-9_fluor.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente corrosivo, reage violentamente",
        "justification": "Um dos elementos mais perigosos isoladamente.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em microdoses; tóxico em excesso",
        "justification": "Pode contaminar solos e corpos d’água, mas é usado com controle.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente tóxico; gás causa queimaduras",
        "justification": "Reage com tecidos vivos e ossos; deve ser manuseado com extremo cuidado.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Saúde dental, Teflon, urânio, medicamentos",
        "justification": "Uso industrial estratégico, apesar do risco.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Tende a fazer 1 ligação, mas forma compostos complexos",
        "justification": "Baixo número de ligações, mas alta reatividade.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Relativamente comum (~0,06%)",
        "justification": "Encontrado em fluorita e outros minerais.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Um dos halogênios menos abundantes.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~18,998 u)",
        "value": "Leve",
        "justification": "Massa atômica baixa, próxima ao oxigênio.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (gás F₂: 1,696 g/L)",
        "value": "Leve como gás",
        "justification": "Gás mais denso que O₂, mas ainda leve.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~42 pm)",
        "value": "Muito pequeno",
        "justification": "Altamente compacto, facilitando alta eletronegatividade.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "–1 (mais comum); raros casos de positivos",
        "justification": "Pouquíssima variedade de oxidação.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante em gás; bons íons em solução",
        "justification": "Como ânion (F⁻) conduz bem, mas como gás não.",
        "score": 20
      },
      {
        "id": 13,
        "label": "Eletronegatividade (3,98)",
        "value": "Máxima da Tabela Periódica",
        "justification": "Ponto forte absoluto — atrai elétrons com máxima intensidade.",
        "score": 100
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gases recebem nota mínima nesse critério.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p⁵",
        "justification": "Nível energético típico de segunda camada.",
        "score": 35
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p⁵)",
        "value": "Simples e didática",
        "justification": "Usado em modelos básicos de ligação.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=9)",
        "value": "9",
        "justification": "Ainda entre os elementos leves.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (10 no isótopo mais comum)",
        "value": "10",
        "justification": "Valor ainda baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais instáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Saúde bucal, polímeros, enriquecimento de urânio",
        "justification": "Uso tecnológico elevado, apesar da toxicidade.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais como fluorita (CaF₂), criolita",
        "justification": "Extraído de minerais relativamente comuns.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro elemento a formar compostos com gases nobres",
        "justification": "Altíssima reatividade — até mesmo com xenônio.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim fluere (fluir)",
        "justification": "Nome baseado na utilidade de minerais fluorados como fundentes.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Henri Moissan (1886)",
        "justification": "Conquistou Prêmio Nobel por conseguir isolar o elemento.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1886",
        "justification": "Foi o último halogênio a ser isolado devido ao perigo.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–219,6 °C / 53,5 K / –363,3 °F",
        "justification": "Extremamente baixo.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–188,1 °C / 85,0 K / –306,6 °F",
        "justification": "Ponto muito baixo, típico de gases não-metálicos.",
        "score": 5
      }
    ]
  },
  "Ne": {
    "number": 10,
    "symbol": "Ne",
    "name": "Neônio",
    "heroName": "Neon Glow",
    "heroDescription": "O herói das luzes vibrantes e da nobreza inabalável. Neon Glow ilumina as cidades com seu brilho carmesim, mantendo-se sempre puro e imperturbável.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828889968-ofrl8-10_neonio.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente inerte, pouco reativo",
        "justification": "Não forma compostos, o que limita aplicações químicas.",
        "score": 60
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Gás inerte, não poluente",
        "justification": "Sem toxicidade ou impacto ambiental negativo.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Totalmente inerte, atóxico",
        "justification": "Seguro mesmo em altas concentrações.",
        "score": 100
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Iluminação, sinalização, lasers",
        "justification": "Aplicações visuais e tecnológicas restritas, porém úteis.",
        "score": 60
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Nenhum (gás nobre)",
        "justification": "Não forma compostos sob condições normais.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "Muito baixa (~0,000005%)",
        "justification": "Extremamente raro na Terra.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada (produzido em estrelas)",
        "justification": "Mais abundante no universo que na Terra.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica (~20,18 u)",
        "value": "Leve",
        "justification": "Próximo do flúor.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (gás Ne: 0,9002 g/L)",
        "value": "Muito leve",
        "justification": "Menor densidade entre os gases nobres, exceto o hélio.",
        "score": 1
      },
      {
        "id": 10,
        "label": "Raio atômico (~38 pm)",
        "value": "Muito pequeno",
        "justification": "Um dos menores raios da tabela periódica.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "Nenhuma",
        "justification": "Não forma compostos iônicos ou covalentes.",
        "score": 0
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Gás isolante",
        "justification": "Não conduz eletricidade.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "Não se aplica (não forma ligações)",
        "justification": "Inexistente, pois é quimicamente inerte.",
        "score": 0
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Recebe nota mínima.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p⁶",
        "justification": "Subnível cheio, configuração estável.",
        "score": 40
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p⁶)",
        "value": "Estável e fechada",
        "justification": "Altamente didática e simples.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=10)",
        "value": "10",
        "justification": "Valor ainda baixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (10 no isótopo mais comum)",
        "value": "10",
        "justification": "Também valor baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos radioativos naturais.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Iluminação, sinalização, criogenia",
        "justification": "Uso técnico, mas restrito comparado a outros gases.",
        "score": 40
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído do ar por destilação fracionada",
        "justification": "Requer processos industriais para obtenção.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Emite luz laranja avermelhada em tubos",
        "justification": "Muito conhecido em publicidade luminosa.",
        "score": 70
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego neos (“novo”)",
        "justification": "Nome faz referência ao contexto histórico da descoberta.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Ramsay & Morris Travers (1898)",
        "justification": "Mesmo descobridores de outros gases nobres.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Final do século XIX — época da “caça aos gases nobres”.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–248,6 °C / 24,55 K / –415,5 °F",
        "justification": "Extremamente baixo.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–246,0 °C / 27,07 K / –410,8 °F",
        "justification": "Também muito baixo.",
        "score": 1
      }
    ]
  },
  "Na": {
    "number": 11,
    "symbol": "Na",
    "name": "Sódio",
    "heroName": "Natrium Spark",
    "heroDescription": "Um metal macio de coração explosivo. Natrium Spark é o condutor da eletricidade nervosa e o mestre das reações violentas com a água.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828933483-lercb-11__S_DIO.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "",
        "justification": "Muito reativo com água e ar; precisa de armazenamento seguro.",
        "score": 70
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "",
        "justification": "Pode ser poluente em excesso (salinização), mas ocorre naturalmente em oceanos.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "",
        "justification": "Excesso de íons Na⁺ na alimentação está ligado a hipertensão.",
        "score": 55
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "",
        "justification": "Essencial ao corpo humano (impulsos nervosos, equilíbrio osmótico) e para indústrias.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis (ligações)",
        "value": "",
        "justification": "Valência 1: forma apenas 1 ligação iônica.",
        "score": 20
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta terrestre)",
        "value": "",
        "justification": "Um dos elementos mais abundantes na crosta terrestre.",
        "score": 85
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "",
        "justification": "Abundância média em estrelas e nebulosas.",
        "score": 35
      },
      {
        "id": 8,
        "label": "Massa atômica (~22,99 u)",
        "value": "",
        "justification": "Leve, mas mais pesado que gases e hidrogênio.",
        "score": 25
      },
      {
        "id": 9,
        "label": "Densidade (~0,97 g/cm³)",
        "value": "",
        "justification": "Baixa densidade para um metal; flutua na água.",
        "score": 30
      },
      {
        "id": 10,
        "label": "Raio atômico (~186 pm)",
        "value": "",
        "justification": "Raio atômico grande, típico dos metais alcalinos.",
        "score": 80
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "",
        "justification": "Oxidação típica é +1 apenas.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "",
        "justification": "Excelente condutor elétrico.",
        "score": 90
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,93)",
        "value": "",
        "justification": "Baixíssima, como esperado em metais do grupo 1.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "",
        "justification": "Sólido metálico estável à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético (3s¹)",
        "value": "",
        "justification": "Subnível mais energético com 1 elétron de valência.",
        "score": 25
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p⁶ 3s¹)",
        "value": "",
        "justification": "Estrutura simples e didática.",
        "score": 40
      },
      {
        "id": 17,
        "label": "Nº de prótons e elétrons (Z=11)",
        "value": "",
        "justification": "Leve, com número baixo de prótons.",
        "score": 15
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (12 no isótopo mais comum)",
        "value": "",
        "justification": "Também leve nesse aspecto.",
        "score": 15
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "",
        "justification": "Estável; nenhum isótopo natural é radioativo.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "",
        "justification": "Muito usado em diferentes áreas: química, alimentação, iluminação, medicina.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "",
        "justification": "Extraído por eletrólise do NaCl (sal comum).",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "",
        "justification": "Reage violentamente com água; chama amarela intensa; corta-se com faca.",
        "score": 70
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "",
        "justification": "Deriva do latim natrium (soda), origem do símbolo Na.",
        "score": 60
      },
      {
        "id": 24,
        "label": "Descobridor com relevância aos elementos restantes",
        "value": "",
        "justification": "Descoberto por Humphry Davy, um dos principais nomes da química experimental.",
        "score": 60
      },
      {
        "id": 25,
        "label": "Ano de descoberta (1807)",
        "value": "",
        "justification": "Um dos primeiros elementos isolados por eletrólise; marco histórico na ciência.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão (97,8 °C / 371 K / 208 °F)",
        "value": "",
        "justification": "Baixo comparado a outros metais; derrete facilmente.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (883 °C / 1156 K / 1621 °F)",
        "value": "",
        "justification": "Médio-baixo para um metal; ferve em temperaturas bem menores que ferro ou cobre.",
        "score": 50
      }
    ]
  },
  "Mg": {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnésio",
    "heroName": "Magnesium Flare",
    "heroDescription": "O iluminador da vida e o mestre da força estrutural leve. Magnesium Flare brilha com uma luz ofuscante e é o motor químico da fotossíntese.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777828971424-odkrt-12_magnegio.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com água quente; inflamável em pó",
        "justification": "Risco moderado de combustão e corrosão.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial a plantas e solo, mas pode poluir",
        "justification": "Utilidade biológica elevada, mas mineração pode causar impacto.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Seguro em pequenas quantidades; em excesso pode afetar rins",
        "justification": "Baixa toxicidade, mas excesso deve ser evitado.",
        "score": 75
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Indústria leve, construção, saúde, fotoflash",
        "justification": "Muito versátil, com alta utilidade prática.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Forma 2 ligações principais (+2)",
        "justification": "Baixa variedade de estados de oxidação.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza (crosta)",
        "value": "2,1% da crosta terrestre (~8º mais abundante)",
        "justification": "Muito comum, fácil de extrair.",
        "score": 90
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Alta (estrela, planetas)",
        "justification": "Formado em processos estelares, comum em meteoritos.",
        "score": 85
      },
      {
        "id": 8,
        "label": "Massa atômica (~24,31 u)",
        "value": "Leve",
        "justification": "Massa ainda baixa, favorece aplicações estruturais.",
        "score": 15
      },
      {
        "id": 9,
        "label": "Densidade (1,738 g/cm³)",
        "value": "Muito leve (menor que alumínio)",
        "justification": "Ideal para ligas leves.",
        "score": 20
      },
      {
        "id": 10,
        "label": "Raio atômico (~150 pm)",
        "value": "Médio",
        "justification": "Tamanho compatível com metais alcalino-terrosos.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "2",
        "justification": "Somente um estado de oxidação.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta (metal)",
        "justification": "Excelente condutor para seu peso.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,31)",
        "value": "Baixa",
        "justification": "Típica de metais.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estado ideal para aplicações estruturais.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3s²",
        "justification": "Orbital característico dos metais do grupo 2A.",
        "score": 40
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica (1s² 2s² 2p⁶ 3s²)",
        "value": "Simples e didática",
        "justification": "Fácil de entender no ensino de blocos s e grupos.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=12)",
        "value": "12",
        "justification": "Ainda relativamente leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (12 no isótopo mais comum)",
        "value": "12",
        "justification": "Valor baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Construção, saúde, foguetes, química",
        "justification": "Muito utilizado em ligas metálicas e medicina.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Magnesita, dolomita, água do mar",
        "justification": "Extraído com relativa facilidade de fontes naturais.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Brilho intenso na queima, essencial em clorofila",
        "justification": "Biologicamente crucial e visualmente marcante.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Da região da Magnésia (Grécia)",
        "justification": "Nome geográfico, histórico.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Joseph Black (1755, identificado)",
        "justification": "Importante figura da química clássica.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1755",
        "justification": "Século XVIII – início da química moderna.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "650 °C / 923 K / 1202 °F",
        "justification": "Ponto relativamente alto para metal leve.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1091 °C / 1364 K / 1994 °F",
        "justification": "Suficientemente alto para uso industrial.",
        "score": 65
      }
    ]
  },
  "Al": {
    "number": 13,
    "symbol": "Al",
    "name": "Alumínio",
    "heroName": "Comandante Alumínio",
    "heroDescription": "O metal da leveza e da versatilidade. Comandante Alumínio é o mestre da infraestrutura moderna, capaz de se moldar a qualquer desafio sem nunca perder sua resistência, protegendo o progresso com sua barreira de óxido auto-regenerativa.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777986832507-jbsij-13_aluminio.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com ácidos, pode corroer, forma óxido",
        "justification": "Risco moderado de corrosão, mas com óxido protetor.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Reciclável, mas mineração impacta",
        "justification": "Alto custo ambiental da bauxita, compensado pela reciclagem.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas suspeitas em altas exposições",
        "justification": "Exposição prolongada em certas formas ainda é debatida.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas leves, embalagens, transporte, construção",
        "justification": "Altíssima versatilidade e utilidade prática.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação +3 (estado fixo)",
        "justification": "Baixa variedade em compostos.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "8,23% da crosta (mais abundante entre metais)",
        "justification": "Extremamente abundante e acessível.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Formado em estrelas, moderadamente comum.",
        "score": 60
      },
      {
        "id": 8,
        "label": "Massa atômica (~26,98 u)",
        "value": "Leve",
        "justification": "Um dos metais leves.",
        "score": 10
      },
      {
        "id": 9,
        "label": "Densidade (2,7 g/cm³)",
        "value": "Baixa densidade metálica",
        "justification": "Ideal para aplicações leves.",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~143 pm)",
        "value": "Médio",
        "justification": "Compatível com ligações metálicas.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Pouca variação.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Excelente condutor para seu peso.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,61)",
        "value": "Baixa-média",
        "justification": "Típico de metal.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Ótimo para aplicações estruturais.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p¹",
        "justification": "Bloco p, grupo 13.",
        "score": 40
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p¹",
        "justification": "Didática e clara no ensino.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=13)",
        "value": "13",
        "justification": "Número atômico baixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (14 no isótopo comum)",
        "value": "14",
        "justification": "Ainda considerado leve.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Construção, aeronaves, alimentos",
        "justification": "Altíssimo uso global.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Bauxita",
        "justification": "Extração simples, mas exige energia.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Terceiro mais comum da crosta",
        "justification": "Surpreendente para um metal industrial.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim alumen (alúmen)",
        "justification": "Nome químico-histórico.",
        "score": 70
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Hans Christian Ørsted (1825)",
        "justification": "Descoberto tardiamente por sua difícil extração.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1825",
        "justification": "Parte da revolução do isolamento metálico.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "660,3 °C / 933,5 K / 1220,5 °F",
        "justification": "Ponto relativamente baixo para metal.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2470 °C / 2743 K / 4478 °F",
        "justification": "Alta resistência térmica.",
        "score": 75
      }
    ]
  },
  "Si": {
    "number": 14,
    "symbol": "Si",
    "name": "Silício",
    "heroName": "Cyber Si",
    "heroDescription": "O arquiteto da era digital. Cyber Si é a espinha dorsal de toda a tecnologia moderna, o mestre dos semicondutores que traduz eletricidade em pensamento binário.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Cyber%20Si%2C%20representing%20the%20chemical%20element%20Sil%C3%ADcio%20(Symbol%3A%20Si)%2C%20O%20arquiteto%20da%20era%20digital.%20Cyber%20Si%20%C3%A9%20a%20espinha%20dorsal%20de%20toda%20a%20tecnologia%20moderna%2C%20o%20mestre%20dos%20semicondutores%20que%20traduz%20eletricidade%20em%20pensamento%20bin%C3%A1rio..%20Style%3A%20glowing%20symbol%20Si%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Frágil na forma pura, oxida facilmente, quebra como vidro",
        "justification": "Quebra fácil em chips; limitado como material estrutural.",
        "score": 35
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Muito abundante, mas poeira de sílica é tóxica",
        "justification": "Risco ocupacional em mineração, mas muito útil e reciclável.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Seguro como mineral sólido; forma amorfa pode causar silicose",
        "justification": "Inalado pode causar doenças pulmonares.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Base da eletrônica, vidro, cimento, nanotecnologia",
        "justification": "Elemento essencial na sociedade moderna.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Até 4 ligações (hibridação sp³)",
        "justification": "Alta versatilidade para formar compostos complexos.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "27,7% da crosta terrestre (2º mais abundante)",
        "justification": "Extremamente comum em minerais como quartzo e areia.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Mais abundante que muitos elementos pesados.",
        "score": 60
      },
      {
        "id": 8,
        "label": "Massa atômica (~28,09 u)",
        "value": "Média",
        "justification": "Massa atômica dentro da média.",
        "score": 20
      },
      {
        "id": 9,
        "label": "Densidade (2,33 g/cm³)",
        "value": "Leve para um sólido cristalino",
        "justification": "Menor densidade que metais, mas mais que gases nobres.",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~111 pm)",
        "value": "Médio",
        "justification": "Valor típico do grupo 14.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "–4 a +4",
        "justification": "Alta variedade e estabilidade de estados de oxidação.",
        "score": 80
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semicondutor",
        "justification": "Ideal para circuitos eletrônicos.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,90)",
        "value": "Média",
        "justification": "Transição entre metais e não metais.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Sólido estável com estrutura cristalina forte.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p²",
        "justification": "Parte do bloco p.",
        "score": 45
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p²",
        "justification": "Didática e simétrica.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=14)",
        "value": "14",
        "justification": "Ainda entre os elementos leves.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (14 mais comum)",
        "value": "14",
        "justification": "Valor estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Computação, engenharia, energia solar, construção",
        "justification": "Um dos elementos mais úteis da atualidade.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Quartzo, areia, sílica",
        "justification": "Abundante e de fácil extração.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "É a “base dos chips”, centro da revolução digital",
        "justification": "Insuperável em importância tecnológica.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim silex (pedra dura)",
        "justification": "Nome descritivo e adequado.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Humphry Davy (identificado), Jöns Berzelius (isolado, 1824)",
        "justification": "Pioneiros da química moderna.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1824",
        "justification": "Início do desenvolvimento da eletrônica.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1414 °C / 1687 K / 2577 °F",
        "justification": "Excelente resistência térmica.",
        "score": 80
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2900 °C / 3173 K / 5252 °F",
        "justification": "Alta estabilidade térmica.",
        "score": 85
      }
    ]
  },
  "P": {
    "number": 15,
    "symbol": "P",
    "name": "Fósforo",
    "heroName": "Phosphorus Spark",
    "heroDescription": "O portador da luz biológica, peça fundamental do código da vida e motor da energia celular.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777989733444-0qqq6-15_fosforo.mp4",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Forma branca é extremamente reativa e tóxica",
        "justification": "Alto risco em algumas formas alotrópicas (P branco).",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial para vida, mas causa eutrofização",
        "justification": "Fertilizantes com fósforo poluem águas e causam desequilíbrio ecológico.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Fósforo branco é venenoso; P vermelho é seguro",
        "justification": "Exposição controlada é segura, mas há riscos severos em formas específicas.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fertilizantes, DNA, fósforos, ATP",
        "justification": "Essencial à vida e com ampla aplicação industrial.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Até 5 ligações (ex.: PCl₅)",
        "justification": "Forma compostos com grande variedade estrutural.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (~0,1% na crosta)",
        "justification": "Relativamente comum, mas não tanto quanto Si, Al, etc.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Rara",
        "justification": "Um dos elementos biogênicos mais escassos fora da Terra.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~30,97 u)",
        "value": "Média",
        "justification": "Levemente mais pesado que o silício.",
        "score": 20
      },
      {
        "id": 9,
        "label": "Densidade (~1,82 a 2,34 g/cm³)",
        "value": "Moderada",
        "justification": "Depende do alótropo (vermelho, branco ou preto).",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~110 pm)",
        "value": "Médio",
        "justification": "Próximo ao silício.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "–3, +3, +5",
        "justification": "Alta diversidade de compostos.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Baixíssima (não metálico)",
        "justification": "Isolante ou semicondutor dependendo do alótropo.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,19)",
        "value": "Média",
        "justification": "Valor razoável para um não-metal.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estado estável para manuseio.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p³",
        "justification": "Configuração típica do grupo 15.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p³",
        "justification": "Simples, importante para ligação covalente.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=15)",
        "value": "15",
        "justification": "Valor ainda considerado leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (16 mais comum)",
        "value": "16",
        "justification": "Baixo valor.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo natural não radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fertilizantes, fósforos, defensivos, energia celular (ATP)",
        "justification": "Essencial em processos biológicos e na indústria.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Fosforita, guano, minerais",
        "justification": "Encontrado em rochas sedimentares e excrementos fósseis.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Fósforo branco brilha no escuro, essencial no DNA e ATP",
        "justification": "Curioso tanto em química quanto em biologia.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego phôs (luz) + phoros (portador)",
        "justification": "\"Portador de luz\" — referência à luminescência do P branco.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Hennig Brand (1669)",
        "justification": "Primeiro elemento descoberto por método experimental (urina!).",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1669",
        "justification": "Descoberta lendária, antes da química moderna.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "44,2 °C / 317,4 K / 111,6 °F (fósforo branco)",
        "justification": "Funde em temperatura muito baixa para um sólido.",
        "score": 10
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "280,5 °C / 553,7 K / 536,9 °F (fósforo branco)",
        "justification": "Evapora a temperatura acessível em laboratório.",
        "score": 20
      }
    ]
  },
  "S": {
    "number": 16,
    "symbol": "S",
    "name": "Enxofre",
    "heroName": "Brimstone Lord",
    "heroDescription": "O mestre dos vulcões e das forjas terrestres. Brimstone Lord controla as profundezas da terra, usando o fogo e o enxofre para moldar a própria vida e a indústria química.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Brimstone%20Lord%2C%20representing%20the%20chemical%20element%20Enxofre%20(Symbol%3A%20S)%2C%20O%20mestre%20dos%20vulc%C3%B5es%20e%20das%20forjas%20terrestres.%20Brimstone%20Lord%20controla%20as%20profundezas%20da%20terra%2C%20usando%20o%20fogo%20e%20o%20enxofre%20para%20moldar%20a%20pr%C3%B3pria%20vida%20e%20a%20ind%C3%BAstria%20qu%C3%ADmica..%20Style%3A%20glowing%20symbol%20S%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Pode formar gases tóxicos como SO₂; inflamável",
        "justification": "Volátil e perigoso em altas temperaturas.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial a ecossistemas, mas contribui à chuva ácida",
        "justification": "Presente em proteínas e vulcões; poluente atmosférico.",
        "score": 55
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante em forma gasosa; sólido é seguro",
        "justification": "Gás é perigoso, mas forma sólida é estável.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Produção de ácido sulfúrico, remédios, agricultura",
        "justification": "Extremamente útil na indústria e na saúde.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "De 2 a 6 ligações possíveis",
        "justification": "Alta flexibilidade de ligação química.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (0,042% da crosta)",
        "justification": "Menos comum que P ou Si.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Alta (11º mais abundante)",
        "justification": "Produzido em estrelas massivas.",
        "score": 80
      },
      {
        "id": 8,
        "label": "Massa atômica (~32,07 u)",
        "value": "Média",
        "justification": "Peso ainda considerado leve.",
        "score": 20
      },
      {
        "id": 9,
        "label": "Densidade (2,07 g/cm³)",
        "value": "Moderada",
        "justification": "Comparável a outros não-metais sólidos.",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~104 pm)",
        "value": "Médio",
        "justification": "Compatível com o grupo 16.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "–2, +2, +4, +6",
        "justification": "Grande diversidade química.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito baixa",
        "justification": "Isolante.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,58)",
        "value": "Alta",
        "justification": "Alta afinidade eletrônica.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável, manuseável e comum na natureza.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p⁴",
        "justification": "Bloco p, grupo 16.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p⁴",
        "justification": "Relativamente simples e didática.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=16)",
        "value": "16",
        "justification": "Valor ainda entre os leves.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (16 mais comum)",
        "value": "16",
        "justification": "Valor estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Não radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fertilizantes, química fina, fármacos",
        "justification": "Indústria química fortemente dependente.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Vulcões, minas de enxofre, sulfetos",
        "justification": "Comum em regiões vulcânicas e minerais.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Elemento citado desde a antiguidade (alquimia)",
        "justification": "História rica e presente em tradições antigas.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim sulfur",
        "justification": "Nome antigo preservado.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Elemento usado por alquimistas e civilizações antigas.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Pré-histórico",
        "justification": "Nenhuma data específica, uso milenar.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "115,2 °C / 388,4 K / 239,4 °F",
        "justification": "Ponto de fusão baixo para um sólido.",
        "score": 20
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "444,6 °C / 717,8 K / 832,3 °F",
        "justification": "Ebulição relativamente baixa.",
        "score": 45
      }
    ]
  },
  "Cl": {
    "number": 17,
    "symbol": "Cl",
    "name": "Cloro",
    "heroName": "Chlorine Guard",
    "heroDescription": "O mestre da purificação e temido guerreiro gasoso, essencial para a higiene e a segurança da vida.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Chlorine%20Guard%2C%20representing%20the%20chemical%20element%20Cloro%20(Symbol%3A%20Cl)%2C%20O%20mestre%20da%20purifica%C3%A7%C3%A3o%20e%20temido%20guerreiro%20gasoso%2C%20essencial%20para%20a%20higiene%20e%20a%20seguran%C3%A7a%20da%20vida..%20Style%3A%20glowing%20symbol%20Cl%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente tóxico, corrosivo e reativo",
        "justification": "Gás perigoso e altamente oxidante.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Desinfetante útil, mas forma compostos poluentes (ex.: CFCs)",
        "justification": "Impacta a camada de ozônio; útil no tratamento de água.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante, causa asfixia em altas concentrações",
        "justification": "Perigoso mesmo em baixas doses se inalado.",
        "score": 30
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Desinfetante, PVC, fármacos, pesticidas",
        "justification": "Muito usado na indústria e saúde pública.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Geralmente 1, mas pode formar compostos com +1 a +7",
        "justification": "Apesar da preferência por –1, forma diversos compostos interhalogênicos.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Comum como cloreto de sódio (NaCl)",
        "justification": "Muito presente nos oceanos e sais minerais.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderadamente rara",
        "justification": "Baixa abundância cósmica.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica (~35,45 u)",
        "value": "Média",
        "justification": "Leve, mas não entre os mais leves.",
        "score": 20
      },
      {
        "id": 9,
        "label": "Densidade (gás a 0 °C: 3,2 g/L)",
        "value": "Alta para gás",
        "justification": "Gás denso e pesado comparado a outros.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~99 pm)",
        "value": "Médio",
        "justification": "Compatível com grupo 17.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "–1, +1, +3, +5, +7",
        "justification": "Grande variedade, especialmente em compostos inorgânicos.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Não conduz como gás ou sólido",
        "justification": "Isolante fora de soluções iônicas.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade (3,16)",
        "value": "Muito alta",
        "justification": "Um dos elementos mais eletronegativos.",
        "score": 90
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gases recebem nota mínima nesse critério.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p⁵",
        "justification": "Penúltimo do grupo 17 (halogênios).",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p⁵",
        "justification": "Bastante instrutiva para ligações químicas.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=17)",
        "value": "17",
        "justification": "Ainda leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (18 no isótopo mais comum)",
        "value": "18",
        "justification": "Baixo valor absoluto.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural é radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Indústria química, farmacêutica, saneamento",
        "justification": "Muito usado globalmente.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Água do mar, sais minerais",
        "justification": "Extração simples via eletrólise.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em armas químicas e desinfecção de piscinas",
        "justification": "Elemento com usos históricos controversos.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego chloros (“verde-pálido”)",
        "justification": "Nome descreve sua aparência.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Wilhelm Scheele (1774)",
        "justification": "Descoberto antes da confirmação de que era um elemento.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1774",
        "justification": "Um dos primeiros elementos gasosos isolados.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–101,5 °C / 171,6 K / –150,7 °F",
        "justification": "Extremamente volátil.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–34,0 °C / 239,1 K / –29,2 °F",
        "justification": "Gás mesmo em temperaturas muito baixas.",
        "score": 5
      }
    ]
  },
  "Ar": {
    "number": 18,
    "symbol": "Ar",
    "name": "Argônio",
    "heroName": "Argon Shield",
    "heroDescription": "O guardião da inércia e protetor invisível, capaz de envolver o mundo em um escudo de estabilidade absoluta.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Argon%20Shield%2C%20representing%20the%20chemical%20element%20Arg%C3%B4nio%20(Symbol%3A%20Ar)%2C%20O%20guardi%C3%A3o%20da%20in%C3%A9rcia%20e%20protetor%20invis%C3%ADvel%2C%20capaz%20de%20envolver%20o%20mundo%20em%20um%20escudo%20de%20estabilidade%20absoluta..%20Style%3A%20glowing%20symbol%20Ar%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Quimicamente inerte, pouco reativo",
        "justification": "Inatividade química é força e fraqueza, dependendo do uso.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Gás inerte, não tóxico, mas inativo",
        "justification": "Não polui, não interage com o ambiente — excelente estabilidade.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Não tóxico, mas asfixiante em ambientes fechados",
        "justification": "Seguro, mas em excesso pode deslocar o oxigênio.",
        "score": 80
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em soldagem, iluminação, preservação",
        "justification": "Aplicações importantes, mas limitadas pela inércia química.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "0 (gás nobre, extremamente estável)",
        "justification": "Virtualmente nenhuma formação de compostos.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,93% da atmosfera",
        "justification": "Abundante no ar, fácil de obter por destilação fracionada.",
        "score": 70
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Alta entre gases nobres",
        "justification": "Formação em estrelas via captura de nêutrons.",
        "score": 65
      },
      {
        "id": 8,
        "label": "Massa atômica (~39,95 u)",
        "value": "Média",
        "justification": "Elemento gasoso moderadamente pesado.",
        "score": 25
      },
      {
        "id": 9,
        "label": "Densidade (1,78 g/L)",
        "value": "Alta entre gases",
        "justification": "Gás mais denso que o ar.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~71 pm)",
        "value": "Pequeno",
        "justification": "Valor pequeno entre os gases nobres.",
        "score": 20
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "0",
        "justification": "Praticamente não forma compostos.",
        "score": 1
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Não conduz",
        "justification": "Isolante em todas as formas.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "Não aplicável (não forma ligações)",
        "justification": "Gás nobre estável, sem afinidade eletrônica.",
        "score": 1
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Como todos os gases, nota mínima nesse critério.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p⁶",
        "justification": "Camada completa — estabilidade eletrônica.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p⁶",
        "justification": "Muito clara e estável.",
        "score": 85
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=18)",
        "value": "18",
        "justification": "Levemente mais pesado que o Cloro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (22 no isótopo mais comum)",
        "value": "22",
        "justification": "Valor leve, mas maior que o Cloro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Soldagem, lâmpadas, atmosfera inerte",
        "justification": "Uso importante, mas não tão amplo.",
        "score": 70
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído do ar",
        "justification": "Fonte extremamente abundante e acessível.",
        "score": 95
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Gás nobre que representa ~1% do ar",
        "justification": "Pouco reativo, mas presente e relevante.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego argos (“inativo”)",
        "justification": "Nome muito apropriado ao seu comportamento.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Lord Rayleigh e William Ramsay (1894)",
        "justification": "Parte do grupo de descobridores dos gases nobres.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1894",
        "justification": "Descoberta crucial para entender a tabela periódica.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–189,3 °C / 83,8 K / –308,7 °F",
        "justification": "Extremamente volátil.",
        "score": 2
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–185,8 °C / 87,3 K / –302,4 °F",
        "justification": "Evapora muito facilmente.",
        "score": 5
      }
    ]
  },
  "K": {
    "number": 19,
    "symbol": "K",
    "name": "Potássio",
    "heroName": "Potassium Pulse",
    "heroDescription": "O condutor da energia vital e mestre dos sinais elétricos, essencial para o ritmo do coração e da vida.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Potassium%20Pulse%2C%20representing%20the%20chemical%20element%20Pot%C3%A1ssio%20(Symbol%3A%20K)%2C%20O%20condutor%20da%20energia%20vital%20e%20mestre%20dos%20sinais%20el%C3%A9tricos%2C%20essencial%20para%20o%20ritmo%20do%20cora%C3%A7%C3%A3o%20e%20da%20vida..%20Style%3A%20glowing%20symbol%20K%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente reativo, explode com água",
        "justification": "Precisa de armazenamento especial (óleo mineral).",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial para vida, mas perigoso isolado",
        "justification": "Nutriente vital, mas reativo na forma metálica.",
        "score": 65
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Reações violentas com água, mas não tóxico em íons",
        "justification": "K⁺ é vital para o corpo; K⁰ é perigoso.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fertilizantes, saúde, química orgânica",
        "justification": "Indispensável na agricultura e metabolismo.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1 (forma íon K⁺)",
        "justification": "Baixa complexidade de ligação.",
        "score": 10
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito comum em minerais e sais",
        "justification": "Abundante no solo e no corpo humano.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Não raro, mas abaixo dos elementos mais leves.",
        "score": 45
      },
      {
        "id": 8,
        "label": "Massa atômica (~39,10 u)",
        "value": "Leve-médio",
        "justification": "Valor moderado.",
        "score": 25
      },
      {
        "id": 9,
        "label": "Densidade (0,89 g/cm³)",
        "value": "Muito baixa",
        "justification": "Um dos metais mais leves.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~243 pm)",
        "value": "Muito grande",
        "justification": "Um dos maiores entre os elementos.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "1",
        "justification": "Estado único e estável.",
        "score": 10
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito alta",
        "justification": "Excelente condutor no estado metálico.",
        "score": 95
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,82)",
        "value": "Muito baixa",
        "justification": "Facilmente doa elétrons.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Condição estável para manipulação controlada.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4s¹",
        "justification": "Metais alcalinos – bloco s.",
        "score": 45
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 4s¹",
        "justification": "Muito clara e didática.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=19)",
        "value": "19",
        "justification": "Leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (20 no isótopo mais comum)",
        "value": "20",
        "justification": "Valor baixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (com isótopo K-40 levemente radioativo)",
        "justification": "K-40 é levemente radioativo, mas estável para a vida.",
        "score": 80
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Agricultura, nutrição, química",
        "justification": "Altamente aplicado em áreas diversas.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais como silvita e carnalita",
        "justification": "Fácil de obter em mineração.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Vital para impulsos nervosos e batimentos cardíacos",
        "justification": "Papel biológico essencial.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do inglês \"potash\" (cinza de pote)",
        "justification": "Nome curioso baseado na origem histórica.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Humphry Davy (1807)",
        "justification": "Descoberto por eletrólise.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1807",
        "justification": "Um dos primeiros metais isolados eletricamente.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "63,5 °C / 336,6 K / 146,3 °F",
        "justification": "Funde facilmente — risco de derretimento.",
        "score": 10
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "759 °C / 1032 K / 1398 °F",
        "justification": "Relativamente volátil para um metal.",
        "score": 55
      }
    ]
  },
  "Ca": {
    "number": 20,
    "symbol": "Ca",
    "name": "Cálcio",
    "heroName": "Calcium Titan",
    "heroDescription": "A fortaleza da vida e arquiteto da estrutura biológica, mantendo o equilíbrio e a solidez do corpo humano.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Calcium%20Titan%2C%20representing%20the%20chemical%20element%20C%C3%A1lcio%20(Symbol%3A%20Ca)%2C%20A%20fortaleza%20da%20vida%20e%20arquiteto%20da%20estrutura%20biol%C3%B3gica%2C%20mantendo%20o%20equil%C3%ADbrio%20e%20a%20solidez%20do%20corpo%20humano..%20Style%3A%20glowing%20symbol%20Ca%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com água, oxidante ao ar",
        "justification": "Reativo, embora menos perigoso que o potássio.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial aos seres vivos e ecossistemas",
        "justification": "Forma ossos, conchas e minerais com baixo impacto ambiental.",
        "score": 85
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Seguro em compostos, mas metálico pode causar queimaduras",
        "justification": "Cálcio iônico (Ca²⁺) é vital; metálico exige cuidado.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ossos, dentes, concreto, agricultura",
        "justification": "Amplamente utilizado e essencial à vida.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2 (forma Ca²⁺)",
        "justification": "Ligações iônicas simples, baixa diversidade.",
        "score": 20
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "5º elemento mais abundante da crosta",
        "justification": "Muito comum, fácil de encontrar.",
        "score": 95
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderadamente abundante",
        "justification": "Presente em estrelas, mas menos que H, He, C, O.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica (~40,08 u)",
        "value": "Leve-médio",
        "justification": "Próximo ao potássio em massa.",
        "score": 25
      },
      {
        "id": 9,
        "label": "Densidade (1,55 g/cm³)",
        "value": "Baixa",
        "justification": "Leve para um metal.",
        "score": 15
      },
      {
        "id": 10,
        "label": "Raio atômico (~197 pm)",
        "value": "Grande",
        "justification": "Valor elevado entre os metais.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "2",
        "justification": "Um único estado estável.",
        "score": 15
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Bom condutor em estado metálico.",
        "score": 90
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,00)",
        "value": "Muito baixa",
        "justification": "Muito eletropositivo.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável e fácil de manusear.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4s²",
        "justification": "Metais alcalino-terrosos – bloco s.",
        "score": 45
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 4s²",
        "justification": "Simples e didática.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=20)",
        "value": "20",
        "justification": "Leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (20 mais comum)",
        "value": "20",
        "justification": "Valor leve e estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo natural não radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Construção civil, medicina, nutrição",
        "justification": "Usos diversos e essenciais.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Calcário, mármore, gesso, dolomita",
        "justification": "Abundante e fácil de extrair.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Constitui 99% do esqueleto humano",
        "justification": "Extremamente importante biologicamente.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim calx (cal, pedra)",
        "justification": "Nome com origem prática e direta.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Humphry Davy (1808)",
        "justification": "Descoberto por eletrólise, como K e Na.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1808",
        "justification": "Parte das primeiras descobertas eletroquímicas.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "842 °C / 1115 K / 1547,6 °F",
        "justification": "Resistente ao calor.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1484 °C / 1757 K / 2703,2 °F",
        "justification": "Muito estável termicamente.",
        "score": 80
      }
    ]
  },
  "Sc": {
    "number": 21,
    "symbol": "Sc",
    "name": "Escândio",
    "heroName": "Scandium Wing",
    "heroDescription": "O pioneiro dos metais de transição, um herói leve e resistente que domina os céus com ligas aeroespaciais avançadas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Scandium%20Wing%2C%20representing%20the%20chemical%20element%20Esc%C3%A2ndio%20(Symbol%3A%20Sc)%2C%20O%20pioneiro%20dos%20metais%20de%20transi%C3%A7%C3%A3o%2C%20um%20her%C3%B3i%20leve%20e%20resistente%20que%20domina%20os%20c%C3%A9us%20com%20ligas%20aeroespaciais%20avan%C3%A7adas..%20Style%3A%20glowing%20symbol%20Sc%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Raro, pouco abundante, manuseio difícil",
        "justification": "Frágil economicamente, pouco acessível.",
        "score": 35
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixo impacto ambiental, mas mineração complexa",
        "justification": "Não tóxico, mas mineração gera resíduos.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas compostos podem ser irritantes",
        "justification": "Relativamente seguro com precauções industriais.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas leves, lasers, LEDs, indústria aeroespacial",
        "justification": "Aplicações de ponta e tecnológicas.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado +3, forma complexos",
        "justification": "Forma compostos estáveis em meio aquoso.",
        "score": 55
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "33º na crosta (~22 ppm)",
        "justification": "Considerado elemento raro.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixíssima",
        "justification": "Produzido em supernovas, mas pouco prevalente.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~44,96 u)",
        "value": "Médio",
        "justification": "Um dos mais leves entre os metais de transição.",
        "score": 30
      },
      {
        "id": 9,
        "label": "Densidade (2,99 g/cm³)",
        "value": "Leve para metal",
        "justification": "A leveza é uma vantagem estrutural.",
        "score": 35
      },
      {
        "id": 10,
        "label": "Raio atômico (~162 pm)",
        "value": "Médio a grande",
        "justification": "Compatível com outros metais do grupo 3.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (único estado estável)",
        "justification": "Sem múltiplos estados comuns.",
        "score": 15
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Condutor razoável.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,36)",
        "value": "Baixa",
        "justification": "Tendência a doar elétrons.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável para manuseio.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d¹ 4s²",
        "justification": "Início do bloco d – transição clara.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹ 4s²",
        "justification": "Simples e ilustrativa da transição.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=21)",
        "value": "21",
        "justification": "Leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (24 no isótopo mais comum)",
        "value": "24",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos radioativos naturais.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Indústria aeroespacial, LEDs, cerâmicas",
        "justification": "Promissor, mas ainda em expansão.",
        "score": 75
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Escandinávia (descoberta), minerais como tortevita",
        "justification": "Raro e geograficamente limitado.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em refletores de alto desempenho",
        "justification": "Valoroso em aplicações científicas e militares.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Da Escandinávia",
        "justification": "Nome geográfico claro.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Lars Fredrik Nilson (1879)",
        "justification": "Parte das descobertas tardias da Tabela Periódica.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1879",
        "justification": "Descoberta importante para os metais de transição.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1541 °C / 1814 K / 2805,8 °F",
        "justification": "Muito resistente ao calor.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2836 °C / 3109 K / 5136,8 °F",
        "justification": "Altíssimo — ideal para ligas de alta temperatura.",
        "score": 95
      }
    ]
  },
  "Ti": {
    "number": 22,
    "symbol": "Ti",
    "name": "Titânio",
    "heroName": "Titanium Shield",
    "heroDescription": "O indestrutível guerreiro de prata, mestre da resistência e compatibilidade biológica, o metal dos deuses modernos.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Titanium%20Shield%2C%20representing%20the%20chemical%20element%20Tit%C3%A2nio%20(Symbol%3A%20Ti)%2C%20O%20indestrut%C3%ADvel%20guerreiro%20de%20prata%2C%20mestre%20da%20resist%C3%AAncia%20e%20compatibilidade%20biol%C3%B3gica%2C%20o%20metal%20dos%20deuses%20modernos..%20Style%3A%20glowing%20symbol%20Ti%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Difícil de extrair, requer temperatura elevada",
        "justification": "Processo de obtenção industrialmente complexo.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Biocompatível, mas mineração pode causar impactos",
        "justification": "Altamente estável, mas extração gera resíduos.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Seguro; utilizado em implantes e próteses",
        "justification": "Altamente biocompatível, atóxico.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas leves, próteses, aeroespacial, pigmentos",
        "justification": "Versátil e com aplicações de alto valor.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +2, +3, +4 (geralmente +4)",
        "justification": "Boa variedade de compostos de coordenação.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "9º elemento mais abundante da crosta (~0,6%)",
        "justification": "Muito comum, especialmente em minerais como rutilo.",
        "score": 90
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Média",
        "justification": "Presente, mas abaixo dos principais elementos estruturais.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica (~47,87 u)",
        "value": "Médio",
        "justification": "Considerado leve entre metais de transição.",
        "score": 30
      },
      {
        "id": 9,
        "label": "Densidade (4,51 g/cm³)",
        "value": "Baixa para um metal estrutural",
        "justification": "Excelente relação resistência/peso.",
        "score": 40
      },
      {
        "id": 10,
        "label": "Raio atômico (~147 pm)",
        "value": "Médio",
        "justification": "Compatível com grupo 4.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 a +4 (principal: +4)",
        "justification": "Moderada flexibilidade química.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Condutor razoável, não se destaca.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,54)",
        "value": "Baixa a moderada",
        "justification": "Pouco eletronegativo.",
        "score": 25
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Muito estável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d² 4s²",
        "justification": "Bloco d em início.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d² 4s²",
        "justification": "Boa referência para ensino de metais de transição.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=22)",
        "value": "22",
        "justification": "Ainda considerado leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (26 no isótopo mais comum)",
        "value": "5",
        "justification": "Estável, mas leve.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Engenharia, medicina, pigmentos",
        "justification": "Muito versátil.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais: rutilo, ilmenita",
        "justification": "Fontes amplamente distribuídas.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Utilizado na Estação Espacial e próteses humanas",
        "justification": "Elemento de alta tecnologia.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Titãs da mitologia grega",
        "justification": "Nome poderoso e simbólico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Gregor (1791); isolado por Berzelius",
        "justification": "Descoberta clássica no fim do século XVIII.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1791",
        "justification": "Uma das primeiras descobertas do grupo dos metais de transição.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1668 °C / 1941 K / 3034,4 °F",
        "justification": "Extremamente resistente.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3287 °C / 3560 K / 5949 °F",
        "justification": "Um dos mais altos da Tabela Periódica.",
        "score": 100
      }
    ]
  },
  "V": {
    "number": 23,
    "symbol": "V",
    "name": "Vanádio",
    "heroName": "Vanadium Vanguard",
    "heroDescription": "O mestre das cores e da resistência mecânica, um herói versátil que fortalece as estruturas mais profundas do mundo moderno.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Vanadium%20Vanguard%2C%20representing%20the%20chemical%20element%20Van%C3%A1dio%20(Symbol%3A%20V)%2C%20O%20mestre%20das%20cores%20e%20da%20resist%C3%AAncia%20mec%C3%A2nica%2C%20um%20her%C3%B3i%20vers%C3%A1til%20que%20fortalece%20as%20estruturas%20mais%20profundas%20do%20mundo%20moderno..%20Style%3A%20glowing%20symbol%20V%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Pode formar compostos tóxicos, difícil purificação",
        "justification": "Riscos no manuseio químico e produção.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Alguns compostos são poluentes",
        "justification": "Impacto moderado dependendo da forma.",
        "score": 55
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Compostos podem ser tóxicos e carcinogênicos",
        "justification": "Requer controle industrial rigoroso.",
        "score": 35
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas metálicas, baterias, pigmentos",
        "justification": "Aplicações industriais e energéticas de alta relevância.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações de +2 a +5",
        "justification": "Grande variedade de compostos de coordenação.",
        "score": 80
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente comum (~160 ppm)",
        "justification": "Encontrado em minerais como vanadinita.",
        "score": 65
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Produzido em supernovas, pouco comum.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica (~50,94 u)",
        "value": "Médio",
        "justification": "Um pouco acima do titânio.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (6,0 g/cm³)",
        "value": "Moderada para metais de transição",
        "justification": "Não é nem leve, nem muito denso.",
        "score": 45
      },
      {
        "id": 10,
        "label": "Raio atômico (~134 pm)",
        "value": "Médio",
        "justification": "Típico para a posição no grupo 5.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "14",
        "justification": "Grande variedade — versatilidade química.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Usado em ligas condutoras.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,63)",
        "value": "Média para metais",
        "justification": "Mais elevado que Ti e Sc.",
        "score": 35
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável para manuseio.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d³ 4s²",
        "justification": "Bloco d bem representado.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d³ 4s²",
        "justification": "Boa para estudos de metais de transição.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=23)",
        "value": "23",
        "justification": "Ainda leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (28 no isótopo mais comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas de aço, catálise, baterias redox",
        "justification": "Importante na indústria e energia.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais: vanadinita, patronita",
        "justification": "Encontrado principalmente na América do Sul e China.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em aço de espadas samurais e baterias modernas",
        "justification": "História e futuro tecnológico.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Vanadis – deusa nórdica (beleza das cores dos compostos)",
        "justification": "Nome simbólico e culturalmente rico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Andrés Manuel del Río (1801)",
        "justification": "Importante químico mexicano.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1801",
        "justification": "Descoberta anterior ao titânio, mas isolado depois.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1910 °C / 2183 K / 3470 °F",
        "justification": "Alta resistência térmica.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3407 °C / 3680 K / 6165 °F",
        "justification": "Extremamente alto — estabilidade térmica superior.",
        "score": 100
      }
    ]
  },
  "Cr": {
    "number": 24,
    "symbol": "Cr",
    "name": "Cromo",
    "heroName": "Chrome Blade",
    "heroDescription": "O mestre do brilho e da proteção, um herói inoxidável que confere beleza e resistência eterna a tudo o que toca.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Chrome%20Blade%2C%20representing%20the%20chemical%20element%20Cromo%20(Symbol%3A%20Cr)%2C%20O%20mestre%20do%20brilho%20e%20da%20prote%C3%A7%C3%A3o%2C%20um%20her%C3%B3i%20inoxid%C3%A1vel%20que%20confere%20beleza%20e%20resist%C3%AAncia%20eterna%20a%20tudo%20o%20que%20toca..%20Style%3A%20glowing%20symbol%20Cr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Compostos hexavalentes tóxicos e cancerígenos",
        "justification": "Exige controle ambiental rigoroso.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Compostos poluentes, mas resistente à corrosão",
        "justification": "Benefícios estruturais com riscos tóxicos.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Cr⁶⁺ é tóxico, Cr³⁺ é essencial",
        "justification": "Altamente dependente da forma química.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Aço inoxidável, pigmentos, galvanoplastia",
        "justification": "Industrialmente indispensável.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2, +3, +6 (e +1, +4)",
        "justification": "Alta diversidade de compostos.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (~100 ppm na crosta)",
        "justification": "Encontrado principalmente em cromita.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Presente em estrelas, mas pouco comum.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~51,996 u)",
        "value": "Médio",
        "justification": "Similar ao vanádio.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (7,19 g/cm³)",
        "value": "Moderada",
        "justification": "Denso, mas não extremo.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~128 pm)",
        "value": "Médio",
        "justification": "Padrão entre metais de transição.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1 a +6 (mais comuns: +2, +3, +6)",
        "justification": "Um dos elementos com mais estados estáveis.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Útil em ligas condutoras.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,66)",
        "value": "Média",
        "justification": "Tendência intermediária de doação de elétrons.",
        "score": 35
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável e seguro para manuseio.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁵ 4s¹",
        "justification": "Configuração estável do tipo semipreenchido.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁵ 4s¹",
        "justification": "Configuração especial e educativa.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=24)",
        "value": "24",
        "justification": "Ainda considerado leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (28 no isótopo mais comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Indústria metalúrgica, química e estética",
        "justification": "Amplamente utilizado.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Cromita, África do Sul, Cazaquistão",
        "justification": "Fontes conhecidas e ativas.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Dá cor verde às esmeraldas; usado em tintas e revestimentos",
        "justification": "Curiosidades estéticas e industriais.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego chroma (cor)",
        "justification": "Nome muito representativo.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Louis Nicolas Vauquelin (1797)",
        "justification": "Contribuição histórica à química.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1797",
        "justification": "Descoberto em plena revolução científica.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1907 °C / 2180 K / 3464,6 °F",
        "justification": "Elevado, excelente para materiais de alta resistência.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2671 °C / 2944 K / 4840 °F",
        "justification": "Muito alto — ideal para aplicações térmicas.",
        "score": 90
      }
    ]
  },
  "Mn": {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganês",
    "heroName": "Manganese Forge",
    "heroDescription": "O arquiteto da liga inquebrável, um herói que transforma o ferro comum em aço supremo através da força e do sacrifício químico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Manganese%20Forge%2C%20representing%20the%20chemical%20element%20Mangan%C3%AAs%20(Symbol%3A%20Mn)%2C%20O%20arquiteto%20da%20liga%20inquebr%C3%A1vel%2C%20um%20her%C3%B3i%20que%20transforma%20o%20ferro%20comum%20em%20a%C3%A7o%20supremo%20atrav%C3%A9s%20da%20for%C3%A7a%20e%20do%20sacrif%C3%ADcio%20qu%C3%ADmico..%20Style%3A%20glowing%20symbol%20Mn%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida facilmente, instável ao ar",
        "justification": "Fácil oxidação, forma pós-exposição quebradiça.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em pequenas doses, tóxico em excesso",
        "justification": "Nutriente, mas com risco tóxico.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Neurotóxico em excesso, risco ocupacional",
        "justification": "Exposição prolongada pode causar distúrbios neurológicos.",
        "score": 30
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas metálicas, fertilizantes, enzimas",
        "justification": "Utilidade variada na indústria e biologia.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2, +3, +4, +6, +7",
        "justification": "Um dos elementos com mais estados de oxidação úteis.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Comum (~0,1% da crosta terrestre)",
        "justification": "Presente em minérios como pirolusita.",
        "score": 70
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderadamente rara",
        "justification": "Menos comum fora da Terra.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Massa atômica (~54,94 u)",
        "value": "Médio",
        "justification": "Próximo ao cromo e ferro.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (7,21 g/cm³)",
        "value": "Moderada",
        "justification": "Similar ao cromo.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~127 pm)",
        "value": "Médio",
        "justification": "Compatível com vizinhos do bloco d.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 a +7 (mais comuns +2, +4, +7)",
        "justification": "Extremamente versátil em química.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Não se destaca como condutor puro.",
        "score": 55
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,55)",
        "value": "Média",
        "justification": "Padrão para metais de transição.",
        "score": 35
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável e manuseável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁵ 4s²",
        "justification": "Configuração interessante para estudo.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁵ 4s²",
        "justification": "Valiosa para transição e oxidações múltiplas.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=25)",
        "value": "25",
        "justification": "Leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (30 no isótopo mais comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Produção de aço, fertilizantes, eletrônicos",
        "justification": "Relevante economicamente.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Pirolusita, minerais manganesíferos",
        "justification": "Encontrado amplamente em jazidas naturais.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Cor púrpura intensa no permanganato (KMnO₄)",
        "justification": "Visualmente marcante e usado em química didática.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim “magnesia nigra”",
        "justification": "Nome baseado na aparência mineral.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Ignoto (conhecido desde a antiguidade)",
        "justification": "Usado antes de ser isolado formalmente.",
        "score": 70
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1774 (isolado por Scheele e Gahn)",
        "justification": "Descoberto no século das grandes sistematizações químicas.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1246 °C / 1519 K / 2275 °F",
        "justification": "Boa resistência térmica.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2061 °C / 2334 K / 3741,8 °F",
        "justification": "Termicamente estável em diversas aplicações.",
        "score": 85
      }
    ]
  },
  "Fe": {
    "number": 26,
    "symbol": "Fe",
    "name": "Ferro",
    "heroName": "Iron Core",
    "heroDescription": "O pilar da civilização e mestre do magnetismo, um herói cujo sangue corre nas veias do planeta e de todos os seres vivos.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Iron%20Core%2C%20representing%20the%20chemical%20element%20Ferro%20(Symbol%3A%20Fe)%2C%20O%20pilar%20da%20civiliza%C3%A7%C3%A3o%20e%20mestre%20do%20magnetismo%2C%20um%20her%C3%B3i%20cujo%20sangue%20corre%20nas%20veias%20do%20planeta%20e%20de%20todos%20os%20seres%20vivos..%20Style%3A%20glowing%20symbol%20Fe%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida facilmente (ferrugem), magnético",
        "justification": "Vulnerável à corrosão em ambientes úmidos.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial, mas acúmulo pode ser poluente",
        "justification": "Muito útil, mas mineração intensa pode ser agressiva.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Essencial ao sangue, tóxico em excesso",
        "justification": "Nutriente vital, mas ferro livre pode causar danos celulares.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Estruturas metálicas, hemoglobina, engenharia",
        "justification": "Um dos elementos mais fundamentais da humanidade.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2, +3 principalmente",
        "justification": "Forma complexos em soluções aquosas.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "4º elemento mais abundante da crosta (~5%)",
        "justification": "Facilmente acessível.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito alta – 6º mais abundante",
        "justification": "Presente em estrelas e núcleos planetários.",
        "score": 95
      },
      {
        "id": 8,
        "label": "Massa atômica (~55,85 u)",
        "value": "Médio",
        "justification": "Próximo ao manganês.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (7,87 g/cm³)",
        "value": "Média/alta",
        "justification": "Sólido estrutural robusto.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Raio atômico (~126 pm)",
        "value": "Médio",
        "justification": "Padrão para metais de transição.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2, +3, (alguns +4, +6)",
        "justification": "Versátil em ambientes redox.",
        "score": 80
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor razoável.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,83)",
        "value": "Média",
        "justification": "Intermediária entre os metais.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável para uso geral.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁶ 4s²",
        "justification": "Transição visível entre subníveis.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁶ 4s²",
        "justification": "Usado didaticamente em química geral.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=26)",
        "value": "26",
        "justification": "Ponto médio na Tabela.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (30 no isótopo mais comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Todos os isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Construção civil, transporte, indústria pesada",
        "justification": "O elemento mais usado da humanidade.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Hematita, magnetita, siderita",
        "justification": "Minérios comuns e de fácil extração.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Principal constituinte do núcleo terrestre",
        "justification": "Essencial para o campo magnético da Terra.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim ferrum",
        "justification": "Raiz etimológica importante.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Pré-histórico – uso desde a antiguidade",
        "justification": "Utilizado há milênios antes de registros científicos.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Desconhecido (pré-histórico)",
        "justification": "Não há registro – uso desde a Idade do Ferro.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1538 °C / 1811 K / 2800,4 °F",
        "justification": "Alta resistência térmica.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2862 °C / 3135 K / 5183,6 °F",
        "justification": "Excelente para aplicações de alta temperatura.",
        "score": 95
      }
    ]
  },
  "Co": {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalto",
    "heroName": "Cobalt Blue",
    "heroDescription": "O mestre das superligas e das cores profundas, um herói essencial para as baterias do futuro e para a medicina nuclear.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Cobalt%20Blue%2C%20representing%20the%20chemical%20element%20Cobalto%20(Symbol%3A%20Co)%2C%20O%20mestre%20das%20superligas%20e%20das%20cores%20profundas%2C%20um%20her%C3%B3i%20essencial%20para%20as%20baterias%20do%20futuro%20e%20para%20a%20medicina%20nuclear..%20Style%3A%20glowing%20symbol%20Co%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Tóxico em excesso, risco ambiental em mineração",
        "justification": "Impactos socioambientais na extração (ex: RDC).",
        "score": 35
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em pequenas quantidades, tóxico acumulado",
        "justification": "Nutriente em animais, mas bioacumulativo.",
        "score": 55
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pode causar problemas pulmonares se inalado",
        "justification": "Requer controle ocupacional e ambiental.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Baterias, ligas, vitamina B₁₂, pigmentos",
        "justification": "Extremamente útil e valioso economicamente.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2, +3, (até +4)",
        "justification": "Boa flexibilidade para compostos de coordenação.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (~25 ppm na crosta)",
        "justification": "Menos comum, mas acessível.",
        "score": 55
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Formado em supernovas, mas não é comum.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica (~58,93 u)",
        "value": "Médio",
        "justification": "Leve para um metal de transição tardio.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (8,90 g/cm³)",
        "value": "Alta",
        "justification": "Denso e resistente.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~125 pm)",
        "value": "Médio",
        "justification": "Padrão da série de transição.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2, +3 (alguns compostos +4)",
        "justification": "Moderada diversidade.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Utilizado em ligas metálicas condutoras.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,88)",
        "value": "Média",
        "justification": "Um pouco mais alta entre os metais.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável para uso e transporte.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁷ 4s²",
        "justification": "Importante nos complexos de coordenação.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁷ 4s²",
        "justification": "Padrão didático para transição tardia.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=27)",
        "value": "27",
        "justification": "Entre os mais leves da transição.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (32 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Co-59); Co-60 é radioativo artificialmente",
        "justification": "Isótopo natural não é radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Baterias de íon-lítio, próteses, ligas",
        "justification": "Alta demanda em tecnologia atual.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Principalmente Congo, Canadá, Austrália",
        "justification": "Grandes jazidas com desafios geopolíticos.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Dá cor azul a cerâmicas e vidros",
        "justification": "Forte presença na arte e tecnologia.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "“Kobold” (espírito maligno), por enganar os mineradores",
        "justification": "Etimologia histórica e curiosa.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Georg Brandt (1735)",
        "justification": "Primeiro metal isolado desde a Antiguidade.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1735",
        "justification": "Muito anterior à sistematização moderna.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1495 °C / 1768 K / 2723 °F",
        "justification": "Boa estabilidade térmica.",
        "score": 85
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2927 °C / 3200 K / 5300,6 °F",
        "justification": "Excelente para aplicações em alta temperatura.",
        "score": 95
      }
    ]
  },
  "Ni": {
    "number": 28,
    "symbol": "Ni",
    "name": "Níquel",
    "heroName": "Nickel Plate",
    "heroDescription": "O mestre da durabilidade e das moedas do mundo, um herói versátil que protege o que é valioso contra a corrosão.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Nickel%20Plate%2C%20representing%20the%20chemical%20element%20N%C3%ADquel%20(Symbol%3A%20Ni)%2C%20O%20mestre%20da%20durabilidade%20e%20das%20moedas%20do%20mundo%2C%20um%20her%C3%B3i%20vers%C3%A1til%20que%20protege%20o%20que%20%C3%A9%20valioso%20contra%20a%20corros%C3%A3o..%20Style%3A%20glowing%20symbol%20Ni%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Pode causar alergia de contato (níquel metálico)",
        "justification": "Comum em joias baratas, dermatite de contato.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pode contaminar o solo, mas tem reciclagem eficiente",
        "justification": "Uso reciclável, mas com risco ambiental localizado.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Possível agente carcinogênico em certas formas",
        "justification": "Exposição ocupacional prolongada é preocupante.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas inoxidáveis, baterias, catalisadores",
        "justification": "Alta relevância tecnológica e estrutural.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2, +3 (até +4)",
        "justification": "Flexível para formar complexos metálicos.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,008% da crosta (~80 ppm)",
        "justification": "Presente em minerais como pentlandita.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Produzido em supernovas, encontrado em meteoritos.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica (~58,69 u)",
        "value": "Médio",
        "justification": "Próximo do cobalto.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (8,91 g/cm³)",
        "value": "Alta",
        "justification": "Alta densidade e robustez.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~124 pm)",
        "value": "Médio",
        "justification": "Valor típico dos metais de transição.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2, +3 (alguns compostos +4)",
        "justification": "Moderada diversidade de oxidações.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Usado em ligas condutoras e eletroquímica.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,91)",
        "value": "Moderada",
        "justification": "Um pouco acima do cobalto.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável para manipulação.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁸ 4s²",
        "justification": "Útil para aplicações químicas.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁸ 4s²",
        "justification": "Estrutura clássica para estudo em química.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=28)",
        "value": "28",
        "justification": "Ainda considerado leve.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (31 no isótopo comum)",
        "value": "5",
        "justification": "Isótopo natural estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Ni-58 é estável)",
        "justification": "Não possui isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Aço inox, moedas, baterias de íon-lítio, catalisadores",
        "justification": "Altamente presente no cotidiano e indústria.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Canadá, Indonésia, Austrália, Brasil",
        "justification": "Reservas importantes no mundo.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Muito comum em meteoritos e núcleo terrestre",
        "justification": "Forte ligação com origem planetária.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do alemão “kupfernickel” (duende do cobre)",
        "justification": "Nome curioso com fundo histórico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Axel Cronstedt (1751)",
        "justification": "Reconhecido cientista sueco.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1751",
        "justification": "Descoberto antes da Tabela Periódica.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1455 °C / 1728 K / 2651 °F",
        "justification": "Termicamente resistente.",
        "score": 80
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2913 °C / 3186 K / 5275 °F",
        "justification": "Excelente para aplicações térmicas industriais.",
        "score": 95
      }
    ]
  },
  "Cu": {
    "number": 29,
    "symbol": "Cu",
    "name": "Cobre",
    "heroName": "Copper Circuit",
    "heroDescription": "O condutor supremo e mestre da energia, um herói que conecta o mundo através de fios invisíveis de poder e comunicação.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Copper%20Circuit%2C%20representing%20the%20chemical%20element%20Cobre%20(Symbol%3A%20Cu)%2C%20O%20condutor%20supremo%20e%20mestre%20da%20energia%2C%20um%20her%C3%B3i%20que%20conecta%20o%20mundo%20atrav%C3%A9s%20de%20fios%20invis%C3%ADveis%20de%20poder%20e%20comunica%C3%A7%C3%A3o..%20Style%3A%20glowing%20symbol%20Cu%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida-se com facilidade, sofre corrosão em ambientes úmidos",
        "justification": "Forma pátina verde (carbonato), exigindo proteção.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial, mas pode causar contaminação em excesso",
        "justification": "Microelemento essencial, mas em altas doses é tóxico.",
        "score": 65
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas pode causar distúrbios se ingerido em excesso",
        "justification": "Bem tolerado biologicamente, mas perigoso em excesso.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fios elétricos, ligas, enzimas, aquecimento",
        "justification": "Extremamente útil e multifuncional.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +1, +2 (alguns compostos +3)",
        "justification": "Boa formação de complexos com aminas, ácidos, etc.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (60 ppm na crosta)",
        "justification": "Fonte abundante em minerais como calcopirita e malaquita.",
        "score": 65
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Presente em algumas estrelas e meteoritos.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica (~63,55 u)",
        "value": "Médio",
        "justification": "Um pouco mais pesado que o níquel.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (8,96 g/cm³)",
        "value": "Alta",
        "justification": "Denso e resistente.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~128 pm)",
        "value": "Médio",
        "justification": "Típico de metais do bloco d.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1, +2 (pouco comuns +3)",
        "justification": "Útil, mas limitado em diversidade de oxidação.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Excelente (2º melhor condutor metálico)",
        "justification": "Referência em condutividade elétrica e térmica.",
        "score": 100
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,90)",
        "value": "Média",
        "justification": "Capaz de atrair elétrons moderadamente.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Manipulável e seguro.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d¹⁰ 4s¹",
        "justification": "Configuração eletrônica única e estável.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s¹",
        "justification": "Estável e importante didaticamente.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=29)",
        "value": "29",
        "justification": "Leve ainda entre os metais de transição.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (35 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Cu-63, Cu-65)",
        "justification": "Todos isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Construção civil, eletrônica, indústria",
        "justification": "Altamente presente em todos os setores.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Chile, Peru, EUA, Brasil",
        "justification": "Países com grandes jazidas e produção ativa.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos primeiros metais usados pela humanidade",
        "justification": "Marco na transição da Pré-história para História.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim cuprum, de \"Chipre\"",
        "justification": "Nome ligado à geopolítica antiga.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido (pré-histórico)",
        "justification": "Usado desde a Idade do Cobre (~8000 a.C.).",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Pré-histórico",
        "justification": "Descoberta empírica muito antiga.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1085 °C / 1358 K / 1985 °F",
        "justification": "Bastante estável termicamente.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2562 °C / 2835 K / 4643,6 °F",
        "justification": "Excelente estabilidade térmica.",
        "score": 90
      }
    ]
  },
  "Zn": {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinco",
    "heroName": "Zinc Protector",
    "heroDescription": "O mestre da galvanização e guardião da saúde celular, um herói que protege os metais contra a ferrugem e fortalece o sistema imunológico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Zinc%20Protector%2C%20representing%20the%20chemical%20element%20Zinco%20(Symbol%3A%20Zn)%2C%20O%20mestre%20da%20galvaniza%C3%A7%C3%A3o%20e%20guardi%C3%A3o%20da%20sa%C3%BAde%20celular%2C%20um%20her%C3%B3i%20que%20protege%20os%20metais%20contra%20a%20ferrugem%20e%20fortalece%20o%20sistema%20imunol%C3%B3gico..%20Style%3A%20glowing%20symbol%20Zn%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Frágil em temperatura ambiente, oxida com facilidade",
        "justification": "Facilmente atacado por ácidos e agentes atmosféricos.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em pequenas doses, poluente se mal descartado",
        "justification": "O excesso contamina o solo, mas é necessário à vida.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Essencial (enzimas, imunidade), tóxico em excesso",
        "justification": "Boa tolerância, mas dose elevada causa náusea e danos.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Galvanização, ligas, saúde, baterias",
        "justification": "Presente em diversas aplicações úteis.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado +2 predomina",
        "justification": "Estável, mas limitado a poucas oxidações.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,0078% da crosta (~75 ppm)",
        "justification": "Encontrado em esfalerita (ZnS) e outros minérios.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Formação em supernovas, mas não em grande escala.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica (~65,38 u)",
        "value": "Médio",
        "justification": "Um pouco mais pesado que o cobre.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (7,14 g/cm³)",
        "value": "Moderada",
        "justification": "Mais leve que outros metais de transição.",
        "score": 55
      },
      {
        "id": 10,
        "label": "Raio atômico (~134 pm)",
        "value": "Médio",
        "justification": "Um pouco maior que Cu e Ni.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Quase exclusivamente +2",
        "justification": "Baixa versatilidade redox.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Utilizado em eletroquímica.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,65)",
        "value": "Relativamente baixa",
        "justification": "Pouco atraente a elétrons.",
        "score": 35
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Fácil de moldar e manusear.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d¹⁰ 4s²",
        "justification": "Subnível estável e completo.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s²",
        "justification": "Final da 1ª série de transição – usado didaticamente.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=30)",
        "value": "30",
        "justification": "Entre os mais leves dos metais pós-transição.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (35 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Sem isótopos naturais radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Baterias, galvanização, ligas, nutracêuticos",
        "justification": "Muito valorizado em várias áreas industriais.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minérios em todo o mundo (China, Austrália, Peru, Brasil)",
        "justification": "Boa distribuição global.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Composto ZnO é usado como protetor solar e tinta",
        "justification": "Versátil mesmo fora de sua forma metálica.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do alemão zink, \"ponta\" (cristais pontiagudos ao solidificar)",
        "justification": "Etimologia técnica e visual.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Andreas Marggraf (1746)",
        "justification": "Primeiro a isolá-lo em forma pura.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1746",
        "justification": "Descoberto no auge da química experimental.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "419,5 °C / 692,7 K / 787,1 °F",
        "justification": "Baixo ponto de fusão, derrete facilmente.",
        "score": 40
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "907 °C / 1180 K / 1664,6 °F",
        "justification": "Menor que a maioria dos metais de transição.",
        "score": 60
      }
    ]
  },
  "Ga": {
    "number": 31,
    "symbol": "Ga",
    "name": "Gálio",
    "heroName": "Gallium Melter",
    "heroDescription": "O mestre da liquidez e dos semicondutores, um herói que derrete em suas mãos mas brilha na tecnologia moderna.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Gallium%20Melter%2C%20representing%20the%20chemical%20element%20G%C3%A1lio%20(Symbol%3A%20Ga)%2C%20O%20mestre%20da%20liquidez%20e%20dos%20semicondutores%2C%20um%20her%C3%B3i%20que%20derrete%20em%20suas%20m%C3%A3os%20mas%20brilha%20na%20tecnologia%20moderna..%20Style%3A%20glowing%20symbol%20Ga%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Amolece na mão, reage com outros metais",
        "justification": "Instável mecanicamente, pode danificar ligas.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixo impacto, mas mineração limitada",
        "justification": "Pouco tóxico e raramente perigoso.",
        "score": 65
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, mas pouco estudado em longo prazo",
        "justification": "Considerado seguro em pequenas quantidades.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Semicondutores, LEDs, medicina, sensores",
        "justification": "Muito útil na tecnologia moderna.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +1 e +3",
        "justification": "Pouco versátil em compostos químicos.",
        "score": 55
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raro (~0,0019% da crosta)",
        "justification": "Extraído como subproduto do alumínio e zinco.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Pouco representativo cosmicamente.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~69,72 u)",
        "value": "Médio",
        "justification": "Próximo do germânio e do zinco.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (5,91 g/cm³)",
        "value": "Moderada",
        "justification": "Menos denso que os metais de transição.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~135 pm)",
        "value": "Médio",
        "justification": "Semelhante ao zinco.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "4",
        "justification": "Quimicamente previsível, porém limitado.",
        "score": 55
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Útil, mas inferior a metais como cobre ou alumínio.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,81)",
        "value": "Média",
        "justification": "Próxima ao índio e ao alumínio.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido (mas funde a ~30 °C)",
        "justification": "Pode ser manipulado com facilidade.",
        "score": 85
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p¹",
        "justification": "Início do bloco p, estrutura simples.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p¹",
        "justification": "Estrutura clara para ensino de química.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=31)",
        "value": "31",
        "justification": "Elemento intermediário da Tabela.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (39 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Não radioativo naturalmente.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "LEDs azuis/violetas, medicina nuclear, soldas",
        "justification": "Muito importante em tecnologia de ponta.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto de bauxita e esfalerita (extração em pequena escala)",
        "justification": "Extração complexa e indireta.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Derrete na palma da mão",
        "justification": "Uma das propriedades físicas mais intrigantes.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "\"Gallia\" (França)",
        "justification": "Homenagem geográfica.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Paul-Émile Lecoq de Boisbaudran (1875)",
        "justification": "Cientista francês reconhecido.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1875",
        "justification": "Importante para o avanço da espectroscopia.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "29,76 °C / 302,91 K / 85,57 °F",
        "justification": "Um dos mais baixos entre metais — derrete com o calor das mãos.",
        "score": 10
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2204 °C / 2477 K / 3999,2 °F",
        "justification": "Alta estabilidade em temperaturas elevadas.",
        "score": 80
      }
    ]
  },
  "Ge": {
    "number": 32,
    "symbol": "Ge",
    "name": "Germânio",
    "heroName": "Germanium Core",
    "heroDescription": "O pioneiro da eletrônica e mestre do infravermelho, o herói que abriu as portas para a era digital.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Germanium%20Core%2C%20representing%20the%20chemical%20element%20Germ%C3%A2nio%20(Symbol%3A%20Ge)%2C%20O%20pioneiro%20da%20eletr%C3%B4nica%20e%20mestre%20do%20infravermelho%2C%20o%20her%C3%B3i%20que%20abriu%20as%20portas%20para%20a%20era%20digital..%20Style%3A%20glowing%20symbol%20Ge%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Quebra-se com facilidade, frágil",
        "justification": "Quebra com esforço mecânico e não é dúctil.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Baixo impacto, mineração moderada",
        "justification": "Raro, mas sem toxicidade significativa.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas não amplamente testado",
        "justification": "Considerado seguro, mas requer monitoramento.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Eletrônica, fibra óptica, solar, transistores",
        "justification": "Importante na tecnologia de comunicação e energia.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2 e +4",
        "justification": "Mais versátil que o gálio; forma mais compostos.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raro (~1,6 ppm)",
        "justification": "Pouco abundante, mas presente em minérios comuns.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Muito pouco representativo no universo.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (72,63 u)",
        "value": "Média",
        "justification": "Um pouco maior que Ga, sem destaque.",
        "score": 38
      },
      {
        "id": 9,
        "label": "Densidade (5,32 g/cm³)",
        "value": "Moderada",
        "justification": "Intermediária para metais semicondutores.",
        "score": 48
      },
      {
        "id": 10,
        "label": "Raio atômico (~125 pm)",
        "value": "Médio",
        "justification": "Um pouco menor que Ga; bom para ligações.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "6",
        "justification": "Versátil e importante para compostos eletrônicos.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semicondutor",
        "justification": "Importante por ser semicondutor puro.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,01)",
        "value": "Levemente alta",
        "justification": "Valor razoável para reagir com não-metais e metais.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável e facilmente manipulável.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p²",
        "justification": "Fim do bloco p, estrutura razoavelmente simples.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p²",
        "justification": "Útil e representativo no ensino de química geral.",
        "score": 72
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=32)",
        "value": "32",
        "justification": "Elemento fixo, não diferenciador.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (41 no isótopo comum)",
        "value": "Estável",
        "justification": "Idem ao anterior.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo natural é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Chips, fibras ópticas, energia solar",
        "justification": "Amplamente usado em alta tecnologia.",
        "score": 88
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais de zinco e carvão",
        "justification": "Extração depende de fontes secundárias.",
        "score": 55
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em primeiros transistores",
        "justification": "Histórico em eletrônica e telecomunicações.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "\"Germania\" (Alemanha)",
        "justification": "Nome patriótico; identidade nacional.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Clemens Winkler (1886)",
        "justification": "Descoberto experimentalmente e previsto por Mendeleev.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1886",
        "justification": "Previsão teórica confirmada — importante historicamente.",
        "score": 82
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "938,25 °C",
        "justification": "Relativamente alto, estável para uso industrial.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2833 °C",
        "justification": "Muito alto, excelente estabilidade térmica.",
        "score": 85
      }
    ]
  },
  "As": {
    "number": 33,
    "symbol": "As",
    "name": "Arsênio",
    "heroName": "Arsenic Shadow",
    "heroDescription": "O mestre dos venenos e da dualidade, um herói temido mas essencial para a microeletrônica avançada.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Arsenic%20Shadow%2C%20representing%20the%20chemical%20element%20Ars%C3%AAnio%20(Symbol%3A%20As)%2C%20O%20mestre%20dos%20venenos%20e%20da%20dualidade%2C%20um%20her%C3%B3i%20temido%20mas%20essencial%20para%20a%20microeletr%C3%B4nica%20avan%C3%A7ada..%20Style%3A%20glowing%20symbol%20As%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente tóxico, cumulativo, cancerígeno",
        "justification": "Um dos elementos mais perigosos à saúde humana.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Poluente grave de águas e solos, mas usado em pesticidas",
        "justification": "Riscos superam os benefícios ambientais.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente tóxico, envenenamento crônico e agudo",
        "justification": "Dose letal muito baixa, histórico de envenenamentos.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Semicondutores, ligas, medicina (arsênico trióxido)",
        "justification": "Uso controlado em eletrônica e terapia anticâncer.",
        "score": 70
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações −3, +3, +5",
        "justification": "Versátil para compostos orgânicos e inorgânicos.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~1,8 ppm na crosta terrestre",
        "justification": "Encontrado em arsenopirita e outros minerais.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Pouco abundante fora da Terra.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~74,92 u)",
        "value": "Médio",
        "justification": "Próximo ao selênio e ao gálio.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (5,73 g/cm³)",
        "value": "Moderada",
        "justification": "Valor intermediário.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~119 pm)",
        "value": "Médio",
        "justification": "Compatível com elementos do bloco p.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "–3, +3, +5",
        "justification": "Boa versatilidade de oxidações.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semi-metálica",
        "justification": "Condutor moderado.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,18)",
        "value": "Média-alta",
        "justification": "Relativamente eletronegativo para um semi-metal.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável e fácil de manipular.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p³",
        "justification": "Bloco p típico.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p³",
        "justification": "Útil para compreender os elementos do grupo 15.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=33)",
        "value": "33",
        "justification": "Elemento de massa intermediária.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (42 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (As-75)",
        "justification": "Isótopo natural não radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas especiais, semicondutores, medicina controlada",
        "justification": "Relevante em nichos tecnológicos e médicos.",
        "score": 75
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Comum em minerais (arsenopirita) em todo o mundo",
        "justification": "Mineração associada a metais como ouro e prata.",
        "score": 65
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em cosméticos antigos e venenos históricos",
        "justification": "Fascinante história de uso e envenenamento.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego arsenikon (“substância poderosa”)",
        "justification": "Nome reflete sua toxicidade histórica.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Usado por egípcios, romanos e alquimistas.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Antiguidade (pré-histórico)",
        "justification": "Um dos primeiros elementos isolados.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "817 °C / 1090 K / 1502,6 °F",
        "justification": "Ponto de fusão razoavelmente alto.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Sublima a 613 °C / 886 K / 1135,4 °F",
        "justification": "Sublima em vez de fundir em condições normais.",
        "score": 30
      }
    ]
  },
  "Se": {
    "number": 34,
    "symbol": "Se",
    "name": "Selênio",
    "heroName": "Selenium Ray",
    "heroDescription": "O mestre da luz e da visão elétrica, um herói que transforma o brilho do sol em sinais eletrônicos.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Selenium%20Ray%2C%20representing%20the%20chemical%20element%20Sel%C3%AAnio%20(Symbol%3A%20Se)%2C%20O%20mestre%20da%20luz%20e%20da%20vis%C3%A3o%20el%C3%A9trica%2C%20um%20her%C3%B3i%20que%20transforma%20o%20brilho%20do%20sol%20em%20sinais%20eletr%C3%B4nicos..%20Style%3A%20glowing%20symbol%20Se%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Tóxico em doses elevadas, instável em algumas formas",
        "justification": "Pode causar efeitos biológicos sérios.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em microdoses, tóxico em excesso",
        "justification": "O equilíbrio entre deficiência e toxicidade é delicado.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Necessário à saúde, mas pode causar selenose",
        "justification": "Suplementos precisam de controle rigoroso.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Antioxidante, semicondutores, vidros, células solares",
        "justification": "Usado na medicina, indústria e eletrônica.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações −2, +4, +6",
        "justification": "Alta versatilidade química.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raro (~0,05 ppm na crosta)",
        "justification": "Extraído como subproduto da mineração de cobre.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito raro",
        "justification": "Baixa presença cósmica.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~78,96 u)",
        "value": "Médio",
        "justification": "Próximo ao arsênio e bromo.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (4,81 g/cm³)",
        "value": "Moderada",
        "justification": "Valor relativamente baixo entre os não metais.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~120 pm)",
        "value": "Médio",
        "justification": "Tamanho típico do grupo 16.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "−2, +4, +6",
        "justification": "Boa diversidade para síntese de compostos.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semi-condutor (especialmente na forma amorfa)",
        "justification": "Responde à luz, usado em fotocélulas.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,55)",
        "value": "Alta",
        "justification": "Bastante eletronegativo, comporta-se como não metal.",
        "score": 65
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Manipulável, estável na forma elementar.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p⁴",
        "justification": "Posicionado no grupo dos calcogênios.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p⁴",
        "justification": "Didático para o ensino de blocos p.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=34)",
        "value": "34",
        "justification": "Médio na Tabela Periódica.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (45 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo Se-80 é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fotocélulas, medicina, ligas, nutrição",
        "justification": "Importância industrial e biológica.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto da refinação de metais (especialmente cobre)",
        "justification": "Difícil de encontrar isolado.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Seu nome vem de “lua” (Selene)",
        "justification": "Nome poeticamente associado à mitologia.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego selênē (“lua”)",
        "justification": "Simbolismo forte e mitológico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Jöns Jacob Berzelius (1817)",
        "justification": "Um dos pais da química moderna.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1817",
        "justification": "Descoberto no contexto da química moderna.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "221 °C / 494 K / 429,8 °F",
        "justification": "Derrete facilmente, útil em ligas de baixa fusão.",
        "score": 30
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "685 °C / 958 K / 1265 °F",
        "justification": "Termicamente estável até certo ponto.",
        "score": 55
      }
    ]
  },
  "Br": {
    "number": 35,
    "symbol": "Br",
    "name": "Bromo",
    "heroName": "Bromine Liquid",
    "heroDescription": "O único não-metal líquido e mestre dos retardantes de chama, um herói denso e reativo que protege o mundo do fogo.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Bromine%20Liquid%2C%20representing%20the%20chemical%20element%20Bromo%20(Symbol%3A%20Br)%2C%20O%20%C3%BAnico%20n%C3%A3o-metal%20l%C3%ADquido%20e%20mestre%20dos%20retardantes%20de%20chama%2C%20um%20her%C3%B3i%20denso%20e%20reativo%20que%20protege%20o%20mundo%20do%20fogo..%20Style%3A%20glowing%20symbol%20Br%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Corrosivo, volátil, altamente tóxico",
        "justification": "Altamente reativo, perigoso ao contato direto.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Usado em pesticidas e retardantes de chama, mas altamente poluente",
        "justification": "Impacto ambiental negativo se mal gerido.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante, danoso à pele, olhos e pulmões",
        "justification": "Contato direto é perigoso; vapores tóxicos.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fotografia, retardantes de chama, fármacos",
        "justification": "Muito útil em indústria e síntese orgânica.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações –1, +1, +3, +5, +7",
        "justification": "Alta versatilidade em compostos halogenados.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,0003% da crosta terrestre, encontrado em sais marinhos",
        "justification": "Não raro, mas difícil de concentrar.",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Halogênios são pouco abundantes cosmicamente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~79,90 u)",
        "value": "Médio",
        "justification": "Peso dentro do esperado para halogênios.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (3,12 g/cm³ – líquida)",
        "value": "Média",
        "justification": "Densidade incomum por ser líquido à temperatura ambiente.",
        "score": 45
      },
      {
        "id": 10,
        "label": "Raio atômico (~114 pm)",
        "value": "Médio",
        "justification": "Condizente com seu grupo.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "–1, +1, +3, +5, +7",
        "justification": "Alta diversidade de oxidação.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Baixíssima",
        "justification": "Não metálico, isolante.",
        "score": 10
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,96)",
        "value": "Alta",
        "justification": "Forte atração por elétrons – típico dos halogênios.",
        "score": 80
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Líquido",
        "justification": "Um dos dois elementos líquidos à temperatura ambiente.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p⁵",
        "justification": "Grupo 17, penúltima família.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p⁵",
        "justification": "Configuração típica de halogênio.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=35)",
        "value": "35",
        "justification": "Tamanho médio.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (45 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Br-79 e Br-81)",
        "justification": "Isótopos naturais estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Indústria farmacêutica, tintas, fotografia, retardantes",
        "justification": "Presente em muitas áreas técnicas.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Principalmente em águas salgadas",
        "justification": "Extração de salmouras e águas oceânicas.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos dois elementos líquidos à temperatura ambiente",
        "justification": "Característica única entre os não metais.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego brōmos (“fedor”)",
        "justification": "Nome reflete seu odor desagradável.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Antoine Balard (1826)",
        "justification": "Químico francês reconhecido.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1826",
        "justification": "Parte da era clássica da Tabela Periódica.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "−7,2 °C / 265,9 K / 19,04 °F",
        "justification": "Derrete facilmente.",
        "score": 20
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "58,8 °C / 332 K / 137,8 °F",
        "justification": "Extremamente volátil.",
        "score": 25
      }
    ]
  },
  "Kr": {
    "number": 36,
    "symbol": "Kr",
    "name": "Criptônio",
    "heroName": "Krypton Glow",
    "heroDescription": "O guardião do brilho intenso e mestre do vácuo, um herói nobre que ilumina as pistas e as cirurgias de precisão.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Krypton%20Glow%2C%20representing%20the%20chemical%20element%20Cript%C3%B4nio%20(Symbol%3A%20Kr)%2C%20O%20guardi%C3%A3o%20do%20brilho%20intenso%20e%20mestre%20do%20v%C3%A1cuo%2C%20um%20her%C3%B3i%20nobre%20que%20ilumina%20as%20pistas%20e%20as%20cirurgias%20de%20precis%C3%A3o..%20Style%3A%20glowing%20symbol%20Kr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Gás nobre, pouco reativo e difícil de capturar",
        "justification": "Baixa reatividade pode limitar aplicações.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Inerte e não tóxico",
        "justification": "Praticamente inócuo ao meio ambiente.",
        "score": 85
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Praticamente não tóxico",
        "justification": "Seguro em condições normais.",
        "score": 90
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Lâmpadas fluorescentes, lasers, fotografia",
        "justification": "Algumas aplicações tecnológicas relevantes.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Raro, mas forma compostos com fluoretos em laboratório",
        "justification": "Extremamente limitado.",
        "score": 25
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1 ppm na atmosfera",
        "justification": "Traços mínimos no ar, difícil de obter.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Pouco formado em estrelas.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~83,80 u)",
        "value": "Médio",
        "justification": "Próxima de elementos do mesmo período.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (3,75 g/L – gás)",
        "value": "Muito baixa",
        "justification": "Como gás nobre, é extremamente leve.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico (~112 pm)",
        "value": "Médio",
        "justification": "Tamanho compatível com gases nobres.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "0 (raramente +2)",
        "justification": "Pouquíssimos compostos conhecidos.",
        "score": 10
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Como gás, não conduz eletricidade.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade (3,00)",
        "value": "Alta para gás nobre",
        "justification": "Valor relevante para ligações raras.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gases recebem nota mínima nesse critério.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p⁶",
        "justification": "Camada de valência cheia, estável.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p⁶",
        "justification": "Didaticamente importante.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=36)",
        "value": "36",
        "justification": "Posição intermediária na Tabela.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (48 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Kr-84), mas Kr-85 é radioativo artificial",
        "justification": "Forma natural é estável, mas há isótopos produzidos.",
        "score": 85
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Lasers, iluminação, fotografia",
        "justification": "Presente em nichos técnicos.",
        "score": 70
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Atmosfera terrestre",
        "justification": "Difícil de isolar, mas está em todo lugar.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em lasers cirúrgicos e científicos",
        "justification": "Aplicações de ponta.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego kryptos (\"escondido\")",
        "justification": "Nome tem significado simbólico e científico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Ramsay e Morris Travers (1898)",
        "justification": "Importantes pesquisadores dos gases nobres.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Descoberto com métodos inovadores.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "−157,4 °C / 115,8 K / −251,3 °F",
        "justification": "Extremamente baixo.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "−153,4 °C / 119,7 K / −244,1 °F",
        "justification": "Muito volátil.",
        "score": 5
      }
    ]
  },
  "Rb": {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubídio",
    "heroName": "Rubidium Pulse",
    "heroDescription": "O senhor do ritmo cardíaco eletrônico, um herói que controla corações artificiais e mantém a precisão dos relógios atômicos.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Rubidium%20Pulse%2C%20representing%20the%20chemical%20element%20Rub%C3%ADdio%20(Symbol%3A%20Rb)%2C%20O%20senhor%20do%20ritmo%20card%C3%ADaco%20eletr%C3%B4nico%2C%20um%20her%C3%B3i%20que%20controla%20cora%C3%A7%C3%B5es%20artificiais%20e%20mant%C3%A9m%20a%20precis%C3%A3o%20dos%20rel%C3%B3gios%20at%C3%B4micos..%20Style%3A%20glowing%20symbol%20Rb%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente reativo com água, pode causar explosões",
        "justification": "Reatividade violenta torna seu manuseio arriscado.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Raro e reativo, mas baixa toxicidade ambiental",
        "justification": "Pouco tóxico, mas reatividade oferece risco local.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante, reage com umidade da pele",
        "justification": "Não é tóxico, mas perigoso por contato químico.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Relógios atômicos, pesquisas, produção de vidros especiais",
        "justification": "Importante em áreas específicas da ciência.",
        "score": 70
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação +1",
        "justification": "Forma poucos tipos de compostos.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~90 ppm na crosta (mais abundante que o césio)",
        "justification": "Moderadamente raro, mas disponível.",
        "score": 55
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Pouco representativo cosmicamente.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~85,47 u)",
        "value": "Médio",
        "justification": "Massa típica do grupo 1.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (1,53 g/cm³)",
        "value": "Baixa",
        "justification": "Leve, típico dos metais alcalinos.",
        "score": 30
      },
      {
        "id": 10,
        "label": "Raio atômico (~265 pm)",
        "value": "Muito alto",
        "justification": "Um dos maiores entre os elementos.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "1",
        "justification": "Muito previsível, mas pouco versátil.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Bom condutor metálico.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,82)",
        "value": "Muito baixa",
        "justification": "Muito eletropositivo.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Metálico e manipulável em condições secas.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5s¹",
        "justification": "Simples, útil para estudo dos alcalinos.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 5s¹",
        "justification": "Compacta e pedagógica.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=37)",
        "value": "37",
        "justification": "Elemento de massa média.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (48 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Naturalmente estável (Rb-85); Rb-87 é fraco beta",
        "justification": "Pouco radioativo, de meia-vida longa.",
        "score": 80
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Relógios atômicos, pesquisas biológicas, espectroscopia",
        "justification": "Usado em nichos científicos avançados.",
        "score": 75
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais como lepidolita e pollucita",
        "justification": "Extração conjunta com césio e lítio.",
        "score": 55
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nome vem de \"rubro\" (linhas vermelhas no espectro)",
        "justification": "Importante na história da espectroscopia.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim rubidus (“vermelho escuro”)",
        "justification": "Ligado à sua descoberta espectroscópica.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Robert Bunsen e Gustav Kirchhoff (1861)",
        "justification": "Cientistas importantes e conhecidos.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1861",
        "justification": "Parte da era de descoberta espectroscópica.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "39,3 °C / 312,5 K / 102,7 °F",
        "justification": "Muito baixo – pode derreter em climas quentes.",
        "score": 15
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "688 °C / 961 K / 1270,4 °F",
        "justification": "Relativamente baixo, típico dos alcalinos.",
        "score": 55
      }
    ]
  },
  "Sr": {
    "number": 38,
    "symbol": "Sr",
    "name": "Estrôncio",
    "heroName": "Strontium Spark",
    "heroDescription": "O mestre das cores escarlates e guardião da saúde óssea, um herói que ilumina o céu festivo com cor intensa.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Strontium%20Spark%2C%20representing%20the%20chemical%20element%20Estr%C3%B4ncio%20(Symbol%3A%20Sr)%2C%20O%20mestre%20das%20cores%20escarlates%20e%20guardi%C3%A3o%20da%20sa%C3%BAde%20%C3%B3ssea%2C%20um%20her%C3%B3i%20que%20ilumina%20o%20c%C3%A9u%20festivo%20com%20cor%20intensa..%20Style%3A%20glowing%20symbol%20Sr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo com água e ar, instável em estado puro",
        "justification": "Precisa ser armazenado sob óleo mineral.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Comportamento similar ao cálcio, mas radioisótopos podem contaminar",
        "justification": "Sr-90 é perigoso; Sr natural é relativamente seguro.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Sr-90 é radioativo e perigoso; Sr natural é pouco tóxico",
        "justification": "Elemento em si é seguro, mas alguns isótopos são cancerígenos.",
        "score": 35
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fogos de artifício, cerâmica, medicina (tratamento ósseo)",
        "justification": "Aplicações úteis e variadas.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação +2",
        "justification": "Pouco versátil, como os demais alcalino-terrosos.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,034% da crosta terrestre",
        "justification": "Encontrado em minerais como celestita e estroncianita.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Razoável (formado em supernovas)",
        "justification": "Maior que rubídio, mas não muito comum.",
        "score": 35
      },
      {
        "id": 8,
        "label": "Massa atômica (~87,62 u)",
        "value": "Média",
        "justification": "Próxima de elementos do mesmo grupo.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (2,64 g/cm³)",
        "value": "Baixa",
        "justification": "Leve, mas mais denso que outros metais reativos.",
        "score": 35
      },
      {
        "id": 10,
        "label": "Raio atômico (~219 pm)",
        "value": "Grande",
        "justification": "Valor típico para alcalino-terrosos.",
        "score": 80
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "2",
        "justification": "Estável, mas limitado.",
        "score": 20
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Como metal, conduz bem eletricidade.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,95)",
        "value": "Muito baixa",
        "justification": "Um dos menos eletronegativos.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável, metálico.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5s²",
        "justification": "Simples e didático.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 5s²",
        "justification": "Boa para ensinar sobre os blocos s.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=38)",
        "value": "38",
        "justification": "Elemento de porte médio.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (50 no isótopo comum)",
        "value": "5",
        "justification": "Isótopos estáveis e comuns.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Sr natural é estável; Sr-90 é radioativo",
        "justification": "Sr-90 preocupa em acidentes nucleares.",
        "score": 60
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Pirotecnia, ligas, próteses ósseas, vidros especiais",
        "justification": "Usos importantes em saúde e indústria.",
        "score": 75
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Comum em rochas sedimentares (celestita)",
        "justification": "Relativamente fácil de minerar.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Dá coloração vermelha intensa a fogos de artifício",
        "justification": "Aplicação estética e cultural.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Vem de Strontian, vila da Escócia onde foi descoberto",
        "justification": "Nome geográfico bem documentado.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Adair Crawford (1790)",
        "justification": "Um dos químicos britânicos da era clássica.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1790",
        "justification": "Final do século XVIII.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "777 °C / 1050 K / 1430,6 °F",
        "justification": "Moderadamente alto.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1382 °C / 1655 K / 2519,6 °F",
        "justification": "Resistente a altas temperaturas.",
        "score": 80
      }
    ]
  },
  "Y": {
    "number": 39,
    "symbol": "Y",
    "name": "Ítrio",
    "heroName": "Yttrium Laser",
    "heroDescription": "O mestre da luz focalizada e da supercondutividade. Yttrium Laser é o elemento que transforma cerâmicas em condutores perfeitos e cristais em lasers de alta potência.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Yttrium%20Laser%2C%20representing%20the%20chemical%20element%20%C3%8Dtrio%20(Symbol%3A%20Y)%2C%20O%20mestre%20da%20luz%20focalizada%20e%20da%20supercondutividade.%20Yttrium%20Laser%20%C3%A9%20o%20elemento%20que%20transforma%20cer%C3%A2micas%20em%20condutores%20perfeitos%20e%20cristais%20em%20lasers%20de%20alta%20pot%C3%AAncia..%20Style%3A%20glowing%20symbol%20Y%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo com ácidos, instável em pó fino",
        "justification": "Não é explosivo, mas precisa de cuidados.",
        "score": 35
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico e pouco acumulativo",
        "justification": "Baixo impacto ambiental direto.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas irritante em pó",
        "justification": "Exposição crônica deve ser evitada.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Leds, lasers, cerâmicas, tratamento de câncer",
        "justification": "Usado em áreas tecnológicas e médicas.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado +3",
        "justification": "Baixa variação, mas reage com diversos ligantes.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente abundante (~33 ppm)",
        "justification": "Encontrado em terras-raras como xenotímio.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Pouco comum",
        "justification": "Formado em estrelas, mas não é dos mais abundantes.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~88,91 u)",
        "value": "Média",
        "justification": "Valor compatível com sua posição.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (4,47 g/cm³)",
        "value": "Média",
        "justification": "Considerado leve para um metal de transição.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~180 pm)",
        "value": "Grande",
        "justification": "Similar aos lantanídeos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Muito estável, porém limitado.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Boa como metal de transição.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,22)",
        "value": "Baixa",
        "justification": "Eletropositivo, típico dos metais.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável e metálico.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d¹",
        "justification": "Ajuda no estudo dos metais de transição.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹ 5s²",
        "justification": "Relevante didaticamente.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=39)",
        "value": "39",
        "justification": "Intermediário.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (50 no isótopo comum)",
        "value": "5",
        "justification": "Isótopo estável e predominante.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo Y-89 é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Telecomunicações, medicina, fósforos para LEDs",
        "justification": "Alta aplicação tecnológica e biomédica.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia (mina de Ytterby)",
        "justification": "Histórico nas descobertas de terras raras.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nome batizou o “quarteto de Ytterby”",
        "justification": "Um dos 4 elementos nomeados em homenagem à vila sueca.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem à vila de Ytterby",
        "justification": "Nome de importância histórica.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Johan Gadolin (1794)",
        "justification": "Pioneiro da química moderna nórdica.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1794",
        "justification": "Final do século XVIII, período da revolução química.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1526 °C / 1799 K / 2778,8 °F",
        "justification": "Alta resistência térmica.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3338 °C / 3611 K / 6040,4 °F",
        "justification": "Excelente estabilidade térmica.",
        "score": 95
      }
    ]
  },
  "Zr": {
    "number": 40,
    "symbol": "Zr",
    "name": "Zircônio",
    "heroName": "Zircon Reactor",
    "heroDescription": "O guardião da energia nuclear e mestre da invulnerabilidade química. Zircon Reactor é o herói que resiste às condições mais extremas, protegendo os núcleos de energia com seu escudo eterno.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Zircon%20Reactor%2C%20representing%20the%20chemical%20element%20Zirc%C3%B4nio%20(Symbol%3A%20Zr)%2C%20O%20guardi%C3%A3o%20da%20energia%20nuclear%20e%20mestre%20da%20invulnerabilidade%20qu%C3%ADmica.%20Zircon%20Reactor%20%C3%A9%20o%20her%C3%B3i%20que%20resiste%20%C3%A0s%20condi%C3%A7%C3%B5es%20mais%20extremas%2C%20protegendo%20os%20n%C3%BAcleos%20de%20energia%20com%20seu%20escudo%20eterno..%20Style%3A%20glowing%20symbol%20Zr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com ácidos concentrados; pó fino é inflamável",
        "justification": "Estável em bloco sólido, mas instável pulverizado.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico e resistente à corrosão",
        "justification": "Inerte, não poluente em condições normais.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo risco, exceto formas finas (inalação)",
        "justification": "Segurança relativamente alta com manuseio adequado.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em reatores nucleares, cerâmica, implantes, ligas",
        "justification": "Altamente valorizado tecnologicamente.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +4 (predominante), +2 e +3",
        "justification": "Moderadamente versátil.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,028% da crosta terrestre",
        "justification": "Encontrado em zircão e baddeleyita.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Não é raro entre os metais pesados.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica (~91,22 u)",
        "value": "Média",
        "justification": "Massa típica do 5º período.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (6,52 g/cm³)",
        "value": "Média-alta",
        "justification": "Mais leve que metais como chumbo e ouro.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~160 pm)",
        "value": "Médio",
        "justification": "Valor intermediário.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+4 principal",
        "justification": "Um pouco limitado, mas estável.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Utilizado em ligas condutoras.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,33)",
        "value": "Baixa",
        "justification": "Bastante eletropositivo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Metal resistente e estável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d²",
        "justification": "Parte dos metais de transição do 5º período.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d² 5s²",
        "justification": "Curiosa por sua posição no bloco d.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=40)",
        "value": "40",
        "justification": "Intermediário.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (51 no isótopo comum)",
        "value": "5",
        "justification": "Estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Todos os isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Reatores nucleares, odontologia, joias, cerâmica, lâminas",
        "justification": "Usado em diversos setores de alta tecnologia.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais: zircão (ZrSiO₄) e baddeleyita (ZrO₂)",
        "justification": "Comum em depósitos naturais.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Alta resistência à corrosão e neutrons",
        "justification": "Essencial em reatores por absorver poucos nêutrons.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Derivado de \"zircão\" (do persa zargun, \"cor dourada\")",
        "justification": "Nome com raiz etimológica rica.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Martin Heinrich Klaproth (1789)",
        "justification": "Químico alemão renomado.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1789",
        "justification": "Final do século XVIII, auge das descobertas inorgânicas.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1855 °C / 2128 K / 3371 °F",
        "justification": "Alta resistência térmica.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4409 °C / 4682 K / 7968 °F",
        "justification": "Extremamente resistente ao calor.",
        "score": 100
      }
    ]
  },
  "Nb": {
    "number": 41,
    "symbol": "Nb",
    "name": "Nióbio",
    "heroName": "Niobium Core",
    "heroDescription": "O mestre da resistência extrema e das superligas. Niobium Core é o herói que torna o aço indestrutível e permite que os motores a jato alcancem os céus com leveza e força.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Niobium%20Core%2C%20representing%20the%20chemical%20element%20Ni%C3%B3bio%20(Symbol%3A%20Nb)%2C%20O%20mestre%20da%20resist%C3%AAncia%20extrema%20e%20das%20superligas.%20Niobium%20Core%20%C3%A9%20o%20her%C3%B3i%20que%20torna%20o%20a%C3%A7o%20indestrut%C3%ADvel%20e%20permite%20que%20os%20motores%20a%20jato%20alcancem%20os%20c%C3%A9us%20com%20leveza%20e%20for%C3%A7a..%20Style%3A%20glowing%20symbol%20Nb%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida-se lentamente ao ar; solúvel em ácidos fortes",
        "justification": "Relativamente estável, mas reativo com agentes fortes.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade e não acumulativo",
        "justification": "Elemento limpo ambientalmente.",
        "score": 80
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas pode causar alergia em contato",
        "justification": "Baixo risco, exceto em formas refinadas.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Superligas, construção civil, medicina, eletroeletrônicos",
        "justification": "Alta aplicabilidade tecnológica e industrial.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +3, +5 (mais comum), +2",
        "justification": "Boa variedade em compostos, especialmente óxidos.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (Crosta: 20 ppm); Brasil é principal produtor",
        "justification": "Presença significativa e estratégica.",
        "score": 65
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Elemento pesado, pouco comum cosmicamente.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica (~92,91 u)",
        "value": "Média",
        "justification": "Compatível com elementos do período 5.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade (8,57 g/cm³)",
        "value": "Moderada",
        "justification": "Mais denso que ferro, menos que tungstênio.",
        "score": 55
      },
      {
        "id": 10,
        "label": "Raio atômico (~146 pm)",
        "value": "Médio",
        "justification": "Típico dos metais de transição.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+5 (principal), +3, +2",
        "justification": "Versátil em reações químicas.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Metal condutor, usado em eletrônica.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,6)",
        "value": "Média-baixa",
        "justification": "Menor que metais nobres, mas maior que alcalinos.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Estável e resistente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d⁴",
        "justification": "Posiciona-se bem no bloco d.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d⁴ 5s¹",
        "justification": "Intermediária e didática.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=41)",
        "value": "41",
        "justification": "Faixa média na Tabela Periódica.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (52 no isótopo comum)",
        "value": "5",
        "justification": "Isótopo estável e único (Nb-93).",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O único isótopo natural não é radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas supercondutoras, estruturas metálicas, cateteres",
        "justification": "Relevante na indústria e medicina.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Brasil (maior reserva e produção mundial)",
        "justification": "Destaque geopolítico e estratégico.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Brasil detém mais de 90% das reservas conhecidas",
        "justification": "Elemento crítico de soberania industrial.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Vem de Níobe, filha de Tântalo (mitologia grega)",
        "justification": "Nome mitológico com ligação ao Tântalo (Ta).",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Charles Hatchett (1801), mas isolado corretamente depois",
        "justification": "Inicialmente confundido com tântalo.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1801 (reconhecimento oficial posterior)",
        "justification": "Descoberto cedo, mas consolidado tardiamente.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2477 °C / 2750 K / 4490,6 °F",
        "justification": "Muito resistente ao calor.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4744 °C / 5017 K / 8571,2 °F",
        "justification": "Um dos mais altos da Tabela Periódica.",
        "score": 100
      }
    ]
  },
  "Mo": {
    "number": 42,
    "symbol": "Mo",
    "name": "Molibdênio",
    "heroName": "Molybdenum Shield",
    "heroDescription": "O herói da resistência térmica e pilar biológico. Molybdenum Shield é o mestre das altas temperaturas e catalisador essencial para a vida, garantindo que as estruturas resistam ao calor e à degradação.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Molybdenum%20Shield%2C%20representing%20the%20chemical%20element%20Molibd%C3%AAnio%20(Symbol%3A%20Mo)%2C%20O%20her%C3%B3i%20da%20resist%C3%AAncia%20t%C3%A9rmica%20e%20pilar%20biol%C3%B3gico.%20Molybdenum%20Shield%20%C3%A9%20o%20mestre%20das%20altas%20temperaturas%20e%20catalisador%20essencial%20para%20a%20vida%2C%20garantindo%20que%20as%20estruturas%20resistam%20ao%20calor%20e%20%C3%A0%20degrada%C3%A7%C3%A3o..%20Style%3A%20glowing%20symbol%20Mo%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Frágil quando puro, tóxico em excesso",
        "justification": "Requer ligas para maior desempenho.",
        "score": 45
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Baixo risco, uso responsável",
        "justification": "Baixa toxicidade ambiental.",
        "score": 80
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Tóxico em altas doses, bioacumulável",
        "justification": "Pode causar problemas em excesso, mas essencial em pequenas quantidades.",
        "score": 55
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas metálicas, enzimas, saúde humana",
        "justification": "Essencial para a indústria e metabolismo.",
        "score": 88
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações de −2 a +6",
        "justification": "Extremamente versátil quimicamente.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1,2 ppm na crosta",
        "justification": "Não é raro, mas depende de fontes específicas.",
        "score": 48
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderada",
        "justification": "Mais comum que elementos como gálio, germânio.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Massa atômica (95,95 u)",
        "value": "Média-alta",
        "justification": "Similar ao ródio, tecnécio e paládio.",
        "score": 45
      },
      {
        "id": 9,
        "label": "Densidade (10,28 g/cm³)",
        "value": "Alta",
        "justification": "Alta densidade metálica útil.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~145 pm)",
        "value": "Médio-alto",
        "justification": "Compatível com transição de quarta linha.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "−2 a +6",
        "justification": "Extremamente variado e versátil.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Útil em filamentos e aplicações térmicas.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,16)",
        "value": "Relativamente alta",
        "justification": "Importante em compostos organometálicos.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável e resistente em temperatura ambiente.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d⁵",
        "justification": "Orbital de transição com rica química.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d⁵ 5s¹",
        "justification": "Levemente anômala, mas didaticamente rica.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=42)",
        "value": "42",
        "justification": "Valor ordinal; critério fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (54 no isótopo comum)",
        "value": "Estável",
        "justification": "Critério fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Não radioativo",
        "justification": "Naturalmente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas, aço inox, catalisadores, enzimas",
        "justification": "Alta aplicabilidade técnica e biológica.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais como molibdenita (MoS₂)",
        "justification": "Extraído de fontes bem definidas.",
        "score": 65
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Essencial para enzimas em seres vivos",
        "justification": "Papel vital em processos metabólicos.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego molybdos (“chumbo”)",
        "justification": "Nome ligado à aparência e confusão inicial com chumbo.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Wilhelm Scheele (1781)",
        "justification": "Descoberto por um dos grandes químicos da história.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1781",
        "justification": "Descoberto em um período de avanços significativos.",
        "score": 88
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2623 °C / 2896 K / 4753,4 °F",
        "justification": "Um dos mais altos da Tabela Periódica.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4639 °C / 4912 K / 8382,2 °F",
        "justification": "Excelente estabilidade térmica, ideal para altas temperaturas.",
        "score": 95
      }
    ]
  },
  "Tc": {
    "number": 43,
    "symbol": "Tc",
    "name": "Tecnécio",
    "heroName": "Technetium Ray",
    "heroDescription": "O pioneiro sintético e mestre da visão interna. Technetium Ray é o herói que atravessa a matéria com seu brilho gama, revelando os segredos ocultos no corpo humano.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Technetium%20Ray%2C%20representing%20the%20chemical%20element%20Tecn%C3%A9cio%20(Symbol%3A%20Tc)%2C%20O%20pioneiro%20sint%C3%A9tico%20e%20mestre%20da%20vis%C3%A3o%20interna.%20Technetium%20Ray%20%C3%A9%20o%20her%C3%B3i%20que%20atravessa%20a%20mat%C3%A9ria%20com%20seu%20brilho%20gama%2C%20revelando%20os%20segredos%20ocultos%20no%20corpo%20humano..%20Style%3A%20glowing%20symbol%20Tc%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Radioativo, instável",
        "justification": "Não existe forma estável; difícil de manusear.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Radioativo e sintético",
        "justification": "Pode contaminar ambientes, embora pouco usado em larga escala.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Alta toxicidade radioativa",
        "justification": "Isótopos como Tc‑99m exigem controle rigoroso.",
        "score": 25
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Medicina nuclear (imagens e diagnóstico)",
        "justification": "Extremamente útil em tomografias e cintilografias.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações −1 a +7",
        "justification": "Um dos elementos mais versáteis em estados de oxidação.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Praticamente inexistente",
        "justification": "Apenas vestígios naturais por fissão espontânea ou decaimento.",
        "score": 5
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Apenas em estrelas ou supernovas.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~98 u, média instável)",
        "value": "Alta",
        "justification": "Valor médio flutuante devido à ausência de isótopo estável.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade (11,5 g/cm³)",
        "value": "Alta",
        "justification": "Denso como metais de transição pesados.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~136 pm)",
        "value": "Médio",
        "justification": "Sem destaque, mas bom para ligações metálicas.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "−1 a +7",
        "justification": "Extremamente versátil quimicamente.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Como outros metais de transição; pouco usado nesse sentido.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,9)",
        "value": "Moderada",
        "justification": "Próximo ao rênio, seu \"vizinho\" químico.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Metal de transição típico, facilmente manuseável se isolado.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d⁵",
        "justification": "Bloco d com química rica.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d⁵ 5s²",
        "justification": "Bem estruturada, útil para ensino.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=43)",
        "value": "43",
        "justification": "Critério ordinal.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (~55)",
        "value": "Instável",
        "justification": "Ausência de isótopo estável compromete nota.",
        "score": 10
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altamente radioativo",
        "justification": "Nenhum isótopo estável; ponto negativo.",
        "score": 10
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Medicina nuclear",
        "justification": "Um dos principais radioisótopos da medicina moderna.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido artificialmente",
        "justification": "Não ocorre naturalmente em escala significativa.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro elemento artificial da Tabela",
        "justification": "Quebrou paradigma da química dos anos 1930.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego tekhnetos (“artificial”)",
        "justification": "Nome extremamente adequado e didático.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Emilio Segrè e Carlo Perrier (1937)",
        "justification": "Importantes físicos nucleares do século XX.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1937",
        "justification": "Descoberta histórica com impacto científico.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2157 °C",
        "justification": "Alta temperatura, ideal para estabilidade térmica.",
        "score": 85
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4265 °C",
        "justification": "Extremamente alto, notável para aplicações industriais.",
        "score": 90
      }
    ]
  },
  "Ru": {
    "number": 44,
    "symbol": "Ru",
    "name": "Rutênio",
    "heroName": "Ruthenium Catalyst",
    "heroDescription": "O mestre da precisão química e herói da durabilidade. Ruthenium Catalyst é o especialista em acelerar reações complexas e proteger contatos elétricos com sua dureza inabalável.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Ruthenium%20Catalyst%2C%20representing%20the%20chemical%20element%20Rut%C3%AAnio%20(Symbol%3A%20Ru)%2C%20O%20mestre%20da%20precis%C3%A3o%20qu%C3%ADmica%20e%20her%C3%B3i%20da%20durabilidade.%20Ruthenium%20Catalyst%20%C3%A9%20o%20especialista%20em%20acelerar%20rea%C3%A7%C3%B5es%20complexas%20e%20proteger%20contatos%20el%C3%A9tricos%20com%20sua%20dureza%20inabal%C3%A1vel..%20Style%3A%20glowing%20symbol%20Ru%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Frágil, duro, quebradiço",
        "justification": "Duro e difícil de trabalhar mecanicamente.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Pouco tóxico, mas raro e difícil de refinar",
        "justification": "Baixo risco, mas exploração limitada.",
        "score": 55
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas compostos podem ser perigosos",
        "justification": "Precisa de controle no manuseio laboratorial.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Catalisadores, componentes eletrônicos, medicina",
        "justification": "Valioso em reações químicas e dispositivos de ponta.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações de −2 a +8",
        "justification": "Extremamente versátil – semelhante ao ósmio.",
        "score": 95
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Extremamente raro (1 ppb)",
        "justification": "Um dos metais mais raros da crosta terrestre.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Elemento de núcleo de supernovas.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (101,07 u)",
        "value": "Alta",
        "justification": "Valor compatível com metais nobres.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade (12,37 g/cm³)",
        "value": "Alta",
        "justification": "Muito denso; ideal para ligas nobres.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~134 pm)",
        "value": "Médio",
        "justification": "Ideal para formação de complexos.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "−2 a +8",
        "justification": "Um dos elementos com maior variedade de oxidação.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Muito bom condutor – usado em contatos elétricos.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,2)",
        "value": "Alta",
        "justification": "Valor alto para metais – forma bons compostos.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável e resistente a temperaturas ambientes.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d⁷",
        "justification": "Configuração rica em transições eletrônicas.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d⁷ 5s¹",
        "justification": "Levemente anômala, mas funcional para química de coordenação.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=44)",
        "value": "44",
        "justification": "Critério ordinal fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (57 no isótopo mais comum)",
        "value": "Estável",
        "justification": "Isótopo natural estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Todos os isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Circuitos integrados, ligas, medicina",
        "justification": "Muito usado em microeletrônica e catalisadores.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto de platina/paládio",
        "justification": "Extração depende de outros elementos.",
        "score": 40
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Pode ser usado para prevenir corrosão em contatos elétricos",
        "justification": "Ideal para eletrônica de precisão.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "“Ruthenia” – antigo nome da Rússia",
        "justification": "Referência geográfica/histórica interessante.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Karl Klaus (1844)",
        "justification": "Importante químico russo; identificação bem documentada.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1844",
        "justification": "Período ativo da expansão da Tabela.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2334 °C / 2607 K / 4233 °F",
        "justification": "Muito resistente ao calor – útil em aplicações industriais.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4150 °C / 4423 K / 7502 °F",
        "justification": "Um dos pontos de ebulição mais altos – excelente para alta temperatura.",
        "score": 90
      }
    ]
  },
  "Rh": {
    "number": 45,
    "symbol": "Rh",
    "name": "Ródio",
    "heroName": "Rhodium Shine",
    "heroDescription": "O herói do brilho eterno e protetor dos ares. Rhodium Shine é o metal mais precioso do mundo, um guardião que limpa as emissões e reflete a luz com perfeição inigualável.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Rhodium%20Shine%2C%20representing%20the%20chemical%20element%20R%C3%B3dio%20(Symbol%3A%20Rh)%2C%20O%20her%C3%B3i%20do%20brilho%20eterno%20e%20protetor%20dos%20ares.%20Rhodium%20Shine%20%C3%A9%20o%20metal%20mais%20precioso%20do%20mundo%2C%20um%20guardi%C3%A3o%20que%20limpa%20as%20emiss%C3%B5es%20e%20reflete%20a%20luz%20com%20perfei%C3%A7%C3%A3o%20inigual%C3%A1vel..%20Style%3A%20glowing%20symbol%20Rh%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Muito duro, difícil de trabalhar",
        "justification": "Requer altas temperaturas e técnicas especializadas para processamento.",
        "score": 45
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Baixo risco ambiental, mas mineração complicada",
        "justification": "Pouco tóxico, mas a extração é complexa e cara.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo, exceto em compostos voláteis",
        "justification": "Seguro como metal sólido, mas compostos podem ser irritantes.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Catalisadores, joalheria, eletrônica",
        "justification": "Aplicações críticas em controle de poluição e componentes de precisão.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +1 a +6 (principalmente +3)",
        "justification": "Não tão versátil quanto rutênio ou tecnécio, mas funcional.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Extremamente raro (~1 ppb)",
        "justification": "Um dos elementos mais escassos da crosta terrestre.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Formado em processos estelares como supernovas.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (102,91 u)",
        "value": "Alta",
        "justification": "Sem destaque específico, mas compatível com metais pesados.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade (12,41 g/cm³)",
        "value": "Alta",
        "justification": "Excelente para ligas e aplicações estruturais.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~134 pm)",
        "value": "Médio",
        "justification": "Compatível com ligações metálicas e catalíticas.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1 a +6 (principalmente +3)",
        "justification": "Versátil, mas com estados menos variados que outros metais do grupo.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito alta",
        "justification": "Excelente condutor — ideal para contatos elétricos.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,28)",
        "value": "Alta para um metal",
        "justification": "Boa capacidade de formar complexos estáveis.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável sob condições ambientais.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d⁸",
        "justification": "Química de transição rica, como outros do grupo da platina.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d⁸ 5s¹",
        "justification": "Útil e representativa da química de transição.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=45)",
        "value": "45",
        "justification": "Valor ordinal fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (58 no isótopo mais comum)",
        "value": "Estável",
        "justification": "Critério fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Nenhum isótopo natural radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Catalisadores, revestimentos refletivos, sensores",
        "justification": "Usado em setores estratégicos e tecnológicos.",
        "score": 88
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto de platina/paládio",
        "justification": "Difícil de extrair diretamente.",
        "score": 40
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos metais mais caros do mundo",
        "justification": "Valor de mercado altíssimo; usado em joias de luxo e catalisadores.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego rhodon (“rosa”), cor de seus sais",
        "justification": "Etimologia interessante e química colorida.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Hyde Wollaston (1803)",
        "justification": "Descoberta histórica paralela à do paládio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1803",
        "justification": "Descoberto em contexto de grande avanço na química analítica.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1964 °C / 2237 K / 3567,2 °F",
        "justification": "Muito resistente ao calor.",
        "score": 88
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3695 °C / 3968 K / 6683 °F",
        "justification": "Estável em condições extremas.",
        "score": 90
      }
    ]
  },
  "Pd": {
    "number": 46,
    "symbol": "Pd",
    "name": "Paládio",
    "heroName": "Palladium Guard",
    "heroDescription": "O mestre da purificação e herói da mobilidade sustentável. Palladium Guard é o metal nobre que absorve hidrogênio como uma esponja, protegendo o planeta contra emissões tóxicas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Palladium%20Guard%2C%20representing%20the%20chemical%20element%20Pal%C3%A1dio%20(Symbol%3A%20Pd)%2C%20O%20mestre%20da%20purifica%C3%A7%C3%A3o%20e%20her%C3%B3i%20da%20mobilidade%20sustent%C3%A1vel.%20Palladium%20Guard%20%C3%A9%20o%20metal%20nobre%20que%20absorve%20hidrog%C3%AAnio%20como%20uma%20esponja%2C%20protegendo%20o%20planeta%20contra%20emiss%C3%B5es%20t%C3%B3xicas..%20Style%3A%20glowing%20symbol%20Pd%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Macio, pode ser corroído por ácidos fortes",
        "justification": "Mais maleável que o ródio, mas menos resistente.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Relativamente baixo risco, mas mineração delicada",
        "justification": "Baixa toxicidade, mas extração complexa.",
        "score": 65
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas compostos podem causar alergias",
        "justification": "Uso seguro, mas sensibilizante em contato direto.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Catalisadores, sensores, armazenamento de H₂",
        "justification": "Extremamente útil na indústria e pesquisa científica.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +1, +2, +4",
        "justification": "Menos versátil que rutênio ou tecnécio.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara (~15 ppb)",
        "justification": "Um dos metais mais escassos da crosta.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Produzido em processos estelares específicos.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (106,42 u)",
        "value": "Alta",
        "justification": "Compatível com metais de transição do 5º período.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade (12,02 g/cm³)",
        "value": "Alta",
        "justification": "Denso, ideal para aplicações metálicas finas.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~137 pm)",
        "value": "Médio",
        "justification": "Ideal para formação de complexos e ligas.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "7",
        "justification": "Quimicamente estável, mas limitado em variedade.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito alta",
        "justification": "Excelente condutor — ideal para contatos elétricos.",
        "score": 90
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,20)",
        "value": "Alta",
        "justification": "Capacidade de formar complexos estáveis.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável e manuseável.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d¹⁰",
        "justification": "Subnível completo — estabilidade química.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰",
        "justification": "Configuração simples e completa — facilita o estudo.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=46)",
        "value": "46",
        "justification": "Critério ordinal fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (60 no isótopo mais comum)",
        "value": "Estável",
        "justification": "Critério fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Todos os isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Catalisadores, joias, dispositivos de armazenamento",
        "justification": "Fundamental na indústria automotiva e tecnológica.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto de platina e níquel",
        "justification": "Produção complexa e dependente.",
        "score": 45
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Absorve até 900 vezes seu volume em hidrogênio",
        "justification": "Fascinante do ponto de vista físico-químico.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Da deusa Palas Atena / asteroide Palas",
        "justification": "Referência mitológica e astronômica.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Hyde Wollaston (1803)",
        "justification": "Mesmo descobridor do ródio; figura histórica importante.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1803",
        "justification": "Período clássico de avanços em química analítica.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1554 °C / 1827 K / 2829 °F",
        "justification": "Alto o suficiente para aplicações técnicas.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2963 °C / 3236 K / 5365 °F",
        "justification": "Excelente estabilidade térmica.",
        "score": 80
      }
    ]
  },
  "Ag": {
    "number": 47,
    "symbol": "Ag",
    "name": "Prata",
    "heroName": "Silver Flash",
    "heroDescription": "O condutor supremo e mestre do brilho absoluto. Silver Flash é o herói que transporta energia sem perdas e purifica o mundo com seu toque antibacteriano.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Silver%20Flash%2C%20representing%20the%20chemical%20element%20Prata%20(Symbol%3A%20Ag)%2C%20O%20condutor%20supremo%20e%20mestre%20do%20brilho%20absoluto.%20Silver%20Flash%20%C3%A9%20o%20her%C3%B3i%20que%20transporta%20energia%20sem%20perdas%20e%20purifica%20o%20mundo%20com%20seu%20toque%20antibacteriano..%20Style%3A%20glowing%20symbol%20Ag%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida ao ar, amolece com uso",
        "justification": "Apesar de resistente, é menos durável que metais nobres mais duros.",
        "score": 55
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Relativamente segura, mas mineração poluente",
        "justification": "Pouco tóxica, mas causa impacto ambiental na extração.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo (exceto compostos como nitrato de prata)",
        "justification": "Sólido metálico é seguro; compostos requerem cuidado.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Joalheria, eletrônica, medicina, fotografia",
        "justification": "Altamente útil, amplo espectro de aplicações.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +1 (raro: +2, +3)",
        "justification": "Quimicamente limitado em termos de variação de estados.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente rara (~0,075 ppm)",
        "justification": "Não é comum, mas amplamente extraída historicamente.",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Rara",
        "justification": "Baixa produção cósmica.",
        "score": 15
      },
      {
        "id": 8,
        "label": "Massa atômica (107,87 u)",
        "value": "Média/alta",
        "justification": "Valor típico de um metal de transição.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade (10,49 g/cm³)",
        "value": "Alta",
        "justification": "Bastante densa, ideal para ligas e condutores.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~144 pm)",
        "value": "Médio-alto",
        "justification": "Bom tamanho para ligações metálicas.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Principal: +1",
        "justification": "Pouca diversidade oxidativa.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "A mais alta entre todos os elementos",
        "justification": "É o melhor condutor elétrico existente.",
        "score": 100
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,93)",
        "value": "Moderada",
        "justification": "Boa para formar complexos, mas não se destaca.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável, fácil de trabalhar.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d¹⁰",
        "justification": "Subnível completo, favorece estabilidade.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s¹",
        "justification": "Simples, didática, fácil de entender.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=47)",
        "value": "47",
        "justification": "Padrão numérico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (61 no isótopo comum)",
        "value": "Estável",
        "justification": "Critério fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Todos os isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Extensa: moedas, joias, circuitos, catálise",
        "justification": "Um dos elementos mais aplicáveis da história.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Diversos — extração desde a Antiguidade",
        "justification": "Descoberta e uso milenares em diversas civilizações.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usada como padrão monetário por milênios",
        "justification": "Valor cultural e econômico imenso.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Latim argentum (brilho branco)",
        "justification": "Etimologia clara e coerente.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Pré-histórico (conhecido desde a Antiguidade)",
        "justification": "Não há registro — sua presença é milenar.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "Antiguidade (~3000 a.C.)",
        "justification": "Um dos primeiros metais usados pelo ser humano.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "961,8 °C / 1234,9 K / 1763,2 °F",
        "justification": "Ponto relativamente baixo entre metais nobres.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2162 °C / 2435 K / 3924 °F",
        "justification": "Boa estabilidade térmica.",
        "score": 80
      }
    ]
  },
  "Cd": {
    "number": 48,
    "symbol": "Cd",
    "name": "Cádmio",
    "heroName": "Cadmium Toxic",
    "heroDescription": "O herói da energia duradoura e mestre das barreiras. Cadmium Toxic é o guardião das baterias e o escudo contra nêutrons, um guerreiro que exige respeito e manuseio cuidadoso.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Cadmium%20Toxic%2C%20representing%20the%20chemical%20element%20C%C3%A1dmio%20(Symbol%3A%20Cd)%2C%20O%20her%C3%B3i%20da%20energia%20duradoura%20e%20mestre%20das%20barreiras.%20Cadmium%20Toxic%20%C3%A9%20o%20guardi%C3%A3o%20das%20baterias%20e%20o%20escudo%20contra%20n%C3%AAutrons%2C%20um%20guerreiro%20que%20exige%20respeito%20e%20manuseio%20cuidadoso..%20Style%3A%20glowing%20symbol%20Cd%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Macio, facilmente deformável, tóxico",
        "justification": "Frágil e perigoso para a saúde e o ambiente.",
        "score": 35
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Alta toxicidade ambiental",
        "justification": "Contamina solo e água; difícil de neutralizar.",
        "score": 20
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente tóxico (cancerígeno)",
        "justification": "Tóxico mesmo em pequenas quantidades — inalatório ou por contato.",
        "score": 15
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Baterias, pigmentos, semicondutores",
        "justification": "Importante para indústrias específicas.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado fixo +2",
        "justification": "Quimicamente previsível, mas pouco versátil.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente rara (~0,1 ppm)",
        "justification": "Obtido como subproduto do zinco.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Rara",
        "justification": "Produzido em eventos estelares massivos.",
        "score": 15
      },
      {
        "id": 8,
        "label": "Massa atômica (112,41 u)",
        "value": "Alta",
        "justification": "Valor esperado para metais do bloco d.",
        "score": 45
      },
      {
        "id": 9,
        "label": "Densidade (8,65 g/cm³)",
        "value": "Alta",
        "justification": "Consideravelmente denso.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~148 pm)",
        "value": "Alto",
        "justification": "Favorece ligação iônica.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 (único)",
        "justification": "Extremamente limitado.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Bastante condutor metálico.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,69)",
        "value": "Baixa",
        "justification": "Forma compostos iônicos, mas sem destaque.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável e fácil de fundir/moldar.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4d¹⁰",
        "justification": "Subnível estável e completo.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s²",
        "justification": "Clara e regular.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=48)",
        "value": "48",
        "justification": "Valor fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (64 no isótopo comum)",
        "value": "Estável",
        "justification": "Critério fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Todos os isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Baterias (NiCd), pigmentos, ligações metálicas",
        "justification": "Embora tóxico, é muito utilizado em eletrônica e revestimento.",
        "score": 70
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto da mineração de zinco",
        "justification": "Extração indireta, porém acessível.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Brilho metálico usado em pigmentos e painéis solares",
        "justification": "Usado em CdTe, um semicondutor solar.",
        "score": 60
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim cadmia (minério de zinco)",
        "justification": "Nome ligado à sua origem geológica.",
        "score": 65
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Friedrich Stromeyer (1817)",
        "justification": "Descoberto em contexto de química médica.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1817",
        "justification": "Idade científica relevante.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "321,07 °C / 594,22 K / 609,93 °F",
        "justification": "Funde com facilidade — útil e perigoso.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "767 °C / 1040 K / 1412,6 °F",
        "justification": "Evapora rapidamente — risco de vapores tóxicos.",
        "score": 30
      }
    ]
  },
  "In": {
    "number": 49,
    "symbol": "In",
    "name": "Índio",
    "heroName": "Indium Screen",
    "heroDescription": "O herói da visão digital e mestre do toque. Indium Screen é o elemento que torna as telas sensíveis e transparentes, conectando a humanidade ao mundo virtual com sua condutividade mágica.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Indium%20Screen%2C%20representing%20the%20chemical%20element%20%C3%8Dndio%20(Symbol%3A%20In)%2C%20O%20her%C3%B3i%20da%20vis%C3%A3o%20digital%20e%20mestre%20do%20toque.%20Indium%20Screen%20%C3%A9%20o%20elemento%20que%20torna%20as%20telas%20sens%C3%ADveis%20e%20transparentes%2C%20conectando%20a%20humanidade%20ao%20mundo%20virtual%20com%20sua%20condutividade%20m%C3%A1gica..%20Style%3A%20glowing%20symbol%20In%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente macio, pode ser arranhado com a unha",
        "justification": "Frágil e pouco resistente mecanicamente.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Extração moderadamente agressiva, mas não muito tóxico",
        "justification": "Não é perigoso por si, mas mineração pode causar danos ambientais.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo como metal; alguns compostos são tóxicos",
        "justification": "Seguro ao toque, mas vapores e sais exigem cuidado.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Indispensável em telas sensíveis ao toque, LEDs e semicondutores",
        "justification": "Fundamental na indústria eletrônica moderna.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +1 e +3",
        "justification": "Mais versátil que o cádmio, mas ainda limitado.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito raro (~0,05 ppm na crosta)",
        "justification": "Encontrado principalmente como subproduto do zinco.",
        "score": 30
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Raríssimo",
        "justification": "Um dos elementos menos abundantes cosmicamente.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (114,82 u)",
        "value": "Alta",
        "justification": "Valor esperado para sua posição.",
        "score": 45
      },
      {
        "id": 9,
        "label": "Densidade (7,31 g/cm³)",
        "value": "Média/alta",
        "justification": "Menos denso que metais de transição, mas considerável.",
        "score": 65
      },
      {
        "id": 10,
        "label": "Raio atômico (~156 pm)",
        "value": "Grande",
        "justification": "Facilita formação de compostos iônicos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1 e +3",
        "justification": "Comportamento químico moderadamente flexível.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Usado como camada condutora em dispositivos eletrônicos.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,78)",
        "value": "Moderadamente baixa",
        "justification": "Predominantemente eletropositivo.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável, maleável, facilmente moldável.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5p¹",
        "justification": "Típico início do bloco p, facilmente previsível.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s² 5p¹",
        "justification": "Bastante clara e pedagógica.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=49)",
        "value": "49",
        "justification": "Número fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (66 no isótopo comum)",
        "value": "Estável",
        "justification": "Valor fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (In-115 é fracamente radioativo, meia-vida de trilhões de anos)",
        "justification": "Praticamente estável para aplicações práticas.",
        "score": 90
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "LCDs, semicondutores, painéis solares, soldas",
        "justification": "Elemento chave em eletrônica e energias limpas.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de esfalerita e minérios de zinco",
        "justification": "Produção indireta e escassa.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Emite som agudo ao ser dobrado (\"crying metal\")",
        "justification": "Propriedade acústica incomum e marcante.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Da cor índigo em seu espectro",
        "justification": "Etimologia científica interessante.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Ferdinand Reich e Hieronymus Richter (1863)",
        "justification": "Descoberto por espectroscopia.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1863",
        "justification": "Período relevante para química analítica.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "156,6 °C / 429,8 K / 313,9 °F",
        "justification": "Muito baixo — usado em ligas de fusão rápida.",
        "score": 45
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2072 °C / 2345 K / 3761,6 °F",
        "justification": "Considerável estabilidade térmica em alta temperatura.",
        "score": 80
      }
    ]
  },
  "Sn": {
    "number": 50,
    "symbol": "Sn",
    "name": "Estanho",
    "heroName": "Tin Guardian",
    "heroDescription": "O herói da preservação e mestre das ligas ancestrais. Tin Guardian é o protetor dos metais contra a corrosão e o pilar do bronze, unindo o passado ao futuro tecnológico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Tin%20Guardian%2C%20representing%20the%20chemical%20element%20Estanho%20(Symbol%3A%20Sn)%2C%20O%20her%C3%B3i%20da%20preserva%C3%A7%C3%A3o%20e%20mestre%20das%20ligas%20ancestrais.%20Tin%20Guardian%20%C3%A9%20o%20protetor%20dos%20metais%20contra%20a%20corros%C3%A3o%20e%20o%20pilar%20do%20bronze%2C%20unindo%20o%20passado%20ao%20futuro%20tecnol%C3%B3gico..%20Style%3A%20glowing%20symbol%20Sn%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "\"Praga do estanho\", amolece a frio",
        "justification": "Perde estrutura a baixas temperaturas, sensível à oxidação lenta.",
        "score": 45
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Baixa toxicidade e extração moderada",
        "justification": "Comparativamente seguro e abundante.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo (exceto compostos orgânicos de Sn)",
        "justification": "O metal em si é seguro, mas organoestanhos são tóxicos.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas metálicas, soldas, embalagens, pigmentos",
        "justification": "Altamente útil e versátil.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2 e +4",
        "justification": "Boa diversidade química.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (~2 ppm na crosta)",
        "justification": "Relativamente acessível geologicamente.",
        "score": 55
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Pouco produzido estelarmente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (118,71 u)",
        "value": "Alta",
        "justification": "Dentro do esperado para seu grupo.",
        "score": 45
      },
      {
        "id": 9,
        "label": "Densidade (7,31 g/cm³)",
        "value": "Moderada",
        "justification": "Nem muito leve nem muito denso.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Raio atômico (~145 pm)",
        "value": "Médio-alto",
        "justification": "Facilita ligações com não-metais.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 e +4",
        "justification": "Comportamento versátil, permite compostos orgânicos e inorgânicos.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Útil em revestimentos condutores e soldas.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,96)",
        "value": "Moderada",
        "justification": "Balanceia bem ligações iônicas e covalentes.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável e manuseável.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5p²",
        "justification": "Dentro do esperado do bloco p.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s² 5p²",
        "justification": "Clara, ideal para o ensino de química.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=50)",
        "value": "50",
        "justification": "Número fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (69 no isótopo comum)",
        "value": "Estável",
        "justification": "Critério fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (10 isótopos estáveis!)",
        "justification": "Um dos elementos com maior variedade de isótopos estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Soldas, bronze, embalagens, compostos químicos",
        "justification": "Amplo uso industrial e químico.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Cassiterita (SnO₂) – jazidas abundantes",
        "justification": "Extração acessível e global.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "\"Praga do estanho\" – se pulveriza no frio",
        "justification": "Propriedade rara e intrigante.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Latim stannum",
        "justification": "Nome antigo e etimologicamente claro.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido – uso desde a Antiguidade",
        "justification": "Um dos primeiros metais usados pela humanidade.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "~3000 a.C.",
        "justification": "História arqueológica milenar (Ex: Idade do Bronze).",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "231,93 °C / 505,08 K / 449,47 °F",
        "justification": "Funde com facilidade – útil em soldas.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2602 °C / 2875 K / 4715,6 °F",
        "justification": "Alta estabilidade térmica após fusão.",
        "score": 80
      }
    ]
  },
  "Sb": {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimônio",
    "heroName": "Antimony Flame",
    "heroDescription": "O mestre do fogo contido e herói da segurança. Antimony Flame é o protetor que impede que as chamas se espalhem, fortalecendo baterias e eletrônicos com sua resistência lendária.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Antimony%20Flame%2C%20representing%20the%20chemical%20element%20Antim%C3%B4nio%20(Symbol%3A%20Sb)%2C%20O%20mestre%20do%20fogo%20contido%20e%20her%C3%B3i%20da%20seguran%C3%A7a.%20Antimony%20Flame%20%C3%A9%20o%20protetor%20que%20impede%20que%20as%20chamas%20se%20espalhem%2C%20fortalecendo%20baterias%20e%20eletr%C3%B4nicos%20com%20sua%20resist%C3%AAncia%20lend%C3%A1ria..%20Style%3A%20glowing%20symbol%20Sb%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Quebra com facilidade, forma tóxica em pó",
        "justification": "Frágil mecanicamente e levemente tóxico.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Pode contaminar o solo e água",
        "justification": "Moderado impacto ambiental.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Compostos são tóxicos; exposição prolongada perigosa",
        "justification": "Associado a problemas respiratórios e de pele.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Importante em ligas, retardantes de chamas, semicondutores",
        "justification": "Vários usos modernos e industriais.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +3, +5, -3",
        "justification": "Boa variedade de compostos.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Relativamente raro (~0,2 ppm)",
        "justification": "Encontrado em estibnita (Sb₂S₃).",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Produzido em estrelas de nêutrons e supernovas.",
        "score": 15
      },
      {
        "id": 8,
        "label": "Massa atômica (121,76 u)",
        "value": "Alta",
        "justification": "Valor típico para o grupo 15.",
        "score": 45
      },
      {
        "id": 9,
        "label": "Densidade (6,697 g/cm³)",
        "value": "Média",
        "justification": "Adequado para ligas metálicas.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Raio atômico (~140 pm)",
        "value": "Médio",
        "justification": "Estável para formar íons ou moléculas.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "5",
        "justification": "Boa diversidade de reações.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Semimetálico, não tão eficiente quanto metais.",
        "score": 55
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,05)",
        "value": "Relativamente alta (metalóide)",
        "justification": "Intermediária entre metais e não metais.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Sólido",
        "justification": "Estável sob condições ambiente.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5p³",
        "justification": "Comportamento típico de elementos do grupo 15.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s² 5p³",
        "justification": "Simples e previsível.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=51)",
        "value": "51",
        "justification": "Valor fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (71 no isótopo comum)",
        "value": "Estável",
        "justification": "Valor fixo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo natural não radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas metálicas, retardantes, pigmentos, semicondutores",
        "justification": "Industrialmente útil.",
        "score": 75
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído da estibnita",
        "justification": "Mineração comum na China, Bolívia, Rússia.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos primeiros elementos conhecidos, citado por alquimistas",
        "justification": "Longa história de uso humano.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego \"anti + monos\" (não sozinho)",
        "justification": "Etimologia rica, ligada à alquimia.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Usado em cosméticos no Egito antigo.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "Pré-histórico (≈3000 a.C.)",
        "justification": "Um dos mais antigos de uso humano.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "630,63 °C / 903,78 K / 1167,13 °F",
        "justification": "Moderado — funde facilmente para ligas.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1587 °C / 1860 K / 2888,6 °F",
        "justification": "Relativamente elevado — boa estabilidade térmica.",
        "score": 65
      }
    ]
  },
  "Te": {
    "number": 52,
    "symbol": "Te",
    "name": "Telúrio",
    "heroName": "Tellurium Memory",
    "heroDescription": "O mestre do armazenamento óptico e fotocondutividade, um herói que converte luz em energia e guarda dados com precisão semicondutora.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Tellurium%20Memory%2C%20representing%20the%20chemical%20element%20Tel%C3%BArio%20(Symbol%3A%20Te)%2C%20O%20mestre%20do%20armazenamento%20%C3%B3ptico%20e%20fotocondutividade%2C%20um%20her%C3%B3i%20que%20converte%20luz%20em%20energia%20e%20guarda%20dados%20com%20precis%C3%A3o%20semicondutora..%20Style%3A%20glowing%20symbol%20Te%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Frágil, tóxico em altas doses, odor forte em compostos",
        "justification": "Pode causar efeitos adversos e cheiros desagradáveis.",
        "score": 25
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco abundante, tóxico em excesso, mas não acumulativo",
        "justification": "Precisa de controle ambiental.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Inalação ou ingestão pode causar intoxicação",
        "justification": "É necessário controle em ambientes industriais.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em ligas, semicondutores, painéis solares",
        "justification": "Importante na tecnologia verde e eletrônica.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados −2, +2, +4, +6",
        "justification": "Boa variedade de compostos.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara (~0,001 ppm na crosta)",
        "justification": "Um dos elementos menos abundantes.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Extremamente raro no cosmos.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~127,6 u)",
        "value": "Alta para um não metal",
        "justification": "Compatível com sua posição no bloco p.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (6,24 g/cm³)",
        "value": "Moderada",
        "justification": "Intermediária entre metais e não metais.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~140 pm)",
        "value": "Médio",
        "justification": "Compatível com seu grupo e período.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "−2, +2, +4, +6",
        "justification": "Quimicamente versátil.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semimetal: condutor moderado",
        "justification": "Melhor que os não metais típicos.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,1)",
        "value": "Moderada",
        "justification": "Equilíbrio entre doadores e receptores.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido",
        "justification": "Cristalino, quebradiço.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5p⁴",
        "justification": "Posição clara no bloco p.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s² 5p⁴",
        "justification": "Útil para ilustrar configuração p.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=52)",
        "value": "52",
        "justification": "Elemento médio-pesado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (76 no isótopo comum)",
        "value": "5",
        "justification": "Padrão para o grupo.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo Te-130 é fraco radioativo natural.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fotovoltaico, termoelétrico, ligas metálicas",
        "justification": "Alta relevância tecnológica.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais de cobre, ouro e chumbo (subproduto)",
        "justification": "Raramente encontrado sozinho.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Ingerido acidentalmente pode causar hálito metálico com odor forte",
        "justification": "Sintoma conhecido como \"telurismo\".",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim Tellus (“Terra”)",
        "justification": "Nome geocêntrico e elegante.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Martin Heinrich Klaproth (1798)",
        "justification": "Mesmo descobridor do Zircônio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1798",
        "justification": "Fim do século XVIII.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "449,5 °C / 722,6 K / 841,1 °F",
        "justification": "Baixo comparado a metais.",
        "score": 45
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "988 °C / 1261 K / 1810,4 °F",
        "justification": "Moderadamente alto.",
        "score": 55
      }
    ]
},
  "I": {
    "number": 53,
    "symbol": "I",
    "name": "Iodo",
    "heroName": "Iodine Shield",
    "heroDescription": "O sentinela da saúde e guardião da tireoide, essencial para o equilíbrio metabólico e mestre da sublimação purificadora.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Iodine%20Shield%2C%20representing%20the%20chemical%20element%20Iodo%20(Symbol%3A%20I)%2C%20O%20sentinela%20da%20sa%C3%BAde%20e%20guardi%C3%A3o%20da%20tireoide%2C%20essencial%20para%20o%20equil%C3%ADbrio%20metab%C3%B3lico%20e%20mestre%20da%20sublima%C3%A7%C3%A3o%20purificadora..%20Style%3A%20glowing%20symbol%20I%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Sublima facilmente, irritante, volátil",
        "justification": "Exige manuseio com cautela.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em pequenas quantidades, tóxico em excesso",
        "justification": "Benefício natural, mas tóxico em doses altas.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pode causar lesões na pele e intoxicação",
        "justification": "Uso medicinal precisa de controle.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Saúde (tireoide), antisséptico, raio-X, catalisadores",
        "justification": "Muito útil em medicina e indústria.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações −1, +1, +3, +5, +7",
        "justification": "Altamente versátil quimicamente.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente raro (~0,05 ppm)",
        "justification": "Pouco comum, mas não crítico.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Pouco formado em processos estelares.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~126,9 u)",
        "value": "Alta",
        "justification": "Valor alto entre os halogênios.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (4,93 g/cm³)",
        "value": "Média",
        "justification": "Para um não-metal, é relativamente denso.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~133 pm)",
        "value": "Médio",
        "justification": "Esperado para sua posição no grupo.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "−1 a +7",
        "justification": "Quimicamente extremamente versátil.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Fraca como sólido",
        "justification": "Não condutor como halogênio sólido.",
        "score": 20
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,66)",
        "value": "Alta",
        "justification": "Um dos mais eletronegativos.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido (sublima)",
        "justification": "Sólido volátil de bela coloração violeta.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5p⁵",
        "justification": "Clássico para ensino sobre halogênios.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s² 5p⁵",
        "justification": "Exemplo didático de camada quase completa.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=53)",
        "value": "53",
        "justification": "Peso médio-alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (74 no isótopo comum)",
        "value": "5",
        "justification": "Padrão entre elementos da sua massa.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (I-127), mas radioisótopos (I-131) são perigosos",
        "justification": "I-131 é radioativo e usado em tratamentos.",
        "score": 60
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Medicina, nutrição, tintas, fotografia",
        "justification": "Altamente utilizado.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de algas, salmouras e minerais",
        "justification": "Origem natural variada.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Forma fumaça violeta ao sublimar",
        "justification": "Fenômeno visual conhecido.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego iodes, “violeta”",
        "justification": "Nome direto da aparência.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Bernard Courtois (1811)",
        "justification": "Descoberto a partir de algas marinhas.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1811",
        "justification": "Início do século XIX.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "113,7 °C / 386,9 K / 236,7 °F",
        "justification": "Muito baixo entre os sólidos.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "184,3 °C / 457,4 K / 363,7 °F",
        "justification": "Sublima com facilidade.",
        "score": 40
      }
    ]
},
  "Xe": {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenônio",
    "heroName": "Xenon Bright",
    "heroDescription": "O iluminador nobre e motor de íons cósmicos, um herói que rasga a escuridão com luz intensa e impulsiona naves rumo às estrelas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Xenon%20Bright%2C%20representing%20the%20chemical%20element%20Xen%C3%B4nio%20(Symbol%3A%20Xe)%2C%20O%20iluminador%20nobre%20e%20motor%20de%20%C3%ADons%20c%C3%B3smicos%2C%20um%20her%C3%B3i%20que%20rasga%20a%20escurid%C3%A3o%20com%20luz%20intensa%20e%20impulsiona%20naves%20rumo%20%C3%A0s%20estrelas..%20Style%3A%20glowing%20symbol%20Xe%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Gás nobre, difícil de reagir, escasso",
        "justification": "Extremamente estável, mas com uso limitado.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Inerte, não poluente",
        "justification": "Baixíssimo impacto ambiental.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo, mas pode causar anestesia e sufocamento",
        "justification": "Seguro em concentrações normais.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Iluminação, anestesia, propulsão iônica",
        "justification": "Alta aplicação tecnológica e médica.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Raramente forma compostos (+2, +4, +6, +8)",
        "justification": "Notável por ser gás nobre que forma compostos.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara (~0,0000087% na atmosfera)",
        "justification": "Extremamente escasso na Terra.",
        "score": 5
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Um dos gases nobres menos abundantes.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~131,29 u)",
        "value": "Alta",
        "justification": "Um dos mais pesados gases nobres.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (5,894 g/L)",
        "value": "Alta entre os gases",
        "justification": "Gás mais pesado entre os estáveis.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~108 pm)",
        "value": "Médio",
        "justification": "Compatível com o grupo 18.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "0, +2, +4, +6, +8",
        "justification": "Exceção notável entre os gases nobres.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Baixa como gás, usada em descargas",
        "justification": "Condutividade observável sob alta tensão.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,6)",
        "value": "Alta",
        "justification": "Maior que a de muitos metais.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gás recebe nota mínima por critérios físicos.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5p⁶",
        "justification": "Final de um período, gás nobre clássico.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 4d¹⁰ 5s² 5p⁶",
        "justification": "Perfeito para estudo de camadas completas.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=54)",
        "value": "54",
        "justification": "Típico de elementos médios-pesados.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (77 no isótopo comum)",
        "value": "5",
        "justification": "Padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável, mas com isótopos radioativos naturais (ex: Xe-133)",
        "justification": "Xe-133 é usado em medicina nuclear.",
        "score": 70
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Lâmpadas, lasers, anestesia, motores iônicos",
        "justification": "Relevância em áreas críticas.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído do ar líquido (destilação fracionada)",
        "justification": "Difícil extração, mas bem dominada.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos únicos gases nobres que forma compostos",
        "justification": "Quebrou a ideia da total inércia química.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego xenos (“estranho”)",
        "justification": "Nome condizente com suas propriedades inusitadas.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Ramsay e Morris Travers (1898)",
        "justification": "Pioneiros na descoberta dos gases nobres.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Parte do avanço da química gasosa.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "−111,8 °C / 161,4 K / −169,2 °F",
        "justification": "Congela a temperaturas extremamente baixas.",
        "score": 20
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "−108,1 °C / 165,0 K / −162,6 °F",
        "justification": "Pouco utilizável em estado líquido sem controle criogênico.",
        "score": 20
      }
    ]
},
  "Cs": {
    "number": 55,
    "symbol": "Cs",
    "name": "Césio",
    "heroName": "Cesium Clock",
    "heroDescription": "O mestre do tempo absoluto e guardião da precisão atômica, cujas vibrações definem o ritmo do universo tecnológico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Cesium%20Clock%2C%20representing%20the%20chemical%20element%20C%C3%A9sio%20(Symbol%3A%20Cs)%2C%20O%20mestre%20do%20tempo%20absoluto%20e%20guardi%C3%A3o%20da%20precis%C3%A3o%20at%C3%B4mica%2C%20cujas%20vibra%C3%A7%C3%B5es%20definem%20o%20ritmo%20do%20universo%20tecnol%C3%B3gico..%20Style%3A%20glowing%20symbol%20Cs%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente reativo, explode com água, ar",
        "justification": "Um dos metais mais perigosos em contato com umidade.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altamente reativo, mas útil em eletrônica e relógios atômicos",
        "justification": "Uso tecnológico alto, mas risco ambiental sério.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Perigoso: queimaduras químicas e radioisótopos tóxicos",
        "justification": "Césio-137 é radioativo e perigoso.",
        "score": 20
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Relógios atômicos, sondas espaciais, sensores",
        "justification": "Alta aplicação em ciência de precisão.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação +1 apenas",
        "justification": "Extremamente limitado quimicamente.",
        "score": 20
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raro (~3 ppm na crosta)",
        "justification": "Menos comum que outros metais alcalinos.",
        "score": 30
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Pouco formado por fusão estelar.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~132,91 u)",
        "value": "Alta",
        "justification": "Um dos metais alcalinos mais pesados.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (1,93 g/cm³)",
        "value": "Baixa",
        "justification": "Leve entre os metais.",
        "score": 25
      },
      {
        "id": 10,
        "label": "Raio atômico (~265 pm)",
        "value": "Muito grande",
        "justification": "Um dos maiores entre os elementos.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1 apenas",
        "justification": "Pouca versatilidade.",
        "score": 10
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Excelente",
        "justification": "Condutor metálico excelente.",
        "score": 90
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,79)",
        "value": "Muito baixa",
        "justification": "Um dos elementos menos eletronegativos.",
        "score": 5
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico, quase líquido",
        "justification": "Ponto de fusão muito baixo para um sólido.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6s¹",
        "justification": "Configuração simples, típico de alcalino.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 6s¹",
        "justification": "Simples e muito usada em ensino.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=55)",
        "value": "55",
        "justification": "Valor intermediário-alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (78 no isótopo comum)",
        "value": "5",
        "justification": "Comportamento estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Cs-133); radioisótopos (Cs-137) perigosos",
        "justification": "Isótopo natural estável, mas radioisótopos perigosos.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Relógios atômicos, sensores, física nuclear",
        "justification": "Extremamente importante para padrões científicos.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de minerais como pollucita",
        "justification": "Encontrado em locais específicos como Canadá e Zimbábue.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Define o segundo (tempo) nos relógios atômicos",
        "justification": "Usado como padrão internacional de tempo.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim caesius (azulado), pela cor da chama",
        "justification": "Nome descritivo e bem escolhido.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Robert Bunsen e Gustav Kirchhoff (1860)",
        "justification": "Também inventores do espectroscópio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1860",
        "justification": "Parte da era da espectroscopia.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "28,4 °C / 301,6 K / 83,1 °F",
        "justification": "Quase líquido em temperatura ambiente.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "671 °C / 944 K / 1240 °F",
        "justification": "Moderado para um metal.",
        "score": 55
      }
    ]
},
  "Ba": {
    "number": 56,
    "symbol": "Ba",
    "name": "Bário",
    "heroName": "Barium Vision",
    "heroDescription": "O revelador de contrastes e mestre da transparência interna, capaz de tornar visível o invisível através de raios-X e diagnósticos.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Barium%20Vision%2C%20representing%20the%20chemical%20element%20B%C3%A1rio%20(Symbol%3A%20Ba)%2C%20O%20revelador%20de%20contrastes%20e%20mestre%20da%20transpar%C3%AAncia%20interna%2C%20capaz%20de%20tornar%20vis%C3%ADvel%20o%20invis%C3%ADvel%20atrav%C3%A9s%20de%20raios-X%20e%20diagn%C3%B3sticos..%20Style%3A%20glowing%20symbol%20Ba%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo com ar, inflamável em pó, forma peróxidos",
        "justification": "Perigoso se não manipulado corretamente.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Compostos tóxicos, mas aplicável com segurança controlada",
        "justification": "Precisa de cuidados ambientais.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente tóxico em compostos solúveis",
        "justification": "Compostos insolúveis (como sulfato) são usados na medicina.",
        "score": 20
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em radiologia, pirotecnia, ligas metálicas",
        "justification": "Aplicações médicas e industriais.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação +2 apenas",
        "justification": "Pouca variedade química.",
        "score": 25
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Relativamente comum (~425 ppm na crosta)",
        "justification": "Bem distribuído, fácil extração de barita.",
        "score": 70
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Moderadamente baixo",
        "justification": "Não muito comum cosmicamente.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica (~137,33 u)",
        "value": "Alta",
        "justification": "Condizente com metais alcalino-terrosos.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (3,62 g/cm³)",
        "value": "Baixa a média",
        "justification": "Mais leve que a maioria dos metais de transição.",
        "score": 40
      },
      {
        "id": 10,
        "label": "Raio atômico (~253 pm)",
        "value": "Muito grande",
        "justification": "Tamanho típico de metais alcalino-terrosos pesados.",
        "score": 85
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 apenas",
        "justification": "Limitado quimicamente.",
        "score": 10
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor metálico eficiente.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,89)",
        "value": "Muito baixa",
        "justification": "Um dos valores mais baixos.",
        "score": 5
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6s²",
        "justification": "Fácil de ensinar e entender.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 6s²",
        "justification": "Curta, clara e didática.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=56)",
        "value": "56",
        "justification": "Faixa média-alta.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (81 no isótopo comum)",
        "value": "5",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável, mas alguns isótopos radioativos",
        "justification": "Baixa radioatividade natural.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Radiologia digestiva, tintas, vidros, explosivos",
        "justification": "Bastante usado, especialmente como sulfato.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Presente em barita e witherita (minerais comuns)",
        "justification": "Extração conhecida e viável.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Sulfato de bário é usado em raios-X por ser opaco à radiação",
        "justification": "Muito conhecido na medicina.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego barys (“pesado”)",
        "justification": "Nome representa propriedade física.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Wilhelm Scheele (1774), isolado por Humphry Davy (1808)",
        "justification": "Dois grandes nomes da química.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1808 (isolamento metálico)",
        "justification": "Isolamento por eletrólise.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "727 °C / 1000 K / 1340,6 °F",
        "justification": "Ponto de fusão moderado para um metal.",
        "score": 55
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1897 °C / 2170 K / 3446,6 °F",
        "justification": "Temperatura elevada, útil para aplicações térmicas.",
        "score": 75
      }
    ]
},
  "La": {
    "number": 57,
    "symbol": "La",
    "name": "Lantânio",
    "heroName": "Lanthanum Luminous",
    "heroDescription": "O mestre da luz branca e da ótica, um herói que clareia o caminho com precisão científica.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Lanthanum%20Luminous%2C%20representing%20the%20chemical%20element%20Lant%C3%A2nio%20(Symbol%3A%20La)%2C%20O%20mestre%20da%20luz%20branca%20e%20da%20%C3%B3tica%2C%20um%20her%C3%B3i%20que%20clareia%20o%20caminho%20com%20precis%C3%A3o%20cient%C3%ADfica..%20Style%3A%20glowing%20symbol%20La%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo com ar e água, oxida facilmente",
        "justification": "Exige armazenamento cuidadoso.",
        "score": 25
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Relativamente seguro, mas mineração impactante",
        "justification": "Mineração de terras raras tem custo ambiental.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, porém irritante se inalado",
        "justification": "Exposição prolongada pode causar efeitos respiratórios.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Lentes de câmera, baterias, catalisadores, medicina",
        "justification": "Muito útil tecnologicamente.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3, raramente +2",
        "justification": "Ligação química limitada mas relevante.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Relativamente comum (~39 ppm)",
        "justification": "Um dos lantanídeos mais abundantes.",
        "score": 70
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Pouco formado em estrelas.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~138,91 u)",
        "value": "Alta",
        "justification": "Valor típico dos lantanídeos.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (6,15 g/cm³)",
        "value": "Moderada",
        "justification": "Dentro da média entre metais leves e densos.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~195 pm)",
        "value": "Grande",
        "justification": "Um dos maiores entre os metais do bloco f.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (principal), +2 (raro)",
        "justification": "Pouca variedade, mas reatividade clara.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor metálico eficiente.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,1)",
        "value": "Baixa",
        "justification": "Tendência fortemente doadora.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável e utilizável em ambiente padrão.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d¹ 6s² (início dos lantanídeos)",
        "justification": "Relevante para ensino de blocos f e d.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 5d¹ 6s²",
        "justification": "Início simples do bloco f.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=57)",
        "value": "57",
        "justification": "Valor crescente para lantanídeos.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (82 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (La-139)",
        "justification": "Totalmente estável na natureza.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Vidros ópticos, eletrodos, medicina, carros híbridos",
        "justification": "Alto impacto em tecnologias modernas.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais como monazita e bastnasita",
        "justification": "Presentes em minas de terras raras.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Dá nome ao grupo dos lantanídeos",
        "justification": "Elemento que inicia uma série.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego lanthanein (“escondido”)",
        "justification": "Reflete sua descoberta em minerais complexos.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Gustaf Mosander (1839)",
        "justification": "Mesmo descobridor de outros lantanídeos.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1839",
        "justification": "Importante marco no estudo das terras raras.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "920 °C / 1193 K / 1688 °F",
        "justification": "Alto o suficiente para aplicações estruturais.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3464 °C / 3737 K / 6267 °F",
        "justification": "Muito elevado, útil para aplicações térmicas extremas.",
        "score": 90
      }
    ]
},
  "Ce": {
    "number": 58,
    "symbol": "Ce",
    "name": "Cério",
    "heroName": "Cerium Spark",
    "heroDescription": "O mestre da ignição e das ligas metálicas, um herói que brilha sob pressão.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Cerium%20Spark%2C%20representing%20the%20chemical%20element%20C%C3%A9rio%20(Symbol%3A%20Ce)%2C%20O%20mestre%20da%20igni%C3%A7%C3%A3o%20e%20das%20ligas%20met%C3%A1licas%2C%20um%20her%C3%B3i%20que%20brilha%20sob%20press%C3%A3o..%20Style%3A%20glowing%20symbol%20Ce%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo com ar, oxidável, forma poeira inflamável",
        "justification": "Deve ser armazenado em óleo ou atmosfera inerte.",
        "score": 25
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Relativamente seguro, mas extração impactante",
        "justification": "Mineração de terras raras causa impacto ambiental.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, mas pode causar irritações",
        "justification": "Seguro se manuseado adequadamente.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Catalisadores, polimento óptico, filtros UV, medicina",
        "justification": "Muito usado em múltiplas indústrias.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 e +4",
        "justification": "Mais versátil que o lantânio.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito comum (~66 ppm)",
        "justification": "O lantanídeo mais abundante.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Como todos os lantanídeos, raro fora da Terra.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~140,12 u)",
        "value": "Alta",
        "justification": "Esperado para sua posição.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (6,77 g/cm³)",
        "value": "Moderada",
        "justification": "Similar a outros lantanídeos.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~185 pm)",
        "value": "Grande",
        "justification": "Padrão para o bloco f.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "7",
        "justification": "Maior variedade que o La.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Metal com propriedades condutivas.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,12)",
        "value": "Baixa",
        "justification": "Reativo, típico dos lantanídeos.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável para uso industrial.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹ 5d¹ 6s²",
        "justification": "Início visível da ocupação do bloco f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹ 5d¹ 6s²",
        "justification": "Útil em ensino sobre eletrons f.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=58)",
        "value": "58",
        "justification": "Natural para a série.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (82 no isótopo comum)",
        "value": "5",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Ce-140 e Ce-142 naturais)",
        "justification": "Nenhuma radioatividade significativa.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Polimento, conversores catalíticos, vidro especial, lasers",
        "justification": "Altamente versátil.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minérios: monazita, bastnasita",
        "justification": "Presente em jazidas conhecidas.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Cria faíscas ao ser raspado, usado em isqueiros",
        "justification": "Muito útil e visualmente interessante.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem ao planeta anão Ceres",
        "justification": "Nome astronômico significativo.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Berzelius e Hisinger (1803), também Klaproth",
        "justification": "Três cientistas chegaram ao mesmo elemento quase simultaneamente.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1803",
        "justification": "Um dos primeiros elementos de terras raras.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "798 °C / 1071 K / 1468,4 °F",
        "justification": "Compatível com ligas e aplicações térmicas.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3424 °C / 3697 K / 6195,2 °F",
        "justification": "Muito alto, excelente para alta temperatura.",
        "score": 90
      }
    ]
},
  "Pr": {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodímio",
    "heroName": "Praseodymium Green",
    "heroDescription": "O mestre do vidro verde e dos ímãs poderosos, um herói que une força magnética e elegância ótica.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Praseodymium%20Green%2C%20representing%20the%20chemical%20element%20Praseod%C3%ADmio%20(Symbol%3A%20Pr)%2C%20O%20mestre%20do%20vidro%20verde%20e%20dos%20%C3%ADm%C3%A3s%20poderosos%2C%20um%20her%C3%B3i%20que%20une%20for%C3%A7a%20magn%C3%A9tica%20e%20eleg%C3%A2ncia%20%C3%B3tica..%20Style%3A%20glowing%20symbol%20Pr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo com ar, escurece rapidamente, inflamável em pó",
        "justification": "Reatividade típica de lantanídeos.",
        "score": 25
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade, mas mineração impactante",
        "justification": "Terra rara extraída com custos ambientais.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade; pó metálico pode causar problemas pulmonares",
        "justification": "Precisa de controle em ambientes industriais.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ímãs de alto desempenho, vidros especiais, ligas",
        "justification": "Aplicações tecnológicas crescentes.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 (principal), raramente +4",
        "justification": "Pouca variação, mas suficiente para aplicações.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Relativamente comum (~9 ppm)",
        "justification": "Mais raro que Ce, mas não escasso.",
        "score": 65
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Como os demais lantanídeos.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~140,91 u)",
        "value": "Alta",
        "justification": "Típica do grupo.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (6,77 g/cm³)",
        "value": "Moderada",
        "justification": "Dentro da média para lantanídeos.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~182 pm)",
        "value": "Grande",
        "justification": "Similar aos vizinhos do bloco f.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (estável), +4 (instável)",
        "justification": "Leve versatilidade.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor razoável para aplicações metálicas.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,13)",
        "value": "Baixa",
        "justification": "Como esperado para os lantanídeos.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f³ 6s²",
        "justification": "Didático e representativo do bloco f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f³ 6s²",
        "justification": "Progressão clara da série.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=59)",
        "value": "59",
        "justification": "Valor intermediário para a série.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (82 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Pr-141)",
        "justification": "Não radioativo naturalmente.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ímãs NdFeB, cerâmicas, vidro de solda, motores",
        "justification": "Aplicações industriais e tecnológicas fortes.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de monazita, bastnasita",
        "justification": "Minérios comuns entre terras raras.",
        "score": 65
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Íons Pr³⁺ colorem vidros de verde-amarelado a esverdeado",
        "justification": "Usado até em lentes especiais de soldadores.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego prasios didymos (“gêmeo verde”)",
        "justification": "Referência à cor e confusão com neodímio.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Auer von Welsbach (1885)",
        "justification": "Mesmo químico que isolou o neodímio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1885",
        "justification": "Isolamento bem posterior aos primeiros lantanídeos.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "931 °C / 1204 K / 1707,8 °F",
        "justification": "Útil para fabricação de ligas.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3520 °C / 3793 K / 6368 °F",
        "justification": "Muito elevado, ideal para materiais de alta temperatura.",
        "score": 90
      }
    ]
},
  "Nd": {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodímio",
    "heroName": "Neodymium Force",
    "heroDescription": "O titã dos ímãs permanentes e mestre do magnetismo supremo, herói que sustenta a tecnologia moderna com sua força invisível.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Neodymium%20Force%2C%20representing%20the%20chemical%20element%20Neod%C3%ADmio%20(Symbol%3A%20Nd)%2C%20O%20tit%C3%A3%20dos%20%C3%ADm%C3%A3s%20permanentes%20e%20mestre%20do%20magnetismo%20supremo%2C%20her%C3%B3i%20que%20sustenta%20a%20tecnologia%20moderna%20com%20sua%20for%C3%A7a%20invis%C3%ADvel..%20Style%3A%20glowing%20symbol%20Nd%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com ar, forma óxidos facilmente, inflamável em pó",
        "justification": "Estável ao ar seco, mas oxidante com facilidade.",
        "score": 25
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade, extração ambientalmente crítica",
        "justification": "Mineração gera resíduos prejudiciais.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas irritante quando em pó",
        "justification": "Precisa de EPI em ambientes industriais.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ímãs superpotentes, lasers, eletrônica",
        "justification": "Extremamente útil e valorizado na indústria.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 (principal), raramente outros",
        "justification": "Estável e previsível em reações.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente abundante (~38 ppm)",
        "justification": "Considerado relativamente comum entre terras raras.",
        "score": 70
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Pouco formado estelarmente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~144,24 u)",
        "value": "Alta",
        "justification": "Condizente com o bloco f.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (7,01 g/cm³)",
        "value": "Moderada",
        "justification": "Leve em comparação com metais de transição.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~182 pm)",
        "value": "Grande",
        "justification": "Tamanho típico dos lantanídeos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Valor estável, mas único.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Suficiente para ligas e magnetismo.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,14)",
        "value": "Baixa",
        "justification": "Muito reativo, como os demais lantanídeos.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável para aplicação física e industrial.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f⁴ 6s²",
        "justification": "Útil para explicação do preenchimento f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f⁴ 6s²",
        "justification": "Fácil para fins didáticos.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=60)",
        "value": "60",
        "justification": "Valor intermediário-alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (84 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Nd-142, 143, 145, 146)",
        "justification": "Totalmente não radioativo na natureza.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ímãs NdFeB, motores elétricos, alto-falantes, lasers",
        "justification": "Indispensável em tecnologia moderna.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minérios como bastnasita e monazita",
        "justification": "Terras raras exploradas em todo o mundo.",
        "score": 65
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Íons Nd³⁺ colorem vidros de púrpura a violeta",
        "justification": "Usado em óculos de proteção e lasers.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego neos didymos (“novo gêmeo”)",
        "justification": "Reflete descoberta após separação do praseodímio.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Auer von Welsbach (1885)",
        "justification": "Separado do praseodímio por espectroscopia.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1885",
        "justification": "Avanço da espectroscopia no século XIX.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1024 °C / 1297 K / 1875,2 °F",
        "justification": "Útil para produção de ligas.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3074 °C / 3347 K / 5565,2 °F",
        "justification": "Elevado, ótimo para aplicações térmicas intensas.",
        "score": 85
      }
    ]
},
  "Pm": {
    "number": 61,
    "symbol": "Pm",
    "name": "Promécio",
    "heroName": "Promethium Glow",
    "heroDescription": "O portador da luz eterna e mestre da luminescência atômica, herói que brilha na escuridão com energia radioativa.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Promethium%20Glow%2C%20representing%20the%20chemical%20element%20Prom%C3%A9cio%20(Symbol%3A%20Pm)%2C%20O%20portador%20da%20luz%20eterna%20e%20mestre%20da%20luminesc%C3%AAncia%20at%C3%B4mica%2C%20her%C3%B3i%20que%20brilha%20na%20escurid%C3%A3o%20com%20energia%20radioativa..%20Style%3A%20glowing%20symbol%20Pm%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, instável",
        "justification": "Instabilidade extrema limita seu uso e manipulação segura.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Produzido artificialmente, resíduos radioativos",
        "justification": "Pode gerar impacto ambiental considerável se descartado inadequadamente.",
        "score": 20
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente perigoso",
        "justification": "Necessita de cuidados extremos em laboratórios.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Uso limitado a baterias nucleares e pesquisa",
        "justification": "Aplicações específicas e pouco difundidas.",
        "score": 30
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3",
        "justification": "Quimicamente semelhante a outros lantanídeos.",
        "score": 55
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Não ocorre naturalmente",
        "justification": "Praticamente inexistente em estado natural.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Virtualmente inexistente",
        "justification": "Raro estelarmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~145 u)",
        "value": "Alta",
        "justification": "Condizente com o grupo dos lantanídeos.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade (~7,26 g/cm³)",
        "value": "Moderada",
        "justification": "Similar ao Neodímio.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~183 pm)",
        "value": "Grande",
        "justification": "Tamanho típico dos lantanídeos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Comportamento químico previsível.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Pouco conhecida",
        "justification": "Dados escassos devido à radioatividade.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,13)",
        "value": "Baixa",
        "justification": "Elemento bastante reativo.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido metálico",
        "justification": "Estável em condições padrão de laboratório.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f⁵ 6s²",
        "justification": "Boa base para explicações teóricas.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f⁵ 6s²",
        "justification": "Similar ao Neodímio, facilita o ensino.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=61)",
        "value": "61",
        "justification": "Valor intermediário.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (84)",
        "value": "84",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altamente radioativo",
        "justification": "Nenhum isótopo estável.",
        "score": 0
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fontes beta, pesquisa nuclear",
        "justification": "Aplicações extremamente restritas.",
        "score": 20
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido artificialmente",
        "justification": "Não existe naturalmente.",
        "score": 10
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Único lantanídeo sem isótopo estável",
        "justification": "Fato raro e marcante na tabela periódica.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do titã Prometeu",
        "justification": "Simbolismo poderoso na ciência.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Jacob Marinsky et al. (1945)",
        "justification": "Relacionado ao contexto da Segunda Guerra Mundial.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1945",
        "justification": "Década de avanços nucleares intensos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~1100 °C",
        "justification": "Consistente com outros metais do bloco f.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~3000 °C",
        "justification": "Elevado, típico dos lantanídeos.",
        "score": 85
      }
    ]
},
  "Sm": {
    "number": 62,
    "symbol": "Sm",
    "name": "Samário",
    "heroName": "Samarium Spark",
    "heroDescription": "O especialista em resistências extremas e mestre dos ímãs térmicos, herói que mantém sua força mesmo no calor das batalhas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Samarium%20Spark%2C%20representing%20the%20chemical%20element%20Sam%C3%A1rio%20(Symbol%3A%20Sm)%2C%20O%20especialista%20em%20resist%C3%AAncias%20extremas%20e%20mestre%20dos%20%C3%ADm%C3%A3s%20t%C3%A9rmicos%2C%20her%C3%B3i%20que%20mant%C3%A9m%20sua%20for%C3%A7a%20mesmo%20no%20calor%20das%20batalhas..%20Style%3A%20glowing%20symbol%20Sm%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida facilmente, inflamável em pó ou raspas.",
        "justification": "Reatividade típica dos lantanídeos.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Extração gera resíduos; uso em pequenas quantidades.",
        "justification": "Impacto moderado.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, mas irritante como pó.",
        "justification": "Precisa de EPI em ambientes industriais.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ímãs, reatores nucleares e lasers.",
        "justification": "Relevante em tecnologias avançadas.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+2 e +3",
        "justification": "Versatilidade química.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Relativamente comum (~7 ppm)",
        "justification": "Boa disponibilidade.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Formação rara no universo.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "~150.4 u",
        "justification": "Condizente com os lantanídeos.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "7,52 g/cm³",
        "justification": "Média entre os metais do grupo.",
        "score": 55
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "~180 pm",
        "justification": "Tamanho típico do bloco f.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "5",
        "justification": "Boa reatividade.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Metálica",
        "justification": "Condutor eficaz.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,17 (baixa)",
        "justification": "Muito reativo.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido metálico",
        "justification": "Estável à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f⁶ 6s²",
        "justification": "Coerente com a distribuição dos lantanídeos.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f⁶ 6s²",
        "justification": "Adequado para fins didáticos.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons",
        "value": "62",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons",
        "value": "88",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos estáveis",
        "justification": "Seguro para aplicações.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ímãs SmCo, lasers, reatores.",
        "justification": "Altamente útil em nichos tecnológicos.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Monazita, bastnasita",
        "justification": "Presente em minérios comuns de terras raras.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em fones, fissão, lasers médicos.",
        "justification": "Versatilidade interessante.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego \"Samaria\" (minério)",
        "justification": "Nome geológico.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Lecoq de Boisbaudran (1879)",
        "justification": "Importante nome na espectroscopia.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1879",
        "justification": "Período marcante na química.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1072 °C",
        "justification": "Adequado para uso em ligas.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1794 °C",
        "justification": "Valor elevado, útil termicamente.",
        "score": 75
      }
    ]
},
  "Eu": {
    "number": 63,
    "symbol": "Eu",
    "name": "Európio",
    "heroName": "Europium Light",
    "heroDescription": "O mestre das cores vivas e guardião da autenticidade, herói que ilumina as telas do mundo e protege as moedas da falsificação.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Europium%20Light%2C%20representing%20the%20chemical%20element%20Eur%C3%B3pio%20(Symbol%3A%20Eu)%2C%20O%20mestre%20das%20cores%20vivas%20e%20guardi%C3%A3o%20da%20autenticidade%2C%20her%C3%B3i%20que%20ilumina%20as%20telas%20do%20mundo%20e%20protege%20as%20moedas%20da%20falsifica%C3%A7%C3%A3o..%20Style%3A%20glowing%20symbol%20Eu%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente reativo ao ar e água, oxida rapidamente",
        "justification": "Instável em condições ambientes.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Reativo e raro, mas pouco tóxico; impacto ambiental moderado",
        "justification": "Menor toxicidade, mas uso restrito.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade geral, mas pode se acumular",
        "justification": "Relativamente seguro em baixas doses.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em fósforos de TV, LED, detectores e lasers",
        "justification": "Essencial em eletrônicos modernos.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2 e +3",
        "justification": "Alguma versatilidade química.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "2 ppm na crosta terrestre",
        "justification": "Raro, mas extraído de minerais conhecidos.",
        "score": 30
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixo",
        "justification": "Elemento pesado raro cosmicamente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~151,96 u)",
        "value": "Alta",
        "justification": "Condizente com terras raras pesadas.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (5,24 g/cm³)",
        "value": "Moderada",
        "justification": "Próxima a outros lantanídeos.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~198 pm)",
        "value": "Grande",
        "justification": "Compatível com lantanídeos.",
        "score": 75
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 e +3",
        "justification": "Melhor que Ba, mas ainda limitado.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Baixa para um metal",
        "justification": "Não é bom condutor.",
        "score": 20
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,2)",
        "value": "Baixa",
        "justification": "Pouco reativo eletronicamente.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em laboratório.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f⁷ 6s²",
        "justification": "Complexo, mas típico de terras raras.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f⁷ 6s²",
        "justification": "Moderadamente didático.",
        "score": 60
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 63)",
        "value": "63",
        "justification": "Valor alto.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (89 no isótopo comum)",
        "value": "5",
        "justification": "Neutro como critério isolado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis, outros radioativos",
        "justification": "Maioria dos isótopos é estável.",
        "score": 60
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "LEDs, lasers, TVs, segurança nuclear",
        "justification": "Alta tecnologia e mercado restrito.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de bastnasita e monazita",
        "justification": "Presente em minerais raros.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Brilha sob luz UV; essencial em telas modernas",
        "justification": "Muito presente em vida cotidiana.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Europa (continente europeu)",
        "justification": "Homenagem geográfica clara.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Eugène-Anatole Demarçay (1896)",
        "justification": "Cientista francês com destaque.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1901",
        "justification": "Descoberta recente entre os elementos.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "826 °C / 1099 K / 1519 °F",
        "justification": "Intermediário entre os metais.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1529 °C / 1802 K / 2784 °F",
        "justification": "Elevado o suficiente para aplicação técnica.",
        "score": 65
      }
    ]
},
  "Gd": {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadovínio",
    "heroName": "Gadolinium Vision",
    "heroDescription": "O mestre do contraste magnético e guardião do frio extremo, herói que revela segredos médicos e domina a refrigeração do futuro.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Gadolinium%20Vision%2C%20representing%20the%20chemical%20element%20Gadov%C3%ADnio%20(Symbol%3A%20Gd)%2C%20O%20mestre%20do%20contraste%20magn%C3%A9tico%20e%20guardi%C3%A3o%20do%20frio%20extremo%2C%20her%C3%B3i%20que%20revela%20segredos%20m%C3%A9dicos%20e%20domina%20a%20refrigera%C3%A7%C3%A3o%20do%20futuro..%20Style%3A%20glowing%20symbol%20Gd%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida rapidamente ao ar, reativo com água",
        "justification": "Necessita de armazenamento em atmosfera inerte.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Compostos podem ser tóxicos; risco moderado",
        "justification": "Impacto ambiental controlável.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade em geral, mas deve ser monitorado",
        "justification": "Baixo risco com manuseio controlado.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em contraste para ressonância magnética (RM), LEDs, reatores nucleares",
        "justification": "Aplicações médicas e nucleares de alto valor.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +3 principalmente, com +2 ocasional",
        "justification": "Versatilidade razoável para um lantanídeo.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "6,2 ppm na crosta terrestre",
        "justification": "Mais abundante que o európio.",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Como outros lantanídeos, é raro no cosmos.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~157,25 u)",
        "value": "Alta",
        "justification": "Condizente com os metais de terras raras.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (7,90 g/cm³)",
        "value": "Alta",
        "justification": "Consideravelmente denso.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~180 pm)",
        "value": "Grande",
        "justification": "Menor que Eu, mas ainda elevado.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (mais comum)",
        "justification": "Comportamento estável, mas com pouca variação.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Melhor que outros lantanídeos.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,20)",
        "value": "Baixa",
        "justification": "Semelhante ao Európio.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável e manuseável em condições normais.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f⁷ 5d¹ 6s²",
        "justification": "Relativamente simples, embora menos direto que Eu.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f⁷ 5d¹ 6s²",
        "justification": "Intermediária em complexidade.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 64)",
        "value": "64",
        "justification": "Faixa alta.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (93 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Estável para fins comerciais.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "RM, barras de controle nuclear, LEDs, materiais magnéticos",
        "justification": "Uso crucial na medicina e energia.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Presente em monazita, bastnasita",
        "justification": "Fontes minerais conhecidas.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Absorve nêutrons térmicos; é fortemente paramagnético",
        "justification": "Propriedades magnéticas únicas.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem ao mineral gadolinita e a Johan Gadolin",
        "justification": "Homenagem a um químico e ao mineral descoberto.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Jean Charles Galissard de Marignac (1880)",
        "justification": "Parte do grupo clássico das terras raras.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1880",
        "justification": "Um dos primeiros lantanídeos identificados.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1312 °C / 1585 K / 2394 °F",
        "justification": "Consideravelmente alto.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3273 °C / 3546 K / 5923 °F",
        "justification": "Extremamente elevado — destaque térmico.",
        "score": 90
      }
    ]
},
  "Tb": {
    "number": 65,
    "symbol": "Tb",
    "name": "Térbio",
    "heroName": "Lumina Térbio",
    "heroDescription": "O mestre da fluorescência e das telas coloridas, capaz de transformar energia em brilho esmeralda.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Lumina%20T%C3%A9rbio%2C%20representing%20the%20chemical%20element%20T%C3%A9rbio%20(Symbol%3A%20Tb)%2C%20O%20mestre%20da%20fluoresc%C3%AAncia%20e%20das%20telas%20coloridas%2C%20capaz%20de%20transformar%20energia%20em%20brilho%20esmeralda..%20Style%3A%20glowing%20symbol%20Tb%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com ar e água, precisa de armazenamento especial",
        "justification": "Instável ao ar como outros lantanídeos.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico, mas a mineração é ambientalmente sensível",
        "justification": "Baixo risco direto, mas alto impacto indireto.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico, mas deve-se evitar ingestão/inalação",
        "justification": "Relativamente seguro.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em telas LCD, lâmpadas fluorescentes, alto-falantes",
        "justification": "Importante na indústria de eletrônicos.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +3 (principal), +4 (rara)",
        "justification": "Um pouco mais versátil que Gd.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~1,2 ppm na crosta terrestre",
        "justification": "Raro, mas extraível de fontes como monazita.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Como outros elementos pesados.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~158,93 u)",
        "value": "Alta",
        "justification": "Condizente com os lantanídeos.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (8,23 g/cm³)",
        "value": "Alta",
        "justification": "Denso, útil em ligas metálicas.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~177 pm)",
        "value": "Grande",
        "justification": "Compatível com os metais do bloco f.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3, +4 (muito raro)",
        "justification": "Quase sempre +3.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Condutor razoável.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,2)",
        "value": "Baixa",
        "justification": "Pouca tendência a atrair elétrons.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em laboratório.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f⁹ 6s²",
        "justification": "Moderadamente didático.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f⁹ 6s²",
        "justification": "Complexidade padrão para lantanídeo.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 65)",
        "value": "65",
        "justification": "Faixa alta.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (94 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Boa estabilidade.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "LEDs verdes, dopantes em lasers, ligas magnéticas",
        "justification": "Alta relevância em tecnologia.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de minerais como xenotima e monazita",
        "justification": "Fontes conhecidas e exploráveis.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "É responsável pela cor verde-limão em telas e lasers",
        "justification": "Aplicações visuais cativantes.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem à região francesa Terbia",
        "justification": "Homenagem geográfica tradicional.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Gustaf Mosander (1843)",
        "justification": "Pioneiro na química dos lantanídeos.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1843",
        "justification": "Um dos primeiros lantanídeos isolados.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1356 °C / 1629 K / 2473 °F",
        "justification": "Ponto alto como outros metais do grupo.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3230 °C / 3503 K / 5846 °F",
        "justification": "Excelente estabilidade térmica.",
        "score": 90
      }
    ]
},
  "Dy": {
    "number": 66,
    "symbol": "Dy",
    "name": "Disprósio",
    "heroName": "Disprósio Magneticus",
    "heroDescription": "O guardião da resistência magnética extrema, essencial para os motores que movem o futuro.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Dispr%C3%B3sio%20Magneticus%2C%20representing%20the%20chemical%20element%20Dispr%C3%B3sio%20(Symbol%3A%20Dy)%2C%20O%20guardi%C3%A3o%20da%20resist%C3%AAncia%20magn%C3%A9tica%20extrema%2C%20essencial%20para%20os%20motores%20que%20movem%20o%20futuro..%20Style%3A%20glowing%20symbol%20Dy%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo ao ar, forma óxidos rapidamente",
        "justification": "Deve ser armazenado com cuidado.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico, mas mineração de terras raras gera impacto",
        "justification": "Risco ambiental indireto, mas controlável.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, cuidados básicos suficientes",
        "justification": "Segurança adequada com manuseio padrão.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Utilizado em ímãs de alta performance, lasers, reatores nucleares",
        "justification": "Valor tecnológico altíssimo.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3",
        "justification": "Estado de oxidação pouco variado.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~5,2 ppm na crosta terrestre",
        "justification": "Mais abundante que Eu e Tb.",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Raro cosmicamente como outros lantanídeos.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~162,5 u)",
        "value": "Alta",
        "justification": "Compatível com os metais pesados do bloco f.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (8,55 g/cm³)",
        "value": "Alta",
        "justification": "Um dos mais densos entre os lantanídeos.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~178 pm)",
        "value": "Grande",
        "justification": "Padrão para lantanídeos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (mais comum)",
        "justification": "Baixa versatilidade redox.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Comportamento metálico típico.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,22)",
        "value": "Baixa",
        "justification": "Muito eletropositivo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável e manuseável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹⁰ 6s²",
        "justification": "Padrão para lantanídeos, fácil de ilustrar.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁰ 6s²",
        "justification": "Estrutura clara, mesmo com subnível cheio.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 66)",
        "value": "66",
        "justification": "Alta carga nuclear.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (97 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Muito seguro do ponto de vista nuclear.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ímãs de neodímio-dísprosio, lasers, sistemas de controle térmico",
        "justification": "Elemento estratégico de alta tecnologia.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Encontrado em xenotima, monazita, bastnasita",
        "justification": "Disponibilidade razoável em minerais conhecidos.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Crucial em ímãs de turbinas eólicas e veículos elétricos",
        "justification": "Importância crescente na energia limpa.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego dysprositos (\"difícil de obter\")",
        "justification": "Nome reflete história da química.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Paul Émile Lecoq de Boisbaudran (1886)",
        "justification": "Cientista renomado por isolar vários lantanídeos.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1886",
        "justification": "Parte do grupo clássico das terras raras.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1412 °C / 1685 K / 2573 °F",
        "justification": "Excelente estabilidade térmica.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2562 °C / 2835 K / 4643 °F",
        "justification": "Muito elevado, adequado para altas temperaturas.",
        "score": 80
      }
    ]
},
  "Ho": {
    "number": 67,
    "symbol": "Ho",
    "name": "Hólmio",
    "heroName": "Hólmio Laser",
    "heroDescription": "O herói da precisão absoluta, mestre das radiações infravermelhas e cirurgias de luz.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20H%C3%B3lmio%20Laser%2C%20representing%20the%20chemical%20element%20H%C3%B3lmio%20(Symbol%3A%20Ho)%2C%20O%20her%C3%B3i%20da%20precis%C3%A3o%20absoluta%2C%20mestre%20das%20radia%C3%A7%C3%B5es%20infravermelhas%20e%20cirurgias%20de%20luz..%20Style%3A%20glowing%20symbol%20Ho%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida-se rapidamente ao ar, reativo com água",
        "justification": "Reativo, deve ser manuseado com proteção.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico, mas a mineração pode causar impacto",
        "justification": "Extração ambientalmente sensível.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, mas não deve ser inalado",
        "justification": "Manuseio seguro sob condições normais.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em ímãs, lasers médicos e materiais de blindagem",
        "justification": "Aplicações especializadas e valiosas.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3",
        "justification": "Estado de oxidação estável, mas limitado.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~1,3 ppm na crosta terrestre",
        "justification": "Raro, mas acessível via minerais conhecidos.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Extremamente raro no cosmos.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~164,93 u)",
        "value": "Alta",
        "justification": "Compatível com lantanídeos pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (8,80 g/cm³)",
        "value": "Muito alta",
        "justification": "Um dos lantanídeos mais densos.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~176 pm)",
        "value": "Grande",
        "justification": "Dentro da faixa esperada do grupo.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Estável, mas sem flexibilidade.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Comportamento típico metálico.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,23)",
        "value": "Baixa",
        "justification": "Pouco eletronegativo, como outros lantanídeos.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em condições ambientes.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹¹ 6s²",
        "justification": "Ligeiramente mais complexo, mas didático.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹¹ 6s²",
        "justification": "Estrutura clara, útil para ensino de lantanídeos.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 67)",
        "value": "67",
        "justification": "Valor alto na tabela.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (98 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Elemento seguro.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Lasers cirúrgicos, controle nuclear, ligas de ímãs",
        "justification": "Alta relevância tecnológica.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de monazita, gadolinita, xenotima",
        "justification": "Fontes geológicas conhecidas.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Fortemente paramagnético; útil em blindagens contra radiação",
        "justification": "Propriedades magnéticas notáveis.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado em homenagem a Estocolmo (Holmia)",
        "justification": "Belo exemplo de homenagem geográfica.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Marc Delafontaine e Jacques-Louis Soret (1878); isolado por Per Teodor Cleve (1879)",
        "justification": "História rica e colaborativa.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1878–79",
        "justification": "Um dos primeiros lantanídeos modernos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1474 °C / 1747 K / 2685 °F",
        "justification": "Alta resistência térmica.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2700 °C / 2973 K / 4892 °F",
        "justification": "Excelente estabilidade térmica.",
        "score": 80
      }
    ]
},
  "Er": {
    "number": 68,
    "symbol": "Er",
    "name": "Érbio",
    "heroName": "Érbio Óptico",
    "heroDescription": "O mensageiro das profundezas, amplificando as vozes do mundo através dos fios de luz.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20%C3%89rbio%20%C3%93ptico%2C%20representing%20the%20chemical%20element%20%C3%89rbio%20(Symbol%3A%20Er)%2C%20O%20mensageiro%20das%20profundezas%2C%20amplificando%20as%20vozes%20do%20mundo%20atrav%C3%A9s%20dos%20fios%20de%20luz..%20Style%3A%20glowing%20symbol%20Er%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo ao ar e umidade; precisa de armazenamento adequado",
        "justification": "Comum entre os lantanídeos.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico; risco ambiental vem da extração",
        "justification": "Mineração sensível, mas uso seguro.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade; precauções básicas suficientes",
        "justification": "Seguro sob uso comum.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em lasers, fibras ópticas e pigmentos cor-de-rosa",
        "justification": "Aplicações em telecomunicações e estética.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3",
        "justification": "Quimicamente limitado.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~3 ppm na crosta terrestre",
        "justification": "Mais abundante que outros lantanídeos pesados.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Incomum no cosmos.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~167,26 u)",
        "value": "Alta",
        "justification": "Condizente com o bloco f.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (9,07 g/cm³)",
        "value": "Muito alta",
        "justification": "Um dos mais densos lantanídeos.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~175 pm)",
        "value": "Grande",
        "justification": "Similar a outros do grupo.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Estado único e estável.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Padrão para lantanídeo metálico.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,24)",
        "value": "Baixa",
        "justification": "Não forma ligações muito polares.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹² 6s²",
        "justification": "Padrão para o grupo, pouco complexo.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹² 6s²",
        "justification": "Curta e direta.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 68)",
        "value": "68",
        "justification": "Alta posição na tabela.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (99 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Seguro para uso comercial.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fibra óptica, lasers médicos, óculos de segurança, pigmentos",
        "justification": "Alta utilidade industrial e tecnológica.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Encontrado em gadolinita, monazita, xenotima",
        "justification": "Minérios comuns entre as terras raras.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Dá coloração rosa a vidros e cerâmicas",
        "justification": "Visualmente marcante e útil.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado após a vila sueca de Ytterby",
        "justification": "Clássica origem lantanídica.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Gustaf Mosander (1843)",
        "justification": "Um dos principais nomes da química dos lantanídeos.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1843",
        "justification": "Entre os primeiros lantanídeos isolados.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1529 °C / 1802 K / 2784 °F",
        "justification": "Alta resistência térmica.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2868 °C / 3141 K / 5194 °F",
        "justification": "Ótimo para aplicações térmicas extremas.",
        "score": 85
      }
    ]
},
  "Tm": {
    "number": 69,
    "symbol": "Tm",
    "name": "Túlio",
    "heroName": "Túlio Radiante",
    "heroDescription": "O herói da visão invisível, capaz de gerar raios-X em dispositivos portáteis para salvar vidas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20T%C3%BAlio%20Radiante%2C%20representing%20the%20chemical%20element%20T%C3%BAlio%20(Symbol%3A%20Tm)%2C%20O%20her%C3%B3i%20da%20vis%C3%A3o%20invis%C3%ADvel%2C%20capaz%20de%20gerar%20raios-X%20em%20dispositivos%20port%C3%A1teis%20para%20salvar%20vidas..%20Style%3A%20glowing%20symbol%20Tm%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxida-se facilmente ao ar, reativo com umidade",
        "justification": "Precisa de ambiente controlado.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixo risco direto, mineração de terras raras tem impacto",
        "justification": "Seguro, mas com impacto indireto.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade geral",
        "justification": "Seguro em laboratório.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em lasers médicos, detectores de raios-X, cerâmica fluorescente",
        "justification": "Alta relevância em nichos médicos e eletrônicos.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Predominantemente +3",
        "justification": "Estado químico limitado.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~0,5 ppm na crosta terrestre",
        "justification": "Um dos lantanídeos mais raros na Terra.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Raríssimo cosmicamente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~168,93 u)",
        "value": "Alta",
        "justification": "Padrão para lantanídeos pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (9,32 g/cm³)",
        "value": "Muito alta",
        "justification": "Entre os mais densos do grupo.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~174 pm)",
        "value": "Grande",
        "justification": "Similar aos vizinhos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Quimicamente estável, porém limitado.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Comportamento metálico típico.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,25)",
        "value": "Baixa",
        "justification": "Característica comum entre os lantanídeos.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável e manuseável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹³ 6s²",
        "justification": "Um subnível quase completo, ainda didático.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹³ 6s²",
        "justification": "Estrutura eletrônica clara.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 69)",
        "value": "69",
        "justification": "Alta carga nuclear.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (100 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Elemento seguro.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Lasers cirúrgicos, materiais sensíveis a radiação, ímãs de alta performance",
        "justification": "Aplicações estratégicas.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Presentes em monazita, xenotima, gadolinita",
        "justification": "Extração viável, embora raro.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em lasers verdes altamente eficientes",
        "justification": "Aplicações óticas inovadoras.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem à mítica ilha de Thule (Terra distante e desconhecida)",
        "justification": "Nome poético e histórico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Per Teodor Cleve (1879)",
        "justification": "Descoberto por figura importante da química.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1879",
        "justification": "Parte da era de ouro dos lantanídeos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1545 °C / 1818 K / 2813 °F",
        "justification": "Alta resistência térmica.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1950 °C / 2223 K / 3542 °F",
        "justification": "Não tão alto quanto outros lantanídeos, mas respeitável.",
        "score": 70
      }
    ]
},
  "Yb": {
    "number": 70,
    "symbol": "Yb",
    "name": "Itérbio",
    "heroName": "Itérbio Quantum",
    "heroDescription": "O mestre da precisão atômica e do tempo infinito, a pulsação dos relógios mais precisos da Terra.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20It%C3%A9rbio%20Quantum%2C%20representing%20the%20chemical%20element%20It%C3%A9rbio%20(Symbol%3A%20Yb)%2C%20O%20mestre%20da%20precis%C3%A3o%20at%C3%B4mica%20e%20do%20tempo%20infinito%2C%20a%20pulsa%C3%A7%C3%A3o%20dos%20rel%C3%B3gios%20mais%20precisos%20da%20Terra..%20Style%3A%20glowing%20symbol%20Yb%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com oxigênio e água; deve ser armazenado com proteção",
        "justification": "Reatividade típica dos lantanídeos.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco tóxico, mas mineração é impactante",
        "justification": "Uso seguro, extração exige cuidado.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade em geral",
        "justification": "Sem riscos significativos.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em lasers, medicina, materiais supercondutores",
        "justification": "Alta utilidade tecnológica.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação +2 e +3 (raro entre lantanídeos)",
        "justification": "Versatilidade química acima da média.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~3,2 ppm na crosta terrestre",
        "justification": "Acessível entre os lantanídeos pesados.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Comum entre terras raras.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~173,05 u)",
        "value": "Alta",
        "justification": "Consistente com lantanídeos finais.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (6,90 g/cm³)",
        "value": "Relativamente baixa para lantanídeos",
        "justification": "Menor densidade do grupo.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~173 pm)",
        "value": "Grande",
        "justification": "Esperado para o grupo.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "5",
        "justification": "Um dos poucos lantanídeos com +2 estável.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Usado como semicondutor e condutor.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,1)",
        "value": "Muito baixa",
        "justification": "Valor inferior à média.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em condições ambientes.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹⁴ 6s²",
        "justification": "Subnível completo – útil didaticamente.",
        "score": 55
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 6s²",
        "justification": "Estrutura eletrônica “cheia” e clara.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 70)",
        "value": "70",
        "justification": "Alta carga nuclear.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (103 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Elemento seguro.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Medicina, laser, materiais anti-pirataria",
        "justification": "Aplicações variadas.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Encontrado em monazita, xenotima, gadolinita",
        "justification": "Fontes bem conhecidas.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Emite radiação infravermelha em lasers médicos e fibras óticas",
        "justification": "Aplicações modernas e estratégicas.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado em homenagem à vila sueca de Ytterby",
        "justification": "Homenagem à fonte histórica de vários elementos.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Jean Charles Galissard de Marignac (1878); isolado por Georges Urbain (1907)",
        "justification": "História científica rica.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1878 (descoberto), 1907 (isolado)",
        "justification": "Parte da era de ouro dos lantanídeos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "824 °C / 1097 K / 1515 °F",
        "justification": "Um dos mais baixos entre os lantanídeos.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1196 °C / 1469 K / 2185 °F",
        "justification": "Também mais baixo que a média.",
        "score": 50
      }
    ]
},
  "Lu": {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutécio",
    "heroName": "Lutécio Sideral",
    "heroDescription": "O herói das altas energias, capaz de converter radiação em luz visível para diagnósticos espaciais.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Lut%C3%A9cio%20Sideral%2C%20representing%20the%20chemical%20element%20Lut%C3%A9cio%20(Symbol%3A%20Lu)%2C%20O%20her%C3%B3i%20das%20altas%20energias%2C%20capaz%20de%20converter%20radia%C3%A7%C3%A3o%20em%20luz%20vis%C3%ADvel%20para%20diagn%C3%B3sticos%20espaciais..%20Style%3A%20glowing%20symbol%20Lu%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reativo ao ar, mas menos que os outros lantanídeos",
        "justification": "Maior estabilidade entre terras raras.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade; mineração ainda é um desafio ambiental",
        "justification": "Impacto vem do processo de extração.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade",
        "justification": "Seguro para uso controlado.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em detectores PET, catalisadores, sondas médicas",
        "justification": "Altíssimo valor em medicina e catálise.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado +3 estável; raramente +2",
        "justification": "Limitado, mas muito estável.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~0,5 ppm na crosta terrestre",
        "justification": "Um dos lantanídeos mais raros.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Raridade cósmica como outros do grupo.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~174,97 u)",
        "value": "Alta",
        "justification": "Final do bloco f.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (9,84 g/cm³)",
        "value": "Muito alta",
        "justification": "O mais denso dos lantanídeos.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~172 pm)",
        "value": "Menor entre os lantanídeos",
        "justification": "Indica compactação da série.",
        "score": 75
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Extremamente estável, porém sem flexibilidade.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta",
        "justification": "Boa condutividade metálica.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,27)",
        "value": "Baixa, mas maior que a média do grupo",
        "justification": "Ligeiramente superior a outros lantanídeos.",
        "score": 25
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em condições normais.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4f¹⁴ 5d¹ 6s²",
        "justification": "Marca a transição para os metais de transição.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹ 6s²",
        "justification": "Interessante por fechar o bloco f e iniciar o d.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 71)",
        "value": "71",
        "justification": "Final da série dos lantanídeos.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (104 no isótopo comum)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopo estável; Lu‑176 é fracamente radioativo (usado em datação)",
        "justification": "Radioatividade muito baixa e controlada.",
        "score": 60
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Medicina nuclear, fósforos, cristais para laser, catálise",
        "justification": "Muito valorizado em aplicações específicas.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Encontrado em monazita, xenotima, lutecita",
        "justification": "Difícil separação, mas fontes conhecidas.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Usado em datação geológica (Lu–Hf), e em PET scans",
        "justification": "Papel essencial na ciência médica e geológica.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado em homenagem a Paris (Lutetia)",
        "justification": "Nome elegante e histórico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Georges Urbain (1907) – disputa com Auer von Welsbach",
        "justification": "Descoberta marcada por controvérsia.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1907",
        "justification": "Último da série dos lantanídeos clássicos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1663 °C / 1936 K / 3025 °F",
        "justification": "Um dos mais altos da série.",
        "score": 80
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3402 °C / 3675 K / 6156 °F",
        "justification": "Extremamente elevado.",
        "score": 90
      }
    ]
},
  "Hf": {
    "number": 72,
    "symbol": "Hf",
    "name": "Háfnio",
    "heroName": "Háfnio Reactor",
    "heroDescription": "O escudo das correntes nucleares, capaz de absorver nêutrons e manter o equilíbrio atômico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20H%C3%A1fnio%20Reactor%2C%20representing%20the%20chemical%20element%20H%C3%A1fnio%20(Symbol%3A%20Hf)%2C%20O%20escudo%20das%20correntes%20nucleares%2C%20capaz%20de%20absorver%20n%C3%AAutrons%20e%20manter%20o%20equil%C3%ADbrio%20at%C3%B4mico..%20Style%3A%20glowing%20symbol%20Hf%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Reage com oxigênio a altas temperaturas, difícil de separar do zircônio",
        "justification": "Estável em condições comuns, separação complicada.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade; mineração e separação geram resíduos",
        "justification": "Impacto controlável com tecnologia adequada.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade geral, mas pó metálico é inflamável",
        "justification": "Seguro com medidas de proteção.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Crucial em reatores nucleares, chips de computador, ligas resistentes",
        "justification": "Altíssima importância em tecnologia e energia.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +4 (comum) e +2 (raro)",
        "justification": "Boa flexibilidade de coordenação.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "~3 ppm na crosta terrestre",
        "justification": "Raro, mas acessível.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Pouco comum cosmicamente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~178,49 u)",
        "value": "Alta",
        "justification": "Compatível com metais pesados de transição.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (13,31 g/cm³)",
        "value": "Muito alta",
        "justification": "Densidade entre as maiores dos metais de transição.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~159 pm)",
        "value": "Relativamente pequeno",
        "justification": "Compacto e eficiente em ligação.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+4 predominante",
        "justification": "Estado altamente estável.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Metal condutor típico.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,3)",
        "value": "Baixa",
        "justification": "Reativo, forma compostos iônicos.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Totalmente estável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d²",
        "justification": "Introduz o bloco d, com estrutura clara.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d² 6s²",
        "justification": "Curta, eficiente, ideal para ensino.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 72)",
        "value": "72",
        "justification": "Marca a transição para metais d.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (106 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopos naturais estáveis",
        "justification": "Seguro.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Usado em barras de controle nuclear, microchips, ligas aeroespaciais",
        "justification": "Altíssimo valor estratégico.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Presente em zircão (mineral), difícil de separar do zircônio",
        "justification": "Separação exige tecnologia específica.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Essencial em reatores nucleares por absorver nêutrons com eficiência",
        "justification": "Papel único na energia nuclear.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim Hafnia, nome antigo de Copenhague",
        "justification": "Homenagem geográfica elegante.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Dirk Coster e George de Hevesy (1923)",
        "justification": "Descoberto com espectroscopia de raios X.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1923",
        "justification": "Descoberta moderna e significativa.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2233 °C / 2506 K / 4051 °F",
        "justification": "Extremamente alto, ideal para altas temperaturas.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4603 °C / 4876 K / 8317 °F",
        "justification": "Um dos mais altos da Tabela Periódica.",
        "score": 95
      }
    ]
},
  "Ta": {
    "number": 73,
    "symbol": "Ta",
    "name": "Tântalo",
    "heroName": "Tântalo Eterno",
    "heroDescription": "O guardião da energia minúscula, mestre dos capacitores que sustentam a era digital móvel.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20T%C3%A2ntalo%20Eterno%2C%20representing%20the%20chemical%20element%20T%C3%A2ntalo%20(Symbol%3A%20Ta)%2C%20O%20guardi%C3%A3o%20da%20energia%20min%C3%BAscula%2C%20mestre%20dos%20capacitores%20que%20sustentam%20a%20era%20digital%20m%C3%B3vel..%20Style%3A%20glowing%20symbol%20Ta%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Substituição industrial",
          "justification": "Devido ao seu alto custo, indústrias buscam substitutos como o nióbio sempre que possível.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Bioinerte",
          "justification": "Não reage com tecidos vivos, sendo ideal para implantes médicos sem causar rejeição.",
          "score": 95
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Inerte",
          "justification": "Totalmente seguro para uso interno no corpo humano.",
          "score": 100
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Capacitores de Celular, Implantes",
          "justification": "Essencial para miniaturizar a eletrônica moderna e para a medicina ortopédica.",
          "score": 98
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "5",
          "justification": "Estado de oxidação +5 é o mais comum e estável.",
          "score": 75
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "2,0 ppm (crosta)",
          "justification": "Elemento relativamente raro, frequentemente encontrado com o nióbio.",
          "score": 35
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000008%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "180,95 u",
          "justification": "Massa baseada quase inteiramente no isótopo Ta-181.",
          "score": 181
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "16,69 g/cm³",
          "justification": "Metal extremamente denso, mais que o dobro do ferro.",
          "score": 167
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "146 pm",
          "justification": "Raio metálico compacto, contribuindo para sua densidade.",
          "score": 146
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "-1, +2, +3, +4, +5",
          "justification": "Apresenta versatilidade química, com +5 sendo predominante.",
          "score": 60
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Moderada (Metal)",
          "justification": "Bom condutor, mas seu principal uso eletrônico é como isolante em capacitores (óxido).",
          "score": 40
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,5 (Pauling)",
          "justification": "Eletropositividade típica de metais de transição do grupo 5.",
          "score": 15
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal cinza-azulado, extremamente duro e resistente à corrosão por ácidos.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d³",
          "justification": "Terceiro elemento da série 5d.",
          "score": 53
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d³ 6s²",
          "justification": "Configuração fundamental do Tântalo.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "73",
          "justification": "Identidade atômica do Tântalo.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "108",
          "justification": "Baseado no isótopo Ta-181.",
          "score": 108
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Ta-180m (metaestável)",
          "justification": "Ta-180m é o único isómero nuclear natural e é extremamente estável.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Smartphones, Próteses, Motores a Jato",
          "justification": "Indispensável para capacitores de alta performance em eletrônicos portáteis.",
          "score": 99
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Identificado por Anders Gustaf Ekeberg.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Resistência Extrema",
          "justification": "É virtualmente imune ao ataque químico à temperatura ambiente, exceto pelo ácido fluorídrico.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Tântalo (Mitologia)",
          "justification": "Homenagem ao personagem mitológico grego Tântalo, devido à sua 'incapacidade' de absorver ácidos.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Anders Gustaf Ekeberg",
          "justification": "Químico sueco que provou a distinção entre tântalo e nióbio.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1802",
          "justification": "Descoberto no início do século XIX, mas frequentemente confundido com o nióbio por décadas.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "3017 °C",
          "justification": "Um dos pontos de fusão mais altos entre todos os metais.",
          "score": 99
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "5458 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 55
        }
    ]
},
  "W": {
    "number": 74,
    "symbol": "W",
    "name": "Tungstênio",
    "heroName": "Tungstênio Invictus",
    "heroDescription": "O herói inquebrável, dono do ponto de fusão supremo, capaz de brilhar intensamente sem nunca derreter.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Tungst%C3%AAnio%20Invictus%2C%20representing%20the%20chemical%20element%20Tungst%C3%AAnio%20(Symbol%3A%20W)%2C%20O%20her%C3%B3i%20inquebr%C3%A1vel%2C%20dono%20do%20ponto%20de%20fus%C3%A3o%20supremo%2C%20capaz%20de%20brilhar%20intensamente%20sem%20nunca%20derreter..%20Style%3A%20glowing%20symbol%20W%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Pouco reativo, mas difícil de purificar; caro",
        "justification": "Alta estabilidade, mas exige técnicas complexas de extração.",
        "score": 65
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Mineração envolve conflitos (coltan); impacto ambiental relevante",
        "justification": "Conflitos armados e degradação ambiental.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico; compatível com tecidos humanos",
        "justification": "Biocompatível, usado em implantes médicos.",
        "score": 85
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Capacitores, instrumentos cirúrgicos, ligas de alta resistência",
        "justification": "Aplicações eletrônicas e médicas avançadas.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+5 (principal), +4, +3, +2 (raro)",
        "justification": "Boa variedade em compostos.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito escasso (~2 ppm na crosta)",
        "justification": "Considerado estratégico e crítico.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Extremamente raro estelarmente.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~180,95 u)",
        "value": "Alta",
        "justification": "Valor elevado entre os metais de transição pesados.",
        "score": 60
      },
      {
        "id": 9,
        "label": "Densidade (16,69 g/cm³)",
        "value": "Muito alta",
        "justification": "Denso e resistente.",
        "score": 90
      },
      {
        "id": 10,
        "label": "Raio atômico (~146 pm)",
        "value": "Médio para pequeno",
        "justification": "Padrão para metais de transição pesados.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+5 (estável), +4, +3, +2",
        "justification": "Quimicamente versátil.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Conduz bem eletricidade e calor.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,5)",
        "value": "Média-baixa",
        "justification": "Reage com halogênios e oxigênio em certas condições.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável, ideal para uso industrial.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d³ 6s²",
        "justification": "Relevante para metais de transição.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d³ 6s²",
        "justification": "Inclui preenchimento de f e d.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=73)",
        "value": "73",
        "justification": "Valor elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (108 no isótopo comum)",
        "value": "5",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Ta-181)",
        "justification": "Naturalmente não radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Eletrônica, medicina, aeroespacial, nuclear",
        "justification": "Muito valorizado tecnologicamente.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Principalmente Congo, Brasil, Austrália",
        "justification": "Extração global, mas com conflitos locais.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Resistente à maioria dos ácidos, exceto ácido fluorídrico",
        "justification": "Extremamente inerte quimicamente.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do mito grego de Tântalo",
        "justification": "Nome mitológico bem contextualizado.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Anders Ekeberg (1802)",
        "justification": "Importante contribuição sueca.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1802",
        "justification": "Elemento do início do século XIX.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "3017 °C / 3290 K / 5462,6 °F",
        "justification": "Altíssimo, excelente para aplicações térmicas.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "5458 °C / 5731 K / 9856,4 °F",
        "justification": "Um dos mais altos pontos de ebulição entre todos os elementos.",
        "score": 100
      }
    ]
},
  "Re": {
    "number": 75,
    "symbol": "Re",
    "name": "Rênio",
    "heroName": "Rênio Flame",
    "heroDescription": "O mestre das superligas e do calor infernal, forjando os motores de aviões que cruzam os céus.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20R%C3%AAnio%20Flame%2C%20representing%20the%20chemical%20element%20R%C3%AAnio%20(Symbol%3A%20Re)%2C%20O%20mestre%20das%20superligas%20e%20do%20calor%20infernal%2C%20forjando%20os%20motores%20de%20avi%C3%B5es%20que%20cruzam%20os%20c%C3%A9us..%20Style%3A%20glowing%20symbol%20Re%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente raro e caro; difícil de obter",
        "justification": "Pouco acessível, requer técnicas especializadas.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Mineração restrita, mas impactos limitados",
        "justification": "Em pequenas quantidades, mas extração é difícil.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico; compostos podem ser irritantes",
        "justification": "Seguro com manuseio industrial adequado.",
        "score": 65
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Turbinas, motores de foguete, superligas",
        "justification": "Excelente resistência térmica e mecânica.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "28",
        "justification": "Um dos metais com maior número de estados de oxidação.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raríssimo (~0,7 ppb)",
        "justification": "Um dos elementos mais escassos da crosta.",
        "score": 5
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Formado apenas em eventos astrofísicos extremos.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~186,21 u)",
        "value": "Muito alta",
        "justification": "Condizente com sua posição no fim do bloco d.",
        "score": 60
      },
      {
        "id": 9,
        "label": "Densidade (21,02 g/cm³)",
        "value": "Extremamente alta",
        "justification": "Um dos elementos mais densos conhecidos.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (~137 pm)",
        "value": "Pequeno para o grupo",
        "justification": "Padrão para metais de transição pesados.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+7 a –1",
        "justification": "Versatilidade máxima em química inorgânica.",
        "score": 100
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Usado em contatos elétricos e filamentos.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,9)",
        "value": "Média",
        "justification": "Capaz de formar compostos covalentes e iônicos.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável e utilizável em diversos contextos.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d⁵ 6s²",
        "justification": "Distribuição avançada e rica.",
        "score": 75
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d⁵ 6s²",
        "justification": "Alta complexidade, útil para ensino superior.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=75)",
        "value": "75",
        "justification": "Alto, como esperado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (111 no isótopo comum)",
        "value": "5",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Isótopo natural é estável (Re-185); Re-187 é ligeiramente radioativo",
        "justification": "Baixa atividade, mas quase estável.",
        "score": 80
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Aeronáutica, reatores, contatos elétricos, catalisadores",
        "justification": "Muito valorizado onde o desempenho extremo é exigido.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Subproduto de molibdênio (Chile, EUA, Cazaquistão)",
        "justification": "Extração indireta e limitada.",
        "score": 40
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Maior ponto de ebulição entre os elementos conhecidos",
        "justification": "Supera até o tungstênio neste quesito.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem ao rio Reno (Rhenus, em latim)",
        "justification": "Referência geográfica europeia.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Ida Noddack, Walter Noddack, Otto Berg (1925)",
        "justification": "Importante descoberta alemã no século XX.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1925",
        "justification": "Descoberto tardiamente por espectroscopia.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "3186 °C / 3459 K / 5766,8 °F",
        "justification": "Um dos mais altos entre todos os elementos.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "5596 °C / 5870 K / 10 105 °F",
        "justification": "O mais alto ponto de ebulição conhecido.",
        "score": 100
      }
    ]
},
  "Os": {
    "number": 76,
    "symbol": "Os",
    "name": "Ósmio",
    "heroName": "Ósmio Denso",
    "heroDescription": "O herói de peso inigualável, o elemento mais denso da natureza e mestre da resistência extrema.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20%C3%93smio%20Denso%2C%20representing%20the%20chemical%20element%20%C3%93smio%20(Symbol%3A%20Os)%2C%20O%20her%C3%B3i%20de%20peso%20inigual%C3%A1vel%2C%20o%20elemento%20mais%20denso%20da%20natureza%20e%20mestre%20da%20resist%C3%AAncia%20extrema..%20Style%3A%20glowing%20symbol%20Os%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente denso e tóxico na forma de óxido",
        "justification": "Difícil de manusear e perigoso em certas condições.",
        "score": 35
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pouco abundante e difícil de extrair",
        "justification": "Mineração é cara e tem riscos ambientais.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Óxido de ósmio (OsO₄) é altamente tóxico",
        "justification": "Exposição deve ser rigorosamente controlada.",
        "score": 30
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Utilizado em ligas duras, contatos elétricos, catalisadores",
        "justification": "Importante para aplicações técnicas específicas.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +8, +6, +4, +3, +2, 0",
        "justification": "Ampla variedade de estados de oxidação.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara (~0,0015 ppm)",
        "justification": "Um dos metais mais raros na crosta terrestre.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Extremamente rara",
        "justification": "Elemento pesado, pouco formado naturalmente.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~190,23 u)",
        "value": "Muito alta",
        "justification": "Entre os elementos mais pesados estáveis.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (22,59 g/cm³)",
        "value": "A mais alta da Tabela Periódica",
        "justification": "Recordista em densidade entre todos os elementos.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (~135 pm)",
        "value": "Pequeno para um metal de transição",
        "justification": "Dentro do esperado para o grupo 8.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Principalmente +8, +4",
        "justification": "Oxida facilmente e forma compostos complexos.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa, mas inferior ao cobre e prata",
        "justification": "Usado em ligas para contatos elétricos.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,2)",
        "value": "Alta para um metal",
        "justification": "Considerado eletronegativo entre metais pesados.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em condições ambientes.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d⁶ 6s²",
        "justification": "Configuração típica de metais de transição pesados.",
        "score": 75
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d⁶ 6s²",
        "justification": "Configuração completa e bem definida.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=76)",
        "value": "76",
        "justification": "Alto número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (114 no isótopo comum)",
        "value": "5",
        "justification": "Dentro do padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Os-192 é o mais comum)",
        "justification": "Isótopos naturais estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ligas especiais, catalisadores, ponta de caneta tinteiro",
        "justification": "Uso limitado, porém técnico e valioso.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "África do Sul, Rússia, América do Norte",
        "justification": "Presente em minérios de platina.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Elemento mais denso conhecido",
        "justification": "Valor extremo em propriedades físicas.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego “osme”, cheiro (devido ao óxido volátil)",
        "justification": "Nome tem origem em propriedade química.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Smithson Tennant (1803)",
        "justification": "Descoberta documentada e científica.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1803",
        "justification": "Início do século XIX.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "3033 °C / 3306 K",
        "justification": "Muito alto, ideal para ligas resistentes ao calor.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "5012 °C / 5285 K",
        "justification": "Extremamente elevado, típico de metais refratários.",
        "score": 95
      }
    ]
},
  "Ir": {
    "number": 77,
    "symbol": "Ir",
    "name": "Irídio",
    "heroName": "Irídio Impact",
    "heroDescription": "O sobrevivente do cosmos, o guardião que marca a fronteira entre as eras dos dinossauros e dos mamíferos.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Ir%C3%ADdio%20Impact%2C%20representing%20the%20chemical%20element%20Ir%C3%ADdio%20(Symbol%3A%20Ir)%2C%20O%20sobrevivente%20do%20cosmos%2C%20o%20guardi%C3%A3o%20que%20marca%20a%20fronteira%20entre%20as%20eras%20dos%20dinossauros%20e%20dos%20mam%C3%ADferos..%20Style%3A%20glowing%20symbol%20Ir%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente raro e difícil de trabalhar",
        "justification": "Alta dureza e ponto de fusão dificultam processamento.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Mineração impactante, mas uso técnico",
        "justification": "Extração consome energia e recursos; uso valioso.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade, mas pó metálico é perigoso",
        "justification": "Deve ser manipulado com cuidado em formas finas.",
        "score": 60
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Catalisadores, contatos elétricos, ligas de alta resistência",
        "justification": "Muito valioso na indústria de precisão.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +3, +4, +6, +1, 0",
        "justification": "Boa variedade de estados de oxidação.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Extremamente rara (~0,000037 ppm)",
        "justification": "Um dos metais mais raros da crosta terrestre.",
        "score": 5
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Elemento pesado, gerado em eventos extremos.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~192,22 u)",
        "value": "Muito alta",
        "justification": "Um dos metais mais pesados estáveis.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (22,56 g/cm³)",
        "value": "Segunda maior densidade conhecida",
        "justification": "Praticamente empata com o ósmio.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (~136 pm)",
        "value": "Pequeno para seu grupo",
        "justification": "Típico dos metais de transição pesados.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (principal), até +6",
        "justification": "Importante em compostos catalíticos.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Utilizado em contatos elétricos resistentes.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,2)",
        "value": "Alta para metal",
        "justification": "Comparável a outros metais do mesmo grupo.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Altamente estável em condições ambientes.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d⁷ 6s²",
        "justification": "Configuração rica e típica de metais pesados.",
        "score": 75
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d⁷ 6s²",
        "justification": "Bastante completa e estável.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=77)",
        "value": "77",
        "justification": "Elevado número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (115 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Ir-191, Ir-193)",
        "justification": "Isótopos naturais não radioativos.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Velas de ignição, marcapassos, catalisadores, eletrodos",
        "justification": "Amplo uso em indústrias de alta tecnologia.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "África do Sul, Rússia, EUA",
        "justification": "Coletado principalmente em depósitos de platina.",
        "score": 55
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos elementos mais resistentes à corrosão",
        "justification": "Pode resistir até a água-régia.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego “iris” (arco-íris), devido à coloração dos sais",
        "justification": "Nome derivado de característica visual de compostos.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Smithson Tennant (1803)",
        "justification": "Descoberto junto ao ósmio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1803",
        "justification": "Contexto da química moderna.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2446 °C / 2719 K",
        "justification": "Muito alto, excelente para ligas resistentes.",
        "score": 90
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4428 °C / 4701 K",
        "justification": "Extremamente elevado, compatível com aplicações extremas.",
        "score": 90
      }
    ]
},
  "Pt": {
    "number": 78,
    "symbol": "Pt",
    "name": "Platina",
    "heroName": "Platina Preciosa",
    "heroDescription": "A rainha da catálise e da pureza, limpando o ar do planeta enquanto brilha com elegância inabalável.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Platina%20Preciosa%2C%20representing%20the%20chemical%20element%20Platina%20(Symbol%3A%20Pt)%2C%20A%20rainha%20da%20cat%C3%A1lise%20e%20da%20pureza%2C%20limpando%20o%20ar%20do%20planeta%20enquanto%20brilha%20com%20eleg%C3%A2ncia%20inabal%C3%A1vel..%20Style%3A%20glowing%20symbol%20Pt%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Pesada, cara, suscetível a roubo",
        "justification": "Pouco reativa, mas economicamente sensível.",
        "score": 45
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Mineração afeta o solo; pequeno impacto químico",
        "justification": "Uso limpo, mas extração agressiva ao meio ambiente.",
        "score": 55
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxica; alguns compostos são alergênicos",
        "justification": "Segura na maioria dos usos, exceto sais solúveis.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Catalisadores, joias, sensores, medicina, eletrônicos",
        "justification": "Extremamente versátil e valiosa.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+2, +4 (principais), +5, +6 (menos comuns)",
        "justification": "Boa flexibilidade química.",
        "score": 80
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara (~0,005 ppm)",
        "justification": "Um dos elementos menos abundantes da crosta.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Produzido em eventos cósmicos raros.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~195,08 u)",
        "value": "Alta",
        "justification": "Condizente com seu grupo.",
        "score": 60
      },
      {
        "id": 9,
        "label": "Densidade (21,45 g/cm³)",
        "value": "Extremamente alta",
        "justification": "Um dos metais mais densos.",
        "score": 95
      },
      {
        "id": 10,
        "label": "Raio atômico (~139 pm)",
        "value": "Médio",
        "justification": "Valor típico para metais nobres.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 e +4 principalmente",
        "justification": "Estável em compostos com boa previsibilidade.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Muito boa",
        "justification": "Utilizada em contatos elétricos.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,28)",
        "value": "Relativamente alta",
        "justification": "Reatividade seletiva.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Extremamente estável.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d⁹ 6s¹",
        "justification": "Estrutura eletrônica distinta no grupo.",
        "score": 75
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
        "justification": "Boa para análises de orbital d.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=78)",
        "value": "78",
        "justification": "Alto número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (117 no isótopo comum)",
        "value": "5",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Pt-194, 195, 196, 198)",
        "justification": "Totalmente estável naturalmente.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Catalisadores, joias, indústria, eletrodos, fármacos",
        "justification": "Utilidade excepcional em múltiplas áreas.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "África do Sul, Rússia, Canadá, Brasil",
        "justification": "Produção concentrada em poucos países.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Resiste à corrosão até de água régia em condições normais",
        "justification": "Metal nobre por excelência.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do espanhol platina (“prata pequena”)",
        "justification": "Refere-se à aparência semelhante à prata.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Antonio de Ulloa (1735)",
        "justification": "Descoberta associada à América do Sul.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1735",
        "justification": "Um dos primeiros metais nobres isolados.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1768 °C / 2041 K / 3214,4 °F",
        "justification": "Considerado alto e ideal para moldagens.",
        "score": 80
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3825 °C / 4098 K / 6917 °F",
        "justification": "Muito elevado para estabilidade térmica.",
        "score": 95
      }
    ]
},
  "Au": {
    "number": 79,
    "symbol": "Au",
    "name": "Ouro",
    "heroName": "Ouro Soberano",
    "heroDescription": "O monarca da eternidade e da condutividade, o metal que nunca oxida e sustenta a glória e a tecnologia.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Ouro%20Soberano%2C%20representing%20the%20chemical%20element%20Ouro%20(Symbol%3A%20Au)%2C%20O%20monarca%20da%20eternidade%20e%20da%20condutividade%2C%20o%20metal%20que%20nunca%20oxida%20e%20sustenta%20a%20gl%C3%B3ria%20e%20a%20tecnologia..%20Style%3A%20glowing%20symbol%20Au%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Macio, pouco resistente mecanicamente",
        "justification": "Fácil de riscar e deformar, apesar da beleza.",
        "score": 60
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Mineração extremamente agressiva ao meio ambiente",
        "justification": "Extração por cianeto e mercúrio é poluente e perigosa.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Inerte e biocompatível",
        "justification": "Pouquíssimos riscos, usado até em implantes médicos.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Valor monetário, eletrônica, odontologia, joalheria",
        "justification": "Alta aplicabilidade e valor histórico.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +1, +3",
        "justification": "Poucos estados de oxidação comuns.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raro, mas disponível (~0,003 ppm)",
        "justification": "Muito escasso na crosta terrestre.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito raro",
        "justification": "Formado apenas em colisões de estrelas de nêutrons.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~196,97 u)",
        "value": "Alta",
        "justification": "Um dos elementos estáveis mais pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (19,32 g/cm³)",
        "value": "Muito alta",
        "justification": "Excelente para aplicações técnicas e joalheria.",
        "score": 95
      },
      {
        "id": 10,
        "label": "Raio atômico (~144 pm)",
        "value": "Relativamente grande",
        "justification": "Típico dos metais pesados.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1 e +3",
        "justification": "Pouco versátil quimicamente.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Excelente",
        "justification": "Um dos melhores condutores que existem.",
        "score": 100
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,54)",
        "value": "Alta para um metal",
        "justification": "Muito eletronegativo para um elemento metálico.",
        "score": 65
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Muito estável em condições normais.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d¹⁰ 6s¹",
        "justification": "Configuração final compacta e característica.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
        "justification": "Eletronicamente estável.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=79)",
        "value": "79",
        "justification": "Elevado número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (118 no isótopo comum)",
        "value": "5",
        "justification": "Normal.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Au-197)",
        "justification": "Único isótopo natural é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Eletrônica, moedas, medicina, estética, ciência",
        "justification": "Um dos elementos mais utilizados historicamente.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Brasil, África do Sul, EUA, Austrália, China",
        "justification": "Mineração global com grandes reservas conhecidas.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Símbolo Au vem do latim “aurum” (brilhante)",
        "justification": "Um dos primeiros metais utilizados pela humanidade.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Latim “aurum”",
        "justification": "Nome clássico e histórico.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido; usado desde a Antiguidade",
        "justification": "Já era conhecido na Pré-História.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Antiguidade",
        "justification": "Um dos primeiros metais conhecidos pelo homem.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1064 °C / 1337 K",
        "justification": "Alto, mas inferior aos metais refratários.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2856 °C / 3129 K",
        "justification": "Moderadamente alto para um metal nobre.",
        "score": 75
      }
    ]
},
  "Hg": {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercúrio",
    "heroName": "Mercúrio Líquido",
    "heroDescription": "O mensageiro fluido da temperatura, mestre das formas mutáveis e único metal que dança em estado líquido.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Merc%C3%BArio%20L%C3%ADquido%2C%20representing%20the%20chemical%20element%20Merc%C3%BArio%20(Symbol%3A%20Hg)%2C%20O%20mensageiro%20fluido%20da%20temperatura%2C%20mestre%20das%20formas%20mut%C3%A1veis%20e%20%C3%BAnico%20metal%20que%20dan%C3%A7a%20em%20estado%20l%C3%ADquido..%20Style%3A%20glowing%20symbol%20Hg%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente tóxico, volátil, acumulativo em organismos",
        "justification": "Grandes riscos à saúde e ao meio ambiente.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Grande poluidor, bioacumulativo em peixes",
        "justification": "Um dos maiores riscos ambientais entre os metais.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Neurotóxico, perigoso mesmo em pequenas quantidades",
        "justification": "Tóxico por inalação, ingestão ou contato.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Termômetros (antigos), lâmpadas, eletrodos, extração de ouro",
        "justification": "Útil, mas substituído em muitos usos.",
        "score": 60
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+1, +2 (comuns)",
        "justification": "Ligações simples e conhecidas.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Relativamente rara (~0,08 ppm)",
        "justification": "Encontrado em minérios como o cinábrio (HgS).",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Não muito comum em estrelas.",
        "score": 15
      },
      {
        "id": 8,
        "label": "Massa atômica (~200,59 u)",
        "value": "Muito alta",
        "justification": "Entre os mais pesados dos elementos naturais.",
        "score": 60
      },
      {
        "id": 9,
        "label": "Densidade (13,53 g/cm³)",
        "value": "Alta",
        "justification": "Bastante denso, mesmo sendo líquido.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~151 pm)",
        "value": "Médio-alto",
        "justification": "Coerente com seu grupo.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1, +2 (principais)",
        "justification": "Pouco versátil, mas estável.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa (condutor metálico)",
        "justification": "Pode conduzir eletricidade mesmo como líquido.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,00)",
        "value": "Moderada",
        "justification": "Entre os metais pesados.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Líquido",
        "justification": "Único elemento metálico líquido à temperatura ambiente.",
        "score": 5
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5d¹⁰ 6s²",
        "justification": "Configuração fechada de subníveis.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
        "justification": "Interessante para estudos de química relativística.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=80)",
        "value": "80",
        "justification": "Alto, como esperado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (121 no isótopo comum)",
        "value": "5",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Hg-202, Hg-200, Hg-198, etc.)",
        "justification": "Isótopos naturais estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Antigo em termômetros, sensores, mineração, catalisadores",
        "justification": "Muito substituído por alternativas menos tóxicas.",
        "score": 60
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de cinábrio (HgS); Espanha, China, Itália",
        "justification": "Histórico e geograficamente relevante.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Conhecido desde a Antiguidade; símbolo vem do deus romano Mercúrio",
        "justification": "Ampla presença cultural e científica.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim hydrargyrum (“prata líquida”)",
        "justification": "Nome descritivo e histórico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Conhecido desde tempos antigos (Egito, China, Roma)",
        "justification": "Um dos poucos elementos usados antes da química moderna.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Antiguidade",
        "justification": "Pré-científico, utilizado há milênios.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–38,83 °C / 234,32 K / –37,89 °F",
        "justification": "Baixíssimo, líquido à temperatura ambiente.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "356,73 °C / 629,88 K / 674,11 °F",
        "justification": "Comparativamente baixo entre os metais.",
        "score": 40
      }
    ]
},
  "Tl": {
    "number": 81,
    "symbol": "Tl",
    "name": "Tálio",
    "heroName": "Tálio Fantasma",
    "heroDescription": "O mestre da furtividade e dos venenos invisíveis, capaz de se ocultar enquanto detecta o infravermelho.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20T%C3%A1lio%20Fantasma%2C%20representing%20the%20chemical%20element%20T%C3%A1lio%20(Symbol%3A%20Tl)%2C%20O%20mestre%20da%20furtividade%20e%20dos%20venenos%20invis%C3%ADveis%2C%20capaz%20de%20se%20ocultar%20enquanto%20detecta%20o%20infravermelho..%20Style%3A%20glowing%20symbol%20Tl%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente tóxico, instável no ar",
        "justification": "Requer extremo cuidado; oxida e forma compostos perigosos.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altíssimo risco ambiental",
        "justification": "Compostos são bioacumulativos e prejudiciais a longo prazo.",
        "score": 15
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente tóxico (letal em pequenas doses)",
        "justification": "Um dos metais mais perigosos ao organismo humano.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Equipamentos eletrônicos, materiais ópticos e sensores",
        "justification": "Uso técnico muito restrito por causa da toxicidade.",
        "score": 40
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +1 (mais comum), +3",
        "justification": "Alguma versatilidade, mas limitada por toxicidade.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara (~0,7 ppm)",
        "justification": "Presente em minérios de chumbo e cobre em baixas quantidades.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Elemento pesado pouco formado em processos estelares.",
        "score": 15
      },
      {
        "id": 8,
        "label": "Massa atômica (~204,38 u)",
        "value": "Muito alta",
        "justification": "Bastante pesado, quase no limite da estabilidade natural.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (11,85 g/cm³)",
        "value": "Alta",
        "justification": "Denso, mas não extremo como Ir ou Os.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~170 pm)",
        "value": "Grande",
        "justification": "Alto valor entre os metais pós-transição.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1 (estável), +3 (instável)",
        "justification": "Pouco versátil; o estado +3 é fortemente oxidante.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor metálico razoável.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,62)",
        "value": "Baixa",
        "justification": "Menos reativo do que se esperaria, mas ainda um metal mole.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico macio",
        "justification": "Estável e metálico à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6p¹",
        "justification": "Configuração simples, pós-transição.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
        "justification": "Fim do bloco p, com subníveis preenchidos.",
        "score": 60
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=81)",
        "value": "81",
        "justification": "Elevado número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (123 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Levemente radioativo em alguns isótopos, mas Tl-205 é estável",
        "justification": "Pode ser usado com segurança em sua forma estável.",
        "score": 90
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Termômetros, sensores infravermelhos, semicondutores",
        "justification": "Uso técnico muito restrito e especializado.",
        "score": 55
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "EUA, China, Canadá, Cazaquistão",
        "justification": "Produção limitada a poucos países.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Já foi usado como veneno e pesticida (!), depois proibido",
        "justification": "Histórico sombrio e fascinante.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego “thallos” (broto verde), pela cor da chama",
        "justification": "Nome curioso ligado à sua espectroscopia.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Crookes (1861)",
        "justification": "Isolado por espectroscopia de chama.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1861",
        "justification": "Era da química espectroscópica.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "304 °C / 577 K",
        "justification": "Relativamente baixo para um metal pesado.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1473 °C / 1746 K",
        "justification": "Moderado, inferior a outros pós-transição.",
        "score": 60
      }
    ]
},
  "Pb": {
    "number": 82,
    "symbol": "Pb",
    "name": "Chumbo",
    "heroName": "Chumbo Pesado",
    "heroDescription": "O escudo protetor contra o invisível, a barreira final contra as radiações que ameaçam a vida.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Chumbo%20Pesado%2C%20representing%20the%20chemical%20element%20Chumbo%20(Symbol%3A%20Pb)%2C%20O%20escudo%20protetor%20contra%20o%20invis%C3%ADvel%2C%20a%20barreira%20final%20contra%20as%20radia%C3%A7%C3%B5es%20que%20amea%C3%A7am%20a%20vida..%20Style%3A%20glowing%20symbol%20Pb%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Macio, tóxico, denso, sofre corrosão",
        "justification": "Fisicamente fácil de moldar, mas perigoso para a saúde.",
        "score": 45
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altíssimo risco ambiental",
        "justification": "Bioacumulativo, polui solos e águas por décadas.",
        "score": 20
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente tóxico, afeta sistema nervoso",
        "justification": "Muito perigoso, principalmente para crianças.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Baterias, blindagens, soldas, pigmentos, proteção contra radiação",
        "justification": "Aplicações industriais e médicas importantes.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +2 (estável), +4 (menos estável)",
        "justification": "Possui versatilidade limitada por estabilidade.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderada (~14 ppm)",
        "justification": "Relativamente comum na crosta terrestre.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Baixa",
        "justification": "Último estágio de decaimento de elementos pesados.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica (~207,2 u)",
        "value": "Muito alta",
        "justification": "Um dos mais pesados elementos estáveis.",
        "score": 70
      },
      {
        "id": 9,
        "label": "Densidade (11,34 g/cm³)",
        "value": "Alta",
        "justification": "Útil em blindagem contra radiação.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~180 pm)",
        "value": "Grande",
        "justification": "Típico de metais pesados.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 (mais comum), +4",
        "justification": "Quimicamente limitado.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Conduz eletricidade, mas menos que outros metais.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,33)",
        "value": "Alta para um metal pesado",
        "justification": "Pode formar ligações covalentes com facilidade.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável e maleável em temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6p²",
        "justification": "Característico do bloco p, com 2 elétrons externos.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
        "justification": "Encerra o grupo do carbono metálico.",
        "score": 60
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=82)",
        "value": "82",
        "justification": "Número atômico elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (125 no isótopo comum)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Pb-204, Pb-206, Pb-207, Pb-208)",
        "justification": "Vários isótopos estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Baterias, proteção radiológica, tintas antigas",
        "justification": "Ainda muito útil, embora com restrições.",
        "score": 70
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "China, Austrália, EUA, Rússia",
        "justification": "Mineração ativa em diversas partes do mundo.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Associado ao envenenamento em Roma antiga e gasolina no século XX",
        "justification": "História longa e controversa.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Latim plumbum",
        "justification": "Origem do símbolo “Pb”, muito utilizado desde a Antiguidade.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido – conhecido desde a Antiguidade",
        "justification": "Usado há milhares de anos.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Antiguidade",
        "justification": "Elemento pré-histórico.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "327,5 °C / 600,7 K",
        "justification": "Baixo para um metal pesado.",
        "score": 55
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1749 °C / 2022 K",
        "justification": "Moderado, inferior a metais de transição.",
        "score": 65
      }
    ]
},
  "Bi": {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuto",
    "heroName": "Bismuto Cristal",
    "heroDescription": "O alquimista das cores arco-íris, o herói metálico mais ecológico e mestre da levitação diamagnética.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Bismuto%20Cristal%2C%20representing%20the%20chemical%20element%20Bismuto%20(Symbol%3A%20Bi)%2C%20O%20alquimista%20das%20cores%20arco-%C3%ADris%2C%20o%20her%C3%B3i%20met%C3%A1lico%20mais%20ecol%C3%B3gico%20e%20mestre%20da%20levita%C3%A7%C3%A3o%20diamagn%C3%A9tica..%20Style%3A%20glowing%20symbol%20Bi%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Quebra facilmente; baixa condutividade térmica",
        "justification": "Frágil para aplicações estruturais.",
        "score": 60
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade; mineração moderada",
        "justification": "Considerado um metal ecológico entre os pesados.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico; usado até em remédios",
        "justification": "Substituto verde ao chumbo.",
        "score": 90
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Cosméticos, medicamentos, ligas, detectores, substituto do chumbo",
        "justification": "Diversificado e em crescimento.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 (mais comum), +5",
        "justification": "Menor variedade que outros metais.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Raro (~0,009 ppm)",
        "justification": "Raramente encontrado em estado nativo.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Produzido em pequenas quantidades astrofísicas.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica (~208,98 u)",
        "value": "Muito alta",
        "justification": "Um dos mais pesados elementos estáveis.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (9,78 g/cm³)",
        "value": "Alta, mas não extrema",
        "justification": "Denso, mas abaixo dos metais nobres.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~156 pm)",
        "value": "Grande",
        "justification": "Condizente com a massa atômica.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (estável), +5 (menos comum)",
        "justification": "Estável, mas pouco versátil.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Ruim para metal",
        "justification": "Limita aplicações eletrônicas.",
        "score": 45
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,02)",
        "value": "Moderada",
        "justification": "Média entre os pós-transição.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável em temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6p³",
        "justification": "Fim do bloco p, útil para didática.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
        "justification": "Completa e representativa do bloco p.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=83)",
        "value": "83",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (126 no isótopo comum)",
        "value": "5",
        "justification": "Padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Quase estável (Bi-209: radioativo com meia-vida maior que o universo)",
        "justification": "Na prática, considerado estável.",
        "score": 95
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Substitui chumbo, uso farmacêutico, ligas especiais",
        "justification": "Importante em transição ecológica.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Bolívia, China, Peru, México, Canadá",
        "justification": "Boa presença geológica.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Forma cristais coloridos naturalmente",
        "justification": "Fascinante em química visual e experimental.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do alemão wismuth (“massa branca”)",
        "justification": "Nome descritivo histórico.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Usado por alquimistas e metalurgistas.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Antiguidade",
        "justification": "Um dos metais usados desde civilizações pré-modernas.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "271,4 °C / 544,6 K / 520,5 °F",
        "justification": "Relativamente baixo para um metal.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1564 °C / 1837 K / 2847 °F",
        "justification": "Razoável para o grupo.",
        "score": 70
      }
    ]
},
  "Po": {
    "number": 84,
    "symbol": "Po",
    "name": "Polônio",
    "heroName": "Polônio Estelar",
    "heroDescription": "A centelha azul do vácuo, o herói intensamente radioativo que aquece as sondas espaciais no frio eterno.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Pol%C3%B4nio%20Estelar%2C%20representing%20the%20chemical%20element%20Pol%C3%B4nio%20(Symbol%3A%20Po)%2C%20A%20centelha%20azul%20do%20v%C3%A1cuo%2C%20o%20her%C3%B3i%20intensamente%20radioativo%20que%20aquece%20as%20sondas%20espaciais%20no%20frio%20eterno..%20Style%3A%20glowing%20symbol%20Po%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente radioativo, instável, perigoso",
        "justification": "Alta periculosidade limita uso.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Muito tóxico; dispersão radiativa potencial",
        "justification": "Perigoso mesmo em quantidades minúsculas.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente letal por ingestão/inalação",
        "justification": "Um dos elementos mais letais conhecidos.",
        "score": 1
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em geradores térmicos espaciais e eliminadores de estática",
        "justification": "Aplicações especializadas e limitadas.",
        "score": 40
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+2 (comum), +4 (menos comum)",
        "justification": "Ligações simples com baixa variedade.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Extremamente rara (~0,2 microgramas/tonelada de rocha)",
        "justification": "Praticamente inexistente naturalmente.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Desprezível",
        "justification": "Formação apenas em decaimento radioativo.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~209 u)",
        "value": "Muito alta",
        "justification": "Consistente com os elementos pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (9,32 g/cm³)",
        "value": "Alta",
        "justification": "Metal denso como o chumbo.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~167 pm)",
        "value": "Grande",
        "justification": "Valor elevado, típico dos pós-transição.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "6",
        "justification": "Baixa diversidade.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Condutor metálico razoável.",
        "score": 55
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,0)",
        "value": "Média",
        "justification": "Valor razoável para o grupo.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável fisicamente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6p⁴",
        "justification": "Representa bem o final do bloco p.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
        "justification": "Estrutura completa para o grupo 16.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=84)",
        "value": "84",
        "justification": "Esperado para a posição.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (125 no isótopo comum)",
        "value": "5",
        "justification": "Valor padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo (alfa, meia-vida curta)",
        "justification": "Altamente instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fontes de calor espacial, ionizadores",
        "justification": "Aplicações críticas, mas muito restritas.",
        "score": 30
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido artificialmente em reatores; traços em minérios de urânio",
        "justification": "Não ocorre em quantidades úteis na natureza.",
        "score": 15
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Envenenamento de Alexander Litvinenko (2006); descoberto por Marie Curie",
        "justification": "História marcante e controversa.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem à Polônia (Polonia)",
        "justification": "Único elemento com nome patriótico de país.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Marie Curie e Pierre Curie (1898)",
        "justification": "Marco histórico da radioatividade.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Importante na história da química nuclear.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "254 °C / 527 K / 489,2 °F",
        "justification": "Relativamente baixo para metal.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "962 °C / 1235 K / 1763,6 °F",
        "justification": "Médio para elementos pesados.",
        "score": 50
      }
    ]
},
  "At": {
    "number": 85,
    "symbol": "At",
    "name": "Astato",
    "heroName": "Astatínio Fugaz",
    "heroDescription": "A sombra mais rara da Terra, um herói que brilha por um instante antes de desaparecer no mistério.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Astat%C3%ADnio%20Fugaz%2C%20representing%20the%20chemical%20element%20Astato%20(Symbol%3A%20At)%2C%20A%20sombra%20mais%20rara%20da%20Terra%2C%20um%20her%C3%B3i%20que%20brilha%20por%20um%20instante%20antes%20de%20desaparecer%20no%20mist%C3%A9rio..%20Style%3A%20glowing%20symbol%20At%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente instável, radioativo, escasso",
        "justification": "Não pode ser armazenado ou manipulado em quantidades significativas.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altíssimo risco radiológico",
        "justification": "Elemento radioativo que praticamente não existe na natureza.",
        "score": 15
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Perigosíssimo – radiotóxico",
        "justification": "Alta radioatividade, embora pouco estudada diretamente.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Uso potencial em medicina nuclear (câncer)",
        "justification": "Apresenta aplicação promissora em terapias-alvo.",
        "score": 40
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados -1, +1, +3, +5, +7",
        "justification": "Quimicamente versátil, como os halogênios.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente (estima-se menos de 1 g na crosta)",
        "justification": "O mais raro dos elementos naturais.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Praticamente nula",
        "justification": "Não se forma em quantidades mensuráveis.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~210 u)",
        "value": "Altíssima",
        "justification": "O halogênio mais pesado.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~7 g/cm³)",
        "value": "Moderada/alta",
        "justification": "Valor estimado com base em extrapolações.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~150 pm)",
        "value": "Estimado",
        "justification": "Dentro do esperado para o grupo 17.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Vários, incluindo +1 e -1",
        "justification": "Semelhante a outros halogênios pesados.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Desconhecida, mas comporta-se como semicondutor",
        "justification": "Teoricamente pode exibir propriedades metálicas.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (2,2 – estimada)",
        "value": "Média",
        "justification": "Menor eletronegatividade entre os halogênios.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido (estimado)",
        "justification": "Devido à alta massa, espera-se estado sólido.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6p⁵",
        "justification": "Pertence ao grupo dos halogênios.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
        "justification": "Completa o grupo dos halogênios.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=85)",
        "value": "85",
        "justification": "Número atômico elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (variável; isótopo At-210 tem 125)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo",
        "justification": "Todos os isótopos são instáveis e emitem radiação.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Medicina nuclear (alvo terapêutico alfa)",
        "justification": "Poucas aplicações práticas até hoje.",
        "score": 50
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido em aceleradores",
        "justification": "Não encontrado naturalmente em quantidades úteis.",
        "score": 10
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Menos de 1 micrograma já foi isolado",
        "justification": "O elemento natural mais raro e misterioso.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego astatos (“instável”)",
        "justification": "Nome reflete perfeitamente sua natureza.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Dale R. Corson, Kenneth Ross MacKenzie e Emilio Segrè (1940)",
        "justification": "Descoberto artificialmente por bombardeio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1940",
        "justification": "Descoberto em meio à era atômica.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~302 °C (estimado)",
        "justification": "Valor incerto.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~337 °C (estimado)",
        "justification": "Baseado em extrapolações de halogênios.",
        "score": 50
      }
    ]
},
  "Rn": {
    "number": 86,
    "symbol": "Rn",
    "name": "Radônio",
    "heroName": "Radônio Invisível",
    "heroDescription": "O fantasma das profundezas terrestres, um gás nobre e radioativo que emana silenciosamente do solo.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Rad%C3%B4nio%20Invis%C3%ADvel%2C%20representing%20the%20chemical%20element%20Rad%C3%B4nio%20(Symbol%3A%20Rn)%2C%20O%20fantasma%20das%20profundezas%20terrestres%2C%20um%20g%C3%A1s%20nobre%20e%20radioativo%20que%20emana%20silenciosamente%20do%20solo..%20Style%3A%20glowing%20symbol%20Rn%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Gasoso, invisível, radioativo, acumulativo",
        "justification": "Altamente perigoso e difícil de detectar.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Cancerígeno; liberado naturalmente do solo",
        "justification": "Um dos principais poluentes radiológicos ambientais.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente perigoso; causa câncer de pulmão",
        "justification": "Segundo maior causador de câncer de pulmão, após o cigarro.",
        "score": 1
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Uso limitado em radioterapia e pesquisa",
        "justification": "Aplicações muito específicas.",
        "score": 30
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Nenhum (gás nobre, mas forma raros compostos como RnF₂)",
        "justification": "Inerte, com raríssimas exceções.",
        "score": 20
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Emana do solo (decorrente do urânio)",
        "justification": "Detectável em áreas com urânio, mas em pequenas quantidades.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Extremamente rara",
        "justification": "Instável, não persiste fora da Terra.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~222 u)",
        "value": "Muito alta",
        "justification": "Um dos elementos naturais mais pesados.",
        "score": 70
      },
      {
        "id": 9,
        "label": "Densidade (9,73 g/L como gás)",
        "value": "Densidade altíssima entre gases",
        "justification": "Gás mais denso conhecido.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~120 pm)",
        "value": "Médio",
        "justification": "Tamanho esperado para gás nobre pesado.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "0 (inativo), +2 (raro)",
        "justification": "Quase não forma compostos.",
        "score": 15
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Não conduz eletricidade.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~2,2)",
        "value": "Média para gases nobres",
        "justification": "Valor teórico, não prático.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás",
        "justification": "Gases recebem nota mínima aqui.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6p⁶",
        "justification": "Preenche o bloco p como esperado.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
        "justification": "Completa para o grupo 18.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=86)",
        "value": "86",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (136 no isótopo comum)",
        "value": "5",
        "justification": "Padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo (emissor alfa)",
        "justification": "Alta instabilidade.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Radioterapia, geologia, estudos atmosféricos",
        "justification": "Aplicações raras devido ao risco.",
        "score": 30
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Áreas com granito, urânio, rochas radiativas",
        "justification": "Amplamente distribuído, mas perigoso.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Pode se acumular em porões, cavernas e minas",
        "justification": "Chamado de “gás assassino invisível”.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "De \"radium\", o elemento de onde deriva",
        "justification": "Nome com ligação histórica à radioatividade.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Friedrich Dorn (1899)",
        "justification": "Descoberta científica relevante.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1899",
        "justification": "Parte da era clássica da radioatividade.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "–71 °C / 202 K / –95,8 °F",
        "justification": "Muito baixo, típico de gás nobre.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "–61,7 °C / 211,5 K / –79,1 °F",
        "justification": "Baixíssimo, evapora com facilidade.",
        "score": 5
      }
    ]
},
  "Fr": {
    "number": 87,
    "symbol": "Fr",
    "name": "Frâncio",
    "heroName": "Frâncio Efêmero",
    "heroDescription": "O rei da instabilidade, o elemento natural mais instável que explode ao menor contato com a água.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Fr%C3%A2ncio%20Ef%C3%AAmero%2C%20representing%20the%20chemical%20element%20Fr%C3%A2ncio%20(Symbol%3A%20Fr)%2C%20O%20rei%20da%20instabilidade%2C%20o%20elemento%20natural%20mais%20inst%C3%A1vel%20que%20explode%20ao%20menor%20contato%20com%20a%20%C3%A1gua..%20Style%3A%20glowing%20symbol%20Fr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente instável, raro, radioativo, difícil de estudar",
        "justification": "Praticamente inútil fora da pesquisa básica.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altíssimo risco radiológico, sem benefício ecológico",
        "justification": "Radioativo e praticamente inexistente na natureza.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito alto – altamente radiotóxico",
        "justification": "Emissão intensa de partículas alfa.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Nenhum prático até hoje",
        "justification": "Aplicações apenas teóricas e laboratoriais.",
        "score": 5
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +1",
        "justification": "Pouquíssima variedade química conhecida.",
        "score": 10
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Quase inexistente (estimado < 30 g na crosta)",
        "justification": "Um dos elementos mais raros da natureza.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Extremamente rara",
        "justification": "Forma-se brevemente como produto de decaimento.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~223 u)",
        "value": "Muito alta",
        "justification": "Um dos elementos mais pesados do grupo 1.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~2,5 g/cm³)",
        "value": "Baixa para um metal pesado",
        "justification": "Densidade relativamente baixa para sua massa.",
        "score": 40
      },
      {
        "id": 10,
        "label": "Raio atômico (estimado ~270 pm)",
        "value": "Muito grande",
        "justification": "O maior entre os elementos do grupo 1.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Apenas +1",
        "justification": "Característica típica dos metais alcalinos.",
        "score": 15
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Estimada como boa",
        "justification": "Metálico, mas não comprovado experimentalmente.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,7 – estimada)",
        "value": "Muito baixa",
        "justification": "O mais eletropositivo dos elementos.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico (estimado)",
        "justification": "Espera-se comportamento similar ao Césio.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7s¹",
        "justification": "Final do grupo 1, início do período 7.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 7s¹",
        "justification": "Similar ao Césio e demais metais alcalinos.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=87)",
        "value": "87",
        "justification": "Número atômico elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (p.ex. 136 no Fr-223)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo (t½ ≈ 22 min)",
        "justification": "Vida extremamente curta.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática real",
        "justification": "Produzido apenas em aceleradores.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Observado em minerais de urânio (fracionado)",
        "justification": "Raramente detectado na natureza.",
        "score": 10
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Foi o último elemento descoberto na natureza (1939)",
        "justification": "Descoberto por Marguerite Perey, ex-aluna de Curie.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem à França",
        "justification": "Nome com carga simbólica nacional.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Marguerite Perey (1939)",
        "justification": "Descoberta histórica por uma cientista mulher.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1939",
        "justification": "Descoberto no contexto do início da era nuclear.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~27 °C (estimado)",
        "justification": "Extremamente baixo, estado quase líquido.",
        "score": 30
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~677 °C (estimado)",
        "justification": "Baixo entre os metais pesados.",
        "score": 40
      }
    ]
},
  "Ra": {
    "number": 88,
    "symbol": "Ra",
    "name": "Rádio",
    "heroName": "Rádio Brilhante",
    "heroDescription": "O herói que iluminou a ciência, o legado eterno de Marie Curie e o mestre da luminescência atômica.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20R%C3%A1dio%20Brilhante%2C%20representing%20the%20chemical%20element%20R%C3%A1dio%20(Symbol%3A%20Ra)%2C%20O%20her%C3%B3i%20que%20iluminou%20a%20ci%C3%AAncia%2C%20o%20legado%20eterno%20de%20Marie%20Curie%20e%20o%20mestre%20da%20luminesc%C3%AAncia%20at%C3%B4mica..%20Style%3A%20glowing%20symbol%20Ra%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, perigoso à saúde",
        "justification": "Instável e requer cuidados extremos de manuseio.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Alto risco radiológico, sem ocorrência natural significativa",
        "justification": "Perigoso, mas já presente em minérios de urânio.",
        "score": 20
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente perigoso – altamente radiotóxico",
        "justification": "Emissão intensa de radiação alfa, pode causar câncer.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Aplicações médicas antigas (radioterapia)",
        "justification": "Já foi amplamente usado, hoje substituído por outros isótopos.",
        "score": 40
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+2 (único estado comum)",
        "justification": "Pouca diversidade química.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito baixa, traços em minérios de urânio e tório",
        "justification": "Detectável apenas como subproduto.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito rara",
        "justification": "Forma-se por decaimento de elementos pesados.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~226 u)",
        "value": "Muito alta",
        "justification": "Um dos elementos mais pesados naturalmente.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Densidade (~5,5 g/cm³)",
        "value": "Moderada",
        "justification": "Menos denso que outros metais pesados.",
        "score": 55
      },
      {
        "id": 10,
        "label": "Raio atômico (~215 pm)",
        "value": "Grande",
        "justification": "Um dos maiores entre os metais alcalino-terrosos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "2",
        "justification": "Muito previsível, semelhante ao cálcio e bário.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Metálico, mas pouco estudado devido à radioatividade.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (0,9)",
        "value": "Muito baixa",
        "justification": "Muito reativo, como os metais do grupo 2.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Confirmado experimentalmente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7s²",
        "justification": "Alcalino-terroso típico.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 7s²",
        "justification": "Final da família 2A.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=88)",
        "value": "88",
        "justification": "Número atômico elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (Ra-226: 138 n)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo (t½ ≈ 1600 anos)",
        "justification": "Emissor alfa forte.",
        "score": 10
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Já usado em radioterapia e relógios luminosos",
        "justification": "Praticamente obsoleto hoje por razões de segurança.",
        "score": 30
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Extraído de minerais de urânio (pitchblenda)",
        "justification": "Histórico importante, mas difícil de obter.",
        "score": 25
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Descoberto por Marie e Pierre Curie",
        "justification": "Ícone da história da radioatividade.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do latim radius (raio)",
        "justification": "Nome que reflete sua emissão de radiação.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Marie e Pierre Curie (1898)",
        "justification": "Uma das descobertas mais famosas da química.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Início da era nuclear.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~700 °C",
        "justification": "Valor moderado.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~1737 °C",
        "justification": "Relativamente alto para o grupo 2.",
        "score": 60
      }
    ]
},
  "Ac": {
    "number": 89,
    "symbol": "Ac",
    "name": "Actínio",
    "heroName": "Actínio Ativo",
    "heroDescription": "O precursor da luz nuclear, capaz de brilhar no escuro com um azul etéreo e intenso.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Act%C3%ADnio%20Ativo%2C%20representing%20the%20chemical%20element%20Act%C3%ADnio%20(Symbol%3A%20Ac)%2C%20O%20precursor%20da%20luz%20nuclear%2C%20capaz%20de%20brilhar%20no%20escuro%20com%20um%20azul%20et%C3%A9reo%20e%20intenso..%20Style%3A%20glowing%20symbol%20Ac%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, pouco versátil",
        "justification": "Pouco uso e difícil manuseio devido à instabilidade.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Radioativo, mas emite radiação útil para terapia",
        "justification": "Pode ser usado em medicina, mas é perigoso.",
        "score": 25
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito alto – emite radiação forte",
        "justification": "Altamente radiotóxico; requer blindagem.",
        "score": 15
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Utilizado em algumas terapias experimentais contra câncer",
        "justification": "Aplicações promissoras, mas limitadas.",
        "score": 45
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3",
        "justification": "Estado de oxidação único, pouca versatilidade.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Muito rara",
        "justification": "Encontrado apenas em traços no urânio.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Extremamente rara",
        "justification": "Apenas como produto de decaimento.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~227 u)",
        "value": "Muito alta",
        "justification": "Elemento muito pesado.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Densidade (~10,1 g/cm³)",
        "value": "Alta",
        "justification": "Denso como outros actinídeos.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (~215 pm)",
        "value": "Grande",
        "justification": "Esperado para um actinídeo.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Pouca diversidade química.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa (metálica)",
        "justification": "Condutivo, apesar da radioatividade.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,1)",
        "value": "Muito baixa",
        "justification": "Reativo e eletropositivo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Confirmado.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d¹ 7s²",
        "justification": "Início dos actinídeos.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 6d¹ 7s²",
        "justification": "Base dos actinídeos, química relativamente previsível.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=89)",
        "value": "89",
        "justification": "Número atômico elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (138 no Ac-227)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito radioativo (t½ ~22 anos)",
        "justification": "Instável, mas mais durável que o Frâncio.",
        "score": 20
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Potencial em radioterapia",
        "justification": "Algum uso experimental em medicina nuclear.",
        "score": 45
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Traços em minérios de urânio",
        "justification": "Difícil de isolar.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro elemento da série dos actinídeos",
        "justification": "Referência em química nuclear.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego aktinos (raio)",
        "justification": "Nome simboliza sua emissão de radiação.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "André-Louis Debierne (1899)",
        "justification": "Descoberta relevante no início da era radioativa.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1899",
        "justification": "Contemporâneo da descoberta do Rádio.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~1050 °C",
        "justification": "Valor alto, condizente com metais pesados.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~3198 °C",
        "justification": "Relativamente elevado.",
        "score": 80
      }
    ]
},
  "Th": {
    "number": 90,
    "symbol": "Th",
    "name": "Tório",
    "heroName": "Tório Sustentável",
    "heroDescription": "O gigante da energia verde do futuro, mais abundante que o urânio e mestre dos reatores seguros.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20T%C3%B3rio%20Sustent%C3%A1vel%2C%20representing%20the%20chemical%20element%20T%C3%B3rio%20(Symbol%3A%20Th)%2C%20O%20gigante%20da%20energia%20verde%20do%20futuro%2C%20mais%20abundante%20que%20o%20ur%C3%A2nio%20e%20mestre%20dos%20reatores%20seguros..%20Style%3A%20glowing%20symbol%20Th%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
        {
            "id": 1,
            "label": "Fraquezas",
            "value": "Baixa Reatividade Térmica",
            "justification": "Exige condições específicas para iniciar a fissão controlada.",
            "score": 10
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Altamente Benéfico (Energia)",
            "justification": "Promete uma economia baseada em energia nuclear limpa e segura.",
            "score": 95
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Moderado",
            "justification": "Radioisótopo de vida longa, perigoso se ingerido.",
            "score": 30
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Combustível do Futuro",
            "justification": "Muito mais abundante e seguro que o urânio para geração de energia.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "4",
            "justification": "Seu estado de oxidação mais estável é o tetravalente.",
            "score": 40
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Comum",
            "justification": "Tão abundante na crosta terrestre quanto o chumbo.",
            "score": 60
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Baixa",
            "justification": "Formado apenas em eventos estelares extremos (supernovas).",
            "score": 1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "232,04 u",
            "justification": "Massa do seu isótopo natural dominante.",
            "score": 232
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "11,72 g/cm³",
            "justification": "Metal denso, similar ao chumbo.",
            "score": 117
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "179 pm",
            "justification": "Tamanho atômico padrão para os primeiros actinídeos.",
            "score": 179
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+4",
            "justification": "Estado de oxidação quase exclusivo do tório.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Boa",
            "justification": "Metal com propriedades condutoras significativas.",
            "score": 60
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Relativamente baixa, facilitando a formação de compostos iônicos.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado que se torna preto quando exposto ao ar.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d²",
            "justification": "Possui dois elétrons no subnível 6d em seu estado fundamental.",
            "score": 20
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 6d² 7s²",
            "justification": "Configuração que o diferencia dos demais actinídeos.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "90",
            "justification": "Identidade atômica do Tório.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "142",
            "justification": "Número de nêutrons em seu isótopo mais estável (Th-232).",
            "score": 142
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Muito Baixa (Vida Longa)",
            "justification": "Meia-vida de 14 bilhões de anos, comparável à idade do universo.",
            "score": 95
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Eletrodos de Solda",
            "justification": "Usado em soldagem TIG por sua alta resistência ao calor.",
            "score": 85
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Noruega",
            "justification": "Identificado pela primeira vez em uma ilha norueguesa.",
            "score": 80
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "O Sol na Terra",
            "justification": "Pode ser usado para criar reatores que não derretem e geram pouco lixo.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Thor",
            "justification": "Homenagem ao deus nórdico do trovão.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Jöns Jacob Berzelius",
            "justification": "Um dos pais da química moderna, isolou o tório em 1828.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1828",
            "justification": "Descoberto muito antes de se conhecer a radioatividade.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1750 °C",
            "justification": "Um dos pontos de fusão mais altos entre os metais comuns.",
            "score": 95
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "4788 °C",
            "justification": "Ponto de ebulição extremamente elevado.",
            "score": 100
        }
    ]
},
  "Pa": {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactínio",
    "heroName": "Protactínio Ancestral",
    "heroDescription": "O elo perdido dos actinídeos, mestre das transformações atômicas lentas e profundas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Protact%C3%ADnio%20Ancestral%2C%20representing%20the%20chemical%20element%20Protact%C3%ADnio%20(Symbol%3A%20Pa)%2C%20O%20elo%20perdido%20dos%20actin%C3%ADdeos%2C%20mestre%20das%20transforma%C3%A7%C3%B5es%20at%C3%B4micas%20lentas%20e%20profundas..%20Style%3A%20glowing%20symbol%20Pa%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente tóxico e radioativo; raríssimo",
        "justification": "Extremamente difícil de manipular com segurança.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altíssimo risco; benefício limitado",
        "justification": "Raramente usado, mas perigoso ao meio ambiente.",
        "score": 20
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito perigoso – emite radiação alfa e beta",
        "justification": "Altamente tóxico e radiativo mesmo em pequenas doses.",
        "score": 15
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Pouquíssimas aplicações (pesquisa nuclear)",
        "justification": "Uso restrito a contextos de pesquisa muito específicos.",
        "score": 25
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados de oxidação +5 (principal), +4 e +3",
        "justification": "Boa versatilidade para um actinídeo.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Extremamente rara",
        "justification": "Apenas traços em uraninita.",
        "score": 5
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Raríssima",
        "justification": "Não é formado em estrelas de forma significativa.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica (~231 u)",
        "value": "Muito alta",
        "justification": "Um dos mais pesados elementos naturais.",
        "score": 80
      },
      {
        "id": 9,
        "label": "Densidade (~15,37 g/cm³)",
        "value": "Alta",
        "justification": "Densidade superior à maioria dos metais.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~200 pm)",
        "value": "Grande",
        "justification": "Compatível com outros actinídeos.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+5 predominante",
        "justification": "Boa estabilidade em solução como Pa⁵⁺.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Metálica razoável",
        "justification": "Apesar da radioatividade, conduz eletricidade.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,5)",
        "value": "Baixa",
        "justification": "Reativo, típico dos actinídeos.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Confirmado.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f² 6d¹ 7s²",
        "justification": "Configuração complexa, típica dos actinídeos.",
        "score": 75
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f² 6d¹ 7s²",
        "justification": "Subníveis f e d preenchidos.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=91)",
        "value": "91",
        "justification": "Elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (Pa-231: 140 n)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito radioativo (t½ ≈ 32.760 anos)",
        "justification": "Longa meia-vida, mas ainda muito instável.",
        "score": 25
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Apenas em pesquisa científica",
        "justification": "Pouco utilizado comercialmente.",
        "score": 20
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Minerais de urânio",
        "justification": "Isolado em quantidades ínfimas.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nome significa “anterior ao actínio”",
        "justification": "Refere-se ao fato de decair para actínio.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Do grego protos (antes) + actínio",
        "justification": "Nome com base no decaimento.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Kasimir Fajans & Oswald Göhring (1913); confirmado por Hahn & Meitner",
        "justification": "História científica rica e colaborativa.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1913",
        "justification": "Década marcante para a física nuclear.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~1572 °C",
        "justification": "Elevado.",
        "score": 75
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~4000 °C",
        "justification": "Muito alto para um metal radioativo.",
        "score": 90
      }
    ]
},
  "U": {
    "number": 92,
    "symbol": "U",
    "name": "Urânio",
    "heroName": "Urânio Fissão",
    "heroDescription": "O titã do núcleo, a fonte suprema de poder e destruição, capaz de iluminar cidades ou mudar o curso da história.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Ur%C3%A2nio%20Fiss%C3%A3o%2C%20representing%20the%20chemical%20element%20Ur%C3%A2nio%20(Symbol%3A%20U)%2C%20O%20tit%C3%A3%20do%20n%C3%BAcleo%2C%20a%20fonte%20suprema%20de%20poder%20e%20destrui%C3%A7%C3%A3o%2C%20capaz%20de%20iluminar%20cidades%20ou%20mudar%20o%20curso%20da%20hist%C3%B3ria..%20Style%3A%20glowing%20symbol%20U%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo; precisa de blindagem",
        "justification": "Perigoso sem controle rígido.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pode causar contaminação ambiental grave",
        "justification": "Uso exige controle extremo.",
        "score": 15
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente tóxico e radiativo; riscos sérios em altas doses",
        "justification": "Preocupação para saúde humana.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Energia nuclear, datação geológica, armamento",
        "justification": "Altamente estratégico.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Múltiplos estados: +3, +4, +5, +6",
        "justification": "Alta versatilidade química.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Moderadamente abundante (~2,7 ppm na crosta)",
        "justification": "Mais comum que metais preciosos.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Muito baixa",
        "justification": "Quase ausente em estrelas e planetas.",
        "score": 15
      },
      {
        "id": 8,
        "label": "Massa atômica (~238,03 u)",
        "value": "Muito alta",
        "justification": "Um dos mais pesados naturalmente.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (19,1 g/cm³)",
        "value": "Extremamente alta",
        "justification": "Quase tão denso quanto o tungstênio.",
        "score": 95
      },
      {
        "id": 10,
        "label": "Raio atômico (~175 pm)",
        "value": "Grande",
        "justification": "Condizente com seu número atômico.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "18",
        "justification": "Flexibilidade útil em compostos.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Menor que metais tradicionais, mas funcional.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,38)",
        "value": "Baixa",
        "justification": "Reativo, forma compostos iônicos e covalentes.",
        "score": 25
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável no ambiente, embora radioativo.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f³ 6d¹ 7s²",
        "justification": "Estrutura f-complexa, interessante didaticamente.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f³ 6d¹ 7s²",
        "justification": "Representa bem os actinídeos.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 92)",
        "value": "92",
        "justification": "Um dos mais altos da natureza.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº nêutrons (146 no isótopo U‑238)",
        "value": "5",
        "justification": "Critério neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima",
        "justification": "Perigoso sem controle.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Energia nuclear, medicina, geologia, defesa",
        "justification": "Crucial para diversos setores.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Encontrado em uraninita, carnotita, pitchblenda",
        "justification": "Minérios conhecidos e extraídos industrialmente.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Base da datação U‑Pb e combustível de reatores nucleares",
        "justification": "Valor científico e energético.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem ao planeta Urano",
        "justification": "Nome simbólico e astronômico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Martin Heinrich Klaproth (1789)",
        "justification": "Importante químico alemão.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1789",
        "justification": "Descoberto antes da radioatividade ser compreendida.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1132 °C / 1405 K / 2070 °F",
        "justification": "Moderadamente alto.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "4131 °C / 4404 K / 7468 °F",
        "justification": "Extremamente elevado.",
        "score": 90
      }
    ]
},
  "Np": {
    "number": 93,
    "symbol": "Np",
    "name": "Netúnio",
    "heroName": "Neptúnio Voyager",
    "heroDescription": "O primeiro herói além do urânio, o navegador dos elementos transurânicos artificiais.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Nept%C3%BAnio%20Voyager%2C%20representing%20the%20chemical%20element%20Net%C3%BAnio%20(Symbol%3A%20Np)%2C%20O%20primeiro%20her%C3%B3i%20al%C3%A9m%20do%20ur%C3%A2nio%2C%20o%20navegador%20dos%20elementos%20transur%C3%A2nicos%20artificiais..%20Style%3A%20glowing%20symbol%20Np%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, tóxico, difícil de armazenar",
        "justification": "Elevado risco e custo de manuseio.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Produto do ciclo nuclear; contaminante de resíduos radioativos",
        "justification": "Problema em reatores e armas nucleares.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito perigoso, altamente radioativo",
        "justification": "Risco grave à saúde humana e ao ambiente.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Estudo de reações nucleares; pesquisa de reatores avançados",
        "justification": "Importante cientificamente, uso limitado na prática.",
        "score": 55
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "25",
        "justification": "Um dos actinídeos mais versáteis em oxidação.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Praticamente nulo; só traços em minérios",
        "justification": "Sintetizado artificialmente.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente naturalmente",
        "justification": "Produzido por humanos.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~237 u)",
        "value": "Muito alta",
        "justification": "Transurânico, pesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (20,45 g/cm³)",
        "value": "Muito alta",
        "justification": "Um dos elementos mais densos.",
        "score": 95
      },
      {
        "id": 10,
        "label": "Raio atômico (~190 pm)",
        "value": "Grande",
        "justification": "Valor esperado para seu grupo.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 a +7 (especialmente +5)",
        "justification": "Muito flexível quimicamente.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Metálica",
        "justification": "Condutor razoável.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (1,36)",
        "value": "Baixa",
        "justification": "Típico dos actinídeos reativos.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável como sólido.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f⁴",
        "justification": "Parte do bloco f, útil em pesquisa.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f⁴ 6d¹ 7s²",
        "justification": "Representa bem a série dos actinídeos.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=93)",
        "value": "93",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (144 no isótopo comum)",
        "value": "5",
        "justification": "Valor padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Alta (emissor alfa e beta)",
        "justification": "Extremamente instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Combustível nuclear experimental; arma potencial",
        "justification": "Muito restrito por questões geopolíticas.",
        "score": 30
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido em reatores nucleares",
        "justification": "Não encontrado naturalmente.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeado em homenagem a Netuno; primeiro transurânico",
        "justification": "Histórico na química nuclear.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado após o planeta Netuno",
        "justification": "Segue sequência Urânio–Netuno–Plutônio.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Edwin McMillan e Philip Abelson (1940)",
        "justification": "Pioneiros em elementos sintéticos.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1940",
        "justification": "Década da corrida nuclear.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "639 °C / 912 K / 1182,2 °F",
        "justification": "Moderadamente elevado.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3902 °C / 4175 K / 7055,6 °F",
        "justification": "Muito alto; ideal para estudo térmico.",
        "score": 95
      }
    ]
},
  "Pu": {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutônio",
    "heroName": "Plutônio Alfa",
    "heroDescription": "O motor do sistema solar, alimentando as naves que exploram os confins do espaço com seu calor atômico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Plut%C3%B4nio%20Alfa%2C%20representing%20the%20chemical%20element%20Plut%C3%B4nio%20(Symbol%3A%20Pu)%2C%20O%20motor%20do%20sistema%20solar%2C%20alimentando%20as%20naves%20que%20exploram%20os%20confins%20do%20espa%C3%A7o%20com%20seu%20calor%20at%C3%B4mico..%20Style%3A%20glowing%20symbol%20Pu%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente radioativo, tóxico, difícil de armazenar",
        "justification": "Um dos elementos mais perigosos manipulados por humanos.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altíssimo risco ecológico",
        "justification": "Lixo nuclear, persistência ambiental, contaminação.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente tóxico, inalável, cancerígeno",
        "justification": "Extremamente perigoso, mesmo em quantidades mínimas.",
        "score": 1
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Reatores nucleares, armas nucleares, sondas espaciais",
        "justification": "Uso energético e tecnológico crucial.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 a +7",
        "justification": "Um dos actinídeos com mais estados de oxidação.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Sintético, traços em urânio",
        "justification": "Virtualmente inexistente na natureza.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula; criado por humanos",
        "justification": "Elemento sintético.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~244 u)",
        "value": "Muito alta",
        "justification": "Padrão entre transurânicos.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (19,86 g/cm³)",
        "value": "Muito alta",
        "justification": "Densidade semelhante ao urânio.",
        "score": 90
      },
      {
        "id": 10,
        "label": "Raio atômico (~175 pm)",
        "value": "Grande",
        "justification": "Valor elevado típico do grupo.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3, +4, +5, +6 (estáveis), +7 (raro)",
        "justification": "Alta diversidade de reatividade.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Metálica",
        "justification": "Condutor razoável.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,28)",
        "value": "Baixa",
        "justification": "Muito reativo.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável fisicamente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f⁶",
        "justification": "Bloco f em configuração profunda.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f⁶ 7s²",
        "justification": "Importante para didática de química nuclear.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=94)",
        "value": "94",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (150 no Pu-244)",
        "value": "5",
        "justification": "Valor esperado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo (alfa e fissão espontânea)",
        "justification": "Muito instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Energia nuclear, bombas, sondas espaciais",
        "justification": "Uso estratégico de alto impacto.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido em reatores e armas nucleares",
        "justification": "Exclusivamente artificial.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Presente nas bombas de Hiroshima/Nagasaki e Voyager",
        "justification": "Símbolo da era atômica.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado em homenagem ao planeta Plutão",
        "justification": "Completa a série urânio–netúnio–plutônio.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Glenn Seaborg, Edwin McMillan (1940)",
        "justification": "Descoberta marcante na história nuclear.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1940",
        "justification": "Década-chave na física nuclear.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "639,4 °C / 912,5 K / 1182,9 °F",
        "justification": "Relativamente baixo para metal pesado.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3228 °C / 3501 K / 5842,4 °F",
        "justification": "Bastante elevado.",
        "score": 90
      }
    ]
},
  "Am": {
    "number": 95,
    "symbol": "Am",
    "name": "Amerício",
    "heroName": "Amerício Alerta",
    "heroDescription": "O sentinela silencioso, presente em cada casa para detectar a ameaça invisível da fumaça.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Amer%C3%ADcio%20Alerta%2C%20representing%20the%20chemical%20element%20Amer%C3%ADcio%20(Symbol%3A%20Am)%2C%20O%20sentinela%20silencioso%2C%20presente%20em%20cada%20casa%20para%20detectar%20a%20amea%C3%A7a%20invis%C3%ADvel%20da%20fuma%C3%A7a..%20Style%3A%20glowing%20symbol%20Am%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente radioativo, manuseio perigoso",
        "justification": "Requer proteção extrema.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Altamente tóxico, contaminante persistente",
        "justification": "Impacto ambiental severo se liberado.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito perigoso – cancerígeno e acumulativo",
        "justification": "Altamente radiotóxico.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Detectores de fumaça, fontes de nêutrons, pesquisa científica",
        "justification": "Aplicações muito específicas e valiosas.",
        "score": 70
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +2, +3, +4, +5, +6",
        "justification": "Alta flexibilidade química.",
        "score": 80
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Não ocorre naturalmente – produzido artificialmente",
        "justification": "Elemento sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente fora da Terra",
        "justification": "Apenas em laboratório.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~243 u)",
        "value": "Muito alta",
        "justification": "Actinídeo pesado, padrão.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (~13,7 g/cm³)",
        "value": "Alta",
        "justification": "Bastante denso, típico de actinídeos.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~173 pm)",
        "value": "Grande",
        "justification": "Condizente com sua posição no bloco f.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 predominante; +2 a +6 possíveis",
        "justification": "Grande variedade de estados.",
        "score": 80
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Metal condutor típico.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Muito reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável na forma metálica.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f⁷ 7s²",
        "justification": "Ponto central do bloco f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f⁷ 7s²",
        "justification": "Simples e simétrica (meio-preenchido).",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 95)",
        "value": "95",
        "justification": "Altíssimo número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (148 no isótopo 243Am)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta",
        "justification": "Limita o uso prático.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Detectores de fumaça, sondas espaciais, calibração de instrumentos",
        "justification": "Muito útil em nichos específicos.",
        "score": 70
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido por bombardeamento nuclear em reatores",
        "justification": "Produção exige tecnologia avançada.",
        "score": 40
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Presente em milhões de detectores de fumaça no mundo",
        "justification": "Popular, apesar do nome \"exótico\".",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nomeado em homenagem à América",
        "justification": "Simbólico e geopolítico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Glenn T. Seaborg e equipe (1944)",
        "justification": "Lenda da química moderna.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1944",
        "justification": "Em plena Segunda Guerra Mundial.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1176 °C / 1449 K / 2149 °F",
        "justification": "Elevado para elemento sintético.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~2600 °C / 2873 K / 4712 °F",
        "justification": "Consideravelmente alto.",
        "score": 75
      }
    ]
},
  "Cm": {
    "number": 96,
    "symbol": "Cm",
    "name": "Cúrio",
    "heroName": "Cúrio Radioativo",
    "heroDescription": "O mestre do bombardeio de partículas, capaz de gerar calor intenso a partir de sua própria existência.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20C%C3%BArio%20Radioativo%2C%20representing%20the%20chemical%20element%20C%C3%BArio%20(Symbol%3A%20Cm)%2C%20O%20mestre%20do%20bombardeio%20de%20part%C3%ADculas%2C%20capaz%20de%20gerar%20calor%20intenso%20a%20partir%20de%20sua%20pr%C3%B3pria%20exist%C3%AAncia..%20Style%3A%20glowing%20symbol%20Cm%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, tóxico, difícil de manipular",
        "justification": "Perigo elevado limita o uso.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Produto de fissão nuclear, altamente tóxico",
        "justification": "Contaminante nuclear.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente perigoso, emite radiação intensa",
        "justification": "Alta toxicidade e radioatividade.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado como fonte de calor em sondas espaciais e marcadores radiativos",
        "justification": "Importância estratégica e científica.",
        "score": 65
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados de oxidação +3 (principal), +4",
        "justification": "Estabilidade moderada.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente naturalmente",
        "justification": "Apenas sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Produção exclusivamente humana.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~247 u)",
        "value": "Muito alta",
        "justification": "Transurânico pesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (13,51 g/cm³)",
        "value": "Alta",
        "justification": "Comparável ao urânio.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~174 pm)",
        "value": "Grande",
        "justification": "Esperado para actinídeo.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (estável), +4 (raro)",
        "justification": "Menos versátil que plutônio ou neptúnio.",
        "score": 55
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Condutor metálico razoável",
        "justification": "Boa para um actinídeo.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Muito reativo.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável como sólido.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f⁷",
        "justification": "Meio da série dos actinídeos.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f⁷ 6d¹ 7s²",
        "justification": "Representa bem a estrutura nuclear.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=96)",
        "value": "96",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (151 no Cm-247)",
        "value": "5",
        "justification": "Valor comum.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima; emissor alfa potente",
        "justification": "Muito perigoso.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Geração de energia, sondas espaciais, medicina nuclear",
        "justification": "Usos pontuais e de alto valor.",
        "score": 70
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Laboratório de Berkeley, EUA",
        "justification": "Produzido artificialmente em contexto histórico.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeado em homenagem a Marie e Pierre Curie",
        "justification": "Único elemento com esse tributo.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em honra aos Curie",
        "justification": "Nome profundamente significativo.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Glenn Seaborg, Ralph James, Albert Ghiorso (1944)",
        "justification": "Descoberta relevante no contexto nuclear.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1944",
        "justification": "Durante a era do Projeto Manhattan.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1340 °C / 1613 K / 2444 °F",
        "justification": "Alto o suficiente para aplicações nucleares.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3110 °C / 3383 K / 5630 °F",
        "justification": "Muito alto; bom para uso térmico.",
        "score": 90
      }
    ]
},
  "Bk": {
    "number": 97,
    "symbol": "Bk",
    "name": "Berquélio",
    "heroName": "Berquélio Sintético",
    "heroDescription": "O herói dos laboratórios de Berkeley, forjado na chama dos aceleradores de partículas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Berqu%C3%A9lio%20Sint%C3%A9tico%2C%20representing%20the%20chemical%20element%20Berqu%C3%A9lio%20(Symbol%3A%20Bk)%2C%20O%20her%C3%B3i%20dos%20laborat%C3%B3rios%20de%20Berkeley%2C%20forjado%20na%20chama%20dos%20aceleradores%20de%20part%C3%ADculas..%20Style%3A%20glowing%20symbol%20Bk%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente radioativo, difícil de produzir e armazenar",
        "justification": "Muito instável e perigoso.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Tóxico, altamente radiativo e gerador de resíduos",
        "justification": "Alto risco ambiental.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente radioativo; cancerígeno e acumulativo",
        "justification": "Riscos gravíssimos à saúde.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em pesquisa nuclear e na produção de elementos mais pesados (como califórnio)",
        "justification": "Aplicações científicas avançadas.",
        "score": 60
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +3 (estável), +4 (instável)",
        "justification": "Pouca variação de oxidação.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente na natureza",
        "justification": "Elemento sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Não ocorre fora da Terra.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~247 u)",
        "value": "Muito alta",
        "justification": "Altíssimo valor dentro da série.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (~14,8 g/cm³)",
        "value": "Muito alta",
        "justification": "Denso, típico dos actinídeos pesados.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~170 pm)",
        "value": "Grande",
        "justification": "Compatível com seu grupo.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 principal",
        "justification": "Estável, porém limitado.",
        "score": 40
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumidamente metálica",
        "justification": "Estimativas apontam condutividade razoável.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Metálico, embora radioativo.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f⁹",
        "justification": "Dentro do padrão actinídeo.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f⁹ 7s²",
        "justification": "Curta e didática.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 97)",
        "value": "97",
        "justification": "Valor alto e artificial.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (150 no isótopo 247Bk)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta",
        "justification": "Uso restrito.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Produção de califórnio, pesquisa em reatores experimentais",
        "justification": "Aplicações limitadas, mas científicas.",
        "score": 65
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido em reatores nucleares (bombardeamento de amerício)",
        "justification": "Exige grande infraestrutura.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro elemento transurânico isolado em quantidades visíveis",
        "justification": "Avanço científico histórico.",
        "score": 80
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem a Berkeley (EUA), cidade da Universidade da Califórnia",
        "justification": "Tributo científico-cultural.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Glenn T. Seaborg, Albert Ghiorso e Stanley Thompson (1949)",
        "justification": "Pioneiros da química nuclear.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1949",
        "justification": "Descoberto no pós-guerra.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~986 °C",
        "justification": "Ponto razoável para um actinídeo.",
        "score": 55
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~2627 °C",
        "justification": "Relativamente alto.",
        "score": 75
      }
    ]
},
  "Cf": {
    "number": 98,
    "symbol": "Cf",
    "name": "Califórnio",
    "heroName": "Califórnio Neutrônico",
    "heroDescription": "O canhão de nêutrons, capaz de iniciar reatores e encontrar tesouros escondidos sob a terra.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Calif%C3%B3rnio%20Neutr%C3%B4nico%2C%20representing%20the%20chemical%20element%20Calif%C3%B3rnio%20(Symbol%3A%20Cf)%2C%20O%20canh%C3%A3o%20de%20n%C3%AAutrons%2C%20capaz%20de%20iniciar%20reatores%20e%20encontrar%20tesouros%20escondidos%20sob%20a%20terra..%20Style%3A%20glowing%20symbol%20Cf%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente radioativo, difícil e caro de produzir",
        "justification": "Altamente perigoso e limitado.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Pode contaminar gravemente o ambiente",
        "justification": "Altíssimo risco ecológico.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente tóxico, radiotóxico, pode causar câncer",
        "justification": "Precisa de blindagem extrema.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado como fonte de nêutrons, na indústria nuclear e na detecção de minérios",
        "justification": "Muito valioso em aplicações específicas.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidações +3 (comum), +2, +4 (menos comuns)",
        "justification": "Moderada flexibilidade química.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente na natureza",
        "justification": "100% sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Só existe em laboratório.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~251 u)",
        "value": "Extremamente alta",
        "justification": "Entre os mais pesados que podem ser produzidos em quantidades visíveis.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (~15,1 g/cm³)",
        "value": "Muito alta",
        "justification": "Bastante denso.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~174 pm)",
        "value": "Grande",
        "justification": "Esperado para actinídeos pesados.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 mais estável",
        "justification": "Comportamento típico do bloco f.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida como metálica moderada",
        "justification": "Valor estimado.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Como os demais actinídeos.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f¹⁰",
        "justification": "Posiciona-se bem no bloco f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁰ 7s²",
        "justification": "Simples e representativa.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 98)",
        "value": "98",
        "justification": "Muito alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (153 no isótopo 251Cf)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta",
        "justification": "Perigoso sem blindagem.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Fontes de nêutrons em sondas petrolíferas, início de reações nucleares",
        "justification": "Muito útil, apesar da dificuldade de obtenção.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido em reatores nucleares e aceleradores",
        "justification": "Tecnologia altamente especializada.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "1 micrograma emite 170 milhões de nêutrons por minuto",
        "justification": "Capacidade energética impressionante.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem ao estado da Califórnia (EUA)",
        "justification": "Continuação dos nomes geográficos dos actinídeos.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Seaborg, Thompson, Ghiorso e equipe (1950)",
        "justification": "Mesma equipe que descobriu o berquélio.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1950",
        "justification": "Descoberta no contexto da era nuclear.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~900 °C",
        "justification": "Relativamente baixo para um actinídeo.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~1470 °C",
        "justification": "Moderado para elemento pesado.",
        "score": 60
      }
    ]
},
  "Es": {
    "number": 99,
    "symbol": "Es",
    "name": "Enstênio",
    "heroName": "Einstênio Relativo",
    "heroDescription": "O gênio atômico, nomeado em honra à mente mais brilhante, nascido do fogo das explosões térmicas.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Einst%C3%AAnio%20Relativo%2C%20representing%20the%20chemical%20element%20Enst%C3%AAnio%20(Symbol%3A%20Es)%2C%20O%20g%C3%AAnio%20at%C3%B4mico%2C%20nomeado%20em%20honra%20%C3%A0%20mente%20mais%20brilhante%2C%20nascido%20do%20fogo%20das%20explos%C3%B5es%20t%C3%A9rmicas..%20Style%3A%20glowing%20symbol%20Es%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, raríssimo, difícil de estudar",
        "justification": "Instável e perigoso.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum benefício ambiental; altamente contaminante",
        "justification": "Sintético e tóxico.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Extremamente radioativo, inalável, perigoso",
        "justification": "Radiação alfa intensa.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado somente em pesquisa científica",
        "justification": "Pouca aplicabilidade prática.",
        "score": 30
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3",
        "justification": "Pouca variedade de oxidação.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Nenhuma",
        "justification": "Completamente sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Apenas produzido artificialmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~252 u)",
        "value": "Muito alta",
        "justification": "Um dos mais pesados produzidos em quantidades mensuráveis.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~8,84 g/cm³)",
        "value": "Moderada",
        "justification": "Estimativa apenas — não foi medido diretamente.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Raio atômico (~180 pm)",
        "value": "Grande",
        "justification": "Valor teórico.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3 (estável), +2 (raro)",
        "justification": "Pouca versatilidade química.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Pouco conhecida; metálica presumida",
        "justification": "Dados experimentais escassos.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Reativo como outros actinídeos.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico",
        "justification": "Estável como sólido.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f¹¹",
        "justification": "Meio do bloco f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹¹ 7s²",
        "justification": "Condiz com a posição nos actinídeos.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=99)",
        "value": "99",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (153 no Es-252)",
        "value": "5",
        "justification": "Valor típico.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente radioativo",
        "justification": "Alta emissão alfa e meia-vida curta.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Apenas para pesquisa e estudos atômicos avançados",
        "justification": "Sem uso comercial.",
        "score": 20
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Criado em explosão nuclear (EUA, 1952)",
        "justification": "Produzido em laboratório e armas.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Descoberto em detritos de bomba H; só alguns microgramas produzidos",
        "justification": "História única entre elementos.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem a Albert Einstein",
        "justification": "Nome simbólico e universalmente reconhecido.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Albert Ghiorso e equipe (1952)",
        "justification": "Parte do projeto de elementos transurânicos.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1952",
        "justification": "Início da era dos elementos \"de bomba\".",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~860 °C / 1133 K / 1580 °F",
        "justification": "Razoavelmente alto.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~1500 °C / 1773 K / 2732 °F",
        "justification": "Baixo para transurânico, mas bom para estudo térmico.",
        "score": 70
      }
    ]
},
  "Fm": {
    "number": 100,
    "symbol": "Fm",
    "name": "Férmio",
    "heroName": "Férmio Quântico",
    "heroDescription": "O mestre dos processos nucleares rápidos, o limite final dos elementos que podem ser criados por bombardeio.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20F%C3%A9rmio%20Qu%C3%A2ntico%2C%20representing%20the%20chemical%20element%20F%C3%A9rmio%20(Symbol%3A%20Fm)%2C%20O%20mestre%20dos%20processos%20nucleares%20r%C3%A1pidos%2C%20o%20limite%20final%20dos%20elementos%20que%20podem%20ser%20criados%20por%20bombardeio..%20Style%3A%20glowing%20symbol%20Fm%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, produzido em quantidades ínfimas",
        "justification": "Extremamente instável.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Muito radiotóxico, resíduos perigosos",
        "justification": "Contenção total é indispensável.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente perigoso; exposição é proibitiva",
        "justification": "Segurança máxima necessária.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Apenas para pesquisa científica em física nuclear",
        "justification": "Valor limitado, porém relevante academicamente.",
        "score": 50
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 (estável), +2 (raro)",
        "justification": "Pouca versatilidade química.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Elemento puramente sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Zero",
        "justification": "Só existe em laboratórios terrestres.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~257 u)",
        "value": "Extremamente alta",
        "justification": "Um dos mais pesados.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~13,5 g/cm³)",
        "value": "Alta",
        "justification": "Valor previsto para actinídeos pesados.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~176 pm)",
        "value": "Grande",
        "justification": "Condizente com seu grupo.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Estado fixo, pouca variedade.",
        "score": 40
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida metálica moderada",
        "justification": "Por analogia a actinídeos anteriores.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Extremamente reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Presumido, como os outros actinídeos.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f¹²",
        "justification": "Simples, ilustra bem o preenchimento f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹² 7s²",
        "justification": "Forma compacta e pedagógica.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 100)",
        "value": "100",
        "justification": "Extremamente alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (157 no isótopo 257Fm)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito alta",
        "justification": "Dificulta qualquer manipulação prática.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Exclusiva em laboratórios de física nuclear avançada",
        "justification": "Pesquisa pura, sem aplicações industriais.",
        "score": 50
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido por bombardeamento de plutônio e cálcio",
        "justification": "Exige tecnologia altamente específica.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro elemento descoberto após análise da explosão da bomba H (1952)",
        "justification": "Marco da era nuclear.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem ao físico Enrico Fermi, pai da física nuclear",
        "justification": "Homenagem a uma figura científica fundamental.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Equipe de Seaborg e Ghiorso (1952)",
        "justification": "Descoberto nos resíduos da bomba H.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1952",
        "justification": "Mesma época do Einstênio.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~1527 °C (estimado)",
        "justification": "Elevado, típico para actinídeo.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Desconhecido, mas estimado entre 3000–3500 °C",
        "justification": "Muito alto, como esperado.",
        "score": 60
      }
    ]
},
  "Md": {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelévio",
    "heroName": "Mendelévio Tabela",
    "heroDescription": "O arquiteto da ordem, o herói que reconhece a beleza da organização elemental russa.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Mendel%C3%A9vio%20Tabela%2C%20representing%20the%20chemical%20element%20Mendel%C3%A9vio%20(Symbol%3A%20Md)%2C%20O%20arquiteto%20da%20ordem%2C%20o%20her%C3%B3i%20que%20reconhece%20a%20beleza%20da%20organiza%C3%A7%C3%A3o%20elemental%20russa..%20Style%3A%20glowing%20symbol%20Md%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, instável, difícil de estudar",
        "justification": "Instável e pouco disponível.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum benefício; gerado apenas em laboratório",
        "justification": "Não existe na natureza.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito perigoso em caso de exposição",
        "justification": "Requer controle extremo.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Estudo de estrutura atômica; química de actinídeos",
        "justification": "Uso puramente científico.",
        "score": 25
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Principalmente +3",
        "justification": "Pouco versátil.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Apenas sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Produzido em laboratório.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~258 u)",
        "value": "Muito alta",
        "justification": "Extremamente pesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~10,3 g/cm³)",
        "value": "Moderada",
        "justification": "Valor teórico apenas.",
        "score": 55
      },
      {
        "id": 10,
        "label": "Raio atômico (~173 pm)",
        "value": "Grande",
        "justification": "Típico dos actinídeos pesados.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 e +3",
        "justification": "Pouca diversidade, mas úteis para estudo.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Suposta metálica, sem confirmação prática",
        "justification": "Dados indiretos.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Reatividade elevada.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Presume-se sólido metálico",
        "justification": "Condição padrão para elementos metálicos.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f¹³",
        "justification": "Avançado no bloco f.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹³ 7s²",
        "justification": "Completando série actinídea.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=101)",
        "value": "101",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (157 no Md-258)",
        "value": "5",
        "justification": "Valor padrão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta, meia-vida curta",
        "justification": "Poucos minutos a horas.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Limitada à pesquisa científica",
        "justification": "Não possui aplicação prática.",
        "score": 20
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Berkeley, Califórnia (EUA)",
        "justification": "Síntese controlada em laboratório.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeado após Mendeleev, criador da tabela periódica",
        "justification": "Homenagem icônica.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Dmitri Mendeleev",
        "justification": "Nome extremamente simbólico.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Glenn Seaborg e equipe (1955)",
        "justification": "Parte do grupo que liderou descobertas de transurânicos.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1955",
        "justification": "Década dos avanços nucleares.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~827 °C / 1100 K / 1520,6 °F",
        "justification": "Moderadamente elevado.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "~1560 °C / 1833 K / 2840 °F",
        "justification": "Relativamente elevado.",
        "score": 70
      }
    ]
},
  "No": {
    "number": 102,
    "symbol": "No",
    "name": "Nobélio",
    "heroName": "Nobélio Dinâmico",
    "heroDescription": "O herói do prêmio supremo, forjado no choque entre átomos pesados e sonhos de descoberta.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Nob%C3%A9lio%20Din%C3%A2mico%2C%20representing%20the%20chemical%20element%20Nob%C3%A9lio%20(Symbol%3A%20No)%2C%20O%20her%C3%B3i%20do%20pr%C3%AAmio%20supremo%2C%20forjado%20no%20choque%20entre%20%C3%A1tomos%20pesados%20e%20sonhos%20de%20descoberta..%20Style%3A%20glowing%20symbol%20No%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente radioativo, extremamente raro",
        "justification": "Pouquíssimas aplicações.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Sintético, resíduos nucleares perigosos",
        "justification": "Risco ambiental elevado se liberado.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito perigoso; manuseio requer blindagem total",
        "justification": "Altamente radiotóxico.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado em pesquisa nuclear avançada",
        "justification": "Valor acadêmico, sem aplicação prática.",
        "score": 45
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+2 (principal), +3 (menos comum)",
        "justification": "Menor variedade química que os anteriores.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Elemento sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Zero",
        "justification": "Apenas criado em laboratório.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~259 u)",
        "value": "Muito alta",
        "justification": "Bloco f superpesado.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~9,9 g/cm³)",
        "value": "Moderadamente alta",
        "justification": "Um pouco menor que actinídeos anteriores.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Raio atômico (~176 pm)",
        "value": "Grande",
        "justification": "Condizente com os actinídeos finais.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 é o mais estável",
        "justification": "Ainda mais limitado que o férmio.",
        "score": 35
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumidamente metálica moderada",
        "justification": "Pouco estudado, mas metálico.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Altamente reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Sólido metálico",
        "justification": "Presumido como os demais actinídeos.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5f¹⁴",
        "justification": "Subnível f completamente preenchido.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 7s²",
        "justification": "Compacta e didática.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 102)",
        "value": "102",
        "justification": "Número atômico muito alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (157 no isótopo 259No)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima",
        "justification": "Limita a experimentação.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Apenas estudos científicos sobre estrutura nuclear",
        "justification": "Aplicação pura em física.",
        "score": 45
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Produzido em aceleradores (bombardeamento de cúrio)",
        "justification": "Produção técnica altamente restrita.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Último actinídeo com subnível 5f completo",
        "justification": "Ponto-chave no bloco f.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem a Alfred Nobel",
        "justification": "Ícone histórico da ciência.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Instituto de Física Nuclear de Dubna + Berkeley (1958–1966)",
        "justification": "Controvérsia e colaboração internacional.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Oficialmente reconhecido em 1966",
        "justification": "Descoberta desafiadora.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "~827 °C (estimado)",
        "justification": "Um dos menores entre os actinídeos.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Desconhecido (~2500–3000 °C estimado)",
        "justification": "Ainda incerto.",
        "score": 60
      }
    ]
},
  "Lr": {
    "number": 103,
    "symbol": "Lr",
    "name": "Laurêncio",
    "heroName": "Laurêncio Cíclotron",
    "heroDescription": "O caçador do fim da linha dos actinídeos, mestre dos aceleradores circulares de energia.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Laur%C3%AAncio%20C%C3%ADclotron%2C%20representing%20the%20chemical%20element%20Laur%C3%AAncio%20(Symbol%3A%20Lr)%2C%20O%20ca%C3%A7ador%20do%20fim%20da%20linha%20dos%20actin%C3%ADdeos%2C%20mestre%20dos%20aceleradores%20circulares%20de%20energia..%20Style%3A%20glowing%20symbol%20Lr%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Radioativo, raríssimo, extremamente difícil de isolar",
        "justification": "Altamente instável.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum; sintético e perigoso",
        "justification": "Não existe naturalmente.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Muito radioativo, inalável, tóxico",
        "justification": "Perigoso em qualquer forma.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Estudo estrutural do fim dos actinídeos",
        "justification": "Aplicações limitadas à pesquisa.",
        "score": 20
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "+3 (único estado estável)",
        "justification": "Pouca versatilidade química.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Nula",
        "justification": "Sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Não ocorre fora da Terra.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~262 u)",
        "value": "Muito alta",
        "justification": "Entre os actinídeos mais pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~15,6 g/cm³)",
        "value": "Alta",
        "justification": "Estimativa teórica.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (~160 pm)",
        "value": "Médio a pequeno para actinídeo",
        "justification": "Transição para comportamento metálico.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "3",
        "justification": "Menor variedade entre actinídeos.",
        "score": 40
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presume-se metálica",
        "justification": "Dados experimentais limitados.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Altamente reativo.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Presume-se sólido metálico",
        "justification": "Forma padrão em laboratório.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p¹ (por configuração relativística)",
        "justification": "Interessante do ponto de vista quântico.",
        "score": 70
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 7s² 7p¹",
        "justification": "Surpreende por não seguir o padrão 5f.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=103)",
        "value": "103",
        "justification": "Valor neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (159 no Lr-262)",
        "value": "5",
        "justification": "Valor típico.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima (meia-vida de ~3,6 h)",
        "justification": "Muito instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Pesquisa científica avançada",
        "justification": "Não possui aplicação prática.",
        "score": 20
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Berkeley (EUA), 1961",
        "justification": "Descoberta controlada.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Último actinídeo; configuração eletrônica inesperada",
        "justification": "Interesse em física relativística.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem a Ernest O. Lawrence",
        "justification": "Figura-chave da física nuclear.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Ghiorso, Latimer, Sikkeland et al.",
        "justification": "Parte da equipe histórica de Berkeley.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1961",
        "justification": "Década das sínteses nucleares finais dos actinídeos.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~1627 °C / 1900 K / 2960,6 °F",
        "justification": "Elevado, mas não medido com precisão.",
        "score": 70
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~2627 °C / 2900 K / 4760,6 °F",
        "justification": "Alto ponto teórico.",
        "score": 80
      }
    ]
},
  "Rf": {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfórdio",
    "heroName": "Rutherfórdio Nuclear",
    "heroDescription": "O herói do núcleo central, o primeiro dos elementos superpesados a desafiar as leis da estabilidade.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Rutherf%C3%B3rdio%20Nuclear%2C%20representing%20the%20chemical%20element%20Rutherf%C3%B3rdio%20(Symbol%3A%20Rf)%2C%20O%20her%C3%B3i%20do%20n%C3%BAcleo%20central%2C%20o%20primeiro%20dos%20elementos%20superpesados%20a%20desafiar%20as%20leis%20da%20estabilidade..%20Style%3A%20glowing%20symbol%20Rf%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
        {
            "id": 1,
            "label": "Fraquezas",
            "value": "Decaimento Alfa",
            "justification": "Transforma-se rapidamente em outros elementos através da emissão de partículas alfa.",
            "score": 5
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Indiferente",
            "justification": "Sem presença em ecossistemas naturais.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radioatividade de superpesado, letal em exposição direta.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Exploração Nuclear",
            "justification": "Primeiro elemento a mostrar que a química dos transactinídeos segue o grupo 4.",
            "score": 70
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "4",
            "justification": "Como membro do grupo do háfnio, seu estado de oxidação principal é +4.",
            "score": 40
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não existe de forma estável ou natural na Terra.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Nenhuma detecção em corpos celestes.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "267 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 267
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "23,2 g/cm³ (Est.)",
            "justification": "Previsto como um dos elementos mais densos da tabela.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "150 pm (Est.)",
            "justification": "Tamanho atômico estimado para elementos do grupo 4 no período 7.",
            "score": 150
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+4",
            "justification": "Química experimental confirma sua posição no grupo 4.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Suposto condutor metálico.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Dados insuficientes para cálculo de eletronegatividade.",
            "score": 0
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Metal denso em teoria.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d²",
            "justification": "Possui dois elétrons no subnível 6d de valência.",
            "score": 20
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d² 7s²",
            "justification": "Configuração que define sua posição como o primeiro transactinídeo.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "104",
            "justification": "Identidade atômica do Rutherfórdio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "163",
            "justification": "Número de nêutrons no isótopo Rf-267.",
            "score": 163
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Extrema",
            "justification": "Meia-vida de apenas 1,3 horas para o isótopo mais estável.",
            "score": 5
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Física de Partículas",
            "justification": "Usado exclusivamente para testar os limites da tabela periódica.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, URSS / Berkeley, EUA",
            "justification": "Descoberta disputada por anos entre as duas superpotências nucleares.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Nome da Discórdia",
            "justification": "Foi o centro da 'Guerra dos Transfermiuns' sobre a nomeação de elementos.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Ernest Rutherford",
            "justification": "Homenagem ao pai da física nuclear e descobridor do núcleo atômico.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Equipes de Dubna e Berkeley",
            "justification": "Ambas as equipes contribuíram para sua identificação final.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1964",
            "justification": "Primeira observação relatada em Dubna.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "2100 °C (Est.)",
            "justification": "Ponto de fusão elevado estimado.",
            "score": 95
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "5500 °C (Est.)",
            "justification": "Ebulição extremamente alta prevista.",
            "score": 100
        }
    ]
},
  "Db": {
    "number": 105,
    "symbol": "Db",
    "name": "Dúbnio",
    "heroName": "Dúbnio Pesado",
    "heroDescription": "O gigante da colaboração russa, uma ponte estável na fronteira do desconhecido atômico.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20D%C3%BAbnio%20Pesado%2C%20representing%20the%20chemical%20element%20D%C3%BAbnio%20(Symbol%3A%20Db)%2C%20O%20gigante%20da%20colabora%C3%A7%C3%A3o%20russa%2C%20uma%20ponte%20est%C3%A1vel%20na%20fronteira%20do%20desconhecido%20at%C3%B4mico..%20Style%3A%20glowing%20symbol%20Db%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Instável, altamente radioativo, vida curta",
        "justification": "Pouco conhecido e difícil de estudar.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Totalmente sintético, potencial risco em acidentes nucleares",
        "justification": "Produzido em quantidades minúsculas.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radiotóxico, embora pouco manuseado",
        "justification": "Risco alto, mas raramente manipulado.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado apenas em pesquisa científica de elementos superpesados",
        "justification": "Valor acadêmico.",
        "score": 40
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +5 (mais estável), +3, +4",
        "justification": "Variação interessante nos estados de oxidação.",
        "score": 55
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "100% sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Zero",
        "justification": "Não ocorre naturalmente.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~268 u)",
        "value": "Extremamente alta",
        "justification": "Um dos mais pesados já criados.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~29 g/cm³)",
        "value": "Altíssima",
        "justification": "Um dos mais densos previstos.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (~149 pm)",
        "value": "Médio-baixo",
        "justification": "Compacto entre os transactinídeos.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+5 mais comum, +3 e +4 observados",
        "justification": "Versatilidade moderada.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida como metálica",
        "justification": "Valor estimado.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Altamente reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Provavelmente sólido metálico",
        "justification": "Padrão entre elementos pesados.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d¹",
        "justification": "Início do bloco d entre os transactinídeos.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹ 7s²",
        "justification": "Curta, transição entre f e d.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 105)",
        "value": "105",
        "justification": "Muito alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (aprox. 163)",
        "value": "5",
        "justification": "",
        "score": 0
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito alta (meia-vida curta: ~34 s para 268Db)",
        "justification": "Extremamente instável.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Apenas para pesquisa em física nuclear",
        "justification": "Nenhum uso prático fora de laboratórios.",
        "score": 40
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Aceleradores em Dubna (Rússia), Berkeley (EUA), Darmstadt (Alemanha)",
        "justification": "Síntese de alta tecnologia.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Um dos primeiros transactinídeos criados em colisores modernos",
        "justification": "Debate internacional acirrado sobre nomeação.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Em homenagem à cidade russa de Dubna",
        "justification": "Nome político e científico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Instituto de Dubna (Rússia), confirmado por vários laboratórios",
        "justification": "Descoberta colaborativa e disputada.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Síntese em 1967, nome oficial em 1997",
        "justification": "Processo de reconhecimento complexo.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "Estimado entre 1100–1700 °C",
        "justification": "Informação limitada.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Desconhecido (~3500 °C estimado)",
        "justification": "Valor teórico.",
        "score": 60
      }
    ]
},
  "Sg": {
    "number": 106,
    "symbol": "Sg",
    "name": "Seabórgio",
    "heroName": "Seabórgio Eterno",
    "heroDescription": "O mestre das sínteses impossíveis, o único herói nomeado em honra a um cientista ainda vivo em sua criação.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Seab%C3%B3rgio%20Eterno%2C%20representing%20the%20chemical%20element%20Seab%C3%B3rgio%20(Symbol%3A%20Sg)%2C%20O%20mestre%20das%20s%C3%ADnteses%20imposs%C3%ADveis%2C%20o%20%C3%BAnico%20her%C3%B3i%20nomeado%20em%20honra%20a%20um%20cientista%20ainda%20vivo%20em%20sua%20cria%C3%A7%C3%A3o..%20Style%3A%20glowing%20symbol%20Sg%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, produzido em traços",
        "justification": "Vida curta e produção mínima.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Radioativo, mas de produção tão limitada que risco ambiental é quase nulo",
        "justification": "Potencial risco baixo por escassez.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radiotóxico, embora manuseado apenas em ambientes controlados",
        "justification": "Quase nunca entra em contato com pessoas.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Importante para entender o comportamento dos metais de transição superpesados",
        "justification": "Valor científico, sem aplicações práticas.",
        "score": 45
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estados +6 (mais estável), +4, +5",
        "justification": "Semelhante ao tungstênio (W).",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Sintético.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Zero",
        "justification": "Elemento artificial.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~271 u)",
        "value": "Muito alta",
        "justification": "Superpesado.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~35 g/cm³)",
        "value": "Extremamente alta",
        "justification": "Possivelmente o mais denso da tabela periódica.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (~132 pm estimado)",
        "value": "Pequeno",
        "justification": "Contrasta com seu número atômico alto.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+6 (semelhante ao W), +4 e +5 observados",
        "justification": "Diversidade química notável.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida como metálica",
        "justification": "Sem dados experimentais diretos.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3)",
        "value": "Baixa",
        "justification": "Muito reativo.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C / 1 atm)",
        "value": "Presumido sólido metálico",
        "justification": "Como outros transactinídeos.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d²",
        "justification": "Segundo da série dos elementos 6d.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d² 7s²",
        "justification": "Transição clara entre actinídeos e metais pesados.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z = 106)",
        "value": "106",
        "justification": "Muito elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (aprox. 165)",
        "value": "5",
        "justification": "",
        "score": 0
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima; meia-vida inferior a 1 min (mais comum: 10 s)",
        "justification": "Instabilidade extrema.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Exclusivamente acadêmica",
        "justification": "Sem uso prático.",
        "score": 40
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Descoberto por Seaborg e Ghiorso em Berkeley; confirmado em Dubna",
        "justification": "Produzido em laboratórios de ponta.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeia-se em homenagem ao próprio Glenn Seaborg, ainda vivo à época",
        "justification": "Único elemento com nome em homenagem a cientista vivo.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Glenn T. Seaborg – químico e pioneiro dos actinídeos",
        "justification": "Tributo histórico.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Universidade da Califórnia em Berkeley (1974); Dubna também participou",
        "justification": "Disputa científica superada.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1974 (síntese); nome oficial em 1997",
        "justification": "Nome contestado por anos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "Estimado ~2800 °C",
        "justification": "Valor teórico.",
        "score": 60
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Estimado >5000 °C",
        "justification": "Entre os mais altos da tabela.",
        "score": 70
      }
    ]
},
  "Bh": {
    "number": 107,
    "symbol": "Bh",
    "name": "Bóhrio",
    "heroName": "Bóhrio Órbita",
    "heroDescription": "O guardião da estrutura atômica moderna, mestre das camadas onde os elétrons dançam.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20B%C3%B3hrio%20%C3%93rbita%2C%20representing%20the%20chemical%20element%20B%C3%B3hrio%20(Symbol%3A%20Bh)%2C%20O%20guardi%C3%A3o%20da%20estrutura%20at%C3%B4mica%20moderna%2C%20mestre%20das%20camadas%20onde%20os%20el%C3%A9trons%20dan%C3%A7am..%20Style%3A%20glowing%20symbol%20Bh%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente instável, sem aplicações práticas",
        "justification": "Vida muito curta.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Não ocorre naturalmente; sem uso ambiental",
        "justification": "Sintético e perigoso.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente radioativo",
        "justification": "Manipulação arriscada.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado apenas para pesquisa teórica",
        "justification": "Valor apenas científico.",
        "score": 15
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Provavelmente +7, +5, +4",
        "justification": "Teoricamente versátil.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Produzido em laboratório.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~270 u)",
        "value": "Muito alta",
        "justification": "Elemento superpesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~37 g/cm³)",
        "value": "Extremamente alta",
        "justification": "Potencialmente o mais denso da tabela.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (~128 pm estimado)",
        "value": "Relativamente pequeno para superpesado",
        "justification": "Compacto.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+7 (como o rênio)",
        "justification": "Alta reatividade.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida metálica",
        "justification": "Comportamento esperado.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,9)",
        "value": "Baixa a moderada",
        "justification": "Relativamente reativo.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido metálico",
        "justification": "Forma estável em laboratório.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d⁵",
        "justification": "No meio do bloco d superpesado.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d⁵ 7s²",
        "justification": "Esperada para grupo 7.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=107)",
        "value": "107",
        "justification": "Valor alto, neutro.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (163 no Bh-270)",
        "value": "5",
        "justification": "Valor típico.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito instável (meia-vida de segundos)",
        "justification": "Altíssima instabilidade.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Ciência pura, sem utilidade comercial",
        "justification": "Apenas teórico.",
        "score": 10
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Alemanha (GSI, Darmstadt)",
        "justification": "Centro referência em elementos superpesados.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeado após Niels Bohr, grande físico",
        "justification": "Homenagem significativa.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Niels Bohr (modelo atômico de Bohr)",
        "justification": "Nome fortemente simbólico.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Equipe do GSI (Peter Armbruster e colaboradores)",
        "justification": "Liderança na química superpesada.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1981",
        "justification": "Década de avanços nucleares controlados.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~2650 °C / 2923 K / 4802 °F",
        "justification": "Alto, compatível com metal de transição.",
        "score": 85
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~4700 °C / 4973 K / 8492 °F",
        "justification": "Elevado, esperado para metais densos.",
        "score": 90
      }
    ]
},
  "Hs": {
    "number": 108,
    "symbol": "Hs",
    "name": "Hássio",
    "heroName": "Hássio Denso",
    "heroDescription": "O titã superpesado, mestre da densidade teórica que desafia os limites da matéria sólida.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20H%C3%A1ssio%20Denso%2C%20representing%20the%20chemical%20element%20H%C3%A1ssio%20(Symbol%3A%20Hs)%2C%20O%20tit%C3%A3%20superpesado%2C%20mestre%20da%20densidade%20te%C3%B3rica%20que%20desafia%20os%20limites%20da%20mat%C3%A9ria%20s%C3%B3lida..%20Style%3A%20glowing%20symbol%20Hs%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
        {
            "id": 1,
            "label": "Fraquezas",
            "value": "Decaimento Alfa Rápido",
            "justification": "Sua vida curta limita severamente o tempo para estudos experimentais.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem existência natural fora de laboratórios.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação de alta intensidade em amostras microscópicas.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Oxidação de Superpesados",
            "justification": "Foi o primeiro transactinídeo a ter seu óxido tetróxido (HsO4) caracterizado.",
            "score": 80
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "8",
            "justification": "Como membro do grupo do ósmio, seu estado de oxidação principal é +8.",
            "score": 80
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Inexistente de forma natural.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Nenhuma fonte natural conhecida.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "277 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 277
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "41,0 g/cm³ (Est.)",
            "justification": "Densidade teórica massiva estimada.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "126 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 8 no período 7.",
            "score": 126
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+8",
            "justification": "A formação do tetróxido gasoso confirma sua posição no grupo 8.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Propriedades metálicas previstas.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade física ainda não mensurada.",
            "score": 0
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Metal pesado em teoria.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d⁶",
            "justification": "Seis elétrons no subnível 6d de valência.",
            "score": 60
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d⁶ 7s²",
            "justification": "Configuração que o assemelha quimicamente ao Ósmio.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "108",
            "justification": "Identidade atômica do Hássio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "169",
            "justification": "Número de nêutrons no isótopo Hs-277.",
            "score": 169
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 16 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Fronteira Atômica",
            "justification": "Usado exclusivamente para pesquisa sobre estabilidade nuclear.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Darmstadt, Alemanha",
            "justification": "Identificado pela primeira vez no GSI em 1984.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Química de Gás",
            "justification": "Mesmo sendo um metal pesado, forma óxidos que são gasosos em baixas temperaturas.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Hassia (Hesse)",
            "justification": "Nome latino do estado alemão de Hesse, onde fica o GSI.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Peter Armbruster e Gottfried Münzenberg",
            "justification": "Lideraram a equipe que sintetizou o elemento.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1984",
            "justification": "Ano da síntese confirmada.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "Não definido",
            "justification": "Vida curta impede a medição direta.",
            "score": 0
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Vida curta impede a medição direta.",
            "score": 0
        }
    ]
},
  "Mt": {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnério",
    "heroName": "Meitnério Brilhante",
    "heroDescription": "A heroína da fissão descoberta, o reconhecimento tardio de uma das mentes mais brilhantes da física.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Meitn%C3%A9rio%20Brilhante%2C%20representing%20the%20chemical%20element%20Meitn%C3%A9rio%20(Symbol%3A%20Mt)%2C%20A%20hero%C3%ADna%20da%20fiss%C3%A3o%20descoberta%2C%20o%20reconhecimento%20tardio%20de%20uma%20das%20mentes%20mais%20brilhantes%20da%20f%C3%ADsica..%20Style%3A%20glowing%20symbol%20Mt%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, produzido em átomos isolados",
        "justification": "Vida curta dificulta qualquer uso.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum; sintético, sem presença natural",
        "justification": "Não afeta o meio ambiente.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente radioativo, risco apenas em ambientes controlados",
        "justification": "Riscos existem, mas é bem contido.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Apenas pesquisa científica em elementos superpesados",
        "justification": "Utilidade acadêmica.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Presumivelmente +1 a +9",
        "justification": "Propriedades químicas apenas teóricas.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Gerado em laboratório.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~278 u)",
        "value": "Muito alta",
        "justification": "Entre os elementos mais pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~37-40 g/cm³)",
        "value": "Provavelmente altíssima",
        "justification": "Pode superar o ouro e o ósmio.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (teórico ~128 pm)",
        "value": "Moderado",
        "justification": "Comparável aos metais de seu grupo.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Possivelmente +1 a +9 (grupo 9)",
        "justification": "Baseado no comportamento do irídio.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Supostamente metálica",
        "justification": "Dados teóricos.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3–1,6)",
        "value": "Baixa",
        "justification": "Consistente com metais pesados.",
        "score": 35
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido metálico",
        "justification": "Forma teórica.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d⁷",
        "justification": "Avançado no bloco d.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d⁷ 7s²",
        "justification": "Coerente com grupo 9.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=109)",
        "value": "109",
        "justification": "Valor elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (169 no Mt-278)",
        "value": "5",
        "justification": "Estimado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima (meia-vida de milissegundos a segundos)",
        "justification": "Extremamente instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma conhecida",
        "justification": "Apenas teórico.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Alemanha (GSI, Darmstadt)",
        "justification": "Importante centro de pesquisa.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Homenagem à pioneira Lise Meitner",
        "justification": "Reconhecimento histórico da ciência feminina.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Lise Meitner (co-descobriu a fissão nuclear)",
        "justification": "Nome fortemente simbólico.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Peter Armbruster, Gottfried Münzenberg e equipe",
        "justification": "Referência em elementos superpesados.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1982",
        "justification": "Década produtiva para a síntese de novos elementos.",
        "score": 75
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~1100–1300 °C / 1373–1573 K / 2012–2372 °F",
        "justification": "Menor que outros superpesados.",
        "score": 65
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~2900–3100 °C / 3173–3373 K / 5252–5612 °F",
        "justification": "Elevado para metal de transição.",
        "score": 80
      }
    ]
},
  "Ds": {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstádtio",
    "heroName": "Darmstádtio Heavy",
    "heroDescription": "O colosso das terras alemãs, forjado na precisão dos aceleradores de íons pesados.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Darmst%C3%A1dtio%20Heavy%2C%20representing%20the%20chemical%20element%20Darmst%C3%A1dtio%20(Symbol%3A%20Ds)%2C%20O%20colosso%20das%20terras%20alem%C3%A3s%2C%20forjado%20na%20precis%C3%A3o%20dos%20aceleradores%20de%20%C3%ADons%20pesados..%20Style%3A%20glowing%20symbol%20Ds%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, impossível de isolar em quantidades úteis",
        "justification": "Totalmente instável; sem utilidade prática.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/benefício à natureza",
        "value": "Produzido artificialmente, sem impacto ambiental direto",
        "justification": "Riscos controlados, mas sem benefício.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas não ocorre naturalmente",
        "justification": "Potencialmente perigoso, embora altamente controlado.",
        "score": 25
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Nenhum prático conhecido",
        "justification": "Apenas valor científico/teórico.",
        "score": 5
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Provável estado de oxidação +2, +4, +6 (teóricos)",
        "justification": "Nenhum composto confirmado; previsão por analogia.",
        "score": 25
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Zero (sintético)",
        "justification": "Totalmente artificial.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Zero",
        "justification": "Não existe fora de laboratórios.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~281 u, estimada)",
        "value": "Muito alta",
        "justification": "Apenas teórica. Valor esperado para superpesado.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~34–40 g/cm³)",
        "value": "Muito alta (teórica)",
        "justification": "Provavelmente um dos elementos mais densos.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Raio atômico (estimado)",
        "value": "Muito grande",
        "justification": "Dados teóricos, baseados em extrapolações.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2, +4 (previstos), +6 (incerto)",
        "justification": "Sem comprovação experimental.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Provavelmente metálico",
        "justification": "Dados não confirmados.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade (estimada 1,3)",
        "value": "Muito baixa",
        "justification": "Elemento altamente eletropositivo.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C)",
        "value": "Desconhecido, mas presume-se sólido metálico",
        "justification": "Suposto estado, mas jamais observado macroscopicamente.",
        "score": 40
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d⁸",
        "justification": "Estrutura baseada em extrapolação dos elementos do grupo 10.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d⁸ 7s² (teórica)",
        "justification": "Confirmada apenas por modelos computacionais.",
        "score": 60
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=110)",
        "value": "110",
        "justification": "Valor fixo.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (varia com o isótopo)",
        "value": "Instável",
        "justification": "Nenhum isótopo estável.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta (meia-vida milissegundos)",
        "justification": "Praticamente impossível de manipular.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática",
        "justification": "Usado apenas para estudo teórico.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "GSI Helmholtz Centre, Darmstadt, Alemanha",
        "justification": "Relevante para a ciência nuclear.",
        "score": 60
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeado em homenagem à cidade de Darmstadt",
        "justification": "Homenagem ao local de sua descoberta.",
        "score": 75
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "“Darmstadtium” = de Darmstadt",
        "justification": "Nome com forte referência científica.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Equipe do GSI (1994)",
        "justification": "Avanço em física de núcleos superpesados.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano da descoberta",
        "value": "1994",
        "justification": "Descoberta científica recente e importante.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "Desconhecido",
        "justification": "Nenhuma medição possível.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Desconhecido",
        "justification": "Não pode ser determinado.",
        "score": 5
      }
    ]
},
  "Rg": {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgênio",
    "heroName": "Roentgênio X",
    "heroDescription": "O herói dos raios invisíveis, capaz de atravessar a matéria com o poder da radiação diagnóstica.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Roentg%C3%AAnio%20X%2C%20representing%20the%20chemical%20element%20Roentg%C3%AAnio%20(Symbol%3A%20Rg)%2C%20O%20her%C3%B3i%20dos%20raios%20invis%C3%ADveis%2C%20capaz%20de%20atravessar%20a%20mat%C3%A9ria%20com%20o%20poder%20da%20radia%C3%A7%C3%A3o%20diagn%C3%B3stica..%20Style%3A%20glowing%20symbol%20Rg%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altíssima instabilidade e produção caríssima",
        "justification": "Só existe por frações de segundo em laboratório.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Inexistente na natureza; nenhum impacto direto",
        "justification": "Não está presente naturalmente, mas não é ambientalmente perigoso.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Praticamente irrelevante em termos biológicos",
        "justification": "Tempo de meia-vida tão curto que não há interação biológica.",
        "score": 30
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Nenhum prático conhecido",
        "justification": "Elemento sintético com uso apenas teórico/científico.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Previsto como +1 e +3",
        "justification": "Poucos estados confirmados por ser altamente instável.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Apenas criado em aceleradores.",
        "score": 0
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Não ocorre naturalmente em nenhum lugar.",
        "score": 0
      },
      {
        "id": 8,
        "label": "Massa atômica (~282 u estimada)",
        "value": "Extremamente alta",
        "justification": "Um dos elementos mais pesados já criados.",
        "score": 90
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~28–30 g/cm³)",
        "value": "Extremamente alta",
        "justification": "Potencialmente o mais denso de todos os elementos.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Raio atômico (estimado ~138 pm)",
        "value": "Desconhecido com precisão",
        "justification": "Dados teóricos apenas.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+3, +1 (teóricos)",
        "justification": "Confirmados em poucas moléculas.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Desconhecida (metal esperado)",
        "justification": "Previsto como condutor.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade (teórica ~1,6)",
        "value": "Baixa",
        "justification": "Reativo como outros metais pesados.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Gás/plasma (tempo de vida muito curto)",
        "justification": "Não chega a formar estado sólido observável.",
        "score": 10
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d¹⁰ 7s¹ (previsto)",
        "justification": "Padrão semelhante ao ouro e prata.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s¹ (estimada)",
        "justification": "Teórica, baseada no grupo do ouro.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons (Z=111)",
        "value": "111",
        "justification": "Valor extremamente alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº nêutrons (mín. 170, Rg-282)",
        "value": "5",
        "justification": "Neutro.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alto (t½ ≈ 1–4 ms)",
        "justification": "Altamente instável.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática",
        "justification": "Sem tempo útil para uso.",
        "score": 10
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Aceleradores nucleares",
        "justification": "Produzido em laboratórios como GSI (Alemanha).",
        "score": 20
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nomeado em homenagem a Wilhelm Röntgen",
        "justification": "Nome celebra o descobridor dos raios X.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "\"Roentgênio\" → raios X",
        "justification": "Nome com significado histórico.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "GSI Darmstadt (1994)",
        "justification": "Parte da pesquisa de elementos superpesados.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1994 (confirmado em 2003)",
        "justification": "Descoberta moderna em física nuclear.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "Desconhecido",
        "justification": "Nunca observado.",
        "score": 10
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "Desconhecido",
        "justification": "Nunca observado.",
        "score": 10
      }
    ]
},
  "Cn": {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernício",
    "heroName": "Copernício Estelar",
    "heroDescription": "O herói que colocou o sol no centro de tudo, brilhando como um metal volátil no fim da linha do bloco d.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Copern%C3%ADcio%20Estelar%2C%20representing%20the%20chemical%20element%20Copern%C3%ADcio%20(Symbol%3A%20Cn)%2C%20O%20her%C3%B3i%20que%20colocou%20o%20sol%20no%20centro%20de%20tudo%2C%20brilhando%20como%20um%20metal%20vol%C3%A1til%20no%20fim%20da%20linha%20do%20bloco%20d..%20Style%3A%20glowing%20symbol%20Cn%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, sem aplicações, raríssimo",
        "justification": "Vida útil de milissegundos.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum, pois é sintético e controlado",
        "justification": "Sem impacto ambiental.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas contido em laboratório",
        "justification": "Pouco acessível, mas perigoso.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Apenas pesquisa sobre superpesados",
        "justification": "Valor científico.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado de oxidação esperado: 0 ou +2",
        "justification": "Quimicamente pouco reativo.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Não ocorre naturalmente.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Só existe artificialmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~285 u)",
        "value": "Extremamente alta",
        "justification": "Entre os mais pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~23–27 g/cm³)",
        "value": "Muito alta",
        "justification": "Extremamente denso.",
        "score": 90
      },
      {
        "id": 10,
        "label": "Raio atômico (~147 pm estimado)",
        "value": "Médio-grande",
        "justification": "Condizente com grupo 12.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Esperado: 0 (neutro) ou +2",
        "justification": "Baixa diversidade química.",
        "score": 35
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida metálica",
        "justification": "Provavelmente bom condutor.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3 estimado)",
        "value": "Baixa",
        "justification": "Consistente com metais pesados.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido metálico",
        "justification": "Teoricamente metálico.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "6d¹⁰",
        "justification": "Configuração de gás nobre incompleto.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
        "justification": "Estrutura fechada nos orbitais d.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=112)",
        "value": "112",
        "justification": "Alto número atômico.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (173 no Cn-285)",
        "value": "5",
        "justification": "Valor típico.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta (meia-vida ~0,3 ms a 30 s)",
        "justification": "Altíssima instabilidade.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma além de pesquisa nuclear",
        "justification": "Inviável comercialmente.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Alemanha (GSI, Darmstadt)",
        "justification": "Reconhecido centro de pesquisa.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nome dado em homenagem a Nicolau Copérnico",
        "justification": "Nome altamente simbólico.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "“Copernício” = em honra ao astrônomo heliocêntrico",
        "justification": "Fortemente significativo.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Sigurd Hofmann e equipe do GSI (1996)",
        "justification": "Reconhecidos na síntese de superpesados.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1996",
        "justification": "Década de expansão do bloco f e transactinídeos.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~283 K (10 °C) / 50 °F (teórico; pode ser líquido em T ambiente)",
        "justification": "Similar ao mercúrio.",
        "score": 25
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~610 K (~337 °C) / 638 °F",
        "justification": "Pode ser gasoso sob certas condições.",
        "score": 30
      }
    ]
},
  "Nh": {
    "number": 113,
    "symbol": "Nh",
    "name": "Nipônio",
    "heroName": "Nipônio Nascente",
    "heroDescription": "A luz do sol nascente, o primeiro herói descoberto nas terras do Japão.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Nip%C3%B4nio%20Nascente%2C%20representing%20the%20chemical%20element%20Nip%C3%B4nio%20(Symbol%3A%20Nh)%2C%20A%20luz%20do%20sol%20nascente%2C%20o%20primeiro%20her%C3%B3i%20descoberto%20nas%20terras%20do%20Jap%C3%A3o..%20Style%3A%20glowing%20symbol%20Nh%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, sem uso prático",
        "justification": "Vida muito curta.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum, por ser sintético e extremamente raro",
        "justification": "Sem impacto natural.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas inofensivo por escassez",
        "justification": "Presente apenas em laboratórios.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Pesquisa científica em blocos pesados",
        "justification": "Aplicação puramente teórica.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Estado de oxidação previsto: +1, +3",
        "justification": "Pouco explorado quimicamente.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Nula",
        "justification": "Totalmente sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Não ocorre naturalmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~286 u)",
        "value": "Muito alta",
        "justification": "Superpesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~16 g/cm³)",
        "value": "Alta",
        "justification": "Denso, como metais pesados.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Raio atômico (teórico ~170 pm)",
        "value": "Grande",
        "justification": "Entre os maiores do grupo 13.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1, +3 (como Tl)",
        "justification": "Esperado, mas pouco confirmado.",
        "score": 40
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Presumida metálica",
        "justification": "Provável condutor metálico.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3 estimado)",
        "value": "Baixa",
        "justification": "Condizente com metais pesados.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido metálico",
        "justification": "Forma teórica padrão.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p¹",
        "justification": "Início do bloco p superpesado.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
        "justification": "Esperada para grupo 13.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=113)",
        "value": "113",
        "justification": "Valor elevado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (173 no Nh-286)",
        "value": "5",
        "justification": "Estimado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta (meia-vida de milissegundos a segundos)",
        "justification": "Vida muito curta.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática conhecida",
        "justification": "Apenas pesquisa.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Japão (RIKEN)",
        "justification": "Marco histórico da ciência japonesa.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro elemento nomeado por cientistas asiáticos",
        "justification": "Fato histórico relevante.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nihon = Japão",
        "justification": "Nome representativo.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Kosuke Morita e equipe (RIKEN)",
        "justification": "Reconhecidos internacionalmente.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "2004 (oficializado em 2015)",
        "justification": "Resultado de décadas de pesquisa.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~430–500 °C / 703–773 K / 806–932 °F",
        "justification": "Inferido por analogia.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~1100–1250 °C / 1373–1523 K / 2012–2282 °F",
        "justification": "Possivelmente elevado.",
        "score": 65
      }
    ]
},
  "Fl": {
    "number": 114,
    "symbol": "Fl",
    "name": "Fleróvio",
    "heroName": "Fleróvio Instável",
    "heroDescription": "O buscador da ilha de estabilidade, flutuando no mar de núcleos radioativos efêmeros.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Fler%C3%B3vio%20Inst%C3%A1vel%2C%20representing%20the%20chemical%20element%20Fler%C3%B3vio%20(Symbol%3A%20Fl)%2C%20O%20buscador%20da%20ilha%20de%20estabilidade%2C%20flutuando%20no%20mar%20de%20n%C3%BAcleos%20radioativos%20ef%C3%AAmeros..%20Style%3A%20glowing%20symbol%20Fl%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, decai em segundos ou menos",
        "justification": "Produzido em átomos únicos.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum risco ou benefício ambiental",
        "justification": "Sintético e controlado.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas sem risco real devido à escassez",
        "justification": "Não manuseado diretamente.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Apenas pesquisa científica",
        "justification": "Valor teórico.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Oxidação provável +2, +4",
        "justification": "Pouca atividade química observada.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Não ocorre naturalmente.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Produção puramente artificial.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~289 u)",
        "value": "Muito alta",
        "justification": "Superpesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~14 g/cm³)",
        "value": "Alta, mas inferior a outros superpesados",
        "justification": "Consistente com metais pós-transição.",
        "score": 80
      },
      {
        "id": 10,
        "label": "Raio atômico (~180 pm estimado)",
        "value": "Muito grande",
        "justification": "Amplo entre os do bloco p.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+2 e +4 (como Pb)",
        "justification": "Baixa diversidade esperada.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Supostamente metálica",
        "justification": "Condutor moderado.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3 estimado)",
        "value": "Baixa",
        "justification": "Tende a perder elétrons facilmente.",
        "score": 30
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido metálico",
        "justification": "Forma teórica metálica.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p²",
        "justification": "Segue padrão do grupo 14.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
        "justification": "Esperado para o grupo.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=114)",
        "value": "114",
        "justification": "Elemento superpesado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (175 no Fl-289)",
        "value": "5",
        "justification": "Valor típico em isótopos pesados.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito alta, meia-vida inferior a 2 segundos",
        "justification": "Instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma além de testes nucleares",
        "justification": "Sem uso industrial.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Rússia (Dubna) + EUA (Livermore)",
        "justification": "Colaboração internacional.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Investigado como potencial “gás nobre metálico”",
        "justification": "Pode ter propriedades únicas.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Homenagem ao físico Flyorov",
        "justification": "Nome de grande relevância científica.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "JINR (Dubna) & LLNL (EUA)",
        "justification": "Parceiros em transactinídeos.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1998",
        "justification": "Descoberta recente.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~200 °C / 473 K / 392 °F",
        "justification": "Muito baixo para um metal.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~420 °C / 693 K / 788 °F",
        "justification": "Baixo; pode ser volátil.",
        "score": 40
      }
    ]
},
  "Mc": {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscóvio",
    "heroName": "Moscóvio Exótico",
    "heroDescription": "O mestre da gravidade teórica e das camadas nucleares misteriosas, vindo do coração da Rússia.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Mosc%C3%B3vio%20Ex%C3%B3tico%2C%20representing%20the%20chemical%20element%20Mosc%C3%B3vio%20(Symbol%3A%20Mc)%2C%20O%20mestre%20da%20gravidade%20te%C3%B3rica%20e%20das%20camadas%20nucleares%20misteriosas%2C%20vindo%20do%20cora%C3%A7%C3%A3o%20da%20R%C3%BAssia..%20Style%3A%20glowing%20symbol%20Mc%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável e volátil",
        "justification": "Meia-vida muito curta.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum impacto natural",
        "justification": "Produzido apenas em laboratório.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas sem contato com organismos vivos",
        "justification": "Só manipulado em aceleradores.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Apenas pesquisa científica",
        "justification": "Utilidade exclusivamente teórica.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Provável oxidação +1 a +3 (como Bi, Sb)",
        "justification": "Quimicamente incerto.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Totalmente artificial.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~288 u)",
        "value": "Extremamente alta",
        "justification": "Superpesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~13.5 g/cm³)",
        "value": "Alta, mas inferior a metais de transição",
        "justification": "Consistente com o grupo.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~187 pm estimado)",
        "value": "Muito grande",
        "justification": "Um dos maiores do bloco p.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "+1, +3 (potencialmente +5)",
        "justification": "Pouco explorado.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Supostamente metálica",
        "justification": "Prevista como condutora.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,0–1,3)",
        "value": "Muito baixa",
        "justification": "Tende a doar elétrons.",
        "score": 25
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Sólido metálico (estimado)",
        "justification": "Suposição padrão.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p³",
        "justification": "Configuração típica do grupo 15.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
        "justification": "Esperada para esse grupo.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=115)",
        "value": "115",
        "justification": "Superpesado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (~173 no Mc-288)",
        "value": "5",
        "justification": "Estimado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Muito alta (meia-vida de milissegundos a segundos)",
        "justification": "Extremamente instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática",
        "justification": "Só testes experimentais.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Rússia (Dubna) + EUA (Livermore)",
        "justification": "Parceria científica internacional.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Teorizado como parte da “ilha de estabilidade”",
        "justification": "Potencial nuclear a longo prazo.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Moscou – região sede do JINR",
        "justification": "Nome geograficamente simbólico.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Yuri Oganessian e equipe do JINR + LLNL",
        "justification": "Equipes de referência mundial.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "2003 (oficializado em 2016)",
        "justification": "Avanço recente.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~400–500 °C / 673–773 K / 752–932 °F",
        "justification": "Aparentemente baixo.",
        "score": 40
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~1100 °C / 1373 K / 2012 °F",
        "justification": "Razoavelmente elevado.",
        "score": 60
      }
    ]
},
  "Lv": {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermório",
    "heroName": "Livermório Lab",
    "heroDescription": "O herói da síntese colaborativa global, unindo nações no laboratório da descoberta atômica.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Liverm%C3%B3rio%20Lab%2C%20representing%20the%20chemical%20element%20Liverm%C3%B3rio%20(Symbol%3A%20Lv)%2C%20O%20her%C3%B3i%20da%20s%C3%ADntese%20colaborativa%20global%2C%20unindo%20na%C3%A7%C3%B5es%20no%20laborat%C3%B3rio%20da%20descoberta%20at%C3%B4mica..%20Style%3A%20glowing%20symbol%20Lv%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável e com meia-vida curtíssima",
        "justification": "Decai em milissegundos.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum – não ocorre na natureza",
        "justification": "Produzido apenas em aceleradores.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas sem exposição prática",
        "justification": "Contido em laboratórios.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Apenas pesquisa científica",
        "justification": "Utilidade apenas teórica.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Supostos estados de oxidação: +2 e +4 (como Po)",
        "justification": "Quimicamente pouco explorado.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Totalmente sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Produzido apenas artificialmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~293 u)",
        "value": "Extremamente alta",
        "justification": "Elemento superpesado.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~12–15 g/cm³)",
        "value": "Alta, porém menor que a de metais de transição",
        "justification": "Esperado para grupo 16.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Raio atômico (~187 pm estimado)",
        "value": "Grande",
        "justification": "Comparável ao telúrio/polônio.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Prováveis: +2, +4",
        "justification": "Comportamento semelhante ao polônio.",
        "score": 40
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Supostamente metálica",
        "justification": "Esperado como condutor.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~1,3 estimada)",
        "value": "Baixa",
        "justification": "Tende a perder elétrons.",
        "score": 25
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido metálico",
        "justification": "Forma padrão de elementos pesados.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p⁴",
        "justification": "Compatível com grupo 16.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
        "justification": "Configuração típica.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=116)",
        "value": "116",
        "justification": "Superpesado.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (177 no Lv-293)",
        "value": "5",
        "justification": "Estimado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta (meia-vida <1 s)",
        "justification": "Muito instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática",
        "justification": "Só estudo nuclear.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Rússia (Dubna) e EUA (Livermore)",
        "justification": "Colaboração científica de peso.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Nome dado em homenagem à cidade e ao laboratório dos EUA",
        "justification": "Primeira cidade dos EUA homenageada na tabela.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Livermore, Califórnia (EUA)",
        "justification": "Reconhecimento institucional.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Yuri Oganessian e equipe + LLNL",
        "justification": "Grandes nomes da química nuclear.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "2000 (nome oficial em 2012)",
        "justification": "Um dos primeiros do século XXI.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~250 °C / 523 K / 482 °F",
        "justification": "Relativamente baixo.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~600–700 °C / 873–973 K / 1112–1292 °F",
        "justification": "Moderadamente elevado.",
        "score": 50
      }
    ]
},
  "Ts": {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennesso",
    "heroName": "Tennesso Halógeno",
    "heroDescription": "O último dos halogênios, uma faísca rara que brilha por milissegundos antes de se tornar lenda.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Tennesso%20Hal%C3%B3geno%2C%20representing%20the%20chemical%20element%20Tennesso%20(Symbol%3A%20Ts)%2C%20O%20%C3%BAltimo%20dos%20halog%C3%AAnios%2C%20uma%20fa%C3%ADsca%20rara%20que%20brilha%20por%20milissegundos%20antes%20de%20se%20tornar%20lenda..%20Style%3A%20glowing%20symbol%20Ts%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Extremamente instável, decai em milissegundos",
        "justification": "Átomo superpesado de curta duração.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum risco real, pois é totalmente sintético",
        "justification": "Não existe na natureza.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas não acessível",
        "justification": "Isolado em ambiente seguro.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Valor científico em física nuclear e estabilidade",
        "justification": "Utilidade em teoria da “ilha de estabilidade”.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Prevê-se estado de oxidação –1 e +1 (halogênio metálico)",
        "justification": "Quimicamente pouco estudado.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "100% sintético.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Nula",
        "justification": "Produzido artificialmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~294 u)",
        "value": "Extremamente alta",
        "justification": "Um dos mais pesados.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~7.1–8 g/cm³)",
        "value": "Moderada a alta",
        "justification": "Menor que metais pesados, maior que halogênios.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Raio atômico (~160–180 pm)",
        "value": "Grande",
        "justification": "Significativamente maior que os halogênios leves.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Provável –1, +1",
        "justification": "Padrão de halogênio, mas com tendência metálica.",
        "score": 40
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Desconhecida; pode apresentar propriedades semimetálicas",
        "justification": "Sujeito a efeitos relativísticos.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade (estimada ~1.0–1.2)",
        "value": "Muito baixa",
        "justification": "Não segue tendência dos halogênios clássicos.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido (não confirmado)",
        "justification": "Assumido como sólido padrão.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p⁵",
        "justification": "Esperado no grupo 17.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
        "justification": "Estrutura típica para halogênios.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=117)",
        "value": "117",
        "justification": "Número muito alto.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (~177 no Ts-294)",
        "value": "5",
        "justification": "Estimado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Extremamente alta (vida útil em ms a segundos)",
        "justification": "Muito instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática",
        "justification": "Só estudo em física nuclear.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Rússia (Dubna) + EUA (Oak Ridge, Livermore)",
        "justification": "Colaboração internacional de peso.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro halogênio superpesado, tendência à metalização",
        "justification": "Pode não agir como halogênio.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Tennessine = Tennessee",
        "justification": "Nome em homenagem a estado americano.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Equipe de Oganessian + laboratórios dos EUA",
        "justification": "Parceria científica histórica.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "2010 (nomeado em 2016)",
        "justification": "Um dos mais recentes.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~350–500 °C / 623–773 K / 662–932 °F",
        "justification": "Baixo a moderado, se metálico.",
        "score": 40
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~700–900 °C / 973–1173 K / 1292–1652 °F",
        "justification": "Mais alto que os halogênios comuns.",
        "score": 50
      }
    ]
},
  "Og": {
    "number": 118,
    "symbol": "Og",
    "name": "Oganésson",
    "heroName": "Oganésson Zenith",
    "heroDescription": "O mestre supremo da tabela periódica, o ponto final da jornada elemental e guardião do topo da pirâmide.",
    "heroImage": "https://image.pollinations.ai/prompt/A%20cinematic%20high-quality%20superhero%20character%20named%20Ogan%C3%A9sson%20Zenith%2C%20representing%20the%20chemical%20element%20Ogan%C3%A9sson%20(Symbol%3A%20Og)%2C%20O%20mestre%20supremo%20da%20tabela%20peri%C3%B3dica%2C%20o%20ponto%20final%20da%20jornada%20elemental%20e%20guardi%C3%A3o%20do%20topo%20da%20pir%C3%A2mide..%20Style%3A%20glowing%20symbol%20Og%20in%20a%20circular%20emblem%20on%20chest%2C%20flowing%20epic%20cape%2C%20atmospheric%20lighting%2C%20detailed%20metallic%20suit%2C%20majestic%20pose%2C%20hyper-realistic%2C%208k%20resolution.?width=600&height=800&nologo=true",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Altamente instável, vida de milissegundos",
        "justification": "Decai muito rápido.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nenhum – 100% sintético",
        "justification": "Sem presença natural.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Radioativo, mas isolado",
        "justification": "Sem exposição.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Usado apenas em pesquisa nuclear e teoria da estabilidade",
        "justification": "Aplicação exclusivamente teórica.",
        "score": 10
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Poucos – gás nobre, mas pode formar compostos",
        "justification": "Possível formação de compostos instáveis.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "Inexistente",
        "justification": "Produzido em átomos únicos.",
        "score": 1
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Inexistente",
        "justification": "Não ocorre naturalmente.",
        "score": 1
      },
      {
        "id": 8,
        "label": "Massa atômica (~294 u)",
        "value": "Extremamente alta",
        "justification": "Um dos maiores da tabela.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade (estimada ~6–10 g/cm³)",
        "value": "Moderada (alta para gás nobre)",
        "justification": "Suposto quase metálico.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Raio atômico (~152 pm estimado)",
        "value": "Grande para gás nobre",
        "justification": "Tamanho atômico elevado.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Estado(s) de oxidação",
        "value": "Nenhum confirmado; teórico: 0 ou +2",
        "justification": "Gás nobre atípico.",
        "score": 30
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Possivelmente semicondutor ou isolante",
        "justification": "Muito incerta.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade (~2,2 estimada)",
        "value": "Média",
        "justification": "Próxima à do hidrogênio.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico (25 °C/1 atm)",
        "value": "Suposto sólido ou gás não ideal",
        "justification": "Provável estado sólido metálico.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "7p⁶",
        "justification": "Completa o bloco p.",
        "score": 65
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
        "justification": "Gás nobre típico.",
        "score": 65
      },
      {
        "id": 17,
        "label": "Nº de prótons/elétrons (Z=118)",
        "value": "118",
        "justification": "Elemento mais pesado da tabela até hoje.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons (176 no Og-294)",
        "value": "5",
        "justification": "Estimado.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Altíssima – decai em milissegundos",
        "justification": "Extremamente instável.",
        "score": 1
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Nenhuma prática",
        "justification": "Só teoria.",
        "score": 5
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Rússia (Dubna) + EUA (Livermore)",
        "justification": "Grande marco científico.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeiro gás nobre metálico previsto",
        "justification": "Pode ser condutor e sólido!",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Oganessônio, homenagem ao físico Yuri Oganessian",
        "justification": "Reconhecimento em vida.",
        "score": 100
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Equipe de Oganessian e LLNL",
        "justification": "Físicos de renome.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "2002 (oficial em 2016)",
        "justification": "Recente.",
        "score": 70
      },
      {
        "id": 26,
        "label": "Ponto de fusão (estimado)",
        "value": "~200 °C / 473 K / 392 °F",
        "justification": "Muito inferior a outros gases nobres.",
        "score": 35
      },
      {
        "id": 27,
        "label": "Ponto de ebulição (estimado)",
        "value": "~350–450 °C / 623–723 K / 662–842 °F",
        "justification": "Mais baixo que se esperava.",
        "score": 50
      }
    ]
},
};

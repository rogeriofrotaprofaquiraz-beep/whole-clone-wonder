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
        "score": 5
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Pouco tóxico (asfixiante)",
        "justification": "Seguro biologicamente, porém explosivo.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Célula a combustível, NH₃, H₂O",
        "justification": "Base da água e essencial para a vida.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "≈ 95 elementos",
        "justification": "Extrema versatilidade química.",
        "score": 95
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,15% na crosta / 10% na água",
        "justification": "Raro na forma livre, comum em compostos.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "~75%",
        "justification": "O elemento mais abundante de toda a massa bariônica.",
        "score": 100
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "1,008 u",
        "justification": "A menor massa atômica possível.",
        "score": 1
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,0899 g/L",
        "justification": "O gás mais leve que existe.",
        "score": 1
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "53 pm",
        "justification": "Um dos menores raios atômicos.",
        "score": 5
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1, -1",
        "justification": "Estados simples mas fundamentais.",
        "score": 25
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante (gás)",
        "justification": "Pobre condutor em estado gasoso.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,20",
        "justification": "Padrão de referência médio.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás",
        "justification": "Gás incolor e inodoro à temperatura ambiente.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "1s¹",
        "justification": "O ponto de partida da tabela periódica.",
        "score": 1
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s¹",
        "justification": "A configuração mais simples e fundamental.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "1",
        "justification": "O número atômico 1 define a base da matéria.",
        "score": 100
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "0",
        "justification": "Único elemento sem nêutrons no núcleo estável.",
        "score": 1
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopo Protião é perfeitamente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Combustível, indústria, fusão",
        "justification": "Peça chave para o futuro energético da humanidade.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Londres, Inglaterra",
        "justification": "Isolado pela primeira vez por Henry Cavendish.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Gás mais leve, chama invisível",
        "justification": "Pode queimar com uma chama quase imperceptível.",
        "score": 85
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Hydro (água) + genes (formador)",
        "justification": "Literalmente 'o gerador de água'.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Henry Cavendish",
        "justification": "Pioneiro da química moderna.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1766",
        "justification": "Uma das descobertas mais antigas e cruciais.",
        "score": 99
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-259,14 °C",
        "justification": "Extremamente baixo, próximo ao zero absoluto.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-252,87 °C",
        "justification": "Um dos menores pontos de ebulição conhecidos.",
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
        "value": "Inércia química total",
        "justification": "Quase impossível de reagir com outros elementos.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Vital para as estrelas",
        "justification": "Motor da fusão nuclear estelar.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Não tóxico (Asfixiante)",
        "justification": "Seguro, mas pode deslocar o oxigênio.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Resfriamento quântico",
        "justification": "Essencial para supercondutores e MRIs.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "0",
        "justification": "Gás nobre com camada de valência completa.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "5,2 ppm (atmosfera)",
        "justification": "Raríssimo na Terra devido à sua leveza.",
        "score": 5
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "~24%",
        "justification": "O segundo elemento mais comum no cosmos.",
        "score": 99
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "4,0026 u",
        "justification": "Muito leve, perde apenas para o Hidrogênio.",
        "score": 4
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,1785 g/L",
        "justification": "Extremamente baixa, flutua no ar.",
        "score": 2
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "31 pm",
        "justification": "O menor raio atômico de todos.",
        "score": 100
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "0",
        "justification": "Não ganha nem perde elétrons facilmente.",
        "score": 1
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Pobre condutor, exceto em estado de plasma.",
        "score": 5
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "N/A",
        "justification": "Não possui afinidade por elétrons alheios.",
        "score": 1
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás",
        "justification": "Permanece gasoso até quase o zero absoluto.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "1s²",
        "justification": "Configuração de dueto perfeita.",
        "score": 2
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s²",
        "justification": "O exemplo máximo de estabilidade.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "2",
        "justification": "Define sua identidade como o segundo elemento.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "2",
        "justification": "Equilíbrio nuclear perfeito no Hélio-4.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Núcleo altamente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Alta (Criogenia/Aeroespacial)",
        "justification": "Insubstituível em tecnologias de ponta.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Coração Estelar",
        "justification": "Criado via fusão nuclear em estrelas.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Elemento 'Solar'",
        "justification": "Único elemento descoberto no espaço antes da Terra.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Helios (Sol)",
        "justification": "Homenagem ao deus grego do Sol.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Janssen & Lockyer",
        "justification": "Identificado por espectroscopia em 1868.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1868",
        "justification": "Relativamente recente na história da química.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-272,2 °C",
        "justification": "Só solidifica sob pressão extrema.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-268,9 °C",
        "justification": "O ponto de ebulição mais baixo da matéria.",
        "score": 100
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
        "value": "Altamente reativo com água",
        "justification": "Reage violentamente ao contato com umidade.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial para transição energética",
        "justification": "Chave para baterias de carros elétricos.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Tóxico em altas doses / Medicinal",
        "justification": "Usado em psiquiatria, mas corrosivo puro.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Armazenamento de energia",
        "justification": "O pilar da eletrônica portátil moderna.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1 (Iônico/Covalente)",
        "justification": "Metal alcalino com 1 elétron na camada de valência.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "20 ppm (crosta)",
        "justification": "Encontrado em minerais como espodumênio.",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0000005%",
        "justification": "Um dos poucos elementos criados no Big Bang.",
        "score": 60
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "6,941 u",
        "justification": "O metal de menor massa atômica.",
        "score": 7
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,534 g/cm³",
        "justification": "Tão leve que flutua no óleo ou água.",
        "score": 5
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "152 pm",
        "justification": "Raio atômico grande para seu período.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1",
        "justification": "Estado de oxidação estável e único.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "1,08 × 10⁷ S/m",
        "justification": "Bom condutor elétrico como metal alcalino.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "0,98 (Pauling)",
        "justification": "Baixa eletronegatividade, cede elétrons facilmente.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Metal)",
        "justification": "O sólido menos denso à temperatura ambiente.",
        "score": 85
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2s¹",
        "justification": "Início do segundo período da tabela.",
        "score": 3
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[He] 2s¹",
        "justification": "Configuração simples e altamente energética.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "3",
        "justification": "Identidade atômica do Lítio.",
        "score": 3
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "4",
        "justification": "Isótopo mais comum é o Lítio-7.",
        "score": 4
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Isótopos naturais são perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Baterias, Ligas, Vidros",
        "justification": "Pilar da revolução tecnológica móvel.",
        "score": 99
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Estocolmo, Suécia",
        "justification": "Descoberto no mineral petalita em 1817.",
        "score": 70
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Flutua no óleo",
        "justification": "Único metal que não afunda em hidrocarbonetos leves.",
        "score": 92
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Lithos (Pedra)",
        "justification": "Grego para 'pedra', por ser achado em rochas.",
        "score": 60
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Johan Arfwedson",
        "justification": "Identificado por análise química em 1817.",
        "score": 75
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1817",
        "justification": "Descoberta chave para a química inorgânica.",
        "score": 82
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "180,5 °C",
        "justification": "Ponto de fusão baixo para um metal.",
        "score": 40
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1342 °C",
        "justification": "Ampla faixa de estado líquido.",
        "score": 50
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
        "value": "Extrema toxicidade",
        "justification": "O pó de berílio pode causar beriliose, uma doença pulmonar incurável.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Raro e difícil de extrair",
        "justification": "Sua mineração exige processos químicos complexos.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente perigoso (Carcinogênico)",
        "justification": "Um dos elementos mais tóxicos na manipulação industrial.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Aeroespacial e Raios-X",
        "justification": "Transparente a raios-X e vital para espelhos de telescópios (como o James Webb).",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2 (Covalente)",
        "justification": "Tende a formar ligações covalentes apesar de ser metal.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "2,8 ppm (crosta)",
        "justification": "Relativamente raro, encontrado em pedras preciosas como a esmeralda.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0000001%",
        "justification": "Elemento raro no cosmos, formado por espalação de raios cósmicos.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "9,0122 u",
        "justification": "Massa atômica muito baixa para um metal estrutural.",
        "score": 9
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,85 g/cm³",
        "justification": "Muito leve, cerca de 1/3 menos denso que o alumínio.",
        "score": 18
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "112 pm",
        "justification": "Raio atômico pequeno, conferindo alta densidade de carga.",
        "score": 80
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2",
        "justification": "Estado de oxidação fixo como metal alcalino-terroso.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "2,5 × 10⁷ S/m",
        "justification": "Excelente condutor elétrico e térmico.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,57 (Pauling)",
        "justification": "A mais alta entre os metais alcalino-terrosos.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Metal)",
        "justification": "Metal duro, cinza-aço e quebradiço à temperatura ambiente.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2s²",
        "justification": "Camada de valência completa no subnível s.",
        "score": 4
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s²",
        "justification": "Configuração eletrônica estável e compacta.",
        "score": 85
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "4",
        "justification": "Quarto elemento da tabela periódica.",
        "score": 4
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "5",
        "justification": "O isótopo estável único é o Berílio-9.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O berílio natural é monoisotópico e estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Satélites, Mísseis, Reatores",
        "justification": "Essencial em tecnologias de defesa e exploração espacial.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Paris, França",
        "justification": "Descoberto por Louis-Nicolas Vauquelin em 1798.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Gosto adocicado",
        "justification": "Antigamente chamado de 'Glicínio' por causa do gosto doce de seus sais (porém altamente tóxico!).",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Beryllos (Berilo)",
        "justification": "Grego para o mineral berilo, de onde é extraído.",
        "score": 65
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Louis-Nicolas Vauquelin",
        "justification": "Identificado como um novo óxido em 1798.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1798",
        "justification": "Descoberto no final do século XVIII.",
        "score": 88
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1287 °C",
        "justification": "Ponto de fusão excepcionalmente alto para um metal leve.",
        "score": 85
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2469 °C",
        "justification": "Alta estabilidade térmica.",
        "score": 82
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
        "value": "Baixa condutividade a frio",
        "justification": "Sendo um semimetal, sua condutividade aumenta drasticamente apenas com o calor.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial para as plantas",
        "justification": "Vital para o crescimento das paredes celulares vegetais.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixa toxicidade",
        "justification": "Relativamente seguro para humanos em doses normais.",
        "score": 85
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Vidros e Blindagem",
        "justification": "Usado em vidros borossilicato (Pyrex) e coletes à prova de balas.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3 (Covalente)",
        "justification": "Possui 3 elétrons de valência para compartilhamento.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "8 ppm (crosta)",
        "justification": "Elemento raro, concentrado em depósitos de boratos.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0000001%",
        "justification": "Formado apenas por espalação de raios cósmicos, não em estrelas.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "10,811 u",
        "justification": "Massa leve, posicionado logo após o Berílio.",
        "score": 11
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "2,34 g/cm³",
        "justification": "Densidade moderada, entre metais leves e pesados.",
        "score": 23
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "90 pm",
        "justification": "Raio atômico muito pequeno, típico de elementos do topo da tabela.",
        "score": 85
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+3",
        "justification": "Estado de oxidação mais comum e estável.",
        "score": 80
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "1,0 × 10⁻⁴ S/m",
        "justification": "Comportamento de semicondutor.",
        "score": 40
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,04 (Pauling)",
        "justification": "Valor intermediário, característica de semimetais.",
        "score": 65
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Semimetal)",
        "justification": "Sólido preto ou marrom, extremamente duro.",
        "score": 95
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p¹",
        "justification": "O primeiro elemento a preencher o subnível p.",
        "score": 5
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s² 2p¹",
        "justification": "Início do bloco p na tabela periódica.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "5",
        "justification": "Quinto elemento da tabela periódica.",
        "score": 5
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "6",
        "justification": "O isótopo Boron-11 é o mais abundante.",
        "score": 6
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui dois isótopos naturais estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Foguetes, Vidros, Imãs",
        "justification": "Essencial para ligas magnéticas de neodímio e combustíveis de foguetes.",
        "score": 97
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Londres / Paris",
        "justification": "Isolado independentemente por Davy, Gay-Lussac e Thénard.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Duro como diamante",
        "justification": "Suas fibras são algumas das mais fortes conhecidas.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Burāq (Bórax)",
        "justification": "Do árabe 'burāq' ou persa 'būrah', referindo-se ao mineral bórax.",
        "score": 70
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Davy, Gay-Lussac e Thénard",
        "justification": "Identificado quase simultaneamente em 1808.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1808",
        "justification": "Isolado no início do século XIX.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "2076 °C",
        "justification": "Ponto de fusão extremamente elevado.",
        "score": 95
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3927 °C",
        "justification": "Resistência térmica superior.",
        "score": 94
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
        "value": "Combustão (CO₂)",
        "justification": "Reage com oxigênio produzindo gases de efeito estufa.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Base da vida / Aquecimento global",
        "justification": "Essencial para biomoléculas, mas seu excesso aquece o planeta.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo (Essencial)",
        "justification": "Fundamental para a estrutura humana e nutrição.",
        "score": 100
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Toda a vida orgânica",
        "justification": "Presente em DNA, proteínas e açúcares.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "4 (Tetravalente)",
        "justification": "Forma cadeias complexas e estáveis com facilidade única.",
        "score": 100
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,02% na crosta / 18% no corpo",
        "justification": "O segundo elemento mais abundante no corpo humano.",
        "score": 90
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,5%",
        "justification": "Quarto elemento mais comum no cosmos.",
        "score": 85
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "12,011 u",
        "justification": "A base da escala de massa atômica moderna.",
        "score": 12
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "2,26 g/cm³ (Grafite) / 3,51 g/cm³ (Diamante)",
        "justification": "Varia drasticamente conforme sua forma alotrópica.",
        "score": 35
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "70 pm",
        "justification": "Raio compacto que permite ligações fortes e curtas.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+4, +2, -4",
        "justification": "Extrema versatilidade em estados de oxidação.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Alta (Grafite) / Baixa (Diamante)",
        "justification": "Grafite é um excelente condutor, diamante é isolante.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,55 (Pauling)",
        "justification": "Equilibrada, permitindo ligações covalentes estáveis.",
        "score": 70
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Não-metal)",
        "justification": "Sólido em todas as suas formas naturais estáveis.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p²",
        "justification": "Metade do subnível p preenchida.",
        "score": 6
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s² 2p²",
        "justification": "Configuração que gera sua tetravalência.",
        "score": 85
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "6",
        "justification": "Sexto elemento e base da química orgânica.",
        "score": 6
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "6",
        "justification": "Isótopo Carbono-12 é o padrão de estabilidade.",
        "score": 6
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Carbono-14 (Radioativo)",
        "justification": "Usado para datar fósseis e artefatos antigos.",
        "score": 75
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Combustíveis, Joias, Nanotecnologia",
        "justification": "De petróleo a nanotubos de carbono de alta tecnologia.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Usado como carvão e fuligem desde a pré-história.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Rei da Alotropia",
        "justification": "Pode ser o material mais macio (grafite) ou o mais duro (diamante).",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Carbo (Carvão)",
        "justification": "Do latim 'carbo', significando carvão vegetal.",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Antoine Lavoisier",
        "justification": "Primeiro a listar o carbono como elemento em 1789.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1789 (Identificado)",
        "justification": "Oficialmente reconhecido no final do século XVIII.",
        "score": 88
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "3550 °C (Sublima)",
        "justification": "O maior ponto de fusão de todos os elementos puros.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3825 °C",
        "justification": "Extrema estabilidade em altas temperaturas.",
        "score": 98
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
        "value": "Inércia em temperatura ambiente",
        "justification": "Sua ligação tripla é tão forte que ele raramente reage sem energia extrema.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Ciclo do Nitrogênio",
        "justification": "Vital para o crescimento das plantas como fertilizante natural.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Asfixiante simples / Criogênico",
        "justification": "Inofensivo no ar, mas perigoso se deslocar o oxigênio ou em estado líquido.",
        "score": 70
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Proteínas e DNA",
        "justification": "Componente essencial de todos os aminoácidos e bases nitrogenadas.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3 (Covalente)",
        "justification": "Forma ligações triplas extremamente estáveis.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "78% da atmosfera",
        "justification": "O componente mais abundante do ar que respiramos.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,1%",
        "justification": "Sétimo elemento mais abundante no cosmos.",
        "score": 75
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "14,007 u",
        "justification": "Massa intermediária, essencial para a densidade atmosférica.",
        "score": 14
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,25 g/L",
        "justification": "Ligeiramente mais leve que o ar atmosférico.",
        "score": 12
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "65 pm",
        "justification": "Um dos menores raios atômicos, permitindo ligações triplas curtas.",
        "score": 95
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+5, +4, +3, +2, +1, -3",
        "justification": "Uma das maiores variedades de estados de oxidação.",
        "score": 98
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante (Gás)",
        "justification": "Pobre condutor, típico de não-metais gasosos.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "3,04 (Pauling)",
        "justification": "Altamente eletronegativo, atrás apenas de Flúor e Oxigênio.",
        "score": 90
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás (Não-metal)",
        "justification": "Gás incolor e inodoro à temperatura ambiente.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p³",
        "justification": "Subnível p exatamente na metade, conferindo estabilidade.",
        "score": 7
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s² 2p³",
        "justification": "Configuração que permite a formação de amônia e nitratos.",
        "score": 85
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "7",
        "justification": "Número atômico da vida e da atmosfera.",
        "score": 7
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "7",
        "justification": "Núcleo perfeitamente balanceado no Nitrogênio-14.",
        "score": 7
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "A grande maioria do nitrogênio terrestre é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Criogenia, Fertilizantes, Explosivos",
        "justification": "Essencial para a produção de alimentos (Processo Haber-Bosch).",
        "score": 99
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Edimburgo, Escócia",
        "justification": "Identificado pela primeira vez por Daniel Rutherford.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Líquido Criogênico",
        "justification": "Pode congelar quase qualquer coisa instantaneamente a -196 °C.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Nitron (Salitre) + Genes (Formador)",
        "justification": "Significa 'formador de salitre' (nitrato de potássio).",
        "score": 85
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Daniel Rutherford",
        "justification": "Descobriu o 'ar deletério' em 1772.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1772",
        "justification": "Descoberto durante os experimentos com composição do ar.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-210 °C",
        "justification": "Extremamente baixo, permitindo sua fase líquida criogênica.",
        "score": 2
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-195,79 °C",
        "justification": "A temperatura famosa do nitrogênio líquido.",
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
        "value": "Altamente oxidante",
        "justification": "Pode acelerar a corrosão de metais e a combustão de materiais.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial para respiração / Ozônio",
        "justification": "Forma a camada de ozônio que protege a Terra dos raios UV.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Vital / Tóxico em excesso",
        "justification": "Essencial para a vida, mas oxigênio puro sob pressão é tóxico.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Respiração Aeróbica",
        "justification": "Fundamental para a produção de energia nas células (ATP).",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2 (Covalente)",
        "justification": "Tende a formar duas ligações para completar o octeto.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "46% da crosta / 21% do ar",
        "justification": "O elemento mais abundante na crosta terrestre.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "1%",
        "justification": "Terceiro elemento mais abundante no cosmos.",
        "score": 90
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "15,999 u",
        "justification": "Massa fundamental para a química da água e do ar.",
        "score": 16
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,429 g/L",
        "justification": "Mais denso que o ar atmosférico.",
        "score": 14
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "60 pm",
        "justification": "Raio muito pequeno, resultando em alta eletronegatividade.",
        "score": 98
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-2, -1",
        "justification": "O estado -2 é quase universal em seus compostos.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante (Gás)",
        "justification": "Não conduz eletricidade em condições normais.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "3,44 (Pauling)",
        "justification": "O segundo elemento mais eletronegativo da tabela.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás (Não-metal)",
        "justification": "Gás incolor e vital à temperatura ambiente.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p⁴",
        "justification": "Quatro elétrons no subnível p, buscando o octeto.",
        "score": 8
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s² 2p⁴",
        "justification": "Configuração que o torna altamente reativo.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "8",
        "justification": "O número atômico que define o fôlego da vida.",
        "score": 8
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "8",
        "justification": "Núcleo estável no isótopo Oxigênio-16.",
        "score": 8
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O oxigênio natural é predominantemente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Suporte à vida, Foguetes, Indústria",
        "justification": "Usado em hospitais, soldagem e como comburente em foguetes.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Inglaterra / Suécia",
        "justification": "Descoberto independentemente por Priestley e Scheele.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Oxigênio Líquido Azul",
        "justification": "Em estado líquido, o oxigênio possui uma bela coloração azul pálida.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Oxys (Ácido) + Genes (Formador)",
        "justification": "Significa 'formador de ácidos' (crença antiga de Lavoisier).",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Joseph Priestley",
        "justification": "Primeiro a publicar a descoberta em 1774.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1774",
        "justification": "Marco fundamental na revolução química.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-218,79 °C",
        "justification": "Ponto de congelamento extremamente baixo.",
        "score": 2
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-182,95 °C",
        "justification": "Temperatura em que se torna oxigênio líquido.",
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
        "value": "Extrema agressividade química",
        "justification": "Reage com quase tudo, inclusive vidro e metais nobres, dificultando o armazenamento.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Vazamentos letais",
        "justification": "Gás extremamente corrosivo e tóxico para todos os seres vivos.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente Tóxico / Corrosivo",
        "justification": "Causa queimaduras químicas profundas e danos ósseos.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Saúde Bucal e Teflon",
        "justification": "Previne cáries em doses baixas e cria polímeros antiaderentes.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1 (Covalente/Iônico)",
        "justification": "Falta apenas 1 elétron para completar sua camada, capturando-o com força total.",
        "score": 25
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "585 ppm (crosta)",
        "justification": "Encontrado em minerais como a fluorita.",
        "score": 55
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,00004%",
        "justification": "Elemento raro no universo devido à sua síntese estelar específica.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "18,998 u",
        "justification": "Massa leve, típica dos primeiros halogênios.",
        "score": 19
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,696 g/L",
        "justification": "Gás mais denso que o ar.",
        "score": 17
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "57 pm",
        "justification": "Um dos menores raios, o que explica sua atração eletrônica extrema.",
        "score": 99
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-1",
        "justification": "Estado de oxidação único e o mais estável possível.",
        "score": 100
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante (Gás)",
        "justification": "Não-metal clássico, não conduz eletricidade.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "3,98 (Pauling)",
        "justification": "O valor mais alto de toda a tabela periódica.",
        "score": 100
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás (Não-metal)",
        "justification": "Gás amarelo-pálido altamente reativo.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p⁵",
        "justification": "Quase um gás nobre, o que gera sua 'fome' por um elétron.",
        "score": 9
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s² 2p⁵",
        "justification": "Configuração de alta energia e instabilidade química.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "9",
        "justification": "O número atômico do herói halogênio.",
        "score": 9
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "10",
        "justification": "Configuração estável no isótopo Flúor-19.",
        "score": 10
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (F-19)",
        "justification": "O único isótopo natural é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Pastas de dente, Enriquecimento Nuclear",
        "justification": "Crucial para a higiene bucal e na indústria de urânio.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Paris, França",
        "justification": "Isolado por Henri Moissan após muitas tentativas perigosas.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "O Devorador de Recipientes",
        "justification": "Por décadas, nenhum recipiente conseguia contê-lo sem ser destruído.",
        "score": 99
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Fluere (Fluir)",
        "justification": "Do latim 'fluere', devido ao uso da fluorita como fundente.",
        "score": 75
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Henri Moissan",
        "justification": "Ganhou o Prêmio Nobel por isolar este elemento perigoso.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1886",
        "justification": "Levou quase 100 anos para ser isolado após sua identificação.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-219,62 °C",
        "justification": "Ponto de congelamento extremamente baixo.",
        "score": 2
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-188,12 °C",
        "justification": "Torna-se líquido em temperaturas criogênicas.",
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
        "value": "Inércia total",
        "justification": "Não forma compostos químicos conhecidos em condições naturais.",
        "score": 1
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Inofensivo",
        "justification": "Gás nobre quimicamente inerte e seguro para o ambiente.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Não tóxico (Asfixiante)",
        "justification": "Seguro ao toque e respiração, mas pode deslocar oxigênio em locais fechados.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Iluminação e Criogenia",
        "justification": "Essencial para letreiros luminosos e como refrigerante criogênico.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "0",
        "justification": "Camada de valência completa (Octeto), não precisa de elétrons.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "18 ppm (atmosfera)",
        "justification": "Raro no ar da Terra, mas comum no universo.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,13%",
        "justification": "Quinto elemento mais comum no cosmos.",
        "score": 95
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "20,179 u",
        "justification": "Massa atômica leve, completando o segundo período.",
        "score": 20
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,899 g/L",
        "justification": "Ligeiramente mais leve que o ar atmosférico.",
        "score": 10
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "38 pm",
        "justification": "Raio extremamente pequeno devido à forte atração do núcleo.",
        "score": 98
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "0",
        "justification": "Estado de oxidação padrão dos gases nobres.",
        "score": 1
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Gás Luminescente",
        "justification": "Conduz eletricidade quando ionizado em tubos de descarga.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "N/A",
        "justification": "Gases nobres não possuem eletronegatividade definida.",
        "score": 1
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás (Gás Nobre)",
        "justification": "Permanece gasoso até temperaturas extremamente baixas.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "2p⁶",
        "justification": "Subnível p totalmente preenchido, o ideal de estabilidade.",
        "score": 10
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "1s² 2s² 2p⁶",
        "justification": "Configuração do octeto completo, a mais estável da natureza.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "10",
        "justification": "Número atômico do primeiro gás nobre do bloco p.",
        "score": 10
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "10",
        "justification": "Equilíbrio estável no isótopo Neônio-20.",
        "score": 10
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Os três isótopos naturais do neônio são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Letreiros, Lasers, Criogenia",
        "justification": "Famoso pelos anúncios luminosos 'Neon' e lasers de hélio-neônio.",
        "score": 92
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Londres, Inglaterra",
        "justification": "Descoberto por Sir William Ramsay e Morris Travers.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Brilho Vermelho",
        "justification": "O verdadeiro neônio brilha apenas em vermelho-alaranjado; outras cores usam gases diferentes.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Neos (Novo)",
        "justification": "Do grego 'neos', significando o 'novo' gás descoberto.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Ramsay & Morris Travers",
        "justification": "Isolaram o gás a partir do ar líquido em 1898.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Descoberto no final do século XIX.",
        "score": 85
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-248,59 °C",
        "justification": "Um dos pontos de fusão mais baixos conhecidos.",
        "score": 5
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-246,08 °C",
        "justification": "Intervalo líquido minúsculo entre fusão e ebulição.",
        "score": 5
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
        "value": "Reatividade extrema com água",
        "justification": "Pode explodir ou pegar fogo ao entrar em contato com umidade.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial para os oceanos",
        "justification": "Principal íon dissolvido na água do mar, regulando a salinidade.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Vital / Hipertensão",
        "justification": "Essencial para impulsos nervosos, mas o excesso de sal causa doenças cardíacas.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Sal de Cozinha e Impulsos Nervosos",
        "justification": "Sem ele, o cérebro não conseguiria enviar sinais para o corpo.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1 (Iônico)",
        "justification": "Metal alcalino que perde facilmente seu único elétron de valência.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "2,3% na crosta",
        "justification": "O sexto elemento mais abundante na crosta terrestre.",
        "score": 85
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,002%",
        "justification": "Comum em sistemas solares e estrelas tipo G como o Sol.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "22,989 u",
        "justification": "Massa moderada, iniciando o terceiro período da tabela.",
        "score": 23
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,968 g/cm³",
        "justification": "Tão leve que flutua na água (enquanto reage violentamente!).",
        "score": 15
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "186 pm",
        "justification": "Raio grande, característico dos metais alcalinos.",
        "score": 75
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1",
        "justification": "Estado de oxidação quase único e extremamente estável em compostos.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "2,1 × 10⁷ S/m",
        "justification": "Excelente condutor elétrico em estado puro.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "0,93 (Pauling)",
        "justification": "Valor muito baixo, indicando sua forte natureza metálica.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Metal Alcalino)",
        "justification": "Metal prateado tão macio que pode ser cortado com uma faca.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3s¹",
        "justification": "Possui um único elétron solitário na terceira camada.",
        "score": 11
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s¹",
        "justification": "Configuração que explica sua alta reatividade química.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "11",
        "justification": "Número atômico que inicia o bloco s do terceiro período.",
        "score": 11
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "12",
        "justification": "Núcleo estável no isótopo Sódio-23.",
        "score": 12
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável (Na-23)",
        "justification": "O isótopo natural é completamente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Lâmpadas de Vapor, Nutrição, Indústria",
        "justification": "Usado em iluminação pública amarela e processos químicos.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Londres, Inglaterra",
        "justification": "Isolado por Humphry Davy através da eletrólise da soda cáustica.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Explosão na Água",
        "justification": "O metal puro explode ao contato com a água, liberando gás hidrogênio e calor.",
        "score": 99
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Natrium (Soda)",
        "justification": "Do egípcio 'natron', usado para designar o carbonato de sódio.",
        "score": 80
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Humphry Davy",
        "justification": "Grande químico que isolou vários metais alcalinos em 1807.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1807",
        "justification": "Descoberto no auge da era da eletroquímica.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "97,72 °C",
        "justification": "Derrete abaixo da temperatura de ebulição da água.",
        "score": 15
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "883 °C",
        "justification": "Ponto de ebulição típico de metais leves.",
        "score": 30
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
        "value": "Combustão intensa",
        "justification": "Uma vez aceso, queima com uma chama branca brilhante difícil de apagar.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Coração da Clorofila",
        "justification": "Sem ele, as plantas não conseguiriam realizar a fotossíntese.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Vital (Essencial)",
        "justification": "Necessário para mais de 300 reações bioquímicas no corpo humano.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas Leves e Suplementação",
        "justification": "Crucial para a aviação por sua leveza e para a saúde muscular e óssea.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2 (Iônico)",
        "justification": "Metal alcalino-terroso com dois elétrons de valência.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "2,1% na crosta",
        "justification": "Oitavo elemento mais abundante na crosta terrestre.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,06%",
        "justification": "Sétimo elemento mais abundante no cosmos.",
        "score": 85
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "24,305 u",
        "justification": "Massa atômica baixa, típica de metais estruturais leves.",
        "score": 24
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,738 g/cm³",
        "justification": "O metal estrutural mais leve que existe.",
        "score": 17
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "160 pm",
        "justification": "Raio atômico típico do terceiro período.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2",
        "justification": "Estado de oxidação estável e único em seus compostos.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "2,26 × 10⁷ S/m",
        "justification": "Bom condutor elétrico, similar ao alumínio.",
        "score": 82
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,31 (Pauling)",
        "justification": "Baixa eletronegatividade, característica metálica marcante.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Metal)",
        "justification": "Metal branco-prateado, leve e razoavelmente duro.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3s²",
        "justification": "Subnível s da terceira camada totalmente preenchido.",
        "score": 12
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s²",
        "justification": "Configuração que define sua posição no grupo 2.",
        "score": 85
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "12",
        "justification": "O número atômico que define o Magnésio.",
        "score": 12
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "12",
        "justification": "Isótopo Magnésio-24 é o mais estável e abundante.",
        "score": 12
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O magnésio natural é composto por três isótopos estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Aeronáutica, Fogos de Artifício, Saúde",
        "justification": "Usado em ligas para aviões, flashes fotográficos e suplementos.",
        "score": 96
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Magnésia, Grécia",
        "justification": "Identificado por Joseph Black em 1755 e isolado por Davy.",
        "score": 75
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Luz Ofuscante",
        "justification": "Queima com uma luz branca tão intensa que era usada nos primeiros flashes de câmeras.",
        "score": 97
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Magnesia (Distrito Grego)",
        "justification": "Homenagem à região da Tessália onde foi encontrado.",
        "score": 65
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Joseph Black / Humphry Davy",
        "justification": "Identificado como elemento distinto em 1755.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1755",
        "justification": "Uma das descobertas fundamentais da química do século XVIII.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "650 °C",
        "justification": "Ponto de fusão relativamente baixo para um metal estrutural.",
        "score": 40
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1090 °C",
        "justification": "Ponto de ebulição moderado.",
        "score": 45
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
        "label": "Massa Atômica",
        "value": "26.981 u",
        "justification": "O Alumínio possui uma massa atômica de aproximadamente 26.981 u.",
        "score": 27
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "8.1 %",
        "justification": "É o metal mais abundante na crosta terrestre.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "660.3 °C",
        "justification": "Possui um ponto de fusão relativamente baixo para um metal industrial.",
        "score": 66
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "2470 °C",
        "justification": "Sua temperatura de vaporização é bastante elevada.",
        "score": 78
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "2.70 g/cm³",
        "justification": "Extremamente leve, cerca de um terço da densidade do aço ou cobre.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "2.75",
        "justification": "É um metal relativamente macio e fácil de processar.",
        "score": 28
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.61",
        "justification": "Moderadamente eletronegativo, formando ligações covalentes e iônicas.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "235 W/(m·K)",
        "justification": "Excelente condutor de calor, muito usado em dissipadores.",
        "score": 88
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "35 MS/m",
        "justification": "Grande condutor, preferido para linhas de transmissão de alta tensão devido ao seu peso.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.897 J/(g·K)",
        "justification": "Alta capacidade de absorção de calor por unidade de massa.",
        "score": 75
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "143 pm",
        "justification": "Tamanho atômico médio, típico dos metais do bloco p.",
        "score": 45
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "5.986 eV",
        "justification": "Primeira energia de ionização necessária para remover um elétron.",
        "score": 55
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal sólido prateado e brilhante em temperatura ambiente.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Alta",
        "justification": "Reage rapidamente com o oxigênio, formando uma camada protetora de Al2O3.",
        "score": 82
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "100 %",
        "justification": "Infinitamente reciclável sem perda de propriedades, economizando 95% de energia.",
        "score": 100
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional",
        "justification": "Sua camada natural de óxido impede a oxidação profunda.",
        "score": 92
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Prata/Branco",
        "justification": "Excelente refletor de luz visível e radiação térmica.",
        "score": 80
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Muito Alta",
        "justification": "Pode ser transformado em folhas finíssimas (papel alumínio).",
        "score": 95
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Alta",
        "justification": "Pode ser esticado em fios finos para diversas aplicações.",
        "score": 85
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "1 (Al-27)",
        "justification": "Elemento monoisotópico na natureza.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa",
        "justification": "Geralmente considerado seguro, mas o acúmulo excessivo deve ser evitado.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Aplicações Aeroespaciais",
        "value": "Essencial",
        "justification": "Base da indústria aeronáutica devido à relação resistência/peso.",
        "score": 97
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Não é ferromagnético, não sendo atraído por ímãs comuns.",
        "score": 10
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado",
        "justification": "Exige muita eletricidade para extração via eletrólise (Processo Hall-Héroult).",
        "score": 45
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Estável no ambiente, mas a mineração da bauxita requer cuidados.",
        "score": 80
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopo natural Al-27 é completamente estável.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Metal Precioso",
        "justification": "Já foi mais valioso que o ouro no século XIX devido à dificuldade de extração.",
        "score": 99
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
        "label": "Massa Atômica",
        "value": "28.085 u",
        "justification": "O Silício possui uma massa atômica de aproximadamente 28.085 u.",
        "score": 28
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "28.2 %",
        "justification": "É o segundo elemento mais abundante na crosta terrestre, depois do oxigênio.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "1414 °C",
        "justification": "Possui um ponto de fusão elevado, característico de sua estrutura de rede covalente.",
        "score": 85
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "3265 °C",
        "justification": "Sua temperatura de vaporização é extremamente alta.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "2.329 g/cm³",
        "justification": "Densidade relativamente baixa para um semimetal sólido.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "7.0",
        "justification": "Muito duro, capaz de riscar o vidro.",
        "score": 88
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.90",
        "justification": "Valor intermediário, típico de um semimetal.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "149 W/(m·K)",
        "justification": "Boa condutividade térmica para um não-metal.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "1.56 × 10⁻³ S/m",
        "justification": "Semicondutor natural; sua condutividade aumenta com a temperatura.",
        "score": 95
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.705 J/(g·K)",
        "justification": "Capacidade moderada de absorção de calor.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "111 pm",
        "justification": "Raio atômico pequeno, permitindo ligações covalentes fortes.",
        "score": 35
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "8.151 eV",
        "justification": "Energia necessária para remover o primeiro elétron de valência.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Sólido cristalino duro e quebradiço com brilho metálico azul-acinzentado.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Moderada",
        "justification": "Relativamente inerte à temperatura ambiente, mas reage com halogênios.",
        "score": 55
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Reciclável principalmente a partir de componentes eletrônicos e vidros.",
        "score": 85
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Alta",
        "justification": "Forma uma camada passivadora de dióxido de silício (SiO2).",
        "score": 88
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Metálica",
        "justification": "Brilho metálico característico, embora seja um semimetal.",
        "score": 65
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Nula",
        "justification": "Extremamente quebradiço, não pode ser moldado por pressão.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Nula",
        "justification": "Não pode ser esticado em fios.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "3 (Si-28, 29, 30)",
        "justification": "Possui três variantes estáveis na natureza.",
        "score": 80
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa",
        "justification": "Elemento inerte no corpo, mas a inalação de poeira de sílica é perigosa.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Máxima",
        "justification": "Base de todos os microchips, transistores e células solares.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Diamagnético",
        "justification": "Não possui propriedades magnéticas significativas.",
        "score": 5
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Baixo a Médio",
        "justification": "Abundante, mas requer alto grau de pureza para eletrônicos.",
        "score": 60
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Muito Baixo",
        "justification": "Abundante e ecologicamente estável em sua forma natural.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Os isótopos naturais são perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Vale do Silício",
        "justification": "Deu nome à região mais inovadora do planeta devido à sua importância.",
        "score": 95
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
        "value": "Altamente inflamável (Branco)",
        "justification": "O fósforo branco entra em combustão espontânea com o ar.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nutriente vital / Eutrofização",
        "justification": "Essencial para plantas, mas o excesso polui águas.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Tóxico (Branco) / Vital (Compostos)",
        "justification": "Puro é perigoso, mas em fosfatos é base da vida.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fertilizantes, DNA, ATP",
        "justification": "Sem fósforo, não existiria vida como a conhecemos.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3, 5",
        "justification": "Versatilidade para formar estruturas complexas como o DNA.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1000 ppm (crosta)",
        "justification": "Décimo primeiro elemento mais comum na crosta terrestre.",
        "score": 75
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0007%",
        "justification": "Criado em explosões de supernovas massivas.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "30,974 u",
        "justification": "Massa moderada, típica de não-metais do 3º período.",
        "score": 31
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,82 g/cm³ (Branco)",
        "justification": "Relativamente baixa para um sólido.",
        "score": 18
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "110 pm",
        "justification": "Tamanho ideal para pontes de fosfato estáveis.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+5, +3, -3",
        "justification": "Estados variados permitem funções biológicas diversas.",
        "score": 70
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Como não-metal, não conduz eletricidade.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,19",
        "justification": "Similar ao hidrogênio, facilita ligações orgânicas.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Sólido em temperatura ambiente em todas as formas alotrópicas.",
        "score": 20
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p³",
        "justification": "Define sua reatividade e posição no grupo 15.",
        "score": 15
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p³",
        "justification": "Configuração que permite a expansão do octeto.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "15",
        "justification": "Identidade atômica do Fósforo.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "16",
        "justification": "Equilíbrio para o isótopo estável P-31.",
        "score": 16
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "P-31 é o único isótopo natural e é estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Fertilizantes, explosivos, fósforos de segurança",
        "justification": "Uso massivo na agricultura mundial.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Hamburgo, Alemanha",
        "justification": "Descoberto a partir da destilação de urina.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Bioluminescência (Fogo frio)",
        "justification": "O nome significa 'portador de luz' em grego.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Phosphoros (Portador de luz)",
        "justification": "Devido à emissão de luz do fósforo branco.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Hennig Brand",
        "justification": "O primeiro a descobrir um elemento cientificamente.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1669",
        "justification": "Um marco na alquimia virando química.",
        "score": 99
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "44,15 °C (Branco)",
        "justification": "Fusão baixa facilita a manipulação.",
        "score": 44
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "280,5 °C",
        "justification": "Ebulição moderada para um não-metal sólido.",
        "score": 28
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
        "value": "Vulnerável a oxidantes fortes",
        "justification": "Reage com oxigênio e flúor sob certas condições.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Ciclo do enxofre / Chuva ácida",
        "justification": "Vital para proteínas, mas SO₂ causa poluição.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Compostos tóxicos (H₂S)",
        "justification": "O gás H₂S é extremamente letal.",
        "score": 20
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Vulcões, Proteínas, Ácido Sulfúrico",
        "justification": "Pilar da indústria química mundial.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2, 4, 6",
        "justification": "Capacidade de formar múltiplas ligações.",
        "score": 80
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "350 ppm (crosta)",
        "justification": "Comum em minerais e depósitos vulcânicos.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,05%",
        "justification": "Décimo elemento mais abundante no cosmos.",
        "score": 65
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "32,06 u",
        "justification": "Cerca do dobro da massa do oxigênio.",
        "score": 32
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "2,07 g/cm³",
        "justification": "Sólido amarelo denso e quebradiço.",
        "score": 21
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "104 pm",
        "justification": "Similar ao fósforo e cloro.",
        "score": 48
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+6, +4, +2, -2",
        "justification": "Extrema versatilidade em reações redox.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Pobre condutor, usado como isolante térmico.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,58",
        "justification": "Alta afinidade por elétrons, similar ao carbono.",
        "score": 68
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Sólido cristalino amarelo em condições normais.",
        "score": 25
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p⁴",
        "justification": "Quatro elétrons no subnível p da camada de valência.",
        "score": 16
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p⁴",
        "justification": "Falta apenas 2 elétrons para o octeto completo.",
        "score": 88
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "16",
        "justification": "Número atômico que define o Enxofre.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "16",
        "justification": "Equilíbrio nuclear no isótopo mais comum S-32.",
        "score": 16
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "A maioria dos isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Baterias, Pólvora, Vulcanização",
        "justification": "Essencial para a produção de pneus e fertilizantes.",
        "score": 92
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Conhecido desde a antiguidade",
        "justification": "Citado na Bíblia e textos antigos como 'enxofre'.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Cheiro de ovo podre (H₂S)",
        "justification": "Embora o enxofre puro seja inodoro, seus gases são famosos pelo odor.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Sulphurium (Latim)",
        "justification": "Nome clássico mantido pela IUPAC.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Antiguidade",
        "justification": "Um dos poucos elementos conhecidos antes da ciência moderna.",
        "score": 99
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "Pré-histórico",
        "justification": "Usado por egípcios e gregos há milênios.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "115,21 °C",
        "justification": "Derrete facilmente em temperaturas baixas.",
        "score": 115
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "444,6 °C",
        "justification": "Ponto de ebulição alto para um não-metal leve.",
        "score": 44
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
        "value": "Extrema toxicidade em estado livre",
        "justification": "Gás letal que ataca o sistema respiratório.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Purificador de água / Camada de Ozônio",
        "justification": "CFCs danificam o ozônio, mas o Cl₂ salva vidas.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante e corrosivo",
        "justification": "Causa queimaduras químicas e asfixia severa.",
        "score": 10
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Sal de Cozinha (NaCl), Desinfetante",
        "justification": "Fundamental para a preservação de alimentos e saúde pública.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1, 3, 5, 7",
        "justification": "Halogênio com múltiplos estados de oxidação.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "145 ppm (crosta) / 1,9% (oceanos)",
        "justification": "Abundante nos mares na forma de cloretos.",
        "score": 85
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0001%",
        "justification": "Produzido em estrelas massivas via processo S.",
        "score": 35
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "35,45 u",
        "justification": "Média dos isótopos estáveis Cl-35 e Cl-37.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "3,21 g/L",
        "justification": "Cerca de 2,5 vezes mais denso que o ar.",
        "score": 3
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "99 pm",
        "justification": "Raio pequeno, típico de halogênios.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-1, +1, +3, +5, +7",
        "justification": "Versatilidade química incomparável.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Como gás não-metal, não conduz eletricidade.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "3,16",
        "justification": "Um dos elementos mais eletronegativos da tabela.",
        "score": 92
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás",
        "justification": "Gás verde-amarelado de odor sufocante.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p⁵",
        "justification": "Falta apenas 1 elétron para a estabilidade total.",
        "score": 17
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p⁵",
        "justification": "Configuração típica de um halogênio agressivo.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "17",
        "justification": "Número que define a identidade do Cloro.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "18",
        "justification": "Equilíbrio para o isótopo estável Cl-35.",
        "score": 18
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui dois isótopos naturais perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "PVC, Tratamento de Água, Alvejantes",
        "justification": "Essencial para a indústria de plásticos e saneamento.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia",
        "justification": "Identificado por Carl Wilhelm Scheele.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeira arma química",
        "justification": "Infelizmente usado em larga escala na Primeira Guerra Mundial.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Chloros (Verde pálido)",
        "justification": "Homenagem à cor característica do gás puro.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Carl Wilhelm Scheele",
        "justification": "Grande químico sueco do século XVIII.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1774",
        "justification": "Descoberto pouco antes da Revolução Francesa.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-101,5 °C",
        "justification": "Extremamente baixo, típico de elementos moleculares leves.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-34,04 °C",
        "justification": "Gaseifica-se em temperaturas muito frias.",
        "score": 1
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
        "value": "Incapaz de formar ligações",
        "justification": "Gás nobre com estabilidade total.",
        "score": 1
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Totalmente inerte",
        "justification": "Não reage com o ambiente nem causa poluição.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Asfixiante simples",
        "justification": "Seguro em pequenas doses, perigoso apenas se deslocar o O₂.",
        "score": 90
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Lâmpadas Incandescentes, Soldagem",
        "justification": "Essencial para proteger metais da oxidação durante o trabalho.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "0",
        "justification": "Estabilidade máxima por octeto completo.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,93% (atmosfera)",
        "justification": "O terceiro gás mais abundante no ar que respiramos.",
        "score": 92
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,02%",
        "justification": "Décimo primeiro elemento mais comum no cosmos.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "39,948 u",
        "justification": "Curiosamente mais pesado que o potássio seguinte.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,78 g/L",
        "justification": "Mais denso que o nitrogênio e o oxigênio.",
        "score": 2
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "71 pm",
        "justification": "Raio muito pequeno devido à forte atração nuclear.",
        "score": 85
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "0",
        "justification": "Estado de oxidação nulo e estável.",
        "score": 1
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante (Plasma condutor)",
        "justification": "Emite luz azul violeta quando ionizado.",
        "score": 10
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "N/A",
        "justification": "Não atrai elétrons de outros elementos.",
        "score": 1
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás",
        "justification": "Permanece gasoso em quase todas as condições terrestres.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3p⁶",
        "justification": "Configuração de octeto completo e perfeita.",
        "score": 18
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ne] 3s² 3p⁶",
        "justification": "A definição química de estabilidade.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "18",
        "justification": "Número atômico do Argônio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "22",
        "justification": "Equilíbrio nuclear no isótopo mais comum Ar-40.",
        "score": 22
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Núcleo altamente equilibrado e estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Extintores, Laser Azul, Isolamento Térmico",
        "justification": "Usado em janelas duplas para evitar perda de calor.",
        "score": 88
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Escócia",
        "justification": "Descoberto pelo químico Sir William Ramsay.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Atmosfera de Marte",
        "justification": "Representa cerca de 1,9% da atmosfera marciana.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Argos (Preguiçoso)",
        "justification": "Devido à sua total falta de reatividade química.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Lord Rayleigh & William Ramsay",
        "justification": "Descoberta que rendeu Prêmio Nobel.",
        "score": 98
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1894",
        "justification": "Um dos últimos gases da atmosfera a ser identificado.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-189,3 °C",
        "justification": "Fusão extremamente baixa, perto do zero absoluto.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-185,8 °C",
        "justification": "Permanece líquido apenas em temperaturas criogênicas.",
        "score": 1
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
        "value": "Extrema reatividade com água",
        "justification": "Explode violentamente ao contato com umidade.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Fertilizante essencial",
        "justification": "Nutriente indispensável para o crescimento vegetal.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Perigo de hiperpotassemia",
        "justification": "O excesso no sangue pode parar o coração.",
        "score": 30
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Contração muscular, Impulsos nervosos",
        "justification": "Sem ele, o sistema nervoso não funcionaria.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1",
        "justification": "Metal alcalino com 1 elétron de valência.",
        "score": 25
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "2,1% (crosta)",
        "justification": "Sétimo elemento mais comum na crosta terrestre.",
        "score": 88
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0003%",
        "justification": "Criado em supernovas via processo de queima de oxigênio.",
        "score": 45
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "39,098 u",
        "justification": "Massa moderada, similar ao cálcio e argônio.",
        "score": 39
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "0,862 g/cm³",
        "justification": "Menos denso que a água, flutua enquanto reage.",
        "score": 8
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "227 pm",
        "justification": "Um dos maiores raios atômicos da tabela.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1",
        "justification": "Estado único e altamente estável em compostos.",
        "score": 99
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Bom condutor",
        "justification": "Como metal, conduz eletricidade eficientemente.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "0,82",
        "justification": "Muito baixa, tende a perder elétrons facilmente.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal macio que pode ser cortado com uma faca.",
        "score": 20
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4s¹",
        "justification": "Define sua posição no início do 4º período.",
        "score": 19
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 4s¹",
        "justification": "Configuração que explica sua alta reatividade.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "19",
        "justification": "Identidade atômica do Potássio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "20",
        "justification": "Equilíbrio nuclear no isótopo principal K-39.",
        "score": 20
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Ligeiramente Radioativo",
        "justification": "O isótopo K-40 é natural e levemente instável.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Sabões, Vidros, Explosivos",
        "justification": "Uso diversificado na indústria química básica.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Inglaterra",
        "justification": "Isolado via eletrólise por Humphry Davy.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Rico em Bananas",
        "justification": "Alimento famoso por ajudar na prevenção de cãibras.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Pot-ash (Cinzas de pote)",
        "justification": "Antiga forma de extrair carbonato de potássio.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Sir Humphry Davy",
        "justification": "O gênio da eletrólise que isolou vários metais.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1807",
        "justification": "Primeiro metal isolado por meio da eletricidade.",
        "score": 98
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "63,38 °C",
        "justification": "Muito baixo para um metal, derrete em banho-maria.",
        "score": 63
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "759 °C",
        "justification": "Ebulição relativamente baixa comparada a outros metais.",
        "score": 75
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
        "value": "Reativo em estado puro",
        "justification": "Metal alcalino-terroso que reage com o ar e a água.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Regulador de acidez",
        "justification": "Usado para corrigir o pH do solo na agricultura.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Cálculos renais",
        "justification": "O excesso pode se cristalizar nos rins.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ossos, Dentes, Coagulação",
        "justification": "Essencial para a integridade do esqueleto.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2",
        "justification": "Forma ligações iônicas estáveis como Ca²⁺.",
        "score": 30
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "3,4% (crosta)",
        "justification": "Quinto elemento mais abundante na crosta terrestre.",
        "score": 92
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,007%",
        "justification": "Sintetizado em supernovas pelo processo de captura alfa.",
        "score": 55
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "40,078 u",
        "justification": "Cerca do triplo da massa do carbono.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,54 g/cm³",
        "justification": "Leve para um metal estrutural.",
        "score": 15
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "197 pm",
        "justification": "Raio atômico grande, típico de alcalino-terrosos.",
        "score": 75
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2",
        "justification": "Estado de oxidação quase onipresente na natureza.",
        "score": 98
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Bom condutor",
        "justification": "Embora pouco usado para isso, é um metal condutivo.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,00",
        "justification": "Baixa eletronegatividade, característica metálica.",
        "score": 20
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal prateado e razoavelmente duro.",
        "score": 30
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4s²",
        "justification": "Define sua posição no grupo 2.",
        "score": 20
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 4s²",
        "justification": "Configuração que explica sua estabilidade como íon Ca²⁺.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "20",
        "justification": "Número atômico do Cálcio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "20",
        "justification": "Equilíbrio nuclear no isótopo Ca-40.",
        "score": 20
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "A maioria dos isótopos naturais são perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Cimento, Gesso, Laticínios",
        "justification": "Base da construção civil e nutrição humana.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Inglaterra",
        "justification": "Também isolado por Humphry Davy via eletrólise.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Pedra de Calcário",
        "justification": "Formada por restos de conchas e esqueletos marinhos.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Calx (Cal/Pedra)",
        "justification": "Termo latino para cal, usada em construções desde Roma.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Sir Humphry Davy",
        "justification": "O químico que desvendou a natureza dos alcalino-terrosos.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1808",
        "justification": "Isolado logo após o potássio e sódio.",
        "score": 98
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "842 °C",
        "justification": "Fusão alta para um metal leve.",
        "score": 84
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1484 °C",
        "justification": "Ponto de ebulição elevado, típico de metais.",
        "score": 14
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
        "value": "Raridade e custo elevado",
        "justification": "Difícil de extrair e isolar em grandes quantidades.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade",
        "justification": "Não possui papel biológico conhecido, mas é pouco agressivo.",
        "score": 80
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Mínimo",
        "justification": "Considerado seguro em exposições normais.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Ligas Aeroespaciais, Lâmpadas de Vapor",
        "justification": "Aumenta a resistência do alumínio e produz luz solar artificial.",
        "score": 88
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3",
        "justification": "Estado de oxidação mais comum e estável é +3.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "22 ppm (crosta)",
        "justification": "Mais comum que o chumbo, mas muito disperso.",
        "score": 45
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000003%",
        "justification": "Elemento raro no cosmos.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "44,955 u",
        "justification": "O primeiro dos metais de transição leves.",
        "score": 45
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "2,985 g/cm³",
        "justification": "Metal muito leve, pouco mais denso que o alumínio.",
        "score": 30
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "162 pm",
        "justification": "Raio moderado, típico do início do bloco d.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+3",
        "justification": "Quase exclusivamente +3 em seus compostos.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Conduz eletricidade como um metal de transição típico.",
        "score": 55
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,36",
        "justification": "Valor intermediário, caráter metálico pronunciado.",
        "score": 35
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal prateado que desenvolve um tom amarelado no ar.",
        "score": 40
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d¹",
        "justification": "Inaugura o preenchimento dos orbitais d.",
        "score": 21
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹ 4s²",
        "justification": "A configuração base dos metais de transição.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "21",
        "justification": "Número atômico do Escândio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "24",
        "justification": "Estabilidade no isótopo único natural Sc-45.",
        "score": 24
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O Escândio natural não é radioativo.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Tacos de Lacrosse, Peças de Avião",
        "justification": "Usado onde leveza e força são críticas.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia",
        "justification": "Descoberto por Lars Fredrik Nilson na Escandinávia.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Previsto por Mendeleev",
        "justification": "Mendeleev previu suas propriedades como 'Ekaboro'.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Scandia (Escandinávia)",
        "justification": "Homenagem à region onde foi descoberto.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Lars Fredrik Nilson",
        "justification": "Químico sueco que o isolou de minerais raros.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1879",
        "justification": "Confirmou as previsões da Tabela Periódica.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1541 °C",
        "justification": "Fusão alta, característica de metais de transição.",
        "score": 15
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2836 °C",
        "justification": "Ponto de ebulição muito elevado.",
        "score": 28
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
        "value": "Processamento caro",
        "justification": "Difícil de extrair e soldar devido à reatividade com O₂.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Inerte e Seguro",
        "justification": "Não se decompõe nem polui o meio ambiente.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Hipoalergênico",
        "justification": "O metal mais seguro para implantes no corpo humano.",
        "score": 100
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Próteses, Turbinas, Joias",
        "justification": "Alta relação resistência-peso e anticorrosivo.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2, 3, 4",
        "justification": "Pode formar diversos complexos, sendo +4 o mais estável.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,63% (crosta)",
        "justification": "Nono elemento mais abundante na crosta terrestre.",
        "score": 88
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0001%",
        "justification": "Formado em supernovas de colapso de núcleo.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "47,867 u",
        "justification": "Massa moderada para um metal estrutural.",
        "score": 47
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "4,506 g/cm³",
        "justification": "Metade da densidade do aço com força similar.",
        "score": 45
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "147 pm",
        "justification": "Raio compacto que confere grande dureza.",
        "score": 70
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +3, +4",
        "justification": "O estado +4 é o pilar da química do titânio.",
        "score": 92
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Baixa para um metal",
        "justification": "Não é um bom condutor térmico ou elétrico.",
        "score": 25
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,54",
        "justification": "Baixa, mas maior que a dos alcalinos.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal prateado extremamente forte e brilhante.",
        "score": 50
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d²",
        "justification": "Segundo elemento do bloco d.",
        "score": 22
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d² 4s²",
        "justification": "Configuração clássica de um metal de transição.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "22",
        "justification": "Identidade do Titânio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "26",
        "justification": "Número médio de nêutrons nos isótopos estáveis.",
        "score": 26
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O titânio natural é totalmente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Aeroespacial, Medicina, Pigmentos (TiO₂)",
        "justification": "Fundamental para aviões e tintas brancas.",
        "score": 99
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Inglaterra",
        "justification": "Descoberto pelo reverendo William Gregor.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Pode 'crescer' nos ossos",
        "justification": "O osso humano pode se fundir ao titânio (osseointegração).",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Titãs",
        "justification": "Homenagem aos Titãs da mitologia grega, pela sua força.",
        "score": 98
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Gregor",
        "justification": "Clérigo e mineralogista amador inglês.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1791",
        "justification": "Identificado no mineral ilmenita.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1668 °C",
        "justification": "Fusão elevada, exige fornos especiais.",
        "score": 16
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3287 °C",
        "justification": "Extremamente resistente ao calor.",
        "score": 32
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
        "value": "Toxicidade de seus óxidos",
        "justification": "O pentóxido de vanádio é irritante e tóxico se inalado.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Micronutriente em baixas doses",
        "justification": "Essencial para alguns organismos marinhos e algas.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritação respiratória",
        "justification": "Exposição industrial pode causar 'língua verde'.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Aço de Alta Resistência, Ferramentas",
        "justification": "Torna o aço extremamente duro e resistente à fadiga.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2, 3, 4, 5",
        "justification": "Apresenta uma das químicas de coordenação mais ricas.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "120 ppm (crosta)",
        "justification": "Mais comum que o cobre e o zinco na crosta terrestre.",
        "score": 70
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0001%",
        "justification": "Produzido em estrelas massivas via queima de silício.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "50,941 u",
        "justification": "Posicionado entre o titânio e o cromo.",
        "score": 51
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "6,11 g/cm³",
        "justification": "Densidade moderada para um metal de transição.",
        "score": 61
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "134 pm",
        "justification": "Compacto, contribuindo para a dureza de suas ligas.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +3, +4, +5",
        "justification": "Cada estado de oxidação possui uma cor vibrante diferente.",
        "score": 98
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Razoável",
        "justification": "Condutor metálico típico do bloco d.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,63",
        "justification": "Eletronegatividade típica de metais de transição médios.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal cinza prateado, duro e maleável.",
        "score": 60
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d³",
        "justification": "Terceiro elemento da primeira série de transição.",
        "score": 23
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d³ 4s²",
        "justification": "Cinco elétrons de valência para diversas ligações.",
        "score": 92
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "23",
        "justification": "Número atômico do Vanádio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "28",
        "justification": "Estabilidade no isótopo natural V-51.",
        "score": 28
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O vanádio natural é considerado estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Motores a Jato, Chaves de Fenda, Catalisadores",
        "justification": "Indispensável para a metalurgia de alta performance.",
        "score": 96
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "México",
        "justification": "Descoberto por Andrés Manuel del Río.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Camaleão Químico",
        "justification": "Suas soluções mudam de lilás a amarelo conforme a oxidação.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Vanadis (Deusa Freya)",
        "justification": "Homenagem à beleza das cores de seus compostos.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Andrés Manuel del Río",
        "justification": "Cientista hispano-mexicano que o chamou de 'Eritrônio'.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1801",
        "justification": "Redescoberto em 1830 por Nils Gabriel Sefström.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1910 °C",
        "justification": "Ponto de fusão muito alto, metal refratário.",
        "score": 19
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "3407 °C",
        "justification": "Alta estabilidade térmica em estado líquido.",
        "score": 34
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
        "value": "Toxicidade do Cr(VI)",
        "justification": "O cromo hexavalente é cancerígeno e altamente tóxico.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial em traços (Cr III)",
        "justification": "Necessário para o metabolismo da glicose em humanos.",
        "score": 85
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Dermatite e Câncer",
        "justification": "Contato direto ou inalação de Cr(VI) é extremamente perigoso.",
        "score": 15
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Aço Inoxidável, Cromagem, Pigmentos",
        "justification": "Protege metais contra corrosão e confere brilho espelhado.",
        "score": 99
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2 a 6",
        "justification": "Forma complexos octaédricos muito estáveis.",
        "score": 80
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "102 ppm (crosta)",
        "justification": "Elemento comum, encontrado principalmente no mineral cromita.",
        "score": 75
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0015%",
        "justification": "Criado em explosões de supernovas tipo Ia.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "51,996 u",
        "justification": "Massa similar à do ferro e manganês.",
        "score": 52
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "7,19 g/cm³",
        "justification": "Metal denso e muito duro.",
        "score": 72
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "128 pm",
        "justification": "Raio pequeno, contribuindo para sua grande dureza.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +3, +6",
        "justification": "Os estados +3 (seguro) e +6 (tóxico) são os mais comuns.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor metálico eficiente.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,66",
        "justification": "Valor médio para metais de transição.",
        "score": 48
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal cinza-azulado, o mais duro dos metais puros.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁵",
        "justification": "Configuração anômala para ganhar estabilidade (meio preenchido).",
        "score": 24
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁵ 4s¹",
        "justification": "Promove um elétron do 4s para o 3d para maior estabilidade.",
        "score": 98
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "24",
        "justification": "Número atômico do Cromo.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "28",
        "justification": "Equilíbrio nuclear no isótopo principal Cr-52.",
        "score": 28
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui quatro isótopos naturais estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Talheres, Rodas de Carro, Tintas",
        "justification": "Onipresente na metalurgia decorativa e funcional.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Rússia",
        "justification": "Identificado no mineral 'chumbo vermelho da Sibéria'.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Cor dos Rubis",
        "justification": "A cor vermelha do rubi é causada por traços de cromo.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Chroma (Cor)",
        "justification": "Devido à grande variedade de cores de seus compostos.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Louis Nicolas Vauquelin",
        "justification": "Farmacêutico e químico francês do século XVIII.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1797",
        "justification": "Isolado a partir da crocoíta.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1907 °C",
        "justification": "Fusão elevada, superior à do ferro.",
        "score": 19
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2671 °C",
        "justification": "Alta resistência térmica.",
        "score": 26
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
        "value": "Frágil em estado puro",
        "justification": "Duro, porém quebradiço, não pode ser usado sozinho estruturalmente.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Nutriente essencial",
        "justification": "Vital para o processo de fotossíntese nas plantas.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Manganismo",
        "justification": "Inalação crônica pode causar danos neurológicos similares ao Parkinson.",
        "score": 30
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Produção de Aço, Pilhas Alcalinas",
        "justification": "Remaneja impurezas do ferro e armazena energia em baterias.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1 a 7",
        "justification": "Apresenta a maior variedade de estados de oxidação da tabela.",
        "score": 100
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1000 ppm (crosta)",
        "justification": "Décimo segundo elemento mais abundante na crosta terrestre.",
        "score": 85
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0008%",
        "justification": "Sintetizado em estrelas massivas antes de se tornarem supernovas.",
        "score": 35
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "54,938 u",
        "justification": "Situado estrategicamente ao lado do ferro.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "7,43 g/cm³",
        "justification": "Densidade similar à do ferro e do cromo.",
        "score": 74
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "127 pm",
        "justification": "Tamanho atômico que permite fácil integração em ligas metálicas.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-3 a +7",
        "justification": "O permanganato (+7) é um dos oxidantes mais potentes conhecidos.",
        "score": 100
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Pobre para um metal",
        "justification": "Não é um bom condutor elétrico em comparação com o cobre.",
        "score": 15
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,55",
        "justification": "Valor típico dos metais de transição do meio do bloco d.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal duro, cinza-prateado e muito quebradiço.",
        "score": 55
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁵",
        "justification": "Configuração de orbital d exatamente pela metade, muito estável.",
        "score": 25
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁵ 4s²",
        "justification": "Distribuição equilibrada que permite múltiplos estados de valência.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "25",
        "justification": "Identidade do Manganês.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "30",
        "justification": "Equilíbrio nuclear no isótopo único natural Mn-55.",
        "score": 30
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O manganês terrestre é totalmente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Trilhos de Trem, Cofres, Bebidas Energéticas",
        "justification": "Essencial para aços que sofrem alto impacto e para a saúde.",
        "score": 97
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia",
        "justification": "Isolado pelo químico Johan Gottlieb Gahn.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Pinturas Rupestres",
        "justification": "O dióxido de manganês foi usado como pigmento preto há 17.000 anos.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Magnes (Magnético)",
        "justification": "Confundido antigamente com a magnetita, embora o Mn puro não seja magnético.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Johan Gottlieb Gahn",
        "justification": "Colaborador de Scheele, mestre na redução de óxidos.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1774",
        "justification": "Isolado no mesmo ano que o oxigênio e o cloro.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1246 °C",
        "justification": "Fusão moderada para um metal de transição.",
        "score": 12
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2061 °C",
        "justification": "Ebulição relativamente baixa comparada ao ferro.",
        "score": 20
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
        "value": "Vulnerável à oxidação (Ferrugem)",
        "justification": "Desintegra-se na presença de umidade e oxigênio sem proteção.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Ciclo Vital do Ferro",
        "justification": "Essencial para o transporte de elétrons e oxigênio na biosfera.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Anemia ou Hemocromatose",
        "justification": "Tanto a falta quanto o excesso são prejudiciais ao organismo.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Construção Civil, Hemoglobina",
        "justification": "Base da infraestrutura mundial e do transporte de oxigênio no sangue.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "4, 5, 6",
        "justification": "O complexo heme coordena o O₂ através de 6 sítios de ligação.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "5,6% (crosta) / 35% (Terra total)",
        "justification": "O elemento mais abundante na massa total da Terra.",
        "score": 100
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,11%",
        "justification": "Produto final da fusão estelar antes do colapso em supernova.",
        "score": 80
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "55,845 u",
        "justification": "Massa média dos isótopos naturais, sendo o Fe-56 o mais comum.",
        "score": 56
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "7,87 g/cm³",
        "justification": "Metal pesado que define o padrão para densidade industrial.",
        "score": 78
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "126 pm",
        "justification": "Raio ideal para formar estruturas cristalinas robustas.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +3, +6",
        "justification": "Ferroso (+2) e Férrico (+3) são fundamentais na química terrestre.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Moderada",
        "justification": "Conduz bem, mas não tanto quanto o cobre ou alumínio.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,83",
        "justification": "Valor moderado que favorece ligações metálicas e iônicas.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal cinza brilhante, ferromagnético à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁶",
        "justification": "O sexto elemento do bloco d da primeira série.",
        "score": 26
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁶ 4s²",
        "justification": "Configuração que gera o momento magnético do ferro.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "26",
        "justification": "Número que define a essência do Ferro.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "30",
        "justification": "Equilíbrio nuclear no isótopo mais abundante Fe-56.",
        "score": 30
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Núcleo extremamente estável, o 'fundo do poço' da energia nuclear.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Aço, Máquinas, Ferramentas, Sangue",
        "justification": "Sem o ferro, a tecnologia e a respiração parariam.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Mundial (Conhecido desde a Antiguidade)",
        "justification": "Um dos primeiros metais usados pela humanidade.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "O Núcleo da Terra",
        "justification": "O núcleo do nosso planeta é composto majoritariamente por ferro líquido e sólido.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Ferrum",
        "justification": "Palavra latina que deu origem ao símbolo Fe.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido",
        "justification": "Usado por egípcios e sumérios em meteoritos há 5000 anos.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "~3500 a.C.",
        "justification": "A 'Idade do Ferro' marcou uma revolução na história humana.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1538 °C",
        "justification": "Alta temperatura de fusão, essencial para forjas.",
        "score": 15
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2862 °C",
        "justification": "Ebulição típica de metais de transição robustos.",
        "score": 28
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
        "value": "Risco de toxicidade por inalação",
        "justification": "Pó de cobalto pode causar problemas pulmonares sérios.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Componente da Vitamina B12",
        "justification": "Essencial para a síntese de DNA e metabolismo em animais.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Dermatite de contato",
        "justification": "Pode causar alergias de pele em indivíduos sensíveis.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Baterias de Lítio, Superligas, Câncer",
        "justification": "Fundamental para carros elétricos e tratamento radioterápico.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "4, 6",
        "justification": "Forma complexos coloridos, especialmente octaédricos.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "25 ppm (crosta)",
        "justification": "Relativamente raro, frequentemente encontrado com o cobre e níquel.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0003%",
        "justification": "Criado em explosões de supernovas tipo II.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "58,933 u",
        "justification": "Massa ligeiramente superior à do ferro.",
        "score": 59
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "8,90 g/cm³",
        "justification": "Metal denso, similar ao cobre e níquel.",
        "score": 89
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "125 pm",
        "justification": "Compacto, ideal para ligas metálicas resistentes.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +3",
        "justification": "Os estados +2 e +3 dominam sua rica química de coordenação.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor metálico eficiente.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,88",
        "justification": "Valor típico dos metais de transição do grupo 9.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal duro, cinza-azulado e ferromagnético.",
        "score": 80
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁷",
        "justification": "Sétimo elemento da primeira série de transição.",
        "score": 27
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁷ 4s²",
        "justification": "Configuração que confere suas propriedades magnéticas.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "27",
        "justification": "Identidade do Cobalto.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "32",
        "justification": "Equilíbrio nuclear no isótopo natural único Co-59.",
        "score": 32
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Natural Estável / Isot. Co-60 Artif.",
        "justification": "Co-59 é estável, mas Co-60 é uma fonte gama potente.",
        "score": 80
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Motores de Avião, Smartphones, Medicina",
        "justification": "Vital para tecnologia de ponta e saúde.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia",
        "justification": "Isolado pelo químico Georg Brandt.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "O 'Metal do Duende'",
        "justification": "Mineradores alemães achavam que duendes (Kobolds) trocavam prata por esse metal.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Kobold (Duende)",
        "justification": "Nome derivado da superstição de antigos mineradores.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Georg Brandt",
        "justification": "Primeiro a provar que a cor azul do vidro vinha do cobalto.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1735",
        "justification": "Um dos primeiros metais a ser descoberto após a antiguidade.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1495 °C",
        "justification": "Fusão elevada, característica de metais estruturais.",
        "score": 14
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2927 °C",
        "justification": "Extremamente estável em altas temperaturas.",
        "score": 29
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
        "value": "Alergia comum",
        "justification": "Muitas pessoas desenvolvem dermatite ao contato prolongado.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Enzimas Vegetais",
        "justification": "Algumas plantas precisam de níquel para processar ureia.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante e potencialmente cancerígeno",
        "justification": "A inalação de compostos de níquel é perigosa.",
        "score": 25
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Moedas, Baterias, Aço Inoxidável",
        "justification": "Essencial para economia, eletrônicos e metalurgia.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "4, 6",
        "justification": "Forma complexos estáveis, sendo o tetracarbonilo famoso.",
        "score": 60
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "84 ppm (crosta)",
        "justification": "Elemento comum, abundante no núcleo da Terra.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,006%",
        "justification": "Abundante em meteoritos metálicos.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "58,693 u",
        "justification": "Curiosamente mais leve que o cobalto precedente.",
        "score": 58
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "8,908 g/cm³",
        "justification": "Metal denso e resistente.",
        "score": 89
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "124 pm",
        "justification": "Tamanho compacto que favorece dureza.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2",
        "justification": "Estado de oxidação quase onipresente em sua química.",
        "score": 92
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Conduz bem a eletricidade.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,91",
        "justification": "Eletronegatividade elevada para um metal de transição.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal branco-prateado, duro e maleável.",
        "score": 85
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁸",
        "justification": "Oitavo elemento da primeira série de transição.",
        "score": 28
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁸ 4s²",
        "justification": "Configuração que resulta em propriedades ferromagnéticas.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "28",
        "justification": "Número que define o Níquel.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "31",
        "justification": "Número médio de nêutrons em seus isótopos.",
        "score": 31
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui cinco isótopos naturais estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Moedas, Baterias recarregáveis, Turbinas",
        "justification": "Essencial para o armazenamento de energia e aviação.",
        "score": 97
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia",
        "justification": "Isolado por Axel Fredrik Cronstedt.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Núcleo Planetário",
        "justification": "Forma o núcleo da Terra junto com o ferro.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Kupfernickel (Cobre falso)",
        "justification": "Nome dado por mineiros que achavam que era cobre amaldiçoado.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Axel Fredrik Cronstedt",
        "justification": "Cientista sueco que desmistificou o 'cobre falso'.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1751",
        "justification": "Identificado como um novo elemento metálico puro.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1455 °C",
        "justification": "Alta resistência mecânica ao calor.",
        "score": 14
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2913 °C",
        "justification": "Ebulição típica de metais de transição densos.",
        "score": 29
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
        "value": "Oxidação superficial (Zinabre)",
        "justification": "Desenvolve uma pátina verde em contato com o ar úmido.",
        "score": 30
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Antimicrobiano Natural",
        "justification": "Elimina bactérias e vírus em superfícies de contato.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Toxicidade em altas doses",
        "justification": "O excesso pode causar danos ao fígado e rins.",
        "score": 45
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Eletrônica, Fiação, Moedas",
        "justification": "Fundamental para a infraestrutura elétrica global.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2, 4, 6",
        "justification": "Forma complexos estáveis, especialmente em solução aquosa.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "60 ppm (crosta)",
        "justification": "Elemento moderadamente abundante, essencial para a civilização.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,00007%",
        "justification": "Sintetizado em estrelas massivas via captura de nêutrons.",
        "score": 25
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "63,546 u",
        "justification": "Massa moderada, entre o níquel e o zinco.",
        "score": 63
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "8,96 g/cm³",
        "justification": "Metal denso, excelente condutor térmico e elétrico.",
        "score": 89
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "128 pm",
        "justification": "Compacto, favorecendo alta condutividade.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1, +2",
        "justification": "Os estados cuproso (+1) e cúprico (+2) são os mais comuns.",
        "score": 85
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Excelente (Segunda maior)",
        "justification": "Apenas a prata supera o cobre em condutividade.",
        "score": 99
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,90",
        "justification": "Valor elevado que reflete sua nobreza relativa.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal de cor avermelhada característica, maleável e dúctil.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d¹⁰",
        "justification": "Configuração anômala para preencher o orbital d completamente.",
        "score": 29
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s¹",
        "justification": "Promove um elétron do 4s para estabilizar o subnível 3d.",
        "score": 98
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "29",
        "justification": "Identidade atômica do Cobre.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "34",
        "justification": "Equilíbrio nuclear nos isótopos naturais Cu-63 e Cu-65.",
        "score": 34
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O cobre natural é perfeitamente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Fios Elétricos, Tubulações, Esculturas",
        "justification": "Onipresente na vida moderna e na arte.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Mundial (Conhecido desde a Antiguidade)",
        "justification": "Um dos primeiros metais trabalhados pelo homem.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Sangue Azul",
        "justification": "Moluscos e crustáceos usam hemocianina (com cobre) para respirar.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Cuprum (Chipre)",
        "justification": "Ilha mediterrânea famosa por suas minas de cobre na antiguidade.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido",
        "justification": "Usado há mais de 10.000 anos por civilizações antigas.",
        "score": 100
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "~9000 a.C.",
        "justification": "O primeiro metal a ser fundido e moldado.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1084 °C",
        "justification": "Fusão acessível para fundição antiga.",
        "score": 10
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2562 °C",
        "justification": "Alta estabilidade em estado líquido.",
        "score": 25
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
        "value": "Vulnerável a ácidos fortes",
        "justification": "Reage rapidamente com ácidos, liberando gás hidrogênio.",
        "score": 25
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Micronutriente Essencial",
        "justification": "Vital para o crescimento de plantas e animais.",
        "score": 90
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Febre dos fumos metálicos",
        "justification": "A inalação de vapores de óxido de zinco pode causar sintomas de gripe.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Galvanização, Imunidade, Ligas (Latão)",
        "justification": "Protege o aço contra corrosão e é vital para centenas de enzimas.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "4, 5, 6",
        "justification": "Frequentemente forma complexos tetraédricos em sistemas biológicos.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "70 ppm (crosta)",
        "justification": "Elemento comum, extraído principalmente da esfalerita.",
        "score": 65
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,00003%",
        "justification": "Produzido em estrelas massivas via captura de nêutrons lenta.",
        "score": 20
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "65,38 u",
        "justification": "Massa moderada, fechando a primeira série de transição.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "7,134 g/cm³",
        "justification": "Densidade similar à do cromo e estanho.",
        "score": 71
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "134 pm",
        "justification": "Raio atômico moderado.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2",
        "justification": "Quase exclusivamente +2, perdendo os dois elétrons 4s.",
        "score": 98
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Condutor metálico eficiente.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,65",
        "justification": "Valor típico dos metais de transição finais.",
        "score": 45
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal branco-azulado, quebradiço a frio e maleável a calor.",
        "score": 70
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d¹⁰",
        "justification": "Subnível d completamente preenchido, o que define sua baixa reatividade química.",
        "score": 30
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s²",
        "justification": "Configuração de camadas completas e estáveis.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "30",
        "justification": "Identidade do Zinco.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "35",
        "justification": "Equilíbrio nuclear no isótopo principal Zn-64.",
        "score": 35
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui cinco isótopos naturais perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Telhados, Baterias, Suplementos, Cremes",
        "justification": "Versátil, desde a construção civil até a farmacologia.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Índia/China (Conhecido desde a Antiguidade)",
        "justification": "Produzido em escala industrial na Índia muito antes da Europa.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "O 'Dedo de Zinco'",
        "justification": "Estruturas proteicas que usam zinco para se ligar ao DNA.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Zinke (Dente/Ponta)",
        "justification": "Referência à aparência pontiaguda dos cristais no forno.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Andreas Sigismund Marggraf",
        "justification": "Crédito europeu por isolar o metal puro em 1746.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1746 (Isolamento oficial)",
        "justification": "Embora o latão fosse conhecido há milênios, o metal puro veio depois.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "419,5 °C",
        "justification": "Baixo para um metal, facilitando a fundição e galvanização.",
        "score": 42
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "907 °C",
        "justification": "Ebulição baixa, o metal se vaporiza facilmente em fornos comuns.",
        "score": 91
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
        "value": "Ponto de fusão muito baixo",
        "justification": "Derrete a apenas 29,76 °C, tornando-o líquido em dias quentes.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Baixa toxicidade",
        "justification": "Geralmente seguro, mas não possui papel biológico conhecido.",
        "score": 80
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Irritante leve",
        "justification": "O contato prolongado pode causar dermatites leves.",
        "score": 85
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "LEDs, Blu-ray, Termômetros",
        "justification": "Essencial para a optoeletrônica e lasers modernos.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3",
        "justification": "Estado de oxidação mais estável é +3.",
        "score": 40
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "19 ppm (crosta)",
        "justification": "Similar ao lítio e ao chumbo em abundância.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000001%",
        "justification": "Elemento raro, formado por captura de nêutrons em estrelas.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "69,723 u",
        "justification": "Massa média entre o zinco e o germânio.",
        "score": 69
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "5,91 g/cm³",
        "justification": "Curiosamente, é mais denso no estado líquido que no sólido.",
        "score": 59
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "135 pm",
        "justification": "Tamanho típico de elementos do grupo 13.",
        "score": 55
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+3",
        "justification": "Forma compostos estáveis perdendo seus 3 elétrons de valência.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Conduz bem, especialmente no estado líquido.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,81",
        "justification": "Similar ao silício e ao germânio.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (Quase líquido)",
        "justification": "Metal prateado e macio que derrete com o calor da mão.",
        "score": 30
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p¹",
        "justification": "Primeiro elemento com elétrons no subnível 4p.",
        "score": 31
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p¹",
        "justification": "Configuração que define suas propriedades químicas.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "31",
        "justification": "Identidade do Gálio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "39",
        "justification": "Média para o isótopo estável Ga-70.",
        "score": 39
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui dois isótopos naturais perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Arsenieto de Gálio (GaAs), Semicondutores",
        "justification": "Base para micro-ondas e comunicações sem fio.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "França",
        "justification": "Descoberto por Paul-Émile Lecoq de Boisbaudran.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "A Colher que Derrete",
        "justification": "Truque famoso onde uma colher de gálio derrete no chá quente.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Gallia (França)",
        "justification": "Homenagem à pátria do seu descobridor.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Paul-Émile Lecoq de Boisbaudran",
        "justification": "Químico francês que também descobriu o samário e o disprósio.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1875",
        "justification": "Identificado por espectroscopia em uma amostra de blenda.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "29,76 °C",
        "justification": "Um dos pontos de fusão mais baixos entre os metais.",
        "score": 30
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2204 °C",
        "justification": "A maior faixa de temperatura em estado líquido de qualquer metal.",
        "score": 22
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
        "value": "Sensível à temperatura",
        "justification": "Sua condutividade muda drasticamente com o calor.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Neutro",
        "justification": "Não possui papel biológico mas é inofensivo em pequenas quantidades.",
        "score": 85
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Seguro",
        "justification": "Considerado de baixa toxicidade.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fibras Ópticas, Lentes Infravermelhas",
        "justification": "Indispensável para comunicações de alta velocidade e visão noturna.",
        "score": 97
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "4",
        "justification": "Tetravalente, como o silício e o carbono.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1,5 ppm (crosta)",
        "justification": "Elemento relativamente raro na crosta terrestre.",
        "score": 30
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000005%",
        "justification": "Formado em estrelas via captura de nêutrons.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "72,63 u",
        "justification": "Massa moderada, entre o gálio e o arsênio.",
        "score": 72
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "5,323 g/cm³",
        "justification": "Semimetal denso e quebradiço.",
        "score": 53
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "122 pm",
        "justification": "Raio compacto, típico de semimetais.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +4",
        "justification": "O estado +4 é o mais comum e estável.",
        "score": 92
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semicondutor",
        "justification": "Condutividade intermediária entre metais e isolantes.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,01",
        "justification": "Eletronegatividade similar ao silício.",
        "score": 55
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Semimetal prateado, quebradiço e brilhante.",
        "score": 60
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p²",
        "justification": "Segundo elemento da série 4p.",
        "score": 32
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p²",
        "justification": "Configuração que fundamenta suas propriedades semicondutoras.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "32",
        "justification": "Identidade do Germânio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "41",
        "justification": "Média para os isótopos estáveis naturais.",
        "score": 41
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui cinco isótopos naturais, um deles muito levemente radioativo (Ge-76).",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Transistores, Catalisadores, Células Solares",
        "justification": "Vital para a indústria de eletrônicos e polímeros.",
        "score": 96
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Alemanha",
        "justification": "Descoberto por Clemens Winkler.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "O Primeiro Transistor",
        "justification": "O primeiro transistor do mundo foi feito de germânio, não de silício.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Germania (Alemanha)",
        "justification": "Homenagem ao país de origem de Winkler.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Clemens Winkler",
        "justification": "Químico alemão que confirmou a existência do 'Ekasilício'.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1886",
        "justification": "Isolado a partir do mineral argirodita.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "938,25 °C",
        "justification": "Fusão alta, típica de semimetais cristalinos.",
        "score": 93
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2833 °C",
        "justification": "Ponto de ebulição elevado.",
        "score": 28
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
        "value": "Má fama histórica",
        "justification": "Conhecido principalmente como o 'rei dos venenos'.",
        "score": 5
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Poluente de águas",
        "justification": "A contaminação natural de lençóis freáticos é um grave problema ambiental.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Altamente Tóxico",
        "justification": "Pode causar morte rápida ou câncer crônico se ingerido.",
        "score": 1
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Semicondutores, Ligas de Chumbo",
        "justification": "Essencial para lasers e eletrônicos de alta velocidade.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "3, 5",
        "justification": "Pode formar diversos compostos orgânicos e inorgânicos.",
        "score": 70
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1,8 ppm (crosta)",
        "justification": "Raro na crosta, mas amplamente distribuído em minerais.",
        "score": 35
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0000008%",
        "justification": "Elemento raro no cosmos.",
        "score": 2
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "74,921 u",
        "justification": "Massa central do grupo 15.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "5,727 g/cm³",
        "justification": "Densidade moderada para um semimetal.",
        "score": 57
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "119 pm",
        "justification": "Raio atômico compacto.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-3, +3, +5",
        "justification": "Versatilidade química em diversos estados de oxidação.",
        "score": 88
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Semicondutor",
        "justification": "Conduz eletricidade sob certas condições.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,18",
        "justification": "Valor próximo ao do hidrogênio.",
        "score": 58
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Semimetal cinza, quebradiço e com brilho metálico.",
        "score": 50
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p³",
        "justification": "Terceiro elemento da série 4p.",
        "score": 33
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p³",
        "justification": "Cinco elétrons na camada de valência.",
        "score": 92
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "33",
        "justification": "Identidade do Arsênio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "42",
        "justification": "Número de nêutrons no isótopo único natural As-75.",
        "score": 42
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "O arsênio natural é totalmente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Pesticidas (antigamente), Chips, Lasers",
        "justification": "Uso crítico na tecnologia de ponta atual.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Conhecido desde a Antiguidade",
        "justification": "Suas formas minerais foram usadas por gregos e romanos.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Cheiro de Alho",
        "justification": "Quando queimado, o arsênio libera um odor característico de alho.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Arsenikon (Masculino/Forte)",
        "justification": "Termo grego que reflete a força de seus efeitos.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Alberto Magno",
        "justification": "Atribuído ao alquimista alemão do século XIII.",
        "score": 80
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "~1250",
        "justification": "Um dos primeiros elementos a serem isolados individualmente.",
        "score": 98
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "817 °C (sob pressão)",
        "justification": "Sublima-se a 614 °C em pressão normal.",
        "score": 81
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "614 °C (Sublimação)",
        "justification": "Passa direto do sólido para o gás.",
        "score": 61
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
        "value": "Odor desagradável",
        "justification": "Compostos de selênio cheiram a rabanete podre.",
        "score": 20
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Antioxidante Essencial",
        "justification": "Fundamental para combater radicais livres em seres vivos.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Toxicidade em excesso (Selenose)",
        "justification": "Pode causar perda de cabelo e unhas.",
        "score": 40
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fotocélulas, Vidros Vermelhos, Champôs",
        "justification": "Usado em eletrônica solar e tratamento de caspa.",
        "score": 92
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2, 4, 6",
        "justification": "Similar ao enxofre em suas capacidades de ligação.",
        "score": 75
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "0,05 ppm (crosta)",
        "justification": "Elemento raro, mais escasso que o arsênio.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000003%",
        "justification": "Elemento raro no cosmos.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "78,971 u",
        "justification": "Massa característica do grupo 16.",
        "score": 79
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "4,81 g/cm³",
        "justification": "Densidade moderada para um não-metal.",
        "score": 48
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "117 pm",
        "justification": "Tamanho atômico reduzido.",
        "score": 65
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-2, +4, +6",
        "justification": "Versatilidade típica de calcogênios.",
        "score": 88
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Fotocondutor",
        "justification": "Sua condutividade aumenta drasticamente com a luz.",
        "score": 100
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,55",
        "justification": "Eletronegatividade idêntica à do enxofre.",
        "score": 60
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Não-metal que existe em várias formas alotrópicas (cinza, vermelho).",
        "score": 50
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p⁴",
        "justification": "Quarto elemento da série 4p.",
        "score": 34
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p⁴",
        "justification": "Seis elétrons na camada de valência.",
        "score": 94
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "34",
        "justification": "Identidade do Selênio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "45",
        "justification": "Média dos isótopos estáveis naturais.",
        "score": 45
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui cinco isótopos naturais perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Painéis Solares, Retificadores, Vidros",
        "justification": "Fundamental para a conversão de energia e ótica.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Suécia",
        "justification": "Descoberto por Jöns Jacob Berzelius.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Cópia Xerográfica",
        "justification": "As primeiras máquinas de xerox usavam cilindros cobertos de selênio.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Selene (Lua)",
        "justification": "Homenagem à Lua, devido à sua semelhança com o telúrio (Terra).",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Jöns Jacob Berzelius",
        "justification": "Um dos pais da química moderna.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1817",
        "justification": "Identificado como um resíduo na fabricação de ácido sulfúrico.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "221 °C",
        "justification": "Fusão relativamente baixa para um sólido cristalino.",
        "score": 22
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "685 °C",
        "justification": "Ponto de ebulição moderado.",
        "score": 68
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
        "value": "Altamente Corrosivo",
        "justification": "Ataca tecidos humanos e muitos metais agressivamente.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Destruição da Camada de Ozônio",
        "justification": "Halon e brometo de metila são prejudiciais à estratosfera.",
        "score": 15
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Vapores Sufocantes",
        "justification": "Causa queimaduras severas na pele e pulmões.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Extintores de Incêndio, Fotografia",
        "justification": "Essencial para segurança contra fogo e cinema clássico.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1, 3, 5, 7",
        "justification": "Halogênio com múltiplos estados de valência possíveis.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "2,4 ppm (crosta) / 67 ppm (oceanos)",
        "justification": "Mais comum nos mares, na forma de brometos.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,0000007%",
        "justification": "Elemento raro no cosmos.",
        "score": 2
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "79,904 u",
        "justification": "Massa quase igual a 80 unidades.",
        "score": 80
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "3,1028 g/cm³",
        "justification": "Três vezes mais pesado que a água, sendo um líquido.",
        "score": 31
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "114 pm",
        "justification": "Tamanho atômico reduzido.",
        "score": 60
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "-1, +1, +3, +5",
        "justification": "Versatilidade química em diversos estados.",
        "score": 90
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante",
        "justification": "Não-metal, não conduz eletricidade.",
        "score": 1
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "2,96",
        "justification": "Halogênio altamente eletronegativo.",
        "score": 90
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Líquido",
        "justification": "O único não-metal que é líquido à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p⁵",
        "justification": "Quinto elemento da série 4p.",
        "score": 35
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p⁵",
        "justification": "Falta apenas 1 elétron para o octeto completo.",
        "score": 96
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "35",
        "justification": "Identidade do Bromo.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "45",
        "justification": "Equilíbrio nuclear nos isótopos Br-79 e Br-81.",
        "score": 45
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui dois isótopos naturais perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Retardantes de Chama, Purificação de Piscinas",
        "justification": "Fundamental para a segurança e higiene.",
        "score": 94
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "França/Alemanha",
        "justification": "Descoberto independentemente por Balard e Löwig.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Púrpura de Tiro",
        "justification": "O corante real da antiguidade continha bromo extraído de caramujos.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Bromos (Fétido)",
        "justification": "Devido ao seu odor forte e desagradável.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Antoine Jérôme Balard",
        "justification": "Químico francês que publicou a descoberta primeiro.",
        "score": 90
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1826",
        "justification": "Isolado a partir de resíduos de salmouras marinhas.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-7,2 °C",
        "justification": "Congela apenas em temperaturas abaixo de zero.",
        "score": 7
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "58,8 °C",
        "justification": "Evapora facilmente gerando vapores avermelhados.",
        "score": 58
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
        "value": "Totalmente Inerte",
        "justification": "Dificilmente forma qualquer tipo de ligação química.",
        "score": 1
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Neutro",
        "justification": "Não reage com o ambiente nem causa poluição.",
        "score": 100
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Asfixiante simples",
        "justification": "Pode causar asfixia se substituir o oxigênio em locais fechados.",
        "score": 90
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Iluminação de Pistas, Lasers Cirúrgicos",
        "justification": "Essencial para luzes estroboscópicas e medicina de precisão.",
        "score": 88
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "0",
        "justification": "Gás nobre com camada de valência completa.",
        "score": 1
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "1 ppm (atmosfera)",
        "justification": "Gás extremamente raro na atmosfera terrestre.",
        "score": 20
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000004%",
        "justification": "Formado em supernovas e estrelas gigantes.",
        "score": 10
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "83,798 u",
        "justification": "Massa característica do quarto gás nobre.",
        "score": 84
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "3,75 g/L",
        "justification": "Cerca de três vezes mais denso que o ar.",
        "score": 4
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "112 pm",
        "justification": "Raio compacto devido à estabilidade eletrônica.",
        "score": 80
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "0",
        "justification": "Estado de oxidação nulo é a regra.",
        "score": 1
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Isolante (Plasma condutor)",
        "justification": "Emite luz branca-esverdeada quando ionizado.",
        "score": 15
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "3,00",
        "justification": "Valor alto, mas raramente exercido por ser inerte.",
        "score": 90
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Gás",
        "justification": "Gás incolor, inodoro e insípido.",
        "score": 1
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "4p⁶",
        "justification": "Octeto completo no quarto nível.",
        "score": 36
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d¹⁰ 4s² 4p⁶",
        "justification": "Configuração de máxima estabilidade eletrônica.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "36",
        "justification": "Identidade do Criptônio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "48",
        "justification": "Média dos isótopos estáveis naturais.",
        "score": 48
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Possui seis isótopos naturais perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Lâmpadas Fluorescentes, Janelas de Isolamento",
        "justification": "Melhora a eficiência térmica e luminosa.",
        "score": 85
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Inglaterra",
        "justification": "Descoberto por Sir William Ramsay e Morris Travers.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Antigo Padrão do Metro",
        "justification": "O metro foi definido pelo comprimento de onda da luz do criptônio entre 1960 e 1983.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Kryptos (Oculto)",
        "justification": "Devido à dificuldade de encontrá-lo e isolá-lo.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "William Ramsay & Morris Travers",
        "justification": "Descobridores de quase todos os gases nobres.",
        "score": 95
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1898",
        "justification": "Isolado a partir de resíduos de ar líquido.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "-157,37 °C",
        "justification": "Fusão extremamente baixa.",
        "score": 1
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "-153,22 °C",
        "justification": "Permanece gasoso em quase todas as condições terrestres.",
        "score": 1
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
        "value": "Reatividade violenta com água",
        "justification": "Explode ao contato com a umidade do ar.",
        "score": 10
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Inerte em forma de sal",
        "justification": "Pouco impactante na natureza, mas exige cuidado ao manusear o metal.",
        "score": 60
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Queimaduras químicas",
        "justification": "O metal puro reage rapidamente com a umidade da pele.",
        "score": 20
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Relógios Atômicos, GPS",
        "justification": "Essencial para a navegação por satélite e medição precisa do tempo.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "1",
        "justification": "Metal alcalino altamente eletropositivo.",
        "score": 20
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "90 ppm (crosta)",
        "justification": "Relativamente comum, disperso em minerais de potássio.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000001%",
        "justification": "Muito raro no cosmos.",
        "score": 2
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "85,468 u",
        "justification": "Massa atômica considerável para um metal alcalino.",
        "score": 85
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "1,53 g/cm³",
        "justification": "Mais denso que o potássio.",
        "score": 15
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "248 pm",
        "justification": "Raio muito grande, característica de alcalinos pesados.",
        "score": 90
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+1",
        "justification": "Estado de oxidação altamente estável.",
        "score": 98
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Conduz bem a eletricidade, como todo metal.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "0,82",
        "justification": "Muito baixa, perde elétrons facilmente.",
        "score": 10
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido (macio)",
        "justification": "Metal prateado muito macio, quase líquido em dias quentes.",
        "score": 20
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5s¹",
        "justification": "Define sua posição no grupo 1.",
        "score": 37
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 5s¹",
        "justification": "Configuração típica de um metal alcalino reativo.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "37",
        "justification": "Número atômico do Rubídio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "48",
        "justification": "Número de nêutrons no isótopo Rb-85.",
        "score": 48
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Ligeiramente Radioativo",
        "justification": "O isótopo Rb-87 é natural e fracamente radioativo.",
        "score": 60
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "GPS, Pesquisa Quântica",
        "justification": "Vital para tecnologias de ponta em medição.",
        "score": 92
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Alemanha",
        "justification": "Descoberto por Robert Bunsen e Gustav Kirchhoff.",
        "score": 85
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Primeira linha espectral",
        "justification": "Descoberto pela cor vermelha brilhante em seu espectro.",
        "score": 98
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Rubidius (Vermelho intenso)",
        "justification": "Referência às linhas vermelhas em seu espectro.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Bunsen & Kirchhoff",
        "justification": "Inventores da análise espectroscópica.",
        "score": 98
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1861",
        "justification": "Identificado pela espectroscopia atômica.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "39,3 °C",
        "justification": "Ponto de fusão muito baixo, derrete no calor do verão.",
        "score": 39
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "688 °C",
        "justification": "Ponto de ebulição baixo para um metal.",
        "score": 68
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
        "value": "Reativo ao ar",
        "justification": "Como metal alcalino-terroso, reage com oxigênio e umidade.",
        "score": 15
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Neutro",
        "justification": "Não possui papel biológico significativo.",
        "score": 70
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Estrôncio-90 (Radioativo)",
        "justification": "Isótopo radioativo perigoso que se deposita nos ossos.",
        "score": 5
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Fogos de Artifício, Saúde Óssea",
        "justification": "Cor vermelha brilhante e uso medicinal em doenças ósseas.",
        "score": 88
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "2",
        "justification": "Forma ligações iônicas como Sr²⁺.",
        "score": 35
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "360 ppm (crosta)",
        "justification": "Bastante comum na crosta terrestre.",
        "score": 75
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "0,000008%",
        "justification": "Elemento raro no cosmos.",
        "score": 5
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "87,62 u",
        "justification": "Massa moderada.",
        "score": 87
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "2,64 g/cm³",
        "justification": "Densidade baixa para um metal.",
        "score": 26
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "215 pm",
        "justification": "Grande raio atômico, típico de alcalino-terrosos pesados.",
        "score": 85
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2",
        "justification": "Estado de oxidação estável.",
        "score": 95
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Boa",
        "justification": "Conduz eletricidade como um metal alcalino-terroso.",
        "score": 60
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "0,95",
        "justification": "Baixa, perde elétrons facilmente.",
        "score": 15
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Metal prateado, macio e maleável.",
        "score": 40
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "5s²",
        "justification": "Define sua posição no grupo 2.",
        "score": 38
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Kr] 5s²",
        "justification": "Configuração estável para perda de elétrons.",
        "score": 92
      },
      {
        "id": 17,
        "label": "Nº de prótons / Nº de elétrons",
        "value": "38",
        "justification": "Número atômico do Estrôncio.",
        "score": 99
      },
      {
        "id": 18,
        "label": "Nº de nêutrons",
        "value": "50",
        "justification": "Número de nêutrons no isótopo principal Sr-88.",
        "score": 50
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável / Estrôncio-90",
        "justification": "Estrôncio natural é estável, mas isótopos artificiais são radioativos.",
        "score": 75
      },
      {
        "id": 20,
        "label": "Aplicabilidade / Utilidade",
        "value": "Fogos de artifício, Medicamentos (Ranelato de estrôncio)",
        "justification": "Uso em pirotecnia e tratamento de osteoporose.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Escócia",
        "justification": "Nomeado em homenagem a uma vila escocesa (Strontian).",
        "score": 80
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Brilho Escarlate",
        "justification": "A luz vermelha em fogos de artifício é produzida por sais de estrôncio.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Strontian",
        "justification": "Vila na Escócia onde foi descoberto.",
        "score": 95
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Adair Crawford",
        "justification": "Químico escocês que identificou the mineral.",
        "score": 85
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "1790",
        "justification": "Identificado inicialmente em minerais locais.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "777 °C",
        "justification": "Fusão elevada, metal refratário.",
        "score": 77
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "1382 °C",
        "justification": "Ponto de ebulição alto.",
        "score": 13
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
        "label": "Massa Atômica",
        "value": "88.905 u",
        "justification": "O Ítrio possui uma massa atômica de aproximadamente 88.905 u.",
        "score": 89
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "33 ppm",
        "justification": "Relativamente comum, encontrado em quase todos os minerais de terras raras.",
        "score": 65
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "1526 °C",
        "justification": "Possui um ponto de fusão elevado, típico de metais de transição do bloco d.",
        "score": 88
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "3336 °C",
        "justification": "Sua temperatura de vaporização é bastante elevada.",
        "score": 92
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "4.47 g/cm³",
        "justification": "Densidade moderada, similar à do titânio.",
        "score": 45
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "4.0",
        "justification": "Metal razoavelmente duro, mas pode ser cortado com uma serra.",
        "score": 40
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.22",
        "justification": "Baixa eletronegatividade, característica de metais eletropositivos.",
        "score": 30
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "17.2 W/(m·K)",
        "justification": "Condutividade térmica baixa para um metal.",
        "score": 35
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "1.7 MS/m",
        "justification": "Condutor metálico, mas não entre os melhores.",
        "score": 40
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.298 J/(g·K)",
        "justification": "Capacidade térmica moderada.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "180 pm",
        "justification": "Raio atômico grande, permitindo diversas dopagens em cristais.",
        "score": 75
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "6.217 eV",
        "justification": "Primeira energia de ionização necessária para remover um elétron.",
        "score": 58
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal prateado-metálico, estável no ar em forma compacta.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Moderada",
        "justification": "Reage com a água e dissolve-se em ácidos minerais.",
        "score": 60
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Pode ser recuperado de componentes eletrônicos e fósforos de TV antigos.",
        "score": 80
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Boa",
        "justification": "Forma uma camada protetora de óxido quando exposto ao ar.",
        "score": 70
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Prata",
        "justification": "Apresenta um brilho metálico prateado característico.",
        "score": 75
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Alta",
        "justification": "Pode ser moldado e processado industrialmente.",
        "score": 85
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Moderada",
        "justification": "Pode ser transformado em fios e lâminas delgadas.",
        "score": 70
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "1 (Y-89)",
        "justification": "Elemento monoisotópico na natureza.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa a Moderada",
        "justification": "Compostos solúveis são levemente tóxicos se ingeridos.",
        "score": 80
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Máxima",
        "justification": "Indispensável em lasers YAG, supercondutores YBCO e LEDs.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Apresenta uma resposta fraca a campos magnéticos externos.",
        "score": 15
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Alto",
        "justification": "Requer processos químicos complexos de separação de outras terras raras.",
        "score": 25
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Geralmente encontrado em minerais estáveis e de baixo impacto ambiental.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula (Y-89)",
        "justification": "Isótopo natural é estável, isótopos artificiais são usados em medicina.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Ytterby",
        "justification": "Nomeado em homenagem à vila sueca de Ytterby, onde muitos elementos foram descobertos.",
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
        "label": "Massa Atômica",
        "value": "91.224 u",
        "justification": "O Zircônio possui uma massa atômica de aproximadamente 91.224 u.",
        "score": 91
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "165 ppm",
        "justification": "Mais abundante que o cobre e o chumbo, encontrado principalmente no mineral zircão.",
        "score": 75
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "1855 °C",
        "justification": "Possui um ponto de fusão muito elevado, ideal para aplicações de alta temperatura.",
        "score": 90
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "4409 °C",
        "justification": "Sua temperatura de vaporização é extremamente alta.",
        "score": 95
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "6.52 g/cm³",
        "justification": "Metal denso, mas com excelente relação resistência-peso.",
        "score": 65
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "5.0",
        "justification": "Metal duro e resistente ao desgaste mecânico.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.33",
        "justification": "Valor típico dos metais de transição do grupo 4.",
        "score": 35
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "22.7 W/(m·K)",
        "justification": "Condutividade térmica baixa, útil em barreiras térmicas.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "2.4 MS/m",
        "justification": "Condutor metálico razoável.",
        "score": 45
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.278 J/(g·K)",
        "justification": "Capacidade térmica característica de metais pesados.",
        "score": 48
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "160 pm",
        "justification": "Tamanho atômico que permite formar ligas metálicas muito estáveis.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "6.634 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 62
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal branco-acinzentado brilhante, altamente resistente à corrosão.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Baixa (Passivado)",
        "justification": "Forma uma camada de óxido extremamente estável que o protege de quase todos os ácidos.",
        "score": 85
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Amplamente reciclado em indústrias químicas e nucleares.",
        "score": 90
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional",
        "justification": "Resiste a ácidos, álcalis e água salgada melhor que quase qualquer outro metal.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Bom refletor de luz, usado em instrumentos ópticos.",
        "score": 80
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Moderada",
        "justification": "Pode ser trabalhado a quente e a frio.",
        "score": 60
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Boa",
        "justification": "Pode ser esticado em fios, essencial para grades de reatores.",
        "score": 75
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "5 (Zr-90, 91, 92, 94, 96)",
        "justification": "Possui uma das maiores variedades de isótopos estáveis.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Muito Baixa",
        "justification": "Considerado biologicamente inerte.",
        "score": 95
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Essencial para o revestimento de combustível nuclear devido à baixa absorção de nêutrons.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Resposta magnética muito fraca.",
        "score": 10
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado a Alto",
        "justification": "A separação do háfnio (seu 'gêmeo' químico) é difícil e dispendiosa.",
        "score": 40
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Mínimo",
        "justification": "Elemento estável e não tóxico para o ecossistema.",
        "score": 98
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula (Isótopos naturais)",
        "justification": "Isótopos naturais são estáveis ou têm meia-vida extremamente longa.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Zircônia Cúbica",
        "justification": "Seu óxido é a imitação de diamante mais popular do mundo devido ao seu brilho.",
        "score": 90
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
        "label": "Massa Atômica",
        "value": "92.906 u",
        "justification": "O Nióbio possui uma massa atômica de aproximadamente 92.906 u.",
        "score": 93
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "20 ppm",
        "justification": "Elemento estratégico, encontrado principalmente na columbita e pirocloro.",
        "score": 45
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "2477 °C",
        "justification": "Possui um ponto de fusão altíssimo, essencial para tecnologias aeroespaciais.",
        "score": 98
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "4744 °C",
        "justification": "Uma das maiores temperaturas de vaporização entre os metais.",
        "score": 99
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "8.57 g/cm³",
        "justification": "Metal denso, mas extremamente eficiente em pequenas quantidades.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "6.0",
        "justification": "Metal muito duro, comparável ao aço temperado.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.60",
        "justification": "Valor típico que favorece a formação de óxidos estáveis e ligas complexas.",
        "score": 40
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "53.7 W/(m·K)",
        "justification": "Boa condutividade térmica para aplicações estruturais.",
        "score": 60
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "6.7 MS/m",
        "justification": "Excelente condutor, tornando-se supercondutor em baixas temperaturas.",
        "score": 90
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.265 J/(g·K)",
        "justification": "Capacidade térmica característica de metais refratários.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "146 pm",
        "justification": "Tamanho atômico que facilita a dopagem em estruturas de aço.",
        "score": 55
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "6.758 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 65
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal cinza brilhante, maleável quando puro, que adquire pátina azulada.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Baixa (Resistente)",
        "justification": "Inerte a quase todos os ácidos e produtos químicos em temperatura ambiente.",
        "score": 90
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Pode ser recuperado de superligas e componentes aeroespaciais.",
        "score": 85
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional",
        "justification": "Sua camada de óxido é extremamente estável e protetora.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Moderada",
        "justification": "Brilho metálico cinzento característico.",
        "score": 70
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Boa",
        "justification": "Pode ser moldado e trefilado com relativa facilidade quando puro.",
        "score": 80
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Alta",
        "justification": "Pode ser transformado em fios finos para imãs supercondutores.",
        "score": 85
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "1 (Nb-93)",
        "justification": "Elemento monoisotópico na natureza.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa",
        "justification": "Geralmente considerado seguro e hipoalergênico.",
        "score": 95
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Estratégica",
        "justification": "Essencial para a indústria automobilística, espacial e em aparelhos de ressonância magnética (MRI).",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Magnetismo fraco à temperatura ambiente.",
        "score": 15
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado",
        "justification": "Produção dominada mundialmente pelo Brasil (90% do mercado).",
        "score": 50
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Estável e de baixo impacto ambiental direto.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopo natural Nb-93 é completamente estável.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Níobe",
        "justification": "Nomeado em homenagem a Níobe, filha de Tântalo na mitologia grega, devido à sua semelhança química com o Tântalo.",
        "score": 95
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
        "label": "Massa Atômica",
        "value": "95.95 u",
        "justification": "O Molibdênio possui uma massa atômica de aproximadamente 95.95 u.",
        "score": 96
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "1.2 ppm",
        "justification": "Elemento relativamente raro, encontrado principalmente na molibdenita.",
        "score": 30
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "2623 °C",
        "justification": "Possui um dos pontos de fusão mais elevados entre todos os elementos, perdendo para poucos.",
        "score": 99
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "4639 °C",
        "justification": "Sua temperatura de vaporização é extremamente alta.",
        "score": 98
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "10.28 g/cm³",
        "justification": "Metal denso e pesado, contribuindo para sua resistência.",
        "score": 88
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "5.5",
        "justification": "Metal duro e resistente à abrasão.",
        "score": 75
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "2.16",
        "justification": "Valor elevado para um metal de transição, similar ao fósforo.",
        "score": 55
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "138 W/(m·K)",
        "justification": "Boa condutividade térmica para aplicações de engenharia.",
        "score": 80
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "18.0 MS/m",
        "justification": "Condutor elétrico eficiente.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.251 J/(g·K)",
        "justification": "Baixo calor específico, aquece rapidamente sob carga.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "139 pm",
        "justification": "Tamanho compacto que confere dureza a suas ligas.",
        "score": 55
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "7.092 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 68
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal cinza prateado, muito duro e com alto brilho metálico.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Moderada (Estável)",
        "justification": "Não reage com oxigênio ou água à temperatura ambiente.",
        "score": 70
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Muito valorizado e reciclado a partir de sucatas de aço.",
        "score": 90
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excelente",
        "justification": "Melhora significativamente a resistência ao pite (corrosão localizada) do aço inoxidável.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Excelente brilho prateado.",
        "score": 75
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Moderada",
        "justification": "Difícil de trabalhar em temperatura ambiente, mas maleável quando aquecido.",
        "score": 60
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Boa",
        "justification": "Pode ser transformado em filamentos e suportes de alta temperatura.",
        "score": 75
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "7 (Mo-92, 94, 95, 96, 97, 98, 100)",
        "justification": "Possui uma ampla gama de isótopos naturais.",
        "score": 96
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa (Micronutriente)",
        "justification": "Essencial para plantas e animais, mas o excesso pode ser prejudicial.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Vital para ligas de aço, eletrodos de fornos e lubrificantes de alta performance.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Fracamente atraído por campos magnéticos.",
        "score": 10
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado a Alto",
        "justification": "Extraído como subproduto do cobre ou de minas dedicadas.",
        "score": 45
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Relativamente seguro no ambiente devido à sua estabilidade.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula (Isótopos naturais)",
        "justification": "Isótopos naturais são estáveis ou têm meia-vida imensa.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Guerra",
        "justification": "Foi o 'metal secreto' da Primeira Guerra Mundial, usado para blindar os canhões alemães.",
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
        "label": "Massa Atômica",
        "value": "98 u",
        "justification": "Massa do isótopo mais estável (Tc-98), embora o Tc-99m seja o mais usado.",
        "score": 98
      },
      {
        "id": 2,
        "label": "Abundância na Natureza",
        "value": "Vestigial",
        "justification": "Não ocorre naturalmente na Terra de forma significativa; quase todo o tecnécio é produzido artificialmente.",
        "score": 1
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "2157 °C",
        "justification": "Possui um ponto de fusão elevado, típico de metais de transição refratários.",
        "score": 88
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "4265 °C",
        "justification": "Sua temperatura de vaporização é muito alta.",
        "score": 92
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "11.0 g/cm³",
        "justification": "Metal denso, similar à densidade do chumbo.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "5.0 (Est.)",
        "justification": "Dureza moderada para um metal de transição.",
        "score": 60
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.9",
        "justification": "Valor moderado, similar ao do ferro e manganês.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "50.6 W/(m·K)",
        "justification": "Condutividade térmica razoável.",
        "score": 55
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "6.7 MS/m",
        "justification": "Condutor metálico eficiente.",
        "score": 60
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.21 J/(g·K)",
        "justification": "Baixa capacidade térmica.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "136 pm",
        "justification": "Raio atômico compacto.",
        "score": 55
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "7.28 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal cinza prateado, que escurece lentamente em ar úmido.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Moderada",
        "justification": "Dissolve-se em água régia e ácido nítrico concentrado.",
        "score": 65
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Baixa",
        "justification": "Difícil de reciclar devido à sua radioatividade.",
        "score": 10
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional (Superficial)",
        "justification": "O íon pertecnetato (TcO4-) é um inibidor de corrosão extremamente poderoso para o aço.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Metálica",
        "justification": "Brilho metálico cinzento característico.",
        "score": 70
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Nula (Frágil)",
        "justification": "Geralmente quebradiço, não é adequado para moldagem mecânica.",
        "score": 10
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Nula",
        "justification": "Não pode ser transformado em fios.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "0",
        "justification": "É o elemento mais leve que não possui nenhum isótopo estável.",
        "score": 1
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Moderada (Radioativa)",
        "justification": "O perigo principal é a exposição à radiação ionizante.",
        "score": 30
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Alta",
        "justification": "Dominado pela medicina nuclear, especialmente em cintilografias (Tc-99m).",
        "score": 98
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Resposta magnética fraca.",
        "score": 15
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Extremo",
        "justification": "Deve ser produzido em reatores nucleares ou aceleradores.",
        "score": 5
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Moderado",
        "justification": "Deve ser gerido com cuidado devido ao seu longo tempo de decaimento (Tc-99).",
        "score": 50
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Total",
        "justification": "Todos os seus isótopos são radioativos.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Artificial",
        "justification": "Foi o primeiro elemento a ser produzido artificialmente pelo homem.",
        "score": 100
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
        "label": "Massa Atômica",
        "value": "101.07 u",
        "justification": "O Rutênio possui uma massa atômica de aproximadamente 101.07 u.",
        "score": 101
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.001 ppm",
        "justification": "Um dos metais mais raros da Terra, encontrado em minérios de platina.",
        "score": 10
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "2334 °C",
        "justification": "Possui um ponto de fusão muito alto, característico dos metais do grupo da platina.",
        "score": 95
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "4150 °C",
        "justification": "Sua temperatura de vaporização é extremamente elevada.",
        "score": 90
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "12.45 g/cm³",
        "justification": "Metal muito denso e pesado.",
        "score": 92
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "6.5",
        "justification": "Metal muito duro, usado para aumentar a dureza da platina e do paládio.",
        "score": 85
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "2.2",
        "justification": "Valor alto para um metal, indicando sua nobreza química.",
        "score": 60
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "117 W/(m·K)",
        "justification": "Boa condutividade térmica para um metal de transição pesado.",
        "score": 75
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "14.0 MS/m",
        "justification": "Excelente condutor, usado em contatos elétricos de alta confiabilidade.",
        "score": 85
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.238 J/(g·K)",
        "justification": "Baixa capacidade térmica, aquece rapidamente.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "134 pm",
        "justification": "Raio atômico compacto que favorece sua dureza.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "7.361 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 72
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal branco prateado, duro e quebradiço.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Muito Baixa",
        "justification": "Inerte à maioria dos produtos químicos; não é atacado por ácidos frios ou água régia.",
        "score": 95
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Máxima",
        "justification": "Altamente valorizado e quase totalmente reciclado de catalisadores industriais.",
        "score": 100
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional",
        "justification": "Um dos metais mais resistentes à corrosão conhecidos.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Excelente brilho metálico prateado.",
        "score": 80
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Baixa",
        "justification": "Geralmente quebradiço, difícil de moldar sem aquecimento extremo.",
        "score": 20
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Baixa",
        "justification": "Não é facilmente esticado em fios quando puro.",
        "score": 20
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "7 (Ru-96, 98, 99, 100, 101, 102, 104)",
        "justification": "Possui uma das maiores coleções de isótopos estáveis da tabela.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Moderada",
        "justification": "Seus compostos, especialmente o tetróxido de rutênio, são altamente voláteis e tóxicos.",
        "score": 40
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Essencial para a indústria eletrônica, catalisadores químicos e armazenamento de dados (discos rígidos).",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Resposta magnética fraca.",
        "score": 15
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Muito Alto",
        "justification": "Preço elevado devido à sua extrema raridade e complexidade de extração.",
        "score": 15
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Metal estável que não se degrada ou polui facilmente em forma metálica.",
        "score": 90
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula (Isótopos naturais)",
        "justification": "Isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Rússia",
        "justification": "Nomeado em homenagem à Rússia (Ruthenia em latim), país onde foi descoberto.",
        "score": 95
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
        "label": "Massa Atômica",
        "value": "102.91 u",
        "justification": "O Ródio possui uma massa atômica de aproximadamente 102.91 u.",
        "score": 103
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.0002 ppm",
        "justification": "Extremamente raro, sendo um dos elementos menos abundantes da crosta terrestre.",
        "score": 5
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "1964 °C",
        "justification": "Possui um ponto de fusão elevado, típico dos metais nobres.",
        "score": 92
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "3695 °C",
        "justification": "Sua temperatura de vaporização é alta.",
        "score": 88
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "12.41 g/cm³",
        "justification": "Metal denso, similar à densidade do rutênio e do paládio.",
        "score": 90
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "6.0",
        "justification": "Metal duro para os padrões dos metais nobres.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "2.28",
        "justification": "Eletronegatividade elevada, refletindo sua baixa reatividade química.",
        "score": 65
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "150 W/(m·K)",
        "justification": "Excelente condutividade térmica.",
        "score": 85
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "21.0 MS/m",
        "justification": "Ótimo condutor elétrico, usado em contatos de alta performance.",
        "score": 90
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.243 J/(g·K)",
        "justification": "Baixa capacidade térmica.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "134 pm",
        "justification": "Raio atômico compacto.",
        "score": 55
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "7.459 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal branco-prateado, brilhante e altamente reflexivo.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Muito Baixa",
        "justification": "Altamente resistente à oxidação e ao ataque de ácidos.",
        "score": 98
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Máxima",
        "justification": "Extremamente valioso e recuperado de catalisadores automotivos.",
        "score": 100
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional",
        "justification": "Não mancha e resiste a quase todos os agentes corrosivos.",
        "score": 100
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Máxima",
        "justification": "Uma das maiores refletividades conhecidas, especialmente para luz visível.",
        "score": 100
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Baixa",
        "justification": "Difícil de moldar quando puro devido à sua dureza.",
        "score": 30
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Moderada",
        "justification": "Pode ser esticado em fios quando aquecido.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "1 (Rh-103)",
        "justification": "Elemento monoisotópico na natureza.",
        "score": 98
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Muito Baixa",
        "justification": "Metal nobre inerte e seguro para o contato humano.",
        "score": 98
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Essencial para conversores catalíticos que reduzem a poluição do ar.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Resposta magnética muito fraca.",
        "score": 10
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Extremo",
        "justification": "Muitas vezes o metal mais caro do mundo, devido à sua extrema raridade.",
        "score": 1
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Mínimo",
        "justification": "Elemento estável e benéfico ao meio ambiente via catalisadores.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopo natural Rh-103 é estável.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Rosa",
        "justification": "Seu nome vem do grego 'rhodon' (rosa), devido à cor de seus sais em solução.",
        "score": 95
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
        "label": "Massa Atômica",
        "value": "106.42 u",
        "justification": "O Paládio possui uma massa atômica de aproximadamente 106.42 u.",
        "score": 106
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.015 ppm",
        "justification": "Metal raro do grupo da platina, mas mais comum que o ródio.",
        "score": 25
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "1554.9 °C",
        "justification": "O menor ponto de fusão entre os metais do grupo da platina.",
        "score": 88
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "2963 °C",
        "justification": "Temperatura de vaporização moderada para um metal nobre.",
        "score": 82
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "12.02 g/cm³",
        "justification": "O menos denso dos metais do grupo da platina.",
        "score": 89
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "4.75",
        "justification": "Metal relativamente macio, similar à dureza da platina.",
        "score": 65
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "2.20",
        "justification": "Valor típico de metais nobres, conferindo estabilidade química.",
        "score": 60
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "71.8 W/(m·K)",
        "justification": "Condutividade térmica razoável.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "9.5 MS/m",
        "justification": "Bom condutor metálico.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.244 J/(g·K)",
        "justification": "Capacidade térmica característica de metais pesados.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "137 pm",
        "justification": "Tamanho ideal para interagir com o hidrogênio.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "8.337 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal branco-prateado, brilhante e dúctil.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Baixa (Resistente)",
        "justification": "Resiste à oxidação em condições normais, mas é atacado por ácidos nítrico e sulfúrico quentes.",
        "score": 85
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Máxima",
        "justification": "Muito valioso e amplamente recuperado de eletrônicos e catalisadores.",
        "score": 100
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Alta",
        "justification": "Excelente resistência à corrosão atmosférica.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Excelente brilho prateado, usado em joalheria.",
        "score": 85
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Alta",
        "justification": "Muito fácil de trabalhar e moldar.",
        "score": 90
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Excelente",
        "justification": "Pode ser esticado em fios finíssimos, como o ouro.",
        "score": 95
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "6 (Pd-102, 104, 105, 106, 108, 110)",
        "justification": "Possui uma ampla gama de isótopos naturais.",
        "score": 96
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa",
        "justification": "Metal nobre inerte e seguro para o contato humano e em implantes dentários.",
        "score": 95
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Indispensável para conversores catalíticos e purificação de hidrogênio.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Resposta magnética fraca.",
        "score": 15
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Muito Alto",
        "justification": "Metal precioso com alta demanda industrial e joalheira.",
        "score": 10
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Elemento estável e protetor ambiental via catalisadores.",
        "score": 98
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopos naturais são perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Palas",
        "justification": "Nomeado em homenagem ao asteroide Palas, descoberto pouco antes do elemento.",
        "score": 90
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
        "label": "Massa Atômica",
        "value": "107.87 u",
        "justification": "A Prata possui uma massa atômica de aproximadamente 107.87 u.",
        "score": 108
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.075 ppm",
        "justification": "Metal precioso raro, cerca de 20 vezes mais abundante que o ouro.",
        "score": 40
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "961.8 °C",
        "justification": "Possui um ponto de fusão moderado para um metal de transição.",
        "score": 96
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "2162 °C",
        "justification": "Sua temperatura de vaporização é elevada.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "10.49 g/cm³",
        "justification": "Metal denso, mas mais leve que o chumbo.",
        "score": 88
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "2.5",
        "justification": "Metal relativamente macio, mais duro que o ouro mas mais macio que o cobre.",
        "score": 25
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.93",
        "justification": "Eletronegatividade moderada, característica de metais nobres.",
        "score": 55
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "429 W/(m·K)",
        "justification": "A maior condutividade térmica de todos os metais.",
        "score": 100
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "63 MS/m",
        "justification": "O melhor condutor elétrico conhecido, superando o cobre.",
        "score": 100
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.235 J/(g·K)",
        "justification": "Capacidade térmica característica de metais pesados.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "144 pm",
        "justification": "Tamanho atômico médio.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "7.576 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 75
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal de cor branca brilhante, o metal mais reflexivo da tabela.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Baixa (Nobre)",
        "justification": "Não oxida facilmente no ar, mas reage com compostos de enxofre (escurecimento).",
        "score": 80
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Máxima",
        "justification": "Altamente valorizado e intensamente reciclado em todo o mundo.",
        "score": 100
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Alta",
        "justification": "Excelente resistência à oxidação e à maioria dos ácidos orgânicos.",
        "score": 90
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Máxima (Visível)",
        "justification": "O elemento que melhor reflete a luz visível (cerca de 95%).",
        "score": 100
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Muito Alta",
        "justification": "Um dos metais mais maleáveis, superado apenas pelo ouro.",
        "score": 95
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Muito Alta",
        "justification": "Pode ser esticado em fios extremamente finos.",
        "score": 95
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "2 (Ag-107, 109)",
        "justification": "A prata natural é composta por dois isótopos quase na mesma proporção.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa (Antimicrobiano)",
        "justification": "Segura para humanos, mas letal para bactérias e fungos (oligodinamismo).",
        "score": 100
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Indispensável para eletrônica, painéis solares e purificação de água.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Diamagnético",
        "justification": "Não possui propriedades magnéticas; é ligeiramente repelida por ímãs.",
        "score": 5
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Precioso",
        "justification": "Metal com alto valor de mercado e custo de mineração significativo.",
        "score": 20
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Elemento estável, embora nanopartículas de prata devem ser geridas.",
        "score": 95
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopos naturais são estáveis.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Argentina",
        "justification": "O país Argentina recebeu seu nome devido ao termo latim para prata (argentum).",
        "score": 95
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
        "label": "Massa Atômica",
        "value": "112.41 u",
        "justification": "O Cádmio possui uma massa atômica de aproximadamente 112.41 u.",
        "score": 112
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.15 ppm",
        "justification": "Elemento raro, geralmente encontrado em minérios de zinco.",
        "score": 25
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "321.1 °C",
        "justification": "Possui um ponto de fusão baixo para um metal de transição.",
        "score": 32
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "767 °C",
        "justification": "Temperatura de vaporização relativamente baixa, facilitando seu refino.",
        "score": 77
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "8.65 g/cm³",
        "justification": "Metal denso, similar ao ferro e ao cobre.",
        "score": 86
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "2.0",
        "justification": "Metal muito macio, pode ser cortado com uma faca.",
        "score": 20
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.69",
        "justification": "Valor típico de metais do grupo 12.",
        "score": 45
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "96.6 W/(m·K)",
        "justification": "Condutividade térmica razoável.",
        "score": 65
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "13.8 MS/m",
        "justification": "Bom condutor elétrico.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.232 J/(g·K)",
        "justification": "Baixa capacidade térmica.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "151 pm",
        "justification": "Raio atômico moderado.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "8.993 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 85
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal branco-azulado, maleável e brilhante.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Moderada",
        "justification": "Lentamente atacado pelo ar úmido; dissolve-se rapidamente em ácidos.",
        "score": 60
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Média",
        "justification": "Reciclado principalmente de baterias Ni-Cd, mas com rigorosos controles ambientais.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excepcional",
        "justification": "Excelente para galvanoplastia, protegendo outros metais em ambientes marinhos.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Metálica",
        "justification": "Brilho metálico característico.",
        "score": 60
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Alta",
        "justification": "Pode ser facilmente moldado em folhas.",
        "score": 85
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Boa",
        "justification": "Pode ser esticado em fios.",
        "score": 75
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "6 (Cd-106, 108, 110, 111, 112, 114)",
        "justification": "Possui uma ampla variedade de isótopos naturais estáveis.",
        "score": 95
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Extrema",
        "justification": "Metal pesado altamente tóxico; o acúmulo no corpo causa danos severos aos rins e ossos (itai-itai).",
        "score": 1
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Alta",
        "justification": "Vital para baterias recarregáveis, painéis solares (CdTe) e controle de nêutrons em reatores.",
        "score": 90
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Diamagnético",
        "justification": "Repelido fracamente por campos magnéticos.",
        "score": 5
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado",
        "justification": "Geralmente obtido como subproduto da mineração de zinco.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Extremo",
        "justification": "Grave poluente ambiental; deve ser descartado com rigorosa segurança.",
        "score": 1
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula (Isótopos naturais)",
        "justification": "Isótopos naturais são estáveis ou têm meia-vida imensa.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Calamina",
        "justification": "Descoberto como uma impureza na calamina (minério de zinco) pelo químico Friedrich Stromeyer.",
        "score": 85
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
        "label": "Massa Atômica",
        "value": "114.82 u",
        "justification": "O Índio possui uma massa atômica de aproximadamente 114.82 u.",
        "score": 115
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.25 ppm",
        "justification": "Elemento raro, comparável à prata em escassez, obtido principalmente de resíduos de zinco.",
        "score": 20
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "156.6 °C",
        "justification": "Possui um ponto de fusão muito baixo para um metal, ideal para soldas especiais.",
        "score": 16
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "2072 °C",
        "justification": "Sua temperatura de vaporização é moderada.",
        "score": 80
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "7.31 g/cm³",
        "justification": "Densidade similar à do ferro e estanho.",
        "score": 73
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "1.2",
        "justification": "Extremamente macio, pode ser riscado com a unha e mastigado como chiclete.",
        "score": 10
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.78",
        "justification": "Valor típico dos metais do bloco p do grupo 13.",
        "score": 45
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "81.8 W/(m·K)",
        "justification": "Boa condutividade térmica, usado em interfaces térmicas de alta performance.",
        "score": 70
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "12.0 MS/m",
        "justification": "Bom condutor metálico.",
        "score": 75
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.233 J/(g·K)",
        "justification": "Baixa capacidade térmica.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "167 pm",
        "justification": "Tamanho atômico que facilita a formação de ligas maleáveis.",
        "score": 65
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "5.786 eV",
        "justification": "Baixa energia de ionização, facilitando a perda de elétrons.",
        "score": 55
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal branco-prateado, brilhante e extremamente dúctil.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Baixa",
        "justification": "Estável no ar e na água; dissolve-se em ácidos minerais.",
        "score": 70
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Muito recuperado de descartes de telas de LCD e smartphones.",
        "score": 85
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Boa",
        "justification": "Resistente à oxidação em condições normais.",
        "score": 80
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Excelente refletor de luz, similar à prata, mas não mancha tão facilmente.",
        "score": 85
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Extrema",
        "justification": "Permanece maleável mesmo em temperaturas próximas ao zero absoluto.",
        "score": 100
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Máxima",
        "justification": "Pode ser deformado plasticamente quase sem limites.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "2 (In-113, 115)",
        "justification": "O In-115 é ligeiramente radioativo, mas com meia-vida trilhões de vezes a idade do universo.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa",
        "justification": "Geralmente considerado seguro no manuseio metálico, mas compostos devem ser evitados.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Crítica",
        "justification": "Essencial para o Óxido de Índio e Estanho (ITO) usado em telas touchscreen.",
        "score": 100
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Diamagnético",
        "justification": "Repelido fracamente por campos magnéticos.",
        "score": 5
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Alto",
        "justification": "Preço elevado devido à raridade e alta demanda tecnológica.",
        "score": 25
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Elemento estável com baixo impacto ambiental direto.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Quase Nula",
        "justification": "O isótopo In-115 é radioativo, mas de forma insignificante na prática.",
        "score": 99
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Indigo",
        "justification": "Nomeado devido à linha espectral azul indigo brilhante que emite.",
        "score": 95
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
        "label": "Massa Atômica",
        "value": "118.71 u",
        "justification": "O Estanho possui uma massa atômica de aproximadamente 118.71 u.",
        "score": 119
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "2.3 ppm",
        "justification": "Elemento moderadamente raro, extraído principalmente da cassiterita.",
        "score": 35
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "231.9 °C",
        "justification": "Possui um ponto de fusão muito baixo, ideal para soldas e fundição fácil.",
        "score": 23
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "2602 °C",
        "justification": "Temperatura de vaporização elevada, permitindo uma ampla faixa no estado líquido.",
        "score": 85
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "7.26 g/cm³ (Branco)",
        "justification": "Densidade moderada, similar à do ferro.",
        "score": 73
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "1.5",
        "justification": "Metal muito macio e fácil de cortar.",
        "score": 15
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "1.96",
        "justification": "Valor típico de metais do grupo 14, similar ao germânio.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "66.8 W/(m·K)",
        "justification": "Condutividade térmica razoável.",
        "score": 60
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "9.1 MS/m",
        "justification": "Bom condutor metálico.",
        "score": 70
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.227 J/(g·K)",
        "justification": "Baixa capacidade térmica.",
        "score": 40
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "140 pm",
        "justification": "Tamanho atômico que favorece la formação de ligas metálicas estáveis.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "7.344 eV",
        "justification": "Energia necessária para remover o primeiro elétron.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Metal prateado brilhante (Estanho Branco), que pode se transformar em pó cinza (Estanho Cinza) no frio intenso.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Baixa",
        "justification": "Não oxida facilmente no ar, sendo usado para revestir outros metais (folha de flandres).",
        "score": 80
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Amplamente reciclado de latas de conserva e componentes eletrônicos.",
        "score": 90
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Excelente",
        "justification": "Altamente resistente à água e a ácidos orgânicos fracos.",
        "score": 95
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Bom refletor, historicamente usado em espelhos.",
        "score": 80
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Muito Alta",
        "justification": "Pode ser martelado em folhas finíssimas (papel de estanho).",
        "score": 95
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Moderada",
        "justification": "Pode ser esticado em fios, mas é menos dúctil que o cobre.",
        "score": 65
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "10",
        "justification": "O elemento com o maior número de isótopos estáveis em toda a tabela periódica.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Baixa (Metálico)",
        "justification": "Metal inerte e seguro para embalagens de alimentos, mas compostos organoestânicos são tóxicos.",
        "score": 90
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Alta",
        "justification": "Essencial para soldas eletrônicas, revestimentos anticorrosivos e na fabricação de vidro plano.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Paramagnético",
        "justification": "Resposta magnética insignificante.",
        "score": 5
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado",
        "justification": "Preço de mercado estável, com produção industrial bem estabelecida.",
        "score": 55
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Baixo",
        "justification": "Metal estável e de baixo impacto ambiental direto.",
        "score": 92
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopos naturais são perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Bronze",
        "justification": "Sua liga com o cobre deu início à Idade do Bronze, transformando a história humana.",
        "score": 100
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
        "label": "Massa Atômica",
        "value": "121.76 u",
        "justification": "O Antimônio possui uma massa atômica de aproximadamente 121.76 u.",
        "score": 122
      },
      {
        "id": 2,
        "label": "Abundância na Crosta",
        "value": "0.2 ppm",
        "justification": "Elemento raro, encontrado principalmente na estibina (Sb2S3).",
        "score": 20
      },
      {
        "id": 3,
        "label": "Ponto de Fusão",
        "value": "630.6 °C",
        "justification": "Possui um ponto de fusão moderado para um semimetal.",
        "score": 63
      },
      {
        "id": 4,
        "label": "Ponto de Ebulição",
        "value": "1587 °C",
        "justification": "Sua temperatura de vaporização é relativamente baixa.",
        "score": 75
      },
      {
        "id": 5,
        "label": "Densidade",
        "value": "6.68 g/cm³",
        "justification": "Densidade moderada, similar à do magnésio pesado ou zinco.",
        "score": 67
      },
      {
        "id": 6,
        "label": "Dureza de Mohs",
        "value": "3.0",
        "justification": "Semimetal relativamente macio, mas quebradiço.",
        "score": 30
      },
      {
        "id": 7,
        "label": "Eletronegatividade",
        "value": "2.05",
        "justification": "Valor intermediário que reflete seu caráter semimetálico.",
        "score": 55
      },
      {
        "id": 8,
        "label": "Condutividade Térmica",
        "value": "24.4 W/(m·K)",
        "justification": "Condutividade térmica baixa em comparação aos metais.",
        "score": 40
      },
      {
        "id": 9,
        "label": "Condutividade Elétrica",
        "value": "2.5 MS/m",
        "justification": "Pobre condutor elétrico, mas sua condutividade pode ser ajustada.",
        "score": 45
      },
      {
        "id": 10,
        "label": "Calor Específico",
        "value": "0.207 J/(g·K)",
        "justification": "Baixa capacidade térmica.",
        "score": 35
      },
      {
        "id": 11,
        "label": "Raio Atômico",
        "value": "140 pm",
        "justification": "Tamanho atômico moderado.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Energia de Ionização",
        "value": "8.608 eV",
        "justification": "Energia de ionização elevada, característica de elementos do bloco p.",
        "score": 80
      },
      {
        "id": 13,
        "label": "Estado Físico (CNTP)",
        "value": "Sólido",
        "justification": "Semimetal cristalino azul-esbranquiçado, brilhante e muito quebradiço.",
        "score": 99
      },
      {
        "id": 14,
        "label": "Reatividade Química",
        "value": "Moderada",
        "justification": "Estável à temperatura ambiente, mas oxida-se quando aquecido.",
        "score": 60
      },
      {
        "id": 15,
        "label": "Reciclabilidade",
        "value": "Alta",
        "justification": "Muito recuperado de baterias de chumbo-ácido exaustas.",
        "score": 85
      },
      {
        "id": 16,
        "label": "Resistência à Corrosão",
        "value": "Boa",
        "justification": "Resistente a muitos ácidos diluídos e álcalis.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Refletividade",
        "value": "Alta",
        "justification": "Apresenta um brilho metálico pronunciado.",
        "score": 70
      },
      {
        "id": 18,
        "label": "Maleabilidade",
        "value": "Nula",
        "justification": "Extremamente quebradiço, pulveriza-se sob impacto.",
        "score": 5
      },
      {
        "id": 19,
        "label": "Dutibilidade",
        "value": "Nula",
        "justification": "Não pode ser esticado em fios devido à sua fragilidade.",
        "score": 5
      },
      {
        "id": 20,
        "label": "Isótopos Estáveis",
        "value": "2 (Sb-121, 123)",
        "justification": "A mistura natural de dois isótopos estáveis define sua massa média.",
        "score": 90
      },
      {
        "id": 21,
        "label": "Toxicidade",
        "value": "Alta",
        "justification": "Quimicamente similar ao arsênio, seus compostos são venenosos.",
        "score": 20
      },
      {
        "id": 22,
        "label": "Aplicações Tecnológicas",
        "value": "Alta",
        "justification": "Indispensável em retardantes de chama, semicondutores e endurecimento do chumbo.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Magnético",
        "value": "Diamagnético",
        "justification": "Resposta magnética fraca.",
        "score": 10
      },
      {
        "id": 24,
        "label": "Custo de Produção",
        "value": "Moderado",
        "justification": "Preço de mercado estável, com fornecimento global concentrado.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Risco à Natureza",
        "value": "Moderado",
        "justification": "O descarte inadequado de retardantes de chama pode contaminar o ecossistema.",
        "score": 40
      },
      {
        "id": 26,
        "label": "Radioatividade",
        "value": "Nula",
        "justification": "Isótopos naturais são perfeitamente estáveis.",
        "score": 100
      },
      {
        "id": 27,
        "label": "Curiosidade Histórica",
        "value": "Maquiagem",
        "justification": "Seu mineral (estibina) era usado desde o antigo Egito como cosmético para os olhos (kohl).",
        "score": 95
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
      { "id": 1, "label": "Massa Atômica", "value": "127.60 u", "justification": "Massa atômica relativa do Telúrio.", "score": 43 },
      { "id": 2, "label": "Abundância na Crosta", "value": "0.001 ppm", "justification": "Concentração média encontrada na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "449.5 °C", "justification": "Temperatura em que o elemento passa para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "988 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "6.24 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "2.25", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "2.1", "justification": "Capacidade de atrair elétrons em ligações.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons através do material.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "Sólido", "justification": "Forma física em temperatura ambiente.", "score": 99 },
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
      { "id": 1, "label": "Massa Atômica", "value": "126.90 u", "justification": "Massa atômica relativa do Iodo.", "score": 42 },
      { "id": 2, "label": "Abundância na Crosta", "value": "0.45 ppm", "justification": "Concentração média encontrada na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "113.7 °C", "justification": "Temperatura em que o elemento passa para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "184.3 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "4.93 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "2.66", "justification": "Capacidade de atrair elétrons em ligações.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons através do material.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "Sólido", "justification": "Forma física em temperatura ambiente.", "score": 99 },
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
      { "id": 1, "label": "Massa Atômica", "value": "131.29 u", "justification": "Massa atômica relativa do Xenônio.", "score": 44 },
      { "id": 2, "label": "Abundância na Crosta", "value": "0.00001 ppm", "justification": "Concentração média encontrada na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "-111.7 °C", "justification": "Temperatura em que o elemento passa para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "-108.1 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "5.89 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "2.6", "justification": "Capacidade de atrair elétrons em ligações.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons através do material.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "Gás", "justification": "Forma física em temperatura ambiente.", "score": 99 },
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
      { "id": 1, "label": "Massa Atômica", "value": "132.91 u", "justification": "Massa atômica relativa do Césio.", "score": 44 },
      { "id": 2, "label": "Abundância na Crosta", "value": "3 ppm", "justification": "Concentração média encontrada na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "28.4 °C", "justification": "Temperatura em que o elemento passa para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "671 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "1.93 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "0.2", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "0.79", "justification": "Capacidade de atrair elétrons em ligações.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons através do material.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "Sólido", "justification": "Forma física em temperatura ambiente.", "score": 99 },
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
      { "id": 1, "label": "Massa Atômica", "value": "137.33 u", "justification": "Massa atômica relativa do Bário.", "score": 46 },
      { "id": 2, "label": "Abundância na Crosta", "value": "425 ppm", "justification": "Concentração média encontrada na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "727 °C", "justification": "Temperatura em que o elemento passa para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "1897 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "3.51 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "1.25", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "0.89", "justification": "Capacidade de atrair elétrons em ligações.", "score": 50 },
      { "id": 8, "label": "Condutividade Térmica", "value": "Moderada", "justification": "Capacidade de transferência de calor.", "score": 50 },
      { "id": 9, "label": "Condutividade Elétrica", "value": "Moderada", "justification": "Fluxo de elétrons através do material.", "score": 50 },
      { "id": 10, "label": "Calor Específico", "value": "Baixo", "justification": "Energia para elevar a temperatura.", "score": 40 },
      { "id": 11, "label": "Raio Atômico", "value": "Médio", "justification": "Tamanho efetivo do átomo.", "score": 50 },
      { "id": 12, "label": "Energia de Ionização", "value": "Moderada", "justification": "Energia para remoção de elétrons.", "score": 60 },
      { "id": 13, "label": "Estado Físico (CNTP)", "value": "Sólido", "justification": "Forma física em temperatura ambiente.", "score": 99 },
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
          "value": "Macio e reativo",
          "justification": "Pode ser cortado com faca e oxida rapidamente no ar.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não possui papel biológico mas é pouco tóxico.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro em manuseio controlado.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Lentes de câmera, vidros ópticos",
          "justification": "Melhora o índice de refração do vidro.",
          "score": 95
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Geralmente trivalente em seus compostos.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "39 ppm (crosta)",
          "justification": "Mais comum que a prata ou o chumbo na crosta terrestre.",
          "score": 45
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,00000005%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "138,90 u",
          "justification": "Início da série dos lantanídeos.",
          "score": 139
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "6,162 g/cm³",
          "justification": "Densidade moderada para um metal de terra rara.",
          "score": 62
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "187 pm",
          "justification": "Raio atômico grande, típico do início do período.",
          "score": 187
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Estado de oxidação mais comum e estável.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Conduz eletricidade, mas não tão bem quanto os metais de transição.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,10 (Pauling)",
          "justification": "Valor baixo, indicando forte caráter metálico.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado-branco, maleável e dúctil.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d¹",
          "justification": "Inicia o preenchimento do subnível d após o 6s.",
          "score": 51
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 5d¹ 6s²",
          "justification": "Configuração fundamental do Lantânio.",
          "score": 90
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "57",
          "justification": "Identidade atômica do Lantânio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "82",
          "justification": "Isótopo estável único natural La-139.",
          "score": 82
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / La-138 (raro)",
          "justification": "Apenas 0,09% é o radioativo La-138.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Fósforos (Iluminação), Catalisadores",
          "justification": "Uso crítico em baterias híbridas e refino de petróleo.",
          "score": 92
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Identificado no mineral de Bastnäs.",
          "score": 80
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Baterias Híbridas",
          "justification": "Um carro híbrido médio contém cerca de 10-15 kg de lantânio.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Lanthanein (Estar escondido)",
          "justification": "Termo grego que reflete a dificuldade de isolá-lo.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Carl Gustaf Mosander",
          "justification": "Químico sueco que isolou o elemento a partir do nitrato de cério.",
          "score": 88
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1839",
          "justification": "Um dos primeiros lantanídeos a serem isolados.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "920 °C",
          "justification": "Fusão moderada para um metal raro.",
          "score": 92
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3464 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 34
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
          "value": "Oxidação rápida",
          "justification": "O metal mais reativo das terras raras, oxida-se rapidamente no ar.",
          "score": 25
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Abundante",
          "justification": "O mais abundante dos elementos de terra rara.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Considerado não tóxico em manuseio comum.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Pedra de isqueiro, Catalisadores",
          "justification": "Essencial para reduzir emissões em carros e criar faíscas.",
          "score": 96
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3, 4",
          "justification": "Exibe estados de oxidação +3 e +4.",
          "score": 70
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "66 ppm (crosta)",
          "justification": "Mais abundante que o cobre na crosta terrestre.",
          "score": 50
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000001%",
          "justification": "Relativamente comum entre as terras raras no cosmos.",
          "score": 10
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "140,11 u",
          "justification": "Massa característica do grupo dos lantanídeos.",
          "score": 140
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "6,77 g/cm³",
          "justification": "Metal denso típico do período 6.",
          "score": 68
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "181 pm",
          "justification": "Raio atômico grande, permitindo diversas ligações.",
          "score": 181
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3, +4",
          "justification": "Pode atuar como um forte agente oxidante no estado +4.",
          "score": 40
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Típico para um metal lantanídeo.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,12 (Pauling)",
          "justification": "Valor baixo, metal altamente eletropositivo.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, macio e maleável.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f¹",
          "justification": "O primeiro elétron entra no subnível 4f (embora existam variações).",
          "score": 41
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹ 5d¹ 6s²",
          "justification": "Configuração eletrônica do Cério.",
          "score": 92
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "58",
          "justification": "Identidade atômica do Cério.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "82",
          "justification": "Número de nêutrons no isótopo mais estável Ce-140.",
          "score": 82
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "Cério natural é composto por quatro isótopos estáveis.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Catalisadores Automotivos, Autolimpeza de Fornos",
          "justification": "O óxido de cério é usado em paredes de fornos autolimpantes.",
          "score": 94
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Descoberto quase simultaneamente por Berzelius e Hisinger.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Pedra de Isqueiro",
          "justification": "Ligas de ferro e cério produzem faíscas ao serem riscadas.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Ceres",
          "justification": "Nomeado em homenagem ao planeta anão Ceres, descoberto pouco antes.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Jöns Jacob Berzelius",
          "justification": "Um dos fundadores da química moderna.",
          "score": 95
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1803",
          "justification": "Identificado no mineral cerita.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "795 °C",
          "justification": "Fusão relativamente baixa para um metal raro.",
          "score": 79
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3443 °C",
          "justification": "Ponto de ebulição muito alto.",
          "score": 34
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
      { "id": 1, "label": "Massa Atômica", "value": "140.91 u", "justification": "Massa atômica relativa do Praseodímio.", "score": 47 },
      { "id": 2, "label": "Abundância na Crosta", "value": "9.2 ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "931 °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "3520 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "6.77 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "1.13", "justification": "Capacidade de atrair elétrons.", "score": 50 },
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
      { "id": 26, "label": "Radioatividade", "value": "Nula", "justification": "Estabilidade nuclear do elemento.", "score": 100 },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
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
      { "id": 1, "label": "Massa Atômica", "value": "144.24 u", "justification": "Massa atômica relativa do Neodímio.", "score": 48 },
      { "id": 2, "label": "Abundância na Crosta", "value": "41.5 ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "1021 °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "3074 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "7.01 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "1.14", "justification": "Capacidade de atrair elétrons.", "score": 50 },
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
      { "id": 26, "label": "Radioatividade", "value": "Nula", "justification": "Estabilidade nuclear do elemento.", "score": 100 },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
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
      { "id": 1, "label": "Massa Atômica", "value": "145 u", "justification": "Massa atômica relativa do Promécio.", "score": 48 },
      { "id": 2, "label": "Abundância na Crosta", "value": "0 ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "1042 °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "3000 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "7.26 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "N/A", "justification": "Capacidade de atrair elétrons.", "score": 50 },
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
      { "id": 26, "label": "Radioatividade", "value": "Alta", "justification": "Estabilidade nuclear do elemento.", "score": 10 },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
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
      { "id": 1, "label": "Massa Atômica", "value": "150.36 u", "justification": "Massa atômica relativa do Samário.", "score": 50 },
      { "id": 2, "label": "Abundância na Crosta", "value": "7.05 ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "1072 °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "1794 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "7.52 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "1.17", "justification": "Capacidade de atrair elétrons.", "score": 50 },
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
      { "id": 26, "label": "Radioatividade", "value": "Nula", "justification": "Estabilidade nuclear do elemento.", "score": 100 },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
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
      { "id": 1, "label": "Massa Atômica", "value": "151.96 u", "justification": "Massa atômica relativa do Európio.", "score": 51 },
      { "id": 2, "label": "Abundância na Crosta", "value": "2.1 ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "822 °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "1529 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "5.24 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "N/A", "justification": "Capacidade de atrair elétrons.", "score": 50 },
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
      { "id": 26, "label": "Radioatividade", "value": "Nula", "justification": "Estabilidade nuclear do elemento.", "score": 100 },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
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
      { "id": 1, "label": "Massa Atômica", "value": "157.25 u", "justification": "Massa atômica relativa do Gadolínio.", "score": 52 },
      { "id": 2, "label": "Abundância na Crosta", "value": "6.2 ppm", "justification": "Concentração média na crosta terrestre.", "score": 40 },
      { "id": 3, "label": "Ponto de Fusão", "value": "1313 °C", "justification": "Temperatura de transição para o estado líquido.", "score": 60 },
      { "id": 4, "label": "Ponto de Ebulição", "value": "3273 °C", "justification": "Temperatura de vaporização característica.", "score": 70 },
      { "id": 5, "label": "Densidade", "value": "7.90 g/cm³", "justification": "Massa volumétrica em condições padrão.", "score": 55 },
      { "id": 6, "label": "Dureza de Mohs", "value": "N/A", "justification": "Resistência ao risco mecânico.", "score": 45 },
      { "id": 7, "label": "Eletronegatividade", "value": "1.2", "justification": "Capacidade de atrair elétrons.", "score": 50 },
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
      { "id": 26, "label": "Radioatividade", "value": "Nula", "justification": "Estabilidade nuclear do elemento.", "score": 100 },
      { "id": 27, "label": "Curiosidade", "value": "Terra Rara", "justification": "Membro da série dos lantanídeos.", "score": 90 }
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
          "value": "Corte fácil",
          "justification": "Metal tão macio que pode ser cortado com uma faca.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não possui função biológica mas é considerado de baixo risco ambiental.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Geralmente seguro, sem riscos agudos conhecidos.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Telas Coloridas, Sonar",
          "justification": "Essencial para a cor verde em displays e em ligas de Terfenol-D.",
          "score": 96
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3, 4",
          "justification": "Apresenta estados de oxidação estáveis em +3 e +4.",
          "score": 70
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "1,2 ppm (crosta)",
          "justification": "Elemento de terra rara relativamente escasso.",
          "score": 25
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000002%",
          "justification": "Elemento raro no cosmos.",
          "score": 1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "158,93 u",
          "justification": "Massa baseada no único isótopo estável Tb-159.",
          "score": 159
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "8,23 g/cm³",
          "justification": "Metal denso típico dos lantanídeos pesados.",
          "score": 82
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "178 pm",
          "justification": "Tamanho atômico reduzido devido à contração lantanídica.",
          "score": 178
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3, +4",
          "justification": "Um dos poucos lantanídeos que atinge o estado +4 estavelmente.",
          "score": 40
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Conduz eletricidade, mas com resistência típica da série.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,1 (Pauling)",
          "justification": "Baixa eletronegatividade, forte caráter metálico.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado-branco, maleável e dúctil.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f⁹",
          "justification": "Nove elétrons no subnível 4f.",
          "score": 49
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f⁹ 6s²",
          "justification": "Configuração fundamental do Térbio.",
          "score": 95
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "65",
          "justification": "Identidade atômica do Térbio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "94",
          "justification": "Diferença entre massa e número atômico.",
          "score": 94
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "O térbio natural consiste em um único isótopo estável.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Fósforos Verdes, Discos Magneto-Ópticos",
          "justification": "Essencial para a cor verde em TVs e lasers de estado sólido.",
          "score": 94
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Identificado na vila de Ytterby.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Magnetostrição",
          "justification": "Muda de forma significativamente na presença de campos magnéticos.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Ytterby",
          "justification": "Nomeado em homenagem à famosa vila sueca de Ytterby.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Carl Gustaf Mosander",
          "justification": "Químico sueco que isolou o elemento a partir da 'itria'.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1843",
          "justification": "Isolado na era de ouro das terras raras.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1356 °C",
          "justification": "Ponto de fusão alto para a série.",
          "score": 96
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3230 °C",
          "justification": "Ponto de ebulição muito elevado.",
          "score": 32
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
          "value": "Oxidação lenta",
          "justification": "Mais estável que os lantanídeos leves, mas ainda oxida gradualmente.",
          "score": 40
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não possui papel biológico conhecido.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro em manuseio controlado.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Ímãs de Alta Temperatura, Reatores",
          "justification": "Mantém propriedades magnéticas em motores térmicos potentes.",
          "score": 98
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Estado +3 é o padrão.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "5,2 ppm (crosta)",
          "justification": "Relativamente raro, mas essencial industrialmente.",
          "score": 35
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000002%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "162,50 u",
          "justification": "Massa baseada em sete isótopos naturais.",
          "score": 162
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "8,54 g/cm³",
          "justification": "Metal denso, aumentando ao longo da série.",
          "score": 85
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "177 pm",
          "justification": "Contração lantanídica evidente.",
          "score": 177
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Quase exclusivamente trivalente.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Conduz eletricidade de forma limitada.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,22 (Pauling)",
          "justification": "Valor baixo, metal eletropositivo.",
          "score": 12
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado brilhante, relativamente macio.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f¹⁰",
          "justification": "Dez elétrons no subnível 4f.",
          "score": 50
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁰ 6s²",
          "justification": "Configuração que define seu forte magnetismo.",
          "score": 96
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "66",
          "justification": "Identidade atômica do Disprósio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "97",
          "justification": "Baseado no isótopo mais comum Dy-164.",
          "score": 97
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "Possui sete isótopos naturais estáveis.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Carros Elétricos, Turbinas Eólicas",
          "justification": "Estabiliza os ímãs de neodímio sob calor intenso.",
          "score": 98
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "França",
          "justification": "Isolado por Paul-Émile Lecoq de Boisbaudran.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Difícil de Obter",
          "justification": "Levou 30 tentativas de precipitação para isolar o metal puro.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Dysprositos (Difícil de obter)",
          "justification": "Termo grego que reflete a dificuldade de sua extração.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Paul-Émile Lecoq de Boisbaudran",
          "justification": "Químico francês mestre na espectroscopia.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1886",
          "justification": "Identificado após exaustiva separação química.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1412 °C",
          "justification": "Ponto de fusão elevado para a série.",
          "score": 97
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "2567 °C",
          "justification": "Ponto de ebulição moderadamente alto.",
          "score": 25
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
          "value": "Oxidação em ar úmido",
          "justification": "Metal relativamente estável em ar seco, mas oxida-se sob umidade.",
          "score": 40
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não possui papel biológico conhecido e é de baixa toxicidade.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro para manuseio comum e aplicações cirúrgicas.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Lasers Holmium, Superímãs",
          "justification": "Usado em lasers cirúrgicos para remover pedras nos rins e em ímãs potentes.",
          "score": 97
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Estado de oxidação +3 é o mais comum.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "1,3 ppm (crosta)",
          "justification": "Cerca de 20 vezes mais abundante que a prata.",
          "score": 25
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000005%",
          "justification": "Elemento muito raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "164,93 u",
          "justification": "Massa do único isótopo estável natural Ho-165.",
          "score": 165
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "8,79 g/cm³",
          "justification": "Metal denso, típico dos lantanídeos pesados.",
          "score": 88
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "176 pm",
          "justification": "Tamanho atômico reduzido pela contração lantanídica.",
          "score": 176
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Quase exclusivamente trivalente.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Condutividade metálica típica para a série.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,23 (Pauling)",
          "justification": "Baixa eletronegatividade, metal eletropositivo.",
          "score": 12
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, macio e maleável.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f¹¹",
          "justification": "Onze elétrons no subnível 4f.",
          "score": 51
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹¹ 6s²",
          "justification": "Configuração fundamental do Hólmio.",
          "score": 96
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "67",
          "justification": "Identidade atômica do Hólmio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "98",
          "justification": "Diferença entre massa e número atômico.",
          "score": 98
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "O hólmio natural consiste totalmente no isótopo estável Ho-165.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Lasers Médicos, Ímãs de Pesquisa",
          "justification": "Utilizado para criar os campos magnéticos artificiais mais potentes.",
          "score": 95
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suíça",
          "justification": "Identificado por Per Teodor Cleve.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Recorde Magnético",
          "justification": "Possui o maior momento magnético de qualquer elemento natural.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Holmia (Estocolmo)",
          "justification": "Homenagem à capital da Suécia (em latim).",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Per Teodor Cleve",
          "justification": "Químico sueco que também descobriu o túlio.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1878",
          "justification": "Identificado quase simultaneamente por Cleve e por Soret e Delafontaine.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1472 °C",
          "justification": "Ponto de fusão alto para a série.",
          "score": 97
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "2700 °C",
          "justification": "Ponto de ebulição elevado.",
          "score": 27
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
          "value": "Oxidação lenta",
          "justification": "Embora estável no ar seco, oxida-se lentamente em condições úmidas.",
          "score": 40
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não possui papel biológico conhecido; é considerado ambientalmente pouco perigoso.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro em manuseio comum e amplamente utilizado em medicina nuclear.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Fibras Ópticas, Lasers Médicos",
          "justification": "O doping de érbio em fibras ópticas permite a amplificação de longo alcance da internet.",
          "score": 99
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Estado de oxidação +3 é o padrão para este lantanídeo.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "2,8 ppm (crosta)",
          "justification": "Mais abundante que o iodo, apesar de ser uma 'terra rara'.",
          "score": 35
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000001%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 0.8
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "167,26 u",
          "justification": "Massa baseada em seus seis isótopos estáveis naturais.",
          "score": 167
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "9,066 g/cm³",
          "justification": "Metal denso, ultrapassando a marca de 9 g/cm³ na série.",
          "score": 91
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "175 pm",
          "justification": "Tamanho atômico reduzido pela contração lantanídica contínua.",
          "score": 175
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Estado de oxidação estável e predominante.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Propriedades metálicas típicas para os lantanídeos pesados.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,24 (Pauling)",
          "justification": "Baixa eletronegatividade, metal eletropositivo.",
          "score": 12
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, maleável e relativamente estável.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f¹²",
          "justification": "Doze elétrons no subnível 4f.",
          "score": 52
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹² 6s²",
          "justification": "Configuração fundamental do Érbio.",
          "score": 96
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "68",
          "justification": "Identidade atômica do Érbio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "99",
          "justification": "Diferença média entre massa e número atômico.",
          "score": 99
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "O érbio natural consiste em seis isótopos estáveis.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Amplificadores Ópticos, Filtros de Vidro",
          "justification": "Crucial para a infraestrutura global de fibra óptica e lasers de infravermelho.",
          "score": 98
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Descoberto por Carl Gustaf Mosander na vila de Ytterby.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Vidro Rosa",
          "justification": "O óxido de érbio é usado para dar uma cor rosa característica a vidros e esmaltes.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Ytterby",
          "justification": "Mais um elemento nomeado em homenagem à vila sueca de Ytterby.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Carl Gustaf Mosander",
          "justification": "Famoso químico sueco que isolou vários lantanídeos.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1843",
          "justification": "Isolado juntamente com o térbio da 'itria'.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1529 °C",
          "justification": "Ponto de fusão elevado para a série.",
          "score": 98
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "2868 °C",
          "justification": "Ponto de ebulição elevado.",
          "score": 28
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
          "value": "Mancha lenta",
          "justification": "Metal relativamente estável no ar, mas oxida-se lentamente.",
          "score": 45
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Considerado de baixo impacto ambiental.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro para manuseio comum.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Raio-X Portátil, Lasers",
          "justification": "Usado em fontes de radiação para equipamentos de raio-X leves e lasers cirúrgicos.",
          "score": 95
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "2, 3",
          "justification": "Estado +3 é o mais comum, mas +2 é possível.",
          "score": 75
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,52 ppm (crosta)",
          "justification": "Um dos lantanídeos menos abundantes.",
          "score": 20
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000002%",
          "justification": "Elemento muito raro no cosmos.",
          "score": 0.2
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "168,93 u",
          "justification": "Massa do único isótopo estável natural Tm-169.",
          "score": 169
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "9,32 g/cm³",
          "justification": "Metal denso, aumentando em direção ao final da série.",
          "score": 93
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "175 pm",
          "justification": "Tamanho atômico reduzido pela contração lantanídica.",
          "score": 175
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+2, +3",
          "justification": "Estado +3 é o mais estável.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Propriedades condutoras típicas da série.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,25 (Pauling)",
          "justification": "Baixa eletronegatividade, metal eletropositivo.",
          "score": 12
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, macio e brilhante.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f¹³",
          "justification": "Treze elétrons no subnível 4f.",
          "score": 53
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹³ 6s²",
          "justification": "Configuração fundamental do Túlio.",
          "score": 96
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "69",
          "justification": "Identidade atômica do Túlio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "100",
          "justification": "Diferença entre massa e número atômico.",
          "score": 100
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "O túlio natural é composto apenas pelo isótopo estável Tm-169.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Fontes de Radiação Portáteis, Lasers",
          "justification": "Essencial para dispositivos de raio-X que não precisam de eletricidade externa.",
          "score": 94
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Descoberto por Per Teodor Cleve.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "O Mais Caro",
          "justification": "Historicamente um dos lantanídeos mais caros devido à sua raridade.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Thule (Escandinávia)",
          "justification": "Homenagem à mítica região de Thule, no norte da Europa.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Per Teodor Cleve",
          "justification": "Químico sueco que isolou o elemento a partir da 'erbia'.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1879",
          "justification": "Identificado na fase final de descobertas de lantanídeos naturais.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1545 °C",
          "justification": "Ponto de fusão alto.",
          "score": 98
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "1950 °C",
          "justification": "Ponto de ebulição relativamente baixo para o grupo.",
          "score": 19
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
          "value": "Oxidação",
          "justification": "Metal reativo que oxida lentamente no ar.",
          "score": 40
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Considerado de baixo risco para o meio ambiente.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro para manuseio comum.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Relógios Atômicos, Aço Inoxidável",
          "justification": "Seus íons são a base para os relógios atômicos mais precisos do mundo.",
          "score": 99
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "2, 3",
          "justification": "Apresenta estados de oxidação estáveis em +2 e +3.",
          "score": 75
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "3,0 ppm (crosta)",
          "justification": "Relativamente abundante para um lantanídeo pesado.",
          "score": 35
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000005%",
          "justification": "Elemento raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "173,04 u",
          "justification": "Massa baseada em seus sete isótopos estáveis.",
          "score": 173
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "6,90 g/cm³",
          "justification": "Surpreendentemente menos denso que seus vizinhos imediatos.",
          "score": 69
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "194 pm",
          "justification": "Tamanho atômico grande para o final da série.",
          "score": 194
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+2, +3",
          "justification": "O estado +2 é notavelmente estável.",
          "score": 50
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Propriedades condutoras típicas dos lantanídeos.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,1 (Pauling)",
          "justification": "Baixa eletronegatividade, forte caráter metálico.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, macio, maleável e dúctil.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f¹⁴",
          "justification": "Camada 4f completamente preenchida.",
          "score": 54
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 6s²",
          "justification": "Configuração eletrônica muito estável.",
          "score": 97
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "70",
          "justification": "Identidade atômica do Itérbio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "103",
          "justification": "Diferença entre massa e número atômico.",
          "score": 103
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "Possui sete isótopos naturais estáveis.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Física Quântica, Ligas de Alumínio",
          "justification": "Fundamental para o desenvolvimento de computadores quânticos.",
          "score": 98
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suécia",
          "justification": "Descoberto por Jean Charles Galissard de Marignac em Ytterby.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Vila dos Quatro Elementos",
          "justification": "É o quarto elemento nomeado em homenagem à vila de Ytterby (Y, Ter, Er, Yb).",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Ytterby",
          "justification": "Homenagem à vila sueca onde foi descoberto.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Jean Charles Galissard de Marignac",
          "justification": "Químico suíço que isolou o elemento a partir da 'erbia'.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1878",
          "justification": "Identificado na fase final de descobertas de terras raras.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "824 °C",
          "justification": "Ponto de fusão surpreendentemente baixo para a série.",
          "score": 82
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "1196 °C",
          "justification": "O ponto de ebulição mais baixo entre todos os lantanídeos.",
          "score": 12
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
          "value": "Mancha lenta",
          "justification": "Metal relativamente estável no ar, mas oxida-se lentamente.",
          "score": 45
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não possui papel biológico conhecido; é considerado ambientalmente pouco perigoso.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro em manuseio comum.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Medicina Nuclear, Catalisadores",
          "justification": "O isótopo Lu-177 é uma ferramenta poderosa no tratamento de certos tipos de câncer.",
          "score": 98
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "O estado de oxidação +3 é o único estável.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,5 ppm (crosta)",
          "justification": "Um dos lantanídeos naturais mais raros.",
          "score": 20
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000001%",
          "justification": "Elemento muito raro no cosmos.",
          "score": 0.1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "174,97 u",
          "justification": "O lantanídeo mais pesado.",
          "score": 175
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "9,841 g/cm³",
          "justification": "O metal mais denso da série dos lantanídeos.",
          "score": 98
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "173 pm",
          "justification": "O menor raio atômico entre todos os lantanídeos (contração máxima).",
          "score": 173
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Estado de oxidação estável e exclusivo.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Conduz eletricidade, mas com as limitações típicas do grupo.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,27 (Pauling)",
          "justification": "O lantanídeo mais eletronegativo.",
          "score": 13
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, muito duro e denso.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d¹",
          "justification": "Possui a camada 4f preenchida e inicia o preenchimento do 5d.",
          "score": 51
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d¹ 6s²",
          "justification": "Configuração que marca o fim da série lantanídica.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "71",
          "justification": "Identidade atômica do Lutécio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "104",
          "justification": "Diferença entre massa e número atômico.",
          "score": 104
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Lu-176 (vida longa)",
          "justification": "Contém um isótopo radioativo natural com meia-vida de 38 bilhões de anos.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "PET Scans, Datação de Meteoritos",
          "justification": "Usado em cristais detectores para medicina e em geocronologia.",
          "score": 97
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "França",
          "justification": "Descoberto independentemente por Georges Urbain em Paris.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "O Mais Difícil",
          "justification": "Foi o lantanídeo mais difícil e caro de ser isolado em forma pura.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Lutetia (Paris)",
          "justification": "Homenagem à cidade de Paris (em latim).",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Georges Urbain",
          "justification": "Químico francês que isolou o elemento a partir da 'itérbia'.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1907",
          "justification": "O último dos lantanídeos naturais a ser descoberto.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1663 °C",
          "justification": "O ponto de fusão mais alto entre todos os lantanídeos.",
          "score": 99
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3402 °C",
          "justification": "Ponto de ebulição muito elevado.",
          "score": 34
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
          "value": "Manuseio difícil",
          "justification": "Metal difícil de separar do zircônio devido à extrema semelhança química.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Metal inerte e considerado de baixo risco para o ecossistema.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro para manuseio e aplicações industriais.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Barras de Controle, Processadores",
          "justification": "Excelente absorvedor de nêutrons e componente chave em chips de computador avançados.",
          "score": 98
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "4",
          "justification": "O estado de oxidação +4 é o mais comum e estável.",
          "score": 70
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "3,0 ppm (crosta)",
          "justification": "Relativamente comum, mas difícil de extrair de forma isolada.",
          "score": 35
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000007%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "178,49 u",
          "justification": "Massa baseada na mistura natural de seus seis isótopos estáveis.",
          "score": 178
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "13,31 g/cm³",
          "justification": "Metal muito denso, quase o dobro da densidade do zircônio.",
          "score": 133
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "159 pm",
          "justification": "Tamanho atômico similar ao do zircônio devido à contração lantanídica.",
          "score": 159
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+4",
          "justification": "Estado de oxidação quase exclusivo.",
          "score": 40
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Moderada (Metal)",
          "justification": "Boa condutividade metálica típica dos metais de transição do grupo 4.",
          "score": 40
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,3 (Pauling)",
          "justification": "Valor moderadamente baixo, metal eletropositivo.",
          "score": 13
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, brilhante e resistente à corrosão.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d²",
          "justification": "Dois elétrons no subnível 5d após a camada 4f preenchida.",
          "score": 52
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d² 6s²",
          "justification": "Configuração fundamental do Háfnio.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "72",
          "justification": "Identidade atômica do Háfnio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "106",
          "justification": "Média baseada nos isótopos naturais.",
          "score": 106
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Hf-174 (raro)",
          "justification": "Hf-174 tem meia-vida de 2 quadrilhões de anos; o resto é estável.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Microprocessadores, Submarinos Nucleares",
          "justification": "Vital para as 'portas' de transistores em chips Intel modernos e controle de reatores.",
          "score": 99
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Dinamarca",
          "justification": "Descoberto em Copenhague por Coster e Hevesy.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Elemento de Bohr",
          "justification": "Foi o primeiro elemento a ter suas propriedades previstas pela teoria atômica de Bohr antes da descoberta.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Hafnia (Copenhague)",
          "justification": "Homenagem à cidade onde foi descoberto (em latim).",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Dirk Coster e George de Hevesy",
          "justification": "Cientistas que isolaram o elemento no laboratório de Niels Bohr.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1923",
          "justification": "Um dos últimos elementos estáveis a serem descobertos.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "2233 °C",
          "justification": "Ponto de fusão muito alto, metal refratário.",
          "score": 98
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "4603 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 46
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
          "value": "Frágil à temperatura ambiente",
          "justification": "É um metal muito duro e quebradiço, difícil de trabalhar sem calor.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Inerte",
          "justification": "Metal estável que não representa ameaça tóxica significativa ao meio ambiente.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "O pó pode ser irritante, mas o metal sólido é seguro.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Lâmpadas Incandescentes, Ferramentas de Corte",
          "justification": "Sua resistência ao calor o torna vital para filamentos e brocas de alta velocidade.",
          "score": 97
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "6",
          "justification": "Estado de oxidação +6 é o mais estável.",
          "score": 80
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "1,3 ppm (crosta)",
          "justification": "Presente em minerais como a scheelita e a volframita.",
          "score": 25
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000005%",
          "justification": "Elemento pesado muito raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "183,84 u",
          "justification": "Massa baseada em cinco isótopos naturais.",
          "score": 184
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "19,25 g/cm³",
          "justification": "Um dos metais mais densos, comparável ao ouro.",
          "score": 193
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "139 pm",
          "justification": "Raio metálico compacto, contribuindo para sua dureza extrema.",
          "score": 139
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "-2, -1, 0, +1, +2, +3, +4, +5, +6",
          "justification": "Extrema versatilidade química.",
          "score": 90
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Boa (Metal)",
          "justification": "Bom condutor de eletricidade, essencial para contatos elétricos.",
          "score": 35
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "2,36 (Pauling)",
          "justification": "Valor relativamente alto para um metal de transição.",
          "score": 24
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal cinza-claro a branco, com o maior ponto de fusão de todos os metais.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d⁴",
          "justification": "Quarto elemento da série 5d.",
          "score": 54
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d⁴ 6s²",
          "justification": "Configuração fundamental do Tungstênio.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "74",
          "justification": "Identidade atômica do Tungstênio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "110",
          "justification": "Diferença média baseada nos isótopos naturais.",
          "score": 110
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / W-180 (vida longa)",
          "justification": "W-180 tem meia-vida de 1,8 quintilhão de anos.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Eletrodos TIG, Munição, Blindagem",
          "justification": "Sua dureza e densidade são usadas em projéteis perfurantes e proteção contra radiação.",
          "score": 98
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Espanha",
          "justification": "Isolado pelos irmãos Elhuyar.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Indestrutível",
          "justification": "Tem o ponto de fusão mais alto (3422 °C) e a maior resistência à tração de qualquer metal a temperaturas acima de 1650 °C.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Tung sten (Pedra Pesada)",
          "justification": "Termo sueco que descreve a densidade de seu minério.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Juan José e Fausto Elhuyar",
          "justification": "Irmãos espanhóis que isolaram o metal a partir da volframita.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1783",
          "justification": "Isolado no final do século XVIII.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "3422 °C",
          "justification": "O mais alto ponto de fusão de todos os elementos metálicos.",
          "score": 100
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "5555 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 56
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
          "value": "Extrema raridade",
          "justification": "É um dos elementos mais raros e caros da crosta terrestre.",
          "score": 10
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Metal inerte, não apresenta riscos biológicos conhecidos em sua forma sólida.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Geralmente considerado seguro para manuseio.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Superligas, Contatos Elétricos",
          "justification": "Sua resistência ao calor e desgaste é fundamental para a aviação moderna.",
          "score": 96
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "7",
          "justification": "O estado de oxidação +7 é comum e estável para este metal.",
          "score": 85
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,0007 ppm (crosta)",
          "justification": "Um dos elementos mais escassos que não são radioativos primordiais.",
          "score": 5
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000002%",
          "justification": "Elemento extremamente raro no cosmos.",
          "score": 0.1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "186,21 u",
          "justification": "Massa baseada em dois isótopos naturais.",
          "score": 186
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "21,02 g/cm³",
          "justification": "O quarto elemento mais denso da tabela periódica.",
          "score": 210
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "137 pm",
          "justification": "Raio metálico reduzido, contribuindo para sua altíssima densidade.",
          "score": 137
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "-1, 0, +1, +2, +3, +4, +5, +6, +7",
          "justification": "Possui a maior gama de estados de oxidação de qualquer elemento.",
          "score": 100
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Boa (Metal)",
          "justification": "Excelente condutor, mantém propriedades em altas temperaturas.",
          "score": 30
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,9 (Pauling)",
          "justification": "Valor moderado para um metal de transição pesado.",
          "score": 19
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal branco-prateado, brilhante e extremamente denso.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d⁵",
          "justification": "Quinto elemento da série 5d.",
          "score": 55
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d⁵ 6s²",
          "justification": "Configuração fundamental do Rênio.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "75",
          "justification": "Identidade atômica do Rênio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "111",
          "justification": "Média baseada no isótopo mais abundante Re-187.",
          "score": 111
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Re-187 (vida longa)",
          "justification": "Re-187 é radioativo mas tem meia-vida de 41 bilhões de anos.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Turbinas de Jato, Catalisadores de Platina",
          "justification": "Crucial para a eficiência energética de motores de aeronaves.",
          "score": 97
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Alemanha",
          "justification": "Descoberto por Ida Noddack, Walter Noddack e Otto Berg.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Último Natural",
          "justification": "Foi o último elemento natural estável a ser descoberto na história.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Rhenus (Rio Reno)",
          "justification": "Homenagem ao rio Reno na Alemanha.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Ida Noddack e equipe",
          "justification": "Uma das poucas mulheres a descobrir um elemento químico.",
          "score": 95
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1925",
          "justification": "Identificado por espectroscopia de raios-X.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "3186 °C",
          "justification": "O terceiro ponto de fusão mais alto entre todos os elementos.",
          "score": 99
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "5596 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 56
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
          "value": "Vapor tóxico",
          "justification": "O tetróxido de ósmio (OsO₄) é altamente volátil e extremamente tóxico para olhos e pulmões.",
          "score": 5
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade (Metal)",
          "justification": "O metal em si é inerte, mas seus compostos oxidados são perigosos.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Extremo (Vapores de Óxido)",
          "justification": "Pode causar cegueira e danos pulmonares permanentes se inalado.",
          "score": 1
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Contatos Elétricos, Pontas de Caneta",
          "justification": "Sua dureza extrema o torna ideal para aplicações de alto desgaste.",
          "score": 90
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "8",
          "justification": "Um dos poucos elementos capazes de atingir o estado de oxidação +8.",
          "score": 95
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,0015 ppm (crosta)",
          "justification": "O elemento estável mais raro na crosta terrestre.",
          "score": 2
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000006%",
          "justification": "Elemento pesado extremamente raro no cosmos.",
          "score": 0.3
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "190,23 u",
          "justification": "Massa baseada em seus sete isótopos naturais.",
          "score": 190
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "22,59 g/cm³",
          "justification": "O elemento mais denso conhecido, superando ligeiramente o irídio.",
          "score": 226
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "135 pm",
          "justification": "Raio metálico muito compacto, explicando sua altíssima densidade.",
          "score": 135
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "-2, -1, 0, +1, +2, +3, +4, +5, +6, +7, +8",
          "justification": "Apresenta a maior gama de estados de oxidação da tabela periódica.",
          "score": 100
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Boa (Metal)",
          "justification": "Bom condutor elétrico, mas raramente usado devido à toxicidade do óxido.",
          "score": 30
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "2,2 (Pauling)",
          "justification": "Valor alto para um metal de transição pesado.",
          "score": 22
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal azul-acinzentado, extremamente duro e quebradiço.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d⁶",
          "justification": "Sexto elemento da série 5d.",
          "score": 56
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d⁶ 6s²",
          "justification": "Configuração fundamental do Ósmio.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "76",
          "justification": "Identidade atômica do Ósmio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "114",
          "justification": "Média baseada nos isótopos estáveis naturais.",
          "score": 114
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Os-186 (vida longa)",
          "justification": "Os-186 tem meia-vida de 2 quatrilhões de anos; o resto é estável.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Agulhas de Toca-discos, Ligas de Alta Dureza",
          "justification": "Usado onde a resistência ao atrito e dureza são críticas.",
          "score": 92
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Inglaterra",
          "justification": "Identificado por Smithson Tennant em Londres.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "O Mais Denso",
          "justification": "Um tijolo de ósmio do tamanho de um smartphone pesaria cerca de 4 kg.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Osme (Cheiro)",
          "justification": "Termo grego que reflete o odor forte e picante de seu óxido volátil.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Smithson Tennant",
          "justification": "Químico britânico que também descobriu o irídio no mesmo resíduo de platina.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1803",
          "justification": "Identificado no resíduo negro da dissolução da platina em água régia.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "3033 °C",
          "justification": "Ponto de fusão extremamente alto.",
          "score": 99
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "5012 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 50
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
          "value": "Quebradiço",
          "justification": "Metal extremamente duro mas difícil de trabalhar mecanicamente devido à sua fragilidade.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Nobre e Inerte",
          "justification": "Sendo um dos metais mais resistentes à corrosão, não reage nem se dissolve facilmente na natureza.",
          "score": 90
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Inerte (Metal)",
          "justification": "O metal sólido é seguro e não tóxico para manuseio comum.",
          "score": 95
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Cadinhos, Velas de Ignição, Padrão de Metro",
          "justification": "Crucial para equipamentos de laboratório que suportam calor extremo e corrosão química.",
          "score": 97
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "6",
          "justification": "Estado de oxidação +4 é o mais comum, mas pode atingir +6.",
          "score": 80
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,001 ppm (crosta)",
          "justification": "Extremamente raro, frequentemente encontrado junto com a platina.",
          "score": 2
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000006%",
          "justification": "Elemento pesado muito raro no cosmos.",
          "score": 0.3
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "192,22 u",
          "justification": "Massa baseada em seus dois isótopos naturais estáveis.",
          "score": 192
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "22,56 g/cm³",
          "justification": "O segundo elemento mais denso, quase idêntico ao ósmio.",
          "score": 226
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "136 pm",
          "justification": "Raio metálico compacto, explicando sua densidade fenomenal.",
          "score": 136
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "-1, 0, +1, +2, +3, +4, +5, +6, +7, +8, +9",
          "justification": "Apresenta uma vasta gama de estados de oxidação em laboratório.",
          "score": 95
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Boa (Metal)",
          "justification": "Excelente condutor metálico, resistente ao desgaste elétrico.",
          "score": 35
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "2,2 (Pauling)",
          "justification": "Alta eletronegatividade para um metal, característica do grupo da platina.",
          "score": 22
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal branco-prateado, o mais resistente à corrosão de todos os metais conhecidos.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d⁷",
          "justification": "Sétimo elemento da série 5d.",
          "score": 57
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d⁷ 6s²",
          "justification": "Configuração fundamental do Irídio.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "77",
          "justification": "Identidade atômica do Irídio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "115",
          "justification": "Média baseada nos isótopos naturais Ir-191 e Ir-193.",
          "score": 115
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "O irídio natural consiste inteiramente em isótopos estáveis.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Ligas Aeroespaciais, Agulhas Médicas",
          "justification": "Usado em situações de extrema demanda por resistência mecânica e química.",
          "score": 96
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Inglaterra",
          "justification": "Descoberto por Smithson Tennant ao mesmo tempo que o ósmio.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Fronteira K-Pg",
          "justification": "Uma camada rica em irídio em todo o mundo marca o impacto do asteroide que extinguiu os dinossauros.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Iris (Arco-íris)",
          "justification": "Nomeado em homenagem à deusa grega do arco-íris devido às cores vibrantes de seus sais.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Smithson Tennant",
          "justification": "Químico britânico que isolou o elemento do resíduo de platina.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1803",
          "justification": "Isolado na era pioneira da química dos metais nobres.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "2446 °C",
          "justification": "Ponto de fusão muito alto, metal refratário.",
          "score": 98
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "4428 °C",
          "justification": "Ponto de ebulição extremamente elevado.",
          "score": 44
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
          "value": "Escassez extrema",
          "justification": "Um dos metais mais caros e raros, com produção anual muito limitada.",
          "score": 10
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Nobre e Bioestável",
          "justification": "Metal inerte que não reage quimicamente em ambientes biológicos.",
          "score": 95
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo (Metal)",
          "justification": "O metal em si é inerte; alguns sais de platina podem ser tóxicos ou alérgicos.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Conversores Catalíticos, Joalheria, Quimioterapia",
          "justification": "Fundamental para reduzir poluição automotiva e base para medicamentos como a cisplatina.",
          "score": 99
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "4, 6",
          "justification": "Forma complexos de coordenação muito estáveis, especialmente quadrados planares e octaédricos.",
          "score": 85
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,005 ppm (crosta)",
          "justification": "Um dos elementos menos abundantes na crosta terrestre.",
          "score": 5
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000005%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "195,08 u",
          "justification": "Massa baseada em seus seis isótopos naturais.",
          "score": 195
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "21,45 g/cm³",
          "justification": "Metal densíssimo, o terceiro mais denso da tabela periódica.",
          "score": 214
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "139 pm",
          "justification": "Raio metálico compacto, conferindo-lhe grande densidade.",
          "score": 139
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "0, +2, +4, +5, +6",
          "justification": "Os estados +2 e +4 são os mais comuns e úteis quimicamente.",
          "score": 70
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Boa (Metal)",
          "justification": "Excelente condutor, muito usado em contatos elétricos de precisão.",
          "score": 35
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "2,28 (Pauling)",
          "justification": "Alta eletronegatividade para um metal, próxima à do ouro.",
          "score": 23
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal branco-cinzentado, denso, maleável e altamente ductível.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d⁹",
          "justification": "Apresenta uma configuração irregular onde um elétron 6s migra para o 5d.",
          "score": 58
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
          "justification": "Configuração fundamental que explica sua alta reatividade catalítica.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "78",
          "justification": "Identidade atômica da Platina.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "117",
          "justification": "Diferença média entre massa e número atômico.",
          "score": 117
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Pt-190 (vida longa)",
          "justification": "Apenas o isótopo Pt-190 é radioativo, com meia-vida de 650 bilhões de anos.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Catalisadores, Marcapassos, Joias",
          "justification": "Crucial para a tecnologia médica e para a limpeza do ar que respiramos.",
          "score": 99
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "América do Sul (Colômbia/Equador)",
          "justification": "Conhecida por povos pré-colombianos antes da colonização europeia.",
          "score": 100
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Ouro Menor",
          "justification": "Conquistadores espanhóis a chamavam de 'platina' (pratinha), considerando-a uma impureza indesejada do ouro.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do name",
          "value": "Plata (Prata)",
          "justification": "Devido à sua semelhança visual com a prata.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Antonio de Ulloa",
          "justification": "Militar e cientista espanhol que trouxe as primeiras amostras para a Europa.",
          "score": 85
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1735",
          "justification": "Redescoberta cientificamente para o mundo ocidental no século XVIII.",
          "score": 90
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1768 °C",
          "justification": "Ponto de fusão elevado, exigindo fornos potentes para fundição.",
          "score": 95
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3825 °C",
          "justification": "Ponto de ebulição muito alto.",
          "score": 38
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
          "value": "Macio e Maleável",
          "justification": "O ouro puro é muito macio para a maioria das aplicações práticas, exigindo ligas.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Inerte e Seguro",
          "justification": "Metal quimicamente inerte que não se decompõe nem polui solo ou água.",
          "score": 95
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Inerte",
          "justification": "Não reage com o corpo humano, sendo seguro para próteses e até consumo (em folha).",
          "score": 100
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Eletrônica, Reservas Monetárias, Odontologia",
          "justification": "Sua condutividade e resistência à corrosão o tornam indispensável para conexões digitais.",
          "score": 100
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "1, 3",
          "justification": "Os estados de oxidação +1 e +3 são os mais estáveis.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,004 ppm (crosta)",
          "justification": "Elemento raro, mas amplamente distribuído em baixas concentrações.",
          "score": 10
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,0000000006%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 0.5
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "196,97 u",
          "justification": "Massa baseada no único isótopo estável Au-197.",
          "score": 197
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "19,30 g/cm³",
          "justification": "Metal extremamente denso, um dos mais pesados que ocorrem naturalmente.",
          "score": 193
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "144 pm",
          "justification": "Raio metálico que permite compactação densa.",
          "score": 144
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "-1, 0, +1, +2, +3, +5",
          "justification": "Apresenta estados variados, com +3 sendo muito estável em complexos.",
          "score": 65
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Excelente (Metal)",
          "justification": "O terceiro melhor condutor elétrico, superado apenas por prata e cobre.",
          "score": 90
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "2,54 (Pauling)",
          "justification": "A mais alta eletronegatividade entre todos os metais.",
          "score": 25
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal amarelo brilhante, o mais maleável e dúctil de todos.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d¹⁰",
          "justification": "Apresenta uma configuração irregular onde a camada 5d é completada migrando um elétron 6s.",
          "score": 59
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
          "justification": "Configuração fundamental que explica sua estabilidade química e cor única.",
          "score": 99
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "79",
          "justification": "Identidade atômica do Ouro.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "118",
          "justification": "Baseado no único isótopo estável Au-197.",
          "score": 118
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Totalmente Estável",
          "justification": "O ouro natural não possui isótopos radioativos.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Conectores, Aeroespacial, Finanças",
          "justification": "Vital para satélites (proteção térmica) e para a economia global.",
          "score": 100
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Conhecido desde a Antiguidade",
          "justification": "Usado por praticamente todas as civilizações antigas devido à sua ocorrência nativa.",
          "score": 100
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Ultra Maleabilidade",
          "justification": "Um único grama de ouro pode ser batido em uma folha transparente de um metro quadrado.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Aurum (Brilho Aurora)",
          "justification": "Termo latino que evoca o brilho do amanhecer.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Desconhecido",
          "justification": "Um dos primeiros metais a serem manipulados pelo homem pré-histórico.",
          "score": 100
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "~6000 a.C.",
          "justification": "Evidências de uso desde a Idade do Cobre.",
          "score": 100
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1064 °C",
          "justification": "Ponto de fusão moderado, facilitando a metalurgia antiga.",
          "score": 96
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "2856 °C",
          "justification": "Ponto de ebulição elevado.",
          "score": 28
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
          "value": "Extrema toxicidade",
          "justification": "O mercúrio e seus compostos são neurotoxinas potentes que se acumulam na cadeia alimentar.",
          "score": 1
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Poluente Persistente",
          "justification": "Bioacumula-se em peixes (metilmercúrio), representando um grave risco ambiental.",
          "score": 5
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Alto (Neurotóxico)",
          "justification": "Causa danos cerebrais, renais e ao sistema nervoso central.",
          "score": 1
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Termômetros, Amálgamas, Lâmpadas Fluorescentes",
          "justification": "Único metal líquido a temperatura ambiente, vital para medição e iluminação eficiente.",
          "score": 85
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "2",
          "justification": "Forma frequentemente complexos lineares com coordenação 2.",
          "score": 50
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "0,085 ppm (crosta)",
          "justification": "Elemento raro, encontrado principalmente no mineral cinábrio (HgS).",
          "score": 15
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000002%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 0.2
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "200,59 u",
          "justification": "Massa baseada na mistura de sete isótopos estáveis.",
          "score": 201
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "13,534 g/cm³ (Líquido)",
          "justification": "Metal densíssimo, mesmo em seu estado líquido.",
          "score": 135
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "151 pm",
          "justification": "Raio metálico típico para o final do bloco d.",
          "score": 151
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+1 (Hg₂²⁺), +2",
          "justification": "Apresenta o estado único Hg₂²⁺ com ligação metal-metal.",
          "score": 40
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Moderada (Líquido)",
          "justification": "Conduz eletricidade, sendo usado em interruptores de mercúrio.",
          "score": 25
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "2,00 (Pauling)",
          "justification": "Valor moderado para um metal pesado.",
          "score": 20
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Líquido",
          "justification": "O único metal que é líquido nas CNTP.",
          "score": 100
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "5d¹⁰",
          "justification": "Finaliza o preenchimento da camada 5d.",
          "score": 60
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
          "justification": "Configuração eletrônica estável que explica seu baixo ponto de fusão.",
          "score": 98
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "80",
          "justification": "Identidade atômica do Mercúrio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "121",
          "justification": "Diferença entre massa e número atômico.",
          "score": 121
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Totalmente Estável",
          "justification": "O mercúrio natural não possui isótopos radioativos primordiais.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Iluminação, Mineração de Ouro, Ciência",
          "justification": "Sua capacidade de formar amálgamas é usada (apesar de riscos) na mineração.",
          "score": 90
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Conhecido desde a Antiguidade",
          "justification": "Encontrado em túmulos egípcios datados de 1500 a.C.",
          "score": 100
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Prata Viva",
          "justification": "Antigamente chamado de 'hydrargyrum' (água de prata), daí seu símbolo Hg.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Mercúrio (Mitologia)",
          "justification": "Homenagem ao deus romano Mercúrio, mensageiro veloz, devido à sua mobilidade.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Desconhecido",
          "justification": "Um dos sete metais conhecidos desde a história antiga.",
          "score": 100
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "~1500 a.C.",
          "justification": "Primeiros registros de uso documentado.",
          "score": 100
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "-38,83 °C",
          "justification": "O ponto de fusão mais baixo de todos os metais.",
          "score": 100
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "356,7 °C",
          "justification": "Ponto de ebulição baixo para um metal, facilitando a purificação.",
          "score": 36
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
            "value": "Altíssima Toxicidade",
            "justification": "O tálio é conhecido como o 'veneno do envenenador' por ser inodoro e insípido.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Bioacumulativo",
            "justification": "Pode ser absorvido por plantas e entrar na cadeia alimentar, sendo perigoso para o ecossistema.",
            "score": 10
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Crítico",
            "justification": "A ingestão causa queda de cabelo e danos severos ao sistema nervoso central.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Sensores Infravermelhos",
            "justification": "Essencial para dispositivos de visão noturna e detectores de infravermelho.",
            "score": 75
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "1, 3",
            "justification": "Comum nos estados de oxidação +1 e +3.",
            "score": 40
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "0,7 ppm",
            "justification": "Relativamente comum na crosta terrestre, mas muito disperso.",
            "score": 25
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "0,000000001%",
            "justification": "Elemento pesado raro no espaço.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "204,38 u",
            "justification": "Peso atômico padrão para a mistura de seus isótopos naturais.",
            "score": 204
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "11,85 g/cm³",
            "justification": "Metal denso, similar ao chumbo.",
            "score": 118
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "170 pm",
            "justification": "Tamanho atômico característico do período 6.",
            "score": 170
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+1, +3",
            "justification": "O estado +1 é surpreendentemente estável devido ao efeito do par inerte.",
            "score": 35
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Moderada",
            "justification": "Conduz eletricidade como um metal típico do grupo 13.",
            "score": 18
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,62",
            "justification": "Valor moderado para um metal pesado.",
            "score": 25
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal macio e maleável que pode ser cortado com uma faca.",
            "score": 90
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6p¹",
            "justification": "Sua posição no grupo 13 define seu elétron de valência mais externo.",
            "score": 60
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
            "justification": "Configuração completa das camadas internas com um elétron p.",
            "score": 95
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "81",
            "justification": "Número atômico que define o Tálio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "123",
            "justification": "Número típico para o isótopo mais abundante.",
            "score": 123
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Estável",
            "justification": "Possui isótopos naturais estáveis.",
            "score": 100
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Óptica Especializada",
            "justification": "Usado em vidros de alto índice de refração e eletrônicos.",
            "score": 70
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Inglaterra",
            "justification": "Descoberto espectroscopicamente por William Crookes.",
            "score": 85
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Ramo Verde",
            "justification": "Emite uma linha verde brilhante em seu espectro de emissão.",
            "score": 90
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Thallos (grego)",
            "justification": "Significa 'broto verde', devido à cor de sua linha espectral.",
            "score": 95
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "William Crookes",
            "justification": "Cientista pioneiro no estudo de raios catódicos.",
            "score": 90
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1861",
            "justification": "Descoberto durante a era de ouro da espectroscopia.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "304 °C",
            "justification": "Ponto de fusão relativamente baixo para um metal pesado.",
            "score": 30
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1473 °C",
            "justification": "Temperatura na qual o metal entra em ebulição.",
            "score": 15
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
            "value": "Acúmulo Tóxico",
            "justification": "O chumbo se acumula no corpo, causando saturnismo e danos cognitivos permanentes.",
            "score": 5
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Contaminante Pesado",
            "justification": "Persistente no solo e na água, prejudica a fauna e flora local.",
            "score": 10
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Elevado",
            "justification": "Afeta o desenvolvimento neurológico em crianças e causa hipertensão em adultos.",
            "score": 5
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Blindagem Radioativa",
            "justification": "Melhor material para proteção contra raios X e radiação gama.",
            "score": 95
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2, 4",
            "justification": "Forma compostos estáveis principalmente no estado +2.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "14 ppm",
            "justification": "O mais abundante dos elementos pesados devido ao decaimento do urânio.",
            "score": 40
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "0,000001%",
            "justification": "Relativamente comum para um elemento pós-estelar.",
            "score": 0.5
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "207,2 u",
            "justification": "Massa média resultante de quatro isótopos estáveis.",
            "score": 207
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "11,34 g/cm³",
            "justification": "Famoso por sua alta densidade e peso característico.",
            "score": 113
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "175 pm",
            "justification": "Raio metálico grande, típico do final do grupo 14.",
            "score": 175
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +4",
            "justification": "O estado +2 é predominante devido à estabilidade do par inerte 6s².",
            "score": 40
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (para um metal)",
            "justification": "Pobre condutor comparado a metais como cobre ou prata.",
            "score": 8
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,87 (Pauling)",
            "justification": "Valor moderadamente alto para um metal.",
            "score": 35
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal macio, cinza-azulado e muito maleável.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6p²",
            "justification": "Possui dois elétrons no subnível 6p em sua camada de valência.",
            "score": 60
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
            "justification": "Configuração completa de gás nobre seguida por preenchimento de f, d e p.",
            "score": 98
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "82",
            "justification": "O número atômico 82 confere ao núcleo uma 'estabilidade mágica'.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "125",
            "justification": "Média de nêutrons em seus isótopos estáveis.",
            "score": 125
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Final Estável",
            "justification": "O ponto final de muitas séries de decaimento radioativo.",
            "score": 100
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Baterias e Proteção",
            "justification": "Essencial para baterias de carros e proteção em hospitais.",
            "score": 90
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Anatólia (Turquia)",
            "justification": "Um dos primeiros metais fundidos pela humanidade.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Símbolo da Alquimia",
            "justification": "Alquimistas tentavam transmutar chumbo (metal vil) em ouro.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Plumbum (Latim)",
            "justification": "Raiz da palavra 'encanamento' (plumbing), pois era usado em canos.",
            "score": 95
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Desconhecido",
            "justification": "Metal conhecido desde tempos pré-históricos.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "~7000 a.C.",
            "justification": "Evidências arqueológicas de contas de chumbo muito antigas.",
            "score": 100
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "327,5 °C",
            "justification": "Ponto de fusão baixo, fácil de derreter em fogueiras.",
            "score": 33
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1749 °C",
            "justification": "Temperatura elevada necessária para vaporizá-lo.",
            "score": 18
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
            "value": "Baixa Dureza",
            "justification": "Metal quebradiço, fácil de pulverizar sob pressão.",
            "score": 15
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Ecológico (Metal 'Verde')",
            "justification": "Substituto seguro e não tóxico para o chumbo em muitas aplicações.",
            "score": 85
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Muito Baixo",
            "justification": "Surpreendentemente seguro para consumo humano em medicamentos estomacais.",
            "score": 95
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Medicinal e Fusíveis",
            "justification": "Base do Pepto-Bismol e ligas de baixo ponto de fusão para segurança.",
            "score": 90
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3, 5",
            "justification": "Forma compostos principalmente no estado de oxidação +3.",
            "score": 45
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "0,008 ppm",
            "justification": "Raro na crosta, similar à abundância da prata.",
            "score": 8
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "0,00000007%",
            "justification": "Um dos elementos pesados menos comuns no cosmos.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "208,98 u",
            "justification": "Massa do seu único isótopo que ocorre naturalmente.",
            "score": 209
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "9,78 g/cm³",
            "justification": "Metal pesado, mas menos denso que o chumbo ou o mercúrio.",
            "score": 98
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "156 pm",
            "justification": "Raio atômico padrão para o grupo 15, período 6.",
            "score": 156
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +5",
            "justification": "O estado +3 é o mais estável e comum quimicamente.",
            "score": 35
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Pobre",
            "justification": "Possui uma das menores condutividades térmicas e elétricas entre os metais.",
            "score": 5
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "2,02 (Pauling)",
            "justification": "Valor moderadamente alto para um metal.",
            "score": 25
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal cristalino com um brilho rosado característico.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6p³",
            "justification": "Três elétrons ocupam o subnível 6p.",
            "score": 60
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
            "justification": "Configuração que o coloca no grupo do nitrogênio e fósforo.",
            "score": 98
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "83",
            "justification": "Número atômico que o tornava 'o último elemento estável' até 2003.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "126",
            "justification": "Número 'mágico' de nêutrons que confere estabilidade ao núcleo.",
            "score": 126
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Levemente Radioativo",
            "justification": "Sua meia-vida é 1 bilhão de vezes a idade do universo; na prática, é estável.",
            "score": 99
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Sistemas de Segurança",
            "justification": "Usado em sprinklers de incêndio devido ao seu baixo ponto de fusão.",
            "score": 85
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Alemanha",
            "justification": "Conhecido desde a Idade Média, mas frequentemente confundido com chumbo.",
            "score": 80
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Cristais Arco-Íris",
            "justification": "Forma cristais com cores incríveis devido à oxidação superficial.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Wismut (Alemão)",
            "justification": "Significa 'massa branca', referindo-se à sua aparência original.",
            "score": 90
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Claude Geoffroy",
            "justification": "Provou em 1753 que o bismuto era um elemento distinto do chumbo.",
            "score": 85
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1753",
            "justification": "Ano da identificação científica definitiva.",
            "score": 85
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "271,4 °C",
            "justification": "Um dos pontos de fusão mais baixos entre os metais não alcalinos.",
            "score": 27
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1564 °C",
            "justification": "Temperatura na qual se torna gasoso.",
            "score": 16
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
            "value": "Extrema Radioatividade",
            "justification": "Tão radioativo que um pedaço visível se vaporizaria pelo próprio calor gerado.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Perigo Radiológico",
            "justification": "Não ocorre significativamente na natureza, mas é um subproduto perigoso do urânio.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Crítico (Lethal)",
            "justification": "Uma das substâncias mais tóxicas conhecidas devido à emissão de partículas alfa.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Fontes de Calor Espaciais",
            "justification": "Usado em geradores termoelétricos para naves espaciais de longa distância.",
            "score": 80
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2, 4, 6",
            "justification": "Sua química é complexa e difícil de estudar devido à radioatividade.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Vestígios",
            "justification": "Extremamente raro, encontrado apenas em minérios de urânio.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Desprezível",
            "justification": "Elemento instável com vida curta, raro em todo o cosmos.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "209 u",
            "justification": "Massa do seu isótopo mais estável (Po-209).",
            "score": 209
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "9,196 g/cm³",
            "justification": "Metal denso, similar ao bismuto.",
            "score": 92
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "167 pm",
            "justification": "Tamanho atômico característico do final do período 6.",
            "score": 167
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "-2, +2, +4, +6",
            "justification": "Apresenta uma ampla gama de estados de oxidação.",
            "score": 45
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Moderada",
            "justification": "Metalóide com propriedades condutoras típicas.",
            "score": 15
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "2,0 (Pauling)",
            "justification": "Valor similar ao selênio e telúrio.",
            "score": 20
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado que brilha com uma luz azulada devido à radiação.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6p⁴",
            "justification": "Possui quatro elétrons no subnível 6p.",
            "score": 60
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
            "justification": "Configuração que o coloca no grupo dos calcogênios.",
            "score": 98
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "84",
            "justification": "Número atômico que define o Polônio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "125",
            "justification": "Número de nêutrons em seu isótopo Po-209.",
            "score": 125
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altamente Instável",
            "justification": "Todos os seus isótopos são radioativos com meias-vidas curtas.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Escovas Antiestáticas",
            "justification": "Usado em pequenas quantidades para eliminar carga estática em processos industriais.",
            "score": 60
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "França",
            "justification": "Isolado pela primeira vez por Marie e Pierre Curie em Paris.",
            "score": 95
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Brilho Espontâneo",
            "justification": "O ar ao redor do polônio brilha devido à intensa radiação.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Polônia",
            "justification": "Homenagem ao país natal de Marie Curie.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Marie e Pierre Curie",
            "justification": "Pioneiros no estudo da radioatividade.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1898",
            "justification": "Uma das descobertas mais famosas da ciência moderna.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "254 °C",
            "justification": "Ponto de fusão relativamente baixo.",
            "score": 25
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "962 °C",
            "justification": "Vaporiza-se facilmente em altas temperaturas.",
            "score": 10
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
            "value": "Vida Efêmera",
            "justification": "Seu isótopo mais estável tem uma meia-vida de apenas 8,1 horas.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Radioisótopo Raro",
            "justification": "Quase não existe na natureza, desaparecendo rapidamente após ser formado.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Altamente radioativo; acumula-se na tireoide como o iodo.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Radioterapia de Câncer",
            "justification": "Estudado para tratamento de tumores específicos através de partículas alfa.",
            "score": 85
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "1, 3, 5, 7",
            "justification": "Segue o padrão dos halogênios em seus estados de oxidação.",
            "score": 35
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "< 28 gramas",
            "justification": "Estima-se que exista menos de 30g de astato em toda a crosta terrestre.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Um dos elementos mais raros de todo o universo observável.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "210 u",
            "justification": "Massa do isótopo sintético mais estável.",
            "score": 210
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "≈ 7 g/cm³",
            "justification": "Densidade estimada baseada em tendências do grupo.",
            "score": 70
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "≈ 145 pm",
            "justification": "Estimado como o maior raio entre os halogênios.",
            "score": 145
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "-1, +1, +3, +5",
            "justification": "Comportamento similar ao iodo, mas com tendências metálicas.",
            "score": 40
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Muito Baixa",
            "justification": "Provavelmente um semicondutor ou isolante.",
            "score": 2
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "2,2 (Pauling)",
            "justification": "O halogênio menos eletronegativo de todos.",
            "score": 45
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Estimado)",
            "justification": "Provavelmente um sólido escuro que se auto-vaporiza pela radiação.",
            "score": 95
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6p⁵",
            "justification": "Falta apenas um elétron para completar a camada de valência.",
            "score": 60
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
            "justification": "Configuração clássica de um halogênio pesado.",
            "score": 98
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "85",
            "justification": "Identidade atômica do Astato.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "125",
            "justification": "Número de nêutrons no isótopo At-210.",
            "score": 125
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Extremamente Instável",
            "justification": "Nenhum isótopo dura mais que algumas horas.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Medicina Nuclear",
            "justification": "Usado em pesquisas avançadas para tratar micrometástases.",
            "score": 75
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Califórnia, EUA",
            "justification": "Sintetizado pela primeira vez na Universidade de Berkeley.",
            "score": 90
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "O Elemento Invisível",
            "justification": "Nunca ninguém viu uma amostra pura de astato a olho nu.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Astatos (Grego)",
            "justification": "Significa 'instável', descrevendo sua natureza radioativa.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Dale Corson e equipe",
            "justification": "Produzido artificialmente bombardeando bismuto com partículas alfa.",
            "score": 90
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1940",
            "justification": "Descoberto pouco antes da entrada dos EUA na Segunda Guerra.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "302 °C (Est.)",
            "justification": "Ponto de fusão estimado baseado no iodo.",
            "score": 30
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "337 °C (Est.)",
            "justification": "Ponto de ebulição muito próximo ao de fusão.",
            "score": 5
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
            "value": "Gás radioativo",
            "justification": "Invisível e inodoro, pode se acumular em porões sem ser notado.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Poluente Geológico",
            "justification": "Ocorre naturalmente no solo e nas rochas como subproduto do rádio.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Alto (Câncer)",
            "justification": "Segunda maior causa de câncer de pulmão no mundo.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Traçador Geológico",
            "justification": "Usado para prever terremotos e estudar movimentos de massas de ar.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "0 (Gás Nobre)",
            "justification": "Extremamente inerte, forma compostos apenas sob condições extremas.",
            "score": 1
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Muito Baixa",
            "justification": "Gás raro na atmosfera, mas comum em certas formações rochosas.",
            "score": 10
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Desprezível",
            "justification": "Elemento pesado e instável raro no cosmos.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "222 u",
            "justification": "Massa do seu isótopo mais comum e duradouro.",
            "score": 222
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "9,73 g/L (Gás)",
            "justification": "Um dos gases mais densos conhecidos.",
            "score": 10
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "120 pm",
            "justification": "Tamanho atômico reduzido devido à contração do núcleo.",
            "score": 120
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "0, +2",
            "justification": "Geralmente neutro, mas pode formar fluoretos de radônio.",
            "score": 10
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Isolante",
            "justification": "Como gás nobre, não conduz eletricidade em condições normais.",
            "score": 1
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Quimicamente inerte na maioria das condições.",
            "score": 1
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Gás",
            "justification": "Gás incolor e denso à temperatura ambiente.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6p⁶",
            "justification": "Camada de valência completa, definindo sua natureza de gás nobre.",
            "score": 100
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
            "justification": "Configuração eletrônica de máxima estabilidade (octeto).",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "86",
            "justification": "Número atômico que define o Radônio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "136",
            "justification": "Número de nêutrons no isótopo Rn-222.",
            "score": 136
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altamente Radioativo",
            "justification": "Emite partículas alfa e decai em elementos sólidos radioativos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Terapia de Câncer",
            "justification": "Historicamente usado em sementes radioativas para tratamento de tumores.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Alemanha",
            "justification": "Descoberto por Friedrich Dorn ao estudar o decaimento do rádio.",
            "score": 80
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Gás Fosforescente",
            "justification": "Em estado líquido ou sólido, brilha intensamente devido à radiação.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Radium (Rádio)",
            "justification": "Nomeado por ser um produto do decaimento do rádio.",
            "score": 90
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Friedrich Ernst Dorn",
            "justification": "Identificou o gás como um novo elemento radioativo em 1900.",
            "score": 85
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1900",
            "justification": "Uma das primeiras descobertas de gases radioativos.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "-71 °C",
            "justification": "Ponto de fusão baixo, típico de gases nobres pesados.",
            "score": 10
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "-61,7 °C",
            "justification": "Vaporiza-se rapidamente em temperaturas muito baixas.",
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
            "value": "Extrema Instabilidade",
            "justification": "O elemento é tão instável que desaparece em poucos minutos (meia-vida de 22 min).",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Vestígios Radioativos",
            "justification": "Ocorre naturalmente em quantidades ínfimas como parte de cadeias de decaimento.",
            "score": 2
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Crítico",
            "justification": "Radioatividade extrema que destrói células instantaneamente.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Pesquisa Atômica",
            "justification": "Usado para entender a estabilidade de núcleos pesados no limite da tabela periódica.",
            "score": 40
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "1",
            "justification": "Como metal alcalino, tende a perder um elétron para formar ligações.",
            "score": 10
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Quase inexistente",
            "justification": "Estima-se que existam menos de 30g de frâncio na crosta terrestre em qualquer momento.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Não sobrevive tempo suficiente para ser detectado no espaço sideral.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "223 u",
            "justification": "Massa do seu isótopo mais 'estável'.",
            "score": 223
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "≈ 1,87 g/cm³",
            "justification": "Densidade estimada baseada em tendências dos metais alcalinos.",
            "score": 18
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "≈ 348 pm",
            "justification": "Estimado como o maior átomo da tabela periódica em seu estado fundamental.",
            "score": 348
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+1",
            "justification": "Estado de oxidação único e característico do grupo 1.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Alta (Teórica)",
            "justification": "Deveria ser um excelente condutor, mas sua vida curta impede testes práticos.",
            "score": 90
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "0,7 (Pauling)",
            "justification": "O elemento menos eletronegativo de todos, perdendo elétrons com extrema facilidade.",
            "score": 7
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Instável)",
            "justification": "Metal alcalino altamente reativo que derrete próximo à temperatura ambiente.",
            "score": 80
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "7s¹",
            "justification": "Um único elétron na sétima camada de energia.",
            "score": 10
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 7s¹",
            "justification": "Configuração clássica de um metal alcalino no início do período 7.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "87",
            "justification": "Número de prótons que define o Frâncio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "136",
            "justification": "Número de nêutrons no isótopo Fr-223.",
            "score": 136
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Máxima Instabilidade",
            "justification": "Elemento de vida mais curta entre os primeiros 101 da tabela periódica.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Espectroscópica",
            "justification": "Usado para estudar a força nuclear fraca através de armadilhas magnéticas.",
            "score": 45
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "França",
            "justification": "Descoberto no Instituto Curie em Paris.",
            "score": 95
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Metal que se auto-destrói",
            "justification": "O calor de sua própria radioatividade vaporizaria qualquer amostra visível.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "França",
            "justification": "Homenagem ao país de sua descoberta.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Marguerite Perey",
            "justification": "Foi assistente de Marie Curie e descobriu o frâncio sozinha.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1939",
            "justification": "O último elemento natural a ser descoberto na natureza.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "27 °C",
            "justification": "Derreteria na mão, se não fosse fatal segurá-lo.",
            "score": 5
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "677 °C",
            "justification": "Ponto de ebulição baixo, típico do final do grupo 1.",
            "score": 10
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
            "value": "Venenoso e Radioativo",
            "justification": "Seu brilho sedutor esconde uma radiação capaz de desintegrar ossos.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Poluente Radioativo",
            "justification": "Pode contaminar águas subterrâneas perto de minas de urânio.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "O corpo o confunde com cálcio e o deposita nos ossos, causando leucemia.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Radioterapia Histórica",
            "justification": "Foi a primeira grande arma da ciência contra o câncer.",
            "score": 90
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2",
            "justification": "Como metal alcalino-terroso, forma ligações bivalentes.",
            "score": 20
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Mínima",
            "justification": "Encontrado em minérios de urânio na proporção de 1g para cada 7 toneladas.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Desprezível",
            "justification": "Raro no cosmos devido à sua instabilidade.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "226 u",
            "justification": "Massa do isótopo rádio-226, o mais estável.",
            "score": 226
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "5,5 g/cm³",
            "justification": "Metal denso, o mais pesado do seu grupo.",
            "score": 55
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "215 pm",
            "justification": "Átomo grande, típico dos elementos do final da tabela.",
            "score": 215
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2",
            "justification": "Estado de oxidação padrão para o grupo 2.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Moderada",
            "justification": "Bom condutor, mas seu uso é limitado pelo risco radiológico.",
            "score": 40
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "0,9 (Pauling)",
            "justification": "Baixa eletronegatividade, altamente eletropositivo.",
            "score": 9
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal branco prateado que escurece ao ar.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "7s²",
            "justification": "Dois elétrons de valência na última camada.",
            "score": 20
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 7s²",
            "justification": "Configuração que o define como o metal alcalino-terroso mais pesado.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "88",
            "justification": "Número atômico do Rádio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "138",
            "justification": "Número de nêutrons no isótopo Ra-226.",
            "score": 138
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Milhões de vezes mais radioativo que o urânio.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pintura Luminescente",
            "justification": "Usado antigamente em ponteiros de relógio que brilham no escuro.",
            "score": 70
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "França",
            "justification": "Descoberto por Marie e Pierre Curie em Paris.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "As Moças do Rádio",
            "justification": "Pintoras de relógios que adoeceram por lamber os pincéis com rádio.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Radius (Latim)",
            "justification": "Significa 'raio', referindo-se à sua emissão de radiação.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Marie e Pierre Curie",
            "justification": "A descoberta que rendeu o segundo prêmio Nobel de Marie.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1898",
            "justification": "Ano crucial para a história da física nuclear.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "700 °C",
            "justification": "Ponto de fusão razoavelmente alto para um metal pesado.",
            "score": 70
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1737 °C",
            "justification": "Ebulição alta, metal persistente.",
            "score": 80
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
            "value": "Toxidade Química e Radiológica",
            "justification": "Tão perigoso quanto o plutônio se ingerido ou inalado.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Resíduo de Urânio",
            "justification": "Encontrado em minérios de urânio, mas sua extração é complexa.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Altíssimo",
            "justification": "Pode causar danos severos ao DNA e medula óssea.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Fontes de Elétrons",
            "justification": "Usado em pesquisas como fonte potente de elétrons.",
            "score": 55
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "Estado de oxidação mais comum e estável.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Mínima",
            "justification": "Cerca de 0,0002 mg por tonelada de crosta terrestre.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Desprezível",
            "justification": "Elemento pesado e instável raro no cosmos.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "227 u",
            "justification": "Massa do seu isótopo mais comum.",
            "score": 227
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "10,07 g/cm³",
            "justification": "Metal denso, o primeiro da série dos actinídeos.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "188 pm",
            "justification": "Tamanho atômico característico dos actinídeos precoces.",
            "score": 188
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3",
            "justification": "Comportamento similar ao lantânio.",
            "score": 80
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Moderada",
            "justification": "Condutor metálico típico.",
            "score": 35
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,1 (Pauling)",
            "justification": "Baixa, similar aos metais de transição iniciais.",
            "score": 11
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado que brilha levemente no escuro.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d¹",
            "justification": "Possui um elétron no subnível 6d.",
            "score": 10
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 6d¹ 7s²",
            "justification": "Configuração que inicia a série dos actinídeos.",
            "score": 95
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "89",
            "justification": "Número atômico do Actínio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "138",
            "justification": "Número de nêutrons no isótopo Ac-227.",
            "score": 138
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Cerca de 150 vezes mais radioativo que o rádio.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Geradores Termoelétricos",
            "justification": "Potencial para uso em geradores de calor em missões espaciais.",
            "score": 65
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "França",
            "justification": "Descoberto por André-Louis Debierne em Paris.",
            "score": 90
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Brilho Azulado",
            "justification": "A radiação ioniza o ar ao redor, criando um brilho azul fantasmagórico.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Aktinos (Grego)",
            "justification": "Significa 'raio' ou 'feixe', devido à sua radiação.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "André-Louis Debierne",
            "justification": "Amigo dos Curie que isolou o elemento em 1899.",
            "score": 90
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1899",
            "justification": "Descoberto logo após o rádio e o polônio.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1050 °C",
            "justification": "Ponto de fusão alto para um metal pesado.",
            "score": 85
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "3198 °C",
            "justification": "Vaporiza-se apenas em temperaturas extremas.",
            "score": 95
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
            "value": "Raridade Extrema",
            "justification": "Tão difícil de encontrar que dificulta qualquer aplicação em larga escala.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Pequeno Impacto",
            "justification": "Sua raridade faz com que não represente um risco ambiental global.",
            "score": 40
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Altamente radiotóxico, acumula-se nos rins e ossos.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Análise de Sedimentos",
            "justification": "Usado em geologia para datar sedimentos oceânicos antigos.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "5",
            "justification": "Apresenta o estado de oxidação +5 como o mais estável.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Pequenina",
            "justification": "Cerca de algumas partes por trilhão na crosta terrestre.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Desprezível",
            "justification": "Um dos elementos mais raros de origem natural.",
            "score": 0.1
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "231,03 u",
            "justification": "Massa do isótopo mais comum encontrado na natureza.",
            "score": 231
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "15,37 g/cm³",
            "justification": "Metal muito denso e pesado.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "163 pm",
            "justification": "Compacto para um elemento tão pesado.",
            "score": 163
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+4, +5",
            "justification": "Estados de oxidação dominantes e característicos.",
            "score": 90
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Supercondutor)",
            "justification": "Torna-se supercondutor em temperaturas próximas ao zero absoluto.",
            "score": 85
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,5 (Pauling)",
            "justification": "Moderadamente baixa, similar ao urânio.",
            "score": 15
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal brilhante e denso com estrutura cristalina complexa.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f²",
            "justification": "Possui dois elétrons no subnível 5f.",
            "score": 20
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f² 6d¹ 7s²",
            "justification": "Configuração eletrônica complexa de um actinídeo precoce.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "91",
            "justification": "Número atômico do Protactínio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "140",
            "justification": "Número de nêutrons em seu isótopo principal (Pa-231).",
            "score": 140
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Alta",
            "justification": "Meia-vida de 32.760 anos, emitindo radiação alfa perigosa.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Básica",
            "justification": "Principalmente usado para entender a química dos elementos pesados.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Alemanha / Reino Unido",
            "justification": "Identificado de forma independente por equipes em Berlim e Glasgow.",
            "score": 85
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Mãe do Actínio",
            "justification": "Seu nome vem de ser o precursor do actínio por decaimento alfa.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Proto-Actinium",
            "justification": "Significa 'pai do actínio' ou 'primeiro actínio'.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Lise Meitner / Otto Hahn",
            "justification": "Descobridores da fissão nuclear que também isolaram este elemento.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1917",
            "justification": "Isolado durante o auge da Primeira Guerra Mundial.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1568 °C",
            "justification": "Ponto de fusão elevado para um actinídeo.",
            "score": 90
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "4000 °C (Est.)",
            "justification": "Vaporiza-se apenas em temperaturas extremamente altas.",
            "score": 95
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
            "value": "Crítico na Fissão",
            "justification": "Pode causar acidentes letais se acumulado em massa crítica.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Dual (Energia/Armas)",
            "justification": "Fonte imensa de energia, mas seu uso bélico é devastador para o planeta.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Alto",
            "justification": "Metal pesado tóxico e radioativo, causa danos renais severos.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Energia de Carbono Zero",
            "justification": "Gera grandes quantidades de eletricidade sem emitir gases estufa.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "6",
            "justification": "Apresenta uma química de coordenação rica com vários ligantes.",
            "score": 60
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Baixa",
            "justification": "Encontrado em minérios de pechblenda, mais comum que a prata.",
            "score": 20
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Mínima",
            "justification": "Formado em supernovas, raro comparado a elementos leves.",
            "score": 0.5
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "238,03 u",
            "justification": "Massa do isótopo natural predominante.",
            "score": 238
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "19,1 g/cm³",
            "justification": "Metal extremamente denso, 70% mais denso que o chumbo.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "138 pm",
            "justification": "Átomo pesado mas relativamente pequeno.",
            "score": 138
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +4, +5, +6",
            "justification": "O estado +6 é o mais comum em condições ambientais.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa",
            "justification": "Condutor metálico pobre em comparação ao cobre.",
            "score": 10
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,38 (Pauling)",
            "justification": "Valor típico para um metal actinídeo.",
            "score": 14
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado denso e maleável.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f³",
            "justification": "Três elétrons no subnível 5f definem suas propriedades.",
            "score": 30
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f³ 6d¹ 7s²",
            "justification": "Configuração que o coloca no coração da série dos actinídeos.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "92",
            "justification": "Número atômico que define o Urânio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "146",
            "justification": "Número de nêutrons no isótopo U-238.",
            "score": 146
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Baixa (Isótopo estável)",
            "justification": "U-238 tem uma meia-vida de 4,5 bilhões de anos.",
            "score": 90
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Combustível Nuclear",
            "justification": "Principal fonte de energia para reatores nucleares civis.",
            "score": 100
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Alemanha",
            "justification": "Identificado por Martin Heinrich Klaproth em Berlim.",
            "score": 85
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Vidro de Urânio",
            "justification": "Antigamente usado para dar uma cor verde fluorescente a copos e vidros.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Urano",
            "justification": "Homenagem ao planeta Urano, descoberto pouco antes.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Martin Heinrich Klaproth",
            "justification": "Químico prussiano que descobriu o elemento em 1789.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1789",
            "justification": "Ano da Revolução Francesa.",
            "score": 90
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1132 °C",
            "justification": "Ponto de fusão moderado para um metal pesado.",
            "score": 80
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "4131 °C",
            "justification": "Ebulição alta, metal muito persistente.",
            "score": 95
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
            "value": "Instabilidade Sintética",
            "justification": "Não existe de forma estável na natureza, deve ser criado em reatores.",
            "score": 10
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Perigoso (Sintético)",
            "justification": "Um resíduo perigoso do processamento de combustível nuclear.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Pode causar sérios danos por radiação se entrar no organismo.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Detecção de Neutrons",
            "justification": "Usado em dispositivos de detecção de neutrons de alta energia.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "5",
            "justification": "Apresenta estados de oxidação variados, sendo +5 um dos mais importantes.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Vestígios",
            "justification": "Ocorre em quantidades ínfimas em minérios de urânio por captura de neutrons.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Elemento artificial, não observado fora da Terra.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "237 u",
            "justification": "Massa do seu isótopo mais estável e comum.",
            "score": 237
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "20,45 g/cm³",
            "justification": "Metal densíssimo, um dos mais pesados conhecidos.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "130 pm",
            "justification": "Raio atômico reduzido pela contração dos actinídeos.",
            "score": 130
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +4, +5, +6, +7",
            "justification": "Possui uma ampla gama de estados de oxidação coloridos.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Moderada",
            "justification": "Condutor metálico típico do seu grupo.",
            "score": 30
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,36 (Pauling)",
            "justification": "Baixa, similar à do urânio.",
            "score": 14
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado que oxida lentamente ao ar.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f⁴",
            "justification": "Quatro elétrons no subnível 5f.",
            "score": 40
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f⁴ 6d¹ 7s²",
            "justification": "Configuração que marca o avanço na série transurânica.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "93",
            "justification": "Número atômico do Netúnio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "144",
            "justification": "Número de nêutrons no isótopo Np-237.",
            "score": 144
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Alta",
            "justification": "Isótopo Np-237 tem uma meia-vida de 2,14 milhões de anos.",
            "score": 80
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Precursor do Plutônio",
            "justification": "Principalmente usado para produzir Plutônio-238 para baterias espaciais.",
            "score": 75
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Primeiro elemento transurânico produzido em laboratório.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Além do Urânio",
            "justification": "Sua descoberta quebrou a barreira do elemento natural mais pesado.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Netuno",
            "justification": "Nomeado após o planeta Netuno, seguindo o Urânio.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Edwin McMillan e Philip Abelson",
            "justification": "Cientistas que sintetizaram o elemento em 1940.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1940",
            "justification": "Ano crucial para o início da era atômica.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "644 °C",
            "justification": "Ponto de fusão relativamente baixo para um metal pesado.",
            "score": 60
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "3902 °C",
            "justification": "Vaporiza-se apenas em temperaturas muito elevadas.",
            "score": 90
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
            "value": "Venenoso e Crítico",
            "justification": "Toxidade química severa combinada com radioatividade extrema.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Perigoso (Lixo Nuclear)",
            "justification": "Um dos componentes mais problemáticos do lixo nuclear de longa vida.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Crítico",
            "justification": "Ingestão de microgramas pode ser fatal devido à radiação alfa.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Exploração do Espaço Profundo",
            "justification": "Isótopo Pu-238 fornece energia constante para sondas como a Voyager.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "6",
            "justification": "Capaz de formar complexos químicos estáveis e variados.",
            "score": 60
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Vestígios Extremos",
            "justification": "Ocorre naturalmente em quantidades desprezíveis em minas de urânio.",
            "score": 1
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Elemento essencialmente sintético no cenário cósmico atual.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "244 u",
            "justification": "Massa do seu isótopo de vida mais longa.",
            "score": 244
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "19,81 g/cm³",
            "justification": "Metal densíssimo e pesado.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "159 pm",
            "justification": "Tamanho atômico característico dos actinídeos médios.",
            "score": 159
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +4, +5, +6",
            "justification": "Pode existir em quatro estados de oxidação simultâneos em solução.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Muito Baixa",
            "justification": "Pobre condutor elétrico para um metal.",
            "score": 5
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,28 (Pauling)",
            "justification": "Baixa eletronegatividade, metal altamente reativo.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado que se aquece espontaneamente pela própria radiação.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f⁶",
            "justification": "Seis elétrons no subnível 5f definem sua complexidade química.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f⁶ 7s²",
            "justification": "Configuração eletrônica que o define como actinídeo.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "94",
            "justification": "Número atômico do Plutônio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "150",
            "justification": "Número de nêutrons no isótopo Pu-244.",
            "score": 150
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Alta",
            "justification": "Isótopo Pu-239 é físsil e tem meia-vida de 24.110 anos.",
            "score": 75
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Energia Espacial",
            "justification": "Baterias nucleares para robôs em Marte e sondas interplanetárias.",
            "score": 100
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Sintetizado por Glenn Seaborg e sua equipe em um ciclotron.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Metal Quente",
            "justification": "Uma peça de plutônio é quente ao toque devido ao decaimento alfa.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Plutão",
            "justification": "Nomeado após o planeta Plutão (na época), seguindo Netuno.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Glenn T. Seaborg e equipe",
            "justification": "O mais prolífico descobridor de elementos transurânicos.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1940",
            "justification": "Descoberto em segredo durante a Segunda Guerra Mundial.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "639 °C",
            "justification": "Ponto de fusão incomumente baixo para um actinídeo.",
            "score": 60
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "3228 °C",
            "justification": "Vaporiza-se em temperaturas elevadas.",
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
            "value": "Emissor de Raios Gama",
            "justification": "Sua radiação gama exige blindagem de chumbo para manuseio seguro.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Benéfico (Uso doméstico)",
            "justification": "Salva milhares de vidas anualmente em detectores de fumaça.",
            "score": 90
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Alto (Inalação)",
            "justification": "Perigoso se o detector de fumaça for quebrado e o elemento inalado.",
            "score": 10
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Segurança Residencial",
            "justification": "O isótopo Am-241 é o componente chave dos detectores de fumaça iônicos.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "O estado de oxidação +3 é o mais comum e estável.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não ocorre naturalmente; produzido por bombardeamento de plutônio.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Elemento puramente sintético.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "243 u",
            "justification": "Massa do seu isótopo de vida mais longa.",
            "score": 243
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "13,67 g/cm³",
            "justification": "Metal denso, similar ao mercúrio em densidade.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "173 pm",
            "justification": "Tamanho atômico padrão para os actinídeos.",
            "score": 173
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +3, +4, +5, +6",
            "justification": "Apresenta uma química de oxidação variada e complexa.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa",
            "justification": "Condutor metálico pobre.",
            "score": 15
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Baixa, similar aos demais actinídeos.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado brilhante que perde o brilho ao ar seco.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f⁷",
            "justification": "Subnível 5f preenchido pela metade, conferindo estabilidade relativa.",
            "score": 70
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f⁷ 7s²",
            "justification": "Configuração que o assemelha ao Európio nas Terras Raras.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "95",
            "justification": "Identidade atômica do Amerício.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "148",
            "justification": "Número de nêutrons no isótopo Am-243.",
            "score": 148
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Moderada / Alta",
            "justification": "Am-241 tem uma meia-vida de 432 anos.",
            "score": 60
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Detectores de Fumaça",
            "justification": "Sua principal aplicação prática no cotidiano humano.",
            "score": 100
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Chicago, EUA",
            "justification": "Sintetizado durante o Projeto Manhattan no Laboratório Metalúrgico.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Elemento em Casa",
            "justification": "É o único elemento transurânico que a maioria das pessoas tem em casa.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Américas",
            "justification": "Homenagem ao continente americano, em analogia ao Európio.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Glenn Seaborg e equipe",
            "justification": "Descoberto em 1944 como parte das pesquisas nucleares de guerra.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1944",
            "justification": "Descoberto em segredo durante a Segunda Guerra Mundial.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1176 °C",
            "justification": "Ponto de fusão relativamente alto para o grupo.",
            "score": 85
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "2011 °C",
            "justification": "Vaporiza-se em temperaturas moderadamente altas para um metal.",
            "score": 70
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
            "value": "Calor Radiogênico",
            "justification": "Gera tanto calor que pode derreter se não for resfriado.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Perigoso (Altamente Radioativo)",
            "justification": "Representa um risco severo de contaminação se não houver contenção.",
            "score": 5
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Crítico",
            "justification": "Acumula-se no tecido ósseo e destrói a medula.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Análise Espacial",
            "justification": "Usado em espectrômetros de raios-X em missões a Marte e à Lua.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "O estado de oxidação +3 é o dominante e mais estável.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não existe naturalmente na Terra.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Elemento exclusivamente sintético.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "247 u",
            "justification": "Massa do seu isótopo mais duradouro.",
            "score": 247
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "13,51 g/cm³",
            "justification": "Metal pesado e denso.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "174 pm",
            "justification": "Similar ao amerício em tamanho atômico.",
            "score": 174
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +4",
            "justification": "Química relativamente simples para um actinídeo.",
            "score": 80
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa",
            "justification": "Pobre condutor elétrico metálico.",
            "score": 15
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Valor padrão para os actinídeos transplutonianos.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado e duro, brilha no escuro pela própria radiação.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f⁷",
            "justification": "Possui uma camada 5f preenchida pela metade, similar ao Gadolínio.",
            "score": 70
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f⁷ 6d¹ 7s²",
            "justification": "Configuração que explica sua estabilidade química relativa.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "96",
            "justification": "Identidade atômica do Cúrio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "151",
            "justification": "Número de nêutrons no isótopo Cm-247.",
            "score": 151
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Cm-244 emite radiação alfa tão forte que brilha em roxo.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Fonte de Partículas Alfa",
            "justification": "Usado para bombardear outras amostras em missões espaciais.",
            "score": 100
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Identificado por Seaborg, James e Ghiorso em 1944.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Brilho Roxo",
            "justification": "A intensa radioatividade ioniza o ar criando uma aura luminosa.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Marie e Pierre Curie",
            "justification": "Homenagem aos pioneiros da radioatividade.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Glenn Seaborg e equipe",
            "justification": "Descoberto durante a pesquisa secreta do Projeto Manhattan.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1944",
            "justification": "Descoberto no mesmo ano que o amerício.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1340 °C",
            "justification": "Ponto de fusão alto, refletindo fortes ligações metálicas.",
            "score": 90
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "3110 °C",
            "justification": "Vaporiza-se em temperaturas muito elevadas.",
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
            "value": "Vida Curta",
            "justification": "Isótopos de difícil produção e manuseio rápido necessário.",
            "score": 5
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Neutro (Sintético)",
            "justification": "Produzido em quantidades tão pequenas que não afeta o meio ambiente.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação alfa perigosa se houver contato direto.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Ciência de Fronteira",
            "justification": "Essencial para a síntese de elementos ainda mais pesados.",
            "score": 80
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3, 4",
            "justification": "Apresenta estados de oxidação múltiplos e estáveis.",
            "score": 40
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não existe naturalmente no planeta.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Indetectável",
            "justification": "Nenhuma fonte natural conhecida no cosmos.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "247 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 247
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "14,78 g/cm³",
            "justification": "Metal denso, mais pesado que o cúrio.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "170 pm",
            "justification": "Tamanho atômico reduzido pela contração dos actinídeos.",
            "score": 170
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +4",
            "justification": "Química característica dos actinídeos tardios.",
            "score": 80
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa",
            "justification": "Condutor metálico típico.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Similar aos seus vizinhos actinídeos.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado que existe em duas formas cristalinas.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f⁹",
            "justification": "Nove elétrons na camada 5f.",
            "score": 90
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f⁹ 7s²",
            "justification": "Configuração padrão para um actinídeo trans-curiano.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "97",
            "justification": "Identidade atômica do Berquélio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "150",
            "justification": "Número de nêutrons no isótopo Bk-247.",
            "score": 150
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Alta",
            "justification": "Isótopo Bk-249 tem meia-vida de apenas 330 dias.",
            "score": 30
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Produção de Tenessino",
            "justification": "Usado como alvo para sintetizar o elemento 117.",
            "score": 90
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Criado no Laboratório de Radiação da Universidade da Califórnia.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Elemento Cidade",
            "justification": "Nomeado em homenagem à cidade onde foi descoberto.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Berkeley",
            "justification": "Homenagem à cidade de Berkeley na Califórnia.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Thompson, Ghiorso e Seaborg",
            "justification": "Equipe lendária na descoberta de novos elementos.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1949",
            "justification": "Descoberto pouco antes do final da década de 40.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "986 °C",
            "justification": "Ponto de fusão moderado.",
            "score": 75
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "2627 °C (Est.)",
            "justification": "Estimado com base em tendências do grupo.",
            "score": 80
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
            "value": "Produção Limitada",
            "justification": "Sintetizado apenas em reatores nucleares de alto fluxo em quantidades de miligramas.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Moderado (Sintético)",
            "justification": "Representa um risco de contaminação radioativa concentrada.",
            "score": 40
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "A radiação alfa e a emissão de nêutrons destroem células vivas.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Terapia de Câncer",
            "justification": "O Cf-252 é usado em braquiterapia para tratar tumores cervicais e cerebrais.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "Estado de oxidação +3 é o mais comum e estável.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não existe naturalmente na Terra.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Desprezível",
            "justification": "Pode ser formado em supernovas, mas decai rapidamente.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "251 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 251
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "15,1 g/cm³",
            "justification": "Metal denso, o mais pesado dos actinídeos que se pode pesar.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "186 pm",
            "justification": "Similar ao európio em comportamento físico.",
            "score": 186
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +3, +4",
            "justification": "Apresenta estados de oxidação variados.",
            "score": 90
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Moderada",
            "justification": "Condutor metálico típico do grupo.",
            "score": 35
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Baixa, similar à do berquélio.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal prateado e maleável o suficiente para ser cortado com lâmina.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f¹⁰",
            "justification": "Dez elétrons na camada 5f.",
            "score": 100
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁰ 7s²",
            "justification": "Configuração que o define como um actinídeo pesado.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "98",
            "justification": "Identidade atômica do Califórnio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "153",
            "justification": "Número de nêutrons no isótopo Cf-251.",
            "score": 153
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Alta",
            "justification": "Cf-251 tem meia-vida de 898 anos.",
            "score": 70
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Emissor de Nêutrons",
            "justification": "Usado para detectar camadas de petróleo e água em poços profundos.",
            "score": 100
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Sintetizado em 1950 na Universidade da Califórnia.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Metal Caro",
            "justification": "Um dos elementos mais caros do mundo devido à sua difícil síntese.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Califórnia",
            "justification": "Homenagem ao estado e à universidade da Califórnia.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Thompson, Street, Ghiorso e Seaborg",
            "justification": "Equipe de pioneiros em elementos transurânicos.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1950",
            "justification": "Início da década de 50.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "900 °C",
            "justification": "Ponto de fusão moderado.",
            "score": 70
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1470 °C (Est.)",
            "justification": "Vaporiza-se em temperaturas moderadas para um metal.",
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
            "value": "Produção em Microgramas",
            "justification": "Tão raro que só pode ser visto a olho nu em quantidades minúsculas.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Neutro",
            "justification": "Sem impacto ambiental devido à sua raridade extrema.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Altamente radiotóxico, deve ser manuseado com robôs.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Análise Química Avançada",
            "justification": "Usado para testar limites de teorias químicas em laboratório.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "O estado de oxidação +3 é o mais importante e estável.",
            "score": 30
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
            "value": "Indetectável",
            "justification": "Elemento exclusivamente de laboratório.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "252 u",
            "justification": "Massa do isótopo mais comum produzido em reatores.",
            "score": 252
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "8,84 g/cm³",
            "justification": "Metal densíssimo, propriedades baseadas em tendências do grupo.",
            "score": 88
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "186 pm",
            "justification": "Tamanho atômico similar ao califórnio.",
            "score": 186
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +3, +4",
            "justification": "Química de coordenação complexa.",
            "score": 90
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa",
            "justification": "Condutor metálico típico.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Consistente com os actinídeos vizinhos.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido",
            "justification": "Metal macio e prateado.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f¹¹",
            "justification": "Onze elétrons na subcamada 5f.",
            "score": 110
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹¹ 7s²",
            "justification": "Configuração que o posiciona entre os actinídeos pesados.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "99",
            "justification": "Identidade atômica do Enstênio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "153",
            "justification": "Número de nêutrons no isótopo Es-252.",
            "score": 153
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo Es-253 tem meia-vida de apenas 20 dias.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Atômica",
            "justification": "Principalmente para estudar a estrutura nuclear de elementos pesados.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Atol de Eniwetok",
            "justification": "Descoberto nos detritos da primeira explosão de bomba de hidrogênio (Mike).",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Nascido do Fogo",
            "justification": "Descoberto secretamente nos resíduos de testes termonucleares no Pacífico.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Albert Einstein",
            "justification": "Homenagem póstuma ao físico mais famoso do século XX.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Albert Ghiorso e equipe",
            "justification": "Identificado por análise química de corais contaminados.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1952",
            "justification": "Revelado ao mundo anos depois de sua descoberta secreta.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "860 °C",
            "justification": "Ponto de fusão moderado.",
            "score": 65
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "996 °C (Est.)",
            "justification": "Volátil em temperaturas relativamente baixas para um metal.",
            "score": 40
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
            "value": "Produção em Escala Atômica",
            "justification": "Criado átomo por átomo, impossível de ver a olho nu.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nulo",
            "justification": "Quantidade ínfima sem qualquer impacto ambiental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação alfa perigosíssima em nível microscópico.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Confirmação de Teorias",
            "justification": "Ajuda a confirmar o modelo de camadas do núcleo atômico.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "Estado de oxidação +3 é o mais provável e estudado.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não ocorre naturalmente na Terra.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Decai muito rápido para existir fora de laboratórios.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "257 u",
            "justification": "Massa do seu isótopo de vida mais longa.",
            "score": 257
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "9,7 g/cm³ (Est.)",
            "justification": "Densidade estimada com base no grupo dos actinídeos.",
            "score": 97
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "194 pm",
            "justification": "Tamanho atômico estimado.",
            "score": 194
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +3",
            "justification": "Demonstra comportamentos químicos de actinídeo pesado.",
            "score": 80
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Deveria conduzir como metal, se houvesse amostra suficiente.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Consistente com o fim da série actinídea.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Presume-se ser um metal em condições padrão.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f¹²",
            "justification": "Doze elétrons no subnível 5f.",
            "score": 120
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹² 7s²",
            "justification": "Configuração clássica do centésimo elemento.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "100",
            "justification": "Número atômico redondo que define o Férmio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "157",
            "justification": "Número de nêutrons no isótopo Fm-257.",
            "score": 157
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Muito Alta",
            "justification": "Fm-257 tem meia-vida de 100 dias.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Limite de Estabilidade",
            "justification": "O último elemento que pode ser produzido por bombardeamento de nêutrons.",
            "score": 90
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Atol de Eniwetok",
            "justification": "Também descoberto nos detritos do teste 'Ivy Mike'.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Cem por Cem",
            "justification": "O elemento 100 fecha o grupo dos elementos produzíveis por nêutrons.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Enrico Fermi",
            "justification": "Homenagem ao pai da física nuclear moderna.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Albert Ghiorso e equipe",
            "justification": "Identificado em 1952 em poeira radioativa.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1952",
            "justification": "Mesmo ano do enstênio.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1527 °C (Est.)",
            "justification": "Ponto de fusão estimado baseado em modelos atômicos.",
            "score": 90
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Dados de ebulição indisponíveis para este elemento.",
            "score": 0
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
            "value": "Produção por Bombardeio",
            "justification": "Exige o bombardeio de enstênio com íons hélio, gerando apenas alguns átomos.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Inexistente",
            "justification": "Sem presença fora de experimentos controlados.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação de vida curta mas intensa.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Homenagem Histórica",
            "justification": "Primeiro elemento a ser nomeado em homenagem a um químico vivo na época.",
            "score": 80
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "O estado +3 é o mais estável, similar ao de outros actinídeos pesados.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Totalmente sintético.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Não sobrevive tempo suficiente para ser detectado no cosmos.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "258 u",
            "justification": "Massa do seu isótopo mais duradouro.",
            "score": 258
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "10,3 g/cm³ (Est.)",
            "justification": "Densidade estimada com base em modelos teóricos.",
            "score": 103
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "194 pm",
            "justification": "Estimado para o final da série actinídea.",
            "score": 194
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +3",
            "justification": "O estado +2 torna-se mais comum no final da série.",
            "score": 90
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Suposto condutor metálico pobre.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Mantém a tendência dos actinídeos.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Provavelmente um metal em seu estado fundamental.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f¹³",
            "justification": "Treze elétrons no subnível 5f.",
            "score": 130
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹³ 7s²",
            "justification": "Configuração que o aproxima do final do preenchimento da camada f.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "101",
            "justification": "O primeiro elemento a entrar na segunda centena da tabela.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "157",
            "justification": "Número de nêutrons no isótopo Md-258.",
            "score": 157
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 51 dias.",
            "score": 20
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Estudo Químico",
            "justification": "Usado para descobrir o comportamento químico de íons individuais.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Sintetizado em 1955 no ciclotron de 60 polegadas.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Um Átomo de cada Vez",
            "justification": "Foi o primeiro elemento descoberto átomo por átomo.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Dmitri Mendeleev",
            "justification": "O criador da primeira versão da Tabela Periódica.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Ghiorso, Harvey, Choppin, Thompson e Seaborg",
            "justification": "Equipe mestre da física nuclear experimental.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1955",
            "justification": "Ano marcante para a química sintética.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "827 °C (Est.)",
            "justification": "Ponto de fusão estimado.",
            "score": 70
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Propriedade ainda não observada ou estimada com precisão.",
            "score": 0
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
            "value": "Manuseio Ultrarrápido",
            "justification": "Sua vida curta exige que os experimentos químicos sejam concluídos em segundos.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Irrelevante",
            "justification": "Sem impacto na biosfera devido à sua natureza puramente sintética.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação de alta energia que requer contenção total.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Prestígio Científico",
            "justification": "Nomeado em homenagem a Alfred Nobel, criador dos prêmios mais famosos da ciência.",
            "score": 70
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2",
            "justification": "O estado +2 é surpreendentemente o mais estável para este elemento.",
            "score": 20
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Inexistente fora de aceleradores de partículas.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Elemento de vida efêmera produzido apenas artificialmente.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "259 u",
            "justification": "Massa do isótopo mais estável conhecido.",
            "score": 259
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "9,9 g/cm³ (Est.)",
            "justification": "Densidade estimada para um metal actinídeo terminal.",
            "score": 99
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "197 pm",
            "justification": "Tamanho atômico estimado para o penúltimo actinídeo.",
            "score": 197
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +3",
            "justification": "Prefere o estado +2, assemelhando-se ao bário ou estrôncio.",
            "score": 90
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Deveria ser um condutor metálico padrão.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Valor típico para os actinídeos pesados.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Metal prateado em teoria.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "5f¹⁴",
            "justification": "Completa o preenchimento da camada f profunda.",
            "score": 140
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 7s²",
            "justification": "Configuração que fecha a subcamada 5f.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "102",
            "justification": "Identidade atômica do Nobélio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "157",
            "justification": "Número de nêutrons no isótopo No-259.",
            "score": 157
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Meia-vida de apenas 58 minutos para o isótopo mais estável.",
            "score": 10
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Química Relativística",
            "justification": "Usado para estudar como a relatividade afeta elétrons em átomos pesados.",
            "score": 60
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Estocolmo, Suécia / Dubna, URSS",
            "justification": "Reivindicado por várias equipes internacionais em plena Guerra Fria.",
            "score": 90
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Guerra Científica",
            "justification": "Sua descoberta foi motivo de disputa entre EUA, Suécia e União Soviética.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Alfred Nobel",
            "justification": "Instituidor do Prêmio Nobel e inventor da dinamite.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Instituto Nobel / Equipe de Dubna",
            "justification": "A IUPAC creditou a descoberta final à equipe de Dubna.",
            "score": 90
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1966",
            "justification": "Confirmado oficialmente após anos de controvérsia.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "827 °C (Est.)",
            "justification": "Estimado com base no comportamento de outros actinídeos.",
            "score": 70
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Propriedade física ainda desconhecida.",
            "score": 0
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
            "value": "Vida Efêmera",
            "justification": "O isótopo mais estável vive apenas algumas horas, dificultando estudos.",
            "score": 5
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem presença ambiental, criado apenas em reações nucleares dirigidas.",
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
            "value": "Fim de Série",
            "justification": "Marca o encerramento do preenchimento da subcamada f.",
            "score": 75
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3",
            "justification": "O estado +3 é o mais comum, retornando à tendência do início da série.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Totalmente sintético e instável.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Não sobrevive tempo suficiente para ser observado no espaço.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "266 u",
            "justification": "Massa do isótopo mais estável sintetizado até hoje.",
            "score": 266
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "15,6 g/cm³ (Est.)",
            "justification": "Estimada para ser um metal denso e pesado.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "171 pm",
            "justification": "Tamanho atômico reduzido pela contração dos actinídeos.",
            "score": 171
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3",
            "justification": "Comportamento químico similar ao do lutécio nas terras raras.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Propriedades metálicas esperadas.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "1,3 (Pauling)",
            "justification": "Valor constante para os actinídeos terminais.",
            "score": 13
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Presume-se metal prateado ou cinza.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "7p¹ (Relativístico)",
            "justification": "Efeitos relativísticos colocam o elétron de valência no subnível 7p.",
            "score": 10
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 7s² 7p¹",
            "justification": "Configuração moderna considerando efeitos da relatividade.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "103",
            "justification": "O último elemento da série dos actinídeos.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "163",
            "justification": "Número de nêutrons no isótopo Lr-266.",
            "score": 163
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Alta",
            "justification": "Isótopo mais estável tem meia-vida de 11 horas.",
            "score": 40
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Química de Superpesados",
            "justification": "Serve de base para entender a química dos elementos que vêm a seguir.",
            "score": 60
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA / Dubna, URSS",
            "justification": "Descoberto de forma independente em ambos os laboratórios.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Fronteira Atômica",
            "justification": "Representa o limite de uma das séries mais complexas da tabela.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Ernest Lawrence",
            "justification": "Inventor do ciclotron, instrumento essencial para a química nuclear.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Ghiorso, Sikkeland, Larsh e Latimer",
            "justification": "Equipe da Universidade da Califórnia em Berkeley.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1961",
            "justification": "Início da década de 60.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "1627 °C (Est.)",
            "justification": "Ponto de fusão estimado.",
            "score": 90
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Propriedade física ainda não observada.",
            "score": 0
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
            "value": "Vida Extremamente Curta",
            "justification": "Desaparece em poucas horas, impossibilitando aplicações práticas duradouras.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Neutro",
            "justification": "Sem presença na natureza ou impacto ambiental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Altamente radiotóxico em nível atômico.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Fronteira Atômica",
            "justification": "Ajuda a mapear o fim da estabilidade nuclear no grupo 5.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "5",
            "justification": "Como membro do grupo do tântalo, seu estado de oxidação principal é +5.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Elemento puramente artificial.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Nenhuma fonte natural detectada.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "268 u",
            "justification": "Massa do isótopo mais estável sintetizado (Db-268).",
            "score": 268
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "29,3 g/cm³ (Est.)",
            "justification": "Densidade teórica extremamente alta.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "139 pm (Est.)",
            "justification": "Estimado para elementos pesados do grupo 5.",
            "score": 139
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+5",
            "justification": "Comportamento químico esperado para o grupo do tântalo.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Condutor metálico em teoria.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade ainda não mensurada.",
            "score": 0
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Metal denso e pesado em teoria.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d³",
            "justification": "Três elétrons no subnível 6d de valência.",
            "score": 30
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d³ 7s²",
            "justification": "Configuração que o coloca sob o tântalo na tabela periódica.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "105",
            "justification": "Identidade atômica do Dúbnio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "163",
            "justification": "Número de nêutrons no isótopo Db-268.",
            "score": 163
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Meia-vida de cerca de 28 horas para o isótopo Db-268.",
            "score": 15
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Ciência Pura",
            "justification": "Exclusivamente para pesquisa sobre propriedades de elementos pesados.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, URSS",
            "justification": "Sintetizado em 1968 no Instituto Central de Pesquisas Nucleares.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Nome Russo",
            "justification": "Nomeado em homenagem à cidade russa de Dubna.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Dubna",
            "justification": "Homenagem ao centro de pesquisa russo.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "G.N. Flerov e equipe",
            "justification": "Liderados pelo físico nuclear soviético Georgy Flerov.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1968",
            "justification": "Primeira síntese relatada.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "Não definido",
            "justification": "Propriedade física ainda desconhecida.",
            "score": 0
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Propriedade física ainda desconhecida.",
            "score": 0
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
            "value": "Vida de Segundos",
            "justification": "Isótopos mais comuns duram apenas alguns segundos.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem existência natural ou impacto ecológico.",
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
            "value": "Verificação de Periódicos",
            "justification": "Confirmou que os elementos transactinídeos seguem as leis do grupo 6.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "6",
            "justification": "Como membro do grupo do tungstênio, seu estado de oxidação principal é +6.",
            "score": 60
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
            "justification": "Elemento puramente sintético.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "269 u",
            "justification": "Massa do isótopo mais estável conhecido.",
            "score": 269
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "35,0 g/cm³ (Est.)",
            "justification": "Densidade teórica massiva estimada.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "132 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 6 no período 7.",
            "score": 132
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+6",
            "justification": "Posição sob o molibdênio e tungstênio confirmada experimentalmente.",
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
            "justification": "Propriedade ainda não mensurada.",
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
            "value": "6d⁴",
            "justification": "Quatro elétrons no subnível 6d de valência.",
            "score": 40
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d⁴ 7s²",
            "justification": "Configuração que o assemelha quimicamente ao Tungstênio.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "106",
            "justification": "Identidade atômica do Seabórgio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "163",
            "justification": "Número de nêutrons no isótopo Sg-269.",
            "score": 163
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo Sg-269 tem meia-vida de cerca de 2,1 minutos.",
            "score": 5
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Nuclear",
            "justification": "Fundamental para entender a estabilidade de núcleos pesados.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Berkeley, EUA",
            "justification": "Sintetizado por bombardeamento de califórnio com oxigênio.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Nome em Vida",
            "justification": "Primeiro elemento a ser nomeado em homenagem a uma pessoa viva.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Glenn T. Seaborg",
            "justification": "Homenagem ao cientista que descobriu 10 elementos transurânicos.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Albert Ghiorso e equipe",
            "justification": "Liderados pelo mestre da síntese nuclear em Berkeley.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1974",
            "justification": "Ano da síntese confirmada.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "Não definido",
            "justification": "Vida curta impede a medição do ponto de fusão.",
            "score": 0
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Vida curta impede a medição do ponto de ebulição.",
            "score": 0
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
            "value": "Produção por Fusão Fria",
            "justification": "Sintetizado por bombardeamento de bismuto com cromo, um processo de baixo rendimento.",
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
            "justification": "Altamente radioativo, manuseio apenas com robôs e blindagem.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Consistência Química",
            "justification": "Confirmou que os elementos do grupo 7 continuam seguindo o padrão de oxidação.",
            "score": 65
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "7",
            "justification": "Como membro do grupo do rênio, seu estado de oxidação principal é +7.",
            "score": 70
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Elemento puramente artificial.",
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
            "value": "270 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 270
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "37,1 g/cm³ (Est.)",
            "justification": "Densidade teórica extremamente elevada.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "128 pm (Est.)",
            "justification": "Tamanho atômico reduzido estimado para o grupo 7.",
            "score": 128
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+7",
            "justification": "Química experimental com oxicloretos confirma o estado +7.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Propriedades metálicas esperadas para o grupo.",
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
            "justification": "Metal pesado denso em teoria.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d⁵",
            "justification": "Cinco elétrons no subnível 6d de valência.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d⁵ 7s²",
            "justification": "Configuração que o assemelha quimicamente ao Rênio.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "107",
            "justification": "Identidade atômica do Bóhrio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "163",
            "justification": "Número de nêutrons no isótopo Bh-270.",
            "score": 163
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 61 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Fronteira Química",
            "justification": "Usado para testar teorias químicas em átomos com núcleos massivos.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Darmstadt, Alemanha",
            "justification": "Sintetizado pela primeira vez no GSI.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Volatilidade Atômica",
            "justification": "Seus compostos são surpreendentemente voláteis para um metal tão pesado.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Niels Bohr",
            "justification": "Homenagem ao físico dinamarquês que criou o modelo atômico de Bohr.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Münzenberg, Armbruster e equipe",
            "justification": "Equipe do Centro de Pesquisas de Íons Pesados (GSI).",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1981",
            "justification": "Ano da síntese oficial confirmada.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "Não definido",
            "justification": "Propriedade ainda não observada.",
            "score": 0
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Propriedade ainda não observada.",
            "score": 0
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
            "value": "Vida de Milissegundos",
            "justification": "Seus isótopos duram frações minúsculas de segundo.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem presença na natureza ou impacto ecológico.",
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
            "value": "Física Teórica",
            "justification": "Ajuda a validar modelos de estabilidade nuclear superpesada.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "9 (Teórico)",
            "justification": "Como membro do grupo 9, sua química é estimada, mas difícil de testar.",
            "score": 90
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Totalmente artificial.",
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
            "value": "278 u",
            "justification": "Massa do isótopo mais estável conhecido.",
            "score": 278
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "37,4 g/cm³ (Est.)",
            "justification": "Densidade estimada massiva.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "125 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 9.",
            "score": 125
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+3, +4, +6, +8, +9 (Est.)",
            "justification": "Química prevista para seguir o grupo do cobalto/irídio.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Propriedades metálicas esperadas.",
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
            "value": "6d⁷",
            "justification": "Sete elétrons no subnível 6d de valência.",
            "score": 70
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d⁷ 7s²",
            "justification": "Configuração que o coloca sob o Irídio na tabela.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "109",
            "justification": "Identidade atômica do Meitnério.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "169",
            "justification": "Número de nêutrons no isótopo Mt-278.",
            "score": 169
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Meia-vida de apenas 4,5 segundos para o isótopo mais estável.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Física Nuclear",
            "justification": "Usado para testar limites de teorias atômicas.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Darmstadt, Alemanha",
            "justification": "Identificado no GSI por bombardeamento de bismuto com ferro.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Justiça Científica",
            "justification": "Nomeado para corrigir a injustiça do Nobel não dado a Lise Meitner.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Lise Meitner",
            "justification": "Física austríaca descobridora da fissão nuclear.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Peter Armbruster e Gottfried Münzenberg",
            "justification": "Lideraram a equipe alemã que sintetizou o elemento.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1982",
            "justification": "Síntese inicial em agosto de 1982.",
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
            "value": "Decaimento Alfa Imediato",
            "justification": "Transforma-se rapidamente em hássio, impossibilitando aplicações práticas.",
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
            "justification": "Radiação de alta intensidade em nível atômico.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Homenagem Geográfica",
            "justification": "Primeiro elemento a levar o nome da cidade de Darmstadt, centro da física nuclear alemã.",
            "score": 70
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "Não definido",
            "justification": "Química experimental impossível devido à vida extremamente curta.",
            "score": 0
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Inexistente de forma estável na Terra.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Elemento puramente artificial.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "281 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 281
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "34,8 g/cm³ (Est.)",
            "justification": "Densidade teórica estimada massiva.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "132 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 10.",
            "score": 132
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +4, +6, +8 (Est.)",
            "justification": "Química prevista baseada em Ni, Pd e Pt.",
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
            "justification": "Propriedade ainda não mensurada.",
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
            "value": "6d⁸",
            "justification": "Oito elétrons no subnível 6d de valência.",
            "score": 80
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d⁸ 7s²",
            "justification": "Configuração que o coloca sob a Platina na tabela periódica.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "110",
            "justification": "Identidade atômica do Darmstádtio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "171",
            "justification": "Número de nêutrons no isótopo Ds-281.",
            "score": 171
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de cerca de 12,7 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Atômica",
            "justification": "Fundamental para entender a estrutura dos núcleos transactinídeos.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Darmstadt, Alemanha",
            "justification": "Identificado no GSI por fusão de níquel e chumbo.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Fusão Pesada",
            "justification": "Sua descoberta exigiu a colisão de núcleos pesados com extrema precisão.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Darmstadt",
            "justification": "Cidade alemã onde fica o instituto descobridor (GSI).",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Sigurd Hofmann e equipe",
            "justification": "Lideraram a equipe internacional que sintetizou o elemento em 1994.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1994",
            "justification": "Primeira observação confirmada em novembro de 1994.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "Não definido",
            "justification": "Vida curta impede a medição.",
            "score": 0
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "Não definido",
            "justification": "Vida curta impede a medição.",
            "score": 0
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
            "value": "Vida de Segundos",
            "justification": "Isótopos mais estáveis duram apenas alguns segundos.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem existência na natureza ou impacto ecológico.",
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
            "value": "Previsibilidade Química",
            "justification": "Confirmou que o grupo 11 mantém propriedades metálicas mesmo no final da tabela.",
            "score": 70
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "3 (Teórico)",
            "justification": "Baseado na tendência do grupo do ouro (Cu, Ag, Au).",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Elemento puramente artificial.",
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
            "value": "282 u",
            "justification": "Massa do isótopo mais estável conhecido.",
            "score": 282
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "28,7 g/cm³ (Est.)",
            "justification": "Densidade teórica estimada massiva.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "138 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 11.",
            "score": 138
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+1, +3, +5 (Est.)",
            "justification": "Propriedades químicas previstas similares às do Ouro.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Deveria ser um excelente condutor se fosse estável.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade ainda não mensurada.",
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
            "value": "6d⁹",
            "justification": "Nove elétrons no subnível 6d de valência.",
            "score": 90
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d⁹ 7s²",
            "justification": "Configuração que o assemelha quimicamente ao Ouro.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "111",
            "justification": "Identidade atômica do Roentgênio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "171",
            "justification": "Número de nêutrons no isótopo Rg-282.",
            "score": 171
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 1,6 minutos.",
            "score": 5
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Básica",
            "justification": "Usado exclusivamente para expandir os limites da tabela periódica.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Darmstadt, Alemanha",
            "justification": "Identificado no GSI por bombardeamento de bismuto com níquel.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Ouro Superpesado",
            "justification": "Em teoria, se fosse estável, seria um metal nobre e brilhante como o ouro.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Wilhelm Conrad Röntgen",
            "justification": "Homenagem ao descobridor dos raios-X.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Sigurd Hofmann e equipe",
            "justification": "Sintetizado pela mesma equipe que descobriu o darmstádtio.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1994",
            "justification": "Primeira observação confirmada em dezembro de 1994.",
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
            "value": "Volatilidade Atômica",
            "justification": "É tão volátil que se comporta como um gás nobre mesmo sendo um metal.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Irrelevante",
            "justification": "Sem presença ambiental ou impacto biológico.",
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
            "value": "Fronteira Física",
            "justification": "Ajuda a estudar como os elétrons se comportam em núcleos gigantescos.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2 (Teórico)",
            "justification": "Baseado na tendência do grupo do mercúrio.",
            "score": 20
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Não existe naturalmente na Terra.",
            "score": 0
        },
        {
            "id": 7,
            "label": "Abundância no universo",
            "value": "Zero",
            "justification": "Nenhuma detecção natural conhecida.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "285 u",
            "justification": "Massa do isótopo mais estável sintetizado (Cn-285).",
            "score": 285
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "23,7 g/cm³ (Est.)",
            "justification": "Densidade teórica estimada para o metal.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "147 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 12.",
            "score": 147
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +4 (Est.)",
            "justification": "Propriedades químicas previstas para seguir o Mercúrio.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Pode se comportar como um semicondutor.",
            "score": 30
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
            "value": "Gás (Provável)",
            "justification": "Efeitos relativísticos tornam o Cn tão volátil que pode ser gasoso em temperatura ambiente.",
            "score": 10
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "6d¹⁰",
            "justification": "Completa o preenchimento da camada 6d de valência.",
            "score": 100
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
            "justification": "Configuração que o assemelha ao Mercúrio.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "112",
            "justification": "Identidade atômica do Copernício.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "173",
            "justification": "Número de nêutrons no isótopo Cn-285.",
            "score": 173
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 29 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Estudo de Adsorção",
            "justification": "Usado para entender como átomos superpesados interagem com superfícies de ouro.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Darmstadt, Alemanha",
            "justification": "Sintetizado no GSI por bombardeamento de chumbo com zinco.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Mercúrio Gasoso",
            "justification": "É o elemento mais pesado conhecido que pode se comportar como um gás.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Nicolau Copérnico",
            "justification": "Homenagem ao astrônomo que revolucionou a visão do sistema solar.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Sigurd Hofmann e equipe",
            "justification": "Equipe alemã que liderou a síntese do elemento.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1996",
            "justification": "Ano da síntese inicial bem-sucedida.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "Não definido",
            "justification": "Vida curta e volatilidade impedem a medição.",
            "score": 0
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "67 °C (Est.)",
            "justification": "Ponto de ebulição extremamente baixo estimado.",
            "score": 10
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
            "value": "Vida Extremamente Curta",
            "justification": "Isótopos duram apenas alguns segundos, dificultando a análise química.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Irrelevante",
            "justification": "Sem presença ambiental ou impacto biológico.",
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
            "value": "Orgulho Científico",
            "justification": "Primeiro elemento a ser nomeado em homenagem a uma instituição da Ásia.",
            "score": 75
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "1, 3 (Teórico)",
            "justification": "Como membro do grupo 13, sua química é prevista para seguir a tendência do Tálio.",
            "score": 30
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
            "justification": "Elemento puramente sintético.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "286 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 286
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "16 g/cm³ (Est.)",
            "justification": "Densidade estimada baseada no comportamento do grupo.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "170 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 13.",
            "score": 170
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+1, +3 (Est.)",
            "justification": "O estado +1 deve ser o mais estável devido ao efeito do par inerte.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Suposto condutor metálico pobre.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade ainda não mensurada.",
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
            "value": "7p¹",
            "justification": "Primeiro elétron na subcamada 7p de valência.",
            "score": 10
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
            "justification": "Configuração que o coloca sob o Tálio na tabela periódica.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "113",
            "justification": "Identidade atômica do Nipônio (Nihonium).",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "173",
            "justification": "Número de nêutrons no isótopo Nh-286.",
            "score": 173
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de cerca de 10 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Básica",
            "justification": "Usado para expandir o conhecimento sobre elementos transactinídeos.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Saitama, Japão",
            "justification": "Sintetizado no instituto RIKEN através de fusão fria.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Elemento Ásia",
            "justification": "Foi o primeiro elemento descoberto e nomeado por cientistas asiáticos.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Nihon",
            "justification": "Significa 'Japão' em japonês literal.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Kosuke Morita e equipe",
            "justification": "Lideraram a equipe do RIKEN que sintetizou o elemento em 2004.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "2004",
            "justification": "Primeira observação confirmada em julho de 2004.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "430 °C (Est.)",
            "justification": "Ponto de fusão estimado baseado em tendências.",
            "score": 40
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1100 °C (Est.)",
            "justification": "Ebulição moderada prevista para o metal.",
            "score": 60
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
            "value": "Produção por Milissegundos",
            "justification": "Desaparece em frações de segundo, tornando a observação um desafio extremo.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Irrelevante",
            "justification": "Sem presença ambiental ou impacto biológico.",
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
            "value": "Ilha de Estabilidade",
            "justification": "Um dos elementos-chave na busca pela região de maior vida longa entre os superpesados.",
            "score": 80
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2, 4 (Teórico)",
            "justification": "Como membro do grupo 14, sua química é prevista para seguir o padrão do Chumbo.",
            "score": 40
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
            "justification": "Elemento puramente sintético.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "289 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 289
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "14 g/cm³ (Est.)",
            "justification": "Densidade teórica estimada para o metal.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "180 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 14.",
            "score": 180
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +4 (Est.)",
            "justification": "O estado +2 deve ser dominante devido a fortes efeitos relativísticos.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Suposto condutor metálico pobre ou semicondutor.",
            "score": 30
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade ainda não mensurada.",
            "score": 0
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Deveria ser um metal denso, mas muito volátil.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "7p²",
            "justification": "Dois elétrons na subcamada 7p de valência.",
            "score": 20
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
            "justification": "Configuração que o coloca sob o Chumbo na tabela periódica.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "114",
            "justification": "Identidade atômica do Fleróvio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "175",
            "justification": "Número de nêutrons no isótopo Fl-289.",
            "score": 175
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 1,9 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Mapeamento Nuclear",
            "justification": "Usado para verificar a estabilidade de núcleos ricos em nêutrons.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, Rússia",
            "justification": "Sintetizado no Laboratório Flerov de Reações Nucleares.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Chumbo Nobre",
            "justification": "Mesmo pertencendo ao grupo do chumbo, pode ser tão quimicamente inerte quanto um gás nobre.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Georgy Flerov",
            "justification": "Homenagem ao físico soviético pioneiro na pesquisa de fusão nuclear.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Yuri Oganessian e equipe",
            "justification": "Equipe do JINR que sintetizou o elemento em 1998.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "1998",
            "justification": "Ano da síntese inicial bem-sucedida.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "67 °C (Est.)",
            "justification": "Estimativa de ponto de fusão extremamente baixo para um metal pesado.",
            "score": 10
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "150 °C (Est.)",
            "justification": "Estimativa de ponto de ebulição muito baixo.",
            "score": 10
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
            "value": "Produção por Frações de Segundo",
            "justification": "Dura pouco mais de meio segundo antes de decair em elementos mais leves.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nulo",
            "justification": "Sem presença ambiental ou impacto biológico.",
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
            "value": "Consistência de Grupo",
            "justification": "Ajuda a confirmar a tendência de oxidação no grupo 15 superpesado.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "1, 3 (Teórico)",
            "justification": "Como membro do grupo do Bismuto, sua química é prevista para seguir essa tendência.",
            "score": 30
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
            "justification": "Elemento puramente sintético.",
            "score": 0
        },
        {
            "id": 8,
            "label": "Massa atômica",
            "value": "290 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 290
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "13,5 g/cm³ (Est.)",
            "justification": "Densidade estimada baseada em tendências do grupo.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "187 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 15.",
            "score": 187
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+1, +3 (Est.)",
            "justification": "Previsto seguir o Bismuto com preferência pelo estado +1.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Propriedades metálicas esperadas.",
            "score": 20
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade ainda não mensurada.",
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
            "value": "7p³",
            "justification": "Três elétrons na subcamada 7p de valência.",
            "score": 30
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
            "justification": "Configuração que o coloca sob o Bismuto na tabela periódica.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "115",
            "justification": "Identidade atômica do Moscóvio.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "175",
            "justification": "Número de nêutrons no isótopo Mc-290.",
            "score": 175
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 0,65 segundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Básica",
            "justification": "Usado para verificar a estabilidade de núcleos superpesados ímpares.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, Rússia",
            "justification": "Sintetizado no JINR por bombardeamento de amerício com cálcio.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Teorias de Conspiração",
            "justification": "Frequentemente citado erroneamente em teorias sobre OVNIs e propulsão exótica.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Moscou",
            "justification": "Homenagem à região administrativa russa onde fica o laboratório descobridor.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Yuri Oganessian e equipe",
            "justification": "Lideraram a colaboração russo-americana na síntese do elemento.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "2003",
            "justification": "Ano da síntese inicial bem-sucedida.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "400 °C (Est.)",
            "justification": "Ponto de fusão estimado baseado em tendências.",
            "score": 40
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "1100 °C (Est.)",
            "justification": "Ebulição moderada prevista para o metal.",
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
            "value": "Produção por Milissegundos",
            "justification": "Dura apenas frações minúsculas de segundo antes de decair.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem presença ambiental fora de aceleradores.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação de superpesado em níveis atômicos.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Expansão da Tabela",
            "justification": "Ajuda a preencher o grupo 16 com elementos cada vez mais pesados.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "2, 4 (Teórico)",
            "justification": "Baseado na tendência do grupo do Polônio.",
            "score": 30
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Elemento puramente sintético.",
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
            "value": "293 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 293
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "12,9 g/cm³ (Est.)",
            "justification": "Densidade estimada baseada em tendências do grupo.",
            "score": 100
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "183 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 16.",
            "score": 183
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "+2, +4 (Est.)",
            "justification": "Previsto seguir o Polônio em propriedades químicas.",
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
            "justification": "Propriedade ainda não mensurada.",
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
            "value": "7p⁴",
            "justification": "Quatro elétrons na subcamada 7p de valência.",
            "score": 40
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
            "justification": "Configuração que o coloca sob o Polônio na tabela.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "116",
            "justification": "Identidade atômica do Livermório.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "177",
            "justification": "Número de nêutrons no isótopo Lv-293.",
            "score": 177
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 61 milissegundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Atômica",
            "justification": "Usado para verificar a estabilidade de núcleos muito pesados.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, Rússia",
            "justification": "Sintetizado pela colaboração JINR e LLNL.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Colaboração Global",
            "justification": "Nomeado em homenagem ao laboratório americano que colaborou com os russos.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Livermore",
            "justification": "Homenagem ao Lawrence Livermore National Laboratory.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Yuri Oganessian e equipe",
            "justification": "Lideraram a síntese através de colisões de Cálcio e Cúrio.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "2000",
            "justification": "Primeira observação confirmada no novo milênio.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "450 °C (Est.)",
            "justification": "Ponto de fusão estimado baseado no grupo.",
            "score": 45
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "800 °C (Est.)",
            "justification": "Vaporiza-se em temperaturas baixas para um metal pesado.",
            "score": 30
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
            "value": "Vida de Milissegundos",
            "justification": "Dura frações mínimas de segundo antes de decair em elementos mais leves.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Irrelevante",
            "justification": "Sem presença ambiental ou impacto biológico.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Risco à saúde",
            "value": "Extremo",
            "justification": "Radiação de superpesado em níveis atômicos.",
            "score": 1
        },
        {
            "id": 4,
            "label": "Benefício",
            "value": "Exploração Nuclear",
            "justification": "Essencial para preencher a penúltima lacuna da tabela periódica atual.",
            "score": 60
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "1, 3, 5 (Teórico)",
            "justification": "Química prevista para seguir o padrão dos halogênios pesados (Astatínio).",
            "score": 40
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Elemento puramente sintético.",
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
            "value": "294 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 294
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "7,2 g/cm³ (Est.)",
            "justification": "Densidade estimada massiva para um halogênio.",
            "score": 72
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "138 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 17.",
            "score": 138
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "-1, +1, +3, +5 (Est.)",
            "justification": "Previsto seguir as tendências do grupo, mas com caráter mais metálico.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Baixa (Teórica)",
            "justification": "Pode se comportar como um semimetal.",
            "score": 30
        },
        {
            "id": 13,
            "label": "Eletronegatividade",
            "value": "Não definida",
            "justification": "Propriedade ainda não mensurada.",
            "score": 0
        },
        {
            "id": 14,
            "label": "Estado físico",
            "value": "Sólido (Teórico)",
            "justification": "Deveria ser o primeiro halogênio metálico sólido em temperatura ambiente.",
            "score": 100
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "7p⁵",
            "justification": "Cinco elétrons na subcamada 7p de valência.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
            "justification": "Configuração que o assemelha ao Astatínio.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "117",
            "justification": "Identidade atômica do Tennesso.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "177",
            "justification": "Número de nêutrons no isótopo Ts-294.",
            "score": 177
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 78 milissegundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Pesquisa Básica",
            "justification": "Usado para verificar a estabilidade de núcleos quase mágicos.",
            "score": 40
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, Rússia",
            "justification": "Sintetizado pela colaboração entre Rússia e os laboratórios de Tennessee (EUA).",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Halogênio Metálico",
            "justification": "Diferente dos outros halogênios, prevê-se que ele tenha um brilho e condutividade metálica.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Tennessee",
            "justification": "Homenagem ao estado americano sede do Oak Ridge National Laboratory.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Yuri Oganessian e equipe",
            "justification": "Lideraram a colaboração internacional de descoberta.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "2010",
            "justification": "Um dos elementos mais recentemente confirmados.",
            "score": 95
        },
        {
            "id": 26,
            "label": "Ponto de fusão",
            "value": "400 °C (Est.)",
            "justification": "Ponto de fusão elevado estimado para um halogênio.",
            "score": 40
        },
        {
            "id": 27,
            "label": "Ponto de ebulição",
            "value": "550 °C (Est.)",
            "justification": "Vaporiza-se em temperaturas moderadas.",
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
            "value": "Vida de Milissegundos",
            "justification": "Dura frações ínfimas de segundo antes de decair.",
            "score": 1
        },
        {
            "id": 2,
            "label": "Risco/Benefício à natureza",
            "value": "Nenhum",
            "justification": "Sem presença ambiental ou impacto biológico.",
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
            "value": "Teto Elemental",
            "justification": "O último elemento da tabela atual, completando o período 7.",
            "score": 100
        },
        {
            "id": 5,
            "label": "Nº de ligantes possíveis",
            "value": "0 (Teórico)",
            "justification": "Como gás nobre, é previsto ser quimicamente inerte.",
            "score": 1
        },
        {
            "id": 6,
            "label": "Abundância na natureza",
            "value": "Zero",
            "justification": "Elemento puramente sintético.",
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
            "value": "294 u",
            "justification": "Massa do isótopo mais estável sintetizado.",
            "score": 294
        },
        {
            "id": 9,
            "label": "Densidade",
            "value": "5,0 g/cm³ (Est.)",
            "justification": "Densidade estimada para o gás superpesado condensado.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Raio atômico",
            "value": "152 pm (Est.)",
            "justification": "Tamanho atômico estimado para o grupo 18.",
            "score": 152
        },
        {
            "id": 11,
            "label": "Oxidação",
            "value": "0, +2, +4 (Est.)",
            "justification": "Previsto seguir o Xenônio em formar alguns fluoretos.",
            "score": 100
        },
        {
            "id": 12,
            "label": "Condutividade elétrica",
            "value": "Isolante (Teórico)",
            "justification": "Propriedades de gás nobre esperadas.",
            "score": 1
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
            "value": "Gás (Provável)",
            "justification": "Efeitos relativísticos podem torná-lo sólido, mas é classificado como gás nobre.",
            "score": 10
        },
        {
            "id": 15,
            "label": "Maior subnível energético",
            "value": "7p⁶",
            "justification": "Completa o preenchimento da sétima camada de valência.",
            "score": 100
        },
        {
            "id": 16,
            "label": "Distribuição eletrônica",
            "value": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
            "justification": "Configuração de octeto completo no período 7.",
            "score": 100
        },
        {
            "id": 17,
            "label": "Nº de prótons / Nº de elétrons",
            "value": "118",
            "justification": "O número atômico máximo da tabela periódica atual.",
            "score": 100
        },
        {
            "id": 18,
            "label": "Nº de nêutrons",
            "value": "176",
            "justification": "Número de nêutrons no isótopo Og-294.",
            "score": 176
        },
        {
            "id": 19,
            "label": "Radioatividade",
            "value": "Altíssima",
            "justification": "Isótopo mais estável tem meia-vida de apenas 0,7 milissegundos.",
            "score": 1
        },
        {
            "id": 20,
            "label": "Aplicabilidade / Utilidade",
            "value": "Fim da Tabela",
            "justification": "Marca o limite atual da nossa capacidade de criar matéria.",
            "score": 100
        },
        {
            "id": 21,
            "label": "Local de origem",
            "value": "Dubna, Rússia",
            "justification": "Sintetizado no Laboratório Flerov por bombardeamento de Califórnio com Cálcio.",
            "score": 100
        },
        {
            "id": 22,
            "label": "Curiosidade",
            "value": "Zênite Atômico",
            "justification": "É o elemento com a maior massa atômica e número de prótons já criado.",
            "score": 100
        },
        {
            "id": 23,
            "label": "Origem do nome",
            "value": "Yuri Oganessian",
            "justification": "Homenagem ao cientista vivo que liderou a síntese de vários superpesados.",
            "score": 100
        },
        {
            "id": 24,
            "label": "Descobridor",
            "value": "Colaboração JINR e LLNL",
            "justification": "Equipe internacional liderada por Oganessian.",
            "score": 100
        },
        {
            "id": 25,
            "label": "Ano de descoberta",
            "value": "2002",
            "justification": "Confirmado oficialmente anos depois em 2006.",
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
            "value": "80 °C (Est.)",
            "justification": "Estimativa baseada em efeitos relativísticos.",
            "score": 20
        }
    ]
},
};

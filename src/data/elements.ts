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
    "heroName": "Silício Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Silício.",
    "heroImage": "/placeholder.svg",
    "attributes": [
      {
        "id": 1,
        "label": "Atributo 1",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Atributo 2",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Atributo 3",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Atributo 4",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 5,
        "label": "Atributo 5",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Atributo 6",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Atributo 7",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Atributo 8",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 9,
        "label": "Atributo 9",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Atributo 10",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Atributo 11",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Atributo 12",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Atributo 13",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Atributo 14",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 15,
        "label": "Atributo 15",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Atributo 16",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 17,
        "label": "Atributo 17",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 18,
        "label": "Atributo 18",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 19,
        "label": "Atributo 19",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Atributo 20",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 21,
        "label": "Atributo 21",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Atributo 22",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 23,
        "label": "Atributo 23",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 24,
        "label": "Atributo 24",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Atributo 25",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 26,
        "label": "Atributo 26",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Atributo 27",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
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
    "heroName": "Enxofre Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Enxofre.",
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroName": "Ítrio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Ítrio.",
    "heroImage": "/placeholder.svg",
    "attributes": [
      {
        "id": 1,
        "label": "Atributo 1",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Atributo 2",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Atributo 3",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Atributo 4",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 5,
        "label": "Atributo 5",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Atributo 6",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Atributo 7",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Atributo 8",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 9,
        "label": "Atributo 9",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Atributo 10",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Atributo 11",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Atributo 12",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Atributo 13",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Atributo 14",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 15,
        "label": "Atributo 15",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Atributo 16",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 17,
        "label": "Atributo 17",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 18,
        "label": "Atributo 18",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 19,
        "label": "Atributo 19",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Atributo 20",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 21,
        "label": "Atributo 21",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Atributo 22",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 23,
        "label": "Atributo 23",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 24,
        "label": "Atributo 24",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Atributo 25",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 26,
        "label": "Atributo 26",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Atributo 27",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      }
    ]
  },
  "Zr": {
    "number": 40,
    "symbol": "Zr",
    "name": "Zircônio",
    "heroName": "Zircônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Zircônio.",
    "heroImage": "/placeholder.svg",
    "attributes": [
      {
        "id": 1,
        "label": "Atributo 1",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Atributo 2",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Atributo 3",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Atributo 4",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 5,
        "label": "Atributo 5",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Atributo 6",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Atributo 7",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Atributo 8",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 9,
        "label": "Atributo 9",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Atributo 10",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Atributo 11",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Atributo 12",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Atributo 13",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Atributo 14",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 15,
        "label": "Atributo 15",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Atributo 16",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 17,
        "label": "Atributo 17",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 18,
        "label": "Atributo 18",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 19,
        "label": "Atributo 19",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Atributo 20",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 21,
        "label": "Atributo 21",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Atributo 22",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 23,
        "label": "Atributo 23",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 24,
        "label": "Atributo 24",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Atributo 25",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 26,
        "label": "Atributo 26",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Atributo 27",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      }
    ]
  },
  "Nb": {
    "number": 41,
    "symbol": "Nb",
    "name": "Nióbio",
    "heroName": "Nióbio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Nióbio.",
    "heroImage": "/placeholder.svg",
    "attributes": [
      {
        "id": 1,
        "label": "Atributo 1",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 2,
        "label": "Atributo 2",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 3,
        "label": "Atributo 3",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 4,
        "label": "Atributo 4",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 5,
        "label": "Atributo 5",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 6,
        "label": "Atributo 6",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 7,
        "label": "Atributo 7",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 8,
        "label": "Atributo 8",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 9,
        "label": "Atributo 9",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 10,
        "label": "Atributo 10",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 11,
        "label": "Atributo 11",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 12,
        "label": "Atributo 12",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 13,
        "label": "Atributo 13",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 14,
        "label": "Atributo 14",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 15,
        "label": "Atributo 15",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 16,
        "label": "Atributo 16",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 17,
        "label": "Atributo 17",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 18,
        "label": "Atributo 18",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 19,
        "label": "Atributo 19",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 20,
        "label": "Atributo 20",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 21,
        "label": "Atributo 21",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 22,
        "label": "Atributo 22",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 23,
        "label": "Atributo 23",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 24,
        "label": "Atributo 24",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Atributo 25",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 26,
        "label": "Atributo 26",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      },
      {
        "id": 27,
        "label": "Atributo 27",
        "value": "Em breve",
        "justification": "Dados sendo processados pela central elemental.",
        "score": 50
      }
    ]
  },
  "Mo": {
    "number": 42,
    "symbol": "Mo",
    "name": "Molibdênio",
    "heroName": "Molybdenum Steel",
    "heroDescription": "O fortificador de metais, um herói que permite turbinas de avião a temperaturas extremas.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Tc": {
    "number": 43,
    "symbol": "Tc",
    "name": "Tecnécio",
    "heroName": "Technetium Trace",
    "heroDescription": "O espião radioativo, um herói que revela tumores ocultos em corpos humanos.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ru": {
    "number": 44,
    "symbol": "Ru",
    "name": "Rutênio",
    "heroName": "Ruthenium Catalyst",
    "heroDescription": "O acelerador reacional, um herói que torna possível a indústria química moderna.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Rh": {
    "number": 45,
    "symbol": "Rh",
    "name": "Ródio",
    "heroName": "Rhodium Convert",
    "heroDescription": "O purificador do ar automotivo, um herói que reduz a poluição dos escapamentos.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Pd": {
    "number": 46,
    "symbol": "Pd",
    "name": "Paládio",
    "heroName": "Palladium Bridge",
    "heroDescription": "O maestro das reações químicas, um herói que purifica o ar e catalisa transformações.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ag": {
    "number": 47,
    "symbol": "Ag",
    "name": "Prata",
    "heroName": "Silver Mirror",
    "heroDescription": "O deus da beleza e da condutividade, um herói que reflete a luz e ativa imagens.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Cd": {
    "number": 48,
    "symbol": "Cd",
    "name": "Cádmio",
    "heroName": "Cadmium Poison",
    "heroDescription": "O herói controverso, poderoso mas perigoso, um alerta sobre toxicidade industrial.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "In": {
    "number": 49,
    "symbol": "In",
    "name": "Índio",
    "heroName": "Indium Touch",
    "heroDescription": "O condutor transparente, um herói invisível que torna possível as telas sensíveis ao toque.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Sn": {
    "number": 50,
    "symbol": "Sn",
    "name": "Estanho",
    "heroName": "Tin Soldier",
    "heroDescription": "O metal do bronze e da soldagem, um herói que une os metais desde a antiguidade.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Sb": {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimônio",
    "heroName": "Antimony Guard",
    "heroDescription": "O protetor contra o fogo, um herói que impede que materiais ardam.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Te": {
    "number": 52,
    "symbol": "Te",
    "name": "Telúrio",
    "heroName": "Tellurium Memory",
    "heroDescription": "O mestre do armazenamento óptico, um herói que guarda bilhões de bits em discos.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "I": {
    "number": 53,
    "symbol": "I",
    "name": "Iodo",
    "heroName": "Iodine Shield",
    "heroDescription": "O guardião da tireóide, um herói que protege a saúde através de uma gota.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Xe": {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenônio",
    "heroName": "Xenon Bright",
    "heroDescription": "O iluminador mais raro, um herói que cria os faróis mais intensos.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Cs": {
    "number": 55,
    "symbol": "Cs",
    "name": "Césio",
    "heroName": "Cesium Clock",
    "heroDescription": "O maestro do tempo, um herói cujos relógios medem o segundo com precisão infinita.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ba": {
    "number": 56,
    "symbol": "Ba",
    "name": "Bário",
    "heroName": "Barium Reveal",
    "heroDescription": "O detetor de anomalias, um herói que ilumina o que está escondido no trato digestivo.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "La": {
    "number": 57,
    "symbol": "La",
    "name": "Lantânio",
    "heroName": "Lanthanum Luminous",
    "heroDescription": "O mestre da luz branca e da ótica, um herói que clareia o caminho com precisão científica.",
    "heroImage": "/placeholder.svg",
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
    "heroImage": "/placeholder.svg",
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
    "heroDescription": "O mestre do vidro verde e dos ímãs poderosos, um herói que une força e elegância.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Corrosão no ar",
          "justification": "Desenvolve uma camada de óxido verde que descama, expondo mais metal.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não tem papel biológico conhecido, mas é pouco agressivo.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Considerado seguro em níveis normais de exposição.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Ímãs, Óculos de Proteção",
          "justification": "Usado em óculos de soldador para filtrar luz amarela nociva.",
          "score": 94
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3, 4",
          "justification": "Geralmente trivalente, mas pode chegar a +4.",
          "score": 70
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "9,1 ppm (crosta)",
          "justification": "Quatro vezes mais abundante que o estanho.",
          "score": 40
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,00000002%",
          "justification": "Elemento raro no cosmos.",
          "score": 2
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "140,91 u",
          "justification": "Massa central dos lantanídeos leves.",
          "score": 141
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "6,77 g/cm³",
          "justification": "Densidade similar à do cério.",
          "score": 68
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "182 pm",
          "justification": "Tamanho atômico padrão para lantanídeos.",
          "score": 182
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3, +4",
          "justification": "O estado +3 é o mais comum.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Conduz eletricidade como um metal lantanídeo típico.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,13 (Pauling)",
          "justification": "Valor baixo, metal eletropositivo.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado-branco que desenvolve uma camada de óxido verde.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f³",
          "justification": "O terceiro elétron entra no subnível 4f.",
          "score": 43
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f³ 6s²",
          "justification": "Configuração eletrônica do Praseodímio.",
          "score": 93
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "59",
          "justification": "Identidade atômica do Praseodímio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "82",
          "justification": "Único isótopo estável natural Pr-141.",
          "score": 82
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável",
          "justification": "Praseodímio natural é composto apenas pelo isótopo estável Pr-141.",
          "score": 100
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Didymium Glass, Ligas Metálicas",
          "justification": "Base para ligas de alta resistência em motores de aviões.",
          "score": 92
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Áustria",
          "justification": "Isolado pelo barão Carl Auer von Welsbach.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Gêmeo Verde",
          "justification": "Foi separado do 'didímio', que se pensava ser um único elemento.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Prasios Didymos (Gêmeo Verde)",
          "justification": "Devido à cor verde de seus sais e sua relação com o neodímio.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Carl Auer von Welsbach",
          "justification": "Cientista austríaco famoso por suas invenções em iluminação.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1885",
          "justification": "Conseguiu separar o didímio em praseodímio e neodímio.",
          "score": 95
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "931 °C",
          "justification": "Ponto de fusão característico para o grupo.",
          "score": 93
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3520 °C",
          "justification": "Ponto de ebulição muito elevado.",
          "score": 35
        }
    ]
},
  "Nd": {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodímio",
    "heroName": "Neodymium Magnet",
    "heroDescription": "O mestre do magnetismo supremo, o herói que sustenta a tecnologia moderna com sua força invisível.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Reativo ao ar e água",
          "justification": "Mancha rapidamente no ar e reage com água, necessitando armazenamento em óleo.",
          "score": 30
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Geralmente pouco tóxico, mas deve ser manuseado com cuidado.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Seguro quando incorporado em dispositivos tecnológicos.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Ímãs Fortes, Lasers",
          "justification": "Base dos ímãs permanentes mais poderosos conhecidos (NdFeB).",
          "score": 100
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Estado de oxidação +3 é quase universal.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "33 ppm (crosta)",
          "justification": "Bastante comum para uma terra rara, comparável ao cobre.",
          "score": 45
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,00000002%",
          "justification": "Elemento pesado raro no cosmos.",
          "score": 2
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "144,24 u",
          "justification": "Massa característica do neodímio natural.",
          "score": 144
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "7,01 g/cm³",
          "justification": "Metal denso, o primeiro lantanídeo a ultrapassar 7 g/cm³.",
          "score": 70
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "181 pm",
          "justification": "Tamanho atômico padrão para o grupo.",
          "score": 181
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Quase exclusivamente +3.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Possui propriedades condutoras típicas dos metais de terras raras.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,14 (Pauling)",
          "justification": "Baixa, indicando que cede elétrons com facilidade.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado brilhante que oxida lentamente.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f⁴",
          "justification": "Quatro elétrons no subnível 4f.",
          "score": 44
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f⁴ 6s²",
          "justification": "Configuração eletrônica estável do Neodímio.",
          "score": 94
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "60",
          "justification": "Identidade atômica do Neodímio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "84",
          "justification": "Baseado no isótopo mais comum Nd-142.",
          "score": 84
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Nd-144 (primordial)",
          "justification": "Nd-144 tem meia-vida de 2 quadrilhões de anos.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Superímãs, Lasers de Alta Potência",
          "justification": "Essencial para discos rígidos, fones de ouvido e motores elétricos.",
          "score": 98
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Áustria",
          "justification": "Separado do didímio por Auer von Welsbach.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Ímãs que Esmagam",
          "justification": "Dois ímãs de neodímio podem se atrair com força suficiente para quebrar ossos humanos.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Neos Didymos (Novo Gêmeo)",
          "justification": "Nomeado para distinguir do seu 'gêmeo' praseodímio.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Carl Auer von Welsbach",
          "justification": "Cientista austríaco que isolou o elemento com sucesso.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1885",
          "justification": "Parte da grande era de descobertas de terras raras.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1024 °C",
          "justification": "Um dos pontos de fusão mais altos entre os lantanídeos leves.",
          "score": 95
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3074 °C",
          "justification": "Ponto de ebulição elevado.",
          "score": 30
        }
    ]
},
  "Pm": {
    "number": 61,
    "symbol": "Pm",
    "name": "Promécio",
    "heroName": "Promethium Glow",
    "heroDescription": "O mestre da luminescência radioativa, um herói que brilha eternamente no vácuo do espaço.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Altamente radioativo",
          "justification": "Não possui isótopos estáveis; emite radiação beta intensa.",
          "score": 5
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Extremamente raro",
          "justification": "Praticamente inexistente na crosta terrestre natural.",
          "score": 10
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Perigo Radioativo",
          "justification": "Altamente perigoso se ingerido ou inalado devido à sua atividade beta.",
          "score": 1
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Baterias Atômicas, Luminescência",
          "justification": "Fonte de energia para sondas espaciais e marcapassos (antigamente).",
          "score": 90
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Comporta-se como um lantanídeo trivalente típico.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "Vestigial (quase zero)",
          "justification": "Ocorre apenas como subproduto da fissão espontânea do urânio.",
          "score": 1
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "Insignificante",
          "justification": "Elemento de vida curta que desaparece rapidamente.",
          "score": 0
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "[145] u",
          "justification": "Massa do isótopo de vida mais longa Pm-145.",
          "score": 145
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "7,26 g/cm³",
          "justification": "Densidade calculada para o metal sólido.",
          "score": 73
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "183 pm",
          "justification": "Similar aos seus vizinhos lantanídeos.",
          "score": 183
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Estado de oxidação estável e único conhecido.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Metal radioativo com condutividade limitada.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,13 (Pauling)",
          "justification": "Valor estimado similar aos outros lantanídeos.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, brilha no escuro devido à sua própria radioatividade.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f⁵",
          "justification": "Cinco elétrons no subnível 4f.",
          "score": 45
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f⁵ 6s²",
          "justification": "Configuração eletrônica do Promécio.",
          "score": 95
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "61",
          "justification": "Identidade atômica do Promécio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "84",
          "justification": "Baseado no isótopo Pm-145.",
          "score": 84
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Altamente Radioativo",
          "justification": "Todos os seus isótopos são instáveis.",
          "score": 10
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Fontes de Luz, Espessímetros",
          "justification": "Usado para medir a espessura de materiais e em tintas luminosas.",
          "score": 88
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Estados Unidos",
          "justification": "Identificado no Laboratório Nacional de Oak Ridge.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "O Elemento de Prometeu",
          "justification": "Nomeado em homenagem ao titã que roubou o fogo dos deuses para a humanidade.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Prometheus",
          "justification": "Simboliza a obtenção de um novo elemento a partir da fissão nuclear.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Jacob A. Marinsky",
          "justification": "Liderou a equipe que isolou o promécio dos produtos de fissão do urânio.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1945",
          "justification": "Descoberto durante as pesquisas do Projeto Manhattan.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1042 °C",
          "justification": "Ponto de fusão similar ao do neodímio.",
          "score": 95
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3000 °C",
          "justification": "Ponto de ebulição estimado.",
          "score": 30
        }
    ]
},
  "Sm": {
    "number": 62,
    "symbol": "Sm",
    "name": "Samário",
    "heroName": "Samarium Shield",
    "heroDescription": "O mestre dos ímãs de alta temperatura, o protetor dos motores a jato.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Oxidação moderada",
          "justification": "Mais estável no ar que outros lantanídeos, mas ainda oxida gradualmente.",
          "score": 35
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Não essencial biologicamente e possui baixa toxicidade aguda.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Pode ser irritante se inalado em pó, mas seguro em massa.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Ímãs SmCo, Sensores",
          "justification": "Ímãs de samário-cobalto mantêm magnetismo em temperaturas extremas.",
          "score": 98
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "2, 3",
          "justification": "Conhecido por formar compostos estáveis em +2 e +3.",
          "score": 75
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "7,0 ppm (crosta)",
          "justification": "Aproximadamente tão comum quanto o estanho.",
          "score": 40
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,00000001%",
          "justification": "Elemento pesado raro no universo.",
          "score": 1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "150,36 u",
          "justification": "Massa baseada na mistura natural de seus sete isótopos.",
          "score": 150
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "7,52 g/cm³",
          "justification": "Densidade típica para lantanídeos médios.",
          "score": 75
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "180 pm",
          "justification": "Tamanho atômico padrão para a série.",
          "score": 180
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+2, +3",
          "justification": "A versatilidade do estado +2 é útil em síntese química.",
          "score": 40
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Possui propriedades condutoras típicas dos lantanídeos.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,17 (Pauling)",
          "justification": "Baixa eletronegatividade, elemento eletropositivo.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal prateado, com dureza similar à do zinco.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f⁶",
          "justification": "Seis elétrons no subnível 4f.",
          "score": 46
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f⁶ 6s²",
          "justification": "Configuração eletrônica do Samário.",
          "score": 96
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "62",
          "justification": "Identidade atômica do Samário.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "88",
          "justification": "Número de nêutrons no isótopo Sm-150.",
          "score": 88
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Sm-147 (primordial)",
          "justification": "Contém isótopos estáveis e isótopos de vida longuíssima.",
          "score": 98
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Ímãs, Reatores Nucleares, Tratamento de Câncer",
          "justification": "O isótopo Sm-153 é usado no tratamento de dores ósseas por câncer.",
          "score": 97
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "França",
          "justification": "Descoberto a partir do mineral samarskita.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "O Mineral Russo",
          "justification": "Foi o primeiro elemento nomeado em homenagem a uma pessoa real (o oficial de minas russo Samarsky).",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Samarskite",
          "justification": "Nome do mineral de onde foi extraído.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Paul-Émile Lecoq de Boisbaudran",
          "justification": "Identificado por espectroscopia.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1879",
          "justification": "Identificado na França a partir de minerais russos.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1072 °C",
          "justification": "Fusão elevada, metal resistente.",
          "score": 95
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "1794 °C",
          "justification": "Ponto de ebulição relativamente baixo para um lantanídeo.",
          "score": 17
        }
    ]
},
  "Eu": {
    "number": 63,
    "symbol": "Eu",
    "name": "Európio",
    "heroName": "Europium Phosphor",
    "heroDescription": "O mestre das cores vibrantes em telas e da segurança em notas fiscais, o herói do brilho escarlate.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Altamente reativo",
          "justification": "O mais reativo dos lantanídeos, oxida-se instantaneamente no ar e reage vigorosamente com água.",
          "score": 20
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Geralmente pouco tóxico, mas seu manuseio exige precaução extrema devido à reatividade.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo",
          "justification": "Não possui papel biológico conhecido.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Telas de TV, LEDs, Notas de Euro",
          "justification": "Essencial para produzir a cor vermelha em telas e para segurança contra falsificação.",
          "score": 98
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "2, 3",
          "justification": "Estado +2 é excepcionalmente estável para um lantanídeo.",
          "score": 75
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "1,8 ppm (crosta)",
          "justification": "Um dos lantanídeos menos abundantes.",
          "score": 30
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000005%",
          "justification": "Elemento muito raro no cosmos.",
          "score": 1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "151,96 u",
          "justification": "Massa baseada em dois isótopos naturais.",
          "score": 152
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "5,24 g/cm³",
          "justification": "O lantanídeo menos denso, devido ao seu grande raio atômico.",
          "score": 52
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "199 pm",
          "justification": "O maior raio atômico entre todos os lantanídeos.",
          "score": 199
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+2, +3",
          "justification": "Capacidade única de alternar entre +2 e +3 com facilidade.",
          "score": 50
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Metal com propriedades condutoras lantanídeas típicas.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,20 (Pauling)",
          "justification": "Valor baixo, mas um dos mais altos entre os lantanídeos.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal macio, prateado, com brilho metálico.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f⁷",
          "justification": "Sétimo elétron preenche o subnível 4f, criando uma camada semi-preenchida estável.",
          "score": 47
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f⁷ 6s²",
          "justification": "Configuração que favorece o estado de oxidação +2.",
          "score": 96
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "63",
          "justification": "Identidade atômica do Európio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "89",
          "justification": "Baseado no isótopo mais abundante Eu-152.",
          "score": 89
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Eu-151 (vida longa)",
          "justification": "Eu-151 tem meia-vida de 5 trilhões de anos.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Telas OLED, Tintas de Segurança",
          "justification": "Essencial para a reprodução de cores em displays modernos.",
          "score": 98
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "França",
          "justification": "Isolado pelo químico Eugène-Antole Demarçay.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "O Elemento das Cédulas",
          "justification": "As notas de Euro brilham sob luz UV devido a complexos de európio.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Europa",
          "justification": "Homenagem ao continente europeu.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Eugène-Antole Demarçay",
          "justification": "Químico francês que previu e isolou o elemento.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1901",
          "justification": "Um dos últimos lantanídeos naturais a serem descobertos.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "822 °C",
          "justification": "Ponto de fusão baixo comparado aos seus vizinhos.",
          "score": 82
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "1529 °C",
          "justification": "Ponto de ebulição relativamente baixo para um lantanídeo.",
          "score": 15
        }
    ]
},
  "Gd": {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadovínio",
    "heroName": "Gadolinium Vision",
    "heroDescription": "O mestre do contraste médico, o herói que revela o invisível em ressonâncias magnéticas.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
          "id": 1,
          "label": "Fraquezas",
          "value": "Mancha no ar úmido",
          "justification": "Oxida-se em ar úmido, mas é relativamente estável em ar seco.",
          "score": 40
        },
        {
          "id": 2,
          "label": "Risco/Benefício à natureza",
          "value": "Baixa toxicidade",
          "justification": "Geralmente pouco tóxico, mas o íon Gd³⁺ livre é tóxico; por isso é usado em formas quelatadas.",
          "score": 85
        },
        {
          "id": 3,
          "label": "Risco à saúde",
          "value": "Baixo (Quelatado)",
          "justification": "Seguro para uso médico quando devidamente processado.",
          "score": 90
        },
        {
          "id": 4,
          "label": "Benefício",
          "value": "Ressonância Magnética, Blindagem Nuclear",
          "justification": "Possui a maior seção transversal de captura de nêutrons térmicos de qualquer elemento natural.",
          "score": 99
        },
        {
          "id": 5,
          "label": "Nº de ligantes possíveis",
          "value": "3",
          "justification": "Estado de oxidação +3 é o padrão.",
          "score": 60
        },
        {
          "id": 6,
          "label": "Abundância na natureza",
          "value": "6,2 ppm (crosta)",
          "justification": "Presente em minerais como monazita e bastnäsita.",
          "score": 40
        },
        {
          "id": 7,
          "label": "Abundância no universo",
          "value": "0,000000002%",
          "justification": "Elemento raro no universo.",
          "score": 1
        },
        {
          "id": 8,
          "label": "Massa atômica",
          "value": "157,25 u",
          "justification": "Massa central da série dos lantanídeos.",
          "score": 157
        },
        {
          "id": 9,
          "label": "Densidade",
          "value": "7,90 g/cm³",
          "justification": "Metal denso, o primeiro lantanídeo a aproximar-se de 8 g/cm³.",
          "score": 79
        },
        {
          "id": 10,
          "label": "Raio atômico",
          "value": "179 pm",
          "justification": "Tamanho atômico padrão para lantanídeos pesados.",
          "score": 179
        },
        {
          "id": 11,
          "label": "Oxidação",
          "value": "+3",
          "justification": "Estado +3 é altamente estável.",
          "score": 30
        },
        {
          "id": 12,
          "label": "Condutividade elétrica",
          "value": "Baixa (Metal)",
          "justification": "Propriedades condutoras típicas da série dos lantanídeos.",
          "score": 15
        },
        {
          "id": 13,
          "label": "Eletronegatividade",
          "value": "1,20 (Pauling)",
          "justification": "Valor baixo, metal eletropositivo.",
          "score": 11
        },
        {
          "id": 14,
          "label": "Estado físico",
          "value": "Sólido",
          "justification": "Metal branco-prateado, macio e ductível.",
          "score": 50
        },
        {
          "id": 15,
          "label": "Maior subnível energético",
          "value": "4f⁷",
          "justification": "Possui uma camada 4f semi-preenchida e um elétron no 5d, o que o torna único.",
          "score": 48
        },
        {
          "id": 16,
          "label": "Distribuição eletrônica",
          "value": "[Xe] 4f⁷ 5d¹ 6s²",
          "justification": "Configuração que explica sua estabilidade e magnetismo.",
          "score": 97
        },
        {
          "id": 17,
          "label": "Nº de prótons / Nº de elétrons",
          "value": "64",
          "justification": "Identidade atômica do Gadolínio.",
          "score": 99
        },
        {
          "id": 18,
          "label": "Nº de nêutrons",
          "value": "94",
          "justification": "Média baseada nos sete isótopos estáveis naturais.",
          "score": 94
        },
        {
          "id": 19,
          "label": "Radioatividade",
          "value": "Estável / Gd-152 (vida longa)",
          "justification": "Gd-152 tem uma meia-vida de 110 trilhões de anos.",
          "score": 99
        },
        {
          "id": 20,
          "label": "Aplicabilidade / Utilidade",
          "value": "Contrastes Médicos, Refrigeração Magnética",
          "justification": "Capaz de resfriar ambientes via efeito magnetocalórico.",
          "score": 96
        },
        {
          "id": 21,
          "label": "Local de origem",
          "value": "Suíça",
          "justification": "Isolado por Jean Charles Galissard de Marignac.",
          "score": 85
        },
        {
          "id": 22,
          "label": "Curiosidade",
          "value": "Supercondutor",
          "justification": "Torna-se ferromagnético em temperaturas abaixo de 20 °C.",
          "score": 100
        },
        {
          "id": 23,
          "label": "Origem do nome",
          "value": "Johan Gadolin",
          "justification": "Homenagem ao químico finlandês Johan Gadolin, pioneiro das terras raras.",
          "score": 95
        },
        {
          "id": 24,
          "label": "Descobridor",
          "value": "Jean Charles Galissard de Marignac",
          "justification": "Químico suíço que primeiro isolou o óxido de gadolínio.",
          "score": 90
        },
        {
          "id": 25,
          "label": "Ano de descoberta",
          "value": "1880",
          "justification": "Identificado via espectroscopia no mineral samarskita.",
          "score": 92
        },
        {
          "id": 26,
          "label": "Ponto de fusão",
          "value": "1313 °C",
          "justification": "Ponto de fusão elevado para a série.",
          "score": 96
        },
        {
          "id": 27,
          "label": "Ponto de ebulição",
          "value": "3273 °C",
          "justification": "Ponto de ebulição muito alto.",
          "score": 32
        }
    ]
},
  "Tb": {
    "number": 65,
    "symbol": "Tb",
    "name": "Térbio",
    "heroName": "Terbium Lumina",
    "heroDescription": "O mestre da fluorescência verde e do armazenamento magneto-óptico.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Dysprosium Magneto",
    "heroDescription": "O mestre da resistência térmica magnética, essencial para carros elétricos.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Holmium Laser",
    "heroDescription": "O mestre dos campos magnéticos mais fortes e das cirurgias a laser.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Erbium Fiber",
    "heroDescription": "O mestre da amplificação de sinais em fibras ópticas, o herói da internet global.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Thulium Beam",
    "heroDescription": "O mestre das máquinas de raio-X portáteis e dos lasers cirúrgicos avançados.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Ytterbium Clock",
    "heroDescription": "O mestre da precisão temporal e dos relógios atômicos mais exatos do mundo.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Lutetium Peak",
    "heroDescription": "O mestre do topo dos lantanídeos, o herói da datação radioativa e da medicina nuclear.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Hafnium Shield",
    "heroDescription": "O mestre do controle nuclear e dos processadores ultra-rápidos.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Tantalum Core",
    "heroDescription": "O mestre da resistência à corrosão e dos capacitores minúsculos em smartphones.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Wolfram Strength",
    "heroDescription": "O herói com o ponto de fusão mais alto de todos os metais, indestrutível sob calor extremo.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Rhenium Jet",
    "heroDescription": "O mestre das superligas para turbinas de aviões e catalisadores industriais.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Osmium Density",
    "heroDescription": "O herói mais denso de todos, o pilar inabalável da tabela periódica.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Iridium Impact",
    "heroDescription": "O mestre da resistência extrema e sobrevivente do impacto que mudou a história da Terra.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Platinum Noble",
    "heroDescription": "O herói da nobreza absoluta e catalisador da purificação ambiental.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Gold Monarch",
    "heroDescription": "O rei do brilho eterno e condutor supremo da era digital.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Mercury Fluid",
    "heroDescription": "O mestre da fluidez metálica e mensageiro da temperatura.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Thallium Shadow",
    "heroDescription": "O mestre da invisibilidade tóxica e dos sensores infravermelhos.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Plumbum Guard",
    "heroDescription": "O herói protetor contra a radiação e base das baterias ancestrais.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Bismuth Crystal",
    "heroDescription": "O mestre das cores iridescentes e protetor do sistema digestivo.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Polonium Alpha",
    "heroDescription": "O herói radioativo letal, fonte de calor no vácuo do espaço.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Astatine Ghost",
    "heroDescription": "O herói mais raro da Terra, um fantasma radioativo de vida curtíssima.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Radon Phantom",
    "heroDescription": "O gás invisível que surge das profundezas, silencioso e radioativo.",
    "heroImage": "/placeholder.svg",
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
    "heroName": "Francium Flash",
    "heroDescription": "O herói ultra-instável, o metal alcalino que mal existe antes de desaparecer.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ra": {
    "number": 88,
    "symbol": "Ra",
    "name": "Rádio",
    "heroName": "Radium Glow",
    "heroDescription": "A heroína pioneira do brilho eterno, que revelou os segredos do núcleo atômico.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ac": {
    "number": 89,
    "symbol": "Ac",
    "name": "Actínio",
    "heroName": "Actinium Ray",
    "heroDescription": "O mestre da luminescência azulada e precursor da série dos actinídeos.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Th": {
    "number": 90,
    "symbol": "Th",
    "name": "Tório",
    "heroName": "Thorium Power",
    "heroDescription": "O herói do futuro energético, combustível nuclear limpo e abundante.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Pa": {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactínio",
    "heroName": "Protactinium Ghost",
    "heroDescription": "O elo perdido radioativo, denso e extremamente raro.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "U": {
    "number": 92,
    "symbol": "U",
    "name": "Urânio",
    "heroName": "Uranium Titan",
    "heroDescription": "O gigante da energia nuclear, o herói cujo núcleo sustenta cidades inteiras.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Np": {
    "number": 93,
    "symbol": "Np",
    "name": "Netúnio",
    "heroName": "Neptunium Voyager",
    "heroDescription": "O primeiro elemento transurânico, mensageiro das profundezas do reator nuclear.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Pu": {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutônio",
    "heroName": "Plutonium Force",
    "heroDescription": "O herói da potência concentrada e das missões espaciais de longa duração.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Am": {
    "number": 95,
    "symbol": "Am",
    "name": "Amerício",
    "heroName": "Americium Guard",
    "heroDescription": "O sentinela invisível em cada lar, o herói detector de fumaça.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Cm": {
    "number": 96,
    "symbol": "Cm",
    "name": "Cúrio",
    "heroName": "Curium Spark",
    "heroDescription": "O herói radioativo que alimenta experimentos científicos em Marte.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Bk": {
    "number": 97,
    "symbol": "Bk",
    "name": "Berquélio",
    "heroName": "Berkelium Beam",
    "heroDescription": "O herói da síntese avançada, elo para a criação de novos mundos elementais.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Cf": {
    "number": 98,
    "symbol": "Cf",
    "name": "Califórnio",
    "heroName": "Californium Neutron",
    "heroDescription": "O mestre da emissão de nêutrons, o herói que detecta camadas de ouro e prata.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Es": {
    "number": 99,
    "symbol": "Es",
    "name": "Enstênio",
    "heroName": "Einsteinium Genius",
    "heroDescription": "O herói nascido da força termonuclear, tributo ao gênio da relatividade.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Fm": {
    "number": 100,
    "symbol": "Fm",
    "name": "Férmio",
    "heroName": "Fermium Core",
    "heroDescription": "O mestre do centésimo degrau elemental, herói da física quântica aplicada.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Md": {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelévio",
    "heroName": "Mendelevium Father",
    "heroDescription": "O herói que honra o arquiteto da tabela periódica.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "No": {
    "number": 102,
    "symbol": "No",
    "name": "Nobélio",
    "heroName": "Nobelium Prize",
    "heroDescription": "O herói da excelência científica e da paz atômica.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Lr": {
    "number": 103,
    "symbol": "Lr",
    "name": "Laurêncio",
    "heroName": "Lawrencium Cyclotron",
    "heroDescription": "O herói que marca o fim da série dos actinídeos com força acelerada.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Rf": {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfórdio",
    "heroName": "Rutherfordium Nucleus",
    "heroDescription": "O primeiro herói dos transactinídeos, explorador do núcleo central.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Db": {
    "number": 105,
    "symbol": "Db",
    "name": "Dúbnio",
    "heroName": "Dubnium Heavy",
    "heroDescription": "O herói da colaboração científica internacional nas profundezas atômicas.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Sg": {
    "number": 106,
    "symbol": "Sg",
    "name": "Seabórgio",
    "heroName": "Seaborgium Synth",
    "heroDescription": "O herói que personifica a criação artificial de elementos superpesados.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Bh": {
    "number": 107,
    "symbol": "Bh",
    "name": "Bóhrio",
    "heroName": "Bohrium Orbit",
    "heroDescription": "O herói que honra o modelo atômico e a estrutura da matéria.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Hs": {
    "number": 108,
    "symbol": "Hs",
    "name": "Hássio",
    "heroName": "Hassium Core",
    "heroDescription": "O herói da estabilidade efêmera no mar de instabilidade superpesada.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Mt": {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnério",
    "heroName": "Meitnerium Nuclei",
    "heroDescription": "A heroína que desvendou o segredo da fissão nuclear.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ds": {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstádtio",
    "heroName": "Darmstadtium Heavy",
    "heroDescription": "O herói forjado no acelerador de íons pesados.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Rg": {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgênio",
    "heroName": "Roentgenium Ray",
    "heroDescription": "O herói que atravessa a matéria com o poder dos raios-X.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Cn": {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernício",
    "heroName": "Copernicium Solar",
    "heroDescription": "O herói que coloca o Sol no centro do nosso entendimento atômico.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Nh": {
    "number": 113,
    "symbol": "Nh",
    "name": "Nipônio",
    "heroName": "Nihonium Sun",
    "heroDescription": "O herói do sol nascente, a primeira luz elemental da Ásia.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Fl": {
    "number": 114,
    "symbol": "Fl",
    "name": "Fleróvio",
    "heroName": "Flerovium Flight",
    "heroDescription": "O herói que flutua na fronteira da ilha de estabilidade.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Mc": {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscóvio",
    "heroName": "Moscovium Heavy",
    "heroDescription": "O herói das colisões ultra-energéticas nas estepes da ciência.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Lv": {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermório",
    "heroName": "Livermorium Lab",
    "heroDescription": "O herói da síntese colaborativa entre continentes.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Ts": {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennesso",
    "heroName": "Tennessine Halogen",
    "heroDescription": "O herói da última fronteira dos halogênios, uma faísca rara na escuridão superpesada.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
  "Og": {
    "number": 118,
    "symbol": "Og",
    "name": "Oganésson",
    "heroName": "Oganesson Zenith",
    "heroDescription": "O mestre final da tabela periódica, o herói do topo da pirâmide elemental.",
    "heroImage": "/placeholder.svg",
    "attributes": [
        {
            "id": 1,
            "label": "Atributo 1",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 2,
            "label": "Atributo 2",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 3,
            "label": "Atributo 3",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 4,
            "label": "Atributo 4",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 5,
            "label": "Atributo 5",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 6,
            "label": "Atributo 6",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 7,
            "label": "Atributo 7",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 8,
            "label": "Atributo 8",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 9,
            "label": "Atributo 9",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 10,
            "label": "Atributo 10",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 11,
            "label": "Atributo 11",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 12,
            "label": "Atributo 12",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 13,
            "label": "Atributo 13",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 14,
            "label": "Atributo 14",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 15,
            "label": "Atributo 15",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 16,
            "label": "Atributo 16",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 17,
            "label": "Atributo 17",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 18,
            "label": "Atributo 18",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 19,
            "label": "Atributo 19",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 20,
            "label": "Atributo 20",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 21,
            "label": "Atributo 21",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 22,
            "label": "Atributo 22",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 23,
            "label": "Atributo 23",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 24,
            "label": "Atributo 24",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 25,
            "label": "Atributo 25",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 26,
            "label": "Atributo 26",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        },
        {
            "id": 27,
            "label": "Atributo 27",
            "value": "Em breve",
            "justification": "Dados sendo processados pela central elemental.",
            "score": 50
        }
    ]
},
};

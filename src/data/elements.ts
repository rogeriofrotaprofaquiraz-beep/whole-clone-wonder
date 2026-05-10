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
  "V": {
    "number": 23,
    "symbol": "V",
    "name": "Vanádio",
    "heroName": "Vanádio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Vanádio.",
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
  "Cr": {
    "number": 24,
    "symbol": "Cr",
    "name": "Cromo",
    "heroName": "Cromo Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cromo.",
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
  "Mn": {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganês",
    "heroName": "Manganês Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Manganês.",
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
  "Fe": {
    "number": 26,
    "symbol": "Fe",
    "name": "Ferro",
    "heroName": "Iron Guardian",
    "heroDescription": "A espinha dorsal da civilização, mestre do magnetismo e da resistência inquebrável.",
    "heroImage": "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777817322180-0ipir-ChatGPT_Image_25_de_jan._de_2026__22_11_07.png",
    "attributes": [
      {
        "id": 1,
        "label": "Fraquezas",
        "value": "Oxidação (Ferrugem)",
        "justification": "Corrói facilmente em contato com oxigênio e umidade.",
        "score": 40
      },
      {
        "id": 2,
        "label": "Risco/Benefício à natureza",
        "value": "Essencial e reciclável",
        "justification": "Fundamental para a vida (hemoglobina) e altamente reciclável.",
        "score": 95
      },
      {
        "id": 3,
        "label": "Risco à saúde",
        "value": "Baixo (essencial)",
        "justification": "Necessário para o transporte de oxigênio no sangue.",
        "score": 90
      },
      {
        "id": 4,
        "label": "Benefício",
        "value": "Estruturas, ferramentas, transporte",
        "justification": "O metal mais usado na história da humanidade.",
        "score": 100
      },
      {
        "id": 5,
        "label": "Nº de ligantes possíveis",
        "value": "Complexo",
        "justification": "Forma diversas ligas como o aço.",
        "score": 85
      },
      {
        "id": 6,
        "label": "Abundância na natureza",
        "value": "5% na crosta",
        "justification": "Quarto elemento mais abundante na crosta terrestre.",
        "score": 80
      },
      {
        "id": 7,
        "label": "Abundância no universo",
        "value": "Comum",
        "justification": "Produzido em estrelas massivas no fim da vida.",
        "score": 70
      },
      {
        "id": 8,
        "label": "Massa atômica",
        "value": "55,845 u",
        "justification": "Massa média.",
        "score": 50
      },
      {
        "id": 9,
        "label": "Densidade",
        "value": "7,874 g/cm³",
        "justification": "Metal denso e sólido.",
        "score": 78
      },
      {
        "id": 10,
        "label": "Raio atômico",
        "value": "126 pm",
        "justification": "Tamanho médio para um metal de transição.",
        "score": 45
      },
      {
        "id": 11,
        "label": "Oxidação",
        "value": "+2, +3",
        "justification": "Estados de oxidação muito comuns e estáveis.",
        "score": 60
      },
      {
        "id": 12,
        "label": "Condutividade elétrica",
        "value": "Condutor",
        "justification": "Bom condutor, embora inferior ao cobre.",
        "score": 70
      },
      {
        "id": 13,
        "label": "Eletronegatividade",
        "value": "1,83",
        "justification": "Valor típico de metais.",
        "score": 40
      },
      {
        "id": 14,
        "label": "Estado físico",
        "value": "Sólido",
        "justification": "Sólido metálico à temperatura ambiente.",
        "score": 100
      },
      {
        "id": 15,
        "label": "Maior subnível energético",
        "value": "3d⁶",
        "justification": "Metal de transição com subnível d incompleto.",
        "score": 60
      },
      {
        "id": 16,
        "label": "Distribuição eletrônica",
        "value": "[Ar] 3d⁶ 4s²",
        "justification": "Configuração clássica de transição.",
        "score": 75
      },
      {
        "id": 17,
        "label": "Nº prótons/elétrons",
        "value": "26",
        "justification": "Posição central na tabela.",
        "score": 26
      },
      {
        "id": 18,
        "label": "Nº nêutrons",
        "value": "30",
        "justification": "Isótopo mais estável (Fe-56).",
        "score": 30
      },
      {
        "id": 19,
        "label": "Radioatividade",
        "value": "Estável",
        "justification": "Altamente estável.",
        "score": 100
      },
      {
        "id": 20,
        "label": "Aplicabilidade",
        "value": "Indústria pesada, aço",
        "justification": "Base da infraestrutura moderna.",
        "score": 100
      },
      {
        "id": 21,
        "label": "Local de origem",
        "value": "Antiguidade",
        "justification": "Conhecido desde os primórdios da humanidade.",
        "score": 100
      },
      {
        "id": 22,
        "label": "Curiosidade",
        "value": "Ferromagnetismo",
        "justification": "Propriedades magnéticas únicas.",
        "score": 95
      },
      {
        "id": 23,
        "label": "Origem do nome",
        "value": "Ferrum (Latim)",
        "justification": "Origem clássica e universal.",
        "score": 90
      },
      {
        "id": 24,
        "label": "Descobridor",
        "value": "Desconhecido",
        "justification": "Usado desde a pré-história.",
        "score": 50
      },
      {
        "id": 25,
        "label": "Ano de descoberta",
        "value": "~3500 a.C.",
        "justification": "Um dos metais mais antigos.",
        "score": 100
      },
      {
        "id": 26,
        "label": "Ponto de fusão",
        "value": "1538 °C",
        "justification": "Ponto de fusão elevado.",
        "score": 85
      },
      {
        "id": 27,
        "label": "Ponto de ebulição",
        "value": "2862 °C",
        "justification": "Ponto de ebulição muito alto.",
        "score": 90
      }
    ]
  },
  "Co": {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalto",
    "heroName": "Cobalto Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cobalto.",
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
  "Ni": {
    "number": 28,
    "symbol": "Ni",
    "name": "Níquel",
    "heroName": "Níquel Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Níquel.",
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
  "Cu": {
    "number": 29,
    "symbol": "Cu",
    "name": "Cobre",
    "heroName": "Cobre Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cobre.",
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
  "Zn": {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinco",
    "heroName": "Zinco Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Zinco.",
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
  "Ga": {
    "number": 31,
    "symbol": "Ga",
    "name": "Gálio",
    "heroName": "Gálio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Gálio.",
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
  "Ge": {
    "number": 32,
    "symbol": "Ge",
    "name": "Germânio",
    "heroName": "Germânio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Germânio.",
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
  "As": {
    "number": 33,
    "symbol": "As",
    "name": "Arsênio",
    "heroName": "Arsênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Arsênio.",
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
  "Se": {
    "number": 34,
    "symbol": "Se",
    "name": "Selênio",
    "heroName": "Selênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Selênio.",
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
  "Br": {
    "number": 35,
    "symbol": "Br",
    "name": "Bromo",
    "heroName": "Bromo Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Bromo.",
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
  "Kr": {
    "number": 36,
    "symbol": "Kr",
    "name": "Criptônio",
    "heroName": "Criptônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Criptônio.",
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
  "Rb": {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubídio",
    "heroName": "Rubídio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Rubídio.",
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
  "Sr": {
    "number": 38,
    "symbol": "Sr",
    "name": "Estrôncio",
    "heroName": "Estrôncio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Estrôncio.",
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
    "heroName": "Molibdênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Molibdênio.",
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
    "heroName": "Tecnécio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Tecnécio.",
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
    "heroName": "Rutênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Rutênio.",
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
    "heroName": "Ródio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Ródio.",
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
    "heroName": "Paládio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Paládio.",
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
    "heroName": "Prata Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Prata.",
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
    "heroName": "Cádmio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cádmio.",
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
    "heroName": "Índio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Índio.",
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
    "heroName": "Estanho Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Estanho.",
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
    "heroName": "Antimônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Antimônio.",
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
    "heroName": "Telúrio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Telúrio.",
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
    "heroName": "Iodo Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Iodo.",
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
    "heroName": "Xenônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Xenônio.",
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
    "heroName": "Césio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Césio.",
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
    "heroName": "Bário Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Bário.",
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
    "heroName": "Lantânio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Lantânio.",
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
  "Ce": {
    "number": 58,
    "symbol": "Ce",
    "name": "Cério",
    "heroName": "Cério Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cério.",
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
  "Pr": {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodímio",
    "heroName": "Praseodímio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Praseodímio.",
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
  "Nd": {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodímio",
    "heroName": "Neodímio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Neodímio.",
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
  "Pm": {
    "number": 61,
    "symbol": "Pm",
    "name": "Promécio",
    "heroName": "Promécio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Promécio.",
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
  "Sm": {
    "number": 62,
    "symbol": "Sm",
    "name": "Samário",
    "heroName": "Samário Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Samário.",
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
  "Eu": {
    "number": 63,
    "symbol": "Eu",
    "name": "Európio",
    "heroName": "Európio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Európio.",
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
  "Gd": {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolínio",
    "heroName": "Gadolínio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Gadolínio.",
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
  "Tb": {
    "number": 65,
    "symbol": "Tb",
    "name": "Térbio",
    "heroName": "Térbio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Térbio.",
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
  "Dy": {
    "number": 66,
    "symbol": "Dy",
    "name": "Disprósio",
    "heroName": "Disprósio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Disprósio.",
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
  "Ho": {
    "number": 67,
    "symbol": "Ho",
    "name": "Hólmio",
    "heroName": "Hólmio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Hólmio.",
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
  "Er": {
    "number": 68,
    "symbol": "Er",
    "name": "Érbio",
    "heroName": "Érbio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Érbio.",
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
  "Tm": {
    "number": 69,
    "symbol": "Tm",
    "name": "Túlio",
    "heroName": "Túlio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Túlio.",
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
  "Yb": {
    "number": 70,
    "symbol": "Yb",
    "name": "Itérbio",
    "heroName": "Itérbio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Itérbio.",
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
  "Lu": {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutécio",
    "heroName": "Lutécio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Lutécio.",
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
  "Hf": {
    "number": 72,
    "symbol": "Hf",
    "name": "Háfnio",
    "heroName": "Háfnio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Háfnio.",
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
  "Ta": {
    "number": 73,
    "symbol": "Ta",
    "name": "Tântalo",
    "heroName": "Tântalo Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Tântalo.",
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
  "W": {
    "number": 74,
    "symbol": "W",
    "name": "Tungstênio",
    "heroName": "Tungstênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Tungstênio.",
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
  "Re": {
    "number": 75,
    "symbol": "Re",
    "name": "Rênio",
    "heroName": "Rênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Rênio.",
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
  "Os": {
    "number": 76,
    "symbol": "Os",
    "name": "Ósmio",
    "heroName": "Ósmio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Ósmio.",
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
  "Ir": {
    "number": 77,
    "symbol": "Ir",
    "name": "Irídio",
    "heroName": "Irídio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Irídio.",
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
  "Pt": {
    "number": 78,
    "symbol": "Pt",
    "name": "Platina",
    "heroName": "Platina Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Platina.",
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
  "Au": {
    "number": 79,
    "symbol": "Au",
    "name": "Ouro",
    "heroName": "Ouro Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Ouro.",
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
  "Hg": {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercúrio",
    "heroName": "Mercúrio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Mercúrio.",
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
  "Tl": {
    "number": 81,
    "symbol": "Tl",
    "name": "Tálio",
    "heroName": "Tálio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Tálio.",
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
  "Pb": {
    "number": 82,
    "symbol": "Pb",
    "name": "Chumbo",
    "heroName": "Chumbo Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Chumbo.",
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
  "Bi": {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuto",
    "heroName": "Bismuto Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Bismuto.",
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
  "Po": {
    "number": 84,
    "symbol": "Po",
    "name": "Polônio",
    "heroName": "Polônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Polônio.",
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
  "At": {
    "number": 85,
    "symbol": "At",
    "name": "Astato",
    "heroName": "Astato Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Astato.",
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
  "Rn": {
    "number": 86,
    "symbol": "Rn",
    "name": "Radônio",
    "heroName": "Radônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Radônio.",
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
  "Fr": {
    "number": 87,
    "symbol": "Fr",
    "name": "Frâncio",
    "heroName": "Frâncio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Frâncio.",
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
    "heroName": "Rádio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Rádio.",
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
    "heroName": "Actínio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Actínio.",
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
    "heroName": "Tório Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Tório.",
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
    "heroName": "Protactínio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Protactínio.",
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
    "heroName": "Urânio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Urânio.",
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
    "heroName": "Netúnio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Netúnio.",
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
    "heroName": "Plutônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Plutônio.",
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
    "heroName": "Amerício Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Amerício.",
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
    "heroName": "Cúrio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cúrio.",
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
    "heroName": "Berquélio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Berquélio.",
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
    "heroName": "Califórnio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Califórnio.",
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
    "heroName": "Enstênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Enstênio.",
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
    "heroName": "Férmio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Férmio.",
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
    "heroName": "Mendelévio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Mendelévio.",
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
    "heroName": "Nobélio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Nobélio.",
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
    "heroName": "Laurêncio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Laurêncio.",
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
    "heroName": "Rutherfórdio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Rutherfórdio.",
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
    "heroName": "Dúbnio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Dúbnio.",
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
    "heroName": "Seabórgio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Seabórgio.",
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
    "heroName": "Bóhrio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Bóhrio.",
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
    "heroName": "Hássio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Hássio.",
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
    "heroName": "Meitnério Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Meitnério.",
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
    "name": "Darmstádio",
    "heroName": "Darmstádio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Darmstádio.",
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
    "heroName": "Roentgênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Roentgênio.",
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
    "heroName": "Copernício Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Copernício.",
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
    "name": "Nihônio",
    "heroName": "Nihônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Nihônio.",
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
    "heroName": "Fleróvio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Fleróvio.",
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
    "heroName": "Moscóvio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Moscóvio.",
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
    "heroName": "Livermório Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Livermório.",
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
    "heroName": "Tennesso Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Tennesso.",
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
    "name": "Oganessono",
    "heroName": "Oganessono Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Oganessono.",
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
  }
};

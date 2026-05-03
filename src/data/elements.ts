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
  "Be": {
    "number": 4,
    "symbol": "Be",
    "name": "Berílio",
    "heroName": "Berílio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Berílio.",
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
  "B": {
    "number": 5,
    "symbol": "B",
    "name": "Boro",
    "heroName": "Boro Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Boro.",
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
  "C": {
    "number": 6,
    "symbol": "C",
    "name": "Carbono",
    "heroName": "Carbono Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Carbono.",
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
  "N": {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogênio",
    "heroName": "Nitrogênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Nitrogênio.",
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
  "O": {
    "number": 8,
    "symbol": "O",
    "name": "Oxigênio",
    "heroName": "Oxigênio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Oxigênio.",
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
  "F": {
    "number": 9,
    "symbol": "F",
    "name": "Flúor",
    "heroName": "Flúor Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Flúor.",
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
  "Ne": {
    "number": 10,
    "symbol": "Ne",
    "name": "Neônio",
    "heroName": "Neônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Neônio.",
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
  "Na": {
    "number": 11,
    "symbol": "Na",
    "name": "Sódio",
    "heroName": "Sódio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Sódio.",
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
  "Mg": {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnésio",
    "heroName": "Magnésio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Magnésio.",
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
  "Al": {
    "number": 13,
    "symbol": "Al",
    "name": "Alumínio",
    "heroName": "Alumínio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Alumínio.",
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
    "heroName": "Fósforo Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Fósforo.",
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
  "Cl": {
    "number": 17,
    "symbol": "Cl",
    "name": "Cloro",
    "heroName": "Cloro Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cloro.",
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
  "Ar": {
    "number": 18,
    "symbol": "Ar",
    "name": "Argônio",
    "heroName": "Argônio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Argônio.",
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
  "K": {
    "number": 19,
    "symbol": "K",
    "name": "Potássio",
    "heroName": "Potássio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Potássio.",
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
  "Ca": {
    "number": 20,
    "symbol": "Ca",
    "name": "Cálcio",
    "heroName": "Cálcio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Cálcio.",
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
  "Sc": {
    "number": 21,
    "symbol": "Sc",
    "name": "Escândio",
    "heroName": "Escândio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Escândio.",
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
  "Ti": {
    "number": 22,
    "symbol": "Ti",
    "name": "Titânio",
    "heroName": "Titânio Hero",
    "heroDescription": "Um poderoso herói baseado no elemento Titânio.",
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

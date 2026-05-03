
const symbols = [
  "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar",
  "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
  "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
  "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu",
  "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra",
  "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db",
  "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"
];

const names = [
  "Hidrogênio", "Hélio", "Lítio", "Berílio", "Boro", "Carbono", "Nitrogênio", "Oxigênio", "Flúor", "Neônio",
  "Sódio", "Magnésio", "Alumínio", "Silício", "Fósforo", "Enxofre", "Cloro", "Argônio", "Potássio", "Cálcio",
  "Escândio", "Titânio", "Vanádio", "Cromo", "Manganês", "Ferro", "Cobalto", "Níquel", "Cobre", "Zinco",
  "Gálio", "Germânio", "Arsênio", "Selênio", "Bromo", "Criptônio", "Rubídio", "Estrôncio", "Ítrio", "Zircônio",
  "Nióbio", "Molibdênio", "Tecnécio", "Rutênio", "Ródio", "Paládio", "Prata", "Cádmio", "Índio", "Estanho",
  "Antimônio", "Telúrio", "Iodo", "Xenônio", "Césio", "Bário", "Lantânio", "Cério", "Praseodímio", "Neodímio",
  "Promécio", "Samário", "Európio", "Gadolínio", "Térbio", "Disprósio", "Hólmio", "Érbio", "Túlio", "Itérbio",
  "Lutécio", "Háfnio", "Tântalo", "Tungstênio", "Rênio", "Ósmio", "Irídio", "Platina", "Ouro", "Mercúrio",
  "Tálio", "Chumbo", "Bismuto", "Polônio", "Astato", "Radônio", "Frâncio", "Rádio", "Actínio", "Tório",
  "Protactínio", "Urânio", "Netúnio", "Plutônio", "Amerício", "Cúrio", "Berquélio", "Califórnio", "Enstênio",
  "Férmio", "Mendelévio", "Nobélio", "Laurêncio", "Rutherfórdio", "Dúbnio", "Seabórgio", "Bóhrio", "Hássio",
  "Meitnério", "Darmstádio", "Roentgênio", "Copernício", "Nihônio", "Fleróvio", "Moscóvio", "Livermório",
  "Tennesso", "Oganessono"
];

const existingData = {
  H: {
    number: 1,
    symbol: "H",
    name: "Hidrogênio",
    heroName: "Hydrogen Genesis",
    heroDescription: "O primeiro elemento, faísca primordial das estrelas e combustível do futuro infinito.",
    heroImage: "https://cvbgrjauqjawrsyknhyj.supabase.co/storage/v1/object/public/files/uploads/higtSN3xyfWHqjML33VUnzcwd6r2/1777818237494-j6one-PixVerse_V5_Image_Text_360P_transformar_em_mov.mp4",
    attributes: [
      { id: 1, label: "Fraquezas", value: "Altamente inflamável", justification: "Instável, risco de explosão.", score: 10 },
      { id: 2, label: "Risco/Benefício à natureza", value: "Gás limpo, mas perigoso", justification: "Baixo impacto ambiental, mas manipulação perigosa.", score: 5 },
      { id: 3, label: "Risco à saúde", value: "Pouco tóxico (asfixiante)", justification: "Seguro biologicamente, porém explosivo.", score: 5 },
      { id: 4, label: "Benefício", value: "Célula a combustível, NH₃, H₂O", justification: "Base da água e essencial para a vida.", score: 80 },
      { id: 5, label: "Nº de ligantes possíveis", value: "≈ 95 elementos", justification: "Extrema versatilidade química.", score: 95 },
      { id: 6, label: "Abundância na natureza", value: "0,15% na crosta / 10% na água", justification: "Raro na forma livre, comum em compostos.", score: 10 },
      { id: 7, label: "Abundância no universo", value: "~75%", justification: "O elemento mais abundante de toda a massa bariônica.", score: 100 },
      { id: 8, label: "Massa atômica", value: "1,008 u", justification: "A menor massa atômica possível.", score: 1 },
      { id: 9, label: "Densidade", value: "0,0899 g/L", justification: "O gás mais leve que existe.", score: 1 },
      { id: 10, label: "Raio atômico", value: "53 pm", justification: "Um dos menores raios atômicos.", score: 5 },
      { id: 11, label: "Oxidação", value: "+1, -1", justification: "Estados simples mas fundamentais.", score: 25 },
      { id: 12, label: "Condutividade elétrica", value: "Isolante (gás)", justification: "Pobre condutor em estado gasoso.", score: 1 },
      { id: 13, label: "Eletronegatividade", value: "2,20", justification: "Padrão de referência médio.", score: 45 },
      { id: 14, label: "Estado físico", value: "Gás", justification: "Gás incolor e inodoro à temperatura ambiente.", score: 1 },
      { id: 15, label: "Maior subnível energético", value: "1s¹", justification: "O ponto de partida da tabela periódica.", score: 1 },
      { id: 16, label: "Distribuição eletrônica", value: "1s¹", justification: "A configuração mais simples e fundamental.", score: 95 },
      { id: 17, label: "Nº de prótons / Nº de elétrons", value: "1", justification: "O número atômico 1 define a base da matéria.", score: 100 },
      { id: 18, label: "Nº de nêutrons", value: "0", justification: "Único elemento sem nêutrons no núcleo estável.", score: 1 },
      { id: 19, label: "Radioatividade", value: "Estável", justification: "Isótopo Protião é perfeitamente estável.", score: 100 },
      { id: 20, label: "Aplicabilidade / Utilidade", value: "Combustível, indústria, fusão", justification: "Peça chave para o futuro energético da humanidade.", score: 95 },
      { id: 21, label: "Local de origem", value: "Londres, Inglaterra", justification: "Isolado pela primeira vez por Henry Cavendish.", score: 80 },
      { id: 22, label: "Curiosidade", value: "Gás mais leve, chama invisível", justification: "Pode queimar com uma chama quase imperceptível.", score: 85 },
      { id: 23, label: "Origem do nome", value: "Hydro (água) + genes (formador)", justification: "Literalmente 'o gerador de água'.", score: 95 },
      { id: 24, label: "Descobridor", value: "Henry Cavendish", justification: "Pioneiro da química moderna.", score: 90 },
      { id: 25, label: "Ano de descoberta", value: "1766", justification: "Uma das descobertas mais antigas e cruciais.", score: 99 },
      { id: 26, label: "Ponto de fusão", value: "-259,14 °C", justification: "Extremamente baixo, próximo ao zero absoluto.", score: 1 },
      { id: 27, label: "Ponto de ebulição", value: "-252,87 °C", justification: "Um dos menores pontos de ebulição conhecidos.", score: 1 },
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

const fullData = {};

symbols.forEach((symbol, index) => {
  if (existingData[symbol]) {
    fullData[symbol] = existingData[symbol];
  } else {
    fullData[symbol] = {
      number: index + 1,
      symbol: symbol,
      name: names[index],
      heroName: `${names[index]} Hero`,
      heroDescription: `Um poderoso herói baseado no elemento ${names[index]}.`,
      heroImage: "/placeholder.svg",
      attributes: Array.from({ length: 27 }, (_, i) => ({
        id: i + 1,
        label: `Atributo ${i + 1}`,
        value: "Em breve",
        justification: "Dados sendo processados pela central elemental.",
        score: 50
      }))
    };
  }
});

console.log(`export interface ElementAttribute {
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

export const ELEMENTS_DATA: Record<string, PeriodicElement> = ${JSON.stringify(fullData, null, 2)};`);

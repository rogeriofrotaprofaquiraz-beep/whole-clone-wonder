import fs from 'fs';

const heroUpdates = {
  "Tb": { heroName: "Lumina Térbio", heroDescription: "O mestre da fluorescência e das telas coloridas, capaz de transformar energia em brilho esmeralda." },
  "Dy": { heroName: "Disprósio Magneticus", heroDescription: "O guardião da resistência magnética extrema, essencial para os motores que movem o futuro." },
  "Ho": { heroName: "Hólmio Laser", heroDescription: "O herói da precisão absoluta, mestre das radiações infravermelhas e cirurgias de luz." },
  "Er": { heroName: "Érbio Óptico", heroDescription: "O mensageiro das profundezas, amplificando as vozes do mundo através dos fios de luz." },
  "Tm": { heroName: "Túlio Radiante", heroDescription: "O herói da visão invisível, capaz de gerar raios-X em dispositivos portáteis para salvar vidas." },
  "Yb": { heroName: "Itérbio Quantum", heroDescription: "O mestre da precisão atômica e do tempo infinito, a pulsação dos relógios mais precisos da Terra." },
  "Lu": { heroName: "Lutécio Sideral", heroDescription: "O herói das altas energias, capaz de converter radiação em luz visível para diagnósticos espaciais." },
  "Hf": { heroName: "Háfnio Reactor", heroDescription: "O escudo das correntes nucleares, capaz de absorver nêutrons e manter o equilíbrio atômico." },
  "Ta": { heroName: "Tântalo Eterno", heroDescription: "O guardião da energia minúscula, mestre dos capacitores que sustentam a era digital móvel." },
  "W": { heroName: "Tungstênio Invictus", heroDescription: "O herói inquebrável, dono do ponto de fusão supremo, capaz de brilhar intensamente sem nunca derreter." },
  "Re": { heroName: "Rênio Flame", heroDescription: "O mestre das superligas e do calor infernal, forjando os motores de aviões que cruzam os céus." },
  "Os": { heroName: "Ósmio Denso", heroDescription: "O herói de peso inigualável, o elemento mais denso da natureza e mestre da resistência extrema." },
  "Ir": { heroName: "Irídio Impact", heroDescription: "O sobrevivente do cosmos, o guardião que marca a fronteira entre as eras dos dinossauros e dos mamíferos." },
  "Pt": { heroName: "Platina Preciosa", heroDescription: "A rainha da catálise e da pureza, limpando o ar do planeta enquanto brilha com elegância inabalável." },
  "Au": { heroName: "Ouro Soberano", heroDescription: "O monarca da eternidade e da condutividade, o metal que nunca oxida e sustenta a glória e a tecnologia." },
  "Hg": { heroName: "Mercúrio Líquido", heroDescription: "O mensageiro fluido da temperatura, mestre das formas mutáveis e único metal que dança em estado líquido." },
  "Tl": { heroName: "Tálio Fantasma", heroDescription: "O mestre da furtividade e dos venenos invisíveis, capaz de se ocultar enquanto detecta o infravermelho." },
  "Pb": { heroName: "Chumbo Pesado", heroDescription: "O escudo protetor contra o invisível, a barreira final contra as radiações que ameaçam a vida." },
  "Bi": { heroName: "Bismuto Cristal", heroDescription: "O alquimista das cores arco-íris, o herói metálico mais ecológico e mestre da levitação diamagnética." },
  "Po": { heroName: "Polônio Estelar", heroDescription: "A centelha azul do vácuo, o herói intensamente radioativo que aquece as sondas espaciais no frio eterno." },
  "At": { heroName: "Astatínio Fugaz", heroDescription: "A sombra mais rara da Terra, um herói que brilha por um instante antes de desaparecer no mistério." },
  "Rn": { heroName: "Radônio Invisível", heroDescription: "O fantasma das profundezas terrestres, um gás nobre e radioativo que emana silenciosamente do solo." },
  "Fr": { heroName: "Frâncio Efêmero", heroDescription: "O rei da instabilidade, o elemento natural mais instável que explode ao menor contato com a água." },
  "Ra": { heroName: "Rádio Brilhante", heroDescription: "O herói que iluminou a ciência, o legado eterno de Marie Curie e o mestre da luminescência atômica." },
  "Ac": { heroName: "Actínio Ativo", heroDescription: "O precursor da luz nuclear, capaz de brilhar no escuro com um azul etéreo e intenso." },
  "Th": { heroName: "Tório Sustentável", heroDescription: "O gigante da energia verde do futuro, mais abundante que o urânio e mestre dos reatores seguros." },
  "Pa": { heroName: "Protactínio Ancestral", heroDescription: "O elo perdido dos actinídeos, mestre das transformações atômicas lentas e profundas." },
  "U": { heroName: "Urânio Fissão", heroDescription: "O titã do núcleo, a fonte suprema de poder e destruição, capaz de iluminar cidades ou mudar o curso da história." },
  "Np": { heroName: "Neptúnio Voyager", heroDescription: "O primeiro herói além do urânio, o navegador dos elementos transurânicos artificiais." },
  "Pu": { heroName: "Plutônio Alfa", heroDescription: "O motor do sistema solar, alimentando as naves que exploram os confins do espaço com seu calor atômico." },
  "Am": { heroName: "Amerício Alerta", heroDescription: "O sentinela silencioso, presente em cada casa para detectar a ameaça invisível da fumaça." },
  "Cm": { heroName: "Cúrio Radioativo", heroDescription: "O mestre do bombardeio de partículas, capaz de gerar calor intenso a partir de sua própria existência." },
  "Bk": { heroName: "Berquélio Sintético", heroDescription: "O herói dos laboratórios de Berkeley, forjado na chama dos aceleradores de partículas." },
  "Cf": { heroName: "Califórnio Neutrônico", heroDescription: "O canhão de nêutrons, capaz de iniciar reatores e encontrar tesouros escondidos sob a terra." },
  "Es": { heroName: "Einstênio Relativo", heroDescription: "O gênio atômico, nomeado em honra à mente mais brilhante, nascido do fogo das explosões térmicas." },
  "Fm": { heroName: "Férmio Quântico", heroDescription: "O mestre dos processos nucleares rápidos, o limite final dos elementos que podem ser criados por bombardeio." },
  "Md": { heroName: "Mendelévio Tabela", heroDescription: "O arquiteto da ordem, o herói que reconhece a beleza da organização elemental russa." },
  "No": { heroName: "Nobélio Dinâmico", heroDescription: "O herói do prêmio supremo, forjado no choque entre átomos pesados e sonhos de descoberta." },
  "Lr": { heroName: "Laurêncio Cíclotron", heroDescription: "O caçador do fim da linha dos actinídeos, mestre dos aceleradores circulares de energia." },
  "Rf": { heroName: "Rutherfórdio Nuclear", heroDescription: "O herói do núcleo central, o primeiro dos elementos superpesados a desafiar as leis da estabilidade." },
  "Db": { heroName: "Dúbnio Pesado", heroDescription: "O gigante da colaboração russa, uma ponte estável na fronteira do desconhecido atômico." },
  "Sg": { heroName: "Seabórgio Eterno", heroDescription: "O mestre das sínteses impossíveis, o único herói nomeado em honra a um cientista ainda vivo em sua criação." },
  "Bh": { heroName: "Bóhrio Órbita", heroDescription: "O guardião da estrutura atômica moderna, mestre das camadas onde os elétrons dançam." },
  "Hs": { heroName: "Hássio Denso", heroDescription: "O titã superpesado, mestre da densidade teórica que desafia os limites da matéria sólida." },
  "Mt": { heroName: "Meitnério Brilhante", heroDescription: "A heroína da fissão descoberta, o reconhecimento tardio de uma das mentes mais brilhantes da física." },
  "Ds": { heroName: "Darmstádtio Heavy", heroDescription: "O colosso das terras alemãs, forjado na precisão dos aceleradores de íons pesados." },
  "Rg": { heroName: "Roentgênio X", heroDescription: "O herói dos raios invisíveis, capaz de atravessar a matéria com o poder da radiação diagnóstica." },
  "Cn": { heroName: "Copernício Estelar", heroDescription: "O herói que colocou o sol no centro de tudo, brilhando como um metal volátil no fim da linha do bloco d." },
  "Nh": { heroName: "Nipônio Nascente", heroDescription: "A luz do sol nascente, o primeiro herói descoberto nas terras do Japão." },
  "Fl": { heroName: "Fleróvio Instável", heroDescription: "O buscador da ilha de estabilidade, flutuando no mar de núcleos radioativos efêmeros." },
  "Mc": { heroName: "Moscóvio Exótico", heroDescription: "O mestre da gravidade teórica e das camadas nucleares misteriosas, vindo do coração da Rússia." },
  "Lv": { heroName: "Livermório Lab", heroDescription: "O herói da síntese colaborativa global, unindo nações no laboratório da descoberta atômica." },
  "Ts": { heroName: "Tennesso Halógeno", heroDescription: "O último dos halogênios, uma faísca rara que brilha por milissegundos antes de se tornar lenda." },
  "Og": { heroName: "Oganésson Zenith", heroDescription: "O mestre supremo da tabela periódica, o ponto final da jornada elemental e guardião do topo da pirâmide." }
};

let content = fs.readFileSync('src/data/elements.ts', 'utf8');

for (const [symbol, info] of Object.entries(heroUpdates)) {
  const regex = new RegExp(`  "${symbol}": {[\\s\\S]*?"heroName": ".*?",[\\s\\S]*?"heroDescription": ".*?",`, 'g');
  const replacement = (match) => {
    return match
      .replace(/"heroName": ".*?",/, `"heroName": "${info.heroName}",`)
      .replace(/"heroDescription": ".*?",/, `"heroDescription": "${info.heroDescription}",`);
  };
  content = content.replace(regex, replacement);
}

fs.writeFileSync('src/data/elements.ts', content);
console.log('Nomes e descrições de heróis atualizados com sucesso!');

/* ============================================================================
   Conteúdo pedagógico expandido por tópico — desenvolvido para ser usado
   diretamente em sala de aula, tanto no Ensino Fundamental quanto no Médio,
   alinhado ao Planejamento (objetivo específico, sequência ativa em blocos
   curtos, atividade prática com materiais do cotidiano e avaliação
   diversificada — participação, resolução, apresentação oral, autoavaliação).
============================================================================ */

export type PraticaFundamental = {
  titulo: string;
  objetivo: string;
  materiais: string[];
  passos: string[];
  discussao: string[];
  seguranca?: string;
};

export type ExemploResolvido = {
  enunciado: string;
  resolucao: string[];
  resposta: string;
};

export type PedagogicalPack = {
  categoria: string;
  fundamental: {
    ideiaCentral: string;      // 1-2 frases muito simples
    analogia: string;          // ligar com o cotidiano
    vocabulario: { termo: string; explicacao: string }[];
    pratica: PraticaFundamental;
    perguntas: string[];       // perguntas de verificação (Fund. II)
  };
  medio: {
    aprofundamento: string;    // parágrafo com rigor conceitual
    conexoes: string[];        // pontes com Física / Biologia / cotidiano
    exemploResolvido: ExemploResolvido;
    questoesVestibular: string[];
    autoavaliacao: string[];   // 3 itens para o aluno marcar
  };
  bnccSugerida: string[];      // códigos BNCC de referência (Fund + Médio)
};

/* Mesma função de classificação usada em TopicoDetalhe (duplicada aqui para
   manter o módulo autossuficiente). */
export function classifyTopic(title: string): string {
  const t = title.toLowerCase();
  if (/(átomo|atomic|orbital|quântic|elétron|próton|nêutron|isótop|dalton|thomson|rutherford|bohr|modelo)/.test(t)) return "atomo";
  if (/(tabela periódic|periódic|família|grupo|período|eletronegativid|raio atômic|energia de ioniz)/.test(t)) return "periodica";
  if (/(ligaç|iônic|covalent|metálic|polaridade|geometria molecular|vsepr|hibridiz)/.test(t)) return "ligacoes";
  if (/(reaç|estequiometr|balanceam|mol\b|rendimento|reagente limitante)/.test(t)) return "reacoes";
  if (/(ácid|base|ph\b|poh|arrhenius|brønsted|lewis|neutraliz|indicador)/.test(t)) return "acidobase";
  if (/(termoquím|entalpi|hess|calor|termodinâm|entropi|energia livre|gibbs)/.test(t)) return "termo";
  if (/(cinétic|velocidade|catalisador|ordem de reação)/.test(t)) return "cinetica";
  if (/(equilíbr|kc\b|kp\b|le\s?chatelier|le châtelier)/.test(t)) return "equilibrio";
  if (/(soluç|concentração|molarid|diluiç|colig|osmose|ebulioscop|crioscop)/.test(t)) return "solucoes";
  if (/(oxidação|redução|redox|pilha|eletróli|nox|potencial)/.test(t)) return "eletro";
  if (/(orgânic|hidrocarbon|alcano|alceno|alcino|álcool|éster|aromát|isomeri|funç)/.test(t)) return "organica";
  if (/(nuclear|radioatividade|meia-vida|fissão|fusão)/.test(t)) return "nuclear";
  if (/(gás|gases|pv=nrt|boyle|charles|avogadro)/.test(t)) return "gases";
  if (/(matéria|substância|mistura|estado físico|mudança de estado|densid)/.test(t)) return "materia";
  if (/(cotidiano|cozinha|limpeza|alimento|nutriç|combust|ambient|poluição)/.test(t)) return "cotidiano";
  return "geral";
}

/* Mapa completo por categoria. Cada bloco foi escrito para ser
   pedagogicamente autoaplicável, sem depender de laboratório especializado. */
const PACKS: Record<string, Omit<PedagogicalPack, "categoria">> = {
  seduc_pedagogia: {
    fundamental: {
      ideiaCentral: "A educação no Ceará busca a equidade e o sucesso do aluno, focando em competências para a vida e cidadania crítica, integrando o saber científico ao cotidiano.",
      analogia: "Preparar-se para a SEDUC é como equilibrar uma reação química: precisamos dos reagentes certos (LDB, Didática, BNCC) para obter o produto final (um ensino de qualidade).",
      vocabulario: [
        { termo: "Transposição Didática", explicacao: "Transformar o saber científico (Química) em saber ensinável para o aluno." },
        { termo: "SPAECE", explicacao: "Sistema de Avaliação da Educação Básica do Ceará, referência em indicadores educacionais." },
        { termo: "Itinerários Formativos", explicacao: "Caminhos de aprofundamento que o aluno escolhe no Novo Ensino Médio." },
      ],
      pratica: {
        titulo: "Planejando a Aula de Química Perfeita",
        objetivo: "Aplicar os princípios da BNCC e Didática no planejamento de uma aula experimental.",
        materiais: ["Edital SEDUC 2026", "BNCC Ciências da Natureza", "Livro Didático de Química"],
        passos: [
          "Escolha um tópico de Química (ex: Ácidos e Bases).",
          "Identifique a competência da BNCC relacionada.",
          "Defina uma atividade prática contextualizada (ex: Indicador de pH com repolho roxo).",
          "Estabeleça critérios de avaliação formativa.",
        ],
        discussao: [
          "Como essa aula dialoga com o cotidiano do aluno cearense?",
          "Quais princípios da LDB foram respeitados?",
        ],
      },
      perguntas: [
        "Qual o papel do professor de Química na gestão democrática da escola?",
        "Como a interdisciplinaridade pode enriquecer o ensino de Ciências da Natureza?",
      ],
    },
    medio: {
      aprofundamento: "O concurso para professor da rede estadual (SEDUC CE) exige o domínio não apenas da Química, mas da sua aplicação pedagógica. A gestão pública cearense destaca-se pela transparência e pelo regime de colaboração. Didaticamente, espera-se que o docente domine o ciclo de planejamento-ação-reflexão, utilizando a experimentação e as tecnologias digitais como ferramentas de engajamento e construção de conceitos estruturantes da Química.",
      conexoes: [
        "História: A evolução do ensino de Química no Ceará e as reformas educacionais.",
        "Sociologia: O impacto da educação de tempo integral na comunidade escolar.",
      ],
      exemploResolvido: {
        enunciado: "Explique como o professor de Química pode trabalhar o tema 'Sustentabilidade' integrando a BNCC e a realidade local das energias renováveis no Ceará.",
        resolucao: [
          "Identificar a competência de análise de impactos ambientais na BNCC.",
          "Contextualizar com as usinas eólicas e solares do estado.",
          "Propor o estudo da eletroquímica e fotossíntese artificial.",
        ],
        resposta: "A integração ocorre através da contextualização dos princípios químicos com os arranjos produtivos locais, promovendo a literacia científica.",
      },
      questoesVestibular: [
        "Descreva os princípios da Administração Pública previstos na Constituição Federal.",
        "Analise a estrutura do Novo Ensino Médio e o papel da Química nos itinerários.",
      ],
      autoavaliacao: [
        "Compreendo a relação entre a LDB e a prática em sala de aula.",
        "Consigo planejar aulas de Química alinhadas aos descritores do SPAECE.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT307", "EF09CI01"],
  },

  atomo: {
    fundamental: {
      ideiaCentral: "Tudo o que existe é feito de peças minúsculas chamadas átomos. Cada átomo tem um centro (núcleo) com prótons e nêutrons, e uma nuvem de elétrons em volta.",
      analogia: "Imagine um estádio de futebol: se o núcleo fosse uma bola de gude no centro do campo, os elétrons seriam mosquinhas voando pelas arquibancadas. Quase tudo é espaço vazio!",
      vocabulario: [
        { termo: "Próton", explicacao: "Peça com carga positiva (+) que fica no núcleo." },
        { termo: "Nêutron", explicacao: "Peça sem carga (0) que também mora no núcleo." },
        { termo: "Elétron", explicacao: "Peça com carga negativa (−) que gira em volta do núcleo." },
        { termo: "Elemento", explicacao: "Cada tipo de átomo diferente (H, O, Fe...). É o 'sobrenome' do átomo." },
      ],
      pratica: {
        titulo: "Construindo um átomo com bolinhas de papel",
        objetivo: "Visualizar prótons, nêutrons e elétrons e entender a diferença entre núcleo e eletrosfera.",
        materiais: ["Papel colorido (3 cores)", "Cola ou fita", "Barbante", "Prato de papelão ou cartolina"],
        passos: [
          "Recorte bolinhas: vermelhas (prótons), azuis (nêutrons) e amarelas (elétrons).",
          "Escolha um elemento simples: Hidrogênio (1p, 0n, 1e), Hélio (2p, 2n, 2e) ou Lítio (3p, 4n, 3e).",
          "Cole os prótons e nêutrons no centro do prato — esse é o núcleo.",
          "Cole os elétrons em círculos de barbante em volta — essas são as camadas.",
          "Compare o seu modelo com o do colega e explique o que mudou.",
        ],
        discussao: [
          "O que o átomo tem em maior quantidade: matéria ou espaço vazio?",
          "Se eu tirar 1 próton, ainda é o mesmo elemento?",
          "Por que os elétrons não caem no núcleo?",
        ],
      },
      perguntas: [
        "O que existe no centro do átomo?",
        "Qual partícula não tem carga elétrica?",
        "Dois átomos com o mesmo número de prótons são do mesmo elemento?",
      ],
    },
    medio: {
      aprofundamento: "O átomo é descrito pela mecânica quântica: os elétrons não seguem órbitas fixas, mas ocupam orbitais (regiões de probabilidade dadas por ψ²). A distribuição eletrônica respeita o princípio de Aufbau, a exclusão de Pauli e a regra de Hund. Modelos históricos (Dalton → Thomson → Rutherford → Bohr → Schrödinger) mostram como a ciência se corrige diante de novos experimentos.",
      conexoes: [
        "Física: espectros de emissão do hidrogênio confirmam níveis quantizados (E = hν).",
        "Biologia: isótopos radioativos (C-14, I-131) são usados em datação e medicina nuclear.",
        "Tecnologia: semicondutores dependem da distribuição eletrônica dos átomos.",
      ],
      exemploResolvido: {
        enunciado: "Escreva a distribuição eletrônica do ⁵⁶Fe (Z = 26) e identifique os elétrons de valência.",
        resolucao: [
          "Fe possui Z = 26 → 26 elétrons.",
          "Aplicando Aufbau: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶.",
          "Os elétrons de valência são os do último nível principal (n = 4) → 4s².",
          "O bloco d (3d⁶) explica as propriedades de metal de transição (múltiplos estados de oxidação).",
        ],
        resposta: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶ — 2 elétrons de valência (4s²).",
      },
      questoesVestibular: [
        "(ENEM) A datação por C-14 pressupõe que dois isótopos do carbono têm o mesmo comportamento químico. Justifique.",
        "(FUVEST) Explique por que a energia da transição n=3 → n=2 do hidrogênio produz luz visível (linha vermelha da série de Balmer).",
        "(UNICAMP) Compare os modelos de Rutherford e Bohr apontando o experimento que motivou a evolução.",
      ],
      autoavaliacao: [
        "Sei diferenciar próton, nêutron e elétron e localizá-los no átomo.",
        "Consigo escrever a distribuição eletrônica de um elemento até Z = 36.",
        "Sei explicar por que dois isótopos têm química igual mas massas diferentes.",
      ],
    },
    bnccSugerida: ["EF09CI03", "EF09CI04", "EM13CNT301", "EM13CNT302"],
  },

  periodica: {
    fundamental: {
      ideiaCentral: "A Tabela Periódica é o 'mapa' de todos os elementos. Elementos parecidos ficam na mesma coluna (família) e por isso se comportam de forma parecida.",
      analogia: "Pense num prédio: cada andar é um período (nº de camadas do átomo) e cada apartamento na mesma coluna é uma família com 'personalidade' parecida.",
      vocabulario: [
        { termo: "Grupo (família)", explicacao: "Coluna da tabela — elementos com propriedades químicas semelhantes." },
        { termo: "Período", explicacao: "Linha da tabela — indica quantas camadas o átomo tem." },
        { termo: "Metal", explicacao: "Brilhoso, conduz calor e eletricidade (Fe, Cu, Al)." },
        { termo: "Não metal", explicacao: "Geralmente não conduz eletricidade (C, O, N, Cl)." },
        { termo: "Gás nobre", explicacao: "Praticamente não reage com nada (He, Ne, Ar)." },
      ],
      pratica: {
        titulo: "Caça ao elemento em casa",
        objetivo: "Reconhecer que os elementos da tabela estão em objetos do dia a dia.",
        materiais: ["Tabela Periódica impressa", "Objetos comuns: sal, panela, moeda, palha de aço, folha de alumínio, bateria, giz, canos de PVC"],
        passos: [
          "Cada aluno pega 3 objetos e tenta descobrir quais elementos os compõem.",
          "Registre no caderno: objeto → elemento(s) → grupo/período.",
          "Monte um mural coletivo com os objetos e as etiquetas dos elementos.",
        ],
        discussao: [
          "Quais elementos apareceram em mais objetos?",
          "Elementos da mesma família apareceram juntos?",
          "Algum objeto tem mistura de metais e não metais?",
        ],
      },
      perguntas: [
        "O que os elementos de uma mesma coluna têm em comum?",
        "Dê um exemplo de metal e um de não metal presentes na sua casa.",
        "Por que o hélio é usado em balões e não pega fogo?",
      ],
    },
    medio: {
      aprofundamento: "As propriedades periódicas — raio atômico, energia de ionização, afinidade eletrônica e eletronegatividade — variam segundo a configuração da camada de valência. Ao longo do período, a carga nuclear efetiva aumenta e o raio diminui; ao descer o grupo, novas camadas surgem e o raio cresce. A eletronegatividade (Pauling) atinge máximo em F (3,98) e é decisiva para prever polaridade e tipo de ligação.",
      conexoes: [
        "Indústria: escolha de metais para ligas (aço, latão) depende de propriedades periódicas.",
        "Meio ambiente: metais pesados (Pb, Hg, Cd) são tóxicos por bloquearem enzimas.",
        "Astronomia: 99% da matéria visível é H e He — os dois primeiros da tabela.",
      ],
      exemploResolvido: {
        enunciado: "Ordene em ordem crescente de raio atômico: Na, Mg, K, Rb.",
        resolucao: [
          "Na e Mg estão no 3º período. Como Mg tem 1 próton a mais e mesmo nº de camadas, tem raio menor. → Mg < Na.",
          "K está no 4º período (grupo 1); Rb no 5º (grupo 1). Descendo o grupo, o raio cresce. → K < Rb.",
          "Comparando Na (3º período, grupo 1) e K (4º período, grupo 1): K é maior.",
        ],
        resposta: "Mg < Na < K < Rb.",
      },
      questoesVestibular: [
        "(ENEM) Explique por que a 2ª energia de ionização do sódio é muito maior que a 1ª.",
        "(FUVEST) Ao formar íon estável, o Ca perde 2 elétrons. Justifique com base na configuração eletrônica.",
        "(UFRJ) Compare a reatividade de Li, Na e K com água e associe às tendências periódicas.",
      ],
      autoavaliacao: [
        "Localizo grupo e período a partir da distribuição eletrônica.",
        "Prevejo qual átomo tem maior raio ou maior energia de ionização.",
        "Uso eletronegatividade para prever o tipo de ligação entre dois elementos.",
      ],
    },
    bnccSugerida: ["EF09CI04", "EM13CNT301", "EM13CNT303"],
  },

  ligacoes: {
    fundamental: {
      ideiaCentral: "Os átomos se juntam trocando ou compartilhando elétrons. Essas 'uniões' são as ligações químicas — é por causa delas que existe água, sal, ar, metal e plástico.",
      analogia: "Ligação iônica é como emprestar um brinquedo (um dá, outro recebe). Ligação covalente é dividir o mesmo brinquedo (os dois usam juntos).",
      vocabulario: [
        { termo: "Ligação iônica", explicacao: "Um átomo doa elétron e o outro recebe — formam íons (+ e −)." },
        { termo: "Ligação covalente", explicacao: "Dois átomos compartilham elétrons." },
        { termo: "Ligação metálica", explicacao: "Elétrons livres no meio dos átomos — por isso metais conduzem eletricidade." },
      ],
      pratica: {
        titulo: "Sal x açúcar — quem conduz eletricidade?",
        objetivo: "Diferenciar substâncias iônicas de moleculares pela condutividade em água.",
        materiais: ["2 copos com água", "Sal de cozinha", "Açúcar", "1 pilha 9V", "2 fios", "1 LED"],
        passos: [
          "Monte o circuito: pilha → fio → copo → fio → LED → pilha (deixe as pontas soltas dentro do copo).",
          "Coloque as pontas no copo com água pura — o LED acende?",
          "Adicione uma colher de sal e observe.",
          "Repita com o segundo copo, dessa vez com açúcar. Compare.",
        ],
        discussao: [
          "Por que a solução de sal conduz e a de açúcar não?",
          "O sal é iônico ou molecular?",
          "O que acontece com o NaCl quando entra na água?",
        ],
      },
      perguntas: [
        "O que é um íon?",
        "Por que a água dissolve o sal facilmente?",
        "Por que fios elétricos são feitos de metal?",
      ],
    },
    medio: {
      aprofundamento: "A regra do octeto orienta (com exceções) a formação das ligações: iônica (ΔEN > 1,7), covalente polar (0,4–1,7) ou apolar (< 0,4). A teoria VSEPR prevê geometria a partir da repulsão entre pares eletrônicos, e a hibridização (sp, sp², sp³) explica ângulos e ligações múltiplas. Forças intermoleculares (dipolo-dipolo, ligação de hidrogênio e London) determinam ponto de ebulição, solubilidade e tensão superficial.",
      conexoes: [
        "Biologia: DNA é estabilizado por ligações de hidrogênio entre bases.",
        "Materiais: o teflon é praticamente inerte devido à forte ligação C–F.",
        "Farmácia: solubilidade de fármacos depende de polaridade e ligações intermoleculares.",
      ],
      exemploResolvido: {
        enunciado: "Determine geometria e polaridade do NH₃.",
        resolucao: [
          "N central: 5 elétrons de valência.",
          "Faz 3 ligações com H e mantém 1 par isolado → 4 pares (VSEPR).",
          "Geometria eletrônica: tetraédrica; geometria molecular: piramidal trigonal.",
          "Ligações N–H são polares (ΔEN ≈ 0,84) e a molécula é assimétrica.",
        ],
        resposta: "Piramidal trigonal, molécula polar.",
      },
      questoesVestibular: [
        "(FUVEST) Classifique como iônica, covalente polar ou apolar: KBr, HCl, O₂. Justifique com ΔEN.",
        "(UNICAMP) Explique por que a água tem PE = 100 °C e o H₂S tem PE = −60 °C.",
        "(ENEM) Por que o CO₂ é apolar, mesmo tendo ligações polares?",
      ],
      autoavaliacao: [
        "Diferencio ligação iônica, covalente e metálica em exemplos concretos.",
        "Uso a teoria VSEPR para prever geometria molecular.",
        "Relaciono forças intermoleculares com propriedades físicas.",
      ],
    },
    bnccSugerida: ["EF09CI03", "EM13CNT301", "EM13CNT303"],
  },

  reacoes: {
    fundamental: {
      ideiaCentral: "Reação química é quando substâncias se transformam em outras. Os átomos não somem — só mudam de lugar. Por isso a massa total antes e depois é a mesma.",
      analogia: "É como montar um LEGO: se você tem 20 peças e desmonta um carrinho para montar uma casa, continuam existindo 20 peças. Só mudou a organização.",
      vocabulario: [
        { termo: "Reagente", explicacao: "Substâncias que entram na reação (esquerda da flecha)." },
        { termo: "Produto", explicacao: "Substâncias que saem da reação (direita da flecha)." },
        { termo: "Balanceamento", explicacao: "Ajustar os números para que haja a mesma quantidade de átomos dos dois lados." },
      ],
      pratica: {
        titulo: "Vulcão de bicarbonato + vinagre",
        objetivo: "Observar uma reação química e reconhecer os produtos.",
        materiais: ["Bicarbonato de sódio (1 col. de sopa)", "Vinagre (100 mL)", "Corante alimentício (opcional)", "Garrafa PET pequena", "Bandeja"],
        passos: [
          "Coloque o bicarbonato dentro da garrafa e a garrafa na bandeja.",
          "Adicione o corante ao vinagre.",
          "Despeje o vinagre rapidamente e observe.",
          "Anote o que acontece: bolhas, som, temperatura, cheiro.",
        ],
        discussao: [
          "Que gás forma as bolhas? (CO₂)",
          "A massa aumentou ou diminuiu? Por quê?",
          "Como sabemos que houve reação, e não apenas mistura?",
        ],
        seguranca: "Faça em local ventilado. Não aproxime chama.",
      },
      perguntas: [
        "O que é conservação da massa?",
        "Dê um exemplo de reação química da sua cozinha.",
        "Por que precisamos balancear uma equação química?",
      ],
    },
    medio: {
      aprofundamento: "Toda reação obedece à conservação de massa (Lavoisier) e de carga. O mol (6,022×10²³) conecta o mundo microscópico ao macroscópico. Cálculos estequiométricos exigem equação balanceada, identificação do reagente limitante e correção por pureza e rendimento. Classificação: síntese, decomposição, deslocamento, dupla-troca, oxirredução.",
      conexoes: [
        "Meio ambiente: combustão incompleta produz CO (tóxico) em vez de CO₂.",
        "Alimentos: fermentação alcoólica converte glicose em etanol + CO₂.",
        "Indústria: síntese da amônia (Haber-Bosch) alimenta a produção mundial de fertilizantes.",
      ],
      exemploResolvido: {
        enunciado: "Calcule a massa de CO₂ produzida na queima completa de 88 g de propano (C₃H₈). Massas molares: C=12; H=1; O=16.",
        resolucao: [
          "Equação: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.",
          "M(C₃H₈) = 44 g/mol; M(CO₂) = 44 g/mol.",
          "n(C₃H₈) = 88/44 = 2 mol.",
          "Pela estequiometria: 2 mol C₃H₈ → 6 mol CO₂.",
          "m(CO₂) = 6 × 44 = 264 g.",
        ],
        resposta: "264 g de CO₂.",
      },
      questoesVestibular: [
        "(ENEM) Explique quimicamente por que a combustão em local fechado pode ser fatal.",
        "(FUVEST) Uma reação apresenta rendimento de 80%. Se a massa teórica é 50 g, qual a massa real?",
        "(UNICAMP) Identifique o reagente limitante quando 2 mol de H₂ reagem com 1 mol de O₂ para formar água.",
      ],
      autoavaliacao: [
        "Balanceio equações químicas simples e verifico a conservação de átomos.",
        "Calculo massa/mol/nº de partículas em uma reação.",
        "Identifico o reagente limitante e o rendimento.",
      ],
    },
    bnccSugerida: ["EF09CI02", "EF09CI03", "EM13CNT301", "EM13CNT303"],
  },

  acidobase: {
    fundamental: {
      ideiaCentral: "Ácidos costumam ter gosto azedo (limão, vinagre) e bases têm gosto amargo e são escorregadias (sabão). Quando se juntam, se neutralizam formando sal + água.",
      analogia: "É como misturar água quente e água fria: uma 'compensa' a outra e a mistura fica morna. Ácido + base = neutro.",
      vocabulario: [
        { termo: "Ácido", explicacao: "Substância que libera H⁺ na água (azedo)." },
        { termo: "Base", explicacao: "Substância que libera OH⁻ na água (amargo, escorregadia)." },
        { termo: "pH", explicacao: "Escala de 0 a 14: <7 ácido, =7 neutro, >7 básico." },
        { termo: "Indicador", explicacao: "Substância que muda de cor conforme o pH." },
      ],
      pratica: {
        titulo: "Indicador natural de repolho roxo",
        objetivo: "Classificar substâncias do cotidiano como ácidas, básicas ou neutras.",
        materiais: ["1/4 de repolho roxo", "Água quente", "Peneira", "Copos transparentes", "Amostras: vinagre, limão, água, sabão em pó, bicarbonato, leite, refrigerante"],
        passos: [
          "Ferva o repolho por 10 min, coe e reserve o líquido roxo (indicador).",
          "Distribua um pouco em cada copo e adicione uma amostra por vez.",
          "Anote a cor: vermelho/rosa = ácido; roxo = neutro; verde/amarelo = básico.",
          "Monte uma 'escala' com os copos do mais ácido ao mais básico.",
        ],
        discussao: [
          "Qual foi o mais ácido? E o mais básico?",
          "Como o refrigerante e o suco de limão se comparam?",
          "O que aconteceria se misturássemos o suco de limão com bicarbonato?",
        ],
      },
      perguntas: [
        "O que acontece quando misturamos um ácido com uma base?",
        "Cite três ácidos e três bases da sua casa.",
        "Por que antiácidos aliviam a azia?",
      ],
    },
    medio: {
      aprofundamento: "As definições evoluem: Arrhenius (H⁺ / OH⁻ em água), Brønsted-Lowry (doador / aceptor de próton) e Lewis (aceptor / doador de par eletrônico). A escala pH = −log[H⁺] permite quantificar, e a autoionização Kw = 10⁻¹⁴ garante pH + pOH = 14. Tampões (Henderson-Hasselbalch) explicam a estabilidade do sangue (pH 7,4 ± 0,05).",
      conexoes: [
        "Biologia: sistema tampão bicarbonato regula pH do sangue.",
        "Ambiente: chuva ácida (H₂SO₄, HNO₃) corrói monumentos e afeta ecossistemas.",
        "Cotidiano: pH da pele (~5,5) explica por que sabonetes muito básicos ressecam.",
      ],
      exemploResolvido: {
        enunciado: "Calcule o pH de uma solução 0,01 mol/L de HCl.",
        resolucao: [
          "HCl é ácido forte: dissocia 100%. → [H⁺] = 0,01 mol/L = 10⁻².",
          "pH = −log[H⁺] = −log(10⁻²) = 2.",
        ],
        resposta: "pH = 2 (fortemente ácido).",
      },
      questoesVestibular: [
        "(ENEM) Explique o papel do bicarbonato no combate à azia usando conceitos de neutralização.",
        "(FUVEST) Um tampão contém 0,1 mol/L de CH₃COOH e 0,1 mol/L de CH₃COONa (pKa = 4,76). Qual o pH?",
        "(UNICAMP) Compare a força de HCl e HF em solução aquosa e justifique.",
      ],
      autoavaliacao: [
        "Diferencio ácido/base pelas definições de Arrhenius e Brønsted-Lowry.",
        "Calculo pH e pOH de soluções de ácidos e bases fortes.",
        "Explico o funcionamento de um sistema tampão.",
      ],
    },
    bnccSugerida: ["EF09CI06", "EM13CNT301", "EM13CNT303"],
  },

  termo: {
    fundamental: {
      ideiaCentral: "Algumas reações esquentam o ambiente (soltam calor) e outras esfriam (absorvem calor). Isso é a termoquímica.",
      analogia: "Queimar madeira é como uma pessoa doando dinheiro (libera energia). Uma bolsa gelada instantânea é como um empréstimo — precisa receber energia para acontecer.",
      vocabulario: [
        { termo: "Exotérmica", explicacao: "Reação que libera calor (fica quente)." },
        { termo: "Endotérmica", explicacao: "Reação que absorve calor (fica fria)." },
        { termo: "Sistema", explicacao: "A parte que estamos estudando (o copo, a bolsa, o corpo)." },
      ],
      pratica: {
        titulo: "Bolsa gelada caseira",
        objetivo: "Sentir uma reação endotérmica com materiais do dia a dia.",
        materiais: ["Bicarbonato de sódio", "Ácido cítrico (ou suco de limão concentrado)", "Água", "Saco plástico com trava"],
        passos: [
          "Coloque 2 colheres de bicarbonato e 2 de ácido cítrico dentro do saco.",
          "Sem fechar totalmente, adicione um pouco de água.",
          "Feche rapidamente e apalpe o saco.",
          "Registre: o saco esquentou ou esfriou?",
        ],
        discussao: [
          "A reação foi exotérmica ou endotérmica?",
          "Onde a energia foi buscar/soltar?",
          "Que aplicação prática tem esse tipo de reação?",
        ],
        seguranca: "Deixe uma pequena abertura para o gás sair — não segure lacrado.",
      },
      perguntas: [
        "Dê um exemplo de reação exotérmica que acontece na sua casa.",
        "O que sua mão sente numa reação endotérmica?",
        "Fotossíntese é endo ou exotérmica?",
      ],
    },
    medio: {
      aprofundamento: "A 1ª Lei (ΔU = q + w) diz que energia se conserva. A entalpia H = U + pV é o calor a pressão constante. A espontaneidade combina ΔH, ΔS e T pela equação ΔG = ΔH − TΔS. A Lei de Hess trata a entalpia como função de estado — só interessa o inicial e o final.",
      conexoes: [
        "Biologia: metabolismo celular obedece à termodinâmica (ATP acopla reações).",
        "Engenharia: eficiência de motores é limitada pela 2ª Lei.",
        "Cotidiano: geladeira é um ciclo termodinâmico invertido.",
      ],
      exemploResolvido: {
        enunciado: "Uma reação tem ΔH = +50 kJ/mol e ΔS = +200 J/(K·mol). É espontânea a 25 °C? E a 500 °C?",
        resolucao: [
          "Converter ΔS: 200 J/K = 0,200 kJ/K.",
          "A 25 °C (298 K): ΔG = 50 − 298 × 0,200 = 50 − 59,6 = −9,6 kJ → espontânea.",
          "A 500 °C (773 K): ΔG = 50 − 773 × 0,200 = 50 − 154,6 = −104,6 kJ → ainda mais espontânea.",
        ],
        resposta: "Espontânea em ambas as temperaturas; favorecida em T maior por ΔS > 0.",
      },
      questoesVestibular: [
        "(ENEM) Interprete um gráfico de energia versus caminho de reação distinguindo endo e exotérmica.",
        "(FUVEST) Use entalpias de formação para calcular ΔH da combustão do metano.",
        "(UNICAMP) Explique por que a fusão do gelo é espontânea acima de 0 °C mas não abaixo.",
      ],
      autoavaliacao: [
        "Classifico reações como endo/exotérmicas a partir de ΔH.",
        "Calculo ΔH usando entalpias de formação ou a Lei de Hess.",
        "Aplico ΔG = ΔH − TΔS para prever espontaneidade.",
      ],
    },
    bnccSugerida: ["EM13CNT202", "EM13CNT301"],
  },

  cinetica: {
    fundamental: {
      ideiaCentral: "Algumas reações são rápidas (fogo) e outras lentas (ferrugem). A cinética estuda o que faz a reação ir mais rápido ou mais devagar.",
      analogia: "É como cozinhar: aumentar o fogo (temperatura), cortar em pedaços menores (superfície de contato) ou usar panela de pressão faz tudo ficar pronto mais rápido.",
      vocabulario: [
        { termo: "Velocidade", explicacao: "Quantidade de produto que se forma por unidade de tempo." },
        { termo: "Catalisador", explicacao: "Ajuda a reação a acontecer mais rápido sem se consumir." },
      ],
      pratica: {
        titulo: "Comprimido efervescente — o que acelera?",
        objetivo: "Descobrir experimentalmente os fatores que alteram a velocidade da reação.",
        materiais: ["3 comprimidos efervescentes", "3 copos com água (fria, morna, quente)", "Almofariz ou colher para triturar", "Cronômetro (celular)"],
        passos: [
          "Copo 1 (água fria) — jogue o comprimido inteiro. Meça o tempo até acabar de borbulhar.",
          "Copo 2 (água morna) — repita.",
          "Copo 3 (água quente) — triture o comprimido antes e jogue. Meça.",
          "Compare os três tempos.",
        ],
        discussao: [
          "Qual foi o mais rápido? Por quê?",
          "Como a temperatura influenciou?",
          "Como o tamanho do pedaço influenciou?",
        ],
      },
      perguntas: [
        "Por que a geladeira conserva os alimentos?",
        "Por que a panela de pressão cozinha mais rápido?",
        "O que faz um catalisador?",
      ],
    },
    medio: {
      aprofundamento: "A velocidade depende da frequência e da energia dos choques efetivos (teoria das colisões). Fatores: concentração, superfície de contato, temperatura (Arrhenius: k = A·e^(−Ea/RT)) e catalisadores (reduzem Ea). Lei de velocidade v = k·[A]ᵃ·[B]ᵇ deve ser determinada experimentalmente.",
      conexoes: [
        "Biologia: enzimas aceleram reações em até 10¹⁷ vezes.",
        "Ambiente: catalisadores em automóveis reduzem CO, NOx e HC.",
        "Indústria: escolha de catalisador define custo e viabilidade de processos.",
      ],
      exemploResolvido: {
        enunciado: "Uma reação tem k = 0,02 s⁻¹ a 25 °C e Ea = 50 kJ/mol. Estime k a 35 °C (R = 8,314 J/(mol·K)).",
        resolucao: [
          "Aplicar Arrhenius: ln(k₂/k₁) = −Ea/R · (1/T₂ − 1/T₁).",
          "1/T₁ = 1/298; 1/T₂ = 1/308 → 1/T₂ − 1/T₁ = −1,09×10⁻⁴ K⁻¹.",
          "ln(k₂/k₁) = −50000/8,314 × (−1,09×10⁻⁴) ≈ 0,655.",
          "k₂/k₁ = e^0,655 ≈ 1,93 → k₂ ≈ 0,039 s⁻¹.",
        ],
        resposta: "k dobra aproximadamente — regra prática 'a cada 10 °C, velocidade ≈ 2×'.",
      },
      questoesVestibular: [
        "(ENEM) Explique por que alimentos duram mais na geladeira usando teoria das colisões.",
        "(FUVEST) Dada a lei v = k[A][B]², qual a ordem global da reação?",
        "(UNICAMP) Como um catalisador altera o diagrama de energia da reação?",
      ],
      autoavaliacao: [
        "Cito 4 fatores que alteram a velocidade e explico o mecanismo.",
        "Determino a ordem de uma reação a partir de dados experimentais.",
        "Aplico Arrhenius para comparar velocidades em temperaturas diferentes.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT303"],
  },

  equilibrio: {
    fundamental: {
      ideiaCentral: "Nem toda reação vai até o fim. Muitas ficam num 'empate técnico': parte dos reagentes vira produto e parte volta. Isso é o equilíbrio químico.",
      analogia: "É como uma escada rolante em que gente sobe e gente desce ao mesmo tempo, na mesma velocidade — o número de pessoas em cada andar fica constante.",
      vocabulario: [
        { termo: "Equilíbrio", explicacao: "Momento em que a reação direta e a inversa têm a mesma velocidade." },
        { termo: "Deslocamento", explicacao: "Quando algo muda (temperatura, pressão, concentração), o equilíbrio 'se mexe'." },
      ],
      pratica: {
        titulo: "Refrigerante lacrado x aberto",
        objetivo: "Observar um equilíbrio químico do dia a dia (CO₂ dissolvido ⇌ CO₂ gasoso).",
        materiais: ["1 garrafa PET de refrigerante fechada", "1 copo", "Papel toalha"],
        passos: [
          "Observe a garrafa lacrada: as bolhas 'apareceram'?",
          "Abra devagar: escute o gás sair. O que aconteceu com o equilíbrio?",
          "Sirva um pouco no copo e observe as bolhas subindo.",
          "Deixe o copo aberto por 30 min e observe.",
        ],
        discussao: [
          "Por que a bebida 'perde o gás' quando fica aberta?",
          "Aquecer o refrigerante ajuda ou atrapalha a bebida ficar gaseificada?",
          "Isso tem relação com o oceano absorvendo CO₂?",
        ],
      },
      perguntas: [
        "O que caracteriza um sistema em equilíbrio?",
        "O que aconteceria se aumentássemos a pressão sobre um refrigerante?",
        "Todo equilíbrio é 50%–50%?",
      ],
    },
    medio: {
      aprofundamento: "Em um equilíbrio dinâmico, as velocidades direta e inversa se igualam e as concentrações ficam constantes. A constante de equilíbrio Kc (ou Kp) mede a extensão. O princípio de Le Chatelier prevê o deslocamento diante de mudanças em concentração, pressão/volume ou temperatura (o único fator que altera K).",
      conexoes: [
        "Biologia: hemoglobina + O₂ ⇌ oxi-hemoglobina depende de pO₂.",
        "Ambiente: acidificação dos oceanos por equilíbrio CO₂/H₂CO₃/HCO₃⁻.",
        "Indústria: Haber-Bosch ajusta P e T para deslocar o equilíbrio N₂ + 3H₂ ⇌ 2NH₃.",
      ],
      exemploResolvido: {
        enunciado: "Para N₂ + 3 H₂ ⇌ 2 NH₃, o que acontece com [NH₃] ao aumentar a pressão?",
        resolucao: [
          "Contagem de mols gasosos: 4 mol reagentes ↔ 2 mol produto.",
          "Aumento de P favorece o lado com MENOS mols gasosos.",
          "Portanto, o equilíbrio se desloca para os produtos → [NH₃] aumenta.",
        ],
        resposta: "[NH₃] aumenta.",
      },
      questoesVestibular: [
        "(ENEM) Explique por que os oceanos estão ficando mais ácidos com o aumento de CO₂ atmosférico.",
        "(FUVEST) Para 2 SO₂ + O₂ ⇌ 2 SO₃ (exotérmica), o que acontece ao aquecer?",
        "(UNICAMP) Calcule Kc a partir de concentrações no equilíbrio.",
      ],
      autoavaliacao: [
        "Diferencio equilíbrio de reação incompleta.",
        "Aplico Le Chatelier a mudanças de concentração, P/V e T.",
        "Escrevo e calculo Kc a partir de dados.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT303"],
  },

  solucoes: {
    fundamental: {
      ideiaCentral: "Solução é uma mistura em que uma coisa se dissolve na outra e some da vista — como açúcar no café. Concentração é o quanto tem de uma coisa na outra.",
      analogia: "Um suco fraco tem pouco pó em muita água (baixa concentração); um suco 'esperto' tem muito pó (alta concentração).",
      vocabulario: [
        { termo: "Soluto", explicacao: "O que é dissolvido (ex.: sal)." },
        { termo: "Solvente", explicacao: "Aquilo que dissolve (ex.: água)." },
        { termo: "Concentração", explicacao: "Relação entre a quantidade de soluto e o volume de solução." },
      ],
      pratica: {
        titulo: "Ovo que boia com sal",
        objetivo: "Perceber como a densidade da solução muda com a concentração.",
        materiais: ["1 ovo cru", "2 copos com água", "Sal de cozinha", "Colher"],
        passos: [
          "Copo 1: coloque o ovo — ele afunda.",
          "Copo 2: adicione sal, colher por colher, mexendo bem.",
          "Coloque o ovo no copo 2 e observe. A partir de quanto sal ele boia?",
          "Registre a observação.",
        ],
        discussao: [
          "Por que o ovo boia na água salgada?",
          "Por que é mais fácil boiar no mar do que numa piscina?",
          "Isso tem a ver com concentração?",
        ],
      },
      perguntas: [
        "O que é um soluto? E um solvente?",
        "Um copo com mais açúcar dissolvido é mais denso ou menos denso?",
        "Cite três soluções que você usa em casa.",
      ],
    },
    medio: {
      aprofundamento: "As soluções podem ser expressas por concentração comum (g/L), molar (mol/L), molal (mol/kg), fração molar e ppm. Propriedades coligativas (tonoscopia, ebulioscopia, crioscopia, osmose) dependem da quantidade de partículas dissolvidas, não da natureza. Eletrólitos exigem fator de van't Hoff (i).",
      conexoes: [
        "Medicina: soro fisiológico é isotônico (0,9% NaCl) para não lisar células.",
        "Cotidiano: sal na estrada (países frios) abaixa PF da água.",
        "Culinária: caldo doce ferve acima de 100 °C — ebulioscopia.",
      ],
      exemploResolvido: {
        enunciado: "Prepare 500 mL de HCl 0,1 mol/L a partir de HCl 6 mol/L. Que volume da solução concentrada usar?",
        resolucao: [
          "Fórmula da diluição: C₁·V₁ = C₂·V₂.",
          "6 · V₁ = 0,1 · 500.",
          "V₁ = 50/6 ≈ 8,33 mL.",
          "Procedimento: medir 8,33 mL de HCl 6 mol/L, adicionar em água (nunca água em ácido!) e completar até 500 mL.",
        ],
        resposta: "8,33 mL de HCl concentrado, completando até 500 mL.",
      },
      questoesVestibular: [
        "(ENEM) Explique por que o soro caseiro tem sal e açúcar em proporção específica.",
        "(FUVEST) Calcule a pressão osmótica de glicose 0,1 mol/L a 27 °C.",
        "(UNICAMP) Uma solução tem 20 g de NaOH em 500 mL. Calcule a concentração em mol/L.",
      ],
      autoavaliacao: [
        "Diferencio soluto, solvente e solução em exemplos.",
        "Calculo concentração comum e molar.",
        "Aplico C₁V₁ = C₂V₂ em problemas de diluição.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT303"],
  },

  eletro: {
    fundamental: {
      ideiaCentral: "Pilhas transformam reação química em energia elétrica. Já a eletrólise faz o contrário: usa eletricidade para provocar reações.",
      analogia: "Pilha é como um moinho: a 'água caindo' (reação) faz girar a roda (corrente). Eletrólise é como bombear a água de volta pro alto usando um motor.",
      vocabulario: [
        { termo: "Oxidação", explicacao: "Perder elétrons." },
        { termo: "Redução", explicacao: "Ganhar elétrons." },
        { termo: "Pilha", explicacao: "Dispositivo que gera corrente elétrica a partir de reação química." },
      ],
      pratica: {
        titulo: "Pilha de limão",
        objetivo: "Montar uma pilha simples e medir a diferença de potencial.",
        materiais: ["2 limões", "1 prego galvanizado (zinco)", "1 moeda de cobre ou fio de cobre", "Fios com garras", "LED pequeno ou multímetro"],
        passos: [
          "Enfie o prego e o cobre em cada limão, sem se tocarem.",
          "Conecte prego de um limão ao cobre do outro (em série).",
          "Ligue as pontas livres ao LED (respeitando polaridade) ou ao multímetro.",
          "Observe a tensão gerada (~0,9 V por limão).",
        ],
        discussao: [
          "Qual metal está sendo oxidado?",
          "Por que precisamos de 2 metais diferentes?",
          "Como aumentar a voltagem da pilha?",
        ],
      },
      perguntas: [
        "O que é oxidação? E redução?",
        "O que é uma pilha?",
        "Cite duas aplicações da eletrólise.",
      ],
    },
    medio: {
      aprofundamento: "Reações de oxirredução envolvem transferência de elétrons, rastreada pelo Nox. Pilhas galvânicas convertem energia química em elétrica (ΔG < 0) e a espontaneidade é dada por E°célula = E°cátodo − E°ânodo. A equação de Nernst corrige para concentrações fora do padrão. Faraday quantifica massa depositada em eletrólise: m = (M·i·t)/(n·F).",
      conexoes: [
        "Tecnologia: baterias de Li-íon movem celulares e carros elétricos.",
        "Indústria: produção de alumínio (Hall-Héroult) e cloro-soda.",
        "Corrosão: ânodos de sacrifício protegem cascos de navios.",
      ],
      exemploResolvido: {
        enunciado: "Calcule a massa de cobre depositada em 1 h com corrente de 2 A. M(Cu) = 63,5 g/mol; n = 2.",
        resolucao: [
          "Q = i · t = 2 · 3600 = 7200 C.",
          "m = (M·Q)/(n·F) = (63,5 · 7200)/(2 · 96485).",
          "m ≈ 2,37 g.",
        ],
        resposta: "≈ 2,37 g de Cu.",
      },
      questoesVestibular: [
        "(ENEM) Explique por que colheres de aço enferrujam mais rápido em contato com cobre.",
        "(FUVEST) Calcule E° da pilha Zn|Zn²⁺||Ag⁺|Ag.",
        "(UNICAMP) Que produtos se formam na eletrólise da salmoura?",
      ],
      autoavaliacao: [
        "Identifico ânodo/cátodo em pilha e eletrólise.",
        "Calculo E° e prevejo espontaneidade.",
        "Aplico Faraday para eletrodeposição.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT303"],
  },

  organica: {
    fundamental: {
      ideiaCentral: "A química orgânica estuda os compostos do carbono — que estão em quase tudo que é vivo e em muitos objetos: álcool, plástico, remédio, tecido, comida.",
      analogia: "O carbono é o 'LEGO da vida': tem 4 encaixes e monta cadeias enormes, permitindo milhões de moléculas diferentes.",
      vocabulario: [
        { termo: "Hidrocarboneto", explicacao: "Composto só de C e H (gasolina, gás de cozinha)." },
        { termo: "Álcool", explicacao: "Tem o grupo −OH (etanol, glicerina)." },
        { termo: "Ácido carboxílico", explicacao: "Tem o grupo −COOH (vinagre = ácido acético)." },
      ],
      pratica: {
        titulo: "Extração de óleos essenciais da casca de laranja",
        objetivo: "Perceber a presença de compostos orgânicos voláteis (limoneno) no cotidiano.",
        materiais: ["Casca de laranja", "Isopor pequeno", "Balão de aniversário"],
        passos: [
          "Encha o balão até o tamanho médio.",
          "Aperte a casca da laranja perto do balão, direcionando o óleo para a superfície.",
          "Observe o balão estourar em poucos segundos.",
          "Explique por que aconteceu.",
        ],
        discussao: [
          "Que substância da casca fez o balão estourar? (limoneno)",
          "Isso é reação química ou dissolução?",
          "Por que a borracha 'derrete' com o óleo?",
        ],
      },
      perguntas: [
        "Por que o carbono é tão importante para a vida?",
        "Dê um exemplo de álcool e um de ácido carboxílico da sua casa.",
        "Cite três objetos feitos de polímero.",
      ],
    },
    medio: {
      aprofundamento: "Compostos orgânicos são classificados por grupos funcionais (álcoois, aldeídos, cetonas, ácidos, ésteres, éteres, aminas, amidas). Nomenclatura IUPAC segue: cadeia principal + insaturações + funções + ramificações. Isomeria (constitucional e estereoisomeria — geométrica cis/trans e óptica R/S) explica propriedades diferentes em moléculas de mesma fórmula.",
      conexoes: [
        "Biologia: glicose, aminoácidos e lipídios são orgânicos.",
        "Farmácia: enantiômeros podem ter efeitos opostos (talidomida).",
        "Ambiente: plásticos demoram séculos para se degradar.",
      ],
      exemploResolvido: {
        enunciado: "Dê o nome IUPAC de CH₃–CH(CH₃)–CH₂–CH₃.",
        resolucao: [
          "Cadeia principal: 4 carbonos → but-.",
          "Ramificação: metil no carbono 2.",
          "Sufixo −ano (saturado).",
        ],
        resposta: "2-metilbutano.",
      },
      questoesVestibular: [
        "(ENEM) Compare etanol e gasolina como combustíveis (impacto ambiental e energia liberada).",
        "(FUVEST) Escreva a esterificação entre etanol e ácido acético.",
        "(UNICAMP) Cite um exemplo de isomeria óptica e sua importância biológica.",
      ],
      autoavaliacao: [
        "Reconheço grupos funcionais em uma estrutura.",
        "Aplico regras IUPAC em cadeias simples.",
        "Diferencio tipos de isomeria.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT303"],
  },

  nuclear: {
    fundamental: {
      ideiaCentral: "A química nuclear estuda o núcleo do átomo. É de lá que vem a energia de usinas, a radiação usada em medicina e a datação de fósseis.",
      analogia: "Se o átomo é uma cebola, o núcleo é o miolo. Mexer no miolo libera MUITO mais energia do que trocar elétrons.",
      vocabulario: [
        { termo: "Radioatividade", explicacao: "Emissão espontânea de partículas ou radiação pelo núcleo instável." },
        { termo: "Meia-vida", explicacao: "Tempo para metade dos átomos se desintegrar." },
      ],
      pratica: {
        titulo: "Simulação de meia-vida com moedas",
        objetivo: "Compreender o caráter probabilístico do decaimento radioativo.",
        materiais: ["100 moedas (ou tampinhas com 2 faces)", "Copo", "Folha para anotar"],
        passos: [
          "Coloque as 100 moedas no copo e chacoalhe.",
          "Despeje na mesa. Retire as que caíram com 'coroa' — elas 'decaíram'.",
          "Anote quantas sobraram.",
          "Repita até restarem poucas. Faça o gráfico de moedas x rodadas.",
        ],
        discussao: [
          "Depois de 1 rodada, sobrou aproximadamente metade?",
          "Por que o decaimento é probabilístico?",
          "Se a meia-vida do C-14 é 5730 anos, quanto sobra depois de 17.190 anos?",
        ],
      },
      perguntas: [
        "O que é meia-vida?",
        "Cite uma aplicação positiva da radioatividade.",
        "Qual a diferença entre fissão e fusão?",
      ],
    },
    medio: {
      aprofundamento: "Decaimentos α, β e γ e a lei N(t) = N₀·e^(−λt) descrevem estatisticamente a instabilidade nuclear. A energia liberada em fissão e fusão vem do defeito de massa (E = Δm·c²). Aplicações: geração de energia (U-235), medicina (I-131, Tc-99m), datação (C-14, U-Pb).",
      conexoes: [
        "Astrofísica: fusão H → He alimenta o Sol.",
        "Medicina: PET-Scan usa F-18.",
        "Arqueologia: C-14 datou o Sudário de Turim.",
      ],
      exemploResolvido: {
        enunciado: "Após 3 meias-vidas, que fração do isótopo original resta?",
        resolucao: [
          "Cada meia-vida reduz à metade.",
          "Após 3: (1/2)³ = 1/8 = 12,5%.",
        ],
        resposta: "1/8 (12,5%).",
      },
      questoesVestibular: [
        "(ENEM) Explique por que a datação por C-14 não funciona para amostras de mais de 60 mil anos.",
        "(FUVEST) Complete: ²³⁸U → α + ?",
        "(UNICAMP) Diferencie fissão e fusão nucleares quanto ao balanço energético.",
      ],
      autoavaliacao: [
        "Diferencio α, β e γ.",
        "Aplico o conceito de meia-vida em cálculos simples.",
        "Discuto usos e riscos da radioatividade.",
      ],
    },
    bnccSugerida: ["EM13CNT202", "EM13CNT301"],
  },

  gases: {
    fundamental: {
      ideiaCentral: "Gases se espalham, ocupam todo o recipiente e podem ser comprimidos. Balão, pneu e ar são todos gases obedecendo às mesmas leis.",
      analogia: "Moléculas de gás são como crianças correndo pelo pátio: quanto mais quente (mais empolgadas), mais colisões com as paredes — mais pressão.",
      vocabulario: [
        { termo: "Pressão", explicacao: "Força com que o gás empurra as paredes do recipiente." },
        { termo: "Volume", explicacao: "Espaço ocupado pelo gás." },
        { termo: "Temperatura absoluta (K)", explicacao: "Temperatura em Kelvin: K = °C + 273." },
      ],
      pratica: {
        titulo: "Balão que enche sozinho",
        objetivo: "Ver o efeito da temperatura no volume dos gases.",
        materiais: ["1 garrafa PET vazia", "1 balão", "Água quente e água gelada", "Bacia"],
        passos: [
          "Coloque o balão bem esticado na boca da garrafa.",
          "Mergulhe a garrafa na água quente e observe o balão inflar.",
          "Depois, coloque na água gelada e observe murchar.",
          "Registre as observações.",
        ],
        discussao: [
          "Por que o balão inflou sozinho?",
          "Qual lei está sendo demonstrada? (Charles)",
          "O que aconteceria se a garrafa fosse fechada?",
        ],
      },
      perguntas: [
        "Por que o pneu murcha no frio?",
        "O que é um gás ideal?",
        "Quantos litros ocupa 1 mol de gás nas CNTP?",
      ],
    },
    medio: {
      aprofundamento: "Gases ideais obedecem PV = nRT. Leis históricas — Boyle (T const), Charles (P const) e Avogadro (V ∝ n) — são casos particulares. Nas CNTP (0 °C, 1 atm), 1 mol = 22,4 L. Dalton descreve pressão parcial (Pᵢ = xᵢ·P_total). Gases reais desviam em alta P e baixa T (Van der Waals).",
      conexoes: [
        "Biologia: trocas gasosas nos pulmões obedecem à Lei de Dalton.",
        "Automobilismo: airbag infla com N₂ da decomposição de NaN₃.",
        "Mergulho: mistura hélio/O₂ evita narcose por N₂.",
      ],
      exemploResolvido: {
        enunciado: "Calcule o volume ocupado por 2 mol de gás a 27 °C e 2 atm. R = 0,082 atm·L/(mol·K).",
        resolucao: [
          "T = 27 + 273 = 300 K.",
          "PV = nRT → V = nRT/P = 2 · 0,082 · 300 / 2.",
          "V = 24,6 L.",
        ],
        resposta: "V ≈ 24,6 L.",
      },
      questoesVestibular: [
        "(ENEM) Explique por que uma lata fechada estoura ao ser aquecida.",
        "(FUVEST) Quantos mols há em 44,8 L de gás nas CNTP?",
        "(UNICAMP) Compare os desvios do gás real em alta e baixa pressão.",
      ],
      autoavaliacao: [
        "Uso PV = nRT em problemas.",
        "Diferencio Boyle, Charles e Avogadro.",
        "Aplico Dalton para misturas gasosas.",
      ],
    },
    bnccSugerida: ["EM13CNT301", "EM13CNT303"],
  },

  materia: {
    fundamental: {
      ideiaCentral: "Matéria é tudo que tem massa e ocupa lugar no espaço. Pode ser sólida, líquida ou gasosa, e vem em substâncias puras ou misturas.",
      analogia: "Substância pura é como um monte de laranjas iguais. Mistura é uma sacola com laranjas, maçãs e bananas.",
      vocabulario: [
        { termo: "Substância pura", explicacao: "Um único tipo de material (água pura, ouro puro)." },
        { termo: "Mistura", explicacao: "Dois ou mais materiais juntos (ar, suco, granito)." },
        { termo: "Mistura homogênea", explicacao: "Aparência única (café coado, ar)." },
        { termo: "Mistura heterogênea", explicacao: "Dá para ver as partes (granito, salada)." },
      ],
      pratica: {
        titulo: "Separando uma mistura de areia, sal e água",
        objetivo: "Aplicar métodos de separação com materiais simples.",
        materiais: ["Areia", "Sal", "Água", "2 copos", "Coador de papel", "Prato"],
        passos: [
          "Misture areia, sal e água em um copo. Mexa bem.",
          "Passe pelo coador — a areia fica; a solução salgada passa.",
          "Coloque a solução salgada no prato e deixe ao sol até evaporar.",
          "Observe o sal que sobrou.",
        ],
        discussao: [
          "Qual método separou a areia? (Filtração)",
          "Qual separou o sal da água? (Evaporação)",
          "Que outros métodos existem?",
        ],
      },
      perguntas: [
        "Cite duas propriedades gerais e duas específicas da matéria.",
        "Diferencie substância pura de mistura.",
        "Que método usaria para separar óleo e água?",
      ],
    },
    medio: {
      aprofundamento: "A matéria apresenta propriedades gerais (massa, volume, inércia) e específicas (densidade, PF, PE, solubilidade). Substâncias puras têm PF e PE definidos; misturas exibem faixas. Mudanças de estado ocorrem sem alterar composição, com absorção ou liberação de calor. Métodos de separação: filtração, decantação, destilação (simples/fracionada), cromatografia.",
      conexoes: [
        "Indústria: petróleo é separado por destilação fracionada.",
        "Análise forense: cromatografia identifica misturas complexas.",
        "Meio ambiente: tratamento de água usa decantação e filtração.",
      ],
      exemploResolvido: {
        enunciado: "Classifique: leite, ouro 18 k, água mineral e aço quanto ao tipo de matéria.",
        resolucao: [
          "Leite → mistura heterogênea (gotículas de gordura em água).",
          "Ouro 18 k → mistura homogênea (liga de Au com Cu ou Ag).",
          "Água mineral → mistura homogênea (sais dissolvidos).",
          "Aço → mistura homogênea (Fe + C).",
        ],
        resposta: "1 heterogênea (leite) e 3 homogêneas (ouro 18 k, água mineral, aço).",
      },
      questoesVestibular: [
        "(ENEM) Analise a curva de aquecimento e diga se a amostra é substância pura ou mistura.",
        "(FUVEST) Escolha o método adequado para separar sal + areia + água.",
        "(UNICAMP) Explique por que o granito é heterogêneo mesmo à distância parecendo uniforme.",
      ],
      autoavaliacao: [
        "Classifico materiais como puros ou misturas.",
        "Escolho o método de separação adequado.",
        "Interpreto curvas de aquecimento/resfriamento.",
      ],
    },
    bnccSugerida: ["EF06CI01", "EF06CI02", "EF07CI03", "EM13CNT301"],
  },

  cotidiano: {
    fundamental: {
      ideiaCentral: "A química está em tudo: na cozinha, no banho, na comida, no remédio. Conhecer ajuda a ser um consumidor consciente e a evitar acidentes.",
      analogia: "Uma cozinha é um mini-laboratório: fogão, panela, ingredientes e reações — tudo química.",
      vocabulario: [
        { termo: "Combustão", explicacao: "Reação com O₂ que libera calor e luz." },
        { termo: "Fermentação", explicacao: "Microrganismos transformam açúcar em outras substâncias." },
        { termo: "Saponificação", explicacao: "Gordura + soda cáustica → sabão + glicerina." },
      ],
      pratica: {
        titulo: "Investigando rótulos",
        objetivo: "Ler e interpretar composição de produtos do dia a dia.",
        materiais: ["3 rótulos: 1 alimento, 1 cosmético, 1 produto de limpeza"],
        passos: [
          "Liste os 5 principais ingredientes de cada rótulo.",
          "Marque os que você já ouviu falar.",
          "Pesquise 1 desconhecido de cada e descubra a função.",
          "Compartilhe com a turma.",
        ],
        discussao: [
          "Algum produto tem ingrediente com nome de outra reação vista em aula?",
          "Rótulo 'natural' significa mais seguro?",
          "Que informação obrigatória apareceu em todos?",
        ],
        seguranca: "Não misturar produtos de limpeza — água sanitária + amoníaco libera gás tóxico.",
      },
      perguntas: [
        "Por que não se deve misturar água sanitária e amoníaco?",
        "Explique quimicamente por que o pão cresce.",
        "Por que o vinagre limpa calcário?",
      ],
    },
    medio: {
      aprofundamento: "A química do cotidiano integra combustão (energia), ácido-base (limpeza, digestão), oxirredução (corrosão, pilhas), saponificação (sabões), fermentação (alimentos, biocombustíveis) e polimerização (plásticos). Compreender esses conceitos permite avaliar riscos, sustentabilidade e escolhas de consumo.",
      conexoes: [
        "Saúde: rotulagem nutricional obedece à ANVISA.",
        "Sustentabilidade: biocombustíveis vs. combustíveis fósseis.",
        "Ambiente: resíduos plásticos e microplásticos.",
      ],
      exemploResolvido: {
        enunciado: "Explique quimicamente por que o pão cresce com fermento biológico.",
        resolucao: [
          "Levedura consome glicose da massa.",
          "Fermentação: C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂.",
          "O CO₂ formado fica preso na rede de glúten, expandindo a massa.",
          "No forno, o calor evapora o etanol e finaliza a estrutura.",
        ],
        resposta: "A liberação de CO₂ pela fermentação da glicose faz a massa crescer.",
      },
      questoesVestibular: [
        "(ENEM) Compare o impacto ambiental do etanol e da gasolina.",
        "(FUVEST) Explique por que sabão limpa gordura.",
        "(UNICAMP) Discuta o efeito da adição de sal na conservação de alimentos.",
      ],
      autoavaliacao: [
        "Reconheço processos químicos em situações cotidianas.",
        "Interpreto rótulos e informações de segurança.",
        "Discuto impactos ambientais das escolhas de consumo.",
      ],
    },
    bnccSugerida: ["EF09CI06", "EM13CNT202", "EM13CNT301"],
  },

  geral: {
    fundamental: {
      ideiaCentral: "Este tópico faz parte da química, ciência que estuda a matéria, suas transformações e a energia envolvida.",
      analogia: "Pense em como o cozinheiro combina ingredientes: a química faz o mesmo com átomos e moléculas para explicar o mundo.",
      vocabulario: [
        { termo: "Matéria", explicacao: "Tudo o que tem massa e ocupa lugar no espaço." },
        { termo: "Energia", explicacao: "Capacidade de provocar transformações." },
      ],
      pratica: {
        titulo: "Observação dirigida no cotidiano",
        objetivo: "Identificar o tema estudado em situações reais.",
        materiais: ["Caderno", "Celular (opcional para fotos)"],
        passos: [
          "Escolha três situações do dia (cozinha, banho, transporte).",
          "Descreva o que está acontecendo em termos de matéria e energia.",
          "Fotografe ou desenhe uma delas.",
          "Compartilhe com a turma na próxima aula.",
        ],
        discussao: [
          "Qual situação mais te chamou atenção?",
          "Onde apareceu uma transformação química?",
          "O que gostaria de investigar a fundo?",
        ],
      },
      perguntas: [
        "Cite três situações do dia a dia que envolvem química.",
        "Diferencie transformação física de química com um exemplo.",
        "Por que estudar química é importante?",
      ],
    },
    medio: {
      aprofundamento: "A química fundamenta-se em teorias e evidências experimentais que descrevem a matéria em escala atômico-molecular, permitindo prever propriedades, projetar materiais e otimizar processos industriais, ambientais e biotecnológicos.",
      conexoes: [
        "Biologia: metabolismo é química.",
        "Física: energia e termodinâmica atravessam a química.",
        "Sustentabilidade: química verde busca menor impacto.",
      ],
      exemploResolvido: {
        enunciado: "Descreva um problema real que envolva conceitos deste tópico e proponha uma solução.",
        resolucao: [
          "Escolha um problema (ex.: reciclagem, poluição, alimentação).",
          "Identifique quais conceitos químicos estão envolvidos.",
          "Proponha uma intervenção viável em escala local.",
          "Discuta viabilidade e impacto.",
        ],
        resposta: "Resposta depende da escolha; o objetivo é articular teoria e prática.",
      },
      questoesVestibular: [
        "Explique como esse tópico se relaciona com pelo menos duas áreas do conhecimento.",
        "Cite duas aplicações contemporâneas.",
        "Proponha uma pergunta de pesquisa a partir do assunto.",
      ],
      autoavaliacao: [
        "Reconheço a relevância do tópico no cotidiano.",
        "Consigo explicar oralmente o conceito principal.",
        "Sei propor uma pergunta ou hipótese.",
      ],
    },
    bnccSugerida: ["EF09CI01", "EM13CNT301"],
  },
};

export function pedagogicalContent(title: string): PedagogicalPack {
  const cat = classifyTopic(title);
  const pack = PACKS[cat] || PACKS.geral;
  return { categoria: cat, ...pack };
}

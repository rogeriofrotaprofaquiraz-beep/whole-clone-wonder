import { Link, useParams, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft, BookOpen, Lightbulb, FlaskConical, Sparkles, GraduationCap,
  Atom, Library, Target, Sigma, AlertTriangle,
} from "lucide-react";

/* ============================================================================
   PÁGINA EXPLICATIVA DE UM TÓPICO
   Conteúdo estruturado com base nas obras de referência:
   • Brown, LeMay et al. — "Química: A Ciência Central"
   • Atkins, Jones & Laverman — "Princípios de Química"
   • Kotz & Treichel — "Química Geral e Reações Químicas"
   • Raymond Chang — "Química"
   • Ricardo Feltre — "Coleção Química"
   Cada categoria de tópico recebe: definição formal, conceitos-chave,
   fundamentos teóricos, equações/fórmulas quando relevantes, aplicações,
   erros comuns e exercícios sugeridos.
============================================================================ */

type Section = {
  simple: string;              // Ensino Fundamental — linguagem cotidiana
  formal: string;              // Ensino Médio/Superior — rigor conceitual
  key: string[];               // Conceitos-chave
  principles: string[];        // Princípios / leis / postulados
  formulas?: { expr: string; desc: string }[];
  examples: string[];          // Aplicações e cotidiano
  pitfalls: string[];          // Erros comuns
  exercises: string[];         // Exercícios / vestibular
  refs: string[];              // Capítulos / seções dos livros
};

const BOOKS = [
  { short: "Brown/LeMay", full: "Brown, T. L.; LeMay, H. E.; Bursten, B. E. et al. — Química: A Ciência Central. 13ª ed. Pearson." },
  { short: "Atkins", full: "Atkins, P.; Jones, L.; Laverman, L. — Princípios de Química: Questionando a Vida Moderna e o Meio Ambiente. 7ª ed. Bookman." },
  { short: "Kotz", full: "Kotz, J. C.; Treichel, P. M. — Química Geral e Reações Químicas. Cengage Learning." },
  { short: "Chang", full: "Chang, R.; Goldsby, K. — Química. 11ª ed. McGraw-Hill/AMGH." },
  { short: "Feltre", full: "Feltre, R. — Coleção Química (vol. 1, 2 e 3). Editora Moderna." },
];

function classify(title: string): string {
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

function buildContent(title: string): Section {
  const cat = classify(title);
  const T = title;

  const commonPitfalls = [
    "Confundir o conceito macroscópico (o que vemos) com o microscópico (partículas).",
    "Decorar fórmula sem entender o significado das grandezas envolvidas.",
    "Ignorar unidades de medida ao resolver cálculos.",
  ];

  const base: Section = {
    simple: `${T} é um assunto da química que descreve como a matéria se comporta. Vamos ver a ideia por trás, os termos importantes e onde isso aparece na vida real.`,
    formal: `${T} constitui um objeto de estudo da Química que integra fundamentos teóricos e evidências experimentais para descrever propriedades e transformações da matéria em escala atômico-molecular.`,
    key: [T, "Matéria", "Energia", "Propriedades", "Transformações"],
    principles: [
      "Conservação da massa (Lavoisier).",
      "Proporções definidas e múltiplas (Proust, Dalton).",
      "Relação entre estrutura microscópica e propriedades observáveis.",
    ],
    examples: [
      "Aparece em produtos que usamos em casa (alimentos, cosméticos, limpeza).",
      "É base para indústria química, farmacêutica e ambiental.",
      "É cobrado em vestibulares como ENEM, FUVEST, UNICAMP, ITA e IME.",
    ],
    pitfalls: commonPitfalls,
    exercises: [
      `Descreva com suas palavras o que é ${T}.`,
      `Cite um exemplo de ${T} no cotidiano e explique.`,
      `Relacione ${T} a um outro conceito visto no curso.`,
    ],
    refs: [`${BOOKS[0].short}, cap. introdutório`, `${BOOKS[3].short}, cap. 1`, `${BOOKS[4].short}, vol. 1`],
  };

  switch (cat) {
    case "atomo":
      return {
        simple: `O átomo é a menor parte de um elemento que ainda tem as propriedades dele. Ele tem um núcleo (com prótons e nêutrons) e elétrons ao redor. É como um sistema solar bem pequenininho: o núcleo é o Sol e os elétrons são planetas — mas quânticos.`,
        formal: `${T} está no domínio da teoria atômica moderna. O átomo é constituído por núcleo denso — contendo prótons (Z) e nêutrons (N) — e por elétrons distribuídos em orbitais descritos por funções de onda ψ(r) (equação de Schrödinger). Modelos históricos: Dalton (esfera indivisível), Thomson (pudim de passas), Rutherford (núcleo denso), Bohr (níveis quantizados), Schrödinger (orbital probabilístico).`,
        key: ["Próton (+)", "Nêutron (0)", "Elétron (−)", "Número atômico Z", "Número de massa A", "Isótopos", "Orbital", "Nível e subnível"],
        principles: [
          "Massa do átomo concentra-se no núcleo (~99,98%).",
          "Elétrons ocupam orbitais segundo Aufbau, Pauli e Hund.",
          "Isótopos: mesmo Z, diferente N.",
          "Estados quantizados de energia (Bohr → Schrödinger).",
        ],
        formulas: [
          { expr: "A = Z + N", desc: "Número de massa é a soma de prótons e nêutrons." },
          { expr: "E = h·ν", desc: "Energia de um fóton (Planck) — base da quantização." },
          { expr: "ΔE = −13,6·(1/n² − 1/m²) eV", desc: "Transições eletrônicas no átomo de hidrogênio (Bohr)." },
        ],
        examples: [
          "Carbono-12 e Carbono-14 são isótopos usados em datação arqueológica.",
          "Neônio emite luz vermelha quando elétrons voltam ao estado fundamental (letreiros).",
          "Ressonância magnética explora o spin nuclear dos átomos de hidrogênio.",
        ],
        pitfalls: [
          "Achar que elétron descreve órbita circular fixa — é distribuição de probabilidade.",
          "Confundir número atômico (Z) com número de massa (A).",
          "Escrever configuração eletrônica sem respeitar Hund/Pauli.",
        ],
        exercises: [
          "Escreva a configuração eletrônica do ⁵⁶Fe e identifique elétrons de valência.",
          "Explique por que ¹²C e ¹⁴C têm propriedades químicas idênticas.",
          "Calcule a energia da transição n=3 → n=2 no hidrogênio.",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 2 (Átomos, moléculas e íons) e cap. 6 (Estrutura eletrônica)`,
          `${BOOKS[1].short}, Fundamentos B (Átomos)`,
          `${BOOKS[2].short}, cap. 2 e 6`,
          `${BOOKS[3].short}, cap. 2 e 7`,
          `${BOOKS[4].short}, vol. 1 — Estrutura atômica`,
        ],
      };
    case "periodica":
      return {
        simple: `A Tabela Periódica organiza todos os elementos conhecidos. Cada quadradinho é um elemento com seu símbolo, número e massa. Elementos na mesma coluna se parecem no comportamento.`,
        formal: `${T}: os elementos são ordenados por número atômico crescente (Lei Periódica de Moseley), agrupados em 18 grupos (famílias) e 7 períodos, refletindo periodicidade das propriedades — raio atômico, energia de ionização, afinidade eletrônica e eletronegatividade — decorrente da configuração eletrônica de valência.`,
        key: ["Grupo (família)", "Período", "Metais / não metais / semimetais", "Raio atômico", "Energia de ionização", "Afinidade eletrônica", "Eletronegatividade", "Camada de valência"],
        principles: [
          "Raio atômico ↓ ao longo do período e ↑ no grupo.",
          "Energia de ionização ↑ ao longo do período e ↓ no grupo.",
          "Eletronegatividade máxima em F (3,98 — Pauling).",
          "Metais tendem a perder elétrons; não metais tendem a ganhar.",
        ],
        formulas: [
          { expr: "EI = E(X⁺) − E(X)", desc: "Energia mínima para arrancar um elétron do átomo gasoso." },
        ],
        examples: [
          "Sódio (Na) reage violentamente com água — típico metal alcalino.",
          "Gases nobres (He, Ne, Ar) quase não reagem — camada completa.",
          "Halogênios (F, Cl, Br, I) formam sais com metais alcalinos.",
        ],
        pitfalls: [
          "Achar que hidrogênio é metal alcalino — apenas ocupa o grupo 1 por conveniência.",
          "Ignorar a diferença entre metais de transição e representativos.",
        ],
        exercises: [
          "Ordene por raio atômico crescente: Na, Mg, K, Rb.",
          "Explique por que a 2ª energia de ionização do Na é muito maior que a 1ª.",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 7 (Propriedades periódicas)`,
          `${BOOKS[1].short}, cap. 1.15–1.20`,
          `${BOOKS[3].short}, cap. 8`,
          `${BOOKS[4].short}, vol. 1 — Classificação periódica`,
        ],
      };
    case "ligacoes":
      return {
        simple: `Átomos se juntam para formar tudo o que existe. Eles fazem "ligações" trocando ou compartilhando elétrons. Assim aparece a água, o sal, o ferro, o plástico...`,
        formal: `${T}: as ligações químicas resultam da tendência dos átomos em atingir configuração de menor energia (frequentemente octeto). Classificam-se em iônica (transferência de elétrons, alta ΔEN), covalente (compartilhamento, baixa ΔEN) e metálica (mar de elétrons). Geometria molecular pela teoria VSEPR; hibridização (sp, sp², sp³) explica ângulos e ligações múltiplas.`,
        key: ["Ligação iônica", "Ligação covalente", "Ligação metálica", "Polaridade", "VSEPR", "Hibridização", "Forças intermoleculares"],
        principles: [
          "Regra do octeto (com exceções: H, Be, B, expansão em 3º período).",
          "ΔEN > 1,7 → tendência iônica; 0,4–1,7 → covalente polar; < 0,4 → apolar.",
          "Geometria minimiza repulsão entre pares eletrônicos (VSEPR).",
          "Forças intermoleculares: dipolo-dipolo, ligação de hidrogênio, London.",
        ],
        formulas: [
          { expr: "ΔEN = |ENₐ − ENᵦ|", desc: "Diferença de eletronegatividade define o caráter da ligação." },
        ],
        examples: [
          "NaCl (sal) — ligação iônica, cristal cúbico, dissolve em água.",
          "H₂O — covalente polar, geometria angular, ligações de hidrogênio.",
          "Cu, Fe, Al — ligação metálica, conduzem eletricidade e calor.",
          "CH₄ — covalente apolar, geometria tetraédrica (sp³).",
        ],
        pitfalls: [
          "Assumir octeto rígido para todos os átomos.",
          "Confundir polaridade da ligação com polaridade da molécula (CO₂ é apolar!).",
        ],
        exercises: [
          "Determine a geometria e polaridade de NH₃, CO₂, H₂O e BF₃.",
          "Classifique como iônica, covalente polar ou apolar: KBr, HCl, O₂.",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 8 e 9 (Ligações e geometria molecular)`,
          `${BOOKS[1].short}, cap. 2 e 3`,
          `${BOOKS[3].short}, cap. 9 e 10`,
          `${BOOKS[4].short}, vol. 1 — Ligações químicas`,
        ],
      };
    case "reacoes":
      return {
        simple: `Reação química é quando substâncias se transformam em outras. É como uma receita: os "ingredientes" (reagentes) viram "prato pronto" (produtos). A massa total não se perde.`,
        formal: `${T}: transformações químicas envolvem rearranjo de átomos entre reagentes e produtos, conservando massa (Lavoisier) e carga. Estequiometria relaciona quantidades pelos coeficientes da equação balanceada, sendo o mol (6,022×10²³ entidades) a unidade central. Classificam-se em síntese, decomposição, deslocamento, dupla-troca e óxido-redução.`,
        key: ["Reagente / Produto", "Coeficiente estequiométrico", "Mol", "Massa molar", "Reagente limitante", "Rendimento", "Pureza"],
        principles: [
          "Lei da conservação da massa (Lavoisier).",
          "Lei das proporções definidas (Proust).",
          "1 mol = 6,022×10²³ entidades (Avogadro).",
          "Balancear átomo a átomo antes de calcular.",
        ],
        formulas: [
          { expr: "n = m / M", desc: "Mols = massa / massa molar." },
          { expr: "N = n · Nₐ", desc: "Número de partículas." },
          { expr: "η = (m_real / m_teórica) · 100%", desc: "Rendimento percentual." },
        ],
        examples: [
          "Combustão: CH₄ + 2 O₂ → CO₂ + 2 H₂O (queima de gás de cozinha).",
          "Neutralização: HCl + NaOH → NaCl + H₂O (antiácido).",
          "Síntese da amônia (Haber-Bosch): N₂ + 3 H₂ ⇌ 2 NH₃ — fertilizantes.",
        ],
        pitfalls: [
          "Balancear alterando índices (fórmulas) em vez de coeficientes.",
          "Esquecer de identificar o reagente limitante antes do cálculo.",
          "Confundir massa molar (g/mol) com massa atômica (u).",
        ],
        exercises: [
          "Balanceie: C₃H₈ + O₂ → CO₂ + H₂O.",
          "Calcule a massa de CO₂ formada na queima de 88 g de propano com O₂ em excesso.",
          "Se o rendimento é 80%, quanto de produto se obtém?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 3 e 4 (Estequiometria)`,
          `${BOOKS[1].short}, cap. L e M`,
          `${BOOKS[2].short}, cap. 3 e 4`,
          `${BOOKS[3].short}, cap. 3 e 4`,
          `${BOOKS[4].short}, vol. 1 — Cálculos estequiométricos`,
        ],
      };
    case "acidobase":
      return {
        simple: `Ácido tem gosto azedo (limão, vinagre). Base tem gosto amargo e é escorregadia (sabão). Quando se juntam, se neutralizam e formam sal + água.`,
        formal: `${T}: definições sucessivas — Arrhenius (H⁺ / OH⁻ em água), Brønsted-Lowry (doador/aceptor de próton) e Lewis (aceptor/doador de par eletrônico). Força medida por Ka e Kb; escala logarítmica pH = −log[H⁺] descreve acidez em solução aquosa. Equilíbrio ácido-base fundamenta tampões e titulações.`,
        key: ["H⁺ (hidrônio)", "OH⁻ (hidróxido)", "Ka / Kb", "pH / pOH", "Neutralização", "Tampão", "Indicador"],
        principles: [
          "pH + pOH = 14 (a 25 °C).",
          "Ácido forte: dissocia completamente (HCl, HNO₃, H₂SO₄).",
          "Base forte: NaOH, KOH, Ca(OH)₂.",
          "Neutralização: H⁺ + OH⁻ → H₂O; libera calor (exotérmica).",
        ],
        formulas: [
          { expr: "pH = −log[H⁺]", desc: "Escala de acidez." },
          { expr: "Kw = [H⁺][OH⁻] = 1,0×10⁻¹⁴", desc: "Autoionização da água." },
          { expr: "pH = pKa + log([A⁻]/[HA])", desc: "Equação de Henderson-Hasselbalch (tampões)." },
        ],
        examples: [
          "Suco gástrico: pH ≈ 1,5 (HCl).",
          "Sangue: pH ≈ 7,4 (tampão bicarbonato).",
          "Chuva ácida: SO₂ + H₂O → H₂SO₃ / SO₃ + H₂O → H₂SO₄.",
        ],
        pitfalls: [
          "Achar que pH 0 é o mais ácido possível — pode ser negativo.",
          "Confundir concentração com força (HF concentrado é fraco; HCl diluído é forte).",
        ],
        exercises: [
          "Calcule o pH de solução 0,01 mol/L de HCl.",
          "Um tampão contém 0,1 mol/L de CH₃COOH e 0,1 mol/L de CH₃COONa. Qual o pH? (pKa = 4,76)",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 16 (Equilíbrio ácido-base)`,
          `${BOOKS[1].short}, cap. 11 e 12`,
          `${BOOKS[3].short}, cap. 15 e 16`,
          `${BOOKS[4].short}, vol. 2 — Ácidos, bases e sais`,
        ],
      };
    case "termo":
      return {
        simple: `Termoquímica estuda o calor das reações. Algumas soltam calor (queimar madeira — exotérmica), outras absorvem (bolsa gelada instantânea — endotérmica).`,
        formal: `${T}: 1ª Lei da Termodinâmica (ΔU = q + w) aplicada a reações químicas. Entalpia H = U + pV descreve o calor a pressão constante. Espontaneidade combina entalpia (ΔH), entropia (ΔS) e energia livre de Gibbs (ΔG = ΔH − TΔS). Lei de Hess permite somar equações termoquímicas.`,
        key: ["Sistema / vizinhança", "Entalpia (H)", "Entropia (S)", "Energia livre (G)", "Exotérmico / Endotérmico", "Lei de Hess", "Entalpia de formação"],
        principles: [
          "ΔH < 0 → exotérmico; ΔH > 0 → endotérmico.",
          "ΔS > 0 → aumento de desordem.",
          "ΔG < 0 → processo espontâneo.",
          "Lei de Hess: ΔH é função de estado.",
        ],
        formulas: [
          { expr: "ΔH°rxn = Σ n·ΔH°f(prod) − Σ n·ΔH°f(reag)", desc: "Entalpia padrão de reação." },
          { expr: "ΔG = ΔH − T·ΔS", desc: "Espontaneidade." },
          { expr: "q = m·c·ΔT", desc: "Calor sensível (calorimetria)." },
        ],
        examples: [
          "Combustão do etanol: −1367 kJ/mol (motores flex).",
          "Fotossíntese: endotérmica, absorve energia solar (+2803 kJ/mol de glicose).",
          "Compressa fria: NH₄NO₃ + H₂O (endotérmico) esfria a mão.",
        ],
        pitfalls: [
          "Trocar sinal de ΔH ao inverter a equação.",
          "Não multiplicar ΔH pelo coeficiente quando amplia a equação.",
          "Confundir calor (q) com temperatura (T).",
        ],
        exercises: [
          "Usando entalpias de formação, calcule ΔH da combustão do metano.",
          "Uma reação com ΔH = +50 kJ e ΔS = +200 J/K é espontânea a 25 °C? E a 500 °C?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 5 e 19 (Termodinâmica química)`,
          `${BOOKS[1].short}, cap. 6, 7 e 8`,
          `${BOOKS[3].short}, cap. 6 e 18`,
          `${BOOKS[4].short}, vol. 2 — Termoquímica`,
        ],
      };
    case "cinetica":
      return {
        simple: `Cinética é a velocidade das reações. Por que a comida estraga mais rápido no calor? Por que a ferrugem é lenta? A cinética responde.`,
        formal: `${T}: velocidade média v = ΔC/Δt; lei de velocidade v = k[A]^a[B]^b determinada experimentalmente. Constante k depende da temperatura via Arrhenius. Catalisadores diminuem energia de ativação (Ea) sem alterar o equilíbrio.`,
        key: ["Velocidade de reação", "Ordem", "Molecularidade", "Ea (energia de ativação)", "Catalisador", "Mecanismo"],
        principles: [
          "Aumenta com concentração, temperatura, superfície de contato e catalisador.",
          "Regra empírica: cada +10 °C dobra a velocidade.",
          "Catalisador não desloca equilíbrio, apenas acelera ambos os sentidos.",
        ],
        formulas: [
          { expr: "v = k·[A]^a·[B]^b", desc: "Lei de velocidade." },
          { expr: "k = A·e^(−Ea/RT)", desc: "Equação de Arrhenius." },
          { expr: "t₁/₂ = ln 2 / k (1ª ordem)", desc: "Meia-vida em reação de 1ª ordem." },
        ],
        examples: [
          "Enzimas digerem alimentos em segundos (catálise biológica).",
          "Catalisador do escapamento: converte NOₓ e CO em N₂ e CO₂.",
          "Geladeira retarda deterioração ao reduzir T e, portanto, k.",
        ],
        pitfalls: [
          "Confundir ordem com coeficiente estequiométrico.",
          "Achar que catalisador altera Kc — não altera.",
        ],
        exercises: [
          "Se k dobra ao aumentar 10 °C, quantas vezes aumenta em 30 °C?",
          "Reação de 1ª ordem com k = 0,05 s⁻¹: calcule t₁/₂.",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 14 (Cinética química)`,
          `${BOOKS[1].short}, cap. 13`,
          `${BOOKS[3].short}, cap. 13`,
          `${BOOKS[4].short}, vol. 2 — Cinética`,
        ],
      };
    case "equilibrio":
      return {
        simple: `Algumas reações não terminam — vão e voltam ao mesmo tempo. Isso é o equilíbrio químico. Se mexermos em algo (temperatura, pressão), o sistema reage para se ajustar.`,
        formal: `${T}: equilíbrio dinâmico caracterizado por v_direta = v_inversa e concentrações constantes. Expressão da constante Kc (ou Kp) mede a extensão. Princípio de Le Châtelier: perturbação em C, P ou T desloca o equilíbrio para minimizar a mudança.`,
        key: ["Kc / Kp", "Quociente Q", "Le Châtelier", "Deslocamento", "Equilíbrio homogêneo/heterogêneo"],
        principles: [
          "Q < K: reação avança; Q > K: retrocede; Q = K: equilíbrio.",
          "Aumento de reagente → desloca para produto.",
          "Aumento de T favorece o sentido endotérmico.",
          "Catalisador não altera K.",
        ],
        formulas: [
          { expr: "Kc = [C]^c·[D]^d / ([A]^a·[B]^b)", desc: "Constante de equilíbrio (concentração)." },
          { expr: "Kp = Kc·(RT)^Δn", desc: "Relação Kp–Kc para gases." },
        ],
        examples: [
          "N₂ + 3 H₂ ⇌ 2 NH₃ (processo Haber): alta pressão favorece amônia.",
          "CO₂ dissolvido em refrigerante ⇌ CO₂ gasoso (abrir a lata desloca).",
          "Hemoglobina + O₂ ⇌ HbO₂ (transporte de oxigênio no sangue).",
        ],
        pitfalls: [
          "Achar que equilíbrio significa quantidades iguais.",
          "Incluir sólidos/líquidos puros na expressão de K.",
        ],
        exercises: [
          "Escreva Kc para 2 SO₂ + O₂ ⇌ 2 SO₃.",
          "Se pressão total dobra, o que ocorre com N₂O₄ ⇌ 2 NO₂?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 15`,
          `${BOOKS[1].short}, cap. 10`,
          `${BOOKS[3].short}, cap. 14`,
          `${BOOKS[4].short}, vol. 2 — Equilíbrio químico`,
        ],
      };
    case "solucoes":
      return {
        simple: `Solução é a mistura homogênea de um soluto (o que se dissolve) em um solvente (o que dissolve). Água com açúcar, ar, aço — tudo é solução.`,
        formal: `${T}: sistemas homogêneos multicomponentes. Concentração expressa em mol/L (molaridade), g/L, %m/m, ppm. Propriedades coligativas dependem do número de partículas: tonoscopia, ebulioscopia, crioscopia, osmose.`,
        key: ["Soluto / solvente", "Molaridade (M)", "Diluição", "Solubilidade", "Propriedades coligativas"],
        principles: [
          "Igualdade fundamental: C₁·V₁ = C₂·V₂ (diluição).",
          "Solubilidade varia com T (geralmente ↑) e P (Henry, para gases).",
          "Propriedades coligativas ∝ nº de partículas dissolvidas.",
        ],
        formulas: [
          { expr: "M = n / V(L)", desc: "Molaridade." },
          { expr: "π = M·R·T", desc: "Pressão osmótica (van't Hoff)." },
          { expr: "ΔTe = Ke·W·i", desc: "Ebulioscopia (W = molalidade, i = fator de van't Hoff)." },
        ],
        examples: [
          "Soro fisiológico: NaCl 0,9% isotônico ao sangue.",
          "Anticongelante (etilenoglicol) abaixa o ponto de congelamento do radiador.",
          "Dessalinização por osmose reversa.",
        ],
        pitfalls: [
          "Trocar molaridade por molalidade nas propriedades coligativas.",
          "Esquecer o fator i em eletrólitos.",
        ],
        exercises: [
          "Preparar 500 mL de HCl 0,1 mol/L a partir de HCl 6 mol/L.",
          "Qual a pressão osmótica de glicose 0,1 mol/L a 27 °C?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 13`,
          `${BOOKS[1].short}, cap. 9`,
          `${BOOKS[3].short}, cap. 12`,
          `${BOOKS[4].short}, vol. 2 — Soluções`,
        ],
      };
    case "eletro":
      return {
        simple: `Eletroquímica junta química com eletricidade. Pilhas geram corrente com reações; a eletrólise faz o contrário: usa energia elétrica para separar substâncias.`,
        formal: `${T}: reações de oxirredução (transferência de elétrons). Nº de oxidação (Nox) rastreia elétrons. Pilhas galvânicas convertem energia química em elétrica (ΔG < 0); células eletrolíticas fazem o inverso. Potencial padrão E° prevê espontaneidade: ΔG° = −nFE°.`,
        key: ["Oxidação / redução", "Nox", "Ânodo / cátodo", "FEM (E°)", "Ponte salina", "Faraday"],
        principles: [
          "Ânodo: oxidação; Cátodo: redução (regra em pilha e eletrólise).",
          "E°célula = E°cátodo − E°ânodo.",
          "Se E°célula > 0, reação espontânea.",
          "Lei de Faraday: m = (Q·M) / (n·F).",
        ],
        formulas: [
          { expr: "ΔG° = −n·F·E°", desc: "Trabalho elétrico máximo." },
          { expr: "E = E° − (RT/nF)·ln Q", desc: "Equação de Nernst." },
          { expr: "m = (M·i·t)/(n·96485)", desc: "Lei de Faraday para eletrólise." },
        ],
        examples: [
          "Pilha de Daniell (Zn/Cu²⁺): E° ≈ +1,10 V.",
          "Bateria de íon-lítio de celular e carro elétrico.",
          "Galvanoplastia: cromagem de peças automotivas.",
          "Produção de alumínio (Hall-Héroult) e cloro-soda (eletrólise).",
        ],
        pitfalls: [
          "Trocar polos de ânodo/cátodo entre pilha e eletrólise (invertem sinal).",
          "Esquecer conversão de tempo para segundos ao aplicar Faraday.",
        ],
        exercises: [
          "Calcule E° de uma pilha Zn|Zn²⁺||Ag⁺|Ag.",
          "Quanta massa de cobre se deposita em 1 h com 2 A?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 20`,
          `${BOOKS[1].short}, cap. 12`,
          `${BOOKS[3].short}, cap. 19`,
          `${BOOKS[4].short}, vol. 2 — Eletroquímica`,
        ],
      };
    case "organica":
      return {
        simple: `Química orgânica é a química do carbono. Álcool, gasolina, plástico, remédio, DNA — tudo tem carbono como estrutura principal.`,
        formal: `${T}: química dos compostos de carbono, caracterizada por cadeias e ciclos com ligações C–C e C–H, além de heteroátomos (O, N, S, halogênios). Funções principais: hidrocarbonetos, álcoois, aldeídos, cetonas, ácidos carboxílicos, ésteres, éteres, aminas, amidas. Isomeria (constitucional e estereoisomeria — geométrica e óptica). Reações típicas: substituição, adição, eliminação, condensação, esterificação.`,
        key: ["Carbono tetravalente", "Cadeia (aberta/fechada, saturada/insaturada)", "Grupo funcional", "Isomeria", "Nomenclatura IUPAC", "Hibridização (sp, sp², sp³)"],
        principles: [
          "C forma 4 ligações covalentes; cadeias longas explicam a diversidade.",
          "Grupos funcionais determinam propriedades (–OH álcool, –COOH ácido, etc.).",
          "Isômeros: mesma fórmula molecular, estruturas/propriedades diferentes.",
        ],
        examples: [
          "Etanol (C₂H₅OH): combustível e antisséptico.",
          "Ácido acético (CH₃COOH): vinagre.",
          "Glicose (C₆H₁₂O₆): fonte de energia celular.",
          "Polietileno: (–CH₂–CH₂–)ₙ, sacolas plásticas.",
        ],
        pitfalls: [
          "Errar nomenclatura por não escolher a cadeia principal correta.",
          "Confundir isômeros geométricos (cis/trans) com ópticos (R/S).",
        ],
        exercises: [
          "Dê a IUPAC de CH₃–CH(CH₃)–CH₂–CH₃.",
          "Classifique álcool, cetona ou ácido: CH₃–CO–CH₃; CH₃–CH₂–OH; HCOOH.",
          "Escreva a esterificação entre etanol e ácido acético.",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 24 e 25`,
          `${BOOKS[1].short}, cap. 18–20`,
          `${BOOKS[3].short}, cap. 24 e 25`,
          `${BOOKS[4].short}, vol. 3 — Química orgânica completa`,
        ],
      };
    case "nuclear":
      return {
        simple: `Química nuclear estuda o núcleo do átomo. Aí acontecem coisas poderosas: energia nuclear, radiação, datação de fósseis, medicina.`,
        formal: `${T}: transformações que alteram o núcleo — decaimento α, β, γ; fissão e fusão. Meia-vida (t₁/₂) é característica de cada isótopo. E = mc² relaciona defeito de massa com energia liberada.`,
        key: ["Radioatividade", "α, β, γ", "Meia-vida", "Fissão", "Fusão", "Defeito de massa"],
        principles: [
          "Decaimento é probabilístico e independe da temperatura.",
          "Meia-vida é constante para cada isótopo.",
          "Fissão do U-235 alimenta reatores; fusão H → He alimenta o Sol.",
        ],
        formulas: [
          { expr: "N(t) = N₀·e^(−λt)", desc: "Decaimento radioativo." },
          { expr: "t₁/₂ = ln 2 / λ", desc: "Meia-vida." },
          { expr: "E = Δm·c²", desc: "Energia de ligação nuclear." },
        ],
        examples: [
          "C-14: datação de fósseis (t₁/₂ ≈ 5730 anos).",
          "I-131: tratamento de tireoide.",
          "U-235: reator nuclear e bomba atômica.",
        ],
        pitfalls: [
          "Confundir radiação (α, β, γ) com raios X (natureza eletromagnética distinta).",
          "Achar que fusão e fissão são a mesma coisa.",
        ],
        exercises: [
          "Após 3 meias-vidas, que fração do isótopo original resta?",
          "Complete a equação nuclear: ²³⁸U → α + ?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 21`,
          `${BOOKS[3].short}, cap. 23`,
          `${BOOKS[4].short}, vol. 2 — Radioatividade`,
        ],
      };
    case "gases":
      return {
        simple: `Gases se espalham, ocupam todo o recipiente e podem ser comprimidos. Balão, pneu, ar da respiração — todos seguem leis parecidas.`,
        formal: `${T}: gases ideais obedecem à equação de estado PV = nRT. Leis históricas: Boyle (T const): P₁V₁ = P₂V₂; Charles (P const): V/T = const; Avogadro (P, T const): V ∝ n. Gases reais desviam-se em alta P e baixa T (equação de Van der Waals).`,
        key: ["Pressão (atm, Pa)", "Volume (L, m³)", "Temperatura absoluta (K)", "Mol", "R = 0,0821 atm·L/mol·K"],
        principles: [
          "Sempre usar T em Kelvin (K = °C + 273,15).",
          "Nas CNTP (0 °C, 1 atm), 1 mol ocupa 22,4 L.",
          "Pressão parcial: Pᵢ = xᵢ·P_total (Dalton).",
        ],
        formulas: [
          { expr: "PV = nRT", desc: "Equação dos gases ideais." },
          { expr: "P₁V₁/T₁ = P₂V₂/T₂", desc: "Lei combinada." },
          { expr: "v_rms = √(3RT/M)", desc: "Velocidade quadrática média (teoria cinética)." },
        ],
        examples: [
          "Airbag: NaN₃ decompõe em N₂ que infla em milissegundos.",
          "Pneu esquenta e a pressão sobe no verão.",
          "Mergulhador respira mistura Hélio/O₂ em grandes profundidades.",
        ],
        pitfalls: [
          "Esquecer converter °C em K.",
          "Usar R com unidades incompatíveis com P e V.",
        ],
        exercises: [
          "Quantos mols há em 44,8 L de gás nas CNTP?",
          "Calcule V de 2 mol a 27 °C e 2 atm.",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 10`,
          `${BOOKS[1].short}, cap. 4`,
          `${BOOKS[3].short}, cap. 5`,
          `${BOOKS[4].short}, vol. 2 — Estudo dos gases`,
        ],
      };
    case "materia":
      return {
        simple: `Matéria é tudo que tem massa e ocupa lugar no espaço. Pode ser sólida, líquida, gasosa (ou plasma). Substância pura tem uma coisa só; mistura tem várias.`,
        formal: `${T}: propriedades gerais (massa, volume, inércia) e específicas (densidade, ponto de fusão/ebulição, solubilidade). Classifica-se em substâncias puras (simples ou compostas) e misturas (homogêneas ou heterogêneas). Mudanças de estado envolvem energia sem alterar composição.`,
        key: ["Substância pura x mistura", "Estados físicos", "Propriedades intensivas/extensivas", "Densidade", "Separação de misturas"],
        principles: [
          "Fusão, vaporização, sublimação: absorvem calor.",
          "Solidificação, condensação, ressublimação: liberam calor.",
          "Substância pura tem PF e PE definidos.",
        ],
        formulas: [
          { expr: "d = m / V", desc: "Densidade." },
        ],
        examples: [
          "Água pura: PF = 0 °C, PE = 100 °C ao nível do mar.",
          "Ar: mistura homogênea (N₂, O₂, Ar, CO₂).",
          "Granito: mistura heterogênea (quartzo, feldspato, mica).",
          "Separação: destilação (petróleo), filtração (água), decantação (óleo/água).",
        ],
        pitfalls: [
          "Chamar mistura homogênea de substância pura.",
          "Confundir propriedade intensiva (densidade) com extensiva (massa).",
        ],
        exercises: [
          "Classifique: leite, ouro 18k, água mineral, aço.",
          "Que método separa areia + sal + água?",
        ],
        refs: [
          `${BOOKS[0].short}, cap. 1`,
          `${BOOKS[3].short}, cap. 1`,
          `${BOOKS[4].short}, vol. 1 — Introdução à química`,
        ],
      };
    case "cotidiano":
      return {
        simple: `Química aparece o tempo todo: no fogão, no chuveiro, no remédio, na comida. Entender ajuda a viver melhor e com mais segurança.`,
        formal: `${T}: aplicação integrada de fundamentos químicos em contextos domésticos, ambientais, alimentares, energéticos e de saúde. Base: reações de combustão, ácido-base, oxirredução, saponificação, fermentação e polimerização.`,
        key: ["Combustão", "Saponificação", "Fermentação", "Emulsão", "Conservantes", "Aditivos"],
        principles: [
          "Cozinhar promove reações (Maillard, hidrólise, desnaturação).",
          "Sabões emulsificam gordura (parte polar + parte apolar).",
          "Fermentação: microrganismos convertem açúcar em etanol/CO₂.",
        ],
        examples: [
          "Bicarbonato + vinagre libera CO₂ (bolo cresce).",
          "Sabão + gordura: interação anfifílica.",
          "Iogurte: lactose → ácido lático por bactérias.",
          "Filtro solar contém compostos que absorvem UV.",
        ],
        pitfalls: [
          "Misturar produtos de limpeza (água sanitária + amônia gera gases tóxicos!).",
          "Achar que \"natural\" é sinônimo de \"seguro\".",
        ],
        exercises: [
          "Explique quimicamente por que o pão cresce com fermento.",
          "Por que o vinagre remove crostas de calcário?",
        ],
        refs: [
          `${BOOKS[0].short}, boxes \"Química na vida\"`,
          `${BOOKS[1].short}, cap. contexto ambiental`,
          `${BOOKS[4].short}, todas os volumes — seções aplicadas`,
        ],
      };
    default:
      return base;
  }
}

const levelBadge = (title: string) => {
  const t = title.toLowerCase();
  if (/(quântic|orbital|termodinâm|nernst|hess|gibbs|hibridiz|equilíbr)/.test(t)) return "Ensino Médio / Superior";
  if (/(átomo|elemento|molécula|reação|mistura|substância)/.test(t)) return "Fundamental → Médio";
  return "Ensino Fundamental e Médio";
};

/* ============================================================================
   DICIONÁRIO — explicações curtas de conceitos-chave (chave normalizada).
============================================================================ */
const KEY_GLOSSARY: Record<string, string> = {
  "proton": "Partícula subatômica de carga positiva no núcleo. Define o número atômico (Z) do elemento.",
  "neutron": "Partícula subatômica sem carga, também no núcleo. Contribui para a massa e a estabilidade nuclear.",
  "eletron": "Partícula de carga negativa que ocupa orbitais ao redor do núcleo; responsável pelas ligações químicas.",
  "numero atomico z": "Quantidade de prótons no núcleo — identifica o elemento químico.",
  "numero de massa a": "Soma de prótons e nêutrons; expressa a massa do átomo em unidades de massa atômica (u).",
  "isotopos": "Átomos do mesmo elemento (mesmo Z) que diferem no número de nêutrons e, portanto, na massa.",
  "orbital": "Região do espaço com alta probabilidade (~90%) de encontrar o elétron; forma dada pela função de onda ψ.",
  "nivel e subnivel": "Nível = camada (K, L, M...); subnível = subgrupo s, p, d, f, cada um com energia própria.",
  "grupo familia": "Coluna vertical da Tabela Periódica; elementos do mesmo grupo têm propriedades químicas semelhantes.",
  "periodo": "Linha horizontal da Tabela Periódica; indica o número de camadas eletrônicas.",
  "metais nao metais semimetais": "Metais perdem elétrons; não metais os ganham; semimetais (Si, Ge) são intermediários — base da eletrônica.",
  "raio atomico": "Distância do núcleo à camada mais externa; diminui no período e aumenta no grupo.",
  "energia de ionizacao": "Energia mínima para arrancar um elétron do átomo gasoso; cresce da esquerda para a direita.",
  "afinidade eletronica": "Energia liberada quando um átomo neutro captura um elétron.",
  "eletronegatividade": "Tendência do átomo em atrair elétrons numa ligação (escala de Pauling; F = 3,98).",
  "camada de valencia": "Camada eletrônica mais externa — envolvida diretamente nas ligações químicas.",
  "ligacao ionica": "Transferência de elétrons entre metal e não metal; forma íons e cristais (ex.: NaCl).",
  "ligacao covalente": "Compartilhamento de pares de elétrons entre não metais; forma moléculas (ex.: H₂O).",
  "ligacao metalica": "Mar de elétrons livres entre cátions metálicos; explica condutividade e maleabilidade.",
  "polaridade": "Distribuição desigual de carga em uma ligação/molécula; determina solubilidade e interações.",
  "vsepr": "Teoria da Repulsão dos Pares Eletrônicos da camada de Valência — prevê a geometria molecular.",
  "hibridizacao": "Mistura de orbitais atômicos (sp, sp², sp³) que explica ângulos e ligações múltiplas.",
  "forcas intermoleculares": "Atrações entre moléculas (dipolo-dipolo, ligação de H, London) — definem ponto de ebulição.",
  "reagente produto": "Reagentes: consumidos (esquerda). Produtos: formados (direita da equação).",
  "coeficiente estequiometrico": "Número inteiro que balanceia a equação e indica a proporção em mols.",
  "mol": "Quantidade de matéria: 1 mol = 6,022×10²³ entidades (constante de Avogadro).",
  "massa molar": "Massa de 1 mol da substância, em g/mol — soma das massas atômicas.",
  "reagente limitante": "Reagente que se esgota primeiro e limita a quantidade máxima de produto.",
  "rendimento": "Razão percentual entre massa obtida experimentalmente e massa teórica esperada.",
  "pureza": "Fração de substância pura em uma amostra que contém impurezas.",
  "h hidronio": "Íon H₃O⁺ formado quando o ácido cede próton em água — responsável pela acidez.",
  "oh hidroxido": "Íon OH⁻ liberado por bases; responsável pelo caráter básico e neutraliza H⁺.",
  "ka kb": "Constantes de dissociação de ácidos (Ka) e bases (Kb); quanto maior, mais forte.",
  "ph poh": "Escalas logarítmicas: pH = −log[H⁺], pH + pOH = 14 (a 25 °C).",
  "neutralizacao": "Reação entre ácido e base formando sal e água, geralmente exotérmica.",
  "tampao": "Solução que resiste a variações de pH ao receber ácido ou base (ex.: sangue).",
  "indicador": "Substância que muda de cor em faixa específica de pH (ex.: fenolftaleína, tornassol).",
  "sistema vizinhanca": "Sistema = porção estudada; vizinhança = tudo que troca energia/matéria com ele.",
  "entalpia h": "Calor trocado a pressão constante; ΔH < 0 exotérmica, ΔH > 0 endotérmica.",
  "entropia s": "Grau de desordem do sistema; cresce em processos espontâneos isolados.",
  "energia livre g": "ΔG = ΔH − TΔS; ΔG < 0 → processo espontâneo.",
  "exotermico endotermico": "Exo: libera calor (queima). Endo: absorve calor (fotossíntese, bolsa gelada).",
  "lei de hess": "ΔH total é soma dos ΔH das etapas — a entalpia é função de estado.",
  "entalpia de formacao": "ΔH°f — energia envolvida na formação de 1 mol da substância a partir dos elementos no estado padrão.",
  "materia": "Tudo que tem massa e ocupa lugar no espaço.",
  "energia": "Capacidade de realizar trabalho ou provocar transformações — térmica, elétrica, química etc.",
  "propriedades": "Características que identificam a substância: densidade, ponto de fusão, cor, condutividade.",
  "transformacoes": "Processos que alteram a matéria (físicos ou químicos) modificando estado ou composição.",
};

function normalizeKey(k: string) {
  return k
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[()+\-−·×⁺⁻⁰¹²³⁴⁵⁶⁷⁸⁹]/g, "")
    .replace(/[/,]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function explainKey(term: string): string {
  const norm = normalizeKey(term);
  if (KEY_GLOSSARY[norm]) return KEY_GLOSSARY[norm];
  const short = normalizeKey(term.replace(/\(.*?\)/g, ""));
  if (KEY_GLOSSARY[short]) return KEY_GLOSSARY[short];
  const parts = term.split(/[()]/)[0].trim();
  return `Conceito fundamental relacionado a ${parts.toLowerCase()} — essencial para compreender o comportamento da matéria neste tópico.`;
}
function highlightPrinciple(text: string): { head: string; rest: string } {
  const m = text.match(/^([^.:—-]+?)([.:—-]\s+)(.+)$/);
  if (m) return { head: m[1].trim(), rest: m[3].trim() };
  return { head: text, rest: "" };
}

/* Explicações longas dos princípios por palavras-chave. */
const PRINCIPLE_PATTERNS: { re: RegExp; explain: string }[] = [
  { re: /lavoisier|conservação da massa/i, explain: "Em um sistema fechado, a massa total dos reagentes é igual à massa total dos produtos. Átomos não são criados nem destruídos — apenas rearranjados. Base para todo cálculo estequiométrico." },
  { re: /proust|proporções definidas/i, explain: "Uma substância pura sempre apresenta os mesmos elementos combinados na mesma proporção em massa (ex.: H₂O = 11,2% H e 88,8% O). Fundamenta a fórmula química." },
  { re: /dalton|proporções múltiplas/i, explain: "Quando dois elementos formam mais de um composto, as massas de um deles que se combinam com massa fixa do outro estão em razão de números inteiros pequenos (ex.: CO e CO₂)." },
  { re: /avogadro|6,022/i, explain: "1 mol contém 6,022×10²³ entidades (átomos, moléculas, íons). Permite converter contagem microscópica em massa mensurável no laboratório." },
  { re: /hess/i, explain: "Como a entalpia é função de estado, o ΔH de uma reação global é igual à soma dos ΔH das etapas — mesmo que o caminho real seja diferente. Permite calcular calores impossíveis de medir diretamente." },
  { re: /octeto/i, explain: "Átomos tendem a ganhar, perder ou compartilhar elétrons até atingir 8 na camada de valência (2 para H e He), configuração estável dos gases nobres. Exceções: H, Be, B e elementos do 3º período em diante." },
  { re: /aufbau|pauli|hund/i, explain: "Elétrons preenchem orbitais do menor para o maior nível de energia (Aufbau), no máximo dois por orbital com spins opostos (Pauli), e ocupam orbitais degenerados um a um antes de emparelhar (Hund)." },
  { re: /raio atômico/i, explain: "Diminui da esquerda para a direita no período (mais prótons puxam a mesma camada) e aumenta de cima para baixo no grupo (novas camadas afastam a valência)." },
  { re: /energia de ionização|ionizacao/i, explain: "Cresce ao longo do período — mais carga nuclear efetiva prende os elétrons — e decresce no grupo, pois elétrons mais distantes saem com menos energia." },
  { re: /eletronegatividade|pauling/i, explain: "Mede a força com que um átomo atrai elétrons em uma ligação. Flúor (3,98) é o mais eletronegativo. A diferença de eletronegatividade (ΔEN) define o caráter da ligação." },
  { re: /vsepr|geometria/i, explain: "Pares eletrônicos ao redor do átomo central se repelem e assumem a geometria que minimiza essa repulsão — linear, angular, trigonal, tetraédrica etc. Determina polaridade e reatividade." },
  { re: /forças intermolecul|dipolo|hidrogênio|london/i, explain: "Atrações entre moléculas (mais fracas que ligações químicas) determinam ponto de ebulição, solubilidade e viscosidade: ligação de H > dipolo-dipolo > forças de London." },
  { re: /ph \+ poh|pH.*14/i, explain: "A 25 °C, a autoionização da água mantém [H⁺]·[OH⁻] = 10⁻¹⁴, então pH e pOH sempre somam 14. Meio ácido: pH < 7; neutro: pH = 7; básico: pH > 7." },
  { re: /ácido forte|dissocia completamente/i, explain: "Ácidos fortes (HCl, HNO₃, H₂SO₄) ionizam praticamente 100% em água, liberando todo o H⁺. Ácidos fracos (HF, CH₃COOH) ionizam parcialmente e estabelecem equilíbrio." },
  { re: /base forte/i, explain: "Hidróxidos de metais alcalinos e alcalino-terrosos (NaOH, KOH, Ca(OH)₂) dissociam-se totalmente em água liberando OH⁻ — daí a alta condutividade e o pH próximo a 14." },
  { re: /neutralização.*calor|exotérmica/i, explain: "Toda neutralização entre ácido e base fortes libera ~57 kJ/mol (calor de neutralização) — energia da formação da ligação O–H na água." },
  { re: /exotérmico|endotérmico|ΔH ?< ?0|ΔH ?> ?0/i, explain: "Exotérmica libera calor para o ambiente (queima, respiração). Endotérmica absorve calor (fotossíntese, dissolução de nitrato de amônio). O sinal do ΔH indica o sentido do fluxo." },
  { re: /entropia|ΔS/i, explain: "A entropia mede o número de configurações microscópicas possíveis. Aumenta na fusão, vaporização, mistura de gases e em reações que geram mais mols gasosos." },
  { re: /ΔG|gibbs|espontân/i, explain: "ΔG = ΔH − T·ΔS combina calor e desordem: se ΔG < 0 o processo é espontâneo; ΔG = 0 indica equilíbrio; ΔG > 0 exige energia externa." },
  { re: /le chatelier|le châtelier/i, explain: "Perturbar um sistema em equilíbrio (concentração, pressão, temperatura) desloca a reação no sentido que atenua a perturbação. Base da otimização industrial (ex.: Haber-Bosch)." },
  { re: /catalisador/i, explain: "O catalisador oferece um caminho alternativo com menor energia de ativação, acelerando a reação nos dois sentidos sem ser consumido nem alterar o equilíbrio." },
  { re: /nernst|potencial/i, explain: "A equação de Nernst corrige o potencial padrão de uma pilha para condições não-padrão (concentração e temperatura): E = E° − (RT/nF)·ln Q." },
  { re: /oxidação|redução|nox/i, explain: "Oxidação = perda de elétrons (aumento do NOX); redução = ganho de elétrons (diminuição do NOX). Ocorrem sempre juntas — quem oxida um, reduz o outro." },
  { re: /pv ?= ?nrt|gás ideal|boyle|charles/i, explain: "Nos gases ideais, pressão, volume, temperatura e mols se relacionam por PV = nRT. Boyle (T const.): P·V = k; Charles (P const.): V/T = k." },
  { re: /meia-vida|radioatividade/i, explain: "Meia-vida (t½) é o tempo para metade dos núcleos radioativos decaírem. Constante para cada isótopo — permite datação (¹⁴C, U-Pb) e dose médica." },
  { re: /função de estado/i, explain: "Grandezas como H, U, S e G dependem apenas do estado inicial e final do sistema, não do caminho percorrido. Isso é o que permite tabelar e somar valores." },
];

function explainPrinciple(text: string): string {
  for (const p of PRINCIPLE_PATTERNS) {
    if (p.re.test(text)) return p.explain;
  }
  return "Princípio essencial: relaciona causa e efeito das transformações químicas descritas neste tópico. Compreender esta regra evita erros conceituais e agiliza a resolução de exercícios.";
}

/* Mapa PT → consulta de imagem em inglês (loremflickr entende termos em inglês).
   Detecta palavras/expressões-chave em cada exemplo e devolve uma query focada. */
const EXAMPLE_IMAGE_MAP: { keys: RegExp; query: string }[] = [
  // cotidiano / limpeza / cozinha
  { keys: /produtos.*(casa|limpeza|cosm)/i, query: "cleaning,products,shelf" },
  { keys: /alimento|comida|cozinha|receita|pão|bolo/i, query: "food,cooking,kitchen" },
  { keys: /cosm[eé]tic|shampoo|creme|maquiagem/i, query: "cosmetics,bottles" },
  { keys: /limpeza|sab[aã]o|detergente|água sanitária/i, query: "soap,cleaning,detergent" },
  { keys: /ind[uú]stria|f[aá]brica|refinaria|planta qu[ií]mica/i, query: "chemical,factory,industry" },
  { keys: /farmac[eê]utic|rem[eé]dio|medicamento|comprimido|f[aá]rmaco/i, query: "pharmacy,pills,medicine" },
  { keys: /ambiental|poluição|meio ambiente|sustentabilidade/i, query: "environment,pollution,nature" },
  { keys: /vestibular|enem|prova|estudo|estudante/i, query: "student,exam,books" },
  // átomo / periódica
  { keys: /carbono[- ]?14|datação|arqueolog/i, query: "archaeology,fossil,radiocarbon" },
  { keys: /neônio|letreir|neon/i, query: "neon,sign,city" },
  { keys: /resson[aâ]ncia magn[eé]tica|mri/i, query: "MRI,scan,hospital" },
  { keys: /sódio.*(água|reage)|metal alcalino/i, query: "sodium,reaction,water" },
  { keys: /gás(es)? nobre|hélio|argônio/i, query: "noble,gas,balloon" },
  { keys: /halog[eê]nio|cloro|flúor|iodo/i, query: "chlorine,salt,crystals" },
  // ligações
  { keys: /\bnacl\b|sal de cozinha|cloreto de s[oó]dio/i, query: "salt,crystals,cooking" },
  { keys: /água|h2o|gelo/i, query: "water,drop,molecule" },
  { keys: /cobre|ferro|alumínio|cabo|fio/i, query: "copper,wire,metal" },
  { keys: /metano|ch4|gás natural/i, query: "gas,stove,flame" },
  // reações / estequiometria
  { keys: /combustão|queima|combust[ií]vel/i, query: "flame,combustion,fire" },
  { keys: /neutralização|antiácido|azia/i, query: "antacid,tablets,stomach" },
  { keys: /haber[- ]bosch|amônia|fertilizante/i, query: "fertilizer,agriculture,crops" },
  // ácido-base
  { keys: /suco g[aá]strico|est[oô]mago/i, query: "stomach,anatomy,acid" },
  { keys: /sangue|tampão bicarbon/i, query: "blood,cells,microscope" },
  { keys: /chuva [aá]cida/i, query: "acid,rain,pollution" },
  // termodinâmica
  { keys: /queimar madeira|fogueira|lenha/i, query: "campfire,wood,burning" },
  { keys: /bolsa gelada|instant cold pack/i, query: "cold,pack,ice" },
  { keys: /fotoss[ií]ntese/i, query: "photosynthesis,leaves,sun" },
  // eletroquímica / gases
  { keys: /pilha|bateria/i, query: "battery,cells,energy" },
  { keys: /eletróli|galvani/i, query: "electrolysis,industrial" },
  { keys: /balão|pneu|gás/i, query: "balloon,gas,helium" },
  // orgânica
  { keys: /pl[aá]stico|polímero|pet\b/i, query: "plastic,bottles,recycling" },
  { keys: /petr[oó]leo|gasolina|combust/i, query: "oil,refinery,fuel" },
  { keys: /álcool|etanol|cachaça/i, query: "alcohol,ethanol,bottle" },
  // nuclear
  { keys: /nuclear|urânio|radioativ/i, query: "nuclear,reactor,radiation" },
  { keys: /fermentação|iogurte|queijo/i, query: "yogurt,fermentation,dairy" },
  { keys: /vinagre|ácido acético/i, query: "vinegar,bottle,kitchen" },
  { keys: /bicarbonato|fermento/i, query: "baking,soda,bread" },
  { keys: /filtro solar|protetor solar/i, query: "sunscreen,beach,skin" },
  { keys: /calcário|caverna|estalactite/i, query: "limestone,cave" },
];

function imageForExample(text: string): string {
  // 1) tenta mapeamento temático específico
  for (const m of EXAMPLE_IMAGE_MAP) {
    if (m.keys.test(text)) {
      return `https://loremflickr.com/600/400/${encodeURIComponent(m.query)}?lock=${Math.abs(hash(text)) % 9999}`;
    }
  }
  // 2) fallback: sempre inclui "chemistry" para manter o tema
  const stop = new Set(["aparece","produtos","usamos","casa","base","para","cobrado","como","também","muito","alguns","outras","aquela","este","essa","sobre","entre"]);
  const words = text
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 4 && !stop.has(w))
    .slice(0, 2)
    .join(",");
  const q = words ? `chemistry,${words}` : "chemistry,laboratory,science";
  return `https://loremflickr.com/600/400/${encodeURIComponent(q)}?lock=${Math.abs(hash(text)) % 9999}`;
}
function hash(s: string) {
  let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h;
}


export default function TopicoDetalhe() {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const title = params.get("t") || (slug ?? "Tópico").replace(/-/g, " ");
  const back = params.get("back") || "/cursos";

  const c = buildContent(title);
  // Usa o mapeamento temático (traduzido) para a imagem-capa, garantindo relação com o assunto.
  const heroQuery = (() => {
    for (const m of EXAMPLE_IMAGE_MAP) if (m.keys.test(title)) return m.query;
    const cat = classify(title);
    const byCat: Record<string,string> = {
      atomo:"atom,science,physics", periodica:"periodic,table,chemistry",
      ligacoes:"molecule,structure", reacoes:"chemistry,reaction,flask",
      acidobase:"laboratory,ph,indicator", termo:"thermodynamics,flame",
      cinetica:"reaction,speed,laboratory", equilibrio:"equilibrium,chemistry",
      solucoes:"solution,beaker,liquid", eletro:"battery,electrochemistry",
      organica:"organic,chemistry,molecule", nuclear:"nuclear,reactor",
      gases:"gas,balloon,science", materia:"matter,states,ice",
      cotidiano:"kitchen,cooking,chemistry",
    };
    return byCat[cat] || "chemistry,laboratory,science";
  })();
  const imgUrl = `https://loremflickr.com/1200/600/${encodeURIComponent(heroQuery)}?lock=${Math.abs(hash(title)) % 9999}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900">
      <div className="max-w-4xl mx-auto p-4 py-6">
        <Link to={back} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
          <ArrowLeft size={18} /> Voltar ao curso
        </Link>

        <Card className="overflow-hidden mb-6 border-0">
          <div className="relative h-56 md:h-72 bg-gradient-to-br from-violet-700 to-indigo-900">
            <img src={imgUrl} alt={`Ilustração de ${title}`}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur px-2 py-1 rounded text-xs mb-2">
                <GraduationCap size={12} /> {levelBadge(title)}
              </div>
              <h1 className="text-2xl md:text-4xl font-black leading-tight">{title}</h1>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            {/* Ideia principal — linguagem simples */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                <BookOpen size={18} /> Ideia principal (fundamental)
              </div>
              <p className="text-slate-700 leading-relaxed">{c.simple}</p>
            </section>

            {/* Definição formal */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                <Atom size={18} /> Definição formal (ensino médio / superior)
              </div>
              <p className="text-slate-700 leading-relaxed">{c.formal}</p>
            </section>

            {/* Conceitos-chave — cartões com explicação */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-3">
                <Lightbulb size={18} /> Conceitos-chave (com explicação)
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.key.map((k, i) => (
                  <div key={i} className="rounded-lg border border-violet-200 bg-violet-50/60 p-3">
                    <div className="text-sm font-bold text-[#4C1D95] mb-1">{k}</div>
                    <div className="text-xs text-slate-700 leading-relaxed">{explainKey(k)}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Princípios — cabeçalho destacado + explicação */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-3">
                <Target size={18} /> Princípios e leis fundamentais
              </div>
              <ol className="space-y-2">
                {c.principles.map((p, i) => {
                  const { head, rest } = highlightPrinciple(p);
                  const explain = explainPrinciple(p);
                  return (
                    <li key={i} className="rounded-lg border border-slate-200 bg-white p-3 flex gap-3">
                      <div className="w-7 h-7 shrink-0 rounded-full bg-[#4C1D95] text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-slate-900">{head}</div>
                        {rest && <div className="text-xs text-slate-700 mt-0.5 leading-relaxed">{rest}</div>}
                        <div className="text-xs text-slate-600 mt-2 leading-relaxed border-l-2 border-violet-300 pl-2 italic">
                          {explain}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </section>

            {/* Fórmulas */}
            {c.formulas && c.formulas.length > 0 && (
              <section>
                <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                  <Sigma size={18} /> Fórmulas e equações
                </div>
                <div className="grid gap-2">
                  {c.formulas.map((f, i) => (
                    <div key={i} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <div className="font-mono text-[#4C1D95] font-bold text-lg">{f.expr}</div>
                      <div className="text-xs text-slate-600 mt-1">{f.desc}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Aplicações e cotidiano — cartões com imagens */}
            <section>
              <div className="flex items-center gap-2 text-emerald-700 font-bold mb-3">
                <FlaskConical size={18} /> Aplicações e cotidiano
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {c.examples.map((e, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-emerald-200 bg-emerald-50/50 flex flex-col">
                    <div className="aspect-[16/10] bg-gradient-to-br from-emerald-100 to-emerald-200 relative overflow-hidden">
                      <img
                        src={imageForExample(e)}
                        alt={`Exemplo cotidiano: ${e.slice(0, 60)}`}
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(ev) => { (ev.target as HTMLImageElement).style.display = "none"; }}
                      />
                      <div className="absolute top-2 left-2 bg-white/90 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Exemplo {i + 1}
                      </div>
                    </div>
                    <div className="p-3 text-sm text-slate-700 leading-relaxed flex-1">{e}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Erros comuns */}
            <section className="rounded-xl p-4 bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                <AlertTriangle size={18} /> Erros comuns
              </div>
              <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                {c.pitfalls.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </section>


            {/* Exercícios */}
            <section className="rounded-xl p-4 bg-amber-50 border border-amber-200">
              <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                <Sparkles size={18} /> Exercícios sugeridos
              </div>
              <ol className="space-y-1.5 text-sm text-slate-700 list-decimal pl-5">
                {c.exercises.map((e, i) => <li key={i}>{e}</li>)}
              </ol>
            </section>

            {/* Referências bibliográficas */}
            <section className="rounded-xl p-4 bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-slate-700 font-bold mb-2">
                <Library size={18} /> Referências bibliográficas
              </div>
              <p className="text-xs text-slate-600 mb-2">
                Este material foi elaborado com base nas obras de referência da graduação e vestibular:
              </p>
              <ul className="text-xs text-slate-700 space-y-1 mb-3 list-disc pl-5">
                {BOOKS.map((b, i) => <li key={i}>{b.full}</li>)}
              </ul>
              <p className="text-xs font-semibold text-slate-700">Para se aprofundar neste tópico específico:</p>
              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-5">
                {c.refs.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </section>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link to={back}>
                <Button className="bg-[#4C1D95] hover:bg-[#3b1478]">Voltar para a aula</Button>
              </Link>
              <Link to="/cursos">
                <Button variant="outline">Ver todos os cursos</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Sparkles, Trophy, RotateCcw, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Q = { q: string; options: string[]; correct: number; explain: string };

const BANK: Record<string, Q[]> = {
  atomo: [
    { q: "Qual partícula subatômica tem carga positiva?", options: ["Elétron", "Nêutron", "Próton", "Fóton"], correct: 2, explain: "O próton está no núcleo e tem carga +1." },
    { q: "O número atômico (Z) de um elemento corresponde ao número de:", options: ["Nêutrons", "Prótons", "Elétrons de valência", "Massa"], correct: 1, explain: "Z = número de prótons no núcleo." },
    { q: "Isótopos são átomos com:", options: ["Mesmo Z e diferente A", "Mesmo A e diferente Z", "Mesmo número de elétrons", "Mesma carga"], correct: 0, explain: "Isótopos têm o mesmo número de prótons e diferentes números de nêutrons." },
    { q: "O modelo atômico que introduziu níveis quantizados de energia foi o de:", options: ["Dalton", "Thomson", "Rutherford", "Bohr"], correct: 3, explain: "Bohr propôs órbitas com energia quantizada." },
    { q: "Um átomo neutro possui:", options: ["Mais prótons que elétrons", "Mesmo número de prótons e elétrons", "Só nêutrons", "Só elétrons"], correct: 1, explain: "Em átomo neutro, prótons = elétrons." },
  ],
  periodica: [
    { q: "Os elementos de uma mesma família (grupo) possuem:", options: ["Mesmo número de camadas", "Mesmo número de elétrons de valência", "Mesma massa", "Mesmo número atômico"], correct: 1, explain: "Famílias compartilham o número de elétrons na camada de valência." },
    { q: "O raio atômico geralmente:", options: ["Aumenta ao longo do período", "Diminui ao longo da família", "Aumenta ao descer na família", "Não varia"], correct: 2, explain: "Ao descer numa família, novas camadas são adicionadas." },
    { q: "Qual é o elemento mais eletronegativo?", options: ["Oxigênio", "Cloro", "Flúor", "Nitrogênio"], correct: 2, explain: "O flúor (F) é o mais eletronegativo da tabela." },
    { q: "Os gases nobres têm em comum:", options: ["Alta reatividade", "Camada de valência completa", "Formam íons +1", "Baixa energia de ionização"], correct: 1, explain: "Possuem octeto completo, por isso são pouco reativos." },
    { q: "Metais alcalinos pertencem ao grupo:", options: ["1", "2", "17", "18"], correct: 0, explain: "Grupo 1: Li, Na, K, Rb, Cs, Fr." },
  ],
  ligacoes: [
    { q: "Ligação iônica ocorre tipicamente entre:", options: ["Dois ametais", "Metal e ametal", "Dois metais", "Gás nobre e metal"], correct: 1, explain: "Metal cede elétrons ao ametal, formando cátion e ânion." },
    { q: "Na molécula de H₂O, a geometria é:", options: ["Linear", "Angular", "Trigonal plana", "Tetraédrica"], correct: 1, explain: "Dois pares ligantes e dois pares isolados dão geometria angular." },
    { q: "A ligação covalente envolve:", options: ["Transferência de elétrons", "Compartilhamento de elétrons", "Emissão de fótons", "Absorção de nêutrons"], correct: 1, explain: "Átomos compartilham pares eletrônicos." },
    { q: "Uma molécula é polar quando:", options: ["Tem só ligações apolares", "Tem dipolo resultante ≠ 0", "É simétrica", "É um gás nobre"], correct: 1, explain: "Momento dipolar total diferente de zero indica polaridade." },
    { q: "Hibridização sp³ produz geometria:", options: ["Linear", "Trigonal", "Tetraédrica", "Octaédrica"], correct: 2, explain: "Quatro orbitais híbridos sp³ em geometria tetraédrica (ex.: CH₄)." },
  ],
  reacoes: [
    { q: "Na equação 2H₂ + O₂ → 2H₂O, os coeficientes garantem:", options: ["Conservação de energia", "Conservação de massa", "Aumento de entropia", "Cinética rápida"], correct: 1, explain: "Balanceamento respeita a Lei de Lavoisier (conservação de massa)." },
    { q: "Um mol contém aproximadamente:", options: ["6,02 × 10²³ entidades", "10²³ entidades", "3,14 × 10²³ entidades", "1000 entidades"], correct: 0, explain: "Constante de Avogadro: 6,022 × 10²³." },
    { q: "Reagente limitante é aquele que:", options: ["Está em excesso", "Termina primeiro", "Não reage", "Tem maior massa molar"], correct: 1, explain: "Limita a quantidade máxima de produto formado." },
    { q: "Reação de síntese é do tipo:", options: ["A → B + C", "A + B → AB", "AB + CD → AD + CB", "AB → A + B"], correct: 1, explain: "Dois reagentes formam um único produto." },
    { q: "O rendimento percentual é calculado por:", options: ["(real/teórico) × 100", "(teórico/real) × 100", "real − teórico", "teórico + real"], correct: 0, explain: "Rendimento % = massa obtida / massa teórica × 100." },
  ],
  acidobase: [
    { q: "Segundo Arrhenius, um ácido em água libera:", options: ["OH⁻", "H⁺ (H₃O⁺)", "Na⁺", "Cl⁻"], correct: 1, explain: "Ácidos de Arrhenius liberam H⁺ em água." },
    { q: "Uma solução com pH = 3 é:", options: ["Básica", "Neutra", "Ácida", "Alcalina forte"], correct: 2, explain: "pH < 7 indica meio ácido." },
    { q: "pH + pOH em 25 °C é igual a:", options: ["7", "10", "14", "1"], correct: 2, explain: "Kw = 10⁻¹⁴; portanto pH + pOH = 14." },
    { q: "Neutralização produz:", options: ["Ácido + base", "Sal + água", "Gás nobre", "Metal + ácido"], correct: 1, explain: "HA + BOH → BA + H₂O." },
    { q: "Segundo Brønsted-Lowry, base é uma espécie que:", options: ["Recebe H⁺", "Doa H⁺", "Doa elétrons", "Recebe elétrons"], correct: 0, explain: "Base = receptora de próton (H⁺)." },
  ],
  termo: [
    { q: "Reação exotérmica libera energia e tem:", options: ["ΔH > 0", "ΔH < 0", "ΔH = 0", "ΔS < 0 sempre"], correct: 1, explain: "Exotérmica: entalpia dos produtos menor que dos reagentes." },
    { q: "A Lei de Hess afirma que ΔH:", options: ["Depende do caminho", "Independe do caminho, só dos estados inicial e final", "É sempre negativo", "É zero em reações espontâneas"], correct: 1, explain: "Função de estado: só importa início e fim." },
    { q: "Energia livre de Gibbs é dada por:", options: ["ΔG = ΔH + TΔS", "ΔG = ΔH − TΔS", "ΔG = TΔS − ΔH", "ΔG = ΔH × ΔS"], correct: 1, explain: "ΔG = ΔH − TΔS; ΔG < 0 indica espontaneidade." },
    { q: "Entropia (S) mede:", options: ["Energia total", "Grau de desordem", "Calor absorvido", "Massa do sistema"], correct: 1, explain: "S é medida da desordem microscópica." },
    { q: "Uma reação é espontânea quando:", options: ["ΔG > 0", "ΔG = 0", "ΔG < 0", "ΔH > 0"], correct: 2, explain: "ΔG negativo indica espontaneidade termodinâmica." },
  ],
  cinetica: [
    { q: "A velocidade de reação geralmente aumenta com:", options: ["Diminuição da temperatura", "Aumento da temperatura", "Retirada do catalisador", "Redução da concentração"], correct: 1, explain: "Maior T → mais colisões efetivas." },
    { q: "Um catalisador atua:", options: ["Aumentando ΔH", "Diminuindo a energia de ativação", "Deslocando o equilíbrio", "Consumindo-se na reação"], correct: 1, explain: "Cria caminho alternativo com menor Ea." },
    { q: "A ordem de uma reação é obtida:", options: ["Pela equação balanceada", "Experimentalmente", "Pelo ΔH", "Pela massa dos reagentes"], correct: 1, explain: "Determinada por dados experimentais de velocidade." },
    { q: "Reação de 1ª ordem tem velocidade proporcional a:", options: ["[A]⁰", "[A]¹", "[A]²", "[A][B]"], correct: 1, explain: "v = k[A]." },
    { q: "Energia de ativação (Ea) é:", options: ["Energia liberada na reação", "Energia mínima para reação ocorrer", "Massa dos reagentes", "Volume final"], correct: 1, explain: "Barreira energética que colisões precisam superar." },
  ],
  equilibrio: [
    { q: "No equilíbrio químico, as velocidades:", options: ["Direta > inversa", "Inversa > direta", "Direta = inversa", "Ambas nulas"], correct: 2, explain: "Equilíbrio dinâmico: v_direta = v_inversa." },
    { q: "Princípio de Le Chatelier prevê que o sistema:", options: ["Ignora perturbações", "Reage para minimizar a perturbação", "Explode", "Fica em repouso absoluto"], correct: 1, explain: "Sistema desloca no sentido que reduz a perturbação." },
    { q: "Aumentar a pressão desloca o equilíbrio para o lado com:", options: ["Mais mols de gás", "Menos mols de gás", "Igual número", "Nenhum efeito"], correct: 1, explain: "Sentido de menor volume gasoso alivia a pressão." },
    { q: "Kc depende de:", options: ["Concentrações iniciais", "Apenas da temperatura", "Pressão total sempre", "Volume do recipiente"], correct: 1, explain: "Kc muda somente com T." },
    { q: "Adicionar catalisador ao equilíbrio:", options: ["Desloca para produtos", "Desloca para reagentes", "Não desloca; só acelera atingir o equilíbrio", "Aumenta Kc"], correct: 2, explain: "Catalisador não altera Kc nem posição de equilíbrio." },
  ],
  solucoes: [
    { q: "Molaridade (mol/L) é:", options: ["mol soluto / L solvente", "mol soluto / L solução", "g soluto / L solução", "g soluto / kg solvente"], correct: 1, explain: "M = n_soluto / V_solução(L)." },
    { q: "Diluição segue a fórmula:", options: ["C₁V₁ = C₂V₂", "C₁ + C₂ = V₁ + V₂", "C₁/V₁ = C₂/V₂", "C₁V₂ = C₂V₁"], correct: 0, explain: "A quantidade de soluto se conserva na diluição." },
    { q: "Osmose é o movimento de:", options: ["Soluto do meio diluído ao concentrado", "Solvente do meio diluído ao concentrado", "Íons até o equilíbrio de carga", "Gás através de membrana"], correct: 1, explain: "Solvente atravessa a membrana semipermeável." },
    { q: "Propriedade coligativa NÃO é:", options: ["Tonoscopia", "Ebulioscopia", "Densidade", "Osmose"], correct: 2, explain: "Densidade não é propriedade coligativa." },
    { q: "Uma solução saturada contém:", options: ["Menos soluto que o máximo", "A quantidade máxima solúvel", "Mais soluto que o máximo", "Nada de soluto"], correct: 1, explain: "Atingiu o coeficiente de solubilidade." },
  ],
  eletro: [
    { q: "Em uma pilha, a oxidação ocorre no:", options: ["Cátodo", "Ânodo", "Eletrólito", "Fio externo"], correct: 1, explain: "Ânodo é o polo negativo onde ocorre oxidação." },
    { q: "Nox do oxigênio na maioria dos compostos é:", options: ["+2", "0", "−2", "+1"], correct: 2, explain: "Exceto em peróxidos (−1) e F₂O (+2)." },
    { q: "Eletrólise é um processo:", options: ["Espontâneo", "Não espontâneo, requer energia elétrica", "Sem transferência de elétrons", "Apenas em gases"], correct: 1, explain: "Necessita corrente para forçar a reação." },
    { q: "A ddp padrão (E°) de uma pilha é positiva quando:", options: ["Reação é espontânea", "Reação é não espontânea", "ΔG > 0", "Nox não varia"], correct: 0, explain: "ΔG = −nFE°; E° > 0 → ΔG < 0 → espontânea." },
    { q: "Sofrer redução significa:", options: ["Perder elétrons", "Ganhar elétrons", "Perder prótons", "Ganhar nêutrons"], correct: 1, explain: "Redução = ganho de elétrons (nox diminui)." },
  ],
  organica: [
    { q: "Hidrocarbonetos são compostos formados por:", options: ["C e N", "C e H", "C e O", "C, H e S"], correct: 1, explain: "Apenas carbono e hidrogênio." },
    { q: "A função álcool possui o grupo:", options: ["−COOH", "−OH ligado a C saturado", "−CHO", "−NH₂"], correct: 1, explain: "Hidroxila em carbono saturado caracteriza álcool." },
    { q: "Alcanos têm fórmula geral:", options: ["CₙH₂ₙ", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂", "CₙHₙ"], correct: 1, explain: "Cadeia aberta saturada: CₙH₂ₙ₊₂." },
    { q: "Isomeria de cadeia diferencia compostos com:", options: ["Diferentes funções", "Diferentes disposições da cadeia carbônica", "Diferentes números atômicos", "Diferentes massas atômicas"], correct: 1, explain: "Mesma fórmula molecular, cadeias distintas." },
    { q: "Benzeno é um exemplo de composto:", options: ["Alifático", "Aromático", "Alicíclico saturado", "Iônico"], correct: 1, explain: "Anel aromático com 6 π elétrons deslocalizados." },
  ],
  nuclear: [
    { q: "Radiação alfa (α) corresponde a:", options: ["Elétron rápido", "Núcleo de He (²He⁴)", "Fóton", "Nêutron livre"], correct: 1, explain: "Partícula α: 2 prótons + 2 nêutrons." },
    { q: "Meia-vida é o tempo para:", options: ["Todo o material decair", "Metade dos núcleos decair", "Dobrar a massa", "Emitir 1 fóton"], correct: 1, explain: "Decaimento reduz a amostra à metade em cada t½." },
    { q: "Fissão nuclear ocorre quando:", options: ["Dois núcleos se fundem", "Núcleo pesado se quebra", "Elétron muda de camada", "Íon se forma"], correct: 1, explain: "Núcleo pesado (ex.: U-235) se divide liberando energia." },
    { q: "Fusão nuclear é a base energética do:", options: ["Reator nuclear atual", "Sol e das estrelas", "Bateria comum", "Motor elétrico"], correct: 1, explain: "Estrelas fundem H em He, liberando enorme energia." },
    { q: "Radiação γ (gama) é:", options: ["Partícula massiva", "Onda eletromagnética de alta energia", "Elétron", "Próton"], correct: 1, explain: "Fóton de altíssima frequência, sem massa nem carga." },
  ],
  gases: [
    { q: "A equação dos gases ideais é:", options: ["PV = nRT", "PV = nR/T", "P/V = nRT", "PV² = nRT"], correct: 0, explain: "Equação de Clapeyron." },
    { q: "Se T dobra a P constante, o volume:", options: ["Dobra", "Reduz à metade", "Não varia", "Quadruplica"], correct: 0, explain: "Lei de Charles: V ∝ T (P constante)." },
    { q: "Volume molar de gás ideal a CNTP é:", options: ["11,2 L", "22,4 L", "24,5 L", "1 L"], correct: 1, explain: "22,4 L/mol a 0 °C e 1 atm." },
    { q: "Lei de Boyle (T constante):", options: ["V ∝ T", "P ∝ n", "PV = constante", "P/T = constante"], correct: 2, explain: "P₁V₁ = P₂V₂ a T constante." },
    { q: "R (constante universal) vale aproximadamente:", options: ["0,082 atm·L/mol·K", "8,31 atm·L/mol·K", "22,4 mol/L", "6,02 × 10²³"], correct: 0, explain: "R = 0,082 atm·L·mol⁻¹·K⁻¹ (ou 8,314 J·mol⁻¹·K⁻¹)." },
  ],
  materia: [
    { q: "Uma mistura homogênea apresenta:", options: ["Duas ou mais fases", "Uma só fase visível", "Composição variável em cada ponto", "Só substâncias puras separadas"], correct: 1, explain: "Também chamada solução." },
    { q: "Fusão é a passagem de:", options: ["Sólido para líquido", "Líquido para gás", "Gás para sólido", "Sólido para gás"], correct: 0, explain: "Fusão = sólido → líquido." },
    { q: "Densidade é dada por:", options: ["d = m/V", "d = V/m", "d = m·V", "d = m − V"], correct: 0, explain: "d = massa/volume." },
    { q: "Substância pura tem:", options: ["Composição variável", "Ponto de fusão definido", "Sempre duas fases", "Nenhuma propriedade específica"], correct: 1, explain: "Propriedades constantes (PF, PE, densidade)." },
    { q: "Decantação separa:", options: ["Dois líquidos miscíveis", "Sólido de líquido em suspensão", "Gás de líquido", "Íons em solução"], correct: 1, explain: "Usada em misturas heterogêneas sólido-líquido ou líquido-líquido imiscíveis." },
  ],
  cotidiano: [
    { q: "O bicarbonato de sódio (NaHCO₃) tem caráter:", options: ["Fortemente ácido", "Levemente básico", "Neutro", "Fortemente básico"], correct: 1, explain: "Sal que em água libera OH⁻ moderadamente." },
    { q: "A combustão completa do metano produz:", options: ["CO + H₂O", "CO₂ + H₂O", "C + H₂", "NO₂ + H₂O"], correct: 1, explain: "CH₄ + 2O₂ → CO₂ + 2H₂O." },
    { q: "Vinagre contém principalmente:", options: ["Ácido cítrico", "Ácido acético", "Ácido sulfúrico", "Ácido clorídrico"], correct: 1, explain: "Solução aquosa de ácido acético (~4-8%)." },
    { q: "A ferrugem no ferro é um exemplo de:", options: ["Redução", "Oxidação", "Fusão", "Sublimação"], correct: 1, explain: "Fe perde elétrons formando óxidos hidratados." },
    { q: "Sabões atuam removendo gordura porque:", options: ["Aquecem a água", "Têm parte polar e apolar (tensoativos)", "São ácidos fortes", "Evaporam a gordura"], correct: 1, explain: "Micelas capturam gordura no interior apolar." },
  ],
  geral: [
    { q: "A Química estuda:", options: ["Somente reações em laboratório", "Composição, estrutura e transformações da matéria", "Apenas metais", "Só substâncias orgânicas"], correct: 1, explain: "Definição ampla e clássica da Química." },
    { q: "Matéria é tudo que:", options: ["Emite luz", "Ocupa espaço e tem massa", "É invisível", "É líquido"], correct: 1, explain: "Definição operacional de matéria." },
    { q: "Elemento químico é definido pelo seu:", options: ["Número de massa", "Número atômico (Z)", "Número de nêutrons", "Estado físico"], correct: 1, explain: "Cada Z corresponde a um único elemento." },
    { q: "Substância pura pode ser:", options: ["Simples ou composta", "Apenas simples", "Apenas composta", "Sempre mistura"], correct: 0, explain: "Simples (O₂) ou composta (H₂O)." },
    { q: "A unidade de quantidade de matéria no SI é:", options: ["grama", "litro", "mol", "átomo"], correct: 2, explain: "Mol é a unidade SI de quantidade de matéria." },
  ],
};

function pickQuestions(category: string, seedStr: string, n = 5): Q[] {
  const pool = BANK[category] || BANK.geral;
  // Simple deterministic shuffle by seed
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) | 0;
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    const j = seed % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, Math.min(n, arr.length));
}

type Props = { slug: string; title: string; category: string; courseId?: string | null };

export default function TopicExercise({ slug, title, category, courseId }: Props) {
  const questions = useMemo(() => pickQuestions(category, slug), [category, slug]);
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null));
  const [submitted, setSubmitted] = useState(false);
  const [saving, setSaving] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data } = await supabase
        .from("topic_exercise_attempts")
        .select("score")
        .eq("user_id", userData.user.id)
        .eq("topic_slug", slug)
        .order("score", { ascending: false });
      if (data && data.length) {
        setBest(Number(data[0].score));
        setAttempts(data.length);
      }
    })();
  }, [slug]);

  const correctCount = answers.reduce((acc, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0);
  const score = questions.length ? Number(((correctCount / questions.length) * 10).toFixed(2)) : 0;
  const passed = score >= 7;

  async function handleSubmit() {
    if (answers.some((a) => a === null)) {
      toast.error("Responda todas as questões antes de enviar.");
      return;
    }
    setSaving(true);
    const { data: userData } = await supabase.auth.getUser();
    if (!userData.user) {
      toast.error("Faça login para registrar sua nota.");
      setSaving(false);
      return;
    }
    const { error } = await supabase.from("topic_exercise_attempts").insert({
      user_id: userData.user.id,
      topic_slug: slug,
      topic_title: title,
      category,
      course_id: courseId ?? null,
      score,
      correct: correctCount,
      total: questions.length,
      answers,
    });
    setSaving(false);
    if (error) {
      toast.error("Erro ao salvar nota: " + error.message);
      return;
    }
    setSubmitted(true);
    setAttempts((a) => a + 1);
    setBest((b) => (b === null || score > b ? score : b));
    toast.success(passed ? `Aprovado! Nota ${score.toFixed(1)}` : `Nota ${score.toFixed(1)} registrada`);
  }

  function reset() {
    setAnswers(questions.map(() => null));
    setSubmitted(false);
  }

  return (
    <Card className="p-4 md:p-5 border-amber-200 bg-amber-50/60">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2 text-amber-800 font-bold">
          <Sparkles size={18} /> Exercício avaliativo online
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-700">
          {best !== null && (
            <span className="inline-flex items-center gap-1 bg-white/70 px-2 py-1 rounded">
              <Trophy size={12} className="text-amber-600" /> Melhor nota: <b>{best.toFixed(1)}</b>
            </span>
          )}
          <span className="inline-flex items-center gap-1 bg-white/70 px-2 py-1 rounded">
            Tentativas: <b>{attempts}</b>
          </span>
        </div>
      </div>

      <p className="text-xs text-slate-700 mb-3">
        Responda {questions.length} questões objetivas. A média para aprovação é <b>7,0</b>. Sua nota fica salva no seu histórico e conta para a média final do curso.
      </p>

      <ol className="space-y-3">
        {questions.map((q, qi) => {
          const chosen = answers[qi];
          return (
            <li key={qi} className="bg-white rounded-lg border border-slate-200 p-3">
              <div className="text-sm font-semibold text-slate-900 mb-2">
                {qi + 1}. {q.q}
              </div>
              <div className="space-y-1.5">
                {q.options.map((opt, oi) => {
                  const isChosen = chosen === oi;
                  const isCorrect = q.correct === oi;
                  let cls = "border-slate-200 hover:bg-slate-50";
                  if (submitted) {
                    if (isCorrect) cls = "border-emerald-400 bg-emerald-50";
                    else if (isChosen) cls = "border-red-400 bg-red-50";
                  } else if (isChosen) {
                    cls = "border-violet-500 bg-violet-50";
                  }
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => {
                        const next = [...answers];
                        next[qi] = oi;
                        setAnswers(next);
                      }}
                      className={`w-full text-left text-sm border rounded-md px-3 py-2 flex items-center gap-2 transition ${cls}`}
                    >
                      <span className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {submitted && isCorrect && <CheckCircle2 size={16} className="text-emerald-600" />}
                      {submitted && isChosen && !isCorrect && <XCircle size={16} className="text-red-600" />}
                    </button>
                  );
                })}
              </div>
              {submitted && (
                <div className="mt-2 text-xs text-slate-700 bg-slate-50 border border-slate-200 rounded px-2 py-1.5">
                  <b>Explicação:</b> {q.explain}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={saving} className="bg-amber-600 hover:bg-amber-700 text-white">
            {saving ? <Loader2 className="animate-spin" size={16} /> : "Enviar respostas"}
          </Button>
        ) : (
          <>
            <div
              className={`px-3 py-2 rounded-lg font-bold text-sm ${
                passed ? "bg-emerald-100 text-emerald-800 border border-emerald-300" : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {passed ? "✅ Aprovado" : "❌ Reprovado"} — Nota {score.toFixed(1)} ({correctCount}/{questions.length})
            </div>
            <Button variant="outline" onClick={reset}>
              <RotateCcw size={14} className="mr-1" /> Refazer
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}

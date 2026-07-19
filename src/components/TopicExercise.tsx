import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Sparkles, Trophy, RotateCcw, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Q = { q: string; options: string[]; correct: number; explain: string };

const BANK: Record<string, Q[]> = {
  atomo: [
    { q: "Em uma aula sobre estrutura atômica, o professor explica que o núcleo concentra praticamente toda a massa do átomo e é formado por duas partículas. Entre elas, apenas uma possui carga elétrica positiva e é responsável por definir o número atômico do elemento. Que partícula é essa?", options: ["Elétron", "Nêutron", "Próton", "Fóton"], correct: 2, explain: "O próton está no núcleo e tem carga +1; o número de prótons define o número atômico (Z)." },
    { q: "Ao consultar a tabela periódica, um estudante observa que o carbono aparece com o número 6 acima do símbolo C. Esse número, chamado número atômico (Z), é uma característica única e imutável de cada elemento químico. Ele corresponde exatamente ao número de:", options: ["Nêutrons no núcleo", "Prótons no núcleo", "Elétrons de valência", "Massa atômica do átomo"], correct: 1, explain: "Z = número de prótons. Ele identifica o elemento; se muda, muda também o elemento." },
    { q: "O carbono possui três formas naturais: C-12, C-13 e C-14, todas com 6 prótons mas com quantidades diferentes de nêutrons no núcleo. Esses três átomos são exemplos clássicos de isótopos. De acordo com essa definição, isótopos são átomos que possuem:", options: ["Mesmo Z e diferente número de massa (A)", "Mesmo A e diferente Z", "Mesmo número de elétrons e cargas diferentes", "Mesma carga e massas iguais"], correct: 0, explain: "Isótopos: mesmo Z (mesmo elemento) e diferente número de nêutrons, logo A diferente." },
    { q: "Ao estudar a evolução dos modelos atômicos, os alunos veem que Rutherford propôs um átomo com núcleo e elétrons girando ao redor, mas seu modelo não explicava por que os elétrons não caíam no núcleo. Foi então que outro cientista introduziu a ideia de níveis quantizados de energia. Esse modelo é o de:", options: ["Dalton", "Thomson", "Rutherford", "Bohr"], correct: 3, explain: "Bohr propôs órbitas estacionárias com energia quantizada, resolvendo a instabilidade do modelo de Rutherford." },
    { q: "Um átomo em seu estado fundamental, sem ganhar nem perder elétrons, é chamado eletricamente neutro. Isso significa que a soma das cargas positivas do núcleo se iguala à soma das cargas negativas ao redor dele. Portanto, um átomo neutro possui:", options: ["Mais prótons que elétrons", "Mesmo número de prótons e elétrons", "Somente nêutrons no núcleo", "Somente elétrons na eletrosfera"], correct: 1, explain: "Em átomo neutro, número de prótons = número de elétrons, anulando as cargas." },
  ],
  periodica: [
    { q: "Ao observar os elementos sódio (Na) e potássio (K), ambos no grupo 1 da tabela periódica, nota-se que os dois reagem violentamente com a água formando bases fortes. Esse comportamento químico semelhante ocorre porque elementos de uma mesma família compartilham:", options: ["O mesmo número de camadas eletrônicas", "O mesmo número de elétrons na camada de valência", "A mesma massa atômica", "O mesmo número atômico"], correct: 1, explain: "Elementos da mesma família têm a mesma configuração de valência, o que determina propriedades químicas parecidas." },
    { q: "Um estudante compara os raios atômicos do lítio, sódio e potássio, todos do grupo 1. Ele percebe que, à medida que desce na família, os átomos ficam maiores porque novas camadas eletrônicas são adicionadas. Sobre o raio atômico, é correto afirmar que ele:", options: ["Aumenta ao longo de um período (esquerda→direita)", "Diminui ao descer numa família", "Aumenta ao descer numa família", "Não sofre variação regular"], correct: 2, explain: "Descendo na família, há mais camadas → raio maior. Ao longo do período, o raio diminui." },
    { q: "Em uma aula sobre propriedades periódicas, o professor destaca que a eletronegatividade mede a tendência de um átomo atrair elétrons em uma ligação. Ao analisar a tabela, os alunos identificam o elemento mais eletronegativo, situado no canto superior direito (excluindo gases nobres). Trata-se do:", options: ["Oxigênio", "Cloro", "Flúor", "Nitrogênio"], correct: 2, explain: "O flúor é o elemento mais eletronegativo (3,98 na escala de Pauling)." },
    { q: "Balões de festa cheios com hélio, lâmpadas fluorescentes com neônio e faróis de mergulho com argônio: todos esses elementos pertencem ao mesmo grupo e praticamente não reagem com outros elementos em condições normais. Essa baixa reatividade dos gases nobres se deve a possuírem:", options: ["Alta reatividade química", "Camada de valência completa (octeto)", "Facilidade de formar cátions +1", "Baixíssima energia de ionização"], correct: 1, explain: "Gases nobres têm 8 elétrons na valência (2 para o He), configuração estável." },
    { q: "Os metais alcalinos são conhecidos por serem tão reativos que precisam ser armazenados em óleo mineral para não reagirem com o ar. Eles formam cátions +1 com facilidade e liberam hidrogênio quando entram em contato com a água. Esses elementos pertencem ao grupo:", options: ["1", "2", "17", "18"], correct: 0, explain: "Metais alcalinos = grupo 1 (Li, Na, K, Rb, Cs, Fr)." },
  ],
  ligacoes: [
    { q: "O sal de cozinha (NaCl) é formado pela transferência de um elétron do sódio (metal) para o cloro (ametal), gerando os íons Na⁺ e Cl⁻ que se atraem eletrostaticamente. Esse tipo de ligação, envolvendo transferência de elétrons, ocorre tipicamente entre:", options: ["Dois ametais", "Um metal e um ametal", "Dois metais", "Um gás nobre e um metal"], correct: 1, explain: "Ligação iônica: metal cede elétrons e ametal recebe, formando íons de cargas opostas." },
    { q: "A molécula de água (H₂O) apresenta dois pares de elétrons ligantes entre O e H, além de dois pares isolados sobre o oxigênio. Esses pares isolados repelem os pares ligantes e definem a forma da molécula. A geometria molecular da água é:", options: ["Linear", "Angular", "Trigonal plana", "Tetraédrica"], correct: 1, explain: "Segundo VSEPR, dois pares ligantes + dois isolados dão geometria angular (~104,5°)." },
    { q: "Em uma molécula de metano (CH₄), o carbono não cede nem recebe elétrons dos hidrogênios: em vez disso, cada par de elétrons é dividido entre os dois átomos. Essa forma de união química, comum entre ametais, é conhecida como ligação covalente e envolve:", options: ["Transferência de elétrons de um átomo para outro", "Compartilhamento de pares de elétrons", "Emissão de fótons entre átomos", "Absorção de nêutrons pelo núcleo"], correct: 1, explain: "Covalente = compartilhamento de pares eletrônicos entre átomos." },
    { q: "O CO₂ é apolar apesar de possuir ligações polares, enquanto o H₂O é polar. Essa diferença está ligada à geometria da molécula e ao vetor resultante dos dipolos de ligação. Uma molécula é considerada polar quando:", options: ["Todas as ligações são apolares", "O momento dipolar resultante é diferente de zero", "É perfeitamente simétrica", "É um gás nobre"], correct: 1, explain: "Se os vetores dipolares não se cancelam, μ ≠ 0 e a molécula é polar." },
    { q: "No metano (CH₄), o carbono central usa quatro orbitais híbridos equivalentes para se ligar aos quatro hidrogênios, formando ângulos de aproximadamente 109,5° entre as ligações. Essa hibridização é do tipo sp³ e produz geometria:", options: ["Linear", "Trigonal plana", "Tetraédrica", "Octaédrica"], correct: 2, explain: "sp³ = 4 orbitais híbridos → arranjo tetraédrico (ex.: CH₄, NH₃, H₂O)." },
  ],
  reacoes: [
    { q: "Na reação de combustão do hidrogênio 2H₂ + O₂ → 2H₂O, os coeficientes 2, 1 e 2 garantem que o número de átomos de cada elemento nos reagentes seja igual ao dos produtos. Esse balanceamento respeita uma lei fundamental da Química, chamada Lei de Lavoisier, que estabelece:", options: ["Conservação da energia térmica", "Conservação da massa nas reações", "Aumento da entropia do universo", "Rapidez cinética das reações"], correct: 1, explain: "Balancear = respeitar a Lei de Lavoisier: a massa se conserva." },
    { q: "Quando falamos que 12 g de carbono correspondem a 1 mol, estamos usando uma unidade que agrupa uma quantidade enorme e fixa de partículas. Esse valor, conhecido como constante de Avogadro, é aproximadamente igual a:", options: ["6,02 × 10²³ entidades", "1 × 10²³ entidades", "3,14 × 10²³ entidades", "1000 entidades"], correct: 0, explain: "N_A ≈ 6,022 × 10²³ mol⁻¹ (constante de Avogadro)." },
    { q: "Ao misturar 2 mols de H₂ com apenas 1 mol de O₂, todo o oxigênio é consumido antes que todo o hidrogênio reaja. Nesse tipo de situação, um dos reagentes limita a quantidade máxima de produto formado. Esse reagente é chamado limitante e é aquele que:", options: ["Está em excesso na mistura", "Termina primeiro (é totalmente consumido)", "Não participa da reação", "Possui maior massa molar"], correct: 1, explain: "Reagente limitante se esgota primeiro e determina o rendimento máximo." },
    { q: "Quando o cálcio metálico reage com oxigênio formando óxido de cálcio (2Ca + O₂ → 2CaO), dois reagentes simples se combinam gerando um único composto. Esse tipo de transformação é classificada como reação de:", options: ["Análise (A → B + C)", "Síntese (A + B → AB)", "Dupla troca (AB + CD → AD + CB)", "Decomposição (AB → A + B)"], correct: 1, explain: "Síntese ou adição: vários reagentes → um único produto." },
    { q: "Em um experimento no laboratório, a massa teórica esperada de sal produzido era de 10 g, mas o aluno obteve apenas 8 g após purificação. Para calcular o rendimento percentual da reação, deve-se aplicar a fórmula:", options: ["(massa real / massa teórica) × 100", "(massa teórica / massa real) × 100", "massa real − massa teórica", "massa teórica + massa real"], correct: 0, explain: "Rendimento % = (obtido/esperado)×100. Aqui: 8/10×100 = 80%." },
  ],
  acidobase: [
    { q: "O ácido clorídrico (HCl), presente no suco gástrico do estômago, ao ser dissolvido em água, libera íons responsáveis pela sua acidez. Segundo Arrhenius, um ácido em solução aquosa é toda substância que libera:", options: ["Íons OH⁻", "Íons H⁺ (ou H₃O⁺)", "Íons Na⁺", "Íons Cl⁻ apenas"], correct: 1, explain: "Arrhenius: ácido libera H⁺ em água; base libera OH⁻." },
    { q: "O suco de limão apresenta pH próximo a 3, enquanto a água pura tem pH 7 e a soda cáustica pH próximo a 14. Considerando essa escala e o valor medido de pH = 3, a solução é classificada como:", options: ["Básica", "Neutra", "Ácida", "Alcalina forte"], correct: 2, explain: "pH < 7: ácido. pH = 7: neutro. pH > 7: básico." },
    { q: "Em uma solução aquosa a 25 °C, a autoionização da água mantém constante o produto entre as concentrações de H⁺ e OH⁻ (Kw = 10⁻¹⁴). Como consequência dessa relação, a soma pH + pOH é sempre igual a:", options: ["7", "10", "14", "1"], correct: 2, explain: "pH + pOH = 14 a 25 °C, pois −log(Kw) = 14." },
    { q: "Na indústria farmacêutica, antiácidos como o hidróxido de magnésio combatem a acidez estomacal reagindo com o HCl. Esse tipo de reação, chamada neutralização, ocorre entre um ácido e uma base e sempre produz:", options: ["Um novo ácido e uma nova base", "Um sal e água", "Um gás nobre", "Um metal livre"], correct: 1, explain: "Neutralização: HA + BOH → sal (BA) + H₂O." },
    { q: "Ampliando a definição de Arrhenius, Brønsted e Lowry propuseram que ácidos e bases podem ser identificados pela transferência de prótons (H⁺), inclusive fora da água. Segundo esses cientistas, uma base é uma espécie capaz de:", options: ["Receber um próton (H⁺)", "Doar um próton (H⁺)", "Doar um par de elétrons", "Receber um par de elétrons"], correct: 0, explain: "Brønsted-Lowry: ácido doa H⁺; base recebe H⁺." },
  ],
  termo: [
    { q: "Ao acender um palito de fósforo, sente-se calor sendo liberado para o ambiente. Nesse tipo de transformação, a energia dos produtos é menor que a dos reagentes e a variação de entalpia é negativa. Uma reação exotérmica, portanto, apresenta:", options: ["ΔH > 0 (absorve calor)", "ΔH < 0 (libera calor)", "ΔH = 0 sempre", "ΔS < 0 obrigatoriamente"], correct: 1, explain: "Exotérmica libera energia: entalpia dos produtos < reagentes ⇒ ΔH < 0." },
    { q: "Ao calcular a variação de entalpia de uma reação complexa, o químico pode somar as entalpias de várias etapas intermediárias, obtendo o mesmo resultado que se a reação ocorresse em uma só etapa. Essa propriedade é enunciada pela Lei de Hess, segundo a qual ΔH:", options: ["Depende do caminho percorrido", "Independe do caminho, só dos estados inicial e final", "É sempre negativo em qualquer processo", "É zero em reações espontâneas"], correct: 1, explain: "Entalpia é função de estado: só importam os estados inicial e final." },
    { q: "Para prever se uma reação ocorre espontaneamente, os químicos combinam entalpia (ΔH) e entropia (ΔS) em uma única grandeza chamada energia livre de Gibbs. A expressão que define essa grandeza é:", options: ["ΔG = ΔH + TΔS", "ΔG = ΔH − TΔS", "ΔG = TΔS − ΔH", "ΔG = ΔH × ΔS"], correct: 1, explain: "ΔG = ΔH − TΔS. Se ΔG < 0, a reação é espontânea." },
    { q: "Ao dissolver açúcar em água, as moléculas passam de um estado organizado (cristal) para um estado disperso (solução), aumentando a desorganização do sistema. Essa medida do grau de desordem microscópica é chamada:", options: ["Entalpia (H)", "Entropia (S)", "Calor específico (c)", "Massa molar (M)"], correct: 1, explain: "Entropia (S) mede o grau de desordem/multiplicidade de estados do sistema." },
    { q: "A oxidação do ferro (formação da ferrugem) ocorre naturalmente ao longo do tempo, sem necessidade de fornecimento contínuo de energia. Do ponto de vista termodinâmico, uma reação é considerada espontânea quando:", options: ["ΔG > 0", "ΔG = 0 (equilíbrio)", "ΔG < 0", "ΔH > 0 obrigatoriamente"], correct: 2, explain: "ΔG < 0 indica processo espontâneo em condições dadas." },
  ],
  cinetica: [
    { q: "Alimentos guardados na geladeira estragam muito mais lentamente do que fora dela. Isso ocorre porque a velocidade das reações de decomposição depende fortemente da temperatura. De modo geral, a velocidade de uma reação aumenta com:", options: ["A diminuição da temperatura", "O aumento da temperatura", "A retirada do catalisador", "A redução da concentração dos reagentes"], correct: 1, explain: "Mais temperatura ⇒ mais colisões efetivas ⇒ maior velocidade (Arrhenius)." },
    { q: "Os conversores catalíticos dos automóveis contêm platina e paládio, que aceleram a transformação de gases poluentes sem serem consumidos no processo. Esse comportamento é típico de um catalisador, que atua:", options: ["Aumentando o ΔH da reação", "Diminuindo a energia de ativação (Ea)", "Deslocando o equilíbrio para produtos", "Sendo consumido junto com os reagentes"], correct: 1, explain: "Catalisador oferece caminho alternativo com menor Ea, sem alterar ΔH." },
    { q: "Ao estudar a velocidade de uma reação, um pesquisador varia as concentrações dos reagentes e mede como isso afeta a rapidez do processo. A ordem de uma reação, que aparece na lei de velocidade, é obtida:", options: ["Diretamente pelos coeficientes da equação balanceada", "Experimentalmente, por medidas de velocidade", "Pelo ΔH da reação", "Pela massa total dos reagentes"], correct: 1, explain: "A ordem só pode ser determinada por dados experimentais, não pela estequiometria." },
    { q: "Em uma reação simples onde a velocidade dobra sempre que a concentração de A dobra, dizemos que se trata de uma reação de primeira ordem em relação a A. Nesse caso, a lei de velocidade é proporcional a:", options: ["[A]⁰", "[A]¹", "[A]²", "[A][B]"], correct: 1, explain: "Reação de 1ª ordem em A: v = k[A]¹ = k[A]." },
    { q: "Para uma reação ocorrer, as moléculas precisam colidir com energia mínima suficiente para romper ligações antigas e formar novas. Essa energia mínima é chamada energia de ativação (Ea) e representa:", options: ["A energia total liberada pela reação", "A barreira energética que as colisões precisam superar", "A massa dos reagentes envolvidos", "O volume final do sistema"], correct: 1, explain: "Ea é a barreira energética; sem alcançá-la, a colisão não gera reação." },
  ],
  equilibrio: [
    { q: "Em um sistema fechado, após certo tempo, a reação direta e a reação inversa ocorrem simultaneamente sem alterar as concentrações macroscópicas. Esse estado é chamado equilíbrio químico e nele:", options: ["A velocidade direta é maior que a inversa", "A velocidade inversa é maior que a direta", "As velocidades direta e inversa se igualam", "Ambas as velocidades se tornam nulas"], correct: 2, explain: "Equilíbrio dinâmico: v_direta = v_inversa, concentrações permanecem constantes." },
    { q: "Quando um sistema em equilíbrio sofre alteração de temperatura, pressão ou concentração, ele se ajusta para minimizar a perturbação sofrida. Esse comportamento é descrito pelo Princípio de Le Chatelier, segundo o qual o sistema:", options: ["Ignora qualquer perturbação externa", "Reage no sentido que minimiza a perturbação", "Sempre explode ao ser perturbado", "Permanece em repouso absoluto"], correct: 1, explain: "Le Chatelier: perturbou, o equilíbrio desloca para reduzir o efeito da perturbação." },
    { q: "Considere a reação gasosa N₂ + 3H₂ ⇌ 2NH₃, na qual há 4 mols de gás nos reagentes e apenas 2 nos produtos. Ao aumentar a pressão total do sistema, o equilíbrio se desloca para o lado com:", options: ["Maior número de mols de gás", "Menor número de mols de gás", "Igual número de mols", "Nenhum efeito ocorre"], correct: 1, explain: "Aumento de pressão desloca para o lado com menos mols gasosos (menor volume)." },
    { q: "A constante de equilíbrio Kc é utilizada para prever a extensão de uma reação em determinadas condições. Ela é afetada por poucas variáveis — na verdade, seu valor numérico depende apenas:", options: ["Das concentrações iniciais dos reagentes", "Somente da temperatura", "Da pressão total do sistema", "Do volume do recipiente"], correct: 1, explain: "Kc só muda quando a temperatura muda; concentrações e pressão não alteram Kc." },
    { q: "Ao adicionar um catalisador a um sistema em equilíbrio, muitas pessoas acham que a reação será deslocada para produtos. Na verdade, o catalisador acelera igualmente as reações direta e inversa, de modo que:", options: ["Desloca o equilíbrio para produtos", "Desloca o equilíbrio para reagentes", "Não desloca o equilíbrio; apenas acelera atingi-lo", "Aumenta o valor de Kc"], correct: 2, explain: "Catalisador não altera Kc nem a posição do equilíbrio; só reduz o tempo para atingi-lo." },
  ],
  solucoes: [
    { q: "Ao preparar uma solução no laboratório, o químico dissolve 0,5 mol de NaCl em água suficiente para completar 1 litro de solução. A grandeza que expressa essa proporção — mols de soluto por litro de solução — é chamada molaridade e definida como:", options: ["mol de soluto / L de solvente", "mol de soluto / L de solução", "g de soluto / L de solução", "g de soluto / kg de solvente"], correct: 1, explain: "M = n_soluto / V_solução(L). Aqui: 0,5/1 = 0,5 mol/L." },
    { q: "Para diluir uma solução concentrada, adiciona-se solvente sem alterar a quantidade de soluto. Como o número de mols de soluto se conserva antes e depois da diluição, vale a relação:", options: ["C₁V₁ = C₂V₂", "C₁ + C₂ = V₁ + V₂", "C₁/V₁ = C₂/V₂", "C₁V₂ = C₂V₁"], correct: 0, explain: "n permanece constante ⇒ C₁V₁ = C₂V₂ (fórmula da diluição)." },
    { q: "Ao colocar uma célula vegetal em água pura, ela incha porque a água atravessa a membrana em direção ao interior mais concentrado. Esse movimento espontâneo de solvente através de uma membrana semipermeável é chamado:", options: ["Difusão de soluto do meio diluído para o concentrado", "Osmose: solvente do meio diluído para o concentrado", "Movimento iônico para equilibrar cargas elétricas", "Passagem de gás através da membrana"], correct: 1, explain: "Osmose: solvente vai do meio de menor concentração para o de maior." },
    { q: "As propriedades coligativas dependem do número de partículas dissolvidas e não da natureza do soluto. Entre as alternativas abaixo, a única que NÃO é uma propriedade coligativa é:", options: ["Tonoscopia (redução da pressão de vapor)", "Ebulioscopia (elevação do ponto de ebulição)", "Densidade da solução", "Osmose (pressão osmótica)"], correct: 2, explain: "Densidade não depende do número de partículas dissolvidas; não é coligativa." },
    { q: "Em uma dada temperatura, existe uma quantidade máxima de soluto que pode ser dissolvida em determinado volume de solvente sem formar precipitado. Quando a solução atinge exatamente esse limite, ela é chamada:", options: ["Insaturada (contém menos que o máximo)", "Saturada (contém a quantidade máxima solúvel)", "Supersaturada (contém mais que o máximo)", "Diluída (contém quase nada de soluto)"], correct: 1, explain: "Solução saturada: atingiu o coeficiente de solubilidade (Cs)." },
  ],
  eletro: [
    { q: "Na pilha de Daniell, o zinco metálico perde elétrons e forma íons Zn²⁺, enquanto os íons Cu²⁺ ganham elétrons no outro eletrodo. O eletrodo onde ocorre a perda de elétrons (oxidação) é sempre chamado:", options: ["Cátodo (polo positivo)", "Ânodo (polo negativo na pilha)", "Eletrólito", "Fio externo"], correct: 1, explain: "Na pilha: ânodo = oxidação (polo −); cátodo = redução (polo +)." },
    { q: "Ao balancear reações de oxirredução, é essencial conhecer o número de oxidação (Nox) dos elementos. Na maioria dos compostos comuns, como H₂O, CO₂ e óxidos, o oxigênio apresenta Nox igual a:", options: ["+2", "0 (substância simples)", "−2", "+1"], correct: 2, explain: "Nox do O normalmente é −2 (exceto peróxidos: −1; superóxidos: −½; OF₂: +2)." },
    { q: "A galvanoplastia, usada para revestir peças metálicas com uma camada de outro metal (banho de ouro, cromagem), é possível graças a um processo que utiliza corrente elétrica para forçar uma reação química não espontânea. Esse processo é chamado eletrólise e é caracterizado por ser:", options: ["Espontâneo, gerando energia elétrica", "Não espontâneo, requerendo energia elétrica externa", "Sem transferência de elétrons entre espécies", "Ocorrer apenas com gases"], correct: 1, explain: "Eletrólise: reação não espontânea forçada pela corrente elétrica (ΔG > 0)." },
    { q: "A diferença de potencial padrão (E°) de uma pilha permite prever se ela funcionará de forma espontânea. Pela relação ΔG° = −nFE°, uma pilha apresenta ddp padrão positiva quando:", options: ["A reação global é espontânea (ΔG° < 0)", "A reação global é não espontânea (ΔG° > 0)", "ΔG° é igual a zero (equilíbrio)", "O Nox não sofre variação"], correct: 0, explain: "E° > 0 ⇒ ΔG° < 0 ⇒ processo espontâneo (pilha funciona)." },
    { q: "Em reações de oxirredução, uma espécie química sempre perde elétrons enquanto outra ganha. Sofrer redução, apesar do nome, significa que o elemento diminui seu Nox porque:", options: ["Perde elétrons", "Ganha elétrons", "Perde prótons", "Ganha nêutrons"], correct: 1, explain: "Redução = ganho de elétrons; Nox diminui (fica mais negativo)." },
  ],
  organica: [
    { q: "O petróleo, o gás natural e a parafina das velas são compostos formados exclusivamente por dois elementos químicos. Essa classe de substâncias, base da Química Orgânica, é chamada de hidrocarbonetos e é constituída apenas por:", options: ["Carbono e nitrogênio", "Carbono e hidrogênio", "Carbono e oxigênio", "Carbono, hidrogênio e enxofre"], correct: 1, explain: "Hidrocarbonetos: só C e H (ex.: metano, etano, benzeno, octano)." },
    { q: "O etanol das bebidas e o metanol dos combustíveis pertencem à função álcool, caracterizada por um grupo funcional específico. Essa função apresenta o grupo:", options: ["−COOH (carboxila, dos ácidos)", "−OH ligado a carbono saturado (hidroxila)", "−CHO (aldeído)", "−NH₂ (amina)"], correct: 1, explain: "Álcool = −OH ligado a carbono sp³ saturado." },
    { q: "Os alcanos formam a série do metano, etano, propano, butano, etc., todos com cadeias abertas e apenas ligações simples entre os carbonos. A fórmula geral que representa toda essa família é:", options: ["CₙH₂ₙ (alcenos)", "CₙH₂ₙ₊₂", "CₙH₂ₙ₋₂ (alcinos)", "CₙHₙ"], correct: 1, explain: "Alcanos: CₙH₂ₙ₊₂ (ex.: C₂H₆, C₃H₈, C₄H₁₀)." },
    { q: "O butano (C₄H₁₀) pode aparecer como n-butano (cadeia linear) ou isobutano (cadeia ramificada), com propriedades físicas diferentes apesar da mesma fórmula molecular. Esse fenômeno é a isomeria de cadeia, que diferencia compostos com:", options: ["Diferentes funções orgânicas", "Diferentes disposições da cadeia carbônica", "Diferentes números atômicos", "Diferentes massas atômicas dos elementos"], correct: 1, explain: "Isomeria de cadeia: mesma fórmula molecular, cadeias com formatos distintos." },
    { q: "O benzeno (C₆H₆) apresenta um anel de seis carbonos com elétrons π deslocalizados, o que lhe confere estabilidade especial e reatividade típica. Ele é o representante clássico dos compostos:", options: ["Alifáticos de cadeia aberta", "Aromáticos", "Alicíclicos saturados", "Iônicos"], correct: 1, explain: "Benzeno é o composto aromático por excelência (regra de Hückel: 6 elétrons π)." },
  ],
  nuclear: [
    { q: "Alguns núcleos instáveis emitem partículas pesadas, formadas por 2 prótons e 2 nêutrons, iguais ao núcleo do átomo de hélio. Esse tipo de emissão, com baixo poder de penetração mas alto poder ionizante, é chamada radiação:", options: ["Beta (elétron rápido)", "Alfa (núcleo de He, ²He⁴)", "Gama (fóton)", "Nêutron livre"], correct: 1, explain: "Partícula α = ²He⁴: 2 prótons + 2 nêutrons." },
    { q: "Ao estudar a datação por carbono-14, os cientistas usam a ideia de que metade dos núcleos radioativos decaem em um intervalo característico e previsível. Esse intervalo é chamado meia-vida e representa o tempo necessário para:", options: ["Todo o material radioativo decair", "Metade dos núcleos existentes decair", "A massa da amostra dobrar", "Uma amostra emitir apenas 1 fóton"], correct: 1, explain: "Meia-vida (t½): tempo para a amostra reduzir à metade." },
    { q: "Nas usinas nucleares atuais, a energia é obtida quando núcleos pesados de urânio-235 se quebram em fragmentos menores após absorverem nêutrons. Esse processo, que libera enorme quantidade de energia, é chamado:", options: ["Fusão nuclear (junção de núcleos leves)", "Fissão nuclear (quebra de núcleo pesado)", "Mudança de camada eletrônica", "Formação de íon"], correct: 1, explain: "Fissão: núcleo pesado se divide em dois menores + nêutrons + energia." },
    { q: "No interior do Sol e das demais estrelas, núcleos leves de hidrogênio se combinam para formar hélio, liberando enorme quantidade de energia na forma de luz e calor. Esse processo é chamado:", options: ["Fissão nuclear (base dos reatores atuais)", "Fusão nuclear (base das estrelas e do Sol)", "Reação química comum", "Simples aquecimento elétrico"], correct: 1, explain: "Fusão: núcleos leves se unem, liberando energia; ocorre no Sol." },
    { q: "Além das partículas alfa e beta, muitos núcleos radioativos emitem radiação de altíssima frequência e enorme poder de penetração, sem carga elétrica nem massa. Esse tipo de radiação é a gama (γ), classificada como:", options: ["Partícula massiva carregada positivamente", "Onda eletromagnética de alta energia (fóton)", "Elétron de alta velocidade", "Próton livre no espaço"], correct: 1, explain: "γ = radiação eletromagnética; fóton sem carga nem massa, muito penetrante." },
  ],
  gases: [
    { q: "Para descrever o comportamento de um gás em condições próximas às ideais, os químicos utilizam uma equação que relaciona pressão, volume, temperatura e quantidade de matéria. Essa equação de estado dos gases ideais é:", options: ["PV = nRT (Clapeyron)", "PV = nR/T", "P/V = nRT", "PV² = nRT"], correct: 0, explain: "Equação de Clapeyron: PV = nRT." },
    { q: "Um balão de gás mantido a pressão constante é aquecido de 300 K até 600 K, ou seja, a temperatura absoluta dobra. Segundo a Lei de Charles, se a temperatura dobra a pressão constante, o volume do gás:", options: ["Dobra", "Reduz à metade", "Não sofre alteração", "Quadruplica"], correct: 0, explain: "Lei de Charles: V/T = constante ⇒ V ∝ T (a P constante)." },
    { q: "Nas condições normais de temperatura e pressão (0 °C e 1 atm), qualquer gás considerado ideal ocupa sempre o mesmo volume por mol. Esse volume molar padrão vale aproximadamente:", options: ["11,2 L", "22,4 L", "24,5 L (CATP)", "1 L"], correct: 1, explain: "CNTP: V_molar = 22,4 L/mol para gás ideal." },
    { q: "Ao comprimir uma seringa fechada mantendo a temperatura constante, observa-se que o volume do ar diminui à medida que a pressão aumenta. Essa relação inversa entre P e V a temperatura constante é a Lei de Boyle, expressa por:", options: ["V ∝ T", "P ∝ n", "P·V = constante", "P/T = constante"], correct: 2, explain: "Lei de Boyle (T constante): P₁V₁ = P₂V₂." },
    { q: "Na equação dos gases ideais PV = nRT, a constante universal R possui valores diferentes conforme as unidades escolhidas. Quando P está em atm, V em litros e T em kelvin, R vale aproximadamente:", options: ["0,082 atm·L/(mol·K)", "8,31 atm·L/(mol·K)", "22,4 mol/L", "6,02 × 10²³ mol⁻¹"], correct: 0, explain: "R = 0,082 atm·L·mol⁻¹·K⁻¹ (ou 8,314 J·mol⁻¹·K⁻¹ em SI)." },
  ],
  materia: [
    { q: "Ao dissolver açúcar em água, obtém-se um líquido transparente onde não é possível distinguir a olho nu (nem no microscópio comum) as duas substâncias. Esse tipo de sistema, com aspecto uniforme em toda a extensão, é uma mistura homogênea que apresenta:", options: ["Duas ou mais fases distintas", "Uma única fase visível (solução)", "Composição variável em cada ponto", "Somente substâncias puras separadas"], correct: 1, explain: "Mistura homogênea = uma só fase (também chamada solução)." },
    { q: "Ao aquecer um cubo de gelo até 0 °C, ele começa a se transformar em água líquida sem mudar sua composição química. Essa passagem do estado sólido para o líquido é chamada:", options: ["Fusão (sólido → líquido)", "Vaporização (líquido → gás)", "Ressublimação (gás → sólido)", "Sublimação (sólido → gás)"], correct: 0, explain: "Fusão: sólido → líquido (o gelo derretendo em água)." },
    { q: "Para comparar quanta matéria existe em um determinado volume, os químicos usam uma grandeza física característica de cada substância. A densidade é definida como a razão entre:", options: ["Massa e volume: d = m/V", "Volume e massa: d = V/m", "Massa multiplicada pelo volume", "Massa menos volume"], correct: 0, explain: "d = m/V (unidade típica: g/cm³ ou kg/m³)." },
    { q: "Diferente das misturas, uma substância pura apresenta composição fixa e propriedades constantes em condições padrão, como ponto de fusão e de ebulição bem definidos. Isso permite afirmar que uma substância pura tem:", options: ["Composição variável ao longo do tempo", "Ponto de fusão definido e constante", "Sempre duas ou mais fases", "Nenhuma propriedade específica identificável"], correct: 1, explain: "Substância pura: PF, PE e densidade constantes e específicas." },
    { q: "Para separar areia da água em um copo, basta esperar a areia se depositar no fundo e verter o líquido cuidadosamente. Esse método simples de separação é chamado decantação e é útil para:", options: ["Separar dois líquidos totalmente miscíveis", "Separar sólido de líquido em suspensão (ou líquidos imiscíveis)", "Separar gás dissolvido em líquido", "Separar íons dissolvidos em solução"], correct: 1, explain: "Decantação: mistura heterogênea sólido-líquido ou líquido-líquido imiscíveis." },
  ],
  cotidiano: [
    { q: "O bicarbonato de sódio (NaHCO₃) é usado como antiácido estomacal e fermento químico em bolos, ajudando a neutralizar acidez. Em solução aquosa, ele apresenta caráter:", options: ["Fortemente ácido (pH < 3)", "Levemente básico (pH ~ 8-9)", "Perfeitamente neutro (pH = 7)", "Fortemente básico (pH > 13)"], correct: 1, explain: "NaHCO₃ hidrolisa formando OH⁻ moderadamente: solução levemente básica." },
    { q: "O metano (CH₄) é o principal componente do gás natural usado em fogões domésticos. Quando queima em presença de oxigênio suficiente, sua combustão completa gera dois produtos principais:", options: ["CO (monóxido) + H₂O", "CO₂ + H₂O", "C (fuligem) + H₂", "NO₂ + H₂O"], correct: 1, explain: "Combustão completa: CH₄ + 2O₂ → CO₂ + 2H₂O." },
    { q: "O vinagre usado na cozinha tem sabor azedo característico e é uma solução aquosa diluída (4-8%) de um ácido orgânico específico. Esse ácido é o:", options: ["Ácido cítrico (das frutas cítricas)", "Ácido acético (CH₃COOH)", "Ácido sulfúrico (das baterias)", "Ácido clorídrico (do estômago)"], correct: 1, explain: "Vinagre = solução aquosa de ácido acético (CH₃COOH)." },
    { q: "Quando um portão de ferro fica exposto à umidade e ao ar durante muito tempo, ele adquire uma camada avermelhada de óxido hidratado — a ferrugem. Do ponto de vista químico, essa transformação corresponde a uma:", options: ["Redução do ferro (ganho de elétrons)", "Oxidação do ferro (perda de elétrons)", "Fusão do ferro por altas temperaturas", "Sublimação direta do metal"], correct: 1, explain: "Fe⁰ → Fe³⁺ perdendo elétrons: oxidação, formando Fe₂O₃·xH₂O." },
    { q: "Os sabões e detergentes conseguem remover gordura da louça porque suas moléculas têm uma parte que interage com a água e outra com a gordura, formando micelas. Essa propriedade é típica de substâncias tensoativas, que:", options: ["Aquecem a água durante o uso", "Possuem uma parte polar e outra apolar (anfifílicas)", "São ácidos fortes que dissolvem gordura", "Fazem a gordura evaporar rapidamente"], correct: 1, explain: "Sabões: cauda apolar prende gordura, cabeça polar interage com água (micelas)." },
  ],
  geral: [
    { q: "Da produção de medicamentos aos plásticos, dos combustíveis aos alimentos, a Química está em praticamente tudo à nossa volta. Essa ciência é definida como o estudo:", options: ["Somente das reações realizadas em laboratório", "Da composição, estrutura, propriedades e transformações da matéria", "Apenas dos metais e suas ligas", "Somente das substâncias orgânicas naturais"], correct: 1, explain: "Química estuda matéria e suas transformações (definição ampla)." },
    { q: "Antes de estudar suas transformações, é preciso definir o objeto de estudo da Química. De forma operacional, matéria é tudo aquilo que:", options: ["Emite luz visível", "Ocupa lugar no espaço (volume) e tem massa", "É invisível a olho nu", "Encontra-se no estado líquido"], correct: 1, explain: "Matéria = tudo que tem massa e ocupa espaço." },
    { q: "Ao observar a tabela periódica, cada quadradinho representa um elemento químico único, identificado por um número específico que não pode ser alterado. Esse número, que define a identidade do elemento, é o:", options: ["Número de massa (A)", "Número atômico (Z, quantidade de prótons)", "Número de nêutrons no núcleo", "Estado físico da substância"], correct: 1, explain: "Cada Z corresponde a um único elemento (define a identidade química)." },
    { q: "As substâncias puras podem ser classificadas em dois grandes grupos, dependendo se são formadas por um único tipo de elemento ou por vários elementos combinados. Assim, uma substância pura pode ser:", options: ["Simples (ex.: O₂) ou composta (ex.: H₂O)", "Apenas simples, nunca composta", "Apenas composta, nunca simples", "Sempre uma mistura de outras"], correct: 0, explain: "Substância simples: um só elemento. Composta: dois ou mais elementos combinados." },
    { q: "No Sistema Internacional de Unidades (SI), cada grandeza física tem sua unidade oficial. Para expressar a quantidade de matéria (número de entidades como átomos ou moléculas), a unidade adotada é o:", options: ["grama (g)", "litro (L)", "mol", "átomo"], correct: 2, explain: "1 mol = 6,022 × 10²³ entidades (constante de Avogadro)." },
  ],
};

export { BANK };
export type { Q };
export function pickQuestions(category: string, seedStr: string, n = 5): Q[] {
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

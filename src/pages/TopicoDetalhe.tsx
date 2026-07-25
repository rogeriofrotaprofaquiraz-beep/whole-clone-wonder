import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  ArrowLeft, BookOpen, Lightbulb, FlaskConical, Sparkles, GraduationCap,
  Atom, Library, Target, Sigma, AlertTriangle, Pencil, Save, RotateCcw, Trash2,
  Video, Paperclip, Upload, ExternalLink, Home, Smile, FileText, Wand2, Tag,
} from "lucide-react";
import LockedQuiz from "@/components/LockedQuiz";
import EditableImage from "@/components/EditableImage";


type BnccCode = { code: string; label: string; type: "BNCC" | "BNCC_DIGITAL" };

/* Imagem contextual — mapa curado de figuras/temas + fallback único por seed */
const IMG_STOP = new Set(["de","da","do","dos","das","a","o","os","as","e","é","um","uma","que","por","para","com","em","no","na","nos","nas","ao","à","às","se","ou","the","of","and","to","in","on","uns","umas","sem","sob","sobre","como","mais","menos","muito","pouco","este","esta","isso","essa","esse","seus","suas","sua","seu","entre"]);
const CURATED: Array<[RegExp, string]> = [
  [/alquimia|alchem/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Joseph_Wright_of_Derby_The_Alchemist.jpg/800px-Joseph_Wright_of_Derby_The_Alchemist.jpg"],
  [/lavoisier/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg/800px-David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg"],
  [/dalton/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Dalton_John_desk.jpg/600px-Dalton_John_desk.jpg"],
  [/mendele/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Dmitri_Mendeleev_1897.jpg/600px-Dmitri_Mendeleev_1897.jpg"],
  [/bohr/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Niels_Bohr.jpg/600px-Niels_Bohr.jpg"],
  [/rutherford/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Ernest_Rutherford_1908.jpg/600px-Ernest_Rutherford_1908.jpg"],
  [/thomson/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/J.J_Thomson.jpg/600px-J.J_Thomson.jpg"],
  [/einstein/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/600px-Albert_Einstein_Head.jpg"],
  [/curie/i, "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c._1920s.jpg/600px-Marie_Curie_c._1920s.jpg"],
  [/atomo|átomo|atom/i, "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800"],
  [/molécul|molecul/i, "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?w=800"],
  [/tabela.*peri|periodic/i, "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800"],
  [/reaç|reaction/i, "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800"],
  [/laborat/i, "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800"],
  [/eletr|electron/i, "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"],
  [/gas|gás|gases/i, "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800"],
  [/ácido|acido|acid|base|ph/i, "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=800"],
  [/quimic|química|chem/i, "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800"],
];
function imageKeywords(text: string): string {
  const words = (text || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter((w) => w.length > 3 && !IMG_STOP.has(w));
  const pick = words.slice(0, 3).join(",");
  return (pick || "chemistry") + ",chemistry,science,laboratory";
}
function topicImage(text: string, w = 480, h = 260): string {
  const s = text || "chem";
  for (const [rx, url] of CURATED) if (rx.test(s)) return url;
  let h1 = 0;
  for (let i = 0; i < s.length; i++) h1 = ((h1 << 5) - h1 + s.charCodeAt(i)) | 0;
  const seed = Math.abs(h1);
  // Picsum garante imagem única e sempre disponível por seed (fallback confiável)
  return `https://picsum.photos/seed/${seed}-${encodeURIComponent(s.slice(0, 24))}/${w}/${h}`;
}

/* Conteúdo extra por categoria: aplicação no cotidiano, curiosidades e fatos engraçados */
type FunPack = { dailyLife: string[]; curiosities: string[]; funFacts: string[] };
function funContent(title: string): FunPack {
  const cat = classify(title);
  const generic: FunPack = {
    dailyLife: [
      `Escovar os dentes envolve química: o flúor da pasta reage com o esmalte formando fluorapatita, mais resistente a ácidos.`,
      `Cozinhar arroz, fritar um ovo e assar um bolo são reações químicas controladas por temperatura, tempo e proporção.`,
      `Produtos de limpeza, cosméticos, remédios e alimentos industrializados só existem graças à ${title.toLowerCase()}.`,
    ],
    curiosities: [
      `A palavra “química” vem do árabe al-kīmiyā, herança dos alquimistas que buscavam transformar metais em ouro.`,
      `Cerca de 99% do corpo humano é feito de apenas 6 elementos: O, C, H, N, Ca e P.`,
      `Se juntássemos todos os átomos do seu corpo em fila, dariam várias voltas ao redor da Terra — eles são absurdamente pequenos.`,
    ],
    funFacts: [
      `Peidos são química pura: uma mistura de N₂, CO₂, H₂, CH₄ e H₂S (esse último é o fedorento — e inflamável!).`,
      `Se você espirrar, o ar sai a até 160 km/h carregando aerossóis com milhões de partículas — uma verdadeira “reação em cadeia”.`,
      `O cheiro de “chuva” tem nome científico: petricor, causado por moléculas chamadas geosmina liberadas pelo solo.`,
    ],
  };
  switch (cat) {
    case "atomo": return {
      dailyLife: [
        "Detectores de fumaça usam amerício-241 (radioativo) para perceber partículas de fumaça no ar.",
        "Lâmpadas fluorescentes e letreiros de neon funcionam com elétrons pulando entre níveis de energia.",
        "Ressonância magnética usa o spin de átomos de hidrogênio do seu corpo para gerar imagens médicas.",
      ],
      curiosities: [
        "Se o núcleo fosse do tamanho de uma bola de futebol, os elétrons estariam a alguns quilômetros de distância — o átomo é 99,9999% vácuo.",
        "Todo carbono do seu corpo já esteve dentro de uma estrela: fomos literalmente feitos de poeira estelar.",
        "Um único grama de hidrogênio contém cerca de 6×10²³ átomos — mais do que estrelas na Via Láctea.",
      ],
      funFacts: [
        "Se os átomos não se repelissem eletricamente, você atravessaria a cadeira ao se sentar. 'Sentar' é literalmente flutuar sobre elétrons.",
        "Você troca cerca de 98% dos seus átomos por ano. O 'você' de dois anos atrás é quase totalmente outra pessoa (atomicamente falando).",
        "Rutherford disparou partículas alfa numa folha de ouro esperando que passassem — quando algumas ricochetearam, disse que era 'como atirar num lenço de papel e a bala voltar'.",
      ],
    };
    case "periodica": return {
      dailyLife: [
        "O sal de cozinha (NaCl) junta um metal explosivo (Na) e um gás venenoso (Cl) — juntos, tempero indispensável.",
        "Baterias de celular usam lítio; fios elétricos, cobre; latas, alumínio; joias, ouro e prata.",
        "Lâmpadas de vapor de sódio (luz amarela das ruas) e de mercúrio existem por causa das propriedades periódicas.",
      ],
      curiosities: [
        "Mendeleev deixou 'buracos' na tabela e previu elementos que ainda não existiam — todos foram descobertos depois, como previsto.",
        "O elemento mais caro do mundo é o califórnio-252: cerca de US$ 27 milhões por grama.",
        "O francium é tão raro que se estima existirem menos de 30 gramas dele em toda a crosta terrestre ao mesmo tempo.",
      ],
      funFacts: [
        "Gálio derrete na sua mão (29 °C). Fazer 'colheres desaparecerem no chá' era pegadinha clássica de químicos.",
        "O elemento 118, oganessônio, existiu por menos de um milissegundo — e ainda ganhou nome oficial.",
        "Se você comer uma banana, ingere potássio-40 radioativo. Sim, banana é levemente radioativa (e totalmente segura).",
      ],
    };
    case "ligacoes": return {
      dailyLife: [
        "Água molha porque suas moléculas fazem ligações de hidrogênio com quase tudo — inclusive com sua pele.",
        "Panela antiaderente (teflon) tem ligações C–F tão fortes que quase nada gruda nela.",
        "Cola, esparadrapo e post-it funcionam com forças intermoleculares fracas (van der Waals).",
      ],
      curiosities: [
        "A lagartixa anda no teto graças a bilhões de forças de van der Waals entre pelos microscópicos das patas e a parede.",
        "O diamante é o mesmo elemento (C) do grafite do lápis — o que muda é só o tipo de ligação.",
        "A seda de aranha, feita de ligações de hidrogênio, é mais resistente que o aço na mesma espessura.",
      ],
      funFacts: [
        "Sem ligações de hidrogênio, a água ferveria a −80 °C e você não existiria. Obrigado, pontes de hidrogênio.",
        "Cheirar cola faz mal justamente porque moléculas apolares se dissolvem na gordura do cérebro. Não faça isso.",
        "O gelo flutua porque a água sólida é MENOS densa que a líquida — uma das poucas substâncias assim. Peixes agradecem no inverno.",
      ],
    };
    case "reacoes": return {
      dailyLife: [
        "O fermento faz o pão crescer liberando CO₂ (reação de fermentação).",
        "Ferrugem no portão é uma reação de oxidação lenta do ferro com O₂ e água.",
        "Fogos de artifício coloridos são reações químicas de sais metálicos: Sr (vermelho), Ba (verde), Cu (azul).",
      ],
      curiosities: [
        "A reação Belousov-Zhabotinsky muda de cor sozinha, indo e voltando por minutos — parece mágica, é só química oscilante.",
        "A luz dos vaga-lumes vem de uma reação com quase 100% de eficiência (a lâmpada incandescente tem só ~5%).",
        "Uma única reação de fusão nuclear no Sol dura em média 10 bilhões de anos para cada átomo de hidrogênio.",
      ],
      funFacts: [
        "Misturar Mentos com Coca gera um gêiser não por reação química, mas pela textura porosa da bala liberando o CO₂ dissolvido.",
        "O nitrogênio tri-iodeto (NI₃) é tão instável que explode se uma mosca pousar nele.",
        "Se você arrotar depois de tomar refrigerante, é literalmente uma reação de descompressão de CO₂ acontecendo em você.",
      ],
    };
    case "acidobase": return {
      dailyLife: [
        "Antiácidos (Sonrisal, leite de magnésia) neutralizam o HCl do estômago.",
        "Sabão em pó é básico; produtos para desentupir pia (soda cáustica) têm pH próximo de 14.",
        "Vinagre (ácido acético) tira mancha de calcário; suco de limão clareia frutas cortadas (retarda oxidação).",
      ],
      curiosities: [
        "O ácido mais forte conhecido é o ácido fluoroantimônico (H₂FSbF₆), 10¹⁶ vezes mais forte que o ácido sulfúrico puro.",
        "O sangue humano tem um sistema tampão tão preciso que uma variação de 0,4 no pH já pode ser fatal.",
        "A picada da formiga contém ácido fórmico — o mesmo que dá o cheiro característico das colônias.",
      ],
      funFacts: [
        "Cuspir muito é básico: a saliva ajuda a neutralizar ácidos que corroem os dentes. Beijos são higiene química.",
        "O 'ácido' dos filmes que dissolve pessoas em segundos não existe. HF ataca ossos, mas leva horas — e não faz fumaça verde.",
        "Suco gástrico é mais ácido que suco de limão. Seu estômago só não se digere porque troca a mucosa a cada 3 dias.",
      ],
    };
    case "termo": return {
      dailyLife: [
        "Bolsa térmica instantânea (gelada) usa dissolução endotérmica de nitrato de amônio em água.",
        "Aquecedor de mão químico usa oxidação de ferro em pó — libera calor por horas.",
        "Geladeira 'expulsa' calor de dentro para fora usando ciclos de compressão/expansão de gases.",
      ],
      curiosities: [
        "O zero absoluto (−273,15 °C) nunca foi atingido — só chegamos a bilionésimos de grau acima dele.",
        "Um raio aquece o ar a ~30.000 °C, cinco vezes a temperatura da superfície do Sol.",
        "A entropia do universo só aumenta — é a única lei da física com 'seta do tempo'.",
      ],
      funFacts: [
        "Se você deixar seu quarto bagunçado, está obedecendo à 2ª Lei da Termodinâmica. Culpe a entropia.",
        "Café esfria mais rápido se você colocar o leite depois — física + termodinâmica ganhando de superstição.",
        "Um humano em repouso libera cerca de 100 W de calor — quase uma lâmpada antiga. Salas cheias esquentam mesmo!",
      ],
    };
    case "cinetica": return {
      dailyLife: [
        "Geladeira desacelera reações de deterioração dos alimentos (menor T = menor velocidade).",
        "Panela de pressão cozinha mais rápido: maior T eleva a velocidade da reação.",
        "Catalisadores de carros transformam gases tóxicos em CO₂, N₂ e H₂O em milésimos de segundo.",
      ],
      curiosities: [
        "Enzimas do seu corpo aceleram reações em até 10¹⁷ vezes — sem elas, digerir uma refeição levaria anos.",
        "A explosão de uma bomba envolve reações que se completam em microssegundos.",
        "A borracha do pneu envelhece por reações de oxidação lentas — daí a data de validade dos pneus.",
      ],
      funFacts: [
        "Se catalisadores fossem pessoas, seriam aqueles amigos que 'fazem as coisas acontecerem' sem se envolverem.",
        "O sabor 'queimado' do café passado do ponto é cinética química: você deixou a reação de Maillard passar do ideal.",
        "Cabelo cresce cerca de 0,3 mm por dia — reação bioquímica lentíssima que a gente só nota no espelho.",
      ],
    };
    case "equilibrio": return {
      dailyLife: [
        "Refrigerante fechado está em equilíbrio: CO₂ dissolvido ⇌ CO₂ gasoso. Abrir a garrafa desloca o equilíbrio.",
        "Hemoglobina no sangue 'pega' e 'solta' O₂ conforme o equilíbrio nos tecidos.",
        "Fabricação de amônia (Haber-Bosch) alimenta metade do planeta ajustando pressão e temperatura do equilíbrio.",
      ],
      curiosities: [
        "Le Chatelier percebeu o princípio observando ferro sendo forjado — a química imita a preguiça: reage para 'compensar' o incômodo.",
        "Cavernas com estalactites são equilíbrios de carbonato de cálcio ao longo de milênios.",
        "O CO₂ oceânico está em equilíbrio com o atmosférico — por isso o oceano está ficando mais ácido.",
      ],
      funFacts: [
        "Se você agita uma latinha de refrigerante, muda o equilíbrio e recebe um banho. Física, química e vergonha alheia juntas.",
        "Casais também vivem em equilíbrio dinâmico: pressão de um lado desloca o outro. Le Chatelier explica.",
        "Toda vez que você respira, seu sangue reajusta um equilíbrio químico. Você é uma reação viva.",
      ],
    };
    case "solucoes": return {
      dailyLife: [
        "Soro fisiológico (0,9% NaCl) tem a mesma concentração do sangue — por isso não 'estoura' as células.",
        "Sal na estrada em países frios abaixa a temperatura de congelamento da água (efeito coligativo).",
        "Doce de leite cozinha mais quente porque o açúcar eleva o ponto de ebulição da mistura.",
      ],
      curiosities: [
        "A água do mar tem em média 35 g de sal por litro — se secasse toda, cobriria os continentes com 150 m de sal.",
        "Sangue e água do mar têm proporções de íons parecidas — herança da vida ter surgido no oceano.",
        "O Mar Morto é tão salgado (~34%) que você boia sem esforço nenhum.",
      ],
      funFacts: [
        "Colocar açúcar no café até 'não dissolver mais' é atingir a saturação. Ciência para justificar a gulodice.",
        "Se você chorar dentro do mar, teoricamente sua lágrima é MENOS salgada que a água ao redor.",
        "Água com gás é literalmente uma solução de CO₂ pressurizada. Você bebe uma reação química presa.",
      ],
    };
    case "eletro": return {
      dailyLife: [
        "Bateria do celular é uma pilha recarregável de íons de lítio.",
        "Galvanoplastia deposita ouro/prata em joias e cromo em para-choques.",
        "Corrosão de casco de navio é combatida com 'ânodos de sacrifício' de zinco.",
      ],
      curiosities: [
        "A primeira pilha (Volta, 1800) era feita de discos de zinco, cobre e panos molhados com salmoura.",
        "Enguias-elétricas produzem até 860 V — voltagem para acender lâmpadas.",
        "O corpo humano funciona a eletricidade: neurônios disparam a ~70 mV por diferenças iônicas.",
      ],
      funFacts: [
        "Se você lamber uma pilha de 9 V, sente um choque leve — sua língua fecha o circuito. Não recomendado (mas todo mundo já fez).",
        "Meias de lã no tapete carregam você com milhares de volts. Você vira uma 'pilha humana' antes de dar choque na maçaneta.",
        "O primeiro marca-passo funcionava com pilhas comuns e precisava ser trocado toda semana. Coitados dos pioneiros.",
      ],
    };
    case "organica": return {
      dailyLife: [
        "Plásticos (PET, PVC, PE), tecidos sintéticos (poliéster, nylon) e remédios são química orgânica.",
        "Gasolina, álcool e óleo diesel são misturas de hidrocarbonetos.",
        "Perfumes, cafeína, chocolate e vitaminas: tudo compostos orgânicos.",
      ],
      curiosities: [
        "O petróleo é fóssil de plâncton e algas que viveram há centenas de milhões de anos.",
        "A vanilina (essência de baunilha) já foi extraída de esgoto reciclado — quimicamente é a mesma molécula.",
        "Existem mais compostos orgânicos catalogados (>100 milhões) do que qualquer outra classe química.",
      ],
      funFacts: [
        "O cheiro de vitamina do complexo B na urina é enxofre + orgânica. Ciência: não é 'a urina forte', é a molécula.",
        "Capsaicina (pimenta) engana o cérebro fingindo ser calor. Você não está queimando — está sendo enganado quimicamente.",
        "O cheiro de 'livro velho' vem de compostos orgânicos voláteis liberados pela decomposição da celulose. É poesia molecular.",
      ],
    };
    case "nuclear": return {
      dailyLife: [
        "Radioterapia trata cânceres usando radiação gama controlada.",
        "Datação por C-14 revela a idade de fósseis e múmias.",
        "Cerca de 10% da eletricidade mundial vem de usinas nucleares.",
      ],
      curiosities: [
        "1 g de urânio-235 libera energia equivalente a 3 toneladas de carvão.",
        "A radiação de fundo natural é maior em Guarapari (RJ) que em Chernobyl, por causa da areia monazítica.",
        "O 'sabor de metal' de quem sofreu radiação vem de reações químicas no paladar induzidas pela ionização.",
      ],
      funFacts: [
        "Comer 1 banana te expõe a ~0,1 μSv de radiação. Existe até a 'unidade banana' (BED) usada informalmente por físicos.",
        "Dormir com alguém acrescenta radiação: dois corpos emitem K-40 mutuamente. Amor radioativo.",
        "Marie Curie ainda é tão radioativa que seus cadernos precisam ser guardados em caixas de chumbo — 90 anos depois.",
      ],
    };
    case "gases": return {
      dailyLife: [
        "Airbag infla em 30 ms com gás gerado pela decomposição de azida de sódio.",
        "Panela de pressão eleva a pressão dos gases internos, cozinhando mais rápido.",
        "Pneu murcho não é por 'perda de ar' — é pela diminuição da pressão dos gases dentro dele.",
      ],
      curiosities: [
        "A atmosfera tem 78% N₂, 21% O₂ e 1% de outros — proporção mantida por bilhões de anos pela vida.",
        "Um balão de hélio esvazia sozinho: o átomo é tão pequeno que atravessa a borracha.",
        "Ao afundar 10 m no mar, a pressão dobra — por isso mergulhadores usam misturas gasosas especiais.",
      ],
      funFacts: [
        "Inspirar hélio deixa a voz fina; inspirar hexafluoreto de enxofre deixa a voz grave. Física da acústica em gases.",
        "Um peido humano tem em média 100 mL de gás. Multiplique por 7 bilhões de pessoas por dia. Faça as contas.",
        "Se você prendesse a respiração dentro de um elevador em queda, ainda cairia. Boato antigo, química não salva.",
      ],
    };
    case "materia": return {
      dailyLife: [
        "Água mudando de estado: gelo, líquido, vapor — três exemplos que você vê todo dia.",
        "Separar café e água coado é filtração; destilar cachaça é separação por ebulição.",
        "Neblina é uma dispersão coloidal — pequenas gotas de água suspensas no ar.",
      ],
      curiosities: [
        "Existem 4 estados clássicos (sólido, líquido, gasoso, plasma) e outros exóticos: Bose-Einstein, supercrítico, superfluido.",
        "99% da matéria visível do universo está no estado de plasma (estrelas, nebulosas).",
        "Vidro parece sólido, mas tecnicamente é um líquido super-resfriado extremamente lento (debate ainda em curso).",
      ],
      funFacts: [
        "Gelo derrete embaixo do patim por pressão — é literalmente física de estado da matéria em ação.",
        "Se você congelar rápido demais, cria gelo com bolhas; devagar, cristal transparente. Bartenders sabem disso.",
        "Sublimação é o gelo virar vapor direto — como o 'gelo seco' de festa (que é CO₂ sólido, não H₂O).",
      ],
    };
    case "cotidiano": return {
      dailyLife: [
        "Sabão emulsiona a gordura da louça — uma ponta apolar 'gruda' na gordura, a outra polar dissolve na água.",
        "Refrigerantes são soluções ácidas (H₂CO₃) — por isso corroem esmalte dental se consumidos em excesso.",
        "Cozinhar em altitudes elevadas demora mais porque a água ferve abaixo de 100 °C.",
      ],
      curiosities: [
        "O cheiro de terra molhada tem nome: petricor, causado por geosmina liberada pelo solo.",
        "Cebola faz chorar porque libera gás sulfênico que reage com a água dos olhos formando ácido sulfúrico diluído.",
        "O 'bafo' de manhã é o resultado de bactérias fermentando restos noturnos.",
      ],
      funFacts: [
        "Chocolate derrete na boca porque tem ponto de fusão logo abaixo da T do corpo (35 °C). Engenharia química deliciosa.",
        "Pipoca estoura porque a água interna vira vapor a alta pressão. Cada milho é uma pequena panela de pressão.",
        "O sabor 'umami' foi descoberto no Japão em 1908 — é o 5º gosto oficial, causado pelo glutamato.",
      ],
    };
  }
  return generic;
}




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
          `${BOOKS[0].short}, boxes "Química na vida"`,
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

type ExampleScene =
  | "processedFood" | "pharmaLab" | "exam" | "archaeology" | "neon" | "mri"
  | "sodiumWater" | "balloon" | "salt" | "water" | "metal" | "flame"
  | "antacid" | "crops" | "stomach" | "blood" | "acidRain" | "coldPack"
  | "photosynthesis" | "enzyme" | "carCatalyst" | "fridge" | "factory" | "soda"
  | "oxygenBlood" | "saline" | "antifreeze" | "osmosis" | "battery" | "electrolysis"
  | "chrome" | "plastic" | "vinegar" | "glucose" | "nuclear" | "thyroid"
  | "airbag" | "tire" | "diver" | "matter" | "air" | "granite" | "separation"
  | "soap" | "yogurt" | "sunscreen" | "chemistry";

type ExampleImageRule = {
  keys: RegExp;
  query: string;
  label: string;
  scene: ExampleScene;
  palette: [string, string, string];
};

/* Analisa o texto de cada exemplo e gera uma ilustração local específica.
   Isso evita imagens aleatórias de serviços externos sem relação com o assunto. */
const EXAMPLE_IMAGE_MAP: ExampleImageRule[] = [
  { keys: /produtos.*(casa|limpeza|cosm)|alimentos.*cosm/i, query: "ultra,processed,food,supermarket,snacks", label: "Alimentos ultraprocessados", scene: "processedFood", palette: ["#0f766e", "#14b8a6", "#ccfbf1"] },
  { keys: /base para.*(ind[uú]stria|farmac)|ind[uú]stria.*farmac/i, query: "pharmaceutical,laboratory,scientist,lab", label: "Laboratório farmacêutico", scene: "pharmaLab", palette: ["#1d4ed8", "#38bdf8", "#dbeafe"] },
  { keys: /vestibular|enem|fuvest|unicamp|ita|ime|prova|estudo|estudante/i, query: "student,exam,books", label: "Avaliação e vestibulares", scene: "exam", palette: ["#7c2d12", "#fb923c", "#ffedd5"] },

  { keys: /alimento|comida|cozinha|receita|pão|bolo/i, query: "food,cooking,kitchen", label: "Química dos alimentos", scene: "processedFood", palette: ["#166534", "#22c55e", "#dcfce7"] },
  { keys: /cosm[eé]tic|shampoo|creme|maquiagem/i, query: "cosmetics,bottles", label: "Cosméticos", scene: "pharmaLab", palette: ["#be185d", "#f472b6", "#fce7f3"] },
  { keys: /limpeza|sab[aã]o|detergente|água sanitária/i, query: "soap,cleaning,detergent", label: "Produtos de limpeza", scene: "soap", palette: ["#0369a1", "#38bdf8", "#e0f2fe"] },
  { keys: /ind[uú]stria|f[aá]brica|refinaria|planta qu[ií]mica/i, query: "chemical,factory,industry", label: "Indústria química", scene: "factory", palette: ["#334155", "#64748b", "#e2e8f0"] },
  { keys: /farmac[eê]utic|rem[eé]dio|medicamento|comprimido|f[aá]rmaco/i, query: "pharmacy,pills,medicine", label: "Medicamentos", scene: "pharmaLab", palette: ["#1d4ed8", "#60a5fa", "#dbeafe"] },
  { keys: /ambiental|poluição|meio ambiente|sustentabilidade/i, query: "environment,pollution,nature", label: "Meio ambiente", scene: "acidRain", palette: ["#365314", "#84cc16", "#ecfccb"] },

  { keys: /carbono[- ]?14|c-14|datação|arqueolog|fóssil/i, query: "archaeology,fossil,radiocarbon", label: "Datação arqueológica", scene: "archaeology", palette: ["#92400e", "#f59e0b", "#fef3c7"] },
  { keys: /neônio|letreir|neon/i, query: "neon,sign,city", label: "Letreiro de neônio", scene: "neon", palette: ["#86198f", "#e879f9", "#fae8ff"] },
  { keys: /resson[aâ]ncia magn[eé]tica|mri/i, query: "MRI,scan,hospital", label: "Ressonância magnética", scene: "mri", palette: ["#155e75", "#22d3ee", "#cffafe"] },
  { keys: /sódio.*(água|reage)|metal alcalino/i, query: "sodium,reaction,water", label: "Sódio reagindo com água", scene: "sodiumWater", palette: ["#b45309", "#fbbf24", "#fef3c7"] },
  { keys: /gás(es)? nobre|hélio|argônio/i, query: "noble,gas,balloon", label: "Gases nobres", scene: "balloon", palette: ["#6d28d9", "#a78bfa", "#ede9fe"] },
  { keys: /halog[eê]nio|cloro|flúor|iodo/i, query: "chlorine,salt,crystals", label: "Halogênios e sais", scene: "salt", palette: ["#0f766e", "#5eead4", "#ccfbf1"] },

  { keys: /\bnacl\b|sal de cozinha|cloreto de s[oó]dio/i, query: "salt,crystals,cooking", label: "Cristais de sal", scene: "salt", palette: ["#475569", "#cbd5e1", "#f8fafc"] },
  { keys: /água|h2o|gelo/i, query: "water,drop,molecule", label: "Molécula de água", scene: "water", palette: ["#0369a1", "#38bdf8", "#e0f2fe"] },
  { keys: /cobre|ferro|alumínio|cabo|fio/i, query: "copper,wire,metal", label: "Metais condutores", scene: "metal", palette: ["#7c2d12", "#fb923c", "#fed7aa"] },
  { keys: /metano|ch4|gás natural|combustão|queima|combust[ií]vel|etanol.*motor/i, query: "gas,stove,flame", label: "Combustão", scene: "flame", palette: ["#991b1b", "#fb923c", "#ffedd5"] },
  { keys: /neutralização|antiácido|azia/i, query: "antacid,tablets,stomach", label: "Antiácido", scene: "antacid", palette: ["#0f766e", "#5eead4", "#ccfbf1"] },
  { keys: /haber[- ]bosch|amônia|fertilizante/i, query: "fertilizer,agriculture,crops", label: "Fertilizantes na agricultura", scene: "crops", palette: ["#166534", "#22c55e", "#dcfce7"] },

  { keys: /suco g[aá]strico|est[oô]mago/i, query: "stomach,anatomy,acid", label: "Ácido no estômago", scene: "stomach", palette: ["#be123c", "#fb7185", "#ffe4e6"] },
  { keys: /sangue|tampão bicarbon|hemoglobina/i, query: "blood,cells,microscope", label: "Sangue e tampões", scene: "blood", palette: ["#991b1b", "#ef4444", "#fee2e2"] },
  { keys: /chuva [aá]cida/i, query: "acid,rain,pollution", label: "Chuva ácida", scene: "acidRain", palette: ["#374151", "#94a3b8", "#e5e7eb"] },
  { keys: /fotoss[ií]ntese/i, query: "photosynthesis,leaves,sun", label: "Fotossíntese", scene: "photosynthesis", palette: ["#166534", "#84cc16", "#ecfccb"] },
  { keys: /bolsa gelada|compressa fria|instant cold pack|nh₄no₃/i, query: "cold,pack,ice", label: "Compressa fria", scene: "coldPack", palette: ["#075985", "#7dd3fc", "#e0f2fe"] },
  { keys: /enzima|digerem|digest/i, query: "enzyme,digestion,food", label: "Catálise biológica", scene: "enzyme", palette: ["#166534", "#4ade80", "#dcfce7"] },
  { keys: /escapamento|noₓ|co em n₂|catalisador do/i, query: "catalytic,converter,car", label: "Catalisador automotivo", scene: "carCatalyst", palette: ["#334155", "#94a3b8", "#e2e8f0"] },
  { keys: /geladeira|deteriora/i, query: "refrigerator,food,cold", label: "Conservação na geladeira", scene: "fridge", palette: ["#0369a1", "#60a5fa", "#dbeafe"] },
  { keys: /co₂ dissolvido|refrigerante|abrir a lata/i, query: "soda,can,bubbles", label: "Refrigerante e equilíbrio", scene: "soda", palette: ["#b91c1c", "#f87171", "#fee2e2"] },
  { keys: /oxig[eê]nio no sangue|hbo₂/i, query: "oxygen,blood,cells", label: "Transporte de oxigênio", scene: "oxygenBlood", palette: ["#9f1239", "#fb7185", "#ffe4e6"] },

  { keys: /soro fisiol[oó]gico|nacl 0,9/i, query: "saline,iv,hospital", label: "Soro fisiológico", scene: "saline", palette: ["#0e7490", "#67e8f9", "#cffafe"] },
  { keys: /anticongelante|etilenoglicol|radiador/i, query: "antifreeze,car,radiator", label: "Anticongelante", scene: "antifreeze", palette: ["#4338ca", "#818cf8", "#e0e7ff"] },
  { keys: /dessalinização|osmose reversa/i, query: "reverse,osmosis,water", label: "Osmose reversa", scene: "osmosis", palette: ["#0f766e", "#2dd4bf", "#ccfbf1"] },
  { keys: /pilha|bateria|íon-lítio|celular|carro elétrico/i, query: "battery,cells,energy", label: "Baterias", scene: "battery", palette: ["#854d0e", "#facc15", "#fef9c3"] },
  { keys: /eletróli|hall-héroult|cloro-soda/i, query: "electrolysis,industrial", label: "Eletrólise", scene: "electrolysis", palette: ["#1e40af", "#60a5fa", "#dbeafe"] },
  { keys: /galvanoplastia|cromagem/i, query: "chrome,plating,car", label: "Cromagem", scene: "chrome", palette: ["#475569", "#cbd5e1", "#f8fafc"] },

  { keys: /pl[aá]stico|polietileno|polímero|pet\b|sacolas/i, query: "plastic,bottles,recycling", label: "Plásticos e polímeros", scene: "plastic", palette: ["#0f766e", "#34d399", "#d1fae5"] },
  { keys: /petr[oó]leo|gasolina/i, query: "oil,refinery,fuel", label: "Derivados de petróleo", scene: "factory", palette: ["#111827", "#6b7280", "#f3f4f6"] },
  { keys: /álcool|etanol|cachaça/i, query: "alcohol,ethanol,bottle", label: "Etanol", scene: "vinegar", palette: ["#047857", "#6ee7b7", "#d1fae5"] },
  { keys: /vinagre|ácido acético/i, query: "vinegar,bottle,kitchen", label: "Vinagre", scene: "vinegar", palette: ["#92400e", "#fbbf24", "#fef3c7"] },
  { keys: /glicose/i, query: "glucose,fruit,energy", label: "Glicose", scene: "glucose", palette: ["#b45309", "#fbbf24", "#fef3c7"] },
  { keys: /nuclear|urânio|u-235|radioativ|reator|bomba atômica/i, query: "nuclear,reactor,radiation", label: "Energia nuclear", scene: "nuclear", palette: ["#3f6212", "#a3e635", "#ecfccb"] },
  { keys: /i-131|tireoide/i, query: "thyroid,medicine,radiotherapy", label: "Medicina nuclear", scene: "thyroid", palette: ["#7e22ce", "#c084fc", "#f3e8ff"] },

  { keys: /airbag|nan₃/i, query: "airbag,car,safety", label: "Airbag", scene: "airbag", palette: ["#334155", "#cbd5e1", "#f8fafc"] },
  { keys: /pneu|pressão sobe/i, query: "tire,pressure,car", label: "Pressão no pneu", scene: "tire", palette: ["#1f2937", "#9ca3af", "#f3f4f6"] },
  { keys: /mergulhador|hélio\/o₂|profundidades/i, query: "scuba,diver,oxygen", label: "Mistura para mergulho", scene: "diver", palette: ["#075985", "#38bdf8", "#e0f2fe"] },
  { keys: /água pura|pf = 0|pe = 100/i, query: "water,ice,steam", label: "Estados da água", scene: "matter", palette: ["#0369a1", "#7dd3fc", "#e0f2fe"] },
  { keys: /ar: mistura|n₂|o₂|co₂/i, query: "air,atmosphere,gases", label: "Mistura de gases do ar", scene: "air", palette: ["#0e7490", "#67e8f9", "#cffafe"] },
  { keys: /granito|quartzo|feldspato|mica/i, query: "granite,rock,minerals", label: "Granito", scene: "granite", palette: ["#57534e", "#a8a29e", "#f5f5f4"] },
  { keys: /separação|destilação|filtração|decantação/i, query: "filtration,distillation,oil,water", label: "Separação de misturas", scene: "separation", palette: ["#0f766e", "#5eead4", "#ccfbf1"] },
  { keys: /bicarbonato|fermento/i, query: "baking,soda,bread", label: "Bicarbonato e fermentação", scene: "processedFood", palette: ["#92400e", "#f59e0b", "#fef3c7"] },
  { keys: /fermentação|iogurte|queijo|lactose|ácido lático/i, query: "yogurt,fermentation,dairy", label: "Fermentação do iogurte", scene: "yogurt", palette: ["#be185d", "#f9a8d4", "#fce7f3"] },
  { keys: /filtro solar|protetor solar|absorvem uv/i, query: "sunscreen,beach,skin", label: "Filtro solar", scene: "sunscreen", palette: ["#b45309", "#fbbf24", "#fef3c7"] },
  { keys: /calcário|caverna|estalactite/i, query: "limestone,cave", label: "Calcário", scene: "granite", palette: ["#57534e", "#d6d3d1", "#f5f5f4"] },
];

function imageForExample(text: string): string {
  const rule = EXAMPLE_IMAGE_MAP.find((m) => m.keys.test(text)) ?? {
    keys: /.*/,
    query: "chemistry,laboratory,science",
    label: "Aplicação da química",
    scene: "chemistry" as ExampleScene,
    palette: ["#0f766e", "#2dd4bf", "#ccfbf1"] as [string, string, string],
  };
  return makeExampleSvg(rule, text);
}

function makeExampleSvg(rule: Pick<ExampleImageRule, "label" | "scene" | "palette">, text: string): string {
  const [dark, accent, soft] = rule.palette;
  const seed = Math.abs(hash(text)) % 360;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="375" viewBox="0 0 600 375" role="img" aria-label="${escapeSvg(rule.label)}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${soft}"/><stop offset="0.58" stop-color="#ffffff"/><stop offset="1" stop-color="${accent}" stop-opacity="0.45"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="${dark}" flood-opacity="0.20"/></filter>
    </defs>
    <rect width="600" height="375" fill="url(#bg)"/>
    <path d="M0 292 C92 246 151 342 245 290 S426 237 600 294 L600 375 L0 375 Z" fill="${dark}" opacity="0.10"/>
    <circle cx="${70 + (seed % 70)}" cy="${56 + (seed % 34)}" r="42" fill="${accent}" opacity="0.18"/>
    <circle cx="${490 - (seed % 62)}" cy="${62 + (seed % 42)}" r="58" fill="${dark}" opacity="0.10"/>
    ${sceneSvg(rule.scene, dark, accent, soft)}
    <rect x="30" y="286" width="540" height="58" rx="18" fill="#ffffff" opacity="0.92" filter="url(#shadow)"/>
    <text x="52" y="323" font-family="Arial, sans-serif" font-size="24" font-weight="800" fill="${dark}">${escapeSvg(rule.label)}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function sceneSvg(scene: ExampleScene, dark: string, accent: string, soft: string): string {
  switch (scene) {
    case "processedFood":
      return `<g filter="url(#shadow)"><rect x="90" y="94" width="420" height="170" rx="24" fill="#fff"/><rect x="122" y="130" width="90" height="96" rx="12" fill="${accent}"/><rect x="238" y="112" width="98" height="114" rx="14" fill="${soft}" stroke="${dark}" stroke-width="5"/><rect x="364" y="142" width="92" height="84" rx="12" fill="${dark}" opacity="0.88"/><circle cx="166" cy="160" r="22" fill="#fff" opacity="0.75"/><path d="M250 179 h72 M250 199 h72" stroke="${dark}" stroke-width="9" stroke-linecap="round"/></g>`;
    case "pharmaLab":
      return `<g filter="url(#shadow)"><rect x="92" y="226" width="416" height="26" rx="13" fill="${dark}"/><path d="M175 90 h56 v95 l40 58 h-136 l40-58z" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M176 184 h54 l27 40 h-108z" fill="${accent}" opacity="0.85"/><rect x="340" y="86" width="70" height="142" rx="22" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M342 168 h66 v42 h-66z" fill="${accent}" opacity="0.75"/><circle cx="455" cy="128" r="28" fill="${soft}" stroke="${dark}" stroke-width="7"/></g>`;
    case "exam":
      return `<g filter="url(#shadow)"><rect x="145" y="78" width="310" height="190" rx="18" fill="#fff"/><path d="M300 88 v168" stroke="${dark}" stroke-width="5"/><path d="M180 126 h82 M180 158 h82 M180 190 h58 M334 126 h84 M334 158 h84 M334 190 h56" stroke="${dark}" stroke-width="10" stroke-linecap="round" opacity="0.55"/><circle cx="405" cy="226" r="24" fill="${accent}"/><path d="M394 226 l8 9 17-22" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></g>`;
    case "archaeology":
      return `<g filter="url(#shadow)"><ellipse cx="302" cy="226" rx="190" ry="38" fill="${dark}" opacity="0.18"/><path d="M168 198 C234 118 342 117 431 195" fill="none" stroke="${dark}" stroke-width="22" stroke-linecap="round"/><circle cx="164" cy="198" r="24" fill="#fff" stroke="${dark}" stroke-width="8"/><circle cx="438" cy="198" r="24" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M252 166 l32 72 M324 157 l-18 81 M374 172 l-36 60" stroke="#fff" stroke-width="12" stroke-linecap="round"/></g>`;
    case "neon":
      return `<g filter="url(#shadow)"><rect x="126" y="90" width="348" height="154" rx="28" fill="#111827" stroke="${accent}" stroke-width="10"/><path d="M190 168 C230 108 285 228 326 168 S405 107 430 170" fill="none" stroke="${accent}" stroke-width="15" stroke-linecap="round"/><path d="M190 168 C230 108 285 228 326 168 S405 107 430 170" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity="0.9"/></g>`;
    case "mri":
      return `<g filter="url(#shadow)"><rect x="120" y="114" width="360" height="132" rx="36" fill="#fff" stroke="${dark}" stroke-width="8"/><circle cx="252" cy="180" r="58" fill="${soft}" stroke="${accent}" stroke-width="18"/><rect x="286" y="173" width="146" height="18" rx="9" fill="${dark}" opacity="0.75"/><circle cx="430" cy="182" r="16" fill="${accent}"/></g>`;
    case "sodiumWater":
      return `<g filter="url(#shadow)"><rect x="96" y="178" width="408" height="80" rx="22" fill="#fff"/><path d="M118 196 C178 220 242 178 302 202 S418 224 482 195 V236 H118z" fill="${accent}" opacity="0.72"/><circle cx="296" cy="172" r="30" fill="${dark}"/><path d="M296 88 v50 M250 118 l35 29 M342 118 l-35 29" stroke="${accent}" stroke-width="12" stroke-linecap="round"/></g>`;
    case "balloon":
      return `<g filter="url(#shadow)"><ellipse cx="230" cy="142" rx="62" ry="78" fill="${accent}"/><ellipse cx="360" cy="130" rx="62" ry="78" fill="${dark}" opacity="0.86"/><path d="M230 220 C224 250 210 268 190 286 M360 208 C363 248 390 260 398 286" fill="none" stroke="${dark}" stroke-width="5"/><path d="M210 122 c15-24 35-28 52-16" stroke="#fff" stroke-width="8" stroke-linecap="round" opacity="0.65"/></g>`;
    case "salt":
      return `<g filter="url(#shadow)"><rect x="118" y="188" width="360" height="54" rx="27" fill="#fff"/><path d="M190 110 l55 32 -55 32 -55-32z M302 92 l70 40 -70 40 -70-40z M404 132 l60 35 -60 35 -60-35z" fill="${soft}" stroke="${dark}" stroke-width="7"/><path d="M302 172 v52 M190 174 v50 M404 202 v28" stroke="${accent}" stroke-width="8" stroke-linecap="round"/></g>`;
    case "water":
      return `<g filter="url(#shadow)"><circle cx="300" cy="170" r="48" fill="${accent}"/><circle cx="215" cy="128" r="34" fill="#fff" stroke="${dark}" stroke-width="8"/><circle cx="385" cy="128" r="34" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M245 142 L270 156 M355 156 L380 142" stroke="${dark}" stroke-width="10" stroke-linecap="round"/><path d="M132 246 C230 208 368 286 468 236" fill="none" stroke="${accent}" stroke-width="20" stroke-linecap="round" opacity="0.5"/></g>`;
    case "metal":
      return `<g filter="url(#shadow)"><path d="M115 135 C210 88 280 228 390 134 S478 146 502 190" fill="none" stroke="${dark}" stroke-width="18" stroke-linecap="round"/><path d="M112 176 C214 126 280 262 394 174 S478 186 502 230" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round"/><circle cx="392" cy="134" r="22" fill="#fff" stroke="${dark}" stroke-width="7"/><circle cx="392" cy="174" r="22" fill="#fff" stroke="${accent}" stroke-width="7"/></g>`;
    case "flame":
      return `<g filter="url(#shadow)"><rect x="142" y="238" width="316" height="30" rx="15" fill="${dark}"/><path d="M300 238 C205 194 248 116 290 80 C286 136 370 150 334 236z" fill="${accent}"/><path d="M304 236 C260 210 283 164 311 138 C308 177 357 187 332 236z" fill="#fff" opacity="0.72"/><path d="M172 224 h256" stroke="#fff" stroke-width="9" stroke-linecap="round" opacity="0.45"/></g>`;
    case "antacid":
      return `<g filter="url(#shadow)"><rect x="140" y="112" width="140" height="86" rx="43" fill="#fff" stroke="${dark}" stroke-width="8" transform="rotate(-18 210 155)"/><rect x="306" y="126" width="140" height="86" rx="43" fill="${accent}" transform="rotate(15 376 169)"/><path d="M246 236 C284 198 338 200 376 236 C350 267 274 267 246 236z" fill="${soft}" stroke="${dark}" stroke-width="7"/></g>`;
    case "crops":
      return `<g filter="url(#shadow)"><circle cx="470" cy="92" r="42" fill="#fde047"/><path d="M72 254 C180 174 392 174 528 254" fill="${accent}" opacity="0.65"/><path d="M128 250 C190 204 228 190 286 174 M236 258 C302 210 362 184 448 178 M356 260 C410 226 468 206 528 198" stroke="${dark}" stroke-width="8" stroke-linecap="round"/><path d="M188 196 q18-42 38 0 M324 176 q20-48 42 0" fill="none" stroke="${dark}" stroke-width="8"/></g>`;
    case "stomach":
      return `<g filter="url(#shadow)"><path d="M306 82 C356 112 342 168 398 178 C470 192 454 274 356 276 C252 278 215 232 254 178 C282 140 250 104 306 82z" fill="${accent}" stroke="${dark}" stroke-width="8"/><circle cx="340" cy="204" r="18" fill="#fff" opacity="0.7"/><circle cx="386" cy="224" r="13" fill="#fff" opacity="0.55"/></g>`;
    case "blood":
    case "oxygenBlood":
      return `<g filter="url(#shadow)"><rect x="118" y="92" width="364" height="176" rx="40" fill="#fff"/><circle cx="206" cy="152" r="40" fill="${accent}"/><circle cx="304" cy="196" r="48" fill="${dark}" opacity="0.9"/><circle cx="414" cy="148" r="38" fill="${accent}"/><circle cx="206" cy="152" r="14" fill="#fff" opacity="0.55"/><circle cx="304" cy="196" r="16" fill="#fff" opacity="0.45"/><path d="M174 232 C250 256 370 254 438 222" stroke="${accent}" stroke-width="10" stroke-linecap="round" fill="none"/></g>`;
    case "acidRain":
      return `<g filter="url(#shadow)"><path d="M162 122 h228 a52 52 0 0 1 0 104 h-244 a52 52 0 0 1 16-104z" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M188 248 l-22 42 M270 248 l-22 42 M354 248 l-22 42 M438 248 l-22 42" stroke="${accent}" stroke-width="10" stroke-linecap="round"/><rect x="420" y="146" width="46" height="86" fill="${dark}"/><path d="M432 134 h22 v-32 h22 v130 h-44z" fill="${dark}" opacity="0.75"/></g>`;
    case "coldPack":
      return `<g filter="url(#shadow)"><rect x="158" y="86" width="284" height="184" rx="30" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M198 178 h204 M300 104 v148 M230 126 l140 104 M370 126 l-140 104" stroke="${accent}" stroke-width="12" stroke-linecap="round"/></g>`;
    case "photosynthesis":
      return `<g filter="url(#shadow)"><circle cx="454" cy="96" r="42" fill="#fde047"/><path d="M142 236 C232 68 418 106 452 236 C332 256 226 286 142 236z" fill="${accent}" stroke="${dark}" stroke-width="8"/><path d="M174 232 C260 190 334 154 426 126" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity="0.75"/></g>`;
    case "enzyme":
      return `<g filter="url(#shadow)"><path d="M170 190 C170 112 250 80 300 132 C350 80 430 112 430 190 C430 258 350 282 300 230 C250 282 170 258 170 190z" fill="${accent}" stroke="${dark}" stroke-width="8"/><circle cx="256" cy="178" r="22" fill="#fff"/><circle cx="344" cy="178" r="22" fill="#fff"/><path d="M242 228 C280 250 326 250 360 228" stroke="#fff" stroke-width="10" stroke-linecap="round"/></g>`;
    case "carCatalyst":
      return `<g filter="url(#shadow)"><rect x="124" y="154" width="350" height="78" rx="34" fill="${dark}"/><circle cx="204" cy="238" r="32" fill="#fff" stroke="${dark}" stroke-width="8"/><circle cx="398" cy="238" r="32" fill="#fff" stroke="${dark}" stroke-width="8"/><rect x="252" y="116" width="116" height="74" rx="18" fill="${accent}"/><path d="M454 172 c38 2 54 18 62 42" stroke="${accent}" stroke-width="12" stroke-linecap="round" fill="none"/></g>`;
    case "fridge":
      return `<g filter="url(#shadow)"><rect x="218" y="72" width="164" height="216" rx="22" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M218 158 h164" stroke="${dark}" stroke-width="7"/><rect x="246" y="96" width="56" height="38" rx="8" fill="${accent}"/><circle cx="332" cy="220" r="28" fill="${soft}" stroke="${accent}" stroke-width="8"/></g>`;
    case "factory":
      return `<g filter="url(#shadow)"><path d="M112 250 V150 l96 50 v-50 l96 50 v-50 l96 50 v50z" fill="${dark}" opacity="0.86"/><rect x="430" y="116" width="50" height="134" fill="${accent}"/><path d="M436 96 c28-28 70 0 44 28 c40-8 54 32 18 46" fill="none" stroke="${dark}" stroke-width="12" stroke-linecap="round" opacity="0.35"/><path d="M154 226 h48 M246 226 h48 M338 226 h48" stroke="#fff" stroke-width="10" stroke-linecap="round"/></g>`;
    case "soda":
      return `<g filter="url(#shadow)"><rect x="238" y="90" width="124" height="188" rx="24" fill="${accent}" stroke="${dark}" stroke-width="8"/><rect x="260" y="124" width="80" height="64" rx="12" fill="#fff" opacity="0.85"/><circle cx="408" cy="130" r="16" fill="#fff"/><circle cx="430" cy="190" r="11" fill="#fff"/><circle cx="180" cy="174" r="13" fill="#fff"/><path d="M260 84 h80" stroke="${dark}" stroke-width="10" stroke-linecap="round"/></g>`;
    case "saline":
      return `<g filter="url(#shadow)"><rect x="244" y="72" width="112" height="156" rx="20" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M246 160 h108 v56 h-108z" fill="${accent}" opacity="0.65"/><path d="M300 228 v54 M300 282 c0 28 44 16 44 48" stroke="${dark}" stroke-width="8" stroke-linecap="round" fill="none"/><path d="M278 116 h44 M300 94 v44" stroke="${accent}" stroke-width="10" stroke-linecap="round"/></g>`;
    case "antifreeze":
      return `<g filter="url(#shadow)"><rect x="170" y="128" width="260" height="128" rx="24" fill="${dark}"/><rect x="210" y="88" width="70" height="60" rx="14" fill="${accent}"/><path d="M214 184 h172 M252 150 v92 M326 150 v92" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity="0.75"/><circle cx="456" cy="202" r="28" fill="${accent}"/></g>`;
    case "osmosis":
      return `<g filter="url(#shadow)"><rect x="108" y="102" width="384" height="148" rx="28" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M300 108 v136" stroke="${dark}" stroke-width="8" stroke-dasharray="12 12"/><circle cx="180" cy="172" r="14" fill="${accent}"/><circle cx="224" cy="204" r="10" fill="${accent}"/><path d="M344 176 h72 M386 144 l30 32 -30 32" stroke="${accent}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>`;
    case "battery":
      return `<g filter="url(#shadow)"><rect x="128" y="124" width="344" height="128" rx="26" fill="#fff" stroke="${dark}" stroke-width="8"/><rect x="472" y="166" width="26" height="44" rx="8" fill="${dark}"/><path d="M214 158 v60 M184 188 h60 M352 188 h64" stroke="${accent}" stroke-width="14" stroke-linecap="round"/><path d="M268 188 h54" stroke="${dark}" stroke-width="10" stroke-linecap="round"/></g>`;
    case "electrolysis":
      return `<g filter="url(#shadow)"><rect x="142" y="116" width="316" height="134" rx="28" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M170 178 h260 v48 h-260z" fill="${accent}" opacity="0.55"/><path d="M238 80 v150 M362 80 v150" stroke="${dark}" stroke-width="10" stroke-linecap="round"/><circle cx="238" cy="128" r="14" fill="#fff"/><circle cx="362" cy="146" r="12" fill="#fff"/><circle cx="390" cy="112" r="9" fill="#fff"/></g>`;
    case "chrome":
      return `<g filter="url(#shadow)"><path d="M142 208 C166 142 226 116 300 116 S434 142 458 208" fill="${soft}" stroke="${dark}" stroke-width="8"/><rect x="126" y="196" width="348" height="52" rx="26" fill="${accent}"/><circle cx="206" cy="252" r="30" fill="#fff" stroke="${dark}" stroke-width="8"/><circle cx="394" cy="252" r="30" fill="#fff" stroke="${dark}" stroke-width="8"/></g>`;
    case "plastic":
      return `<g filter="url(#shadow)"><rect x="170" y="100" width="92" height="168" rx="22" fill="${accent}"/><rect x="338" y="100" width="92" height="168" rx="22" fill="${dark}" opacity="0.82"/><path d="M194 72 h44 v34 h-44z M362 72 h44 v34 h-44z" fill="#fff" stroke="${dark}" stroke-width="7"/><path d="M248 196 C290 148 336 238 376 190" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity="0.7"/></g>`;
    case "vinegar":
      return `<g filter="url(#shadow)"><path d="M250 86 h100 v48 c0 34 38 48 38 92 c0 42-34 58-88 58 s-88-16-88-58 c0-44 38-58 38-92z" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M228 204 h144 v46 c-16 23-128 23-144 0z" fill="${accent}" opacity="0.75"/><path d="M266 116 h68" stroke="${accent}" stroke-width="10" stroke-linecap="round"/></g>`;
    case "glucose":
      return `<g filter="url(#shadow)"><circle cx="230" cy="170" r="46" fill="${accent}"/><circle cx="300" cy="126" r="46" fill="#fff" stroke="${dark}" stroke-width="8"/><circle cx="370" cy="170" r="46" fill="${accent}"/><circle cx="300" cy="216" r="46" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M264 148 l-28 18 M336 148 l28 18 M300 172 v38" stroke="${dark}" stroke-width="10" stroke-linecap="round"/></g>`;
    case "nuclear":
      return `<g filter="url(#shadow)"><circle cx="300" cy="174" r="78" fill="${accent}"/><circle cx="300" cy="174" r="22" fill="${dark}"/><path d="M300 88 A86 86 0 0 1 374 218 L300 174z M224 218 A86 86 0 0 1 300 88 L300 174z M300 174 l76 44 a86 86 0 0 1-152 0z" fill="#fff" opacity="0.78"/><circle cx="300" cy="174" r="22" fill="${dark}"/></g>`;
    case "thyroid":
      return `<g filter="url(#shadow)"><path d="M300 94 v64" stroke="${dark}" stroke-width="12" stroke-linecap="round"/><path d="M296 168 C240 108 174 164 206 228 C232 280 286 238 300 202 C314 238 368 280 394 228 C426 164 360 108 304 168z" fill="${accent}" stroke="${dark}" stroke-width="8"/><circle cx="300" cy="202" r="15" fill="#fff" opacity="0.7"/></g>`;
    case "airbag":
      return `<g filter="url(#shadow)"><rect x="138" y="150" width="324" height="96" rx="24" fill="${dark}"/><circle cx="300" cy="152" r="70" fill="#fff" stroke="${accent}" stroke-width="10"/><path d="M210 234 h180" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity="0.6"/></g>`;
    case "tire":
      return `<g filter="url(#shadow)"><circle cx="300" cy="174" r="96" fill="${dark}"/><circle cx="300" cy="174" r="54" fill="#fff"/><circle cx="300" cy="174" r="22" fill="${accent}"/><path d="M300 78 v40 M300 230 v40 M204 174 h40 M356 174 h40" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity="0.6"/></g>`;
    case "diver":
      return `<g filter="url(#shadow)"><path d="M92 232 C194 176 406 282 520 198" stroke="${accent}" stroke-width="26" stroke-linecap="round" fill="none" opacity="0.55"/><circle cx="270" cy="150" r="38" fill="${dark}"/><rect x="300" y="140" width="104" height="34" rx="17" fill="#fff" stroke="${dark}" stroke-width="7"/><path d="M260 188 c62 34 114 30 168 8" stroke="${dark}" stroke-width="16" stroke-linecap="round" fill="none"/><circle cx="422" cy="116" r="10" fill="#fff"/><circle cx="452" cy="86" r="14" fill="#fff"/></g>`;
    case "matter":
      return `<g filter="url(#shadow)"><rect x="118" y="178" width="104" height="86" rx="16" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M272 220 c0-48 56-78 56-130 c42 42 66 86 66 130 a61 61 0 0 1-122 0z" fill="${accent}"/><path d="M424 128 c62-40 106 32 40 70 c56-10 76 58 12 68" fill="none" stroke="${dark}" stroke-width="13" stroke-linecap="round" opacity="0.45"/></g>`;
    case "air":
      return `<g filter="url(#shadow)"><path d="M112 156 C204 98 308 208 406 142 C458 106 504 126 526 156" fill="none" stroke="${dark}" stroke-width="15" stroke-linecap="round"/><path d="M96 220 C208 160 322 276 492 198" fill="none" stroke="${accent}" stroke-width="18" stroke-linecap="round"/><circle cx="218" cy="196" r="18" fill="#fff"/><circle cx="312" cy="158" r="14" fill="#fff"/><circle cx="402" cy="216" r="20" fill="#fff"/></g>`;
    case "granite":
      return `<g filter="url(#shadow)"><path d="M150 248 L206 114 L344 82 L464 190 L412 270 H190z" fill="${dark}" opacity="0.85"/><path d="M214 140 l54 38 -42 46 -56-30z M330 116 l66 64 -74 24z M306 218 l72 26 -24 30h-92z" fill="#fff" opacity="0.42"/><circle cx="252" cy="158" r="10" fill="${accent}"/><circle cx="386" cy="204" r="12" fill="${accent}"/></g>`;
    case "separation":
      return `<g filter="url(#shadow)"><path d="M190 82 h220 l-78 104 v78 h-64 v-78z" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M222 126 h156 l-42 56 h-72z" fill="${accent}" opacity="0.65"/><rect x="236" y="260" width="128" height="20" rx="10" fill="${dark}"/><circle cx="406" cy="232" r="28" fill="${soft}" stroke="${accent}" stroke-width="8"/></g>`;
    case "soap":
      return `<g filter="url(#shadow)"><rect x="174" y="164" width="252" height="90" rx="38" fill="${accent}"/><circle cx="218" cy="122" r="24" fill="#fff"/><circle cx="292" cy="92" r="34" fill="#fff"/><circle cx="374" cy="126" r="22" fill="#fff"/><path d="M220 210 h160" stroke="#fff" stroke-width="10" stroke-linecap="round" opacity="0.55"/></g>`;
    case "yogurt":
      return `<g filter="url(#shadow)"><path d="M198 114 h204 l-24 154 h-156z" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M218 190 h164 l-12 70 h-140z" fill="${accent}" opacity="0.65"/><circle cx="272" cy="214" r="12" fill="#fff"/><circle cx="326" cy="236" r="10" fill="#fff"/><path d="M236 94 h128" stroke="${dark}" stroke-width="14" stroke-linecap="round"/></g>`;
    case "sunscreen":
      return `<g filter="url(#shadow)"><circle cx="438" cy="104" r="44" fill="#fde047"/><rect x="210" y="104" width="128" height="166" rx="22" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M232 170 h84" stroke="${accent}" stroke-width="15" stroke-linecap="round"/><path d="M126 258 C224 222 396 290 500 238" stroke="${accent}" stroke-width="18" stroke-linecap="round" fill="none" opacity="0.55"/></g>`;
    default:
      return `<g filter="url(#shadow)"><path d="M224 88 h152 v74 l62 100 h-276 l62-100z" fill="#fff" stroke="${dark}" stroke-width="8"/><path d="M212 200 h176 l32 52 h-240z" fill="${accent}" opacity="0.72"/><circle cx="246" cy="144" r="14" fill="${accent}"/><circle cx="320" cy="124" r="18" fill="${dark}" opacity="0.8"/><circle cx="374" cy="162" r="12" fill="${accent}"/></g>`;
  }
}

function escapeSvg(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function hash(s: string) {
  let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return h;
}

/**
 * Detecta o "aspecto" do subtópico (Conceito, Breve história, Fundamentos,
 * Classificação, Propriedades, Cotidiano, Aplicações, Curiosidade, Exercícios)
 * a partir do título e reescreve o conteúdo para que cada botão do capítulo
 * não mostre o mesmo texto genérico.
 */
type Aspect = "conceito" | "historia" | "fundamentos" | "classificacao" | "propriedades" | "cotidiano" | "aplicacoes" | "curiosidade" | "exercicios" | null;

function detectAspect(title: string): Aspect {
  const t = title.toLowerCase();
  if (/(conceito|defini[cç][aã]o|introdu[cç][aã]o|o que [eé])/.test(t)) return "conceito";
  if (/(breve hist[oó]ria|hist[oó]ria|linha do tempo|origem|cronolog)/.test(t)) return "historia";
  if (/(fundamentos? te[oó]ricos?|teoria|princ[ií]pios? fundament|leis fundament)/.test(t)) return "fundamentos";
  if (/(classifica[cç][aã]o|principais tipos|tipos de|categorias)/.test(t)) return "classificacao";
  if (/(propriedades? e caracter|caracter[ií]sticas|propriedades)/.test(t)) return "propriedades";
  if (/(qu[ií]mica do cotidiano|no cotidiano|dia a dia|no dia-a-dia)/.test(t)) return "cotidiano";
  if (/(aplica[cç][oõ]es? pr[aá]ticas?|aplica[cç][oõ]es? industri|na ind[uú]stria|uso industrial)/.test(t)) return "aplicacoes";
  if (/(curiosidade|voc[eê] sabia|fatos? interessantes?|fatos? engra[cç]ados?)/.test(t)) return "curiosidade";
  if (/(exerc[ií]cios? resolvidos|quest[oõ]es de fixa|exerc[ií]cios de fixa|revis[aã]o|questoes|questões)/.test(t)) return "exercicios";
  return null;
}

function applyAspect(base: Section, title: string, lesson: string): Section {
  const aspect = detectAspect(title);
  if (!aspect) return base;
  const tema = lesson || title.replace(/^conceito e defini[cç][aã]o de\s+/i, "").trim() || "o tema";
  const M = base; // shortcut para conteúdos "mãe" gerados pela categoria química

  switch (aspect) {
    case "conceito":
      return {
        ...M,
        simple: `**O que é ${tema}?** ${M.simple} Aqui a ideia é criar uma imagem mental clara antes de entrar em fórmulas ou classificações.`,
        formal: `**Definição formal.** ${M.formal} A conceituação delimita o objeto de estudo, os termos técnicos aceitos pela comunidade científica e as fronteiras do campo em relação a outras áreas correlatas.`,
        key: ["Definição", "Objeto de estudo", "Termos técnicos", ...(M.key || []).slice(0, 4)],
        principles: [
          `${tema} tem uma definição operacional (o que faz) e uma definição teórica (o que é).`,
          "Todo conceito químico precisa distinguir o nível macroscópico do microscópico.",
          "A linguagem científica exige precisão: substância ≠ material ≠ mistura.",
        ],
        examples: [
          `Definir ${tema} evita confusão com termos do senso comum (ex.: “natural” não significa “sem química”).`,
          "A boa definição permite comunicar resultados de experimentos sem ambiguidade.",
        ],
        exercises: [
          `Escreva, em UMA frase, sua definição de ${tema}.`,
          `Cite três palavras-chave que você associa a ${tema} e justifique.`,
          `Explique a diferença entre a visão do senso comum e a visão científica de ${tema}.`,
        ],
      };
    case "historia":
      return {
        ...M,
        simple: `**Como surgiu ${tema}?** A história ajuda a entender por que os conceitos atuais são como são. Muitas ideias foram substituídas quando novas evidências apareceram.`,
        formal: `**Linha do tempo.** O desenvolvimento histórico de ${tema} passa da alquimia (antes do séc. XVII) → Lavoisier e a Lei da Conservação da Massa (1789) → Dalton e a teoria atômica (1808) → Mendeleev e a tabela periódica (1869) → modelos atômicos modernos (séc. XX) → química verde e materiais avançados (séc. XXI).`,
        key: ["Alquimia", "Lavoisier (1789)", "Dalton (1808)", "Mendeleev (1869)", "Séc. XX — modelos atômicos", "Química contemporânea"],
        principles: [
          "A ciência é cumulativa: modelos antigos são refinados, não simplesmente descartados.",
          "Cada descoberta depende do avanço técnico e instrumental da época.",
          "Contexto social e econômico influencia o rumo das pesquisas.",
        ],
        formulas: [],
        examples: [
          "Lavoisier usou balanças de precisão para provar a conservação da massa.",
          "Marie Curie (1867–1934) — descobriu polônio e rádio, dois Prêmios Nobel.",
          "A química verde (anos 1990) é resposta ao impacto ambiental da indústria.",
        ],
        pitfalls: [
          "Achar que a ciência avança em linha reta — há disputas, erros e revisões.",
          "Reduzir a história a “nomes e datas” e ignorar as ideias por trás.",
        ],
        exercises: [
          `Monte uma linha do tempo com 5 marcos importantes para ${tema}.`,
          "Explique por que a Lei de Lavoisier foi um marco metodológico.",
          "Pesquise uma cientista brasileira e descreva sua contribuição.",
        ],
      };
    case "fundamentos":
      return {
        ...M,
        simple: `**Como ${tema} funciona por dentro?** Enquanto o "conceito" responde *o que é*, os fundamentos respondem *por que funciona*: são as leis, postulados e modelos que permitem **prever** o comportamento antes mesmo de fazer o experimento.`,
        formal: `**Arquitetura teórica de ${tema}.** O conhecimento se organiza em quatro camadas hierárquicas: (1) **postulados** — afirmações iniciais aceitas sem demonstração (ex.: átomos existem); (2) **leis** — regularidades quantitativas obtidas por medida (ex.: Lavoisier, Proust, Dalton); (3) **modelos** — representações simplificadas (ex.: modelo de Bohr, esferas rígidas); (4) **teorias** — explicações amplas, testáveis e capazes de fazer previsões novas (ex.: teoria cinética, teoria atômica moderna). Cada camada pode ser refinada sem derrubar as demais.`,
        key: ["Postulado", "Lei empírica", "Modelo científico", "Teoria unificadora", "Previsão testável", "Refutabilidade (Popper)"],
        principles: [
          "**Conservação da massa (Lavoisier, 1789)** — em sistema fechado a massa total não muda.",
          "**Proporções definidas (Proust)** e **múltiplas (Dalton)** — a composição de uma substância pura é fixa.",
          "**Relação micro ↔ macro** — propriedades observáveis (cor, ponto de fusão, condutividade) emergem da estrutura atômica e das ligações.",
        ],
        formulas: [
          { expr: "m(reagentes) = m(produtos)", desc: "Lei de Lavoisier — conservação da massa em sistema fechado." },
          { expr: "n = m / M", desc: "Relação massa ↔ mol — ponte quantitativa entre o mundo micro e macro." },
        ],
        examples: [
          "Queima de 12 g de C + 32 g de O₂ → 44 g de CO₂ (confirma Lavoisier).",
          "Água sempre com 11,2 % H e 88,8 % O em massa (Proust).",
          "H + O formam H₂O ou H₂O₂ em razões inteiras (Dalton).",
        ],
        pitfalls: [
          "Confundir **lei** (o que acontece) com **teoria** (por que acontece).",
          "Achar que modelo antigo está “errado” — geralmente é um caso particular de um modelo mais amplo.",
        ],
        exercises: [
          `Diferencie postulado, lei, modelo e teoria dentro de ${tema}, dando um exemplo de cada.`,
          "Um experimento contraria uma lei estabelecida. O que deve ser revisto primeiro: a medida, o modelo ou a teoria? Justifique.",
          "Por que uma teoria científica precisa ser refutável para ser considerada científica?",
        ],
      };
    case "classificacao":
      return {
        ...M,
        simple: `**Classificação e principais tipos.** Organizar em categorias facilita estudar ${tema}: cada grupo compartilha propriedades e comportamento parecidos.`,
        formal: `**Critérios de classificação.** Em ${tema}, os tipos são separados por: composição, comportamento em reações, estado físico, propriedades elétricas/térmicas e função química. A classificação é uma ferramenta — não um fim em si — e evolui com novas evidências.`,
        key: ["Critérios de classificação", "Categorias principais", "Exceções", "Fronteiras entre grupos"],
        principles: [
          "Toda classificação parte de um critério explícito.",
          "Existem casos-limite que dificultam encaixar em uma única categoria.",
          "Reclassificar é comum quando surgem novas técnicas de medida.",
        ],
        examples: [
          "Substâncias puras × misturas (critério: composição).",
          "Metais × não metais × semimetais (critério: propriedades elétricas).",
          "Ácidos × bases × sais × óxidos (critério: função química).",
        ],
        exercises: [
          `Proponha dois critérios diferentes para classificar exemplos de ${tema}.`,
          "Dê um exemplo de item difícil de classificar e explique por quê.",
          "Monte uma tabela comparando três categorias com 3 propriedades cada.",
        ],
      };
    case "propriedades":
      return {
        ...M,
        simple: `**Propriedades e características.** São qualidades que ajudam a identificar e diferenciar exemplos de ${tema} — cor, cheiro, ponto de fusão, condutividade, reatividade...`,
        formal: `**Propriedades físicas × químicas.** As propriedades físicas (densidade, PF, PE, solubilidade, condutividade) são observadas sem alterar a composição. As propriedades químicas (reatividade com O₂, ácidos, água) só se manifestam durante uma transformação química. Propriedades intensivas independem da quantidade; extensivas dependem.`,
        key: ["Físicas × químicas", "Intensivas × extensivas", "Ponto de fusão / ebulição", "Densidade", "Solubilidade", "Reatividade"],
        principles: [
          "Propriedades intensivas (densidade, PF, PE) permitem identificar substâncias.",
          "Propriedades extensivas (massa, volume) dependem da quantidade.",
          "Toda medida vem com uma incerteza — precisa ser reportada.",
        ],
        formulas: [
          { expr: "d = m / V", desc: "Densidade — massa por unidade de volume (g/cm³)." },
          { expr: "PE(H₂O) = 100 °C a 1 atm", desc: "Ponto de ebulição depende da pressão." },
        ],
        examples: [
          "Água tem d ≈ 1,00 g/cm³ a 4 °C; álcool ≈ 0,79 g/cm³.",
          "Ouro é reconhecido pela densidade (19,3 g/cm³) e cor característica.",
          "Ferro enferruja (propriedade química); ouro não (propriedade química).",
        ],
        exercises: [
          `Liste 5 propriedades que ajudariam a identificar exemplos de ${tema}.`,
          "Calcule a densidade de um objeto de 250 g que ocupa 100 cm³.",
          "Classifique cada propriedade como física ou química: cor, inflamabilidade, PF, reatividade com HCl.",
        ],
      };
    case "cotidiano":
      return {
        ...M,
        simple: `**${tema} no seu dia a dia.** Cozinha, banheiro, farmácia, jardim, celular — em cada canto da casa há exemplos práticos de ${tema}.`,
        formal: `**Química do cotidiano.** ${tema} explica fenômenos rotineiros: por que o pão cresce (fermentação — CO₂), por que o sabão limpa (micelas), por que a maçã escurece (oxidação enzimática), por que o vinagre desincrusta (ação ácida sobre carbonatos). A ciência ganha significado quando conecta teoria e vida real.`,
        key: ["Cozinha", "Higiene e limpeza", "Alimentos e conservação", "Saúde e medicamentos", "Ambiente"],
        principles: [
          "Todo produto que você usa passou por processos químicos.",
          "“Natural” não é sinônimo de “seguro”; “sintético” não é sinônimo de “tóxico”.",
          "Rótulos e bulas trazem informação química — vale a pena ler.",
        ],
        examples: [
          "Bicarbonato + vinagre → efervescência (reação ácido-base gerando CO₂).",
          "Sabão em pó tem tensoativos que emulsionam gordura em água.",
          "Aspirina (ácido acetilsalicílico) atua inibindo enzimas COX.",
          "Panela de pressão eleva o ponto de ebulição da água (~120 °C).",
        ],
        exercises: [
          `Escolha 3 produtos da sua casa e identifique onde ${tema} está presente.`,
          "Leia o rótulo de um alimento e classifique cada aditivo.",
          "Explique quimicamente por que geladeira conserva alimentos.",
        ],
      };
    case "aplicacoes":
      return {
        ...M,
        simple: `**Aplicações práticas e industriais.** ${tema} não fica só no livro — vira remédio, combustível, plástico, adubo, tinta, semicondutor e muito mais.`,
        formal: `**Impacto industrial.** ${tema} sustenta setores estratégicos: petroquímico (combustíveis, polímeros), farmacêutico (fármacos, vacinas), agroquímico (fertilizantes, defensivos), siderúrgico (metais), eletrônico (semicondutores, baterias), alimentício (conservação, aditivos) e ambiental (tratamento de água e resíduos).`,
        key: ["Petroquímica", "Farmacêutica", "Agroquímica", "Materiais", "Energia", "Ambiental"],
        principles: [
          "Escala industrial exige otimização de rendimento, custo e segurança.",
          "Química verde busca processos com menos resíduos e reagentes tóxicos.",
          "Toda aplicação industrial tem impacto econômico, social e ambiental.",
        ],
        examples: [
          "Haber-Bosch (N₂ + H₂ → NH₃) — produção mundial de fertilizantes.",
          "Craqueamento do petróleo — origem de gasolina, plásticos e solventes.",
          "Baterias de íon-lítio — celulares, notebooks e carros elétricos.",
          "Tratamento de água — cloração, floculação e filtração.",
        ],
        exercises: [
          `Escolha um setor industrial e explique 3 usos de ${tema} nele.`,
          "Pesquise um princípio da química verde e dê um exemplo.",
          "Calcule quantos gramas de NH₃ se obtêm de 28 g de N₂ (rend. 100%).",
        ],
      };
    case "curiosidade":
      return {
        ...M,
        simple: `**Curiosidades sobre ${tema}.** Fatos que raramente aparecem nos livros didáticos, mas ajudam a fixar o conteúdo — e ainda rendem uma boa conversa.`,
        formal: `**Curiosidades e fatos marcantes.** Anedotas científicas humanizam ${tema}, mostram serendipidade em descobertas e evidenciam como a química influenciou guerras, artes, culinária, esportes e até a moda ao longo dos séculos.`,
        key: ["Fatos históricos", "Descobertas acidentais", "Recordes", "Química nas artes", "Química no esporte"],
        principles: [
          "Muitas descobertas foram acidentais (penicilina, teflon, super cola, post-it).",
          "Nomes de elementos frequentemente homenageiam lugares e cientistas.",
          "A química está presente em receitas culinárias há milênios.",
        ],
        examples: [
          "O elemento gálio derrete na palma da mão (PF ≈ 29,8 °C).",
          "O nome “oxigênio” (Lavoisier) significa “gerador de ácidos” — hoje sabemos que estava errado.",
          "A cor azul do vitral gótico usa cobalto — segredo guardado séculos.",
          "Refrigerante fica com gás por causa da alta pressão de CO₂ dissolvido.",
        ],
        exercises: [
          "Pesquise a origem do nome de 3 elementos da tabela periódica.",
          `Escolha uma curiosidade sobre ${tema} e explique a química por trás dela.`,
          "Cite uma descoberta acidental e o que ela mudou no mundo.",
        ],
      };
    case "exercicios":
      return {
        ...M,
        simple: `**Exercícios resolvidos e questões de fixação.** Chegou a hora de treinar ${tema}: primeiro modelos resolvidos, depois questões para você tentar sozinho(a).`,
        formal: `**Recomendações de estudo.** Resolva primeiro os exercícios sem consultar a resposta; use a resolução comentada apenas para conferir raciocínio, não para copiar. Reforce com questões de vestibular (ENEM, FUVEST, UNICAMP, UFRGS) — elas cobram interpretação, não decoreba.`,
        key: ["Resolver antes de consultar", "Refazer o que errou", "Explicar para outra pessoa", "Simular tempo de prova"],
        principles: [
          "Aprende quem faz — leitura passiva não fixa conteúdo.",
          "Errar é parte do processo: cada erro identifica uma lacuna.",
          "Explicar em voz alta consolida mais do que reler.",
        ],
        examples: [
          `Exemplo 1 — Identifique se cada item envolve ${tema}: (a) queima de vela; (b) derretimento do gelo; (c) enferrujamento.`,
          `Exemplo 2 — Cite 3 conceitos-chave de ${tema} e um exemplo de cada.`,
          `Exemplo 3 — Um problema típico de vestibular envolvendo ${tema}.`,
        ],
        exercises: [
          `(ENEM-adap.) Descreva uma situação do cotidiano que envolva ${tema}.`,
          `(FUVEST-adap.) Justifique por que ${tema} é importante para a sociedade.`,
          `(UNICAMP-adap.) Elabore uma pergunta sobre ${tema} para outro estudante.`,
          "Refaça, sem consultar, um exercício que você errou hoje.",
          "Explique em 3 linhas, para alguém que nunca estudou, o que você aprendeu.",
        ],
      };
    default:
      return base;
  }
}

type Material = { name: string; url: string };

function PublishChecklist({
  slug, title, lesson, override, content, hasHeroImage, onFlagChange,
}: {
  slug: string; title: string; lesson?: string;
  override: any; content: Section; hasHeroImage: boolean;
  onFlagChange: (patch: { edit_complete?: boolean; reviewed?: boolean; published?: boolean }) => void;
}) {
  const [busy, setBusy] = useState<string | null>(null);
  const items: { key: string; label: string; ok: boolean }[] = [
    { key: "hero", label: "Imagem de capa", ok: hasHeroImage },
    { key: "simple", label: "Ideia principal (fundamental)", ok: !!(content.simple && content.simple.trim().length > 20) },
    { key: "formal", label: "Definição formal (médio/superior)", ok: !!(content.formal && content.formal.trim().length > 20) },
    { key: "key", label: "Conceitos-chave (mín. 3)", ok: (content.key?.length || 0) >= 3 },
    { key: "principles", label: "Princípios e leis (mín. 2)", ok: (content.principles?.length || 0) >= 2 },
    { key: "daily", label: "Aplicações no cotidiano", ok: (override?.daily_life?.length || 0) >= 1 },
    { key: "curio", label: "Curiosidades", ok: (override?.curiosities?.length || 0) >= 1 },
    { key: "pitfalls", label: "Alertas / erros comuns", ok: (content.pitfalls?.length || 0) >= 1 },
    { key: "refs", label: "Referências", ok: (content.refs?.length || 0) >= 1 },
    { key: "exercises", label: "Exercícios de revisão", ok: (content.exercises?.length || 0) >= 3 },
    { key: "bncc", label: "Códigos BNCC", ok: (override?.bncc_codes?.length || 0) >= 1 },
    { key: "plan", label: "Plano de aula", ok: !!(override?.lesson_plan && override.lesson_plan.length > 40) },
    { key: "video", label: "Vídeo-aula (opcional)", ok: !!override?.video_url },
    { key: "materials", label: "Materiais anexados (opcional)", ok: (override?.materials?.length || 0) >= 1 },
  ];
  const required = items.filter(i => !["video","materials"].includes(i.key));
  const done = required.filter(i => i.ok).length;
  const pct = Math.round((done / required.length) * 100);

  const editComplete = !!override?.edit_complete;
  const reviewed = !!override?.reviewed;
  const published = !!override?.published;

  const toggle = async (flag: "edit_complete" | "reviewed" | "published") => {
    const cur = { edit_complete: editComplete, reviewed, published };
    const next = !cur[flag];
    if (flag === "reviewed" && next && !editComplete) { toast.error("Conclua 'Edição completa' antes"); return; }
    if (flag === "published" && next && (!editComplete || !reviewed)) { toast.error("Conclua edição e revisão antes"); return; }
    setBusy(flag);
    const patch: any = { slug, title, lesson, [flag]: next };
    if (!next && flag !== "published" && cur.published) patch.published = false;
    if (!next && flag === "edit_complete" && cur.reviewed) patch.reviewed = false;
    const { error } = await supabase.from("topic_overrides").upsert(patch, { onConflict: "slug" });
    setBusy(null);
    if (error) { toast.error(error.message); return; }
    onFlagChange({
      [flag]: next,
      ...(patch.published === false ? { published: false } : {}),
      ...(patch.reviewed === false && flag === "edit_complete" ? { reviewed: false } : {}),
    });
    toast.success("Atualizado");
  };

  return (
    <Card className="mb-4 p-4 bg-white/95 border-0">
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-2 text-[#4C1D95] font-bold">
          <Target size={18} /> Checklist de publicação (admin)
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-slate-600">
            🕓 Última atualização:{" "}
            <span className="font-semibold text-slate-800">
              {override?.updated_at
                ? new Date(override.updated_at as string).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })
                : "—"}
            </span>
          </span>
          <span className="font-semibold text-slate-600">{done}/{required.length} · {pct}%</span>
        </div>
      </div>
      <div className="w-full h-2 bg-slate-200 rounded overflow-hidden mb-3">
        <div className="h-full bg-gradient-to-r from-violet-500 to-emerald-500 transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="grid sm:grid-cols-2 gap-1.5 mb-4">
        {items.map(it => (
          <div key={it.key} className={`flex items-center gap-2 text-xs px-2 py-1.5 rounded border ${it.ok ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-slate-50 border-slate-200 text-slate-600"}`}>
            <input type="checkbox" checked={it.ok} readOnly className="accent-emerald-600" />
            <span className="flex-1">{it.label}</span>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-3 gap-2 pt-3 border-t border-slate-200">
        <label className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded border text-sm font-semibold ${editComplete ? "bg-amber-50 border-amber-300 text-amber-800" : "bg-white border-slate-300 text-slate-600"} ${busy === "edit_complete" ? "opacity-50" : ""}`}>
          <input type="checkbox" checked={editComplete} disabled={busy !== null} onChange={() => toggle("edit_complete")} className="accent-amber-600" />
          1. Edição completa
        </label>
        <label className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded border text-sm font-semibold ${reviewed ? "bg-blue-50 border-blue-300 text-blue-800" : "bg-white border-slate-300 text-slate-600"} ${!editComplete ? "opacity-50 pointer-events-none" : ""}`}>
          <input type="checkbox" checked={reviewed} disabled={!editComplete || busy !== null} onChange={() => toggle("reviewed")} className="accent-blue-600" />
          2. Revisado
        </label>
        <label className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded border text-sm font-semibold ${published ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-white border-slate-300 text-slate-600"} ${(!editComplete || !reviewed) ? "opacity-50 pointer-events-none" : ""}`}>
          <input type="checkbox" checked={published} disabled={!editComplete || !reviewed || busy !== null} onChange={() => toggle("published")} className="accent-emerald-600" />
          3. Publicar
        </label>
      </div>
    </Card>
  );
}


export default function TopicoDetalhe() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const title = params.get("t") || (slug ?? "Tópico").replace(/-/g, " ");
  const lesson = params.get("lesson") || "";
  const back = params.get("back") || "/cursos";
  const autoEdit = params.get("edit") === "1";

  const classificationSource = lesson && classify(title) === "geral" ? `${lesson} ${title}` : title;
  const generated = applyAspect(buildContent(classificationSource), title, lesson);
  const displayTitle = lesson ? `${title} — ${lesson}` : title;

  const [isAdmin, setIsAdmin] = useState(false);
  const [override, setOverride] = useState<(Partial<Section> & { image_url?: string; video_url?: string; footer_image_url?: string; materials?: Material[]; daily_life?: string[]; curiosities?: string[]; fun_facts?: string[]; lesson_plan?: string; bncc_codes?: BnccCode[]; section_images?: Record<string, string>; edit_complete?: boolean; reviewed?: boolean; published?: boolean; updated_at?: string | null }) | null>(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadingFooter, setUploadingFooter] = useState(false);
  const [generatingPlan, setGeneratingPlan] = useState(false);
  const [form, setForm] = useState<any>(null);

  useEffect(() => {
    (async () => {
      const { data: u } = await supabase.auth.getUser();
      if (u.user) {
        const { data } = await supabase.rpc("has_role", { _user_id: u.user.id, _role: "admin" });
        setIsAdmin(!!data);
      }
    })();
  }, []);

  useEffect(() => {
    if (!slug) return;
    (async () => {
      const { data } = await supabase.from("topic_overrides").select("*").eq("slug", slug).maybeSingle();
      if (data) {
        setOverride({
          simple: data.simple ?? undefined,
          formal: data.formal ?? undefined,
          key: (data.keys as any) ?? undefined,
          principles: (data.principles as any) ?? undefined,
          formulas: (data.formulas as any) ?? undefined,
          examples: (data.examples as any) ?? undefined,
          pitfalls: (data.pitfalls as any) ?? undefined,
          exercises: (data.exercises as any) ?? undefined,
          refs: (data.refs as any) ?? undefined,
          image_url: data.image_url ?? undefined,
          video_url: (data as any).video_url ?? undefined,
          footer_image_url: (data as any).footer_image_url ?? undefined,
          materials: ((data as any).materials as Material[]) ?? [],
          daily_life: ((data as any).daily_life as string[]) ?? undefined,
          curiosities: ((data as any).curiosities as string[]) ?? undefined,
          fun_facts: ((data as any).fun_facts as string[]) ?? undefined,
          lesson_plan: (data as any).lesson_plan ?? undefined,
          bncc_codes: ((data as any).bncc_codes as BnccCode[]) ?? undefined,
          section_images: ((data as any).section_images as Record<string,string>) ?? {},
          edit_complete: !!(data as any).edit_complete,
          reviewed: !!(data as any).reviewed,
          published: !!(data as any).published,
          updated_at: (data as any).updated_at ?? null,
        });
      }
    })();
  }, [slug]);

  const c: Section = {
    simple: override?.simple || generated.simple,
    formal: override?.formal || generated.formal,
    key: override?.key?.length ? override.key : generated.key,
    principles: override?.principles?.length ? override.principles : generated.principles,
    formulas: override?.formulas?.length ? override.formulas : generated.formulas,
    examples: override?.examples?.length ? override.examples : generated.examples,
    pitfalls: override?.pitfalls?.length ? override.pitfalls : generated.pitfalls,
    exercises: override?.exercises?.length ? override.exercises : generated.exercises,
    refs: override?.refs?.length ? override.refs : generated.refs,
  };

  const heroQuery = (() => {
    for (const m of EXAMPLE_IMAGE_MAP) if (m.keys.test(classificationSource)) return m.query;
    const cat = classify(classificationSource);
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
  const imgUrl = override?.image_url || `https://loremflickr.com/1200/600/${encodeURIComponent(heroQuery)}?lock=${Math.abs(hash(displayTitle)) % 9999}`;

  const sectionImg = (key: string) => override?.section_images?.[key];
  const applySectionImage = (key: string, url: string | null) => {
    setOverride((o) => {
      const cur = { ...(o?.section_images || {}) };
      if (url) cur[key] = url; else delete cur[key];
      return { ...(o || {}), section_images: cur };
    });
  };

  const startEdit = () => {
    const pack = funContent(classificationSource);
    setForm({
      simple: c.simple,
      formal: c.formal,
      keys: c.key.join("\n"),
      principles: c.principles.join("\n"),
      formulas: (c.formulas || []).map(f => `${f.expr} | ${f.desc}`).join("\n"),
      examples: c.examples.join("\n"),
      pitfalls: c.pitfalls.join("\n"),
      exercises: c.exercises.join("\n"),
      refs: c.refs.join("\n"),
      daily_life: (override?.daily_life?.length ? override.daily_life : pack.dailyLife).join("\n"),
      curiosities: (override?.curiosities?.length ? override.curiosities : pack.curiosities).join("\n"),
      fun_facts: (override?.fun_facts?.length ? override.fun_facts : pack.funFacts).join("\n"),
      image_url: override?.image_url || "",
      video_url: override?.video_url || "",
      footer_image_url: override?.footer_image_url || "",
      materials: (override?.materials || []).map(m => `${m.name} | ${m.url}`).join("\n"),
      lesson_plan: override?.lesson_plan || "",
      bncc_codes: (override?.bncc_codes || []).map(b => `${b.type === "BNCC_DIGITAL" ? "DIG" : "BNC"} | ${b.code} | ${b.label}`).join("\n"),
    });
    setEditing(true);
    setTimeout(() => {
      document.getElementById("topic-admin-editor")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  useEffect(() => {
    if (autoEdit && isAdmin && !editing) startEdit();
    // eslint-disable-next-line
  }, [autoEdit, isAdmin]);

  const uploadMaterial = async (file: File) => {
    if (!slug) return;
    setUploading(true);
    const path = `topicos/${slug}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]+/g, "_")}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file, { upsert: false });
    if (error) { setUploading(false); toast.error(error.message); return; }
    const { data: signed } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365);
    const url = signed?.signedUrl || "";
    const line = `${file.name} | ${url}`;
    setForm((f: any) => ({ ...f, materials: f.materials ? f.materials + "\n" + line : line }));
    setUploading(false);
    toast.success("Material anexado — lembre de salvar");
  };

  const uploadFooterImage = async (file: File, opts?: { instant?: boolean }) => {
    if (!slug) return;
    setUploadingFooter(true);
    const path = `topicos/${slug}/footer-${Date.now()}-${file.name.replace(/[^a-zA-Z0-9._-]+/g, "_")}`;
    const { error } = await supabase.storage.from("course-materials").upload(path, file, { upsert: false });
    if (error) { setUploadingFooter(false); toast.error(error.message); return; }
    const { data: signed } = await supabase.storage.from("course-materials").createSignedUrl(path, 60 * 60 * 24 * 365);
    const url = signed?.signedUrl || "";
    if (opts?.instant) {
      const { error: upErr } = await supabase.from("topic_overrides").upsert(
        { slug, title, lesson, footer_image_url: url } as any,
        { onConflict: "slug" }
      );
      setUploadingFooter(false);
      if (upErr) { toast.error(upErr.message); return; }
      setOverride((o) => ({ ...(o || {}), footer_image_url: url }));
      toast.success("Imagem adicionada ao final do tópico");
      return;
    }
    setForm((f: any) => ({ ...f, footer_image_url: url }));
    setUploadingFooter(false);
    toast.success("Imagem anexada — lembre de salvar");
  };



  const save = async () => {
    if (!slug) return;
    setSaving(true);
    const toLines = (s: string) => s.split("\n").map(x => x.trim()).filter(Boolean);
    const formulas = toLines(form.formulas).map((l: string) => {
      const [expr, ...rest] = l.split("|");
      return { expr: expr.trim(), desc: rest.join("|").trim() };
    });
    const materials = toLines(form.materials).map((l: string) => {
      const [name, ...rest] = l.split("|");
      return { name: name.trim(), url: rest.join("|").trim() };
    }).filter((m: Material) => m.name && m.url);
    const bncc_codes: BnccCode[] = toLines(form.bncc_codes || "").map((l: string) => {
      const parts = l.split("|").map(x => x.trim());
      if (parts.length >= 3) {
        const t = parts[0].toUpperCase();
        return { type: (t.startsWith("DIG") ? "BNCC_DIGITAL" : "BNCC") as BnccCode["type"], code: parts[1].toUpperCase(), label: parts.slice(2).join(" | ") };
      }
      if (parts.length === 2) return { type: "BNCC" as const, code: parts[0].toUpperCase(), label: parts[1] };
      return { type: "BNCC" as const, code: parts[0].toUpperCase(), label: "" };
    }).filter(b => b.code && b.label);
    const payload = {
      slug,
      title,
      lesson,
      simple: form.simple.trim(),
      formal: form.formal.trim(),
      keys: toLines(form.keys),
      principles: toLines(form.principles),
      formulas,
      examples: toLines(form.examples),
      pitfalls: toLines(form.pitfalls),
      exercises: toLines(form.exercises),
      refs: toLines(form.refs),
      daily_life: toLines(form.daily_life || ""),
      curiosities: toLines(form.curiosities || ""),
      fun_facts: toLines(form.fun_facts || ""),
      image_url: form.image_url.trim() || null,
      video_url: form.video_url.trim() || null,
      footer_image_url: (form.footer_image_url || "").trim() || null,
      materials,
      lesson_plan: (form.lesson_plan || "").trim() || null,
      bncc_codes,
    };
    const { error } = await supabase.from("topic_overrides").upsert(payload, { onConflict: "slug" });
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success("Conteúdo do tópico salvo");
    setOverride({
      simple: payload.simple, formal: payload.formal,
      key: payload.keys, principles: payload.principles, formulas: payload.formulas,
      examples: payload.examples, pitfalls: payload.pitfalls, exercises: payload.exercises,
      refs: payload.refs, image_url: payload.image_url || undefined,
      video_url: payload.video_url || undefined,
      footer_image_url: payload.footer_image_url || undefined,
      materials: payload.materials,
      daily_life: payload.daily_life,
      curiosities: payload.curiosities,
      fun_facts: payload.fun_facts,
      lesson_plan: payload.lesson_plan || undefined,
      bncc_codes: payload.bncc_codes,
    });
    setEditing(false);
  };

  const generateLessonPlan = async () => {
    if (!isAdmin) return;
    setGeneratingPlan(true);
    try {
      const context = [c.simple, c.formal, ...(c.key || []), ...(c.principles || [])].filter(Boolean).join("\n");
      const { data, error } = await supabase.functions.invoke("generate-topic-lesson-plan", {
        body: { title, lesson, course: lesson, stage: "Ensino Médio", duration: "50 minutos", context },
      });
      if (error || (data as any)?.error) {
        toast.error((data as any)?.error ?? error?.message ?? "Falha ao gerar plano");
        return;
      }
      const plan = String((data as any).plan ?? "").trim();
      const bncc: BnccCode[] = Array.isArray((data as any).bncc) ? (data as any).bncc : [];
      if (editing && form) {
        setForm((f: any) => ({
          ...f,
          lesson_plan: plan,
          bncc_codes: bncc.map(b => `${b.type === "BNCC_DIGITAL" ? "DIG" : "BNC"} | ${b.code} | ${b.label}`).join("\n"),
        }));
        toast.success("Plano gerado — revise e clique em Salvar");
      } else {
        if (!slug) return;
        const { error: upErr } = await supabase.from("topic_overrides").upsert(
          { slug, title, lesson, lesson_plan: plan, bncc_codes: bncc } as any,
          { onConflict: "slug" }
        );
        if (upErr) { toast.error(upErr.message); return; }
        setOverride((o) => ({ ...(o || {}), lesson_plan: plan, bncc_codes: bncc }));
        toast.success("Plano de aula gerado e salvo");
      }
    } finally {
      setGeneratingPlan(false);
    }
  };

  const resetToGenerated = async () => {
    if (!slug) return;
    if (!confirm("Remover edição personalizada e voltar ao conteúdo gerado automaticamente?")) return;
    const { error } = await supabase.from("topic_overrides").delete().eq("slug", slug);
    if (error) { toast.error(error.message); return; }
    setOverride(null);
    setEditing(false);
    toast.success("Edição removida");
  };

  const videoEmbed = (u?: string) => {
    if (!u) return null;
    const yt = u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{6,})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}`;
    const vm = u.match(/vimeo\.com\/(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
    return u;
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900">
      <div className="max-w-4xl mx-auto p-4 py-6">
        <button
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate(back))}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4"
        >
          <ArrowLeft size={18} /> Tópico anterior
        </button>

        {isAdmin && <PublishChecklist
          slug={slug!} title={title} lesson={lesson}
          override={override}
          content={c}
          hasHeroImage={!!(sectionImg("hero") || override?.image_url)}
          onFlagChange={(patch) => setOverride((o) => ({ ...(o || {}), ...patch }))}
        />}


        <Card className="overflow-hidden mb-6 border-0">
          <div className="relative h-56 md:h-72 bg-gradient-to-br from-violet-700 to-indigo-900">
            <EditableImage
              src={sectionImg("hero") || imgUrl}
              alt={`Ilustração de ${displayTitle}`}
              className="w-full h-full opacity-80"
              isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
              imageKey="hero" currentOverride={sectionImg("hero")}
              onChange={(u) => applySectionImage("hero", u)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur px-2 py-1 rounded text-xs mb-2">
                <GraduationCap size={12} /> {levelBadge(title)}
              </div>
              {lesson && <div className="text-xs uppercase tracking-wider text-white/70 mb-1">{lesson}</div>}
              <h1 className="text-2xl md:text-4xl font-black leading-tight">{title}</h1>
            </div>
          </div>


          <div className="p-6 md:p-8 space-y-6">
            {/* Ideia principal — linguagem simples */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                <BookOpen size={18} /> Ideia principal (fundamental)
              </div>
              <div className="flex flex-col gap-4">
                <EditableImage
                  src={sectionImg("simple") || topicImage(`${title} conceito`, 1200, 500)}
                  alt={`Ilustração — ${title}`}
                  className="w-full h-56 md:h-72 rounded-lg border border-slate-200 overflow-hidden"
                  isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
                  imageKey="simple" currentOverride={sectionImg("simple")}
                  onChange={(u) => applySectionImage("simple", u)}
                />
                <p className="text-slate-700 leading-relaxed">{c.simple}</p>
              </div>
            </section>

            {/* Definição formal */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                <Atom size={18} /> Definição formal (ensino médio / superior)
              </div>
              <div className="flex flex-col gap-4">
                <EditableImage
                  src={sectionImg("formal") || topicImage(`${title} definicao formal`, 1200, 500)}
                  alt={`Definição de ${title}`}
                  className="w-full h-56 md:h-72 rounded-lg border border-slate-200 overflow-hidden"
                  isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
                  imageKey="formal" currentOverride={sectionImg("formal")}
                  onChange={(u) => applySectionImage("formal", u)}
                />
                <p className="text-slate-700 leading-relaxed">{c.formal}</p>
              </div>
            </section>

            {/* Conceitos-chave — cartões com explicação + imagem contextual */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-3">
                <Lightbulb size={18} /> Conceitos-chave (com explicação)
              </div>
              <div className="flex flex-col gap-5">
                {c.key.map((k, i) => (
                  <div key={i} className="rounded-lg border border-violet-200 bg-violet-50/60 overflow-hidden">
                    <div className="w-full h-64 overflow-hidden">
                      <EditableImage
                        src={sectionImg(`key_${i}`) || topicImage(`${title} ${k}`, 960, 400)}
                        alt={`Ilustração de ${k}`}
                        className="w-full h-full"
                        isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
                        imageKey={`key_${i}`} currentOverride={sectionImg(`key_${i}`)}
                        onChange={(u) => applySectionImage(`key_${i}`, u)}
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-base font-bold text-[#4C1D95] mb-1">{k}</div>
                      <div className="text-sm text-slate-700 leading-relaxed">{explainKey(k)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Princípios — cabeçalho destacado + explicação + imagem */}
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-3">
                <Target size={18} /> Princípios e leis fundamentais
              </div>
              <ol className="space-y-5">
                {c.principles.map((p, i) => {
                  const { head, rest } = highlightPrinciple(p);
                  const explain = explainPrinciple(p);
                  return (
                    <li key={i} className="rounded-lg border border-slate-200 bg-white overflow-hidden">
                      <div className="w-full h-64 overflow-hidden">
                        <EditableImage
                          src={sectionImg(`principle_${i}`) || topicImage(`${title} ${head}`, 960, 400)}
                          alt={`Ilustração de ${head}`}
                          className="w-full h-full"
                          isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
                          imageKey={`principle_${i}`} currentOverride={sectionImg(`principle_${i}`)}
                          onChange={(u) => applySectionImage(`principle_${i}`, u)}
                        />
                      </div>
                      <div className="p-4 flex gap-3">
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

            {/* Aplicações no cotidiano — lista unificada, sem duplicar exemplos */}
            {(() => {
              const pack = funContent(classificationSource);
              const dailyLifeOverride = override?.daily_life?.length ? override.daily_life : [];
              // Une exemplos da base + cotidiano (override tem prioridade), remove duplicatas
              const seen = new Set<string>();
              const dailyLife = [...(dailyLifeOverride.length ? dailyLifeOverride : pack.dailyLife), ...c.examples]
                .filter((t) => {
                  const k = t.trim().toLowerCase();
                  if (seen.has(k)) return false;
                  seen.add(k);
                  return true;
                });
              const curiosities = override?.curiosities?.length ? override.curiosities : pack.curiosities;
              // Só usa funFacts do override; sem fallback genérico (evita repetição em todos os tópicos)
              const funFacts = override?.fun_facts?.length ? override.fun_facts : [];
              const seenC = new Set<string>();
              const allCuriosities = [...curiosities, ...funFacts].filter((t) => {
                const k = t.trim().toLowerCase();
                if (seenC.has(k)) return false;
                seenC.add(k);
                return true;
              });
              return (
                <>
                  <section className="rounded-xl p-4 bg-emerald-50 border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2">
                      <FlaskConical size={18} /> Aplicações no cotidiano
                    </div>
                    <ul className="space-y-5 text-sm text-slate-700">
                      {dailyLife.map((t, i) => (
                        <li key={i} className="rounded-lg border border-emerald-200 bg-white overflow-hidden">
                          <div className="w-full h-64 overflow-hidden">
                            <EditableImage
                              src={sectionImg(`daily_${i}`) || topicImage(`${title} ${t}`, 960, 400)}
                              alt=""
                              className="w-full h-full"
                              isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
                              imageKey={`daily_${i}`} currentOverride={sectionImg(`daily_${i}`)}
                              onChange={(u) => applySectionImage(`daily_${i}`, u)}
                            />
                          </div>
                          <div className="p-4 leading-relaxed">{t}</div>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="rounded-xl p-4 bg-violet-50 border border-violet-200">
                    <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                      <Sparkles size={18} /> Curiosidades
                    </div>
                    <ul className="space-y-5 text-sm text-slate-700">
                      {allCuriosities.map((t, i) => (
                        <li key={i} className="rounded-lg border border-violet-200 bg-white overflow-hidden">
                          <div className="w-full h-64 overflow-hidden">
                            <EditableImage
                              src={sectionImg(`curio_${i}`) || topicImage(`${title} ${t}`, 960, 400)}
                              alt=""
                              className="w-full h-full"
                              isAdmin={isAdmin} slug={slug!} title={title} lesson={lesson}
                              imageKey={`curio_${i}`} currentOverride={sectionImg(`curio_${i}`)}
                              onChange={(u) => applySectionImage(`curio_${i}`, u)}
                            />
                          </div>
                          <div className="p-4 leading-relaxed">{t}</div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </>
              );
            })()}

            {/* Alertas — erros comuns / armadilhas conceituais */}
            <section className="rounded-xl p-4 bg-red-50 border border-red-200">
              <div className="flex items-center gap-2 text-red-700 font-bold mb-2">
                <AlertTriangle size={18} /> Alertas (erros comuns)
              </div>
              <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                {c.pitfalls.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </section>




            {/* Vídeo-aula (opcional) */}
            {override?.video_url && (
              <section>
                <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                  <Video size={18} /> Vídeo-aula
                </div>
                <div className="aspect-video rounded-lg overflow-hidden bg-black">
                  <iframe src={videoEmbed(override.video_url)!} className="w-full h-full" allowFullScreen title={`Vídeo — ${title}`} />
                </div>
              </section>
            )}

            {/* Materiais complementares */}
            {override?.materials && override.materials.length > 0 && (
              <section className="rounded-xl p-4 bg-indigo-50 border border-indigo-200">
                <div className="flex items-center gap-2 text-indigo-800 font-bold mb-3">
                  <Paperclip size={18} /> Materiais complementares
                </div>
                <ul className="space-y-1.5">
                  {override.materials.map((m, i) => (
                    <li key={i}>
                      <a href={m.url} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-indigo-700 hover:text-indigo-900 hover:underline">
                        <ExternalLink size={14} /> <span className="flex-1">{m.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}


            {/* Plano de aula (admin gera) */}
            {(override?.lesson_plan || (override?.bncc_codes && override.bncc_codes.length > 0) || isAdmin) && (
              <section className="rounded-xl p-4 bg-emerald-50 border border-emerald-200">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-3">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold">
                    <FileText size={18} /> Plano de aula
                  </div>
                  {isAdmin && (
                    <Button size="sm" onClick={generateLessonPlan} disabled={generatingPlan}
                      className="bg-emerald-600 hover:bg-emerald-700">
                      <Wand2 size={14} className="mr-1" />
                      {generatingPlan ? "Gerando..." : override?.lesson_plan ? "Regenerar com IA" : "Gerar com IA"}
                    </Button>
                  )}
                </div>
                {override?.lesson_plan ? (
                  <pre className="whitespace-pre-wrap font-sans text-sm text-slate-800 leading-relaxed">
                    {override.lesson_plan}
                  </pre>
                ) : (
                  <p className="text-xs text-emerald-800/80">
                    {isAdmin
                      ? "Nenhum plano publicado ainda. Clique em Gerar com IA para criar um plano moderno alinhado à BNCC."
                      : "Plano de aula ainda não publicado para este tópico."}
                  </p>
                )}

                {override?.bncc_codes && override.bncc_codes.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold mb-2 text-sm">
                      <Tag size={14} /> Códigos BNCC / BNCC Digital
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {override.bncc_codes.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs bg-white border border-emerald-200 rounded-md px-2 py-1.5">
                          <span className={`shrink-0 font-mono font-bold px-1.5 py-0.5 rounded ${b.type === "BNCC_DIGITAL" ? "bg-sky-100 text-sky-800" : "bg-emerald-100 text-emerald-800"}`}>
                            {b.code}
                          </span>
                          <span className="text-slate-700">{b.label}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-slate-500 mt-2">
                      Legenda: <span className="font-mono text-emerald-700">verde</span> = BNCC · <span className="font-mono text-sky-700">azul</span> = BNCC Digital / Computação
                    </p>
                  </div>
                )}
              </section>
            )}

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

            {/* Quiz avaliativo travado (janela fullscreen) — vale nota */}
            <LockedQuiz
              slug={slug ?? ""}
              title={title}
              category={classify(classificationSource)}
              courseId={params.get("courseId")}
            />



            {/* Imagem final do tópico (upload/exibição) */}
            {(override?.footer_image_url || isAdmin) && (
              <section className="rounded-xl p-4 bg-violet-50 border border-violet-200">
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  <div className="flex items-center gap-2 text-[#4C1D95] font-bold">
                    <Sparkles size={18} /> Imagem do tópico
                  </div>
                  {isAdmin && (
                    <div className="flex items-center gap-2">
                      <label className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-violet-300 bg-white hover:bg-violet-100 text-[#4C1D95] cursor-pointer">
                        <Upload size={12} />
                        {uploadingFooter ? "Enviando..." : override?.footer_image_url ? "Substituir imagem" : "Inserir imagem"}
                        <input type="file" accept="image/*" className="hidden" disabled={uploadingFooter}
                          onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFooterImage(f, { instant: true }); e.currentTarget.value = ""; }} />
                      </label>
                      {override?.footer_image_url && (
                        <Button size="sm" variant="outline" onClick={async () => {
                          if (!slug) return;
                          if (!confirm("Remover a imagem final deste tópico?")) return;
                          const { error } = await supabase.from("topic_overrides").upsert(
                            { slug, title, lesson, footer_image_url: null } as any,
                            { onConflict: "slug" }
                          );
                          if (error) { toast.error(error.message); return; }
                          setOverride((o) => ({ ...(o || {}), footer_image_url: undefined }));
                          toast.success("Imagem removida");
                        }}>
                          <Trash2 size={12} className="mr-1" /> Remover
                        </Button>
                      )}
                    </div>
                  )}
                </div>
                {override?.footer_image_url ? (
                  <img src={override.footer_image_url} alt={`Imagem — ${title}`}
                    className="w-full rounded-lg border border-violet-200 bg-white" loading="lazy" />
                ) : (
                  <p className="text-xs text-slate-600">
                    Nenhuma imagem inserida ainda. Use o botão acima para anexar uma imagem que ficará ao final deste tópico.
                  </p>
                )}
              </section>
            )}


            {isAdmin && (
              <section id="topic-admin-editor" className="rounded-xl p-4 bg-amber-50 border border-amber-300">
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                  <div className="flex items-center gap-2 text-amber-800 font-bold">
                    <Pencil size={18} /> Edição do conteúdo (admin)
                  </div>
                  <div className="flex gap-2">
                    {!editing && (
                      <Button size="sm" onClick={startEdit} className="bg-amber-600 hover:bg-amber-700">
                        <Pencil size={14} className="mr-1" /> Editar este tópico
                      </Button>
                    )}
                    {override && (
                      <Button size="sm" variant="outline" onClick={resetToGenerated}>
                        <Trash2 size={14} className="mr-1" /> Remover edição
                      </Button>
                    )}
                  </div>
                </div>

                {override && !editing && (
                  <p className="text-xs text-amber-700">
                    Este tópico está usando conteúdo editado manualmente (salvo em <code>topic_overrides</code>, slug: <code>{slug}</code>).
                  </p>
                )}
                {!override && !editing && (
                  <p className="text-xs text-amber-700">
                    Conteúdo gerado automaticamente. Clique em <b>Editar</b> para personalizar textos, exemplos, fórmulas e referências deste tópico.
                  </p>
                )}

                {editing && form && (
                  <div className="space-y-3 mt-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Ideia principal (linguagem simples)</label>
                      <Textarea rows={3} value={form.simple} onChange={e => setForm({ ...form, simple: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Conceitos-chave (um por linha)</label>
                      <Textarea rows={4} value={form.keys} onChange={e => setForm({ ...form, keys: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Princípios / leis (um por linha)</label>
                      <Textarea rows={4} value={form.principles} onChange={e => setForm({ ...form, principles: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Fórmulas (uma por linha, formato: <code>expressão | descrição</code>)</label>
                      <Textarea rows={3} value={form.formulas} onChange={e => setForm({ ...form, formulas: e.target.value })} placeholder="E = h·ν | Energia do fóton" />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700">Erros comuns (um por linha)</label>
                      <Textarea rows={3} value={form.pitfalls} onChange={e => setForm({ ...form, pitfalls: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-sky-800 flex items-center gap-1">
                        <Home size={12} /> Aplicação no cotidiano (um item por linha)
                      </label>
                      <Textarea rows={4} value={form.daily_life} onChange={e => setForm({ ...form, daily_life: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#4C1D95] flex items-center gap-1">
                        <Sparkles size={12} /> Curiosidades (uma por linha)
                      </label>
                      <Textarea rows={4} value={form.curiosities} onChange={e => setForm({ ...form, curiosities: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-amber-800 flex items-center gap-1">
                        <Smile size={12} /> Fatos engraçados (um por linha)
                      </label>
                      <Textarea rows={4} value={form.fun_facts} onChange={e => setForm({ ...form, fun_facts: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Exercícios sugeridos (um por linha)</label>
                      <Textarea rows={3} value={form.exercises} onChange={e => setForm({ ...form, exercises: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">Referências (uma por linha)</label>
                      <Textarea rows={3} value={form.refs} onChange={e => setForm({ ...form, refs: e.target.value })} />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700">URL da imagem de capa (opcional)</label>
                      <Input value={form.image_url} onChange={e => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Video size={12} /> URL do vídeo (YouTube, Vimeo ou embed direto)
                      </label>
                      <Input value={form.video_url} onChange={e => setForm({ ...form, video_url: e.target.value })} placeholder="https://youtu.be/..." />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Paperclip size={12} /> Materiais complementares (um por linha, formato: <code>nome | url</code>)
                      </label>
                      <Textarea rows={4} value={form.materials} onChange={e => setForm({ ...form, materials: e.target.value })}
                        placeholder="Slides da aula | https://exemplo.com/slides.pdf" />
                      <div className="mt-2 flex items-center gap-2">
                        <label className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-indigo-300 bg-white hover:bg-indigo-50 text-indigo-700 cursor-pointer">
                          <Upload size={12} /> {uploading ? "Enviando..." : "Anexar arquivo (PDF, PPT, imagem, vídeo)"}
                          <input type="file" className="hidden" disabled={uploading}
                            onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadMaterial(f); e.currentTarget.value = ""; }} />
                        </label>
                        <span className="text-[11px] text-slate-500">O arquivo é anexado à lista acima; clique em Salvar para confirmar.</span>
                      </div>
                    </div>

                    <div className="rounded-lg border border-emerald-200 bg-emerald-50/60 p-3 space-y-2">
                      <label className="text-xs font-semibold text-emerald-800 flex items-center gap-1">
                        <FileText size={12} /> Plano de aula moderno (Markdown)
                      </label>
                      <Textarea rows={10} value={form.lesson_plan || ""} onChange={e => setForm({ ...form, lesson_plan: e.target.value })}
                        placeholder="Cole ou gere com IA um plano de aula completo em Markdown." />
                      <div className="flex flex-wrap items-center gap-2">
                        <Button size="sm" type="button" onClick={generateLessonPlan} disabled={generatingPlan}
                          className="bg-emerald-600 hover:bg-emerald-700">
                          <Wand2 size={14} className="mr-1" /> {generatingPlan ? "Gerando..." : "Gerar plano com IA"}
                        </Button>
                        <span className="text-[11px] text-emerald-800/70">A geração também popula os códigos BNCC abaixo.</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 flex items-center gap-1">
                        <Tag size={12} /> Códigos BNCC / BNCC Digital (um por linha: <code>BNC|CÓDIGO|descrição</code> ou <code>DIG|CÓDIGO|descrição</code>)
                      </label>
                      <Textarea rows={5} value={form.bncc_codes || ""} onChange={e => setForm({ ...form, bncc_codes: e.target.value })}
                        placeholder="BNC | EM13CNT301 | Construir questões, elaborar hipóteses..." />
                    </div>


                    <div className="flex gap-2 pt-1">
                      <Button size="sm" onClick={save} disabled={saving} className="bg-emerald-600 hover:bg-emerald-700">
                        <Save size={14} className="mr-1" /> {saving ? "Salvando..." : "Salvar edição"}
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setEditing(false)}>
                        <RotateCcw size={14} className="mr-1" /> Cancelar
                      </Button>
                    </div>
                  </div>
                )}
              </section>
            )}

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

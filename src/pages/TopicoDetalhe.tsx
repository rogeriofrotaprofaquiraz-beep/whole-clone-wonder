import { Link, useParams, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Lightbulb, FlaskConical, Sparkles, GraduationCap } from "lucide-react";

/**
 * Página explicativa de um tópico específico de química,
 * com linguagem acessível para Ensino Fundamental e Médio.
 * Recebe o título via query string `?t=` e ilustra com imagem do Unsplash.
 */
export default function TopicoDetalhe() {
  const { slug } = useParams();
  const [params] = useSearchParams();
  const title = params.get("t") || (slug ?? "Tópico").replace(/-/g, " ");
  const back = params.get("back") || "/cursos";

  const imgQuery = encodeURIComponent(title + " chemistry science");
  const imgUrl = `https://source.unsplash.com/1200x600/?${imgQuery}`;
  const imgAlt = `Ilustração do tópico ${title}`;

  const level = (t: string) => {
    const low = t.toLowerCase();
    if (/(quântic|orbital|termodinâm|cinétic|equilíbr|espectr)/.test(low)) return "Ensino Médio";
    if (/(átomo|elemento|molécula|reação|mistura|substância|matéria)/.test(low)) return "Fundamental → Médio";
    return "Ensino Fundamental e Médio";
  };

  const short = (t: string) =>
    `Nesta página você vai entender o que é **${t}**, por que isso é importante no dia a dia e como esse conceito aparece em coisas simples que a gente vê e usa o tempo todo.`;

  const examples = (t: string) => {
    const low = t.toLowerCase();
    if (low.includes("átomo") || low.includes("element"))
      return ["A água que você bebe é feita de átomos de hidrogênio e oxigênio.", "O ar tem principalmente nitrogênio e oxigênio.", "O grafite do lápis é feito de átomos de carbono."];
    if (low.includes("reação") || low.includes("reaç"))
      return ["Quando o ferro enferruja, está reagindo com o oxigênio do ar.", "Cozinhar um ovo é uma reação química nas proteínas.", "Um antiácido borbulha por causa de uma reação."];
    if (low.includes("ligaç"))
      return ["O sal de cozinha (NaCl) tem ligação iônica.", "A água (H₂O) tem ligações covalentes.", "Metais como o cobre têm ligação metálica."];
    if (low.includes("ácido") || low.includes("base"))
      return ["Suco de limão é ácido.", "Sabão e bicarbonato são básicos.", "Nosso estômago produz ácido clorídrico."];
    return [
      "Está presente em objetos comuns da sua casa.",
      "Aparece em fenômenos da natureza.",
      "É usado em indústrias, medicina e tecnologia.",
    ];
  };

  const objectives = [
    `Explicar com suas palavras o que é ${title.toLowerCase()}.`,
    "Reconhecer o conceito em situações do dia a dia.",
    "Relacionar com outros tópicos do curso.",
  ];

  const explanation = (t: string) => {
    return `A química estuda como as coisas são feitas por dentro e como elas se transformam. Quando falamos de **${t}**, estamos olhando para uma peça desse quebra-cabeça.

Imagine tudo o que existe ao seu redor — água, ar, comida, celular, roupa, você mesmo. Tudo é feito de partículas pequenininhas que se organizam de jeitos diferentes. Estudar **${t}** ajuda a entender **por que** essas coisas se comportam do jeito que se comportam.

Não precisa decorar fórmulas de cara. Primeiro entenda a ideia principal, depois veja os exemplos. Com o tempo, os símbolos e nomes vão fazer sentido — é como aprender uma língua nova: começa pelas palavras simples.`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900">
      <div className="max-w-4xl mx-auto p-4 py-6">
        <Link to={back} className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4">
          <ArrowLeft size={18} /> Voltar ao curso
        </Link>

        <Card className="overflow-hidden mb-6 border-0">
          <div className="relative h-56 md:h-72 bg-gradient-to-br from-violet-700 to-indigo-900">
            <img
              src={imgUrl}
              alt={imgAlt}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur px-2 py-1 rounded text-xs mb-2">
                <GraduationCap size={12} /> {level(title)}
              </div>
              <h1 className="text-2xl md:text-4xl font-black leading-tight">{title}</h1>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                <BookOpen size={18} /> Ideia principal
              </div>
              <p className="text-slate-700 leading-relaxed"
                 dangerouslySetInnerHTML={{ __html: short(title).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
            </section>

            <section>
              <div className="flex items-center gap-2 text-[#4C1D95] font-bold mb-2">
                <Lightbulb size={18} /> Explicação simples
              </div>
              {explanation(title).split("\n\n").map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-3"
                   dangerouslySetInnerHTML={{ __html: p.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>") }} />
              ))}
            </section>

            <section className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-4 bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
                  <FlaskConical size={18} /> Exemplos do dia a dia
                </div>
                <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                  {examples(title).map((e, i) => <li key={i}>{e}</li>)}
                </ul>
              </div>
              <div className="rounded-xl p-4 bg-amber-50 border border-amber-200">
                <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
                  <Sparkles size={18} /> Objetivos de aprendizagem
                </div>
                <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                  {objectives.map((o, i) => <li key={i}>{o}</li>)}
                </ul>
              </div>
            </section>

            <section className="rounded-xl p-4 bg-violet-50 border border-violet-200">
              <div className="font-bold text-[#4C1D95] mb-2">💡 Dica de estudo</div>
              <p className="text-sm text-slate-700">
                Explique o tópico <strong>{title}</strong> em voz alta, como se estivesse ensinando um amigo.
                Se travar em alguma parte, é ali que vale reler. Depois, tente desenhar um esquema simples no caderno.
              </p>
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

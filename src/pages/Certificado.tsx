import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2, Printer } from "lucide-react";

type Certificate = {
  id: string; code: string; hours: number; score: number;
  student_name: string; course_title: string; issued_at: string;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function Certificado() {
  const { code } = useParams();
  const [cert, setCert] = useState<Certificate | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      if (!code) return;
      const { data } = await supabase.from("certificates").select("*").eq("code", code).maybeSingle();
      setCert(data as any);
      setLoading(false);
    })();
  }, [code]);

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-900"><Loader2 className="animate-spin text-white" /></div>;
  if (!cert) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white gap-3">
      <p>Certificado não encontrado.</p>
      <Link to="/cursos" className="underline">Voltar</Link>
    </div>
  );

  const validationUrl = `${window.location.origin}/certificado/${cert.code}`;

  return (
    <div className="min-h-screen bg-slate-100 p-4 print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4 print:hidden">
          <Link to="/cursos" className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900">
            <ArrowLeft size={18} /> Voltar
          </Link>
          <Button onClick={() => window.print()} className="bg-[#4C1D95] hover:bg-[#3B0E75]">
            <Printer className="mr-2" size={16} /> Imprimir / Salvar PDF
          </Button>
        </div>

        <div className="bg-white shadow-2xl print:shadow-none aspect-[1.414/1] w-full relative overflow-hidden border-8 border-double border-[#4C1D95] p-10 print:border-[#4C1D95]">
          {/* Ornamento */}
          <div className="absolute inset-4 border border-[#4C1D95]/40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4C1D95]/10 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#059669]/10 to-transparent rounded-tr-full" />

          <div className="relative h-full flex flex-col">
            <header className="text-center">
              <div className="text-xs tracking-[0.4em] text-slate-500 uppercase">Elemental Heroes • Plataforma Educacional</div>
              <h1 className="mt-2 text-5xl font-black text-[#4C1D95] tracking-wide">CERTIFICADO</h1>
              <div className="text-sm text-slate-500 mt-1">DE CONCLUSÃO DE CURSO</div>
            </header>

            <div className="flex-1 flex flex-col justify-center items-center text-center px-6">
              <p className="text-slate-700">Certificamos que</p>
              <p className="mt-3 text-4xl font-black text-slate-900 border-b-2 border-slate-300 pb-3 px-8">
                {cert.student_name.toUpperCase()}
              </p>
              <p className="mt-5 text-slate-700 max-w-3xl leading-relaxed">
                concluiu com aproveitamento o curso de extensão
                <br />
                <strong className="text-[#4C1D95] text-xl">"{cert.course_title}"</strong>,
                com carga horária total de <strong>{cert.hours} horas</strong>,
                obtendo nota final <strong>{Number(cert.score).toFixed(1)}</strong>,
                atendendo aos critérios de aprovação estabelecidos.
              </p>
              <p className="mt-4 text-xs text-slate-500 max-w-3xl">
                Curso livre de extensão, ofertado nos termos do Art. 39, §2º, inciso III, da Lei nº 9.394/1996 (LDB),
                da Resolução CNE/CP nº 1/2021 e da Resolução CNE/CES nº 1/2007, sem exigência de escolaridade prévia
                para matrícula, destinado à qualificação, atualização e aperfeiçoamento pessoal e profissional.
              </p>
            </div>

            <footer className="grid grid-cols-3 gap-4 items-end text-center text-xs text-slate-600">
              <div>
                <div className="border-t border-slate-400 pt-2 mx-4">Data de emissão</div>
                <div className="mt-1 font-semibold">{formatDate(cert.issued_at)}</div>
              </div>
              <div>
                <div className="w-16 h-16 mx-auto rounded-full border-4 border-[#4C1D95] flex items-center justify-center text-[#4C1D95] font-black text-2xl">
                  EH
                </div>
                <div className="mt-1 font-semibold">Coordenação Acadêmica</div>
              </div>
              <div>
                <div className="border-t border-slate-400 pt-2 mx-4">Código de validação</div>
                <div className="mt-1 font-mono font-bold text-[#4C1D95]">{cert.code}</div>
                <div className="text-[10px] text-slate-500 mt-0.5 break-all">{validationUrl}</div>
              </div>
            </footer>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-4 print:hidden">
          Este certificado pode ser validado publicamente pelo código acima.
        </p>
      </div>
    </div>
  );
}

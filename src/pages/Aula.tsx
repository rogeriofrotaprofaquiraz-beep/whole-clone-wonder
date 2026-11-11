import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TeacherPanel } from "@/components/aula/TeacherPanel";
import { SessionRoom } from "@/components/aula/SessionRoom";
import { GraduationCap, ArrowLeft } from "lucide-react";

export default function Aula() {
  const { code } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setUser(s?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);

  // ---- in a room ----
  if (code) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50 p-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" onClick={() => (params.get("host") === "1" ? navigate(-1) : navigate("/sala-virtual"))} className="mb-3"><ArrowLeft size={16} className="mr-1" />Sair</Button>
          <SessionRoom code={code.toUpperCase()} isHost={params.get("host") === "1"} />
        </div>
      </div>
    );
  }

  // ---- home ----
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4C1D95] via-slate-900 to-[#059669] p-4">
      <div className="max-w-5xl mx-auto py-8">
        <div className="text-center mb-8 text-white">
          <GraduationCap size={64} className="mx-auto mb-3" />
          <h1 className="text-4xl md:text-5xl font-black">QuímicaPlay</h1>
          <p className="text-white/80">Jogos educativos de química para sua turma</p>
          <Link to="/" className="text-white/60 text-sm underline">← Voltar ao app principal</Link>
        </div>

        {user ? (
          <TeacherPanel userId={user.id} />
        ) : (
          <Card className="p-6 text-center">
            <h3 className="font-bold mb-2">Sou professor</h3>
            <p className="text-sm text-muted-foreground mb-3">Faça login no app principal para criar partidas e gerar questões.</p>
            <Button onClick={() => navigate("/")}>Ir para login</Button>
          </Card>
        )}
      </div>
    </div>
  );
}

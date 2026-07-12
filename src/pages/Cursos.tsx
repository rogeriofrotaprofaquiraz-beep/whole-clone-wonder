import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, GraduationCap, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { areaMeta } from "@/lib/aula";

type Course = {
  id: string;
  title: string;
  description: string | null;
  area: string;
  level: string;
  cover_url: string | null;
  hours: number;
};

export default function Cursos() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [enrolled, setEnrolled] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const load = async () => {
    setLoading(true);
    const { data: cs } = await supabase
      .from("courses")
      .select("id,title,description,area,level,cover_url,hours")
      .eq("published", true);
    const sorted = ((cs ?? []) as Course[]).sort((a, b) => {
      const na = parseInt(a.title.match(/^(\d+)/)?.[1] ?? "9999", 10);
      const nb = parseInt(b.title.match(/^(\d+)/)?.[1] ?? "9999", 10);
      return na - nb || a.title.localeCompare(b.title);
    });
    setCourses(sorted);
    if (user?.id) {
      const { data: es } = await supabase
        .from("course_enrollments")
        .select("course_id")
        .eq("user_id", user.id);
      setEnrolled(new Set((es ?? []).map((e: any) => e.course_id)));
    }
    setLoading(false);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [user?.id]);

  const enroll = async (courseId: string) => {
    if (!user?.id) { toast.error("Faça login primeiro"); return; }
    const { error } = await supabase
      .from("course_enrollments")
      .insert({ course_id: courseId, user_id: user.id });
    if (error && !error.message.includes("duplicate")) { toast.error(error.message); return; }
    toast.success("Matrícula realizada!");
    setEnrolled(new Set([...enrolled, courseId]));
    navigate(`/cursos/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#4C1D95] to-slate-900 p-4">
      <div className="max-w-5xl mx-auto py-6">
        <div className="flex items-center justify-between mb-6 text-white">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white">
            <ArrowLeft size={18} /> Voltar
          </Link>
          <h1 className="text-2xl md:text-3xl font-black flex items-center gap-2">
            <GraduationCap /> Cursos
          </h1>
          <div className="w-16" />
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><Loader2 className="animate-spin text-white" size={32} /></div>
        ) : courses.length === 0 ? (
          <Card className="p-10 text-center">
            <BookOpen className="mx-auto mb-3 text-slate-400" size={48} />
            <p className="text-slate-600">Nenhum curso publicado ainda.</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((c) => {
              const m = areaMeta(c.area);
              const isEnrolled = enrolled.has(c.id);
              return (
                <Card key={c.id} className="p-5 hover:shadow-xl transition">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
                      style={{ background: m.color }}
                    >
                      {m.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-black text-lg leading-tight">{c.title}</h3>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        <Badge variant="secondary">{m.label}</Badge>
                        <Badge variant="outline">{c.level}</Badge>
                        <Badge variant="outline">{c.hours}h</Badge>
                      </div>
                    </div>
                  </div>
                  {c.description && (
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{c.description}</p>
                  )}
                  <div className="flex gap-2">
                    {isEnrolled ? (
                      <Button className="flex-1" onClick={() => navigate(`/cursos/${c.id}`)}>
                        Continuar
                      </Button>
                    ) : (
                      <Button className="flex-1 bg-[#059669] hover:bg-[#047857]" onClick={() => enroll(c.id)}>
                        Matricular-se
                      </Button>
                    )}
                    <Button variant="outline" onClick={() => navigate(`/cursos/${c.id}`)}>Ver</Button>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import { useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type P = { full_name: string | null; birth_date: string | null; guardian_email: string | null; registration_completed: boolean; approved: boolean };

export function RegistrationGate({ children }: { children: ReactNode }) {
  const [uid, setUid] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [prof, setProf] = useState<P | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [ready, setReady] = useState(false);
  const [form, setForm] = useState({ full_name: "", birth_date: "", guardian_email: "" });
  const [saving, setSaving] = useState(false);

  const load = async (id: string | null, mail: string) => {
    setUid(id); setEmail(mail);
    if (!id) { setProf(null); setReady(true); return; }
    const [{ data: p }, { data: r }] = await Promise.all([
      supabase.from("profiles").select("full_name, birth_date, guardian_email, registration_completed, approved").eq("id", id).maybeSingle(),
      supabase.from("user_roles").select("role").eq("user_id", id),
    ]);
    setIsAdmin(!!r?.some((x: any) => x.role === "admin"));
    setProf((p as any) ?? { full_name: null, birth_date: null, guardian_email: null, registration_completed: false, approved: false });
    setReady(true);
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setTimeout(() => load(s?.user?.id ?? null, s?.user?.email ?? ""), 0);
    });
    supabase.auth.getUser().then(({ data }) => load(data.user?.id ?? null, data.user?.email ?? ""));
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready || !uid || !prof || isAdmin || prof.approved) return <>{children}</>;

  const sair = () => supabase.auth.signOut();

  if (!prof.registration_completed) {
    const salvar = async () => {
      if (!form.full_name.trim() || !form.birth_date || !form.guardian_email.trim()) { toast.error("Preencha todos os campos"); return; }
      setSaving(true);
      const row = { id: uid, full_name: form.full_name.trim(), birth_date: form.birth_date, guardian_email: form.guardian_email.trim(), registration_completed: true };
      const { error } = await supabase.from("profiles").upsert(row as any);
      setSaving(false);
      if (error) { toast.error(error.message); return; }
      toast.success("Cadastro enviado!");
      load(uid, email);
    };
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md space-y-4 rounded-xl border bg-card p-6 shadow">
          <h1 className="text-2xl font-black">Complete seu cadastro</h1>
          <p className="text-sm text-muted-foreground">Primeiro acesso: preencha seus dados. Depois, o administrador vai liberar sua conta.</p>
          <div><Label>Nome completo</Label><Input value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} /></div>
          <div><Label>E-mail</Label><Input value={email} disabled /></div>
          <div><Label>Data de nascimento</Label><Input type="date" value={form.birth_date} onChange={(e) => setForm({ ...form, birth_date: e.target.value })} /></div>
          <div><Label>E-mail do responsável</Label><Input type="email" value={form.guardian_email} onChange={(e) => setForm({ ...form, guardian_email: e.target.value })} /></div>
          <Button className="w-full" onClick={salvar} disabled={saving}>{saving ? "Enviando..." : "Enviar cadastro"}</Button>
          <Button variant="ghost" className="w-full" onClick={sair}>Sair</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-4 rounded-xl border bg-card p-6 text-center shadow">
        <div className="text-5xl">⏳</div>
        <h1 className="text-2xl font-black">Aguardando liberação</h1>
        <p className="text-sm text-muted-foreground">Seu cadastro foi recebido. Assim que o administrador liberar sua conta, você poderá entrar.</p>
        <Button variant="outline" onClick={() => load(uid, email)}>Verificar de novo</Button>
        <Button variant="ghost" onClick={sair}>Sair</Button>
      </div>
    </div>
  );
}

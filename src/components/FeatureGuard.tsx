import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useFeatureAccess } from "@/lib/featureAccess";

export function FeatureGuard({ feature, children }: { feature: string; children: ReactNode }) {
  const { loading, can } = useFeatureAccess();
  if (loading) return null;
  if (can(feature)) return <>{children}</>;
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="p-8 text-center max-w-md">
        <Lock className="mx-auto mb-3 text-muted-foreground" size={40} />
        <h2 className="text-xl font-bold mb-2">Acesso bloqueado</h2>
        <p className="text-sm text-muted-foreground mb-4">Seu professor não liberou esta área para o seu perfil.</p>
        <Link to="/" className="underline font-semibold">Voltar ao início</Link>
      </Card>
    </div>
  );
}

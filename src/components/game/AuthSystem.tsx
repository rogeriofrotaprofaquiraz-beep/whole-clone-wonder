import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, UserPlus, LogOut, Chrome } from 'lucide-react';
import { toast } from "sonner";

export const AuthSystem = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bem-vindo de volta!");
      } else {
        const { data, error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: {
            data: { username }
          }
        });
        if (error) throw error;
        
        // Criar perfil
        if (data.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({ 
              id: data.user.id, 
              username: username || email.split('@')[0] 
            });
          if (profileError) console.error("Erro ao criar perfil:", profileError);
        }
        
        toast.success("Conta criada! Verifique seu e-mail.");
      }
      onAuthSuccess();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) toast.error(result.error.message);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 min-h-[400px]">
      <Card className="w-full max-w-md bg-slate-900/80 border-white/10 backdrop-blur-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-black italic text-center">
            {isLogin ? 'ENTRAR NO ELEMENTAL HEROES' : 'CRIAR CONTA'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Input 
                  placeholder="Nome de Usuário" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white/5 border-white/10"
                  required={!isLogin}
                />
              </div>
            )}
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="E-mail" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/5 border-white/10"
                required 
              />
            </div>
            <div className="space-y-2">
              <Input 
                type="password" 
                placeholder="Senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/10"
                required 
              />
            </div>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 font-bold" disabled={loading}>
              {loading ? 'Processando...' : isLogin ? 'ENTRAR' : 'REGISTRAR'}
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-slate-500 italic">Ou continue com</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            onClick={signInWithGoogle} 
            className="w-full border-white/10 hover:bg-white/5 font-bold"
          >
            <Chrome className="mr-2 h-4 w-4" /> GOOGLE
          </Button>

          <p className="mt-6 text-center text-sm text-slate-400">
            {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{' '}
            <button 
              onClick={() => setIsLogin(!isLogin)} 
              className="text-blue-400 hover:underline font-bold"
            >
              {isLogin ? 'REGISTRAR-SE' : 'ENTRAR'}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

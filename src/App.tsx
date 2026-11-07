import Olimpiadas from "./pages/Olimpiadas";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Aula from "./pages/Aula.tsx";
import Treino from "./pages/Treino.tsx";
import Perfil from "./pages/Perfil.tsx";
import Carteira from "./pages/Carteira.tsx";
import Progresso from "./pages/Progresso.tsx";
import Escola from "./pages/Escola.tsx";
import Laboratorio from "./pages/Laboratorio.tsx";
import Historico from "./pages/Historico.tsx";
import PainelDesempenho from "./pages/PainelDesempenho.tsx";
import RankingPage from "./pages/Ranking.tsx";
import PlanoDeAula from "./pages/PlanoDeAula.tsx";
import Permissoes from "./pages/Permissoes.tsx";
import Banco from "./pages/Banco.tsx";
import Cursos from "./pages/Cursos.tsx";
import CursoDetalhe from "./pages/CursoDetalhe.tsx";
import TopicoDetalhe from "./pages/TopicoDetalhe.tsx";
import AdminMaterial from "./pages/AdminMaterial.tsx";
import Avaliacao from "./pages/Avaliacao.tsx";
import Certificado from "./pages/Certificado.tsx";
import Pais from "./pages/Pais.tsx";
import ControleAcesso from "./pages/ControleAcesso.tsx";
import { FeatureGuard } from "./components/FeatureGuard";
import { RegistrationGate } from "./components/RegistrationGate";





const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RegistrationGate>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aula" element={<FeatureGuard feature="pagina_aula"><Aula /></FeatureGuard>} />
          <Route path="/aula/sala/:code" element={<Aula />} />
          <Route path="/aula/treino" element={<FeatureGuard feature="pagina_aula"><Treino /></FeatureGuard>} />
          <Route path="/perfil" element={<FeatureGuard feature="pagina_perfil"><Perfil /></FeatureGuard>} />
          <Route path="/carteira" element={<FeatureGuard feature="pagina_carteira"><Carteira /></FeatureGuard>} />
          <Route path="/progresso" element={<FeatureGuard feature="pagina_progresso"><Progresso /></FeatureGuard>} />
          <Route path="/escola" element={<Escola />} />
          <Route path="/laboratorio" element={<Laboratorio />} />
          <Route path="/ranking" element={<FeatureGuard feature="pagina_ranking"><RankingPage /></FeatureGuard>} />
          <Route path="/plano-de-aula" element={<PlanoDeAula />} />
          <Route path="/permissoes" element={<Permissoes />} />
          <Route path="/banco" element={<Banco />} />
          <Route path="/cursos" element={<FeatureGuard feature="pagina_cursos"><Cursos /></FeatureGuard>} />
          <Route path="/cursos/:id" element={<CursoDetalhe />} />
          <Route path="/cursos/:id/avaliacao" element={<Avaliacao />} />
          <Route path="/certificado/:code" element={<Certificado />} />
          <Route path="/topico/:slug" element={<TopicoDetalhe />} />
          <Route path="/admin/material" element={<AdminMaterial />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/desempenho" element={<PainelDesempenho />} />
          <Route path="/olimpiadas" element={<FeatureGuard feature="pagina_olimpiadas"><Olimpiadas /></FeatureGuard>} />
          
          
          <Route path="/pais" element={<Pais />} />
          <Route path="/controle-acesso" element={<ControleAcesso />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </RegistrationGate>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

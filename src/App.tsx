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


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aula" element={<Aula />} />
          <Route path="/aula/sala/:code" element={<Aula />} />
          <Route path="/aula/treino" element={<Treino />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/progresso" element={<Progresso />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

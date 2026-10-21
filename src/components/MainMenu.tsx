import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Item = { label: string; emoji: string; tab?: string; to?: string; show?: boolean };
type Group = { label: string; emoji: string; items: Item[] };

export function MainMenu({ activeTab, setActiveTab, role }: {
  activeTab: string; setActiveTab: (v: string) => void; role: string | null;
}) {
  const navigate = useNavigate();
  const staff = role === "admin" || role === "teacher";
  const groups: Group[] = [
    { label: "Jogos e Competições", emoji: "🎮", items: [
      { label: "Desafio dos Elementos", emoji: "⚔️", tab: "battle" },
      { label: "Treino", emoji: "🏋️", to: "/aula/treino" },
      { label: "Tabela", emoji: "🧪", tab: "collection" },
      { label: "Campeonato", emoji: "🏆", tab: "quiz" },
      { label: "Olimpíadas", emoji: "🏅", to: "/olimpiadas" },
      { label: "Ranking da partida", emoji: "📊", tab: "ranking" },
      { label: "Ranking geral", emoji: "🥇", to: "/ranking" },
    ]},
    { label: "Coleção e Galeria", emoji: "🃏", items: [
      { label: "Coleção", emoji: "🃏", tab: "heroes" },
      { label: "Galeria", emoji: "🖼️", tab: "list" },
    ]},
    { label: "Desempenho", emoji: "📈", items: [
      { label: "Progresso", emoji: "📈", to: "/progresso" },
      { label: "Rastreamento", emoji: "📍", tab: "tracking", show: role === "admin" },
    ]},
    { label: "Aprendizagem", emoji: "🎓", items: [
      { label: "Escola", emoji: "🏫", to: "/escola" },
      { label: "Plano de Aula", emoji: "🗒️", to: "/plano-de-aula", show: staff },
      { label: "Material", emoji: "📝", to: "/admin/material", show: role === "admin" },
      { label: "Cursos", emoji: "📚", to: "/cursos" },
    ]},
    { label: "Comunidade e Família", emoji: "👪", items: [
      { label: "Pais", emoji: "👪", to: "/pais" },
    ]},
    { label: "Gestão", emoji: "⚙️", items: [
      { label: "Carteira", emoji: "⚛️", to: "/carteira" },
      { label: "Banco de Átomos", emoji: "⚛️", to: "/banco", show: staff },
      { label: "Acessos", emoji: "🔒", to: "/controle-acesso" },
      { label: "Painel do Professor", emoji: "🧑‍🏫", to: "/aula" },
      { label: "Admin", emoji: "🛠️", tab: "admin", show: staff },
    ]},
  ];

  const go = (i: Item) => (i.tab ? setActiveTab(i.tab) : navigate(i.to!));

  return (
    <nav className="mb-12 flex flex-wrap justify-center gap-1 rounded-2xl border border-white/5 bg-slate-950/70 px-2 py-1.5 backdrop-blur-xl">
      <button onClick={() => navigate("/perfil")}
        className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5">
        <span>👤</span> Perfil
      </button>
      {groups.map((g) => {
        const items = g.items.filter((i) => i.show !== false);
        if (!items.length) return null;
        const active = items.some((i) => i.tab && i.tab === activeTab);
        return (
          <DropdownMenu key={g.label}>
            <DropdownMenuTrigger
              className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${active ? "bg-violet-600 text-white" : "text-slate-200 hover:text-white hover:bg-white/5"}`}>
              <span>{g.emoji}</span> {g.label} <ChevronDown className="h-4 w-4 opacity-70" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[220px]">
              {items.map((i) => (
                <DropdownMenuItem key={i.label} onClick={() => go(i)}
                  className={i.tab && i.tab === activeTab ? "font-bold text-primary" : ""}>
                  <span className="mr-2">{i.emoji}</span>{i.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </nav>
  );
}

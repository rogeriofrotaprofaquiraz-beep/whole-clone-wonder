// Compositor de avatar 100% local (SVG). Não consome créditos de IA nem Átomos.
// Recebe o objeto `appearance` salvo em player_avatars e devolve um SVG em que
// CADA opção de CADA categoria muda o desenho — qualquer combinação gera um herói próprio.

type App = Record<string, string | undefined>;

const SKIN: Record<string, string> = {
  albino: "#fff5ee", muito_clara: "#f7d9c4", clara: "#eac393", bege: "#d8b48a",
  morena_clara: "#c68863", morena: "#a06a42", parda: "#7a4a2b", negra: "#3d2415",
  chocolate: "#2a160b", azul: "#3b6ed1", verde: "#3aa860", cinza: "#8a8d93",
  vermelha: "#c8302d", roxa: "#7c3ac2", dourada: "#d4a017", prateada: "#c0c4c9",
};

const HAIR: Record<string, string> = {
  preto: "#1a1a1a", castanho_escuro: "#3b2412", castanho: "#5a3825",
  castanho_claro: "#8a5a35", loiro: "#e2c275", platinado: "#ece6d4",
  branco: "#f0f0f0", cinza: "#9aa0a6", ruivo: "#b5512b",
  azul: "#2f6df0", azul_escuro: "#163a8f", azul_neon: "#00e0ff",
  verde: "#2f8f3a", verde_agua: "#3ad3b8", verde_neon: "#39ff14", rosa: "#ff66b3", roxo: "#8a3ef0",
  vermelho: "#d2352f", laranja: "#ff8a1f", dourado: "#d4a017", prateado: "#c0c4c9",
  arco_iris: "url(#rainbow)", pastel: "url(#rainbow)",
};

const EYE: Record<string, string> = {
  castanho: "#5a3825", mel: "#b88a3a", ambar: "#e2a13a", azul: "#2f6df0",
  azul_claro: "#7ec8ff", verde: "#2f8f3a", cinza: "#9aa0a6", preto: "#000",
  branco: "#ffffff", vermelho: "#d2352f", roxo: "#8a3ef0", dourado: "#d4a017",
  prateado: "#c0c4c9", laranja: "#ff8a1f", ciano: "#00e0ff",
};

const AURA: Record<string, string> = {
  fogo: "#ff5a1f", gelo: "#7ec8ff", eletricidade: "#ffe14a", luz: "#fff8c2",
  sombras: "#3a1f6b", azul: "#2f6df0", roxa: "#8a3ef0", verde: "#39ff14",
  dourada: "#d4a017", fumaca: "#888", cristal: "#a0e3ff", raio: "#ffd200",
  cosmica: "#7b3fc6",
};

const UNIFORM: Record<string, [string, string]> = {
  classico: ["#1e3a8a", "#dc2626"],
  tecnologico: ["#0f172a", "#22d3ee"],
  espacial: ["#e5e7eb", "#a78bfa"],
  militar: ["#3d4a2b", "#a3a35a"],
  tatico: ["#1f2937", "#f97316"],
  mistico: ["#4c1d95", "#f59e0b"],
  armadura_pesada: ["#4b5563", "#9ca3af"],
  nanoarmadura: ["#0b1220", "#00e0ff"],
  stealth: ["#111111", "#3f3f46"],
  cyberpunk: ["#1a0a2a", "#ff00aa"],
  alienigena: ["#064e3b", "#10b981"],
  organico: ["#3f2a1a", "#7c5b3a"],
};

// Detalhes desenhados sobre o tronco para diferenciar cada uniforme
function uniformDetail(u: string | undefined, sec: string) {
  switch (u) {
    case "tecnologico":
    case "nanoarmadura":
      return `<path d='M-120 -200 L-60 -140 L-60 120 M120 -200 L60 -140 L60 120' stroke='${sec}' stroke-width='8' fill='none'/><circle cx='0' cy='120' r='18' fill='${sec}'/>`;
    case "espacial":
      return `<rect x='-150' y='-300' width='300' height='40' rx='20' fill='${sec}'/><rect x='-40' y='60' width='80' height='60' rx='10' fill='#475569'/>`;
    case "militar":
      return `<rect x='-120' y='0' width='70' height='60' rx='6' fill='${sec}'/><rect x='50' y='0' width='70' height='60' rx='6' fill='${sec}'/><circle cx='-60' cy='-120' r='10' fill='${sec}'/><circle cx='60' cy='-120' r='10' fill='${sec}'/>`;
    case "tatico":
      return `<path d='M-150 -250 L150 150 M150 -250 L-150 150' stroke='${sec}' stroke-width='14'/>`;
    case "mistico":
      return `<path d='M0 -300 L0 250' stroke='${sec}' stroke-width='10'/><circle cx='0' cy='170' r='28' fill='none' stroke='${sec}' stroke-width='8'/>`;
    case "armadura_pesada":
      return `<rect x='-160' y='-280' width='320' height='160' rx='20' fill='${sec}' opacity='.6'/><path d='M-150 -40 L150 -40 M-150 40 L150 40 M-140 120 L140 120' stroke='#1f2937' stroke-width='8'/>`;
    case "stealth":
      return `<path d='M-140 -200 L140 -200 M-140 -100 L140 -100 M-140 0 L140 0' stroke='${sec}' stroke-width='4' opacity='.6'/>`;
    case "cyberpunk":
      return `<path d='M-140 -60 L-40 -60 L-20 -20 L140 -20' stroke='${sec}' stroke-width='8' fill='none'/><path d='M-140 100 L60 100 L80 60 L140 60' stroke='#22d3ee' stroke-width='8' fill='none'/>`;
    case "alienigena":
      return `<ellipse cx='-70' cy='40' rx='30' ry='50' fill='${sec}' opacity='.7'/><ellipse cx='70' cy='40' rx='30' ry='50' fill='${sec}' opacity='.7'/><ellipse cx='0' cy='170' rx='40' ry='30' fill='${sec}' opacity='.7'/>`;
    case "organico":
      return `<path d='M-140 -260 C-60 -160 -120 -40 -40 60 C20 140 -60 200 0 260 M140 -260 C60 -160 120 -40 40 60' stroke='#4d7c0f' stroke-width='12' fill='none'/>`;
    default: // clássico: cinto vermelho + faixas laterais
      return `<rect x='-160' y='150' width='320' height='36' fill='${sec}'/>`;
  }
}

const CHEST_EMOJI: Record<string, string> = {
  raio: "⚡", fogo: "🔥", gelo: "❄", agua: "💧", arvore: "🌳", folha: "🍃",
  escudo: "🛡", asa: "🪽", estrela: "★", lua: "🌙", sol: "☀", dragao: "🐉",
  lobo: "🐺", leao: "🦁", aguia: "🦅", fenix: "🔥", serpente: "🐍",
  coracao: "♥", diamante: "◆",
};

const SCENES: Record<string, string> = {
  cidade: "<rect width='900' height='1300' fill='#1e293b'/><g fill='#0f172a'><rect x='0' y='700' width='140' height='600'/><rect x='150' y='560' width='120' height='740'/><rect x='290' y='780' width='110' height='520'/><rect x='520' y='620' width='130' height='680'/><rect x='670' y='740' width='110' height='560'/><rect x='790' y='520' width='110' height='780'/></g><g fill='#facc15' opacity='.7'><rect x='170' y='600' width='14' height='14'/><rect x='210' y='660' width='14' height='14'/><rect x='540' y='680' width='14' height='14'/><rect x='600' y='760' width='14' height='14'/><rect x='820' y='580' width='14' height='14'/></g>",
  espaco: "<rect width='900' height='1300' fill='#030014'/><g fill='#fff'><circle cx='80' cy='120' r='3'/><circle cx='300' cy='60' r='2'/><circle cx='620' cy='160' r='3'/><circle cx='820' cy='300' r='2'/><circle cx='140' cy='500' r='2'/><circle cx='760' cy='620' r='3'/><circle cx='60' cy='900' r='2'/><circle cx='850' cy='1000' r='2'/></g><circle cx='740' cy='200' r='90' fill='#7c3aed' opacity='.8'/><ellipse cx='740' cy='200' rx='150' ry='24' fill='none' stroke='#c4b5fd' stroke-width='6'/>",
  tempestade: "<rect width='900' height='1300' fill='#1f2937'/><ellipse cx='200' cy='150' rx='260' ry='110' fill='#374151'/><ellipse cx='700' cy='130' rx='280' ry='120' fill='#4b5563'/><path d='M640 220 L590 380 L640 380 L580 560' stroke='#fde047' stroke-width='10' fill='none'/><g stroke='#93c5fd' stroke-width='3' opacity='.5'><path d='M100 300 L80 360'/><path d='M300 320 L280 380'/><path d='M500 300 L480 360'/><path d='M800 340 L780 400'/></g>",
  montanhas: "<rect width='900' height='1300' fill='#7dd3fc'/><path d='M0 900 L220 480 L420 900 Z' fill='#64748b'/><path d='M300 900 L560 380 L820 900 Z' fill='#475569'/><path d='M500 470 L560 380 L620 470 Z' fill='#fff'/><path d='M180 560 L220 480 L260 560 Z' fill='#fff'/><rect y='900' width='900' height='400' fill='#4d7c0f'/>",
  laboratorio: "<rect width='900' height='1300' fill='#e2e8f0'/><rect y='1000' width='900' height='300' fill='#94a3b8'/><rect x='40' y='300' width='220' height='18' fill='#64748b'/><rect x='640' y='300' width='220' height='18' fill='#64748b'/><path d='M80 300 L80 240 L60 200 L120 200 L100 240 L100 300 Z' fill='#22c55e'/><circle cx='190' cy='270' r='30' fill='#3b82f6'/><path d='M690 300 L700 200 L740 200 L750 300 Z' fill='#f472b6'/><circle cx='810' cy='270' r='28' fill='#facc15'/>",
  floresta: "<rect width='900' height='1300' fill='#14532d'/><g fill='#166534'><path d='M60 900 L140 500 L220 900 Z'/><path d='M200 950 L300 450 L400 950 Z'/><path d='M520 950 L620 420 L720 950 Z'/><path d='M680 900 L780 520 L880 900 Z'/></g><rect y='1000' width='900' height='300' fill='#3f2a1a'/>",
  deserto: "<rect width='900' height='1300' fill='#fde68a'/><circle cx='720' cy='220' r='90' fill='#f97316'/><path d='M0 950 C200 820 400 1000 600 900 C750 830 850 900 900 880 L900 1300 L0 1300 Z' fill='#d97706'/><path d='M120 900 L120 760 M120 820 L80 790 M120 840 L160 800' stroke='#15803d' stroke-width='22' stroke-linecap='round'/>",
  vale: "<rect width='900' height='1300' fill='#bae6fd'/><path d='M0 700 L250 400 L450 760 L650 380 L900 700 L900 1300 L0 1300 Z' fill='#16a34a'/><path d='M380 1300 C420 1100 480 1000 450 760 C520 1000 560 1100 600 1300 Z' fill='#38bdf8'/>",
  vulcao: "<rect width='900' height='1300' fill='#450a0a'/><path d='M150 1000 L380 450 L520 450 L750 1000 Z' fill='#292524'/><path d='M380 450 L450 300 L520 450 Z' fill='#f97316'/><path d='M420 470 L400 700 M480 470 L500 650' stroke='#ef4444' stroke-width='16'/><circle cx='450' cy='220' r='70' fill='#78716c' opacity='.7'/>",
  portal_dimensional: "<rect width='900' height='1300' fill='#0c0a1f'/><g fill='none' stroke-width='14'><ellipse cx='450' cy='640' rx='380' ry='560' stroke='#a855f7' opacity='.6'/><ellipse cx='450' cy='640' rx='300' ry='460' stroke='#22d3ee' opacity='.6'/><ellipse cx='450' cy='640' rx='220' ry='360' stroke='#f0abfc' opacity='.6'/></g>",
};

function face(shape?: string, skin = "#c68863") {
  switch (shape) {
    case "redondo": return `<ellipse cx='0' cy='-560' rx='135' ry='135' fill='${skin}'/>`;
    case "alongado": return `<ellipse cx='0' cy='-570' rx='105' ry='165' fill='${skin}'/>`;
    case "coracao": return `<path d='M-130 -650 C-130 -730 130 -730 130 -650 C130 -560 60 -450 0 -420 C-60 -450 -130 -560 -130 -650 Z' fill='${skin}'/>`;
    case "quadrado": return `<rect x='-120' y='-700' width='240' height='270' rx='40' fill='${skin}'/>`;
    default: return `<ellipse cx='0' cy='-560' rx='120' ry='145' fill='${skin}'/>`;
  }
}

function bodyPath(body?: string, gender?: string) {
  const fem = gender === "feminino";
  switch (body) {
    case "magro":
    case "esguio":
      return fem
        ? "M-90 -320 C-70 -400 70 -400 90 -320 L60 20 L110 260 C60 320 -60 320 -110 260 L-60 20 Z"
        : "M-90 -320 C-70 -400 70 -400 90 -320 L110 260 C60 320 -60 320 -110 260 Z";
    case "musculoso":
    case "fisiculturista":
      return fem
        ? "M-180 -330 C-150 -420 150 -420 180 -330 L130 20 L220 260 C130 340 -130 340 -220 260 L-130 20 Z"
        : "M-200 -340 C-170 -430 170 -430 200 -340 L150 60 L210 260 C130 340 -130 340 -210 260 L-150 60 Z";
    case "robusto":
      return "M-200 -330 C-170 -420 170 -420 200 -330 L230 270 C140 350 -140 350 -230 270 Z";
    case "grande":
      return "M-230 -340 C-200 -430 200 -430 230 -340 L270 280 C150 360 -150 360 -270 280 Z";
    case "gigante":
      return "M-260 -350 C-230 -450 230 -450 260 -350 L300 290 C170 380 -170 380 -300 290 Z";
    case "curvilineo":
      return "M-150 -330 C-130 -410 130 -410 150 -330 L100 20 C170 140 -170 140 -100 20 L-150 260 C-90 320 90 320 150 260 Z";
    default: // atlético
      return fem
        ? "M-140 -320 C-120 -400 120 -400 140 -320 L95 20 L170 260 C90 320 -90 320 -170 260 L-95 20 Z"
        : "M-150 -320 C-120 -400 120 -400 150 -320 L170 260 C90 320 -90 320 -170 260 Z";
  }
}

// Escala horizontal da figura conforme o porte físico
function bodyScale(body?: string) {
  switch (body) {
    case "magro": return 0.92;
    case "musculoso": return 1.04;
    case "robusto": return 1.06;
    case "grande": return 1.1;
    case "gigante": return 1.18;
    default: return 1;
  }
}

function hairPath(style?: string, gender?: string) {
  const long = gender === "feminino";
  switch (style) {
    case "careca":
    case "raspado":
    case "buzz":
      return "";
    case "moicano":
      return "<path d='M-25 -760 L25 -760 L35 -580 L-35 -580 Z' fill='var(--hair)'/><path d='M-20 -800 L0 -740 L20 -800 L10 -740 Z' fill='var(--hair)'/>";
    case "afro_grande":
    case "black_power":
      return "<circle cx='0' cy='-620' r='170' fill='var(--hair)'/>";
    case "afro_curto":
    case "crespo":
      return "<circle cx='0' cy='-620' r='150' fill='var(--hair)'/>";
    case "longo":
    case "longo_liso":
      return "<path d='M-150 -580 C-180 -400 -200 -100 -180 200 L-100 200 L-100 -520 Z M150 -580 C180 -400 200 -100 180 200 L100 200 L100 -520 Z' fill='var(--hair)'/><path d='M-140 -620 C-140 -740 140 -740 140 -620 L120 -540 L-120 -540 Z' fill='var(--hair)'/>";
    case "ondulado":
    case "longo_ondulado":
      return `<path d='M-150 -600 C-200 -520 -120 -460 -170 -380 C-220 -300 -130 -240 -170 ${long ? "-60 L-110 -60" : "-300 L-110 -300"} L-110 -540 Z M150 -600 C200 -520 120 -460 170 -380 C220 -300 130 -240 170 ${long ? "-60 L110 -60" : "-300 L110 -300"} L110 -540 Z' fill='var(--hair)'/><path d='M-145 -620 C-140 -760 140 -760 145 -620 C100 -650 60 -580 0 -620 C-60 -580 -100 -650 -145 -620 Z' fill='var(--hair)'/>`;
    case "cacheado":
      return "<path d='M-140 -620 C-160 -780 160 -780 140 -620 C130 -560 -130 -560 -140 -620 Z' fill='var(--hair)'/>" +
        [-130, -90, -45, 0, 45, 90, 130].map((x, i) => `<circle cx='${x}' cy='${-690 + (i % 2) * 30}' r='38' fill='var(--hair)'/>`).join("") +
        `<circle cx='-135' cy='-560' r='32' fill='var(--hair)'/><circle cx='135' cy='-560' r='32' fill='var(--hair)'/>`;
    case "topete":
      return "<path d='M-120 -600 C-100 -760 60 -740 40 -600 L-120 -600 Z' fill='var(--hair)'/>";
    case "rabo":
    case "coque":
    case "samurai":
      return "<path d='M-130 -620 C-130 -740 130 -740 130 -620 L110 -560 L-110 -560 Z' fill='var(--hair)'/><ellipse cx='0' cy='-720' rx='40' ry='30' fill='var(--hair)'/>";
    case "dreadlocks":
    case "trancas":
    case "box_braids":
      return "<path d='M-140 -640 C-140 -760 140 -760 140 -640 L120 -540 L-120 -540 Z' fill='var(--hair)'/>" +
        Array.from({ length: 7 }, (_, i) => {
          const x = -120 + i * 40;
          return `<rect x='${x - 6}' y='-560' width='12' height='${long ? 380 : 200}' rx='4' fill='var(--hair)'/>`;
        }).join("");
    default: // curto
      return long
        ? "<path d='M-140 -640 C-140 -760 140 -760 140 -640 L150 -470 L110 -470 L120 -560 L-120 -560 L-110 -470 L-150 -470 Z' fill='var(--hair)'/>"
        : "<path d='M-140 -640 C-140 -760 140 -760 140 -640 L120 -560 L-120 -560 Z' fill='var(--hair)'/>";
  }
}

function maskEl(mask?: string) {
  switch (mask) {
    case "meia":
      return "<rect x='-105' y='-615' width='210' height='50' rx='14' fill='#0b0f1a'/>";
    case "completa":
      return "<ellipse cx='0' cy='-580' rx='125' ry='150' fill='#0b0f1a'/><ellipse cx='-40' cy='-590' rx='22' ry='12' fill='#fff'/><ellipse cx='40' cy='-590' rx='22' ry='12' fill='#fff'/>";
    case "capuz":
      return "<path d='M-170 -660 C-170 -840 170 -840 170 -660 L160 -440 L120 -440 L120 -640 C80 -720 -80 -720 -120 -640 L-120 -440 L-160 -440 Z' fill='#0b0f1a' opacity='.92'/>";
    case "tecnologica":
      return "<rect x='-115' y='-620' width='230' height='56' rx='18' fill='#0b0f1a'/><rect x='-100' y='-607' width='200' height='30' rx='10' fill='var(--aura)' opacity='.85'/>";
    case "ninja":
      return "<rect x='-125' y='-560' width='250' height='120' rx='20' fill='#0b0f1a'/><rect x='-125' y='-720' width='250' height='90' rx='30' fill='#0b0f1a'/>";
    case "tatica":
      return "<path d='M-110 -560 L110 -560 L90 -460 L-90 -460 Z' fill='#0b0f1a'/>";
    case "caveira":
      return "<ellipse cx='0' cy='-580' rx='125' ry='150' fill='#f5f5f5'/><ellipse cx='-42' cy='-595' rx='22' ry='26' fill='#000'/><ellipse cx='42' cy='-595' rx='22' ry='26' fill='#000'/><path d='M-10 -540 L0 -560 L10 -540 Z' fill='#000'/><path d='M-50 -490 L50 -490' stroke='#000' stroke-width='6' stroke-dasharray='10 8'/>";
    case "metalica":
      return "<ellipse cx='0' cy='-580' rx='125' ry='150' fill='#c0c4c9' stroke='#5a5f66' stroke-width='6'/><rect x='-80' y='-605' width='160' height='22' rx='8' fill='#0b0f1a'/><path d='M0 -730 L0 -620' stroke='#5a5f66' stroke-width='6'/>";
    case "energia":
      return "<ellipse cx='0' cy='-580' rx='130' ry='155' fill='var(--aura)' opacity='.5' stroke='var(--aura)' stroke-width='6'/>";
    default:
      return "";
  }
}

function capeEl(cape?: string, color = "#dc2626") {
  switch (cape) {
    case "curta":
      return `<path d='M-180 -320 L-240 100 L-160 120 L-140 -300 Z M180 -320 L240 100 L160 120 L140 -300 Z' fill='${color}' opacity='.9'/>`;
    case "media":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='${color}' opacity='.9'/>`;
    case "longa":
      return `<path d='M-220 -340 L-380 720 L-140 720 L-140 -320 Z M220 -340 L380 720 L140 720 L140 -320 Z' fill='${color}' opacity='.9'/>`;
    case "gigante":
      return `<path d='M-260 -360 L-460 880 L-100 880 L-120 -320 Z M260 -360 L460 880 L100 880 L120 -320 Z' fill='${color}' opacity='.9'/>`;
    case "rasgada":
      return `<path d='M-200 -330 L-300 300 L-250 250 L-220 360 L-180 260 L-160 330 L-140 -300 Z M200 -330 L300 300 L250 250 L220 360 L180 260 L160 330 L140 -300 Z' fill='${color}' opacity='.85'/>`;
    case "metalica":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='#c0c4c9' stroke='#5a5f66' stroke-width='6'/>`;
    case "energia":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='var(--aura)' opacity='.6'/>`;
    case "transparente":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='#fff' opacity='.25' stroke='#fff' stroke-opacity='.5' stroke-width='3'/>`;
    case "sombras":
      return `<path d='M-220 -330 L-360 500 L-300 450 L-260 540 L-140 480 L-140 -300 Z M220 -330 L360 500 L300 450 L260 540 L140 480 L140 -300 Z' fill='#0a0a1a' opacity='.85'/>`;
    default:
      return "";
  }
}

function chestEl(sym?: string, elSymbol?: string, second = "#facc15") {
  if (!sym || sym === "sem") return "";
  if (sym === "inicial" || sym === "elemento") {
    const t = elSymbol ?? "H";
    return `<circle cx='0' cy='-120' r='90' fill='#0b0f1a' stroke='${second}' stroke-width='6'/><text x='0' y='-85' text-anchor='middle' font-family='Arial Black' font-size='90' font-weight='900' fill='${second}'>${t}</text>`;
  }
  const e = CHEST_EMOJI[sym] ?? "★";
  return `<circle cx='0' cy='-120' r='90' fill='#0b0f1a' stroke='${second}' stroke-width='6'/><text x='0' y='-80' text-anchor='middle' font-size='110'>${e}</text>`;
}

type Pose = { arms: string; hands: Array<[number, number]>; legs: string; feet: Array<[number, number]>; dy: number; rotate: number };

function poseOf(pose?: string, color = "#1e3a8a", sec = "#dc2626"): Pose {
  const legsStand = `<path d='M-70 260 L-100 480 L-30 480 L-10 280 Z M70 260 L100 480 L30 480 L10 280 Z' fill='${sec}'/>`;
  switch (pose) {
    case "bracos_cruzados":
      return {
        arms: `<path d='M-170 -280 L-200 -60 L-140 -40 L-120 -260 Z M170 -280 L200 -60 L140 -40 L120 -260 Z' fill='${color}'/><path d='M-190 -80 L180 -150 L190 -90 L-180 -20 Z M190 -80 L-180 -150 L-190 -90 L180 -20 Z' fill='${color}'/>`,
        hands: [[-170, -140], [170, -140]], legs: legsStand, feet: [[-65, 480], [65, 480]], dy: 0, rotate: 0,
      };
    case "voando":
      return {
        arms: `<path d='M-170 -280 L-200 -620 L-130 -630 L-110 -280 Z M170 -280 L200 -620 L130 -630 L110 -280 Z' fill='${color}'/>`,
        hands: [[-165, -650], [165, -650]],
        legs: `<path d='M-70 260 L-60 520 L10 520 L-10 280 Z M70 260 L140 500 L80 520 L10 280 Z' fill='${sec}'/>`,
        feet: [[-25, 520], [110, 520]], dy: -90, rotate: -12,
      };
    case "atacando":
      return {
        arms: `<path d='M-170 -280 L-260 60 L-190 80 L-120 -260 Z M170 -280 L420 -300 L420 -230 L120 -220 Z' fill='${color}'/>`,
        hands: [[-225, 90], [440, -265]],
        legs: `<path d='M-70 260 L-180 470 L-120 500 L-10 280 Z M70 260 L140 480 L70 490 L10 280 Z' fill='${sec}'/>`,
        feet: [[-150, 495], [105, 490]], dy: 0, rotate: 0,
      };
    case "meditando":
      return {
        arms: `<path d='M-170 -280 L-200 20 L-140 40 L-120 -260 Z M170 -280 L200 20 L140 40 L120 -260 Z' fill='${color}'/>`,
        hands: [[-170, 50], [170, 50]],
        legs: `<path d='M-170 300 C-100 240 100 240 170 300 L180 360 C100 330 -100 330 -180 360 Z' fill='${sec}'/>`,
        feet: [[-170, 345], [170, 345]], dy: 90, rotate: 0,
      };
    case "agachado":
      return {
        arms: `<path d='M-170 -280 L-240 120 L-170 140 L-120 -260 Z M170 -280 L240 120 L170 140 L120 -260 Z' fill='${color}'/>`,
        hands: [[-205, 160], [205, 160]],
        legs: `<path d='M-70 260 L-200 340 L-130 420 L-10 280 Z M70 260 L200 340 L130 420 L10 280 Z' fill='${sec}'/>`,
        feet: [[-165, 420], [165, 420]], dy: 60, rotate: 0,
      };
    case "correndo":
      return {
        arms: `<path d='M-170 -280 L-300 -80 L-250 -40 L-120 -260 Z M170 -280 L240 40 L180 70 L120 -260 Z' fill='${color}'/>`,
        hands: [[-280, -50], [210, 80]],
        legs: `<path d='M-70 260 L-230 400 L-190 450 L-10 280 Z M70 260 L110 490 L50 500 L10 280 Z' fill='${sec}'/>`,
        feet: [[-215, 440], [80, 495]], dy: 0, rotate: 8,
      };
    case "flutuando":
      return {
        arms: `<path d='M-170 -280 L-330 -120 L-300 -70 L-120 -260 Z M170 -280 L330 -120 L300 -70 L120 -260 Z' fill='${color}'/>`,
        hands: [[-320, -90], [320, -90]],
        legs: `<path d='M-70 260 L-80 470 L-20 470 L-10 280 Z M70 260 L80 470 L20 470 L10 280 Z' fill='${sec}'/>`,
        feet: [[-50, 470], [50, 470]], dy: -70, rotate: 0,
      };
    case "punhos":
      return {
        arms: `<path d='M-170 -280 L-220 60 L-140 80 L-120 -260 Z M170 -280 L220 60 L140 80 L120 -260 Z' fill='${color}'/>`,
        hands: [[-180, 90], [180, 90]], legs: legsStand, feet: [[-65, 480], [65, 480]], dy: 0, rotate: 0,
      };
    default: // heroica — mãos na cintura
      return {
        arms: `<path d='M-170 -280 L-290 -60 L-160 120 L-110 70 L-200 -50 L-120 -260 Z M170 -280 L290 -60 L160 120 L110 70 L200 -50 L120 -260 Z' fill='${color}'/>`,
        hands: [[-140, 100], [140, 100]],
        legs: `<path d='M-70 260 L-150 480 L-80 490 L-10 280 Z M70 260 L150 480 L80 490 L10 280 Z' fill='${sec}'/>`,
        feet: [[-115, 485], [115, 485]], dy: 0, rotate: 0,
      };
  }
}

function glovesEl(g: string | undefined, hands: Array<[number, number]>, skin: string, sec: string) {
  const style: Record<string, { fill: string; r: number; extra?: string }> = {
    curtas: { fill: sec, r: 36 },
    longas: { fill: sec, r: 38 },
    blindadas: { fill: "#4b5563", r: 46, extra: "#9ca3af" },
    metalicas: { fill: "#c0c4c9", r: 42, extra: "#5a5f66" },
    tecnologicas: { fill: "#0f172a", r: 40, extra: "#22d3ee" },
    misticas: { fill: "#6d28d9", r: 40, extra: "#f59e0b" },
  };
  const s = g && style[g];
  return hands.map(([x, y]) => {
    if (!s) return `<circle cx='${x}' cy='${y}' r='32' fill='${skin}'/>`;
    const cuff = g === "longas" ? `<rect x='${x - 34}' y='${y - 120}' width='68' height='90' rx='12' fill='${s.fill}'/>` : `<rect x='${x - 36}' y='${y - 50}' width='72' height='24' rx='8' fill='${s.extra ?? s.fill}'/>`;
    const glow = g === "tecnologicas" || g === "misticas" ? `<circle cx='${x}' cy='${y}' r='14' fill='${s.extra}'/>` : "";
    return `${cuff}<circle cx='${x}' cy='${y}' r='${s.r}' fill='${s.fill}' ${s.extra && !glow ? `stroke='${s.extra}' stroke-width='6'` : ""}/>${glow}`;
  }).join("");
}

function bootsEl(b: string | undefined, feet: Array<[number, number]>, sec: string) {
  const look: Record<string, { fill: string; h: number; w: number; extra?: string }> = {
    leves: { fill: sec, h: 40, w: 80 },
    militares: { fill: "#3f3f2a", h: 90, w: 96, extra: "#1c1c12" },
    blindadas: { fill: "#4b5563", h: 110, w: 104, extra: "#9ca3af" },
    tecnologicas: { fill: "#0f172a", h: 90, w: 96, extra: "#22d3ee" },
    espaciais: { fill: "#e5e7eb", h: 100, w: 110, extra: "#a78bfa" },
    esportivas: { fill: "#fff", h: 44, w: 96, extra: "#ef4444" },
  };
  const s = (b && look[b]) || { fill: "#111827", h: 50, w: 84 };
  return feet.map(([x, y]) => {
    const top = y - s.h;
    const stripe = s.extra ? `<rect x='${x - s.w / 2}' y='${y - 18}' width='${s.w}' height='12' fill='${s.extra}'/>` : "";
    return `<rect x='${x - s.w / 2 + 6}' y='${top}' width='${s.w - 12}' height='${s.h}' rx='10' fill='${s.fill}'/><ellipse cx='${x + 8}' cy='${y}' rx='${s.w / 2 + 6}' ry='20' fill='${s.fill}'/>${stripe}`;
  }).join("");
}

function accessoryBack(a?: string, sec = "#dc2626") {
  switch (a) {
    case "asas":
      return `<path d='M-120 -260 C-380 -520 -520 -200 -440 60 C-360 -80 -260 -60 -140 -100 Z M120 -260 C380 -520 520 -200 440 60 C360 -80 260 -60 140 -100 Z' fill='#f8fafc' opacity='.92' stroke='#cbd5e1' stroke-width='6'/>`;
    case "cauda":
      return `<path d='M60 240 C260 300 340 120 300 -20 C380 120 360 360 120 330 Z' fill='${sec}'/>`;
    default:
      return "";
  }
}

function accessoryFront(a?: string, sec = "#dc2626", aura = "#7c3aed") {
  switch (a) {
    case "oculos":
      return "<circle cx='-42' cy='-590' r='32' fill='#0b0f1a' opacity='.75' stroke='#111' stroke-width='6'/><circle cx='42' cy='-590' r='32' fill='#0b0f1a' opacity='.75' stroke='#111' stroke-width='6'/><path d='M-10 -592 L10 -592' stroke='#111' stroke-width='6'/>";
    case "viseira":
      return `<path d='M-130 -630 L130 -630 L115 -560 L-115 -560 Z' fill='${aura}' opacity='.8' stroke='#0b0f1a' stroke-width='6'/>`;
    case "cinto":
      return `<rect x='-170' y='180' width='340' height='44' fill='#111827'/><rect x='-36' y='172' width='72' height='60' rx='10' fill='#facc15'/>`;
    case "ombreiras":
      return `<ellipse cx='-185' cy='-310' rx='80' ry='50' fill='${sec}' stroke='#111' stroke-width='6'/><ellipse cx='185' cy='-310' rx='80' ry='50' fill='${sec}' stroke='#111' stroke-width='6'/>`;
    case "bracadeiras":
      return `<rect x='-235' y='-100' width='70' height='40' rx='8' fill='#facc15' transform='rotate(12 -200 -80)'/><rect x='165' y='-100' width='70' height='40' rx='8' fill='#facc15' transform='rotate(-12 200 -80)'/>`;
    case "tiara":
      return "<path d='M-110 -660 Q0 -720 110 -660' stroke='#facc15' stroke-width='14' fill='none'/><path d='M0 -720 L-18 -690 L0 -660 L18 -690 Z' fill='#ef4444'/>";
    case "joelheiras":
      return "<ellipse cx='-75' cy='380' rx='40' ry='30' fill='#111827'/><ellipse cx='75' cy='380' rx='40' ry='30' fill='#111827'/>";
    default:
      return "";
  }
}

function powerEl(p: string | undefined, hands: Array<[number, number]>) {
  const [h1, h2] = hands;
  switch (p) {
    case "forca":
      return `<g stroke='#f97316' stroke-width='10' stroke-linecap='round'>${hands.map(([x, y]) => `<path d='M${x - 70} ${y} L${x - 110} ${y}'/><path d='M${x + 70} ${y} L${x + 110} ${y}'/><path d='M${x} ${y - 70} L${x} ${y - 110}'/>`).join("")}</g>`;
    case "velocidade":
      return "<g stroke='#facc15' stroke-width='10' stroke-linecap='round' opacity='.85'><path d='M-420 -300 L-260 -300'/><path d='M-440 -100 L-260 -100'/><path d='M-420 100 L-260 100'/><path d='M-400 300 L-260 300'/></g>";
    case "voo":
      return "<g fill='none' stroke='#e0f2fe' stroke-width='8' opacity='.8'><path d='M-160 560 Q0 620 160 560'/><path d='M-220 620 Q0 700 220 620'/></g>";
    case "telecinese":
      return `<g fill='#a855f7' opacity='.85'><circle cx='${h1[0] - 60}' cy='${h1[1] - 80}' r='26'/><rect x='${h2[0] + 30}' y='${h2[1] - 120}' width='50' height='40' rx='8'/><circle cx='0' cy='-820' r='30'/></g><g fill='none' stroke='#c084fc' stroke-width='6'><circle cx='${h1[0]}' cy='${h1[1]}' r='60'/><circle cx='${h2[0]}' cy='${h2[1]}' r='60'/></g>`;
    case "eletricidade":
      return hands.map(([x, y]) => `<path d='M${x} ${y - 30} L${x + 40} ${y - 100} L${x + 10} ${y - 100} L${x + 60} ${y - 190}' stroke='#fde047' stroke-width='10' fill='none'/>`).join("");
    case "fogo":
      return hands.map(([x, y]) => `<path d='M${x - 40} ${y - 20} C${x - 60} ${y - 100} ${x - 10} ${y - 120} ${x} ${y - 190} C${x + 20} ${y - 120} ${x + 60} ${y - 100} ${x + 40} ${y - 20} Z' fill='#f97316'/><path d='M${x - 18} ${y - 30} C${x - 25} ${y - 80} ${x} ${y - 90} ${x} ${y - 130} C${x + 10} ${y - 90} ${x + 25} ${y - 80} ${x + 18} ${y - 30} Z' fill='#fde047'/>`).join("");
    case "gelo":
      return hands.map(([x, y]) => `<path d='M${x} ${y - 140} L${x + 30} ${y - 50} L${x} ${y - 30} L${x - 30} ${y - 50} Z' fill='#bae6fd' stroke='#38bdf8' stroke-width='4'/><path d='M${x - 70} ${y - 90} L${x - 30} ${y - 40} L${x - 50} ${y - 20} Z' fill='#e0f2fe'/>`).join("");
    case "agua":
      return hands.map(([x, y]) => `<path d='M${x - 80} ${y - 40} C${x - 40} ${y - 120} ${x + 40} ${y + 40} ${x + 80} ${y - 40}' stroke='#38bdf8' stroke-width='16' fill='none'/><circle cx='${x}' cy='${y - 120}' r='16' fill='#38bdf8'/>`).join("");
    case "tempo":
      return "<g fill='none' stroke='#facc15' stroke-width='8' opacity='.85'><circle cx='0' cy='-120' r='300'/><path d='M0 -120 L0 -320 M0 -120 L140 -120'/></g>";
    case "invisibilidade":
      return "";
    case "telepatia":
      return "<g fill='none' stroke='#f0abfc' stroke-width='6' opacity='.85'><circle cx='0' cy='-580' r='200'/><circle cx='0' cy='-580' r='250' opacity='.6'/><circle cx='0' cy='-580' r='300' opacity='.3'/></g>";
    case "regeneracao":
      return "<g fill='#22c55e' opacity='.85'><path d='M-300 -300 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 Z'/><path d='M260 -100 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 Z'/><path d='M-280 200 h20 v-20 h20 v20 h20 v20 h-20 v20 h-20 v-20 h-20 Z'/></g>";
    case "cosmica":
      return "<g fill='#fff'><path d='M-300 -400 l10 25 l25 10 l-25 10 l-10 25 l-10 -25 l-25 -10 l25 -10 Z'/><path d='M300 -200 l10 25 l25 10 l-25 10 l-10 25 l-10 -25 l-25 -10 l25 -10 Z'/><path d='M-260 250 l8 20 l20 8 l-20 8 l-8 20 l-8 -20 l-20 -8 l20 -8 Z'/></g><circle cx='0' cy='-120' r='320' fill='none' stroke='#7c3aed' stroke-width='10' opacity='.6'/>";
    default:
      return "";
  }
}

function speciesHead(species: string, aura: string) {
  switch (species) {
    case "alienigena":
      return "<path d='M-60 -690 L-110 -800' stroke='#065f46' stroke-width='8'/><circle cx='-110' cy='-805' r='16' fill='#39ff14'/><path d='M60 -690 L110 -800' stroke='#065f46' stroke-width='8'/><circle cx='110' cy='-805' r='16' fill='#39ff14'/>";
    case "robo":
      return `<rect x='-80' y='-605' width='160' height='12' rx='6' fill='${aura || "#22d3ee"}'/><circle cx='-128' cy='-560' r='22' fill='#64748b'/><circle cx='128' cy='-560' r='22' fill='#64748b'/><path d='M0 -705 L0 -780' stroke='#64748b' stroke-width='8'/><circle cx='0' cy='-785' r='14' fill='#ef4444'/>`;
    case "hibrido":
      return "<path d='M0 -705 C40 -640 -40 -560 0 -420' stroke='#22d3ee' stroke-width='8' fill='none'/><path d='M20 -660 L100 -640 M20 -560 L110 -560' stroke='#22d3ee' stroke-width='5' opacity='.8'/>";
    case "mutante":
      return "<path d='M-90 -500 L-50 -540 L-30 -480 M80 -660 L50 -620 L100 -600' stroke='#84cc16' stroke-width='6' fill='none'/><ellipse cx='0' cy='-650' rx='14' ry='10' fill='#fff'/><circle cx='0' cy='-650' r='6' fill='#84cc16'/>";
    default:
      return "";
  }
}

export function buildAvatarSVG(appearance: App = {}, elSymbol = "H"): string {
  const gender = appearance.gender ?? "masculino";
  const speciesType = appearance.speciesType ?? "humano";
  const skin = SKIN[appearance.skin ?? "morena_clara"] ?? SKIN.morena_clara;
  const hair = HAIR[appearance.hairColor ?? "preto"] ?? HAIR.preto;
  const [uniPrim, uniSec] = UNIFORM[appearance.uniform ?? "classico"] ?? UNIFORM.classico;
  const aura = AURA[appearance.aura ?? ""] ?? "";
  const skinFinal = speciesType === "robo" ? "#c0c4c9" : speciesType === "alienigena" && !appearance.skin ? "#3aa860" : skin;
  const pose = poseOf(appearance.pose, uniPrim, uniSec);
  const scale = bodyScale(appearance.body);
  const fem = gender === "feminino";

  // Olhos: alienígena tem olhos grandes; "sem pupila" = olho todo brilhante
  const noPupil = appearance.eyeColor === "sem_pupila";
  const eye = EYE[appearance.eyeColor ?? "castanho"] ?? EYE.castanho;
  const eyes = speciesType === "alienigena"
    ? `<ellipse cx='-48' cy='-590' rx='34' ry='22' fill='${noPupil ? "#fff" : "#0b0f1a"}' transform='rotate(-15 -48 -590)'/><ellipse cx='48' cy='-590' rx='34' ry='22' fill='${noPupil ? "#fff" : "#0b0f1a"}' transform='rotate(15 48 -590)'/>${noPupil ? "" : `<circle cx='-55' cy='-595' r='7' fill='${eye}'/><circle cx='41' cy='-595' r='7' fill='${eye}'/>`}`
    : noPupil
      ? "<ellipse cx='-40' cy='-590' rx='18' ry='11' fill='#fff'/><ellipse cx='40' cy='-590' rx='18' ry='11' fill='#fff'/><ellipse cx='-40' cy='-590' rx='26' ry='16' fill='#fff' opacity='.35'/><ellipse cx='40' cy='-590' rx='26' ry='16' fill='#fff' opacity='.35'/>"
      : `<ellipse cx='-40' cy='-590' rx='16' ry='10' fill='#fff'/><ellipse cx='40' cy='-590' rx='16' ry='10' fill='#fff'/><circle cx='-40' cy='-590' r='7' fill='${eye}'/><circle cx='40' cy='-590' r='7' fill='${eye}'/>`;
  const lashes = fem ? "<path d='M-58 -600 L-66 -612 M-48 -603 L-52 -616 M58 -600 L66 -612 M48 -603 L52 -616' stroke='#111' stroke-width='4'/>" : "<path d='M-60 -615 L-22 -612 M22 -612 L60 -615' stroke='#2a1a10' stroke-width='7'/>";
  const mouth = fem
    ? "<path d='M-22 -520 Q0 -500 22 -520 Q0 -512 -22 -520 Z' fill='#be185d'/>"
    : "<path d='M-24 -520 Q0 -505 24 -520' stroke='#3a1a1a' stroke-width='4' fill='none'/>";
  const chin = fem ? "" : "<path d='M-40 -480 Q0 -462 40 -480' stroke='#3a2a1a' stroke-width='3' fill='none' opacity='.35'/>";
  const invisible = appearance.mainPower === "invisibilidade";
  const scene = SCENES[appearance.scene ?? ""] ?? "<rect width='900' height='1300' fill='url(#bg)'/>";
  const shadowRy = pose.dy < 0 ? 14 : 30;

  const auraVar = aura || "#7c3aed";
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1300" width="900" height="1300">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="${aura || "#7c3aed"}" stop-opacity="${aura ? ".75" : ".25"}"/>
      <stop offset="1" stop-color="${aura || "#7c3aed"}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff5fa2"/><stop offset="25%" stop-color="#ffd35f"/>
      <stop offset="50%" stop-color="#5fff9a"/><stop offset="75%" stop-color="#5fb8ff"/>
      <stop offset="100%" stop-color="#a85fff"/>
    </linearGradient>
    <filter id="drop"><feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#000" flood-opacity=".55"/></filter>
    <style>:root{--hair:${hair};--aura:${aura || "#7c3aed"}}</style>
  </defs>
  ${scene}
  <ellipse cx="450" cy="${700 + pose.dy}" rx="420" ry="600" fill="url(#glow)"/>
  <ellipse cx="450" cy="1210" rx="${pose.dy < 0 ? 140 : 240}" ry="${shadowRy}" fill="#000" opacity=".45"/>
  <g transform="translate(450 ${800 + pose.dy}) rotate(${pose.rotate}) scale(${(0.8 * scale).toFixed(3)} 0.8)" filter="url(#drop)">
    ${aura ? `<ellipse cx="0" cy="-100" rx="330" ry="640" fill="none" stroke="${aura}" stroke-width="14" opacity=".55"/>` : ""}
    ${accessoryBack(appearance.accessory, uniSec)}
    ${capeEl(appearance.cape, uniSec)}
    <g opacity="${invisible ? ".4" : "1"}">
      ${pose.legs}
      ${bootsEl(appearance.boots, pose.feet, uniSec)}
      <path d="${bodyPath(appearance.body, gender)}" fill="${uniPrim}"/>
      ${uniformDetail(appearance.uniform, uniSec)}
      ${pose.arms}
      ${glovesEl(appearance.gloves, pose.hands, skinFinal, uniSec)}
      ${chestEl(appearance.chestSymbol, elSymbol, uniSec)}
      ${accessoryFront(appearance.accessory === "asas" || appearance.accessory === "cauda" ? undefined : appearance.accessory === "oculos" || appearance.accessory === "viseira" || appearance.accessory === "tiara" ? undefined : appearance.accessory, uniSec, aura || "#7c3aed")}
      <rect x="-40" y="-440" width="80" height="90" fill="${skinFinal}"/>
      ${appearance.hairStyle === "longo" || appearance.hairStyle === "ondulado" ? hairPath(appearance.hairStyle, gender) : ""}
      ${face(appearance.faceShape, skinFinal)}
      ${chin}
      ${eyes}
      ${lashes}
      ${mouth}
      ${speciesHead(speciesType, aura)}
      ${appearance.hairStyle === "longo" || appearance.hairStyle === "ondulado" ? "" : hairPath(appearance.hairStyle, gender)}
      ${maskEl(appearance.mask)}
      ${accessoryFront(appearance.accessory === "oculos" || appearance.accessory === "viseira" || appearance.accessory === "tiara" ? appearance.accessory : undefined, uniSec, aura || "#7c3aed")}
    </g>
    ${powerEl(appearance.mainPower, pose.hands)}
  </g>
  <text x="450" y="1270" text-anchor="middle" font-family="Arial Black" font-size="36" font-weight="900" fill="#fff" opacity=".85">${elSymbol}</text>
</svg>`.replace(/var\(--hair\)/g, hair).replace(/var\(--aura\)/g, auraVar);
}

export function buildAvatarDataUrl(appearance: App = {}, elSymbol = "H"): string {
  const svg = buildAvatarSVG(appearance, elSymbol);
  // Base64 seguro para caracteres UTF-8
  const b64 = typeof window !== "undefined"
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg, "utf-8").toString("base64");
  return `data:image/svg+xml;base64,${b64}`;
}

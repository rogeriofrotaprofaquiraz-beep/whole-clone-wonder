// Compositor de avatar 100% local (SVG). Não consome créditos de IA nem Átomos.
// Recebe o objeto `appearance` salvo em player_avatars e devolve um data URL SVG.

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
  verde: "#2f8f3a", verde_neon: "#39ff14", rosa: "#ff66b3", roxo: "#8a3ef0",
  vermelho: "#d2352f", laranja: "#ff8a1f", dourado: "#d4a017", prateado: "#c0c4c9",
  arco_iris: "url(#rainbow)",
};

const EYE: Record<string, string> = {
  castanho: "#5a3825", mel: "#b88a3a", ambar: "#e2a13a", azul: "#2f6df0",
  azul_claro: "#7ec8ff", verde: "#2f8f3a", cinza: "#9aa0a6", preto: "#000",
  branco: "#fff", vermelho: "#d2352f", roxo: "#8a3ef0", dourado: "#d4a017",
  prateado: "#c0c4c9", laranja: "#ff8a1f", ciano: "#00e0ff",
  sem_pupila: "#fff", brilhante: "#fff",
};

const AURA: Record<string, string> = {
  fogo: "#ff5a1f", gelo: "#7ec8ff", eletricidade: "#ffe14a", luz: "#fff8c2",
  sombras: "#1a1030", azul: "#2f6df0", roxa: "#8a3ef0", verde: "#39ff14",
  dourada: "#d4a017", fumaca: "#888", cristal: "#a0e3ff", raio: "#ffd200",
  cosmica: "#5b2a86",
};

const UNIFORM: Record<string, [string, string]> = {
  classico: ["#1e3a8a", "#dc2626"],
  tecnologico: ["#0f172a", "#22d3ee"],
  espacial: ["#111827", "#a78bfa"],
  militar: ["#3d4a2b", "#6b7d3a"],
  tatico: ["#1f2937", "#374151"],
  mistico: ["#4c1d95", "#f59e0b"],
  armadura_pesada: ["#4b5563", "#9ca3af"],
  nanoarmadura: ["#0b1220", "#00e0ff"],
  stealth: ["#0a0a0a", "#1f1f1f"],
  cyberpunk: ["#0a0a1a", "#ff00aa"],
  alienigena: ["#064e3b", "#10b981"],
  organico: ["#3f2a1a", "#7c5b3a"],
};

const CHEST_EMOJI: Record<string, string> = {
  raio: "⚡", fogo: "🔥", gelo: "❄", agua: "💧", arvore: "🌳", folha: "🍃",
  escudo: "🛡", asa: "🪽", estrela: "★", lua: "🌙", sol: "☀", dragao: "🐉",
  lobo: "🐺", leao: "🦁", aguia: "🦅", fenix: "🔥", serpente: "🐍",
  coracao: "♥", diamante: "◆",
};

function bodyPath(body?: string) {
  switch (body) {
    case "magro":
    case "esguio":
      return "M-90 -320 C-70 -400 70 -400 90 -320 L110 260 C60 320 -60 320 -110 260 Z";
    case "musculoso":
    case "fisiculturista":
      return "M-190 -330 C-160 -420 160 -420 190 -330 L230 260 C130 340 -130 340 -230 260 Z";
    case "grande":
    case "gigante":
    case "robusto":
      return "M-220 -340 C-190 -430 190 -430 220 -340 L260 280 C150 360 -150 360 -260 280 Z";
    case "curvilineo":
      return "M-150 -330 C-130 -410 130 -410 150 -330 L200 60 C170 140 -170 140 -200 60 L-150 260 C-90 320 90 320 150 260 Z";
    default: // atletico, definido, padrão
      return "M-140 -320 C-120 -400 120 -400 140 -320 L170 260 C90 320 -90 320 -170 260 Z";
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
      return "<path d='M-10 -700 L10 -700 L20 -560 L-20 -560 Z' fill='var(--hair)'/>";
    case "afro_grande":
    case "black_power":
      return "<circle cx='0' cy='-620' r='170' fill='var(--hair)'/>";
    case "afro_curto":
    case "crespo":
      return "<circle cx='0' cy='-620' r='150' fill='var(--hair)'/>";
    case "longo":
    case "longo_liso":
    case "longo_ondulado":
      return "<path d='M-150 -580 C-180 -400 -200 -100 -180 200 L-100 200 L-100 -520 Z M150 -580 C180 -400 200 -100 180 200 L100 200 L100 -520 Z' fill='var(--hair)'/><path d='M-140 -620 C-140 -740 140 -740 140 -620 L120 -540 L-120 -540 Z' fill='var(--hair)'/>";
    case "cacheado":
      return "<path d='M-140 -620 C-160 -780 160 -780 140 -620 C130 -560 -130 -560 -140 -620 Z' fill='var(--hair)'/><circle cx='-100' cy='-560' r='30' fill='var(--hair)'/><circle cx='100' cy='-560' r='30' fill='var(--hair)'/>";
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
    default: // curto/medio
      return "<path d='M-140 -640 C-140 -760 140 -760 140 -640 L120 -540 L-120 -540 Z' fill='var(--hair)'/>";
  }
}

function maskEl(mask?: string) {
  switch (mask) {
    case "meia":
      return "<rect x='-95' y='-630' width='190' height='40' rx='8' fill='#0b0f1a'/>";
    case "completa":
      return "<ellipse cx='0' cy='-580' rx='115' ry='140' fill='#0b0f1a'/><ellipse cx='-38' cy='-590' rx='18' ry='10' fill='#fff'/><ellipse cx='38' cy='-590' rx='18' ry='10' fill='#fff'/>";
    case "capuz":
      return "<path d='M-160 -680 C-160 -820 160 -820 160 -680 L140 -500 L-140 -500 Z' fill='#0b0f1a' opacity='.9'/>";
    case "tecnologica":
      return "<rect x='-105' y='-620' width='210' height='50' rx='16' fill='#0b0f1a'/><rect x='-95' y='-608' width='190' height='26' rx='10' fill='var(--aura)' opacity='.7'/>";
    case "ninja":
      return "<rect x='-110' y='-540' width='220' height='60' rx='6' fill='#0b0f1a'/><rect x='-95' y='-630' width='190' height='30' rx='8' fill='#0b0f1a'/>";
    case "tatica":
      return "<path d='M-110 -560 L110 -560 L90 -460 L-90 -460 Z' fill='#0b0f1a'/>";
    case "caveira":
      return "<ellipse cx='0' cy='-580' rx='115' ry='140' fill='#f5f5f5'/><ellipse cx='-38' cy='-590' rx='18' ry='22' fill='#000'/><ellipse cx='38' cy='-590' rx='18' ry='22' fill='#000'/>";
    case "metalica":
      return "<ellipse cx='0' cy='-580' rx='115' ry='140' fill='#c0c4c9' stroke='#5a5f66' stroke-width='4'/>";
    case "energia":
      return "<ellipse cx='0' cy='-580' rx='115' ry='140' fill='var(--aura)' opacity='.55'/>";
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
      return `<path d='M-200 -330 L-260 100 L-220 60 L-200 200 L-160 100 L-140 -300 Z M200 -330 L260 100 L220 60 L200 200 L160 100 L140 -300 Z' fill='${color}' opacity='.85'/>`;
    case "metalica":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='#c0c4c9' stroke='#5a5f66' stroke-width='4'/>`;
    case "energia":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='var(--aura)' opacity='.6'/>`;
    case "transparente":
      return `<path d='M-200 -330 L-320 380 L-160 400 L-140 -300 Z M200 -330 L320 380 L160 400 L140 -300 Z' fill='#fff' opacity='.2'/>`;
    case "sombras":
      return `<path d='M-220 -330 L-360 500 L-140 480 L-140 -300 Z M220 -330 L360 500 L140 480 L140 -300 Z' fill='#0a0a1a' opacity='.85'/>`;
    default:
      return "";
  }
}

function chestEl(sym?: string, elSymbol?: string, second = "#facc15") {
  if (!sym || sym === "sem") return "";
  if (sym === "inicial" || sym === "elemento") {
    const t = elSymbol ?? "H";
    return `<circle cx='0' cy='-80' r='90' fill='#0b0f1a'/><text x='0' y='-40' text-anchor='middle' font-family='Arial Black' font-size='90' font-weight='900' fill='${second}'>${t}</text>`;
  }
  const e = CHEST_EMOJI[sym] ?? "★";
  return `<circle cx='0' cy='-80' r='90' fill='#0b0f1a'/><text x='0' y='-40' text-anchor='middle' font-size='110'>${e}</text>`;
}

function armsPath(pose?: string, color = "#1e3a8a") {
  switch (pose) {
    case "bracos_cruzados":
      return `<path d='M-170 -280 L-40 -160 L40 -160 L170 -280 L150 -220 L-150 -220 Z' fill='${color}'/>`;
    case "punhos":
      return `<path d='M-170 -280 L-220 60 L-140 80 L-120 -260 Z M170 -280 L220 60 L140 80 L120 -260 Z' fill='${color}'/><circle cx='-180' cy='90' r='34' fill='${color}'/><circle cx='180' cy='90' r='34' fill='${color}'/>`;
    case "voando":
    case "atacando":
      return `<path d='M-170 -280 L-320 -420 L-260 -450 L-120 -280 Z M170 -280 L320 -420 L260 -450 L120 -280 Z' fill='${color}'/>`;
    case "meditando":
      return `<path d='M-170 -280 L-100 -60 L-30 -20 L-20 -260 Z M170 -280 L100 -60 L30 -20 L20 -260 Z' fill='${color}'/>`;
    default:
      return `<path d='M-170 -280 L-260 120 L-180 140 L-120 -260 Z M170 -280 L260 120 L180 140 L120 -260 Z' fill='${color}'/>`;
  }
}

export function buildAvatarSVG(appearance: App = {}, elSymbol = "H"): string {
  const skin = SKIN[appearance.skin ?? "morena_clara"] ?? SKIN.morena_clara;
  const hair = HAIR[appearance.hairColor ?? "preto"] ?? HAIR.preto;
  const eye = EYE[appearance.eyeColor ?? "castanho"] ?? EYE.castanho;
  const [uniPrim, uniSec] = UNIFORM[appearance.uniform ?? "classico"] ?? UNIFORM.classico;
  const aura = AURA[appearance.aura ?? ""] ?? "";
  const body = bodyPath(appearance.body);
  const hair2 = hairPath(appearance.hairStyle, appearance.gender);
  const mask = maskEl(appearance.mask);
  const cape = capeEl(appearance.cape, uniSec);
  const chest = chestEl(appearance.chestSymbol, elSymbol, uniSec);
  const arms = armsPath(appearance.pose, uniPrim);
  const gender = appearance.gender ?? "masculino";
  const speciesType = appearance.speciesType ?? "humano";

  // Ajustes por tipo de espécie
  const skinFinal = speciesType === "robo" ? "#c0c4c9" : speciesType === "alienigena" ? (SKIN[appearance.skin ?? "verde"] ?? "#3aa860") : skin;
  const chinNote = gender === "feminino" ? "" : "<path d='M-40 -510 Q0 -490 40 -510' stroke='#3a2a1a' stroke-width='3' fill='none' opacity='.4'/>";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1300" width="900" height="1300">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0f172a"/><stop offset="1" stop-color="#1e1b4b"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0" stop-color="${aura || "#7c3aed"}" stop-opacity=".55"/>
      <stop offset="1" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="rainbow" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ff5fa2"/><stop offset="25%" stop-color="#ffd35f"/>
      <stop offset="50%" stop-color="#5fff9a"/><stop offset="75%" stop-color="#5fb8ff"/>
      <stop offset="100%" stop-color="#a85fff"/>
    </linearGradient>
    <filter id="drop"><feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#000" flood-opacity=".55"/></filter>
    <style>:root{--hair:${hair};--aura:${aura || "#7c3aed"}}</style>
  </defs>
  <rect width="900" height="1300" fill="url(#bg)"/>
  <rect width="900" height="1300" fill="url(#glow)"/>
  ${aura ? `<ellipse cx="450" cy="700" rx="360" ry="520" fill="${aura}" opacity=".18"/>` : ""}
  <g transform="translate(450 780)" filter="url(#drop)">
    <ellipse cx="0" cy="450" rx="240" ry="30" fill="#000" opacity=".45"/>
    ${cape}
    <path d="${body}" fill="${uniPrim}"/>
    <path d="M-60 260 L-100 500 L-30 500 L-10 280 Z M60 260 L100 500 L30 500 L10 280 Z" fill="${uniSec}"/>
    ${arms}
    ${chest}
    <!-- pescoço -->
    <rect x="-40" y="-440" width="80" height="80" fill="${skinFinal}"/>
    <!-- cabeça -->
    <ellipse cx="0" cy="-560" rx="120" ry="145" fill="${skinFinal}"/>
    ${chinNote}
    <!-- olhos -->
    <ellipse cx="-40" cy="-590" rx="16" ry="10" fill="#fff"/>
    <ellipse cx="40" cy="-590" rx="16" ry="10" fill="#fff"/>
    <circle cx="-40" cy="-590" r="6" fill="${eye}"/>
    <circle cx="40" cy="-590" r="6" fill="${eye}"/>
    ${speciesType === "robo" ? `<rect x='-70' y='-600' width='140' height='6' fill='${aura || "#22d3ee"}'/>` : ""}
    <!-- boca -->
    <path d="M-24 -520 Q0 -505 24 -520" stroke="#3a1a1a" stroke-width="4" fill="none"/>
    ${hair2}
    ${mask}
  </g>
  <text x="450" y="1230" text-anchor="middle" font-family="Arial Black" font-size="36" font-weight="900" fill="#fff" opacity=".85">${elSymbol}</text>
</svg>`;
}

export function buildAvatarDataUrl(appearance: App = {}, elSymbol = "H"): string {
  const svg = buildAvatarSVG(appearance, elSymbol);
  // Base64 seguro para caracteres UTF-8
  const b64 = typeof window !== "undefined"
    ? window.btoa(unescape(encodeURIComponent(svg)))
    : Buffer.from(svg, "utf-8").toString("base64");
  return `data:image/svg+xml;base64,${b64}`;
}

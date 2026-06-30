// Banco de cenários de fundo por elemento — baseado em onde o elemento é
// naturalmente mais abundante ou onde é industrialmente produzido.
// Cada opção tem id, label (PT) e prompt (EN) usado pela IA.

export type SceneOption = { id: string; label: string; prompt: string };

const COMMON: SceneOption[] = [
  { id: "lab", label: "Laboratório futurista", prompt: "modern futuristic chemistry laboratory with glass tubes, holographic periodic table and cool blue rim lighting" },
  { id: "space", label: "Espaço profundo", prompt: "deep cosmic space with nebulae, distant stars and swirling galactic dust" },
  { id: "industry", label: "Indústria química", prompt: "massive industrial chemical plant at golden hour, steel towers, pipes and steam, dramatic backlight" },
];

const MAP: Record<string, SceneOption[]> = {
  H:  [{ id:"sun",     label:"Núcleo do Sol",        prompt:"surface of a glowing star, fiery solar plasma, hydrogen fusion flares, intense orange and white light" },
       { id:"water",   label:"Oceano profundo",      prompt:"underwater deep ocean scene with sun rays piercing through, water molecules abstractly glowing" },
       { id:"balloon", label:"Dirigível / balões",   prompt:"sky full of giant zeppelins and hydrogen balloons rising at sunrise" }],
  He: [{ id:"nebula",  label:"Nebulosa estelar",     prompt:"colorful stellar nebula full of helium gas, purple and teal cosmic clouds" },
       { id:"baloon",  label:"Balões coloridos",     prompt:"thousands of colorful helium balloons floating into a blue sky" }],
  C:  [{ id:"forest",  label:"Floresta amazônica",   prompt:"lush dense rainforest canopy with sun rays, green photosynthesis particles in the air" },
       { id:"coal",    label:"Mina de carvão",       prompt:"deep dark coal mine tunnel with industrial lights and black mineral walls" },
       { id:"diamond", label:"Caverna de diamantes", prompt:"crystal cavern lined with glittering diamond crystals, cool sparkling light" }],
  N:  [{ id:"sky",     label:"Atmosfera terrestre",  prompt:"high altitude view of earth atmosphere, blue sky gradient with clouds, slight curvature of the planet" },
       { id:"plants",  label:"Plantação fértil",     prompt:"vast green agricultural field with nitrogen-rich crops under cinematic sunlight" }],
  O:  [{ id:"sky",     label:"Céu / estratosfera",   prompt:"stratospheric sky with oxygen-blue glow, soft cirrus clouds and sun flare" },
       { id:"reef",    label:"Recife de coral",      prompt:"vibrant underwater coral reef teeming with life, oxygen bubbles rising" }],
  Na: [{ id:"sea",     label:"Mar salgado",          prompt:"crashing ocean waves with salty sea spray under dramatic stormy sky" },
       { id:"salt",    label:"Salinas brancas",      prompt:"endless white salt flats reflecting the sky, mirror-like surface" }],
  Cl: [{ id:"pool",    label:"Piscina química",      prompt:"industrial chlorine treatment facility with turquoise pools and pipes" }],
  Fe: [{ id:"core",    label:"Núcleo da Terra",      prompt:"cross section of earth core, molten iron glowing red-orange under immense pressure" },
       { id:"steel",   label:"Siderúrgica",          prompt:"steel mill blast furnace pouring molten iron, sparks flying in dark industrial setting" },
       { id:"mars",    label:"Superfície de Marte",  prompt:"red iron-rich martian desert landscape with dust storms" }],
  Au: [{ id:"mine",    label:"Mina de ouro",         prompt:"underground gold mine with veins of glittering gold ore in dark rock walls" },
       { id:"river",   label:"Rio aurífero",         prompt:"mountain river with gold nuggets shining in clear flowing water" },
       { id:"vault",   label:"Cofre de ouro",        prompt:"vault filled with stacked gold bars, warm golden light reflections" }],
  Ag: [{ id:"mine",    label:"Mina de prata",        prompt:"silver ore mine cavern with metallic veins glittering under headlamp light" }],
  Cu: [{ id:"mine",    label:"Mina de cobre",        prompt:"giant open-pit copper mine, terraced reddish-brown earth, dramatic scale" },
       { id:"wires",   label:"Rede elétrica",        prompt:"cinematic close up of massive copper power lines and substation at dusk" }],
  Al: [{ id:"refinery",label:"Refinaria de alumínio",prompt:"shiny aluminum refinery with metallic structures and reflective surfaces" }],
  Si: [{ id:"desert",  label:"Deserto de areia",     prompt:"endless golden sand desert dunes at sunset, silica grains shimmering" },
       { id:"chip",    label:"Fábrica de chips",     prompt:"hyper clean semiconductor fab interior, silicon wafers glowing under blue UV lighting" }],
  U:  [{ id:"reactor", label:"Reator nuclear",       prompt:"interior of a nuclear reactor pool glowing eerie cherenkov blue" },
       { id:"mine",    label:"Mina de urânio",       prompt:"radioactive uranium mine with yellow-green ore deposits and warning signs" }],
  P:  [{ id:"bone",    label:"Microscopia óssea",    prompt:"microscopic view of bone tissue, phosphorus crystalline structures glowing" }],
  S:  [{ id:"volcano", label:"Cratera vulcânica",    prompt:"active volcanic crater with bright yellow sulfur deposits and steam vents" }],
  K:  [{ id:"banana",  label:"Plantação tropical",   prompt:"tropical banana plantation, lush green leaves with sunlight filtering through" }],
  Ca: [{ id:"cave",    label:"Caverna de calcário",  prompt:"giant limestone cave with stalactites and stalagmites, crystal clear water pool" }],
  Mg: [{ id:"flare",   label:"Sinal pirotécnico",    prompt:"blinding bright white magnesium flare burning against dark background" }],
  Hg: [{ id:"liquid",  label:"Lago de mercúrio",     prompt:"surreal mirror-like lake of liquid mercury reflecting cosmic sky" }],
  Pb: [{ id:"shield",  label:"Bunker blindado",      prompt:"thick lead-lined radiation shielding bunker, heavy metallic doors" }],
  Ne: [{ id:"signs",   label:"Letreiros de neon",    prompt:"vibrant cyberpunk street at night full of glowing neon signs in pink, blue and purple" }],
  Ar: [{ id:"bulb",    label:"Lâmpadas / soldagem",  prompt:"industrial welding workshop with bright argon arc welding sparks" }],
  Ti: [{ id:"jet",     label:"Fábrica aeroespacial", prompt:"aerospace factory with titanium jet engine components, polished metallic surfaces" }],
  Li: [{ id:"battery", label:"Salar boliviano",      prompt:"lithium salt flats in Bolivia, geometric evaporation pools in vivid colors from above" }],
  Zn: [{ id:"galvan",  label:"Galvanização",         prompt:"industrial zinc galvanizing bath, hot dipped steel being lifted with steam" }],
  Ni: [{ id:"meteor",  label:"Meteorito metálico",   prompt:"close up of an iron-nickel meteorite floating in space with starfield background" }],
  Pt: [{ id:"jewel",   label:"Joalheria de luxo",    prompt:"luxury jewelry workshop with platinum rings and tools, soft warm lighting" }],
  F:  [{ id:"tooth",   label:"Esmalte dental",       prompt:"microscopic view of tooth enamel with fluoride crystals, clinical clean lighting" }],
  Br: [{ id:"sea",     label:"Mar Morto",            prompt:"reddish brown bromine-rich waters of the dead sea with mineral crusts" }],
  I:  [{ id:"kelp",    label:"Algas marinhas",       prompt:"underwater forest of giant kelp seaweed, golden light filtering down" }],
};

export function backgroundsFor(symbol: string): SceneOption[] {
  return [...(MAP[symbol] ?? []), ...COMMON];
}

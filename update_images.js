import fs from 'fs';

const filePath = 'src/data/elements.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const categories = {
  nonMetals: ["H", "C", "N", "O", "P", "S", "Se"],
  nobleGases: ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"],
  alkaliMetals: ["Li", "Na", "K", "Rb", "Cs", "Fr"],
  alkalineEarth: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
  metalloids: ["B", "Si", "Ge", "As", "Sb", "Te", "Po"],
  halogens: ["F", "Cl", "Br", "I", "At", "Ts"],
  postTransition: ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Nh", "Fl", "Mc", "Lv"]
};

function getPromptInfo(symbol, name, heroName, heroDescription, number) {
  let color = "metallic blue";
  if (categories.nonMetals.includes(symbol)) color = "emerald green";
  else if (categories.nobleGases.includes(symbol)) color = "sky blue and purple neon";
  else if (categories.alkaliMetals.includes(symbol)) color = "golden amber";
  else if (categories.alkalineEarth.includes(symbol)) color = "orange and yellow metallic";
  else if (categories.metalloids.includes(symbol)) color = "teal and cyan energy";
  else if (categories.halogens.includes(symbol)) color = "lime green glowing";
  else if (categories.postTransition.includes(symbol)) color = "indigo and violet chrome";
  else if (number >= 57 && number <= 71) color = "fuchsia and pink crystalline";
  else if (number >= 89 && number <= 103) color = "deep violet and dark energy";

  const prompt = `A cinematic superhero character named ${heroName}, representing the chemical element ${name}, ${heroDescription}, wearing high-tech power suit inspired by ${name} properties with ${color} highlights, highly detailed, digital art, masterpiece, comic book style, centered composition, action pose, 8k resolution`;
  return encodeURIComponent(prompt);
}

// Regex to find elements and their fields
const elementRegex = /"([A-Z][a-z]?)":\s*{[\s\S]*?"number":\s*(\d+),[\s\S]*?"symbol":\s*"([^"]+)",[\s\S]*?"name":\s*"([^"]+)",[\s\S]*?"heroName":\s*"([^"]+)",[\s\S]*?"heroDescription":\s*"([^"]+)",[\s\S]*?"heroImage":\s*"\/placeholder\.svg"/g;

content = content.replace(elementRegex, (match, key, number, symbol, name, heroName, heroDescription) => {
  const prompt = getPromptInfo(symbol, name, heroName, heroDescription, parseInt(number));
  const imageUrl = `https://image.pollinations.ai/prompt/${prompt}?width=600&height=800&nologo=true`;
  return match.replace(/"heroImage":\s*"\/placeholder\.svg"/, `"heroImage": "${imageUrl}"`);
});

fs.writeFileSync(filePath, content);
console.log("Updated elements with generated hero images.");

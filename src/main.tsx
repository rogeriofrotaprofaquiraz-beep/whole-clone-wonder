import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Randomize a soft gray gradient on each load
(function applyGrayGradient() {
  // Base light gray range: lightness 78-94%, slight hue variation (neutral grays)
  const l1 = 82 + Math.floor(Math.random() * 12); // 82-93
  const l2 = 60 + Math.floor(Math.random() * 18); // 60-77
  const h = 200 + Math.floor(Math.random() * 40); // 200-240 (cool neutral)
  const angle = 120 + Math.floor(Math.random() * 120); // 120-240deg
  const c1 = `hsl(${h}, 8%, ${l1}%)`;
  const c2 = `hsl(${h}, 12%, ${l2}%)`;
  const c3 = `hsl(${h + 10}, 6%, ${Math.min(95, l1 + 6)}%)`;
  document.documentElement.style.setProperty(
    "--app-bg-gradient",
    `linear-gradient(${angle}deg, ${c1} 0%, ${c3} 50%, ${c2} 100%)`
  );
})();

createRoot(document.getElementById("root")!).render(<App />);

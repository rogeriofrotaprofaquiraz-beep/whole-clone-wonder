import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return json({ error: "Unauthorized" }, 401);

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const anonKey = Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY")!;
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    if (!lovableKey) return json({ error: "Missing LOVABLE_API_KEY" }, 500);

    const userClient = createClient(supabaseUrl, anonKey, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: "Unauthorized" }, 401);

    const admin = createClient(supabaseUrl, serviceKey);
    const { data: isAdmin } = await admin.rpc("has_role", { _user_id: user.id, _role: "admin" });
    if (!isAdmin) return json({ error: "Forbidden" }, 403);

    const body = await req.json();
    const { prompt, symbol, name, heroName, rarity } = body;
    const count = Math.max(1, Math.min(5, Number(body.count) || 1));
    if (!prompt || !symbol) return json({ error: "prompt and symbol required" }, 400);
    // Diversity hints to inject per variation (sex/skin/ethnicity sorted randomly per call)
    const sexes = ["male", "female"];
    const skins = ["fair", "light", "medium", "tan", "brown", "dark"];
    const ethns = ["African", "East Asian", "South Asian", "Latin", "Middle Eastern", "European", "Indigenous", "Pacific Islander"];
    const hairs = ["black", "brown", "blonde", "red", "white", "silver", "auburn"];
    const builds = ["athletic", "muscular", "slim", "tall", "compact"];
    const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

    const saveFallback = async (reason: string) => {
      const esc = (value: unknown) => String(value ?? "").replace(/[&<>'"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&apos;", '"': "&quot;" }[ch]!));
      const sym = esc(symbol);
      const hero = esc(heroName || `${name || symbol} Hero`);
      const label = esc(name || symbol);
      const rar = esc(rarity || "Herói");

      // Deterministic per-element seed
      const seedStr = String(symbol) + "|" + String(name || "") + "|" + String(heroName || "");
      let h = 2166136261;
      for (let i = 0; i < seedStr.length; i++) { h ^= seedStr.charCodeAt(i); h = Math.imul(h, 16777619); }
      const rand = (n: number) => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return Math.abs(h) % n; };

      const hue = rand(360);
      const hue2 = (hue + 40 + rand(220)) % 360;
      const skin = ["#f8d3b0", "#e8b48a", "#c98e63", "#8b5a3c", "#5b4636", "#d6a98f"][rand(6)];

      const bodyType = rand(4);
      const capeType = rand(4);
      const headGear = rand(5);
      const emblem = rand(5);
      const weapon = rand(6);
      const pose = rand(3);
      const bodyScale = 0.9 + rand(40) / 100;

      let cape = "";
      if (capeType === 1) cape = `<path d="M-180 -340 L-340 380 L-200 360 L-150 -300 Z M180 -340 L340 380 L200 360 L150 -300 Z" fill="hsl(${hue2},75%,40%)" opacity=".85"/>`;
      else if (capeType === 2) cape = `<path d="M-200 -340 L-420 880 L-100 820 L-120 -300 Z M200 -340 L420 880 L100 820 L120 -300 Z" fill="hsl(${hue2},80%,38%)" opacity=".9"/>`;
      else if (capeType === 3) cape = `<path d="M-220 -300 C-360 200 -320 700 -240 880 L-120 820 L-140 -260 Z M220 -300 C360 200 320 700 240 880 L120 820 L140 -260 Z" fill="hsl(${hue2},70%,32%)" opacity=".9"/>`;

      let torso = "";
      if (bodyType === 0) torso = `<path d="M-210 -380 C-180 -460 180 -460 210 -380 L270 280 C160 360 -160 360 -270 280 Z" fill="hsl(${hue},80%,45%)"/>`;
      else if (bodyType === 1) torso = `<path d="M-150 -360 C-130 -440 130 -440 150 -360 L190 280 C110 340 -110 340 -190 280 Z" fill="hsl(${hue},75%,48%)"/>`;
      else if (bodyType === 2) torso = `<path d="M-230 -390 L-260 -200 L-240 280 C-150 360 150 360 240 280 L260 -200 L230 -390 Z" fill="hsl(${hue},35%,55%)" stroke="hsl(${hue},60%,25%)" stroke-width="6"/>`;
      else torso = `<path d="M-260 -300 C-300 -100 -280 320 -200 420 L200 420 C280 320 300 -100 260 -300 Z" fill="hsl(${hue},45%,28%)"/>`;

      const head = `<circle cx="0" cy="-560" r="135" fill="${skin}"/>`;
      let gear = "";
      if (headGear === 1) gear = `<path d="M-145 -560 C-145 -700 145 -700 145 -560 L130 -510 L-130 -510 Z" fill="hsl(${hue},70%,40%)"/><rect x="-150" y="-540" width="300" height="22" fill="hsl(${hue2},80%,55%)"/>`;
      else if (headGear === 2) gear = `<rect x="-140" y="-600" width="280" height="60" rx="20" fill="#0b0f1a"/><circle cx="-60" cy="-570" r="14" fill="hsl(${hue2},95%,65%)"/><circle cx="60" cy="-570" r="14" fill="hsl(${hue2},95%,65%)"/>`;
      else if (headGear === 3) gear = `<path d="M-160 -560 C-160 -740 160 -740 160 -560 L150 -470 C90 -440 -90 -440 -150 -470 Z" fill="hsl(${hue2},55%,25%)"/>`;
      else if (headGear === 4) gear = `<path d="M-120 -680 L-80 -740 L-40 -690 L0 -760 L40 -690 L80 -740 L120 -680 L120 -650 L-120 -650 Z" fill="hsl(${hue2},90%,55%)" stroke="hsl(${hue2},80%,30%)" stroke-width="4"/>`;

      let chestEmblem = "";
      if (emblem === 0) chestEmblem = `<circle cx="0" cy="-100" r="100" fill="#0b0f1a"/><text x="0" y="-58" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="110" font-weight="900" fill="hsl(${hue2},95%,70%)">${sym}</text>`;
      else if (emblem === 1) chestEmblem = `<polygon points="0,-200 95,-100 60,30 -60,30 -95,-100" fill="#0b0f1a"/><text x="0" y="-50" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="90" font-weight="900" fill="hsl(${hue2},95%,70%)">${sym}</text>`;
      else if (emblem === 2) chestEmblem = `<path d="M0 -210 L110 -100 L0 10 L-110 -100 Z" fill="#fff" opacity=".92"/><text x="0" y="-55" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="86" font-weight="900" fill="hsl(${hue},85%,28%)">${sym}</text>`;
      else if (emblem === 3) chestEmblem = `<circle cx="0" cy="-100" r="110" fill="hsl(${hue2},90%,60%)"/><circle cx="0" cy="-100" r="78" fill="#0b0f1a"/><text x="0" y="-58" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="100" font-weight="900" fill="#fff">${sym}</text>`;
      else chestEmblem = `<path d="M-110 -180 L110 -180 L80 30 L-80 30 Z" fill="#0b0f1a"/><text x="0" y="-50" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="96" font-weight="900" fill="hsl(${hue2},95%,70%)">${sym}</text>`;

      let arms = "";
      if (pose === 0) arms = `<path d="M-210 -340 L-330 100 L-260 130 L-150 -290 Z" fill="hsl(${hue},75%,52%)"/><path d="M210 -340 L330 100 L260 130 L150 -290 Z" fill="hsl(${hue},75%,52%)"/>`;
      else if (pose === 1) arms = `<path d="M-210 -340 L-360 -480 L-300 -510 L-150 -310 Z" fill="hsl(${hue},75%,52%)"/><path d="M210 -340 L360 -480 L300 -510 L150 -310 Z" fill="hsl(${hue},75%,52%)"/>`;
      else arms = `<path d="M-210 -340 L-380 60 L-310 110 L-150 -290 Z" fill="hsl(${hue},75%,52%)"/><path d="M210 -340 L300 -120 L240 -90 L150 -290 Z" fill="hsl(${hue},75%,52%)"/>`;

      const legs = `<path d="M-150 250 L-220 870 L-110 870 L-30 290 Z" fill="hsl(${hue},65%,32%)"/><path d="M150 250 L220 870 L110 870 L30 290 Z" fill="hsl(${hue},65%,32%)"/><rect x="-225" y="855" width="125" height="40" rx="10" fill="#0b0f1a"/><rect x="100" y="855" width="125" height="40" rx="10" fill="#0b0f1a"/>`;

      let wp = "";
      if (weapon === 1) wp = `<g transform="translate(380 -120) rotate(35)"><rect x="-8" y="-260" width="16" height="320" fill="#e5e7eb"/><rect x="-40" y="60" width="80" height="22" fill="hsl(${hue2},70%,35%)"/><rect x="-8" y="82" width="16" height="60" fill="hsl(${hue2},70%,35%)"/></g>`;
      else if (weapon === 2) wp = `<g transform="translate(370 -100)"><rect x="-6" y="-280" width="12" height="560" fill="hsl(${hue2},60%,30%)"/><circle cx="0" cy="-300" r="40" fill="hsl(${hue2},95%,65%)"/><circle cx="0" cy="-300" r="22" fill="#fff"/></g>`;
      else if (weapon === 3) wp = `<g transform="translate(380 -60) rotate(20)"><rect x="-8" y="-40" width="16" height="320" fill="hsl(${hue2},60%,30%)"/><rect x="-80" y="-120" width="160" height="100" rx="14" fill="hsl(${hue2},35%,55%)" stroke="#0b0f1a" stroke-width="6"/></g>`;
      else if (weapon === 4) wp = `<g transform="translate(330 -180)"><circle cx="0" cy="0" r="70" fill="hsl(${hue2},95%,60%)" opacity=".85"/><circle cx="0" cy="0" r="38" fill="#fff"/></g>`;
      else if (weapon === 5) wp = `<g transform="translate(-360 -120)"><path d="M0 -240 C-90 -160 -90 160 0 240" stroke="hsl(${hue2},70%,40%)" stroke-width="14" fill="none"/><line x1="0" y1="-240" x2="0" y2="240" stroke="#e5e7eb" stroke-width="3"/></g>`;

      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 3000" width="900" height="3000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue},85%,22%)"/><stop offset="1" stop-color="hsl(${(hue+180)%360},60%,10%)"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="48%" r="55%"><stop offset="0" stop-color="hsl(${hue2},95%,70%)" stop-opacity=".55"/><stop offset="1" stop-color="hsl(${hue},95%,30%)" stop-opacity="0"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity=".6"/></filter>
  </defs>
  <rect width="900" height="3000" fill="url(#bg)"/>
  <rect width="900" height="3000" fill="url(#glow)"/>
  <g opacity=".18" stroke="#fff" stroke-width="2">${Array.from({ length: 14 }, (_, i) => `<path d="M${i * 80 - 100} 0 L${i * 80 + 620} 3000"/>`).join("")}</g>
  <g transform="translate(450 1500) scale(${bodyScale.toFixed(2)})" filter="url(#shadow)">
    <ellipse cx="0" cy="920" rx="280" ry="44" fill="#000" opacity=".45"/>
    ${cape}
    ${torso}
    ${arms}
    ${legs}
    ${chestEmblem}
    ${head}
    ${gear}
    ${wp}
  </g>
  <text x="450" y="240" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="96" font-weight="900" fill="#fff">${sym}</text>
  <text x="450" y="368" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="58" font-weight="900" fill="#fff">${hero}</text>
  <text x="450" y="442" text-anchor="middle" font-family="Arial,sans-serif" font-size="36" fill="#dbeafe">${label} • ${rar}</text>
</svg>`;
      const path = `${symbol}/fallback-${Date.now()}.svg`;
      const bytes = new TextEncoder().encode(svg);
      const { error: upErr } = await admin.storage.from("hero-images").upload(path, bytes, { contentType: "image/svg+xml", upsert: true });
      if (upErr) return json({ error: "Upload failed: " + upErr.message }, 500);
      const { data: signed } = await admin.storage.from("hero-images").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      return json({ url: signed?.signedUrl, path, fallback: true, reason });
    };

    const generateOne = async (variationIdx: number): Promise<{ url?: string; fallback?: boolean; reason?: string }> => {
      const diversity = `RANDOM CASTING for variation #${variationIdx + 1}: ${pick(sexes)} hero, ${pick(ethns)} ethnicity, ${pick(skins)} skin tone, ${pick(hairs)} hair, ${pick(builds)} build, unique pose. Each variation MUST look like a different person.`;
      const fullPrompt = diversity + " " + prompt;
      try {
        const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${lovableKey}` },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash-image",
            messages: [{ role: "user", content: fullPrompt }],
            modalities: ["image", "text"],
          }),
        });
        if (!aiResp.ok) {
          const text = await aiResp.text();
          if (aiResp.status === 402) return { fallback: true, reason: "Créditos de IA esgotados" };
          if (aiResp.status === 429) return { fallback: true, reason: "Limite de IA atingido" };
          return { fallback: true, reason: "Falha IA: " + text.slice(0, 100) };
        }
        const aiData = await aiResp.json();
        const imageUrl: string | undefined = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
        if (!imageUrl) return { fallback: true, reason: "IA não retornou imagem" };
        const match = imageUrl.match(/^data:(image\/\w+);base64,(.+)$/);
        if (!match) return { fallback: true, reason: "Formato inválido" };
        const mime = match[1];
        const ext = mime.split("/")[1] || "png";
        const bytes = Uint8Array.from(atob(match[2]), (c) => c.charCodeAt(0));
        const path = `${symbol}/${Date.now()}-v${variationIdx}.${ext}`;
        const { error: upErr } = await admin.storage.from("hero-images").upload(path, bytes, { contentType: mime, upsert: true });
        if (upErr) return { fallback: true, reason: "Upload falhou" };
        const { data: signed } = await admin.storage.from("hero-images").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
        return { url: signed?.signedUrl };
      } catch (e) {
        return { fallback: true, reason: "Exceção: " + String(e).slice(0, 80) };
      }
    };

    const results = await Promise.all(Array.from({ length: count }, (_, i) => generateOne(i)));
    const successes = results.filter((r) => r.url).map((r) => r.url!);
    if (successes.length > 0) {
      return json({ urls: successes, url: successes[0], count: successes.length, requested: count });
    }
    // All failed → never produce a simple SVG drawing; report the real reason instead
    void saveFallback;
    const reason = results[0]?.reason || "IA não retornou imagem";
    return json({ urls: [], error: `Não foi possível gerar o herói ultrarrealista: ${reason}. Nenhum Átomo foi cobrado.` }, 200);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

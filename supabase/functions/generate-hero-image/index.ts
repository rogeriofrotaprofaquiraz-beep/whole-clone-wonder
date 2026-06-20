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

    const { prompt, symbol, name, heroName, rarity } = await req.json();
    if (!prompt || !symbol) return json({ error: "prompt and symbol required" }, 400);

    const saveFallback = async (reason: string) => {
      const esc = (value: unknown) => String(value ?? "").replace(/[&<>'"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&apos;", '"': "&quot;" }[ch]!));
      const hue = Math.abs(String(symbol).split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) * 37) % 360;
      const hero = esc(heroName || `${name || symbol} Hero`);
      const label = esc(name || symbol);
      const sym = esc(symbol);
      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 3000" width="900" height="3000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${hue},85%,20%)"/><stop offset="1" stop-color="#020617"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="28%" r="45%"><stop offset="0" stop-color="hsl(${hue},95%,70%)" stop-opacity=".75"/><stop offset="1" stop-color="hsl(${hue},95%,45%)" stop-opacity="0"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity=".55"/></filter>
  </defs>
  <rect width="900" height="3000" fill="url(#bg)"/>
  <rect width="900" height="3000" fill="url(#glow)"/>
  <g opacity=".22" stroke="#fff" stroke-width="2">${Array.from({ length: 18 }, (_, i) => `<path d="M${i * 70 - 120} 0 L${i * 70 + 580} 3000"/>`).join("")}</g>
  <g transform="translate(450 1450)" filter="url(#shadow)">
    <ellipse cx="0" cy="910" rx="250" ry="42" fill="#000" opacity=".45"/>
    <path d="M-210 -420 C-350 -120 -330 310 -185 690 C-110 640 -85 500 -110 325 C-170 40 -140 -220 -60 -405 Z" fill="hsl(${hue},90%,68%)" opacity=".55"/>
    <path d="M210 -420 C350 -120 330 310 185 690 C110 640 85 500 110 325 C170 40 140 -220 60 -405 Z" fill="hsl(${hue},90%,68%)" opacity=".55"/>
    <circle cx="0" cy="-590" r="145" fill="#f8d3b0"/>
    <path d="M-115 -675 C-90 -770 98 -790 142 -655 C75 -700 -20 -715 -115 -675 Z" fill="#111827"/>
    <path d="M-185 -410 C-145 -530 145 -530 185 -410 L245 235 C155 315 -155 315 -245 235 Z" fill="hsl(${hue},80%,45%)"/>
    <path d="M-95 -382 C-62 -432 62 -432 95 -382 L128 245 C65 285 -65 285 -128 245 Z" fill="#e5e7eb" opacity=".92"/>
    <circle cx="0" cy="-105" r="145" fill="#020617" opacity=".35"/>
    <text x="0" y="-52" text-anchor="middle" font-family="Arial,sans-serif" font-size="132" font-weight="900" fill="#fff">${sym}</text>
    <path d="M-188 -335 L-310 95 L-250 125 L-128 -285 Z" fill="hsl(${hue},85%,62%)"/>
    <path d="M188 -335 L310 95 L250 125 L128 -285 Z" fill="hsl(${hue},85%,62%)"/>
    <path d="M-148 250 L-220 825 L-132 825 L-35 282 Z" fill="hsl(${hue},70%,36%)"/>
    <path d="M148 250 L220 825 L132 825 L35 282 Z" fill="hsl(${hue},70%,36%)"/>
  </g>
  <text x="450" y="260" text-anchor="middle" font-family="Arial,sans-serif" font-size="84" font-weight="900" fill="#fff">${sym}</text>
  <text x="450" y="384" text-anchor="middle" font-family="Arial,sans-serif" font-size="52" font-weight="900" fill="#fff">${hero}</text>
  <text x="450" y="458" text-anchor="middle" font-family="Arial,sans-serif" font-size="34" fill="#dbeafe">${label} • ${esc(rarity || "Herói")}</text>
</svg>`;
      const path = `${symbol}/fallback-${Date.now()}.svg`;
      const bytes = new TextEncoder().encode(svg);
      const { error: upErr } = await admin.storage.from("hero-images").upload(path, bytes, { contentType: "image/svg+xml", upsert: true });
      if (upErr) return json({ error: "Upload failed: " + upErr.message }, 500);
      const { data: signed } = await admin.storage.from("hero-images").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      return json({ url: signed?.signedUrl, path, fallback: true, reason });
    };

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${lovableKey}` },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content: prompt }],
        modalities: ["image", "text"],
      }),
    });

    if (!aiResp.ok) {
      const text = await aiResp.text();
      if (aiResp.status === 429) return new Response(JSON.stringify({ error: "Rate limit exceeded, try again later" }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (aiResp.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted, please add credits" }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      return new Response(JSON.stringify({ error: "AI error: " + text }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const aiData = await aiResp.json();
    const imageUrl: string | undefined = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!imageUrl) return new Response(JSON.stringify({ error: "No image returned" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    // imageUrl is data URL "data:image/png;base64,..."
    const match = imageUrl.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) return new Response(JSON.stringify({ error: "Invalid image format" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    const mime = match[1];
    const ext = mime.split("/")[1] || "png";
    const bytes = Uint8Array.from(atob(match[2]), c => c.charCodeAt(0));

    const path = `${symbol}/${Date.now()}.${ext}`;
    const { error: upErr } = await admin.storage.from("hero-images").upload(path, bytes, { contentType: mime, upsert: true });
    if (upErr) return new Response(JSON.stringify({ error: "Upload failed: " + upErr.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const { data: signed } = await admin.storage.from("hero-images").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);

    return new Response(JSON.stringify({ url: signed?.signedUrl, path }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});

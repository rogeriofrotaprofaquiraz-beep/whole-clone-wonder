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

    const { cardSymbol, appearance, photoBase64, equipped } = await req.json();
    if (!cardSymbol) return json({ error: "cardSymbol required" }, 400);

    const { data: el } = await admin.from("elements")
      .select("symbol,number,name,attributes,hero_name,hero_description,hero_image")
      .eq("symbol", cardSymbol).maybeSingle();
    if (!el) return json({ error: "Elemento não encontrado" }, 404);

    const a = appearance ?? {};
    const gender = a.gender === "feminino" ? "feminina" : "masculino";
    const body = a.body ?? "normal";
    const skin = a.skin ?? "clara";
    const hairStyle = a.hairStyle ?? "curto";
    const hairColor = a.hairColor ?? "castanho";

    const eq = equipped ?? {};
    const outfitDesc = eq.outfit ? `Roupa estilo ${eq.outfit.name}` : "";
    const bgDesc = eq.background ? `Cenário: ${eq.background.name}` : "";
    const accDesc = eq.accessory ? `Acessório: ${eq.accessory.name}` : "";

    const cat = (el.attributes as any)?.category ?? "";
    const prompt = [
      `Retrato vertical estilo carta colecionável, proporção 2:3, realismo cinematográfico ultra detalhado, 8k.`,
      `CORPO INTEIRO de um(a) super-herói ${gender} representando o elemento químico "${el.name}" (símbolo ${el.symbol}). Mostrar dos pés à cabeça, sem cortes.`,
      `Tipo de corpo ${body}, pele ${skin}, cabelo ${hairStyle} cor ${hairColor}.`,
      outfitDesc, accDesc,
      `Câmera full body, composição centrada, leve ângulo baixo heroico, foco nítido no personagem.`,
      `Traje com textura e cores fiéis à aparência natural do elemento (${cat}). Emblema luminoso "${el.symbol}" no centro do peito.`,
      bgDesc || `Cenário: ambiente de origem natural do elemento.`,
      `Estilo: realismo fantástico, sem texto, sem marca d'água, sem bordas.`,
      photoBase64 ? `Use o rosto da foto de referência como base para os traços faciais, mantendo semelhança realista.` : "",
    ].filter(Boolean).join(" ");

    const content: any[] = [{ type: "text", text: prompt }];
    if (photoBase64) {
      const dataUrl = photoBase64.startsWith("data:") ? photoBase64 : `data:image/png;base64,${photoBase64}`;
      content.push({ type: "image_url", image_url: { url: dataUrl } });
    }

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${lovableKey}` },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content }],
        modalities: ["image", "text"],
      }),
    });

    // Fallback SVG quando os créditos de IA do workspace acabarem ou rate limit
    const buildFallbackSvg = () => {
      const bgPalette: Record<string, [string, string]> = {
        bg_lab: ["#0F172A", "#1E3A8A"],
        bg_space: ["#7C3AED", "#0F172A"],
        bg_nature: ["#065F46", "#10B981"],
        bg_city: ["#1F2937", "#6B7280"],
        bg_abstract: ["#EC4899", "#F59E0B"],
      };
      const bgId = eq.background?.id ?? "bg_lab";
      const [c1, c2] = bgPalette[bgId] ?? bgPalette.bg_lab;
      const accEmoji = eq.accessory?.emoji ?? "";
      const outfitEmoji = eq.outfit?.emoji ?? "";
      return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
  <rect width="400" height="600" fill="url(#g)"/>
  <text x="200" y="240" text-anchor="middle" font-family="Arial,sans-serif" font-weight="900" font-size="180" fill="#fff" opacity="0.95">${el.symbol}</text>
  <text x="200" y="300" text-anchor="middle" font-family="Arial,sans-serif" font-size="28" fill="#fff" opacity="0.85">${el.name}</text>
  <text x="200" y="430" text-anchor="middle" font-size="100">${outfitEmoji}${accEmoji}</text>
  <text x="200" y="560" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#fff" opacity="0.7">Avatar offline (sem créditos IA)</text>
</svg>`;
    };

    const saveFallback = async (reason: string) => {
      if (el.hero_image) {
        await admin.from("player_avatars").update({
          generated_url: el.hero_image,
          current_card: cardSymbol,
          appearance: a,
        }).eq("user_id", user.id);
        return json({ url: el.hero_image, fallback: true, reason });
      }

      const svg = buildFallbackSvg();
      const bytes = new TextEncoder().encode(svg);
      const path = `${user.id}/${cardSymbol}-fallback-${Date.now()}.svg`;
      await admin.storage.from("player-avatars").upload(path, bytes, { contentType: "image/svg+xml", upsert: true });
      const { data: signed } = await admin.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      const url = signed?.signedUrl;
      await admin.from("player_avatars").update({
        generated_url: url, current_card: cardSymbol, appearance: a,
      }).eq("user_id", user.id);
      return json({ url, path, fallback: true, reason });
    };

    if (!aiResp.ok) {
      const text = await aiResp.text();
      if (aiResp.status === 402) return await saveFallback("Avatar criado sem gastar Átomos.");
      if (aiResp.status === 429) return await saveFallback("Avatar criado sem gastar Átomos.");
      return await saveFallback("Avatar criado sem gastar Átomos.");
    }


    const aiData = await aiResp.json();
    const imageUrl: string | undefined = aiData.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    if (!imageUrl) return json({ error: "Nenhuma imagem retornada" }, 500);

    const match = imageUrl.match(/^data:(image\/\w+);base64,(.+)$/);
    if (!match) return json({ error: "Formato de imagem inválido" }, 500);
    const mime = match[1];
    const ext = mime.split("/")[1] || "png";
    const bytes = Uint8Array.from(atob(match[2]), c => c.charCodeAt(0));

    const path = `${user.id}/${cardSymbol}-${Date.now()}.${ext}`;
    const { error: upErr } = await admin.storage.from("player-avatars").upload(path, bytes, { contentType: mime, upsert: true });
    if (upErr) return json({ error: "Upload falhou: " + upErr.message }, 500);

    const { data: signed } = await admin.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
    const url = signed?.signedUrl;

    await admin.from("player_avatars").update({
      generated_url: url,
      current_card: cardSymbol,
      appearance: a,
    }).eq("user_id", user.id);

    return json({ url, path });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

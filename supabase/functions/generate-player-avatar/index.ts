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

    // Carrega a carta-herói existente como base (imagem de referência principal)
    let heroBase64: string | null = null;
    let heroMime = "image/png";
    if (el.hero_image) {
      try {
        const heroResp = await fetch(el.hero_image);
        if (heroResp.ok) {
          heroMime = heroResp.headers.get("content-type") ?? "image/png";
          const buf = new Uint8Array(await heroResp.arrayBuffer());
          let bin = "";
          for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
          heroBase64 = btoa(bin);
        }
      } catch (_) { /* ignore */ }
    }

    const prompt = [
      `TAREFA: editar/modificar a IMAGEM DE REFERÊNCIA do herói "${el.hero_name ?? el.name}" (elemento ${el.name}, símbolo ${el.symbol}) para criar uma VERSÃO PERSONALIZADA EXCLUSIVA deste jogador.`,
      `MANTENHA fielmente: a mesma composição vertical de carta colecionável (proporção 2:3), o mesmo traje/armadura, a mesma pose heroica de corpo inteiro, o mesmo emblema "${el.symbol}" no peito, a mesma iluminação cinematográfica, o mesmo cenário/atmosfera (${cat}) e o mesmo estilo realista 8k da imagem original.`,
      `MODIFIQUE apenas o personagem para refletir as características do jogador:`,
      `- Gênero: ${gender}`,
      `- Tipo físico: ${body}`,
      `- Tom de pele: ${skin}`,
      `- Cabelo: ${hairStyle} cor ${hairColor}`,
      outfitDesc && `- ${outfitDesc} (adapte sutilmente sem perder a identidade do herói)`,
      accDesc && `- ${accDesc}`,
      bgDesc && `- ${bgDesc}`,
      photoBase64 ? `Use a SEGUNDA imagem (foto do jogador) como referência facial: aplique os traços do rosto real ao herói, mantendo realismo.` : "",
      `O resultado DEVE parecer uma variação oficial da mesma carta — reconhecível como "${el.hero_name ?? el.name}", porém com o personagem personalizado. Sem texto, sem bordas, sem marca d'água.`,
    ].filter(Boolean).join(" ");

    const content: any[] = [{ type: "text", text: prompt }];
    if (heroBase64) {
      content.push({ type: "image_url", image_url: { url: `data:${heroMime};base64,${heroBase64}` } });
    }
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

    // Fallback SVG personalizado conforme aparência + equipamentos
    const buildFallbackSvg = () => {
      const bgPalette: Record<string, [string, string]> = {
        bg_lab: ["#0F172A", "#1E3A8A"],
        bg_space: ["#7C3AED", "#0F172A"],
        bg_nature: ["#065F46", "#10B981"],
        bg_city: ["#1F2937", "#6B7280"],
        bg_abstract: ["#EC4899", "#F59E0B"],
        bg_violet: ["#4C1D95", "#0F172A"],
      };
      const bgId = eq.background?.id ?? "bg_violet";
      const [c1, c2] = bgPalette[bgId] ?? bgPalette.bg_violet;

      const skinMap: Record<string, string> = {
        clara: "#f8d3b0", media: "#e8b48a", morena: "#c98e63", escura: "#6b4226",
      };
      const hairMap: Record<string, string> = {
        preto: "#111827", castanho: "#5b3a1f", loiro: "#f5d68a", ruivo: "#c2410c",
        azul: "#3b82f6", roxo: "#8b5cf6", branco: "#f1f5f9",
      };
      const skinHex = skinMap[skin] ?? skinMap.clara;
      const hairHex = hairMap[hairColor] ?? hairMap.castanho;

      // Corpo
      const bodyW = body === "musculoso" ? 150 : body === "atletico" ? 120 : body === "magro" ? 90 : 110;
      const bodyH = 220;

      // Cabelo conforme estilo
      let hair = "";
      if (hairStyle === "longo") hair = `<path d="M130 150 Q200 70 270 150 L280 320 L260 200 L240 170 L200 160 L160 170 L140 200 L120 320 Z" fill="${hairHex}"/>`;
      else if (hairStyle === "curto") hair = `<path d="M140 160 Q200 90 260 160 L260 195 Q200 170 140 195 Z" fill="${hairHex}"/>`;
      else if (hairStyle === "cacheado") hair = `<g fill="${hairHex}"><circle cx="160" cy="155" r="22"/><circle cx="185" cy="140" r="22"/><circle cx="215" cy="140" r="22"/><circle cx="240" cy="155" r="22"/><circle cx="150" cy="180" r="18"/><circle cx="250" cy="180" r="18"/></g>`;
      else if (hairStyle === "espetado") hair = `<path d="M140 180 L155 110 L170 175 L185 100 L200 170 L215 100 L230 175 L245 110 L260 180 Z" fill="${hairHex}"/>`;
      // careca = sem cabelo

      // Gênero — cintura/quadril
      const hipW = gender === "feminina" ? bodyW + 30 : bodyW;

      // Roupa (cor)
      const outfitColors: Record<string, string> = {
        outfit_casual: "#3b82f6", outfit_lab: "#f1f5f9", outfit_hero: "#dc2626",
        outfit_formal: "#0f172a", outfit_sport: "#16a34a",
      };
      const outfitId = eq.outfit?.id ?? "outfit_casual";
      const outfitColor = outfitColors[outfitId] ?? "#3b82f6";
      const outfitEmoji = eq.outfit?.emoji ?? "";
      const accEmoji = eq.accessory?.emoji ?? "";

      return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" width="400" height="600">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
    <radialGradient id="glow" cx="50%" cy="35%" r="55%"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="400" height="600" fill="url(#bg)"/>
  <rect width="400" height="600" fill="url(#glow)"/>
  <text x="200" y="50" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="36" fill="#fff" opacity="0.95">${el.symbol}</text>
  <text x="200" y="78" text-anchor="middle" font-family="Arial,sans-serif" font-size="16" fill="#fff" opacity="0.8">${el.name}</text>

  <!-- Pernas -->
  <rect x="${200 - hipW/2 + 10}" y="430" width="${hipW/2 - 20}" height="120" fill="#0f172a"/>
  <rect x="${200 + 10}" y="430" width="${hipW/2 - 20}" height="120" fill="#0f172a"/>
  <!-- Sapatos -->
  <rect x="${200 - hipW/2 + 5}" y="545" width="${hipW/2 - 10}" height="18" rx="6" fill="#1f2937"/>
  <rect x="${200 + 5}" y="545" width="${hipW/2 - 10}" height="18" rx="6" fill="#1f2937"/>

  <!-- Corpo / camisa -->
  <path d="M${200 - bodyW/2} 230 Q200 215 ${200 + bodyW/2} 230 L${200 + hipW/2} 440 L${200 - hipW/2} 440 Z" fill="${outfitColor}" stroke="#000" stroke-width="2" opacity="0.95"/>
  <!-- Emblema -->
  <circle cx="200" cy="320" r="34" fill="#0b0f1a"/>
  <text x="200" y="332" text-anchor="middle" font-family="Arial Black,sans-serif" font-weight="900" font-size="32" fill="#fbbf24">${el.symbol}</text>

  <!-- Braços -->
  <rect x="${200 - bodyW/2 - 28}" y="232" width="26" height="160" rx="12" fill="${outfitColor}" stroke="#000" stroke-width="2"/>
  <rect x="${200 + bodyW/2 + 2}" y="232" width="26" height="160" rx="12" fill="${outfitColor}" stroke="#000" stroke-width="2"/>
  <!-- Mãos -->
  <circle cx="${200 - bodyW/2 - 15}" cy="400" r="14" fill="${skinHex}"/>
  <circle cx="${200 + bodyW/2 + 15}" cy="400" r="14" fill="${skinHex}"/>

  <!-- Pescoço -->
  <rect x="186" y="210" width="28" height="28" fill="${skinHex}"/>
  <!-- Cabeça -->
  <circle cx="200" cy="175" r="55" fill="${skinHex}" stroke="#000" stroke-width="2"/>
  <!-- Olhos -->
  <circle cx="183" cy="175" r="4" fill="#111"/>
  <circle cx="217" cy="175" r="4" fill="#111"/>
  <!-- Boca -->
  <path d="M188 198 Q200 206 212 198" stroke="#111" stroke-width="2" fill="none"/>
  <!-- Cabelo -->
  ${hair}

  <!-- Acessório / emoji -->
  <text x="320" y="190" text-anchor="middle" font-size="44">${accEmoji}</text>
  <text x="80" y="190" text-anchor="middle" font-size="38">${outfitEmoji}</text>

  <text x="200" y="585" text-anchor="middle" font-family="Arial,sans-serif" font-size="11" fill="#fff" opacity="0.55">${gender} • ${body} • ${skin} • ${hairStyle} ${hairColor}</text>
</svg>`;
    };

    const saveFallback = async (reason: string) => {
      // Em vez do SVG cartoon (que quebra o padrão visual), reaproveitamos
      // a própria carta-herói fotorrealista do elemento como avatar.
      // Assim o jogador sempre vê uma imagem no mesmo estilo da carta oficial.
      let url: string | null = el.hero_image ?? null;

      if (heroBase64) {
        try {
          const bytes = Uint8Array.from(atob(heroBase64), (c) => c.charCodeAt(0));
          const ext = (heroMime.split("/")[1] || "png").replace("svg+xml", "svg");
          const path = `${user.id}/${cardSymbol}-hero-${Date.now()}.${ext}`;
          const { error: upErr } = await admin.storage
            .from("player-avatars")
            .upload(path, bytes, { contentType: heroMime, upsert: true });
          if (!upErr) {
            const { data: signed } = await admin.storage
              .from("player-avatars")
              .createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
            if (signed?.signedUrl) url = signed.signedUrl;
          }
        } catch (_) { /* keep el.hero_image */ }
      }

      if (!url) {
        // Último recurso: gera SVG simples só com o símbolo (sem cartoon)
        const svg = buildFallbackSvg();
        const bytes = new TextEncoder().encode(svg);
        const path = `${user.id}/${cardSymbol}-fallback-${Date.now()}.svg`;
        await admin.storage.from("player-avatars").upload(path, bytes, { contentType: "image/svg+xml", upsert: true });
        const { data: signed } = await admin.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
        url = signed?.signedUrl ?? null;
      }

      await admin.from("player_avatars").update({
        generated_url: url, current_card: cardSymbol, appearance: a,
      }).eq("user_id", user.id);
      return json({ url, fallback: true, reason });
    };

    if (!aiResp.ok) {
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

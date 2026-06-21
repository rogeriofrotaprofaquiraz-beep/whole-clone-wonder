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
      `TAREFA: gerar APENAS A ARTE FINAL DO AVATAR PERSONALIZADO, no mesmo resultado visual mostrado nas telas de perfil: uma imagem vertical 2:3 de super-herói fotorrealista, pronta para aparecer como carta alta e também ser recortada em avatar circular no perfil.`,
      `FORMATO OBRIGATÓRIO: retrato vertical 2:3, personagem de corpo inteiro centralizado, dos pés à cabeça, com os dois pés e a cabeça 100% visíveis, sem cortes, com margem superior e inferior completas. O herói deve ocupar cerca de 75% a 85% da altura da imagem, igual ao resultado de personalização enviado.`,
      `NÃO gerar tela de aplicativo, perfil, interface, botão, badge de moedas, número 72, nome de usuário, moldura branca externa, card UI, texto, legenda, watermark, logo ou ícones. A saída é só a ilustração vertical do avatar.`,
      `ESTILO VISUAL: super-herói cinematográfico realista 8k, foco nítido, leve ângulo baixo heroico, luz frontal fria forte, preenchimento ambiente suave, rim light dramático, sombras naturais, aura elemental discreta, cenário fantástico coerente com ${cat || "o elemento"}.`,
      `A imagem oficial do elemento anexada é SOMENTE REFERÊNCIA DE QUALIDADE/PALETA/ILUMINAÇÃO para "${el.name}" (${el.symbol}). NÃO copie o personagem, rosto, pose exata, roupa ou identidade da referência.`,
      `⚠️ PRIORIDADE MÁXIMA: recrie o personagem do zero com EXATAMENTE estas características do jogador, que vencem qualquer detalhe da referência:`,
      `• GÊNERO: ${gender} — corpo, rosto, silhueta e proporções devem ser claramente ${gender}`,
      `• TIPO FÍSICO: corpo ${body}`,
      `• TOM DE PELE: ${skin}, visível no rosto, mãos e pele exposta`,
      `• CABELO: estilo ${hairStyle}, cor ${hairColor}, claramente visível`,
      outfitDesc && `• TRAJE: ${outfitDesc}; use um traje de super-herói premium adaptado a esse item, mantendo um emblema luminoso "${el.symbol}" no peito`,
      accDesc && `• ACESSÓRIO OBRIGATÓRIO E VISÍVEL: ${accDesc}, integrado ao personagem sem esconder rosto, mãos ou corpo`,
      bgDesc && `• CENÁRIO: ${bgDesc}, substituindo totalmente o fundo da carta original`,
      photoBase64 ? `Use a SEGUNDA imagem (foto do jogador) apenas como referência facial/identidade, preservando as escolhas de gênero, pele e cabelo acima. Não transforme em selfie, busto ou retrato cortado.` : "",
      `COMPOSIÇÃO FINAL: full-body shot central, pose heroica equilibrada, face no terço superior, torso legível para o recorte circular do perfil, pernas e pés completos dentro do quadro. Se sair busto, close-up, personagem cortado, cartoon, anime, tela de perfil ou card com texto, está errado.`,
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
        return json({ error: "Não foi possível gerar avatar no estilo solicitado agora. Tente novamente em instantes." }, 500);
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

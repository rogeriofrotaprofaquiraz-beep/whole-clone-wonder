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
    const genderEn = a.gender === "feminino" ? "female" : "male";
    const bodyMap: Record<string, string> = {
      magro: "slim, lean build",
      normal: "average athletic build",
      atletico: "muscular athletic build",
      musculoso: "very muscular, broad-shouldered build with clearly defined arms, chest and legs",
      forte: "very muscular, broad-shouldered build",
      curvy: "curvy hourglass build",
    };
    const skinMap: Record<string, string> = {
      muito_clara: "very fair pale skin",
      clara: "light fair skin",
      media: "medium tan skin",
      morena_clara: "light tan skin",
      morena: "medium brown skin",
      morena_escura: "dark brown skin",
      escura: "dark brown skin",
      negra: "deep dark brown skin",
    };
    const hairStyleMap: Record<string, string> = {
      careca: "completely bald, no hair",
      curto: "short cropped hair",
      medio: "medium length hair",
      longo: "long flowing hair",
      cacheado: "curly voluminous hair",
      crespo: "natural afro-textured hair",
      espetado: "spiky upward-styled hair",
      rabo: "hair tied in a ponytail",
      moicano: "mohawk haircut",
    };
    const hairColorMap: Record<string, string> = {
      preto: "jet black",
      castanho: "chestnut brown",
      loiro: "blond",
      ruivo: "red ginger",
      azul: "electric blue",
      roxo: "vivid purple",
      grisalho: "grey silver",
      branco: "white",
      colorido: "vibrant dyed (pink/blue/purple)",
    };
    const body = bodyMap[a.body] ?? a.body ?? "average build";
    const skin = skinMap[a.skin] ?? a.skin ?? "light skin";
    const hairStyle = hairStyleMap[a.hairStyle] ?? a.hairStyle ?? "short hair";
    const hairColor = a.hairStyle === "careca" ? "" : (hairColorMap[a.hairColor] ?? a.hairColor ?? "brown");

    const outfitMap: Record<string, string> = {
      outfit_casual: "casual streetwear superhero outfit: fitted t-shirt, jacket and jeans, with subtle glowing element emblem on chest",
      outfit_cientista: "futuristic scientist hero outfit: long white lab coat over tactical suit, glowing tech panels, element emblem on chest",
      outfit_heroi: "classic premium superhero bodysuit with armored chest plate, utility belt, glowing element emblem at the center of the chest",
      outfit_futurista: "high-tech futuristic exosuit with neon circuitry, holographic plating, glowing element emblem on chest",
      outfit_formal: "formal tailored suit with hero cape, sharp lines, glowing element emblem as a lapel pin",
    };
    const bgMap: Record<string, string> = {
      bg_lab: "modern futuristic scientific laboratory background with glass tubes, holographic displays and blue rim lighting",
      bg_space: "deep cosmic space background with nebulae, stars and distant planets, purple and blue tones",
      bg_nature: "lush enchanted nature background with giant trees, sun rays and green particles",
      bg_city: "epic neon-lit cyberpunk city skyline at night background",
      bg_abstract: "abstract energetic background of swirling magenta, orange and violet energy waves",
    };
    const accMap: Record<string, string> = {
      acc_oculos: "stylish modern eyeglasses",
      acc_oculos_protecao: "futuristic protective goggles on the forehead",
      acc_jaleco: "open white lab coat over the outfit",
      acc_luvas: "tactical armored gloves on both hands",
      acc_capa: "long flowing heroic cape behind the character",
      acc_capacete: "protective tech helmet (face still visible)",
      acc_mascara: "sleek hero half-mask covering only the eyes",
      acc_mochila: "tactical backpack on the shoulders",
    };

    const eq = equipped ?? {};
    const outfitDesc = eq.outfit ? (outfitMap[eq.outfit.id] ?? eq.outfit.name) : outfitMap.outfit_heroi;
    const bgDesc = eq.background ? (bgMap[eq.background.id] ?? eq.background.name) : "dramatic elemental background matching the element";
    const accDesc = eq.accessory ? (accMap[eq.accessory.id] ?? eq.accessory.name) : "";

    const cat = (el.attributes as any)?.category ?? "";

    // Baixa a CARTA do herói para usar como referência visual principal
    let cardImageDataUrl: string | null = null;
    if (el.hero_image) {
      try {
        const r = await fetch(el.hero_image);
        if (r.ok) {
          const buf = new Uint8Array(await r.arrayBuffer());
          const mimeIn = r.headers.get("content-type")?.split(";")[0] || "image/png";
          let bin = "";
          for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i]);
          cardImageDataUrl = `data:${mimeIn};base64,${btoa(bin)}`;
        }
      } catch (_) { /* segue sem referência da carta */ }
    }

    if (!cardImageDataUrl) {
      return json({ error: "Esta carta não tem imagem oficial — não há como editar. Gere a arte da carta primeiro no painel admin." }, 400);
    }

    const prompt = [
      `EDIT THE ATTACHED HERO CARD IMAGE. Do NOT redraw from scratch — keep the same character pose, costume design, colors, emblem, lighting and background composition from the original card.`,
      `Apply ONLY the following personalization changes to the existing character:`,
      `- Gender presentation: ${genderEn}`,
      `- Body type: ${body}`,
      `- Skin tone: ${skin}`,
      `- Hair: ${hairStyle}${hairColor ? `, ${hairColor} color` : ""}`,
      `- Outfit adjustments: ${outfitDesc}`,
      accDesc && `- Add accessory: ${accDesc}`,
      eq.background ? `- Replace background with: ${bgDesc}` : `- Keep the original background.`,
      `Element: "${el.name}" (${el.symbol})${cat ? `, ${cat}` : ""}.`,
      `OUTPUT: full body, vertical 2:3 framing, preserve the original card's visual quality and realism. This must look like an edited version of the uploaded card, not a new drawing.`,
      `FORBIDDEN: pixel art, low-resolution sprite, app UI, card frame, borders, text, logos, watermarks, usernames, numbers.`,
      photoBase64 ? `The SECOND attached image is the user's face — use only as facial likeness reference.` : "",
    ].filter(Boolean).join("\n");

    // Conteúdo multimodal: prompt + carta (referência principal) + foto opcional
    const content: any[] = [{ type: "text", text: prompt }];
    content.push({ type: "image_url", image_url: { url: cardImageDataUrl } });
    if (photoBase64) {
      const dataUrl = photoBase64.startsWith("data:") ? photoBase64 : `data:image/png;base64,${photoBase64}`;
      content.push({ type: "image_url", image_url: { url: dataUrl } });
    }

    const generationError = async (reason: string, status = 502) => {
      await admin.from("player_avatars").update({ current_card: cardSymbol, appearance: a }).eq("user_id", user.id);
      return json({ error: reason }, status);
    };

    const generateImage = async () => {
      // Nano Banana (Gemini 2.5 Flash Image): mais barato, especialista em EDIÇÃO de imagem
      const nanoBanana = {
        name: "google/gemini-2.5-flash-image",
        body: {
          model: "google/gemini-2.5-flash-image",
          messages: [{ role: "user", content }],
          modalities: ["image", "text"],
        },
      };
      // Nano Banana 2 (Gemini 3.1 Flash Image): edição com qualidade próxima do Pro
      const nanoBanana2 = {
        name: "google/gemini-3.1-flash-image",
        body: {
          model: "google/gemini-3.1-flash-image",
          messages: [{ role: "user", content }],
          modalities: ["image", "text"],
        },
      };

      // Ordem: prioriza o modelo mais barato que edita a carta original
      const attempts = [nanoBanana, nanoBanana2];


      const failures: string[] = [];
      for (const attempt of attempts) {
        const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${lovableKey}`,
            "Lovable-API-Key": lovableKey,
          },
          body: JSON.stringify(attempt.body),
        });

        const raw = await resp.text();
        let data: any = null;
        try { data = raw ? JSON.parse(raw) : null; } catch { /* keep raw details */ }

        if (!resp.ok) {
          failures.push(`${attempt.name}: HTTP ${resp.status}${raw ? ` — ${raw.slice(0, 220)}` : ""}`);
          if (resp.status === 402 || resp.status === 429) {
            const err: any = new Error(failures.join(" | "));
            err.status = resp.status;
            throw err;
          }
          continue;
        }

        const b64 = data?.data?.[0]?.b64_json;
        if (typeof b64 === "string" && b64.length > 0) return `data:image/png;base64,${b64}`;

        const chatUrl = data?.choices?.[0]?.message?.images?.[0]?.image_url?.url;
        if (typeof chatUrl === "string" && chatUrl.length > 0) return chatUrl;

        failures.push(`${attempt.name}: resposta sem imagem${raw ? ` — ${raw.slice(0, 220)}` : ""}`);
      }

      throw new Error(failures.join(" | ") || "nenhum modelo retornou imagem");
    };

    let imageUrl: string;
    let usedOriginalCardFallback = false;
    try {
      imageUrl = await generateImage();
    } catch (e) {
      const details = String((e as Error).message ?? e);
      const status = (e as any).status ?? (details.includes("HTTP 429") ? 429 : details.includes("HTTP 402") ? 402 : 502);
      if (status === 402) {
        imageUrl = cardImageDataUrl;
        usedOriginalCardFallback = true;
      } else {
        return await generationError(`A IA não conseguiu gerar o avatar ultrarrealista agora. Detalhes: ${details.slice(0, 500)}`, status);
      }
    }

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

    return json({
      url,
      path,
      fallback: usedOriginalCardFallback,
      message: usedOriginalCardFallback
        ? "Sem créditos de IA: a carta original foi aplicada como avatar, sem gerar pixel art."
        : undefined,
    });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

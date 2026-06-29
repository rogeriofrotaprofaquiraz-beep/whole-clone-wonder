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

    const { cardSymbol, appearance, photoBase64, equipped, count } = await req.json();
    if (!cardSymbol) return json({ error: "cardSymbol required" }, 400);
    const nWanted = Math.max(1, Math.min(5, Number(count) || 1));

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
      `Use the ATTACHED HERO CARD as the visual identity reference (suit design, emblem, color palette, mood).`,
      `Produce an ULTRA-PHOTOREALISTIC cinematic full-body portrait of a NEW superhero personalized for the player, following ALL the strict criteria below.`,
      ``,
      `FORMAT:`,
      `- Vertical card, aspect ratio 2:3 (like 6cm x 9cm), full bleed image, no borders, no UI, no text, no logos, no watermark, no numbers.`,
      ``,
      `COMPOSITION:`,
      `- FULL-BODY SHOT from head to feet, BOTH FEET fully visible inside the frame, generous top and bottom margin, character centered.`,
      `- Slightly low camera angle for a heroic feel.`,
      `- Shallow but smooth depth of field; sharp focus on the character.`,
      ``,
      `LIGHTING:`,
      `- Strong cool frontal key light highlighting suit texture and facial expression.`,
      `- Soft natural ambient fill, gentle realistic shadows, cinematic realism.`,
      ``,
      `CHARACTER (personalization — MANDATORY):`,
      `- Gender presentation: ${genderEn}.`,
      `- Body type: ${body}.`,
      `- Skin tone: ${skin}.`,
      `- Hair: ${hairStyle}${hairColor ? `, ${hairColor} color` : ""}, clearly styled and defined.`,
      `- Realistic ethnically diverse human features matching the choices above.`,
      `- Confident heroic expression, balanced powerful pose, either standing firmly on the ground or slightly hovering.`,
      ``,
      `COSTUME:`,
      `- Suit texture must visually evoke the REAL NATURAL TEXTURE of the element "${el.name}" as found in nature (metallic, crystalline, gaseous shimmer, liquid sheen, mineral, etc.).`,
      `- A clearly LUMINOUS chemical symbol "${el.symbol}" glowing at the CENTER OF THE CHEST as the emblem.`,
      `- Suit colors and luminosity must match the real-world appearance of the element.`,
      `- Cape rules based on element physical state:`,
      `  • Gaseous element: shimmering, translucent, gaseous cape of glowing colored mist with luminous edges.`,
      `  • Liquid or solid element: solid/glossy cape with soft colored light and luminous trims (no gaseous mist).`,
      `- Outfit personalization: ${outfitDesc}.`,
      accDesc && `- Accessory: ${accDesc}.`,
      ``,
      `BACKGROUND (must show the natural origin / extraction site of the element):`,
      `- Cinematic photorealistic environment representing where "${el.name}" is naturally found or extracted (mine, ore deposit, ocean, atmosphere, volcanic vent, salt flat, geothermal source, etc.).`,
      `- Harmonized with the frontal lighting; coherent palette tied to the element.`,
      eq.background ? `- Subtly blend with: ${bgDesc}.` : ``,
      ``,
      `STYLE:`,
      `- Fantastic realism, cinematic photo quality, central focus, short depth of field.`,
      `- High definition, fully visible body, balanced lighting, complete anatomy, no cropping of head or feet.`,
      `- Palette coherent with the element "${el.name}" (${el.symbol})${cat ? `, category ${cat}` : ""}.`,
      ``,
      `STRICTLY FORBIDDEN: pixel art, cartoon, anime, drawing, low-resolution sprite, card frame, borders, captions, usernames, atomic numbers, UI chrome, watermarks, cropped feet, cropped head.`,
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
      const makeGeminiEditBody = (model: string) => ({
        model,
        messages: [{ role: "user", content }],
        modalities: ["image", "text"],
        stream: false,
      });

      // Ordem: prioriza o modelo mais barato que edita a carta original
      const attempts = [
        { name: "google/gemini-2.5-flash-image", body: makeGeminiEditBody("google/gemini-2.5-flash-image") },
        { name: "google/gemini-3.1-flash-image", body: makeGeminiEditBody("google/gemini-3.1-flash-image") },
        { name: "google/gemini-3-pro-image", body: makeGeminiEditBody("google/gemini-3-pro-image") },
      ];

      const failures: string[] = [];
      for (const attempt of attempts) {
        const resp = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Lovable-API-Key": lovableKey,
          },
          body: JSON.stringify(attempt.body),
        });

        const raw = await resp.text();
        let data: any = null;
        try { data = raw ? JSON.parse(raw) : null; } catch { /* keep raw details */ }

        if (!resp.ok) {
          failures.push(`${attempt.name}: HTTP ${resp.status}${raw ? ` — ${raw.slice(0, 220)}` : ""}`);
          if (resp.status >= 400 && resp.status < 500) {
            const err: any = new Error(failures.join(" | "));
            err.status = resp.status;
            throw err;
          }
          continue;
        }

        const b64 = data?.data?.[0]?.b64_json;
        if (typeof b64 === "string" && b64.length > 0) return `data:image/png;base64,${b64}`;

        failures.push(`${attempt.name}: resposta sem imagem${raw ? ` — ${raw.slice(0, 220)}` : ""}`);
      }

      throw new Error(failures.join(" | ") || "nenhum modelo retornou imagem");
    };

    const generateOne = async (): Promise<{ url: string; fallback: boolean }> => {
      try {
        const u = await generateImage();
        return { url: u, fallback: false };
      } catch (e) {
        const details = String((e as Error).message ?? e);
        const status = (e as any).status ?? (details.includes("HTTP 429") ? 429 : details.includes("HTTP 402") ? 402 : 502);
        if (status === 402) return { url: cardImageDataUrl!, fallback: true };
        throw Object.assign(new Error(details), { status });
      }
    };

    const uploads: string[] = [];
    let anyFallback = false;
    try {
      for (let i = 0; i < nWanted; i++) {
        const { url: imageUrl, fallback } = await generateOne();
        if (fallback) anyFallback = true;
        const match = imageUrl.match(/^data:(image\/\w+);base64,(.+)$/);
        if (!match) continue;
        const mime = match[1];
        const ext = mime.split("/")[1] || "png";
        const bytes = Uint8Array.from(atob(match[2]), c => c.charCodeAt(0));
        const path = `${user.id}/${cardSymbol}-${Date.now()}-${i}.${ext}`;
        const { error: upErr } = await admin.storage.from("player-avatars").upload(path, bytes, { contentType: mime, upsert: true });
        if (upErr) continue;
        const { data: signed } = await admin.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
        if (signed?.signedUrl) uploads.push(signed.signedUrl);
      }
    } catch (e) {
      const details = String((e as Error).message ?? e);
      const status = (e as any).status ?? 502;
      if (uploads.length === 0) {
        if (status === 429) return await generationError("A IA está com limite temporário de uso. Tente novamente em alguns minutos; suas moedas foram preservadas.", 429);
        return await generationError(`A IA não conseguiu gerar o avatar ultrarrealista agora. Detalhes: ${details.slice(0, 500)}`, status);
      }
    }

    if (uploads.length === 0) return await generationError("Nenhuma variação foi gerada. Tente novamente.", 502);

    await admin.from("player_avatars").update({
      current_card: cardSymbol,
      appearance: a,
    }).eq("user_id", user.id);

    return json({
      urls: uploads,
      url: uploads[0],
      fallback: anyFallback,
      message: anyFallback
        ? "Os créditos de IA do workspace acabaram em alguma variação. A carta original foi usada como alternativa. Escolha a melhor opção abaixo."
        : `${uploads.length} variações geradas — escolha a melhor!`,
    });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

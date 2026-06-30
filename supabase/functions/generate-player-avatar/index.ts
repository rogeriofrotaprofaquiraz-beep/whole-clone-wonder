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
    const genderEn = a.gender === "feminino" ? "female" : a.gender === "androgino" ? "androgynous" : "male";
    const bodyMap: Record<string, string> = {
      magro: "slim, lean build",
      esguio: "tall slender lean build",
      atletico: "average athletic build",
      normal: "average athletic build",
      definido: "toned well-defined athletic build",
      musculoso: "very muscular, broad-shouldered build",
      fisiculturista: "extreme bodybuilder build with massive defined muscles",
      robusto: "stocky robust strong build",
      grande: "very large powerful build",
      gigante: "gigantic towering build",
      forte: "very muscular, broad-shouldered build",
      curvy: "curvy hourglass build",
      curvilineo: "curvy hourglass build",
    };
    const skinMap: Record<string, string> = {
      albino: "albino pale white skin with pinkish undertones",
      muito_clara: "very fair pale skin",
      clara: "light fair skin",
      bege: "beige light skin",
      media: "medium tan skin",
      morena_clara: "light tan skin",
      morena: "medium brown skin",
      parda: "warm brown mixed skin",
      morena_escura: "dark brown skin",
      escura: "dark brown skin",
      negra: "deep dark brown skin",
      chocolate: "rich deep chocolate brown skin",
      azul: "stylized blue-toned skin",
      verde: "stylized green-toned skin",
      cinza: "stylized grey-toned skin",
      vermelha: "stylized red-toned skin",
      roxa: "stylized purple-toned skin",
      dourada: "metallic gold skin",
      prateada: "metallic silver skin",
    };
    const hairStyleMap: Record<string, string> = {
      careca: "completely bald, no hair",
      raspado: "shaved buzzed scalp",
      buzz: "buzz cut very short hair",
      curto: "short cropped hair",
      curto_ondulado: "short wavy hair",
      medio: "medium length hair",
      longo: "long flowing hair",
      longo_liso: "long straight hair",
      longo_ondulado: "long wavy hair",
      cacheado: "curly voluminous hair",
      crespo: "natural afro-textured hair",
      black_power: "large rounded black-power afro hair",
      afro_curto: "short afro hair",
      afro_grande: "huge voluminous afro hair",
      dreadlocks: "long dreadlocks",
      trancas: "braided hair",
      box_braids: "box braids hairstyle",
      espetado: "spiky upward-styled hair",
      moicano: "mohawk haircut",
      topete: "pompadour topknot",
      samurai: "samurai topknot",
      coque: "hair bun",
      rabo: "hair tied in a ponytail",
      mullet: "mullet haircut",
    };
    const hairColorMap: Record<string, string> = {
      preto: "jet black",
      castanho_escuro: "dark brown",
      castanho: "chestnut brown",
      castanho_claro: "light brown",
      loiro: "blond",
      platinado: "platinum blond",
      branco: "white",
      cinza: "grey",
      grisalho: "grey silver",
      ruivo: "red ginger",
      azul: "electric blue",
      azul_escuro: "deep dark blue",
      azul_neon: "neon cyan blue",
      verde: "green",
      verde_neon: "neon green",
      rosa: "pink",
      roxo: "vivid purple",
      vermelho: "bright red",
      laranja: "orange",
      dourado: "metallic gold",
      prateado: "metallic silver",
      arco_iris: "rainbow multicolor",
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

    const variationTwists = [
      "Pose: standing heroically, feet apart, fists clenched at sides, slight 3/4 turn to the LEFT, calm confident gaze.",
      "Pose: dynamic action stance, one fist raised forward, body slightly turned to the RIGHT, dramatic wind blowing cape.",
      "Pose: power stance facing camera straight on, arms crossed over chest, intense direct look, low hero shot.",
      "Pose: in mid-air levitation, both arms extended slightly down, glowing energy swirling around feet, sky-side lighting.",
      "Pose: walking toward camera, one hand glowing with element energy, cape flowing behind, cinematic side rim light.",
    ];
    const cameraTwists = [
      "Camera: slight low angle, 35mm lens look.",
      "Camera: eye level, 50mm portrait look.",
      "Camera: dramatic worm's eye low angle, wide 28mm look.",
      "Camera: cinematic 3/4 hero angle, 85mm compression.",
      "Camera: front-facing, 50mm, soft bokeh background.",
    ];
    const faceArchetypes = [
      "STRONG SQUARE JAW, wide cheekbones, thick straight eyebrows, prominent nose, age around 28, small scar on the eyebrow.",
      "OVAL FACE, soft refined features, high cheekbones, almond-shaped eyes, age around 22, clean smooth skin.",
      "ROUND FACE, dimpled cheeks, full lips, friendly warm expression, age around 25, light freckles across the nose.",
      "ANGULAR DIAMOND FACE, very sharp cheekbones, deep-set intense eyes, narrow chin, age around 32, slight asymmetry.",
      "HEART-SHAPED FACE, broad forehead, pointed chin, very expressive large eyes, age around 19, youthful glow.",
    ];

    const buildPrompt = (variationIdx: number) => [
      `Generate an ULTRA-PHOTOREALISTIC cinematic full-body portrait of a NEW personalized superhero — VARIATION ${variationIdx + 1} OF 5, MUST BE VISUALLY DIFFERENT from the other 4 variations (different face, different pose, different framing).`,
      `The ATTACHED HERO CARD is ONLY a reference for: suit DESIGN, chest EMBLEM shape, COLOR palette and overall MOOD.`,
      `IGNORE the character shown on the card — DO NOT copy his face, body, hair, ethnicity, gender or pose. Replace him entirely with the personalized character described below.`,
      ``,
      `FORMAT: vertical 2:3, full bleed photo, no borders, no UI, no text, no logos, no watermark, no numbers, no captions.`,
      ``,
      `CHARACTER (MANDATORY — overrides the card's character completely):`,
      `- Gender presentation: ${genderEn} (MUST clearly look ${genderEn}).`,
      `- Body type: ${body}.`,
      `- Skin tone: ${skin} (KEEP IDENTICAL across all 5 variations).`,
      `- Hair: ${hairStyle}${hairColor ? `, ${hairColor} color` : ""} (KEEP IDENTICAL across all 5 variations).`,
      `- Realistic ethnically diverse human features matching the choices above.`,
      `- UNIQUE FACE for this variation #${variationIdx + 1}: ${faceArchetypes[variationIdx % faceArchetypes.length]}`,
      `- ${variationTwists[variationIdx % variationTwists.length]}`,
      `- ${cameraTwists[variationIdx % cameraTwists.length]}`,
      a.faceShape ? `- Face shape: ${a.faceShape}.` : "",
      a.eyeColor ? `- Eye color: ${a.eyeColor.replace(/_/g," ")}, intense and clearly visible.` : "",
      a.mask && a.mask !== "sem" ? `- Mask style: ${a.mask.replace(/_/g," ")} mask.` : "",
      a.uniform ? `- Uniform style: ${a.uniform.replace(/_/g," ")} superhero uniform.` : "",
      a.chestSymbol && a.chestSymbol !== "sem" ? `- Chest emblem: a ${a.chestSymbol.replace(/_/g," ")} symbol glowing at the center of the chest (replacing the card's emblem).` : "",
      a.cape && a.cape !== "sem" ? `- Cape: ${a.cape.replace(/_/g," ")} style cape flowing behind.` : "",
      a.gloves && a.gloves !== "sem" ? `- Gloves: ${a.gloves.replace(/_/g," ")} hero gloves on both hands.` : "",
      a.boots ? `- Boots: ${a.boots.replace(/_/g," ")} hero boots.` : "",
      a.aura && a.aura !== "sem" ? `- Aura: visible ${a.aura.replace(/_/g," ")} energy aura glowing around the body.` : "",
      a.mainPower ? `- Main power expression: hands/body subtly showing ${a.mainPower.replace(/_/g," ")} power effect.` : "",
      a.accessory ? `- Accessory: wearing ${a.accessory.replace(/_/g," ")}.` : "",
      a.pose ? `- Pose override: ${a.pose.replace(/_/g," ")} hero pose.` : "",
      ``,
      `COMPOSITION: FULL-BODY head to feet, both feet inside frame, centered, shallow DoF.`,
      `LIGHTING: cool frontal key, soft ambient fill, cinematic realism.`,
      ``,
      `COSTUME (inspired by the attached card):`,
      `- Suit texture evokes the REAL natural texture of "${el.name}".`,
      `- Luminous chemical symbol "${el.symbol}" glowing at the CENTER OF THE CHEST.`,
      `- Cape: gaseous shimmer for gases, solid glossy for liquids/solids.`,
      `- Outfit: ${outfitDesc}.`,
      accDesc && `- Accessory: ${accDesc}.`,
      ``,
      `BACKGROUND: cinematic photoreal environment of where "${el.name}" is naturally found / extracted.`,
      eq.background ? `Subtly blend with: ${bgDesc}.` : ``,
      a.scene ? `Background override (mandatory): set the scene in a ${a.scene.replace(/_/g," ")} environment, photoreal cinematic.` : ``,
      ``,
      `STRICTLY FORBIDDEN: copying the face/body/hair/gender of the person on the reference card, pixel art, cartoon, anime, drawing, card frame, borders, captions, atomic numbers, UI chrome, watermarks, cropped feet or head.`,
      photoBase64 ? `The SECOND attached image is the user's real face — use ONLY as facial likeness reference.` : "",
      ``,
      `Random seed: ${Math.random().toString(36).slice(2)}-${variationIdx}`,
    ].filter(Boolean).join("\n");

    const generationError = async (reason: string, status = 502) => {
      await admin.from("player_avatars").update({ current_card: cardSymbol, appearance: a }).eq("user_id", user.id);
      return json({ error: reason }, status);
    };

    const generateImage = async (variationIdx: number) => {
      const content: any[] = [{ type: "text", text: buildPrompt(variationIdx) }];
      content.push({ type: "image_url", image_url: { url: cardImageDataUrl } });
      if (photoBase64) {
        const dataUrl = photoBase64.startsWith("data:") ? photoBase64 : `data:image/png;base64,${photoBase64}`;
        content.push({ type: "image_url", image_url: { url: dataUrl } });
      }
      const makeGeminiEditBody = (model: string) => ({
        model,
        messages: [{ role: "user", content }],
        modalities: ["image", "text"],
        stream: false,
      });
      const attempts = [
        { name: "google/gemini-2.5-flash-image", body: makeGeminiEditBody("google/gemini-2.5-flash-image") },
        { name: "google/gemini-3.1-flash-image", body: makeGeminiEditBody("google/gemini-3.1-flash-image") },
        { name: "google/gemini-3-pro-image", body: makeGeminiEditBody("google/gemini-3-pro-image") },
      ];
      const failures: string[] = [];
      for (const attempt of attempts) {
        const resp = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Lovable-API-Key": lovableKey },
          body: JSON.stringify(attempt.body),
        });
        const raw = await resp.text();
        let data: any = null;
        try { data = raw ? JSON.parse(raw) : null; } catch { /* */ }
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

    const generateOne = async (variationIdx: number): Promise<{ url: string; fallback: boolean }> => {
      try {
        const u = await generateImage(variationIdx);
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
      const results = await Promise.allSettled(
        Array.from({ length: nWanted }, (_, i) => generateOne(i))
      );
      for (let i = 0; i < results.length; i++) {
        const r = results[i];
        if (r.status !== "fulfilled") continue;
        const { url: imageUrl, fallback } = r.value;
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
      if (uploads.length === 0) {
        const firstErr = results.find(r => r.status === "rejected") as PromiseRejectedResult | undefined;
        const details = String(firstErr?.reason?.message ?? firstErr?.reason ?? "sem detalhe");
        const status = (firstErr?.reason as any)?.status ?? 502;
        if (status === 429) return await generationError("A IA está com limite temporário de uso. Tente novamente em alguns minutos; suas moedas foram preservadas.", 429);
        return await generationError(`A IA não conseguiu gerar o avatar ultrarrealista agora. Detalhes: ${details.slice(0, 500)}`, status);
      }
    } catch (e) {
      const details = String((e as Error).message ?? e);
      const status = (e as any).status ?? 502;
      if (uploads.length === 0) {
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

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

    const prompt = [
      `Generate a single 2:3 vertical full-body photorealistic superhero portrait. Cinematic 8k, slight low-angle heroic shot, strong cold front light, dramatic rim light, sharp focus.`,
      `ABSOLUTE PRIORITY — the character MUST have EXACTLY these traits (these override every other reference):`,
      `- Gender: ${genderEn} (clearly ${genderEn} face, body and proportions)`,
      `- Body: ${body}`,
      `- Skin tone: ${skin}`,
      `- Hair: ${hairStyle}${hairColor ? `, ${hairColor} color` : ""}`,
      `- Outfit: ${outfitDesc}`,
      accDesc && `- Accessory (must be clearly visible on the character): ${accDesc}`,
      `- Background: ${bgDesc}`,
      `- Element theme: "${el.name}" (${el.symbol})${cat ? `, ${cat}` : ""} — subtle elemental aura/effects around the hands and emblem only.`,
      `FRAMING: full body from head to toes, both feet visible, character centered and occupying 75-85% of the vertical frame, no cropping.`,
      `FORBIDDEN: app UI, profile screen, buttons, coin badges, numbers, usernames, white card frame, any text/logo/watermark, cartoon or anime style, bust/close-up crop.`,
      photoBase64 ? `A second image is attached: use it ONLY as a facial likeness reference, but you MUST keep the gender, skin tone and hair specified above even if the photo differs.` : "",
    ].filter(Boolean).join("\n");

    const content: any[] = [{ type: "text", text: prompt }];
    if (photoBase64) {
      const dataUrl = photoBase64.startsWith("data:") ? photoBase64 : `data:image/png;base64,${photoBase64}`;
      content.push({ type: "image_url", image_url: { url: dataUrl } });
    }

    const generationError = async (reason: string, status = 502) => {
      await admin.from("player_avatars").update({ current_card: cardSymbol, appearance: a }).eq("user_id", user.id);
      return json({ error: reason }, status);
    };

    const generateImage = async () => {
      const attempts = [
        {
          name: "openai/gpt-image-2",
          endpoint: "https://ai.gateway.lovable.dev/v1/images/generations",
          body: {
            model: "openai/gpt-image-2",
            prompt,
            size: "1024x1536",
            quality: "low",
            n: 1,
            stream: false,
          },
        },
        {
          name: "google/gemini-3.1-flash-image-preview",
          endpoint: "https://ai.gateway.lovable.dev/v1/chat/completions",
          body: {
            model: "google/gemini-3.1-flash-image-preview",
            messages: [{ role: "user", content }],
            modalities: ["image", "text"],
          },
        },
      ];

      const failures: string[] = [];
      for (const attempt of attempts) {
        const resp = await fetch(attempt.endpoint, {
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
    try {
      imageUrl = await generateImage();
    } catch (e) {
      const details = errorMessage(e);
      const status = details.includes("HTTP 429") ? 429 : details.includes("HTTP 402") ? 402 : 502;
      return await generationError(`A IA não conseguiu gerar o avatar personalizado agora. O erro é do Gateway de IA, não dos Átomos do jogo. Detalhes: ${details.slice(0, 500)}`, status);
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

    return json({ url, path });
  } catch (e) {
    return json({ error: String((e as Error).message ?? e) }, 500);
  }
});

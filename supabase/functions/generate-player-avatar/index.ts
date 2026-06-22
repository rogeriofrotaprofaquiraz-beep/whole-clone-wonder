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

    const esc = (value: unknown) => String(value ?? "").replace(/[&<>'"]/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&apos;", '"': "&quot;" }[ch]!));
    const saveLocalAvatar = async (reason: string) => {
      const skinColors: Record<string, string> = {
        muito_clara: "#f8dcc8", clara: "#f0c39b", media: "#c98b61", morena_clara: "#d49b73",
        morena: "#9a6646", morena_escura: "#6f432f", escura: "#5a3528", negra: "#3b241d",
      };
      const hairColors: Record<string, string> = {
        preto: "#111827", castanho: "#5b3824", loiro: "#e8c95a", ruivo: "#b45309", azul: "#2563eb", roxo: "#7c3aed", branco: "#e5e7eb", grisalho: "#9ca3af",
      };
      const suitColors: Record<string, [string, string]> = {
        outfit_casual: ["#2563eb", "#111827"], outfit_cientista: ["#e5e7eb", "#0ea5e9"], outfit_heroi: ["#7c3aed", "#06b6d4"],
        outfit_futurista: ["#0f172a", "#22d3ee"], outfit_formal: ["#1f2937", "#f59e0b"],
      };
      const bgColors: Record<string, [string, string, string]> = {
        bg_lab: ["#06111f", "#0e7490", "#67e8f9"], bg_space: ["#080816", "#581c87", "#a78bfa"], bg_nature: ["#052e16", "#15803d", "#86efac"],
        bg_city: ["#020617", "#334155", "#f97316"], bg_abstract: ["#2e1065", "#be185d", "#f59e0b"],
      };

      const seed = `${cardSymbol}|${JSON.stringify(a)}|${JSON.stringify(eq)}`;
      let h = 2166136261;
      for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
      const elementHue = Math.abs(h) % 360;
      const skinHex = skinColors[a.skin] ?? "#f0c39b";
      const hairHex = a.hairStyle === "careca" ? "transparent" : (hairColors[a.hairColor] ?? "#5b3824");
      const [suitA, suitB] = suitColors[eq.outfit?.id] ?? suitColors.outfit_heroi;
      const [bgA, bgB, bgAccent] = bgColors[eq.background?.id] ?? ["#06111f", `hsl(${elementHue},70%,30%)`, `hsl(${elementHue},90%,70%)`];
      const isFemale = a.gender === "feminino";
      const bodyScale = a.body === "magro" ? 0.86 : a.body === "musculoso" ? 1.12 : a.body === "atletico" ? 1.04 : 0.96;
      const waist = isFemale ? 118 : 148;
      const shoulder = isFemale ? 230 : 270;
      const hip = isFemale ? 190 : 170;
      const hairSvg = a.hairStyle === "careca" ? "" : a.hairStyle === "longo"
        ? `<path d="M330 470 C250 540 270 760 338 850 L562 850 C630 760 650 540 570 470 C540 390 360 390 330 470Z" fill="${hairHex}"/>`
        : a.hairStyle === "cacheado"
          ? Array.from({ length: 14 }, (_, i) => `<circle cx="${310 + (i % 7) * 47}" cy="${430 + Math.floor(i / 7) * 42}" r="34" fill="${hairHex}"/>`).join("")
          : a.hairStyle === "espetado"
            ? `<path d="M318 455 L350 340 L386 435 L430 318 L462 435 L512 330 L530 455Z" fill="${hairHex}"/>`
            : `<path d="M318 468 C338 376 562 376 582 468 C520 430 380 430 318 468Z" fill="${hairHex}"/>`;
      const capeSvg = eq.accessory?.id === "acc_capa" ? `<path d="M305 770 C170 1120 195 1650 450 1840 C705 1650 730 1120 595 770Z" fill="${suitB}" opacity=".72"/>` : "";
      const glassesSvg = eq.accessory?.id === "acc_oculos" ? `<g fill="none" stroke="#0f172a" stroke-width="9"><rect x="350" y="505" width="72" height="42" rx="18"/><rect x="478" y="505" width="72" height="42" rx="18"/><path d="M422 526 L478 526"/></g>` : "";
      const maskSvg = eq.accessory?.id === "acc_mascara" ? `<path d="M334 497 C382 468 518 468 566 497 L548 555 C506 535 394 535 352 555Z" fill="#111827" opacity=".88"/>` : "";
      const helmetSvg = eq.accessory?.id === "acc_capacete" ? `<path d="M312 475 C322 330 578 330 588 475 L558 507 C500 472 400 472 342 507Z" fill="#334155" stroke="${bgAccent}" stroke-width="8"/>` : "";
      const labSvg = eq.accessory?.id === "acc_jaleco" ? `<path d="M300 760 L210 1560 L372 1560 L450 860 L528 1560 L690 1560 L600 760Z" fill="#f8fafc" opacity=".9"/>` : "";

      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1350" width="900" height="1350">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bgA}"/><stop offset="1" stop-color="${bgB}"/></linearGradient>
    <linearGradient id="suit" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${suitA}"/><stop offset="1" stop-color="${suitB}"/></linearGradient>
    <radialGradient id="aura" cx="50%" cy="38%" r="55%"><stop offset="0" stop-color="${bgAccent}" stop-opacity=".65"/><stop offset="1" stop-color="${bgAccent}" stop-opacity="0"/></radialGradient>
    <filter id="shadow"><feDropShadow dx="0" dy="24" stdDeviation="20" flood-color="#000" flood-opacity=".55"/></filter>
  </defs>
  <rect width="900" height="1350" fill="url(#bg)"/>
  <rect width="900" height="1350" fill="url(#aura)"/>
  <g opacity=".18" stroke="${bgAccent}" stroke-width="3">${Array.from({ length: 12 }, (_, i) => `<path d="M${i * 90 - 120} 0 L${i * 90 + 220} 1350"/>`).join("")}</g>
  <g transform="translate(450 690) scale(${bodyScale}) translate(-450 -690)" filter="url(#shadow)">
    <ellipse cx="450" cy="1260" rx="190" ry="38" fill="#000" opacity=".45"/>
    ${capeSvg}
    <path d="M${450 - shoulder / 2} 690 C${450 - shoulder / 2} 620 ${450 + shoulder / 2} 620 ${450 + shoulder / 2} 690 L${450 + hip / 2} 1035 L${450 + waist / 2} 1048 L450 1076 L${450 - waist / 2} 1048 L${450 - hip / 2} 1035Z" fill="url(#suit)"/>
    ${labSvg}
    <path d="M${450 - shoulder / 2} 705 L240 995 L295 1040 L390 810Z" fill="${suitA}"/><path d="M${450 + shoulder / 2} 705 L660 995 L605 1040 L510 810Z" fill="${suitA}"/>
    <path d="M377 1020 L325 1240 L410 1240 L450 1070Z" fill="${suitB}"/><path d="M523 1020 L575 1240 L490 1240 L450 1070Z" fill="${suitB}"/>
    <rect x="308" y="1230" width="118" height="42" rx="16" fill="#0f172a"/><rect x="474" y="1230" width="118" height="42" rx="16" fill="#0f172a"/>
    <circle cx="450" cy="530" r="112" fill="${skinHex}"/>
    ${hairSvg}${helmetSvg}${maskSvg}${glassesSvg}
    <circle cx="410" cy="530" r="8" fill="#111827"/><circle cx="490" cy="530" r="8" fill="#111827"/><path d="M410 584 C438 608 462 608 490 584" fill="none" stroke="#7f1d1d" stroke-width="8" stroke-linecap="round"/>
    <circle cx="450" cy="820" r="82" fill="#020617" opacity=".82"/><text x="450" y="850" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="78" fill="${bgAccent}">${esc(el.symbol)}</text>
    <circle cx="250" cy="990" r="54" fill="${bgAccent}" opacity=".8"/><circle cx="650" cy="990" r="54" fill="${bgAccent}" opacity=".8"/>
  </g>
</svg>`;

      const path = `${user.id}/${cardSymbol}-local-${Date.now()}.svg`;
      const bytes = new TextEncoder().encode(svg);
      const { error: upErr } = await admin.storage.from("player-avatars").upload(path, bytes, { contentType: "image/svg+xml", upsert: true });
      if (upErr) return json({ error: "Upload falhou: " + upErr.message }, 500);
      const { data: signed } = await admin.storage.from("player-avatars").createSignedUrl(path, 60 * 60 * 24 * 365 * 5);
      await admin.from("player_avatars").update({ generated_url: signed?.signedUrl, current_card: cardSymbol, appearance: a }).eq("user_id", user.id);
      return json({ url: signed?.signedUrl, path, fallback: true, reason });
    };

    const generateImage = async () => {
      const openAiAttempt = {
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
        };
      const geminiAttempt = {
          name: "google/gemini-3.1-flash-image-preview",
          endpoint: "https://ai.gateway.lovable.dev/v1/chat/completions",
          body: {
            model: "google/gemini-3.1-flash-image-preview",
            messages: [{ role: "user", content }],
            modalities: ["image", "text"],
          },
        };
      const attempts = photoBase64 ? [geminiAttempt, openAiAttempt] : [openAiAttempt, geminiAttempt];

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
      const details = String((e as Error).message ?? e);
      const status = details.includes("HTTP 429") ? 429 : details.includes("HTTP 402") ? 402 : 502;
      if (status === 402) return await saveLocalAvatar("Gateway de IA sem créditos; avatar personalizado local criado com as opções selecionadas.");
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

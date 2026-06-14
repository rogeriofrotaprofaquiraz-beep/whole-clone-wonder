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

    const { cardSymbol, appearance, photoBase64 } = await req.json();
    if (!cardSymbol) return json({ error: "cardSymbol required" }, 400);

    const { data: el } = await admin.from("elements")
      .select("symbol,number,name,attributes,hero_name,hero_description")
      .eq("symbol", cardSymbol).maybeSingle();
    if (!el) return json({ error: "Elemento não encontrado" }, 404);

    const a = appearance ?? {};
    const gender = a.gender === "feminino" ? "feminina" : "masculino";
    const body = a.body ?? "normal";
    const skin = a.skin ?? "clara";
    const hairStyle = a.hairStyle ?? "curto";
    const hairColor = a.hairColor ?? "castanho";

    const cat = (el.attributes as any)?.category ?? "";
    const prompt = [
      `Retrato vertical estilo carta colecionável, proporção 2:3, realismo cinematográfico ultra detalhado, 8k.`,
      `CORPO INTEIRO de um(a) super-herói ${gender} representando o elemento químico "${el.name}" (símbolo ${el.symbol}). Mostrar dos pés à cabeça, sem cortes, com margens superior e inferior confortáveis.`,
      `Tipo de corpo ${body}, pele ${skin}, cabelo ${hairStyle} cor ${hairColor}.`,
      `Câmera full body, composição centrada, leve ângulo baixo heroico, foco nítido no personagem.`,
      `Traje futurista com textura e cores fiéis à aparência natural do elemento (${cat}). Emblema luminoso "${el.symbol}" no centro do peito. Capa translúcida com luz colorida suave e bordas luminosas.`,
      `Cenário: ambiente de origem natural do elemento, realismo cinematográfico, iluminação frontal forte e harmoniosa.`,
      `Estilo: realismo fantástico, profundidade de campo curta, sem texto, sem marca d'água, sem bordas, sem cortes.`,
      photoBase64 ? `Use o rosto da foto de referência como base para os traços faciais do herói, mantendo semelhança realista.` : "",
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

    if (!aiResp.ok) {
      const text = await aiResp.text();
      if (aiResp.status === 429) return json({ error: "Limite de requisições. Tente novamente em instantes." }, 429);
      if (aiResp.status === 402) return json({ error: "Créditos de IA esgotados. Adicione créditos no workspace." }, 402);
      return json({ error: "AI error: " + text }, 500);
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

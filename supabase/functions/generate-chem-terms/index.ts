import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const AREA_LABELS: Record<string, string> = {
  organica: "Química Orgânica (hidrocarbonetos, álcoois, ácidos carboxílicos, alcanos, alcenos, isomeria, nomenclatura IUPAC)",
  inorganica: "Química Inorgânica (ácidos, bases, sais, óxidos comuns)",
  geral: "Química Geral (elementos, ligações, átomos, moléculas, tabela periódica, estequiometria)",
  ambiental: "Química Ambiental (poluentes, gases estufa, ozônio, sustentabilidade)",
  farmacologia: "Química Farmacêutica (analgésicos, antibióticos, anestésicos, vitaminas, princípios ativos famosos)",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return json({ error: "Unauthorized" }, 401);
    const url = Deno.env.get("SUPABASE_URL")!;
    const anon = Deno.env.get("SUPABASE_PUBLISHABLE_KEY") ?? Deno.env.get("SUPABASE_ANON_KEY")!;
    const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    if (!lovableKey) return json({ error: "Missing LOVABLE_API_KEY" }, 500);

    const userClient = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: "Unauthorized" }, 401);

    const admin = createClient(url, service);
    const { data: isAdmin } = await admin.rpc("has_role", { _user_id: user.id, _role: "admin" });
    if (!isAdmin) return json({ error: "Forbidden — admin only" }, 403);

    const { area, count = 15, difficulty = 2, school_level = "medio" } = await req.json();
    if (!area || !AREA_LABELS[area]) return json({ error: "Invalid area" }, 400);
    const level = school_level === "fundamental" ? "fundamental" : "medio";
    const levelLabel = level === "fundamental" ? "Ensino Fundamental (linguagem simples, conceitos básicos)" : "Ensino Médio (rigor científico)";
    const n = Math.min(Math.max(parseInt(String(count)) || 15, 1), 30);

    const sys = `Você cria listas de termos de química em PT-BR para jogos educativos (forca, caça-palavras). Responda APENAS com JSON válido.`;
    const userPrompt = `Liste ${n} termos sobre ${AREA_LABELS[area]} adequados para jogos de palavras.
Público: ${levelLabel}. Dificuldade: ${difficulty}/5.
Regras:
- Cada termo entre 4 e 14 letras
- Use apenas letras (sem acentos, sem espaços, sem números, sem hífen)
- Em MAIÚSCULAS
- Cada termo com uma dica curta (máx 80 caracteres) que NÃO contenha o termo

Formato JSON:
{ "terms": [ { "term": "BENZENO", "clue": "Hidrocarboneto aromático com 6 carbonos" } ] }`;

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${lovableKey}` },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: sys }, { role: "user", content: userPrompt }],
        response_format: { type: "json_object" },
      }),
    });

    if (!aiResp.ok) {
      const text = await aiResp.text();
      if (aiResp.status === 429) return json({ error: "Rate limit, tente em instantes" }, 429);
      if (aiResp.status === 402) return json({ error: "Créditos de IA esgotados" }, 402);
      return json({ error: "AI error: " + text }, 500);
    }
    const aiData = await aiResp.json();
    const content = aiData.choices?.[0]?.message?.content ?? "{}";
    let parsed: any;
    try { parsed = JSON.parse(content); } catch { return json({ error: "Resposta da IA não é JSON" }, 500); }
    const terms = Array.isArray(parsed.terms) ? parsed.terms : [];

    const clean = terms
      .map((t: any) => ({
        area, difficulty, school_level: level, created_by: user.id,
        term: String(t.term || "").toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z]/g, ""),
        clue: String(t.clue || "").slice(0, 200),
      }))
      .filter((t: any) => t.term.length >= 4 && t.term.length <= 14 && t.clue);

    if (!clean.length) return json({ error: "Nenhum termo válido" }, 500);

    const { data: inserted, error } = await admin.from("chem_terms").upsert(clean, { onConflict: "area,term", ignoreDuplicates: true }).select("id");
    if (error) return json({ error: "DB: " + error.message }, 500);

    return json({ inserted: inserted?.length ?? 0, area });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

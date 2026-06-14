import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const AREA_LABELS: Record<string, string> = {
  organica: "Química Orgânica (hidrocarbonetos, funções orgânicas, isomeria, nomenclatura IUPAC, reações orgânicas)",
  inorganica: "Química Inorgânica (ácidos, bases, sais, óxidos, reações inorgânicas, funções inorgânicas)",
  geral: "Química Geral (estrutura atômica, tabela periódica, ligações químicas, estequiometria, soluções)",
  ambiental: "Química Ambiental (poluição do ar/água, aquecimento global, efeito estufa, camada de ozônio, chuva ácida, sustentabilidade)",
  farmacologia: "Química das Drogas / Farmacologia (analgésicos, antibióticos, anestésicos, vitaminas, princípios ativos, dosagem)",
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

    const { area, count = 10, difficulty = 2, topic } = await req.json();
    if (!area || !AREA_LABELS[area]) return json({ error: "Invalid area" }, 400);
    const n = Math.min(Math.max(parseInt(String(count)) || 10, 1), 25);

    const sys = `Você é um professor de química brasileiro criando questões de múltipla escolha para estudantes do ensino médio/técnico. Responda APENAS com JSON válido, sem markdown.`;
    const userPrompt = `Crie ${n} questões objetivas em PORTUGUÊS sobre ${AREA_LABELS[area]}${topic ? ` — tópico específico: ${topic}` : ""}.
Dificuldade: ${difficulty}/5.
Cada questão deve ter EXATAMENTE 4 alternativas plausíveis e uma única correta.
Inclua uma explicação curta (1-2 frases) da resposta correta.

Retorne JSON no formato:
{ "questions": [ { "question": "...", "options": ["A","B","C","D"], "correct_index": 0, "explanation": "...", "topic": "..." } ] }`;

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
    const questions = Array.isArray(parsed.questions) ? parsed.questions : [];
    if (!questions.length) return json({ error: "Nenhuma questão gerada" }, 500);

    const rows = questions.slice(0, n).map((q: any) => ({
      area, topic: q.topic ?? topic ?? null, difficulty,
      question: String(q.question ?? "").trim(),
      options: Array.isArray(q.options) ? q.options.slice(0, 4).map(String) : [],
      correct_index: Math.max(0, Math.min(3, parseInt(q.correct_index) || 0)),
      answer_text: q.options?.[q.correct_index] ?? null,
      explanation: q.explanation ?? null,
      created_by: user.id,
    })).filter((r) => r.question && r.options.length === 4);

    const { data: inserted, error: insErr } = await admin.from("chem_questions").insert(rows).select("id");
    if (insErr) return json({ error: "DB error: " + insErr.message }, 500);

    return json({ inserted: inserted?.length ?? 0, area });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

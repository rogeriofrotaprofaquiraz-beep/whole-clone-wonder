import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return json({ error: "Unauthorized" }, 401);

    const url = Deno.env.get("SUPABASE_URL")!;
    const anon = Deno.env.get("SUPABASE_ANON_KEY")!;
    const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableKey = Deno.env.get("LOVABLE_API_KEY");
    if (!lovableKey) return json({ error: "Missing LOVABLE_API_KEY" }, 500);

    const userClient = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: "Unauthorized" }, 401);

    const admin = createClient(url, service);
    const [{ data: isAdm }, { data: isMod }] = await Promise.all([
      admin.rpc("has_role", { _user_id: user.id, _role: "admin" }),
      admin.rpc("has_role", { _user_id: user.id, _role: "moderator" }),
    ]);
    if (!isAdm && !isMod) return json({ error: "Apenas professores ou administradores" }, 403);

    const { grade_year = 6, topic = "", difficulty = 2, count = 10, plan = "" } = await req.json();
    if (!plan || String(plan).trim().length < 30) return json({ error: "Plano de aula muito curto" }, 400);
    const g = Math.min(Math.max(parseInt(String(grade_year)) || 6, 6), 9);
    const n = Math.min(Math.max(parseInt(String(count)) || 10, 1), 20);
    const d = Math.min(Math.max(parseInt(String(difficulty)) || 2, 1), 5);

    const sys = `Você é um professor brasileiro do Ensino Fundamental II (6º–9º ano), alinhado à BNCC. Crie questões objetivas curtas, com linguagem clara para a idade. Responda APENAS com JSON válido, sem markdown.`;
    const userPrompt = `Com base no PLANO DE AULA abaixo, crie ${n} questões de múltipla escolha para o ${g}º ano${topic ? ` sobre "${topic}"` : ""}.
Dificuldade ${d}/5. Cada questão com EXATAMENTE 4 alternativas plausíveis e UMA correta. Inclua explicação curta.

PLANO DE AULA:
"""
${String(plan).slice(0, 8000)}
"""

Retorne JSON:
{ "questions": [ { "question": "...", "options": ["A","B","C","D"], "correct_index": 0, "explanation": "...", "difficulty": ${d} } ] }`;

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
    const questions = (Array.isArray(parsed.questions) ? parsed.questions : []).slice(0, n)
      .map((q: any) => ({
        question: String(q.question ?? "").trim(),
        options: Array.isArray(q.options) ? q.options.slice(0, 4).map(String) : [],
        correct_index: Math.max(0, Math.min(3, parseInt(q.correct_index) || 0)),
        explanation: q.explanation ?? null,
        difficulty: q.difficulty ?? d,
      })).filter((q: any) => q.question && q.options.length === 4);

    return json({ questions, grade_year: g });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

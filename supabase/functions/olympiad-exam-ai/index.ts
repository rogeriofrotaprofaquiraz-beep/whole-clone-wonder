import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return json({ error: "Unauthorized" }, 401);
    const url = Deno.env.get("SUPABASE_URL")!;
    const userClient = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: "Unauthorized" }, 401);
    const admin = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
    const checks = await Promise.all(["admin", "teacher", "moderator"].map((r) => admin.rpc("has_role", { _user_id: user.id, _role: r })));
    if (!checks.some((c) => c.data)) return json({ error: "Apenas professores ou administradores" }, 403);

    const { mode, pdf_base64, question, olympiad = "", count = 10 } = await req.json();
    const n = Math.min(Math.max(parseInt(String(count)) || 10, 1), 30);
    const format = `Responda APENAS JSON: {"questions":[{"q":"enunciado","options":["A","B","C","D"],"correct":0,"explanation":"..."}]}`;
    let content: any;
    if (mode === "pdf") {
      if (!pdf_base64) return json({ error: "PDF ausente" }, 400);
      content = [
        { type: "text", text: `Extraia TODAS as questões objetivas desta prova de olimpíada ${olympiad}. Use o gabarito se houver; caso contrário resolva e indique a correta. Mantenha o texto original. ${format}` },
        { type: "image_url", image_url: { url: `data:application/pdf;base64,${pdf_base64}` } },
      ];
    } else {
      if (!question || String(question).trim().length < 10) return json({ error: "Questão muito curta" }, 400);
      content = `Com base nesta questão modelo da olimpíada ${olympiad}, crie ${n} questões novas no mesmo estilo, nível e tema, com 4 ou 5 alternativas e uma correta.\n\nQUESTÃO MODELO:\n"""${String(question).slice(0, 6000)}"""\n\n${format}`;
    }

    const ai = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${Deno.env.get("LOVABLE_API_KEY")}` },
      body: JSON.stringify({
        model: "google/gemini-3.8-flash",
        messages: [{ role: "system", content: "Você é especialista em olimpíadas científicas brasileiras (ONC, OBQ, OBMEP)." }, { role: "user", content }],
        response_format: { type: "json_object" },
      }),
    });
    if (!ai.ok) {
      if (ai.status === 429) return json({ error: "Muitas solicitações, tente em instantes" }, 429);
      if (ai.status === 402) return json({ error: "Créditos de IA esgotados" }, 402);
      return json({ error: "Erro da IA: " + (await ai.text()).slice(0, 300) }, 500);
    }
    const data = await ai.json();
    let parsed: any = {};
    try { parsed = JSON.parse(data.choices?.[0]?.message?.content ?? "{}"); } catch { return json({ error: "Resposta inválida da IA" }, 500); }
    const questions = (parsed.questions ?? []).map((q: any) => ({
      q: String(q.q ?? q.question ?? "").trim(),
      options: (q.options ?? []).map(String).slice(0, 5),
      correct: Math.max(0, parseInt(q.correct ?? q.correct_index) || 0),
      explanation: q.explanation ?? "",
    })).filter((q: any) => q.q && q.options.length >= 2);
    return json({ questions });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

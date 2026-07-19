import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

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
    const { data: isAdm } = await admin.rpc("has_role", { _user_id: user.id, _role: "admin" });
    if (!isAdm) return json({ error: "Apenas administradores podem gerar plano de aula" }, 403);

    const body = await req.json().catch(() => ({}));
    const title = String(body.title ?? "").trim();
    const lesson = String(body.lesson ?? "").trim();
    const course = String(body.course ?? "").trim();
    const stage = String(body.stage ?? "Ensino Médio").trim();
    const duration = String(body.duration ?? "50 minutos").trim();
    const context = String(body.context ?? "").slice(0, 4000);
    if (!title) return json({ error: "Título do tópico obrigatório" }, 400);

    const sys = `Você é especialista em Química e em elaboração de planos de aula alinhados à BNCC (Base Nacional Comum Curricular) e à BNCC Computação/Digital do Brasil. Escreva em português, com clareza pedagógica. Responda APENAS com JSON válido, sem markdown fora do campo "plan".`;

    const userPrompt = `Elabore um PLANO DE AULA MODERNO e completo sobre o tópico "${title}"${lesson ? ` (dentro de "${lesson}")` : ""}${course ? ` do curso "${course}"` : ""}, para ${stage}, duração ${duration}.

CONTEXTO DO TÓPICO (para alinhamento):
"""
${context || title}
"""

O plano deve conter, em Markdown, as seções:
1. **Identificação** (curso, tópico, público, duração)
2. **Objetivos de aprendizagem** (verbos na taxonomia de Bloom)
3. **Competências e habilidades BNCC** mobilizadas
4. **Conteúdos abordados**
5. **Metodologia ativa** (ex.: sala de aula invertida, aprendizagem baseada em problemas, gamificação, pensamento computacional)
6. **Recursos didáticos** (físicos e digitais — simuladores PhET, planilhas, IA, vídeos)
7. **Sequência didática detalhada** (abertura, desenvolvimento, fechamento — com tempos)
8. **Avaliação formativa e somativa** (instrumentos e critérios)
9. **Acessibilidade e inclusão**
10. **Referências**

Depois, extraia os **códigos BNCC** oficiais mais adequados (Ensino Fundamental Anos Finais e/ou Ensino Médio de Ciências da Natureza e suas Tecnologias) E os códigos **BNCC Computação/Digital** (Cultura Digital, Pensamento Computacional, Mundo Digital) aplicáveis. Use somente códigos que realmente existem.

Retorne JSON EXATO:
{
  "plan": "markdown do plano de aula",
  "bncc": [
    { "code": "EM13CNT301", "label": "Descrição oficial resumida", "type": "BNCC" },
    { "code": "EF06CI01", "label": "Descrição", "type": "BNCC" },
    { "code": "EM13LGG703", "label": "Descrição", "type": "BNCC_DIGITAL" }
  ]
}`;

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
      if (aiResp.status === 429) return json({ error: "Muitas requisições, tente em instantes" }, 429);
      if (aiResp.status === 402) return json({ error: "Créditos de IA esgotados" }, 402);
      return json({ error: "AI error: " + text }, 500);
    }
    const aiData = await aiResp.json();
    const content = aiData.choices?.[0]?.message?.content ?? "{}";
    let parsed: any;
    try { parsed = JSON.parse(content); } catch { return json({ error: "Resposta da IA não é JSON" }, 500); }

    const plan = String(parsed.plan ?? "").trim();
    const bncc = (Array.isArray(parsed.bncc) ? parsed.bncc : [])
      .map((b: any) => ({
        code: String(b.code ?? "").trim().toUpperCase(),
        label: String(b.label ?? "").trim(),
        type: b.type === "BNCC_DIGITAL" ? "BNCC_DIGITAL" : "BNCC",
      }))
      .filter((b: any) => b.code && b.label)
      .slice(0, 20);

    return json({ plan, bncc });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

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
      const text = await aiResp.text().catch(() => "");
      console.warn("AI gateway falhou, usando template:", aiResp.status, text);
      const fb = buildFallback({ title, lesson, course, stage, duration, context });
      return json({ ...fb, fallback: true, reason: aiResp.status === 402 ? "credits" : aiResp.status === 429 ? "rate" : "error" });
    }
    const aiData = await aiResp.json();
    const content = aiData.choices?.[0]?.message?.content ?? "{}";
    let parsed: any;
    try { parsed = JSON.parse(content); } catch {
      const fb = buildFallback({ title, lesson, course, stage, duration, context });
      return json({ ...fb, fallback: true, reason: "parse" });
    }

    const plan = String(parsed.plan ?? "").trim();
    const bncc = (Array.isArray(parsed.bncc) ? parsed.bncc : [])
      .map((b: any) => ({
        code: String(b.code ?? "").trim().toUpperCase(),
        label: String(b.label ?? "").trim(),
        type: b.type === "BNCC_DIGITAL" ? "BNCC_DIGITAL" : "BNCC",
      }))
      .filter((b: any) => b.code && b.label)
      .slice(0, 20);

    if (!plan) {
      const fb = buildFallback({ title, lesson, course, stage, duration, context });
      return json({ ...fb, fallback: true, reason: "empty" });
    }

    return json({ plan, bncc });
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function buildFallback(p: { title: string; lesson: string; course: string; stage: string; duration: string; context: string }) {
  const { title, lesson, course, stage, duration, context } = p;
  const plan = `# Planejamento — ${title}

**Disciplina:** ${course || "Ciências / Química"}  
**Turma / Etapa:** ${stage}  
**Duração:** ${duration}  
${lesson ? `**Unidade / Aula:** ${lesson}  \n` : ""}
## Objetivo
Identificar e diferenciar os conceitos centrais de **${title}** (por exemplo: matéria, substância, mistura, propriedades físicas e químicas), relacionando-os a situações cotidianas e desenvolvendo a argumentação científica dos estudantes.

## Componentes Curriculares
Ciências da Natureza — Química.

## Competência
Investigar fenômenos naturais e tecnológicos, utilizando conhecimentos científicos para resolver problemas, tomar decisões e comunicar resultados de forma ética e responsável.

## Habilidades
- Reconhecer e classificar os conceitos-chave abordados em ${title}.
- Relacionar o conteúdo com fenômenos e materiais do dia a dia.
- Formular hipóteses, registrar observações e argumentar cientificamente.
- Trabalhar colaborativamente e comunicar resultados de forma oral e escrita.

## Metodologia
Metodologia ativa, intercalando exposição dialogada curta com problematização, demonstração prática e discussão em grupos. Uso de recursos digitais (slides, simuladores PhET, vídeos curtos) para apoiar visualização e engajamento.

## Sequência didática
1. **Abertura (5 min)** — pergunta disparadora: "Onde a química aparece no seu dia a dia?"; levantamento de conhecimentos prévios.
2. **Desenvolvimento (20 min)** — exposição dialogada em blocos curtos (máx. 7 min), intercalada com perguntas problematizadoras e uma breve demonstração relacionada a ${title}.
3. **Atividade em grupo (15 min)** — experimento simples e seguro (ex.: observar mudanças físicas e químicas com gelo, sal, vinagre e bicarbonato); registro em roteiro estruturado e análise coletiva.
4. **Fechamento (10 min)** — síntese coletiva no quadro, exercício rápido de fixação e autoavaliação (o que aprendi / o que ainda tenho dúvida).

## Recursos
Quadro, projetor, slides, simuladores PhET, vídeos curtos, roteiro impresso do experimento e materiais de baixo custo (gelo, sal, vinagre, bicarbonato, copos plásticos).

## Avaliação
Avaliação formativa combinando: participação nas discussões, relatório breve do experimento em grupo, apresentação oral dos resultados e autoavaliação escrita. Critérios: clareza conceitual, uso de vocabulário científico, colaboração e argumentação.

## Observações
${context ? context.slice(0, 400) : "Adaptar linguagem, exemplos e nível de aprofundamento à realidade da turma; garantir segurança na atividade prática."}
`;
  const bncc = [
    { code: "EF09CI03", label: "Identificar modelos que descrevem a estrutura da matéria.", type: "BNCC" },
    { code: "EM13CNT301", label: "Construir questões, elaborar hipóteses e analisar fenômenos naturais.", type: "BNCC" },
    { code: "EM13CNT101", label: "Analisar fenômenos naturais e processos tecnológicos.", type: "BNCC" },
    { code: "EM13LGG703", label: "Utilizar tecnologias digitais de forma crítica e criativa.", type: "BNCC_DIGITAL" },
  ];
  return { plan, bncc };
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

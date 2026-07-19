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

    const userClient = createClient(url, anon, { global: { headers: { Authorization: authHeader } } });
    const { data: { user } } = await userClient.auth.getUser();
    if (!user) return json({ error: "Unauthorized" }, 401);

    const admin = createClient(url, service);
    const [{ data: isAdm }, { data: isTeacher }] = await Promise.all([
      admin.rpc("has_role", { _user_id: user.id, _role: "admin" }),
      admin.rpc("has_role", { _user_id: user.id, _role: "teacher" }),
    ]);
    if (!isAdm && !isTeacher) return json({ error: "Apenas professores ou administradores podem gerar plano de aula" }, 403);

    const body = await req.json().catch(() => ({}));

    const topicObj = body.topic ?? {};
    const title = String(body.title ?? topicObj.title ?? "").trim();
    const lesson = String(body.lesson ?? "").trim();
    const course = String(body.course ?? body.discipline ?? "").trim();
    const stage = String(body.stage ?? "Ensino Médio").trim();
    const duration = String(body.duration ?? "50 minutos").trim();
    const bimestre = String(body.bimestre ?? "").trim();
    const gradeYear = body.grade_year ?? null;
    const school = String(body.school ?? "").trim();
    const className = String(body.class_name ?? "").trim();
    const lessonDate = String(body.lesson_date ?? "").trim();
    const context = String(body.context ?? topicObj.description ?? "").slice(0, 4000);
    const ui = body.user_inputs ?? {};
    if (!title) return json({ error: "Assunto/título obrigatório" }, 400);

    // Monta bloco com TUDO que o professor já digitou — a IA deve elaborar EM CIMA disso
    const userNotes = Object.entries({
      "Conteúdos e tópicos": ui.contents_topics,
      "Slides / Material": ui.slides_material,
      "Códigos BNCC informados": ui.bncc_codes,
      "Objetivo (rascunho)": ui.objective,
      "Metodologia (rascunho)": ui.methodology,
      "Componentes curriculares": ui.curricular_components,
      "Competências (códigos)": ui.competencies_codes,
      "Competências (texto)": ui.competencies_text,
      "Habilidades (códigos)": ui.skills_codes,
      "Habilidades (texto)": ui.skills_text,
      "Descritores (códigos)": ui.descriptors_codes,
      "Descritores (texto)": ui.descriptors_text,
    })
      .filter(([, v]) => typeof v === "string" && v.trim().length > 0)
      .map(([k, v]) => `- **${k}:** ${String(v).trim()}`)
      .join("\n");

    if (!lovableKey) {
      const fb = buildFallback({ title, lesson, course, stage, duration, context, bimestre, ui });
      return json({ ...fb, fallback: true, reason: "no_key" });
    }

    const sys = `Você é especialista em elaboração de planos de aula modernos alinhados à BNCC e à BNCC Computação/Digital do Brasil. Escreva em português com clareza pedagógica.
REGRAS OBRIGATÓRIAS:
(1) USE COMO BASE tudo o que o professor já digitou (bloco "DADOS INFORMADOS PELO PROFESSOR"). Preserve termos, ênfases e códigos que ele indicou; expanda, refine e complete de forma coerente. NUNCA descarte informação fornecida.
(2) Se um campo veio vazio, ELABORE do zero com qualidade. Se veio preenchido, REFINE mantendo a intenção do professor.
(3) Objetivo ESPECÍFICO — liste os conceitos exatos a serem trabalhados. NUNCA "compreender os principais conceitos".
(4) Sequência didática ATIVA em blocos curtos: Abertura ~5 min, Desenvolvimento ~20 min (blocos ≤ 7 min), Atividade prática em grupo ~15 min, Fechamento ≥ 15 min. Nenhum bloco expositivo > 10 min.
(5) Atividade prática DETALHADA — materiais do cotidiano, passos e segurança.
(6) Avaliação DIVERSIFICADA — participação + produção escrita + apresentação oral + autoavaliação.
(7) PROIBIDO repetir o título do tópico como frase de abertura.
(8) Códigos BNCC oficiais reais e BNCC Computação/Digital quando aplicável.
Responda APENAS com JSON válido.`;

    const userPrompt = `Elabore/refine um PLANO DE AULA MODERNO sobre "${title}"${lesson ? ` (dentro de "${lesson}")` : ""}${course ? ` — disciplina: ${course}` : ""}, para ${stage}${gradeYear ? ` (${gradeYear}º ano)` : ""}, duração ${duration}${bimestre ? `, ${bimestre}` : ""}${lessonDate ? `, data ${lessonDate}` : ""}${school ? `, escola ${school}` : ""}${className ? `, turma ${className}` : ""}.

DADOS INFORMADOS PELO PROFESSOR (use como base — expanda e refine, não descarte):
${userNotes || "(nenhum dado adicional foi informado — elabore do zero)"}

CONTEXTO ADICIONAL:
"""
${context || title}
"""

Retorne JSON EXATO com TODOS os campos (strings em português):
{
  "objective": "Objetivo específico com conceitos exatos",
  "methodology": "Metodologia ativa em blocos curtos",
  "curricular_components": "Componentes curriculares mobilizados",
  "contents_topics": "Tópicos e conteúdos em lista objetiva",
  "competencies_codes": "Códigos das competências gerais",
  "competencies_text": "Descrição das competências",
  "skills_codes": "Códigos de habilidades BNCC",
  "skills_text": "Descrição das habilidades",
  "descriptors_codes": "Códigos de descritores",
  "descriptors_text": "Descrição dos descritores",
  "bncc_codes": "Lista textual dos códigos BNCC separados por vírgula",
  "sequence": "Sequência didática detalhada com tempos",
  "practical_activity": "Atividade prática com materiais, passos e segurança",
  "assessment": "Avaliação diversificada",
  "plan": "Plano completo em Markdown reunindo todas as seções (títulos ##)",
  "bncc": [ { "code": "EF09CI03", "label": "Descrição oficial", "type": "BNCC" } ]
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
      const fb = buildFallback({ title, lesson, course, stage, duration, context, bimestre });
      return json({ ...fb, fallback: true, reason: aiResp.status === 402 ? "credits" : aiResp.status === 429 ? "rate" : "error" });
    }

    let parsed: any = {};
    try {
      const aiData = await aiResp.json();
      parsed = JSON.parse(aiData.choices?.[0]?.message?.content ?? "{}");
    } catch {
      const fb = buildFallback({ title, lesson, course, stage, duration, context, bimestre });
      return json({ ...fb, fallback: true, reason: "parse" });
    }

    const bncc = (Array.isArray(parsed.bncc) ? parsed.bncc : [])
      .map((b: any) => ({
        code: String(b.code ?? "").trim().toUpperCase(),
        label: String(b.label ?? "").trim(),
        type: b.type === "BNCC_DIGITAL" ? "BNCC_DIGITAL" : "BNCC",
      }))
      .filter((b: any) => b.code && b.label)
      .slice(0, 20);

    const out: any = {
      objective: str(parsed.objective),
      methodology: str(parsed.methodology),
      curricular_components: str(parsed.curricular_components),
      contents_topics: str(parsed.contents_topics),
      competencies_codes: str(parsed.competencies_codes),
      competencies_text: str(parsed.competencies_text),
      skills_codes: str(parsed.skills_codes),
      skills_text: str(parsed.skills_text),
      descriptors_codes: str(parsed.descriptors_codes),
      descriptors_text: str(parsed.descriptors_text),
      bncc_codes: str(parsed.bncc_codes) || bncc.map((b: any) => b.code).join(", "),
      sequence: str(parsed.sequence),
      practical_activity: str(parsed.practical_activity),
      assessment: str(parsed.assessment),
      plan: str(parsed.plan),
      bncc,
    };

    if (!out.plan && !out.objective) {
      const fb = buildFallback({ title, lesson, course, stage, duration, context, bimestre });
      return json({ ...fb, fallback: true, reason: "empty" });
    }

    return json(out);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});

function str(v: any) { return typeof v === "string" ? v.trim() : ""; }

function buildFallback(p: { title: string; lesson: string; course: string; stage: string; duration: string; context: string; bimestre?: string }) {
  const { title, lesson, course, stage, duration, context, bimestre } = p;
  const objective = `Identificar e diferenciar os conceitos centrais de ${title} (matéria, substância, mistura, propriedades físicas e químicas), relacionando-os a situações do cotidiano e desenvolvendo argumentação científica.`;
  const methodology = "Metodologia ativa em blocos curtos: exposição dialogada intercalada com problematização, demonstração prática e discussão em grupo. Uso de recursos digitais (slides, simuladores PhET, vídeos curtos).";
  const sequence = `Abertura (5 min): pergunta disparadora "Onde a química aparece no seu dia a dia?" e levantamento de saberes prévios.
Desenvolvimento (20 min): exposição dialogada em blocos de até 7 min, intercalada com perguntas problematizadoras e uma breve demonstração relacionada a ${title}.
Atividade em grupo (15 min): experimento simples e seguro com gelo, sal, vinagre e bicarbonato — observar mudanças físicas e químicas, registrar em roteiro estruturado e discutir coletivamente.
Fechamento (15 min): síntese coletiva no quadro, exercício rápido de fixação, apresentação oral breve dos grupos e autoavaliação escrita (o que aprendi / dúvidas).`;
  const practical = "Distribuir aos grupos: 4 copos plásticos, cubos de gelo, sal grosso, vinagre e bicarbonato de sódio. Passos: (1) observar o gelo derretendo (física); (2) adicionar sal ao gelo e medir a temperatura; (3) misturar vinagre + bicarbonato (química, com efervescência); (4) registrar observações. Segurança: óculos de proteção, evitar contato com os olhos, ambiente ventilado.";
  const assessment = "Avaliação diversificada: participação nas discussões, relatório breve do experimento em grupo, apresentação oral dos resultados (2–3 min por grupo) e autoavaliação escrita. Critérios: clareza conceitual, uso de vocabulário científico, colaboração e argumentação.";
  const contents = `Conceitos de ${title}; relações com fenômenos cotidianos; propriedades e transformações observáveis; introdução à linguagem científica da área.`;

  const plan = `# Planejamento — ${title}

**Disciplina:** ${course || "Ciências / Química"}  |  **Etapa:** ${stage}  |  **Duração:** ${duration}${bimestre ? `  |  **${bimestre}**` : ""}
${lesson ? `**Unidade / Aula:** ${lesson}` : ""}

## Objetivo
${objective}

## Componentes curriculares
Ciências da Natureza — Química.

## Conteúdos e tópicos
${contents}

## Metodologia
${methodology}

## Sequência didática
${sequence}

## Atividade prática
${practical}

## Avaliação
${assessment}

## Observações
${context ? context.slice(0, 400) : "Adaptar linguagem e nível de aprofundamento à realidade da turma; garantir segurança na atividade prática."}
`;

  const bncc = [
    { code: "EF09CI03", label: "Identificar modelos que descrevem a estrutura da matéria.", type: "BNCC" },
    { code: "EM13CNT301", label: "Construir questões, elaborar hipóteses e analisar fenômenos naturais.", type: "BNCC" },
    { code: "EM13CNT101", label: "Analisar fenômenos naturais e processos tecnológicos.", type: "BNCC" },
    { code: "EM13LGG703", label: "Utilizar tecnologias digitais de forma crítica e criativa.", type: "BNCC_DIGITAL" },
  ];

  return {
    objective,
    methodology,
    curricular_components: "Ciências da Natureza — Química",
    contents_topics: contents,
    competencies_codes: "CG2, CG5, CG7",
    competencies_text: "Investigar fenômenos naturais e tecnológicos; argumentar com base em evidências; comunicar resultados de forma ética e responsável.",
    skills_codes: bncc.map((b) => b.code).join(", "),
    skills_text: "Reconhecer e classificar conceitos-chave do tópico; relacionar com fenômenos do cotidiano; registrar observações; comunicar oralmente e por escrito.",
    descriptors_codes: "D1, D2, D3",
    descriptors_text: "D1 — identifica conceitos; D2 — relaciona teoria e cotidiano; D3 — argumenta cientificamente.",
    bncc_codes: bncc.map((b) => b.code).join(", "),
    sequence,
    practical_activity: practical,
    assessment,
    plan,
    bncc,
  };
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}

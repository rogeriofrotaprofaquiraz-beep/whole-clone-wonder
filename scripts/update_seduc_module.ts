import { supabase } from "./integrations/supabase/client";

const COURSE_ID = 'bea67f55-082c-47a0-844e-dbd59e2386d7';

const topics = [
  {
    title: "01. História da Educação e LDB para Química",
    content: "## Ementa\n- Evolução da educação brasileira sob a ótica das ciências.\n- LDB 9.394/96: princípios, fins e deveres do Estado.\n- A química no currículo escolar: de 1930 aos dias atuais.\n- Leis 10.639/03 e 11.645/08: contribuições científicas africanas e indígenas.",
    order_index: 1
  },
  {
    title: "02. Didática da Química e Processo de Ensino",
    content: "## Ementa\n- Tendências pedagógicas no ensino de Química: do tradicional ao CTS (Ciência, Tecnologia e Sociedade).\n- Planejamento de aulas de Química: experimentação, contextualização e interdisciplinaridade.\n- Avaliação da aprendizagem em Ciências da Natureza.\n- A sala de aula e o laboratório como espaços integrados.",
    order_index: 2
  },
  {
    title: "03. Teorias da Aprendizagem e o Ensino de Ciências",
    content: "## Ementa\n- Piaget, Vygotsky e Ausubel aplicados ao ensino de conceitos químicos (ex: abstração do átomo).\n- Obstáculos epistemológicos de Bachelard no aprendizado da química.\n- Bullying e inclusão na aula de laboratório.\n- Educação Ambiental e a Química Verde no currículo.",
    order_index: 3
  },
  {
    title: "04. BNCC, Novo Ensino Médio e Química",
    content: "## Ementa\n- Competências e habilidades de Ciências da Natureza na BNCC.\n- A Química nos Itinerários Formativos e Projeto de Vida.\n- Integração da Química com Física e Biologia no Novo Ensino Médio.\n- Educação em tempo integral e práticas experimentais.",
    order_index: 4
  },
  {
    title: "05. Gestão Escolar e Legislação para o Professor",
    content: "## Ementa\n- Princípios da Administração Pública (LIMPE) aplicados ao docente.\n- Estatuto do Magistério do Ceará: direitos, deveres e carreira.\n- Gestão democrática e o papel do professor de Química no PPP.\n- Segurança em laboratórios escolares: normas e responsabilidades.",
    order_index: 5
  },
  {
    title: "06. Língua Portuguesa e Redação Técnica",
    content: "## Ementa\n- Interpretação de textos científicos e técnicos de Química.\n- Gêneros textuais: relatório de aula prática, artigo e projeto.\n- Gramática aplicada à redação oficial e acadêmica.\n- Coesão e coerência na argumentação pedagógica.",
    order_index: 6
  },
  {
    title: "07. Indicadores Educacionais e Avaliação em Larga Escala",
    content: "## Ementa\n- SPAECE e SAEB: análise de descritores de Ciências da Natureza.\n- Estatística básica para análise de rendimento escolar.\n- O papel do ENEM na reestruturação do ensino de Química.\n- Indicadores do PISA e a literacia científica.",
    order_index: 7
  },
  {
    title: "08. Simulado Geral P1 - SEDUC 2026 (Química)",
    content: "## Avaliação Final\nSimulado completo integrado: Conhecimentos Básicos + Didática + Legislação, com questões contextualizadas para o perfil do professor de Química da rede estadual.",
    order_index: 8
  }
];

async function run() {
  console.log("Iniciando atualização dos tópicos do Módulo 00...");
  
  for (const t of topics) {
    const { error } = await supabase
      .from('course_lessons')
      .update({
        title: t.title,
        content: t.content
      })
      .eq('course_id', COURSE_ID)
      .eq('order_index', t.order_index);
      
    if (error) {
      console.error(`Erro ao atualizar tópico ${t.order_index}:`, error.message);
    } else {
      console.log(`Tópico ${t.order_index} atualizado com sucesso.`);
    }
  }
  
  console.log("Processo concluído.");
}

run();

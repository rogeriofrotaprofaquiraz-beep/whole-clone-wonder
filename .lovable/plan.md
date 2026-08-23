# Plano de Revisão e Detalhamento do Módulo 00 - Seleção SEDUC 2026

O objetivo é transformar o Módulo 00 em um preparatório completo baseado no Edital SEDUC 2026, com conteúdos detalhados, simulados e atividades práticas.

## Conteúdo Programático (Baseado no Edital)

### 1. Educação Brasileira: Temas Educacionais e Pedagógicos
- **História da Educação:** Movimento dos Pioneiros até os dias atuais.
- **Legislação Federal:** LDB (Lei 9.394/96), Leis 10.639 e 11.645 (Afro e Indígena).
- **Planos Nacionais de Educação:** Análise dos planos 2001-2010, 2014-2025 e o novo 2026-2036.
- **Didática:** Planejamento, estratégias, avaliação e a sala de aula como espaço de aprendizagem.
- **BNCC:** Fundamentos, organização curricular e o Novo Ensino Médio.

### 2. Administração Pública
- **Conceitos e Princípios:** Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.
- **Modelos de Gestão:** Evolução do Patrimonialismo à Gestão Gerencial.
- **Legislação Estadual:** Estatuto dos Servidores do Ceará e Código de Ética.

### 3. Língua Portuguesa
- **Interpretação de Texto:** Estratégias de leitura, inferência e textualidade.
- **Gramática Normativa:** Ortografia, acentuação, concordância, regência e crase.

### 4. Leitura e Interpretação de Dados e Indicadores
- **Sistemas de Avaliação:** SPAECE, SAEB, PISA e ENEM.
- **Estatística:** Interpretação de dados educacionais e indicadores Inep.

## Ações Técnicas

1.  **Atualização do Banco de Dados:**
    - Inserir/Atualizar `course_lessons` para o Módulo 00 com os tópicos acima.
    - Criar `topic_overrides` detalhados para cada tópico com o conteúdo pedagógico extraído do edital.
    - Configurar um `course_assessment` (Simulado Geral) para o Módulo 00 com 30 questões (conforme edital P1).

2.  **Melhorias na Interface:**
    - Garantir que a numeração `01.`, `02.` etc., esteja consistente em todos os tópicos.
    - Adicionar seção de "Simulado do Tópico" ao final de cada aula no Módulo 00.
    - Implementar a visualização de "Progresso por Área" (Didática, Legislação, etc.).

3.  **Simulados e Avaliação:**
    - Cada final de módulo terá um Simulado de 10 questões rápidas.
    - O curso fecha com um Simulado Geral de 30 questões simulando a prova P1.

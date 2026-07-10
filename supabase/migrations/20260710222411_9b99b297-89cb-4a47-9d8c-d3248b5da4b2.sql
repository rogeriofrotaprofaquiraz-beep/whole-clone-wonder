
-- Seed: full chemistry curriculum project (multiple courses + lessons)
WITH new_courses AS (
  INSERT INTO public.courses (title, description, area, level, published)
  VALUES
    ('Química Orgânica — Do Carbono às Biomoléculas',
     'Estruturas, funções e reações orgânicas com aplicações no cotidiano e na biologia.',
     'Química Orgânica', 'Ensino Médio', true),
    ('Química Inorgânica — Ligações, Ácidos e Bases',
     'Tabela periódica avançada, ligações, funções inorgânicas, ácidos, bases, sais e óxidos.',
     'Química Inorgânica', 'Ensino Médio', true),
    ('Físico-Química — Energia, Equilíbrio e Cinética',
     'Termoquímica, cinética química, equilíbrio, eletroquímica e propriedades coligativas.',
     'Físico-Química', 'Ensino Médio', true),
    ('Química Ambiental — Ciência para a Sustentabilidade',
     'Ciclos biogeoquímicos, poluição, água, atmosfera e química verde.',
     'Química Ambiental', 'Ensino Médio', true),
    ('Laboratório de Química — Práticas Seguras',
     'Vidraria, técnicas básicas, segurança, medidas e relatórios experimentais.',
     'Laboratório', 'Ensino Médio', true)
  RETURNING id, title
)
SELECT * FROM new_courses;

-- Lessons for each new course
DO $$
DECLARE c_id uuid;
BEGIN
  -- Orgânica
  SELECT id INTO c_id FROM public.courses WHERE title='Química Orgânica — Do Carbono às Biomoléculas';
  INSERT INTO public.course_lessons (course_id, title, content, order_index, xp_reward, coin_reward) VALUES
    (c_id,'O átomo de carbono e suas ligações','O carbono forma 4 ligações covalentes, gerando cadeias abertas, fechadas, saturadas e insaturadas. Estude hibridizações sp, sp² e sp³.',1,50,20),
    (c_id,'Hidrocarbonetos','Alcanos, alcenos, alcinos e aromáticos: nomenclatura IUPAC, propriedades e usos como combustíveis.',2,60,25),
    (c_id,'Funções oxigenadas','Álcoois, aldeídos, cetonas, ácidos carboxílicos, ésteres e éteres — grupos funcionais e reações típicas.',3,70,30),
    (c_id,'Funções nitrogenadas','Aminas, amidas e nitrilas: caráter básico, importância em fármacos e proteínas.',4,70,30),
    (c_id,'Isomeria','Isomeria plana (cadeia, posição, função) e espacial (geométrica e óptica).',5,80,35),
    (c_id,'Reações orgânicas','Substituição, adição, eliminação e oxirredução aplicadas às principais funções.',6,90,40),
    (c_id,'Bioquímica: carboidratos, lipídios e proteínas','As biomoléculas essenciais e seu papel nos seres vivos.',7,100,50);

  -- Inorgânica
  SELECT id INTO c_id FROM public.courses WHERE title='Química Inorgânica — Ligações, Ácidos e Bases';
  INSERT INTO public.course_lessons (course_id, title, content, order_index, xp_reward, coin_reward) VALUES
    (c_id,'Tabela periódica em profundidade','Períodos, grupos, propriedades periódicas (raio atômico, eletronegatividade, energia de ionização).',1,50,20),
    (c_id,'Ligações químicas','Iônica, covalente e metálica — geometria molecular e polaridade.',2,60,25),
    (c_id,'Funções inorgânicas: ácidos','Definições de Arrhenius, Brønsted-Lowry e Lewis. Força, nomenclatura e usos.',3,70,30),
    (c_id,'Funções inorgânicas: bases','Hidróxidos, força, solubilidade e reações de neutralização.',4,70,30),
    (c_id,'Sais e óxidos','Classificação, formação e reações características.',5,80,35),
    (c_id,'Reações inorgânicas e balanceamento','Métodos de balanceamento e previsão de produtos.',6,90,40);

  -- Físico-Química
  SELECT id INTO c_id FROM public.courses WHERE title='Físico-Química — Energia, Equilíbrio e Cinética';
  INSERT INTO public.course_lessons (course_id, title, content, order_index, xp_reward, coin_reward) VALUES
    (c_id,'Termoquímica','Entalpia, calor de reação, Lei de Hess e diagramas energéticos.',1,60,25),
    (c_id,'Cinética química','Velocidade de reação, fatores que a influenciam e lei de velocidade.',2,70,30),
    (c_id,'Equilíbrio químico','Constante Kc, Kp, princípio de Le Chatelier e deslocamento de equilíbrio.',3,80,35),
    (c_id,'Equilíbrio iônico e pH','Ka, Kb, Kw, escala de pH e soluções-tampão.',4,80,35),
    (c_id,'Eletroquímica','Pilhas, eletrólise, potenciais padrão e aplicações.',5,90,40),
    (c_id,'Propriedades coligativas','Tonoscopia, ebulioscopia, crioscopia e osmose.',6,80,35);

  -- Ambiental
  SELECT id INTO c_id FROM public.courses WHERE title='Química Ambiental — Ciência para a Sustentabilidade';
  INSERT INTO public.course_lessons (course_id, title, content, order_index, xp_reward, coin_reward) VALUES
    (c_id,'Ciclos biogeoquímicos','Ciclos do carbono, nitrogênio, oxigênio e água.',1,50,20),
    (c_id,'Atmosfera e poluição do ar','Efeito estufa, chuva ácida, camada de ozônio e material particulado.',2,60,25),
    (c_id,'Água: tratamento e contaminação','Parâmetros de qualidade, tratamento e principais poluentes.',3,70,30),
    (c_id,'Resíduos sólidos e reciclagem','Classificação, destinação e economia circular.',4,60,25),
    (c_id,'Química verde','Os 12 princípios e casos reais de aplicação industrial.',5,80,35);

  -- Laboratório
  SELECT id INTO c_id FROM public.courses WHERE title='Laboratório de Química — Práticas Seguras';
  INSERT INTO public.course_lessons (course_id, title, content, order_index, xp_reward, coin_reward) VALUES
    (c_id,'Segurança no laboratório','EPIs, pictogramas GHS, descarte e procedimentos de emergência.',1,50,20),
    (c_id,'Vidraria e equipamentos básicos','Béqueres, erlenmeyers, buretas, pipetas — usos corretos.',2,50,20),
    (c_id,'Medidas e algarismos significativos','Precisão, exatidão e tratamento de erros experimentais.',3,60,25),
    (c_id,'Preparo de soluções','Concentração, diluição, titulação e padronização.',4,70,30),
    (c_id,'Separação de misturas','Filtração, destilação, decantação, cromatografia.',5,70,30),
    (c_id,'Relatório científico','Estrutura, discussão de resultados e conclusão.',6,80,35);
END $$;

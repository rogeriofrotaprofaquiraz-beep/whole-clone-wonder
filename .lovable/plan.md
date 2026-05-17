O objetivo é implementar as funcionalidades de Gerenciamento de Usuários e Rastreamento de Atividades solicitadas, além de finalizar o Módulo Administrador para torná-lo funcional e profissional.

### Alterações Propostas

#### 1. Módulo Administrador (AdminPanel.tsx)
- **Renomeação Estrutural**:
    - Renomear as abas para corresponder exatamente ao pedido: "GERENCIAR USUÁRIO" e "RASTREAR ATIVIDADE".
    - Adicionar um painel de **Status do Sistema** (Dashboard) que mostre estatísticas rápidas: total de usuários, ações registradas hoje e nível de atividade.
- **Gerenciamento de Usuários**:
    - Adicionar uma barra de busca (Search) para filtrar usuários por nome ou e-mail.
    - Exibir a data de criação da conta para melhor controle.
    - Implementar a função de exclusão de usuário (com alerta de confirmação).
- **Rastreador de Atividades**:
    - Adicionar filtros por tipo de ação (Login, Mudança de Aba, Batalha, etc.).
    - Melhorar a legibilidade dos logs, separando visualmente as ações automáticas das ações manuais.

#### 2. Monitoramento de Atividade (Index.tsx)
- **Logs Granulares**:
    - Implementar logs para visualização de elementos específicos (ex: "Visualizou Hidrogênio").
    - Registrar o início e fim de batalhas e quizzes.
    - Garantir que todas as mudanças de aba sejam rastreadas com metadados úteis.
- **Persistência e Segurança**:
    - Verificar se os logs estão sendo inseridos corretamente no banco de dados.

#### 3. Experiência de Usuário (AuthSystem.tsx)
- Adicionar log de atividade específico para quando um novo usuário se registra.

### Detalhes Técnicos
- Utilização de `lucide-react` para novos ícones (Search, Trash, Activity).
- Uso de componentes `Input` e `Select` do Shadcn para filtros.
- Refinamento das políticas de RLS no Supabase (se necessário) para garantir que apenas administradores vejam os dados sensíveis.
- O termo "Publicar" será interpretado como a finalização da interface e ativação total dos logs em tempo real.

Ajustarei a interface para incluir um módulo explícito de "ADMINISTRADOR" ao lado do Ranking, focado na manutenção de usuários e acompanhamento de atividades.

### Alterações propostas

#### Interface (Frontend)
- **src/pages/Index.tsx**: 
    - Renomear a aba "ADMIN" para "**ADMINISTRADOR**" para alinhar com a solicitação do usuário.
    - Alterar o ícone da aba para `Shield` (Escudo) para transmitir mais autoridade e clareza.
    - Garantir que a aba esteja posicionada imediatamente após a aba "RANKING".
- **src/components/game/AdminPanel.tsx**:
    - Ajustar o `Tabs` interno para que, quando um Administrador acessar, a aba de "**GESTÃO DE ACESSO**" seja mais intuitiva ou a primeira, dependendo do contexto.
    - Melhorar a visualização da lista de usuários para facilitar a "manutenção" solicitada (edição de níveis de acesso).

#### Funcionalidades (Backend/Lógica)
- A lógica de rastreamento (logs) já está implementada; garantirei que o Administrador tenha acesso rápido a esses logs através do novo módulo.

### Detalhes Técnicos
- Utilizarei os componentes de UI existentes (`Tabs`, `Card`, `Button`).
- A visibilidade continuará restrita a usuários com role `admin` ou `teacher`.
- O Administrador poderá ver as ações de todos os usuários (rastreador) na sub-aba de Logs.

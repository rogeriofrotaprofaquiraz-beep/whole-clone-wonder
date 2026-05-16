O sistema de controle de acesso e logs de atividade foi implementado, mas ele só é visível para usuários com o nível de acesso "Administrador" ou "Professor". Como a tabela de perfis está vazia, nenhum usuário possui esse nível ainda.

Vou ajustar o sistema para que o primeiro usuário que se cadastrar seja automaticamente definido como **Administrador**, permitindo que você visualize as abas de controle.

### Alterações propostas:

1.  **Sistema de Autenticação (`AuthSystem.tsx`)**:
    *   Adicionar uma verificação durante o cadastro: se for o primeiro usuário do sistema, atribuir automaticamente o papel de `admin`. Caso contrário, manter como `student`.
    *   Isso garante que o proprietário do projeto (você) tenha acesso total ao criar a primeira conta.

2.  **Painel Administrativo (`AdminPanel.tsx`)**:
    *   Garantir que as abas "LOGS DE ATIVIDADE" e "GESTÃO DE ACESSO" estejam bem visíveis quando o usuário for um Administrador.
    *   Melhorar o feedback visual para indicar que certas áreas são restritas.

3.  **Fluxo de Usuário**:
    *   Após o cadastro do primeiro usuário, a aba **ADMIN** aparecerá no topo da tela inicial (ao lado de COLEÇÃO, BATALHA, etc.).
    *   Dentro da aba **ADMIN**, você encontrará as sub-abas para gerenciar usuários e ver o histórico.

### Detalhes Técnicos:
*   Usarei `supabase.from('profiles').select('id', { count: 'exact', head: true })` para verificar se a tabela está vazia no momento do cadastro.
*   Atualizarei a lógica de renderização condicional em `Index.tsx` para garantir que a transição de estado após o login seja imediata.

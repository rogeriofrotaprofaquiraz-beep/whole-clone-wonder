# Plan - Expand Module 00 with P2 Chemistry Specifics

Expand "00. Seleção SEDUC 2026" with 17 new topics based on the "Conhecimentos Específicos (P2) – Professor de Química" section of the edital.

## User Review Required

> [!IMPORTANT]
> The new topics (09 to 25) will be added to the existing Module 00, which currently contains the basic P1 content.

- Are you okay with adding 17 more topics to the same module, or should we create a "Module 00.1" for P2? (Defaulting to adding to Module 00 as requested).

## Proposed Changes

### Database (Supabase)
- Add 17 new lessons to `public.course_lessons` for course `bea67f55-082c-47a0-844e-dbd59e2386d7` (Module 00).
- Assign sequential `order_index` starting from 9.
- Include ementas for each based on the edital.

### Pedagogical Content (`src/lib/pedagogicalContent.ts`)
- Create a new `seduc_especifico` pack or map existing ones to these new topics.
- Add specific content for "Evolução histórica", "Ensino de Química", and "Simulado P2".

### Simulations (`src/components/TopicExercise.tsx`)
- Add a new `seduc_p2` bank with 10+ contextualized chemistry questions for the P2 simulation.

### UI
- Verify that `src/pages/CursoDetalhe.tsx` and `src/pages/TopicoDetalhe.tsx` correctly handle the new topics.

## Technical Details
- Course ID: `bea67f55-082c-47a0-844e-dbd59e2386d7`
- The `classifyTopic` function in `src/pages/TopicoDetalhe.tsx` needs to be updated to detect these new topics and use the appropriate pedagogical pack.

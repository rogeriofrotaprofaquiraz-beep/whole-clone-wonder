# Architecture

- Use dnd-kit with a dedicated drag handle for structure reordering; it supports pointer, touch, and keyboard interaction without interfering with editable fields.
- Parse pasted topic lists through the shared parseTopicList utility; it preserves line order and meaningful topic numbering while removing list markers.
- Use the shared slideGroups utility to identify module groups and apply group header images; persist the image in each slide's header so editor previews and published student slides render the same asset without a separate configuration table.
- Keep topic management inside the question bank; group by area and canonical topic using questionTopics, and update topic and legacy lesson together when moving questions so game filters stay aligned.
- All format-compatible questions are shared across games; game labels do not exclude questions, because the student's assigned course disciplines determine the bank.
- Disciplines are rows in question_disciplines mapped to a chem_area; chem_questions.discipline stores the key so disciplines stay editable while games keep filtering by area.
- Use studentQuestions and atomic server reservations for individual question selection; course_question_disciplines and teacher-managed student_game_courses define eligibility, and student_question_history prevents cross-game/device repeats.

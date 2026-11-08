# Architecture

- Use dnd-kit with a dedicated drag handle for structure reordering; it supports pointer, touch, and keyboard interaction without interfering with editable fields.
- Parse pasted topic lists through the shared parseTopicList utility; it preserves line order and meaningful topic numbering while removing list markers.
- Use the shared slideGroups utility to identify module groups and apply group header images; persist the image in each slide's header so editor previews and published student slides render the same asset without a separate configuration table.
- Keep topic management inside the question bank; group by area and canonical topic using questionTopics, and update topic and legacy lesson together when moving questions so game filters stay aligned.
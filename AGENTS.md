# Architecture

- Use dnd-kit with a dedicated drag handle for structure reordering; it supports pointer, touch, and keyboard interaction without interfering with editable fields.
- Parse pasted topic lists through the shared parseTopicList utility; it preserves line order and meaningful topic numbering while removing list markers.
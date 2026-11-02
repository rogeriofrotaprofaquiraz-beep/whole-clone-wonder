/** One pasted line becomes one topic; discard list markers and blank lines. */
export function parseTopicList(text: string): string[] {
  return text.split(/\r?\n/)
    .map(line => line.trim().replace(/^(?:[-•*]\s+|\d+[.)]\s+)/, "").trim())
    .filter(Boolean);
}
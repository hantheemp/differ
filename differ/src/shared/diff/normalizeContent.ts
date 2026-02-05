/**
 * Normalize textual content before line-based diffing.
 *
 * Local examples (documentation only):
 * - "a\r\nb\r\n" => "a\nb\n"
 * - "a   \n" and "a\n" both normalize to "a\n"
 */
export function normalizeContent(content: string): string {
  const normalizedLineEndings = content.replace(/\r\n?/g, '\n')

  const trimmedTrailingWhitespace = normalizedLineEndings
    .split('\n')
    .map((line) => line.replace(/[\t ]+$/g, ''))
    .join('\n')

  const withoutTrailingNewlines = trimmedTrailingWhitespace.replace(/\n+$/g, '')

  return `${withoutTrailingNewlines}\n`
}

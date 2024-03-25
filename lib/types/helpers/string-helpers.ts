/**
 * Represents a set of braces.
 * A brace is defined as an opening and closing character pair.
 * It can be one of the following types:
 * - `{` and `}`
 * - `[` and `]`
 * - `(` and `)`
 * - `<` and `>`
 * - A custom pair of opening and closing characters specified as a string.
 */
export type Braces =
  | ['{', '}']
  | ['[', ']']
  | ['(', ')']
  | ['<', '>']
  | [string, string];

/**
 * Represents a quotation mark.
 * It can be one of the following characters: "'", '"', '`', '´'.
 */
export type Quotation = "'" | '"' | '`' | '´';

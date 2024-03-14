/**
 * Represents the name of a CSS variable.
 * @typedef {`--${string}`} CssVarName
 */
export type CssVarName = `--${string}`;

/**
 * Represents a CSS variable.
 * @typedef {`var(${CssVarName})`} CssVar
 */
export type CssVar = `var(${CssVarName})`;

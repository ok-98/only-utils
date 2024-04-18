import { CssVar, CssVarName } from '../../types/helpers/browser-helpers.ts';
import { areNotDefined, isNotDefined } from '../nullish-utils.js';

const isCssVarName = (value: string): value is CssVarName =>
  value.startsWith('--');
const isCssVar = (value: string): value is CssVar =>
  value.startsWith('var(') && value.endsWith(')');
const cssVarRegex = /var\((--.*?)\)/;

/**
 * Retrieves the name of a CSS variable from a given value.
 * @param value The CSS variable value.
 * @returns The name of the CSS variable, or undefined if the value is not a valid CSS variable.
 */
export const getCssVariableName = (value: CssVar): CssVarName | undefined => {
  if (isCssVar(value)) {
    const match = value.match(cssVarRegex);
    if (match && isCssVarName(match[1])) {
      return match[1];
    }
  }

  return undefined;
};

/**
 * Converts a CSS variable name to a CSS variable.
 * @param value The CSS variable name.
 * @returns The CSS variable.
 */
export const toCssVar = (value: CssVarName): CssVar => `var(${value})`;

/**
 * Retrieves the value of a CSS variable.
 * @param value - The CSS variable or variable name.
 * @param element - The element to get the computed value from. Defaults to `document.body`.
 * @param pseudoElt - The pseudo-element to get the computed value from.
 * @returns The computed value of the CSS variable.
 * @throws {Error} If the function is executed outside of a browser context.
 */
export const getCssVarValue = (
  value: CssVar | CssVarName,
  element?: Element,
  pseudoElt?: string,
) => {
  const cssVarName = isCssVar(value) ? getCssVariableName(value) : value;

  if (isNotDefined(cssVarName)) {
    return undefined;
  }

  if (areNotDefined([document, element])) {
    throw new Error('This function can be only executed in browser context');
  }

  return getComputedValue(cssVarName, element ?? document.body, pseudoElt);
};

/**
 * Retrieves the computed value of a CSS property for a given element.
 * This function can only be executed in a browser context.
 *
 * @param value - The CSS property to retrieve the computed value for.
 * @param element - The element to retrieve the computed value from.
 * @param pseudoElt - Optional. The pseudo-element to retrieve the computed value for.
 * @returns The computed value of the CSS property.
 * @throws {Error} if the function is executed outside of a browser context.
 */
export const getComputedValue = (
  value: string,
  element: Element,
  pseudoElt?: string,
) => {
  if (isNotDefined(window)) {
    throw new Error('This function can be only executed in browser context');
  }

  const computedStyle = window.getComputedStyle(element, pseudoElt);
  return computedStyle.getPropertyValue(value);
};

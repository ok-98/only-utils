import { CssVar, CssVarName } from '../../types/helpers/browser-helpers';
import { areNotDefined, isNotDefined } from '../nullish-utils';

const isCssVarName = (value: string): value is CssVarName =>
  value.startsWith('--');
const isCssVar = (value: string): value is CssVar =>
  value.startsWith('var(') && value.endsWith(')');
const cssVarRegex = /var\((--.*?)\)/;

export const getCssVariableName = (value: CssVar): CssVarName | undefined => {
  if (isCssVar(value)) {
    const match = value.match(cssVarRegex);
    if (match && isCssVarName(match[1])) {
      return match[1];
    }
  }

  return undefined;
};

export const toCssVar = (value: CssVarName): CssVar => `var(${value})`;

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

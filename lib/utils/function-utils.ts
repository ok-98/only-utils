import { ParamArgs } from '../types/helpers/function-helpers.js';

/**
 * An empty arrow function that takes any number of arguments and returns void.
 */
export const EMPTY_ARROW_FUNCTION = (..._: unknown[]): void => {};

/**
 * An empty async arrow function.
 *
 * @param args The arguments passed to the function.
 * @returns A Promise that resolves to void.
 */
export const EMPTY_ASYNC_ARROW_FUNCTION = async (
  ..._: unknown[]
): Promise<void> => {};

/**
 * Represents an empty arrow function.
 */
export const EAF = EMPTY_ARROW_FUNCTION;

/**
 * Represents an empty arrow function.
 */
export const EAAF = EMPTY_ARROW_FUNCTION;

/**
 * Returns the input value as is.
 *
 * @param value - The value to be returned.
 * @returns The input value.
 */
export const identity = <T>(value: T) => value;

/**
 * A utility function that returns the input function itself.
 *
 * @template T - The type of the input function.
 * @template R - The return type of the input function.
 * @param {T} func - The input function.
 * @returns {T} - The input function itself.
 */
export const identityFunc = <T extends (...args: ParamArgs<T>[]) => R, R>(
  func: T,
): T => ((...args: ParamArgs<T>[]) => func(...args)) as T;

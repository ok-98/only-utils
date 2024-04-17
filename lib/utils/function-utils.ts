import { ArrayWithAtLeast2, ParamArgs } from '../types';

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
 * Returns a new function that negates the result of the provided function.
 *
 * @template T - The type of the provided function.
 * @param {T} func - The function to negate.
 * @returns {T} - A new function that negates the result of the provided function.
 */
export const not = <T extends (...args: ParamArgs<T>[]) => boolean>(
  func: T,
): T => ((...args: ParamArgs<T>[]) => !func(...args)) as T;

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

/**
 * Combines multiple functions or boolean values into a single function that returns true
 * if all functions return true or all boolean values are true.
 *
 * @template T - The type of the functions being combined.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions or boolean values to combine.
 * @returns {T} - A function that returns true if all functions return true or all boolean values are true.
 */
export const and = <T extends (...args: (ParamArgs<T> | unknown)[]) => boolean>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  ((...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (typeof funcOrBool === 'function') {
        if ((funcOrBool as T)(...args) === false) {
          return false;
        }
      } else {
        if (!funcOrBool) {
          return false;
        }
      }
    }
    return true;
  }) as T;

/**
 * Combines multiple functions or boolean values into a single function that returns true if any of the functions return true or any of the boolean values are true.
 *
 * @template T - The type of the combined function.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions or boolean values to be combined.
 * @returns {T} - The combined function.
 */
export const or = <T extends (...args: (ParamArgs<T> | unknown)[]) => boolean>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T =>
  ((...args: ParamArgs<T>[]) => {
    for (const funcOrBool of funcs) {
      if (typeof funcOrBool === 'function') {
        if ((funcOrBool as T)(...args)) {
          return true;
        }
      } else {
        if (!!funcOrBool) {
          return true;
        }
      }
    }
    return false;
  }) as T;

/**
 * Performs an exclusive OR (XOR) operation on the provided functions.
 * Returns a new function that returns true if an odd number of the provided functions return true,
 * and false otherwise.
 *
 * @template T - The type of the functions.
 * @param {...ArrayWithAtLeast2<T | unknown>} funcs - The functions to perform the XOR operation on.
 * @returns {T} - A new function that performs the XOR operation.
 */
export const xor = <T extends (...args: (ParamArgs<T> | unknown)[]) => boolean>(
  ...funcs: ArrayWithAtLeast2<T | unknown>
): T => and(not(and(...funcs)), or(...funcs)) as T;

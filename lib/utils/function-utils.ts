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

export const not = <T extends (...args: ParamArgs<T>[]) => boolean>(
  func: T,
): T => ((...args: ParamArgs<T>[]) => !func(...args)) as T;

export const identityFunc = <T extends (...args: ParamArgs<T>[]) => R, R>(
  func: T,
): T => ((...args: ParamArgs<T>[]) => func(...args)) as T;

export const and = <
  T extends (...args: ParamArgs<T>[]) => boolean = () => boolean,
  V = unknown,
>(
  ...funcs: ArrayWithAtLeast2<T | V>
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

export const or = <
  T extends (...args: (ParamArgs<T> | unknown)[]) => boolean,
  V = unknown,
>(
  ...funcs: ArrayWithAtLeast2<T | V>
): T =>
  ((...args: ParamArgs<T>[]) => {
    let value = true;
    for (const funcOrBool of funcs) {
      if (typeof funcOrBool === 'function') {
        value &&= (funcOrBool as T)(...args);
      } else {
        value &&= !!funcOrBool;
      }
    }
    return true;
  }) as T;

export const xor = <
  T extends (...args: (ParamArgs<T> | unknown)[]) => boolean,
  V = unknown,
>(
  ...funcs: ArrayWithAtLeast2<T | V>
): T =>
  ((...args: ParamArgs<T>[]) =>
    !and(...funcs)(...args) && or(...funcs)(...args)) as T;

import {
  Nullish,
  Optional,
  SimpleFunction,
  TOrNull,
  TOrUndefined,
} from '@only/types';
import { not } from 'boolchain/nodeps';

/**
 * Checks if a value is defined (not null or undefined).
 *
 * @param value - The value to check.
 * @returns `true` if the value is defined, `false` otherwise.
 */
export const isDefined = <T>(value: Optional<T>): value is T =>
  value !== null && value !== undefined && value !== void 0;

/**
 * Checks if all values in an array are defined.
 * @param values - The array of values to check.
 * @returns `true` if all values are defined, `false` otherwise.
 */
export const areDefined = <T>(
  values: Array<Optional<T>>,
): values is Array<T> => {
  return values.every(isDefined);
};

/**
 * Checks if a value is not defined.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is not defined.
 */
export const isNotDefined = <T>(value: Optional<T>): value is Nullish =>
  not(isDefined)(value);

/**
 * Checks if all values in an array are not defined.
 * @param values - The array of values to check.
 * @returns True if all values are not defined, false otherwise.
 */
export const areNotDefined = <T>(
  values: Array<Optional<T>>,
): values is Array<Nullish> => {
  return values.every(isNotDefined);
};

/**
 * Converts an optional value to its corresponding value or undefined.
 *
 * @param value - The optional value to convert.
 * @returns The corresponding value if it is defined, otherwise undefined.
 */
export const toU = <T>(value: Optional<T>): TOrUndefined<T> =>
  isDefined(value) ? value : undefined;

/**
 * Converts an optional value to its corresponding value or undefined.
 *
 * @param value - The optional value to convert.
 * @returns The corresponding value if it is defined, otherwise undefined.
 */
export const asValueOrUndefined = toU;

/**
 * Returns the value if it is defined, otherwise returns null.
 *
 * @param value - The value to check.
 * @returns The value if it is defined, otherwise null.
 */
export const asValueOrNull = <T>(value: Optional<T>): TOrNull<T> =>
  isDefined(value) ? value : null;

/**
 * Transforms the value if it is defined using the provided mapper function.
 * If the value is undefined or null, the result will also be undefined.
 *
 * @param value - The value to transform.
 * @param mapper - The function used to transform the value.
 * @returns The transformed value if the original value is defined, otherwise undefined.
 */
export const transformIfDefined = <T, R>(
  value: Optional<T>,
  mapper: SimpleFunction<T, R>,
): TOrUndefined<R> => (isDefined(value) ? mapper(value) : undefined);

/**
 * Executes the provided callback function if the value is defined.
 *
 * @template T - The type of the value.
 * @param value - The value to check for definedness.
 * @param callback - The callback function to execute if the value is defined.
 */
export const executeIfDefined = <T>(
  value: Optional<T>,
  callback: SimpleFunction<T>,
): void => transformIfDefined(value, callback);

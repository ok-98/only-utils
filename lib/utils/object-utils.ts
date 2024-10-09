import { isEqual } from '../generic-utils/generic-utils.js';
import { ArrayWithAtLeast2 } from '../types/helpers/collection-helpers.js';
import {
  Primitive,
  PrimitiveNullish,
  RemoveFunctions,
  RemoveValues,
  SimpleFunction,
} from '../types/index.js';
import { filterNullishArray } from './collection-utils/list-utils.ts';
import { EMPTY_OBJECT } from './const-utils.ts';
import { isNotDefined } from './nullish-utils.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Checks if an object has a specific key.
 *
 * @template T - The type of the object.
 * @param obj - The object to check.
 * @param key - The key to check for.
 * @returns A boolean indicating whether the object has the specified key.
 */
export const hasKey = <T extends object>(obj: T, key: any): key is keyof T =>
  key in obj;

/**
 * Checks if an object is empty.
 * @param value - The object to check.
 * @returns True if the object is empty, false otherwise.
 */
export const isEmptyObject = <T extends object>(value: T): boolean =>
  isEqual(value, EMPTY_OBJECT) ||
  filterNullishArray(Object.values(value)).length === 0;

/**
 * Checks if multiple values are equal.
 *
 * @template T - The type of the values.
 * @param {...ArrayWithAtLeast2<T>} values - The values to compare.
 * @returns {boolean} - True if all values are equal, false otherwise.
 */
export const areEqual = <T>(...values: ArrayWithAtLeast2<T>): boolean => {
  const [reference] = values;
  if (values.length < 2) {
    return false;
  }
  if (values.length === 2) {
    return isEqual(reference, values[1]);
  }
  for (let i = 1; i < values.length; i++) {
    if (!isEqual(reference, values[i])) {
      return false;
    }
  }
  return true;
};

/**
 * Checks if a value is a {@link Primitive} type.
 * @param value - The value to check.
 * @returns Returns true if the value is a primitive type, false otherwise.
 */
export const isPrimitive = (value: unknown): value is Primitive => {
  switch (typeof value) {
    case 'string':
    case 'number':
    case 'bigint':
    case 'boolean':
    case 'symbol':
      return true;
  }
  return false;
};

/**
 * Checks if a value is a {@link Primitive} or null.
 * @param value - The value to check.
 * @returns `true` if the value is a primitive or null, `false` otherwise.
 */
export const isPrimitiveOrNull = (
  value: unknown,
): value is PrimitiveNullish => {
  if (isNotDefined(value)) {
    return true;
  }

  return isPrimitive(value);
};

/**
 * Casts a value to the specified type.
 *
 * @param value - The value to be casted.
 * @returns The casted value.
 * @template T - The type to cast the value to.
 */
export const asType = <T>(value: unknown): T => value as T;

/**
 * Checks if a value matches a specific type.
 *
 * @template T - The type to check against.
 * @param value - The value to check.
 * @param typeChecker - A function that checks if the value matches the specified type.
 * @returns True if the value matches the specified type, false otherwise.
 */
export const isType = <T>(
  value: unknown,
  typeChecker: SimpleFunction<unknown, boolean>,
): value is T => typeChecker(value);

export const removeFunctions = <T>(obj: T): RemoveFunctions<T> => {
  const result = {} as RemoveFunctions<T>;
  for (const key in obj) {
    if (typeof obj[key] !== 'function') {
      result[key] = obj[key] as RemoveFunctions<T>[Extract<keyof T, string>];
    }
  }
  return result;
};

export const removeObjects = <T>(obj: T): RemoveValues<T> => {
  const result = {} as RemoveValues<T>;
  for (const key in obj) {
    if (typeof obj[key] === 'function') {
      result[key] = obj[key] as RemoveValues<T>[Extract<keyof T, string>];
    }
  }
  return result;
};

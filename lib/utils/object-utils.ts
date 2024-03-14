import { isEqual } from 'lodash-es';
import {
  Primitive,
  PrimitiveNullish,
} from '../types/helpers/primitive-helpers';
import { filterNullishArray } from './collection-utils/list-utils';
import { EMPTY_OBJECT } from './const-utils.ts';
import { isNotDefined } from './nullish-utils.ts';

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
export const isEmptyObject = <T extends object>(value: T) =>
  isEqual(value, EMPTY_OBJECT) ||
  filterNullishArray(Object.values(value)).length === 0;

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

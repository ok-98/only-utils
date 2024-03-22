import {
  isEmpty as empty,
  isEqual,
  isFinite,
  isString,
} from '../../lodash-wrapper';
import {
  type ArrayLike,
  type CollectionLike,
  type Optional,
} from '../../types';
import {
  RecursiveArray,
  type SetLike,
} from '../../types/helpers/collection-helpers';
import { Promisify } from '../../types/helpers/function-helpers';
import { EMPTY_OBJECT } from '../const-utils';
import { EMPTY_ARROW_FUNCTION } from '../function-utils';
import { isDefined } from '../nullish-utils';
import { isPositive } from '../number-utils';

/**
 * Checks if a value is an array.
 *
 * @param value - The value to check.
 * @returns `true` if the value is an array, `false` otherwise.
 */
export const isArray = <T>(value: Optional<CollectionLike<T>>): value is T[] =>
  Array.isArray(value);

/**
 * Checks if the given value is a Set.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a Set, `false` otherwise.
 */
export const isSet = <T>(value: Optional<CollectionLike<T>>): value is Set<T> =>
  value instanceof Set;

/**
 * Checks if the given value is an instance of Map.
 *
 * @template T - The type of the map keys.
 * @template R - The type of the map values.
 * @param value - The value to check.
 * @returns True if the value is an instance of Map, false otherwise.
 */
export const isMap = <T, R>(
  value: Optional<CollectionLike<R, T>>,
): value is Map<T, R> => value instanceof Map;

const _asArray = <Value, Key = unknown>(
  value: Optional<CollectionLike<Value, Key>>,
  notCopy: boolean = false,
): Value[] => {
  if (isDefined(value)) {
    if (isSet(value) || isArray(value)) {
      return notCopy && isArray(value) ? value : [...value];
    }

    if (isMap(value)) {
      return [...value.values()];
    }

    return [value];
  }

  return [];
};

/**
 * Converts a collection-like value into an array.
 *
 * @template Value - The type of values in the collection.
 * @template Key - The type of keys in the collection.
 * @param {Optional<CollectionLike<Value, Key>>} value - The collection-like value to convert.
 * @returns {Value[]} - The converted array.
 */
export const asArray = <Value, Key = unknown>(
  value: Optional<CollectionLike<Value, Key>>,
): Value[] => _asArray(value);

/**
 * Filters out nullish values from an array-like object.
 *
 * @template Value - The type of values in the array.
 * @param value - The array-like object to filter.
 * @returns A new array containing only the non-nullish values.
 */
export const filterNullishArray = <Value>(value: ArrayLike<Optional<Value>>) =>
  _asArray(value, true).filter(isDefined);

/**
 * Filters out nullish values from a Set-like collection.
 *
 * @template Value - The type of values in the collection.
 * @param value - The Set-like collection to filter.
 * @returns A new Set containing only the non-nullish values from the input collection.
 */
export const filterNullishSet = <Value>(value: SetLike<Optional<Value>>) => {
  const collection = new Set<Value>();

  if (isDefined(value)) {
    if (isSet(value)) {
      value.forEach((v) => {
        if (isDefined(v)) {
          collection.add(v);
        }
      });
    } else {
      collection.add(value);
    }
  }

  return collection;
};

/**
 * Filters out nullish values from a map and returns a new map with the non-nullish values.
 *
 * @template Key The type of the keys in the map.
 * @template Value The type of the values in the map.
 * @param value The map to filter.
 * @returns A new map with the non-nullish values.
 */
export const filterNullishMap = <Key, Value>(
  value: Map<Key, Optional<Value>>,
) => {
  const collection = new Map<Key, Value>();

  if (isDefined(value)) {
    value.forEach((v, k) => {
      if (isDefined(v)) {
        collection.set(k, v);
      }
    });
  }

  return collection;
};

/**
 * Checks if a collection-like value is empty.
 *
 * @template Value - The type of values in the collection.
 * @template Key - The type of keys in the collection.
 * @param value - The collection-like value to check.
 * @returns A boolean indicating whether the collection-like value is empty.
 */
export const isEmpty = <Value, Key = unknown>(
  value: CollectionLike<Value, Key>,
): boolean => {
  if (isArray(value) || isMap(value) || isSet(value)) {
    return empty(value);
  }

  if (isString(value)) {
    return value.trim().length === 0;
  }

  if (isEqual(value, EMPTY_OBJECT) || isEqual(value, EMPTY_ARROW_FUNCTION)) {
    return true;
  }

  return false;
};

/**
 * Checks if a collection is non-empty.
 *
 * @param value - The collection to check.
 * @returns `true` if the collection is non-empty, `false` otherwise.
 */
export const nonEmpty = <Value, Key = unknown>(
  value: CollectionLike<Value, Key>,
): boolean => !isEmpty(value);

/**
 * Converts an empty list to undefined.
 *
 * @param value - The list to convert.
 * @returns The converted list, or undefined if the list is empty.
 */
export const emptyListToUndefined = <Value>(value: CollectionLike<Value>) =>
  isEmpty(value) ? undefined : value;

/**
 * Recursively maps the elements of an array or a nested array using a mapper function.
 *
 * @template T - The type of the elements in the input array.
 * @template R - The type of the elements in the output array.
 * @param {RecursiveArray<T>} value - The input array or nested array to be mapped.
 * @param {(v: T) => R} mapper - The function used to map each element of the array.
 * @returns {RecursiveArray<R>} - The resulting array with mapped elements.
 */
export const mapRecursiveArray = <T, R>(
  value: RecursiveArray<T>,
  mapper: (v: T) => R,
): RecursiveArray<R> => {
  if (!isDefined(value)) {
    return undefined;
  }

  if (isArray(value)) {
    return value.map((v) => mapRecursiveArray(v, mapper));
  }

  return mapper(value);
};

/**
 * Checks if a collection has more than a specified number of elements.
 *
 * @template T - The type of elements in the collection.
 * @param value - The collection to check.
 * @param x - The number of elements to compare against.
 * @param equals - Optional. If true, includes the case where the collection has exactly x elements.
 * @returns True if the collection has more than x elements (or exactly x elements if equals is true), false otherwise.
 */
export const hasMoreThan = <T>(
  value: CollectionLike<T>,
  x: number,
  equals: boolean = false,
) =>
  equals ? _asArray(value, true).length >= x : _asArray(value, true).length > x;

/**
 * Checks if the given collection has less than a specified number of elements.
 *
 * @template T - The type of elements in the collection.
 * @param value - The collection to check.
 * @param x - The maximum number of elements allowed.
 * @param equals - Optional. If true, includes collections with exactly x elements.
 * @returns True if the collection has less than x elements (or x elements if equals is true), false otherwise.
 */
export const hasLessThan = <T>(
  value: CollectionLike<T>,
  x: number,
  equals: boolean = false,
) =>
  equals ? _asArray(value, true).length <= x : _asArray(value, true).length < x;

/**
 * Checks if a collection has exactly a specified number of elements.
 *
 * @template T - The type of elements in the collection.
 * @param value - The collection to check.
 * @param x - The number of elements to check for.
 * @returns `true` if the collection has exactly `x` elements, `false` otherwise.
 */
export const hasExactly = <T>(value: CollectionLike<T>, x: number) =>
  _asArray(value, true).length === x;

/**
 * Checks if the length of a collection-like value falls within a specified range.
 * @param value - The collection-like value to check.
 * @param range - The range of acceptable lengths, specified as a tuple of two numbers [start, end].
 * @param matchType - The type of matching to perform: 'including' or 'excluding'. Defaults to 'including'.
 * @returns `true` if the length of the collection-like value falls within the specified range, `false` otherwise.
 */
export const hasBetween = <T>(
  value: CollectionLike<T>,
  range: [number, number],
  matchType?: 'including' | 'excluding',
) => {
  const arr = _asArray(value, true);
  const [start, end] = range.map((num) =>
    isFinite(num) && isPositive(num) ? num : 0,
  );
  if (matchType === 'including') {
    return arr.length >= start && arr.length <= end;
  }

  if (matchType === 'excluding') {
    return arr.length > start && arr.length < end;
  }

  return arr.length >= start && arr.length < end;
};

/**
 * Checks if a value exists in a collection within a specified approximate range.
 *
 * @template T - The type of elements in the collection.
 * @param value - The collection to search in.
 * @param x - The value to search for.
 * @param approxRange - The approximate range within which to search for the value.
 * @returns A boolean indicating whether the value exists within the approximate range.
 */
export const hasApproximately = <T>(
  value: CollectionLike<T>,
  x: number,
  approxRange: number,
) => hasBetween(value, [x - approxRange, x + approxRange], 'including');

export const asyncForEach = async <T>(
  array: T[],
  callback: Promisify<(item: T, index: number, array: T[]) => void>,
): Promise<void> => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
};

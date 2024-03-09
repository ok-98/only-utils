import { isEmpty as empty, isEqual, isFinite, isString } from 'lodash-es';
import {
  type ArrayLike,
  type CollectionLike,
  type Optional,
} from '../../types';
import {
  RecursiveArray,
  type SetLike,
} from '../../types/helpers/collection-helpers';
import { EMPTY_OBJECT } from '../const-utils';
import { EMPTY_ARROW_FUNCTION } from '../function-utils';
import { isDefined } from '../nullish-utils';
import { isPositive } from '../number-utils';

export const isArray = <T>(value: Optional<CollectionLike<T>>): value is T[] =>
  Array.isArray(value);
export const isSet = <T>(value: Optional<CollectionLike<T>>): value is Set<T> =>
  value instanceof Set;
export const isMap = <T, R>(
  value: Optional<CollectionLike<R, T>>,
): value is Map<T, R> => value instanceof Map;

const _asArray = <Value, Key = unknown>(
  value: Optional<CollectionLike<Value, Key>>,
  notCopy: boolean = false,
): Value[] => {
  if (isDefined(value)) {
    if (isSet(value) || isArray(value)) {
      return !notCopy && isArray(value) ? value : [...value];
    }

    if (isMap(value)) {
      return [...value.values()];
    }

    return [value];
  }

  return [];
};

/**
 *
 * @param value collection or value
 * @returns A new Array created from the provided collection or value
 */
export const asArray = <Value, Key = unknown>(
  value: Optional<CollectionLike<Value, Key>>,
): Value[] => _asArray(value, true);

export const filterNullishArray = <Value>(value: ArrayLike<Optional<Value>>) =>
  _asArray(value, true).filter(isDefined);
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

export const nonEmpty = <Value, Key = unknown>(
  value: CollectionLike<Value, Key>,
): boolean => !isEmpty(value);

export const emptyListToUndefined = <Value>(value: CollectionLike<Value>) =>
  isEmpty(value) ? undefined : value;

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

export const hasMoreThan = <T>(
  value: CollectionLike<T>,
  x: number,
  equals: boolean = false,
) =>
  equals ? _asArray(value, true).length >= x : _asArray(value, true).length > x;

export const hasLessThan = <T>(
  value: CollectionLike<T>,
  x: number,
  equals: boolean = false,
) =>
  equals ? _asArray(value, true).length <= x : _asArray(value, true).length < x;

export const hasExactly = <T>(value: CollectionLike<T>, x: number) =>
  _asArray(value, true).length === x;

export const hasBetween = <T>(
  value: CollectionLike<T>,
  range: [number, number],
  matchType: 'including' | 'excluding' = 'including',
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

export const hasApproximatly = <T>(
  value: CollectionLike<T>,
  x: number,
  approxRange: number,
) => hasBetween(value, [x - approxRange, x + approxRange]);

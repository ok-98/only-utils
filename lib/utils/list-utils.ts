import {type ArrayLike, type CollectionLike, type Optional} from '../types';
import {type SetLike} from '../types/helpers/collection-helpers';
import {isDefined} from './nullish-utils';

export const isArray = <T>(value: Optional<CollectionLike<T>>): value is T[] => Array.isArray(value);
export const isSet = <T>(value: Optional<CollectionLike<T>>): value is Set<T> => value instanceof Set;
export const isMap = <T, R>(value: Optional<CollectionLike<R, T>>): value is Map<T, R> => value instanceof Map;

/**
 *
 * @param value collection or value
 * @returns A new Array created from the provided collection or value
 */
export const asArray = <Value, Key = unknown>(value: Optional<CollectionLike<Value, Key>>): Value[] => {
  if (isDefined(value)) {
    if (isSet(value) || isArray(value)) {
      return [...value];
    }

    if (isMap(value)) {
      return [...value.values()];
    }

    return [value];
  }

  return [];
};

export const nonEmptyArray = <Value>(value: ArrayLike<Optional<Value>>) => asArray(value).filter(isDefined);
export const nonEmptySet = <Value>(value: SetLike<Optional<Value>>) => new Set(asArray(value).filter(isDefined));
export const nonEmptyMap = <Key, Value>(value: Map<Key, Optional<Value>>) => new Map([...value.entries()].filter(([, value]) => isDefined(value))) as Map<Key, Value>;


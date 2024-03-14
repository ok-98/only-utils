import type { Nullish, Optional, TOrNull, TOrUndefined } from '../types';
import { SimpleFunction } from '../types/helpers/type-helpers';

export const isDefined = <T>(value: Optional<T>): value is T =>
  value !== null && value !== undefined;

export const areDefined = <T>(
  values: Array<Optional<T>>,
): values is Array<T> => {
  return values.every(isDefined);
};

export const isNotDefined = <T>(value: Optional<T>): value is Nullish =>
  !isDefined(value);

export const areNotDefined = <T>(
  values: Array<Optional<T>>,
): values is Array<Nullish> => {
  return values.every(isDefined);
};

export const toU = <T>(value: Optional<T>): TOrUndefined<T> =>
  isDefined(value) ? value : undefined;

export const asValueOrUndefined = toU;

export const asValueOrNull = <T>(value: Optional<T>): TOrNull<T> =>
  isDefined(value) ? value : null;

export const transformIfDefined = <T, R>(
  value: Optional<T>,
  mapper: SimpleFunction<T, R>,
): TOrUndefined<R> => (isDefined(value) ? mapper(value) : undefined);

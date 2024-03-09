import type { Nullish, Optional, TOrNull, TOrUndefined } from '../types';
import { SimpleFunction } from '../types/helpers/type-helpers';

export const isDefined = <T>(value: Optional<T>): value is T =>
  value !== null && value !== undefined;

export const isNotDefined = <T>(value: Optional<T>): value is Nullish =>
  !isDefined(value);

export const toU = <T>(value: Optional<T>): TOrUndefined<T> =>
  isDefined(value) ? value : undefined;

export const toUndefined = toU;

export const toNull = <T>(value: Optional<T>): TOrNull<T> =>
  isDefined(value) ? value : null;

export const transformIfDefined = <T, R>(
  value: Optional<T>,
  mapper: SimpleFunction<T, R>,
): TOrUndefined<R> => (isDefined(value) ? mapper(value) : undefined);

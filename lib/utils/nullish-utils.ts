import type {
  Optional, TOrUndefined, TOrNull, Nullish,
} from '../types';

export const isDefined = <T>(value: Optional<T>): value is T => value !== null && value !== undefined;
export const isUndefined = <T>(value: Optional<T>): value is Nullish => !isDefined(value);

export const toU = <T>(value: Optional<T>): TOrUndefined<T> => isDefined(value) ? value : undefined;
export const toUndefined = toU;
export const toNull = <T>(value: Optional<T>): TOrNull<T> => isDefined(value) ? value : null;

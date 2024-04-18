import { hasKey, isDefined, isNotDefined } from '../utils/index.ts';

export const isEmpty = (value: unknown): boolean => {
  if (isNotDefined(value)) {
    return false;
  }

  try {
    if (typeof value === 'string' || value instanceof String) {
      return value.length === 0;
    }

    if (typeof value === 'number' || value instanceof Number) {
      return toNumber(value) === 0;
    }

    if (hasKey(value as any, 'length')) {
      return (value as any).length === 0;
    }

    if (hasKey(value as any, 'size')) {
      return (value as any).size === 0;
    }

    if (typeof value === 'object') {
      return Object.keys(value as object).length === 0;
    }
  } catch (e) {}

  return false;
};

export const isEqual = (value: unknown, other: unknown): boolean => {
  if (value === other) {
    return true;
  }

  if (
    value === null ||
    other === null ||
    typeof value !== 'object' ||
    typeof other !== 'object'
  ) {
    return value !== value && other !== other;
  }

  const valueKeys = Object.keys(value);
  const otherKeys = Object.keys(other);

  if (valueKeys.length !== otherKeys.length) {
    return false;
  }

  for (const key of valueKeys) {
    if (!isEqual((value as any)[key], (other as any)[key])) {
      return false;
    }
  }

  return true;
};

export const isNumber = (value: unknown): value is number | Number => {
  return typeof value === 'number' || value instanceof Number;
};

const toNumber = (value: number | Number): number => value.valueOf();

export const isFinite = (value: unknown): value is number => {
  if (isNumber(value)) {
    return Number.isFinite(toNumber(value));
  }

  return false;
};

export const isString = (value: unknown): value is string => {
  return (
    isDefined(value) &&
    (typeof value === 'string' ||
      value instanceof String ||
      '' + value === value)
  );
};

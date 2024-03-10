import { isEqual } from 'lodash-es';
import {
  Primitive,
  PrimitiveNullish,
} from '../types/helpers/primitive-helpers';
import { filterNullishArray } from './collection-utils/list-utils';
import { EMPTY_OBJECT } from './const-utils.ts';
import { isNotDefined } from './nullish-utils.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasKey = <T extends object>(obj: T, key: any): key is keyof T =>
  key in obj;

export const isEmptyObject = <T extends object>(value: T) =>
  isEqual(value, EMPTY_OBJECT) ||
  filterNullishArray(Object.values(value)).length === 0;

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

export const isPrimitiveOrNull = (
  value: unknown,
): value is PrimitiveNullish => {
  if (isNotDefined(value)) {
    return true;
  }

  return isPrimitive(value);
};

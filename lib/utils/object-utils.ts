import { isEqual } from 'lodash-es';
import { EMPTY_OBJECT } from './const-utils.ts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hasKey = <T extends object>(obj: T, key: any): key is keyof T =>
  key in obj;

export const isEmptyObject = (value: unknown) =>
  isEqual(value, EMPTY_OBJECT) || Object.keys(value).length === 0;

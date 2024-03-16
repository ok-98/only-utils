import { describe, expect, it } from 'vitest';
import { EMPTY_OBJECT } from './const-utils';
import {
  areEqual,
  asType,
  hasKey,
  isEmptyObject,
  isType,
} from './object-utils';

describe('hasKey', () => {
  it('should return true if the object has the key', () => {
    const obj = { a: 1, b: 2 };
    expect(hasKey(obj, 'a')).toBe(true);
  });

  it('should return false if the object does not have the key', () => {
    const obj = { a: 1, b: 2 };
    expect(hasKey(obj, 'c')).toBe(false);
  });

  it('should handle keys that exist on the prototype chain', () => {
    const obj = {};
    expect(hasKey(obj, 'toString')).toBe(true);
  });
});

describe('isEmptyObject', () => {
  it('should return true for an empty object', () => {
    expect(isEmptyObject({})).toBe(true);
  });

  it('should return true for the EMPTY_OBJECT', () => {
    expect(isEmptyObject(EMPTY_OBJECT)).toBe(true);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmptyObject({ a: 1 })).toBe(false);
  });

  it('should return true for an object with only undefined values', () => {
    expect(isEmptyObject({ a: undefined })).toBe(true);
  });
});

describe('areEqual', () => {
  it('should return true when all values are equal', () => {
    const value1 = { a: 1, b: 2 };
    const value2 = { a: 1, b: 2 };
    const value3 = { a: 1, b: 2 };
    expect(areEqual(value1, value2, value3)).toBe(true);
  });

  it('should return false when at least one value is not equal', () => {
    const value1 = { a: 1, b: 2 };
    const value2 = { a: 1, b: 2 };
    const value3 = { a: 1, b: 3 };
    expect(areEqual(value1, value2, value3)).toBe(false);
  });

  it('should return false when less than 2 values are provided', () => {
    const value1 = { a: 1, b: 2 };
    expect(areEqual(...([value1] as unknown as [number, number]))).toBe(false);
  });

  it('should return true when only 2 values are provided and they are equal', () => {
    const value1 = { a: 1, b: 2 };
    const value2 = { a: 1, b: 2 };
    expect(areEqual(value1, value2)).toBe(true);
  });

  it('should return false when only 2 values are provided and they are not equal', () => {
    const value1 = { a: 1, b: 2 };
    const value2 = { a: 1, b: 3 };
    expect(areEqual(value1, value2)).toBe(false);
  });
});

describe('asType', () => {
  it('should return the value with the specified type', () => {
    const value = 'test';
    const result = asType<string>(value);
    expect(result).toBe(value);
  });

  it('should return the value with the specified type when the value is null', () => {
    const value = null;
    const result = asType<null>(value);
    expect(result).toBe(value);
  });

  it('should return the value with the specified type when the value is undefined', () => {
    const value = undefined;
    const result = asType<undefined>(value);
    expect(result).toBe(value);
  });

  it('should return the value with the specified type when the value is a number', () => {
    const value = 123;
    const result = asType<number>(value);
    expect(result).toBe(value);
  });

  it('should return the value with the specified type when the value is a boolean', () => {
    const value = true;
    const result = asType<boolean>(value);
    expect(result).toBe(value);
  });

  it('should return the value with the specified type when the value is an object', () => {
    const value = { a: 1, b: 2 };
    const result = asType<{ a: number; b: number }>(value);
    expect(result).toBe(value);
  });

  it('should return the value with the specified type when the value is an array', () => {
    const value = [1, 2, 3];
    const result = asType<number[]>(value);
    expect(result).toBe(value);
  });
});

describe('isType', () => {
  it('should return true if the value matches the type', () => {
    const value = 123;
    const typeChecker = (val: unknown): val is number =>
      typeof val === 'number';
    expect(isType<number>(value, typeChecker)).toBe(true);
  });

  it('should return false if the value does not match the type', () => {
    const value = 'test';
    const typeChecker = (val: unknown): val is number =>
      typeof val === 'number';
    expect(isType<number>(value, typeChecker)).toBe(false);
  });
});

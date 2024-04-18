import { describe, expect, it } from 'vitest';
import {
  isEmpty,
  isEqual,
  isFinite,
  isNumber,
  isString,
} from './generic-utils.ts';

describe('isString', () => {
  it('should return true for a string value', () => {
    expect(isString('hello')).toBe(true);
  });

  it('should return true for a string object', () => {
    expect(isString(new String('hello'))).toBe(true);
  });

  it('should return false for a non-string value', () => {
    expect(isString(123)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isString(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isString(null)).toBe(false);
  });
});

describe('isNumber', () => {
  it('should return true for a number value', () => {
    expect(isNumber(123)).toBe(true);
  });

  it('should return true for a number object', () => {
    expect(isNumber(new Number(123))).toBe(true);
  });

  it('should return false for a non-number value', () => {
    expect(isNumber('hello')).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isNumber(null)).toBe(false);
  });
});

describe('isFinite', () => {
  it('should return true for a finite number', () => {
    expect(isFinite(123)).toBe(true);
  });

  it('should return true for a finite number object', () => {
    expect(isFinite(new Number(123))).toBe(true);
  });

  it('should return false for Infinity', () => {
    expect(isFinite(Infinity)).toBe(false);
  });

  it('should return false for -Infinity', () => {
    expect(isFinite(-Infinity)).toBe(false);
  });

  it('should return false for NaN', () => {
    expect(isFinite(NaN)).toBe(false);
  });

  it('should return false for a non-number value', () => {
    expect(isFinite('hello')).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isFinite(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isFinite(null)).toBe(false);
  });
});

describe('isEqual', () => {
  it('should return true for equal primitive values', () => {
    expect(isEqual(123, 123)).toBe(true);
    expect(isEqual('hello', 'hello')).toBe(true);
    expect(isEqual(true, true)).toBe(true);
  });

  it('should return true for equal object values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };
    expect(isEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for different primitive values', () => {
    expect(isEqual(123, 456)).toBe(false);
    expect(isEqual('hello', 'world')).toBe(false);
    expect(isEqual(true, false)).toBe(false);
  });

  it('should return false for different object values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'Jane', age: 25 };
    expect(isEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for NaN values', () => {
    expect(isEqual(NaN, NaN)).toBe(true);
  });

  it('should return false for NaN and non-NaN values', () => {
    expect(isEqual(NaN, 123)).toBe(false);
    expect(isEqual(NaN, 'hello')).toBe(false);
    expect(isEqual(NaN, true)).toBe(false);
  });

  it('should return false for null and non-null values', () => {
    expect(isEqual(null, 123)).toBe(false);
    expect(isEqual(null, 'hello')).toBe(false);
    expect(isEqual(null, true)).toBe(false);
  });

  it('should return false for undefined and non-undefined values', () => {
    expect(isEqual(undefined, 123)).toBe(false);
    expect(isEqual(undefined, 'hello')).toBe(false);
    expect(isEqual(undefined, true)).toBe(false);
  });
});

describe('isEmpty', () => {
  it('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return true for a number value of 0', () => {
    expect(isEmpty(0)).toBe(true);
  });

  it('should return false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it('should return false for a non-empty string', () => {
    expect(isEmpty('hello')).toBe(false);
  });

  it('should return false for a non-empty object', () => {
    expect(isEmpty({ name: 'John' })).toBe(false);
  });

  it('should return false for a non-zero number value', () => {
    expect(isEmpty(123)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isEmpty(undefined)).toBe(false);
  });

  it('should return false for null', () => {
    expect(isEmpty(null)).toBe(false);
  });
});

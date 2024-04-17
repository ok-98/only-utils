import { describe, expect, it } from 'vitest';
import {
  and,
  EAAF,
  EAF,
  EMPTY_ARROW_FUNCTION,
  EMPTY_ASYNC_ARROW_FUNCTION,
  identity,
  identityFunc,
  not,
  or,
  xor,
} from './function-utils';

describe('function-utils', () => {
  describe('EMPTY_ARROW_FUNCTION', () => {
    it('should return undefined', () => {
      expect(EMPTY_ARROW_FUNCTION()).toBeUndefined();
    });
  });

  describe('EMPTY_ASYNC_ARROW_FUNCTION', () => {
    it('should return a promise that resolves to undefined', async () => {
      await expect(EMPTY_ASYNC_ARROW_FUNCTION()).resolves.toBeUndefined();
    });
  });

  describe('EAF', () => {
    it('should return undefined', () => {
      expect(EAF()).toBeUndefined();
    });
  });

  describe('EAAF', () => {
    it('should return undefined', () => {
      expect(EAAF()).toBeUndefined();
    });
  });

  describe('identity', () => {
    it('should return the same value that was passed in', () => {
      const value = 'test';
      expect(identity(value)).toBe(value);
    });
  });

  describe('not', () => {
    it('should return the negation of the input function', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isOdd = not(isEven);
      expect(isOdd(3)).toBe(true);
      expect(isOdd(4)).toBe(false);
    });
  });

  describe('identityFunc', () => {
    it('should return the same function that was passed in', () => {
      const func = (x: number) => x * 2;
      const result = identityFunc(func);
      expect(result(2)).toBe(func(2));
    });
  });

  describe('and', () => {
    it('should return true if all functions return true', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isPositive = (num: number) => num > 0;
      const isEvenAndPositive = and(isEven, isPositive);
      expect(isEvenAndPositive(4)).toBe(true);
      expect(isEvenAndPositive(3)).toBe(false);
    });

    it('should return false if any function returns false', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isPositive = (num: number) => num > 0;
      const isEvenAndPositive = and(isEven, isPositive);
      expect(isEvenAndPositive(4)).toBe(true);
      expect(isEvenAndPositive(-3)).toBe(false);
    });
  });

  describe('or', () => {
    it('should return true if any function returns true', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isPositive = (num: number) => num > 0;
      const isEvenOrPositive = or(isEven, isPositive);
      expect(isEvenOrPositive(4)).toBe(true);
      expect(isEvenOrPositive(-2)).toBe(true);
    });

    it('should return false if all functions return false', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isPositive = (num: number) => num > 0;
      const isEvenOrPositive = or(isEven, isPositive);
      expect(isEvenOrPositive(-3)).toBe(false);
      expect(isEvenOrPositive(-23)).toBe(false);
    });

    it('should return true if any value is truthy', () => {
      const value1 = true;
      const value2 = 1;
      const value3 = 'test';
      const value4 = null;
      const value5 = undefined;
      const value6 = 0;
      const value7 = false;
      const value8 = '';
      const value9 = NaN;
      const value10 = [] as unknown[];
      const value11 = {};
      const value12 = () => {};
      const value13 = Symbol();
      const value14 = new Date();
      const value15 = /test/;
      const value16 = new Map();
      const value17 = new Set();
      const value18 = new Error();
      const value19 = new Promise(() => {});
      const isTruthy = or(
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
        value11,
        value12,
        value13,
        value14,
        value15,
        value16,
        value17,
        value18,
        value19,
      );
      expect(isTruthy()).toBe(true);
    });

    it('should return false if all values are falsy', () => {
      const value1 = false;
      const value2 = 0;
      const value3 = '';
      const value4 = null;
      const value5 = undefined;
      const value6 = NaN;
      const isTruthy = or(value1, value2, value3, value4, value5, value6);
      expect(isTruthy()).toBe(false);
    });
  });

  describe('xor', () => {
    it('should return true if exactly one function returns true', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isPositive = (num: number) => num > 0;
      const isEvenXorPositive = xor(isEven, isPositive);
      expect(isEvenXorPositive(-2)).toBe(true);
      expect(isEvenXorPositive(3)).toBe(true);
      expect(isEvenXorPositive(0)).toBe(true);
    });

    it('should return false if no function or more than one function returns true', () => {
      const isEven = (num: number) => num % 2 === 0;
      const isPositive = (num: number) => num > 0;
      const isEvenXorPositive = xor(isEven, isPositive);
      expect(isEvenXorPositive(4)).toBe(false);
      expect(isEvenXorPositive(-3)).toBe(false);
    });
  });
});

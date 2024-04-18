import { describe, expect, it } from 'vitest';
import {
  EAAF,
  EAF,
  EMPTY_ARROW_FUNCTION,
  EMPTY_ASYNC_ARROW_FUNCTION,
  identity,
} from './function-utils.ts';

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
});
